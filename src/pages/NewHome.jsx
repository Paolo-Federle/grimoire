import React from 'react';
import TableComponent from '../components/TableComponent';



export default function NewHome() {
    const subjectAreasHeadings = ['Subject Areas'];
    const subjectAreasRows = [
        [
            <a href="/wiki/Skills" title="Skills">Skills</a>,
            <a href="/wiki/Category:Advantages" title="Category:Advantages">Advantages</a>,
            <a href="/wiki/Category:Equipment" title="Category:Equipment">Equipment</a>,
            <a href="/wiki/Category:NPCs" title="Category:NPCs">NPCs</a>,
            // ...other subject areas
        ],
        // Add more rows as needed
    ];

    const gamelinePortalsHeadings = ['Gameline Portals'];
    const gamelinePortalsRows = [
        [
            <a href="/wiki/Mortals_and_Lesser_Templates" title="Mortals and Lesser Templates">
                Mortals and Lesser Templates
            </a>,
            <a href="/vampire" title="Vampire: the Requiem">Vampire: the Requiem</a>,
            // ...other gameline portals
        ],
        // Add more rows as needed
    ];

    return (
        <div className='center-vertically'>
            <div id="mw-content-text" className="mw-body-content mw-content-ltr " lang="en" dir="ltr">
                <div className="mw-parser-output">
                    <div className="flex-row">
                        <TableComponent headings={subjectAreasHeadings} rows={subjectAreasRows} />
                        <TableComponent headings={gamelinePortalsHeadings} rows={gamelinePortalsRows} />
                    </div>
                </div>
            </div>
        </div>
    );
}
