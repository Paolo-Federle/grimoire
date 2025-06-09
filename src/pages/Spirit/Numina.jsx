import React from 'react';
import SimpleTable from '../../components/SimpleTable';
import { spiritNuminaData } from '../../Data/Spirit/SpiritNuminaData';
import { removeFieldsAndAddLink } from '../../utils';

export default function Numina() {
    const spiritNuminaReducedData = removeFieldsAndAddLink({
        data: spiritNuminaData,
        fieldsToRemove: ['Long Description'],
        urlPrefix: '/spirit/numina/',
        keyToUseForLinks: 'Name'
    });

    return (
        <div className='grid-container'>
            <SimpleTable table={spiritNuminaReducedData} title="Numina" activeRowLink={true} />
        </div>
    );
}
