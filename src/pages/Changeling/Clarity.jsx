import React from 'react';
import SimpleTable from '../../components/SimpleTable'
import ClarityData from '../../Data/Changeling/ClarityData';

export default function Wisdom() {

    return (<>

        <div className='grid-container'>
            <SimpleTable table={ClarityData} title={'Clarity'} />

            <p><b>Bonuses / Drawbacks:</b></p>

            <p><i>Clarity 8:</i> +2 to all rolls related to sensory perception.</p>

            <p><i>Clarity 6:</i> May use the Kenning ability.</p>

            <p><i>Clarity 7 or below:</i> -1 to all perception rolls for every two points below Clarity 7</p>

        </div>
    </>
    );
}