import React from 'react';
import { Link } from 'react-router-dom';
import SimpleTable from '../../components/SimpleTable';
import { AbominableMeritsData, AbominableRitesOverview, AbominableRitesData, AbominablePowersData } from '../../Data/Others/AbominableTraitsData';
import { PATHS } from '../path';
import { slugify } from '../../utils';

const withDetailLinks = (items) => items.map((item) => ({
    ...item,
    ...(item.Content ? { link: `${PATHS.OTHERS.ABOMINABLE}/${slugify(item.Name)}` } : {}),
}));

const meritHeaders = ['Name', 'Rating', 'Summary', 'Book'];
const riteHeaders = ['Name', 'Rating', 'Summary', 'Offering', 'Book'];
const powerHeaders = ['Name', 'Summary', 'Book'];


export default function AbominableTraits() {
    const ritesOverviewPath = `${PATHS.OTHERS.ABOMINABLE}/${slugify(AbominableRitesOverview.Name)}`;

    return (
        <div className='grid-container'>
            <h1 className="cursor-pointer text-2xl flex items-center gap-1 ">Abominable Merits</h1>
            <p className='max-w-screen-lg'>
                The following two Merits grant cultists and supplicants of otherworldly entities the capacity to wield inhuman, inexplicable powers.
                These Traits should be available primarily to Storytellercontrolled characters, being available to players’ characters only with Storyteller approval.
            </p>
            <SimpleTable table={withDetailLinks(AbominableMeritsData)} headers={meritHeaders} activeRowLink />

            <p className='max-w-screen-lg'>
                <Link to={ritesOverviewPath}>Abominable rites rules</Link>
            </p>
            <SimpleTable table={withDetailLinks(AbominableRitesData)} title={'Abominable rites'} headers={riteHeaders} activeRowLink />
            <SimpleTable table={withDetailLinks(AbominablePowersData)} title={'Abominable powers'} headers={powerHeaders} activeRowLink />
        </div>
    );
}
