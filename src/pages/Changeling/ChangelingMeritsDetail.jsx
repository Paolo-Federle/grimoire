import React from 'react';
import { BookLink } from '../../components/BookLink';
import ContentBlockList from '../../components/ContentBlockList';

export default function ChangelingMeritsDetail(props) {
    const matchedMerits = props.merits

    return (
        <div className='longTextContainer'>
            {matchedMerits && (
                <>
                    <h1>
                        {matchedMerits.Name}
                        {matchedMerits.Cost && ` (${matchedMerits.Cost})`}
                    </h1>

                    <div style={{ paddingBottom: "20px" }}>
                        <ContentBlockList content={matchedMerits.LongDescription} />
                    </div>

                    {matchedMerits.Book && (<div><b>Book:</b> {BookLink(matchedMerits.Book)}</div>)}
                </>
            )
            }
        </div >
    )
}
