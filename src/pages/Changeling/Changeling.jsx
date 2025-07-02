import React from 'react';
import '../../css/Races.css';
import { Link } from 'react-router-dom';
import { PATHS } from '../path';

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
                            The Lost bear <Link to={PATHS.CHANGELING.SEEMINGS}>Seemings</Link> and <Link to={PATHS.CHANGELING.KITHS}>Kiths</Link> that define the
                            ways in which the Gentry altered them during the Durance.
                        </p>
                        <p>
                            Many Changelings also join a <Link to={PATHS.CHANGELING.COURT}>Court</Link> or an <Link to={PATHS.CHANGELING.ENTITLEMENTS}>Entitlement</Link> to
                            gain a more close-knit group.
                        </p>
                        <h2>Technicalities</h2>
                        <p>
                            The Lost posses a unique Power Stat trait called <Link to={PATHS.CHANGELING.WYRD}>Wyrd</Link>, and
                            a Morality trait called <Link to={PATHS.CHANGELING.CLARITY}>Clarity</Link>. As Changelings grow and face challenges, they
                            accumulate <Link to={PATHS.CHANGELING.EXPERIENCE}>Experience Points</Link>, which they use to refine their abilities and unlock new potential.
                        </p>
                    </div>

                    <div>
                        <h2>Abilities</h2>
                        <p>
                            The Lost may exploit <Link to={PATHS.CHANGELING.CONTRACTS}>Contracts</Link> with the world to manipulate it, and may bind
                            themselves or others with <Link to={PATHS.CHANGELING.PLEDGES}>Pledges</Link> to gain power and protection
                        </p>
                        <p>
                            Many Changelings discover <Link to={PATHS.CHANGELING.GOBLIN_FRUITS}>Goblin Fruits</Link> in the Hedge, or
                            emerge with <Link to={PATHS.CHANGELING.TOKENS}>Tokens</Link> that defy common reality.
                        </p>
                        <h2>Advantages</h2>
                        <p>
                            Changelings have access to several unique <Link to={PATHS.CHANGELING.MERITS}>Merits</Link> beyond mortal
                            scope, including specific <Link to={PATHS.LOCATIONS_BASE}>Locations</Link> and <Link to='/changeling/combat_styles'>Combat Styles</Link>.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
}
