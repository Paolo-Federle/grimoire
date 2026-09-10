import React from 'react';
import SimpleTable from '../../components/SimpleTable';
import { LegacyIndexData } from '../../Data/Mage/LegacyIndexData';
import { getMageLegacyPath } from '../path';

export default function Legacy() {
    const headers = [
        'Name',
        'Cammino',
        'Ordine',
        'Nickname',
        'Primary Arcanum',
        'Conjunctional Arcanum',
        'Optional Arcanum',
        'Book',
    ];

    const legacyTableData = LegacyIndexData.map((legacy) => ({
        ...legacy,
        link: getMageLegacyPath(legacy.Id),
    }));

    return (
        <div className='grid-container'>
            <SimpleTable
                table={legacyTableData}
                title="Legacy"
                headers={headers}
                activeRowLink={true}
            />
        </div>
    );
}
