import React from 'react';
import ManyHeadersTable from '../../components/ManyHeadersTable'
import { UniversalDisciplineData, CoilsOfTheDragonData, ThebanSorceryData, CrùacData, BloodlineDevotionData } from '../../Data/Vampire/DisciplineData';

export default function Disciplines() {


    const headers = ['Name', 'Rank', 'Cost', 'Description', 'Book']
    const coilHeaders = ['Name','Rank', 'Description', 'Book']
    const thebanSorceryHeaders = ['Name', 'Description', 'Book']
    const headerCheckFields = ['Rank']
    const thenbanSorceryCheckFields = ['Discipline', 'Rank']
    const thebanSorceryCheck = ['Name']
    const bloodlineDisciplineData = ['Discipline', 'Bloodline']
    const disciplineData = ['Discipline']

    return (
        <div className='grid-container'>
            <ManyHeadersTable table={UniversalDisciplineData} title={'Disciplines'} headers={headers} headerCheckFields={headerCheckFields} alternateData={disciplineData}/>
            <ManyHeadersTable table={CoilsOfTheDragonData} title={'Coils of the Dragon'} headers={coilHeaders} headerCheckFields={headerCheckFields} alternateData={disciplineData}/>
            <ManyHeadersTable table={ThebanSorceryData} title={'Theban Sorcery'} headers={thebanSorceryHeaders} headerCheckFields={thebanSorceryCheck} alternateData={thenbanSorceryCheckFields}/>
            <ManyHeadersTable table={CrùacData} title={'Crúac'} headers={thebanSorceryHeaders} headerCheckFields={thebanSorceryCheck} alternateData={thenbanSorceryCheckFields}/>
            <ManyHeadersTable table={BloodlineDevotionData} title={'Bloodline Disciplines'} headers={headers} headerCheckFields={headerCheckFields} alternateData={bloodlineDisciplineData}/>
        </div>
    );
}