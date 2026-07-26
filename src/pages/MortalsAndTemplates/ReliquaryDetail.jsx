import React from 'react';
import ContentBlockList from '../../components/ContentBlockList';
import { LabeledField } from '../../components/Detail';
import { BookLink } from '../../components/BookLink';
import { InlineContent } from '../../components/StructuredContent';
import { normalizeDisplayText } from '../../utils';

function DetailSection({ label, content }) {
    if (!Array.isArray(content) || content.length === 0) {
        return null;
    }

    return (
        <div className="mt-4">
            <p><strong>{label}:</strong></p>
            <ContentBlockList content={content} />
        </div>
    );
}

function DetailContent({ content }) {
    if (!Array.isArray(content) || content.length === 0) {
        return null;
    }

    return (
        <div className="mt-4">
            <ContentBlockList content={content} />
        </div>
    );
}

function InlineDetailSection({ label, content }) {
    if (!Array.isArray(content) || content.length === 0) {
        return null;
    }

    const [firstBlock, ...remainingBlocks] = content;
    const labelNode = <strong>{label}:</strong>;

    function renderFirstBlock() {
        if (typeof firstBlock === 'string') {
            return (
                <p>
                    {labelNode} <InlineContent content={firstBlock} />
                </p>
            );
        }

        if (!firstBlock || typeof firstBlock !== 'object') {
            return null;
        }

        if (firstBlock.type === 'paragraph') {
            return (
                <p>
                    {labelNode} <InlineContent content={firstBlock.text ?? firstBlock.content ?? ''} />
                </p>
            );
        }

        if (firstBlock.type === 'line') {
            return (
                <div>
                    {labelNode} <InlineContent content={firstBlock.text ?? firstBlock.content ?? ''} />
                </div>
            );
        }

        return (
            <>
                <p>{labelNode}</p>
                <ContentBlockList content={[firstBlock]} />
            </>
        );
    }

    return (
        <div className="mt-4">
            {renderFirstBlock()}
            <ContentBlockList content={remainingBlocks} />
        </div>
    );
}

function renderBook(book) {
    if (!book) return null;

    return (
        <div className="mt-4">
            <b>Book:</b> {BookLink(book)}
        </div>
    );
}

function ReliquaryItemDetail({ item }) {
    return (
        <>
            <h1>{normalizeDisplayText(item.Name)}</h1>

            <DetailContent content={item.Description} />
            <LabeledField label="Durability" value={item.Durability} />
            <LabeledField label="Size" value={item.Size} />
            <LabeledField label="Structure" value={item.Structure} />
            <DetailSection label="Background" content={item.Background} />
            <DetailSection label="Storytelling Hints" content={item.StorytellingHints} />
            <DetailSection label="Effect" content={item.FullEffect} />
            {renderBook(item.Book)}
        </>
    );
}

function ReliquaryPowerDetail({ item }) {
    return (
        <>
            <h1>{normalizeDisplayText(item['Relic Powers'])}</h1>

            <DetailContent content={item.FullDescription} />
            <InlineDetailSection label="Cost" content={item.FullCost} />
            <LabeledField label="Action" value={item.Action} />
            <InlineDetailSection label="Dice Pool" content={item.DiceRoll} />
            <DetailSection label="Roll Results" content={item.RollResults} />
            <DetailContent content={item.Notes} />
            {renderBook(item.Book)}
        </>
    );
}

export default function ReliquaryDetail({ reliquary }) {
    if (!reliquary) {
        return <div className="longTextContainer">Reliquary item not found.</div>;
    }

    return (
        <div className="longTextContainer">
            {reliquary.DetailType === 'power' ? (
                <ReliquaryPowerDetail item={reliquary} />
            ) : (
                <ReliquaryItemDetail item={reliquary} />
            )}
        </div>
    );
}
