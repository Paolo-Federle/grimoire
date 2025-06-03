import React from 'react';
import SimpleTable from '../../components/SimpleTable';
import { TactictsData } from '../../Data/Hunter/TactictsData';


export default function Tactics() {
    return (
        <div className='grid-container'>
            <SimpleTable table={TactictsData} title={'Tactics'} />
        </div>
    );
}