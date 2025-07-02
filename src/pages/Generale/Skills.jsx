import React from 'react';
import SimpleTable from '../../components/SimpleTable'
import { skillsMentalData, skillsPhysicalData, skillsSocialData, skillsAlternateData } from '../../Data/SkillsData';

export default function Skills() {
    

    return (
        <div className='grid-container'>
            <SimpleTable title={'Mental skills'} table={skillsMentalData} />
            <SimpleTable title={'Physical skills'} table={skillsPhysicalData} />
            <SimpleTable title={'Social skills'} table={skillsSocialData} />
            <SimpleTable title={'Alternative skills'} table={skillsAlternateData} />
        </div>
    );
}