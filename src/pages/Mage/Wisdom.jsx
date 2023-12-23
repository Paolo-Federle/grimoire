import React from 'react';
import SimpleTable from '../../components/SimpleTable'
import WisdomData from '../../Data/Mage/Wisdom';

export default function Wisdom() {

    return (<>

        <div className='grid-container'>
            <SimpleTable table={WisdomData} title={'Wisdom'} />

            <p><b>Bonuses / Drawbacks:</b></p>

            <p><i>Dealing with Spirits:</i> Wisdom 9 or 10 gets +1 to dealing with spirits, likewise Wisdom 1 or 2 has -1 to dealing with spirits.</p>

            <p><i>Contesting the Abyss:</i> Wisdom 9 or 10 gains a +1 dice bonus when contesting or countering the supernatural powers of the Abyss. Likewise Wisdom 1 or 2 has -1 to dealing with the Abyss.</p>

            <p><i>Paradox:</i> Higher wisdom has less duration from Paradox. See MtA 268-273</p>

        </div>
    </>
    );
}