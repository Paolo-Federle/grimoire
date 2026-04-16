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
});

test('sheet page renders the main trackers without runtime errors', async ({ page }) => {
  const pageErrors = [];
  page.on('pageerror', (error) => pageErrors.push(error.message));

  await page.goto(buildAppUrl(PATHS.SHEET));

  await expect(page.getByText('CHARACTER INFO')).toBeVisible();
  await expect(page.getByText('HEALTH')).toBeVisible();
  await expect(page.getByText('WILLPOWER')).toBeVisible();

  expect(pageErrors).toEqual([]);
});
