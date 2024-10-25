import React from 'react';
import SimpleTable from '../../components/SimpleTable'
import itemstData from '../../Data/ItemData';

export default function Items() {

    return (
        <div className='grid-container'>
            <SimpleTable table={itemstData} title={'Items'} activeRowLink={true}/>
        </div>
    );
}