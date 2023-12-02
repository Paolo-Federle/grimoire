import React from 'react';
import '../../css/Races.css';
import { Link } from 'react-router-dom';


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
                            Hunters belong to <Link to='/hunter/compacts_conspiracies'>Compacts and Conspiracies</Link> at one of
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
                            Some Hunters gain access to special or supernatural <Link to='/hunter/endowments'>Endowments</Link> from their organizations.
                        </p>
                        <p>
                            Cells of Hunters work together to take down their targets through the use of <Link to='/hunter/tactics'>Tactics</Link>.
                        </p>
                        <h2>Advantages</h2>
                        <p>
                            Hunters have access to several unique <Link to='/hunter/merits'>Merits</Link>, including
                            specific <Link to='/hunter/locations'>Locations</Link> and <Link to='/hunter/combat_styles'>Combat Styles</Link>.
                        </p>
                        <p>
                            Being mundane humans, Hunters often have a normal <Link to='/hunter/profession'>Profession</Link>.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
}
