import React from 'react';
import ManyHeadersTable from '../../components/ManyHeadersTable'
import { bloodlineData } from '../../Data/Vampire/BloodlineData';

export default function Bloodline() {


    const headers = ['Name', 'Nickname', 'Description', 'Disciplines', 'Additional Weakness', 'Book']
    const headerCheckFields = ['Nickname']
    const disciplineData = ['Name']

    return (
        <div className='grid-container'>
            <ManyHeadersTable table={bloodlineData} title={'Bloodlines'} headers={headers} headerCheckFields={headerCheckFields} alternateData={disciplineData}/>
        </div>
    );
}