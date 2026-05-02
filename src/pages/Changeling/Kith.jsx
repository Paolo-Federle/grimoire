import React from 'react';
import SimpleTable from '../../components/SimpleTable'
import {
    kithBeastsData,
    kithDarklingsData,
    kithElementalsData,
    kithFairestData,
    kithOgresData,
    kithWizenedData,
} from '../../Data/Changeling/KithData';

export default function Kith() {


    const headers = ['Kith', 'Description', 'Blessing', 'Blessing effect', 'Book']
    const kithTables = [
        { title: 'Beasts', data: kithBeastsData },
        { title: 'Darklings', data: kithDarklingsData },
        { title: 'Elementals', data: kithElementalsData },
        { title: 'Fairest', data: kithFairestData },
        { title: 'Ogres', data: kithOgresData },
        { title: 'Wizened', data: kithWizenedData },
    ];

    return (
        <div className='grid-container'>
            {kithTables.map(({ title, data }) => (
                <SimpleTable key={title} table={data} title={title} headers={headers} />
            ))}
        </div>
    );
}
