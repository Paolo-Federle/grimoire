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

function ContentSection({ label, content }) {
    if (!hasContentBlocks(content)) return null;

    return (
        <div style={{ paddingBottom: "12px" }}>
            {label ? <div><b>{label}:</b></div> : null}
            <StructuredContent content={content} />
        </div>
    );
}

export default function CeremoniesDetail(props) {
    const matchedCeremony = props.ceremony;
    const showRank = matchedCeremony?.Rank && matchedCeremony.Rank !== 'N/A';
    const isOverview = matchedCeremony?.Name === 'Ceremonies';

    return (
        <div className='longTextContainer'>
            {matchedCeremony && (
                <>
                    <h1>{matchedCeremony.Name}{showRank ? ` (${matchedCeremony.Rank})` : ""}</h1>

                    {isOverview ? (
                        <>
                            <ContentSection content={matchedCeremony.Description} />
                            <ContentSection label="Mechanics" content={matchedCeremony.Mechanics} />
                            <ContentSection content={matchedCeremony.Notes} />
                            {matchedCeremony.Book && (<div><b>Book:</b> {BookLink(matchedCeremony.Book)}</div>)}
                        </>
                    ) : (
                        <>
                            <LabeledField label="Description" value={matchedCeremony.Summary} prefix="ceremony-summary" />

                            <ContentSection content={matchedCeremony.Description} />
                            <ContentSection label="Performing the Ceremony" content={matchedCeremony.PerformingCeremony} />

                            <LabeledField label="Dice Pool" value={matchedCeremony.DicePool} prefix="ceremony-dice-pool" />
                            <LabeledField label="Action" value={matchedCeremony.Action} prefix="ceremony-action" />
                            <LabeledField label="Time Increment" value={matchedCeremony.TimeIncrement} prefix="ceremony-time-increment" />

                            <ContentSection content={matchedCeremony.RollResults} />
                            <ContentSection content={matchedCeremony.Notes} />

                            {matchedCeremony.Book && (<div><b>Book:</b> {BookLink(matchedCeremony.Book)}</div>)}
                        </>
                    )}
                </>
            )}
        </div>
    );
}
