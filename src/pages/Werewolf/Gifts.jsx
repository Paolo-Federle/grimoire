import React from 'react';
import SimpleTable from '../../components/SimpleTable'
import ManyHeadersTable from '../../components/ManyHeadersTable';
import { giftData } from '../../Data/Werewolf/GiftData';

export default function Gifts() {

    const headers = ['Name', 'Rank', 'Cost', 'Description', 'Book']
    const headerCheckFields = ['Rank']
    const disciplineData = ['Discipline']

    return (
        <div className='grid-container'>
            {/* <ManyHeadersTable table={giftData} title={'Gifts'} headers={headers} headerCheckFields={headerCheckFields} alternateData={disciplineData} prereqForLink={'Name'} activeRowLink={false}/> */}
            <SimpleTable table={giftData} title={'Gifts'} />
        </div>
    );
}