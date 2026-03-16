import React from 'react';
import SimpleTable from '../../components/SimpleTable';
import { CeremoniesData } from '../../Data/Geist/CeremoniesData';


export default function Ceremonies() {
     return (
            <div className='grid-container'>
                <SimpleTable table={CeremoniesData} title={'Ceremonies'} />
            </div>
        );
    }