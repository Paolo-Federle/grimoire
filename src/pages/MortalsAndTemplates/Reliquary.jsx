import React from 'react';
import SimpleTable from '../../components/SimpleTable'
import { reliquaryData, reliquaryPowersData } from '../../Data/Mortal/ReliquaryData';
export default function Reliquary() {
    return (
        <div className='grid-container'>
            <SimpleTable table={reliquaryData} title={'Reliquary'} activeRowLink={false} />
            <SimpleTable table={reliquaryPowersData} title={'Reliquary powers'} activeRowLink={false} />
        </div>
    );
}