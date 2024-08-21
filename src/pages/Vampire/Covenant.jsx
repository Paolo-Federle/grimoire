import React from 'react';
import ManyHeadersTable from '../../components/ManyHeadersTable'
import { covenantData } from '../../Data/Vampire/CovenantData';

export default function Covenant() {


    const headers = ['Common', 'Description', 'Advantage', 'Book']
    const headerCheckFields = ['Description']
    const disciplineData = ['Common']

    return (
        <div className='grid-container'>
            <ManyHeadersTable table={covenantData} title={'Covenants'} headers={headers} headerCheckFields={headerCheckFields} alternateData={disciplineData}/>
        </div>
    );
}