import React from 'react';
import '../../css/Races.css';
import { Link } from 'react-router-dom';
import { PATHS } from '../path';

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
                            Each Created has a <Link to={PATHS.PROMETHEAN.LINEAGE}>Lineage</Link> that shapes their form,
                            and their path takes them through many <Link to={PATHS.PROMETHEAN.REFINEMENTS}>Refinements</Link> over the long years.
                         Some fall from the Pilgrimage, creating <Link to={PATHS.PROMETHEAN.MOCKERIES}>Mockeries</Link>, twisted Lineages shaped by failure or corruption.
                        </p>
                        <p>
                            Prometheans may also cultivate an <Link to={PATHS.PROMETHEAN.ATHANOR}>Athanor</Link> out of their developing understanding.
                        </p>
                        <h2>Technicalities</h2>
                        <p>
                            The Created posses a unique Power Stat trait called <Link to={PATHS.PROMETHEAN.AZOTH}>Azoth</Link>, and
                            a Morality trait called <Link to={PATHS.PROMETHEAN.HUMANITY}>Humanity</Link>.
                        </p>
                    </div>

                    <div>
                        <h2>Abilities</h2>
                        <p>
                            Each Created is gifted a <Link to={PATHS.PROMETHEAN.BESTOWMENTS}>Bestowment</Link> based on their Lineage, and can use their inner
                            fire to ignite change in the world and themselves through <Link to={PATHS.PROMETHEAN.TRANSMUTATIONS}>Transmutations</Link>.
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
