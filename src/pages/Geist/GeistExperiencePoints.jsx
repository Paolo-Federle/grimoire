import React from 'react';
import SimpleTable from '../../components/SimpleTable'
import { GeistExperienceData } from '../../Data/Geist/GeistExperienceData';


export default function GeistExperiencePoints() {

    return (
        <div className='grid-container'>
            <SimpleTable table={GeistExperienceData} title={'Geist Experience Points'} />
        </div>
    );
}