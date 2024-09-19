import React from 'react';
import SimpleTable from '../../components/SimpleTable';
import {
    securedLocationData, universalFixturesData, mageLocationData, changelingLocationData,
    ruralTerritoryData, urbanTerritoryData, generalTerritoryData, supernaturalTerritoryData,
    descriptorsTerritoryData, wideDescriptorsTerritoryData, baronyLocationData
} from '../../Data/LocationMerit';
import { rimuoviCampi, addLink } from '../../utils';

export default function Location() {
    const campiDaRimuovere = ['Prerequisites', 'LongDescription'];
    
    const dataSets = [
        { data: securedLocationData, title: 'Secured location', link: true },
        { data: universalFixturesData, title: 'Additional Fixtures', link: true },
        { data: mageLocationData, title: 'Mage location', link: true },
        { data: changelingLocationData, title: 'Changeling location', link: true },
        { data: ruralTerritoryData, title: 'Rural', link: true },
        { data: urbanTerritoryData, title: 'Urban/SubUrban', link: true },
        { data: generalTerritoryData, title: 'General Territory Features', link: true },
        { data: supernaturalTerritoryData, title: 'Spirit/Supernatural', link: true },
        { data: descriptorsTerritoryData, title: 'Territory Descriptors', link: true },
        { data: wideDescriptorsTerritoryData, title: 'Territory-Wide Descriptors', link: true },
        { data: baronyLocationData, title: 'Barony Merits', link: true }
    ];

    return (
        <div className='grid-container'>
            {dataSets.map(({ data, title, link }) => (
                <SimpleTable
                    key={title}
                    table={rimuoviCampi(link ? addLink(data, 'Name', '/merits/locations/') : data, campiDaRimuovere)}
                    title={title}
                    activeRowLink={link}
                />
            ))}
        </div>
    );
}
