import React from 'react';
import ManyHeadersTable from '../../components/ManyHeadersTable'
import { clanData } from '../../Data/Vampire/ClanData';

export default function Clan() {


    const headers = ['Basic', 'Nickname', 'Bonus Trait', 'Weakness', 'Book']
    const headerCheckFields = ['Nickname']
    const disciplineData = ['Basic']

    return (
        <div className='grid-container'>
            <ManyHeadersTable table={clanData} title={'Clans'} headers={headers} headerCheckFields={headerCheckFields} alternateData={disciplineData}/>
        </div>
    );
}