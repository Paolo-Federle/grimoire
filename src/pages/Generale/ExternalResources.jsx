import React from 'react';
import SimpleTable from '../../components/SimpleTable'
import { ExternalResourcesData } from '../../Data/ExternalResourcesData';

export default function ExternalResources() {

    return (
        <div className='grid-container'>
            <SimpleTable table={ExternalResourcesData} title={'External Resources'} activeRowLink={true}/>
        </div>
    );
}