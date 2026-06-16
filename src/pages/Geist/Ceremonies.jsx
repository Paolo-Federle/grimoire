import React from 'react';
import SimpleTable from '../../components/SimpleTable';
import TableGroup from '../../components/TableGroup';
import { CeremoniesData } from '../../Data/Geist/CeremoniesData';
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

function hasCeremonyDetail(ceremony) {
    return !!ceremony.Book && (
        hasContentBlocks(ceremony.Description) ||
        hasContentBlocks(ceremony.PerformingCeremony) ||
        hasContentBlocks(ceremony.RollResults) ||
        hasContentBlocks(ceremony.Notes) ||
        !!ceremony.DicePool ||
        !!ceremony.Action ||
        !!ceremony.TimeIncrement
    );
}


export default function Ceremonies() {
    const headers = ['Name', 'Pool (plus Psyche)', 'Summary', 'Book'];
    const ceremoniesWithDetailLinks = CeremoniesData.map((ceremony) => ({
        ...ceremony,
        link: hasCeremonyDetail(ceremony)
            ? `${PATHS.GEIST.CEREMONIES}/${slugify(ceremony.Name)}`
            : undefined,
    }));
    const ranks = [...new Set(ceremoniesWithDetailLinks.map((ceremony) => ceremony.Rank).filter(Boolean))];

    return (
        <div className='grid-container'>
            <TableGroup title="Ceremonies" titleLink="ceremonies">
                {ranks.map((rank) => (
                    <SimpleTable
                        key={rank}
                        table={ceremoniesWithDetailLinks.filter((ceremony) => ceremony.Rank === rank)}
                        title={`Rank ${rank} Ceremonies`}
                        headers={headers}
                        activeRowLink
                        titleVariant="nested"
                    />
                ))}
            </TableGroup>
        </div>
    );
}
