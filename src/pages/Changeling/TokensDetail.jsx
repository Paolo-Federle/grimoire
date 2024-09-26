import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import BaseTable from '../../components/BaseTable';

export default function TokensDetail(props) {
    const location = useLocation();
    const matchedToken = props.tokens

    return (
        <div className='longTextContainer'>
            {matchedToken && (
                <>
                    <h1>
                        {matchedToken.Name}
                        {matchedToken.Rank && matchedToken.Rank !== "N/A" && ` (${matchedToken.Rank})`}
                    </h1>


                    {matchedToken.fullDescription && (
                        <div >
                            {matchedToken.fullDescription.map((desc, index) => (
                                <p key={index}>
                                    <span dangerouslySetInnerHTML={{ __html: desc }} />
                                </p>
                            ))}
                        </div>
                    )}
                    {matchedToken.Action && (<div ><b>Action:</b> {matchedToken.Action}</div>)}
                    {matchedToken.Mien && matchedToken.Mien.some(desc => desc.trim() !== "") && (
                        <div >
                            {matchedToken.Mien.map((desc, index) => (
                                <p key={index}>
                                    <b>Mien: </b><span dangerouslySetInnerHTML={{ __html: desc }} />
                                </p>
                            ))}
                        </div>
                    )}
                    {matchedToken.fullDrawback && (
                        <div >
                            {matchedToken.fullDrawback.map((desc, index) => (
                                <p key={index}>
                                    <b>Drawback: </b><span dangerouslySetInnerHTML={{ __html: desc }} />
                                </p>
                            ))}
                        </div>
                    )}
                    {matchedToken.fullCatch && matchedToken.fullCatch.some(desc => desc.trim() !== "") && (
                        <div >
                            {matchedToken.fullCatch.map((desc, index) => (
                                <p key={index}>
                                    <b>Catch: </b><span dangerouslySetInnerHTML={{ __html: desc }} />
                                </p>
                            ))}
                        </div>
                    )}
                    {/* {matchedToken.FullCatch?.length > 0 && matchedToken?.FullCatch[0] !== "" && (
                            <span>
                                {matchedToken.FullCatch.map((desc, index) => (
                                    <span key={index}>
                                        <b>Catch:</b> <span dangerouslySetInnerHTML={{ __html: desc }} />
                                    </span>
                                ))}
                            </span>
                        )} */}
                    {matchedToken.Book && matchedToken.Book !== "N/A" && (<div><b>Book:</b> {matchedToken.Book}</div>)}
                </>
            )
            }
        </div >
    )
}