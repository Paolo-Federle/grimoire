import React from 'react';
import { BookLink } from '../../components/BookLink';
import ContentBlockList from '../../components/ContentBlockList';
import { InlineContent } from '../../components/StructuredContent';

export default function NuminaDetail(props) {
    const matchedNumina = props.numina

    return (
        <div className='longTextContainer'>
            {matchedNumina && (
                <>
                        <h1 style={{ marginBottom: '10px' }}>{matchedNumina.Name}</h1>
                        {matchedNumina.Page && (<div><b>Book:</b> {BookLink(matchedNumina.Page)}</div>)}
                        {matchedNumina.descrizione && <p><InlineContent content={matchedNumina.descrizione} /></p>}

                        <ContentBlockList content={matchedNumina['Long Description']} />

                        <br />
                </>
            )}
        </div>
    );
}
