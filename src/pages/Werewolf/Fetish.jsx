import React from 'react';
import { fetishData } from '../../Data/Werewolf/FetishData';
import SimpleTable from '../../components/SimpleTable';
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

const nameCounts = fetishData.reduce((counts, fetish) => {
    counts[fetish.Name] = (counts[fetish.Name] || 0) + 1;
    return counts;
}, {});

function getFetishSlug(fetish) {
    const name = fetish.Name || '';

    if (nameCounts[name] > 1) {
        return slugify(`${name} ${fetish.Rank || ''} ${fetish.Book || ''}`);
    }

    return slugify(name);
}

export default function Fetish() {
    const headers = ['Name', 'Rank', 'Action', 'Spirit', 'Tribe/Auspice', 'Description', 'Book'];
    const fetishesWithDetailLinks = fetishData.map((fetish) => ({
        ...fetish,
        link: hasContentBlocks(fetish.Content)
            ? `${PATHS.WEREWOLF.FETISHES}/${getFetishSlug(fetish)}`
            : undefined,
    }));

    return (
        <div className='grid-container'>
            <SimpleTable
                table={fetishesWithDetailLinks}
                title={'Fetish'}
                headers={headers}
                activeRowLink
            />
        </div>
    );
}
