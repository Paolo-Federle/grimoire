import React from 'react';
import SimpleTable from '../../components/SimpleTable'
import {
    changelingMeritsData,
    kithRestrictedMeritsData,
    entitlementRestrictedMeritsData,
    milestoneMeritsData, milestoneMeritsDescriptionData,
    fateMeritsData, fateMeritsDescriptionData
} from '../../Data/Changeling/changelingMeritsData';
import { addLink, rimuoviCampi } from '../../utils';

export default function ChangelingMerits() {
    const campiDaRimuovere = ['LongDescription'];

    const dataWithLinks = [
        { data: changelingMeritsData, title: 'Changeling Merits' },
        { data: kithRestrictedMeritsData, title: 'Kith Restricted Merits' },
        { data: entitlementRestrictedMeritsData, title: 'Entitlement Restricted Merits' },
        { data: milestoneMeritsData, title: 'Milestone Merits', upperText: milestoneMeritsDescriptionData },
        { data: fateMeritsData, title: 'Fate Merits', upperText: fateMeritsDescriptionData },
    ]

    const renderTable = ({ data, title, upperText = null }) => (
        <SimpleTable
            table={rimuoviCampi(addLink(data, 'Name', '/changeling/merits/'), campiDaRimuovere)}
            title={title}
            activeRowLink={true}
            upperText={upperText ? upperText : null}
        />
    );
    return (
        <div className='grid-container'>
            {/* <SimpleTable table={addLinktoData(changelingMeritsData)} title={'Changeling Merits'} activeRowLink={true} /> */}
            {/* <SimpleTable table={addLinktoData(kithRestrictedMeritsData)} title={'Kith Restricted Merits'} activeRowLink={true} /> */}
            {/* <SimpleTable table={addLinktoData(entitlementRestrictedMeritsData)} title={'Entitlement Restricted Merits'} activeRowLink={true} /> */}
            {/* <SimpleTable table={addLinktoData(milestoneMeritsData)} title={'Milestone Merits'} activeRowLink={true} /> */}
            {/* <SimpleTable table={addLinktoData(fateMeritsData)} title={'Fate Merits'} activeRowLink={true} /> */}
            {dataWithLinks.map((item, index) => (
                <React.Fragment key={index}>
                    {renderTable(item)}
                </React.Fragment>
            ))}
        </div>
    );
}