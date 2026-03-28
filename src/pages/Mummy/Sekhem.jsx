import React from 'react';
import SimpleTable from '../../components/SimpleTable';
import { SekhemData } from '../../Data/Mummy/SekhemData'; 

export default function Sekhem() {
    return (
        <div className='grid-container'>
            <SimpleTable table={SekhemData} title={'Sekhem'} />
        </div>
    );
}