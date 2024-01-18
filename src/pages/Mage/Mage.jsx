import React from 'react';
import '../../css/Races.css';
import { Link } from 'react-router-dom';

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
                            Mages are called to a given <Link to='/mage/path'>Path</Link>, and may join an <Link to='/mage/order'>Order</Link> that has similar goals.
                            Additionally, a Mage may join a <Link to='/mage/legacy'>Legacy</Link> in the pursuit of perfecting their soul.
                        </p>
                        <h2>Technicalities</h2>
                        <p>
                            The Wise possess a unique Power Stat trait called <Link to='/mage/gnosis'>Gnosis</Link>,
                            and a Morality trait called <Link to='/mage/wisdom'>Wisdom</Link>.
                        </p>
                    </div>
                    <div>
                        <h2>Abilities</h2>
                        <p>
                            The Wise can influence the world around them through <Link to='/mage/spells'>Spells</Link> crafted
                            by their knowledge of the ten Arcana (<Link to='/mage/death'>Death</Link>, <Link to='/mage/fate'>Fate</Link>,&nbsp;
                            <Link to='/mage/force'>Force</Link>,&nbsp;
                            <Link to='/mage/life'>Life</Link>,&nbsp;
                            <Link to='/mage/matter'>Matter</Link>,&nbsp;
                            <Link to='/mage/mind'>Mind</Link>,&nbsp;
                            <Link to='/mage/prime'>Prime</Link>,&nbsp;
                            <Link to='/mage/space'>Space</Link>,&nbsp;
                            <Link to='/mage/spirit'>Spirit</Link>,&nbsp;
                            <Link to='/mage/time'>Time</Link>).
                            Additionally, these can sometimes be internalized
                            in the form of Attainments that are unaffected by mortal disbelief.
                        </p>
                        <p>
                            Mages often find or craft mystic items, including <Link to='/mage/artifacts'>Artifacts</Link>, <Link to='/mage/imbued_items'>Imbued Items</Link>,
                            and <Link to='/mage/grimoires'>Grimoires</Link>.
                        </p>
                        <p>
                            Civilized conflict among the Wise is resolved through the Duel Arcane, a direct conflict of magical will.
                        </p>
                        <h2>Advantages</h2>
                        <p>
                            Mages have access to several unique <Link to='/mage/merits'>Merits</Link> beyond mortal scope,
                            including specific <Link to='/mage/locations'>Locations</Link> and <Link to='/mage/combat_styles'>Combat Styles</Link>.
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
