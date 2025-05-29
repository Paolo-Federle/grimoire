import React from 'react';
import ManyHeadersTable from '../../components/ManyHeadersTable';
import { goblinFruitData } from '../../Data/Changeling/GoblinFruitData';

export default function GoblinFruits() {

    const headers = ['Name', 'Description', 'Effect', 'Type', 'Book']
    const headerCheckFields = ['Description']
    const disciplineData = ['Name']

    return (
        <div className='grid-container'>
            <ManyHeadersTable table={goblinFruitData} title={'Goblin Fruits'} headers={headers} headerCheckFields={headerCheckFields} alternateData={disciplineData}/>
        </div>
    );
}