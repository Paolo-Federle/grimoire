import React from 'react';
import { Link } from 'react-router-dom';
import TemplateQuickReference, { ReferenceExperience, ReferenceSection, ReferenceTable } from '../../components/TemplateQuickReference';
import { DecreesData } from '../../Data/Mummy/DecreesData';
import { GuildsData } from '../../Data/Mummy/GuildsData';
import { MummyExperienceData } from '../../Data/Mummy/MummyExperienceData';
import { PATHS } from '../path';

const mummy = PATHS.MUMMY;
const decrees = {
    'Lion-Headed': ['Sphinxes', 'Passionate and adept with mortals, but prone to taking setbacks personally.'],
    'Falcon-Headed': ['Charioteers', 'Bold and tireless in their duties, often improvising recklessly.'],
    'Bull-Headed': ['Millstones', 'Steadfast in their convictions and implacable once set on a course.'],
    'Serpent-Headed': ['Whisperers', 'Scholars who seek hidden truths, sometimes at the cost of sanity or duty.'],
    'Jackal-Headed': ['Ferrymen', 'Contemplative mystics who guide others through the Rite and the Descent.'],
};
const guildProfiles = {
    'Maa-Kep': ['Engravers of Amulets', 'Organizers who interpret orders and achieve their ends subtly.'],
    'Mesen-Nebu': ['First Alchemists', 'Brokers and sensualists who transform material and mystic resources.'],
    'Sesha-Hebsu': ['Inscribers of Texts', 'Scholars and scribes who keep records and maintain order.'],
    'Su-Menent': ['Shepherds of the Shell', 'Funerary priests who understand how flesh and spirit meet.'],
    'Tef-Aabhi': ['Builders of Effigies', 'Masons and engineers who build with Irem’s sacred geometry.'],
};
const guilds = GuildsData.filter((guild) => guild.Book.startsWith('MTC '));
const merits = [
    ['Cult', 'Special', `${mummy.MERITS}/cult`],
    ['Enigma', '• to •••••', `${mummy.MERITS}/enigma`],
    ['Guild Status', '• to •••••', `${mummy.MERITS}/guild_status`],
    ['Tomb', '• to •••••'],
    ['Relic', '• or higher', `${mummy.MERITS}/relic`],
    ['Vestige', '• or higher', `${mummy.MERITS}/vestige`],
];
const experience = MummyExperienceData.filter(({ Trait }) => Trait !== 'Willpower');

export default function MummyQuickReference() {
    return (
        <TemplateQuickReference game="Mummy: the Curse" base="WoD 34-45" template="MTC 70-71">
            <ReferenceSection id="creation-prelude" title="Prelude">
                <p>A typical Mummy chronicle skips the prelude in step nine of character creation.</p>
            </ReferenceSection>
            <ReferenceSection id="creation-judge-decree" title="Judge and Decree" to={mummy.DECREE}>
                <p>Choose a <Link to={mummy.JUDGE}>Judge</Link> or have the Storyteller select one, then take that Judge’s Decree. Your Decree sets your defining Pillar and how you recover spent Pillars.</p>
                <ReferenceTable headers={['Decree', 'Defining Pillar and profile']} rows={DecreesData.map((decree) => {
                    const [nickname, profile] = decrees[decree.Decree];
                    return [
                        decree.Decree, <>{decree.Decree}<div className="font-normal">{nickname}</div></>,
                        <><strong>{decree.Pillar}</strong><div>{profile}</div></>,
                    ];
                })} />
            </ReferenceSection>
            <ReferenceSection id="creation-guild" title="Guild" to={mummy.GUILD}>
                <p>Choose the Shan’iatu-led guild your master belonged to. It determines your favored vessel type and grants a bonus Affinity.</p>
                <ReferenceTable headers={['Guild', 'Favored vessel, Affinity, and profile']} rows={guilds.map((guild) => {
                    const name = guild.Guild.split(',')[0];
                    const [title, profile] = guildProfiles[name];
                    return [
                        name, <>{name}<div className="font-normal">{title}</div></>,
                        <><strong>{guild.Vessels} · {guild.Affinity}</strong><div>{profile}</div></>,
                    ];
                })} />
            </ReferenceSection>
            <ReferenceSection id="creation-pillars" title="Pillars">
                <ul className="list-disc space-y-1 pl-5">
                    <li>Allocate 9 Pillar dots. No Pillar may exceed your defining Pillar.</li>
                    <li>A fifth dot costs 2 dots and requires at least 1 dot in each of the five Pillars.</li>
                    <li>Spend 3 Merit dots for each extra Pillar dot.</li>
                </ul>
            </ReferenceSection>
            <ReferenceSection id="creation-affinities-utterances" title="Affinities and Utterances">
                <p><Link to={mummy.AFFINITIES}>Affinities</Link>. Record your guild Affinity and the Soul Affinity linked to your Decree and Judge. Choose one more Affinity.</p>
                <p><Link to={mummy.UTTERANCES}>Utterances</Link>. Choose one. If all five Pillars have at least 1 dot by the end of character creation, choose a second Utterance for free.</p>
                <p>Meet the prerequisites for each Affinity or Utterance when choosing it, or buy the prerequisites with starting XP before play.</p>
            </ReferenceSection>
            <ReferenceSection id="creation-merits" title="Merits" to={mummy.MERITS}>
                <p>Mummies cannot buy Eidetic Memory or Merits specific to mortals or other supernatural beings.</p>
                <ReferenceTable headers={['Merit', 'Rating']} rows={merits.map(([name, rating, path]) => [
                    name, path ? <Link to={path}>{name}</Link> : name, rating,
                ])} />
            </ReferenceSection>
            <ReferenceSection id="creation-sekhem" title="Sekhem" to={mummy.SEKHEM}>
                <p>Sekhem measures your life force under the Rite. Set it when you arise, then reduce it according to the Descent.</p>
                <ul className="list-disc space-y-1 pl-5">
                    <li>After a peaceful death, rise with 10 dots of Sekhem.</li>
                    <li>If killed before completing your mission, rise with one dot less than you had when you died.</li>
                </ul>
            </ReferenceSection>
            <ReferenceSection id="creation-memory" title="Memory (Morality Trait)" to={mummy.MEMORY}>
                <p>Start at 3 dots. Raise Memory with experience points.</p>
            </ReferenceSection>
            <ReferenceSection id="creation-starting-experience" title="Starting Experience">
                <p>Spend 20 XP, or the higher amount your Storyteller grants. In a standard chronicle, buy at least 1 dot each in Cult, Guild Status, and Tomb now if you did not select them earlier.</p>
            </ReferenceSection>
            <ReferenceSection id="creation-xp" title="Experience Point Costs" to={mummy.EXPERIENCE}>
                <ReferenceExperience data={experience} />
                <p>Restoring a lost Willpower dot costs 8 XP per dot, up to your prior rating of Composure + Resolve.</p>
                <p>For either Fated Affinity rate, the Storyteller chooses the Affinity you gain.</p>
            </ReferenceSection>
        </TemplateQuickReference>
    );
}
