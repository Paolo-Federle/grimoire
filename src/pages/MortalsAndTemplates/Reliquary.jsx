import React from 'react';
import SimpleTable from '../../components/SimpleTable'
import { reliquaryData, reliquaryPowersData } from '../../Data/Mortal/ReliquaryData';
import { PATHS } from '../path';
import { slugify } from '../../utils';

export default function Reliquary() {
    const reliquaryHeaders = ['Name', 'Effect', 'Durability', 'Size', 'Structure', 'Book'];
    const reliquaryPowerHeaders = ['Relic Powers', 'Effect', 'Cost', 'Roll', 'Book'];
    const reliquaryWithLinks = reliquaryData.map((item) => ({
        ...item,
        link: `${PATHS.MORTAL.RELIQUARY}/${slugify(item.Name)}`,
    }));
    const powersWithLinks = reliquaryPowersData.map((power) => ({
        ...power,
        link: `${PATHS.MORTAL.RELIQUARY}/${slugify(power['Relic Powers'])}`,
    }));

    return (
        <div className='grid-container'>
            <SimpleTable table={reliquaryWithLinks} title={'Reliquary'} headers={reliquaryHeaders} activeRowLink />
            <SimpleTable table={powersWithLinks} title={'Reliquary powers'} headers={reliquaryPowerHeaders} activeRowLink />
        </div>
    );
}
