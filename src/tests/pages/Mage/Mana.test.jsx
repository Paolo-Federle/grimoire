import { fireEvent, render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../../../App';
import { ManaData } from '../../../Data/Mage/ManaData';
import { EnergyPoolsData } from '../../../Data/EnergyPoolsData';
import { mageLexyconData } from '../../../Data/LexyconData';
import { getLexyconPath } from '../../../pages/Generale/lexyconLinks';
import { PATHS } from '../../../pages/path';
import { clearFavorites, listFavorites, toggleFavorite } from '../../../favoritesStore';

function renderInRouter(element, route) {
    return render(
        <MemoryRouter initialEntries={[route]} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
            {element}
        </MemoryRouter>
    );
}

test('retains the Mana rules through Tass and excludes the following Wisdom section', () => {
    expect(ManaData.Book).toBe('M:tA 77-79');
    const text = JSON.stringify(ManaData.Content);
    expect(text).toContain('Gnosis: one point per turn per Gnosis dot');
    expect(text).toContain('three Mana points per one bashing or lethal wound');
    expect(text).toContain('one lethal wound of Resistant Damage and gains three Mana');
    expect(text).toContain('Gnosis x2');
    expect(text).toContain('additional options for regaining and tapping into Mana');
    expect(text).toContain('10 minutes after drinking liquid tass');
    expect(text).toContain('one Mana per week after the first week of storage');
    expect(text).toContain('can be stored indefinitely until its Mana is tapped');
    expect(ManaData.Content.filter(block => block.type === 'heading').map(block => block.text)).toEqual(
        expect.arrayContaining(['Uses of Mana', 'Qualities', 'Spending Mana', 'Regaining Mana', 'Tass'])
    );
    expect(text).not.toMatch(/Modified Advantage|Acts of Hubris|the ability to balance the needs of this world|\uFFFD|219232|CHAPTER TWO/);
    expect(text).not.toMatch(/\bp{1,2}\.\s*\d|\(see (?:above|below)\)|\bSee [“"]/i);
});

test('opens the Mana rules from the main Mage page through the lazy route', async () => {
    renderInRouter(<App />, PATHS.MAGE.BASE);
    const manaLink = await screen.findByRole('link', { name: 'Mana', exact: true }, { timeout: 30000 });
    expect(manaLink).toHaveAttribute('href', PATHS.MAGE.MANA);
    fireEvent.click(manaLink);
    expect(await screen.findByRole('heading', { name: 'Mana', exact: true })).toBeInTheDocument();
    for (const name of ['Uses of Mana', 'Qualities', 'Spending Mana', 'Regaining Mana', 'Tass']) {
        expect(screen.getByRole('heading', { name, exact: true })).toBeInTheDocument();
    }
    expect(screen.queryByRole('heading', { name: /Wisdom|Hubris/ })).not.toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'M:tA 77-79' })).toHaveAttribute('href', expect.stringContaining('fliphtml5.com'));
    const related = screen.getByRole('navigation', { name: 'Related Mana rules' });
    expect(within(related).getByRole('link', { name: 'Gnosis' })).toHaveAttribute('href', PATHS.MAGE.GNOSIS);
    expect(within(related).getByRole('link', { name: 'Prime' })).toHaveAttribute('href', PATHS.MAGE.PRIME);
    expect(within(related).getByRole('link', { name: 'Hallow' })).toHaveAttribute('href', `${PATHS.LOCATIONS_BASE}/hallow`);
}, 35000);

test('opens the pool catalog from a single Energy pools row in Traits', async () => {
    renderInRouter(<App />, PATHS.TRAITS);
    const catalogLink = await screen.findByRole('link', { name: 'Energy pools', exact: true }, { timeout: 30000 });
    expect(catalogLink).toHaveAttribute('href', PATHS.ENERGY_POOLS);
    expect(screen.getAllByRole('table')).toHaveLength(1);
    expect(screen.queryByText('Vitae', { exact: true })).not.toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Energy pools', exact: true })).not.toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Numina', exact: true })).toHaveAttribute('href', PATHS.SPIRIT.NUMINA);
    fireEvent.click(catalogLink);
    expect(await screen.findByRole('heading', { name: 'Energy pools', exact: true })).toBeInTheDocument();
    const pools = screen.getByRole('region', { name: 'Energy pools' });
    expect(EnergyPoolsData.map(pool => pool.Name)).toEqual([
        'Vitae', 'Essence', 'Mana', 'Pyros', 'Glamour', 'Plasm', 'Pillars',
    ]);
    for (const pool of EnergyPoolsData) {
        expect(within(pools).getByText(pool.Name, { exact: true })).toBeInTheDocument();
        expect(within(pools).getByText(pool.Description, { exact: true })).toBeInTheDocument();
        if (pool.link) {
            expect(within(pools).getByRole('link', { name: pool.Name, exact: true })).toHaveAttribute('href', pool.link);
        } else {
            expect(within(pools).queryByRole('link', { name: pool.Name, exact: true })).not.toBeInTheDocument();
        }
    }
    expect(within(pools).getAllByRole('columnheader').map(header => header.textContent)).toEqual(['Name', 'Specific to', 'Description']);
    expect(within(pools).queryByText('Book')).not.toBeInTheDocument();
}, 35000);

test('preserves pool favorites saved on Traits when moving the table to its catalog page', async () => {
    clearFavorites();
    const headers = ['Name', 'Specific to', 'Description'];
    const savedPools = EnergyPoolsData.filter(pool => ['Vitae', 'Mana'].includes(pool.Name));
    savedPools.forEach(pool => toggleFavorite(pool, headers, PATHS.TRAITS, Boolean(pool.link)));
    renderInRouter(<App />, PATHS.ENERGY_POOLS);
    await screen.findByRole('heading', { name: 'Energy pools', exact: true });
    const pools = screen.getByRole('region', { name: 'Energy pools' });
    savedPools.forEach(pool => {
        const row = within(pools).getByText(pool.Name, { exact: true }).closest('tr');
        fireEvent.click(within(row).getByRole('button', { name: 'remove favorite' }));
    });
    expect(listFavorites()).toEqual([]);
});

test.each(['Mana', 'tass'])('connects the %s glossary entry to the Mana page', name => {
    const entry = mageLexyconData.find(item => item.Name === name);
    expect(entry).toBeTruthy();
    expect(getLexyconPath('Mage the Awakening', entry)).toBe(PATHS.MAGE.MANA);
});
