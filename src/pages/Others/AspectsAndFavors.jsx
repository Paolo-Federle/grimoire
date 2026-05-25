import React from 'react';
import SimpleTable from '../../components/SimpleTable';
import { AspectsData, FavorsData } from '../../Data/Others/AspectsFavorsData';
import { PATHS } from '../path';
import { slugify } from '../../utils';

const headers = ['Name', 'Cost', 'Description', 'Book'];

const withDetailLinks = (items) => items.map((item) => ({
    ...item,
    link: `${PATHS.OTHERS.ASPECTS_FAVORRS}/${slugify(item.Name)}`,
}));


export default function AspectsAndFavors() {
    return (
        <div className='grid-container'>
            <SimpleTable table={withDetailLinks(AspectsData)} title={'Changing Breed: Aspects'} headers={headers} activeRowLink />
            <SimpleTable table={withDetailLinks(FavorsData)} title={'Changing Breed: Favors'} headers={headers} activeRowLink />
        </div>
    );
}
