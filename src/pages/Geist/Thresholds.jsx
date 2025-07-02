import React from 'react';
import SimpleTable from '../../components/SimpleTable';
import { ThresholdsData } from '../../Data/Geist/ThresholdsData';



export default function Thresholds() {
    return (
        <div className='grid-container'>
            <SimpleTable table={ThresholdsData} title={'Thresholds'} />
        </div>
    );
}