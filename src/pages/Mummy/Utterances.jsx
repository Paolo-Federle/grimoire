import React from 'react';
import SimpleTable from '../../components/SimpleTable';
import { UtterancesData, GuildUtterancesData, SpiritUtterancesData, IronBullUtterancesData, MaatUtterancesData, WheelUtterancesData } from '../../Data/Mummy/UtterancesData';

export default function Utterance() {
    return (
        <div className='grid-container'>
            <SimpleTable table={UtterancesData} title={'General'} mergeHeaders={["Name", "Book"]} />
            <SimpleTable table={GuildUtterancesData} title={'Guild'} mergeHeaders={["Name", "Book", "Prerequisites"]} />
            <SimpleTable table={SpiritUtterancesData} title={'Spirit'} mergeHeaders={["Name", "Book"]} />
            <SimpleTable table={IronBullUtterancesData} title={'Granted by the Iron Bull'} mergeHeaders={["Name", "Book"]} />
            <SimpleTable table={MaatUtterancesData} title={"Granted by Fount of Ma'at"} mergeHeaders={["Name", "Book"]} />
            <SimpleTable table={WheelUtterancesData} title={'Disciples of the Wheel'} mergeHeaders={["Name", "Book"]} />
        </div>
    );
}