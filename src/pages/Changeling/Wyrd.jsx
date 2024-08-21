import React from 'react';
import SimpleTable from '../../components/SimpleTable'
import { WyrdData } from '../../Data/Changeling/WyrdData';

export default function Wyrd() {

    return (<>

        <div className='grid-container'>
            <SimpleTable table={WyrdData} title={'Wyrd'} />
        </div>
    </>
    );
}