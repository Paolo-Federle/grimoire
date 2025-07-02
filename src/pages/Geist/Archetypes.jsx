import React from 'react';
import SimpleTable from '../../components/SimpleTable';
import { ArchetypesData } from '../../Data/Geist/ArchetypesData';



export default function Archetypes() {
    return (
        <div className='grid-container'>
            <SimpleTable table={ArchetypesData} title={'Archetypes'} />
        </div>
    );
}