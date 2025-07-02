import React from 'react';
import SimpleTable from '../../../components/SimpleTable';
import { ThaumaturgyMeritsData, ThaumaturgyTraditionsData } from '../../../Data/Mortal/Lesser templates/ThaumaturgyData';
import ManyHeadersTable from '../../../components/ManyHeadersTable';


export default function Thaumaturgy() {

    const headers = ['Name', 'Prerequisites', 'Description', 'Book']
    const datoSostituibile = ['Description']
    const datoSostituto = ['Name']

    return (
        <div className='grid-container'>
            <SimpleTable table={ThaumaturgyTraditionsData} title={'Thaumaturgy Traditions'} activeRowLink={false} />
            {/* <SimpleTable table={ThaumaturgyMeritsData} title={'Thaumaturgy'} activeRowLink={false} /> */}
             <ManyHeadersTable table={ThaumaturgyMeritsData} title={'Thaumaturgy'} headers={headers} headerCheckFields={datoSostituibile} alternateData={datoSostituto} prereqForLink={'Name'} activeRowLink={false}/>
        </div>
    );
}