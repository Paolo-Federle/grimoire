import React from 'react';
import SimpleTable from '../../components/SimpleTable'
import { MoralityData } from '../../Data/Mortal/MoralityData';

export default function Morality() {
    return (
        <div className='grid-container'>
            <SimpleTable table={MoralityData} title={'Morality'} activeRowLink={false} />
        </div>
    );
}