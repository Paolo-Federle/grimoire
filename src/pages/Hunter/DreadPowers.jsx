import React from 'react';
import SimpleTable from '../../components/SimpleTable'
import { dreadPowersData } from '../../Data/Hunter/DreadPowerData';
import { rimuoviCampi, addLink } from '../../utils';

export default function DreadPowers() {
    const campiDaRimuovere = ['FullCost', "Action", "DicePool", "Effect"];

    return (
        <div className='grid-container'>
            <SimpleTable table={rimuoviCampi(addLink(dreadPowersData, 'Name', '/hunter/dread_powers/'), campiDaRimuovere)}
            title={'Dread Powers'}
            activeRowLink={true} />
        </div>
    );
}