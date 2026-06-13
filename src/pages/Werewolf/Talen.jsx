import React from 'react';
import SimpleTable from '../../components/SimpleTable';
import { TalensData } from '../../Data/Werewolf/TalensData';
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

export default function Talen() {
    const headers = ['Name', 'Description', 'Action', 'Book'];
    const talensWithDetailLinks = TalensData.map((talen) => ({
        ...talen,
        link: hasContentBlocks(talen.Content)
            ? `${PATHS.WEREWOLF.TALENS}/${slugify(talen.Name)}`
            : undefined,
    }));

    return (
        <div className='grid-container'>
            <SimpleTable
                table={talensWithDetailLinks}
                title={'Talens'}
                headers={headers}
                activeRowLink
            />
        </div>
    );
}
