import React from 'react';
import { BookLink } from '../../components/BookLink';
import ContentBlockList from '../../components/ContentBlockList';

export default function DisciplinesDetail(props) {
    const matchedDiscipline = props.discipline
    const longDescription = matchedDiscipline?.LongDescription || matchedDiscipline?.longDescription || [];
    const fullCost = matchedDiscipline?.FullCost || matchedDiscipline?.fullCost;


    return (
        <div className='longTextContainer'>
            {matchedDiscipline && (
                <>
                    <h1>
                        {matchedDiscipline.Name}
                        {matchedDiscipline.Rank && matchedDiscipline.Rank !== "N/A" && ` (${matchedDiscipline?.Discipline} ${matchedDiscipline.Rank})`}
                    </h1>

                    {longDescription.length > 0 && (
                    <div style={{ paddingBottom: "20px" }}>
                        <ContentBlockList content={longDescription} />
                    </div>
                    )}

                    {fullCost && fullCost !== "N/A" && (<div><b>Cost:</b> {fullCost}</div>)}
                    {matchedDiscipline.DicePool && matchedDiscipline.DicePool !== "N/A" && (<div><b>Dice Pool:</b> {matchedDiscipline.DicePool}</div>)}
                    {matchedDiscipline.Action && (<div><b>Action:</b> {matchedDiscipline.Action}</div>)}

                    {Array.isArray(matchedDiscipline?.RollResults) &&
 matchedDiscipline.RollResults.length > 0 &&
 matchedDiscipline.RollResults.some(item => item && item !== "") && (
                    <div style={{ paddingBottom: "20px", paddingTop: "20px" }}>
                        <ContentBlockList content={matchedDiscipline.RollResults} />
                    </div>
                    )}
                    {matchedDiscipline?.Bloodline && matchedDiscipline?.Bloodline !== "N/A" && (<div><b>Bloodline:</b> {matchedDiscipline?.Bloodline}</div>)}
                    {matchedDiscipline.Book && matchedDiscipline.Book !== "N/A" && (<div><b>Book:</b> {BookLink(matchedDiscipline.Book)}</div>)}
                </>
            )
            }
        </div >
    )
}
