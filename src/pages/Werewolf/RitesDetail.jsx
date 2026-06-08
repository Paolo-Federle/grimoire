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

function ContentSection({ title, content }) {
    if (!hasContentBlocks(content)) return null;

    return (
        <div style={{ paddingBottom: "20px" }}>
            {title && <h2>{title}</h2>}
            <StructuredContent content={content} />
        </div>
    );
}

export default function RitesDetail(props) {
    const matchedRite = props.rite;
    const showRank = matchedRite?.Rank && matchedRite.Rank !== 'N/A';

    return (
        <div className='longTextContainer'>
            {matchedRite && (
                <>
                    <h1>{matchedRite.Name}{showRank ? ` (${matchedRite.Rank})` : ""}</h1>

                    <LabeledField label="Description" value={matchedRite.Description} prefix="rite-description" />

                    <ContentSection content={matchedRite.Content} />
                    <ContentSection title="Performing the Rite" content={matchedRite.PerformingRite} />

                    <LabeledField label="Cost" value={matchedRite.Cost} prefix="rite-cost" />
                    <LabeledField label="Dice Pool" value={matchedRite.DicePool} prefix="rite-dice-pool" />
                    <LabeledField label="Action" value={matchedRite.Action} prefix="rite-action" />

                    <ContentSection content={matchedRite.RollResults} />

                    {matchedRite.Book && (<div><b>Book:</b> {BookLink(matchedRite.Book)}</div>)}
                </>
            )}
        </div>
    );
}
