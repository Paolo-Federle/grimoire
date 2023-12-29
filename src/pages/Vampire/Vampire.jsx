import React from 'react';
import '../../css/Races.css';
import { Link } from 'react-router-dom';

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
                            Vampires are reborn as members of a <Link to='/vampire/clan'>Clan</Link>, and may further belong to or join a <Link to='/vampire/bloodline'>Bloodline</Link>.
                            Vampires often join a <Link to='/vampire/covenant'>Covenant</Link> based on their philosophy toward the Long Night.
                        </p>
                        <h2>Technicalities</h2>
                        <p>
                            Kindred posses a unique Power Stat trait called <Link to='/vampire/blood_potency'>Blood Potency</Link>,
                            and a Morality trait called Humanity.
                        </p>
                    </div>

                    <div>
                        <h2>Abilities</h2>
                        <p>
                            The Kindred practice <Link to='/vampire/disciplines'>Disciplines</Link> by manipulating their Vitae,
                            and can combine them into advanced techniques called <Link to='/vampire/devotions'>Devotions</Link>.
                        </p>
                        <h2>Advantages</h2>
                        <p>
                            Vampires have access to several unique <Link to='/vampire/merits'>Merits</Link> beyond mortal scope,
                            including specific <Link to='/vampire/locations'>Locations</Link> and Combat Styles.
                        </p>
                        <p>
                            The Kindred can also create <Link to='/vampire/ghoul'>Ghouls</Link> to act as their pawns.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
}
