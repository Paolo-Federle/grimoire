import React from 'react';
import SimpleTable from '../../components/SimpleTable';
import { UtterancesData, GuildUtterancesData, SpiritUtterancesData, IronBullUtterancesData, MaatUtterancesData, WheelUtterancesData } from '../../Data/Mummy/UtterancesData';

export default function Utterance() {
    const utteranceHeaders = ['Tier', 'Descriptors', 'Summary', 'Book'];
    const utteranceParentHeaders = ['Name', null, null, 'Book'];
    const guildUtteranceHeaders = ['Tier', 'Prerequisites', 'Descriptors', 'Summary', 'Book'];
    const guildUtteranceParentHeaders = ['Name', 'Prerequisites', null, null, 'Book'];

    return (
        <div className='grid-container'>
            <SimpleTable table={UtterancesData} title={'General'} headers={utteranceHeaders} rankedParentHeaders={utteranceParentHeaders} />
            <SimpleTable table={GuildUtterancesData} title={'Guild'} headers={guildUtteranceHeaders} rankedParentHeaders={guildUtteranceParentHeaders} />
            <SimpleTable table={SpiritUtterancesData} title={'Spirit'} headers={utteranceHeaders} rankedParentHeaders={utteranceParentHeaders} />
            <SimpleTable table={IronBullUtterancesData} title={'Granted by the Iron Bull'} headers={utteranceHeaders} rankedParentHeaders={utteranceParentHeaders} />
            <SimpleTable table={MaatUtterancesData} title={"Granted by Fount of Ma'at"} headers={utteranceHeaders} rankedParentHeaders={utteranceParentHeaders} />
            <SimpleTable table={WheelUtterancesData} title={'Disciples of the Wheel'} headers={utteranceHeaders} rankedParentHeaders={utteranceParentHeaders} />
        </div>
    );
}
