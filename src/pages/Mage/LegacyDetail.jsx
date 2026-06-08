import React from 'react';
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
                <b>{label}:</b>
                <StructuredContent content={content} />
            </div>
        );
    }

    return <p><b>{label}:</b> <InlineContent content={content} /></p>;
}

export default function LegacyDetail(props) {
    const matchedLegacy = props.legacy

    return (
        <div style={{
            maxWidth: '1200px',
            width: '100%',
            margin: '0 auto',
            padding: '0 40px',
            paddingBottom: '20px'
        }}>
            {matchedLegacy && (
                <>
                    <h1 style={{ marginBottom: '10px' }}>
                        {matchedLegacy.Nome}
                        {matchedLegacy.leftHanded && ' (Left Handed)'}
                    </h1>
                    <div style={{ overflow: 'hidden' }}>
                        <div style={{ display: 'flex' }}>
                            <div style={{ width: '600px', marginRight: '20px', overflowY: 'scroll', height: '96vh', margin: '10px' }}>

                                <RichContent content={matchedLegacy.descrizione} />
                                {matchedLegacy.Cammino && matchedLegacy.Cammino.some(item => item.trim() !== '') && (
                                    <p>
                                        <b>Path:</b> {matchedLegacy.Cammino.join(', ')}
                                    </p>
                                )}
                                {matchedLegacy.Ordine && matchedLegacy.Ordine.some(item => item.trim() !== '') && (
                                    <p>
                                        <b>Order:</b> {matchedLegacy.Ordine.join(', ')}
                                    </p>
                                )}
                                <LabeledRichContent label="Nickname" content={matchedLegacy.alternateNickname} />
                                <LabeledRichContent label="Appearance" content={matchedLegacy.appearance} />
                                <LabeledRichContent label="Background" content={matchedLegacy.background} />
                                <LabeledRichContent label="Character Creation" content={matchedLegacy.characterCreation} />
                                <LabeledRichContent label="Organizzation" content={matchedLegacy.organizzation} />
                                <LabeledRichContent label="Suggested Oblations" content={matchedLegacy.suggestedOblations} />
                                <LabeledRichContent label="Concepts" content={matchedLegacy.concepts} />
                                <RichContent content={matchedLegacy.historySocietyCulture} />
                                <RichContent content={matchedLegacy.magic} />
                            </div>
                            <div style={{ width: '600px', overflowY: 'scroll', height: '96vh', margin: '10px' }}>
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
                                <br />
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
