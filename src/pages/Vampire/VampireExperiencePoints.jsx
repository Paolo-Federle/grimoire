import React from 'react';
import SimpleTable from '../../components/SimpleTable'
import { VampireExperienceData } from '../../Data/Vampire/VampireExperienceData';


export default function VampireExperiencePoints() {

    return (
        <div className='grid-container'>
            <SimpleTable table={VampireExperienceData} title={'Vampire Experience Points'} />
        </div>
    );
}