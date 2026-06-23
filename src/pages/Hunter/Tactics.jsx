import React from 'react';
import SimpleTable from '../../components/SimpleTable';
import TableGroup from '../../components/TableGroup';
import { TactictsData } from '../../Data/Hunter/TactictsData';
import { PATHS } from '../path';
import { slugify } from '../../utils';


export default function Tactics() {
    const headers = ['Name', 'Summary', 'Dice Rolls', 'XP', 'Book'];
    const tacticsWithLinks = TactictsData.map((tactic) => ({
        ...tactic,
        link: `${PATHS.HUNTER.TACTICS}/${slugify(tactic.Name)}`,
    }));

    return (
        <div className='grid-container'>
            <TableGroup title="Tactics" titleLink="tactics">
                <SimpleTable
                    table={tacticsWithLinks}
                    headers={headers}
                    activeRowLink
                    titleVariant="nested"
                />
            </TableGroup>
        </div>
    );
}
