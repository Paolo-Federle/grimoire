import React from 'react';
import '../../css/Races.css';

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
                            Vampires are reborn as members of a <a href='/vampire/clan'>Clan</a>, and may further belong to or join a <a href='/vampire/bloodline'>Bloodline</a>.
                            Vampires often join a <a href='/vampire/covenant'>Covenant</a> based on their philosophy toward the Long Night.
                        </p>
                        <h2>Technicalities</h2>
                        <p>
                            Kindred posses a unique Power Stat trait called <a href='/vampire/blood_potency'>Blood Potency</a>,
                            and a Morality trait called Humanity.
                        </p>
                    </div>

                    <div>
                        <h2>Abilities</h2>
                        <p>
                            The Kindred practice <a href='/vampire/disciplines'>Disciplines</a> by manipulating their Vitae,
                            and can combine them into advanced techniques called <a href='/vampire/devotions'>Devotions</a>.
                        </p>
                        <h2>Advantages</h2>
                        <p>
                            Vampires have access to several unique <a href='/vampire/merits'>Merits</a> beyond mortal scope,
                            including specific <a href='/vampire/locations'>Locations</a> and Combat Styles.
                        </p>
                        <p>
                            The Kindred can also create <a href='/vampire/ghoul'>Ghouls</a> to act as their pawns.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
}
