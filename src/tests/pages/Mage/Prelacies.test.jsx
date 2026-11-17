import { fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../../../App';
import Prelacies from '../../../pages/Mage/Prelacies';
import { PrelaciesData } from '../../../Data/Mage/PrelaciesData';
import { MinistryData } from '../../../Data/Mage/MinistryData';
import { mageLexyconData } from '../../../Data/LexyconData';
import { getLexyconPath } from '../../../pages/Generale/lexyconLinks';
import { getMagePrelacyPath, PATHS } from '../../../pages/path';

function renderRoute(element, route = PATHS.MAGE.PRELACIES) {
    return render(<MemoryRouter initialEntries={[route]} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>{element}</MemoryRouter>);
}

test('preserves learning requirements, independent initiations and Temple maintenance from the PDF', () => {
    const text = JSON.stringify(PrelaciesData.Learning.Content);
    for (const rule of ['Seer Status •', 'at least one dot of the Dream Merit', 'same cost as a Path Arcanum', 'same costs as common Arcana', 'Status Merits plus Gnosis', 'These are purchased separately', 'one hour of ritual activity', 'Every 24 hours', 'one of the owner’s Prelacies at a time', 'if the stone is moved or destroyed', 'mutually compatible']) {
        expect(text).toContain(rule);
    }
    expect(PrelaciesData.Book).toBe('SotT 72-78');
    expect(PrelaciesData.Prelacies.map(item => item.Name)).toEqual(['Doctrine', 'Fury', 'Obligation', 'Vision']);
    expect(new Set(PrelaciesData.Prelacies.map(item => item.Name)).size).toBe(4);
    PrelaciesData.Prelacies.forEach((item, index) => {
        expect(item.Content.filter(block => block.type === 'heading').map(block => block.text)).toEqual([
            `Crown of ${item.Name}`, `Sword of ${item.Name}`, `Temple of ${item.Name}`,
        ]);
        const abilities = item.Content.filter(block => Array.isArray(block.text));
        expect(abilities).toHaveLength([6, 3, 6, 6][index]);
        expect(abilities.slice(0,3).map(block => block.text[0].text.match(/^\((•+)\)/)[1])).toEqual(['•','••','•••']);
    });
    expect(JSON.stringify(PrelaciesData)).not.toMatch(/The Devil in the Details|Identifying the Target|Hecruitment|Lision|\uFFFD|\w-\s+\w/);
});

test('preserves the mechanical limits and the distinct, unranked Sword of Fury rule', () => {
    const text = (name) => JSON.stringify(PrelaciesData.Prelacies.find(item => item.Name === name).Content);
    expect(text('Doctrine')).toContain('four points of Mana to heal one point of resistant bashing or lethal damage');
    expect(text('Doctrine')).toContain('can’t heal resistant aggravated damage');
    expect(text('Doctrine')).toContain('spend a dot of Willpower (not a point)');
    expect(text('Fury')).toContain('adds her degrees of initiation as points of damage after the spell succeeds');
    expect(text('Fury')).toContain('Do not add dice to the spellcasting pool beforehand');
    expect(text('Fury')).toContain('failed dice replace successes');
    expect(text('Obligation')).toContain('not more than one point per occasion');
    expect(text('Obligation')).toContain('Spending more Mana than the target’s trait has no effect');
    expect(text('Vision')).toContain('spend a Willpower dot (not a point)');
    expect(text('Vision')).toContain('exceed the normal three dot limit');
    expect(text('Vision')).toContain('doesn’t lose her Defense');
});

test('keeps the explanation visible and lets each accordion open and close independently', async () => {
    renderRoute(<Prelacies />);
    expect(screen.getByRole('heading', { name: 'Prelacies', exact: true })).toBeVisible();
    expect(screen.getByText(/The Seers of the Throne say the Exarchs assembled/)).toBeVisible();
    const sections = [...document.querySelectorAll('details')];
    expect(sections).toHaveLength(5);
    sections.forEach(section => expect(section.open).toBe(false));
    fireEvent.click(sections[0].querySelector('summary'));
    await waitFor(() => expect(sections[0].open).toBe(true));
    expect(screen.getByRole('heading', { name: 'The Temple', exact: true })).toBeVisible();
    fireEvent.click(sections[1].querySelector('summary'));
    await waitFor(() => expect(sections[1].open).toBe(true));
    expect(sections[0].open).toBe(true);
    fireEvent.click(sections[0].querySelector('summary'));
    await waitFor(() => expect(sections[0].open).toBe(false));
    expect(sections[1].open).toBe(true);
});

test.each(MinistryData)('opens the correct Prelacy from $Name related rules', async (ministry) => {
    renderRoute(<App />, ministry.link);
    const related = await screen.findByRole('navigation', { name: 'Related ministry rules' }, { timeout: 30000 });
    expect(within(related).getByRole('link', { name: 'Prelacies', exact: true })).toHaveAttribute('href', PATHS.MAGE.PRELACIES);
    fireEvent.click(within(related).getByRole('link', { name: ministry.Prelacy, exact: true }));
    expect(await screen.findByRole('heading', { name: `Crown of ${ministry.Prelacy}` })).toBeVisible();
    const details = screen.getByRole('heading', { name: ministry.Prelacy, exact: true }).closest('details');
    expect(details.open).toBe(true);
    expect(within(details).getByRole('link', { name: ministry.Name, exact: true })).toHaveAttribute('href', ministry.link);
}, 35000);

test('links the Traits catalog and glossary to the rules page', async () => {
    renderRoute(<App />, PATHS.TRAITS);
    const link = await screen.findByRole('link', { name: 'Prelacies', exact: true }, { timeout: 30000 });
    expect(link).toHaveAttribute('href', PATHS.MAGE.PRELACIES);
    fireEvent.click(link);
    expect(await screen.findByRole('heading', { name: 'Prelacies', exact: true })).toBeInTheDocument();
    const entry = mageLexyconData.find(item => item.Name === 'Prelacy');
    expect(getLexyconPath('Mage the Awakening', entry)).toBe(PATHS.MAGE.PRELACIES);
    for (const item of PrelaciesData.Prelacies) {
        const entry = mageLexyconData.find(entry => entry.Name === `Prelacy of ${item.Name}`);
        expect(entry?.Description).toBeTruthy();
        expect(getLexyconPath('Mage the Awakening', entry)).toBe(getMagePrelacyPath(item.Name));
    }
}, 35000);

test('opens direct learning links and keeps an unknown selection usable', () => {
    const { unmount } = renderRoute(<Prelacies />, getMagePrelacyPath('Learning Prelacies'));
    expect(screen.getByRole('heading', { name: 'The Temple', exact: true })).toBeVisible();
    unmount();
    renderRoute(<Prelacies />, `${PATHS.MAGE.PRELACIES}?prelacy=unknown`);
    expect(screen.getByRole('heading', { name: 'Prelacies', exact: true })).toBeInTheDocument();
    [...document.querySelectorAll('details')].forEach(section => expect(section.open).toBe(false));
});
