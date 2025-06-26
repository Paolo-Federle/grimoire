import React from 'react';
import SimpleTable from '../../components/SimpleTable'
import { pledgeData, pledgeCurses } from '../../Data/Changeling/OathData';

export default function Pledges() {
    return (
        <div className='grid-container'>
            <SimpleTable table={pledgeData} title={'Pledges'} />
            <SimpleTable table={pledgeCurses} title={'Pledge Curses'} />
        </div>
    );
}