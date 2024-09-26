import React from 'react';
import SimpleTable from '../../components/SimpleTable'
import { derangementData } from '../../Data/DerangementsData';

export default function Derangements() {

    return (
        <div className='grid-container'>
            <SimpleTable table={derangementData} title={'Derangements'} />
        </div>
    );
}