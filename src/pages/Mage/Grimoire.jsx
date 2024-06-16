import React from 'react';
import SimpleTable from '../../components/SimpleTable'
import { grimoireData } from '../../Data/Mage/GrimoireData';
export default function Grimoire() {
    return (
        <div className='grid-container'>
            <SimpleTable table={grimoireData} title={'Grimoire'} activeRowLink={false} />
        </div>
    );
}