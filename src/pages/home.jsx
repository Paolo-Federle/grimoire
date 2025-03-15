import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css';

export default function Home() {
    return (
        <>
            <div className="center-vertically flex-row">
                <div className="flexed-column">
                    <table className="home-table-container">
                        <tbody>
                            <tr>
                                <th className='table-header'>Sources</th>
                            </tr>
                            <tr>
                                <td className='table-cell'>
                                    <Link to="/books" title="Books" >List of Books</Link>
                                    &nbsp;•&nbsp;
                                    <Link to="/resources" title="Resources">External Resources</Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table className="home-table-container">
                        <tbody>
                            <tr>
                                <th className='table-header'>Subject Areas</th>
                            </tr>
                            <tr>
                                <td className='table-cell'>
                                    <Link to="/skills" title="Skills">Skills</Link>
                                    &nbsp;•&nbsp;
                                    <Link to="/advantages" title="Category:Advantages">Advantages</Link>
                                    &nbsp;•&nbsp;
                                    <Link to="/universal_merits" title="Category:Merits">Merits</Link>
                                    &nbsp;•&nbsp;
                                    <Link to="/traits" title="Category:Traits">Traits</Link>
                                </td>
                            </tr>
                            <tr>
                                <td className='table-cell'>
                                    <Link to="/items" title="Category:Items">Items</Link>
                                    &nbsp;•&nbsp;
                                    <Link to="/wiki/Category:NPCs" title="Category:NPCs">NPCs</Link>
                                    &nbsp;•&nbsp;
                                    <Link to="/wiki/Category:Settings" title="Category:Settings">Settings</Link>
                                    &nbsp;•&nbsp;
                                    <Link to="/size" title="Category:Size">Size</Link>
                                    &nbsp;•&nbsp;
                                    <Link to="/lexycon" title="Category:Size">Lexycon</Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="flexed-column">
                    <table className="home-table-container">
                        <tbody>
                            <tr>
                                <th className='table-header'>Main Games</th>
                            </tr>
                            <tr>
                                <td className='table-cell'>
                                    <Link to="/mortal" title="Mortals and Lesser Templates">
                                        Mortals and Lesser Templates
                                    </Link>
                                </td>
                            </tr>
                            <tr>
                                <td className='table-cell'>
                                    <Link to="/vampire" title="Vampire: the Requiem">
                                        Vampire: the Requiem
                                    </Link>
                                    &nbsp;•&nbsp;
                                    <Link to="/werewolf" title="Werewolf: the Forsaken">Werewolf: the Forsaken</Link>
                                </td>
                            </tr>
                            <tr>
                                <td className='table-cell'>
                                    <Link to="/mage" title="Mage: the Awakening">Mage: the Awakening</Link>
                                    &nbsp;•&nbsp;
                                    <Link to="/promethean" title="Promethean: the Created">Promethean: the Created</Link>
                                </td>
                            </tr>
                            <tr>
                                <td className='table-cell'>
                                    <Link to="/changeling" title="Changeling: the Lost">Changeling: the Lost</Link>
                                    &nbsp;•&nbsp;
                                    <Link to="/hunter" title="Hunter: the Vigil">Hunter: the Vigil</Link>
                                </td>
                            </tr>
                            <tr>
                                <td className='table-cell'>
                                    <Link to="/geist" title="Geist: the Sin-Eaters">Geist: the Sin-Eaters</Link>
                                    &nbsp;•&nbsp;
                                    <Link to="/mummy" title="Mummy: the Curse">Mummy: the Curse</Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

