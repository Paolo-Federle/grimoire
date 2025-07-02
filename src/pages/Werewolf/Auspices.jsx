import React from 'react';
import SimpleTable from '../../components/SimpleTable';
import { AuspiceData } from '../../Data/Werewolf/AuspiceData';


export default function Auspices() {
    return (
        <div className='grid-container'>
            <SimpleTable table={AuspiceData} title={'Auspices'} />
        </div>
    );
}