import React from 'react';
import { BookLink } from '../../components/BookLink';
import StructuredContent, { InlineContent } from '../../components/StructuredContent';

function LabeledField({ label, value, prefix }) {
    if (!value || value === 'N/A') return null;
    return (
        <div>
            <b>{label}:</b> <InlineContent content={value} prefix={prefix} />
        </div>
    );
}

function hasContentBlocks(value) {
    return Array.isArray(value) && value.some((item) => {
        if (typeof item === 'string') {
            return item.trim() !== '';
        }
        return !!item;
    });
}

export default function GiftsDetail(props) {
    const matchedGift = props.gift;
    const isRankedGift = matchedGift?.Rank && matchedGift.Rank !== "N/A";
    const detailContent = matchedGift?.fullDescription || matchedGift?.Content;

    return (
        <div className='longTextContainer'>
            {matchedGift && (
                <>
                    <h1>{matchedGift.Name}{isRankedGift ? ` (${matchedGift.Gift} ${matchedGift.Rank})` : ""}</h1>

                    <LabeledField
                        label="Prerequisites"
                        value={matchedGift.prerequisites || matchedGift.Prequisites || matchedGift.Prerequisites}
                        prefix="gift-prerequisites"
                    />

                    <LabeledField
                        label="Description"
                        value={matchedGift.Description}
                        prefix="gift-description"
                    />

                    {hasContentBlocks(detailContent) && (
                        <div style={{ paddingBottom: "20px" }}>
                            <StructuredContent content={detailContent} />
                        </div>
                    )}

                    <LabeledField
                        label="Cost"
                        value={matchedGift.fullCost || matchedGift.Cost}
                        prefix="gift-cost"
                    />
                    <LabeledField
                        label="Dice Pool"
                        value={matchedGift.dicePool}
                        prefix="gift-dice-pool"
                    />
                    <LabeledField
                        label="Action"
                        value={matchedGift.action}
                        prefix="gift-action"
                    />

                    {hasContentBlocks(matchedGift.rollResults) && (
                        <div style={{ paddingBottom: "20px", paddingTop: "20px" }}>
                            <StructuredContent content={matchedGift.rollResults} />
                        </div>
                    )}

                    {matchedGift.Book && (<div><b>Book:</b> {BookLink(matchedGift.Book)}</div>)}
                </>
            )}
        </div>
    );
}
