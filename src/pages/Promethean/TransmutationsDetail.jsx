import React from 'react';
import { BookLink } from '../../components/BookLink';
import StructuredContent, { InlineContent } from '../../components/StructuredContent';

function hasContentBlocks(value) {
    return Array.isArray(value) && value.some((item) => {
        if (typeof item === 'string') {
            return item.trim() !== '';
        }

        return !!item;
    });
}

function LabeledField({ label, value, prefix }) {
    if (!value || value === 'N/A') return null;

    return (
        <div>
            <b>{label}:</b> <InlineContent content={value} prefix={prefix} />
        </div>
    );
}

function ContentSection({ label, content }) {
    if (!hasContentBlocks(content)) return null;

    return (
        <div className="detail-content-section">
            {label ? <div className="detail-content-section-title">{label}</div> : null}
            <StructuredContent content={content} />
        </div>
    );
}

function getDetailValue(item, fullField, fallbackField) {
    if (!item) return undefined;

    if (Object.prototype.hasOwnProperty.call(item, fullField)) {
        return item[fullField];
    }

    return item[fallbackField];
}

export default function TransmutationsDetail(props) {
    const matchedTransmutation = props.transmutation;
    const isOverview = matchedTransmutation?.Name === 'Transmutations';
    const title = matchedTransmutation?.DisplayName || matchedTransmutation?.Name;

    return (
        <div className='longTextContainer'>
            {matchedTransmutation && (
                <>
                    <h1>{title}</h1>

                    {isOverview ? (
                        <>
                            <ContentSection content={matchedTransmutation.Content} />
                            {matchedTransmutation.Book && (<div><b>Book:</b> {BookLink(matchedTransmutation.Book)}</div>)}
                        </>
                    ) : (
                        <>
                            <LabeledField
                                label="Class"
                                value={matchedTransmutation.Class}
                                prefix="transmutation-class"
                            />
                            <LabeledField
                                label="Rank"
                                value={matchedTransmutation.Rank}
                                prefix="transmutation-rank"
                            />
                            <LabeledField
                                label="Prerequisites"
                                value={getDetailValue(matchedTransmutation, "FullPrerequisites", "Prerequisites")}
                                prefix="transmutation-prerequisites"
                            />
                            <LabeledField
                                label="Description"
                                value={matchedTransmutation.Description}
                                prefix="transmutation-description"
                            />

                            <ContentSection content={matchedTransmutation.UpperContent} />

                            <LabeledField
                                label="Cost"
                                value={getDetailValue(matchedTransmutation, "FullCost", "Cost")}
                                prefix="transmutation-cost"
                            />
                            <LabeledField
                                label="Dice Pool"
                                value={getDetailValue(matchedTransmutation, "FullDicePool", "Dice Pool")}
                                prefix="transmutation-dice-pool"
                            />
                            <LabeledField
                                label="Action"
                                value={matchedTransmutation.Action}
                                prefix="transmutation-action"
                            />

                            <ContentSection content={matchedTransmutation.BelowContent} />
                            <ContentSection content={matchedTransmutation.RollResults} />
                            <ContentSection content={matchedTransmutation.Notes} />

                            {matchedTransmutation.Book && (<div><b>Book:</b> {BookLink(matchedTransmutation.Book)}</div>)}
                        </>
                    )}
                </>
            )}
        </div>
    );
}
