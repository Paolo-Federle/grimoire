import React from 'react';
import { BookLink } from '../../components/BookLink';

export default function NuminaDetail(props) {
    const matchedNumina = props.numina

    return (
        <div className='longTextContainer'>
            {matchedNumina && (
                <>
                        <h1 style={{ marginBottom: '10px' }}>{matchedNumina.Name}</h1>
                        {matchedNumina.Page && (<div><b>Book:</b> {BookLink(matchedNumina.Page)}</div>)}
                        {matchedNumina.descrizione && <p dangerouslySetInnerHTML={{ __html: matchedNumina.descrizione }} />}

                        {matchedNumina['Long Description'].map((description, index) => (
                            <p key={index} dangerouslySetInnerHTML={{ __html: description }} />
                        ))}

                        <br />
                </>
            )}
        </div>
    );
}
