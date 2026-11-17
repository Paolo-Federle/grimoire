import React from 'react';
import { Link } from 'react-router-dom';
import TemplateQuickReference, { ReferenceDetails, ReferenceExperience, ReferenceSection, ReferenceTable } from '../../components/TemplateQuickReference';
import { allLocation } from '../../Data/LocationMeritData';
import { uniMeritsSocialData } from '../../Data/universalMeritsData';
import { clanData } from '../../Data/Vampire/ClanData';
import { mainCovenantData } from '../../Data/Vampire/CovenantData';
import { VampireExperienceData } from '../../Data/Vampire/VampireExperienceData';
import { generalVampireMeritsData } from '../../Data/Vampire/VampireMeritsData';
import { slugify } from '../../utils';
import { PATHS } from '../path';

const vampire = PATHS.VAMPIRE;
const clanSummaries = {
    Daeva: 'Sensual, magnetic, and driven by emotion.',
    Gangrel: 'Feral, hardy, and guided by instinct.',
    Mekhet: 'Swift, discreet, and perceptive.',
    Nosferatu: 'Stealthy, powerful, and terrifying.',
    Ventrue: 'Aristocratic, imposing, and born to command.',
};
const covenantDetails = {
    'Circle of the Crone': 'Its traditions unite different female figures in the Mother of All Monsters, the creator of vampires.',
    Invictus: 'Its members form the aristocracy of the night.',
    'Lancea et Sanctum': 'It follows the teachings of Longinus, whom it believes was turned by the blood of Christ.',
};
const disciplines = {
    Animalism: 'Influence over animals and the Kindred Beast.',
    Auspex: 'Supernatural perception and heightened senses.',
    Celerity: 'Speed beyond human limits.',
    'Coils of the Dragon': 'The Ordo Dracul’s methods for overcoming the vampiric curse.',
    Crúac: 'The Circle of the Crone’s blood magic.',
    Dominate: 'Overpowering another mind.',
    Majesty: 'Supernatural force of personality.',
    Nightmare: 'Power over fear.',
    Obfuscate: 'Concealing oneself or aspects of one’s identity.',
    Protean: 'Shapeshifting and altering the vampiric body.',
    Resilience: 'Supernatural toughness.',
    'Theban Sorcery': 'The Lancea et Sanctum’s dark miracles rooted in Biblical tradition.',
    Vigor: 'Strength beyond human limits.',
};
const covenantPowers = new Set(mainCovenantData.map((covenant) => covenant.Advantage));
const haven = allLocation.find((item) => item.Name === 'Haven');
const herd = generalVampireMeritsData.find((item) => item.Name === 'Herd');
const status = uniMeritsSocialData.find((item) => item.Name === 'Status');
export default function VampireQuickReference() {
    return (
        <TemplateQuickReference game="Vampire: the Requiem" base="WoD 34-35" template="VtR 93">
            <ReferenceSection id="creation-clan" title="Clan" to={vampire.CLANS}>
                <p>Choose a clan.</p>
                <ReferenceTable headers={['Clan', 'Profile']} rows={clanData.map((clan) => [
                    clan.Name, clan.Name, clanSummaries[clan.Name],
                ])} />
                <ReferenceDetails title="Clan weaknesses">
                    <dl className="space-y-2">
                        {clanData.map((clan) => (
                            <div key={clan.Name}>
                                <dt className="font-semibold">{clan.Name}</dt>
                                <dd>{clan.Weakness}</dd>
                            </div>
                        ))}
                    </dl>
                </ReferenceDetails>
            </ReferenceSection>
            <ReferenceSection id="creation-covenant" title="Covenant" to={vampire.COVENANTS}>
                <p>Choose a covenant or record unbound, unaligned, or independent.</p>
                <ReferenceTable headers={['Covenant', 'Advantage and focus']} rows={mainCovenantData.map((covenant) => [
                    covenant.Name, covenant.Name, <><strong>{covenant.Advantage}</strong><div>{covenant.Description}</div></>,
                ])} />
                <ReferenceDetails title="Covenant notes">
                    <p>Merit discounts apply to XP purchases after character creation.</p>
                    <dl className="space-y-2">
                        {Object.entries(covenantDetails).map(([name, description]) => (
                            <div key={name}>
                                <dt className="font-semibold">{name}</dt>
                                <dd>{description}</dd>
                            </div>
                        ))}
                    </dl>
                </ReferenceDetails>
            </ReferenceSection>
            <ReferenceSection id="creation-favored-attributes" title="Favored Attributes">
                <p>Add one dot to one of your clan’s favored Attributes.</p>
                <ReferenceTable headers={['Clan', 'Choose one Attribute']} rows={clanData.map((clan) => [
                    clan.Name, clan.Name, clan['Bonus Trait'],
                ])} />
            </ReferenceSection>
            <ReferenceSection id="creation-disciplines" title="Disciplines" to={vampire.DISCIPLINES}>
                <p>Assign 3 dots, with at least 2 in your clan’s favored Disciplines.</p>
                <ReferenceTable headers={['Clan', 'Favored Disciplines']} rows={clanData.map((clan) => [
                    clan.Name, clan.Name, clan['Clan Disciplines'],
                ])} />
                <p>Coils of the Dragon, Crúac, and Theban Sorcery each require membership in their associated covenant.</p>
                <ReferenceDetails title="Discipline powers">
                    <ReferenceTable headers={['Discipline', 'Power']} rows={Object.entries(disciplines).map(([name, description]) => [
                        name,
                        <Link to={`${vampire.DISCIPLINES}/${slugify(name)}`}>{name}</Link>,
                        <>{description}{covenantPowers.has(name) && <div className="font-semibold">Covenant only</div>}</>,
                    ])} />
                </ReferenceDetails>
            </ReferenceSection>
            <ReferenceSection id="creation-blood-potency" title="Blood Potency" to={vampire.BLOOD_POTENCY}>
                <p>Start at 1 dot. Spend Merit dots to raise it.</p>
            </ReferenceSection>
            <ReferenceSection id="creation-merits" title="Merits" to={vampire.MERITS}>
                <ul className="list-disc space-y-1 pl-5">
                    <li><Link to={`${PATHS.LOCATIONS_BASE}/haven`}>{haven.Name}</Link> {haven.Dots.split(' {')[0]}</li>
                    <li><Link to={`${vampire.MERITS}/herd`}>{herd.Name}</Link> ({herd.Rank})</li>
                    <li><Link to={`${PATHS.UNIVERSAL_MERITS}/status`}>{status.Name}</Link> ({status.Rating})</li>
                </ul>
            </ReferenceSection>
            <ReferenceSection id="creation-xp" title="Experience Point Costs" to={vampire.EXPERIENCE}>
                <ReferenceExperience data={VampireExperienceData} />
                <p>Coils of the Dragon use the Other Discipline rate. See <Link to={`${vampire.DISCIPLINES}/coils_of_the_dragon`}>Coils of the Dragon</Link> for their advancement rules.</p>
            </ReferenceSection>
        </TemplateQuickReference>
    );
}
