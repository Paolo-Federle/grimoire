import React from 'react';
import SimpleTable from '../../components/SimpleTable'
import { VirtueViceData } from '../../Data/Mortal/VirtueViceData';

export default function VirtueVice() {
    return (
        <div className='grid-container'>
            <SimpleTable table={VirtueViceData} title={'Virtue and Vice'} activeRowLink={false} />
        </div>
    );
}