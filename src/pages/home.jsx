import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css';
import { PATHS } from './path';

export default function Home() {
    return (
        <>
            <div className="center-vertically flex-row">
                <div className="flexed-column">
                    <table className="home-table-container">
                        <tbody>
                            <tr>
                                <th className='table-header'>Resources</th>
                            </tr>
                            <tr>
                                <td className='table-cell'>
                                    <Link to={PATHS.BOOKS} title="Books" >List of Books</Link>
                                    &nbsp;•&nbsp;
                                    <Link to="/resources" title="Resources">External Resources</Link>
                                    &nbsp;•&nbsp;
                                    <Link to={PATHS.SHEET} title="Sheet">Sheet</Link>
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
                                </td>
                            </tr>
                            <tr>
                                <td className='table-cell'>
                                <Link to="/traits" title="Category:Traits">Traits</Link>
                                &nbsp;•&nbsp;
                                    <Link to={PATHS.ITEMS} title="Category:Items">Items</Link>
                                    &nbsp;•&nbsp;
                                    <Link to="/wiki/Category:NPCs" title="Category:NPCs">NPCs</Link>
                                    &nbsp;•&nbsp;
                                    <Link to={PATHS.SETTINGS} title="Category:Settings">Settings</Link>
                                    &nbsp;•&nbsp;
                                    <Link to={PATHS.LEXYCON} title="Category:Size">Lexycon</Link>
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
                                    <Link to={PATHS.MORTAL} title="Mortals and Lesser Templates">
                                        Mortals and Lesser Templates
                                    </Link>
                                </td>
                            </tr>
                            <tr>
                                <td className='table-cell'>
                                    <Link to={PATHS.VAMPIRE.BASE} title="Vampire: the Requiem">
                                        Vampire: the Requiem
                                    </Link>
                                    &nbsp;•&nbsp;
                                    <Link to={PATHS.WEREWOLF.BASE} title="Werewolf: the Forsaken">Werewolf: the Forsaken</Link>
                                </td>
                            </tr>
                            <tr>
                                <td className='table-cell'>
                                    <Link to={PATHS.MAGE.BASE} title="Mage: the Awakening">Mage: the Awakening</Link>
                                    &nbsp;•&nbsp;
                                    <Link to={PATHS.PROMETHEAN.BASE} title="Promethean: the Created">Promethean: the Created</Link>
                                </td>
                            </tr>
                            <tr>
                                <td className='table-cell'>
                                    <Link to={PATHS.CHANGELING.BASE} title="Changeling: the Lost">Changeling: the Lost</Link>
                                    &nbsp;•&nbsp;
                                    <Link to={PATHS.HUNTER.BASE} title="Hunter: the Vigil">Hunter: the Vigil</Link>
                                </td>
                            </tr>
                            <tr>
                                <td className='table-cell'>
                                    <Link to={PATHS.GEIST.BASE} title="Geist: the Sin-Eaters">Geist: the Sin-Eaters</Link>
                                    &nbsp;•&nbsp;
                                    <Link to={PATHS.MUMMY.BASE} title="Mummy: the Curse">Mummy: the Curse</Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

