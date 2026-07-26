import { fireEvent, render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';
import { getLegacySheetEditorPath, getSheetPath, PATHS } from '../pages/path';
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
