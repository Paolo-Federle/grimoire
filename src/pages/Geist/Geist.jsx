import React from 'react';
import '../../css/Races.css';
import { Link } from 'react-router-dom';


export default function Geist() {
    return (
        <div className='center-races'>
            <main className='main-races'>
                <h1 className='title'>Geist: the Sin-Eaters</h1>
                <section >
                    <div>
                        <p>
                            In <b>Geist: the Sin-Eaters</b> you play as one who has died and made a deal with an incarnation of death itself to live again.
                        </p>
                        <h2>Origins and Organizations</h2>
                        <p>
                            The Bound either have <Link to='/geist/thresholds'>Thresholds</Link> describing the character of their deaths.
                            <Link to='/geist/archetypes'>Archetypes</Link> describe what they do with their second life and what greater missions move them.
                        </p>
                        <p>
                            Sin-Eaters gather unique krewes around them and their ideas, which provide
                            various <Link to='/geist/krewe_traits'>Krewe Traits</Link> to members.
                        </p>
                        <h2>Technicalities</h2>
                        <p>
                            The twice-living possess a unique power trait called <Link to='/geist/psyche'>Psyche</Link>, and a Morality
                            trait called <Link to='/geist/synergy'>Synergy</Link>.
                        </p>
                    </div>

                    <div>
                        <h2>Abilities</h2>
                        <p>
                            Sin-Eaters can unlock <Link to='/geist/manifestations'>Manifestations</Link> through the Keys of the Underworld to
                            conjure ghostly phenomena. They can also learn and teach deathly <Link to='/geist/ceremonies'>Ceremonies</Link>.                        </p>
                        <p>
                            Many Sin-Eaters carry <Link to='/geist/mementos'>Mementos</Link> touched by significant deaths.
                        </p>
                        <h2>Advantages</h2>
                        <p>
                            Sin-Eaters have access to several unique <Link to='/geist/merits'>Merits</Link> beyond mortal
                            scope, as well as specific <Link to='/geist/locations'>Locations</Link>.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
}
