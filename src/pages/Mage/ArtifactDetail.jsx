import React from 'react';
import ContentBlockList from '../../components/ContentBlockList';

export default function ArtifactDetail(props) {
    const matchedArtifact = props.artifact

    return (
        <div className='longTextContainer'>
            {matchedArtifact && (
                <>
                        <h1>{matchedArtifact.Name} (Rank {matchedArtifact["Artifact_Level"]})</h1>

                        {matchedArtifact.Durability && (<div><b>Durability:</b> {matchedArtifact.Durability}</div>)}
                        {matchedArtifact.Size && (<div><b>Size:</b> {matchedArtifact.Size}</div>)}
                        {matchedArtifact.Structure && (<div><b>Structure:</b> {matchedArtifact.Structure}</div>)}
                        {matchedArtifact["Mana Capacity"] && (<div><b>Mana Capacity:</b> {matchedArtifact["Mana Capacity"]}</div>)}


                        {matchedArtifact.Descrizione && (
                            <div style={{paddingBottom: "20px"}}>
                                <ContentBlockList content={matchedArtifact.Descrizione} />
                            </div>
                        )}
                </>
            )}
        </div>
    )
}
