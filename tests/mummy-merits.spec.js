const { test, expect } = require('@playwright/test');

const BASE_URL = process.env.PLAYWRIGHT_APP_BASE || 'http://127.0.0.1:3000/grimoire/';

test('Mummy merit tables open every section and preserve structured details', async ({ page }) => {
    const errors = [];
    page.on('pageerror', (error) => errors.push(error.message));

    for (const [name, detailText] of [
        ['Language', 'Iremite Egyptian'],
        ['Disciple of the Wheel', 'Eye of Radiance'],
        ['Temple', 'One investor'],
        ['Ravaged', 'Tomb robbers'],
        ['Cult', 'Enter his cult'],
        ['Reach', 'Unrolled Tasks'],
        ['Blasé', 'never succumb to Sybaris'],
    ]) {
        await page.goto(`${BASE_URL}#/mummy/merits`);
        await expect(page.getByRole('columnheader', { name: 'Content', exact: true })).toHaveCount(0);
        await page.getByRole('link', { name, exact: true }).click();
        await expect(page.locator('.longTextContainer h1')).toContainText(name);
        await expect(page.locator('.longTextContainer')).toContainText(detailText);
    }

    await page.goto(`${BASE_URL}#/mummy/merits/missing_merit`);
    await expect(page.getByRole('heading', { name: 'Content not found', exact: true })).toBeVisible();
    expect(errors).toEqual([]);
});

test('Mummy merits support mobile ranked cards and favorite detail links', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(`${BASE_URL}#/mummy/merits`);

    const languageCard = page.locator('.bg-white').filter({ has: page.getByRole('link', { name: 'Language', exact: true }) });
    await languageCard.getByRole('button', { name: 'add favorite', exact: true }).click();
    await expect(languageCard.getByRole('button', { name: 'remove favorite', exact: true })).toBeVisible();

    const styleCard = page.locator('.bg-neutral-900').filter({ has: page.getByRole('link', { name: 'Disciple of the Wheel', exact: true }) });
    await styleCard.getByRole('button').last().click();
    await expect(page.getByText('May purchase proprietary Utterances.', { exact: true })).toBeVisible();
    await page.getByRole('link', { name: 'Disciple of the Wheel', exact: true }).click();
    await expect(page.locator('.detail-content-section-title')).toHaveText(['•', '••', '•••', '••••', '•••••']);
    await expect(page.locator('.longTextContainer')).toContainText('instead of her Memory rating');

    await page.goto(`${BASE_URL}#/favorites`);
    await page.getByRole('link', { name: 'Language', exact: true }).click();
    await expect(page.locator('.longTextContainer')).toContainText('Iremite Egyptian');
});
