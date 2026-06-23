import React from 'react';
import SimpleTable from '../../components/SimpleTable';
import { UtterancesData, GuildUtterancesData, SpiritUtterancesData, IronBullUtterancesData, MaatUtterancesData, WheelUtterancesData } from '../../Data/Mummy/UtterancesData';
import { PATHS } from '../path';
import { slugify } from '../../utils';

export default function Utterance() {
    const utteranceHeaders = ['Tier', 'Descriptors', 'Summary', 'Book'];
    const utteranceParentHeaders = ['Name', null, null, 'Book'];
    const guildUtteranceHeaders = ['Tier', 'Prerequisites', 'Descriptors', 'Summary', 'Book'];
    const guildUtteranceParentHeaders = ['Name', 'Prerequisites', null, null, 'Book'];
    const withDetailLinks = (table) =>
        table.map((utterance) => ({
            ...utterance,
            link: `${PATHS.MUMMY.UTTERANCES}/${slugify(utterance.Name)}`,
        }));

    return (
        <div className='grid-container'>
            <SimpleTable table={withDetailLinks(UtterancesData)} title={'General'} headers={utteranceHeaders} rankedParentHeaders={utteranceParentHeaders} activeRowLink />
            <SimpleTable table={withDetailLinks(GuildUtterancesData)} title={'Guild'} headers={guildUtteranceHeaders} rankedParentHeaders={guildUtteranceParentHeaders} activeRowLink />
            <SimpleTable table={withDetailLinks(SpiritUtterancesData)} title={'Spirit'} headers={utteranceHeaders} rankedParentHeaders={utteranceParentHeaders} activeRowLink />
            <SimpleTable table={withDetailLinks(IronBullUtterancesData)} title={'Granted by the Iron Bull'} headers={utteranceHeaders} rankedParentHeaders={utteranceParentHeaders} activeRowLink />
            <SimpleTable table={withDetailLinks(MaatUtterancesData)} title={"Granted by Fount of Ma'at"} headers={utteranceHeaders} rankedParentHeaders={utteranceParentHeaders} activeRowLink />
            <SimpleTable table={withDetailLinks(WheelUtterancesData)} title={'Disciples of the Wheel'} headers={utteranceHeaders} rankedParentHeaders={utteranceParentHeaders} activeRowLink />
        </div>
    );
}
