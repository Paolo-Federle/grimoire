import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import BaseTable from '../../components/BaseTable';

export default function DerangementsDetail(props) {
    const location = useLocation();
    const matchedDerangement = props.derangement
    console.log('test', matchedDerangement)

    return (
        <div className='longTextContainer'>
            {matchedDerangement && (
                <>
                    <h1>{matchedDerangement.Name} ({matchedDerangement.Severity})</h1>
                    {matchedDerangement.ProgressesFrom && (<div><b>Progresses from:</b> {matchedDerangement.ProgressesFrom}</div>)}
                    {matchedDerangement.ProgressesTo && (<div><b>Progresses to:</b> {matchedDerangement.ProgressesTo}</div>)}
                    <div style={{ paddingBottom: "20px" }}>
                        {matchedDerangement.LongDescription.map((item, index) => {
                            if (typeof item !== 'object') {
                                return (
                                    <p key={index}>
                                        <span dangerouslySetInnerHTML={{ __html: item }} />
                                    </p>
                                );
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
                        })}
                    </div>
                    {matchedDerangement.Book && (<div><b>Book:</b> {matchedDerangement.Book}</div>)}
                
                </>
            )}
        </div>
    )
}