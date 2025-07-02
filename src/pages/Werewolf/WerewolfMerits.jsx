import React from 'react';
import SimpleTable from '../../components/SimpleTable';
import { WerewolfMeritsData } from '../../Data/Werewolf/WerewolfMeritsData';


export default function WerewolfMerits() {
    return (
        <div className='grid-container'>
            <SimpleTable table={WerewolfMeritsData} title={'Werewolf Merits'} />
        </div>
    );
}