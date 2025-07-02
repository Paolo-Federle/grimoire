import React from 'react';
import '../../css/Races.css';
import { Link } from 'react-router-dom';
import { PATHS } from '../path';

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
                            Each Forsaken is born to an <Link to={PATHS.WEREWOLF.AUSPICES}>Auspice</Link>, a phase of the Moon.
                            Most will also join a <Link to={PATHS.WEREWOLF.TRIBES}>Tribe</Link>, as Werewolves are pack animals by nature.
                            Additionally, they may join a <Link to={PATHS.WEREWOLF.LODGES}>Lodge</Link> who has common interests.
                        </p>
                        <h2>Technicalities</h2>
                        <p>
                            Werewolves have a unique Power Stat called <Link to={PATHS.WEREWOLF.PRIMAL_URGE}>Primal Urge</Link>, and
                            a unique Morality trait called <Link to={PATHS.WEREWOLF.HARMONY}>Harmony</Link>.
                        </p>
                    </div>

                    <div>
                        <h2>Abilities</h2>
                        <p>
                            Werewolves may deal with Spirits to gain access to <Link to={PATHS.WEREWOLF.GIFTS}>Gifts</Link>, as well as
                            rituals called <Link to={PATHS.WEREWOLF.RITES}>Rites</Link>.
                        </p>
                        <p>
                            They may bind Spirits into physical forms called <Link to={PATHS.WEREWOLF.FETISHES}>Fetishes</Link>, or
                            the more short-lived <Link to={PATHS.WEREWOLF.TALENS}>Talens</Link> for their own benefit.
                        </p>
                        <h2>Advantages</h2>
                        <p>
                            The Forsaken have access to several unique <Link to={PATHS.WEREWOLF.MERITS}>Merits</Link> beyond mortal scope, including
                            specific <Link to='/merits/location'>Locations</Link> and <Link to='/werewolf/combat_styles'>Combat Styles</Link>.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
}
