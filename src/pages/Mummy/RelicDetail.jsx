import React from 'react';
import { BookLink } from '../../components/BookLink';
import ContentBlockList from '../../components/ContentBlockList';
import { LabeledField } from '../../components/Detail';
import { normalizeDisplayText } from '../../utils';

function hasContent(content) {
    return Array.isArray(content) && content.some((item) => {
        if (typeof item === 'string') {
            return item.trim() !== '';
        }

        return !!item;
    });
}

function ContentSection({ label, content }) {
    if (!hasContent(content)) return null;

    return (
        <div className="mt-4">
            {label ? <p><strong>{label}:</strong></p> : null}
            <ContentBlockList content={content} />
        </div>
    );
}

function RelicStats({ relic }) {
    return (
        <>
            <LabeledField label="Durability" value={relic.Durability} />
            <LabeledField label="Size" value={relic.Size} />
            <LabeledField label="Structure" value={relic.Structure} />
        </>
    );
}

function VestigeDetail({ relic }) {
    return (
        <>
            <LabeledField label="Description" value={relic.Description} />
            <LabeledField label="Virtue/Vice" value={relic['Virtue/Vice']} />
            <RelicStats relic={relic} />
            <ContentSection content={relic.FullDescription} />
            <LabeledField label="Fetters" value={relic.Fetters} />
            <ContentSection content={relic.Notes} />
        </>
    );
}

function StandardRelicDetail({ relic }) {
    return (
        <>
            <RelicStats relic={relic} />
            <ContentSection content={relic.FullDescription} />
            <ContentSection content={relic.FullPower} />
            <ContentSection content={relic.RollCurse} />
            <ContentSection content={relic.Notes} />
        </>
    );
}

export default function RelicDetail({ relic }) {
    if (!relic) {
        return <div className="longTextContainer">Relic not found.</div>;
    }

    return (
        <div className="longTextContainer">
            <h1>
                {normalizeDisplayText(relic.Name)}
                {relic.Rating ? ` (${normalizeDisplayText(relic.Rating)})` : ''}
            </h1>

            {relic.DetailType === 'vestige' ? (
                <VestigeDetail relic={relic} />
            ) : (
                <StandardRelicDetail relic={relic} />
            )}

            {relic.Book && (
                <div className="mt-4">
                    <b>Book:</b> {BookLink(relic.Book)}
                </div>
            )}
        </div>
    );
}
