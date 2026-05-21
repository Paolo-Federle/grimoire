import React from 'react';
import { GeistMeritsData } from '../../Data/Geist/GeistMeritsData';
import SimpleTable from '../../components/SimpleTable';
import { PATHS } from '../path';
import { slugify } from '../../utils';

const headers = ['Name', 'Cost', 'Summary', 'Book'];

const tableData = GeistMeritsData.map((merit) => ({
    ...merit,
    link: `${PATHS.GEIST.MERITS}/${slugify(merit.Name)}`,
}));


export default function GeistMerits() {
    return (
        <div className='grid-container'>
            <SimpleTable table={tableData} title={'Geist Merits'} headers={headers} activeRowLink />
        </div>
    );
}
