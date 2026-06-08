import React from 'react';
import { BookLink } from '../../components/BookLink';
import StructuredContent, { InlineContent } from '../../components/StructuredContent';

export default function TokensDetail(props) {
    const matchedToken = props.tokens

    const hasContent = (desc) => typeof desc === 'string' ? desc.trim() !== "" : Boolean(desc);

    const renderContent = (desc, index, label = '') => {
        const hasStructuredContent = desc && typeof desc === 'object';

        if (hasStructuredContent) {
            return (
                <div key={index}>
                    {label && <b>{label}: </b>}
                    <StructuredContent content={desc} />
                </div>
            );
        }

        return (
            <p key={index}>
                {label && <b>{label}: </b>}
                <InlineContent content={desc} prefix={`token-${label || 'description'}-${index}`} />
            </p>
        );
    };

    return (
        <div className='longTextContainer'>
            {matchedToken && (
                <>
                    <h1>
                        {matchedToken.Name}
                        {matchedToken.Rank && matchedToken.Rank !== "N/A" && ` (${matchedToken.Rank})`}
                    </h1>


                    {matchedToken.fullDescription && (
                        <div >
                            {matchedToken.fullDescription.map((desc, index) => renderContent(desc, index))}
                        </div>
                    )}
                    {matchedToken.Action && (<div ><b>Action:</b> {matchedToken.Action}</div>)}
                    {matchedToken.Mien && matchedToken.Mien.some(hasContent) && (
                        <div >
                            {matchedToken.Mien.map((desc, index) => renderContent(desc, index, 'Mien'))}
                        </div>
                    )}
                    {matchedToken.fullDrawback && (
                        <div >
                            {matchedToken.fullDrawback.map((desc, index) => renderContent(desc, index, 'Drawback'))}
                        </div>
                    )}
                    {matchedToken.fullCatch && matchedToken.fullCatch.some(hasContent) && (
                        <div >
                            {matchedToken.fullCatch.map((desc, index) => renderContent(desc, index, 'Catch'))}
                        </div>
                    )}
                    {matchedToken.Book && matchedToken.Book !== "N/A" && (<div><b>Book:</b> {BookLink(matchedToken.Book)}</div>)}
                </>
            )
            }
        </div >
    )
}
