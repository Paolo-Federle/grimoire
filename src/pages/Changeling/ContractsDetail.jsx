import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function ContractsDetail(props) {
    const location = useLocation();
    const matchedcontract = props.contracts
    console.log(matchedcontract)
    console.log('TEST')

    return (
        <div style={{ paddingBottom: '20px' }}>
            {matchedcontract && (
                <>
                    <div style={{ margin: '20px', width: '1000px' }}>
                        <h1>{matchedcontract.Name} ({matchedcontract.Rank})</h1>
                        {matchedcontract.FullDescription && (
                            <div style={{ paddingBottom: "20px" }}>
                                {matchedcontract.FullDescription.map((desc, index) => (
                                    <p key={index}>
                                        <span dangerouslySetInnerHTML={{ __html: desc }} />
                                    </p>
                                ))}
                            </div>
                        )}
                        {matchedcontract.Cost && (<div><b>Cost:</b> {matchedcontract.Cost}</div>)}
                        {matchedcontract['Dice Pool'] && (<div><b>Dice Pool:</b> {matchedcontract['Dice Pool']}</div>)}
                        {matchedcontract.Action && (<div><b>Action:</b> {matchedcontract.Action}</div>)}
                        {matchedcontract.FullCatch && (
                            <span>
                                {matchedcontract.FullCatch.map((desc, index) => (
                                    <span key={index}>
                                        <b>Catch:</b> <span dangerouslySetInnerHTML={{ __html: desc }} />
                                    </span>
                                ))}
                            </span>
                        )}
                        {matchedcontract['Roll Results'] && (
                            <div style={{ paddingBottom: "20px" }}>
                                {matchedcontract['Roll Results'].map((item, index) =>
                                    typeof item === 'object' ? (
                                        <div key={index} style={{ marginBottom: '20px' }}>
                                            <h3>{Object.keys(item)[0]}</h3>
                                            <table className='spacing-table'>
                                                <thead>
                                                    <tr className='table-row'>
                                                        {Object.keys(item[Object.keys(item)[0]][0]).map((header, i) => (
                                                            <th key={i}>{header}</th>
                                                        ))}
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {item[Object.keys(item)[0]].map((modifier, idx) => (
                                                        <tr key={idx} className={`alternating-row table-clickable`}>
                                                            {Object.values(modifier).map((value, i) => (
                                                                <td key={i}>{value}</td>
                                                            ))}
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    ) : (
                                        <p key={index}>
                                            <span dangerouslySetInnerHTML={{ __html: item }} />
                                        </p>
                                    )
                                )}
                            </div>
                        )}
                        {matchedcontract.Book && (<div><b>Book:</b> {matchedcontract.Book}</div>)}
                    </div>
                </>
            )}
        </div>
    )
}