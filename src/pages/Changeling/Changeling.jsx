import React from 'react';
import '../../css/Races.css';

export default function Changeling() {
    return (
        <div className='center-races'>
            <main className='main-races'>
                <h1 className='title'>Changeling: the Lost</h1>
                <section >
                    <div>
                        <p>
                            In <b>Changeling: the Lost</b>, you play as a victim of an alien being,
                            snatched up and altered in the Hedge, escaped and returned to a world that no longer recognizes you.
                        </p>
                        <h2>Origins and Organizations</h2>
                        <p>
                            The Lost bear <a href='/changeling/seemings'>Seemings</a> and <a href='/changeling/kiths'>Kiths</a> that define the
                            ways in which the Gentry altered them during the Durance.
                        </p>
                        <p>
                            Many Changelings also join a <a href='/changeling/court'>Court</a> or an <a href='/changeling/entitlement'>Entitlement</a> to
                            gain a more close-knit group.
                        </p>
                        <h2>Technicalities</h2>
                        <p>
                            The Lost posses a unique Power Stat trait called <a href='/changeling/wyrd'>Wyrd</a>, and
                            a Morality trait called <a href='/changeling/clarity'>Clarity</a>.
                        </p>
                    </div>

                    <div>
                        <h2>Abilities</h2>
                        <p>
                            The Lost may exploit <a href='/changeling/contracts'>Contracts</a> with the world to manipulate it, and may bind
                            themselves or others with <a href='/changeling/oaths'>Oaths</a> to gain power and protection
                        </p>
                        <p>
                            Many Changelings discover <a href='/changeling/goblin_fruits'>Goblin Fruits</a> in the Hedge, or emerge with <a href='/changeling/tokens'>Tokens</a> that defy common reality.
                        </p>
                        <h2>Advantages</h2>
                        <p>
                            Changelings have access to several unique <a href='/changeling/merits'>Merits</a> beyond mortal
                            scope, including specific <a href='/changeling/location'>Locations</a> and <a href='/changeling/combat_styles'>Combat Styles</a>.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
}
