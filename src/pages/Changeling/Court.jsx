import React from 'react';
import ManyHeadersTable from '../../components/ManyHeadersTable/ManyHeadersTable'
import { courtData } from '../../Data/Changeling/CourtData';

export default function Court() {


    const headers = ['Court Name', 'Court Emotion', 'Mantle Effects', 'Crown Blessing', 'Blessing Effect', 'Book']
    const headerCheckFields = ['Book']
    const disciplineData = ['Court Name']

    return (
        <div className='grid-container'>
            <ManyHeadersTable table={courtData} title={'Court'} headers={headers} headerCheckFields={headerCheckFields} alternateData={disciplineData}/>
        </div>
    );
}