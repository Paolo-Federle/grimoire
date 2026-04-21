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
