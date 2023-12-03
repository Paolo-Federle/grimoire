import React, { useEffect, useState } from 'react';
import LegacyData from '../../Data/Mage/LegacyData';
import { useLocation } from 'react-router-dom';

export default function LegacyDetail() {
    const location = useLocation();
    const [matchedObject, setMatchedObject] = useState(null);

    useEffect(() => {
        // Extracting the matchedObject.Nome from the URL
        const currentURL = window.location.href;
        const parts = currentURL.split('/'); // Split the URL by '/'
        const lastPart = parts[parts.length - 1]; // Get the last part of the URL

        const matchedObjectName = lastPart.replace(/_/g, ' ');

        // Finding the object from LegacyData based on the Nome field
        const matched = LegacyData.find(obj => obj.Nome === matchedObjectName);

        if (matched) {
            setMatchedObject(matched);
        }
    }, [location]);

    return (
        <div>
            {matchedObject && (
                <html>
                    <h1 style={{ marginBottom: '10px' }}>{matchedObject.Nome}</h1>
                    <body style={{ backgroundColor: '#f7f7f7', color: '#333333', overflow: 'hidden' }}>
                        <div style={{ display: 'flex' }}>
                            <div style={{ width: '600px', marginRight: '20px', overflowY: 'scroll', height: '96vh', margin: '10px' }}>

                                {matchedObject.descrizione && <p dangerouslySetInnerHTML={{ __html: matchedObject.descrizione }} />}
                                {matchedObject.Cammino && matchedObject.Cammino.some(item => item.trim() !== '') && (
                                    <p>
                                        <b>Path:</b> {matchedObject.Cammino.join(', ')}
                                    </p>
                                )}
                                {matchedObject.Ordine && matchedObject.Ordine.some(item => item.trim() !== '') && (
                                    <p>
                                        <b>Order:</b> {matchedObject.Ordine.join(', ')}
                                    </p>
                                )}
                                {matchedObject.alternateNickname && <p><b>Nickname:</b> <span dangerouslySetInnerHTML={{ __html: matchedObject.alternateNickname }} /></p>}
                                {matchedObject.appearance && <p><b>Appearance:</b> <span dangerouslySetInnerHTML={{ __html: matchedObject.appearance }} /></p>}
                                {matchedObject.background && <p><b>Background:</b> <span dangerouslySetInnerHTML={{ __html: matchedObject.background }} /></p>}
                                {matchedObject.characterCreation && <p><b>Character Creation:</b> <span dangerouslySetInnerHTML={{ __html: matchedObject.characterCreation }} /></p>}
                                {matchedObject.organizzation && <p><b>Organizzation:</b> <span dangerouslySetInnerHTML={{ __html: matchedObject.organizzation }} /></p>}
                                {matchedObject.suggestedOblations && <p><b>Suggested Oblations:</b> <span dangerouslySetInnerHTML={{ __html: matchedObject.suggestedOblations }} /></p>}
                                {matchedObject.concepts && <p><b>Concepts:</b><span dangerouslySetInnerHTML={{ __html: matchedObject.concepts }} /> </p>}
                                {matchedObject.historySocietyCulture && <p><span dangerouslySetInnerHTML={{ __html: matchedObject.historySocietyCulture }} /></p>}
                                {matchedObject.magic && <p><span dangerouslySetInnerHTML={{ __html: matchedObject.magic }} /></p>}
                            </div>
                            <div style={{ width: '600px', overflowY: 'scroll', height: '96vh', margin: '10px' }}>
                                {matchedObject.attainmentsDescrizione && (
                                    <p>
                                        <h2 style={{ marginBottom: '10px' }}>Attainments</h2> <span dangerouslySetInnerHTML={{ __html: matchedObject.attainmentsDescrizione }} />
                                    </p>
                                )}
                                {matchedObject.firstAttainmentName && <h3 style={{ marginBottom: '0' }} dangerouslySetInnerHTML={{ __html: matchedObject.firstAttainmentName }} />}
                                {matchedObject.firstAttainmentPrerequisites && <div><b>Prerequisites:</b> <span dangerouslySetInnerHTML={{ __html: matchedObject.firstAttainmentPrerequisites }} /></div>}
                                {matchedObject.firstAttainmentDescription && <div dangerouslySetInnerHTML={{ __html: matchedObject.firstAttainmentDescription }} />}
                                {matchedObject.firstAttainmentOptArcana && <div><b>Optional Arcanum:</b> <span dangerouslySetInnerHTML={{ __html: matchedObject.firstAttainmentOptArcana }} /></div>}
                                {matchedObject.firstAttainmentOptDescrizione && <div dangerouslySetInnerHTML={{ __html: matchedObject.firstAttainmentOptDescrizione }} />}
                                {matchedObject.secondAttainmentName && <h3 style={{ marginBottom: '0' }} dangerouslySetInnerHTML={{ __html: matchedObject.secondAttainmentName }} />}
                                {matchedObject.secondAttainmentPrerequisites && <div><b>Prerequisites:</b> <span dangerouslySetInnerHTML={{ __html: matchedObject.secondAttainmentPrerequisites }} /></div>}
                                {matchedObject.secondAttainmentDescription && <div dangerouslySetInnerHTML={{ __html: matchedObject.secondAttainmentDescription }} />}
                                {matchedObject.secondAttainmentOptArcana && <div><b>Optional Arcanum:</b> <span dangerouslySetInnerHTML={{ __html: matchedObject.secondAttainmentOptArcana }} /></div>}
                                {matchedObject.secondAttainmentOptDescrizione && <div dangerouslySetInnerHTML={{ __html: matchedObject.secondAttainmentOptDescrizione }} />}
                                {matchedObject.thirdAttainmentName && <h3 style={{ marginBottom: '0' }} dangerouslySetInnerHTML={{ __html: matchedObject.thirdAttainmentName }} />}
                                {matchedObject.thirdAttainmentPrerequisites && <div><b>Prerequisites:</b> <span dangerouslySetInnerHTML={{ __html: matchedObject.thirdAttainmentPrerequisites }} /></div>}
                                {matchedObject.thirdAttainmentDescription && <div dangerouslySetInnerHTML={{ __html: matchedObject.thirdAttainmentDescription }} />}
                                {matchedObject.thirdAttainmentOptArcana && <div><b>Optional Arcanum:</b> <span dangerouslySetInnerHTML={{ __html: matchedObject.thirdAttainmentOptArcana }} /></div>}
                                {matchedObject.thirdAttainmentOptDescrizione && <div dangerouslySetInnerHTML={{ __html: matchedObject.thirdAttainmentOptDescrizione }} />}
                                <br />
                            </div>
                        </div>
                    </body>
                </html>
            )}
        </div>
    );
}