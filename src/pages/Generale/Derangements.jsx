import React from 'react';
import SimpleTable from '../../components/SimpleTable'
import { derangementData } from '../../Data/DerangementsData';
import { rimuoviCampi, slugify } from '../../utils';

export default function Derangements() {
    const campiDaRimuovere = ['LongDescription', "ProgressesFrom", "ProgressesTo" ];
    const tableWithLinks = derangementData.map((item, index) => ({
        ...item,
        link: `/derangements/${slugify(`${item.Name || 'unknown'}-${index}`)}`
    }));

    return (
        <div className='grid-container'>
        <SimpleTable table={rimuoviCampi(tableWithLinks, campiDaRimuovere)}
        title={'Derangements'}
        activeRowLink={true} />
    </div>
    );
}
