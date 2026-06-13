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

export default function PrometheanMeritsDetail(props) {
    const matchedMerit = props.prometheanMerit;
    const fullPrerequisites = matchedMerit?.FullPrerequisites || matchedMerit?.FullPrerequisite;
    const title = matchedMerit?.DisplayName || matchedMerit?.Name;

    return (
        <div className='longTextContainer'>
            {matchedMerit && (
                <>
                    <h1>{title}</h1>

                    <LabeledField
                        label="Prerequisites"
                        value={fullPrerequisites || matchedMerit.Prerequisites}
                        prefix="promethean-merit-prerequisites"
                    />

                    <LabeledField
                        label="Description"
                        value={matchedMerit.Description}
                        prefix="promethean-merit-description"
                    />

                    <ContentSection title="Effect" content={matchedMerit.Effect} />

                    <LabeledField
                        label="Cost"
                        value={matchedMerit.Cost}
                        prefix="promethean-merit-cost"
                    />

                    <ContentSection title="Drawback" content={matchedMerit.Drawback} />
                    <ContentSection content={matchedMerit.Notes} />

                    {matchedMerit.Book && (<div><b>Book:</b> {BookLink(matchedMerit.Book)}</div>)}
                </>
            )}
        </div>
    );
}
