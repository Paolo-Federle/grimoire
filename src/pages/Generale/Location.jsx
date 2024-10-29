import React from 'react';
import SimpleTable from '../../components/SimpleTable';
import {
    securedLocationData, universalFixturesData, mageLocationData, changelingLocationData,
    ruralTerritoryData, urbanTerritoryData, generalTerritoryData, supernaturalTerritoryData,
    descriptorsTerritoryData, wideDescriptorsTerritoryData, baronyLocationData,
    ruralDescriptionData, urbanDescriptionData, generalDescriptionData, spiritualDescriptionData,
    descriptorsDescriptionData, wideDesciptorsDescriptionData
} from '../../Data/LocationMeritData';
import { rimuoviCampi, addLink } from '../../utils';

export default function Location() {
    const campiDaRimuovere = ['Prerequisites', 'LongDescription'];
    const maxWidthValue = '900px';

    const dataWithLinks = [
        { data: securedLocationData, title: 'Secured location' },
        { data: universalFixturesData, title: 'Additional Fixtures' },
        { data: mageLocationData, title: 'Mage location' },
        { data: changelingLocationData, title: 'Changeling location' },
        { data: ruralTerritoryData, title: 'Rural', upperText: ruralDescriptionData },
        { data: urbanTerritoryData, title: 'Urban/SubUrban', upperText: urbanDescriptionData },
        { data: generalTerritoryData, title: 'General Territory Features', upperText: generalDescriptionData },
        { data: supernaturalTerritoryData, title: 'Spirit/Supernatural', upperText: spiritualDescriptionData },
        { data: descriptorsTerritoryData, title: 'Territory Descriptors', upperText: descriptorsDescriptionData },
        { data: wideDescriptorsTerritoryData, title: 'Territory-Wide Descriptors', upperText: wideDesciptorsDescriptionData },
        { data: baronyLocationData, title: 'Barony Merits' }
    ];

    const renderTable = ({ data, title, upperText = null }) => (
        <SimpleTable
            table={rimuoviCampi(addLink(data, 'Name', '/merits/locations/'), campiDaRimuovere)}
            title={title}
            activeRowLink={true}
            upperText={upperText ? upperText : null}
            maxWidth={upperText ? maxWidthValue : undefined}
        />
    );

    return (
        <div className='grid-container'>
            {dataWithLinks.map((item, index) => (
                <React.Fragment key={index}>
                    {renderTable(item)}
                </React.Fragment>
            ))}
        </div>
    );
}
