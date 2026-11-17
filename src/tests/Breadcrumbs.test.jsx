import { fireEvent, render, screen, within } from '@testing-library/react';
import { MemoryRouter, useLocation } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';

function RouteLabel() {
    const { pathname } = useLocation();
    return <output data-testid="route">{pathname}</output>;
}

function renderBreadcrumbs(route) {
    return render(
        <MemoryRouter initialEntries={[route]} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
            <Breadcrumbs />
            <RouteLabel />
        </MemoryRouter>
    );
}

test.each([
    ['/mage/ministries/ministry_of_paternoster', 'Ministry of Paternoster', [['Mage', '/mage'], ['Orders and Ministries', '/mage/order']]],
    ['/mage/order', 'Orders and Ministries', [['Mage', '/mage']]],
    ['/mage/order/council_of_free_assemblies', 'Free Council', [['Mage', '/mage'], ['Orders and Ministries', '/mage/order']]],
    ['/mage/arcana/create_life', 'Create Life', [['Mage', '/mage'], ['Arcana', '/mage/arcana']]],
    ['/mage/spells/create_life', 'Create Life', [['Mage', '/mage'], ['Arcana', '/mage/arcana']]],
    ['/merits/location/hallow', 'Hallow', [['Locations', '/merits/location']]],
    ['/merits/location', 'Locations', [['Home', '/']]],
    ['/external/paranormal_objects', 'Paranormal Objects', [['Home', '/']]],
    ['/sheet/sheet-123', 'Character sheet', [['Sheets', '/sheet']]],
    ['/books/%C3%A9chos_of_the_past', 'Échos of the Past', [['Books', '/books']]],
])('renders useful ancestors and a non-linked current page for %s', (route, current, parents) => {
    renderBreadcrumbs(route);
    const nav = screen.getByRole('navigation', { name: 'Breadcrumb' });
    expect(nav.querySelector('[aria-current="page"]')).toHaveTextContent(current);
    expect(within(nav).queryByRole('link', { name: current, exact: true })).not.toBeInTheDocument();
    expect(within(nav).getAllByRole('link')).toHaveLength(parents.length);
    parents.forEach(([name, href]) => {
        expect(within(nav).getByRole('link', { name, exact: true })).toHaveAttribute('href', href);
    });
    expect(nav.textContent).not.toContain('_');
});

test('returns directly to the orders and ministries list, then updates the current breadcrumb', () => {
    renderBreadcrumbs('/mage/ministries/ministry_of_panopticon?source=search');
    fireEvent.click(screen.getByRole('link', { name: 'Orders and Ministries', exact: true }));
    expect(screen.getByTestId('route')).toHaveTextContent('/mage/order');
    const nav = screen.getByRole('navigation', { name: 'Breadcrumb' });
    expect(nav.querySelector('[aria-current="page"]')).toHaveTextContent('Orders and Ministries');
    expect(within(nav).queryByRole('link', { name: 'Orders and Ministries' })).not.toBeInTheDocument();
});

test('keeps top-level navigation uncluttered and tolerates malformed encoded labels', () => {
    const { unmount } = renderBreadcrumbs('/mage');
    expect(screen.queryByRole('navigation', { name: 'Breadcrumb' })).not.toBeInTheDocument();
    unmount();
    renderBreadcrumbs('/books/unfinished%escape');
    expect(screen.getByRole('navigation', { name: 'Breadcrumb' })).toHaveTextContent('Unfinished%escape');
});
