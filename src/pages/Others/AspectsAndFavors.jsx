import React from 'react';
import SimpleTable from '../../components/SimpleTable';
import { AspectsData, FavorsData } from '../../Data/Others/AspectsFavorsData';


export default function AspectsAndFavors() {
    return (
        <div className='grid-container'>
            <SimpleTable table={AspectsData} title={'Changing Breed: Aspects'} />
            <SimpleTable table={FavorsData} title={'Changing Breed: Favors'} />
        </div>
    );
}