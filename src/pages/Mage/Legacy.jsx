import React from 'react';
import SimpleTable from '../../components/SimpleTable';
import { LegacyData } from '../../Data/Mage/LegacyData';
import { removeFieldsAndAddLink } from '../../utils';

export default function Legacy() {
    const LegacyReducedData = removeFieldsAndAddLink({
        data: LegacyData,
        fieldsToRemove: [
            'leftHanded', 'descrizione', 'alternateNickname', 'orders', 'appearance', 'background',
            'organizzation', 'suggestedOblations', 'concepts', 'historySocietyCulture', 'magic',
            'attainmentsDescrizione', 'firstAttainmentName', 'firstAttainmentPrerequisites',
            'firstAttainmentDescription', 'firstAttainmentOptArcana', 'firstAttainmentOptDescrizione',
            'secondAttainmentName', 'secondAttainmentPrerequisites', 'secondAttainmentDescription',
            'secondAttainmentOptArcana', 'secondAttainmentOptDescrizione',
            'thirdAttainmentName', 'thirdAttainmentPrerequisites', 'thirdAttainmentDescription',
            'thirdAttainmentOptArcana', 'thirdAttainmentOptDescrizione'
        ],
        urlPrefix: '/mage/legacy/',
        keyToUseForLinks: 'Nome'
    });

    return (
        <div className='grid-container'>
            <SimpleTable table={LegacyReducedData} title="Legacy" activeRowLink={true} />
        </div>
    );
}
