import React from 'react';
import SimpleTable from '../../components/SimpleTable'
import { GhoulFamiliesData } from '../../Data/Vampire/GhoulData';

export default function GhoulFamilies() {

    return (
        <div className='grid-container'>
            <SimpleTable table={GhoulFamiliesData} title={'Ghoul Families'} />
        </div>
    );
}