import React from 'react';
import '../../css/Races.css';
import { Link } from 'react-router-dom';

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
                            The Lost bear <Link to='/changeling/seemings'>Seemings</Link> and <Link to='/changeling/kiths'>Kiths</Link> that define the
                            ways in which the Gentry altered them during the Durance.
                        </p>
                        <p>
                            Many Changelings also join a <Link to='/changeling/court'>Court</Link> or an <Link to='/changeling/entitlement'>Entitlement</Link> to
                            gain a more close-knit group.
                        </p>
                        <h2>Technicalities</h2>
                        <p>
                            The Lost posses a unique Power Stat trait called <Link to='/changeling/wyrd'>Wyrd</Link>, and
                            a Morality trait called <Link to='/changeling/clarity'>Clarity</Link>. As Changelings grow and face challenges, they
                            accumulate <Link to='/changeling/experience_point'>Experience Points</Link>, which they use to refine their abilities and unlock new potential.
                        </p>
                    </div>

                    <div>
                        <h2>Abilities</h2>
                        <p>
                            The Lost may exploit <Link to='/changeling/contracts'>Contracts</Link> with the world to manipulate it, and may bind
                            themselves or others with <Link to='/changeling/oaths'>Oaths</Link> to gain power and protection
                        </p>
                        <p>
                            Many Changelings discover <Link to='/changeling/goblin_fruits'>Goblin Fruits</Link> in the Hedge, or emerge with <Link to='/changeling/tokens'>Tokens</Link> that defy common reality.
                        </p>
                        <h2>Advantages</h2>
                        <p>
                            Changelings have access to several unique <Link to='/changeling/merits'>Merits</Link> beyond mortal
                            scope, including specific <Link to='/merits/location'>Locations</Link> and <Link to='/changeling/combat_styles'>Combat Styles</Link>.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
}
