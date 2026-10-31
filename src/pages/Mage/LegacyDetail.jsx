import React from 'react';
import { BookLink } from '../../components/BookLink';
import BalancedColumns from '../../components/BalancedColumns';
import StructuredContent, { InlineContent } from '../../components/StructuredContent';

function RichContent({ content }) {
    if (!content) {
        return null;
    }

    if (Array.isArray(content) || (typeof content === 'object' && content.type)) {
        return <StructuredContent content={content} />;
    }

    return <p><InlineContent content={content} /></p>;
}

function LabeledRichContent({ label, content }) {
    if (!content) {
        return null;
    }

    if (Array.isArray(content) || (typeof content === 'object' && content.type)) {
        return (
            <div>
                <b className="block [break-after:avoid]">{label}:</b>
                <StructuredContent content={content} />
            </div>
        );
    }

    return <p><b>{label}:</b> <InlineContent content={content} /></p>;
}

export default function LegacyDetail({ legacy: matchedLegacy }) {
    if (!matchedLegacy) return null;

    return (
        <article className="mx-auto w-full max-w-[1200px] px-5 pb-8 sm:px-10 [&_.structured-content-heading]:mb-1 [&_.structured-content-heading]:mt-3 [&_.structured-content-heading]:font-serif [&_.structured-content-heading]:font-bold">
            <h1 className="mb-2 text-3xl font-bold">
                {matchedLegacy.Name}
                {matchedLegacy.leftHanded && ' (Left Handed)'}
            </h1>
            <BalancedColumns>
                <section aria-label={`${matchedLegacy.Name} background`} className="min-w-0">
                    <RichContent content={matchedLegacy.descrizione} />
                    {matchedLegacy.Path && matchedLegacy.Path.some(item => item.trim() !== '') && (
                        <p>
                            <b>Path:</b> {matchedLegacy.Path.join(', ')}
                        </p>
                    )}
                    {matchedLegacy.Order && matchedLegacy.Order.some(item => item.trim() !== '') && (
                        <p>
                            <b>Order:</b> {matchedLegacy.Order.join(', ')}
                        </p>
                    )}
                    <LabeledRichContent label="Nickname" content={matchedLegacy.alternateNickname} />
                    <LabeledRichContent label="Appearance" content={matchedLegacy.appearance} />
                    <LabeledRichContent label="Background" content={matchedLegacy.background} />
                    <LabeledRichContent label="Character Creation" content={matchedLegacy.characterCreation} />
                    <LabeledRichContent label="Orders" content={matchedLegacy.orders} />
                    <LabeledRichContent label="Organization" content={matchedLegacy.organizzation} />
                    <LabeledRichContent label="Suggested Oblations" content={matchedLegacy.suggestedOblations} />
                    <LabeledRichContent label="Concepts" content={matchedLegacy.concepts} />
                    <RichContent content={matchedLegacy.historySocietyCulture} />
                    <RichContent content={matchedLegacy.magic} />
                </section>
                <section aria-label={`${matchedLegacy.Name} attainments`} className="min-w-0">
                    {matchedLegacy.attainmentsDescrizione && (
                        <>
                            <h2 style={{ marginBottom: '10px' }}>Attainments</h2>
                            <RichContent content={matchedLegacy.attainmentsDescrizione} />
                        </>
                    )}
                    {matchedLegacy.firstAttainmentName && <h3 style={{ marginBottom: '0' }}><InlineContent content={matchedLegacy.firstAttainmentName} /></h3>}
                    <LabeledRichContent label="Prerequisites" content={matchedLegacy.firstAttainmentPrerequisites} />
                    <RichContent content={matchedLegacy.firstAttainmentDescription} />
                    <LabeledRichContent label="Optional Arcanum" content={matchedLegacy.firstAttainmentOptArcana} />
                    <RichContent content={matchedLegacy.firstAttainmentOptDescrizione} />
                    {matchedLegacy.secondAttainmentName && <h3 style={{ marginBottom: '0' }}><InlineContent content={matchedLegacy.secondAttainmentName} /></h3>}
                    <LabeledRichContent label="Prerequisites" content={matchedLegacy.secondAttainmentPrerequisites} />
                    <RichContent content={matchedLegacy.secondAttainmentDescription} />
                    <LabeledRichContent label="Optional Arcanum" content={matchedLegacy.secondAttainmentOptArcana} />
                    <RichContent content={matchedLegacy.secondAttainmentOptDescrizione} />
                    {matchedLegacy.thirdAttainmentName && <h3 style={{ marginBottom: '0' }}><InlineContent content={matchedLegacy.thirdAttainmentName} /></h3>}
                    <LabeledRichContent label="Prerequisites" content={matchedLegacy.thirdAttainmentPrerequisites} />
                    <RichContent content={matchedLegacy.thirdAttainmentDescription} />
                    <LabeledRichContent label="Optional Arcanum" content={matchedLegacy.thirdAttainmentOptArcana} />
                    <RichContent content={matchedLegacy.thirdAttainmentOptDescrizione} />
                </section>
            </BalancedColumns>
            {matchedLegacy.Book && <div className="mt-8"><b>Book:</b> {BookLink(matchedLegacy.Book)}</div>}
        </article>
    );
}
