import React from 'react';
import { useLocation } from 'react-router-dom';
import BaseTable from '../../components/BaseTable';

export default function LocationDetail(props) {
    const location = useLocation();
    const matchedLocation = props.location

    console.log(matchedLocation)

    return (
        <div className='longTextContainer' >
            {matchedLocation && (
                <>
                        <h1>
                            {matchedLocation.Name}
                            {matchedLocation.Dots && matchedLocation.Dots !== "N/A" && ` ${matchedLocation.Dots}`}
                        </h1>
                        {matchedLocation.Prerequisites && (<div><b>Prerequisites:</b> {matchedLocation.Prerequisites}</div>)}

                        {matchedLocation.LongDescription.map((item, index) => {
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
                        {matchedLocation.Book && matchedLocation.Book  !== "N/A" && (<div><b>Book:</b> {matchedLocation.Book}</div>)}
                </>
            )
            }
        </div >
    )
}