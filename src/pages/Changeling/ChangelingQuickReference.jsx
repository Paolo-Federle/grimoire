import React from 'react';
import { Link } from 'react-router-dom';
import TemplateQuickReference, { ReferenceDetails, ReferenceExperience, ReferenceSection, ReferenceTable } from '../../components/TemplateQuickReference';
import { ChangelingExperienceData } from '../../Data/Changeling/ChangelingExperienceData';
import { WyrdData } from '../../Data/Changeling/WyrdData';
import { slugify } from '../../utils';
import { PATHS } from '../path';

const changeling = PATHS.CHANGELING;
const seemings = [
    ['Beast', 'Fang and Talon', 'Animal-blooded hunters and survivors of Faerie.', 'Broadback, Hunterheart, Runnerswift, Skitterskulk, Steepscrambler, Swimmerskin, Venombite, Windwing'],
    ['Darkling', 'Darkness', 'Nocturnal fae at home in shadows and hidden places.', 'Antiquarian, Gravewight, Leechfinger, Mirrorskin, Tunnelgrub'],
    ['Elemental', 'Elements', 'Fae shaped by the raw elements of nature.', 'Airtouched, Earthbones, Fireheart, Manikin, Snowskin, Waterborn, Woodblood'],
    ['Fairest', 'Vainglory', 'Elegant and adored fae who turn beauty to their advantage.', 'Bright One, Dancer, Draconic, Flowering, Muse'],
    ['Ogre', 'Stone', 'Powerful and often brutal goblins and giants.', 'Cyclopean, Farwalker, Gargantuan, Gristlegrinder, Stonebones, Water-Dweller'],
    ['Wizened', 'Artifice', 'Subtle artisans and ingenious makers.', 'Artist, Brewer, Chatelaine, Chirurgeon, Oracle, Soldier, Smith, Woodwalker'],
];
const courts = [
    ['Spring', 'Desire', 'The Emerald Court leaves Arcadian sorrow behind and draws strength from desire and the joy of living.'],
    ['Summer', 'Wrath', 'The Crimson Court turns anger at its captors into the strength to fight enslavement.'],
    ['Autumn', 'Fear', 'The Ashen Court draws Glamour from mortal fears to fuel fae sorcery.'],
    ['Winter', 'Sorrow', 'The Onyx Court survives through secrecy and draws strength from sorrow.'],
];
const contractGroups = [
    ['General', [
        ['Dream', 'Enter and shape others’ dreams.'],
        ['Hearth', 'Bestow traditional blessings of good fortune.'],
        ['Mirror', 'Change your appearance.'],
        ['Smoke', 'Move unseen and avoid detection.'],
    ]],
    ['Seeming', [
        ['Artifice', 'Practice supernatural craftsmanship.'],
        ['Darkness', 'Work nocturnal magic.'],
        ['Elements', 'Command the element you are bound to.'],
        ['Fang and Talon', 'Emulate, speak with, and command animals.'],
        ['Stone', 'Draw on supernatural might and force.'],
        ['Vainglory', 'Wield supernatural beauty and splendor.'],
    ]],
    ['Court', [
        ['Fleeting Spring', 'Influence desire.'],
        ['Eternal Spring', 'Encourage growth and rejuvenation.'],
        ['Fleeting Summer', 'Manipulate wrath.'],
        ['Eternal Summer', 'Draw on heat and vigor.'],
        ['Fleeting Autumn', 'Inspire fear or ward against it.'],
        ['Eternal Autumn', 'Bless the harvest or cause things to wither.'],
        ['Fleeting Winter', 'Invoke and control sorrow.'],
        ['Eternal Winter', 'Wield snow and ice.'],
    ]],
];
const merits = [
    ['Court Goodwill', '• to •••••'],
    ['Harvest', '• to •••••'],
    ['Hollow', '• to ••••• (special)', `${PATHS.LOCATIONS_BASE}/hollow`],
    ['Mantle', '• to •••••'],
    ['New Identity', '•, ••, or ••••'],
    ['Token', '• to •••••'],
];

export default function ChangelingQuickReference() {
    return (
        <TemplateQuickReference game="Changeling: the Lost" base="WoD 34-35" template="CtL 76-77">
            <ReferenceSection id="creation-seeming" title="Seeming" to={changeling.SEEMINGS}>
                <p>Choose the faerie archetype you took on during your Durance. Your Seeming grants an affinity Contract.</p>
                <ReferenceTable headers={['Seeming', 'Affinity Contract and profile']} rows={seemings.map(([name, affinity, profile]) => [
                    name, name, <><strong>{affinity}</strong><div>{profile}</div></>,
                ])} />
            </ReferenceSection>
            <ReferenceSection id="creation-kith" title="Kith" to={changeling.KITHS}>
                <p>You may choose a Kith from your Seeming. It refines your archetype and grants its own blessing.</p>
                <ReferenceTable headers={['Seeming', 'Kith options']} rows={seemings.map(([name, , , kiths]) => [
                    name, name, kiths,
                ])} />
            </ReferenceSection>
            <ReferenceSection id="creation-court" title="Court" to={changeling.COURT}>
                <p>Join one of the four Great Courts or remain Courtless. A Court grants affinity with both the Fleeting and Eternal Contracts of its season.</p>
                <ReferenceTable headers={['Court', 'Emotion and outlook']} rows={[
                    ...courts.map(([season, emotion, profile]) => [
                        season, `${season} Court`, <><strong>{emotion}</strong><div>{profile}</div></>,
                    ]),
                    ['Courtless', 'Courtless', 'Independent changelings sometimes known as the Colorless Court.'],
                ]} />
            </ReferenceSection>
            <ReferenceSection id="creation-contracts" title="Contracts" to={changeling.CONTRACTS}>
                <p>Assign 5 dots to Contracts. Spend at least 2 dots in one or two affinity Contract lists from your Seeming or Court.</p>
                <p>Goblin Contracts offer bargains at a price. At creation you may buy only 1-dot Goblin Contracts.</p>
                {contractGroups.map(([group, contracts]) => (
                    <ReferenceDetails key={group} title={`${group} Contracts`}>
                        <ReferenceTable headers={['Contract', 'Domain']} rows={contracts.map(([name, domain]) => [name, name, domain])} />
                    </ReferenceDetails>
                ))}
            </ReferenceSection>
            <ReferenceSection id="creation-wyrd" title="Wyrd" to={changeling.WYRD}>
                <p>Start at 1 dot. Spend 3 Merit dots for each additional dot of Wyrd.</p>
            </ReferenceSection>
            <ReferenceSection id="creation-glamour" title="Glamour" to={PATHS.ENERGY_POOLS}>
                <p>Start with half the maximum Glamour pool for your Wyrd, rounded up. At Wyrd 1, you start with {Math.ceil(Number(WyrdData[0]['Max Glamour Pool/Turn'].split('/')[0]) / 2)} Glamour.</p>
            </ReferenceSection>
            <ReferenceSection id="creation-merits" title="Merits" to={changeling.MERITS}>
                <ReferenceTable headers={['Merit', 'Rating']} rows={merits.map(([name, rating, path = `${changeling.MERITS}/${slugify(name)}`]) => [
                    name, <Link to={path}>{name}</Link>, rating,
                ])} />
            </ReferenceSection>
            <ReferenceSection id="creation-xp" title="Experience Point Costs" to={changeling.EXPERIENCE}>
                <ReferenceExperience data={ChangelingExperienceData} />
                <p>Seeming and Court determine affinity. Dream, Hearth, Mirror, and Smoke count as affinity Contracts for all changelings.</p>
                <p>Spend XP on Willpower only to restore dots lost through sacrifice, including feats that require a sacrifice.</p>
            </ReferenceSection>
        </TemplateQuickReference>
    );
}
