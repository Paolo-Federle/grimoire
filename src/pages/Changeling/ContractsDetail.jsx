import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import BaseTable from '../../components/BaseTable';

export default function ContractsDetail(props) {
    const location = useLocation();
    const matchedcontract = props.contracts

    return (
        <div className='longTextContainer'>
            {matchedcontract && (
                <>
                        <h1>
                            {matchedcontract.Name}
                            {matchedcontract.Rank && matchedcontract.Rank !== "N/A" && ` (${matchedcontract.Rank})`}
                        </h1>

                        <div style={{ paddingBottom: "20px" }}>
                            {matchedcontract.FullDescription.map((item, index) => {

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
                        {matchedcontract.FullCost && matchedcontract.FullCost  !== "N/A" && (<div><b>Cost:</b> {matchedcontract.FullCost}</div>)}
                        {matchedcontract['Dice Pool'] && matchedcontract['Dice Pool']  !== "N/A" && (<div><b>Dice Pool:</b> {matchedcontract['Dice Pool']}</div>)}
                        {matchedcontract.Action && (<div><b>Action:</b> {matchedcontract.Action}</div>)}

                        {matchedcontract.FullCatch?.length > 0 && matchedcontract?.FullCatch[0] !== "" && (
                            <span>
                                {matchedcontract.FullCatch.map((desc, index) => (
                                    <span key={index}>
                                        <b>Catch:</b> <span dangerouslySetInnerHTML={{ __html: desc }} />
                                    </span>
                                ))}
                            </span>
                        )}
                        {matchedcontract['Roll Results'].map((item, index) => {
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
                        {matchedcontract.Book && matchedcontract.Book  !== "N/A" && (<div><b>Book:</b> {matchedcontract.Book}</div>)}
                </>
            )
            }
        </div >
    )
}