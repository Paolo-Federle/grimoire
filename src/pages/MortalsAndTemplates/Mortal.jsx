import React from 'react';
import '../../css/Races.css';
import { Link } from 'react-router-dom';
import { PATHS } from '../path';
import SimpleTable from '../../components/SimpleTable';
import { lesserTemplatesData } from '../../Data/Mortal/Lesser templates/LesserTemplateData';

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
                            Mortal humans have <Link to={PATHS.MORTAL.MORALITY}>Morality</Link>,
                            a <Link to={PATHS.MORTAL.VIRTUE_VICE}>Virtue and a Vice</Link>,
                            and access to <Link to={PATHS.UNIVERSAL_MERITS}>Universal Merits</Link>.
                        </p>
                        <SimpleTable table={lesserTemplatesData} title="Lesser Template Character Types" titleVariant="nested" activeRowLink={false} />
                    </div>
                </section>
            </main>
        </div>
    );
}
