import React from 'react';
import SimpleTable from '../../components/SimpleTable';
import { mageMeritsData, mageMeritsOrderData, mageMeritsLegacyData } from '../../Data/Mage/mageMeritsData';
import { removeFieldsAndAddLink } from '../../utils';

export default function MageMerits() {
    const config = {
        fieldsToRemove: ['LongDescription'],
        urlPrefix: '/mage/merits/',
        keyToUseForLinks: 'Title'
    };

    const reducedMageMeritsData = removeFieldsAndAddLink({
        data: mageMeritsData,
        ...config
    });

    const reducedMageMeritsOrderData = removeFieldsAndAddLink({
        data: mageMeritsOrderData,
        ...config
    });

    const reducedMageMeritsLegacyData = removeFieldsAndAddLink({
        data: mageMeritsLegacyData,
        ...config
    });

    return (
        <div className='grid-container'>
            <SimpleTable table={reducedMageMeritsData} title='Mage Merits' activeRowLink={true} />
            <SimpleTable table={reducedMageMeritsOrderData} title='Order Merits' activeRowLink={true} />
            <SimpleTable table={reducedMageMeritsLegacyData} title='Legacy Merits' activeRowLink={true} />
        </div>
    );
}
