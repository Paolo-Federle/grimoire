import React from 'react';
import SimpleTable from '../../components/SimpleTable'
import { SeemingsData } from '../../Data/Changeling/SeemingsData';

export default function Seeming() {

    return (<>

        <div className='grid-container'>
            <SimpleTable table={SeemingsData} title={'Seemings'} />
        </div>
    </>
    );
}