import React from 'react';
import SimpleTable from '../../components/SimpleTable'
import { MageExperienceData } from '../../Data/Mage/MageExperienceData';


export default function MageExperiencePoints() {

    return (
        <div className='grid-container'>
            <SimpleTable table={MageExperienceData} title={'Mage Experience Points'} />
        </div>
    );
}