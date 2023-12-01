import React from 'react';
import '../../css/Races.css';


export default function Werewolf() {
    return (
        <div className='center-races'>
            <main className='main-races'>
                <h1 className='title'>Werewolf: the Forsaken</h1>

                <section >
                    <div>
                        <p>
                            In <b>Werewolf: the Forsaken</b>, you play a guardian of the boundary between flesh and spirit, honed of blood and fury.
                        </p>

                        <h2>Origins and Organizations</h2>
                        <p>
                            Each Forsaken is born to an <a href='/werewolf/auspice'>Auspice</a>, a phase of the Moon.
                            Most will also join a <a href='/werewolf/tribe'>Tribe</a>, as Werewolves are pack animals by nature.
                            Additionally, they may join a <a href='/werewolf/lodge'>Lodge</a> who has common interests.
                        </p>
                        <h2>Technicalities</h2>
                        <p>
                            Werewolves have a unique Power Stat called <a href='/werewolf/primal_urge'>Primal Urge</a>, and
                            a unique Morality trait called <a href='/werewolf/harmony'>Harmony</a>.
                        </p>
                    </div>

                    <div>
                        <h2>Abilities</h2>
                        <p>
                            Werewolves may deal with Spirits to gain access to <a href='/werewolf/gifts'>Gifts</a>, as well as
                            rituals called <a href='/werewolf/rites'>Rites</a>.
                        </p>
                        <p>
                            They may bind Spirits into physical forms called <a href='/werewolf/fetishes'>Fetishes</a>, or
                            the more short-lived <a href='/werewolf/talens'>Talens</a> for their own benefit.
                        </p>
                        <h2>Advantages</h2>
                        <p>
                            The Forsaken have access to several unique <a href='/werewolf/merits'>Merits</a> beyond mortal scope, including
                            specific <a href='/werewolf/locations'>Locations</a> and <a href='/werewolf/combat_styles'>Combat Styles</a>.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
}
