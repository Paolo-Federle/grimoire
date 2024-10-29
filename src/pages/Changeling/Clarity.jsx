import React from 'react';
import SimpleTable from '../../components/SimpleTable'
import ClarityData from '../../Data/Changeling/ClarityData';

export default function Wisdom() {

    return (<>

        <div className='grid-container'>
            <SimpleTable table={ClarityData} title={'Clarity'} />

            <p><b>Bonuses / Drawbacks:</b></p>

            <p><i>Clarity 6:</i> May use the Kenning ability.</p>
 
        </div>
    </>
    );
}