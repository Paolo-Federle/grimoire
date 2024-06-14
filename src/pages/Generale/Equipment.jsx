import React from 'react';
import SimpleTable from '../../components/SimpleTable'
import EquipmentData from '../../Data/EquipmentData';

export default function Equipment() {

    return (
        <div className='grid-container'>
            <SimpleTable table={EquipmentData} title={'Equipment'} activeRowLink={true}/>
        </div>
    );
}