import React from 'react';
import SimpleTable from '../../components/SimpleTable';
import {
    securedLocationData, universalFixturesData, mageLocationData, changelingLocationData,
    ruralTerritoryData, urbanTerritoryData, generalTerritoryData, supernaturalTerritoryData,
    descriptorsTerritoryData, wideDescriptorsTerritoryData, baronyLocationData,
    ruralDescriptionData, urbanDescriptionData, generalDescriptionData, spiritualDescriptionData,
    descriptorsDescriptionData, wideDesciptorsDescriptionData
} from '../../Data/LocationMerit';
import { rimuoviCampi, addLink } from '../../utils';

export default function Location() {

    const campiDaRimuovere = ['Prerequisites', 'LongDescription'];

    // Apply addLink to each dataset before passing it to rimuoviCampi
    const securedLocationWithLinks = addLink(securedLocationData, 'Name', '/merits/locations/');
    const universalFixturesWithLinks = addLink(universalFixturesData, 'Name', '/merits/locations/');
    const mageLocationWithLinks = addLink(mageLocationData, 'Name', '/merits/locations/');
    const changelingLocationWithLinks = addLink(changelingLocationData, 'Name', '/merits/locations/');
    const ruralTerritoryWithLinks = addLink(ruralTerritoryData, 'Name', '/merits/locations/');
    const urbanTerritoryWithLinks = addLink(urbanTerritoryData, 'Name', '/merits/locations/');
    const generalTerritoryWithLinks = addLink(generalTerritoryData, 'Name', '/merits/locations/');
    const supernaturalTerritoryWithLinks = addLink(supernaturalTerritoryData, 'Name', '/merits/locations/');
    const descriptorsTerritoryWithLinks = addLink(descriptorsTerritoryData, 'Name', '/merits/locations/');
    const wideDescriptorsTerritoryWithLinks = addLink(wideDescriptorsTerritoryData, 'Name', '/merits/locations/');
    const baronyLocationWithLinks = addLink(baronyLocationData, 'Name', '/merits/locations/');

    const maxWidthValue = '900px'

    return (
        <div className='grid-container'>
            <SimpleTable table={rimuoviCampi(securedLocationWithLinks, campiDaRimuovere)} title={'Secured location'} activeRowLink={true} />
            <SimpleTable table={rimuoviCampi(universalFixturesWithLinks, campiDaRimuovere)} title={'Additional Fixtures'} activeRowLink={true} />
            <SimpleTable table={rimuoviCampi(mageLocationWithLinks, campiDaRimuovere)} title={'Mage location'} activeRowLink={true} />
            <SimpleTable table={rimuoviCampi(changelingLocationWithLinks, campiDaRimuovere)} title={'Changeling location'} activeRowLink={true} />
            <SimpleTable table={rimuoviCampi(ruralTerritoryWithLinks, campiDaRimuovere)} title={'Rural'} activeRowLink={true} upperText={[ruralDescriptionData]} maxWidth={maxWidthValue} />
            <SimpleTable table={rimuoviCampi(urbanTerritoryWithLinks, campiDaRimuovere)} title={'Urban/SubUrban'} activeRowLink={true} upperText={urbanDescriptionData} maxWidth={maxWidthValue} />
            <SimpleTable table={rimuoviCampi(generalTerritoryWithLinks, campiDaRimuovere)} title={'General Territory Features'} activeRowLink={true} upperText={[generalDescriptionData]} maxWidth={maxWidthValue} />
            <SimpleTable table={rimuoviCampi(supernaturalTerritoryWithLinks, campiDaRimuovere)} title={'Spirit/Supernatural'} activeRowLink={true} upperText={[spiritualDescriptionData]} maxWidth={maxWidthValue} />
            <SimpleTable table={rimuoviCampi(descriptorsTerritoryWithLinks, campiDaRimuovere)} title={'Territory Descriptors'} activeRowLink={true} upperText={[descriptorsDescriptionData]} maxWidth={maxWidthValue} />
            <SimpleTable table={rimuoviCampi(wideDescriptorsTerritoryWithLinks, campiDaRimuovere)} title={'Territory-Wide Descriptors'} activeRowLink={true} upperText={[wideDesciptorsDescriptionData]} maxWidth={maxWidthValue} />
            <SimpleTable table={rimuoviCampi(baronyLocationWithLinks, campiDaRimuovere)} title={'Barony Merits'} activeRowLink={true} />
        </div>
    );
}
