import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';
import { PATHS } from '../pages/path';

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
  expect(await screen.findByRole('link', { name: /sheet/i })).toBeInTheDocument();
  expect(await screen.findByRole('link', { name: /mage: the awakening/i })).toBeInTheDocument();
});

test('renders the sheet route without crashing', async () => {
  renderApp(PATHS.SHEET);

  expect(await screen.findByText('CHARACTER INFO', {}, { timeout: 10000 })).toBeInTheDocument();
  expect(await screen.findByText('HEALTH', {}, { timeout: 10000 })).toBeInTheDocument();
  expect(await screen.findByText('WILLPOWER', {}, { timeout: 10000 })).toBeInTheDocument();
}, 15000);
