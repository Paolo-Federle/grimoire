import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import BaseTable from '../../components/BaseTable';

export default function DevotionsDetail(props) {
    const location = useLocation();
    const matchedDevotion = props.devotion

    console.log('test discipline', matchedDevotion)

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
                        {matchedDevotion.FullDescription.map((item, index) => {
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
                   
                    {matchedDevotion.Book && matchedDevotion.Book !== "N/A" && (<div><b>Book:</b> {matchedDevotion.Book}</div>)}
                </>
            )
            }
        </div >
    )
}