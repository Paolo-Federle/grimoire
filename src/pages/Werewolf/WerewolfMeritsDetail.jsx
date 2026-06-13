import React from 'react';
import { BookLink } from '../../components/BookLink';
import StructuredContent, { InlineContent } from '../../components/StructuredContent';
import { normalizeDisplayText } from '../../utils';

function hasContentBlocks(value) {
    return Array.isArray(value) && value.some((item) => {
        if (typeof item === 'string') {
            return item.trim() !== '';
        }

        return !!item;
    });
}

function getCleanRank(rank) {
    if (!rank) return '';

    const withoutPrerequisites = String(rank)
        .replace(/\s*\*?pre\s*:\s*.*$/i, '')
        .trim();

    return withoutPrerequisites.replace(/^\((.*)\)$/, '$1').trim();
}

function getRankPrerequisites(rank) {
    if (!rank) return '';

    const match = String(rank).match(/\*?pre\s*:\s*(.*)$/i);
    return match ? match[1].trim() : '';
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
            <StructuredContent content={content} />
        </div>
    );
}

export default function WerewolfMeritsDetail(props) {
    const matchedMerit = props.werewolfMerit;
    const rank = getCleanRank(matchedMerit?.Rank);
    const prerequisites =
        matchedMerit?.FullPrerequisites ||
        matchedMerit?.Prerequisites ||
        getRankPrerequisites(matchedMerit?.Rank);

    return (
        <div className='longTextContainer'>
            {matchedMerit && (
                <>
                    <h1>{normalizeDisplayText(matchedMerit.Name)}{rank ? ` (${normalizeDisplayText(rank)})` : ''}</h1>

                    <LabeledField
                        label="Prerequisites"
                        value={prerequisites}
                        prefix="werewolf-merit-prerequisites"
                    />

                    <LabeledField
                        label="Description"
                        value={matchedMerit.Description}
                        prefix="werewolf-merit-description"
                    />

                    <ContentSection title="Effect" content={matchedMerit.Effect} />

                    <LabeledField
                        label="Rank"
                        value={rank}
                        prefix="werewolf-merit-rank"
                    />

                    <ContentSection title="Drawback" content={matchedMerit.Drawback} />
                    <ContentSection content={matchedMerit.Notes} />

                    {matchedMerit.Book && (<div><b>Book:</b> {BookLink(matchedMerit.Book)}</div>)}
                </>
            )}
        </div>
    );
}
