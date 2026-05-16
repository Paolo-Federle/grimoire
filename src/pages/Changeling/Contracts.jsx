import React from 'react';
import SimpleTable from '../../components/SimpleTable';
import TableGroup from '../../components/TableGroup';
import {
    universalContractData, beastlyContractsData, darklingContractsData, elementalContractsData,
    fairestContractsData, ogreishContractsData, wizenedContractsData, springCourtContractsData,
    summerCourtContractsData, autumnCourtContractsData, winterCourtContractsData, minorCourtContractData,
    goblinContractData, unclassifiedGoblinContractData,
} from '../../Data/Changeling/ContractData'
import { slugify } from '../../utils';

export default function Contracts() {

    const universalContHeader = ['Name', 'Rank', 'Cost', 'Dice Pool', 'Catch', 'Description', 'Book']
    const courtContHeader = ['Name', 'Rank', 'Description', 'Catch', 'Court Goodwill Requirement if not a member', 'Cost', 'Dice Pool']
    const goblinContHeader = ['Name', 'Rank', 'Benefit', 'Drawback', 'Catch', 'Cost', 'Dice Pool', 'Book']
    const unclassifiedGoblinContHeader = ['Name', 'Benefit', 'Drawback', 'Catch', 'Cost', 'Dice Pool', 'Book']
    const contractData = ['Name']
    const courtData = ['Name', 'Dice Pool']

    const addContractLink = (row) => {
        if (!row?.Name || row.FullDescription === undefined || row.FullDescription === "") return row;

        return {
            ...row,
            link: `/changeling/contracts/${slugify(row.Name)}`
        };
    };

    const addRankedLinks = (data) => (
        data.map((row) => ({
            ...addContractLink(row),
            Ranks: Array.isArray(row.Ranks) ? row.Ranks.map(addContractLink) : row.Ranks
        }))
    );

    const addContractLinks = (data) => data.map(addContractLink);

    const groupContractsByRank = (data) => (
        data.reduce((groups, row) => {
            const title = row.Rank || "Unranked";
            const group = groups.find((item) => item.title === title);

            if (group) {
                group.rows.push(row);
            } else {
                groups.push({ title, rows: [row] });
            }

            return groups;
        }, [])
    );

    const renderRankedContractTable = (data, title, headers, rankedParentHeaders, titleVariant = "default") => (
        <SimpleTable
            table={addRankedLinks(data)}
            title={title}
            headers={headers}
            activeRowLink={true}
            titleVariant={titleVariant}
            rankedParentHeaders={rankedParentHeaders}
        />
    );

    const renderUnclassifiedGoblinContracts = () => (
        <TableGroup title="Unclassified Goblin Contracts">
            {groupContractsByRank(unclassifiedGoblinContractData).map(({ title, rows }) => (
                <SimpleTable
                    key={title}
                    table={addContractLinks(rows)}
                    title={title}
                    headers={unclassifiedGoblinContHeader}
                    activeRowLink={true}
                    titleVariant="nested"
                />
            ))}
        </TableGroup>
    );

    return (
        <div className='grid-container'>
            {renderRankedContractTable(universalContractData, 'Universal Contracts', universalContHeader, contractData)}

            <TableGroup title="Seeming Contracts">
                {renderRankedContractTable(beastlyContractsData, 'Beastly Contracts', universalContHeader, contractData, "nested")}
                {renderRankedContractTable(darklingContractsData, 'Darkling Contracts', universalContHeader, contractData, "nested")}
                {renderRankedContractTable(elementalContractsData, 'Elemental Contracts', universalContHeader, contractData, "nested")}
                {renderRankedContractTable(fairestContractsData, 'Fairest Contracts', universalContHeader, contractData, "nested")}
                {renderRankedContractTable(ogreishContractsData, 'Ogreish Contracts', universalContHeader, contractData, "nested")}
                {renderRankedContractTable(wizenedContractsData, 'Wizened Contracts', universalContHeader, contractData, "nested")}
            </TableGroup>

            <TableGroup title="Court Contracts">
                {renderRankedContractTable(springCourtContractsData, 'Spring Court Contracts', courtContHeader, courtData, "nested")}
                {renderRankedContractTable(summerCourtContractsData, 'Summer Court Contracts', courtContHeader, courtData, "nested")}
                {renderRankedContractTable(autumnCourtContractsData, 'Autumn Court Contracts', courtContHeader, courtData, "nested")}
                {renderRankedContractTable(winterCourtContractsData, 'Winter Court Contracts', courtContHeader, courtData, "nested")}
                {renderRankedContractTable(minorCourtContractData, 'Other Court Contracts', courtContHeader, courtData, "nested")}
                <p><b>Note:</b> To buy an ability with Mantle, ability must be Clause Rank - 1 = Mantle. So a level 4 can own the 5th dot, and a level 2 the 3rd.</p>
            </TableGroup>

            <TableGroup title="Goblin Contracts">
                {renderRankedContractTable(goblinContractData, 'Goblin Contract Families', goblinContHeader, contractData, "nested")}
                <p><b>Note:</b> Goblin Contracts are not chained and any clause rank can be bought with no prerequisites.</p>
                {renderUnclassifiedGoblinContracts()}
            </TableGroup>
        </div>
    );
}
