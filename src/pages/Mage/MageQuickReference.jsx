import React from 'react';
import { Link } from 'react-router-dom';
import TemplateQuickReference, { ReferenceDetails, ReferenceExperience, ReferenceSection, ReferenceTable } from '../../components/TemplateQuickReference';
import { allLocation } from '../../Data/LocationMeritData';
import { MageExperienceData } from '../../Data/Mage/MageExperienceData';
import { mageMeritsData } from '../../Data/Mage/mageMeritsData';
import OrderData from '../../Data/Mage/OrderData';
import PathData from '../../Data/Mage/PathData';
import { slugify } from '../../utils';
import { PATHS } from '../path';

const mage = PATHS.MAGE;
const tarot = {
    Acanthus: 'The Fool, guided by intuition and luck.',
    Mastigos: 'The Devil, guided by unrestrained will.',
    Moros: 'Death, steadfast through change.',
    Obrimos: 'Strength, driven by a divine purpose.',
    Thyrsus: 'The Moon, following passion and impulse.',
};
const orderSummaries = {
    'Adamantine Arrow': 'Uses combat magic to defend cabals and sanctums.',
    'Council of Free Assemblies': 'Modernizes magical practice by breaking with old conventions.',
    'Guardians of the Veil': 'Keeps the Mysteries safe from abuse and exposure.',
    Mysterium: 'Seeks hidden lore in the material world and beyond.',
    'Silver Ladder': 'Promotes a hierarchy of the Awakened with the order at its head.',
};
const arcana = [
    ['Death', mage.DEATH, 'Ghosts, decay, and the Underworld.'],
    ['Fate', mage.FATE, 'Chance, luck, curses, and binding oaths.'],
    ['Forces', mage.FORCE, 'Physical energy, including fire, storms, and gravity.'],
    ['Life', mage.LIFE, 'Living organisms, from plants to people.'],
    ['Matter', mage.MATTER, 'Inorganic substances such as stone, metal, and plastic.'],
    ['Mind', mage.MIND, 'Reading and influencing thoughts and emotions.'],
    ['Prime', mage.PRIME, 'Magic itself, including Mana, illusions, and enchantments.'],
    ['Spirit', mage.SPIRIT, 'Communing with and directing spirits.'],
    ['Space', mage.SPACE, 'Distance and location, including teleportation and scrying.'],
    ['Time', mage.TIME, 'Looking into the past or future and altering the flow of time.'],
];
const meritNames = [
    'Artifact', 'Destiny', 'Dream', 'Enhanced Item', 'Familiar', 'Hallow', 'High Speech',
    'Imbued Item', 'Library', 'Occultation', 'Sanctum', 'Sleepwalker Retainer',
    'Status (Consilium or Order)', 'Thrall',
];
const templateRatings = {
    'Enhanced Item': '• or higher',
    Thrall: '•••',
};
export default function MageQuickReference() {
    return (
        <TemplateQuickReference game="Mage: the Awakening" base="WoD 34-45" template="M:tA 68-69">
            <ReferenceSection id="creation-path" title="Path" to={mage.PATH}>
                <p>Choose a Path. It determines your Ruling Arcana and the Supernal Realm from which you draw magic.</p>
                <ReferenceTable headers={['Path', 'Ruling Arcana and Supernal Realm']} rows={PathData.map((path) => [
                    path.Name, <Link to={path.link}>{path.Name}</Link>,
                    <><strong>{path['Ruling arcana'].replace('/', ', ')}</strong><div>{path.Realm}</div></>,
                ])} />
                <ReferenceDetails title="Path lore and tarot">
                    <dl className="space-y-1">
                        {PathData.map((path) => (
                            <div key={path.Name}>
                                <dt className="inline font-semibold">{path.Name}. </dt>
                                <dd className="inline">{path.Tagline}. Watchtower of the {path.Watchtower}, in {path.Realm} ({path.RealmDescription}). {tarot[path.Name]}</dd>
                            </div>
                        ))}
                    </dl>
                </ReferenceDetails>
            </ReferenceSection>
            <ReferenceSection id="creation-order" title="Order" to={mage.ORDER}>
                <p>Choose an order or record Apostate. Orders teach members to cast rotes more effectively with their Rote Specialties.</p>
                <ReferenceTable headers={['Order', 'Rote specialties and focus']} rows={
                    OrderData.filter((order) => Object.hasOwn(orderSummaries, order.Name)).map((order) => [
                        order.Name,
                        <Link to={order.link}>{order.Name === 'Council of Free Assemblies' ? 'Free Council' : order.Name}</Link>,
                        <><strong>{order['Rote Skills'].trim()}</strong><div>{orderSummaries[order.Name]}</div></>,
                    ])
                } />
            </ReferenceSection>
            <ReferenceSection id="creation-favored-attribute" title="Favored Resistance Attribute">
                <p>Add one dot to your Path’s favored Resistance Attribute.</p>
                <ReferenceTable headers={['Path', 'Favored Attribute']} rows={PathData.map((path) => [
                    path.Name, path.Name, path['Bonus trait'],
                ])} />
            </ReferenceSection>
            <ReferenceSection id="creation-arcana" title="Arcana" to={mage.ARCANA}>
                <p>Assign 2, 2, and 1 dots across three Arcana, including both Ruling Arcana. Add one more dot to one of those Arcana or learn a fourth.</p>
                <ReferenceDetails title="Arcanum domains">
                    <ReferenceTable headers={['Arcanum', 'Domain']} rows={arcana.map(([name, link, description]) => [
                        name, <Link to={link}>{name}</Link>, description,
                    ])} />
                </ReferenceDetails>
            </ReferenceSection>
            <ReferenceSection id="creation-rotes" title="Rotes">
                <p>Spend 6 dots on rotes. Each rote costs dots equal to its highest required Arcanum rating. Choose rotes at or below your rating in the relevant Arcanum.</p>
                <ReferenceDetails title="Rote allocation example">
                    <p>With Mind 3, Space 2, and Forces 1, these allocations each spend 6 dots.</p>
                    <ul className="list-disc space-y-1 pl-5">
                        <li>One Mind 3 rote, one Space 2 rote, and one Forces 1 rote.</li>
                        <li>Three 2-dot rotes from Mind or Space.</li>
                        <li>Two 2-dot rotes and two 1-dot rotes.</li>
                        <li>Six 1-dot rotes.</li>
                    </ul>
                </ReferenceDetails>
            </ReferenceSection>
            <ReferenceSection id="creation-gnosis" title="Gnosis" to={mage.GNOSIS}>
                <p>Start at 1 dot. Spend 3 of your 7 Merit dots for Gnosis 2, or 6 for Gnosis 3.</p>
            </ReferenceSection>
            <ReferenceSection id="creation-mana" title="Mana" to={mage.MANA}>
                <p>Starting Mana equals <Link to={mage.WISDOM}>Wisdom</Link>.</p>
            </ReferenceSection>
            <ReferenceSection id="creation-merits" title="Merits" to={mage.MERITS}>
                <p>Order members receive High Speech for free.</p>
                <ul className="grid gap-x-3 gap-y-1 min-[380px]:grid-cols-2">
                    {meritNames.map((name) => {
                        const merit = mageMeritsData.find((item) => item.Name === name);
                        const location = merit ? null : allLocation.find((item) => item.Name === name);
                        const locationRating = (location?.Dots ?? location?.['Dots (*pre: Sanctum)'])?.match(/\(([^)]+)\)/)?.[1];
                        const base = location ? PATHS.LOCATIONS_BASE : mage.MERITS;
                        return (
                            <li key={name}>
                                <Link to={`${base}/${slugify(name)}`}>{name}</Link>
                                {' '}({templateRatings[name] ?? merit?.Rating ?? locationRating})
                            </li>
                        );
                    })}
                </ul>
                <p>Enhanced Item and Thrall use the ratings printed in the character-creation template.</p>
            </ReferenceSection>
            <ReferenceSection id="creation-xp" title="Experience Point Costs" to={mage.EXPERIENCE}>
                <ReferenceExperience data={MageExperienceData} />
                <ul className="list-disc space-y-1 pl-5">
                    <li>Your Path determines which Arcana count as Ruling, Common, and Inferior.</li>
                    <li>Rote cost is based on the highest Arcanum required. A Forces 3 rote costs 6 XP.</li>
                    <li>Spend XP on Willpower only to restore dots lost through sacrifice, such as when creating a rote.</li>
                </ul>
            </ReferenceSection>
        </TemplateQuickReference>
    );
}
