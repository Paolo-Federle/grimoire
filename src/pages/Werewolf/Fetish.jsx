import React from 'react';
import { fetishData } from '../../Data/Werewolf/FetishData';
import SimpleTable from '../../components/SimpleTable';


export default function Fetish() {
    return (
        <div className='grid-container'>
        <SimpleTable table={fetishData} title={'Fetish'} />
        </div>
    );
}