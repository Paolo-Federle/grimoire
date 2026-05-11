import React from 'react';
import ManyHeadersTable from '../../components/ManyHeadersTable/ManyHeadersTable'
import SimpleTable from '../../components/SimpleTable';
import TableGroup from '../../components/TableGroup';
import {
    UniversalDisciplineData,
    CoilsOfTheDragonData,
    ThebanSorceryOverview,
    ThebanSorceryData,
    CrùacOverview,
    CrùacData,
    BloodlineDisciplineData,
    otherDisciplineData
} from '../../Data/Vampire/DisciplineData';
import { addLink, slugify } from '../../utils';

const buildRitualRankGroups = (data) => {
    const ranks = [...new Set(data.map((row) => row.Rank).filter(Boolean))];

    return ranks.map((rank) => ({
        rank,
        rows: data.filter((row) => row.Rank === rank),
    }));
};

function RitualTableGroup({ data, overview, fallbackTitle }) {
    const headers = ['Name', 'Description', 'Book'];
    const title = overview?.Name || fallbackTitle;
    const titleLink = slugify(title);

    return (
        <TableGroup title={title} titleLink={titleLink}>
            {buildRitualRankGroups(data).map(({ rank, rows }) => {
                const tableTitle = `${title} ${rank}`;

                return (
                    <SimpleTable
                        key={tableTitle}
                        table={addLink(rows, 'Name', '/vampire/disciplines/')}
                        title={tableTitle}
                        headers={headers}
                        activeRowLink={true}
                        titleVariant="nested"
                    />
                );
            })}
        </TableGroup>
    );
}

export default function Disciplines() {


    const headers = ['Name', 'Rank', 'Cost', 'Description', 'Book']
    const coilHeaders = ['Name','Rank', 'Description', 'Book']
    const headerCheckFields = ['Rank']
    const bloodlineDisciplineData = ['Discipline', 'Bloodline']
    const disciplineData = ['Discipline']

    return (
        <div className='grid-container'>
            <ManyHeadersTable table={addLink(UniversalDisciplineData, 'Name', '/vampire/disciplines/')} title={'Disciplines'} headers={headers} headerCheckFields={headerCheckFields} alternateData={disciplineData} prereqForLink={'Name'} activeRowLink={true}/>
            <ManyHeadersTable table={addLink(CoilsOfTheDragonData, 'Name', '/vampire/disciplines/')} title={'Coils of the Dragon'} headers={coilHeaders} headerCheckFields={headerCheckFields} alternateData={disciplineData} prereqForLink={'Name'} activeRowLink={true}/>
            <RitualTableGroup data={ThebanSorceryData} overview={ThebanSorceryOverview} fallbackTitle="Theban Sorcery" />
            <RitualTableGroup data={CrùacData} overview={CrùacOverview} fallbackTitle="Crúac" />
            <ManyHeadersTable table={addLink(BloodlineDisciplineData, 'Name', '/vampire/disciplines/')} title={'Bloodline Disciplines'} headers={headers} headerCheckFields={headerCheckFields} alternateData={bloodlineDisciplineData} prereqForLink={'Name'} activeRowLink={true}/>
            <ManyHeadersTable table={addLink(otherDisciplineData, 'Name', '/vampire/disciplines/')} title={'Other Disciplines'} headers={headers} headerCheckFields={headerCheckFields} alternateData={disciplineData} prereqForLink={'Name'} activeRowLink={true}/>
        </div>
    );
}
