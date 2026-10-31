import { fireEvent, render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../../../App';
import MummyMerits from '../../../pages/Mummy/MummyMerits';
import MummyMeritsDetail from '../../../pages/Mummy/MummyMeritsDetail';
import { MummiesStyleMeritsData, mummyMeritsDetailData } from '../../../Data/Mummy/MummiesMeritsData';
import { PATHS } from '../../../pages/path';
import { slugify } from '../../../utils';
import { clearFavorites, listFavorites } from '../../../favoritesStore';

function renderInRouter(element, path = PATHS.MUMMY.MERITS) {
    return render(
        <MemoryRouter initialEntries={[path]} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
            {element}
        </MemoryRouter>
    );
}

test('links every section to its detail without exposing full content in tables', () => {
    renderInRouter(<MummyMerits />);
    const links = screen.getAllByRole('link').filter((link) => link.getAttribute('href').startsWith(`${PATHS.MUMMY.MERITS}/`));

    expect(links).toHaveLength(45);
    expect(new Set(links.map((link) => link.getAttribute('href'))).size).toBe(45);
    mummyMeritsDetailData.forEach((item) => {
        const path = `${PATHS.MUMMY.MERITS}/${slugify(item.Name)}`;
        expect(links.find((link) => link.textContent === item.Name)).toHaveAttribute('href', path);
    });
    expect(screen.queryByRole('columnheader', { name: 'Content' })).not.toBeInTheDocument();
    expect(screen.queryByText(/All Arisen may speak and write Iremite Egyptian/)).not.toBeInTheDocument();
});

test('keeps existing favorite identities when adding detail links', () => {
    clearFavorites();
    renderInRouter(<MummyMerits />);
    const row = screen.getByRole('link', { name: 'Language' }).closest('tr');
    fireEvent.click(within(row).getByRole('button'));
    expect(listFavorites()).toEqual([
        expect.objectContaining({ key: '/mummy/merits#language', linkUrl: '/mummy/merits/language', titleIsLink: true }),
    ]);
    clearFavorites();
});

test('renders all five style ranks once, with shared prerequisites and a linked book', () => {
    const { container } = renderInRouter(<MummyMeritsDetail mummyMerit={MummiesStyleMeritsData[0]} />);

    expect(screen.getByRole('heading', { name: 'Disciple of the Wheel' })).toBeInTheDocument();
    expect(screen.getByText(/can never acquire more than three dots/)).toBeInTheDocument();
    expect([...container.querySelectorAll('.detail-content-section-title')].map((node) => node.textContent))
        .toEqual(['•', '••', '•••', '••••', '•••••']);
    expect(screen.getAllByText(/Buying the first dot represents/)).toHaveLength(1);
    expect(screen.getAllByText(/learn the Eye of Radiance Utterance/)).toHaveLength(1);
    expect(screen.getAllByText(/contemplating the stars/)).toHaveLength(1);
    expect(screen.getAllByText(/remember specific details of her lives/)).toHaveLength(1);
    expect(screen.getAllByText(/instead of her Memory rating/)).toHaveLength(1);
    expect(screen.getByRole('link', { name: /Soth 95/ })).toBeInTheDocument();
});

test.each([
    ['language', 'Language (•)', /All Arisen may speak and write Iremite Egyptian/],
    ['absolute_rule', 'Absolute Rule (•••)', /media attention/],
    ['haunted', 'Haunted (•••)', /ghost/i],
    ['cult', 'Cult (• to ••••••••••)', /Enter his cult/],
    ['blas', 'Blasé', /never succumb to Sybaris/],
])('loads the %s detail directly through the lazy route', async (slug, title, text) => {
    renderInRouter(<App />, `${PATHS.MUMMY.MERITS}/${slug}`);
    expect(await screen.findByRole('heading', { name: title }, { timeout: 30000 })).toBeInTheDocument();
    expect(screen.getByText(text)).toBeInTheDocument();
}, 35000);

test('preserves structured cult axis tables through the lazy route', async () => {
    renderInRouter(<App />, `${PATHS.MUMMY.MERITS}/reach`);
    expect(await screen.findByRole('heading', { name: 'Reach (• to •••••)' })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: 'Unrolled Tasks' })).toBeInTheDocument();
    expect(screen.getByText(/Face-time with tyrants/)).toBeInTheDocument();
});

test('shows missing-content feedback for an unknown merit', async () => {
    renderInRouter(<App />, `${PATHS.MUMMY.MERITS}/missing_merit`);
    expect(await screen.findByRole('heading', { name: 'Content not found' })).toBeInTheDocument();
});
