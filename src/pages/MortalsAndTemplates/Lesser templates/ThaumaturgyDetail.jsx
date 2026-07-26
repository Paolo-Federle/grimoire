import React from 'react';
import { BookLink } from '../../../components/BookLink';
import StructuredContent, { InlineContent } from '../../../components/StructuredContent';
import { normalizeDisplayText } from '../../../utils';

function hasValue(value) {
    if (Array.isArray(value)) return value.some(hasValue);
    if (value && typeof value === 'object') return true;
    return value !== null && value !== undefined && String(value).trim() !== '' && value !== 'N/A';
}

function hasContentBlocks(value) {
    return Array.isArray(value) && value.some(hasValue);
}

function normalizeInlineValue(value) {
    if (typeof value !== 'string' || !value.includes('\n')) {
        return value;
    }

    return value
        .split('\n')
        .map((part) => part.trim())
        .filter(Boolean)
        .flatMap((part, index) => (index === 0 ? [part] : ['; ', part]));
}

function blockText(block) {
    if (typeof block === 'string') return block;
    if (!block || typeof block !== 'object') return '';

    const value = block.text ?? block.content ?? '';
    if (Array.isArray(value)) {
        return value.map(blockText).join(' ');
    }

    if (value && typeof value === 'object') {
        return blockText(value);
    }

    return String(value || '');
}

function stripRollResultsHeading(content) {
    if (!Array.isArray(content)) return [];

    return content.filter((block, index) => {
        if (index !== 0 || !block || typeof block !== 'object') return true;

        return !(block.type === 'heading' && normalizeDisplayText(block.text).trim() === 'Roll Results');
    });
}

function getRollSectionLabel(content) {
    const text = normalizeDisplayText((content || []).map(blockText).join(' '));

    if (/Dramatic Failure|Exceptional Success|Failure:|Success:/i.test(text)) {
        return 'Roll Results';
    }

    return 'Suggested Modifiers';
}

function LabeledField({ label, value, prefix }) {
    if (!hasValue(value)) return null;

    return (
        <div>
            <b>{label}:</b> <InlineContent content={normalizeInlineValue(value)} prefix={prefix} />
        </div>
    );
}

function ContentSection({ label, content, normalizeContent = (value) => value }) {
    const blocks = normalizeContent(content);

    if (!hasContentBlocks(blocks)) return null;

    return (
        <div className="detail-content-section">
            {label ? <div className="detail-content-section-title">{label}</div> : null}
            <StructuredContent content={blocks} />
        </div>
    );
}

function renderBook(book) {
    if (!book) return null;

    return (
        <div>
            <b>Book:</b> {BookLink(book)}
        </div>
    );
}

export default function ThaumaturgyDetail({ thaumaturgyMerit }) {
    if (!thaumaturgyMerit) {
        return <div className="longTextContainer">Thaumaturgy merit not found.</div>;
    }

    const prerequisites = thaumaturgyMerit.FullPrerequisites || thaumaturgyMerit.Prerequisite;
    const rollDice = stripRollResultsHeading(thaumaturgyMerit.RollDice);
    const rollDiceLabel = getRollSectionLabel(rollDice);

    return (
        <div className="longTextContainer">
            <h1>
                {normalizeDisplayText(thaumaturgyMerit.Name)}
                {thaumaturgyMerit.Rank ? ` (${normalizeDisplayText(thaumaturgyMerit.Rank)})` : ''}
            </h1>

            <LabeledField
                label="Prerequisites"
                value={prerequisites}
                prefix="thaumaturgy-prerequisites"
            />

            <ContentSection content={thaumaturgyMerit.Content} />

            <LabeledField
                label="Dice Pool"
                value={thaumaturgyMerit.DicePool}
                prefix="thaumaturgy-dice-pool"
            />
            <LabeledField
                label="Ritual Length"
                value={thaumaturgyMerit.RitualLength}
                prefix="thaumaturgy-ritual-length"
            />
            <LabeledField
                label="Duration"
                value={thaumaturgyMerit.Duration}
                prefix="thaumaturgy-duration"
            />

            <ContentSection label={rollDiceLabel} content={rollDice} />
            <ContentSection label="Possible Penalties" content={thaumaturgyMerit.PossiblePenalties} />
            <ContentSection label="Ritual Details" content={thaumaturgyMerit.RitualDetails} />
            <ContentSection content={thaumaturgyMerit.Notes} />

            {renderBook(thaumaturgyMerit.Book)}
        </div>
    );
}
