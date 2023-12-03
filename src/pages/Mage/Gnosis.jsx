import React from 'react';
import SimpleTable from '../../components/SimpleTable'
import GnosisData from '../../Data/Mage/GnosisData';

export default function Path() {

    return (
        <SimpleTable table={GnosisData} title={'Gnosis'} />
    );
}