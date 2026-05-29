import React from 'react';
import SimpleTable from '../../components/SimpleTable';
import { hunterMeritsData, hunterRankedMeritsData } from '../../Data/Hunter/HunterMeritsData';
import { PATHS } from '../path';
import { slugify } from '../../utils';

const headers = ['Name', 'Ranks', 'Rank name', 'Prerequisites', 'Summary', 'Book'];

const withDetailLinks = (items) => items.map((item) => ({
    ...item,
    link: `${PATHS.HUNTER.MERITS}/${slugify(item.Name)}`,
}));

export default function HunterMerits() {
    return (
        <div className='grid-container'>
            <SimpleTable table={withDetailLinks(hunterMeritsData)} title={'Hunter Merits'} headers={headers} activeRowLink />
            <SimpleTable
                table={withDetailLinks(hunterRankedMeritsData)}
                title={'Hunter Ranked Merits'}
                headers={headers}
                activeRowLink
                rankedField="RankDetails"
            />
        </div>
    );
}
