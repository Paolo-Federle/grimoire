import React from 'react';
import SimpleTable from '../../components/SimpleTable';
import {
    uniMeritsMentalData,
    uniMeritsPhysicalData,
    uniMeritsSocialData,
    uniMeritsSupernaturalData
} from '../../Data/universalMeritsData';
import { removeFieldsAndAddLink } from '../../utils';

function labelAndTransform(data, labelFieldName) {
    return data.map(item => {
        const { Name, ...rest } = item;
        return {
            [labelFieldName]: Name,
            ...rest
        };
    });
}

export default function UniversalMerits() {
    const baseConfig = {
        fieldsToRemove: ['LongDescription'],
        urlPrefix: '/universal_merits/',
        keyToUseForLinks: 'Name'
    };

    const mental = removeFieldsAndAddLink({
        ...baseConfig,
        data: uniMeritsMentalData
    });

    const physical = removeFieldsAndAddLink({
        ...baseConfig,
        data: uniMeritsPhysicalData
    });

    const social = removeFieldsAndAddLink({
        ...baseConfig,
        data: uniMeritsSocialData
    });

    const supernatural = removeFieldsAndAddLink({
        ...baseConfig,
        data: uniMeritsSupernaturalData
    });

    const uniMeritsMentalCorrectedData = labelAndTransform(mental, "Mental Merits");
    const uniMeritsPhysicalCorrectedData = labelAndTransform(physical, "Physical Merits");
    const uniMeritsSocialCorrectedData = labelAndTransform(social, "Social Merits");
    const uniMeritsSupernaturalCorrectedData = labelAndTransform(supernatural, "Supernatural Merits");

    return (
        <div className='grid-container'>
            <SimpleTable table={uniMeritsMentalCorrectedData} activeRowLink={true} />
            <SimpleTable table={uniMeritsPhysicalCorrectedData} activeRowLink={true} />
            <SimpleTable table={uniMeritsSocialCorrectedData} activeRowLink={true} />
            <SimpleTable table={uniMeritsSupernaturalCorrectedData} activeRowLink={true} />
        </div>
    );
}
