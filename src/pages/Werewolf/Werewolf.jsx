import React from 'react';
import '../../css/Races.css';
import { Link } from 'react-router-dom';


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
                            Each Forsaken is born to an <Link to='/werewolf/auspice'>Auspice</Link>, a phase of the Moon.
                            Most will also join a <Link to='/werewolf/tribe'>Tribe</Link>, as Werewolves are pack animals by nature.
                            Additionally, they may join a <Link to='/werewolf/lodge'>Lodge</Link> who has common interests.
                        </p>
                        <h2>Technicalities</h2>
                        <p>
                            Werewolves have a unique Power Stat called <Link to='/werewolf/primal_urge'>Primal Urge</Link>, and
                            a unique Morality trait called <Link to='/werewolf/harmony'>Harmony</Link>.
                        </p>
                    </div>

                    <div>
                        <h2>Abilities</h2>
                        <p>
                            Werewolves may deal with Spirits to gain access to <Link to='/werewolf/gifts'>Gifts</Link>, as well as
                            rituals called <Link to='/werewolf/rites'>Rites</Link>.
                        </p>
                        <p>
                            They may bind Spirits into physical forms called <Link to='/werewolf/fetishes'>Fetishes</Link>, or
                            the more short-lived <Link to='/werewolf/talens'>Talens</Link> for their own benefit.
                        </p>
                        <h2>Advantages</h2>
                        <p>
                            The Forsaken have access to several unique <Link to='/werewolf/merits'>Merits</Link> beyond mortal scope, including
                            specific <Link to='/werewolf/locations'>Locations</Link> and <Link to='/werewolf/combat_styles'>Combat Styles</Link>.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
}
