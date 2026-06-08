import React from 'react';
import ContentBlockList from '../../components/ContentBlockList';

export default function ImbueItemDetail(props) {
    const matchedImbuedItem = props.imbuedItem


    return (
        <div className='longTextContainer'>
            {matchedImbuedItem && (
                <>
                        <h1>{matchedImbuedItem.Nome} (Rank {matchedImbuedItem["Item_Level"]})</h1>

                        {matchedImbuedItem.Durability && (<div><b>Durability:</b> {matchedImbuedItem.Durability}</div>)}
                        {matchedImbuedItem.Size && (<div><b>Size:</b> {matchedImbuedItem.Size}</div>)}
                        {matchedImbuedItem.Structure && (<div><b>Structure:</b> {matchedImbuedItem.Structure}</div>)}
                        {matchedImbuedItem["Mana Capacity"] && (<div><b>Mana Capacity:</b> {matchedImbuedItem["Mana Capacity"]}</div>)}


                        {matchedImbuedItem.Descrizione && (
                            <div style={{paddingBottom: "20px"}}>
                                <ContentBlockList content={matchedImbuedItem.Descrizione} />
                            </div>
                        )}
                </>
            )}
        </div>
    )
}
