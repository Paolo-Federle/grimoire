import React from 'react';
import SimpleTable from '../../components/SimpleTable'
import DevotionData from '../../Data/Vampire/DevotionData';

export default function Devotion() {

    return (
        <div className='grid-container'>
            <SimpleTable table={DevotionData} title={'Devotion'} />
        </div>
    );
}