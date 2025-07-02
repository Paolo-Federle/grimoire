import React from 'react';
import SimpleTable from '../../components/SimpleTable';
import { MemoryData } from '../../Data/Mummy/MemoryData';



export default function Memory() {
    return (
        <div className='grid-container'>
            <SimpleTable table={MemoryData} title={'Memory'} />
        </div>
    );
}