import React from 'react';
import SimpleTable from '../../components/SimpleTable';
import TableGroup from '../../components/TableGroup';
import { ARCANA_SETS, SPELL_FIELDS, buildSpellRows } from './spellTableData';

export default function Spells() {
    const renderedArcanaTables = ARCANA_SETS.map((arcana) => (
        <TableGroup key={arcana.name} title={arcana.name}>
            {arcana.data.map((rows, index) => {
                const title = `${arcana.name} ${index + 1}`;

                return (
                    <SimpleTable
                        key={title}
                        table={buildSpellRows(rows, title)}
                        title={title}
                        headers={[title, ...SPELL_FIELDS]}
                        activeRowLink={true}
                        titleVariant="nested"
                    />
                );
            })}
        </TableGroup>
    ));

    return <div className='grid-container'>
        {renderedArcanaTables}
    </div>;
}
