import React from 'react';

export default function UniversalMeritsDetail(props) {
    const matchedMerit = props.merits
    return (
        <div className='longTextContainer'>
            {matchedMerit && (
                <>
                        <h1>{matchedMerit.Name} ({matchedMerit.Rating})</h1>
                        {matchedMerit.Prerequisites && (<div><b>Prerequisites:</b> {matchedMerit.Prerequisites}</div>)}
                        {matchedMerit.LongDescription && (
                            <div style={{ paddingBottom: "20px" }}>
                                {matchedMerit.LongDescription.map((desc, index) => (
                                    <p key={index}>
                                        <span dangerouslySetInnerHTML={{ __html: desc }} />
                                    </p>
                                ))}
                            </div>
                        )}
                        {matchedMerit.Book && (<div><b>Book:</b> {matchedMerit.Book}</div>)}
                </>
            )}
        </div>
    )
}
