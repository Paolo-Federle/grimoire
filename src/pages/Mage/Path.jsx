import React from 'react';
import SimpleTable from '../../components/SimpleTable'
import PathData from '../../Data/Mage/PathData';

export default function Path() {

    return (
        <SimpleTable table={PathData} title={'Path'} />
    );
}