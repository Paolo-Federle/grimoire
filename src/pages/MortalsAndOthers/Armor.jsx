import React from 'react';
import SimpleTable from '../../components/SimpleTable'
import { armorData, shieldData } from '../../Data/Mortal/ArmorData';
export default function Armor() {
    return (
        <div className='grid-container'>
            <SimpleTable table={armorData} title={'Armors'} activeRowLink={false} />
            <SimpleTable table={shieldData} title={'Shields'} activeRowLink={false} />
        </div>
    );
}