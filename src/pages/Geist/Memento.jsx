import React from 'react';
import { CharmData, VanitasData, FetterData, DeathMaskData, MemorabiliaData } from '../../Data/Geist/MementosData';
import SimpleTable from '../../components/SimpleTable';
import { PATHS } from '../path';
import { slugify } from '../../utils';

export default function Memento() {
    const basicHeaders = ['Name', 'Summary', 'Threshold', 'Book'];
    const fetterHeaders = ['Name', 'Summary', 'Threshold', 'Key', 'Numen', 'Book'];
    const deathmaskHeaders = ['Name', 'Summary', 'Threshold', 'Key', 'Skill', 'Book'];
    const memorabiliaHeaders = ['Name', 'Summary', 'Threshold', 'Skill', 'Book'];
    const withDetailLinks = (data) =>
        data.map((memento) => ({
            ...memento,
            link: `${PATHS.GEIST.MEMENTOS}/${slugify(memento.Name)}`,
        }));

    return (
        <div className='grid-container'>
            <SimpleTable table={withDetailLinks(CharmData)} title={'Charms (•)'} headers={basicHeaders} activeRowLink />
            <SimpleTable table={withDetailLinks(VanitasData)} title={'Vanitas (••)'} headers={basicHeaders} activeRowLink />
            <SimpleTable table={withDetailLinks(FetterData)} title={'Fetters (•••)'} headers={fetterHeaders} activeRowLink />
            <SimpleTable table={withDetailLinks(DeathMaskData)} title={'Deathmasks (••••)'} headers={deathmaskHeaders} activeRowLink />
            <SimpleTable table={withDetailLinks(MemorabiliaData)} title={'Memorabilias (•••••)'} headers={memorabiliaHeaders} activeRowLink />
        </div>
    );
}
