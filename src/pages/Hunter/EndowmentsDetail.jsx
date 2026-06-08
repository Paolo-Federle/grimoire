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

    return content.map((block) => {
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

function ContentSection({ title, content }) {
    if (!hasContentBlocks(content)) return null;

    return (
        <div className="detail-content-section">
            {title && <div className="detail-content-section-title">{title}</div>}
            <StructuredContent content={normalizeBlocks(content)} />
        </div>
    );
}

export default function EndowmentsDetail(props) {
    const matchedEndowment = props.endowment;
    const rank = matchedEndowment?.Rank || matchedEndowment?.Rating;

    return (
        <div className='longTextContainer'>
            {matchedEndowment && (
                <>
                    <h1>{matchedEndowment.Name}{rank ? ` (${rank})` : ""}</h1>

                    <LabeledField label="Description" value={matchedEndowment.Description} prefix="endowment-description" />
                    <LabeledField label="Compact or Conspiracy" value={matchedEndowment["Compact or Conspiracy"]} prefix="endowment-compact-conspiracy" />

                    <ContentSection content={matchedEndowment.Content} />
                    <ContentSection content={matchedEndowment.Function} />
                    <ContentSection content={matchedEndowment.Effect} />
                    <ContentSection content={matchedEndowment.Benefit} />

                    <LabeledField label="Cost" value={matchedEndowment.fullCost || matchedEndowment.Cost || matchedEndowment["Cost (Xt = X thimbles of blood)"]} prefix="endowment-cost" />
                    <LabeledField label="Dice Pool" value={matchedEndowment.fullDicePool || matchedEndowment.DicePool || matchedEndowment["Dice Pool"]} prefix="endowment-dice-pool" />
                    <LabeledField label="Action" value={matchedEndowment.Action} prefix="endowment-action" />

                    <ContentSection title="Roll Results" content={matchedEndowment.RollResults} />
                    <ContentSection content={matchedEndowment.Notes} />
                    <ContentSection content={matchedEndowment["Potential Modifiers"]} />
                    <ContentSection title="Possible Appeasements" content={matchedEndowment.PossibleAppeasements} />
                    <ContentSection title="Special" content={matchedEndowment.Special} />

                    {matchedEndowment.Book && (<div><b>Book:</b> {BookLink(matchedEndowment.Book)}</div>)}
                </>
            )}
        </div>
    );
}
