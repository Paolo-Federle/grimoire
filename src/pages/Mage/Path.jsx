import React from 'react';
import SimpleTable from '../../components/SimpleTable'
import PathData from '../../Data/Mage/PathData';

export default function Path() {

    return (
        <div className='grid-container'>
            <SimpleTable table={PathData} title={'Path'} />
        </div>
    );
}