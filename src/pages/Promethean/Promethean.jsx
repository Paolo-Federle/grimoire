import React from 'react';
import '../../css/Races.css';


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
                            Each Created has a <a href='/promethean/lineage'>Lineage</a> that shapes their form,
                            and their path takes them through many <a href='/promethean/refinements'>Refinements</a> over the long years.
                        </p>
                        <p>
                            Prometheans may also cultivate an <a href='/promethean/athanor'>Athanor</a> out of their developing understanding.
                        </p>
                        <h2>Technicalities</h2>
                        <p>
                            The Created posses a unique Power Stat trait called <a href='/promethean/azoth'>Azoth</a>, and
                            a Morality trait called <a href='/promethean/humanity'>Humanity</a>.
                        </p>
                    </div>

                    <div>
                        <h2>Abilities</h2>
                        <p>
                            Each Created is gifted a <a href='/promethean/bestowment'>Bestowment</a> based on their Lineage, and can use their inner
                            fire to ignite change in the world and themselves through <a href='/promethean/transmutations'>Transmutations</a>.
                        </p>
                        <h2>Advantages</h2>
                        <p>
                            The Created have access to several unique <a href='/promethean/merits'>Merits</a> beyond mortal scope.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
}
