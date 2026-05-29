import React from 'react';
import BaseTable from '../../components/BaseTable';
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

function RankDetailsTable({ rankDetails }) {
    if (!Array.isArray(rankDetails) || rankDetails.length === 0) return null;

    const rows = rankDetails.map((item) => ({
        Rank: item.Ranks || item.rank,
        Name: item["Rank name"] || item.name || '',
        Summary: item.Summary || item.summary,
    }));

    return (
        <BaseTable
            title="Rank Effects"
            headers={['Rank', 'Name', 'Summary']}
            data={rows}
        />
    );
}

export default function HunterMeritsDetail(props) {
    const matchedMerit = props.hunterMerit;

    return (
        <div className='longTextContainer'>
            {matchedMerit && (
                <>
                    <h1>{matchedMerit.Name} {matchedMerit.Ranks && `(${matchedMerit.Ranks})`}</h1>

                    <LabeledField
                        label="Prerequisites"
                        value={matchedMerit.fullPrerequisites || matchedMerit.Prerequisites}
                        prefix="hunter-merit-prerequisites"
                    />

                    <LabeledField
                        label="Summary"
                        value={matchedMerit.Summary}
                        prefix="hunter-merit-summary"
                    />

                    <RankDetailsTable rankDetails={matchedMerit.RankDetails} />

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
