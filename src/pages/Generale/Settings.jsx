import React from 'react';
import SimpleTable from '../../components/SimpleTable'
import { SettingsData } from '../../Data/SettingsData';

export default function Settings() {

    return (
        <div className='grid-container'>
            <SimpleTable table={SettingsData} title={'Settings'} />
        </div>
    );
}