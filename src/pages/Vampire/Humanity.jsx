import React from 'react';
import SimpleTable from '../../components/SimpleTable'
import { MoralityData } from '../../Data/Mortal/MoralityData';

export default function Humanity() {
    return (
        <div className='grid-container'>
            <SimpleTable table={MoralityData} title={'Humanity'} />
            <p><b>Bonuses/Drawbacks:</b></p>
            <p>To stay awake: Roll Humanity to stay awake for turns per successes. Extended Action for 5 success to stay awake the entire day. Also rolled to see if a Vampire can wake up in the middle of the day. Dice pools during the day cannot exceed Humanity</p>
            <p>Interacting with Humans: Pools in Empathy, Persuasion, or Socialize cannot exceed Humanity</p>
        </div>
    );
}