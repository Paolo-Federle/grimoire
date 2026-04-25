import React from 'react';
import SimpleTable from '../../components/SimpleTable';
import { DecreesData } from '../../Data/Mummy/DecreesData';



export default function Decrees() {
    return (
        <div className='grid-container'>
            <SimpleTable table={DecreesData} title={'Decrees'} />
        </div>
    );
}
