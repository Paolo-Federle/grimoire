import React from 'react';
import SimpleTable from '../../components/SimpleTable';
import { CompactsData, ConspiraciesData, HistoricalCompactsData, HistoricalConspiraciesData } from '../../Data/Hunter/CompactConsipraciesData';


export default function CompactConsipracies() {
    return (
        <div className='grid-container'>
            <SimpleTable table={CompactsData} title={'Compact'} />
            <SimpleTable table={HistoricalCompactsData} title={'Historical Compacts'} />
            <SimpleTable table={ConspiraciesData} title={'Consipracies'} />
            <SimpleTable table={HistoricalConspiraciesData} title={'Historical Conspiracies'} />
        </div>
    );
}