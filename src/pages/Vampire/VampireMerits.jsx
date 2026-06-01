import React from 'react';
import SimpleTable from '../../components/SimpleTable'
import {
    carthianMeritsData,
    generalVampireMeritsData,
    invictusMeritsData,
    ordoDraculMeritsData,
} from '../../Data/Vampire/VampireMeritsData';
import { PATHS } from '../path';
import { slugify } from '../../utils';

export default function VampireMerits() {


    const headers = ['Name', 'Rank', 'Prerequisite', 'Description', 'Book']
    const meritTables = [
        { title: 'Vampire Merits', data: generalVampireMeritsData },
        { title: 'Carthian Merits', data: carthianMeritsData },
        { title: 'Invictus Merits', data: invictusMeritsData },
        { title: 'Ordo Dracul Merits', data: ordoDraculMeritsData },
    ];
    const meritTablesWithLinks = meritTables.map(({ title, data }) => ({
        title,
        data: data.map((merit) => ({
            ...merit,
            link: `${PATHS.VAMPIRE.MERITS}/${slugify(merit.Name)}`,
        })),
    }));

    return (
        <div className='grid-container'>
            {meritTablesWithLinks.map(({ title, data }) => (
                <SimpleTable key={title} table={data} title={title} headers={headers} activeRowLink />
            ))}
        </div>
    );
}
