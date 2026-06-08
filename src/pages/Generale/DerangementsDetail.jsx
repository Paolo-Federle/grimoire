import React from 'react';
import BaseTable from '../../components/BaseTable';
import { BookLink } from '../../components/BookLink';
import StructuredContent from '../../components/StructuredContent';

export default function DerangementsDetail(props) {
    const matchedDerangement = props.derangement

    const renderDescriptionBlock = (item, index) => {
        if (typeof item !== 'object' || item === null) {
            return (
                <p key={index}>
                    {item}
                </p>
            );
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
            {matchedDerangement && (
                <>
                    <h1>{matchedDerangement.Name} ({matchedDerangement.Severity})</h1>
                    {matchedDerangement.ProgressesFrom && (<div><b>Progresses from:</b> {matchedDerangement.ProgressesFrom}</div>)}
                    {matchedDerangement.ProgressesTo && (<div><b>Progresses to:</b> {matchedDerangement.ProgressesTo}</div>)}
                    <div style={{ paddingBottom: "20px" }}>
                        {matchedDerangement.LongDescription.map(renderDescriptionBlock)}
                    </div>
                    {matchedDerangement.Book && (<div><b>Book:</b> {BookLink(matchedDerangement.Book)}</div>)}
                
                </>
            )}
        </div>
    )
}
