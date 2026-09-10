import {
  fireEvent,
  render,
  screen,
  waitForElementToBeRemoved,
  within,
} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';
import {
  getLegacySheetEditorPath,
  getMageLegacyPath,
  getSheetPath,
  PATHS,
} from '../pages/path';
import { SHEET_STORAGE_KEY } from '../components/Sheet/sheetStorage';

beforeEach(() => {
  window.localStorage.clear();
});

function renderApp(initialEntry = PATHS.HOME) {
  return render(
    <MemoryRouter
      initialEntries={[initialEntry]}
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <App />
    </MemoryRouter>
  );
}

test('renders home page entry points', async () => {
  renderApp();

  expect(await screen.findByRole('link', { name: /list of books/i })).toBeInTheDocument();
  const sheetsLink = await screen.findByRole('link', { name: /^sheets$/i });
  expect(sheetsLink).toBeInTheDocument();
  expect(sheetsLink).toHaveAttribute('href', PATHS.SHEET);
  expect(await screen.findByRole('link', { name: /mage: the awakening/i })).toBeInTheDocument();
});

test.each([
  ['scelesti_variant', 'Inevitable Ending'],
  ['scelesti_variant_nh_tu', 'The Stains of Sin'],
])('renders the Legacy detail identified by %s', async (legacyId, attainmentName) => {
  renderApp(getMageLegacyPath(legacyId));

  expect(
    await screen.findByRole('heading', { name: /^Scelesti \(variant\)/ }, { timeout: 30000 })
  ).toBeInTheDocument();
  expect(
    await screen.findByRole('heading', { name: attainmentName }, { timeout: 30000 })
  ).toBeInTheDocument();
}, 35000);

test('renders the complete Thread Cutters success table', async () => {
  renderApp(getMageLegacyPath('thread_cutters'));

  expect(
    await screen.findByRole('heading', { name: /^Thread Cutters/ }, { timeout: 30000 })
  ).toBeInTheDocument();

  const successTable = await screen.findByRole('table', {}, { timeout: 30000 });
  expect(
    within(successTable).getByRole('columnheader', { name: 'Successes' })
  ).toBeInTheDocument();
  expect(
    within(successTable).getByRole('columnheader', { name: 'Result' })
  ).toBeInTheDocument();
  expect(within(successTable).getAllByRole('row')).toHaveLength(6);
  expect(within(successTable).getByText('5')).toBeInTheDocument();
  expect(
    within(successTable).getByText(/she understands the “moral calculus”/)
  ).toBeInTheDocument();
}, 35000);

test('renders the sheet route without crashing', async () => {
  window.localStorage.setItem(
    SHEET_STORAGE_KEY,
    JSON.stringify({
      version: 1,
      sheets: [
        {
          id: 'sheet-library-test',
          name: 'Library Test Sheet',
          createdAt: '2026-01-01T00:00:00.000Z',
          updatedAt: '2026-01-01T00:00:00.000Z',
          data: {
            character: {
              name: 'Mastigos',
              race: { selected: 'mage' },
            },
          },
        },
      ],
    })
  );

  renderApp(PATHS.SHEET);

  await waitForElementToBeRemoved(() => screen.queryByText('Loading...'), {
    timeout: 30000,
  });

  expect(
    await screen.findByRole('heading', { name: /sheets/i }, { timeout: 30000 })
  ).toBeInTheDocument();
  expect(
    await screen.findByRole('button', { name: /\+ new sheet/i }, { timeout: 30000 })
  ).toBeInTheDocument();
  expect(
    await screen.findByRole('link', { name: /open sheet mastigos/i }, { timeout: 30000 })
  ).toBeInTheDocument();
}, 35000);

test('renders a saved sheet editor route without crashing', async () => {
  window.localStorage.setItem(
    SHEET_STORAGE_KEY,
    JSON.stringify({
      version: 1,
      sheets: [
        {
          id: 'sheet-test',
          name: 'Test Sheet',
          createdAt: '2026-01-01T00:00:00.000Z',
          updatedAt: '2026-01-01T00:00:00.000Z',
          data: {
            character: {
              name: 'Moros',
            },
          },
        },
      ],
    })
  );

  renderApp(getSheetPath('sheet-test'));

  await waitForElementToBeRemoved(() => screen.queryByText('Loading...'), {
    timeout: 30000,
  });

  expect(await screen.findByText('CHARACTER INFO', {}, { timeout: 30000 })).toBeInTheDocument();
  expect(await screen.findByRole('button', { name: /print \/ save pdf/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /^sheets$/i })).toBeInTheDocument();
  expect(screen.queryByText('sheet-test')).not.toBeInTheDocument();
}, 35000);

test('navigates back to home from the sheet editor with the home link', async () => {
  window.localStorage.setItem(
    SHEET_STORAGE_KEY,
    JSON.stringify({
      version: 1,
      sheets: [
        {
          id: 'sheet-home-nav',
          name: 'Home Nav Sheet',
          createdAt: '2026-01-01T00:00:00.000Z',
          updatedAt: '2026-01-01T00:00:00.000Z',
          data: {
            character: {
              name: 'Acanthus',
            },
          },
        },
      ],
    })
  );

  renderApp(getSheetPath('sheet-home-nav'));
  expect(await screen.findByText('CHARACTER INFO', {}, { timeout: 30000 })).toBeInTheDocument();

  fireEvent.click(await screen.findByRole('link', { name: /^home$/i }));

  expect(await screen.findByRole('link', { name: /list of books/i })).toBeInTheDocument();
  expect(await screen.findByRole('link', { name: /^sheets$/i })).toHaveAttribute(
    'href',
    PATHS.SHEET
  );
}, 35000);

test('redirects legacy sheet editor urls to the sheet detail route', async () => {
  window.localStorage.setItem(
    SHEET_STORAGE_KEY,
    JSON.stringify({
      version: 1,
      sheets: [
        {
          id: 'sheet-legacy-path',
          name: 'Legacy Path Sheet',
          createdAt: '2026-01-01T00:00:00.000Z',
          updatedAt: '2026-01-01T00:00:00.000Z',
          data: {
            character: {
              name: 'Thyrsus',
            },
          },
        },
      ],
    })
  );

  renderApp(getLegacySheetEditorPath('sheet-legacy-path'));

  expect(await screen.findByText('CHARACTER INFO', {}, { timeout: 30000 })).toBeInTheDocument();
  expect(await screen.findByRole('button', { name: /back to sheets/i })).toBeInTheDocument();
}, 35000);
