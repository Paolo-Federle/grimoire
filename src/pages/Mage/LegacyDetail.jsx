import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function LegacyDetail(props) {
    const location = useLocation();
    const matchedLegacy = props.legacy

    return (
        <div>
            {matchedLegacy && (
                <>
                    <h1 style={{ marginBottom: '10px' }}>{matchedLegacy.Nome}</h1>
                    <div style={{ overflow: 'hidden' }}>
                        <div style={{ display: 'flex' }}>
                            <div style={{ width: '600px', marginRight: '20px', overflowY: 'scroll', height: '96vh', margin: '10px' }}>

                                {matchedLegacy.descrizione && <p dangerouslySetInnerHTML={{ __html: matchedLegacy.descrizione }} />}
                                {matchedLegacy.Cammino && matchedLegacy.Cammino.some(item => item.trim() !== '') && (
                                    <p>
                                        <b>Path:</b> {matchedLegacy.Cammino.join(', ')}
                                    </p>
                                )}
                                {matchedLegacy.Ordine && matchedLegacy.Ordine.some(item => item.trim() !== '') && (
                                    <p>
                                        <b>Order:</b> {matchedLegacy.Ordine.join(', ')}
                                    </p>
                                )}
                                {matchedLegacy.alternateNickname && <p><b>Nickname:</b> <span dangerouslySetInnerHTML={{ __html: matchedLegacy.alternateNickname }} /></p>}
                                {matchedLegacy.appearance && <p><b>Appearance:</b> <span dangerouslySetInnerHTML={{ __html: matchedLegacy.appearance }} /></p>}
                                {matchedLegacy.background && <p><b>Background:</b> <span dangerouslySetInnerHTML={{ __html: matchedLegacy.background }} /></p>}
                                {matchedLegacy.characterCreation && <p><b>Character Creation:</b> <span dangerouslySetInnerHTML={{ __html: matchedLegacy.characterCreation }} /></p>}
                                {matchedLegacy.organizzation && <p><b>Organizzation:</b> <span dangerouslySetInnerHTML={{ __html: matchedLegacy.organizzation }} /></p>}
                                {matchedLegacy.suggestedOblations && <p><b>Suggested Oblations:</b> <span dangerouslySetInnerHTML={{ __html: matchedLegacy.suggestedOblations }} /></p>}
                                {matchedLegacy.concepts && <p><b>Concepts:</b><span dangerouslySetInnerHTML={{ __html: matchedLegacy.concepts }} /> </p>}
                                {matchedLegacy.historySocietyCulture && <p><span dangerouslySetInnerHTML={{ __html: matchedLegacy.historySocietyCulture }} /></p>}
                                {matchedLegacy.magic && <p><span dangerouslySetInnerHTML={{ __html: matchedLegacy.magic }} /></p>}
                            </div>
                            <div style={{ width: '600px', overflowY: 'scroll', height: '96vh', margin: '10px' }}>
                                {matchedLegacy.attainmentsDescrizione && (
                                    <p>
                                        <h2 style={{ marginBottom: '10px' }}>Attainments</h2> <span dangerouslySetInnerHTML={{ __html: matchedLegacy.attainmentsDescrizione }} />
                                    </p>
                                )}
                                {matchedLegacy.firstAttainmentName && <h3 style={{ marginBottom: '0' }} dangerouslySetInnerHTML={{ __html: matchedLegacy.firstAttainmentName }} />}
                                {matchedLegacy.firstAttainmentPrerequisites && <div><b>Prerequisites:</b> <span dangerouslySetInnerHTML={{ __html: matchedLegacy.firstAttainmentPrerequisites }} /></div>}
                                {matchedLegacy.firstAttainmentDescription && <div dangerouslySetInnerHTML={{ __html: matchedLegacy.firstAttainmentDescription }} />}
                                {matchedLegacy.firstAttainmentOptArcana && <div><b>Optional Arcanum:</b> <span dangerouslySetInnerHTML={{ __html: matchedLegacy.firstAttainmentOptArcana }} /></div>}
                                {matchedLegacy.firstAttainmentOptDescrizione && <div dangerouslySetInnerHTML={{ __html: matchedLegacy.firstAttainmentOptDescrizione }} />}
                                {matchedLegacy.secondAttainmentName && <h3 style={{ marginBottom: '0' }} dangerouslySetInnerHTML={{ __html: matchedLegacy.secondAttainmentName }} />}
                                {matchedLegacy.secondAttainmentPrerequisites && <div><b>Prerequisites:</b> <span dangerouslySetInnerHTML={{ __html: matchedLegacy.secondAttainmentPrerequisites }} /></div>}
                                {matchedLegacy.secondAttainmentDescription && <div dangerouslySetInnerHTML={{ __html: matchedLegacy.secondAttainmentDescription }} />}
                                {matchedLegacy.secondAttainmentOptArcana && <div><b>Optional Arcanum:</b> <span dangerouslySetInnerHTML={{ __html: matchedLegacy.secondAttainmentOptArcana }} /></div>}
                                {matchedLegacy.secondAttainmentOptDescrizione && <div dangerouslySetInnerHTML={{ __html: matchedLegacy.secondAttainmentOptDescrizione }} />}
                                {matchedLegacy.thirdAttainmentName && <h3 style={{ marginBottom: '0' }} dangerouslySetInnerHTML={{ __html: matchedLegacy.thirdAttainmentName }} />}
                                {matchedLegacy.thirdAttainmentPrerequisites && <div><b>Prerequisites:</b> <span dangerouslySetInnerHTML={{ __html: matchedLegacy.thirdAttainmentPrerequisites }} /></div>}
                                {matchedLegacy.thirdAttainmentDescription && <div dangerouslySetInnerHTML={{ __html: matchedLegacy.thirdAttainmentDescription }} />}
                                {matchedLegacy.thirdAttainmentOptArcana && <div><b>Optional Arcanum:</b> <span dangerouslySetInnerHTML={{ __html: matchedLegacy.thirdAttainmentOptArcana }} /></div>}
                                {matchedLegacy.thirdAttainmentOptDescrizione && <div dangerouslySetInnerHTML={{ __html: matchedLegacy.thirdAttainmentOptDescrizione }} />}
                                <br />
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}