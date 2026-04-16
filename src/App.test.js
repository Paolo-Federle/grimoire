import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { PATHS } from './pages/path';

function renderApp(initialEntry = PATHS.HOME) {
  return render(
    <MemoryRouter initialEntries={[initialEntry]}>
      <App />
    </MemoryRouter>
  );
}

test('renders home page entry points', () => {
  renderApp();

  expect(screen.getByRole('link', { name: /list of books/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /sheet/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /mage: the awakening/i })).toBeInTheDocument();
});

test('renders the sheet route without crashing', () => {
  renderApp(PATHS.SHEET);

  expect(screen.getByText('CHARACTER INFO')).toBeInTheDocument();
  expect(screen.getByText('HEALTH')).toBeInTheDocument();
  expect(screen.getByText('WILLPOWER')).toBeInTheDocument();
});
