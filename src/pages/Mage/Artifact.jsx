import React from 'react';
import SimpleTable from '../../components/SimpleTable';
import { artifactData } from '../../Data/Mage/artifactsData';
import { removeFieldsAndAddLink } from '../../utils';

export default function Artifacts() {
    const artifactReducedData = removeFieldsAndAddLink({
        data: artifactData,
        fieldsToRemove: ['Descrizione'],
        urlPrefix: '/mage/artifacts/',
        keyToUseForLinks: 'Nome'
    });

    return (
        <div className='grid-container'>
            <SimpleTable table={artifactReducedData} title="Artifacts" activeRowLink={true} />
        </div>
    );
}
