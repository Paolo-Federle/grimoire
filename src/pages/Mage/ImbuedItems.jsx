import React from 'react';
import SimpleTable from '../../components/SimpleTable';
import { imbuedItemsData } from '../../Data/Mage/imbuedItemsData';
import { removeFieldsAndAddLink } from '../../utils';

export default function ImbuedItems() {
    const imbuedItemsReducedData = removeFieldsAndAddLink({
        data: imbuedItemsData,
        fieldsToRemove: ['Descrizione'],
        urlPrefix: '/mage/imbued_items/',
        keyToUseForLinks: 'Nome'
    });

    return (
        <div className='grid-container'>
            <SimpleTable table={imbuedItemsReducedData} title="Imbued Items" activeRowLink={true} />
        </div>
    );
}
