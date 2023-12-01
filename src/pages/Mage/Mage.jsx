import React from 'react';
import '../../css/Races.css';

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
                            Mages are called to a given <a href='/mage/path'>Path</a>, and may join an <a href='/mage/order'>Order</a> that has similar goals.
                            Additionally, a Mage may join a <a href='/mage/legacy'>Legacy</a> in the pursuit of perfecting their soul.
                        </p>
                        <h2>Technicalities</h2>
                        <p>
                            The Wise possess a unique Power Stat trait called <a href='/mage/gnosis'>Gnosis</a>,
                            and a Morality trait called <a href='/mage/wisdom'>Wisdom</a>.
                        </p>
                    </div>

                    <div>
                        <h2>Abilities</h2>
                        <p>
                            The Wise can influence the world around them through <a href='/mage/spells'>Spells</a> crafted
                            by their knowledge of the ten Arcana. Additionally, these can sometimes be internalized
                            in the form of Attainments that are unaffected by mortal disbelief.
                        </p>
                        <p>
                            Mages often find or craft mystic items, including Artifacts, Imbued Items, and Grimoires.
                        </p>
                        <p>
                            Civilized conflict among the Wise is resolved through the Duel Arcane, a direct conflict of magical will.
                        </p>
                        <h2>Advantages</h2>
                        <p>
                            Mages have access to several unique <a href='/mage/merits'>Merits</a> beyond mortal scope,
                            including specific <a href='/mage/locations'>Locations</a> and <a href='/mage/combat_styles'>Combat Styles</a>.
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
