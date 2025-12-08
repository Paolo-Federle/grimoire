import React from 'react';
import ManyHeadersTable from '../../components/ManyHeadersTable/ManyHeadersTable'
import { clanData } from '../../Data/Vampire/ClanData';

export default function Clan() {


    const headers = ['Name', 'Nickname', 'Bonus Trait', 'Clan Disciplines', 'Weakness', 'Book']
    const headerCheckFields = ['Nickname']
    const disciplineData = ['Name']

    return (
        <div className='grid-container'>
            <ManyHeadersTable table={clanData} title={'Clans'} headers={headers} headerCheckFields={headerCheckFields} alternateData={disciplineData}/>
        </div>
    );
}