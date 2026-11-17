import React from 'react';
import { Link } from 'react-router-dom';
import TemplateQuickReference, { ReferenceDetails, ReferenceExperience, ReferenceSection, ReferenceTable } from '../../components/TemplateQuickReference';
import { AuspiceData } from '../../Data/Werewolf/AuspiceData';
import { TribesForsakenData } from '../../Data/Werewolf/TribesData';
import { WerewolfExperienceData } from '../../Data/Werewolf/WerewolfExperienceData';
import { WerewolfMeritsData } from '../../Data/Werewolf/WerewolfMeritsData';
import { PATHS } from '../path';

const werewolf = PATHS.WEREWOLF;
const auspiceSummaries = {
    Rahu: 'Resolute, aggressive warriors.',
    Cahalith: 'Passionate, reflective storytellers.',
    Elodoth: 'Perceptive, level-headed judges.',
    Ithaeur: 'Contemplative, far-seeing spiritualists.',
    Irraka: 'Curious, unconventional, and resourceful scouts.',
};
const tribeSummaries = {
    'Blood Talons': 'Warriors who defend and champion their people.',
    'Bone Shadows': 'Shamans, advisers, and seers.',
    'Hunters in Darkness': 'Stealthy trackers, assassins, and guardians.',
    'Iron Masters': 'Innovators who adapt and improvise.',
    'Storm Lords': 'Commanders, nobles, and pack leaders.',
    'Ghost Wolves': 'Independent werewolves, including loners and outcasts.',
};
const fetish = WerewolfMeritsData.find((merit) => merit.Name === 'Fetish');
const tribesWithGifts = TribesForsakenData.filter((tribe) => tribe['Gift Lists']);
const primaryRenown = ['Cunning', 'Glory', 'Honor', 'Purity', 'Wisdom'];

export default function WerewolfQuickReference() {
    return (
        <TemplateQuickReference game="Werewolf: the Forsaken" base="WoD 34" template="WtF 66">
            <ReferenceSection id="creation-auspice" title="Auspice" to={werewolf.AUSPICES}>
                <p>Choose the moon phase of your First Change.</p>
                <ReferenceTable headers={['Auspice', 'Moon phase and profile']} rows={AuspiceData.map((auspice) => [
                    auspice.Name, auspice.Name,
                    <><strong>{auspice["Moon's phase"]}</strong><div>{auspiceSummaries[auspice.Name]}</div></>,
                ])} />
            </ReferenceSection>
            <ReferenceSection id="creation-specialty-skills" title="Specialty Skills">
                <p>Gain one extra Specialty in a listed Skill if you have at least one dot in it.</p>
                <ReferenceTable headers={['Auspice', 'Specialty Skills']} rows={AuspiceData.map((auspice) => [
                    auspice.Name, auspice.Name, auspice['Specialty Skills'],
                ])} />
            </ReferenceSection>
            <ReferenceSection id="creation-tribe" title="Tribe" to={werewolf.TRIBES}>
                <p>Choose a Forsaken tribe or remain a Ghost Wolf.</p>
                <ReferenceTable headers={['Tribe', 'Profile']} rows={TribesForsakenData.map((tribe) => [
                    tribe.Name, tribe.Name, tribeSummaries[tribe.Name],
                ])} />
                <ReferenceDetails title="Tribe profiles">
                    <dl className="space-y-1">
                        {TribesForsakenData.map((tribe) => (
                            <div key={tribe.Name}>
                                <dt className="inline font-semibold">{tribe.Name}. </dt>
                                <dd className="inline">{tribe.Description}</dd>
                            </div>
                        ))}
                    </dl>
                </ReferenceDetails>
            </ReferenceSection>
            <ReferenceSection id="creation-primary-renown" title="Primary Renown">
                <p>Assign one dot to each primary Renown from auspice and tribe, and one dot of your choice. Ghost Wolves skip the tribal dot.</p>
                <ReferenceTable headers={['Renown', 'Auspice and tribe']} rows={primaryRenown.map((renown) => {
                    const auspice = AuspiceData.find((item) => item['Primary Renown'] === renown);
                    const tribe = TribesForsakenData.find((item) => item['Primary Renown'] === renown);
                    return [renown, renown, `${auspice.Name} · ${tribe.Name}`];
                })} />
            </ReferenceSection>
            <ReferenceSection id="creation-gift-lists" title="Gift Lists" to={werewolf.GIFTS}>
                <p>Choose one auspice Gift, one tribal Gift, and one Gift of your choice. Father Wolf and Mother Luna are common lists open to all werewolves. Ghost Wolves take a common Gift in place of the tribal Gift.</p>
                <p>Your highest Gift rating cannot exceed your highest primary Renown. Each moon list is exclusive to its auspice. You may trade your free-choice Gift for one Rituals dot and a free <Link to={werewolf.RITES}>one-dot rite</Link>.</p>
                <ReferenceTable headers={['Auspice or tribe', 'Gift Lists']} rows={[...AuspiceData, ...tribesWithGifts].map((item) => [
                    item.Name, item.Name, item['Gift Lists'],
                ])} />
            </ReferenceSection>
            <ReferenceSection id="creation-primal-urge" title="Primal Urge" to={werewolf.PRIMAL_URGE}>
                <p>Start at 1 dot. Spend Merit dots to raise it.</p>
            </ReferenceSection>
            <ReferenceSection id="creation-essence" title="Essence">
                <p>Starting Essence equals <Link to={werewolf.HARMONY}>Harmony</Link>.</p>
            </ReferenceSection>
            <ReferenceSection id="creation-merits" title="Merits" to={werewolf.MERITS}>
                <ul className="list-disc space-y-1 pl-5">
                    <li><Link to={`${werewolf.MERITS}/fetish`}>{fetish.Name}</Link> {fetish.Rank}</li>
                    <li>Totem (varies, special rules)</li>
                    <li>Wolf-Blooded (••••) is available to ordinary humans only.</li>
                </ul>
            </ReferenceSection>
            <ReferenceSection id="creation-xp" title="Experience Point Costs" to={werewolf.EXPERIENCE}>
                <ReferenceExperience data={WerewolfExperienceData} />
                <p>Totem uses its own rate of 3 XP per dot. The ordinary Merit rate excludes Totem.</p>
            </ReferenceSection>
        </TemplateQuickReference>
    );
}
