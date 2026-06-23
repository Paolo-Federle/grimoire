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

function normalizeBlocks(content) {
    if (!Array.isArray(content)) return [];

    return content.filter((block) => {
        if (!block || typeof block !== 'object') return !!block;

        return !(block.type === 'heading' && block.text === 'Roll Results');
    }).map((block) => {
        if (block && typeof block === 'object' && !block.type && (block.label || block.text)) {
            return {
                type: 'line',
                label: block.label,
                text: block.text,
            };
        }

        return block;
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
            <StructuredContent content={normalizeBlocks(content)} />
        </div>
    );
}

export default function TacticsDetail(props) {
    const matchedTactic = props.tactic;
    const isOverview = matchedTactic?.Name === 'Tactics';

    return (
        <div className='longTextContainer'>
            {matchedTactic && (
                <>
                    <h1>{matchedTactic.Name}</h1>

                    {isOverview ? (
                        <>
                            <ContentSection content={matchedTactic.Content} />
                            {matchedTactic.Book && (<div><b>Book:</b> {BookLink(matchedTactic.Book)}</div>)}
                        </>
                    ) : (
                        <>
                            <LabeledField label="Description" value={matchedTactic.Summary} prefix="tactic-summary" />

                            <ContentSection content={matchedTactic.Description} />

                            <LabeledField label="Required Hunters" value={matchedTactic["Required hunters"]} prefix="tactic-required-hunters" />
                            <LabeledField label="Primary Requires" value={matchedTactic["Primary Requires"]} prefix="tactic-primary-requires" />
                            <LabeledField label="Secondary Requires" value={matchedTactic["Secondary Requires"]} prefix="tactic-secondary-requires" />

                            <LabeledField label="Dice Pool" value={matchedTactic.FullDicePool || matchedTactic["Dice Rolls"]} prefix="tactic-dice-pool" />
                            <LabeledField label="Action" value={matchedTactic.FullAction} prefix="tactic-action" />

                            <ContentSection label="Organizations" content={matchedTactic.Organizations} />
                            <ContentSection content={matchedTactic.PotentialModifiers} />
                            <ContentSection content={matchedTactic.RollResults} />

                            <LabeledField label="To Purchase" value={matchedTactic.ToPorchase} prefix="tactic-to-purchase" />
                            <ContentSection content={matchedTactic.Notes} />

                            {matchedTactic.Book && (<div><b>Book:</b> {BookLink(matchedTactic.Book)}</div>)}
                        </>
                    )}
                </>
            )}
        </div>
    );
}
