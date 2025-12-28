import React from 'react';
import SimpleTable from '../../components/SimpleTable'
import { CyberpunkPluginData } from '../../Data/Mortal/CyberpunkPluginData';
import { futuristicWeaponsData } from '../../Data/Mortal/FuturisticWeaponsData';
import { addLink, rimuoviCampi } from '../../utils';
import { PATHS } from '../path';

export default function FuturisticItems() {

    const campiDaRimuovere = ['Description', "Example Backfire", "Example Compromise"];
    
    console.log('CyberpunkPluginData', CyberpunkPluginData)
    console.log('futuristicWeaponsData', futuristicWeaponsData)
        return (
            <div className='grid-container'>
                <SimpleTable table={addLink(futuristicWeaponsData, 'Name', PATHS.MORTAL.FUTURISTIC_ITEMS)}
                title={'Futuristic Weapons'}
                activeRowLink={false} />
                <SimpleTable table={rimuoviCampi(addLink(CyberpunkPluginData, 'Name', PATHS.MORTAL.FUTURISTIC_ITEMS), campiDaRimuovere)}
                title={'Cyberpunk Plugins'}
                activeRowLink={true} />
            </div>
        );
}