import React from 'react';
import SimpleTable from '../../components/SimpleTable'
import { PATHS } from '../path';
import { slugify } from '../../utils';
import {
    advancedArmoryData, benedictionData, castigationData,
    elixirData, relicData, ritesDuChevalData,
    thaumatechnologyData, teleinformaticsOverviewData, teleinformaticsData,
    goeticGospelOverviewData, goeticGospelData,
    ritesOfDenialOverviewData, ritesOfDenialData, otherEndowmentData, endowmentDetailData
} from '../../Data/Hunter/EndowmentData';

const rankedEndowmentHeaders = ['Name', 'Rank', 'Cost', 'Dice Pool', 'Description', 'Book'];
const rankedEndowmentParentHeaders = ['Name', null, null, null, 'Description', 'Book'];
const ratedEndowmentHeaders = ['Name', 'Rating', 'Description', 'Book'];
const activatedEndowmentHeaders = ['Name', 'Cost', 'Dice Pool', 'Description', 'Book'];
const relicEndowmentHeaders = ['Name', 'Rating', 'Cost', 'Dice Pool', 'Description', 'Book'];
const ritesDuChevalHeaders = ['Name', 'Rating', 'Cost', 'Description', 'Book'];
const ritesOfDenialHeaders = ['Name', 'Cost (Xt = X thimbles of blood)', 'Description', 'Book'];
const otherEndowmentHeaders = ['Name', 'Description', 'Compact or Conspiracy', 'Book'];
const detailReadySlugs = new Set(endowmentDetailData.map((item) => slugify(item.Name)));

const addEndowmentDetailLink = (item) => {
    const hasDetail = item?.Name && detailReadySlugs.has(slugify(item.Name));

    return {
        ...item,
        ...(hasDetail ? { link: `${PATHS.HUNTER.ENDOWMENTS}/${slugify(item.Name)}` } : {}),
        ...(Array.isArray(item.Ranks)
            ? { Ranks: item.Ranks.map(addEndowmentDetailLink) }
            : {}),
    };
};

const addEndowmentDetailLinks = (data) => data.map(addEndowmentDetailLink);

export default function Endowments() {
    return (
        <div className='grid-container'>
            <SimpleTable table={addEndowmentDetailLinks(advancedArmoryData)} title={'Advanced Armory'} headers={ratedEndowmentHeaders} activeRowLink />
            <SimpleTable table={addEndowmentDetailLinks(benedictionData)} title={'Benediction'} headers={activatedEndowmentHeaders} activeRowLink />
            <SimpleTable table={addEndowmentDetailLinks(castigationData)} title={'Castigation'} headers={activatedEndowmentHeaders} activeRowLink />
            <SimpleTable table={addEndowmentDetailLinks(elixirData)} title={'Elixir'} headers={ratedEndowmentHeaders} activeRowLink />
            <SimpleTable table={addEndowmentDetailLinks(relicData)} title={'Relic'} headers={relicEndowmentHeaders} activeRowLink />
            <SimpleTable table={addEndowmentDetailLinks(ritesDuChevalData)} title={'Rites du Cheval'} headers={ritesDuChevalHeaders} activeRowLink />
            <SimpleTable table={addEndowmentDetailLinks(thaumatechnologyData)} title={'Thaumatechnology'} headers={ratedEndowmentHeaders} activeRowLink />
            <SimpleTable
                table={addEndowmentDetailLinks(teleinformaticsData)}
                title={teleinformaticsOverviewData.Name}
                headers={rankedEndowmentHeaders}
                rankedParentHeaders={rankedEndowmentParentHeaders}
                activeRowLink
            />
            <SimpleTable
                table={addEndowmentDetailLinks(goeticGospelData)}
                title={goeticGospelOverviewData.Name}
                headers={rankedEndowmentHeaders}
                rankedParentHeaders={rankedEndowmentParentHeaders}
                activeRowLink
            />
            <SimpleTable table={addEndowmentDetailLinks(ritesOfDenialData)} title={ritesOfDenialOverviewData.Name} headers={ritesOfDenialHeaders} activeRowLink />
            <SimpleTable table={addEndowmentDetailLinks(otherEndowmentData)} title={'Other endowments'} headers={otherEndowmentHeaders} activeRowLink />
        </div>
    );
}
