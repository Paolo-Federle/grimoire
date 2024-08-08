import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function NuminaDetail(props) {
    const location = useLocation();
    const matchedNumina = props.numina

    return (
        <div>
            {matchedNumina && (
                <>
                    <div style={{ margin: '20px', width: '1000px' }}>
                        <h1 style={{ marginBottom: '10px' }}>{matchedNumina.Name}</h1>
                        {matchedNumina.Page && (<div><b>Book:</b> {matchedNumina.Page}</div>)}
                        {matchedNumina.descrizione && <p dangerouslySetInnerHTML={{ __html: matchedNumina.descrizione }} />}

                        {matchedNumina['Long Description'].map((description, index) => (
                            <p key={index} dangerouslySetInnerHTML={{ __html: description }} />
                        ))}

                        <br />
                    </div>
                </>
            )}
        </div>
    );
}