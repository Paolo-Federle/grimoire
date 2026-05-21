import React from 'react';
import {
    psychicEspMeritsData,
    psychicMediumistMeritsData,
    psychicMeritsData,
    psychicPsychokineticMeritsData,
    psychicTelepathicMeritsData,
} from '../../../Data/Mortal/Lesser templates/PsychicMeritsData';
import SimpleTable from '../../../components/SimpleTable';
import { PATHS } from '../../path';
import { slugify } from '../../../utils';

function addDetailLinks(data) {
    return data.map((item) => {
        if (!item.Content && !item.RollResult) {
            return item;
        }

        return {
            ...item,
            link: `${PATHS.MORTAL.PSYCHIC_POWERS}/${slugify(item.Name)}`,
        };
    });
}

export default function PsychicsPowers() {

    const headers = ['Name', 'Rank', 'Prerequisite', 'Description', 'Book']
    const psychicTables = [
        { title: 'Psychic merits', data: addDetailLinks(psychicMeritsData) },
        { title: 'ESP merits', data: addDetailLinks(psychicEspMeritsData) },
        { title: 'Mediumist merits', data: addDetailLinks(psychicMediumistMeritsData) },
        { title: 'Psychokinetic merits', data: addDetailLinks(psychicPsychokineticMeritsData) },
        { title: 'Telepathic merits', data: addDetailLinks(psychicTelepathicMeritsData) },
    ];

    return (
        <div className='grid-container'>
            {psychicTables.map(({ title, data }) => (
                <SimpleTable key={title} table={data} title={title} headers={headers} activeRowLink />
            ))}
        </div>
    );
}
