import React from 'react';
import SimpleTable from '../../components/SimpleTable'
import { WerewolfExperienceData } from '../../Data/Werewolf/WerewolfExperienceData';


export default function WerewolfExperiencePoints() {

    return (
        <div className='grid-container'>
            <SimpleTable table={WerewolfExperienceData} title={'Werewolf Experience Points'} />
        </div>
    );
}