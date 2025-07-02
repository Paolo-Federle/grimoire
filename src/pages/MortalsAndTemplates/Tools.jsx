import React from 'react';
import SimpleTable from '../../components/SimpleTable'
import {
    genericToolsData,
    weaponToolsData,
    animalTrainingEquipData,
    fakeBadegesAndIdsData,
    drugsData,
    polygraphAndLieDetectData,
    disguisesData
} from '../../Data/Mortal/ToolData';

export default function Tools() {
    return (
        <div className='grid-container'>
            <SimpleTable table={genericToolsData} title={'Generic Tools'} activeRowLink={false} />
            <SimpleTable table={weaponToolsData} title={'Tools as Weapons'} activeRowLink={false} />
            <SimpleTable table={animalTrainingEquipData} title={'Animal Training Equipment'} activeRowLink={false} />
            <SimpleTable table={fakeBadegesAndIdsData} title={'Fake Badges and IDs'} activeRowLink={false} />
            <SimpleTable table={drugsData} title={'Drugs'} activeRowLink={false} />
            <SimpleTable table={polygraphAndLieDetectData} title={'Polygraphs and Lie Detectors'} activeRowLink={false} />
            <SimpleTable table={disguisesData} title={'Disguises'} activeRowLink={false} />
        </div>
    );
}