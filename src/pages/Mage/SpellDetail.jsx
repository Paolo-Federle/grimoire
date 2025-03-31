import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function SpellDetail(props) {
    const location = useLocation();
    const matchedSpell = props.spell

    function generateTable(data) {
        if (!Array.isArray(data) || data.length === 0) {
            return '';
        }
    
        const headers = data[0];
        const rows = data.slice(1);
    
        let tableHTML = '<table class="table-auto border-collapse border border-gray-300 w-full text-sm text-left">';
        tableHTML += '<thead><tr class="bg-gray-100">';
    
        for (const header of headers) {
            tableHTML += `<th class="border border-gray-300 px-4 py-2 font-medium text-gray-700">${header}</th>`;
        }
    
        tableHTML += '</tr></thead><tbody>';
    
        for (const row of rows) {
            tableHTML += '<tr>';
    
            for (const cell of row) {
                tableHTML += `<td class="border border-gray-300 px-4 py-2">${cell}</td>`;
            }
    
            tableHTML += '</tr>';
        }
    
        tableHTML += '</tbody></table>';
    
        return tableHTML;
    }    

    function replacePlaceholders(text) {
        const tablePlaceholders = ['[TABLE1]', '[TABLE2]', '[TABLE3]', '[TABLE4]']; // Add more if needed

        for (const placeholder of tablePlaceholders) {
            if (text.includes(placeholder)) {
                const placeholderIndex = tablePlaceholders.indexOf(placeholder);
                const tableData = matchedSpell.Tables[placeholderIndex].Data;
                const tableHTML = generateTable(tableData);
                text = text.replace(placeholder, tableHTML);
            }
        }

        return text;
    }


    return (
        <div className='longTextContainer'>
            {matchedSpell && (
                <>
                        <h1>{matchedSpell.Titolo} ({matchedSpell.Arcana})</h1>

                        {matchedSpell.DescrizioneAlta && <p> <span dangerouslySetInnerHTML={{ __html: matchedSpell.DescrizioneAlta }} /></p>}
                        {matchedSpell.Practice && <div><b>Practice:</b> <span dangerouslySetInnerHTML={{ __html: matchedSpell.Practice }} /></div>}
                        {matchedSpell.Action && <div><b>Action:</b> <span dangerouslySetInnerHTML={{ __html: matchedSpell.Action }} /></div>}
                        {matchedSpell.Duration && <div><b>Duration:</b> <span dangerouslySetInnerHTML={{ __html: matchedSpell.Duration }} /></div>}
                        {matchedSpell.Aspect && <div><b>Aspect:</b> <span dangerouslySetInnerHTML={{ __html: matchedSpell.Aspect }} /></div>}
                        {matchedSpell.Cost && <div><b>Cost:</b> <span dangerouslySetInnerHTML={{ __html: matchedSpell.Cost }} /></div>}
                        {matchedSpell.DescrizioneMiddle && <div><span dangerouslySetInnerHTML={{ __html: replacePlaceholders(matchedSpell.DescrizioneMiddle) }} /></div>}
                        <p>{matchedSpell.RoteName && <b><span dangerouslySetInnerHTML={{ __html: matchedSpell.RoteName }} /></b>}<br />
                            {matchedSpell.RoteDice && <span dangerouslySetInnerHTML={{ __html: matchedSpell.RoteDice }} />}</p>
                        {matchedSpell.RoteDescrizione && <p> <span dangerouslySetInnerHTML={{ __html: matchedSpell.RoteDescrizione }} /></p>}
                        {matchedSpell.Book && (<div><b>Book:</b> {matchedSpell.Book}</div>)}
                </>
            )}
        </div>
    )
}