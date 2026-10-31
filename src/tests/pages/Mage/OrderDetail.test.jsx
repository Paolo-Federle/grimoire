import { fireEvent, render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../../../App';
import Order from '../../../pages/Mage/Order';
import OrderData, { Orders } from '../../../Data/Mage/OrderData';
import { OrderDetailData } from '../../../Data/Mage/OrderDetailData';
import { mageLexyconData } from '../../../Data/LexyconData';
import { clearFavorites, getFavoriteKey, listFavorites, toggleFavorite } from '../../../favoritesStore';
import { getLexyconPath } from '../../../pages/Generale/lexyconLinks';
import { PATHS } from '../../../pages/path';
import { slugify } from '../../../utils';

function renderInRouter(element, route = PATHS.MAGE.ORDER) {
    return render(
        <MemoryRouter initialEntries={[route]} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
            {element}
        </MemoryRouter>
    );
}

test('keeps five complete PDF profiles and preserves all six historical sheet choices', () => {
    expect(Orders).toEqual([
        'Adamantine Arrow', 'Council of Free Assemblies', 'Guardians of the Veil\t',
        'Mysterium', 'Silver Ladder', 'Seers of the Throne',
    ]);
    expect(OrderDetailData.map(order => order.Name)).toEqual(OrderData.slice(0, 5).map(order => order.Name));
    expect(new Set(OrderDetailData.map(order => slugify(order.Name))).size).toBe(5);
    const tenetCounts = [5, 3, 3, 3, 4];
    const roleCounts = [2, 3, 2, 2, 2];
    OrderDetailData.forEach((order, index) => {
        const row = OrderData.find(item => item.Name === order.Name);
        expect(order.link).toBe(`${PATHS.MAGE.ORDER}/${slugify(order.Name)}`);
        for (const field of ['Nickname', 'Creed', 'Tools', 'Rote Skills']) {
            expect(order[field]).toBe(row[field]);
        }
        for (const field of ['Description', 'Overview', 'Members', 'Philosophy', 'Rituals', 'Titles']) {
            expect(order[field].length).toBeGreaterThan(0);
            order[field].forEach(block => expect(block.text.trim()).not.toBe(''));
        }
        expect(order.Philosophy.filter(block => block.type === 'heading')).toHaveLength(tenetCounts[index]);
        expect(order.Titles.filter(block => block.type === 'heading')).toHaveLength(roleCounts[index]);
        expect(order.Relations).toHaveLength(4);
        expect(new Set(order.Relations.map(relation => relation.Name)).size).toBe(4);
        order.Relations.forEach(relation => {
            expect(relation.Name).not.toBe(order.Name);
            expect(OrderDetailData.find(item => item.Name === relation.Name)?.link).toBe(relation.link);
            expect(relation.Description).toBeTruthy();
        });
        expect(JSON.stringify(order)).not.toMatch(/\uFFFD|pre-pared|CHAPTER TWO|a d a m a n t i n e/);
        expect(JSON.stringify(order)).not.toMatch(/\bp{1,2}\.\s*\d|\(see (?:above|below)\)/i);
    });
});

test('links the five available details and keeps Seers visible without a dead link or technical columns', () => {
    renderInRouter(<Order />);
    OrderDetailData.forEach(order => {
        expect(screen.getByRole('link', { name: order.Name, exact: true })).toHaveAttribute('href', order.link);
    });
    expect(screen.getByText('Seers of the Throne')).toBeInTheDocument();
    expect(screen.queryByRole('link', { name: 'Seers of the Throne' })).not.toBeInTheDocument();
    expect(screen.getAllByRole('columnheader').map(header => header.textContent)).toEqual([
        'Order', 'Nickname', 'Creed', 'Tools', 'Rote Skills', 'Book',
    ]);
    expect(screen.queryByText(/There are weapons that bring death/)).not.toBeInTheDocument();
});

test('recognizes and removes every Order favorite saved before details existed, including Seers', () => {
    clearFavorites();
    OrderData.forEach(order => {
        const oldLink = `${PATHS.MAGE.ORDER}/${slugify(order.Name)}`;
        toggleFavorite({ Order: order.Order, link: oldLink }, ['Order'], PATHS.MAGE.ORDER);
        expect(getFavoriteKey(order, ['Order'], PATHS.MAGE.ORDER)).toBe(oldLink);
    });
    renderInRouter(<Order />);
    OrderData.forEach(order => {
        const row = screen.getByText(order.Name, { exact: true }).closest('tr');
        fireEvent.click(within(row).getByRole('button', { name: 'remove favorite' }));
    });
    expect(listFavorites()).toEqual([]);
});

test.each([
    ['Adamantine Arrow', 'Adamantine Arrow', 'Service Is Mastery', 'Adamant Sage', /warrior-diplomats/],
    ['Council of Free Assemblies', 'Free Council', 'Destroy the followers of the Lie', 'Syndic', /New Year’s Eve in 1899/],
    ['Guardians of the Veil', 'Guardians of the Veil', 'Merit must guide the Fallen World', 'Epopt', /The final Black Veil/],
    ['Mysterium', 'Mysterium', 'Knowledge has a price', 'Curator', /modern architecture, film/],
    ['Silver Ladder', 'Silver Ladder', 'Blood: The Sleepers follow', 'Lictor', /Grand Convocation/],
])('loads the complete %s profile directly through its lazy route', async (name, displayName, tenet, role, text) => {
    renderInRouter(<App />, `${PATHS.MAGE.ORDER}/${slugify(name)}`);
    expect(await screen.findByRole('heading', { name: displayName, exact: true }, { timeout: 30000 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: tenet, exact: true })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: role, exact: true })).toBeInTheDocument();
    expect(screen.getByText(text)).toBeInTheDocument();
    for (const label of ['Overview', 'Members', 'Philosophy', 'Rituals and Observances', 'Titles and Duties', 'Relations with Other Orders']) {
        expect(screen.getByRole('heading', { name: label, exact: true })).toBeInTheDocument();
    }
    const order = OrderDetailData.find(item => item.Name === name);
    expect(screen.getByRole('link', { name: order.Book, exact: true })).toHaveAttribute('href', expect.stringContaining('fliphtml5.com'));
    order.Relations.forEach(relation => {
        expect(screen.getByRole('link', { name: relation.DisplayName || relation.Name, exact: true })).toHaveAttribute('href', relation.link);
    });
    if (name !== displayName) expect(screen.getByText(name, { exact: true })).toBeInTheDocument();
}, 35000);

test.each(['unknown_order', 'seers_of_the_throne'])('shows missing-content feedback for %s', async (slug) => {
    renderInRouter(<App />, `${PATHS.MAGE.ORDER}/${slug}`);
    expect(await screen.findByRole('heading', { name: 'Content not found' })).toBeInTheDocument();
});

test('connects Order names and verified glossary concepts to the appropriate detail', () => {
    for (const name of ['Adamantine Arrow', 'Free Council', 'Guardians of the Veil', 'Mysterium', 'Silver Ladder']) {
        const entry = mageLexyconData.find(item => item.Name === name);
        expect(entry?.Description).toBeTruthy();
        const order = OrderDetailData.find(item => (item.DisplayName || item.Name) === name);
        expect(getLexyconPath('Mage the Awakening', entry)).toBe(order.link);
    }
    expect(getLexyconPath('Mage the Awakening', { Name: 'Council of Free Assemblies' })).toBe('/mage/order/council_of_free_assemblies');
    for (const name of ['Eye of the Dragon', 'Visus Draconis', 'Law of the Mask', 'Masque, the']) {
        expect(getLexyconPath('Mage the Awakening', { Name: name })).toBe('/mage/order/guardians_of_the_veil');
    }
    for (const name of ['Censor', 'Curator', 'mystagogue']) {
        expect(getLexyconPath('Mage the Awakening', { Name: name })).toBe('/mage/order/mysterium');
    }
});
