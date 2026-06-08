import React from 'react';
import { BookLink } from '../../components/BookLink';
import ContentBlockList from '../../components/ContentBlockList';

export default function DreadPowerDetail(props) {
    const matchedDreadPower = props.dreadPowers
    return (
        <div className='longTextContainer'>
            {matchedDreadPower && (
                <>
                    <h1>{matchedDreadPower.Name} ({matchedDreadPower.Rank})</h1>

                    {matchedDreadPower.FullCost && (<div><b>Cost:</b> {matchedDreadPower.FullCost}</div>)}
                    {matchedDreadPower.Action && (<div><b>Action:</b> {matchedDreadPower.Action}</div>)}
                    {matchedDreadPower.DicePool && (<div><b>Dice Pool:</b> {matchedDreadPower.DicePool}</div>)}

                    <div style={{ paddingBottom: "20px" }}>
                        <ContentBlockList content={matchedDreadPower.Effect} />
                    </div>
                    {matchedDreadPower.Book && (<div><b>Book:</b> {BookLink(matchedDreadPower.Book)}</div>)}
                </>
            )}
        </div>
    )
}
