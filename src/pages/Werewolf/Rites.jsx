import React from 'react';
import SimpleTable from '../../components/SimpleTable';
import { RitesData } from '../../Data/Werewolf/RitesData';


export default function Rites() {
    return (
        <div className='grid-container'>
            <SimpleTable table={RitesData} title={'Rites'} />
        </div>
    );
}