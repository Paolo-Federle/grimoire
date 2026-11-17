import React from 'react';
import { Link } from 'react-router-dom';
import TemplateQuickReference, { ReferenceExperience, ReferenceSection, ReferenceTable } from '../../components/TemplateQuickReference';
import { GeistExperienceData } from '../../Data/Geist/GeistExperienceData';
import { PATHS } from '../path';

const geist = PATHS.GEIST;
const archetypes = [
    ['Reaper', 'Decides who should live and who should die.'],
    ['Celebrant', 'Embraces life after coming face to face with death.'],
    ['Gatekeeper', 'Guards the crossings between life and death.'],
    ['Mourner', 'Draws sustenance from the feelings of the dead and the grieving.'],
    ['Bonepicker', 'Uses ghostly powers to secure worldly comforts.'],
    ['Advocate', 'Helps the dead resolve unfinished business.'],
    ['Necromancer', 'Studies the occult lore of death and the other side.'],
    ['Pilgrim', 'Seeks purification to ease transitions for themselves and others.'],
];
const thresholds = [
    ['Torn', 'Violence', 'Stigmata or Passion'],
    ['Silent', 'Deprivation', 'Stillness or Cold Wind'],
    ['Prey', 'Nature', 'Primeval or Grave-Dirt'],
    ['Stricken', 'Illness', 'Phantasm (Phantasmal Key) or Tear-Stained'],
    ['Forgotten', 'Chance', 'Industrial or Pyre-Flame'],
];
const manifestations = [
    ['Boneyard', 'Control the area around you, often by making it seem haunted.'],
    ['Caul', 'Reshape your body in unnatural ways.'],
    ['Curse', 'Afflict others with strange ailments or influence their thoughts.'],
    ['Marionette', 'Control objects, animals, or people.'],
    ['Oracle', 'Heighten your senses, see distant events, or glimpse the future.'],
    ['Rage', 'Strike at others with raw supernatural force.'],
    ['Shroud', 'Alter or improve your body, usually to protect yourself.'],
];
const merits = [
    ['Ceremonies', '• or higher', `${geist.MERITS}/ceremony`],
    ['Haunt', 'Special', `${PATHS.LOCATIONS_BASE}/haunt`],
    ['Memento', '• or higher', `${geist.MERITS}/memento`],
];

export default function GeistQuickReference() {
    return (
        <TemplateQuickReference game="Geist: the Sin-Eaters" base="WoD 34-35" template="GTS 64">
            <ReferenceSection id="creation-archetype" title="Archetype" to={geist.ARCHETYPES}>
                <p>Choose how your Sin-Eater approaches their second life.</p>
                <ReferenceTable headers={['Archetype', 'Outlook']} rows={archetypes.map(([name, outlook]) => [name, name, outlook])} />
            </ReferenceSection>
            <ReferenceSection id="creation-threshold" title="Threshold" to={geist.THRESHOLDS}>
                <p>Choose the kind of death that nearly claimed you. It shapes which Keys you can start with.</p>
                <ReferenceTable headers={['Threshold', 'Cause of death']} rows={thresholds.map(([name, cause]) => [name, name, cause])} />
            </ReferenceSection>
            <ReferenceSection id="creation-keys" title="Keys">
                <p>Start with 2 Keys. Choose one from your Threshold and another of your choice to represent your geist’s keystone.</p>
                <ReferenceTable headers={['Threshold', 'Choose one Key']} rows={thresholds.map(([name, , keys]) => [name, name, keys])} />
            </ReferenceSection>
            <ReferenceSection id="creation-manifestations" title="Manifestations" to={geist.MANIFESTATION}>
                <p>Split 3 dots among one to three Manifestations of your choice.</p>
                <ReferenceTable headers={['Manifestation', 'Power']} rows={manifestations.map(([name, power]) => [name, name, power])} />
            </ReferenceSection>
            <ReferenceSection id="creation-psyche" title="Psyche" to={geist.PSYCHE}>
                <p>Start at 1 dot. Spend Merit dots to raise Psyche.</p>
            </ReferenceSection>
            <ReferenceSection id="creation-merits" title="Merits" to={geist.MERITS}>
                <ReferenceTable headers={['Merit', 'Rating']} rows={merits.map(([name, rating, path]) => [
                    name, <Link to={path}>{name}</Link>, rating,
                ])} />
            </ReferenceSection>
            <ReferenceSection id="creation-xp" title="Experience Point Costs" to={geist.EXPERIENCE}>
                <ReferenceExperience data={GeistExperienceData} />
            </ReferenceSection>
        </TemplateQuickReference>
    );
}
