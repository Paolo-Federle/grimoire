import React from 'react';
import SimpleTable from '../../components/SimpleTable'
import { dreadPowersData } from '../../Data/Hunter/DreadPowerData';
export default function DreadPowers() {
    return (
        <div className='grid-container'>
            <SimpleTable table={dreadPowersData} title={'Dread Powers'} activeRowLink={false} />
        </div>
    );
}