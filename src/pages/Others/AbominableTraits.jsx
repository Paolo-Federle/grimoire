import React from 'react';
import SimpleTable from '../../components/SimpleTable';
import { AbominableMeritsData, AbominableRitesData, AbominablePowersData } from '../../Data/Others/AbominableTraitsData';


export default function AbominableTraits() {
    return (
        <div className='grid-container'>
            <h1 className="cursor-pointer text-2xl flex items-center gap-1 ">Abominable Merits</h1>
            <p className='max-w-screen-lg'>
                The following two Merits grant cultists and supplicants of otherworldly entities the capacity to wield inhuman, inexplicable powers.
                These Traits should be available primarily to Storytellercontrolled characters, being available to players’ characters only with Storyteller approval.
            </p>
            <SimpleTable table={AbominableMeritsData} />
            <SimpleTable table={AbominableRitesData} title={'Abominable rites'}/>
            <SimpleTable table={AbominablePowersData} title={'Abominable powers'}/>
        </div>
    );
}