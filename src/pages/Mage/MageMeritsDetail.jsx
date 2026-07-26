import React from 'react';
import { BookLink } from '../../components/BookLink';
import ContentBlockList from '../../components/ContentBlockList';

export default function MageMeritsDetail(props) {
    const matchedMerit = props.merits

    return (
        <div className='longTextContainer'>
            {matchedMerit && (
                <>
                        <h1>{matchedMerit.Name} ({matchedMerit.Rating})</h1>
                        {matchedMerit.Prerequisites && (<div><b>Prerequisites:</b> {matchedMerit.Prerequisites}</div>)}
                        {matchedMerit.LongDescription && (
                            <div style={{ paddingBottom: "20px" }}>
                                <ContentBlockList content={matchedMerit.LongDescription} />
                            </div>
                        )}
                        {matchedMerit.Book && (<div><b>Book:</b> {BookLink(matchedMerit.Book)}</div>)}
                </>
            )}
        </div>
    )
}
