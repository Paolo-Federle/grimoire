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

export default function GeistMeritsDetail(props) {
    const matchedMerit = props.geistMerit;

    return (
        <div className='longTextContainer'>
            {matchedMerit && (
                <>
                    <h1>{matchedMerit.Name} {matchedMerit.Cost && `(${matchedMerit.Cost})`}</h1>

                    <LabeledField label="Prerequisites" value={matchedMerit.Prerequisite} prefix="geist-merit-prerequisite" />

                    {hasContentBlocks(matchedMerit.Content) && (
                        <div style={{ paddingBottom: "20px" }}>
                            <StructuredContent content={matchedMerit.Content} />
                        </div>
                    )}

                    {matchedMerit.Book && (<div><b>Book:</b> {BookLink(matchedMerit.Book)}</div>)}
                </>
            )}
        </div>
    );
}
