import React from 'react';
import BaseTable from '../../components/BaseTable';
import { BookLink } from '../../components/BookLink';
import StructuredContent, { InlineContent } from '../../components/StructuredContent';
import { normalizeDisplayText } from '../../utils';

function renderTextContent(value, key, asParagraph = true) {
    const content = <InlineContent content={value} prefix={`contract-detail-${key}`} />;

    return asParagraph ? <p key={key}>{content}</p> : content;
}

export default function ContractsDetail(props) {
    const matchedcontract = props.contracts;
    const fullDescription = Array.isArray(matchedcontract?.FullDescription) ? matchedcontract.FullDescription : [];
    const fullCatch = Array.isArray(matchedcontract?.FullCatch) ? matchedcontract.FullCatch : [];
    const rollResults = Array.isArray(matchedcontract?.['Roll Results']) ? matchedcontract['Roll Results'] : [];

    const renderContentBlock = (item, index) => {
        if (typeof item !== 'object' || item === null) {
            return renderTextContent(item, index);
        }

        if (item.type || Array.isArray(item)) {
            return <StructuredContent key={index} content={item} />;
        }

        const [title, data] = Object.entries(item)[0];
        const headers = Object.keys(data[0]);

        return (
            <BaseTable
                key={index}
                headers={headers}
                data={data}
                title={title}
            />
        );
    };

    return (
        <div className='longTextContainer'>
            {matchedcontract && (
                <>
                    <h1>
                        {normalizeDisplayText(matchedcontract.Name)}
                        {matchedcontract.Rank && matchedcontract.Rank !== "N/A" && ` (${normalizeDisplayText(matchedcontract.Rank)})`}
                    </h1>

                    <div style={{ paddingBottom: "20px" }}>
                        {fullDescription.map(renderContentBlock)}
                    </div>

                    {matchedcontract.FullCost && matchedcontract.FullCost !== "N/A" && (
                        <div><b>Cost:</b> {normalizeDisplayText(matchedcontract.FullCost)}</div>
                    )}
                    {matchedcontract['Dice Pool'] && matchedcontract['Dice Pool'] !== "N/A" && (
                        <div><b>Dice Pool:</b> {normalizeDisplayText(matchedcontract['Dice Pool'])}</div>
                    )}
                    {matchedcontract.Action && (
                        <div><b>Action:</b> {normalizeDisplayText(matchedcontract.Action)}</div>
                    )}

                    {fullCatch.length > 0 && fullCatch[0] !== "" && (
                        <div>
                            {fullCatch.map((desc, index) => (
                                <div key={index}>
                                    <b>Catch:</b> {renderTextContent(desc, `catch-${index}`, false)}
                                </div>
                            ))}
                        </div>
                    )}

                    {rollResults.map(renderContentBlock)}

                    {matchedcontract.Book && matchedcontract.Book !== "N/A" && (
                        <div><b>Book:</b> {BookLink(matchedcontract.Book)}</div>
                    )}
                </>
            )}
        </div>
    );
}
