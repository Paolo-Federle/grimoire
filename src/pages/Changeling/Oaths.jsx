import React from 'react';
import SimpleTable from '../../components/SimpleTable'
import { oathData } from '../../Data/Changeling/OathData';

export default function Oaths() {
    return (
        <div className='grid-container'>
            <SimpleTable table={oathData} title={'Oaths'} />
        </div>
    );
}