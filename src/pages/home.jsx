import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css';

export default function Home() {
    return (
        <>
            <div className="center-vertically flex-row">
                <div className="flexed-column">
                    <table className="table-container">
                        <tbody>
                            <tr>
                                <th className='table-header'>About the Chronicles of Darkness</th>
                            </tr>
                            <tr>
                                <td className='table-cell'>
                                    <a href="/books" title="Books">List of Books</a>
                                    &nbsp;•&nbsp;
                                    <a href="/resources" title="Resources">External Resources</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table className="table-container">
                        <tbody>
                            <tr>
                                <th className='table-header'>Subject Areas</th>
                            </tr>
                            <tr>
                                <td className='table-cell'>
                                    <a href="/skills" title="Skills">Skills</a>
                                    &nbsp;•&nbsp;
                                    <a href="/advantages" title="Category:Advantages">Advantages</a>
                                    &nbsp;•&nbsp;
                                    <a href="/merits" title="Category:Merits">Merits</a>
                                    &nbsp;•&nbsp;
                                    <a href="/traits" title="Category:Traits">Traits</a>
                                </td>
                            </tr>
                            <tr>
                                <td className='table-cell'>
                                    <a href="/wiki/Category:Equipment" title="Category:Equipment">Equipment</a>
                                    &nbsp;•&nbsp;
                                    <a href="/wiki/Category:NPCs" title="Category:NPCs">NPCs</a>
                                    &nbsp;•&nbsp;
                                    <a href="/wiki/Category:Settings" title="Category:Settings">Settings</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="flexed-column">
                    <table className="table-container">
                        <tbody>
                            <tr>
                                <th className='table-header'>Gameline Portals</th>
                            </tr>
                            <tr>
                                <td className='table-cell'>
                                    <a href="/mortal" title="Mortals and Lesser Templates">
                                        Mortals and Lesser Templates
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td className='table-cell'>
                                    <Link to="/vampire" title="Vampire: the Requiem">
                                        Vampire: the Requiem
                                    </Link>
                                    &nbsp;•&nbsp;
                                    <a href="/werewolf" title="Werewolf: the Forsaken">Werewolf: the Forsaken</a>
                                </td>
                            </tr>
                            <tr>
                                <td className='table-cell'>
                                    <a href="/mage" title="Mage: the Awakening">Mage: the Awakening</a>
                                    &nbsp;•&nbsp;
                                    <a href="/promethean" title="Promethean: the Created">Promethean: the Created</a>
                                </td>
                            </tr>
                            <tr>
                                <td className='table-cell'>
                                    <a href="/changeling" title="Changeling: the Lost">Changeling: the Lost</a>
                                    &nbsp;•&nbsp;
                                    <a href="/hunter" title="Hunter: the Vigil">Hunter: the Vigil</a>
                                </td>
                            </tr>
                            <tr>
                                <td className='table-cell'>
                                    <a href="/geist" title="Geist: the Sin-Eaters">Geist: the Sin-Eaters</a>
                                    &nbsp;•&nbsp;
                                    <a href="/mummy" title="Mummy: the Curse">Mummy: the Curse</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

