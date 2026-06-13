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

export default function TalenDetail(props) {
    const matchedTalen = props.talen;

    return (
        <div className='longTextContainer'>
            {matchedTalen && (
                <>
                    <h1>{normalizeDisplayText(matchedTalen.Name)}</h1>

                    <LabeledField
                        label="Description"
                        value={matchedTalen.Description}
                        prefix="talen-description"
                    />

                    <ContentSection content={matchedTalen.Content} />

                    <LabeledField
                        label="Action"
                        value={matchedTalen.Action}
                        prefix="talen-action"
                    />

                    <ContentSection content={matchedTalen.Notes} />

                    {matchedTalen.Book && (<div><b>Book:</b> {BookLink(matchedTalen.Book)}</div>)}
                </>
            )}
        </div>
    );
}
