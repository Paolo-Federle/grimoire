import React from 'react';
import SimpleTable from '../../components/SimpleTable'
import { GnosisData, ArcanaMasteryData } from '../../Data/Mage/GnosisData';
import SpellFactorTable from './SpellFactor';

export default function Path() {

    return (
        <div className='grid-container'>
            <SimpleTable table={GnosisData} title={'Gnosis'} />
            <p>Aura bonuses apply to anyone who magically scrutinizes the mage or his spells.</p>
            <h1>Arcana Mastery</h1>
            <div>The chart below lists the maximum dots a character can have in an Arcanum per dot of Gnosis that he
                possesses.<br></br>Two of his first three Arcana must be from his Path’s Ruling Arcana</div>
            <SimpleTable table={ArcanaMasteryData} />
            <p>* Six or more dots represent archmastery of an Arcanum.</p>
            <h1 >
                Fattori incantesimi
            </h1>
            <SpellFactorTable />
        </div>
    );
}