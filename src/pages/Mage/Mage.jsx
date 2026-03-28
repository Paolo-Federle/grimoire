import React from 'react';
import '../../css/Races.css';
import { Link } from 'react-router-dom';
import { PATHS } from '../path';

export default function Mage() {

    return (
        <div className='center-races'>
            <main className='main-races'>
                <h1 className='title'>Mage: the Awakening</h1>
                <section >
                    <div>
                        <p>
                            In <b>Mage: the Awakening</b>, you play as one of the Wise, sorcerers drawing upon
                            higher Truth to change the Fallen World.
                        </p>
                        <h2>Origins and Organizations</h2>
                        <p>
                            Mages are called to a given <Link to={PATHS.MAGE.PATH}>Path</Link>, and may join an <Link to={PATHS.MAGE.ORDER}>Order</Link> that has similar goals.
                            Additionally, a Mage may join a <Link to={PATHS.MAGE.LEGACY}>Legacy</Link> in the pursuit of perfecting their soul.
                        </p>
                        <h2>Technicalities</h2>
                        <p>
                            The Wise possess a unique Power Stat trait called <Link to={PATHS.MAGE.GNOSIS}>Gnosis</Link>,
                            and a Morality trait called <Link to={PATHS.MAGE.WISDOM}>Wisdom</Link>.  As Mages grow and face challenges, they
                            accumulate <Link to={PATHS.MAGE.EXPERIENCE}>Experience Points</Link>, which they use to refine their abilities and unlock new potential.
                        </p>
                    </div>
                    <div>
                        <h2>Abilities</h2>
                        <p>
                            The Wise can influence the world around them through <Link to={PATHS.MAGE.SPELLS}>Spells</Link> crafted
                            by their knowledge of the ten Arcana (<Link to={PATHS.MAGE.DEATH}>Death</Link>, <Link to={PATHS.MAGE.FATE}>Fate</Link>,&nbsp;
                            <Link to={PATHS.MAGE.FORCE}>Force</Link>,&nbsp;
                            <Link to={PATHS.MAGE.LIFE}>Life</Link>,&nbsp;
                            <Link to={PATHS.MAGE.MATTER}>Matter</Link>,&nbsp;
                            <Link to={PATHS.MAGE.MIND}>Mind</Link>,&nbsp;
                            <Link to={PATHS.MAGE.PRIME}>Prime</Link>,&nbsp;
                            <Link to={PATHS.MAGE.SPACE}>Space</Link>,&nbsp;
                            <Link to={PATHS.MAGE.SPIRIT}>Spirit</Link>,&nbsp;
                            <Link to={PATHS.MAGE.TIME}>Time</Link>).
                            Additionally, these can sometimes be internalized
                            in the form of Attainments that are unaffected by mortal disbelief.
                        </p>
                        <p>
                            Mages often find or craft mystic items, including <Link to={PATHS.MAGE.ARTIFACTS}>Artifacts</Link>, <Link to={PATHS.MAGE.IMBUED_ITEMS}>Imbued Items</Link>,
                            and <Link to={PATHS.MAGE.GRIMOIRES}>Grimoires</Link>.
                        </p>
                        <p>
                            Civilized conflict among the Wise is resolved through the Duel Arcane, a direct conflict of magical will.
                        </p>
                        <h2>Advantages</h2>
                        <p>
                            Mages have access to several unique <Link to={PATHS.MAGE.MERITS}>Merits</Link> beyond mortal scope,
                            including specific <Link to={PATHS.LOCATIONS_BASE}>Locations</Link> and <Link to='/mage/combat_styles'>Combat Styles</Link>.
                            They can also access the universally available list of Merits.
                        </p>
                        <p>
                            The Wise have worked over millennia to establish Proximi Families to act as servants, imbued with Blessings.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
}
