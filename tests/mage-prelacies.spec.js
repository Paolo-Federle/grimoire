import { test, expect } from '@playwright/test';

const ministries = [
    ['hegemonic_ministry', 'Obligation'],
    ['ministry_of_panopticon', 'Vision'],
    ['ministry_of_paternoster', 'Doctrine'],
    ['praetorian_ministry', 'Fury'],
];

for (const viewport of [{ width: 1440, height: 1000 }, { width: 390, height: 844 }]) {
    test(`Prelacies accordions and ministry links work at ${viewport.width}px`, async ({ page }) => {
        await page.setViewportSize(viewport);
        await page.goto('./#/traits');
        await page.getByRole('link', { name: 'Prelacies', exact: true }).click();
        await expect(page.getByRole('heading', { name: 'Prelacies', exact: true })).toBeVisible();
        await expect(page.getByRole('heading', { name: 'Prelacies', exact: true })).toBeInViewport();
        await expect(page.locator('details')).toHaveCount(5);
        await expect(page.locator('details[open]')).toHaveCount(0);
        await expect(page.getByText(/The Seers of the Throne say the Exarchs assembled/)).toBeVisible();
        await page.screenshot({ path: `test-results/prelacies-${viewport.width}.png`, fullPage: true });

        const learning = page.locator('details#learning_prelacies');
        await learning.locator('summary').focus();
        await page.keyboard.press('Enter');
        await expect(learning).toHaveAttribute('open', '');
        await expect(learning.getByText(/Every 24 hours/)).toBeVisible();
        await learning.locator('summary').click();
        await expect(learning).not.toHaveAttribute('open');
        for (const name of ['Doctrine', 'Fury', 'Obligation', 'Vision']) {
            const accordion = page.locator(`details#${name.toLowerCase()}`);
            await accordion.locator('summary').click();
            await expect(accordion.getByRole('heading', { name: `Temple of ${name}`, exact: true })).toBeVisible();
            await accordion.locator('summary').click();
            await expect(accordion).not.toHaveAttribute('open');
        }
        for (const [slug, name] of ministries) {
            await page.goto(`./#/mage/ministries/${slug}`);
            await page.getByRole('navigation', { name: 'Related ministry rules' }).getByRole('link', { name, exact: true }).click();
            await expect(page).toHaveURL(new RegExp(`#/mage/prelacies\\?prelacy=${name.toLowerCase()}$`));
            const accordion = page.locator(`details#${name.toLowerCase()}`);
            await expect(accordion).toHaveAttribute('open', '');
            await expect(accordion.getByRole('heading', { name: `Crown of ${name}` })).toBeVisible();
            await page.reload();
            await expect(accordion).toHaveAttribute('open', '');
            expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
        }
        await page.screenshot({ path: `test-results/prelacy-fury-${viewport.width}.png`, fullPage: true });
        await page.goto('./#/lexycon');
        await page.getByRole('textbox', { name: 'Search by Name' }).fill('Prelacy of Vision');
        await page.getByRole('link', { name: 'Prelacy of Vision', exact: true }).click();
        await expect(page.locator('details#vision')).toHaveAttribute('open', '');
        await page.goto('./#/search?q=Doctrine&scope=mage&type=Prelacy');
        await page.getByRole('link', { name: /^Doctrine Mage/ }).click();
        await expect(page.locator('details#doctrine')).toHaveAttribute('open', '');
        const index = await (await page.request.get('./search-index.json')).json();
        expect(index.filter(item => item.type === 'Prelacy')).toHaveLength(6);
    });
}
