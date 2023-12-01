import React from 'react';
import '../../css/Races.css';


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
                            Hunters belong to <a href='/hunter/compacts_conspiracies'>Compacts and Conspiracies</a> at one of
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
                            Some Hunters gain access to special or supernatural <a href='/hunter/endowments'>Endowments</a> from their organizations.
                        </p>
                        <p>
                            Cells of Hunters work together to take down their targets through the use of <a href='/hunter/tactics'>Tactics</a>.
                        </p>
                        <h2>Advantages</h2>
                        <p>
                            Hunters have access to several unique <a href='/hunter/merits'>Merits</a>, including
                            specific <a href='/hunter/locations'>Locations</a> and <a href='/hunter/combat_styles'>Combat Styles</a>.
                        </p>
                        <p>
                            Being mundane humans, Hunters often have a normal <a href='/hunter/profession'>Profession</a>.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
}
