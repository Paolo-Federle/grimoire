import React from 'react';
import SimpleTable from '../../components/SimpleTable'
import {
    securedLocationData, universalFixturesData, vampireLocationData, mageLocationData, changelingLocationData,
    changelingBastionsData, werewolfTerritoryData, baronyLocationData
} from '../../Data/LocationMerit';
export default function Location() {
    return (
        <div className='grid-container'>
            <SimpleTable table={securedLocationData} title={'Secured location'} activeRowLink={false} />
            <SimpleTable table={universalFixturesData} title={'Universal Fixtures'} activeRowLink={false} />
            <SimpleTable table={vampireLocationData} title={'Vampire Location'} activeRowLink={false} />
            <SimpleTable table={mageLocationData} title={'Mage location'} activeRowLink={false} />
            <SimpleTable table={changelingLocationData} title={'Changeling location'} activeRowLink={false} />
            <SimpleTable table={changelingBastionsData} title={'Changeling Bastions'} activeRowLink={false} />
            <SimpleTable table={werewolfTerritoryData} title={'Werewolf Territory'} activeRowLink={false} />
            <SimpleTable table={baronyLocationData} title={'Barony Merits'} activeRowLink={false} />
        </div>
    );
}