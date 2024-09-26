import React from 'react';
import '../../css/Races.css';
import { Link } from 'react-router-dom';
import BaseTable from '../../components/BaseTable';

export default function TokenRules() {
    return (
        <div className='longTextContainer'>
            <h1>Tokens</h1>
            <p>Some things that linger in the Hedge or Faerie gain a measure of dark magic. Even the simplest of items — a thorn broken off a gnarled vine, a brass knob unscrewed from a Fae Keeper’s many cabinets, a shoelace stolen from a Hedge-tangled corpse — may feature a mote of mad sorcery within it.</p>
            <p>Changelings may take these things and use that magic for their own gains. These items, known generally as tokens (though some glibly refer to them as “souvenirs”), provide the Fae with a curious trick or weird enchantment. The most powerful of these tokens are deliberately crafted by the Others themselves, literally tokens of old promises that bring the Fae to fulfill old obligations with powerful magic, no matter who now holds the object.</p>
            <p>But it’s not all gold spun from straw. The magic inside a token is some of the same magic that pumps inside the hearts of the True Fae, and while powerful, it is in part corrupt. Every token comes with a drawback, a small curse or additional cost that use of the token invokes. A feather in a changeling’s hair may put a spring in her step, but it may muddy her thinking. A pair of gold-rimmed eyeglasses do help her see great distances, but when she wears them she is totally deaf. For every benefit there is a price to pay, a toll taken by the whimsy of Faerie magic.</p>
            <h1>A Token's Mien</h1>
            <p>Tokens, when brought into this world from the Hedge or from Faerie, do not appear as they necessarily would have in those places. In this world, the token appears mundane, almost purposefully uninteresting — metal has no shine to it, wood seems dinged or splintered, paper or parchment frays at the edges.</p>
            <p>Much as changelings have a supernatural seeming, though, so do tokens. When active, a token reveals (only to changelings) a measure of its magic. The token may appear as it did in the Hedge or in Arcadia, or it may reveal new glimpses of odd magic. It’s rarely an extreme shift (though some particularly power tokens offer staggering shifts in perception); a ratty baseball hat taken from a body in the Hedge doesn’t become a gleaming crown when active. It still looks like a baseball hat, but now it looks new, pristine, its colors bright, perhaps with a strange logo representing no familiar team. The baseball hat may offer non-visual changes, too — the changeling can smell fresh popcorn, or hear the sharp crack of a bat against a fastball. Of course, there’s often a dark element to the token’s mien, too — the brim of the baseball hat may cast a very dark shadow over the changeling’s face, or it may wet her hair with blood when worn. Bad magic taints the mien in some small but noticeable way.</p>
            <h2>Activating a Token</h2>
            <p>Using a token occasionally requires a physical action on the part of the changeling — stroke it three times, whisper a rhyme, drizzle a drop of blood upon it — though many simply require the changeling’s presence and desire. Most tokens have a power that is used upon activation. To activate a token, the player rolls the character’s Wyrd. Willpower may not be spent to add dice to this roll. Alternately, the player may spend a point of Glamour to activate the token’s power automatically, fueling the enchantment within with her own magic.</p>
            <p><b>Dice Pool:</b> Wyrd</p>
            <p><b>Action:</b> Varies by Token</p>
            <p>Roll Results</p>
            <p><b>Dramatic Failure:</b> The token fails to trigger, but the user still suffer whatever drawback is listed with the token.</p>
            <p><b>Failure:</b> The token's power fails to trigger.</p>
            <p><b>Success:</b> The token functions as noted in its description.</p>
            <p><b>Exceptional Success:</b> The changeling’s own magic is invigorated by the success. The next time the player rolls the character’s Wyrd (as part of a Contract or perhaps to activate a token), she gains a +1 die bonus to that roll.</p>
            <BaseTable
                headers={['Modifier', 'Situation']}
                data={[
                    { Modifier: "+2", Situation: "The character is withing a Hollow when the token is used." },
                    { Modifier: "+1", Situation: "The character is in the Hedge when the token is used" },
                    { Modifier: "-1", Situation: "The character has particulary high Clarity (8-10)" },
                    { Modifier: "-1", Situation: "Distractions are present (noise, crowds)." }
                ]

                } />
            <h2>The Catch</h2>
            <p>Every token has a catch, a dread cost that allows anybody to use the token. This means that a human, mage, vampire, werewolf or Promethean can use the token and gain its benefit without rolling Wyrd or spending Glamour. It also means that a changeling can gain the token’s benefit without rolling Wyrd (perhaps she has too few Wyrd dice to achieve a reasonable rate of success) or spending Glamour (perhaps she doesn’t want to spend her Glamour, or has too little of it to go around).</p>
            <p>The catch is always a cursed effect. By giving up the Wyrd roll or Glamour cost that a token demands, the token will still work but does so only by taking a severe toll upon the user. Every token has its own catch.</p>
            <p>Note that, in addition to the catch, the token’s drawback still occurs. Both negative effects go off, and the token’s benefit occurs automatically without any Wyrd roll or points of Glamour.</p>
            <p>Some catches involve a consciously paid cost (involving pain or penalties). Other tokens will take their grim tolls out of the character’s hide without asking. It should also be noted that tokens resist any sort of alteration to their form from outside sources. A mage who uses magic to change a token’s shape or a werewolf who attempts to dedicate a token to her body may find that they have accidentally destroyed the token... or increased the power of its drawback.</p>
            <h2>Finding a Token</h2>
            <p>Anything withdrawn from the Hedge or from the lands of Faerie might theoretically be a token. Tokens are not always easy to recognize, however. To determine whether a given object is a token or not, a changeling must roll Wits + Wyrd while in contact with the item. Success allows her to “feel” the familiar tingle of a promise reinforced by Glamour.</p>
        </div>
    );
}
