import React from 'react';
import SimpleTable from '../../components/SimpleTable'
import { clanData, historicalClanData, restrictedClanData } from '../../Data/Vampire/ClanData';

export default function Clan() {



    return (
        <div className='grid-container'>
            <SimpleTable table={clanData} title={'Clans'} />
            <SimpleTable table={restrictedClanData} title={'Restricted Clans'}  />
            <SimpleTable table={historicalClanData} title={'Historical Clans'} />
        </div>
    );
}
