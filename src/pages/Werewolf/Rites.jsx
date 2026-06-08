import React from 'react';
import SimpleTable from '../../components/SimpleTable';
import TableGroup from '../../components/TableGroup';
import { RitesData } from '../../Data/Werewolf/RitesData';
import { PATHS } from '../path';
import { slugify } from '../../utils';

function hasContentBlocks(value) {
    return Array.isArray(value) && value.some((item) => {
        if (typeof item === 'string') {
            return item.trim() !== '';
        }

        return !!item;
    });
}

function hasRiteDetail(rite) {
    return !!rite.Book && (
        hasContentBlocks(rite.Content) ||
        hasContentBlocks(rite.PerformingRite) ||
        hasContentBlocks(rite.RollResults) ||
        !!rite.DicePool ||
        !!rite.Action
    );
}

export default function Rites() {
    const headers = ['Name', 'Cost', 'Description', 'Book'];
    const ritesWithDetailLinks = RitesData.map((rite) => ({
        ...rite,
        link: hasRiteDetail(rite) ? `${PATHS.WEREWOLF.RITES}/${slugify(rite.Name)}` : undefined,
    }));
    const rankedRites = ritesWithDetailLinks.filter((rite) => rite.Rank !== 'N/A');
    const ranks = [...new Set(rankedRites.map((rite) => rite.Rank).filter(Boolean))];

    return (
        <div className='grid-container'>
            <TableGroup title="Rites" titleLink="rites">
                {ranks.map((rank) => (
                    <SimpleTable
                        key={rank}
                        table={rankedRites.filter((rite) => rite.Rank === rank)}
                        title={`Rank ${rank} Rites`}
                        headers={headers}
                        activeRowLink
                        titleVariant="nested"
                    />
                ))}
            </TableGroup>
        </div>
    );
}
