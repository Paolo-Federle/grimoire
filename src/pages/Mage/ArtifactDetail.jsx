import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function ArtifactDetail(props) {
    const location = useLocation();
    const matchedArtifact = props.artifact

    return (
        <div className='longTextContainer'>
            {matchedArtifact && (
                <>
                        <h1>{matchedArtifact.Nome} (Artifact Rank {matchedArtifact["Artifact Level"]})</h1>

                        {matchedArtifact.Durability && (<div><b>Durability:</b> {matchedArtifact.Durability}</div>)}
                        {matchedArtifact.Size && (<div><b>Size:</b> {matchedArtifact.Size}</div>)}
                        {matchedArtifact.Structure && (<div><b>Structure:</b> {matchedArtifact.Structure}</div>)}
                        {matchedArtifact["Mana Capacity"] && (<div><b>Mana Capacity:</b> {matchedArtifact["Mana Capacity"]}</div>)}


                        {matchedArtifact.Descrizione && (
                            <div style={{paddingBottom: "20px"}}>
                                {matchedArtifact.Descrizione.map((desc, index) => (
                                    <p key={index}>
                                        <span dangerouslySetInnerHTML={{ __html: desc }} />
                                    </p>
                                ))}
                            </div>
                        )}
                </>
            )}
        </div>
    )
}