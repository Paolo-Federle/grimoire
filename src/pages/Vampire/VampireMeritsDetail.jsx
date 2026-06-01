import React from 'react';
import { BookLink } from '../../components/BookLink';
import StructuredContent, { InlineContent } from '../../components/StructuredContent';

function LabeledField({ label, value, prefix }) {
    if (!value || value === 'N/A') return null;
    return (
        <div>
            <b>{label}:</b> <InlineContent content={value} prefix={prefix} />
        </div>
    );
}

function hasContentBlocks(value) {
    return Array.isArray(value) && value.some((item) => {
        if (typeof item === 'string') {
            return item.trim() !== '';
        }
        return !!item;
    });
}

function ContentSection({ title, content }) {
    if (!hasContentBlocks(content)) return null;

    return (
        <div style={{ paddingBottom: "20px" }}>
            {title && <h2>{title}</h2>}
            <StructuredContent content={content} />
        </div>
    );
}

export default function VampireMeritsDetail(props) {
    const matchedMerit = props.vampireMerit;
    const fullPrerequisite = matchedMerit?.FullPrerequisite || matchedMerit?.FullPrerequisites;

    return (
        <div className='longTextContainer'>
            {matchedMerit && (
                <>
                    <h1>{matchedMerit.Name}{matchedMerit.Rank ? ` (${matchedMerit.Rank})` : ""}</h1>

                    <ContentSection
                        title="Prerequisites"
                        content={fullPrerequisite}
                    />

                    {!hasContentBlocks(fullPrerequisite) && (
                        <LabeledField
                            label="Prerequisites"
                            value={matchedMerit.Prerequisite || matchedMerit.Prerequisites}
                            prefix="vampire-merit-prerequisites"
                        />
                    )}

                    <LabeledField
                        label="Rank"
                        value={matchedMerit.Rank}
                        prefix="vampire-merit-rank"
                    />

                    <LabeledField
                        label="Description"
                        value={matchedMerit.Description}
                        prefix="vampire-merit-description"
                    />

                    <ContentSection content={matchedMerit.Content} />

                    <ContentSection
                        title="Drawback"
                        content={matchedMerit.Drawback}
                    />

                    {matchedMerit.Book && (<div><b>Book:</b> {BookLink(matchedMerit.Book)}</div>)}
                </>
            )}
        </div>
    );
}
