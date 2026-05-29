import React from 'react';
import SimpleTable from '../../components/SimpleTable'
import { giftData } from '../../Data/Werewolf/GiftData';
import { milestoneGifts } from '../../Data/Werewolf/GiftData';
import { PATHS } from '../path';
import { slugify } from '../../utils';

function hasContentBlocks(value) {
    return Array.isArray(value) && value.some(Boolean);
}

export default function Gifts() {

    const headers = ['Name', 'Rank', 'Cost', 'Description', 'Book']
    const milestoneHeaders = ['Name', 'Description', 'Book']
    const giftFamilyHeaders = ['Name']
    const giftsWithDetailLinks = giftData.map((gift) => ({
        ...gift,
        link: hasContentBlocks(gift.Content) ? `${PATHS.WEREWOLF.GIFTS}/${slugify(gift.Name)}` : undefined,
        Ranks: gift.Ranks.map((rank) => ({
            ...rank,
            Name: rank.Name || gift.Name,
            link: `${PATHS.WEREWOLF.GIFTS}/${slugify(rank.Name || gift.Name)}`,
        })),
    }));
    const milestoneGiftsWithDetailLinks = milestoneGifts.map((gift) => ({
        ...gift,
        link: `${PATHS.WEREWOLF.GIFTS}/${slugify(gift.Name)}`,
    }));

    return (
        <div className='grid-container'>
            <SimpleTable table={giftsWithDetailLinks} title={'Gifts'} headers={headers} rankedParentHeaders={giftFamilyHeaders} activeRowLink />
            <SimpleTable table={milestoneGiftsWithDetailLinks} title={'Milestone Gifts'} headers={milestoneHeaders} activeRowLink />
        </div>
    );
}
