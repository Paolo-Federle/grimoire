import React from 'react';
import SimpleTable from '../../components/SimpleTable'
import advantageData from '../../Data/AdvantageData';

export default function Advantage() {

    return (
        <div className='grid-container'>
            <SimpleTable table={advantageData} title={'Advantage'} activeRowLink={true}/>
        </div>
    );
}