import { fireEvent, render, screen, within } from '@testing-library/react';
import { MemoryRouter, useLocation } from 'react-router-dom';
import Legacy from '../../../pages/Mage/Legacy';
import LegacyDetail from '../../../pages/Mage/LegacyDetail';
import { loadLegacyDetailById } from '../../../Data/Mage/LegacyDetailLoader';
import { clearFavorites, listFavorites, toggleFavorite } from '../../../favoritesStore';

function CurrentRoute() {
    const location = useLocation();
    return <span data-testid="route">{location.pathname}{location.search}</span>;
}

function renderLegacy(query = '') {
    return render(
        <MemoryRouter initialEntries={[`/mage/legacy${query}`]} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
            <Legacy />
            <CurrentRoute />
        </MemoryRouter>
    );
}

test('shows English headers and combines all five filters from a bookmarked URL', () => {
    renderLegacy('?path=Acanthus&order=Seers+of+the+Throne&primary=Space&optional=Time&conjunctional=Life');
    expect(screen.getAllByRole('columnheader').map(header => header.textContent)).toEqual([
        'Name', 'Path', 'Order', 'Nickname', 'Primary Arcanum', 'Conjunctional Arcanum', 'Optional Arcanum', 'Book',
    ]);
    expect(screen.getByRole('status')).toHaveTextContent('Showing 1 of 94 Legacies');
    expect(screen.getByRole('link', { name: 'Walkers in Mists', exact: true })).toHaveAttribute('href', '/mage/legacy/walkers_in_mists');
    expect(screen.queryByRole('link', { name: 'Subtle Ones', exact: true })).not.toBeInTheDocument();
    expect(screen.getByRole('combobox', { name: 'Optional Arcanum', exact: true })).toHaveValue('Time');
});

test('matches any member of array fields and offers distinct nonblank Arcana', () => {
    renderLegacy();
    const order = screen.getByRole('combobox', { name: 'Order', exact: true });
    fireEvent.change(order, { target: { value: 'Seers of the Throne' } });
    expect(screen.getByRole('link', { name: 'Walkers in Mists', exact: true })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Subtle Ones', exact: true })).toBeInTheDocument();
    expect(screen.queryByRole('link', { name: 'Uncrowned Kings', exact: true })).not.toBeInTheDocument();
    fireEvent.change(screen.getByRole('combobox', { name: 'Path', exact: true }), { target: { value: 'Acanthus' } });
    expect(screen.getByRole('link', { name: 'Walkers in Mists', exact: true })).toBeInTheDocument();
    expect(screen.queryByRole('link', { name: 'Subtle Ones', exact: true })).not.toBeInTheDocument();
    expect(screen.getByTestId('route')).toHaveTextContent('order=Seers+of+the+Throne&path=Acanthus');
    for (const name of ['Primary Arcanum', 'Optional Arcanum', 'Conjunctional Arcanum']) {
        const options = within(screen.getByRole('combobox', { name, exact: true })).getAllByRole('option');
        expect(options).toHaveLength(11);
        expect(options.slice(1).every(option => option.value.trim())).toBe(true);
        expect(options.filter(option => option.value === 'Space')).toHaveLength(1);
    }
});

test('explains empty results and clears filters while preserving unrelated query parameters', () => {
    renderLegacy('?path=Moros&primary=Space&optional=Time&conjunctional=Life&source=bookmark');
    expect(screen.getByRole('status')).toHaveTextContent('Showing 0 of 94 Legacies');
    expect(screen.getByText(/No Legacies match these filters/)).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Clear filters' }));
    expect(screen.getByRole('status')).toHaveTextContent('Showing 94 of 94 Legacies');
    expect(screen.getByTestId('route')).toHaveTextContent('/mage/legacy?source=bookmark');
    expect(screen.getByRole('button', { name: 'Clear filters' })).toBeDisabled();
    screen.getAllByRole('combobox').forEach(select => expect(select).toHaveValue(''));
});

test('recognizes a favorite saved with the former Italian field names', () => {
    clearFavorites();
    toggleFavorite({
        Name: 'Walkers in Mists', Cammino: ['Acanthus'], Ordine: ['Mysterium', 'Seers of the Throne'],
        link: '/mage/legacy/walkers_in_mists',
    }, ['Name', 'Cammino', 'Ordine'], '/mage/legacy');
    renderLegacy('?path=Acanthus&primary=Space&conjunctional=Life&optional=Time');
    const row = screen.getByRole('link', { name: 'Walkers in Mists', exact: true }).closest('tr');
    fireEvent.click(within(row).getByRole('button', { name: 'remove favorite' }));
    expect(listFavorites()).toEqual([]);
});

test('renders English Path and Order metadata from the renamed detail fields', async () => {
    const legacy = await loadLegacyDetailById('walkers_in_mists');
    render(<LegacyDetail legacy={legacy} />);
    expect(screen.getByText('Path:').closest('p')).toHaveTextContent('Path: Acanthus');
    expect(screen.getByText('Order:').closest('p')).toHaveTextContent('Order: Mysterium, Seers of the Throne');
});
