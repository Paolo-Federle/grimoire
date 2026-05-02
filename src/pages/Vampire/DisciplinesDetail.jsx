import React from 'react';
import BaseTable from '../../components/BaseTable';

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
                        {longDescription.map((item, index) => {
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
                    )}

                    {fullCost && fullCost !== "N/A" && (<div><b>Cost:</b> {fullCost}</div>)}
                    {matchedDiscipline.DicePool && matchedDiscipline.DicePool !== "N/A" && (<div><b>Dice Pool:</b> {matchedDiscipline.DicePool}</div>)}
                    {matchedDiscipline.Action && (<div><b>Action:</b> {matchedDiscipline.Action}</div>)}

                    {Array.isArray(matchedDiscipline?.RollResults) &&
 matchedDiscipline.RollResults.length > 0 &&
 matchedDiscipline.RollResults.some(item => item && item !== "") && (
                    <div style={{ paddingBottom: "20px", paddingTop: "20px" }}>
                        {matchedDiscipline?.RollResults.map((item, index) => {
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
                    )}
                    {matchedDiscipline?.Bloodline && matchedDiscipline?.Bloodline !== "N/A" && (<div><b>Bloodline:</b> {matchedDiscipline?.Bloodline}</div>)}
                    {matchedDiscipline.Book && matchedDiscipline.Book !== "N/A" && (<div><b>Book:</b> {matchedDiscipline.Book}</div>)}
                </>
            )
            }
        </div >
    )
}
