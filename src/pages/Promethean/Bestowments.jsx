import React from 'react';
import SimpleTable from '../../components/SimpleTable';
import { BestowmentsData } from '../../Data/Promethean/BestowmentsData';

export default function Bestowments() {
    return (
            <div className='grid-container'>
                <SimpleTable table={BestowmentsData} title={'Bestowments'} />
            </div>
        );
    }