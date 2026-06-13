import React from 'react';
import SimpleTable from '../../components/SimpleTable';
import { WerewolfMeritsData } from '../../Data/Werewolf/WerewolfMeritsData';
import { slugify } from '../../utils';
import { PATHS } from '../path';

function hasContentBlocks(value) {
    return Array.isArray(value) && value.some((item) => {
        if (typeof item === 'string') {
            return item.trim() !== '';
        }

        return !!item;
    });
}

function getCleanRank(rank) {
    if (!rank) return '';

    const withoutPrerequisites = String(rank)
        .replace(/\s*\*?pre\s*:\s*.*$/i, '')
        .trim();

    return withoutPrerequisites.replace(/^\((.*)\)$/, '$1').trim();
}

function getRankPrerequisites(rank) {
    if (!rank) return '';

    const match = String(rank).match(/\*?pre\s*:\s*(.*)$/i);
    return match ? match[1].trim() : '';
}

export default function WerewolfMerits() {
    const headers = ['Name', 'Rank', 'Prerequisites', 'Description', 'Book'];
    const meritsWithDetailLinks = WerewolfMeritsData.map((merit) => ({
        ...merit,
        Rank: getCleanRank(merit.Rank),
        Prerequisites: merit.Prerequisites || merit.FullPrerequisites || getRankPrerequisites(merit.Rank),
        link: hasContentBlocks(merit.Effect)
            ? `${PATHS.WEREWOLF.MERITS}/${slugify(merit.Name)}`
            : undefined,
    }));

    return (
        <div className='grid-container'>
            <SimpleTable
                table={meritsWithDetailLinks}
                title={'Werewolf Merits'}
                headers={headers}
                activeRowLink
            />
        </div>
    );
}
