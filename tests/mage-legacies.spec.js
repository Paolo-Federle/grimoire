const { test, expect } = require('@playwright/test');

const BASE_URL = process.env.PLAYWRIGHT_APP_BASE || 'http://127.0.0.1:3000/grimoire/';

for (const [device, viewport] of [
    ['desktop', { width: 1440, height: 1000 }],
    ['mobile', { width: 390, height: 844 }],
]) {
    test(`Legacy filters preserve navigation and favorites on ${device}`, async ({ page }) => {
        const errors = [];
        page.on('pageerror', error => errors.push(error.message));
        await page.setViewportSize(viewport);
        await page.goto(`${BASE_URL}#/mage/legacy`);
        const main = page.locator('main').filter({ has: page.getByRole('heading', { name: 'Legacies', exact: true }) });
        await expect(main.getByRole('status')).toHaveText('Showing 94 of 94 Legacies');
        for (const [label, value] of [
            ['Path', 'Acanthus'], ['Order', 'Seers of the Throne'], ['Primary Arcanum', 'Space'],
            ['Optional Arcanum', 'Time'], ['Conjunctional Arcanum', 'Life'],
        ]) {
            await main.getByRole('combobox', { name: label, exact: true }).selectOption(value);
        }
        await expect(main.getByRole('status')).toHaveText('Showing 1 of 94 Legacies');
        await main.getByRole('button', { name: 'add favorite', exact: true }).click();
        await expect(main.getByRole('button', { name: 'remove favorite', exact: true })).toBeVisible();
        const filteredUrl = page.url();
        await main.getByRole('link', { name: 'Walkers in Mists', exact: true }).click();
        await expect(page.getByRole('heading', { name: 'Walkers in Mists', exact: true })).toBeVisible();
        const background = page.getByRole('region', { name: 'Walkers in Mists background' });
        await expect(background).toContainText('Path: Acanthus');
        await expect(background).toContainText('Order: Mysterium, Seers of the Throne');
        await page.goBack();
        await expect(page).toHaveURL(filteredUrl);
        await expect(main.getByRole('status')).toHaveText('Showing 1 of 94 Legacies');
        await page.reload();
        await expect(main.getByRole('combobox', { name: 'Optional Arcanum', exact: true })).toHaveValue('Time');
        await expect(main.getByRole('button', { name: 'remove favorite', exact: true })).toBeVisible();
        await main.getByRole('combobox', { name: 'Path', exact: true }).selectOption('Moros');
        await expect(main.getByRole('status')).toHaveText('Showing 0 of 94 Legacies');
        await expect(main.getByText(/No Legacies match these filters/)).toBeVisible();
        await main.getByRole('button', { name: 'Clear filters', exact: true }).click();
        await expect(main.getByRole('status')).toHaveText('Showing 94 of 94 Legacies');
        if (device === 'mobile') {
            expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
        }
        expect(errors).toEqual([]);
    });
}
