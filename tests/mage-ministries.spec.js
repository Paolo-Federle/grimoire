import { test, expect } from '@playwright/test';

const ministries = [
    ['Hegemonic Ministry', 'hegemonic_ministry', 'The Book of Mirrors'],
    ['Ministry of Panopticon', 'ministry_of_panopticon', 'The Gaze of Hypnos'],
    ['Ministry of Paternoster', 'ministry_of_paternoster', 'Holy War'],
    ['Praetorian Ministry', 'praetorian_ministry', 'Severix'],
];

for (const viewport of [{ width: 1440, height: 1000 }, { width: 390, height: 844 }]) {
    test(`Orders and ministries navigate at ${viewport.width}px`, async ({ page }) => {
        await page.setViewportSize(viewport);
        await page.goto('./#/mage/order');
        await expect(page.getByRole('heading', { name: 'Orders of the Pentacle', exact: true })).toBeVisible();
        await expect(page.getByRole('heading', { name: 'Ministries — Seers of the Throne', exact: true })).toBeVisible();
        await expect(page.getByRole('link', { name: 'Seers of the Throne', exact: true })).toHaveCount(0);
        if (viewport.width > 768) {
            await expect(page.locator('table')).toHaveCount(2);
            await expect(page.locator('table').nth(0).locator('tbody tr')).toHaveCount(5);
            await expect(page.locator('table').nth(1).locator('tbody tr')).toHaveCount(4);
        }
        for (const [name, slug, heading] of ministries) {
            await page.getByRole('link', { name, exact: true }).click();
            await expect(page).toHaveURL(new RegExp(`#/mage/ministries/${slug}$`));
            await expect(page.getByRole('heading', { name, exact: true })).toBeVisible();
            await expect(page.getByRole('heading', { name: heading, exact: true })).toBeVisible();
            await expect(page.getByRole('heading', { name: 'Game System Summary', exact: true })).toBeVisible();
            await page.reload();
            await expect(page.getByRole('heading', { name, exact: true })).toBeVisible();
            expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
            const breadcrumbs = page.getByRole('navigation', { name: 'Breadcrumb' });
            await expect(breadcrumbs.locator('[aria-current="page"]')).toHaveText(name);
            await expect(breadcrumbs.getByRole('link', { name, exact: true })).toHaveCount(0);
            await expect(page.locator('article header a')).toHaveCount(0);
            await breadcrumbs.getByRole('link', { name: 'Orders and Ministries', exact: true }).click();
            await expect(page.getByRole('heading', { name: 'Orders of the Pentacle', exact: true })).toBeVisible();
        }
        await page.screenshot({ path: `test-results/mage-orders-${viewport.width}.png`, fullPage: true });
        const response = await page.request.get('./search-index.json');
        expect(response.ok()).toBeTruthy();
        const entries = await response.json();
        const index = Array.isArray(entries) ? entries : entries.entries;
        for (const [name, slug] of ministries) {
            expect(index.some(item => item.title === name && item.path === `/mage/ministries/${slug}` && item.type === 'Ministry')).toBe(true);
        }
        await page.goto('./#/lexycon');
        await page.getByRole('textbox', { name: 'Search by Name' }).fill('Paternoster');
        await page.getByRole('link', { name: 'Ministry of Paternoster', exact: true }).click();
        await expect(page.getByRole('heading', { name: 'Ministry of Paternoster', exact: true })).toBeVisible();
        await page.screenshot({ path: `test-results/mage-ministry-detail-${viewport.width}.png`, fullPage: true });
        await page.goto('./#/search?q=Panopticon&scope=mage&type=Ministry');
        await page.getByRole('link', { name: /^Ministry of Panopticon Mage/ }).click();
        await expect(page.getByRole('heading', { name: 'Ministry of Panopticon', exact: true })).toBeVisible();
        await page.goto('./#/mage/ministries/missing');
        await expect(page.getByRole('heading', { name: 'Content not found' })).toBeVisible();
    });
}
