import React from 'react';
import { GeistMeritsData } from '../../Data/Geist/GeistMeritsData';
import SimpleTable from '../../components/SimpleTable';


export default function GeistMerits() {
    return (
        <div className='grid-container'>
            <SimpleTable table={GeistMeritsData} title={'Geist Merits'} />
        </div>
    );
}