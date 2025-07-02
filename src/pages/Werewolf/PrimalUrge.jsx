import React from 'react';
import SimpleTable from '../../components/SimpleTable';
import { HarmonyData } from '../../Data/Werewolf/HarmonyData';
import { PrimalUrgeData } from '../../Data/Werewolf/PrimalUrgeData';


export default function PrimalUrge() {
    return (
        <div className='grid-container'>
            <SimpleTable table={PrimalUrgeData} title={'Primal Urge'} />
        </div>
    );
}