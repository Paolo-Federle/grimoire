import { fireEvent, render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../../App';
import { getThaumaturgyTraditionPath, PATHS } from '../../pages/path';
import { clearFavorites, listFavorites, toggleFavorite } from '../../favoritesStore';
import { thaumaturgyTraditionIndex } from '../../Data/Mortal/Lesser templates/ThaumaturgyTraditionIndex';
import { thaumaturgyTraditionDetailData } from '../../Data/Mortal/Lesser templates/ThaumaturgyTraditionDetailData';

const profiles = [
    ['Apostle of the Dark One', 'SS 81-83', 'Apostle Training', 'Bad Internet Connection', /jealous neighbor/],
    ['Ceremonial Magician', 'SS 83-86', 'Ceremonial Magic Training', 'The Ascension Tome', /professional gambler, stockbroker/],
    ['Hedge Witch', 'SS 87-89', 'Hedge-Witch Training', 'Exposure', /therapist, con artist/],
    ['Shaman', 'SS 90-93', 'Shamanic Training', 'The Deadly Statue', /new-age guru, spirit medium/],
    ['Taoist Alchemist', 'SS 94-97', 'Taoist Training', 'The Crooked House', /Asian studies, martial-arts teacher/],
    ['Vodoun', 'SS 97-102', 'Vodoun Training', 'The Factory', /religious artisan, political refugee, neighborhood wise woman/],
];

function renderRoute(route) {
    return render(<MemoryRouter initialEntries={[route]} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}><App /></MemoryRouter>);
}

test('keeps the six source profiles and training lists distinct', () => {
    expect(thaumaturgyTraditionIndex.map(({ Name, Book }) => [Name, Book])).toEqual(profiles.map(([name, book]) => [name, book]));
    expect(thaumaturgyTraditionDetailData.map(item => item.Name)).toEqual(profiles.map(([name]) => name));
    expect(thaumaturgyTraditionIndex[0]['Path Merits']).toContain('Countermagic, Curse of Ill Fortune, Divination, Dream');
    expect(thaumaturgyTraditionIndex[0]['Path Merits']).toContain('Visionary Trances, Warding');
    expect(thaumaturgyTraditionIndex[1]['Path Merits']).toContain('External Alchemy (•• or ••••)');
    expect(thaumaturgyTraditionIndex[2]['Path Merits']).toContain('Familiar (Embodied Familiars only)');
    expect(thaumaturgyTraditionIndex[3]['Path Merits']).toContain('Familiar (for Twilight Familiars only)');
    expect(thaumaturgyTraditionIndex[4]['Path Merits']).toContain('Magical Nexus, Second Sight, See Auras, Warding');
    expect(thaumaturgyTraditionIndex[5]['Path Merits']).toContain('Invocation (Ghosts only) (•• or ••••)');
    const text = JSON.stringify(thaumaturgyTraditionDetailData);
    expect(text).toContain('550 BCE');
    expect(text).toContain('Sufi masters');
    expect(text).not.toMatch(/preqChristian|xx0 BCE|Sufimasters|,ibrary|\uFFFD|Chapter8|Minimum Successes Required/);
});

test.each(profiles)('%s opens its own source section and book reference', async (name, book, training, sidebar, concepts) => {
    renderRoute(getThaumaturgyTraditionPath(name));
    expect(await screen.findByRole('heading', { name, exact: true }, { timeout: 30000 })).toBeVisible();
    const article = screen.getByRole('article');
    expect(within(article).getByRole('heading', { name: sidebar, exact: true })).toBeVisible();
    expect(within(article).getByRole('region', { name: training })).toHaveTextContent(concepts);
    expect(within(article).getByRole('link', { name: book, exact: true })).toHaveAttribute('href', expect.stringContaining('fliphtml5.com'));
    for (const [other, , otherTraining, otherSidebar] of profiles) {
        if (other === name) continue;
        expect(within(article).queryByRole('heading', { name: otherTraining, exact: true })).not.toBeInTheDocument();
        expect(within(article).queryByRole('heading', { name: otherSidebar, exact: true })).not.toBeInTheDocument();
    }
}, 35000);

test('links the tradition table and preserves its saved favorite identities', async () => {
    clearFavorites();
    toggleFavorite({ Tradition: 'Vodoun' }, ['Tradition'], PATHS.MORTAL.THAUMATURGY);
    renderRoute(PATHS.MORTAL.THAUMATURGY);
    const link = await screen.findByRole('link', { name: 'Vodoun', exact: true }, { timeout: 30000 });
    expect(link).toHaveAttribute('href', getThaumaturgyTraditionPath('Vodoun'));
    fireEvent.click(within(link.closest('tr')).getByRole('button', { name: 'remove favorite' }));
    expect(listFavorites()).toHaveLength(0);
    expect(screen.getByRole('link', { name: 'Dream', exact: true })).toHaveAttribute('href', `${PATHS.MORTAL.THAUMATURGY}/dream`);
}, 35000);
