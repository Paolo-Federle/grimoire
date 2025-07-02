import React from 'react';
import SimpleTable from '../../components/SimpleTable';
import { HarmonyData } from '../../Data/Werewolf/HarmonyData';


export default function Harmony() {
    return (
        <div className='grid-container'>
            <SimpleTable table={HarmonyData} title={'Harmony'} />
        </div>
    );
}