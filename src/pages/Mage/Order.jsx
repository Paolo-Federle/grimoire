import React from 'react';
import SimpleTable from '../../components/SimpleTable'
import OrderData from '../../Data/Mage/OrderData';

export default function Order() {

    return (
        <div className='grid-container'>
            <SimpleTable table={OrderData} title={'Order'} />
        </div>
    );
}