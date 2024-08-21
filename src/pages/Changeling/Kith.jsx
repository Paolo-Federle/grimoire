import React from 'react';
import ManyHeadersTable from '../../components/ManyHeadersTable'
import { kithData } from '../../Data/Changeling/KithData';

export default function Kith() {


    const headers = ['Kith', 'Description', 'Blessing', 'Book']
    const headerCheckFields = ['Description']
    const disciplineData = ['Kith']

    return (
        <div className='grid-container'>
            <ManyHeadersTable table={kithData} title={'Kith'} headers={headers} headerCheckFields={headerCheckFields} alternateData={disciplineData}/>
        </div>
    );
}