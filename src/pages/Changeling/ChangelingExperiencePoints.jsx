import React from 'react';
import SimpleTable from '../../components/SimpleTable'
import { ChangelingExperienceData } from '../../Data/Changeling/ChangelingExperienceData';


export default function ChangelingExperiencePoints() {

    return (
        <div className='grid-container'>
            <SimpleTable table={ChangelingExperienceData} title={'Changeling Experience Points'} />
        </div>
    );
}