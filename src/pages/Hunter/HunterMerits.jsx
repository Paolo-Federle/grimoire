import React from 'react';
import SimpleTable from '../../components/SimpleTable';
import { hunterMeritsData } from '../../Data/Hunter/HunterMeritsData';

export default function HunterMerits() {
    return (
        <div className='grid-container'>
            <SimpleTable table={hunterMeritsData} title={'Hunter Merits'} />
        </div>
    );
}