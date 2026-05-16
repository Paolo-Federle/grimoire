import React from 'react';
import SimpleTable from '../../components/SimpleTable';
import TableGroup from '../../components/TableGroup';
import {
    UniversalDisciplineData,
    CoilsOfTheDragonOverview,
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

const addRankedLinks = (data, keyName, baseLink) => addLink(data, keyName, baseLink).map((row) => ({
    ...row,
    Ranks: Array.isArray(row.Ranks) ? addLink(row.Ranks, keyName, baseLink) : row.Ranks,
}));

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
    const bloodlineDisciplineData = ['Discipline', 'Bloodline']
    const disciplineData = ['Discipline']

    return (
        <div className='grid-container'>
            <SimpleTable table={addRankedLinks(UniversalDisciplineData, 'Name', '/vampire/disciplines/')} title={'Disciplines'} headers={headers} activeRowLink={true}/>
            <TableGroup title={CoilsOfTheDragonOverview.Name} titleLink={slugify(CoilsOfTheDragonOverview.Name)}>
                <SimpleTable table={addRankedLinks(CoilsOfTheDragonData, 'Name', '/vampire/disciplines/')} headers={coilHeaders} activeRowLink={true}/>
            </TableGroup>
            <RitualTableGroup data={ThebanSorceryData} overview={ThebanSorceryOverview} fallbackTitle="Theban Sorcery" />
            <RitualTableGroup data={CrùacData} overview={CrùacOverview} fallbackTitle="Crúac" />
            <SimpleTable table={addRankedLinks(BloodlineDisciplineData, 'Name', '/vampire/disciplines/')} title={'Bloodline Disciplines'} headers={headers} activeRowLink={true} rankedParentHeaders={bloodlineDisciplineData}/>
            <SimpleTable table={addRankedLinks(otherDisciplineData, 'Name', '/vampire/disciplines/')} title={'Other Disciplines'} headers={headers} activeRowLink={true} rankedParentHeaders={disciplineData}/>
        </div>
    );
}
