import React from 'react';
import '../../css/Races.css';
import { Link } from 'react-router-dom';
import { PATHS } from '../path';

export default function Hunter() {
    return (
        <div className='center-races'>
            <main className='main-races'>
                <h1 className='title'>Hunter: the Vigil</h1>
                <section >
                    <div>
                        <p>
                            In <b>Hunter: the Vigil</b> you play as a mortal, fighting back against the ever-present darkness.
                        </p>
                        <h2>Origins and Organizations</h2>
                        <p>
                            Hunters belong to <Link to={PATHS.HUNTER.COMPACT_CONSPIRANCY}>Compacts and Conspiracies</Link> at one of
                            three tiers, from local organizations to global.
                        </p>
                        <h2>Technicalities</h2>
                        <p>
                            Those who carry the Vigil have normal human Morality.
                        </p>
                    </div>

                    <div>
                        <h2>Abilities</h2>
                        <p>
                            Some Hunters gain access to special or supernatural <Link to={PATHS.HUNTER.ENDOWMENTS}>Endowments</Link> from their organizations.
                        </p>
                        <p>
                            Cells of Hunters work together to take down their targets through the use of <Link to={PATHS.HUNTER.TACTICS}>Tactics</Link>.
                        </p>
                        <h2>Advantages</h2>
                        <p>
                            Hunters have access to several unique <Link to={PATHS.HUNTER.MERITS}>Merits</Link>, including
                            specific <Link to='/merits/location'>Locations</Link> and <Link to='/hunter/combat_styles'>Combat Styles</Link>.
                        </p>
                        <p>
                            Being mundane humans, Hunters often have a normal <Link to={PATHS.HUNTER.PROFESSION}>Profession</Link>.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
}
