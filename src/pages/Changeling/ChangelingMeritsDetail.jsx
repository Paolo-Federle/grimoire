import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import BaseTable from '../../components/BaseTable';

export default function ChangelingMeritsDetail(props) {
    const location = useLocation();
    const matchedMerits = props.merits
    console.log('matchedMerits', matchedMerits)

    return (
        <div className='longTextContainer'>
            {matchedMerits && (
                <>
                    <h1>
                        {matchedMerits.Name}
                        {matchedMerits.Cost && ` (${matchedMerits.Cost})`}
                    </h1>

                    <div style={{ paddingBottom: "20px" }}>
                        {matchedMerits.LongDescription.map((item, index) => {

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

                    {matchedMerits.Book && (<div><b>Book:</b> {matchedMerits.Book}</div>)}
                </>
            )
            }
        </div >
    )
}