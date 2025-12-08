import React from 'react';
import { PsychicMeritsData } from '../../../Data/Mortal/Lesser templates/PsychicMeritsData';
import ManyHeadersTable from '../../../components/ManyHeadersTable/ManyHeadersTable';


export default function PsychicsPowers() {

    const headers = ['Name', 'Cost', 'Description', 'Book']
    const datoSostituibile = ['Cost']
    const datoSostituto = ['Name']

    return (
        <div className='grid-container'>
            {/* <ManyHeadersTable table={PsychicMeritsData} title={'Psychic powers'} activeRowLink={false} /> */}
            <ManyHeadersTable table={PsychicMeritsData} title={'Psychic powers'} headers={headers} headerCheckFields={datoSostituibile} alternateData={datoSostituto} prereqForLink={'Name'} activeRowLink={false}/>
        </div>
    );
}