import React from 'react';
import { Link } from 'react-router-dom';
import TemplateQuickReference, { ReferenceDetails, ReferenceExperience, ReferenceSection, ReferenceTable } from '../../components/TemplateQuickReference';
import { PrometheanExperienceData } from '../../Data/Promethean/PrometheanExperienceData';
import { slugify } from '../../utils';
import { PATHS } from '../path';

const promethean = PATHS.PROMETHEAN;
const lineages = [
    ['Frankenstein', 'Wretched', 'Unholy Strength', 'Patchwork bodies sparked to life by lightning, with an excess of choler. Their Progenitor was Frankenstein’s monster.'],
    ['Galatea', 'Muses', 'Mesmerizing Appearance', 'Beautiful bodies assembled from perfect parts and enlivened by the Breath of Life, with an excess of sanguine humour. Their Progenitor was Pygmalion’s Galatea.'],
    ['Osiris', 'Nepri', 'Revivification', 'Reborn in water and dominated by phlegmatic humour. Their Progenitor was Osiris, whom Isis reassembled on the banks of the Nile.'],
    ['Tammuz', 'Golems', 'Unholy Stamina', 'Reborn from the earth and weighed down by melancholic humour. Their Progenitor was a Babylonian Golem.'],
    ['Ulgan', 'Riven', 'Ephemeral Flesh', 'Animated by ectoplasm left in bodies torn by spirits. Ectoplasmic humour often overpowers reason. Their Progenitor was a Siberian shaman.'],
];
const refinements = [
    ['Aurum', 'Gold', 'Mimics', 'Deception, Mesmerism', 'Mortality. Learn to move among humans as one of them.'],
    ['Cuprum', 'Copper', 'Pariahs', 'Metamorphosis, Sensorium', 'Self. Make peace with Torment and the world beyond humanity.'],
    ['Ferrum', 'Iron', 'Titans', 'Corporeum, Vitality', 'Corpus. Strengthen the body as a way to build a soul.'],
    ['Mercurius', 'Quicksilver', 'Ophidians', 'Alchemicus, Vulcanus', 'Pyros. Study how to control the Divine Fire.'],
    ['Stannum', 'Tin', 'Furies', 'Disquietism, Electrification', 'Torment. Embrace misery and use it to pursue vengeance.'],
];
const transmutations = [
    ['Alchemicus', 'Identify and reshape material substances.'],
    ['Corporeum', 'Control bodily functions, regenerate flesh, or harden skin.'],
    ['Deception', 'Confuse or evade opponents by altering your appearance.'],
    ['Disquietism', 'Manipulate or suppress your Disquieting aura.'],
    ['Electrification', 'Generate and control electricity, from powering devices to hurling lightning.'],
    ['Mesmerism', 'Use Disquiet to influence minds, from entrancing people to planting a false identity.'],
    ['Metamorphosis', 'Change the shape of your body, grow claws or fangs, or create a homunculus.'],
    ['Sensorium', 'Heighten your senses to read auras or observe distant places and people.'],
    ['Vitality', 'Channel Azoth and the humours into feats of strength.'],
    ['Vulcanus', 'Sense and manipulate Pyros, including stealing it from other Prometheans.'],
];
const merits = [
    ['Elpis', '• to •••••'],
    ['Lair', '• to •••', `${PATHS.LOCATIONS_BASE}/lair`],
    ['Repute', '• to •••'],
    ['Residual Memory', '• to •••••'],
    ['Unpalatable Aura', '••'],
];
const experience = [
    'Attribute', 'Azoth', 'Merit', 'Humanity',
    'Affinity Transmutation', 'Non-affinity Transmutation', 'Skill', 'Skill specialty',
].map((trait) => PrometheanExperienceData.find((row) => row.Trait === trait));

export default function PrometheanQuickReference() {
    return (
        <TemplateQuickReference game="Promethean: the Created" base="WoD 34-35" template="PTC 86">
            <ReferenceSection id="creation-lineage" title="Lineage" to={promethean.LINEAGE}>
                <p>Choose the Lineage that descends from your Progenitor, the first of its kind to be animated by a mortal demiurge. Your Lineage grants a <Link to={promethean.BESTOWMENTS}>Bestowment</Link>.</p>
                <ReferenceTable headers={['Lineage', 'Bestowment and profile']} rows={lineages.map(([name, nickname, bestowment, profile]) => [
                    name, <>{name}<div className="font-normal">{nickname}</div></>,
                    <><strong>{bestowment}</strong><div>{profile}</div></>,
                ])} />
            </ReferenceSection>
            <ReferenceSection id="creation-refinement" title="Refinement" to={promethean.REFINEMENTS}>
                <p>Choose the practice you follow in pursuit of the Magnum Opus. Your Refinement shapes your Azoth and makes its affinity Transmutations easier to learn.</p>
                <ReferenceTable headers={['Refinement', 'Affinity Transmutations and focus']} rows={refinements.map(([name, metal, nickname, affinities, focus]) => [
                    name, <>{name}<div className="font-normal">{metal} · {nickname}</div></>,
                    <><strong>{affinities}</strong><div>{focus}</div></>,
                ])} />
            </ReferenceSection>
            <ReferenceSection id="creation-transmutations" title="Transmutations" to={promethean.TRANSMUTATIONS}>
                <p>Assign 3 dots to Transmutations. Spend at least 1 dot on a Transmutation favored by your Refinement.</p>
                <ReferenceDetails title="Transmutation domains">
                    <ReferenceTable headers={['Transmutation', 'Domain']} rows={transmutations.map(([name, domain]) => [name, name, domain])} />
                </ReferenceDetails>
            </ReferenceSection>
            <ReferenceSection id="creation-azoth" title="Azoth" to={promethean.AZOTH}>
                <p>Start at 1 dot. Spend 3 of your 7 Merit dots for Azoth 2, or 6 for Azoth 3.</p>
            </ReferenceSection>
            <ReferenceSection id="creation-pyros" title="Pyros" to={PATHS.ENERGY_POOLS}>
                <p>Starting Pyros equals Humanity.</p>
            </ReferenceSection>
            <ReferenceSection id="creation-merits" title="Merits" to={promethean.MERITS}>
                <p>Prometheans are subject to restrictions when buying Social Merits. See <Link to={promethean.MERITS}>Promethean Merits</Link> for the restrictions.</p>
                <ReferenceTable headers={['Merit', 'Rating']} rows={merits.map(([name, rating, path = `${promethean.MERITS}/${slugify(name)}`]) => [
                    name, <Link to={path}>{name}</Link>, rating,
                ])} />
            </ReferenceSection>
            <ReferenceSection id="creation-xp" title="Experience Point Costs" to={promethean.EXPERIENCE}>
                <ReferenceExperience data={experience} />
                <p>Affinity depends on your Refinement. If you buy a Transmutation without knowing at least one Transmutation at each lower rank in the same class, add 3 XP for each skipped rank. See the core rulebook’s Transmutation Costs sidebar on p. 118.</p>
            </ReferenceSection>
        </TemplateQuickReference>
    );
}
