import React from 'react';
import ManyHeadersTable from '../../components/ManyHeadersTable'
import {
    universalContractData, beastlyContractsData, darklingContractsData, elementalContractsData,
    fairestContractsData, ogreishContractsData, wizenedContractsData, springCourtContractsData,
    summerCourtContractsData, autumnCourtContractsData, winterCourtContractsData, minorCourtContractData,
    goblinContractData, unclassifiedGoblinContractData,
} from '../../Data/Changeling/ContractData'
import { addLink } from '../../utils';

export default function Contracts() {

    const universalContHeader = ['Name', 'Rank', 'Cost', 'Dice Pool', 'Catch', 'Description', 'Book']
    const courtContHeader = ['Name', 'Rank', 'Description', 'Catch', 'Court Goodwill Requirement if not a member', 'Cost', 'Dice Pool']
    const goblinContHeader = ['Name', 'Rank', 'Benefit', 'Drawback', 'Catch', 'Cost', 'Dice Pool', 'Book']
    const unclassifiedGoblinContHeader = ['Name', 'Benefit', 'Drawback', 'Catch', 'Cost', 'Dice Pool', 'Book']
    const headerCheckFields = ['Rank']
    const unclassifiedFields = ['Drawback']
    const contractData = ['Name']
    const courtData = ['Name', 'Dice Pool']
    const unclassifiedData = ['Name']

    const renderContractTable = (data, title, headers, headerCheckFields, alternateData, activeRowLink = false) => {
        const tableData = activeRowLink ? addLink(data, 'Name', '/changeling/contracts/') : data;
        return (
            <ManyHeadersTable
                table={tableData}
                title={title}
                headers={headers}
                headerCheckFields={headerCheckFields}
                alternateData={alternateData}
                activeRowLink={activeRowLink}
                prereqForLink={'FullDescription'}
            />
        );
    };

    return (
        <div className='grid-container'>
            {renderContractTable(universalContractData, 'Universal Contracts', universalContHeader, headerCheckFields, contractData, true)}
            {renderContractTable(beastlyContractsData, 'Beastly Contracts', universalContHeader, headerCheckFields, contractData, true)}
            {renderContractTable(darklingContractsData, 'Darkling Contracts', universalContHeader, headerCheckFields, contractData, true)}
            {renderContractTable(elementalContractsData, 'Elemental Contracts', universalContHeader, headerCheckFields, contractData, true)}
            {renderContractTable(fairestContractsData, 'Fairest Contracts', universalContHeader, headerCheckFields, contractData, true)}
            {renderContractTable(ogreishContractsData, 'Ogreish Contracts', universalContHeader, headerCheckFields, contractData, true)}
            {renderContractTable(wizenedContractsData, 'Wizened Contracts', universalContHeader, headerCheckFields, contractData, true)}
            {renderContractTable(springCourtContractsData, 'Spring Court Contracts', courtContHeader, headerCheckFields, courtData, true)}
            {renderContractTable(summerCourtContractsData, 'Summer Court Contracts', courtContHeader, headerCheckFields, courtData, true)}
            {renderContractTable(autumnCourtContractsData, 'Autumn Court Contracts', courtContHeader, headerCheckFields, courtData, true)}
            {renderContractTable(winterCourtContractsData, 'Winter Court Contracts', courtContHeader, headerCheckFields, courtData, true)}
            {renderContractTable(minorCourtContractData, 'Other Court Contracts', courtContHeader, headerCheckFields, courtData, true)}
            
            <p><b>Note:</b> To buy an ability with Mantle, ability must be Clause Rank - 1 = Mantle. So a level 4 can own the 5th dot, and a level 2 the 3rd.</p>

            {renderContractTable(goblinContractData, 'Goblin Contracts', goblinContHeader, headerCheckFields, courtData, true)}
            <p><b>Note:</b> Goblin Contracts are not chained and any clause rank can be bought with no prerequisites.</p>
            {renderContractTable(unclassifiedGoblinContractData, 'Unclassified Goblin Contracts', unclassifiedGoblinContHeader, unclassifiedFields, unclassifiedData, true)}
        </div>
    );
}
