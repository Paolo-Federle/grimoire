import React from 'react';
import { BookLink } from '../../components/BookLink';
import ContentBlockList from '../../components/ContentBlockList';

export default function DevotionsDetail(props) {
    const matchedDevotion = props.devotion
    return (
        <div className='longTextContainer'>
            {matchedDevotion && (
                <>
                    <h1>
                        {matchedDevotion.Name}
                        {matchedDevotion.Prerequisites && ` (${matchedDevotion?.Prerequisites})`}
                    </h1>

                    
                    {matchedDevotion.FullCost && matchedDevotion.FullCost !== "N/A" && (<div><b>Cost:</b> {matchedDevotion.FullCost}</div>)}
                    {matchedDevotion.DiceRoll && matchedDevotion.DiceRoll !== "N/A" && (<div><b>Dice Pool:</b> {matchedDevotion.DiceRoll}</div>)}
                    {matchedDevotion.Action && (<div><b>Action:</b> {matchedDevotion.Action}</div>)}

                    <div style={{ paddingBottom: "20px" }}>
                        <ContentBlockList content={matchedDevotion.FullDescription} />
                    </div>
                   
                    {matchedDevotion.Book && matchedDevotion.Book !== "N/A" && (<div><b>Book:</b> {BookLink(matchedDevotion.Book)}</div>)}
                </>
            )
            }
        </div >
    )
}
