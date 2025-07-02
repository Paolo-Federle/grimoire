import React from 'react';
import '../../css/Races.css';
import { Link } from 'react-router-dom';
import { PATHS } from '../path';


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
                            Each mummy had a <Link to={PATHS.MUMMY.DECREE}>Decree</Link> that epitomized the best part of their soul, and was a
                            member of a <Link to={PATHS.MUMMY.GUILD}>Guild</Link> prior to their first death. The Arisen must also answer
                            to a <Link to={PATHS.MUMMY.JUDGE}>Judge</Link> each time they descend into death.
                        </p>
                        <h2>Technicalities</h2>
                        <p>
                            The Deathless possess a unique Power Stat trait called <Link to={PATHS.MUMMY.SEKHEM}>Sekhem</Link>, and a
                            Morality trait called <Link to={PATHS.MUMMY.MEMORY}>Memory</Link>.
                        </p>
                    </div>

                    <div>
                        <h2>Abilities</h2>
                        <p>
                            The Arisen wield supernatural abilities called <Link to={PATHS.MUMMY.AFFINITIES}>Affinities</Link>, and
                            work horrible miracles by mastering <Link to={PATHS.MUMMY.UTTERANCES}>Utterances</Link>.
                        </p>
                        <p>
                            Their searching often leaves mummies in possession of the <Link to={PATHS.MUMMY.RELICS}>Relics</Link> of Irem,
                            each of which holds a power and a curse.
                        </p>
                        <h2>Advantages</h2>
                        <p>
                            Mummies have access to several unique Deathless <Link to='/mummy/merits'>Merits</Link>, including those of their Tomb.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
}
