import React from 'react';
import { BookLink } from '../../../components/BookLink';
import StructuredContent, { InlineContent } from '../../../components/StructuredContent';

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

export default function PsychicMeritsDetail(props) {
    const matchedMerit = props.psychicMerit;
    const prerequisites = matchedMerit?.FullPrerequisite || matchedMerit?.Prerequisite;

    return (
        <div className='longTextContainer'>
            {matchedMerit && (
                <>
                    <h1>{matchedMerit.Name} ({matchedMerit.Rank})</h1>

                    <LabeledField label="Prerequisites" value={prerequisites} prefix="psychic-prerequisites" />

                    {hasContentBlocks(matchedMerit.Content) && (
                        <div style={{ paddingBottom: "20px" }}>
                            <StructuredContent content={matchedMerit.Content} />
                        </div>
                    )}

                    <LabeledField label="Cost" value={matchedMerit.Cost} prefix="psychic-cost" />
                    <LabeledField label="Dice Pool" value={matchedMerit.DicePool} prefix="psychic-dice-pool" />
                    <LabeledField label="Action" value={matchedMerit.Action} prefix="psychic-action" />

                    {hasContentBlocks(matchedMerit.RollResult) && (
                        <div style={{ paddingBottom: "20px" }}>
                            <h2>Roll Results</h2>
                            <StructuredContent content={matchedMerit.RollResult} />
                        </div>
                    )}

                    {matchedMerit.Book && (<div><b>Book:</b> {BookLink(matchedMerit.Book)}</div>)}
                </>
            )}
        </div>
    );
}
