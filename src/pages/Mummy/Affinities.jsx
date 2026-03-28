import React from 'react';
import SimpleTable from '../../components/SimpleTable';
import { AffinitiesAbData, AffinitiesBaData, AffinitiesKaData, AffinitiesRenData, AffinitiesSheutData, AffinitiesGuildData, MiscellaneousAffinitiesData, BaneAffinitiesData } from '../../Data/Mummy/AffinitiesData';


export default function Affinities() {
    return (
        <div className='grid-container'>
            <h1 className="cursor-pointer text-2xl flex items-center gap-1">Pillar affinities</h1>
            <SimpleTable table={AffinitiesAbData} title={'Ab'} />
            <SimpleTable table={AffinitiesBaData} title={'Ba'} />
            <SimpleTable table={AffinitiesKaData} title={'Ka'} />
            <SimpleTable table={AffinitiesRenData} title={'Ren'} />
            <SimpleTable table={AffinitiesSheutData} title={'Sheu'} />
            <SimpleTable table={AffinitiesGuildData} title={'Guild'} />
            <SimpleTable table={MiscellaneousAffinitiesData} title={'Miscellaneous'} />
            <SimpleTable table={BaneAffinitiesData} title={'Bane'} />
        </div>
    );
}