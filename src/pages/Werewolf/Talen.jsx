import React from 'react';
import SimpleTable from '../../components/SimpleTable';
import { TalensData } from '../../Data/Werewolf/TalensData';


export default function Talen() {
    return (
        <div className='grid-container'>
            <SimpleTable table={TalensData} title={'Talens'} />
        </div>
    );
}