import React from 'react';
import SimpleTable from '../../components/SimpleTable';
import { SynergyData } from '../../Data/Geist/SynergyData';



export default function Synergy() {
    return (
        <div className='grid-container'>
            <SimpleTable table={SynergyData} title={'Synergy'} />
        </div>
    );
}