import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function ImbueItemDetail(props) {
    const location = useLocation();
    const matchedImbuedItem = props.imbuedItem


    return (
        <div className='longTextContainer'>
            {matchedImbuedItem && (
                <>
                        <h1>{matchedImbuedItem.Nome} (Artifact Rank {matchedImbuedItem["Artifact Level"]})</h1>

                        {matchedImbuedItem.Durability && (<div><b>Durability:</b> {matchedImbuedItem.Durability}</div>)}
                        {matchedImbuedItem.Size && (<div><b>Size:</b> {matchedImbuedItem.Size}</div>)}
                        {matchedImbuedItem.Structure && (<div><b>Structure:</b> {matchedImbuedItem.Structure}</div>)}
                        {matchedImbuedItem["Mana Capacity"] && (<div><b>Mana Capacity:</b> {matchedImbuedItem["Mana Capacity"]}</div>)}


                        {matchedImbuedItem.Descrizione && (
                            <div style={{paddingBottom: "20px"}}>
                                {matchedImbuedItem.Descrizione.map((desc, index) => (
                                    <p key={index}>
                                        <span dangerouslySetInnerHTML={{ __html: desc }} />
                                    </p>
                                ))}
                            </div>
                        )}
                </>
            )}
        </div>
    )
}