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

export default function AspectsAndFavorsDetail(props) {
    const matchedTrait = props.aspectFavor;

    return (
        <div className='longTextContainer'>
            {matchedTrait && (
                <>
                    <h1>{matchedTrait.Name} {matchedTrait.Cost && `(${matchedTrait.Cost})`}</h1>

                    <LabeledField
                        label="Description"
                        value={matchedTrait.Description}
                        prefix="aspect-favor-description"
                    />

                    {hasContentBlocks(matchedTrait.Content) && (
                        <div style={{ paddingBottom: "20px" }}>
                            <StructuredContent content={matchedTrait.Content} />
                        </div>
                    )}

                    {matchedTrait.Book && (<div><b>Book:</b> {BookLink(matchedTrait.Book)}</div>)}
                </>
            )}
        </div>
    );
}
