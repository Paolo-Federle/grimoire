import React from 'react';
import {
    psychicEspMeritsData,
    psychicMediumistMeritsData,
    psychicMeritsData,
    psychicPsychokineticMeritsData,
    psychicTelepathicMeritsData,
} from '../../../Data/Mortal/Lesser templates/PsychicMeritsData';
import SimpleTable from '../../../components/SimpleTable';


export default function PsychicsPowers() {

    const headers = ['Name', 'Rank', 'Prerequisite', 'Description', 'Book']
    const psychicTables = [
        { title: 'Psychic merits', data: psychicMeritsData },
        { title: 'ESP merits', data: psychicEspMeritsData },
        { title: 'Mediumist merits', data: psychicMediumistMeritsData },
        { title: 'Psychokinetic merits', data: psychicPsychokineticMeritsData },
        { title: 'Telepathic merits', data: psychicTelepathicMeritsData },
    ];

    return (
        <div className='grid-container'>
            {psychicTables.map(({ title, data }) => (
                <SimpleTable key={title} table={data} title={title} headers={headers} activeRowLink={false} />
            ))}
        </div>
    );
}
