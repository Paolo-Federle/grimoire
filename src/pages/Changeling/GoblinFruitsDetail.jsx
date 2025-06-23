import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import BaseTable from '../../components/BaseTable';

export default function GoblinFruitsDetail(props) {
    const location = useLocation();
    const matchedGoblinFruit = props.goblinFruit

    return (
        <div className='longTextContainer'>
            {matchedGoblinFruit && (
                <>
                    <h1>
                        {matchedGoblinFruit.Name}
                    </h1>

                    <div style={{ paddingBottom: "20px" }}>
                        {matchedGoblinFruit.LongDescription.map((item, index) => {

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

                    {matchedGoblinFruit.Book && (<div><b>Book:</b> {matchedGoblinFruit.Book}</div>)}
                </>
            )
            }
        </div >
    )
}