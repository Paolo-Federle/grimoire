import React from 'react';
import SimpleTable from '../../components/SimpleTable';
import { ProfessionsData } from '../../Data/Hunter/ProfessionsData';


export default function Professions() {
    return (
        <div className='grid-container'>
            <SimpleTable table={ProfessionsData} title={'Professions'} />
        </div>
    );
}