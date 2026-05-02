import React from 'react';
import SimpleTable from '../../../components/SimpleTable';
import {
    thaumaturgyMeritsData,
    thaumaturgyRitualMeritsData,
    ThaumaturgyTraditionsData,
} from '../../../Data/Mortal/Lesser templates/ThaumaturgyData';


export default function Thaumaturgy() {

    const headers = ['Name', 'Rank', 'Prerequisite', 'Description', 'Book']

    return (
        <div className='grid-container'>
            <SimpleTable table={ThaumaturgyTraditionsData} title={'Thaumaturgy Traditions'} activeRowLink={false} />
            <SimpleTable table={thaumaturgyMeritsData} title={'Thaumaturgy Merits'} headers={headers} activeRowLink={false} />
            <SimpleTable table={thaumaturgyRitualMeritsData} title={'Thaumaturgy Ritual Merits'} headers={headers} activeRowLink={false} />
        </div>
    );
}
