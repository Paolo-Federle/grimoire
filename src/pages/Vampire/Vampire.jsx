import React from 'react';
import '../../css/Races.css';
import { Link } from 'react-router-dom';
import { PATHS } from '../path';

export default function Vampire() {
    return (
        <div className='center-races'>
            <main className='main-races'>
                <h1 className='title'>Vampire: the Requiem</h1>

                <section >
                    <div>
                        <p>
                            In <b>Vampire: the Requiem</b>, you play one of the undead, relentlessly hunting for the essence of mortality to sustain yourself.
                        </p>
                        <h2>Origins and Organizations</h2>
                        <p>
                            Vampires are reborn as members of a <Link to={PATHS.VAMPIRE.CLANS}>Clan</Link>, and may further belong to or join a <Link to={PATHS.VAMPIRE.BLOODLINE}>Bloodline</Link>.
                            Vampires often join a <Link to={PATHS.VAMPIRE.COVENANTS}>Covenant</Link> based on their philosophy toward the Long Night.
                        </p>
                        <h2>Technicalities</h2>
                        <p>
                            Kindred posses a unique Power Stat trait called <Link to={PATHS.VAMPIRE.BLOOD_POTENCY}>Blood Potency</Link>,
                            and a Morality trait called <Link to={PATHS.VAMPIRE.HUMANITY}>Humanity</Link>.  As Changelings grow and face challenges, they
                            accumulate <Link to={PATHS.VAMPIRE.EXPERIENCE}>Experience Points</Link>, which they use to refine their abilities and unlock new potential.
                        </p>
                    </div>

                    <div>
                        <h2>Abilities</h2>
                        <p>
                            The Kindred practice <Link to={PATHS.VAMPIRE.DISCIPLINES}>Disciplines</Link> by manipulating their Vitae,
                            and can combine them into advanced techniques called <Link to={PATHS.VAMPIRE.DEVOTIONS}>Devotions</Link>.
                        </p>
                        <h2>Advantages</h2>
                        <p>
                            Vampires have access to several unique <Link to={PATHS.VAMPIRE.MERITS}>Merits</Link> beyond mortal scope,
                            including specific <Link to={PATHS.LOCATIONS_BASE}>Locations</Link> and Combat Styles.
                        </p>
                        <p>
                            The Kindred can also create <Link to={PATHS.VAMPIRE.GHOUL_FAMILIES}>Ghouls</Link> to act as their pawns.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
}
