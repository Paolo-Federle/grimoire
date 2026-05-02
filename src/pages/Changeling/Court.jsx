import React from 'react';
import SimpleTable from '../../components/SimpleTable'
import {
    auroralCourtsData,
    directionalCourtsData,
    diurnalCourtsData,
    farawaySeasonalCourtsData,
    seasonalCourtsData,
} from '../../Data/Changeling/CourtData';

export default function Court() {


    const headers = ['Court Name', 'Court Emotion', 'Mantle Effects', 'Crown Blessing', 'Blessing Effect', 'Book']
    const courtTables = [
        { title: 'Seasonal Courts of the Americas', data: seasonalCourtsData },
        { title: 'Faraway Courts Seasonal Variants', data: farawaySeasonalCourtsData },
        { title: 'Directional Courts of Asia', data: directionalCourtsData },
        { title: 'Diurnal Courts of Eastern Europe', data: diurnalCourtsData },
        { title: 'Auroral Courts', data: auroralCourtsData },
    ];

    return (
        <div className='grid-container'>
            {courtTables.map(({ title, data }) => (
                <SimpleTable key={title} table={data} title={title} headers={headers} />
            ))}
        </div>
    );
}
