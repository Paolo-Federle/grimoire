import React from 'react';
import ManyHeadersTable from '../../components/ManyHeadersTable'
import {
    universalContractData, seemingContractData, courtContractData,
    goblinContractData, unclassifiedGoblinContractData
} from '../../Data/Changeling/ContractData'

export default function Contracts() {


    const universalContHeader = ['Contract', 'Rank', 'Cost', 'Dice Pool', 'Catch', 'Description', 'Book']
    const courtContHeader = ['Name', 'Rank', 'Description', 'Catch', 'Court Goodwill Requirement if not a member', 'Cost', 'Dice Pool']
    const goblinContHeader = ['Rank', 'Benefit', 'Drawback', 'Catch', 'Cost', 'Dice Pool', 'Book']
    const unclassifiedGoblinContHeader = ['Rank', 'Benefit', 'Drawback', 'Catch', 'Cost', 'Dice Pool', 'Book']
    const headerCheckFields = ['Rank']
    const headerAltCheckFields = ['Name']
    const goblinFields = ['Clause Name']
    const unclassifiedFields = ['Drawback']
    const contractData = ['Contract']
    const courtData = ['Rank', 'Dice Pool']
    const unclassifiedData = ['Name']

    return (
        <div className='grid-container'>
            <ManyHeadersTable table={universalContractData} title={'Universal Contracts'} headers={universalContHeader} headerCheckFields={headerCheckFields} alternateData={contractData} />
            <ManyHeadersTable table={seemingContractData} title={'Seeming Contracts'} headers={universalContHeader} headerCheckFields={headerCheckFields} alternateData={contractData} />
            <ManyHeadersTable table={courtContractData} title={'Court Contracts'} headers={courtContHeader} headerCheckFields={headerAltCheckFields} alternateData={courtData} />
            <p><b>Note:</b> To buy an ability with Mantle, ability must be Clause Rank - 1 = Mantle. So a level 4 can own the 5th dot, and a level 2 the 3rd.</p>
            <ManyHeadersTable table={goblinContractData} title={'Goblin Contracts'} headers={goblinContHeader} headerCheckFields={goblinFields} alternateData={courtData} />
            <p><b>Note:</b> Goblin Contracts are not chained and any clause rank can be bought with no prerequisites.</p>
            <ManyHeadersTable table={unclassifiedGoblinContractData} title={'Unclassified Goblin Contracts'} headers={unclassifiedGoblinContHeader} headerCheckFields={unclassifiedFields} alternateData={unclassifiedData} />
        </div>
    );
}