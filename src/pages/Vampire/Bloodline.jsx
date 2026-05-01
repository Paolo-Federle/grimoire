import React from 'react';
import SimpleTable from '../../components/SimpleTable'
import {
    daevaBloodlineData,
    gangrelBloodlineData,
    genericBloodlineData,
    juliiBloodlineData,
    mekhetBloodlineData,
    nosferatuBloodlineData,
    unknownBloodlineData,
    ventrueBloodlineData,
} from '../../Data/Vampire/BloodlineData';

export default function Bloodline() {


    const headers = ['Name', 'Nickname', 'Description', 'Disciplines', 'Additional Weakness', 'Book']

    const bloodlineTables = [
        { title: 'Generic Bloodlines', data: genericBloodlineData },
        { title: 'Daeva Bloodlines', data: daevaBloodlineData },
        { title: 'Gangrel Bloodlines', data: gangrelBloodlineData },
        { title: 'Mekhet Bloodlines', data: mekhetBloodlineData },
        { title: 'Nosferatu Bloodlines', data: nosferatuBloodlineData },
        { title: 'Ventrue Bloodlines', data: ventrueBloodlineData },
        { title: 'Julii Bloodlines', data: juliiBloodlineData },
        { title: 'Unknown Bloodlines', data: unknownBloodlineData },
    ];

    return (
        <div className='grid-container'>
            {bloodlineTables.map(({ title, data }) => (
                <SimpleTable key={title} table={data} title={title} headers={headers} />
            ))}
        </div>
    );
}
