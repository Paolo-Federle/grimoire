import React from 'react';
import SimpleTable from '../../components/SimpleTable';
import { LodgesData } from '../../Data/Werewolf/LodgeData';


export default function Lodges() {
    return (
        <div className='grid-container'>
            <SimpleTable table={LodgesData} title={'Lodges'} />
        </div>
    );
}