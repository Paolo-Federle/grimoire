import React from 'react';
import SimpleTable from '../../components/SimpleTable';
import { GuildsData } from '../../Data/Mummy/GuildsData';



export default function Guilds() {
    return (
        <div className='grid-container'>
            <SimpleTable table={GuildsData} title={'Guilds'} />
        </div>
    );
}