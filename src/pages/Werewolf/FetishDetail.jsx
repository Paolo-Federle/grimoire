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

function formatRankDots(rank) {
    const rankValue = Number(rank);

    if (Number.isFinite(rankValue) && rankValue > 0) {
        return '\u2022'.repeat(rankValue);
    }

    return rank;
}

export default function FetishDetail(props) {
    const matchedFetish = props.fetish;
    const showRank = matchedFetish?.Rank && matchedFetish.Rank !== 'N/A';
    const rankLabel = showRank ? formatRankDots(matchedFetish.Rank) : '';

    return (
        <div className='longTextContainer'>
            {matchedFetish && (
                <>
                    <h1>{matchedFetish.Name}{rankLabel ? ` (${rankLabel})` : ""}</h1>

                    <LabeledField label="Description" value={matchedFetish.Description} prefix="fetish-description" />

                    <ContentSection content={matchedFetish.Content} />

                    <LabeledField label="Spirit" value={matchedFetish.Spirit} prefix="fetish-spirit" />
                    <LabeledField label="Tribe/Auspice" value={matchedFetish["Tribe/Auspice"]} prefix="fetish-tribe-auspice" />
                    <LabeledField label="Action" value={matchedFetish.FullAction || matchedFetish.Action} prefix="fetish-action" />

                    <ContentSection title="Roll Results" content={matchedFetish.RollResults} />
                    <ContentSection content={matchedFetish.Notes} />

                    {matchedFetish.Book && (<div><b>Book:</b> {BookLink(matchedFetish.Book)}</div>)}
                </>
            )}
        </div>
    );
}
