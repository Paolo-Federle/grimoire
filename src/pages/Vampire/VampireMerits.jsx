import React from 'react';
import ManyHeadersTable from '../../components/ManyHeadersTable/ManyHeadersTable'
import { vampireMeritsData } from '../../Data/Vampire/VampireMeritsData';

export default function VampireMerits() {


    const headers = ['Name', 'Cost', 'Description', 'Book']
    const headerCheckFields = ['Cost']
    const disciplineData = ['Name']

    return (
        <div className='grid-container'>
            <ManyHeadersTable table={vampireMeritsData} title={'Vampire Merits'} headers={headers} headerCheckFields={headerCheckFields} alternateData={disciplineData}/>
        </div>
    );
}