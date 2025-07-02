import React from 'react';
import SimpleTable from '../../components/SimpleTable';
import { OtherGroupsData, TribesForsakenData, TribesPureData } from '../../Data/Werewolf/TribesData';


export default function Tribes() {
    return (
        <div className='grid-container'>
            <SimpleTable table={TribesForsakenData} title={'Forsaken Tribes'} />
            <SimpleTable table={TribesPureData} title={'Pure Tribes'} />
            <SimpleTable table={OtherGroupsData} title={'Other Groups'} />
        </div>
    );
}