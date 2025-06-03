import React from 'react';
import SimpleTable from '../../components/SimpleTable'
import ManyHeadersTable from '../../components/ManyHeadersTable';
import { giftData } from '../../Data/Werewolf/GiftData';
import { milestoneGifts } from '../../Data/Werewolf/GiftData';

export default function Gifts() {

    const headers = ['Name', 'Rank', 'Cost', 'Description', 'Book']
    const datoSostituibile = ['Rank']
    const datoSostituto = ['Name']

    return (
        <div className='grid-container'>
            <ManyHeadersTable table={giftData} title={'Gifts'} headers={headers} headerCheckFields={datoSostituibile} alternateData={datoSostituto} prereqForLink={'Name'} activeRowLink={false}/>
            <SimpleTable table={milestoneGifts} title={'Milestone Gifts'} />
        </div>
    );
}