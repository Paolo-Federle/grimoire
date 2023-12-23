import React from 'react';
import SimpleTable from '../../components/SimpleTable'
import GnosisData from '../../Data/Mage/GnosisData';

export default function Path() {

    return (
        <div className='grid-container'>
            <SimpleTable table={GnosisData} title={'Gnosis'} />
        </div>
    );
}