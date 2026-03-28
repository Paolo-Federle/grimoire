import React from 'react';
import { CharmData, VanitasData, FetterData, DeathMaskData, MemorabiliaData } from '../../Data/Geist/MementosData';
import SimpleTable from '../../components/SimpleTable';

export default function Memento() {
    return (
        <div className='grid-container'>
            <SimpleTable table={CharmData} title={'Charms (•)'} />
            <SimpleTable table={VanitasData} title={'Vanitas (••)'} />
            <SimpleTable table={FetterData} title={'Fetters (•••)'} />
            <SimpleTable table={DeathMaskData} title={'Deathmasks (••••)'} />
            <SimpleTable table={MemorabiliaData} title={'Memorabilias (•••••)'} />
        </div>
    );
}
