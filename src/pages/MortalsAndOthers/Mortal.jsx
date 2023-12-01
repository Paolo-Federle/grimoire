import React from 'react';
import '../../css/Races.css';

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
                            Mortal humans have a <a href='/mortal/morality'>Morality</a> and
                            a <a href='/mortal/virtue'>Virtue</a> and <a href='/mortal/vice'>Vice</a>.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
}
