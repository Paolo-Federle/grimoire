import React from 'react';
import ManyHeadersTable from '../../components/ManyHeadersTable'
import { courtData } from '../../Data/Changeling/CourtData';

export default function Court() {


    const headers = ['Court Name', 'Page Number', 'Court Emotion', 'Mantle Effects', 'Crown Blessing', 'Blessing Effect']
    const headerCheckFields = ['Page Number']
    const disciplineData = ['Court Name']

    return (
        <div className='grid-container'>
            <ManyHeadersTable table={courtData} title={'Court'} headers={headers} headerCheckFields={headerCheckFields} alternateData={disciplineData}/>
        </div>
    );
}