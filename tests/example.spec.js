// @ts-check
import { test, expect } from '@playwright/test';
import { PATHS } from '../src/pages/path';

const APP_BASE_URL =
  process.env.PLAYWRIGHT_APP_BASE || 'http://127.0.0.1:3000/grimoire';

function buildAppUrl(path = PATHS.HOME) {
  const hashPath = path === PATHS.HOME ? '#/' : `#${path}`;
  return new URL(hashPath, APP_BASE_URL).toString();
}

test('home page exposes the main entry points', async ({ page }) => {
  await page.goto(buildAppUrl());

  await expect(page.getByRole('link', { name: 'List of Books' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Sheet' })).toBeVisible();
  await expect(
    page.getByRole('link', { name: 'Mortals and Lesser Templates' })
  ).toBeVisible();
  await expect(page.getByText('NPCs (in progress)', { exact: true })).toBeVisible();
  await expect(page.getByRole('link', { name: 'NPCs', exact: true })).toHaveCount(0);
});

test('home search keeps full results in view and opens suggestions', async ({ page }) => {
  await page.setViewportSize({ width: 820, height: 390 });
  await page.goto(buildAppUrl());
  const search = page.getByRole('main', { name: 'Home' }).getByRole('search');
  const input = search.getByRole('searchbox');
  await input.fill('animalism');
  const allResults = search.getByRole('button', { name: 'View all results' });
  await expect(allResults).toBeInViewport({ ratio: 1 });
  await allResults.click();
  await expect(page).toHaveURL(/#\/search\?q=animalism$/);

  await page.goto(buildAppUrl());
  await input.fill('animalism');
  await search.getByRole('link').filter({ hasText: 'Animalism' }).first().click();
  await expect(page).toHaveURL(/#\/vampire\/disciplines\/animalism$/);
});

for (const width of [390, 1440]) {
  test(`navbar starts a different game line at the top at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 500 });
    await page.goto(buildAppUrl(PATHS.MAGE.BASE));
    await expect(page.getByRole('heading', { name: 'Mage: the Awakening' })).toBeVisible();
    await page.evaluate(() => window.scrollTo(0, 300));
    await expect.poll(() => page.evaluate(() => window.scrollY)).toBeGreaterThan(0);

    if (width < 1181) await page.getByRole('button', { name: 'Open menu' }).click();
    const navbar = page.getByRole('navigation', { name: 'Main navigation' });
    await navbar.getByRole('link', { name: 'Vampire', exact: true }).click();

    await expect(page.getByRole('heading', { name: 'Vampire: the Requiem' })).toBeVisible();
    await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(0);
  });
}

test('game line search starts with the scope of the new line', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 800 });
  await page.goto(buildAppUrl(PATHS.MAGE.BASE));
  const scopedSearch = page.getByRole('search', { name: 'Wiki search' });
  await scopedSearch.getByRole('searchbox').fill('arcana');
  await scopedSearch.getByRole('checkbox').check();

  const navbar = page.getByRole('navigation', { name: 'Main navigation' });
  await navbar.getByRole('link', { name: 'Vampire', exact: true }).click();
  const vampireSearch = scopedSearch.getByRole('searchbox', { name: 'Search Vampire content…' });
  await expect(vampireSearch).toHaveValue('');
  await expect(scopedSearch.getByRole('checkbox')).not.toBeChecked();
  await vampireSearch.fill('animalism');
  await vampireSearch.press('Enter');
  await expect(page).toHaveURL(/scope=vampire/);
});

test('mobile navbar search stays in view in landscape', async ({ page }) => {
  await page.setViewportSize({ width: 820, height: 390 });
  await page.goto(buildAppUrl());
  await page.getByRole('button', { name: 'Open menu' }).click();
  const drawer = page.getByRole('dialog', { name: 'Navigation menu' });
  await drawer.getByRole('button', { name: 'Search the wiki' }).click();
  const search = drawer.getByRole('searchbox');
  await search.fill('arcana');
  await drawer.getByRole('button', { name: 'View all results' }).scrollIntoViewIfNeeded();
  await expect(search).toBeInViewport();
  await search.press('Escape');
  await expect(drawer.getByRole('button', { name: 'Search the wiki' })).toBeFocused();
});

test('sheet page renders the main trackers without runtime errors', async ({ page }) => {
  const pageErrors = [];
  page.on('pageerror', (error) => pageErrors.push(error.message));

  await page.goto(buildAppUrl(PATHS.SHEET));

  await expect(page.getByText('CHARACTER INFO')).toBeVisible();
  await expect(page.getByText('HEALTH')).toBeVisible();
  await expect(page.getByText('WILLPOWER')).toBeVisible();
  await expect(page.getByText('MORALITY')).toBeVisible();
  await expect(page.getByText('OTHER TRAITS')).toBeVisible();

  expect(pageErrors).toEqual([]);
});

test('sheet page exposes mage supernatural fields on page 2', async ({ page }) => {
  await page.goto(buildAppUrl(PATHS.SHEET));

  await page.getByRole('combobox', { name: /race/i }).click();
  await page.getByRole('option', { name: 'Mage' }).click();
  await page.getByRole('tab', { name: 'Page 2' }).click();

  await expect(page.getByText(/mana/i)).toBeVisible();
  await expect(page.getByText(/gnosis/i)).toBeVisible();
  await expect(page.getByText(/arcana/i)).toBeVisible();
  await expect(page.getByText(/mage practices/i)).toBeVisible();
  await expect(page.getByText(/rotes/i)).toBeVisible();
});

test('sheet page exposes vampire supernatural fields on page 2', async ({ page }) => {
  await page.goto(buildAppUrl(PATHS.SHEET));

  await page.getByRole('combobox', { name: /race/i }).click();
  await page.getByRole('option', { name: 'Vampire' }).click();
  await page.getByRole('tab', { name: 'Page 2' }).click();

  await expect(page.getByText(/vitae/i)).toBeVisible();
  await expect(page.getByText(/blood potency/i)).toBeVisible();
  await expect(page.getByText(/disciplines/i)).toBeVisible();
  await expect(page.getByText(/devotions/i)).toBeVisible();
});
