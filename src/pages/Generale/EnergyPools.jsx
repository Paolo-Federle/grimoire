import React from 'react';
import SimpleTable from '../../components/SimpleTable';
import { EnergyPoolsData } from '../../Data/EnergyPoolsData';
import { getFavoriteKey } from '../../favoritesStore';
import { PATHS } from '../path';

const headers = ['Name', 'Specific to', 'Description'];
// Preserve favorites saved when these rows were displayed directly on Traits.
const poolRows = EnergyPoolsData.map(pool => ({
    ...pool,
    __favKey: getFavoriteKey(pool, headers, PATHS.TRAITS),
}));

export default function EnergyPools() {
    return (
        <section aria-label="Energy pools" className="grid-container">
            <SimpleTable
                table={poolRows}
                title="Energy pools"
                headers={headers}
                upperText={['Supernatural characters draw on different energy pools to fuel their powers. Mortals and hunters rely on Willpower rather than a universal supernatural energy pool.']}
                activeRowLink
            />
        </section>
    );
}
