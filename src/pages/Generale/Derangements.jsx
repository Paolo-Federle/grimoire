import React from 'react';
import SimpleTable from '../../components/SimpleTable'
import { derangementData } from '../../Data/DerangementsData';
import { rimuoviCampi, addLink } from '../../utils';

export default function Derangements() {
    const campiDaRimuovere = ['LongDescription', "ProgressesFrom", "ProgressesTo" ];

    return (
        <div className='grid-container'>
        <SimpleTable table={rimuoviCampi(addLink(derangementData, 'Name', '/derangements/'), campiDaRimuovere)}
        title={'Derangements'}
        activeRowLink={true} />
    </div>
    );
}