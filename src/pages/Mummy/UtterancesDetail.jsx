import React from 'react';
import ContentBlockList from '../../components/ContentBlockList';
import { LabeledField } from '../../components/Detail';
import { BookLink } from '../../components/BookLink';
import { normalizeDisplayText } from '../../utils';

function parseTier(value = '') {
    const text = String(value).trim();
    const match = text.match(/^(.*?)\s*([•]+)$/);

    if (!match) {
        return {
            name: text,
            dots: '',
        };
    }

    return {
        name: match[1].trim(),
        dots: match[2],
    };
}

function getTierLabel(index) {
    return `Tier ${index + 1}`;
}

function getTierSummary(tier, index) {
    const parsedTier = parseTier(tier.Tier);
    const details = [parsedTier.dots, tier.Descriptors].filter(Boolean).join(', ');

    return `${getTierLabel(index)}: ${parsedTier.name}${details ? ` (${details})` : ''}`;
}

function compactSharedValue(rows, key) {
    const values = [...new Set(rows.map((row) => row?.[key]).filter(Boolean))];
    return values.join(', ');
}

function TierContent({ tier, index }) {
    const hasContent = Array.isArray(tier.Content) && tier.Content.length > 0;

    if (!hasContent) {
        return null;
    }

    return (
        <div className="mt-4">
            <p>
                <strong>{getTierLabel(index)}:</strong>
            </p>
            <ContentBlockList content={tier.Content} />
        </div>
    );
}

export default function UtterancesDetail({ utterance }) {
    if (!utterance) {
        return <div className="longTextContainer">Utterance not found.</div>;
    }

    const tiers = Array.isArray(utterance.Tiers) ? utterance.Tiers : [];
    const prerequisite = utterance.Prerequisites || compactSharedValue(tiers, 'Prerequisites');
    const book = utterance.Book || compactSharedValue(tiers, 'Book');

    return (
        <div className="longTextContainer">
            <h1>{normalizeDisplayText(utterance.Name)}</h1>

            <LabeledField label="Prerequisite" value={prerequisite} />

            {tiers.length > 0 && (
                <p>
                    {tiers.map((tier, index) => (
                        <React.Fragment key={`${tier.Tier || 'tier'}-${index}`}>
                            {normalizeDisplayText(getTierSummary(tier, index))}
                            {index < tiers.length - 1 ? '; ' : ''}
                        </React.Fragment>
                    ))}
                </p>
            )}

            {tiers.map((tier, index) => (
                <TierContent key={`${tier.Tier || 'tier'}-${index}`} tier={tier} index={index} />
            ))}

            {book && (
                <div className="mt-4">
                    <b>Book:</b> {BookLink(book)}
                </div>
            )}
        </div>
    );
}
