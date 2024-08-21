import React from 'react';
import SimpleTable from '../../components/SimpleTable'
import { bloodPotencyData } from '../../Data/Vampire/BloodPotencyData';

export default function BloodPotency() {

    return (
        <div className='grid-container'>
            <SimpleTable table={bloodPotencyData} title={'Blood Potency'} />
        </div>
    );
}