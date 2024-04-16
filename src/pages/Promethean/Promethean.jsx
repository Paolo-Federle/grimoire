import React from 'react';
import '../../css/Races.css';
import { Link } from 'react-router-dom';


export default function Promethean() {
    return (
        <div className='center-races'>
            <main className='main-races'>
                <h1 className='title'>Promethean: the Created</h1>
                <section >
                    <div>
                        <p>
                            In <b>Promethean: the Created</b>, you play as an artificial being given the spark of life, seeking to become human.
                        </p>
                        <h2>Origins and Organizations</h2>
                        <p>
                            Each Created has a <Link to='/promethean/lineage'>Lineage</Link> that shapes their form,
                            and their path takes them through many <Link to='/promethean/refinements'>Refinements</Link> over the long years.
                        </p>
                        <p>
                            Prometheans may also cultivate an <Link to='/promethean/athanor'>Athanor</Link> out of their developing understanding.
                        </p>
                        <h2>Technicalities</h2>
                        <p>
                            The Created posses a unique Power Stat trait called <Link to='/promethean/azoth'>Azoth</Link>, and
                            a Morality trait called <Link to='/promethean/humanity'>Humanity</Link>.
                        </p>
                    </div>

                    <div>
                        <h2>Abilities</h2>
                        <p>
                            Each Created is gifted a <Link to='/promethean/bestowment'>Bestowment</Link> based on their Lineage, and can use their inner
                            fire to ignite change in the world and themselves through <Link to='/promethean/transmutations'>Transmutations</Link>.
                        </p>
                        <h2>Advantages</h2>
                        <p>
                            The Created have access to several unique <Link to='/promethean/merits'>Merits</Link> beyond mortal scope.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
}
