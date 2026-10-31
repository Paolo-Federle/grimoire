import React from 'react';
import SimpleTable from '../../components/SimpleTable';
import { ARCANA_SETS, SPELL_FIELDS, buildSpellRows } from './arcanaTableData';

export default function Arcanum({ arcanum }) {
    const lowercaseArcanaSets = ARCANA_SETS.map(set => set.name.toLowerCase());

    const arcanaIndex = lowercaseArcanaSets.indexOf(arcanum.toLowerCase());
    const selectedArcana = ARCANA_SETS[arcanaIndex];

    if (!selectedArcana) {
        return null;
    }

    const renderedArcanaTables = selectedArcana.data.map((rows, index) => {
        const title = `${selectedArcana.name} ${index + 1}`;

        return (
            <SimpleTable
                key={title}
                table={buildSpellRows(rows, title)}
                title={title}
                headers={[title, ...SPELL_FIELDS]}
                activeRowLink={true}
            />
        );
    });

    return <div className='grid-container'>
        {renderedArcanaTables}
        </div>;
}
