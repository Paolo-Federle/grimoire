import React from 'react';
import SimpleTable from '../../components/SimpleTable'
import { vehicleData } from '../../Data/Mortal/VehicleData';

export default function Vehicle() {
    return (
        <div className='grid-container'>
            <SimpleTable table={vehicleData} title={'Vehicles'} activeRowLink={false} />
        </div>
    );
}