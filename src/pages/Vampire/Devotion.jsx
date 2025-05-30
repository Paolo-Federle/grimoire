import React from 'react';
import SimpleTable from '../../components/SimpleTable'
import { DevotionData } from '../../Data/Vampire/DevotionData';
import { rimuoviCampi, addLink } from '../../utils';

export default function Devotion() {
    const campiDaRimuovere = ['DiceRoll', "FullCost", "Action", "FullDescription" ];

    return (
        <div className='grid-container'>
        <SimpleTable table={rimuoviCampi(addLink(DevotionData, 'Name', '/vampire/devotions/'), campiDaRimuovere)}
        title={'Devotion'}
        activeRowLink={true} />
    </div>
    );
}