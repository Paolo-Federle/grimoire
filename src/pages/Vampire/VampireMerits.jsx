import React from 'react';
import SimpleTable from '../../components/SimpleTable'
import {
    carthianMeritsData,
    generalVampireMeritsData,
    invictusMeritsData,
    ordoDraculMeritsData,
} from '../../Data/Vampire/VampireMeritsData';

export default function VampireMerits() {


    const headers = ['Name', 'Cost', 'Description', 'Book']
    const meritTables = [
        { title: 'Vampire Merits', data: generalVampireMeritsData },
        { title: 'Carthian Merits', data: carthianMeritsData },
        { title: 'Invictus Merits', data: invictusMeritsData },
        { title: 'Ordo Dracul Merits', data: ordoDraculMeritsData },
    ];

    return (
        <div className='grid-container'>
            {meritTables.map(({ title, data }) => (
                <SimpleTable key={title} table={data} title={title} headers={headers} />
            ))}
        </div>
    );
}
