import React from 'react';
import '../../css/Races.css';


export default function Mummy() {
    return (
        <div className='center-races'>
            <main className='main-races'>
                <h1 className='title'>Mummy: the Curse</h1>
                <section >
                    <div>
                        <p>
                            In <b>Mummy: the Curse</b> you play one of the Arisen, ancient servants of arcane masters given eternally renewed life and a task to pursue.
                        </p>
                        <h2>Origins and Organizations</h2>
                        <p>
                            Each mummy had a <a href='/mummy/decree'>Decree</a> that epitomized the best part of their soul, and was a
                            member of a <a href='/mummy/guild'>Guild</a> prior to their first death. The Arisen must also answer
                            to a <a href='/mummy/judge'>Judge</a> each time they descend into death.
                        </p>
                        <h2>Technicalities</h2>
                        <p>
                            The Deathless possess a unique Power Stat trait called <a href='/mummy/sekhem'>Sekhem</a>, and a
                            Morality trait called <a href='/mummy/memory'>Memory</a>.
                        </p>
                    </div>

                    <div>
                        <h2>Abilities</h2>
                        <p>
                            The Arisen wield supernatural abilities called <a href='/mummy/affinities'>Affinities</a>, and
                            work horrible miracles by mastering <a href='/mummy/utterances'>Utterances</a>.
                        </p>
                        <p>
                            Their searching often leaves mummies in possession of the <a href='/mummy/relics'>Relics</a> of Irem,
                            each of which holds a power and a curse.
                        </p>
                        <h2>Advantages</h2>
                        <p>
                            Mummies have access to several unique Deathless <a href='/mummy/merits'>Merits</a>, including those of their Tomb.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
}
