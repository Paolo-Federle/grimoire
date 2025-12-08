import React from 'react';
import ManyHeadersTable from '../../components/ManyHeadersTable/ManyHeadersTable'
import { UniversalDisciplineData, CoilsOfTheDragonData, ThebanSorceryData, CrùacData, BloodlineDisciplineData, otherDisciplineData } from '../../Data/Vampire/DisciplineData';
import { addLink } from '../../utils';

export default function Disciplines() {


    const headers = ['Name', 'Rank', 'Cost', 'Description', 'Book']
    const coilHeaders = ['Name','Rank', 'Description', 'Book']
    const thebanSorceryHeaders = ['Name', 'Description', 'Book']
    const headerCheckFields = ['Rank']
    const thenbanSorceryCheckFields = ['Discipline', 'Rank']
    const thebanSorceryCheck = ['Book']
    const bloodlineDisciplineData = ['Discipline', 'Bloodline']
    const disciplineData = ['Discipline']

    return (
        <div className='grid-container'>
            <ManyHeadersTable table={addLink(UniversalDisciplineData, 'Name', '/vampire/disciplines/')} title={'Disciplines'} headers={headers} headerCheckFields={headerCheckFields} alternateData={disciplineData} prereqForLink={'Name'} activeRowLink={true}/>
            <ManyHeadersTable table={addLink(CoilsOfTheDragonData, 'Name', '/vampire/disciplines/')} title={'Coils of the Dragon'} headers={coilHeaders} headerCheckFields={headerCheckFields} alternateData={disciplineData} prereqForLink={'Name'} activeRowLink={true}/>
            <ManyHeadersTable table={addLink(ThebanSorceryData, 'Name', '/vampire/disciplines/')} title={'Theban Sorcery'} headers={thebanSorceryHeaders} headerCheckFields={thebanSorceryCheck} alternateData={thenbanSorceryCheckFields} prereqForLink={'Name'} activeRowLink={true}/>
            <ManyHeadersTable table={addLink(CrùacData, 'Name', '/vampire/disciplines/')} title={'Crúac'} headers={thebanSorceryHeaders} headerCheckFields={thebanSorceryCheck} alternateData={thenbanSorceryCheckFields} prereqForLink={'Name'} activeRowLink={true}/>
            <ManyHeadersTable table={addLink(BloodlineDisciplineData, 'Name', '/vampire/disciplines/')} title={'Bloodline Disciplines'} headers={headers} headerCheckFields={headerCheckFields} alternateData={bloodlineDisciplineData} prereqForLink={'Name'} activeRowLink={true}/>
            <ManyHeadersTable table={addLink(otherDisciplineData, 'Name', '/vampire/disciplines/')} title={'Other Disciplines'} headers={headers} headerCheckFields={headerCheckFields} alternateData={disciplineData} prereqForLink={'Name'} activeRowLink={true}/>
        </div>
    );
}