import React from 'react';
import SimpleTable from '../../components/SimpleTable'
import { amuletData, effigyData, RegiumData, textData, uterData, sebaData, vestigeData } from '../../Data/Mummy/RelicsData';
import { PATHS } from '../path';
import { slugify } from '../../utils';

export default function Relic() {
    const relicHeaders = ['Name', 'Rating', 'Cost', 'Power', 'Curse', 'Book'];
    const vestigeHeaders = ['Name', 'Rating', 'Description', 'Virtue/Vice', 'Curse', 'Book'];
    const withDetailLinks = (data) =>
        data.map((relic) => ({
            ...relic,
            link: `${PATHS.MUMMY.RELICS}/${slugify(relic.Name)}`,
        }));

    return (
        <div className='grid-container'>
            <SimpleTable table={withDetailLinks(amuletData)} title={'Amulets'} headers={relicHeaders} activeRowLink />
            <SimpleTable table={withDetailLinks(effigyData)} title={'Effigies'} headers={relicHeaders} activeRowLink />
            <SimpleTable table={withDetailLinks(RegiumData)} title={'Regium'} headers={relicHeaders} activeRowLink />
            <SimpleTable table={withDetailLinks(textData)} title={'Texts'} headers={relicHeaders} activeRowLink />
            <SimpleTable table={withDetailLinks(uterData)} title={'Uter'} headers={relicHeaders} activeRowLink />
            <SimpleTable table={withDetailLinks(sebaData)} title={'Seba'} headers={relicHeaders} activeRowLink />
            <SimpleTable table={withDetailLinks(vestigeData)} title={'Vestiges'} headers={vestigeHeaders} activeRowLink />
        </div>
    );
}
