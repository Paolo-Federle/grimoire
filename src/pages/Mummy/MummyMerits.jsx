import React from 'react';
import SimpleTable from '../../components/SimpleTable';
import { CultAxisData, CultBenefitsData, CultMeritsData, MummiesMeritsData, MummiesStyleMeritsData, MummiesTombMeritsData, MummiesTombsDrawbackData } from '../../Data/Mummy/MummiesMeritsData';
import { getFavoriteKey } from '../../favoritesStore';
import { slugify } from '../../utils';
import { PATHS } from '../path';

const meritHeaders = ['Name', 'Rank', 'Prerequisites', 'Description', 'Book'];
const styleMeritHeaders = ['Rank', 'Description', 'Book'];
const tombHeaders = ['Name', 'Rating', 'Prerequisites', 'Summary', 'Book'];
const cultHeaders = ['Name', 'Rating', 'Description', 'Book'];
const axisHeaders = ['Axis', 'Rating', 'Description', 'Book'];
const benefitHeaders = ['Benefit', 'Prerequisites', 'Description', 'Book'];

const withDetailLinks = (data, headers, nameField = 'Name') => data.map((item) => ({
    ...item,
    __favKey: getFavoriteKey(item, headers, PATHS.MUMMY.MERITS),
    link: `${PATHS.MUMMY.MERITS}/${slugify(item[nameField])}`,
}));

export default function MummyMerits() {
    const styleMeritParentHeaders = ['Name', null, 'Book'];

    return (
        <div className='grid-container'>
            <SimpleTable table={withDetailLinks(MummiesMeritsData, meritHeaders)} title={'Mummies merits'} headers={meritHeaders} activeRowLink />
            <SimpleTable
                table={withDetailLinks(MummiesStyleMeritsData, styleMeritHeaders)}
                title={'Mummies style merits'}
                headers={styleMeritHeaders}
                rankedParentHeaders={styleMeritParentHeaders}
                activeRowLink
            />
            <SimpleTable table={withDetailLinks(MummiesTombMeritsData, tombHeaders)} title={'Mummies tomb merits '} headers={tombHeaders} activeRowLink />
            <SimpleTable table={withDetailLinks(MummiesTombsDrawbackData, tombHeaders)} title={'Mummies tomb drawbacks '} headers={tombHeaders} activeRowLink />
            <SimpleTable table={withDetailLinks(CultMeritsData, cultHeaders)} title={'Mummies cult merits '} headers={cultHeaders} activeRowLink />
            <SimpleTable table={withDetailLinks(CultAxisData, axisHeaders, 'Axis')} headers={axisHeaders} activeRowLink />
            <SimpleTable table={withDetailLinks(CultBenefitsData, benefitHeaders, 'Benefit')} headers={benefitHeaders} activeRowLink />
        </div>
    );
}
