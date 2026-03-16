import React from 'react';
import SimpleTable from '../../components/SimpleTable';
import { PsycheData } from '../../Data/Geist/PsycheData';



export default function Psyche() {
    return (
        <div className='grid-container'>
            <SimpleTable table={PsycheData} title={'Psyche'} />
        </div>
    );
}