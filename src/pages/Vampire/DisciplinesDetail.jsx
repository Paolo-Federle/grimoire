import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import BaseTable from '../../components/BaseTable';

export default function DisciplinesDetail(props) {
    const location = useLocation();
    const matchedDiscipline = props.discipline


    return (
        <div className='longTextContainer'>
            {matchedDiscipline && (
                <>
                    <h1>
                        {matchedDiscipline.Name}
                        {matchedDiscipline.Rank && matchedDiscipline.Rank !== "N/A" && ` (${matchedDiscipline?.Discipline} ${matchedDiscipline.Rank})`}
                    </h1>

                    <div style={{ paddingBottom: "20px" }}>
                        {matchedDiscipline.LongDescription.map((item, index) => {
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

                    {matchedDiscipline.FullCost && matchedDiscipline.FullCost !== "N/A" && (<div><b>Cost:</b> {matchedDiscipline.FullCost}</div>)}
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