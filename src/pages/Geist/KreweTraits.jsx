import React from 'react';
import SimpleTable from '../../components/SimpleTable';
import { KreweTraitsData } from '../../Data/Geist/KreweTraitsData';



export default function KreweTraits() {
    return (
        <div className='grid-container'>
            <SimpleTable table={KreweTraitsData} title={'Krewe Traits'} />
        </div>
    );
}