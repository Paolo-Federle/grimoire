import React from 'react';
import '../../css/Races.css';


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
                            The Bound either have <a href='/geist/thresholds'>Thresholds</a> describing the character of their deaths.
                            <a href='/geist/archetypes'>Archetypes</a> describe what they do with their second life and what greater missions move them.
                        </p>
                        <p>
                            Sin-Eaters gather unique krewes around them and their ideas, which provide
                            various <a href='/geist/krewe_traits'>Krewe Traits</a> to members.
                        </p>
                        <h2>Technicalities</h2>
                        <p>
                            The twice-living possess a unique power trait called <a href='/geist/psyche'>Psyche</a>, and a Morality
                            trait called <a href='/geist/synergy'>Synergy</a>.
                        </p>
                    </div>

                    <div>
                        <h2>Abilities</h2>
                        <p>
                            Sin-Eaters can unlock <a href='/geist/manifestations'>Manifestations</a> through the Keys of the Underworld to
                            conjure ghostly phenomena. They can also learn and teach deathly <a href='/geist/ceremonies'>Ceremonies</a>.                        </p>
                        <p>
                            Many Sin-Eaters carry <a href='/geist/mementos'>Mementos</a> touched by significant deaths.
                        </p>
                        <h2>Advantages</h2>
                        <p>
                            Sin-Eaters have access to several unique <a href='/geist/merits'>Merits</a> beyond mortal
                            scope, as well as specific <a href='/geist/locations'>Locations</a>.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
}
