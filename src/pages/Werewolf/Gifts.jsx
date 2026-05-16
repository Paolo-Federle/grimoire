import React from 'react';
import SimpleTable from '../../components/SimpleTable'
import { giftData } from '../../Data/Werewolf/GiftData';
import { milestoneGifts } from '../../Data/Werewolf/GiftData';

export default function Gifts() {

    const headers = ['Name', 'Rank', 'Cost', 'Description', 'Book']
    const giftFamilyHeaders = ['Name']

    return (
        <div className='grid-container'>
            <SimpleTable table={giftData} title={'Gifts'} headers={headers} rankedParentHeaders={giftFamilyHeaders}/>
            <SimpleTable table={milestoneGifts} title={'Milestone Gifts'} />
        </div>
    );
}
