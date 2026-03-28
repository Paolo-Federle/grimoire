import React from 'react';
import SimpleTable from '../../components/SimpleTable'
import { PrometheanExperienceData } from '../../Data/Promethean/PrometheanExperienceData';


export default function PrometheanExperiencePoints() {

    return (
        <div className='grid-container'>
            <SimpleTable table={PrometheanExperienceData} title={'Promethean Experience Points'} />
            <p> If a player purchases a Transmutation for his character without first learning at least one lower-ranked Transmutation per dot rank from the same class, he must pay +3 experience points per dot rank missed.</p>
        </div>
    );
}