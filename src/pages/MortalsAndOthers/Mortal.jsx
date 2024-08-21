import React from 'react';
import '../../css/Races.css';
import { Link } from 'react-router-dom';

export default function Mortal() {
    return (
        <div className='center-races'>
            <main className='main-races'>
                <h1 className='title'>Mortals and Lesser Templates</h1>

                <section >
                    <div>
                        <p>
                            In the <b>Chronicles of Darkness</b>, you play mortal men and women, as well as characters who share miscellaneous occult natures.
                        </p>
                        <h2>Technicalities</h2>
                        <p>
                            Mortal humans have a <Link to='/mortal/morality'>Morality</Link> and
                            a <Link to='/mortal/virtue_vice'>Virtue and Vice</Link>.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
}
