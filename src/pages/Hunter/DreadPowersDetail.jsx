import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function DreadPowerDetail(props) {
    const location = useLocation();
    const matchedDreadPower = props.dreadPowers
console.log('matchedDreadPower', matchedDreadPower)

    return (
        <div className='longTextContainer'>
            {matchedDreadPower && (
                <>
                        <h1>{matchedDreadPower.Name} ({matchedDreadPower.Rank})</h1>

                        {matchedDreadPower.FullCost && (<div><b>Cost:</b> {matchedDreadPower.FullCost}</div>)}
                        {matchedDreadPower.Action && (<div><b>Action:</b> {matchedDreadPower.Action}</div>)}
                        {matchedDreadPower.DicePool && (<div><b>Dice Pool:</b> {matchedDreadPower.DicePool}</div>)}

                        {matchedDreadPower.Effect && (
                            <div style={{paddingBottom: "20px"}}>
                                {matchedDreadPower.Effect.map((effect, index) => (
                                    <p key={index}>
                                        <span dangerouslySetInnerHTML={{ __html: effect }} />
                                    </p>
                                ))}
                            </div>
                        )}
                        {matchedDreadPower.Book && (<div><b>Book:</b> {matchedDreadPower.Book}</div>)}
                </>
            )}
        </div>
    )
}