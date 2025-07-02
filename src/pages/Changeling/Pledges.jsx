import React from 'react';
import SimpleTable from '../../components/SimpleTable'
import { pledgeData, pledgeCurses, MorpheanBargainsData } from '../../Data/Changeling/PledgesData';

export default function Pledges() {
    return (
        <div className='grid-container'>
            <SimpleTable table={pledgeData} title={'Pledges'} />
            <SimpleTable table={pledgeCurses} title={'Pledge Curses'} />
            <SimpleTable table={MorpheanBargainsData} title={'Morphean Bargains'} />
        </div>
    );
}