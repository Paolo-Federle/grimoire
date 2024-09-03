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
    const headerAltCheckFields = ['Name']
    const goblinFields = ['Name']
    const unclassifiedFields = ['Drawback']
    const contractData = ['Name']
    const courtData = ['Rank', 'Dice Pool']
    const unclassifiedData = ['Name']

    const univContractData = addLink(universalContractData, 'Name', '/changeling/contracts/')

    return (
        <div className='grid-container'>
            <ManyHeadersTable table={univContractData} title={'Universal Contracts'} headers={universalContHeader} headerCheckFields={headerCheckFields} alternateData={contractData} activeRowLink={true} />
            <ManyHeadersTable table={beastlyContractsData} title={'Beastly Contracts'} headers={universalContHeader} headerCheckFields={headerCheckFields} alternateData={contractData} />
            <ManyHeadersTable table={darklingContractsData} title={'Darkling Contracts'} headers={universalContHeader} headerCheckFields={headerCheckFields} alternateData={contractData} />
            <ManyHeadersTable table={elementalContractsData} title={'Elemental Contracts'} headers={universalContHeader} headerCheckFields={headerCheckFields} alternateData={contractData} />
            <ManyHeadersTable table={fairestContractsData} title={'Fairest Contracts'} headers={universalContHeader} headerCheckFields={headerCheckFields} alternateData={contractData} />
            <ManyHeadersTable table={ogreishContractsData} title={'Ogreish Contracts'} headers={universalContHeader} headerCheckFields={headerCheckFields} alternateData={contractData} />
            <ManyHeadersTable table={wizenedContractsData} title={'Wizened Contracts'} headers={universalContHeader} headerCheckFields={headerCheckFields} alternateData={contractData} />
            <ManyHeadersTable table={springCourtContractsData} title={'Spring Court Contracts'} headers={courtContHeader} headerCheckFields={headerAltCheckFields} alternateData={courtData} />
            <ManyHeadersTable table={summerCourtContractsData} title={'Summer Court Contracts'} headers={courtContHeader} headerCheckFields={headerAltCheckFields} alternateData={courtData} />
            <ManyHeadersTable table={autumnCourtContractsData} title={'Autumn Court Contracts'} headers={courtContHeader} headerCheckFields={headerAltCheckFields} alternateData={courtData} />
            <ManyHeadersTable table={winterCourtContractsData} title={'Winter Court Contracts'} headers={courtContHeader} headerCheckFields={headerAltCheckFields} alternateData={courtData} />
            <ManyHeadersTable table={autumnCourtContractsData} title={'Autumn Court Contracts'} headers={courtContHeader} headerCheckFields={headerAltCheckFields} alternateData={courtData} />
            <ManyHeadersTable table={minorCourtContractData} title={'Other Court Contracts'} headers={courtContHeader} headerCheckFields={headerAltCheckFields} alternateData={courtData} />
            <p><b>Note:</b> To buy an ability with Mantle, ability must be Clause Rank - 1 = Mantle. So a level 4 can own the 5th dot, and a level 2 the 3rd.</p>
            <ManyHeadersTable table={goblinContractData} title={'Goblin Contracts'} headers={goblinContHeader} headerCheckFields={goblinFields} alternateData={courtData} />
            <p><b>Note:</b> Goblin Contracts are not chained and any clause rank can be bought with no prerequisites.</p>
            <ManyHeadersTable table={unclassifiedGoblinContractData} title={'Unclassified Goblin Contracts'} headers={unclassifiedGoblinContHeader} headerCheckFields={unclassifiedFields} alternateData={unclassifiedData} />
        </div>
    );
}