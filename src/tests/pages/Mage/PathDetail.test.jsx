import { fireEvent, render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../../../App';
import Path from '../../../pages/Mage/Path';
import PathData, { Paths } from '../../../Data/Mage/PathData';
import { PathDetailData } from '../../../Data/Mage/PathDetailData';
import { LegacyIndexData } from '../../../Data/Mage/LegacyIndexData';
import { clearFavorites, listFavorites, toggleFavorite } from '../../../favoritesStore';
import { getLexyconPath } from '../../../pages/Generale/lexyconLinks';
import { PATHS } from '../../../pages/path';
import { slugify } from '../../../utils';

function renderInRouter(element, route = PATHS.MAGE.PATH) {
    return render(
        <MemoryRouter initialEntries={[route]} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
            {element}
        </MemoryRouter>
    );
}

test('keeps all five Path profiles complete and consistent with their list, sheet and lexicon identities', () => {
    expect(PathDetailData.map(path => path.Name)).toEqual(Paths);
    expect(new Set(PathDetailData.map(path => slugify(path.Name))).size).toBe(5);
    PathDetailData.forEach(path => {
        const row = PathData.find(item => item.Name === path.Name);
        expect(path['Path name']).toBe(path.Name);
        expect(path.link).toBe(`${PATHS.MAGE.PATH}/${slugify(path.Name)}`);
        expect(getLexyconPath('Mage the Awakening', { Name: path.Name, Book: 'MTA' })).toBe(path.link);
        for (const field of ['Bonus trait', 'Ruling arcana', 'Inferior arcanum']) {
            expect(path[field]).toBe(row[field]);
        }
        for (const field of ['Description', 'Orders', 'Appearance', 'Sanctums', 'Background', 'CharacterCreation', 'Nimbus', 'Associations', 'Quote']) {
            expect(path[field].length).toBeGreaterThan(0);
            path[field].forEach(block => expect(block.text.trim()).not.toBe(''));
        }
        expect(path.Legacies).toHaveLength(3);
        expect(path.Stereotypes).toHaveLength(7);
        expect(new Set(path.Stereotypes.map(item => item.Name)).size).toBe(7);
        path.Legacies.filter(legacy => legacy.Id).forEach(legacy => {
            expect(LegacyIndexData.some(item => item.Id === legacy.Id)).toBe(true);
        });
        expect(JSON.stringify(path)).not.toMatch(/\uFFFD|c o m p o s u r e|like-m i n d e d|OObbrriimmooss|<sSSlleeeeppeerrss|CHAPTER TWO/);
        expect(JSON.stringify(path)).not.toMatch(/\bp{1,2}\.\s*\d|\(see (?:above|below)\)/i);
    });
});

test('links each Path without exposing detail content or technical fields in the table', () => {
    renderInRouter(<Path />);
    PathData.forEach(path => {
        expect(screen.getByRole('link', { name: path.Name, exact: true })).toHaveAttribute('href', path.link);
    });
    expect(screen.getAllByRole('columnheader').map(header => header.textContent)).toEqual([
        'Path name', 'Nickname', 'Bonus trait', 'Ruling arcana', 'Inferior arcanum', 'Book',
    ]);
    expect(screen.queryByText(/the most capricious of the Awakened/)).not.toBeInTheDocument();
});

test('recognizes and removes a Path favorite saved before detail pages were available', () => {
    clearFavorites();
    toggleFavorite({ 'Path name': 'Acanthus', link: '/mage/order/acanthus' }, ['Path name'], PATHS.MAGE.PATH);
    renderInRouter(<Path />);
    const row = screen.getByRole('link', { name: 'Acanthus', exact: true }).closest('tr');
    fireEvent.click(within(row).getByRole('button', { name: 'remove favorite' }));
    expect(listFavorites()).toEqual([]);
});

test.each([
    ['Acanthus', /The Danger Sense Merit/, 'Lunargent Thorn'],
    ['Mastigos', /Their magic is rarely flashy/, 'Iron Gauntlet'],
    ['Moros', /precious metals and gems/, 'Lead Coin'],
    ['Obrimos', /citadels and cloisters/, 'Golden Key'],
    ['Thyrsus', /Crafts, Survival and Animal Ken/, 'Stone Book'],
])('loads the complete %s profile through its lazy route', async (name, text, watchtower) => {
    renderInRouter(<App />, `${PATHS.MAGE.PATH}/${slugify(name)}`);
    expect(await screen.findByRole('heading', { name, exact: true }, { timeout: 30000 })).toBeInTheDocument();
    expect(screen.getByText(text)).toBeInTheDocument();
    expect(screen.getByText(new RegExp(`Watchtower of the ${watchtower}`))).toBeInTheDocument();
    for (const label of ['Orders', 'Appearance', 'Sanctums', 'Background', 'Character Creation', 'Nimbus', 'Associations', 'Legacies', 'Concepts', 'Stereotypes']) {
        expect(screen.getByRole('heading', { name: label, exact: true })).toBeInTheDocument();
    }
    expect(screen.getByText('Favored Resistance Attribute:')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: new RegExp(`^M:tA ${PathData.find(path => path.Name === name).Book.split(' ')[1]}`) })).toBeInTheDocument();
}, 35000);

test('shows missing-content feedback for an unknown Path', async () => {
    renderInRouter(<App />, `${PATHS.MAGE.PATH}/unknown_path`);
    expect(await screen.findByRole('heading', { name: 'Content not found' })).toBeInTheDocument();
});
