import { test, expect } from '@playwright/test';
import { PATHS } from '../src/pages/path';

const appBase = process.env.PLAYWRIGHT_APP_BASE || 'http://127.0.0.1:3000/grimoire/';

const references = [
  [PATHS.MAGE, 'Gnosis', 'Path lore and tarot', 'Arcadia', [
    'Path', 'Order', 'Favored Resistance Attribute', 'Arcana', 'Rotes', 'Gnosis', 'Mana', 'Merits', 'Experience Point Costs',
  ]],
  [PATHS.VAMPIRE, 'Blood Potency', 'Clan weaknesses', 'Coils of the Dragon, Crúac, and Theban Sorcery each require membership in their associated covenant.', [
    'Clan', 'Covenant', 'Favored Attributes', 'Disciplines', 'Blood Potency', 'Merits', 'Experience Point Costs',
  ]],
  [PATHS.WEREWOLF, 'Primal Urge', 'Tribe profiles', 'Totem uses its own rate of 3 XP per dot. The ordinary Merit rate excludes Totem.', [
    'Auspice', 'Specialty Skills', 'Tribe', 'Primary Renown', 'Gift Lists', 'Primal Urge', 'Essence', 'Merits', 'Experience Point Costs',
  ]],
  [PATHS.CHANGELING, 'Wyrd', 'Court Contracts', /half the maximum Glamour pool.*rounded up/, [
    'Seeming', 'Kith', 'Court', 'Contracts', 'Wyrd', 'Glamour', 'Merits', 'Experience Point Costs',
  ]],
  [PATHS.GEIST, 'Psyche', null, /Choose one from your Threshold and another of your choice/, [
    'Archetype', 'Threshold', 'Keys', 'Manifestations', 'Psyche', 'Merits', 'Experience Point Costs',
  ]],
  [PATHS.MUMMY, 'Memory (Morality Trait)', null, /Spend 20 XP/, [
    'Prelude', 'Judge and Decree', 'Guild', 'Pillars', 'Affinities and Utterances', 'Merits', 'Sekhem',
    'Memory (Morality Trait)', 'Starting Experience', 'Experience Point Costs',
  ], 'Start at 3 dots.'],
  [PATHS.PROMETHEAN, 'Azoth', 'Transmutation domains', /add 3 XP for each skipped rank/, [
    'Lineage', 'Refinement', 'Transmutations', 'Azoth', 'Pyros', 'Merits', 'Experience Point Costs',
  ]],
];

for (const [line, powerTrait, detailsTitle, sidebarRule, headings, startingRating = 'Start at 1 dot.'] of references) {
  test(`${powerTrait} reference follows the template sidebar order`, async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(new URL(`#${line.BASE}`, appBase).toString());
    await page.getByRole('link', { name: 'Character Creation Quick Reference' }).click();

    const main = page.getByRole('main');
    const jumps = main.getByRole('navigation', { name: 'On this page' });
    await expect(main.getByRole('heading', { level: 2 })).toHaveText(headings);
    await expect(jumps.getByRole('link')).toHaveText(headings);
    await expect(main.getByText(sidebarRule, { exact: true })).toBeVisible();
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(390);

    const powerSection = main.locator('section').filter({ has: page.getByRole('heading', { name: powerTrait, exact: true }) });
    await expect(powerSection).toContainText(startingRating);

    await main.getByRole('link', { name: 'Skip to reference content' }).press('Enter');
    await expect(main.getByRole('heading', { name: headings[0], exact: true })).toBeFocused();
    const costsLink = jumps.getByRole('link', { name: 'Experience Point Costs' });
    await costsLink.click();
    const costs = main.getByRole('heading', { name: 'Experience Point Costs' });
    await expect(page).toHaveURL(new URL(`#${line.QUICK_REFERENCE}#creation-xp`, appBase).toString());
    await expect(costs).toBeFocused();
    await expect(costsLink).toHaveAttribute('aria-current', 'location');
    await expect(costs).toBeInViewport();
    await page.reload();
    await expect(costs).toBeInViewport();

    if (detailsTitle) {
      const details = main.locator('details').filter({ has: page.locator('summary').filter({ hasText: detailsTitle }) });
      await details.locator('summary').press('Enter');
      await expect(details).toHaveAttribute('open', '');
    }
  });
}
