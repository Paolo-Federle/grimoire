import React from 'react';
import SimpleTable from '../../components/SimpleTable'
import {
    alternateCovenantData,
    antagonisticCovenantData,
    brokenCovenantData,
    mainCovenantData,
    uncommonCovenantData,
} from '../../Data/Vampire/CovenantData';

export default function Covenant() {


    const headers = ['Name', 'Description', 'Advantage', 'Book']
    const covenantTables = [
        { title: 'Covenants', data: mainCovenantData },
        { title: 'Antagonistic Covenants', data: antagonisticCovenantData },
        { title: 'Uncommon Covenants', data: uncommonCovenantData },
        { title: 'Broken Covenants', data: brokenCovenantData },
        { title: 'Alternate Covenants', data: alternateCovenantData },
    ];

    return (
        <div className='grid-container'>
            {covenantTables.map(({ title, data }) => (
                <SimpleTable key={title} table={data} title={title} headers={headers} />
            ))}
        </div>
    );
}
