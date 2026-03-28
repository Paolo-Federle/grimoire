import React from 'react';
import SimpleTable from '../../components/SimpleTable';
import { JudgesData, JudgesAbData, JudgesBaData, JudgesKaData, JudgesRenData, JudgesSheutData } from '../../Data/Mummy/JudgesData';



export default function Judges() {
    return (
        <div className='grid-container'>
            <SimpleTable table={JudgesData} title={'Judges'} />
            <SimpleTable table={JudgesAbData} title={'Judges of Ab, the Heart'} />
            <SimpleTable table={JudgesBaData} title={'Judges of Ba, the Spirit'} />
            <SimpleTable table={JudgesKaData} title={'Judges of Ka, the Essence'} />
            <SimpleTable table={JudgesRenData} title={'Judges of Ren, the Name'} />
            <SimpleTable table={JudgesSheutData} title={'Judges of Sheut, the Shadow'} />
        </div>
    );
}