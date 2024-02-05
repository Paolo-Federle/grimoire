import React from 'react';
import SimpleTable from '../../components/SimpleTable'
import { skillsMentalData, skillsPhysicalData, skillsSocialData, skillsAlternateData } from '../../Data/SkillsData';

export default function Skills() {

    function renameSkillField(data, newFieldName) {
    return data.map(item => {
        const newItem = { [newFieldName]: item.skill, ...item };
        delete newItem.skill;
        return newItem;
    });
}
    
    const mentalSkillsData = renameSkillField(skillsMentalData, "Mental");
    const physicalSkillsData = renameSkillField(skillsPhysicalData, "Physical");
    const socialSkillsData = renameSkillField(skillsSocialData, "Social");
    const alternateSkillsData = renameSkillField(skillsAlternateData, "Alternate");
    

    return (
        <div className='grid-container'>
            <SimpleTable table={mentalSkillsData} />
            <SimpleTable table={physicalSkillsData} />
            <SimpleTable table={socialSkillsData} />
            <SimpleTable table={alternateSkillsData} />
        </div>
    );
}