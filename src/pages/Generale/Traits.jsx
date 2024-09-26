import React from 'react';
import SimpleTable from '../../components/SimpleTable'
import { TraitsData } from '../../Data/TraitsData';

export default function Traits() {

    return (
        <div className='grid-container'>
            <SimpleTable table={TraitsData} title={'Traits'} activeRowLink={true}/>
        </div>
    );
}