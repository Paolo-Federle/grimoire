import { fireEvent, render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../../../App';
import Order from '../../../pages/Mage/Order';
import { MinistryData } from '../../../Data/Mage/MinistryData';
import { MinistryDetailData } from '../../../Data/Mage/MinistryDetailData';
import { mageLexyconData } from '../../../Data/LexyconData';
import { getLexyconPath } from '../../../pages/Generale/lexyconLinks';
import { clearFavorites, listFavorites } from '../../../favoritesStore';
import { PATHS } from '../../../pages/path';
import { slugify } from '../../../utils';

function renderRoute(element, route = PATHS.MAGE.ORDER) {
    return render(<MemoryRouter initialEntries={[route]} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>{element}</MemoryRouter>);
}

test('preserves the four source profiles, membership benefits and faction relationships', () => {
    expect(MinistryDetailData.map(item => item.Name)).toEqual(MinistryData.map(item => item.Name));
    expect(new Set(MinistryData.map(item => slugify(item.Name))).size).toBe(4);
    expect(MinistryData.map(item => [item.Exarch, item.Prelacy, item['Rote Skills'], item.Book])).toEqual([
        ['The Unity', 'Obligation', 'Politics, Persuasion, Empathy', 'SotT 56-59'],
        ['The Eye', 'Vision', 'Investigation, Stealth, Subterfuge', 'SotT 60-63'],
        ['The Father', 'Doctrine', 'Academics, Occult, Expression', 'SotT 64-67'],
        ['The General', 'Fury', 'Athletics, Larceny, Intimidation', 'SotT 68-71'],
    ]);
    MinistryDetailData.forEach((ministry, index) => {
        for (const field of ['Description', 'Overview', 'Members', 'Philosophy', 'Rituals', 'Titles']) {
            expect(ministry[field].length).toBeGreaterThan(0);
            ministry[field].forEach(block => expect(block.text.trim()).not.toBe(''));
        }
        expect(ministry.Titles.filter(block => block.type === 'heading')).toHaveLength([3, 2, 3, 5][index]);
        expect(ministry.Relations).toHaveLength(5);
        expect(new Set(ministry.Relations.map(item => item.Name)).size).toBe(5);
        expect(ministry.StatusMerits).toContain(['Hive-Souled', 'Grigori', 'Hollow One', 'Myrmidon'][index]);
        ministry.Relations.forEach(relation => {
            expect(relation.Name).not.toBe(ministry.Name);
            if (relation.Name === 'Lesser Ministries') expect(relation.link).toBeNull();
            else if (relation.Name === 'The Pentacle') expect(relation.link).toBe(PATHS.MAGE.ORDER);
            else expect(MinistryData.find(item => item.Name === relation.Name)?.link).toBe(relation.link);
        });
        expect(JSON.stringify(ministry)).not.toMatch(/\uFFFD|Hituals|Hame System|Qrembcy|CHAPTER TWO|Chapter Two|\w-\s+\w/);
        expect(JSON.stringify(ministry)).not.toMatch(/<[^>]+>|\\n\\n/);
    });
    expect(MinistryDetailData[2].Notes.map(block => block.text).join(' ')).toContain('Teraphim');
});

test('links all four ministries and can save and remove their favorites independently of Orders', () => {
    clearFavorites();
    renderRoute(<Order />);
    const tables = screen.getAllByRole('table');
    expect(tables).toHaveLength(2);
    expect(within(tables[0]).getAllByRole('row')).toHaveLength(6);
    expect(within(tables[1]).getAllByRole('row')).toHaveLength(5);
    MinistryData.forEach(ministry => {
        const link = screen.getByRole('link', { name: ministry.Name, exact: true });
        expect(link).toHaveAttribute('href', ministry.link);
        fireEvent.click(within(link.closest('tr')).getByRole('button', { name: 'add favorite' }));
    });
    expect(listFavorites().map(item => item.key).sort()).toEqual(MinistryData.map(item => item.link).sort());
    MinistryData.forEach(ministry => {
        const row = screen.getByRole('link', { name: ministry.Name, exact: true }).closest('tr');
        fireEvent.click(within(row).getByRole('button', { name: 'remove favorite' }));
    });
    expect(listFavorites()).toEqual([]);
});

test.each([
    [0, 'The Book of Mirrors', 'Quaestor', /real conflict at the top/],
    [1, 'The Gaze of Hypnos', 'Cryptomancer', /compiles a detailed dossier/],
    [2, 'Holy War', 'Pontifex', /Father, why have you forsaken me/],
    [3, 'Contingencies', 'Severix', /There are supposedly 99 honors/],
])('loads ministry %s directly through its lazy detail route', async (index, tenet, role, text) => {
    const ministry = MinistryData[index];
    renderRoute(<App />, ministry.link);
    expect(await screen.findByRole('heading', { name: ministry.Name, exact: true }, { timeout: 30000 })).toBeInTheDocument();
    const header = screen.getByRole('heading', { name: ministry.Name, exact: true }).closest('header');
    expect(within(header).getByText(MinistryDetailData[index].Tagline)).toBeInTheDocument();
    expect(within(header).queryByRole('link')).not.toBeInTheDocument();
    for (const heading of ['Overview', 'Members', 'Game System Summary', 'Philosophy', 'Rituals and Observances', 'Titles and Duties', 'Relations with Other Factions', tenet, role]) {
        expect(screen.getByRole('heading', { name: heading, exact: true })).toBeInTheDocument();
    }
    expect(screen.getByText(text)).toBeInTheDocument();
    expect(screen.getByText(new RegExp(`Prelacy of ${ministry.Prelacy}`))).toHaveTextContent('same price as Path Arcanum dots');
    expect(screen.getByRole('link', { name: ministry.Book })).toHaveAttribute('href', expect.stringContaining('fliphtml5.com'));
    MinistryData.filter(item => item.Name !== ministry.Name).forEach(item => {
        expect(screen.getByRole('link', { name: item.Name, exact: true })).toHaveAttribute('href', item.link);
    });
}, 35000);

test('handles a missing ministry with the shared content-not-found feedback', async () => {
    renderRoute(<App />, `${PATHS.MAGE.MINISTRIES}/unknown_ministry`);
    expect(await screen.findByRole('heading', { name: 'Content not found' })).toBeInTheDocument();
});

test('connects glossary names and aliases to the correct ministry, without changing the Pentacle destination', () => {
    MinistryData.forEach(ministry => {
        const entry = mageLexyconData.find(item => item.Name === ministry.Name);
        expect(entry?.Book).toBe(ministry.Book);
        expect(getLexyconPath('Mage the Awakening', entry)).toBe(ministry.link);
        expect(getLexyconPath('Mage the Awakening', { Name: ministry.Nickname })).toBe(ministry.link);
    });
    expect(getLexyconPath('Mage the Awakening', { Name: 'Seers of the Throne' })).toBe(PATHS.MAGE.ORDER);
    expect(getLexyconPath('Mage the Awakening', { Name: 'Pentacle, the' })).toBe(PATHS.MAGE.ORDER);
});
