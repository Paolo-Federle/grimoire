import React from 'react';
import { BookLink } from '../../components/BookLink';
import ContentBlockList from '../../components/ContentBlockList';

export default function LocationDetail(props) {
    const matchedLocation = props.location
    return (
        <div className='longTextContainer' >
            {matchedLocation && (
                <>
                        <h1>
                            {matchedLocation.Name}
                            {matchedLocation.Dots && matchedLocation.Dots !== "N/A" && ` ${matchedLocation.Dots}`}
                        </h1>
                        {matchedLocation.Prerequisites && (<div><b>Prerequisites:</b> {matchedLocation.Prerequisites}</div>)}

                        <ContentBlockList content={matchedLocation.LongDescription} />
                        {matchedLocation.Book && matchedLocation.Book  !== "N/A" && (<div><b>Book:</b> {BookLink(matchedLocation.Book)}</div>)}
                </>
            )
            }
        </div >
    )
}
