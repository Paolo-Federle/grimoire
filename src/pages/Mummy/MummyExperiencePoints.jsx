import React from 'react';
import SimpleTable from '../../components/SimpleTable'
import { MummyExperienceData } from '../../Data/Mummy/MummyExperienceData';


export default function MummyExperiencePoints() {

    return (
        <div className='grid-container'>
            <SimpleTable table={MummyExperienceData} title={'Mummy Experience Points'} />
        </div>
    );
}