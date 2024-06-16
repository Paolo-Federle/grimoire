import React from 'react';
import { sizeData } from '../../Data/SizeData';
import SimpleTable from '../../components/SimpleTable';

export default function Books(props) {

    return (
        <div className='grid-container'>
            <SimpleTable title={'Size'} table={sizeData} activeRowLink={true} />
        </div>
    )
}
