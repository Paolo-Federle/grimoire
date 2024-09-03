import { filtreArrayOfObjects } from "../../utils"

const universalContractData = [
    {
        "Name": "Contracts of the Board",
        "Rank": "N/A",
        "Cost": "N/A",
        "Dice Pool": "N/A",
        "Catch": "N/A",
        "Action": "",
        "FullDescription": [
            'The Lost possess an intimate understanding of the magic of metaphor, how one thing can be so like another thing that altering one magically alters the other as well. Long ago, some clever changeling recognized the connection between games and war, and forged these Contracts with a power referred to as “the Great Board,” the embodi- ment of strategy play. Each of the great Courts claims to have originated these clauses; while Summer Courtiers swear the shared history of their Court and these powers should be self-evident, the Lost of the Ashen Mirror often claim to have crafted it to beat the Iron Spear at its own game. Nobody mentions the fact that the Gentry so often have affection for powers just like these.',
            'Contracts of the Board are considered affinity Contracts for all changelings.'
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "N/A",
        "Book": "N/A"
    },
    {
        "Name": "The Honest Eye",
        "Rank": "•",
        "Cost": "●",
        "Dice Pool": "Wits + Wyrd vs Composure + Tolerance",
        "Catch": "Against someone you've caught cheating without this clause",
        "Action": "Reflexive and Contested",
        "FullDescription": [
            'Winning against a skilled opponent can be difficult; overcoming a cheater can prove impossible. This clause helps a changeling level the playing field by unmasking cheating competitors. It can be used to identify a cheater in any formalized competition with a time limit and specified rules, including board games, card games, sports and even formal debates. Unfair advantages (such as those granted by kith blessings) do not count as cheating unless they break the rules of the competition.',
            'Note that no use of the Contracts of the Board counts as cheating for the purposes of this power.'
        ],
        "FullCatch": [
            'The changeling has caught the subject cheating (at any game) in the past without the use of this Contract.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The changeling believes her opponent is playing honestly, whether or not she is.',
            '<b>Failure:</b> The changeling can’t tell whether or not her opponent is cheating.',
            '<b>Success:</b> If the changeling rolls more successes than the subject, she knows whether or not he is cheating.',
            '<b>Exceptional Success:</b> Not only does the changeling know whether or not the subject is cheating, she also knows how.',
            {
                'Suggested Modifiers': [
                    { Modifier: "+1", Situation: "Subject is a known cheater" },
                    { Modifier: "-1", Situation: "Changeling is a known cheater" },
                    { Modifier: "-3", Situation: "Changeling is cheating or has cheated during the same game in which she uses this power" },
                ]
            }
        ],
        "Description": "Know whether someone is cheating at a formal competition",
        "Book": "SaD 46"
    },
    {
        "Name": "Knowing the Competition",
        "Rank": "••",
        "Cost": "●",
        "Dice Pool": "Intelligence + Wyrd",
        "Catch": "Use in a rematch",
        "Action": "Instant",
        "FullDescription": [
            'Sitting across the board from someone, an infamous chess master among the Lost used to claim, is the only way to truly know them. Chances are, he was speaking of this clause. Use of this power allows a changeling to distill through Glamour her experiences playing a game with another individual into a brief flash of insight into the individual’s methods, granting her a distinct edge. Note that the game the characters shared must be played to completion.'
        ],
        "FullCatch": [
            'The changeling uses this clause during a rematch of the initial competition.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The changeling grossly misjudges her opponent. Her next roll against the individual is automatically a chance roll.',
            '<b>Failure:</b> The power fails to have any effect.',
            '<b>Success:</b> The changeling experiences a brief and sudden moment of insight into how the subject’s mind works. She gains a +4 bonus to her next dice pool rolled against the subject, no matter what the pool is. (So yes, this power allows a character to throw a more accurate punch against a person after having played a game of gin with him.) The character must play another game with the subject before using this Contract on him again.',
            '<b>Exceptional Success:</b> As per success, save the character may use the Contract again without having to play another game with the subject.',
            {
                'Suggested Modifiers': [
                    { Modifier: "+2", Situation: "Game played was directly applicable to the current circumstances (i.e. when in war against a general the character played chess against or in a fight with an Ogre the character once arm-wrestled)" },
                    { Modifier: "-2", Situation: "The subject cheated during the game without the character’s knowledge" },
                ]
            }
        ],
        "Description": "+4 to your next roll to oppose someone you've competed against in something",
        "Book": "SaD 47"
    },
    {
        "Name": "The Living Game",
        "Rank": "•••",
        "Cost": "●●●",
        "Dice Pool": "Occult + Wyrd",
        "Catch": "Play a game analogous to the conflict",
        "Action": "Instant",
        "FullDescription": [
            'At times of war, the Lost are sometimes confused to find their leaders playing games by themselves. If they wait long enough, they may well be shocked to see the game play back.'
        ],
        "FullCatch": [
            'The character uses a game appropriate to the situation at hand. For example, using chess in a competition between two groups of roughly similar size and strength (such as a football game), blackjack in a situation where several groups are combating a single enemy or poker in a situation where multiple groups have taken to fighting every changeling for himself.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The character learns inaccurate information about the battle or game.',
            '<b>Failure:</b> The power fails to take effect.',
            '<b>Success:</b> The movements of the character’s phantasmal opponent’s pieces or the composition of its cards represents the developments in a different conflict (of the character’s choosing). Through this clause he gains a detailed account of the combat or competition that allows him to react to developments on the field without the need for reports. (This is especially useful when combined with the Game Master’s Table, below.)',
            'The information granted by a game is limited to tactical information. While the changeling knows that the loss of a chess piece means that an individual or unit is no longer relevant to the battle, he does not know whether or not that person was captured, injured, or killed.',
            '<b>Exceptional Success:</b> The character’s phantasmal partner performs actions before they occur on the battlefield, granting the character a +3 bonus on all rolls for determining tactics to use in the real conflict that the game represents.',
            {
                'Suggested Modifiers': [
                    { Modifier: "+3", Situation: "Commander of the enemy faction or team is also using this Contract and using the same game to represent the conflict" },
                    { Modifier: "+1", Situation: "Character has played the game against the leader of the enemy group" },
                    { Modifier: "-2", Situation: "Character has never personally met the leader of the enemy group" },
                    { Modifier: "-5", Situation: "Character is playing a game with which she is unfamiliar" },
                ]
            }
        ],
        "Description": "Predict tactical developments in a conflict by playing a game against yourself",
        "Book": "SaD 47"
    },
    {
        "Name": "The Game Master's Table",
        "Rank": "••••",
        "Cost": "●●●● (○)",
        "Dice Pool": "Manipulation + Wyrd",
        "Catch": "Prepare custom pieces representing each player",
        "Action": "Instant",
        "FullDescription": [
            'This clause allows the changeling to use her game board to give information as well as receive it. She must provide individuals or unit leaders with small tokens appropriate to the game she intends to play (such as playing cards or chess pieces) before the conflict begins. Then she may deliver orders to her troops by moving her pieces across the board (or whatever actions are appropriate to the chosen game). The troops are not compelled by this power, but they do recognize the impulses towards given actions as commands from their leader.'
        ],
        "FullCatch": [
            'The character takes time beforehand to prepare each game piece or card to be given out and used on the board, personalizing it to the character it will represent. This effort takes an hour of work for a standard chess set or deck of cards, requires access to the followers, and may necessitate one or more successful Crafts rolls depending on circumstances at the Storyteller’s discretion.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The power takes effect, but the commands given come out garbled. This levies a -3 penalty on all attempts to command from behind the scenes for the remainder of the scene.',
            '<b>Failure:</b> The Contract has no effect.',
            '<b>Success:</b> The game becomes magically bound to the character’s followers. The character transmits commands to his followers on the field through the use of a game board or playing cards. This transmission is instantaneous and recognized by the receiver for what it is. The commands can only provide information of a tactical nature — a command to take a ridge or destroy an enemy unit works, for example, but not a command to put on a disguise or sing a song. When used in conjunction with the Living Game clause, this power allows a character to lead an army and respond to enemy movements without being anywhere near the combat.',
            'Characters watching a changeling use this power cannot understand the connections between what she is doing and what is occurring on the battlefield unless they use the Living Game to do so. It has been said that some particularly decadent leaders duel or determine Court leadership by preparing two groups of humans (or, if rumor is to be believed, changelings) and then sitting at the same table, their dark game reflected in the deaths of dozens. Certainly the Gentry have been known to engage in such grim play.',
            'This power has a range of (Wyrd) miles. The Contract’s effect lasts for one scene, but the character may spend a Willpower point to extend the duration until the next sunrise or sunset, whichever comes first. At the end of the power’s duration, the items provided to the followers to establish the connection transform into poetically appropriate detritus reflecting the Contract’s user: a Fairest’s cards might become rose petals while a Darkling’s chess pieces may decay into dry cobwebs. The power cannot be used again without providing the followers with new pieces.',
            '<b>Exceptional Success:</b> As above, save the followers react with exceptional speed and coordination, as if an extension of their commander’s will. Characters under the user’s command gain a bonus of +2 to all actions for the remainder of the scene (regardless of the length of the effect).',
            {
                'Suggested Modifiers': [
                    { Modifier: "+3", Situation: "Commander of the enemy faction or team is also using this Contract and using the same game to represent the conflict" },
                    { Modifier: "+2", Situation: "Character chooses a game particularly appropriate to the conflict at hand" },
                    { Modifier: "+1", Situation: "Character has played the game against the leader of the enemy group" },
                    { Modifier: "-2", Situation: "Character has never personally met the leader of the enemy group" },
                    { Modifier: "-5", Situation: "Character is playing a game with which she is unfamiliar" },
                ]
            }
        ],
        "Description": "Tactically coordinate a conflict by playing a game against yourself",
        "Book": "SaD 48"
    },
    {
        "Name": "The Cheater's Gambit",
        "Rank": "•••••",
        "Cost": "●●●●○",
        "Dice Pool": "Manipulation + Wyrd vs Composure + Tolerance",
        "Catch": "Through a game you've played against someone who's died recently",
        "Action": "Instant and Contested",
        "FullDescription": [
            'Sometimes an even battlefield simply isn’t even enough. This clause allows a changeling to wreak havoc on his enemies — by knocking over game pieces or using a marked deck in a game against an invisible opponent.'
        ],
        "FullCatch": [
            'Changeling has played this game with an individual who died within the past week.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The attempt at cheating rebounds on the character, causing the group she supports to suffer a -4 to all rolls during the next turn.',
            '<b>Failure:</b> The power fails to affect the targets.',
            '<b>Success:</b> The character cheats the subject’s followers in the game of fate, levying a far-ranging if short-lived curse against their efforts. On the following turn, all followers of the subject involved in the conflict suffer a -4 penalty to any dice roll for their own actions (resistance dice pools are not affected). This penalty fades the following turn. This sudden downswing of fortune may manifest as a moment of bad weather, a broken communication line, a sudden rout or a simple turn of horrid luck. Whatever way fate takes its toll on the enemy, the subject of the Contract (i.e. the enemy leader) automatically knows that a character just messed with fate on a large scale. In short, he knows the character cheated.',
            '<b>Exceptional Success:</b> As success, save the subject doesn’t realize that a Contract was used.',
            {
                'Suggested Modifiers': [
                    { Modifier: "+3", Situation: "Commander of the enemy faction or team is also using this Contract and using the same game to represent the conflict" },
                    { Modifier: "+1", Situation: "Character has played the game against the leader of the enemy group" },
                    { Modifier: "-2", Situation: "Character has never personally met the leader of the enemy group" },
                    { Modifier: "-3", Situation: "Subject suspects that character will attempt to cheat in some way" },
                    { Modifier: "-5", Situation: "Character is playing a game with which she is unfamiliar" },
                ]
            }
        ],
        "Description": "Cheat an entire side of a conflict out of fate, inflicting -4 briefly",
        "Book": "SaD 48"
    },
    {
        "Name": "Contracts of Dream",
        "Rank": "N/A",
        "Cost": "N/A",
        "Dice Pool": "N/A",
        "Catch": "N/A",
        "Action": "",
        "FullDescription": [
            'While all changelings are capable to some extent of entering and manipulating a sleeper’s dreams, the Contracts of Dream are a particularly potent means of doing so. They grant the changeling more power in the dreamscape, allowing her to control and direct a sleeper’s dreams, and also to manipulate the nature of dreams themselves without means of a pledge. They may also grant some insight into the dreamlike nature of the Hedge.',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "N/A",
        "Book": "N/A"
    },
    {
        "Name": "Pathfinder",
        "Rank": "•",
        "Cost": "●",
        "Dice Pool": "Intelligence + Wyrd",
        "Catch": "Pluck a Thorn within the day",
        "Action": "Instant",
        "FullDescription": [
            'The first and most basic clause allows the changeling to divine the nature of the Hedge in a certain area. Pathfinder can find Hollows, trods, paths to and from Faerie and other details of the local Hedge, such as what sorts of goblin fruits grow there.'
        ],
        "FullCatch": [
            'The changeling must have plucked a Thorn from the local Hedge and shed a single drop of blood while doing so within the last day.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The Contract yields wholly inaccurate information about the Hedge, suggesting paths where there are none, marking poisonous fruits as beneficial or otherwise utterly confounding otherwise useful information.',
            '<b>Failure:</b> The changeling learns no useful information about the local Hedge.',
            '<b>Success:</b> For each success on the roll, the changeling learns a single pertinent fact about the local Hedge. In most cases, this information is just that — a statement about whether something exists. It doesn’t necessarily point out where a Hollow or pathway might exist, just the fact of its presence. The distance in which such information-drawing is effective is the changeling’s line of sight. Therefore, this power may be curtailed by a mysterious fog in the Hedge or a smoke cast by the Hedge’s burning.',
            '<b>Exceptional Success:</b> As with an ordinary success, but the achievement of the exceptional success yields information about the location of features known to be in the Hedge.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-1", Situation: "The changeling has never witnessed the local Hedge before, as with visiting a new freehold or otherwise finding the “Hedge-scape” vastly different than what she may have expected." },
                ]
            }
        ],
        "Description": "Intuit features in the local Hedge",
        "Book": "CTL 124"
    },
    {
        "Name": "Forging the Dream",
        "Rank": "••",
        "Cost": "●",
        "Dice Pool": "Wits + Wyrd",
        "Catch": "Touch hands to your temple and the dreamer's",
        "Action": "Instant",
        "FullDescription": [
            'The changeling invoking this clause becomes as the director, cinematographer and editor of a movie, only the media in which she works is the dreaming mind of her subject. The changeling may literally change her subject’s dreams to depict whatever the changeling wishes, from bucolic idylls to lewd romps to harrowing tribulations. She may plague her subject with vicious antagonists or rain a cascade of rose petals down: the details are fully under her control. The only limitation is that the changeling may never depict the subject’s death, though she may certainly imply it.',
            'Crafting dreams in this manner is very much an art form among changelings. Some prefer to work with overt themes, while others use subtle symbolism and soft focus to create feelings more than literal episodes. Indeed, some changelings are so adept with dream-craft that they can provoke strong emotional responses from their sleeping subjects that they can glean Glamour from them.',
            'The changeling must be able to see her subject in order to use this power. She needn’t be in the character’s actual presence, however, and some changelings use this power on subjects they view via video cameras or even from painted portraits or still photographs.'
        ],
        "FullCatch": [
            'The changeling must stand or sit beside her subject, touching her own temple and that of the dreamer.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The attempt to manipulate the sleeper’s dreams fails and leaves the changeling discombobulated, unable to tell the real world from the dream he was attempting to shape. For the remainder of the scene, the changeling is unable to focus sufficiently to expend any Willpower. Further, the sleeper (eventually) wakes from sleep remembering a distinct image of the changeling, even if she has no idea what he might have been trying to do.',
            '<b>Failure:</b> The Contract fails to function but otherwise involves no sign of attempted use.',
            '<b>Success:</b> The character may edit the sleeper’s dreams and dictate their content, with the sole exception of depicting the sleeper’s death. Each use of this Contract works for a single, vivid dream, which the subject recalls distinctly upon waking. If one of the Fae is in the sleeper’s dream as well, the changeling must vie for control of the dream as usual (p. 198).',
            '<b>Exceptional Success:</b> No additional effect.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-1", Situation: "The changeling isn’t in the immediate physical vicinity of the subject." },
                    { Modifier: "+1", Situation: "The changeling knows the subject at least superficially, having exchanged words or introductions with him at least once." },
                    { Modifier: "+3", Situation: "The changeling has a close, personal relationship with the dreamer." }
                ]
            }
        ],
        "Description": "Control the contents of a sleeper's dream",
        "Book": "CTL 125"
    },
    {
        "Name": "Phantasmal Bastion",
        "Rank": "•••",
        "Cost": "●",
        "Dice Pool": "None",
        "Catch": "A token gifted from a loved one or enemy",
        "Action": "Instant",
        "FullDescription": [
            'This clause bolsters the changeling’s ability to participate in and withstand conflicts with other changelings in the dreamscape. Using this power conjures an elaborate suit or even edifice of “armor,” or conjures a fanciful weapon, both of which exist only in the dreamscape. Both weapon and armor appear as the changeling wishes, though depictions of seeming, kith and Court are extremely popular expressions.'
        ],
        "FullCatch": [
            'The changeling carries a token of favor, such as a garter belt or ring, given freely to her by a living enemy or one of his loved ones or family members.'
        ],
        "Roll Results": [
            'Invoking this clause involves no roll, but the changeling must choose which type of fortification she wishes to invoke. If she chooses a defensive augmentation, she gains a number of phantom points of Willpower for the purposes of determining how much damage in the dreamscape she may suffer before falling to exhaustion. These phantom Willpower points are lost first during the oneiromachy. If she chooses an offensive augmentation, she may double her Wyrd for the purposes of seeing how effective her attacks in the dreamscape are. A changeling may invoke this power for both offensive and defensive augmentation, at a cost of one Glamour each, but she may not “stack” multiple offensive or defensive augmentations. '
        ],
        "Description": "Gain Wyrd as a bonus to oneiromachic attack or defense",
        "Book": "CTL 126"
    },
    {
        "Name": "Cobblethought",
        "Rank": "••••",
        "Cost": "●",
        "Dice Pool": "Intelligence + Wyrd",
        "Catch": "Thread from the dreamer's bedclothes",
        "Action": "Instant",
        "FullDescription": [
            'Using this clause allows the changeling to reach into his subject’s dreams and extract an item or image from them that then exists or plays out in the real world. The subject need not be asleep for the changeling to attempt this; he simply must have had a dream at some point in recent events, which allows the changeling a trove of such experiences and artifacts to draw from. ',
            'The exact nature and duration of the Contract’s ability to echo the dreamer’s thoughts depends on how successful the changeling is at invoking the power. In general, though, images and symbols will mostly as they did in the dream (as with a changeling who assumes the “costume” of an entity in the dream), while an item will appear by and large as it did in the sleeper’s thoughts. Determining which objects may be available from the subject’s dream is largely the Storyteller’s responsibility, though the Storyteller may choose to let the player take more creative control of the subject’s dreams, as long as such control isn’t abused.',
            'Items pulled from dreams in this way have a hazy, imprecise sensory quality to them. A dream-sword, for example, would feel like soft metal and fade around its edges, but would cut nonetheless. Objects are treated as normal, unexceptional equipment despite their appearance. The guise of a terrifying night-fiend might shift subtly each time onlookers see it. A murky fog drawn from a dream might leave a runner feeling as if he were plodding through oatmeal, even though he was running as fast as he could.',
            'Items drawn from dreams in this manner are made of dreamstuff, and thus don’t have to be reasonably carried by the changeling. That is, the changeling could conceivably draw out the fog mentioned above, a rainstorm from a dream, or even something bigger or heavier than a person, such as a life raft or a heavy wooden door. The limitation is a single object or idea, however — the changeling could not withdraw a full castle (made up of walls, hallways, doors, stairs and towers) or a functional car (with its own distinct parts and pieces).',
            'One more limitation is that this Contract may not draw people or thinking entities from dreams. While a changeling would be able to draw the appearance of an individual from a character’s dream, this would manifest as a sort of “costume” that the changeling or another character would wear, and not the individual herself.'
        ],
        "FullCatch": [
            'The changeling must possess at least a single fiber of her subject’s bedclothes, whether a thread from her pillowcase or a full nightshirt.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The changeling reaches into the dreamscape to grab the object of her intentions, but instead pulls back something else entirely, and probably hostile. If it’s an inanimate object, it’s wholly inappropriate to the changeling’s original intentions, and if it’s some conscious creature, it probably reacts with appreciable hostility at being removed from its lair.',
            '<b>Failure:</b> The Contract fails to function but otherwise betrays no attempt on the changeling’s part to rifle the character’s dreams.',
            '<b>Success:</b> The changeling draws forth one concise image or object from the character’s dreams. The image or object remains in reality for a number of turns equal to the number of successes obtained on the roll.',
            '<b>Exceptional Success:</b> As with a normal success, but the object remains permanently in reality. In addition, the changeling may, at any time, banish the dream-item back beyond the wall of dreams.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-2", Situation: "The changeling attempts to draw something from a dream that has seems too fantastical to exist in the real world (a gemstone made from crystallized starlight, the feathers of Pegasus)." },
                    { Modifier: "-2", Situation: "The changeling attempts to draw forth a very specific idea, appearance or item, such as the exact likeness of a dream-tormentor, or the locket the dreamer had when she was five years old that held her parents’ photographs." }
                ]
            }
        ],
        "Description": "Draw a single item or phenomenon out of a dream briefly",
        "Book": "CTL 126"
    },
    {
        "Name": "Dreamsteps",
        "Rank": "•••••",
        "Cost": "●",
        "Dice Pool": "Intelligence + Wyrd",
        "Catch": "Leave a handcrafted item behind in dreams",
        "Action": "Instant",
        "FullDescription": [
            'The changeling climbs into the dreams of a nearby sleeper, briefly appearing in her sleeping thoughts, and then emerges from the shared realm of dreams in the proximity of another sleeper. He traverses an actual distance by using the landscape of dreams as a proxy for physical travel. This travel takes place instantaneously, or at least at the speed of thought.'
        ],
        "FullCatch": [
            'The changeling must carry a physical object that he crafted himself on the journey, which he leaves behind in the dreams of both sleepers. Both sleepers will remember this object, and will feel an inexplicable link to the changeling if they meet him in their waking lives, as they subconsciously recall this item connected to him.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The attempt to travel by dreamways goes horribly awry, with the changeling unable to extricate himself from the dreams at his leisure. Instead, the Storyteller should run a brief nightmare scene in which the dreamer and changeling are both tormented by dreams-turned-nightmares. After that, the changeling is forced out of the dreamscape in the proximity of a sleeper... somewhere.',
            '<b>Failure:</b> The changeling is unable to enter the dreamscape and thus unable to use it as a shortcut in the physical world.',
            '<b>Success:</b> The character enters the dreamscape and may use it to instantaneously traverse physical distances. The physical distance traveled is not greater than 10 miles per success obtained on the roll. The changeling emerges as close as possible to the physical place of his choosing: He emerges from the dreams of the sleeping individual closest to his ultimate destination.',
            '<b>Exceptional Success:</b> As with a standard success (and the extra successes are their own benefit), but with the additional reward of being deposited exactly where he wishes to be. If any changelings understand exactly how this works, they aren’t telling, and those dream-travelers who enjoy the luxury of the exceptional success describe the phenomena as if the stuff of dreams itself carries them exactly where they want to be and then recedes like an unseen ether.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-3", Situation: "The changeling is rushed or fleeing and thus doesn’t have time to gently part the veil of sleep (jeopardizing the slumber of the dreamer and the function of the Contract therefore)." },
                    { Modifier: "+1", Situation: "The changeling personally knows the dreamer at the beginning point of the journey." },
                    { Modifier: "+1", Situation: "The dreamer at the point of entry is having particularly noteworthy dreams (whether of a pleasant or terrifying variety)." }
                ]
            }
        ],
        "Description": "Enter a sleeper's dreams to exit through another's elsewhere",
        "Book": "CTL 127"
    },
    {
        "Name": "Contracts of Hearth",
        "Rank": "N/A",
        "Cost": "N/A",
        "Dice Pool": "N/A",
        "Catch": "N/A",
        "Action": "",
        "FullDescription": [
            'Hearth Contracts are a broad path of beneficial effects, boons that a changeling can grant to an individual or himself when he needs and extra edge or just a little bit of influence from something greater than himself. Folklore is rife with fairies using powers similar to these, and they fit the archetype of “the fairies bless you in some way.”',
            'Unlike other Contracts, Hearth Contracts don’t have a catch. They always cost some amount of Glamour and/or Willpower to invoke. To the contrary, Contracts of Hearth have a ban. That is, the Faerie entities that grant the favors of Hearth can, if their ire is aroused, turn those boons right around and use them to blight the individual. The specific bans are described here with each power, but the faerie host is notoriously ill-tempered when its goodwill is abused. Therefore, the Storyteller has a lot of leeway when to apply the punishment of broken bans. Such retribution always seems to come at the worst possible time.',
            'Many changelings suspect that these bans came about because the Hearth entities with whom the Fair Folk made their original bargains somehow obtained for themselves the better part of the compact between themselves and the fae. It stands to reason, given the nature of these Contracts. (Note also that certain bans may be manipulated for the purposes of causing failure when success would normally be warranted. Granted, the changeling must know that his subject has already received the benefits of one of these Hearth Contracts, but such secrets are easy enough to discern. Indeed, using some of these Contracts in this reverse manner adds a bit of versatility to the Hearth powers. On the other hand, trying to force this ill fate on the same subject more than once alerts the powers of Fate to the fact that they’re being manipulated. The punishment treatment then applies to the changeling attempting to invoke the anti-Contract, as opposed to the desired subject of the anti-Contract.)',
            'Hearth Contracts don’t involve dice rolls to invoke. They simply work, once their costs are paid.',
            'Contracts of Hearth require the changeling invoking them to touch the person upon whom she wishes to place the blessing (or curse), unless the changeling wants to grant herself the boon. Rules for touching an individual can be found on p. 157 of the World of Darkness Rulebook.'
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "N/A",
        "Book": "N/A"
    },
    {
        "Name": "Fickle Fate",
        "Rank": "•",
        "Cost": "●",
        "Dice Pool": "None",
        "Catch": "",
        "Action": "Instant",
        "FullDescription": [
            'It’s easier to curse than to bless. The individual affected by Fickle Fate seems to perform poorly in whatever task he sets himself to. It’s almost unheard of to invoke Fickle Fate for oneself — who wants to fail at what he attempts?'
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            '<b>Effect:</b> The subject of Fickle Fate makes the roll for his next actively attempted instant action, whatever it is, at a -2 dice penalty. Actively attempted actions are those things the character consciously undergoes the effort of doing, not things that occur automatically or reflexively. For example, jumping from a moving car or performing an oratory before the duke would be an actively attempted action, while seeing if wounds force a character into unconsciousness or reflexively resisting some supernatural power would not be.',
            '<b>Ban:</b> The character invoking Fickle Fate may not use it to affect the same subject more than once an hour. If he does, the Fickle Fate visits him on his next attempted action instead of his intended victim.'
        ],
        "Description": "Curse an action for -2",
        "Book": "CTL 128"
    },
    {
        "Name": "Favored Fate",
        "Rank": "••",
        "Cost": "●",
        "Dice Pool": "None",
        "Catch": "",
        "Action": "Instant",
        "FullDescription": [
            'As with Fickle Fate, this clause alters the flow of fortune when a subject attempts an action. Favored Fate, though, makes for more appealing results: songs sound a little better, bullets find their mark and the acid-tongued critic thinks of just the right thing to say at the very moment he needs to say it. Favored Fate is a more lofty clause than Fickle Fate (that is, it’s classified as a higher dot rating) because it’s harder to create than destroy, and the results of this power are typically more positive.'
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            '<b>Effect:</b> The beneficiary of Favored Fate makes the roll for his next actively attempted instant action at a +4 dice bonus. Again, actively attempted actions are those things the character consciously undergoes the effort of doing, as described above.',
            '<b>Ban:</b> If Favored Fate is used to augment the same specific type of action — shooting at an enemy, climbing a balcony, chasing prey — before the sun has risen or set since the last attempt it affected, the powers that be frown on the abuse of their attentions. Each time this occurs, one action, decided upon by the Storyteller for dramatic effect, automatically fails, with no dice roll involved. This is just a standard failure and will not yield a dramatic failure result, so it’s best used on actions that would normally not depend upon a chance die.'
        ],
        "Description": "Bless an action for +4",
        "Book": "CTL 128"
    },
    {
        "Name": "Beneficent Fate",
        "Rank": "•••",
        "Cost": "●",
        "Dice Pool": "None",
        "Catch": "",
        "Action": "Instant",
        "FullDescription": [
            'By altering the attentions of fortune, the changeling guarantees success on his subject’s next endeavor.'
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            '<b>Effect:</b> The subject of the Beneficent Fate makes no roll for his next actively attempted instant action. As always, actively attempted actions are defined as actions the character consciously undergoes the effort of doing, as described above. The character automatically achieves a single success on the attempt, as if she had made whatever roll was necessary and factored in all the modifiers before casting the dice. Obviously, Beneficent Fate may not help much in a contested action, as the one success it provides can be readily outstripped by the character’s opponent. Attacks also inflict only one point of damage; a called shot to the head grazes the temple rather than inflicting an instant kill, for instance.',
            '<b>Ban:</b> A subject may benefit from the favors of Beneficent Fate only once per day. If the Contract is invoked on a sigle character more than once in a single day, the subject’s next actively attempted instant action is instead resolved with a chance die, regardless of what dice pool or modifiers actually apply to the roll.'
        ],
        "Description": "Bless an action with guaranteed minimal success",
        "Book": "CTL 128"
    },
    {
        "Name": "Fortuna’s Cornucopia",
        "Rank": "••••",
        "Cost": "●",
        "Dice Pool": "None",
        "Catch": "",
        "Action": "Instant",
        "FullDescription": [
            'This clause provides a curious, open-ended blend of luck and the competence of the individual favored by it. It’s often said that you get out of your efforts what you put into them, and nowhere is this more true than under the benediction of Fortuna’s Cornucopia.'
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            '<b>Effect:</b> The beneficiary of Fortuna’s Cornucopia makes the roll for his next actively attempted instant under the benefit of the 8 again rule. Actively attempted actions are those things the character consciously undergoes the effort of doing, as described above. The 8 again rule is described on p. 134 of the World of Darkness Rulebook.',
            '<b>Ban:</b> If Fortuna’s Cornucopia is visited upon an individual more than once in a single day, the Contract fails to grace the subject in its standard manner. If this blessing is invoked more frequently for the character, one action, decided upon by the Storyteller for dramatic effect, automatically results in a dramatic failure, with no dice roll involved. The fates treat these as general dramatic failures, not to be automatically construed as catastrophic failures or fatal failures. For example, a character may accidentally reveal his identity when he’s trying to masquerade as someone else (as opposed to simply failing to convince his mark that he’s another person).'
        ],
        "Description": "Bless an action with 8-Again",
        "Book": "CTL 129"
    },
    {
        "Name": "Triumphal Fate",
        "Rank": "•••••",
        "Cost": "●○",
        "Dice Pool": "None",
        "Catch": "",
        "Action": "Instant",
        "FullDescription": [
            'The blessings of Triumphal Fate are significant, as suggested by the name of the clause. Simply put, any effort made under the auspices of Triumphal Fate is bound for roaring success.'
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            '<b>Effect:</b> The recipient of the Triumphal Fate doesn’t make a roll at all for the action designated by the changeling invoking the power. Instead, he achieves an exceptional success on that action. Note, however, that Triumphal Fate works only on extended actions. As well, it doesn’t work on extended, resisted actions. Only a singular effort on the part of the individual may gain the benefits of the Triumphal Fate, such as writing a symphony, researching a lost secret or building a device. The Triumphal effort also occurs in as short a time as possible: whatever the normal die roll time measurement is, the effort takes only one increment to perform. Note also that this Contract generates the minimum number of successes necessary to create an exceptional success.',
            'Although the product of a Triumphal Fate is indeed superior, Storytellers are encouraged to sow a seed of doubt into those results. Such flaws shouldn’t be obvious, as the Triumphal Fate certainly earns its name, but because the masterpiece came as a result of supernatural blessing and not the true innovation of the creator, some degree of that artifice should be evident to a fellow master who inspects the work. For example, the symphony might have a single hollow note, the lost secret may omit a tiny danger or drawback (while exposing all others), or the device might require more electrical power than it seemingly should. In all cases, these flaws should be evidence of the imperfect powers that generated them, and not massive design failures that would make an opus a laughingstock.',
            '<b>Ban:</b> Triumphal Fates come only rarely, and those who would supplant the Muses with whatever inscrutable powers that inspire this Contract’s successes are in for an ugly surprise. If any character is set to be the beneficiary of a Triumphal Fate more than once within a period of a year and a day, the action designated for the Triumphal Fate is doomed to be a dramatic failure instead of an exceptional success. The architects of Fate aren’t stupid, though, and a changeling who attempts to deliberately set up a failure in this method is going to find himself the recipient of disaster, instead. In fact, trying to wrangle this Contract in that manner probably generates a result beyond what mere rules can suggest. But believe us, if there were such a thing as a “horrendous failure, and malignant aftermath” on a die roll, changelings who try to contrive a situation like this would earn it.'
        ],
        "Description": "Bless an action with guaranteed exceptional success",
        "Book": "CTL 129"
    },
    {
        "Name": "Contracts of Hours",
        "Rank": "N/A",
        "Cost": "N/A",
        "Dice Pool": "N/A",
        "Catch": "N/A",
        "Action": "",
        "FullDescription": [
            'The paths to and from Arcadia twist through time and space. Changelings may return after a decade in Arcadia to find only four days have passed, and the reverse is also common. These Contracts represent bargains struck to gain some control over the fickle nature of Faerie time. Actually walking into and out of past and future is impossible for changelings (and probably even the Gentry), but changelings can draw on these Contracts to achieve notable results all the same.',
            'The Contracts of Hours are considered affinity Contracts for all changelings.'
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "N/A",
        "Book": "N/A"
    },
    {
        "Name": "Restoration of Dawn Beauty",
        "Rank": "•",
        "Cost": "●",
        "Dice Pool": "Crafts + Wyrd",
        "Catch": "Family property from before the Durance",
        "Action": "Instant",
        "FullDescription": [
            'This Contract allows the user to transform an old, dingy or corroded object into a younger object in better condition. Wilted flowers suddenly appear newly picked, yellowed, cracking paper becomes crisp, white and new and corroded metal becomes shiny and smooth.'
        ],
        "FullCatch": [
            'The changeling or some member of her family owned this object before the changeling was abducted.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The object ages rapidly and crumbles to dust.',
            '<b>Failure:</b> The clause fails, and the device is unaffected.',
            '<b>Success:</b> With a touch, the changeling causes any object up to Size 3 to become as if the object were newly made. A careful examination by either experts or scientific instruments confirms that the object is of very recent manufacture. A pair of old shoes with worn-out soles and brittle shoe leather appear newly made with unworn soles and freshly tanned leather. This clause has no effect on living creatures. However, it can make the decaying remains of plants and animals appear freshly dead. However, this clause does not repair any damage that is not caused by age and does not replace any missing parts other than small pieces that have been worn away or tiny bits that have flaked off from age or corrosion. An old book that was torn and charred by a fire appears to be a new book that was torn and charred by a fire. The changeling must touch an object to affect it.',
            '<b>Exceptional Success:</b> The object is also cleaned of all dirt and stains, and becomes more resistant to age, lasting three times as long as normal under normal use.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-1", Situation: "The changeling stole the object." },
                    { Modifier: "+1", Situation: "The object was a gift to the changeling." }
                ]
            }
        ],
        "Description": "Restore an object to fresh novelty",
        "Book": "RoS 102"
    },
    {
        "Name": "Frozen Moment",
        "Rank": "••",
        "Cost": "●●",
        "Dice Pool": "Wits + Wyrd",
        "Catch": "Sunrise or sunset",
        "Action": "Instant",
        "FullDescription": [
            'The changeling can freeze an object in time for a few minutes. The object cannot be moved or harmed for the duration of the clause.'
        ],
        "FullCatch": [
            'The changeling performs this clause at sunrise or sunset.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The object flies violently across the room, possibly shattering or harming someone or something else.',
            '<b>Failure:</b> The Contract fails, and the object is unaffected.',
            '<b>Success:</b> The changeling touches an object and freezes it in time and space for up to one scene. The changeling can determine precisely how long he wishes for an object to remain frozen in time. While the clause’s effects last, the object is completely outside of time — the object cannot move or be moved and is immune to all damage. A water glass that the object dropped when this clause is used upon it remains hanging immovably in mid-air with the water unspilled until the duration expires. Also, no time passes for an object, so if an alarm clock was ringing when it was frozen, it remains silently frozen in time for the duration and then finishes ringing as soon as the Contract expires. The changeling can use this clause on any object up to Size 3, and much touch the object to use it. This clause cannot be used on living or undead creatures.',
            '<b>Exceptional Success:</b> The object can remain frozen in time until the sun next rises or sets.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-1", Situation: "The object has not been moved in the last scene." },
                    { Modifier: "+1", Situation: "The object is in motion when the changeling uses this clause." }
                ]
            }
        ],
        "Description": "Freeze an object outside time for a scene",
        "Book": "RoS 103"
    },
    {
        "Name": "Thief of Days",
        "Rank": "•••",
        "Cost": "●●",
        "Dice Pool": "Investigation + Wyrd",
        "Catch": "Know a dead owner's name",
        "Action": "Instant",
        "FullDescription": [
            'This Contract causes an inanimate object to rapidly age by the character staring at the object. In a few moments, the changeling causes the object to age and decay as if years or decades have passed.'
        ],
        "FullCatch": [
            'The changeling knows the name of a former owner of the object, who’s now dead.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> Some object the changeling carries or wears suffers the effects of this clause.',
            '<b>Failure:</b> The clause fails, and the object is unharmed.',
            '<b>Success:</b> By staring intently at an object no more than a number of yards equal to the character’s Wyrd away, the changeling can cause the object to corrode and decay. Each success rolled on this clause causes one level of damage to the object, ignoring the object’s Durability. If the object is examined by experts or specialized instruments, all damage caused by this clause appears to have been perfectly natural and to have been caused by the ravages of time. The changeling can affect any object up to Size 10 with this power, but this clause cannot be used to affect living creatures. Tokens and other fae objects cannot be affected by this clause, as they are partially outside time.',
            '<b>Exceptional Success:</b> Beyond the advantages gained by rolling multiple successes, no special bonus is gained.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-1", Situation: "The changeling can either not see the object clearly or can see only a portion of the object, such as a gun in a holster." },
                    { Modifier: "+1", Situation: "The changeling touches the object." }
                ]
            }
        ],
        "Description": "Damage an object with the weathering of age",
        "Book": "RoS 103"
    },
    {
        "Name": "Flickering Hours",
        "Rank": "••••",
        "Cost": "●●○",
        "Dice Pool": "Wits + Wyrd",
        "Catch": "Smash a timepiece",
        "Action": "Instant",
        "FullDescription": [
            'The changeling learns to alter the rate time passes for her while she is in the Hedge. She can cause time to pass either faster or slower for her and her companions while they are in the Hedge.'
        ],
        "FullCatch": [
            'The character smashes a clock, watch or other timekeeping instrument as she activates the clause.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The character loses control over the dilating time; she may find upon her return that far more or far less time has passed than she had hoped.',
            '<b>Success:</b> The character can change the rate that time passes for her and her companions while they are in the Hedge. She must use this clause when she enters the Hedge, and the altered time rate affects her and any companions who enter the Hedge with her. She can cause time to pass either faster or slower in the Hedge, with the degree of difference based on how many successes she rolls.',
            '<b>Failure:</b> The clause fails, and time for the character passes the same in the Hedge as in the mortal world.',
            {
                'Time table': [
                    { Successes: "1 success", 'Time Differential': "x2" },
                    { Successes: "2 successes", 'Time Differential': "x3." },
                    { Successes: "3 successes", 'Time Differential': "x4" },
                    { Successes: "4 successes", 'Time Differential': "x5" },
                    { Successes: "5 successes", 'Time Differential': "x6" }
                ]
            },
            'If she rolls three successes, she can cause time to pass either four times faster or four times slower for her and her companions while they are in the Hedge. She could spend eight hours in the Hedge, and when she returned to the mortal world, either 32 hours or two hours will have passed. This Contract is an excellent way to pass time quickly or to retreat to the Hedge to sleep, heal or find time to finish an important project in an unnaturally short amount of time. The one limit on this Contract is that this differential time rate affects everyone who accompanies the changeling on that particular trip into the Hedge; this differential time rate ends for all of these characters as soon as any of these individuals leaves the Hedge.',
            '<b>Exceptional Success:</b> Beyond the advantages gained by rolling multiple successes, no special bonus is gained.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-3", Situation: "The changeling has a working timepiece on her person." },
                    { Modifier: "-1", Situation: "Any of the changeling’s companions has a working timepiece on his person." },
                    { Modifier: "-1", Situation: "The changeling cannot see any portion of the sky (looking through a window counts) when using this Contract." },
                    { Modifier: "+1", Situation: "The changeling enters the Hedge at sunrise or sunset." }
                ]
            }
        ],
        "Description": "Alter the time differential between the Hedge and mortal world",
        "Book": "RoS 103"
    },
    {
        "Name": "Leaping Toward Nightfall",
        "Rank": "•••••",
        "Cost": "●●●●○",
        "Dice Pool": "Investigation + Wyrd vs Composure + Tolerance",
        "Catch": "Subject touches a Hedge gate",
        "Action": "Instant or instant and contested",
        "FullDescription": [
            'The changeling causes a person or object to jump forward in time. The target instantly vanishes and reappears at the predetermined time. No time at all passes for a person or object sent forward in time.'
        ],
        "FullCatch": [
            'The changeling uses this ability when the object or person is touching or moving through a gateway into the Hedge.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The changeling accidentally slows herself in time for one scene. She reduces her Speed and Initiative rolls by half (round down) and gains a -2 penalty to all Dexterity and Wits rolls for the scene.',
            '<b>Failure:</b> The Contract fails, and the target does not move forward in time.',
            '<b>Success:</b> The changeling sends the target forward in time. She can use this Contract on any object of Size 10 or less or on any person or supernatural being. Sending living beings ahead in time requires a contested roll. The changeling must touch the target when using this Contract.',
            'The number of successes determines how far into the future the changeling can send the person or object. The changeling can determine down to the second precisely how far in the future she wishes to send the target, as long as this time is less than the maximum allowed by the number of successes she rolls.',
            {
                'Time table': [
                    { Successes: "1 success", 'Future Time': "One turn" },
                    { Successes: "2 successes", 'Future Time': "One minute." },
                    { Successes: "3 successes", 'Future Time': "One hour" },
                    { Successes: "4 successes", 'Future Time': "One day" },
                    { Successes: "5 successes", 'Future Time': "1 week" }
                ]
            },
            '* Add one week per additional success.',
            'The target appears at the future time in the exact same space the target occupies in the present. If some object occupies this location in the future, the target appears as close to its original location as the target possibly can.',
            'One serious drawback to this clause is that the changeling cannot retrieve the target earlier. Once the target has been moved forward in time, nothing and no one can gain access to the target before the clause’s duration is up.',
            '<b>Exceptional Success:</b> Beyond the advantages gained by rolling multiple successes, no special bonus is gained.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-1", Situation: "The object is less than a year old." },
                    { Modifier: "+1", Situation: "The target would be considered “old” or “antique” by the average person." },
                ]
            }
        ],
        "Description": "Propel a subject into the near future",
        "Book": "RoS 104"
    },
    {
        "Name": "Contracts of Lucidity",
        "Rank": "N/A",
        "Cost": "N/A",
        "Dice Pool": "N/A",
        "Catch": "N/A",
        "Action": "",
        "FullDescription": [
            'One of the biggest challenges any changeling faces is dealing with the ever-present memories of their durance. Try as they might to leave their past behind them, unexpected reminders creep through the tiniest cracks in the Lost psyche, each one with the potential to breech the dam of pseudo-humanity that a changeling wraps around himself upon returning Faerie. Shoring up that dam, bolstering one’s own Clarity, or that of others, is the nominal purpose of this Contract, and the only one that most Lost will ever admit to using them for. Any tool, however, can be dangerous in the wrong hands, which is why many changelings will not speak of, let alone learn, these powers.',
            'The use of Contracts of Lucidity is an inherently slippery moral slope. Meddling in other’s perceptions (or tinkering too much with your own) can easily trigger best-forgotten memories of one’s time in Arcadia, which can only further degrade one’s grasp on reality. Because of this, each clause within the Contract has its own price, a Clarity breaking point which must be rolled against each time the clause is successfully activated. Those who make frequent use of these Contracts often find their Clarity slipping as a result of the constant challenges to it. Which, of course, encourages them to use them more often to bolster, support, or supplement their slipping grasp on reason and coherency. A dangerous cycle, but one which some Lost feel is a necessary evil if they are to survive the ever-growing dangers they face.',
            '<b>The Dangerous Secret:</b> The Contract of Lucidity wasn’t sworn with the force of Lucidity. It was sworn with the force of Madness. There is no force of Lucidity within the Hedge or Arcadia. Changelings tell themselves that this Contract is one forged with the guiding principle of mental stability, but deep down they know the truth. One doesn’t measure a changeling’s Clarity (such as they understand the term) by how lucid he is. One estimates his Clarity by how touched by delirium he is. Or, to be fair, how much he’s managed to elude that touch... so far.',
            '<b>Using Contracts of Clarity for Healing Mental Health:</b> If Storytellers are using the optional rules that cover detailed mechanics for aiding a Lost in regaining their Clarity (pp. 80-81 of Rites of Spring), some of the Contracts of Clarity may aid in these efforts. A counselor who is able to accurately assess her subject’s current Clarity has a better idea of where to focus her therapeutic efforts. Thus, a successful application of Read Clarity on a subject by a counselor gives her a +1 dice bonus to any future counseling challenges.',
            'As well, a successful application of Gift of Lucidity may temporarily make counseling more effective for a changeling, offering a modifier equal to the loaned level of Clarity for all Counseling challenges against him while the Contract is active. Likewise, a changeling who successfully activates Temporary Sanity may give the counselor a number of bonus die equal to his “boost” in Clarity if active during the counseling session.',
            'These same bonuses can be applied to attempts to bring a Lost back from 0 Clarity.'
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "N/A",
        "Book": "N/A"
    },
    {
        "Name": "Read Lucidity",
        "Rank": "•",
        "Cost": "●",
        "Dice Pool": "Intelligence + Wyrd",
        "Catch": "Touch the subject",
        "Action": "Instant",
        "FullDescription": [
            'While those who have time and opportunity can eventually tell a more stable individual from one who’s sunk deeply into the depths of dream and disconnect simply by their words and actions, sometimes one doesn’t have the leisure for lengthy observation. In a pinch, being able to read a target’s mental stability is an invaluable tool for determining how best to deal with a potential madman.'
        ],
        "FullCatch": [
            'The changeling is touching the target, skin-to-skin.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The changeling’s perceptions of the subject’s world-views are dramatically off kilter. She may believe the near-insane Lost to be quite rational, or the logical changeling to be in the throes of a schizophrenic breakdown. While there is no mechanic for this, it will affect the changeling’s perceptions and behaviors. She will be more likely to give credence to the thoughts and suggestions of a changeling she falsely believes to be of high lucidity, or discount those of one she inaccurately perceives as mad. As well, it will color how she sees those who view the Lost differently than she does, perhaps leading her to question their motives or even their own Clarity.',
            '<b>Failure:</b> The clause has no effect.',
            '<b>Success:</b> The changeling is able to gain a grasp of the subject’s relative Clarity rating. While Clarity ratings as a numeric value are a game conceit, the changeling gains insight into how clear the subject’s thinking is, how deeply he is currently being affected by the scars of his time in the durance, and how accurately he is perceiving reality.',
            '<b>Exceptional Success:</b> The changeling also gets a general inkling of cause of the subject’s last Clarity loss, although no specific details are given. She may sense that the Clarity sin was “kidnapping” or “killing a Lost”, but not who was affected or when the sin came about.',
            '<b>Clarity Breaking Point Level:</b> 9'
        ],
        "Description": "Intuit a subject's Clarity. Suffer a breaking point at Clarity 9.",
        "Book": "DitD 69"
    },
    {
        "Name": "Temporary Sanity",
        "Rank": "••",
        "Cost": "●●",
        "Dice Pool": "Occult + Wyrd",
        "Catch": "Stand on one foot, eyes shut, for a minute",
        "Action": "Instant",
        "FullDescription": [
            'High Clarity endows Lost with the ability to sense the world around them in a reasonable and logical manner, as well as endowing them with a chance to perceive the presence of supernatural beings, items or magical effects around them. For those who do not possess as strong a sense of balance between the fae world and the mundane one, Temporary Sanity can serve in its stead. At the cost of risking one’s normal Clarity, this clause temporarily lends the changeling an increased sense of mental balance, along with the benefits that accompany that stability.'
        ],
        "FullCatch": [
            'The changeling stands on one foot, eyes shut, arms at her side, for a full minute before activating the Contract.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The changeling gains no additional Clarity, and for the remainder of the scene, suffers from a -2 dice penalty to any Perception tests, cumulative with any other penalties she may be under.',
            '<b>Failure:</b> The Contract has no effect.',
            '<b>Success:</b> For a number of turns equal to the number of successes rolled, the changeling gains additional Clarity equal to the number of successes rolled. For the duration of the Contract, all of her perceptions (including the opportunity to attempt Kenning rolls or Keen Senses (p. 92, Changeling: The Lost) are made at the higher Clarity rating.',
            '<b>Exceptional Success:</b> The changeling receives the benefits as with a success, but they last for an entire scene.',
            '<b>Clarity Breaking Point Level:</b> 8'
        ],
        "Description": "Briefly increase Clarity. Suffer a breaking point at Clarity 8.",
        "Book": "DitD 69"
    },
    {
        "Name": "Gift of Lucidity",
        "Rank": "•••",
        "Cost": "●/Clarity, ○",
        "Dice Pool": "Presence + Clarity + Wyrd - Resolve + Composure",
        "Catch": "Subject lost Clarity in the last half of the day",
        "Action": "Instant",
        "FullDescription": [
            'Just as Temporary Sanity can bolster a changeling’s own Clarity, Gift of Lucidity allows him to share that beneficial effect with others for a short time. This Contract can buy a changeling time and avoid forcing them to “put down” a motley mate or other valued Lost companion, but it comes at a high price — the temporary loss of one’s own Clarity.',
            'When attempting to activate this Contract, the player must commit a certain amount of his character’s own Clarity into the attempt. No more than three Clarity levels may be committed, and at no point may this “loan” of Clarity lower the activating character’s Clarity below 2. This Contract automatically fails if it is attempted upon a target that does not have the capacity for a Clarity rating, although it can be used on Lost with a Clarity rating of zero, so long as it is successfully activated within 12 hours of their last Clarity loss.',
            'Regardless of whether the target is welcoming the “loan” of Clarity or not, this Contract is always resisted by the target’s Resolve + Composure, as the target’s psyche reflexively resists the intrusion of outside affects upon it.'
        ],
        "FullCatch": [
            'The subject has lost at least one dot of Clarity within the last 12 hours.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The subject receives no benefit from the Contract, but the activating Lost still suffers from the temporary loss of however many Clarity ratings he invested into the attempt for the next scene. The subject must make a single derangement roll, regardless of how many levels he attempted to “lend.” As the loan and loss of Clarity are temporary, should the Lost gain a derangement in this fashion, his normal Clarity eventually negates it — a derangement gained in this manner lasts only for the next month. This does not negate the need to make the Clarity roll for attempting to activate the Contract, however, and a derangement gained from that roll is permanent.',
            '<b>Failure:</b> The Contract has no effect, and neither the target nor activating Lost’s Clarity is changed. The changeling must still make the breaking point roll, however.',
            '<b>Success:</b> For the rest of the scene, the subject gains the benefit of additional Clarity equal to the number “loaned” by the activating changeling. For the duration of the Contract, all of her perceptions (including the opportunity to attempt Kenning rolls or Keen Senses (p. 92, Changeling: The Lost) are made at the higher Clarity rating. Likewise, for the same time period, the activating changeling perceives the world as if his Clarity were lowered by a number of levels equal to those lent to the target. The subject must make a single derangement roll, regardless of how many levels he “lent.” As the loan and loss of Clarity are temporary, should the Lost gain a derangement in this fashion, his normal Clarity eventually negates it — a derangement gained in this manner lasts only for the next month. This does not negate the need to make the degeneration roll for attempting to activate the Contract, however, and a derangement gained from that roll is permanent.',
            '<b>Exceptional Success:</b> For the remainder of the scene, the targeted changeling receives a temporary benefit as if her Clarity had been boosted by a number of levels equal to the number of Clarity rating levels the activating Lost committed to the attempt. However, the activating Lost also retains his Clarity unaffected for that time period. This does not negate the need to make the Clarity roll for attempting to activate the Contract, however.',
            '<b>Clarity Breaking Point Level:</b> 6'
        ],
        "Description": "Lend up to three dots of Clarity. Suffer a breaking point at Clarity 6.",
        "Book": "DitD 70"
    },
    {
        "Name": "Armored Clarity",
        "Rank": "••••",
        "Cost": "●●●",
        "Dice Pool": "Resolve + Clarity",
        "Catch": "Spend the hour with more regular humans than fae",
        "Action": "Instant",
        "FullDescription": [
            'Sometimes a changeling is faced with a situation which he knows, without a doubt, will challenge his Clarity on multiple levels. This can be a situation where the Clarity-shaking action is justified by need — a Hedge-diver who knows he will have to spend an extended period in the Thorns (and thus out of human contact), or a Lost who must ravish a human’s dreams in order to accomplish a greater good. Certainly not all uses of this Contract are entirely altruistic, however, and a changeling who knows he will be breaking an oath by kidnapping and then killing a human might well activate it before the dastardly deed to attempt to reduce the impact such depraved acts have upon his psyche. Regardless of the morality and motivation behind them, when a changeling knowingly faces situations which may challenge their sanity, the ability to bolster one’s Clarity against breaking points temporarily is invaluable.'
        ],
        "FullCatch": [
            'The changeling has spent the last hour in the company of more un-ensorcelled humans than ensorcelled humans or Lost.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The changeling’s Clarity receives no protection, and he suffers a -1 die penalty on his next Clarity roll.',
            '<b>Failure:</b> The Contract has no effect.',
            '<b>Success:</b> For the next scene, the changeling does not make Clarity rolls as he takes actions. Instead, at the end of the scene, the Lost makes a single Clarity roll for the lowest Clarity rating level he violated, and goes forward from there as if this was the only breaking point he triggered. He still must make the Clarity roll for activating this Contract, however, above and beyond the one he makes to cover his multitude of “sins.”',
            '<b>Exceptional Success:</b> As with a success, however the Lost makes receives +1 bonus die on his “lowest of all incurred” Clarity roll, and on any derangement roll which follows as a result. This does not negate the need to make the degeneration roll for attempting to activate the Contract, nor does that roll receive the bonus die.',
            '<b>Clarity Breaking Point Level:</b> 4'
        ],
        "Description": "Make only one breaking point roll for the next scene, plus another at Clarity 4.",
        "Book": "DitD 70"
    },
    {
        "Name": "Thief of Reason",
        "Rank": "•••••",
        "Cost": "●●●○",
        "Dice Pool": "Presence + Intimidation + Wyrd - Willpower + Tolerance",
        "Catch": "Subject expressed doubts of sanity within the hour",
        "Action": "Instant",
        "FullDescription": [
            'While bolstering another changeling’s Clarity may be seen as noble, stealing it away is difficult to justify as anything but a hostile gesture. Stripping another Lost’s sanity, bringing their memories of their time in Arcadia to the forefront of their perception is an effective tactic for combat or ambush, but the changeling who does so too frequently may well find this action leaves him with little Clarity of his own to spare.'
        ],
        "FullCatch": [
            'The subject has made a statement doubting her own sanity within the last hour in front of witnesses.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The changeling’s attempt to steal the subject’s Clarity fails miserably, rebounding back against him. His own Clarity automatically drops by one rating. There is no challenge for this, it is automatic, but he can make a test to attempt to avoid gaining a derangement for this loss. This test does not take the place of the degeneration roll he must make for attempting to activate this Contract.',
            '<b>Failure:</b> The Contract has no effect. The changeling must still make the Clarity roll for attempting to activate this Contract.',
            '<b>Success:</b> The changeling successfully (but temporarily) impacts the subject’s Clarity by triggering an overwhelming and immediate memory (true or not) of her experiences in Arcadia. For the remainder of the scene, the subject’s Clarity is treated as if it were lowered by a number of levels equal to the number of successes achieved by the targeting changeling. This cannot lower the subject’s effective Clarity below 1. Not only does this change in effective Clarity give the subject any penalties to her perception rolls that the temporarily lowered Clarity would (p. 93, Changeling: The Lost), but the sudden and dramatic assault upon her sanity reduces her ability to interact quickly and efficiently with the world around her. For the remainder of the scene, she is at a -2 penalty to initiative, and her Defense is lowered by 1. As well, she must test to see if she gains a derangement. If she gains a derangement from this roll, its effects last for the next month before her normal Clarity is able to fight it off.',
            '<b>Exceptional Success:</b> As with a success, however the subject is even more fettered by the impact. On top of the reduction in initiative and lowered defense, all rolls she makes for the remainder of the scene suffer a -2 dice penalty. This does not include the derangement roll for the temporary loss of Clarity.',
            '<b>Clarity Breaking Point Level:</b> 2',
            {
                'Suggested Modifiers': [
                    { Modifier: "+1", Situation: "The changeling knows at least one of the subject’s Derangements" },
                    { Modifier: "+1", Situation: "The subject currently has a Derangement active (cumulative, +1 per active Derangement)" },
                ]
            }
        ],
        "Description": "Temporarily penalize Clarity, Initiative and Defense, and provoke a derangement roll. Suffer a breaking point at Clarity 2.",
        "Book": "DitD 71"
    },
    {
        "Name": "Contracts of Mirror",
        "Rank": "N/A",
        "Cost": "N/A",
        "Dice Pool": "N/A",
        "Catch": "N/A",
        "Action": "",
        "FullDescription": [
            'The symbolic element of Mirror grants changelings who master its Contracts the ability to perform acts of self-modification and shapechanging. As might be expected, these Contracts are popular among the fae, who might use these powers for anything from convenience to misdirection to outright deceit.'
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "N/A",
        "Book": "N/A"
    },
    {
        "Name": "Riddle-Kith",
        "Rank": "•",
        "Cost": "●",
        "Dice Pool": "Manipulation + Wyrd",
        "Catch": "As that of a changeling you've dined with this week",
        "Action": "Instant",
        "FullDescription": [
            'This clause has its roots in purely fae intrigues, allowing changelings to interact with one another without being recognized. It works with the fundamental nature of changeling physiology to allow a changeling to seem as if she hails from some kith or seeming other than her own. Riddle-Kith works exclusively on the general features of a mien, meaning that it creates only the impression that the individual is of a certain seeming. In other words, it won’t allow the changeling to selectively alter her features, nor will it permit the changeling to emulate a specific changeling, but it will give a clear impression of belonging to an entirely different seeming or kith. The new appearance is notably different from the old. For instance, a storm-attuned Elemental resembling a Japanese goblin who chooses to look like an Ogre wouldn’t look like an oni of similar coloration, but is much more likely to look European or otherwise significantly unlike himself. This Contract doesn’t affect the Mask.'
        ],
        "FullCatch": [
            'The changeling must have dined with a member of the selected kith within the past week.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The changeling loses all control of her attempted illusion, instead appearing simply as something utterly unnatural. She may acquire a hodge-podge of beastly features, or her skin may mottle or spall off. The ultimate effect is that the changeling simply looks horrendous for the duration of the scene instead of looking as if she belongs to a distinct seeming, imposing a -1 die penalty to all Presence dice pools (except those related to Intimidation) during that time.',
            '<b>Failure:</b> The Contract changes nothing about the changeling’s appearance.',
            '<b>Success:</b> The changeling takes on the features of a seeming or kith of her choice, though what features, exactly, the Contract bestows are up to the Storyteller. This power lasts until the next sunrise or sunset, whichever comes first, though the changeling may choose to end the Contract before that if she wishes.',
            '<b>Exceptional Success:</b> As with a standard success, though the changeling may choose the exact array of features this Contract grants her, so long as they’re congruous with the seeming she chose.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-2", Situation: "The character has never seen a member of the seeming in question in person, and instead relies on descriptions or legends of the seeming." },
                ]
            }
        ],
        "Description": "Take the appearance of another seeming or kith,",
        "Book": "CTL 129"
    },
    {
        "Name": "Skinmask",
        "Rank": "••",
        "Cost": "●",
        "Dice Pool": "Stamina + Wyrd",
        "Catch": "One of the subject's possessions",
        "Action": "Instant",
        "FullDescription": [
            'The changeling alters her flesh to appear as another individual. This change affects only a single limb or other aspect of the character, so only her hands or her face or her back can be made to resemble that of another person. This clause is often used to enhance disguises, though it is sometimes used to emulate unique birthmarks, signature tattoos, etc. It affects both Mask and fae mien.',
            'The feature so modeled must be a real feature that exists on a known subject, and it must come from a human (or at least partially human) source.',
            'Changelings can use this Contract multiple times to reproduce multiple features, but the cost must be paid each time and the roll must be made each time, as well.'
        ],
        "FullCatch": [
            'The changeling appropriates an object belonging to the individual whose features she plans to reproduce.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The Contract fails grotesquely, disfiguring the changeling instead of mirroring the model. This may result in a distortion on the face, a withered limb or a horrendous discoloration of the skin. For the remainder of the scene, the character suffers a -1 die penalty to any Presence-based dice pools (except those involving Intimidation) when the disfigurement is visible.',
            '<b>Failure:</b> The changeling fails to emulate the desired feature.',
            '<b>Success:</b> The changeling emulates the feature in question so that it passes inspection by those who would best know the modeled subject. This power lasts for the duration of the scene, though the changeling may choose to end the Contract before that if she wishes.',
            '<b>Exceptional Success:</b> The changeling has so mastered this particular expression of the other character’s physical aspect that she doesn’t have to roll to re-attain this particular feature if he invokes this Contract at a later time. He must still pay the cost as normal, though.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-2", Situation: "The character has never actually seen the feature in question, as with, “Well, she has a birthmark the color and shape of a wine stain just above her bellybutton.”" },
                ]
            }
        ],
        "Description": "Disguise one bodily feature as that of another.",
        "Book": "CTL 130"
    },
    {
        "Name": "Transfigure the Flesh",
        "Rank": "•••",
        "Cost": "●",
        "Dice Pool": "Stamina + Wyrd",
        "Catch": "Stolen garmant that doesn't fit you",
        "Action": "Instant",
        "FullDescription": [
            'This clause allows the changeling to adjust the size of her body, either shrinking or growing as she chooses.'
        ],
        "FullCatch": [
            'The changeling must steal a garment of clothing either far too large or far too small for her to wear. This garment need not correspond to the change made. That is, a changeling doesn’t need to specifically steal a small garment if she intends to shrink.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The character succeeds only in crushing or hyper-extending her internal organs, and suffers a point of lethal damage in the failed attempt to alter her body size.',
            '<b>Failure:</b> The Contract fails, and the changeling is unable to modify her size.',
            '<b>Success:</b> The changeling chooses either to shrink or to grow. The character’s Size then increases or decreases by an amount equal to one-half of the number of successes obtained on the roll (round up). The character may choose to alter her Size by less than this amount, if she wishes. Note that when the character’s Size changes, so, too, does her Health change, which may have some impact on the character’s well-being if she’s suffered any damage. This Contract lasts for the remainder of the scene, though the character may choose to end the Contract at any time before that.',
            '<b>Exceptional Success:</b> As with a normal success (as extra successes increase the versatility of the power), only the character’s Health remains at her regular score if she chooses to shrink herself.'
        ],
        "Description": "Change Size.",
        "Book": "CTL 131"
    },
    {
        "Name": "Oddbody",
        "Rank": "••••",
        "Cost": "●",
        "Dice Pool": "Strength + Wyrd",
        "Catch": "Eat a caterpillar's cocoon",
        "Action": "Instant",
        "FullDescription": [
            'The changeling re-aligns her body’s makeup so that one particular feature becomes something other than human. Examples include forming bestial claws, growing skin like bark or elongating legs.'
        ],
        "FullCatch": [
            'The changeling consumes the threads of a caterpillar’s cocoon.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The clause fails hideously, maiming the changeling for a brief period of time. The character suffers two points of lethal damage and is unable to move for three turns. For five turns thereafter, she may move at only half her normal Speed.',
            '<b>Failure:</b> The Contract fails to provide the manipulated feature.',
            '<b>Success:</b> The changeling creates a unique bodily feature of her choosing. Whatever the feature, the mechanical effects must be one of the following (the changeling’s choice):',
            '<ul><li>The feature acts as a natural weapon, granting a one lethal damage bonus.</li><li>The feature acts as natural armor, effectively duplicating the effects of chain mail (see p. 170 of the World of Darkness Rulebook).</li><li>The feature grants a +3 Speed bonus.</li><li>The feature grants a +4 Initiative bonus.</li><li>The feature renders the character immune to damage penalties.</li></ul>',
            'Whatever the feature is, it lasts for the remainder of the scene, until the changeling consciously chooses to revert her features back to their normal state, or until the changeling uses this clause again to gain a different feature.',
            '<b>Exceptional Success:</b> As with a standard success, only the Contract is so effective, the Oddbody effect confers the benefits of two features as described above.'
        ],
        "Description": "Manifest an unnatural bodily feature, which may provide a bonus or act as a natural weapon or armor.",
        "Book": "CTL 131"
    },
    {
        "Name": "Chrysalis",
        "Rank": "•••••",
        "Cost": "●",
        "Dice Pool": "Strength + Wyrd",
        "Catch": "Specially commission an object as model",
        "Action": "Instant",
        "FullDescription": [
            'Under this clause, the changeling is able to become something wholly other than herself. She may take the shape of any inanimate object roughly her size, and thereby become that object.'
        ],
        "FullCatch": [
            'The changeling must commission the creation of an object she wishes to mimic.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The changeling succeeds only in distorting her body and causing herself grief during the process of transformation. Instead of becoming the object, the character blacks out from the pain of the change. She remains unconscious until the player succeeds at a Stamina roll, which may be attempted once each minute.',
            '<b>Failure:</b> The Contract fails to transform the character into the desired object.',
            '<b>Success:</b> The changeling transforms literally into the object of her choosing. The character acquires all the properties of that object, though with added mobility. For example, a character who becomes a man-sized rock is extremely durable and also extremely heavy, while a character who becomes a clock tells time as a normal clock would. A character may also combine this power with other powers that affect her Size or composition, as with Transfigure the Flesh, to allow her to vary the size of the object she becomes.',
            'Changelings who become objects in this fashion are limited to simple machines and basic materials. As well, they cannot become fanciful substances (though they can appear to be fanciful substances) or complex devices. Thus, a character is fine to become a canoe, a pillar of marble or a roulette wheel, but “a pile of stardust” or “a nuclear bomb made out of dark matter” is beyond the Contract’s reach.',
            'As an object, the character has a normal person’s sense of her surroundings. In addition, he has limited functional capacity in his purpose as the object — the roulette wheel could determine its own results, for example, the clock could set its own time and the canoe could propel itself into the current of a river. A chair could walk from place to place, bending its legs. The canoe could not fly, however, and the chair could not sprout “hands” at the ends of its arms or the pillar reshape itself into a statue.',
            'This power lasts for the duration of the scene, though the changeling may choose to end the Contract before that if she wishes.',
            '<b>Exceptional Success:</b> The character may change from one object to another while the Contract’s power lasts as an instant action.'
        ],
        "Description": "Transform into a mechanically simple inanimate object.",
        "Book": "CTL 131"
    },
    {
        "Name": "Contracts of the Moon",
        "Rank": "N/A",
        "Cost": "N/A",
        "Dice Pool": "N/A",
        "Catch": "N/A",
        "Action": "",
        "FullDescription": [
            'The memory of Faerie as a place of madness is more than just poetic metaphor. Some changelings have uncovered ancient Contracts pledged between the fae and powers of moonlight and madness. Many Lost are reticent to call on this particular pact, but others grimly note that any weapon may prove useful in their struggle.',
            'All changelings count this Contract list as affinity Contracts.'
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "N/A",
        "Book": "N/A"
    },
    {
        "Name": "Lunatic’s Knowing Glance",
        "Rank": "•",
        "Cost": "●",
        "Dice Pool": "Wits + Wyrd",
        "Catch": "Masquerade as a medical professional",
        "Action": "Instant",
        "FullDescription": [
            'The changeling can instantly tell if anyone she is looking at suffers from a derangement. She also gains some insight into the precise nature of any derangements she sees.'
        ],
        "FullCatch": [
            'The changeling is dressed as a medical professional and behaves as such a person.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> For the next full scene, the character receives utterly random and false information about who does or does not possess which derangements.',
            '<b>Failure:</b> The clause fails, and character gains no information about the mental health of people she observes.',
            '<b>Success:</b> By spending one point of Glamour, the character instantly knows the nature of any and all derangements suffered by anyone she can see clearly. She can tell a paranoid from a schizophrenic at a glance and can also easily see if someone is completely sane. She can also tell details about the particular type of madness the person has, such as what someone with a phobia is afraid of, what behavior an obsessive compulsive is driven to perform and what a multiple personality’s different personalities are roughly like. This ability lasts for the next full scene. Each success on this roll also provides the character with one die for any attempt to help someone she observes to overcome his derangement. Alternatively, the character can use these dice as a bonus to any attempt to trigger a particularly severe episode of the target’s madness.',
            '<b>Exceptional Success:</b> The character is also able to have some sense of what event triggered the person’s derangement.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-2", Situation: "The changeling is observing people through a window or live video link." },
                    { Modifier: "+1", Situation: "The changeling talks to the people she is observing." },
                ]
            }
        ],
        "Description": "Assess derangements at a glance",
        "Book": "RoS 105"
    },
    {
        "Name": "Maddening Eye",
        "Rank": "••",
        "Cost": "●●",
        "Dice Pool": "Manipulation + Wyrd - Composure",
        "Catch": "Suffer a derangement, or after first use in a scene",
        "Action": "Instant",
        "FullDescription": [
            'By staring intently at someone who already possesses one or more derangements, the changeling can cause those derangements to grow temporarily worse.'
        ],
        "FullCatch": [
            'The changeling is currently suffering from at least one derangement.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The character suffers a random minor derangement for one scene.',
            '<b>Failure:</b> The clause fails, and the character cannot cause the target’s derangements to worsen.',
            '<b>Success:</b> If the roll succeeds and the target already possesses at least one derangement, then the target is affected by this clause. Targets with mild derangements always gain the severe version of this derangement. For example, a character who suffers from Fixation temporarily has Obsessive Compulsion, just as a target who suffers from Vocalization temporarily suffers from Schizophrenia. Targets who already suffer from severe derangements gain one additional severe derangement, chosen by the Storyteller. Worsened and new derangements affect the target only for the next full scene; after this time, they swiftly fade, and the target returns to normal. This contact automatically fails if it is used upon a character without any derangements. The changeling must stare intently at a target to use this clause. In addition to reacting strongly to having a new severe derangement, many targets react to the changeling’s stare, and some of the most outspokenly disturbed may claim the changeling did something to them.',
            'One of the most powerful features of this clause is that after the changeling has successfully used it on one target, for the remainder of the scene, she can use this clause on other targets without needing to spend additional Glamour. The changeling pays the Glamour cost of this clause when the clause is first used. Then, for the remainder of the scene, the character can use this ability on additional targets merely by staring intently at the target and making another roll. If the character fails at any of these rolls, she cannot attempt to use this clause on that target without spending more Glamour, but she can attempt to use the clause on other targets without spending additional points of Glamour.',
            '<b>Exceptional Success:</b> The increased or additional derangement that the target suffers lasts until the sun next rises or sets, whichever comes first. Also, if the target already suffers from a severe derangement, the character can choose which new severe derangement the target gains.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-2", Situation: "The target actively attempts to avoid the changeling’s gaze." },
                    { Modifier: "+1", Situation: "The changeling touches the target while gazing at him." },
                ]
            }
        ],
        "Description": "Temporarily aggravate or multiply derangements.",
        "Book": "RoS 106"
    },
    {
        "Name": "Touch of Bedlam",
        "Rank": "•••",
        "Cost": "●●",
        "Dice Pool": "Presence + Wyrd vs Composure + Tolerance",
        "Catch": "Victim broke an oath sworn to you",
        "Action": "Instant and contested",
        "FullDescription": [
            'With even the lightest of touches, the changeling can cause a target to temporarily suffer from a single severe derangement of the changeling’s choice.'
        ],
        "FullCatch": [
            'The subject has broken an oath to the changeling.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The changeling accidentally suffers the effects of the clause herself.',
            '<b>Failure:</b> The Contract fails, and the target is unaffected.',
            '<b>Success:</b> The changeling can induce a severe derangement of her choice into a single target. The changeling cannot determine the details of the derangement, such as the trigger for hysteria, only the general type of derangement. Also, the changeling cannot induce extreme derangements such as Schizophrenia, Multiple personality or Fugue. In addition, the changeling must touch the target to use this clause. This derangement lasts for only one full scene, after which the target immediately returns to normal.',
            '<b>Exceptional Success:</b> The changeling induces an extreme derangement such as Schizophrenia, Multiple Personality or Fugue in the target. The changeling can also precisely determine the nature of the target’s derangement, such as the particular triggers for Hysteria or the nature of the other personality or personalities for Multiple Personality.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-1", Situation: "The changeling only casually brushes against the target when using this clause." },
                    { Modifier: "+1", Situation: "The changeling addresses the target by his full name." },
                ]
            }
        ],
        "Description": "Temporarily inflict a chosen severe derangement.",
        "Book": "RoS 106"
    },
    {
        "Name": "The Madness of Crowds",
        "Rank": "••••",
        "Cost": "●●●○",
        "Dice Pool": "Expression + Wyrd",
        "Catch": "Performing for an audience",
        "Action": "Instant",
        "FullDescription": [
            'The changeling can induce temporary mass Hysteria, causing everyone around her to temporarily suffer from the same mild derangement.'
        ],
        "FullCatch": [
            'The changeling is playing music, reciting poetry, telling stories or otherwise performing for an audience that consists of most of the people around her.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The clause fails, and the people in the crowd all develop a sense that there is something suspicious and possibly even dangerous about the changeling.',
            '<b>Failure:</b> The clause fails, and the people surrounding the changeling are unaffected.',
            '<b>Success:</b> Everyone else within range suffers from a single mild derangement for the remainder of the scene. This clause affects everyone within 50 yards of the changeling. The changeling is not affected, and can also choose to keep anyone in physical contact with her when she uses the clause from being affected. Characters who move away from the changeling during this scene or who come within 50 yards of the changeling during the scene are not affected; the clause affects only characters who were within 50 yards of the changeling when she first used this clause.',
            'The changeling selects which derangement she wishes to inflict upon people. For derangements such as Phobias, she can also choose what triggers the targets are afraid of or fixated on. For example, the changeling doesn’t just inflict everyone within range with a Phobia, she inflicts everyone with a fear of blood. If anyone affected by this clause already suffers from this derangement, that person instead gains the related severe derangement. For example, if the changeling affected everyone with a Phobia of snakes and there was someone present who already had a Phobia of snakes, that target temporarily gains the Hysteria derangement triggered by snakes. At the end, all derangements produced by this clause fade away, leaving the affected individuals to attempt to rationalize the reason for their actions.',
            '<b>Exceptional Success:</b> If the character wishes, she can inflict the related severe derangement upon the crowd.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-1", Situation: "The crowd is passive and well controlled (for example, the audience at a lecture)." },
                    { Modifier: "+1", Situation: "The crowd is already loud and emotional (for example, the audience at a rock concert)." },
                ]
            }
        ],
        "Description": "Temporarily inflict a chosen derangement on a group",
        "Book": "RoS 107"
    },
    {
        "Name": "Lurking Insanity",
        "Rank": "•••••",
        "Cost": "●●●○",
        "Dice Pool": "Subterfuge + Wyrd",
        "Catch": "Victim has betrayed family.",
        "Action": "Instant",
        "FullDescription": [
            'The character can look intently at a target and cause him to develop a latent form of insanity that manifests only when a specific even or type of event occurs.'
        ],
        "FullCatch": [
            'The target has betrayed a close blood relative such as a child, parent, aunt or first cousin.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The changeling suffers from a derangement that is triggered at some particularly inopportune time and that lasts for one scene.',
            '<b>Failure:</b> The clause fails, and the target remains sane.',
            '<b>Success:</b> The changeling can cause the target to develop a single form of insanity of her choice, including either a mild or a severe derangement. This derangement is triggered by a specific pre-determined event, such as the target seeing a certain person or being in fear of her life. The changeling can even induce extreme derangements such as Schizophrenia, Multiple Personality or Fugue. Also, until this event occurs, the target remains as sane as always. The insanity begins as soon as the triggering event occurs and lasts for the next full scene, after which the target returns to normal.',
            'The trigger can be anything from a general event, such as riding in a car to more specific triggers such as seeing a particular person or hearing a certain phrase, or the trigger can even be triggered at a specific time and date. In addition to being able to determine the type and severity of the derangement, the changeling can also determine the precise nature of the insanity, including the exact nature of the fear involved in the Phobia or Hysteria and the precise nature of the character’s additional personalities in Multiple Personality. If not triggered within 28 days (one lunar month), the clause ends without affecting the target. Also, the changeling must be looking into the target’s eyes to use this clause.',
            '<b>Exceptional Success:</b> The insanity manifests a number of times equal to the changeling’s Wyrd. In each of these cases, the trigger remains the same, but instead of merely occurring once and vanishing forever, the insanity recurs the next several times the target is exposed to the same trigger. The target appears perfectly sane in between these episodes, and this Contract ceases to affect the target after 28 days.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-1", Situation: "The target does not know the changeling’s name." },
                    { Modifier: "+1", Situation: "The target is highly emotional when the changeling uses this Contract." },
                ]
            }
        ],
        "Description": "Embed a chosen temporary derangement into a victim, waiting for a chosen trigger event.",
        "Book": "RoS 107"
    },
    {
        "Name": "Contracts of Omen",
        "Rank": "N/A",
        "Cost": "N/A",
        "Dice Pool": "N/A",
        "Catch": "N/A",
        "Action": "",
        "FullDescription": [
            'Changelings are often people slightly out of time, and time sometimes restricts them less than it does ordinary mortals. The Contracts of Omen can allow changelings to see into the past and the future to a limited degree.',
            'Contracts of Omen are considered affinity Contracts for all changelings.'
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "N/A",
        "Book": "N/A"
    },
    {
        "Name": "Vision of Strife",
        "Rank": "•",
        "Cost": "●",
        "Dice Pool": "Empathy + Wyrd",
        "Catch": "Subject discusses their past",
        "Action": "Instant",
        "FullDescription": [
            'The changeling looks at someone and gains a vision of the most traumatic and emotionally charged event that the target has experienced.'
        ],
        "FullCatch": [
            'The target is currently speaking about her past.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The character has a vision of an event that never happened to the target.',
            '<b>Failure:</b> The clause fails, and the character has no vision.',
            '<b>Success:</b> The character has a brief vision of the most traumatic and intense negative or harmful event that happened to the target. In all cases, this event is something that filled the target with fear and is likely to be one of the most memorable events in his life. When looking at most changelings, the character usually sees their abduction by the True Fae, and for mortals, typical events include perpetrating or being the victim of violent crime or experiencing some event such as a severe car accident or natural disaster.',
            'This vision lasts for only a few seconds, but provides the changeling with a general understanding of the nature of the event the target experienced, as well as a few vivid sensory images of this event. The changeling must look at the target to use this clause.',
            '<b>Exceptional Success:</b> The changeling also gains a general understanding of all of the other major traumatic events that occurred to the target.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-1", Situation: "The changeling cannot see the target clearly or only catches a brief glimpse of the target." },
                    { Modifier: "+1", Situation: "The changeling touches the target." },
                ]
            }

        ],
        "Description": "See someone's worst memory.",
        "Book": "RoS 108"
    },
    {
        "Name": "Glimpse of Fortune’s Favor",
        "Rank": "••",
        "Cost": "●/●●",
        "Dice Pool": "Wits + Wyrd",
        "Catch": "On games of skill",
        "Action": "Instant",
        "FullDescription": [
            'The changeling examines the outcome of an action she is about to perform. She glimpses her own future and determines the outcome of the action she is about to perform. She can then use this knowledge to improve her chances of success.'
        ],
        "FullCatch": [
            'The changeling is playing a game of skill.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The character’s glimpse of the future is incorrect, and she suffers a penalty of -2 to the action this clause is being used to assist.',
            '<b>Failure:</b> The clause fails, and the character learns nothing about the future.',
            '<b>Success:</b> Succeeding at this clause allows the player to roll twice for a single instant action that the changeling performs in the following turn, taking the better of the two results. If the changeling spends two points of Glamour, she can use this clause reflexively, applying it to any instant action taken during the same turn that this clause is performed.',
            '<b>Exceptional Success:</b> The character’s knowledge of the future is exceptionally clear and she can apply the 8 again quality to both rolls.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-1", Situation: "The changeling has already used this clause at least once during the last scene." },
                    { Modifier: "+1", Situation: "The changeling can glimpse herself in a mirror or other reflective surface when using the Contract." },
                ]
            }
        ],
        "Description": "Roll an action twice and choose the result through premonition.",
        "Book": "RoS 109"
    },
    {
        "Name": "Reading the Portents",
        "Rank": "•••",
        "Cost": "●●",
        "Dice Pool": "Wits + Wyrd",
        "Catch": "On a minor",
        "Action": "Instant",
        "FullDescription": [
            'The changeling looks at a target and sees the most significant upcoming event in his near future.',
            ''
        ],
        "FullCatch": [
            'The target is a child under the age of 18.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The changeling gains a false impression of the target’s future.',
            '<b>Failure:</b> The changeling learns nothing of the target’s future.',
            '<b>Success:</b> The changeling gains a general impression of the most significant or emotionally charged event that the target is going to experience within the next few months. Such events include committing or being the victim of a serious crime, getting into a car accident, making or receiving a serious marriage proposal, winning a large sum of money, contracting a serious illness or being fired from a long-term career. By glancing at the target and using this clause, the changeling learns the nature of this event, roughly when it occurs and the general nature of the events surrounding it. If the target’s life is very likely to be relatively uneventful for the next six months, this clause also reveals that fact. The changeling can use this clause on himself by looking in a mirror when using the clause.',
            'Just as all possible futures, the knowledge gained through the use of this clause is not immutable. The knowledge merely reflects what is most likely to occur if the changeling does nothing to change this future. Some events may be easy for the changeling to prevent, while others may be exceptionally difficult to alter. More than once, a changeling has found to his horror that the very attempt to forestall a fate set in motion the events that brought that fate to pass. Using this clause after making a series of changes may reveal if a previously viewed event is no longer likely to occur, or if the changeling’s actions have instead precipitated some other looming problem.',
            '<b>Exceptional Success:</b> The character gains more details about the upcoming problem. If the character has no upcoming dramatic events coming up, an exceptional success reveals any events that the target hopes for or fears, and how these possible events might be made to occur if changes were made in the target’s future.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-2", Situation: "The changeling is viewing his own future." },
                    { Modifier: "-1", Situation: "The target is a sworn enemy of the changeling." },
                    { Modifier: "+1", Situation: "The target is a relative of the changeling." },
                ]
            }
        ],
        "Description": "Predict the most seriously charged event waiting in the subject's likely near future.",
        "Book": "RoS 109"
    },
    {
        "Name": "Vision of Disaster",
        "Rank": "••••",
        "Cost": "●●●●○",
        "Dice Pool": "Wits + Wyrd",
        "Catch": "Betrayed by a trusted ally",
        "Action": "Reflexive",
        "FullDescription": [
            'The changeling has a brief vision of the immediate future. This vision allows the changeling to be able to replay one turn of play with the knowledge of what happened the first time this turn occurred.'
        ],
        "FullCatch": [
            'A trusted friend or ally suddenly betrays the changeling.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The Contract fails, and the changeling suffers a -2 penalty to all Wits rolls for the remainder of the scene due to disorientation.',
            '<b>Failure:</b> The Contract fails, and events play out as they would without any interference or previous knowledge.',
            '<b>Success:</b> The changeling has a clear and vivid vision of the next turn. In play, this means that the player can use this clause at the end of any turn, before anyone else acts. Using this clause resets play back to the end of the previous turn, but with the difference that the changeling now knows what will happen in the next turn if she does nothing.',
            'None of the events of the turn when the clause was used have any effect on any character and no one except the character who used this clause remembers any of the events of that turn. In effect, the turn when this clause was used is treated as a vision of an impending but not inevitable future. This clause is most useful in situations in which the changeling walks into an ambush, unknowingly sets off a trap or alarm or otherwise makes some critical mistake that could be avoided by adequate foreknowledge. A changeling can use this clause only once during a single scene. Repeated use during the same turn is impossible.',
            '<b>Exceptional Success:</b> In addition to generally knowing what will occur in the next turn, the changeling noticed a host of small details that allow her to act more effectively during this turn. During the turn being replayed, the changeling gains the rote quality to any action she performs.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-1", Situation: "The changeling was blindfolded or otherwise had trouble seeing the events that occurred during the turn that will be replayed." },
                    { Modifier: "+1", Situation: "The changeling was injured during the turn that will be replayed." },
                ]
            }
        ],
        "Description": "Play out a turn as a premonition.",
        "Book": "RoS 109"
    },
    {
        "Name": "Tying the Knots of Fate",
        "Rank": "•••••",
        "Cost": "●●●○○",
        "Dice Pool": "Presence + Wyrd",
        "Catch": "Blessing a mortal minor",
        "Action": "Extended. The target number is the target’s Clarity or Morality (or the equivalent Trait for other supernatural beings). The character can make one roll every 10 minutes.",
        "FullDescription": [
            'The changeling performs a ritual to forge another person’s fate, causing the target to be very likely to have a single experience within the next month.'
        ],
        "FullCatch": [
            'The character is using this clause to bless a mortal child less than 18 years old with some form of good fortune.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The character dooms himself so that the next important roll he makes will be a chance roll.',
            '<b>Failure:</b> The target is unaffected.',
            '<b>Success:</b> The changeling alters fate so that the target is far more likely to have a single experience named by the changeling. For the next month, all rolls by all characters that would result in this fate coming true for the target gain a bonus equal to the number of successes rolled on this clause. Regardless of whether this experience occurs or not, the effects of the clause end after 30 days have passed. The effects of this clause also immediately end if the target has the stated experience.',
            'The experience named by the changeling cannot be either wildly improbable or demand significant changes in the world. Going to the moon, becoming ruler of the world, making out with aliens from another planet or living through a nuclear war are all far too improbable or too large-scale events and so cannot be produced. Instead, the fate must be something relatively mundane and not too closely specified — meeting a particular celebrity, losing an unspecified amount of money while gambling, getting into a car crash and being arrested are all possible fates that this clause can encourage.',
            'The changeling can determine what the experience is, but never its outcome. A car crash might be relatively minor and might not even happen while the target is in her own car; the target might be arrested and then released a few minutes later, because the police made a mistake. Similarly, a character may be fated to be shot, but the shot might simply pierce the target’s hat or coat, leaving her entirely unharmed. Often, the results of this clause are relatively minor, but they can be lethal or otherwise quite powerful, especially if the changeling, or anyone else, attempts to cause this fate to happen. In the case of relatively minor or reasonably likely events, the target is almost certainly going to experience the event even if the changeling and his comrades do nothing to help this occur. However, less likely or more extreme events, such as the target being shot, usually require the changeling and her comrades to help this fate occur.',
            'A character may invoke a number of impending fates at any given time equal to his Wyrd. Thus, if a changeling with Wyrd 3 has used this clause three times on various friends and enemies, he must wait for one of the fates to occur or for the duration to expire on one of the decreed fates before he may use this clause again.',
            '<b>Exceptional Success:</b> No additional effect occurs.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-2", Situation: "The fate named is particularly extreme or unlikely." },
                    { Modifier: "+1", Situation: "The fate is especially likely or minor." },
                ]
            }
        ],
        "Description": "Weave a likely fate into a character's near future.",
        "Book": "RoS 110"
    },
    {
        "Name": "Contracts of Smoke",
        "Rank": "N/A",
        "Cost": "N/A",
        "Dice Pool": "N/A",
        "Catch": "N/A",
        "Action": "",
        "FullDescription": [
            'Stealth, invisibility and soundlessness are the purviews of Contracts of Smoke. Many myths and legends attribute unwitnessed travel to the fae, and changelings themselves are no strangers to the benefits of moving without the notice of those who might wish to keep them under supervision. What better way to escape a promise than to have simply slipped away unnoticed when the promise needs to be redeemed? After all, if the changeling can’t be there when the individual invokes it, how is the changeling supposed to fulfill it?'
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "N/A",
        "Book": "N/A"
    },
    {
        "Name": "The Wrong Foot",
        "Rank": "•",
        "Cost": "●",
        "Dice Pool": "None",
        "Catch": "Lick thumb and smudge a mirror",
        "Action": "Instant",
        "FullDescription": [
            'This Contract allows the changeling to change the nature of the marks he leaves when passing through a certain locale. The clause is one of the oldest remembered among even the True Fae, and several fairy legends exhibit Good Folk who left cloven-hoofed tracks or the scent of curdled milk behind them. Indeed, certain seemings even use this Contract to augment their presences, as with some Fairest who leave a sweet, natural perfume in their wake or loathsome Tunnelgrubs who deliberately ooze a trail of slime to unsettle others.'
        ],
        "FullCatch": [
            'The changeling licks his thumb and smudges it on a mirror, thereby leaving another mark of his own passing.'
        ],
        "Roll Results": [
            'No roll is necessary. When The Wrong Foot takes effect, evidence of the changeling’s passing change to resemble something other than the visitation of a humanlike entity. This may be tracks similar to a bird’s three-toed foot, a bloody mist, drips of lavender extract — whatever the character chooses. Note that this Contract always creates the same result, so the character should think about how he wants this to manifest before the first time he uses it, and should clear it with the Storyteller before it comes into play. This substance or mark supersedes all other evidence of passage, so footprints will vanish but the slime-spray will take its place in every case, whether or not the ground was soft enough to hold a footprint. The Wrong Foot does not change the appearance of previously made marks, however. Therefore, this limits the practical application of the Contract in numerous situations, so many changelings have come to rely on The Wrong Foot to leave a sort of “calling card,” whether or not they wish to obfuscate pursuit. Once activated, this Contract functions for the duration of the scene.'
        ],
        "Description": "Leave some other mark of your presence instead of human traces.",
        "Book": "CTL 132"
    },
    {
        "Name": "Nevertread",
        "Rank": "••",
        "Cost": "●",
        "Dice Pool": "Intelligence + Wyrd",
        "Catch": "Spent an hour barefoot today",
        "Action": "Instant",
        "FullDescription": [
            'When the changeling invokes this clause, all traces of his passing vanish. He leaves no footprints in mud, sand, snow or any other surface that would normally hold a mark. Likewise, his wet feet leave no prints on dry ground. Even grass trampled underfoot or flour scattered on the ground leaves no evidence of the changeling’s movements.',
            'Note that if the changeling remains present at the site of his Nevertread attempts, he may still be discovered by other means. This power does not render him invisible, it just obscures the signs left by his movements.'
        ],
        "FullCatch": [
            'The changeling must have spent at least an hour barefoot within the past day.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> Instead of becoming more difficult to detect, the changeling makes a botch of the procedure, dragging mud or river-reeds or clumps of snow across his trail. Attempts to track the changeling suffering a dramatic failure on the attempt to invoke Nevertread occur at a +2 dice bonus, by whatever method they occur.',
            '<b>Failure:</b> The changeling is unable to obscure marks of his passage.',
            '<b>Success:</b> The changeling erases all traces of his passing. This may simply make it impossible to witness where the character has gone, or it may inflict a -2 dice penalty to attempts to track him, at the Storyteller’s discretion, based on the situation’s circumstances.',
            '<b>Exceptional Success:</b> For all intents and purposes, the character was never there. He’s impossible to track by the method of determining where he may have moved.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-2", Situation: "The environment is especially susceptible to retaining marks of passage, such as sticky mud, a new snowdrift or wet cement." },
                    { Modifier: "+2", Situation: "The environment is notably resistant to holding marks of passage, as with deep water, Astroturf or hardwood floors." },
                ]
            }
        ],
        "Description": "Pass without trace.",
        "Book": "CTL 132"
    },
    {
        "Name": "Shadowpatch",
        "Rank": "•••",
        "Cost": "●",
        "Dice Pool": "Wits + Wyrd",
        "Catch": "Spent an hour out of sunlight today",
        "Action": "Instant",
        "FullDescription": [
            'Light seems to avoid the changeling when he invokes this Contract, and darkness congeals around him.'
        ],
        "FullCatch": [
            'The changeling must have spent at least an hour away from natural light (away from windows, open doors, etc.) within the past day.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> Shadows actually recede from the character, making her more visible. The character suffers a -2 dice penalty to all Stealth-based dice pools that are based on sight (rather than any other sensory detection) for the duration of the scene.',
            '<b>Failure:</b> The Contract fails to function but otherwise creates no detrimental effect.',
            '<b>Success:</b> The character swaths himself with shadows that dampen light, sound, smell and other perceptual stimuli. For the remainder of the scene, he enjoys a +3 dice bonus to Stealth-based dice pools.',
            '<b>Exceptional Success:</b> The bonus is increased to +5.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-1", Situation: "The environment lacks shadows longer than the height of a man." },
                    { Modifier: "+1", Situation: "The environment consists solely of natural or artificial light, such as a park playground or a windowless warehouse." },
                ]
            }
        ],
        "Description": "Conjure dampening shadows for +3 Stealth.",
        "Book": "CTL 133"
    },
    {
        "Name": "Murkblur",
        "Rank": "••••",
        "Cost": "●",
        "Dice Pool": "Intelligence + Wyrd vs Resolve + Tolerance",
        "Catch": "Swallow an animal's eye",
        "Action": "Instant",
        "FullDescription": [
            'The changeling creates a smoky caul over the eyes of his subject, effectively blinding her. Naturally, the subject is aware of this, as her eyesight rapidly becomes so poor as to distinguish more than very bright sources of light.',
            'The changeling’s intended target must be within her line of sight for this Contract to work.'
        ],
        "FullCatch": [
            'The changeling swallows the eye of an animal or insect while invoking the Contract.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The Contract fails spectacularly and painfully, causing a burst of light in the changeling’s own vision that stuns her for the following turn.',
            '<b>Failure:</b> The Contract fails to blind the intended subject.',
            '<b>Success:</b> The subject’s vision fades to darkness. The blindness lasts for the duration of the scene.',
            '<b>Exceptional Success:</b> As with a normal success, only the changeling can terminate the temporary blindness at any point of her choosing before the end of the scene.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-1", Situation: "The changeling can see her target but not her target’s face." },
                    { Modifier: "+1", Situation: "The subject wears glasses or contact lenses (or needs to), or otherwise has some mechanical vision correction or visual impediment." },
                ]
            }
        ],
        "Description": "Temporarily blind a subject.",
        "Book": "CTL 133"
    },
    {
        "Name": "Smoke-Stepping",
        "Rank": "••••",
        "Cost": "●●",
        "Dice Pool": "Intelligence + Wyrd",
        "Catch": "As the sun rises or sets, or on cloudy days",
        "Action": "Instant",
        "FullDescription": [
            'Coal burning produced the pea-soup fogs of London, Edinburgh, and many other large cities. Common yearround, and especially in the fall and winter, urban changelings learned to take advantage of them. As a result, there was an alternate four-dot clause of Contracts of Smoke, often learned by urban changelings. This clause can still be learned today, but it requires dense smog or fog that limits visibility to no more than 30 yards, and so is rarely used.',
            'This clause allows the changeling to move through the fog at the speed of thought, disappearing from one location and appearing in another. This clause can only be used outdoors in thick fog or smog where visibility is no more than 30 yards.'
        ],
        "FullCatch": [
            'The Contract is used within 10 minutes of sunrise or twilight, or on a day with thick clouds and little sunlight.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The changeling becomes disoriented in the fog and spends the next three turns stumbling around, unaware of who or what is around him, and possibly bumping into walls or passers-by.',
            '<b>Failure:</b> The changeling remains in her current location, unaffected by the Contract.',
            '<b>Success:</b> The changeling instantly moves to any location that is both also within the fog and within a number of miles from his current location equal to his Wyrd. The changeling must have seen the desired location before and know it well enough to concentrate on it.',
            '<b>Exceptional Success:</b> The changeling arrives as her destination, where she briefly remains as insubstantial as mist. In this invisible and intangible state, the changeling is free to spend a second moving to a location where she wishes to appear. She can only appear in locations that are also within the fog, and can only move a distance up to her Speed in yards, but can appear facing any direction.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-2", Situation: "The day is bright and sunny" },
                    { Modifier: "+1", Situation: "Visibility is less than 10 yards" },
                ]
            }
        ],
        "Description": "Travel instantly through thick smoke or fog.",
        "Book": "VL 23"
    },
    {
        "Name": "Light-Shy",
        "Rank": "•••••",
        "Cost": "●○",
        "Dice Pool": "Intelligence + Wyrd",
        "Catch": "After telling someone important to you a serious lie that day",
        "Action": "Instant",
        "FullDescription": [
            'This clause grants the changeling the ultimate power of the Smoke purview: it makes him truly invisible. Even mechanical observers such as security cameras won’t detect him.'
        ],
        "FullCatch": [
            'The changeling must have told a meaningful lie to someone very important to him in the past day, something that could hurt their relationship if the lie was discovered.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The character remains visible to everyone but himself. Indeed, he is wholly convinced that he is, in fact, invisible, and only interaction with an outside party will let him know the true nature of his lack of success invoking this Contract.',
            '<b>Failure:</b> The changeling remains visible, unaffected by the intended Contract.',
            '<b>Success:</b> The changeling becomes truly invisible, unable to be seen. It is as if the world genuinely believes he isn’t there — he won’t show up in photographs, on video cameras, on infrared scans, anything. This Contract affects only sight, however. If he coughs, the changeling may be heard, and if he smells of grave-dirt, the scent will continue to put people off in the vicinity. This power lasts for a number of minutes equal to the number of successes rolled, though the changeling may choose to voluntarily end the invisibility earlier that that at his discretion.',
            '<b>Exceptional Success:</b> As with a normal success, only the invisibility remains active for the duration of the scene.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-2", Situation: "The character attempts to vanish from plain sight, using the power when he’s the subject of attention of onlooking characters." },
                    { Modifier: "—", Situation: "The character invokes the Contract when he’s among others but not necessarily the focus of anyone’s attentions." },
                    { Modifier: "+1", Situation: "The character is unobserved by any other individuals when he invokes the Contract." },
                ]
            }
        ],
        "Description": "Brief invisibility.",
        "Book": "CTL 133"
    },
    {
        "Name": "Contracts of Thorns and Brambles",
        "Rank": "N/A",
        "Cost": "N/A",
        "Dice Pool": "N/A",
        "Catch": "N/A",
        "Action": "",
        "FullDescription": [
            'The Lost have a tumultuous relationship with the Hedge. They fear what lurks in the darkened twists of that labyrinth, yet they hide among the Thorns and use gates into the Hedge to escape pursuit. In times of war, the Hedge becomes a series of supply lines, escape routes and battlegrounds.',
            'The connection between the Hedge and the Contracts of Thorns and Brambles remains a mystery to most of the Lost. The Contract grants no additional ability to a changeling to manipulate the Hedge, instead granting them power over hedges and thorns of the mortal world. Yet some of the Contracts seem to function better in the Hedge than they do elsewhere. This dichotomy leads some savants among the changelings to suspect that the Contracts of Thorns and Brambles may have originated as some Faustian bargain between the Contracts’ creator and the Hedge itself. Whatever the truth of the matter, use of the Contracts of Thorns and Brambles has become widespread among the Lost, and few Contracts are so valued during times of war.',
            'Contracts of Thorns and Brambles are considered affinity Contracts for all changelings.',
            '<b>Hedge Shifting:</b> Characters versed in the Contracts of Thorns and Brambles often take time to learn the wood variation of the Contracts of Elements (p. 138, Changeling: The Lost), as well. The lesser clauses of that Contract make use of the clauses listed here somewhat less dangerous, while Control Elements grants the character some control over the brambles she summons forth.',
            'Similarly, a character with Control Elements can attempt to manipulate brambles created by another changeling’s use of these powers. Doing so levies a penalty equal to the successes garnered by the changeling who initially used the power. If both characters possess Control Elements, the roll becomes a contested roll of both characters’ Manipulation + Wyrd.'
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "N/A",
        "Book": "N/A"
    },
    {
        "Name": "Bite of the Wooden Fang",
        "Rank": "•",
        "Cost": "●",
        "Dice Pool": "Dexterity + Wyrd",
        "Catch": "Using a whip",
        "Action": "Reflexive",
        "FullDescription": [
            'The most basic expression of the changeling’s power to mimic the terrible maze through which they first fled their captors, Bite of the Wooden Fang demands the user tithe a fraction of his power to a blunt weapon made of wood, vine, or other plant matter. The weapon must inflict bashing damage for this Contract to take effect. An enemy struck by a weapon empowered by this Contract is slashed and bitten by dozens of thorns that rise invisibly from the weapon at the instant of contact.'
        ],
        "FullCatch": [
            'The changeling uses a whip made of plant materials, such as a hemp rope or even a thick vine.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The thorns bite back, causing the character to drop her weapon. Her instant action for the turn is lost.',
            '<b>Failure:</b> The weapon does not grant any additional bonus.',
            '<b>Success:</b> Invisible thorns appear along the length of the weapon, granting the weapon a bonus on the character’s next attack equal to the number of successes rolled. This bonus stacks with the weapon’s usual bonus.',
            '<b>Exceptional Success:</b> As per success, and the weapon’s damage is converted to lethal.',
            {
                'Suggested Modifiers': [
                    { Modifier: "+3", Situation: "Contract is used as part of a formal Hedge duel" },
                    { Modifier: "+1", Situation: "Contract is used in the Hedge (does not stack with Hedge duel bonus)" },
                    { Modifier: "-2", Situation: "Contract is used against a changeling benefiting from Armor of the Elements’ Fury" },
                ]
            }
        ],
        "Description": "Enhance bashing weapons hewn from plant materials.",
        "Book": "SaD 49"
    },
    {
        "Name": "Leechweed",
        "Rank": "••",
        "Cost": "●●",
        "Dice Pool": "Occult + Wyrd",
        "Catch": "Against your Keeper or their agents",
        "Action": "Instant",
        "FullDescription": [
            'This clause empowers an area of hedge growth or brambles, causing it to drain Glamour from those bitten by its thorns. Though this Contract is used almost solely in the material world, it can be used in the Hedge. When used in the Hedge, this clause manipulates only growth created by way of the other clauses of this Contract; it cannot alter the Hedge walls in any way. The use of Leechweed in the Hedge can be profoundly dangerous.'
        ],
        "FullCatch": [
            'The Contract is used against someone in service to the character’s Keeper or against the Keeper itself.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The brambles cling to the changeling, draining her of one point of her own Glamour in addition to any other effects determined by the type of bramble. Rolling a dramatic failure on this clause in the Hedge causes the Hedge wall to open up and swallow the changeling. The changeling loses one point of Glamour and is considered off the path (p. 220, Changeling: The Lost). She is separated from her companions and must navigate her way out of the Hedge in the usual manner.',
            '<b>Failure:</b> The clause fails to take power. If used in the Hedge, a failure on this clause counts as a dramatic failure. Success: When used on pre-existing (natural) brambles or thorns, this power causes all thorns within Wyrd yards to drain a point of Glamour from anyone pricked by them. This enchantment remains for the scene’s duration, but can only drain a point of Glamour from any given changeling per turn and can only leech a maximum number of points of Glamour from a given changeling equal to the user’s successes on the activation roll. A character can avoid being pricked by the thorns by moving at Speed 2 or less. Glamour taken this way does not transfer to the user, instead remaining within the plant. Rumor has it that such plants occasionally grow goblin fruit, and changelings have been known to use this clause (before sacrificing their own Glamour to the plants) in an attempt to cultivate such succulent treats without the dangers of entering the Hedge. There have been, to date, no reliable tales of success in this endeavor.',
            'When used to enchant thorns created by another clause of this Contract, the enchantment spreads to the whole of the brambles and remains until the other clause ends. The details of the leeching power remain the same, save that the Glamour taken will be used to fuel the continuation of the effect. Empowered thorns may store an amount of Glamour for use in this manner equal to the character’s Wyrd, and the thorns cannot choose not to spend the Glamour.',
            '<b>Example:</b> <i>Demeter, a Woodblood Elemental of the Autumn Court, summons forth a Shield of Thorns when surrounded by her enemies of the Iron Spear. Knowing that her spell will keep her pursuers occupied for only a few moments, Demeter uses Leechweed to empower her Shield of Thorns.</i>',
            '<i>Now her thorns sap Glamour from her adversaries in addition to simply harming them. The thorny lashes may use the Glamour harvested from those within (because Demeter’s Wyrd is 5, the brambles can store up to five points of Glamour) to remain in effect, spending one stolen point of Glamour with each passage of a number of turns equal to Demeter’s initial successes on the activation roll for Shield of Thorns. With the knowledge that her thorns will persist after she is gone, Demeter makes her escape.</i>',
            'This power has no effect on creatures without a Glamour pool or changelings whose Glamour pool has been reduced to 0.',
            '<b>Exceptional Success:</b> Additional successes are their own reward.',
            {
                'Suggested Modifiers': [
                    { Modifier: "+2", Situation: "Contract is used on thorns summoned forth by another clause of this Contract" },
                    { Modifier: "+1", Situation: "Contract is used in the Hedge" },
                    { Modifier: "-2", Situation: "Contract is used on thorns summoned forth by another changeling or fae creature" },
                ]
            }
        ],
        "Description": "Enchant thorns to drain Glamour.",
        "Book": "SaD 50"
    },
    {
        "Name": "Briarpath",
        "Rank": "•••",
        "Cost": "●●",
        "Dice Pool": "Wits + Wyrd",
        "Catch": "Scatter Hedge thorns behind you",
        "Action": "Instant",
        "FullDescription": [
            'Often times a changeling must evade pursuit from a stronger, faster adversary. This clause helps a character do just that. Long, vicious thorns erupt from the enchanted surface, slowing pursuers and making vertical surfaces almost impossible to climb.'
        ],
        "FullCatch": [
            'The character litters a handful of Hedge thorns behind her.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The enchantment hounds the character rather than her adversary, painfully lacerating her hands and forearms. She suffers a -1 penalty to all rolls requiring the use of her hands for the remainder of the scene.',
            '<b>Failure:</b> The Contract fails to take effect.',
            '<b>Success:</b> The changeling leaves a trail behind her of thorns and brambles that impede her enemies. The trail has a width equal to the changeling’s Wyrd in yards and grows in her wake (across any surface, vertical or horizontal) for a number of turns equal to the successes she rolled. A character that moves through the area suffers the following hindrances: her Speed is reduced by one for each success garnered by the changeling, and she suffers a penalty equal to the number of successes rolled by the changeling on all Athletics rolls (such as those to run, jump, and climb) made while in the area of effect. The trail fades at the end of the scene.',
            '<b>Exceptional Success:</b> As per success, save that characters moving through the trail find their Speed reduced to 1 and all Athletics dice pools reduced to a chance roll.',
            {
                'Suggested Modifiers': [
                    { Modifier: "+1", Situation: "Contract is used in the Hedge" },
                    { Modifier: "-1", Situation: "Contract is used in an urban area" },
                    { Modifier: "-3", Situation: "Contract is used in a locale entirely inappropriate for the growth of brambles, such as inside a wellkept science laboratory." },
                ]
            }
        ],
        "Description": "Grows treacherous terrain of brambles in your wake.",
        "Book": "SaD 51"
    },
    {
        "Name": "Shield of Thorns",
        "Rank": "••••",
        "Cost": "●●●",
        "Dice Pool": "Manipulation + Wyrd",
        "Catch": "Watered by your blood",
        "Action": "Instant",
        "FullDescription": [
            'The changeling learns to summon forth brambles from even the driest of earth, creating an almost impenetrable defensive barrier that lashes at any enemy who comes near. While this Contract is occasionally used in the Hedge, a changeling does so at her own risk.'
        ],
        "FullCatch": [
            'The changeling cuts open her own flesh (inflicting 1 lethal damage in the process) and pours her blood across the area to be shielded.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> In most situations, a dramatic failure on this roll results in the user being struck by her own briars, suffering an immediate attack that inflicts a dice pool equal to her Wyrd in bashing damage. If this Contract was used in the Hedge, however, the damage is lethal and the changeling loses a point of Glamour per Health Level lost.',
            '<b>Failure:</b> The Contract fails to take effect, and the ground remains unbroken. If the Contract was used in the Hedge, however, a failure counts as a Dramatic Failure.',
            '<b>Success:</b> The earth splits, sprouting dozens of tangled brambles about the changeling in a circle with a radius equal to her Wyrd. Any character that moves more than two yards in a single turn within the tangled area suffers an immediate attack with a dice pool equal to the changeling’s Wyrd. The attack inflicts lethal damage and ignores Defense (Armor still applies), but the brambles can only attack any given character once per turn. The briars die and rot to dust after a number of turns equal to the character’s success on the activation roll, though the character may choose to spend a point of Glamour for the briars to remain for an additional period of equal length (and may continue to do so until she runs out of Glamour or chooses to end the effect). The field of briars does not move with the character, and she may leave it behind to attempt to make an escape.',
            '<b>Exceptional Success:</b> Additional successes are their own reward.',
            {
                'Suggested Modifiers': [
                    { Modifier: "+3", Situation: "Contract is used in a rural area or forest" },
                    { Modifier: "+1", Situation: "Contract is used in the Hedge" },
                    { Modifier: "-1", Situation: "Contract is used in an urban area" },
                    { Modifier: "-5", Situation: "Contract is used in an area unsuited to plant growth" },
                ]
            }
        ],
        "Description": "Conjure a field of deadly briars.",
        "Book": "SaD 51"
    },
    {
        "Name": "Hedgewall",
        "Rank": "•••••",
        "Cost": "●●●●(○)",
        "Dice Pool": "Presence + Wyrd",
        "Catch": "After transplanting a bush in place",
        "Action": "Extended (5 successes necessary; each roll represents 1 turn)",
        "FullDescription": [
            'With a bellowing howl, the changeling calls forth a series of massive fortifications or hedges and brambles. Young changeling soldiers, fear of their flight through the Hedge still fresh in their minds, have been known to rout in fear at the sudden sight of towering hedgerows in the midst of a freehold. Clever changelings use this clause to hem in and trap enemies or funnel an advancing force into the waiting arms of a Court’s defenses. Few fae magics are as blatant and impressive as this clause, and its use has been known to violate freehold oaths that put a particularly heavy emphasis on secrecy.'
        ],
        "FullCatch": [
            'The character transplants a small hedge bush from a rural locale to the location where the Contract is to be used immediately prior (within the scene) to using the Contract. While the bush obviously need not be taken from the ground in the same scene, it must still be alive when planted.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The hedge fortification grows wildly in a manner that benefits the character’s enemies, whether by separating the character’s motley or cutting off his retreat. If a dramatic failure of this clause occurs in the Hedge, the walls of that maze suddenly open a trod that leads directly to Arcadia and alerts the Gentry to the character’s presence.',
            '<b>Failure:</b> The fortifications fail to appear. If used in the Hedge, failure on this clause counts as a dramatic failure.',
            '<b>Success:</b> Hedge walls erupt around the character, forming a maze. The character has a huge amount of control over the growth of the hedges, allowing for a great deal of versatility, but the following rules apply:',
            'The walls summoned forth are two feet thick and too tightly grown to allow someone to pass through without using a machete or other tool. The walls provide substantial concealment (-3) against firearms attacks (and only firearms — other ranged attacks can’t penetrate) and prevent close combat attacks. This Contract cannot be used inside the bounds of a human building, even one open to the sky (like a stadium). Whatever design the changeling gives the walls, they are always vertical, meaning that someone within the maze can always climb out (though a clever changeling might use this clause under an overpass, effectively cutting off the escape route above). The walls can be climbed, but the plants shift to prevent individuals from walking across the top of them. A character attempting to do so rolls Dexterity + Athletics each turn; she may move at a Speed equal to her successes on the roll, which counts as an instant action. Failure on the roll means the character makes no progress, while dramatic failure sends her plummeting back to the maze floor.',
            'The changeling determines the height of the walls, which can range from the changeling’s Wyrd to 10 + the changeling’s Wyrd in feet. If the height of the walls is obstructed, they stop at that height (rather than spreading outward or punching their way through barriers). The length of the barrier can be as small as Wyrd yards and as long as Wyrd times 10 yards. Furthermore, the barrier must be a single unbroken wall and must touch the changeling at least one single point when created (in other words, it cannot be created at range, but the changeling can put the whole of the barrier between himself and his enemies). Finally, the walls of the hedge maze must allow room for those within to move; no wall surface can be closer than three yards to another (and circular structures must have a diameter of three yards). Otherwise, the changeling’s imagination determines the layout of the fortifications. He might create a confusing maze, a simple barrier, a wall to funnel enemies down one side of an alleyway, or even a circular fortification to trap enemies within.',
            'The barriers last for a number of turns equal to the successes rolled on the activation roll. By spending one Willpower point, the changeling can extend this duration to the end of the scene. At the end of the duration (whether in turns or at the end of the scene), the changeling may expend two points of Glamour to maintain the hedge maze for another duration of the same length. The power ends, however, at dawn or sunset, whichever comes first.',
            'These hedges can be empowered by the other clauses of this Contract. Using Briarpath on the maze hedge applies that clause across all of the walls (as well as the top of the walls), but not across the ground within the maze. Leechweed results in any contact with the hedge walls seeping Glamour from the changeling who did so. The Shield of Thorns clause results in the appearance of small tendrils along the walls that strike at anyone who touches the wall. The changeling can sense when such an attack is being made and can enhance it with the Bite of the Wooden Fang clause as a reflexive action. Such enchantments last until the end of the scene or the end of this power, whichever comes first.',
            '<b>Exceptional Success:</b> As per success, save the walls automatically benefit from the effects of Briarpath and Leechweed.',
            {
                'Suggested Modifiers': [
                    { Modifier: "+5", Situation: "Contract is used within an already extant hedge maze" },
                    { Modifier: "+3", Situation: "Contract is used in a rural area or forest" },
                    { Modifier: "+1", Situation: "Contract is used in the Hedge" },
                    { Modifier: "-1", Situation: "Contract is used in an urban area" },
                    { Modifier: "-5", Situation: "Contract is used in an area unsuited to plant growth" },
                ]
            }
        ],
        "Description": "Erects temporary walls like those of a hedge maze.",
        "Book": "SaD 52"
    }
]

const beastlyContractsData = [
    {
        "Name": "Contracts of the Den",
        "Rank": "N/A",
        "Cost": "N/A",
        "Dice Pool": "N/A",
        "Catch": "N/A",
        "Action": "",
        "FullDescription": [
            'A Beast knows the value of a safe home. The Contracts of the Den were struck with forces of cave and tunnel, of the womblike safety of the burrow. These Contracts allow the Beast to protect himself and those nearest and dearest to him — or to strike into the dens of those who were not prudent enough to sign a similar Contract.'
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "N/A",
        "Book": "N/A"
    },
    {
        "Name": "Trespasser’s Spoor",
        "Rank": "•",
        "Cost": "●",
        "Dice Pool": "None",
        "Catch": "Scribe your name at the entrance in chalk and blood",
        "Action": "Instant",
        "FullDescription": [
            'The simplest clause of the Contracts of the Den is a blessing of warning. The Beast who learns this clause is much harder to surprise in his own territory. His knowledge of the local terrain sharpens intensely, allowing him to sense threats almost before they’re visible.'
        ],
        "FullCatch": [
            'The changeling writes his name on one of the entrances to the territory in chalk mixed with blood.'
        ],
        "Roll Results": [
            '<b>Dice Pool:</b> No dice roll is necessary. For the next 12 hours, the character gains a number of dice equal to Wyrd +2 to all perception rolls made while inside his territory. For the purposes of this clause, “territory” is defined as something that is recognized by the local neighbors as belonging to the changeling, or that he is able to successfully enforce. A rented apartment is territory, but the whole building is not unless the Beast owns it or the residents look on the building as “his” — for instance, if the Beast is the head of a street gang that protects the building, and his word is accepted as law therein. Similarly, a stretch of woods that locals say is the haunt of the Red-Eyed Devil counts as the changeling’s territory if the Beast is that same Red-Eyed Devil. The clause’s effects fade if the character spends more than five minutes at a time outside of his territory.'
        ],
        "Description": "Mark territory to enhance perception rolls while dwelling there.",
        "Book": "WM 19"
    },
    {
        "Name": "Trapdoor Spider’s Trick",
        "Rank": "••",
        "Cost": "●",
        "Dice Pool": "Wits + Wyrd",
        "Catch": "Keep a spider in your mouth",
        "Action": "Instant",
        "FullDescription": [
            'A Beast may have need to hide the entrance to his den. This trick allows the changeling to do so, and in some cases elude pursuit as well. When activated, this clause covers a door, window, opening or other access point within five feet of the changeling with an illusion, making it appear as though it is either impassable or isn’t there at all. A fire exit seems to be a stretch of graffiti-marked brick wall, an attic window appears to have been boarded up for years, a manhole cover just looks like a blank patch of worn asphalt.'
        ],
        "FullCatch": [
            'The changeling is holding a live spider in his mouth at the time.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The illusion begins to form, then snaps apart with an audible bang like a gunshot.',
            '<b>Failure:</b> The illusion fails to appear.',
            '<b>Success:</b> The illusion is successful. The door or window that the changeling passed through is disguised to appear as a normal section of wall. This strengthening of the Mask can’t be pierced by casual fae sight, though a person running her hands along the wall can still feel the door as it is. The illusion lasts for a scene.',
            '<b>Exceptional Success:</b> The illusion lasts for a day and a night.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-1", Situation: "The changeling is in his enemy’s territory." },
                    { Modifier: "+2", Situation: "The door leads into territory that the changeling owns." }
                ]
            }
        ],
        "Description": "Hide the presence of an entrance or exit.",
        "Book": "WM 19"
    },
    {
        "Name": "Cuckoo’s Ruse",
        "Rank": "•••",
        "Cost": "●●",
        "Dice Pool": "Manipulation + Wyrd (vs Hollow Wards)",
        "Catch": "Invite the resident to your own home",
        "Action": "Instant",
        "FullDescription": [
            'This clause is one of the dirtier tricks available to a Beast, as it allows him to violate the rules of hospitality by entering another person’s house — including her Hollow. The Beast simply appears to be one of the home’s residents to the home itself.',
            'This clause does not function if the home Hollow being invaded belongs to a changeling who also possesses Contracts of the Den. She is under the Contract’s protection, after all.'
        ],
        "FullCatch": [
            'The character has openly invited the owner of the location over to his home within the last three days.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The clause fails to activate, and any alarms are set off.',
            '<b>Failure:</b> The clause fails to activate, and cannot be used on the location again until 24 hours have passed. The character must risk the security systems normally.',
            '<b>Success:</b> The character “convinces” the building or Hollow that he is one of the residents. He can then bypass the security systems as if he owned the place. Recording devices will show him as one of the residents, no less. Mortal security guards and animals aren’t affected, though hobgoblin sentries in a Hollow will be.',
            'This clause can only gain entry to a given location. It doesn’t remove barriers within that location. Thus, the changeling could open the front door of a mansion, and the security cameras would show him to be one of the family members who live there, but the clause wouldn’t open any of the locked doors inside the house for him.',
            '<b>Exceptional Success:</b> Anyone accompanying the character is affected by the clause’s benefits.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-1", Situation: "The changeling has never set foot inside the location before." },
                    { Modifier: "+1", Situation: "The changeling has visited the location before as an invited guest." }
                ]
            }
        ],
        "Description": "Fool security measures into welcoming you.",
        "Book": "WM 19"
    },
    {
        "Name": "Blessing of the Burrow",
        "Rank": "••••",
        "Cost": "●●",
        "Dice Pool": "Survival + Wyrd",
        "Catch": "Nude",
        "Action": "Instant",
        "FullDescription": [
            'This clause allows the Beast to make a safe den or hiding place in almost any location. The changeling calls on the power of Wyrd to excavate a burrow with astonishing speed. The opening of this burrow can be concealed with Trapdoor Spider’s Trick, thus allowing a Beast with Glamour to burn the ability to construct a useful hiding place in times of duress.'
        ],
        "FullCatch": [
            'The character is nude at the time of invoking the clause.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The burrow collapses partway through excavation. The changeling is likely caught underground and must pull himself free.',
            '<b>Failure:</b> The clause fails to work.',
            '<b>Success:</b> The clause activates. The changeling can excavate roughly a five foot by five foot by five foot cube of earth, stone or concrete each turn, for up to one turn per success. A burrow dug into soft earth or sand gains hard packed walls, and will not collapse on its own. The tunnel dug is rough-hewn, and bears what appear to be claw marks around its edges.',
            '<b>Exceptional Success:</b> The changeling can choose to conceal the claw marks if he so chooses, making the burrow appear more natural or human-made.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-4", Situation: "Reinforced concrete" },
                    { Modifier: "-2", Situation: "Stone or concrete" },
                    { Modifier: "+1", Situation: "Packed earth" },
                    { Modifier: "+2", Situation: "Soft earth or sand" }
                ]
            }
        ],
        "Description": "Carve a burrow out of the earth.",
        "Book": "WM 20"
    },
    {
        "Name": "Collapsing the Entrance",
        "Rank": "•••••",
        "Cost": "●●●○",
        "Dice Pool": "Strength + Wyrd",
        "Catch": "Your own property",
        "Action": "Extended (one roll per turn, target number of successes needed is equal to half the Structure rating of the building)",
        "FullDescription": [
            'The ultimate clause of the Contracts of the Den is self-sacrificing in nature. What had to be built must now be brought low. Similar to an animal collapsing the entrance of its burrow to prevent an enemy from reaching the heart of the warren, the Beast is able to bring down a section of a building or burrow. The changeling must be standing within or on the threshold of the building in question.'
        ],
        "FullCatch": [
            'The building to be damaged or collapsed belongs to the changeling using the clause.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> All successes are lost. The changeling takes one point of lethal damage from the strain. The character must spend the cost again to restart the Contract.',
            '<b>Failure:</b> No successes are gained.',
            '<b>Success:</b> Successes are gathered. If the total number of successes reaches the needed amount, the character brings down a section of the building. The area of destruction may reach up to five feet in radius for every point of the character’s Wyrd, centered on the changeling. Depending on where the changeling is standing, this may bring down the entirety of the building. The Beast may make a reflexive Dexterity + Survival roll to avoid any incidental damage from the collapse, although he may still be pinned under debris if he couldn’t reach a safe place with a standard move action.',
            '<b>Exceptional Success:</b> No additional effect.',
            {
                'Affected size': [
                    { 'Building Size': "Trailer, basement-sized burrow", 'Number of Successes Needed': "5" },
                    { 'Building Size': "Two-story house, small cavern", 'Number of Successes Needed': "10" },
                    { 'Building Size': "McMansion", 'Number of Successes Needed': "15" },
                    { 'Building Size': "Strip mall", 'Number of Successes Needed': "20" },
                    { 'Building Size': "Skyscraper", 'Number of Successes Needed': "40" }
                ]
            },
            {
                'Suggested Modifiers': [
                    { Modifier: "-3", Situation: "Nobody resides within the building." },
                    { Modifier: "+1", Situation: "The building was designed as a residence." },
                    { Modifier: "+2", Situation: "At least one family calls the building home." }
                ]
            }
        ],
        "Description": "Bring the roof down from within the threshold.",
        "Book": "WM 20"
    },
    {
        "Name": "Contracts of Fang and Talon",
        "Rank": "N/A",
        "Cost": "N/A",
        "Dice Pool": "N/A",
        "Catch": "N/A",
        "Action": "",
        "FullDescription": [
            'Changelings use these Contracts to emulate and become closer to specific animals. Contracts of Fang and Talon are purchased separately, each Contract attuning itself to one specific type of animal. Canines, felines, sea mammals, predatory birds, fish, sharks or even bony fish are all sample possibilities. The character may choose to attune to a particular species, or as widely as a general family of animals; he could take affinity with Wolves or Canines, but not with Carnivora or Mammals. For example, a character assigning all her beginning five dots in Contracts could purchase Fang and Talon ••• (Canines) and Fang and Talon •• (Birds of Prey), or Fang and Talon • (Oxen), Fang and Talon •• (Equines) and Fang and Talon •• (Goats). Purchasing more dots of any given Contract of Fang and Talon does not increase the others. However, the Beast seeming’s affinity applies to all Contracts of Fang and Talon, allowing Beasts to purchase multiple Contracts of Fang and Talon at reduced cost. In addition, learning new versions of already known clauses is half the cost (round down) of learning a new Contract. For example, a character with Fang and Talon •• (Snakes) and Fang and Talon • (Lizards) could purchase the second dot of Fang and Talon (Lizards) at half cost, as she already knows Beast’s Keen Senses (Snakes). However, a character with Hearth ••• and Fang and Talon •• (Bats) would not pay half cost for the third dot in Fang and Talon (Bats), as she hasn’t yet learned the specific Pipes of the Beastcaller clause.'
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "N/A",
        "Book": "N/A"
    },
    {
        "Name": "Tongues of Birds and Words of Wolves",
        "Rank": "•",
        "Cost": "●",
        "Dice Pool": "Animal Ken + Wyrd",
        "Catch": "Name the animals",
        "Action": "Instant",
        "FullDescription": [
            'The changeling can communicate with the general type of animal represented in the Contract. This communication is partially empathic, but the changeling must either whisper to the animal in her own language or attempt to imitate whatever sounds the animal uses to express itself. Most animals make some sort of noise while responding, but they need not do so. Animals tied to the changeling by kith or this Contract instinctively feel a kinship with the changeling and readily communicate unless immediate circumstances, such as an obvious threat, intervene. Simpler, less intelligent animals communicate with less complexity. Mammals and birds are relatively easy to speak with. However, reptiles, invertebrates and most fish can provide only very simple information, such as whether or not any humans recently came near or the general location of fresh water.'
        ],
        "FullCatch": [
            'The changeling gives the animal a new name.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The character angers or scares the animal he tries to approach and cannot use this clause for one full scene.',
            '<b>Failure:</b> No communication occurs.',
            '<b>Success:</b> The changeling can speak to all animals of the specified type for the next scene.',
            '<b>Exceptional Success:</b> The animal feels affection and loyalty toward the character. The animal is actively helpful and volunteers information unasked if it considers that information important (so far as its intelligence allows).',
            {
                'Suggested Modifiers': [
                    { Modifier: "+1", Situation: "The character imitates the animal’s sounds and body language." },
                    { Modifier: "-1", Situation: "The animal is frightened or hurt." }
                ]
            }
        ],
        "Description": "Speak with animals of your chosen breeds.",
        "Book": "CTL 142"
    },
    {
        "Name": "Beast’s Keen Senses",
        "Rank": "••",
        "Cost": "●●",
        "Dice Pool": "Wits + Wyrd",
        "Catch": "In contact with the chosen animal",
        "Action": "Instant",
        "FullDescription": [
            'The changeling gains the senses of a specific type of animal, selected when the changeling learns this clause. This clause enhances the changeling’s natural senses, and may well grant him entirely new senses such as a viper’s infrared pits or a bat’s echolocation.'
        ],
        "FullCatch": [
            'The changeling sees or touches an animal of the type being imitated.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The character’s senses become slightly muddied and confused. The character experiences a -1 die penalty to all Perception rolls for the next scene.',
            '<b>Failure:</b> The Contract fails, and the character’s senses are unaffected.',
            '<b>Success:</b> The character gains a +2 dice bonus to all Wits rolls relating to perception for the next full scene. In addition, he gains the chosen animal’s most notable sensory ability — a wolf or dog’s sense of smell, including the ability to identify people and track by scent, an owl or cat’s night vision and so on. If the character’s particular animal has no significant exceptional sense (such as a goat or monkey), he instead gains a +4 dice bonus to all Wits rolls relating to perception. These bonuses last for the next full scene.',
            '<b>Exceptional Success:</b> The character gains an additional +1 die to all Perception rolls for the scene.',
            {
                'Suggested Modifiers': [
                    { Modifier: "+1", Situation: "The changeling is touching an animal of the correct type." },
                    { Modifier: "+1", Situation: "The changeling is wearing a mask or other large image (such as a painting on the back of a jacket of an animal of the correct type)." },
                    { Modifier: "-1", Situation: "The environment is one that the animal would find uncomfortable and unnatural, such as a jungle animal in winter snow." }
                ]
            }
        ],
        "Description": "+2 perception bonus and either a sense characteristic to the chosen animal or an additional +2.",
        "Book": "CTL 142"
    },
    {
        "Name": "Pipes of the Beastcaller",
        "Rank": "•••",
        "Cost": "●●",
        "Dice Pool": "Animal Ken + Wyrd",
        "Catch": "To guard your home",
        "Action": "Instant",
        "FullDescription": [
            'The changeling can command the animal specified in the Contract. The character can call any single animal of this type that she can see or hear, causing the animal to come rapidly to her aid, and then instruct the animal on what she wants it to do. Particularly small animals may be called in groups. The changeling can call and command up to a dozen tiny animals, such as rats, mice or small bats, if she can see or hear them all. Changelings can also call an entire hive of insects such as bees or wasps. The animal (or animals) obeys to the best of its ability, but its nature and intelligence might cause the animal to interpret its orders in unusual ways. The animal attempts to carry out commands for the next full day, after which it ceases to obey the character. The animal will not cooperate with anything obviously self-destructive, such as standing still in front of an oncoming car. Large groups of small animals such as rats or bees act as one and cannot be split up to perform different tasks.'
        ],
        "FullCatch": [
            'The changeling asks the animal to guard or watch the changeling’s dwelling.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The animal either attacks the character or completely misunderstands the instructions and does the exact opposite of what he commands it to do.',
            '<b>Failure:</b> The character cannot communicate with or command the animal.',
            '<b>Success:</b> The animal can both understand the character’s wishes and obeys the character’s orders to the best of its abilities.',
            '<b>Exceptional Success:</b> The character retains an empathic bond with the animal, allowing him to roughly sense its location and emotional and physical condition. For the next full day, the character can spend one point of Glamour to communicate for one scene with the animal at any distance.',
            {
                'Suggested Modifiers': [
                    { Modifier: "+1", Situation: "The changeling offers the animal appropriate foodstuffs." },
                    { Modifier: "-1", Situation: "The animal is frightened or injured." }
                ]
            }
        ],
        "Description": "Command animals of the chosen breeds.",
        "Book": "CTL 143"
    },
    {
        "Name": "Tread of the Swift Hooves",
        "Rank": "••••",
        "Cost": "●●",
        "Dice Pool": "Dexterity + Wyrd",
        "Catch": "In contact with the chosen animal",
        "Action": "Instant",
        "FullDescription": [
            'The character gains the Contracted animal’s mode of locomotion. This clause allows characters emulating unusually swift animals to run faster, characters emulating aquatic animals to swim better and faster and characters moving like flying animals to jump and glide inhumanly well. If the animal is noted for being able to move exceptionally well in several different ways, such as a type of monkey that excels at both climbing and jumping, the character must choose which type of movement he wishes to gain when he learns this clause and must learn a new version to gain the other ability.'
        ],
        "FullCatch": [
            'The character is touching an animal of the correct type.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The Contract fails. The character suffers a -1 die penalty to Speed for the scene.',
            '<b>Failure:</b> The Contract fails, and the character is unaffected.',
            '<b>Success:</b> The character gains the movement capabilities of the animal. Swift runners such as horses or dogs allow the changeling to double her Speed. Aquatic animals allow the changeling to swim as rapidly and as easily as she can walk or run and hold her breath 10 times as long (including any modifiers from the Strong Lungs Merit). Flying, gliding or jumping animals allow the changeling to quadruple her jumping distance and fall any distance without harm. Climbing animals such as monkeys allow the changeling to gain +5 to all climbing rolls and climb at five times normal speed. This enhanced movement lasts for one full scene.',
            '<b>Exceptional Success:</b> The character’s enhanced movement lasts until the sun next sets or rises, whichever comes first.',
            {
                'Suggested Modifiers': [
                    { Modifier: "+1", Situation: "The changeling wears a mask of the animal or a large garment made from its skin." },
                    { Modifier: "-1", Situation: "The clause is invoked someplace the animal is never naturally found." }
                ]
            }
        ],
        "Description": "Move like the chosen animal for a scene.",
        "Book": "CTL 143"
    },
    {
        "Name": "Cloak of the Bear’s Massive Form",
        "Rank": "•••••",
        "Cost": "●●●●",
        "Dice Pool": "Manipulation + Wyrd",
        "Catch": "In contact with the chosen animal in its habitat",
        "Action": "Instant",
        "FullDescription": [
            'The changeling can physically transform into the animal bound to the Contract. The transformation takes one turn. The character’s clothing and small objects close to his skin, such as phones or wallets, blend into this animal form.'
        ],
        "FullCatch": [
            'The changeling is in the natural habitat of his associated animal and touching or within touching distance of at least one of these animals.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The character partially transforms, becoming a clumsy half-human being who suffers a -2 dice penalty to all Strength and Dexterity pools and a -2 dice penalty to Defense and Speed. The botched transformation lasts until the character can take two consecutive turns to shift back.',
            '<b>Failure:</b> The Contract fails, and the character cannot transform.',
            '<b>Success:</b> The character successfully transforms into the correct animal. The character can remain transformed for up to a scene or can choose to revert to her normal form at any time. Transforming back into the normal form requires one turn, and ends the clause’s effects.',
            'The character’s Health alters if her Size and Stamina change. In animal form, the character automatically gains animal senses, exactly as if she had performed the eagle’s gleaming eyes clause. The creature’s Physical Attributes replace the changeling’s, but she retains her Social and Mental Attributes. Her Skills also remain the same. The changeling gains some measure of the animal’s instinctual drives and motor control, so she can run, fly or swim normally. While in animal form, the character can speak all human languages she knows, and can also communicate normally with animals of the species she has become.',
            '<b>Exceptional Success:</b> The character can remain transformed until the sun next rises. If she has taken the form of an animal with a smaller Size than her own, she retains her full Health as if her Size had not changed.',
            {
                'Suggested Modifiers': [
                    { Modifier: "+1", Situation: "In the animal’s natural habitat" },
                    { Modifier: "-1", Situation: "Inside a well-lit building closed off from the outside world" }
                ]
            }
        ],
        "Description": "Take the form of the chosen animal, with all associated benefits.",
        "Book": "CTL 143"
    },
    {
        "Name": "Contracts of the Wild",
        "Rank": "N/A",
        "Cost": "N/A",
        "Dice Pool": "N/A",
        "Catch": "N/A",
        "Action": "",
        "FullDescription": [
            'According to many legends and folktales, the Gentry are either spirits of the natural world or at least hold considerable sway over all manner of natural forces. Changelings who learn these Contracts embrace that power and learn to control the raw and wild powers of the natural world.',
            'These are considered affinity Contracts for Beasts and Elementals.'
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "N/A",
        "Book": "N/A"
    },
    {
        "Name": "Wildwalker",
        "Rank": "•",
        "Cost": "●",
        "Dice Pool": "Persuasion + Wyrd",
        "Catch": "After sleeping outdoors",
        "Action": "Instant",
        "FullDescription": [
            'The changeling places herself in harmony with the natural world, so that it does not impede her efforts. Rain and winds avoid her, and thin branches move out of her way. Thus, she can operate normally even in environmental conditions that would hinder others.'
        ],
        "FullCatch": [
            'The character spent the last night sleeping outdoors.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The changeling angers the local forces of nature, gaining a penalty to all rolls equal to her Wyrd for the next scene.',
            '<b>Failure:</b> The clause fails, and natural forces affect the character normally.',
            '<b>Success:</b> For each success she rolls, the character negates a -1 penalty caused by environmental conditions or the natural world. Such conditions include penalties to perception due to fog, smoke or wind as well as penalties to movement due to thick branches, ice, rain or high winds. The effects of this clause last for once scene. This changeling can use this clause on either herself or others, but each use of this clause protects only one individual. Also, this clause affects only the target, not any vehicle he may be operating. This clause allows a character to run through a thicket without hindrance or harm, but would not allow him to drive a car unhindered through a swamp. Multiple successes on this clause negate larger penalties, but may not completely remove them. If a thick fog imposes a -3 penalty to Wits + Composure rolls to see and the character rolls two successes, then these two successes negate two points of this penalty, leaving a -1 penalty to the character’s Wits + Composure rolls to see through the fog.',
            '<b>Exceptional Success:</b> Beyond the advantages gained by rolling multiple successes, no special bonus is gained.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-1", Situation: "The character is wearing delicate clothing that can be easily ruined by dirt or water." },
                    { Modifier: "+1", Situation: "The character is dressed in clothing designed for use in the wilderness." }
                ]
            }
        ],
        "Description": "Ignore penalties from environmental conditions for a scene.",
        "Book": "RoS 111"
    },
    {
        "Name": "Nature’s Curse",
        "Rank": "••",
        "Cost": "●",
        "Dice Pool": "Intimidation + Wyrd",
        "Catch": "Target has a gun",
        "Action": "Instant",
        "FullDescription": [
            'The character can persuade the local forces of nature to impede and harass a specific individual. Thus, rains strikes this individual with more force, fog and smoke collects around her more densely and twigs and brush resist her passage with more force.'
        ],
        "FullCatch": [
            'The target is carrying a gun.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> Natural forces aid the target, providing him with a +1 bonus to all rolls for the next scene.',
            '<b>Failure:</b> Natural forces affect the target normally.',
            '<b>Success:</b> Each success increases all penalties due to adverse natural conditions that the target suffers by 1. Thick brush and high wind both reduce her Speed by one additional point per success, and fog or smoke reduces her rolls to see clearly by an additional point. However, this clause cannot cause any environmental penalties to increase by more than a factor of two. If the target is already experiencing a -2 penalty to vision rolls due to thick fog, then even rolling three successes will not increase this penalty by more than an additional two points, to a total of -4. If there are no environmental penalties, then the maximum total penalty provided by this clause is -1.',
            '<b>Exceptional Success:</b> Increase the maximum penalty suffered by the target by an additional -1. If the target currently previously had no negative modifiers due to hostile environmental conditions, this clause imposes a total penalty of -2.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-1", Situation: "The target spent the last night sleeping outdoors or in a tent." },
                    { Modifier: "+1", Situation: "The target complained about some natural phenomena, such as mosquitoes or the weather, a minute or less before the changeling used this Contract." }
                ]
            }
        ],
        "Description": "Up to double existing environmental penalties against a target.",
        "Book": "RoS 111"
    },
    {
        "Name": "Viridian Embrace",
        "Rank": "•••",
        "Cost": "●●",
        "Dice Pool": "Expression + Wyrd",
        "Catch": "To aid a mortal",
        "Action": "Instant",
        "FullDescription": [
            'The changeling can cause natural forces to actively aid her efforts. Winds help speed her running or aid her balance, and plants shield her from observation.'
        ],
        "FullCatch": [
            'The changeling is attempting to come to the aid of a mortal.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The forces of nature actively hinder the character, providing a -2 penalty to all rolls involving perception, movement or stealth for the next scene.',
            '<b>Failure:</b> The clause fails.',
            '<b>Success:</b> For each success rolled, natural forces provide a +1 bonus to all rolls involving perception, movement or stealth the character makes during the next full scene. This clause also increases the character’s Speed by +1 per success. Characters can benefit from this clause only if they are either outdoors or in the presence of a large number of plants. Vines and tree branches attempt to shield the character from observation, just as ivy on a wall provides convenient footholds and winds help direct the character’s movements and carry sounds to her.',
            '<b>Exceptional Success:</b> Beyond the advantages gained by rolling multiple successes, no special bonus is gained.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-2", Situation: "The character is indoors but in a large space with many plants." },
                    { Modifier: "-1", Situation: "The weather is calm and clear." },
                    { Modifier: "+1", Situation: "The character is in a park, a dirty street or some other environment that is not carefully managed or regularly cleaned." },
                    { Modifier: "+2", Situation: "The character is in a forest, construction site or some other complex outdoor environment." }
                ]
            }
        ],
        "Description": "Gain environmental bonuses to move, hide and perceive.",
        "Book": "RoS 112"
    },
    {
        "Name": "Calling Wind and Weather",
        "Rank": "••••",
        "Cost": "●●●",
        "Dice Pool": "Presence + Wyrd",
        "Catch": "On behalf of a dozen mortals",
        "Action": "Instant",
        "FullDescription": [
            'The changeling can call or calm storms and otherwise control the local weather. This control is fairly general and is limited to conditions that would be reasonable given the season and location, and the character cannot create violent or seriously damaging weather conditions such as tornadoes, blizzards or hurricanes. However, within these limits, the weather is in the hands of the character.'
        ],
        "FullCatch": [
            'A dozen or more mortals all ask the changeling to provide the desired weather or are at least hoping the changeling will do so.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The weather changes in a manner opposite to the character’s wishes. If the character attempts to calm a windstorm, it becomes worse, and if he tries to call rain, the day becomes hotter and drier.',
            '<b>Failure:</b> The Contract fails, and the weather remains unchanged.',
            '<b>Success:</b> The character can change the weather to suit her desires. She cannot create snow in the tropics or blazing heat during a Minnesota winter, but she can create any weather condition that is possible for the area and season, regardless of the current weather. She can call a thunderstorm or a blizzard during a sunny day or calm high winds. Although she can slightly reduce the impact of severe weather such as a hurricane or tornado, she cannot create such extreme weather conditions, and she can’t entirely dispel them. The effects of this clause are local and depend upon how different the weather the character calls is from current conditions; it covers anything from one square mile to an entire large town or small city (not counting the suburbs).',
            'As long as the character succeeds, the weather arrives, but the number of successes affects how rapidly the weather arrives and how long it lasts.',
            {
                'Weather changes': [
                    { Successes: "1", 'Time to Arrive': "Three Hours", Duration: "One Hour" },
                    { Successes: "2", 'Time to Arrive': "One Hours", Duration: "Three Hours" },
                    { Successes: "3", 'Time to Arrive': "30 Minutes", Duration: "Eight Hours" },
                    { Successes: "4", 'Time to Arrive': "10 Minutes", Duration: "One Day" },
                    { Successes: "5", 'Time to Arrive': "3 Minutes", Duration: "Three Days" },
                ]
            },
            '<b>Exceptional Success:</b> Beyond the advantages gained by rolling multiple successes, no special bonus is gained.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-1 to -3", Situation: "The current weather is significantly different from the desired weather. Calling heavy rain on a sunny, cloudless day would have a -3 penalty." },
                    { Modifier: "+1 to +3", Situation: "The current weather is similar to the desired weather. Changing a drizzle to light rain would gain a +3 bonus." }
                ]
            }
        ],
        "Description": "Conjure weather native to a clime.",
        "Book": "RoS 112"
    },
    {
        "Name": "Calling Nature’s Wrath",
        "Rank": "•••••",
        "Cost": "●●●○",
        "Dice Pool": "Survival + Wyrd",
        "Catch": "On family land",
        "Action": "Instant",
        "FullDescription": [
            'The character unleashes the fury of the natural world over a large area. Branches whip with dangerous force, heavy winds blow debris, hail falls with damaging force and ice or water makes the ground slick.'
        ],
        "FullCatch": [
            'The changeling is on land owned by her family.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> Nature’s fury is directed solely at the character. For the remainder of the scene, the character suffers a -2 penalty to all rolls due to adverse environmental conditions.',
            '<b>Failure:</b> The character fails to stir the fury of the natural world.',
            '<b>Success:</b> The natural world attacks everyone within 50 yards of the changeling. Violent winds, hail, branches, debris lying on the ground and similar objects and weather conditions all attack everyone around the changeling in a manner that seems unnatural, but not entirely impossible. As a result, everyone within range suffers a penalty equal to the number of successes the changeling rolled to all rolls involving perception, agility, movement or combat for one full scene. The Speed of everyone within range is also reduced by the same amount. In addition, everyone within range suffers minor damage. Everyone within range takes the number of successes rolled as bashing damage. Armor protects against this damage, but Defense and Dodging do not. This damage consists of a mixture of exposure to adverse temperatures, slipping on ice and the impact of branches, rocks, hail or debris.',
            'The changeling is unaffected by these penalties and damage, and she can protect up to six other people who remain within a number of yards of her equal to her Wyrd. This clause works equally well in wilderness and urban areas, but works only in places exposed to the open air.',
            '<b>Exceptional Success:</b> The affected area extends 100 yards around the character.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-2", Situation: "The area around the changeling is partially enclosed." },
                    { Modifier: "-1", Situation: "The area around the changeling is particularly clean or otherwise devoid of debris." },
                    { Modifier: "+1", Situation: "The clause is used in brush, woods, a construction site or anywhere else that is filled with debris and intrinsically difficult or dangerous to move through." },
                    { Modifier: "+2", Situation: "The clause is used during a storm or other extreme environmental conditions." }
                ]
            }
        ],
        "Description": "The natural environment attacks for 50 yards around, excluding allies.",
        "Book": "RoS 113"
    }
]

const darklingContractsData = [
    {
        "Name": "Contracts of Darkness",
        "Rank": "N/A",
        "Cost": "N/A",
        "Dice Pool": "N/A",
        "Catch": "N/A",
        "Action": "",
        "FullDescription": [
            'The Darklings have pacted with the power of darkness itself to shelter and nurture them. Darkness Contracts are used to hide the changeling, to induce dread in mortals and to produce effects associated with darkness, night and the terror of a ghost story come true.'
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "N/A",
        "Book": "N/A"
    },
    {
        "Name": "Creeping Dread",
        "Rank": "•",
        "Cost": "●/●●○",
        "Dice Pool": "Manipulation + Wyrd - Resolve",
        "Catch": "Against intruders in your home",
        "Action": "Instant",
        "FullDescription": [
            'This clause causes those affected to become less resistant to fear or intimidation. The target or targets initially feels a mild shudder of fear and then becomes considerably more susceptible to any event that could make them afraid or intimidated, including anything that might trigger a Phobia derangement.'
        ],
        "FullCatch": [
            'The changeling is using this clause to frighten intruders into her dwelling.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The target or targets gain +1 die to resist fear and are immune to this clause for the next scene.',
            '<b>Failure:</b> The Contract fails and has no effect on the target or targets.',
            '<b>Success:</b> The target or targets feel mild fear and experience a penalty equal to the changeling’s Wyrd to all Resolve or Composure rolls to resist fear or intimidation. If the changeling spends one point of Glamour, this clause affects one target the changeling can see clearly. If the changeling spends two points of Glamour and one point of Willpower, the clause affects everyone within three yards per dot of Willpower the changeling possesses. In both cases, this effect lasts for one scene.',
            '<b>Exceptional Success:</b> The penalty to rolls to resist fear is equal to the changeling’s Wyrd +2.',
            {
                'Suggested Modifiers': [
                    { Modifier: "+1", Situation: "The surroundings are dark and spooky." },
                    { Modifier: "+2", Situation: "The target or targets are already somewhat afraid." },
                    { Modifier: "-1", Situation: "The targets are vigilant and expecting trouble." },
                    { Modifier: "-1", Situation: "The surroundings are brightly lit and not conducive to fear." }
                ]
            }
        ],
        "Description": "Render one or multiple targets susceptible to fear or intimidation.",
        "Book": "CTL 136"
    },
    {
        "Name": "Night’s Subtle Distractions",
        "Rank": "••",
        "Cost": "●",
        "Dice Pool": "Stealth + Wyrd",
        "Catch": "Out in the night",
        "Action": "Instant",
        "FullDescription": [
            'This clause allows the Lost to avoid notice by enhancing physical conditions that limit perception. A dark night seems darker, background noises that obscure the changeling’s footsteps seem louder, distractions become more distracting and strong smells can even block a bloodhound’s ability to track the changeling.'
        ],
        "FullCatch": [
            'The clause is invoked outdoors at night.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The targets are unaffected. Instead, the Contract affects the changeling and everyone she attempted to exclude from the Contract for the next scene.',
            '<b>Failure:</b> The Contract affects no one’s perceptions.',
            '<b>Success:</b> This clause affects everyone within 50 yards of the changeling. The changeling is not affected, and can also choose to keep anyone in physical contact with her from being affected. Everyone else within range doubles all environmental penalties to Wits rolls involving perception, including Wits + Composure rolls, as well as Wits + Skill rolls to notice events or Wit’s + Investigation rolls to intentionally search for something. In a quiet, well-lit room or hallway, there are typically no environmental penalties, and this Contract provides only a -1 die penalty to these rolls. This Contract affects perceptions, not actual environmental conditions. Darkness does not actually become darker, and sounds don’t actually become louder. Only the targets’ perceptions are changed. This clause lasts for the next scene and affects the individuals nearby when it is performed. If someone new arrives, she will be unaffected. However, anyone affected will continue to be affected, even if he moves more than 50 yards from the changeling.',
            '<b>Exceptional Success:</b> The Contract affects everyone in range that the changeling does not protect, including people who come within range later. The changeling does not have to be in physical contact with those she wishes to spare from the Contract’s effects.',
            {
                'Suggested Modifiers': [
                    { Modifier: "+1", Situation: "Total environmental modifiers to perception are no more than -1." },
                    { Modifier: "-1", Situation: "Total environmental modifiers to perception are -3 or higher." }
                ]
            }
        ],
        "Description": "Double environmental penalties to perception.",
        "Book": "CTL 136"
    },
    {
        "Name": "Balm of Unwakeable Slumber",
        "Rank": "•••",
        "Cost": "●",
        "Dice Pool": "Manipulation + Wyrd vs Resolve + Tolerance",
        "Catch": "Against someone in their own bed at night",
        "Action": "Resisted",
        "FullDescription": [
            'This clause causes all sleeping targets the changeling can see or hear to be nearly impossible to wake. Targets remain sleeping through loud noises, or being shaken moderately, moved or even tied up, handcuffed and shoved into a car trunk. Targets awaken if harmed, but will otherwise remain asleep. When using this Contract on mortal targets, use the highest Resolve for all of them.'
        ],
        "FullCatch": [
            'The target is asleep at home in his own bed, and the Contract is performed between sunset and sunrise.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The target wakes up.',
            '<b>Failure:</b> The target’s sleep is unaffected.',
            '<b>Success:</b> When this clause is used on one or more sleeping targets that the changeling can see or hear, the target becomes almost impossible to awaken until the time they are accustomed to waking. The targets can be shouted at, picked up or manhandled without waking. However, anything that does one or more points of any type of damage instantly awakens the sleepers — repeatedly slapping targets or shaking them vigorously enough to hurt will also wake them up. Dense smoke, intense heat or other situations causing targets to cough, choke or fight for their lives will awaken them normally. Nothing else, including the screams of a terrified loved one, can break their slumber.',
            '<b>Exceptional Success:</b> When the targets wake up, they remain groggy for another full scene, suffering a -2 dice penalty to Speed, Defense and all actions.',
            {
                'Suggested Modifiers': [
                    { Modifier: "+2", Situation: "The target is deeply asleep." },
                    { Modifier: "-1", Situation: "The target is taking a nap and is not planning to sleep for more than a short time." }
                ]
            }
        ],
        "Description": "Prevent a sleeping target from being woken by disturbances.",
        "Book": "CTL 137"
    },
    {
        "Name": "Boon of the Scuttling Spider",
        "Rank": "••••",
        "Cost": "●●●",
        "Dice Pool": "Athletics + Wyrd",
        "Catch": "Across outdoor walls at night",
        "Action": "Instant",
        "FullDescription": [
            'This clause allows the Lost to run along any solid surface, such as a wall or ceiling, like a scuttling spider.'
        ],
        "FullCatch": [
            'The changeling is climbing a wall made of stone or wood outdoors, at night.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The character stumbles and must make a Dexterity + Athletics roll to avoid falling down. She cannot use this clause for the rest of the scene.',
            '<b>Failure:</b> The Contract fails to work.',
            '<b>Success:</b> The character can now walk and run along walls or ceilings or along slick or ice-covered surfaces that would normally be treacherous to attempt to cross. The character can only move along solid surfaces capable of supporting her weight. She can move at normal speed, and can attack, dodge and gains her full Defense while moving in this fashion.',
            '<b>Exceptional Success:</b> The character moves so swiftly and easily that she adds +1 to her Defense when using this clause.',
            {
                'Suggested Modifiers': [
                    { Modifier: "+1", Situation: "The surface the character is attempting to climb is rough, with many handholds and footholds." },
                    { Modifier: "-1", Situation: "The surface the character is attempting to climb is smooth and polished, with few handholds or footholds." },
                    { Modifier: "+1", Situation: "The character is barefoot." }
                ]
            }
        ],
        "Description": "Move across solid surfaces in defiance of gravity.",
        "Book": "CTL 137"
    },
    {
        "Name": "Touch of Paralyzing Shudder",
        "Rank": "•••••",
        "Cost": "●●○",
        "Dice Pool": "Presence + Wyrd vs Resolve + Tolerance",
        "Catch": "Isolate and unnerve target",
        "Action": "Reflexive",
        "FullDescription": [
            'The character fills the target’s body with involuntary shudders of fear and revulsion that cause her to move in a slow and clumsy fashion. The target’s muscles respond more slowly and weakly, causing even the strongest and swiftest opponents difficulty.'
        ],
        "FullCatch": [
            'The target is both alone and already afraid of the changeling.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The target is immune to this Contract for the rest of the scene.',
            '<b>Failure:</b> The clause has no effect.',
            '<b>Success:</b> The changeling must touch or be touching the target to use this Contract. The target’s Speed, Defense, Initiative and all of the target’s dice pools involving Strength and Dexterity are halved (round up).',
            '<b>Exceptional Success:</b> Round down when halving the target’s new Speed, Defense, Initiative, Strength and Dexterity pools.',
            {
                'Suggested Modifiers': [
                    { Modifier: "+1", Situation: "The changeling touches the target’s bare skin." },
                    { Modifier: "-1", Situation: "The target is wearing actual armor, and the changeling did not touch his skin." },
                ]
            }
        ],
        "Description": "Inflict spasms of fear that half motor control traits and pools.",
        "Book": "CTL 138"
    },
    {
        "Name": "Contracts of Shade and Spirit",
        "Rank": "N/A",
        "Cost": "N/A",
        "Dice Pool": "N/A",
        "Catch": "N/A",
        "Action": "",
        "FullDescription": [
            'At some point in the past, the Gentry apparently bargained even with Death itself. While changelings may not have access to the great boons of immortality and unaging eternity granted to the True Fae, changelings can access lesser boons agreed upon between fae and death.'
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "N/A",
        "Book": "N/A"
    },
    {
        "Name": "Ghostly Presence",
        "Rank": "•",
        "Cost": "●",
        "Dice Pool": "Presence + Wyrd",
        "Catch": "Gravewight, or knew the ghost in life",
        "Action": "Instant",
        "FullDescription": [
            'The dead are among us, unseen and unheard by the living. This clause allows the changeling to see, hear and speak to any ghosts in her area (same room, or conversational distance outside) in Twilight for a scene.'
        ],
        "FullCatch": [
            'The ghost is someone the changeling knew in life, or the changeling is a Gravewight.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The clause fails, but the changeling thinks she is talking to a ghost and holds a conversation with empty air.',
            '<b>Failure:</b> The changeling cannot see or speak to the ghosts.',
            '<b>Success:</b> The changeling sees, hears and can speak to ghosts in the area as if they were living.',
            '<b>Exceptional Success:</b> The nearest other living individual is also affected by the clause — whether the changeling wants him to be or not.'
        ],
        "Description": "Commune with ghosts in Twilight",
        "Book": "WM 26"
    },
    {
        "Name": "Dread Companion",
        "Rank": "••",
        "Cost": "●",
        "Dice Pool": "Manipulation + Wyrd",
        "Catch": "Press drops of your blood to witnesses' foreheads",
        "Action": "Instant",
        "FullDescription": [
            'Normally the dead are barred from any interaction with the living. This clause thins that barrier. With Dread Companion, a ghost is given the ability to affect one sense (sight, touch, hearing) of everyone participating in the clause for one scene. If Dread Companion is cast indoors, everyone in a single room is susceptible to the clause; if the clause is cast outside, everyone within sight of the changeling using the clause is affected.'
        ],
        "FullCatch": [
            'The changeling presses a drop of her own blood to the forehead of everyone participating in the clause.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> Instead of giving the ghost the power to interact with the living, a minor, malicious spirit gains the freedom of sensory interaction for the scene. The spirit will act in as cruel and vicious manner it can, with the sense available, for the duration of the scene.',
            '<b>Failure:</b> The ghost is unable to interact.',
            '<b>Success:</b> The ghost is able to interact with the living for the scene.',
            '<b>Exceptional Success:</b> The ghost can be seen as well as whatever other sense has been selected. If sight was the chosen sense, then touch is the one added for free.'
        ],
        "Description": "Allow a ghost to manifest tangibly to one sense.",
        "Book": "WM 26"
    },
    {
        "Name": "Haunting Intercession",
        "Rank": "•••",
        "Cost": "●",
        "Dice Pool": "Manipulation + Wyrd",
        "Catch": "Prepare a \"dead supper\" with unused silverware",
        "Action": "Extended (one success per target)",
        "FullDescription": [
            'There are those who desperately wish for one more night with the departed: enemies seeking final vengeance or forgiveness, lovers hoping for one more embrace, mothers who did not get a chance to say goodbye to their sons. A changeling who invokes this clause gives a ghost one more chance to speak and be seen by the living.'
        ],
        "FullCatch": [
            'The changeling has set up a “dead supper”: a complete meal served on never-used plates and silver, with a place for everyone who wishes to participate in the intercession, including the ghost.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The ghost is not made manifest to the living; severe poltergeist activity is generated instead. For the duration of the scene, the location is full of loud roaring noises and horrible smells, hair and clothing are pulled and the like. The dishes are thrown and shattered; fragile objects are particularly subject to the poltergeist activity.',
            '<b>Failure:</b> The ghost is not made manifest.',
            '<b>Success:</b> The ghost materializes fully for the scene. The ghost can be interacted with as if it were alive, from conversation to lovemaking to violence.',
            '<b>Exceptional Success:</b> The ghost remains material from sunrise to sunset, able to move freely and interact with whomever the ghost chooses.'
        ],
        "Description": "Materialize a ghost for a scene.",
        "Book": "WM 26"
    },
    {
        "Name": "Waking the Dead",
        "Rank": "••••",
        "Cost": "●●",
        "Dice Pool": "Strength + Wyrd",
        "Catch": "Blood offering",
        "Action": "Extended (one roll per turn, target is four)",
        "FullDescription": [
            'The dead tell no tales. Most of the time. Invoking this clause allows the changeling to call up a non-sentient echo of the dead and communicate with it. This ghostly shadow is not a true ghost but an echo without self-awareness or intelligence; the echo fades at the end of the scene.'
        ],
        "FullCatch": [
            'The changeling “feeds” the shade by wounding herself and offering her blood, taking one point of bashing damage per question.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The information provided is incomplete or incorrect in some significant way that is not immediately obvious to the changeling.',
            '<b>Failure:</b> No shade appears.',
            '<b>Success:</b> The shade appears, as if standing on top of its grave and will answer one question per success precisely and honestly. The shade will not provide any information beyond what is requested.',
            '<b>Exceptional Success:</b> The shade will provide any important additional information that the changeling might not have known to ask for, or knew she needed.'
        ],
        "Description": "Ask questions of the sleeping dead.",
        "Book": "WM 27"
    },
    {
        "Name": "Opening the Black Gate",
        "Rank": "•••••",
        "Cost": "●●○",
        "Dice Pool": "Stamina + Wyrd",
        "Catch": "At midnight in a mausoleum, invoking laws of hospitality",
        "Action": "Extended (five successes; each roll represents one turn)",
        "FullDescription": [
            'There is a barrier between the living and the dead, which can only be crossed at great risk. This clause creates a doorway between the mortal world and the Underworld. This passage cannot be created in the Hedge, or Arcadia; attempts to do so are quite likely to draw the attention of the Gentry.'
        ],
        "FullCatch": [
            'The clause is invoked at midnight in a mausoleum, and the changeling invokes the laws of hospitality while the clause is in effect.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The passage is one-way. Those who take it will be trapped on the wrong side. The living can only pass to the Underworld — but not back — and the dead can only enter the mortal world, not return.',
            '<b>Failure:</b> No passage is created.',
            '<b>Success:</b> A passage, the size of a normal door, is created between the land of the dead and the world of the living for one night. When the sun first breaks the horizon in the mortal world, the door shuts forever, and those on the wrong side of it will be trapped unless they find, or make, another exit.',
            '<b>Exceptional Success:</b> The passage lasts for a lunar month. The dead and living can cross over in this location for as long as the location remains intact. If a changeling has used the catch to invoke this clause, she has to maintain the laws of hospitality only for that first night. The changeling has no mystical control over who uses this door; she can only control access in the usual fashion, by guarding it, locking it, bricking it up, etc.',
            '<b>Visiting the Underworld:</b> The Underworld is a highly dangerous place; a changeling with the strength to open the door has no guarantee of being strong enough to survive a visit. The entry point to the Underworld appears in different ways — a cavern with a black river flowing through it, a massive mausoleum, a long hallway or empty mansion. Many exits lead from this initial point deeper into the Underworld. The shades that reside here wait on the other side of the doors — mostly.',
            'Most Darklings would grow even paler at the thought of setting foot in the Underworld. This dread clause is something they use either as a means to send a restless shade home or as a potential way of tricking an enemy into a terrible fate.'
        ],
        "Description": "Open a gate to the Underworld.",
        "Book": "WM 27"
    }
]

const elementalContractsData = [
    {
        "Name": "Contracts of Communion",
        "Rank": "N/A",
        "Cost": "N/A",
        "Dice Pool": "N/A",
        "Catch": "N/A",
        "Action": "",
        "FullDescription": [
            'Instead of commanding or becoming an element, changelings who choose to pursue Contracts of Communion learn to communicate with the element and can eventually relate to their chosen element on a deeply personal level. As with Contracts of Elements, Contracts of Communion are purchased separately, each Contract attuning itself to one particular element. For example, a character assigning all his beginning five dots in Contracts could purchase Communion •• (Water) and Communion ••• (Ice), or Communion • (Fire), Communion •• (Earth) and Communion •• (Metal). Similarly, learning new versions of already known clauses is half the cost (round down) of learning a new Contract.'
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "N/A",
        "Book": "N/A"
    },
    {
        "Name": "Sense Element",
        "Rank": "•",
        "Cost": "●",
        "Dice Pool": "Wits + Wyrd",
        "Catch": "Meditation",
        "Action": "Instant",
        "FullDescription": [
            'The changeling first learns to precisely sense her cho- sen element. The results of this differ from one element to the next, but in all cases, she can sense the precise location and form of the element.'
        ],
        "FullCatch": [
            'The changeling sits and meditates for at least 10 minutes and makes a successful meditation roll.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The character’s perceptions become confused, and she experiences a -2 penalty to all Wits rolls involving perception for the next full scene.',
            '<b>Failure:</b> The Contract does not allow the character to perceive the element.',
            '<b>Success:</b> The character can precisely locate all instances of the element within Wyrd x 10 yards of her. She knows where all of these instances are and their precise shape. Sensing metal allows the character to sense all knives, guns or other metal weapons within range as well as learning whether the guns are loaded or have their safeties on. Sensing electricity allows the character to determine the exact location of all wiring behind the walls of a house or other building. When using this clause in conjunction with an appropriate talent (sensing metal while picking a metal lock, for instance), success provides a +1 bonus to all appropriate rolls to work with the element.',
            'When sensing fluid or intangible elements such as water, air or shadow, the character learns the location and general shape of anything surrounded by these elements. Sense Element (Air) allows the changeling to clearly perceive the shape of every person and object within range, just as Sense Element (Water) allows the character do to the same with anything and anyone who is underwater. This does not allow the character to detect entities concealed by supernatural power, though; the power interferes with what is, after all, a rather basic trick. The changeling must still make perception rolls where appropriate; a character hiding from the Elemental usually still gets the benefit of stealth, as remaining close to cover can deceive the clause.',
            'The clause’s effects last for one scene.',
            '<b>Exceptional Success:</b> The character can sense the element at a range of Wyrd x 25 yards.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-2", Situation: "The character’s senses are either restrained with blindfolds or similar items or overwhelmed with loud noises, bright flashing lights, intense smells or other distractions." },
                    { Modifier: "+1", Situation: "The character speaks to the element and asks it questions at the volume of a normal conversation." },
                ]
            }
        ],
        "Description": "Intuit the forms of the chosen element within (10 × Wyrd) yards.",
        "Book": "WM 32"
    },
    {
        "Name": "Primordial Voice",
        "Rank": "••",
        "Cost": "●",
        "Dice Pool": "Socialize + Wyrd",
        "Catch": "Courteous offering to the element",
        "Action": "Instant",
        "FullDescription": [
            'The character can talk to the element and ask it about past events that it may have sensed. The character can only learn about fairly recent information, but otherwise the element tells the character what she wishes to know. However, the character can only ask the element about events that occurred near where she is asking the question.',
            'This clause can be used once per scene.'
        ],
        "FullCatch": [
            'The character makes a minor offering to the element — polishing metal she is going to talk to, sweeping flagstones, singing for the air, adjusting the lights to make shadows larger, etc. In addition to the effort involved, such efforts also take at least a few minutes of time.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The character receives false or misleading information from the element.',
            '<b>Failure:</b> The character learns nothing from the element.',
            '<b>Success:</b> The character can ask the element about anything that occurred within the last day. Each additional success rolled allows the character to ask about events that occurred another day before. Rolling three successes allows the character to learn about events three days ago. For the next five minutes, the character can talk to every example of the chosen element that is within Wyrd x 3 yards.',
            'The information the element provides depends upon the particular element the changeling is talking to. Light provides visual images of the past, air provides sounds, including speech, while solid objects can provide details of how and when they were used, including images of the fingerprints or handprints of anyone that touched the objects. The elements can also answer general questions such as if anyone touched or walked through them in the last 12 hours as well as the number of people and when such events occurred. Details are typically inexact; the air in an office will probably differentiate between “worker” and “visitor,” but may not know the difference between “male” or “female.”',
            '<b>Exceptional Success:</b> In addition to being able to reply to questions about events up to five days in the past, the element is helpful and talkative, possibly offering potentially useful information without being asked or volunteering details about a situation that the character might not have otherwise asked about.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-1", Situation: "The character is brusque and hurried when asking her questions." },
                    { Modifier: "+1", Situation: "The character chats with the element before using the Contract and is friendly and polite." },
                ]
            }
        ],
        "Description": "Ask the chosen element about the past few days.",
        "Book": "WM 32"
    },
    {
        "Name": "Distant Connection",
        "Rank": "•••",
        "Cost": "●●(○)",
        "Dice Pool": "Persuasion + Wyrd",
        "Catch": "Through intimately familiar instances of the element",
        "Action": "Instant",
        "FullDescription": [
            'The changeling can share the senses and experiences of distant examples of her element. In addition, with additional effort, she can ask these distant examples of the element to perform actions for her.'
        ],
        "FullCatch": [
            'The character wishes to share the senses or ask a favor of an example of the element she is extremely familiar with, such as the wood of or air in her home or the metal in her car.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The character temporarily loses connection with her element and suffers a -2 penalty to all Contracts of Communion and the Elements for the next scene.',
            '<b>Failure:</b> The changeling cannot communicate with the element.',
            '<b>Success:</b> The changeling is able to share the senses and experiences of manifestations of her chosen element beyond the range of her senses. For ubiquitous elements such as air, earth or water on a lake or ocean, the character can sense the element and all major disturbances in it at a range equal to Wyrd x 30 yards. For elements that are not ubiquitous, such as fire, electricity or metal, the character has a range of Wyrd x 300 yards.',
            'A character using this Contract on air or on water while out on a lake could sense any large relatively rapidly moving objects such as cars or trucks, boats, large fish or submarines. Similarly, a character sensing fire could locate every lit match, candle, campfire or cigarette within range, and a character sensing water in a city could sense every pipe full of water as well as every drinking fountain, fire hydrant or tap that was in use.',
            'In addition to sensing the element, the character can also focus her attention on a specific manifestation of the element. She then extends her senses so that she can see an area around a specific lit cigarette or running faucet or see any specific location containing a ubiquitous element, such as air. The character can see and hear everything occurring within a radius of (Wyrd) yards, centered on the manifestation of the element.',
            'If the character spends a point of Willpower and makes another Wyrd + Persuasion roll, she can persuade a single manifestation of the element to briefly become more powerful and direct its power. The character could make a lit cigarette burst into flame and potentially set anything within a few inches on fire. She could also cause a light bulb to explode, a running tap to surge with water and splash everyone within a few feet of it, an electrical socket could shock someone a foot or two away or air to blow papers off a desk or a hat off someone’s head. None of these elemental manifestations can be stronger than the element could theoretically do on its own — a cigarette cannot suddenly flare up into a campfire, and none of these bursts of power last more than one turn. The character can affect the element as often as desired, but each attempt costs one point of Willpower.',
            '<b>Exceptional Success:</b> The character can affect a manifestation of the element that she is looking through for an entire scene by spending one point of Willpower and can affect any manifestation of the element she is perceiving. Exceptional successes on either the initial roll or the roll to affect the element have the same effect.'
        ],
        "Description": "Project senses at a distance through the chosen element. For Willpower, briefly direct the element.",
        "Book": "WM 33"
    },
    {
        "Name": "Elemental Servitor",
        "Rank": "••••",
        "Cost": "●●●",
        "Dice Pool": "Persuasion + Wyrd",
        "Catch": "Laborious offering to the element",
        "Action": "Instant",
        "FullDescription": [
            'The changeling can call up the element to act as her willing ally.'
        ],
        "FullCatch": [
            'The changeling performs a significant favor for the element, such as thoroughly cleaning a public fountain, spending an hour or more polishing a large stone statue or hanging up ribbons and bits of paper for a wind to blow immediately before using this clause.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The servitor animates (see below) for two turns, but it reacts in a wild, unpredictable and dangerous fashion and will attack anyone nearby, including the changeling.',
            '<b>Failure:</b> The character fails to animate the element.',
            '<b>Success:</b> The changeling successfully persuades the element to become animate and act as his ally for the next full scene. The element becomes an intelligent elemental being capable of obeying the changeling’s commands and observing the world. The elemental being is approximately as intelligent as an especially smart dog. The elemental being can obey any relatively simple command and notices obvious threats or dangers to the changeling or itself.',
            'The changeling must touch, or at least place her hand within a foot or so of the portion of the element she wishes to animate. The amount of element the changeling can animate is equal to five square yards of volume per point of the changeling’s Wyrd.',
            'In addition to any advantages granted by the element (such as fire being able to burn flammable objects), these elemental beings also gain Power, Finesse and Resistance Attributes similar to ghosts or spirits. The elemental being’s Power and Resistance equal the changeling’s Wyrd, and the elemental being’s Finesse equals the number of successes the changeling rolled when using this Contract.',
            'However, the changeling can only animate the amount of the element present. If she can animate water and is in a room with only a single glass of water, then the glass of water is all she can animate. In addition, all three of the servitor’s traits are also limited by the amount of the element that is present. A two-pound rock will not, if animated, demonstrate four Power and Resistance. The changeling gives the elemental being basic commands when invoking the clause and can issue other commands as desired. As a result, a servitor can fight alongside the changeling, while allowing the changeling to fight, run or otherwise act independently. The elemental being remains animate for one scene.',
            '<b>Exceptional Success:</b> The servitor remains active for a number of hours equal to the changeling’s Wyrd.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-2", Situation: "The changeling asks the elemental being to do something that will harm or diminish itself." },
                    { Modifier: "+1", Situation: "The changeling asks the elemental being to do something that will allow it to increase, such as asking a fire to spread." },
                ]
            }
        ],
        "Description": "Animate the chosen element as a semi-intelligent spirit-like ally for a scene.",
        "Book": "WM 33"
    },
    {
        "Name": "Elemental Ally",
        "Rank": "•••••",
        "Cost": "●●●○",
        "Dice Pool": "Presence + Wyrd",
        "Catch": "Negotiate payment to compensate the element",
        "Action": "Instant",
        "FullDescription": [
            'The changeling can imbue an element with intelligence and animation. The element can only become animate for a single scene, but the elemental ally retains intelligence and awareness of its surroundings for several days.'
        ],
        "FullCatch": [
            'When first using this clause on the element, the changeling negotiates with the element, promising some service or other payment in return for having the element as a temporary ally. Successfully bargaining with the element and paying its price are the catch for this clause. The favor asked is invariably hazardous, arduous or expensive.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The elemental animates (see below) for a number of turns equal to the changeling’s Wyrd but is wholly malevolent and attempts to attack and kill the changeling who animated it.',
            '<b>Failure:</b> The character fails to animate the element.',
            '<b>Success:</b> The changeling successfully imbues the element with intelligence, awareness and the ability to become fully animate. The element remains intelligent and aware for one week. However, the element can become animate for only one scene. While animate, the element has all of the physical capabilities of the elemental being described in the Elemental Servitor clause. When the elemental is animate and when it is merely intelligent and aware, the element is as intelligent as a human and can clearly sense the environment around it with sight and hearing as keen as a human’s. These senses extend to a range of up to the changeling’s Wyrd x 10 yards, unless blocked by some obstacle. For the duration of this Contract, the element is well disposed to the changeling and obeys any request that will not result in the element’s destruction. The element cannot, however, leave the immediate area of its animation, whereas an Elemental Servitor could follow the changeling as far as possible before the clause’s effects expired.',
            'The element is perfectly willing to keep watch over the surrounding area and report any activities to the changeling. In addition, the element is willing to animate itself in response to some event indicated by the changeling. These events can be anything from a command issued by the changeling when he is in range of the element’s senses to some event such as a person attempting to break into a nearby building, a specific individual that the changeling has shown the element a picture or video of coming within range or simply at a specific date and time. As long as the element does not have to seriously endanger itself, it will obey any command by the changeling.',
            '<b>Exceptional Success:</b> The elemental ally remains aware and intelligent for an entire month, although the element can still remain animate for only one scene.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-2", Situation: "The changeling asks the element to do something that stands a good chance of harming or destroying the element." },
                    { Modifier: "+1", Situation: "The changeling has previously used this Contract on the same manifestation of the element, without causing any harm to the element after animation." },
                ]
            }
        ],
        "Description": "Grant sapience to the chosen element around you for a week, during which it may manifest like an Elemental Servitor for one scene.",
        "Book": "WM 34"
    },
    {
        "Name": "Contracts of Elements",
        "Rank": "N/A",
        "Cost": "N/A",
        "Dice Pool": "N/A",
        "Catch": "N/A",
        "Action": "",
        "FullDescription": [
            'These Contracts allow changelings to control the elements. Contracts of Elements are purchased separately, each Contract attuning itself to one particular element. For example, a character assigning all his beginning five dots in Contracts could purchase Elements •• (Water) and Elements ••• (Ice), or Elements • (Fire), Elements •• (Earth) and Elements •• (Metal). Purchasing more dots of any given Contract of Elements does not increase the others. However, the Elemental seeming’s affinity applies to all Contracts of Elements, allowing them to purchase multiple Contracts of Elements at reduced cost.',
            'In addition, learning new versions of already known clauses is half the cost (round down) of learning a new Contract. For example, a character with Elements ••• (Fire) and Elements •• (Smoke) could purchase the third dot of Smoke at half cost, as he already knows Control Elements (Fire). However, a character with Darkness •••• and Elements ••• (Mist) would not pay half cost for the fourth dot in Elements, as Darkness doesn’t provide the specific Calling the Element clause.',
            'The range of possible elements includes the traditional Western elements of Air, Fire, Water, and Earth, the five Chinese elements, and less traditional options such as smoke, electricity, glass or shadow. The only limit is that the element must have some direct physical manifestation, and must be a base material rather than a particular form of object. For example, electronic data is not a possible element and cannot be affected by any elemental Contract. Ceramics may be a possibility (such as for a clay-affinity Manikin), but “pottery” would not.'
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "N/A",
        "Book": "N/A"
    },
    {
        "Name": "Cloak of the Elements",
        "Rank": "•",
        "Cost": "●●",
        "Dice Pool": "None",
        "Catch": "Wearing a symbol of the element",
        "Action": "Instant",
        "FullDescription": [
            'This clause protects the Elemental from the natural manifestations of any single element. The changeling becomes comfortable in weather associated with this element and is protected against damage by its more extreme manifestations. A character protected from fire has no trouble walking through Death Valley at noon in Summer, someone protected from water remains warm and dry during the worst thunderstorm, someone protected from wood can walk through thorny underbrush unharmed and at a normal walking pace and so on.',
            'In addition, the Cloak of the Elements protects the changeling against direct damage from the element in question. Against direct damage caused by the element in question, this clause subtracts one point of damage per point of the changeling’s Wyrd. Cloak of the Elements (air) would protect against damage suffered from being caught in a tropical storm or tornado, while an earth-cloak would protect against thrown rocks or falling to earth, a glass-cloak would protect against cuts made by broken glass and so on. However, the clause cannot protect against damage from objects created or modified with the intention of harming someone. The glass-cloak could shield its user against incidental damage from shards of fallen glass, but not against a beer bottle that was broken for the purpose of a bar brawl. A metal-cloak might protect against a fireplace poker, but not a sword or even a pipe that was detached for the purpose of serving as a weapon.',
            'The Cloak of the Elements lasts for a scene.'
        ],
        "FullCatch": [
            'The changeling bears some symbolic representation of the element in question, such as a souvenir T-shirt depicting a mountain for earth or a small mirror for glass.'
        ],
        "Roll Results": [
            ''
        ],
        "Description": "Protection from passive harm by the chosen element for a scene. Reduce elemental damage by your Wyrd, except when fashioned into a weapon.",
        "Book": "CTL 138"
    },
    {
        "Name": "Armor of the Element’s Fury",
        "Rank": "••",
        "Cost": "●●",
        "Dice Pool": "Dexterity + Wyrd",
        "Catch": "In significant contact with the element",
        "Action": "Instant",
        "FullDescription": [
            'The character clothes himself in a frenzied and damaging manifestation of his chosen element, providing limited armor and damaging anyone who touches him. This Contract sheathes the character in fire, unnaturally cold ice, razor-sharp metal spikes, a crackling aura of electricity or something similarly dangerous. The character can control the extent of this manifestation, limiting it to her hands so she can attack others, start fires or cool drinks by touch, or she can completely cover herself with the element. This element does not harm the character or anything she is wearing.'
        ],
        "FullCatch": [
            'The changeling touches the element when he invokes the clause. For ubiquitous elements such as air, the element must be fairly vigorous, that is, a strong breeze or the wind from a large fan.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The element briefly harms the character, causing dice of lethal damage equal to the half the character’s Wyrd, which can be reduced by armor.',
            '<b>Failure:</b> The character fails to call up the element.',
            '<b>Success:</b> The character surrounds herself with a damaging manifestation of the element. The character does half of her Wyrd (round up) lethal damage by touch, and anyone or any object that strikes her suffers this same damage. The changeling cannot combine this attack with a punch or any other conventional brawling or melee attack. Instead, the character must use the element to attack the target. The dice pool for this attack is Dexterity + Brawling + half of the character’s Wyrd.',
            'This elemental sheath also provides the character with one point of armor useful against all attacks, including attacks by the summoned element. The character can cause the element to cover only a small portion of the character, such as one hand and forearm or her head, but attempting to reduce its size further causes the element to vanish and ends the Contract. Otherwise, the element surrounds the character for the next scene.',
            '<b>Exceptional Success:</b> The character can maintain this effect until the sun next rises or sets (whichever comes first) and can summon or dismiss the element during this time without ending the Contract.',
            {
                'Suggested Modifiers': [
                    { Modifier: "+1", Situation: "A large amount of the element is present when the Contract is invoked. For ubiquitous elements such as air, the element must be particularly vigorous, for example, a gale wind." },
                    { Modifier: "-1", Situation: "None of the element is present when the Contract is invoked." },
                ]
            }
        ],
        "Description": "Conjure an elemental aura for a scene. Confers 1 Armor and half Wyrd in lethal contact damage.",
        "Book": "CTL 139"
    },
    {
        "Name": "Control Elements",
        "Rank": "•••",
        "Cost": "●●●",
        "Dice Pool": "Manipulation + Wyrd",
        "Catch": "Where the element dominates",
        "Action": "Instant",
        "FullDescription": [
            'The changeling takes control of the element attuned to the Contract, causing the element to move and act in a directed fashion. A breeze blows in a specific direction, electricity in power lines turns on, off or surges to blow circuit breakers and wooden or metal chairs lurch slowly across floors.'
        ],
        "FullCatch": [
            'The area is completely dominated by the element — air on top of a narrow bridge, water on a lake or ocean, fire in the middle of a forest fire, electricity at a substation or generator and so on.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The element reacts in a wild, unpredictable and dangerous fashion for the next scene.',
            '<b>Failure:</b> The character fails to control the element.',
            '<b>Success:</b> The changeling successfully controls the element. The changeling must be within Willpower x 2 yards of the edge of the area of the element he wishes to control. The amount of element controlled can be determined from the following table:',
            {
                'Controlled Element': [
                    { Successes: "1 success", Mass: "20 lb.", 'Volume (liquid)': "Milk jug", 'Area (gas or intangible)': '5-sq. yard area' },
                    { Successes: "2 successes", Mass: "50 lb.", 'Volume (liquid)': "Gas tank", 'Area (gas or intangible)': '10-sq. yard area' },
                    { Successes: "3 successes", Mass: "200 lb.", 'Volume (liquid)': "Bathtub", 'Area (gas or intangible)': '15-sq. yard area' },
                    { Successes: "4 successes", Mass: "500 lb.", 'Volume (liquid)': "Average Jacuzzi", 'Area (gas or intangible)': '20-sq. yard area' },
                    { Successes: "5+ successes", Mass: "2000 lb.", 'Volume (liquid)': "Large hot tub", 'Area (gas or intangible)': '30-sq. yard area' }
                ]
            },
            'The character can shape any solid, gaseous or intangible element such as water, mist or fire into any simple form, making solid walls of water or hiding half a room in deep mist. However, she cannot create a vacuum in a room that is not airtight or perform similarly impossible acts. The changeling can also cause non-solid elements to move at a Speed of up to 20. When the changeling is manipulating solid elements such as wood, stone or metal, inflexible objects can only lurch or hop along at a speed of one yard per turn.',
            'The changeling can also control the operation of any mechanical (but not electric or electronic) device made primarily of her element. Objects that roll, or have joints, wheels or articulated legs can move as fast as a human with Strength and Dexterity both equal to half of the changeling’s Wyrd (round up). Flexible objects such as rope or wire can slither like a snake at a similar speed and can also trip or entangle anyone nearby. The material has an effective Strength equal to the number of successes rolled for purposes of tearing itself free of any containers or moorings; it is much easier to control a loose sheet of metal grating than to have metal reinforcements tear themselves free from concrete.',
            'Controlling electricity allows the changeling to control the operation of any electrical or electronic device that has access to a power source, even when turned off. This control including turning lights or alarm systems on or off and opening electronic locks, but not any sort of complex control.',
            'The changeling cannot increase the amount or power of the element present, but can direct it to move in unusual ways. He can cause a fire to burn or leap in a particular direction, create a breeze that blows only in part of a room or cause electric current to turn off a device or even arc out from a socket and shock someone standing nearby. Elements such as fire and electricity can do damage, but only as much as the amount present can normally do. However, the changeling can direct the element to attack anyone within range. The changeling controls the element for a scene.',
            '<b>Exceptional Success:</b> No additional bonuses.',
            {
                'Suggested Modifiers': [
                    { Modifier: "+1", Situation: "Large amounts of the element are present." },
                    { Modifier: "-1", Situation: "Little of the element is present." },
                ]
            }
        ],
        "Description": "Reshape or manipulate an amount of the chosen element around you.",
        "Book": "CTL 139"
    },
    {
        "Name": "Calling the Element",
        "Rank": "••••",
        "Cost": "●●●●",
        "Dice Pool": "Wits + Wyrd",
        "Catch": "As a performance or display",
        "Action": "Extended (one roll per turn); the target number is five.",
        "FullDescription": [
            'The changeling calls the associated element from a distant location. The changeling must either know the location or see the source of the element he is calling and the element must physically move toward the character in as natural manner as possible — fire leaps, water splashes from a basin or falls as rain from the sky, wind blows, rock erupts from the ground.... If physical barriers prevent the element from reaching the character, it gets as close as it can, such as rain falling on the house that a changeling was in when he called water from the clouds. Once the element is present, the changeling must then use the Control Element clause if he wishes to also control the element.'
        ],
        "FullCatch": [
            'The changeling is calling the element solely to awe and impress viewers, perhaps as part of a performance.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The element moves in an erratic, perhaps dangerous, direction.',
            '<b>Failure:</b> The changeling fails to call the element.',
            '<b>Success:</b> The character successfully calls the element. The changeling can affect the same amount of the element he could control with the Control Element clause. The element comes toward the character or to any location within Wyrd x 10 yards of the changeling that the changeling designates. The changeling can cause fires to spread and leap in his direction, winds of speeds up to Wyrd x 10 miles per hour, to blow or cause electricity to arc from a junction box, or even down from the sky, if a lightning storm is occurring. Solid objects such as trees or lampposts that are attached to the ground or to some other object cannot break free, but can bend in the character’s direction. Unattached objects bounce or roll slowly toward the character. A changeling who controls metal could cause a vehicle made primarily of metal to roll toward them. Also, the changeling can cause stone or running water to erupt from the ground. The changeling controls the summoned element for one full scene.',
            '<b>Exceptional Success:</b> No additional advantage.',
            {
                'Suggested Modifiers': [
                    { Modifier: "+1", Situation: "The changeling calls the element with verbal entreaties and large, obvious gestures." },
                    { Modifier: "-1", Situation: "The changeling uses neither words nor gestures to call the element." },
                ]
            }
        ],
        "Description": "Summon or beckon manifestations of the element for a scene.",
        "Book": "CTL 140"
    },
    {
        "Name": "Become the Primal Foundation",
        "Rank": "•••••",
        "Cost": "●●●●",
        "Dice Pool": "Manipulation + Wyrd",
        "Catch": "Commune with a manifestation of the element.",
        "Action": "Instant",
        "FullDescription": [
            'The changeling literally becomes a living manifestation of the Contract’s associated element. The transformation takes only one turn. The character’s clothing and small objects close to his skin, such as phones or wallets, blend into this elemental form.'
        ],
        "FullCatch": [
            'The character must sit and contemplate a large amount of the specific element for at least half an hour immediately before transforming.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The changeling partially transforms into the element for a turn, suffers lethal damage equal to half of his Wyrd points, then reverts to his normal form.',
            '<b>Failure:</b> The changeling fails to change her form.',
            '<b>Success:</b> The changeling becomes a living embodiment of the element — a sentient breeze, an animate puddle or a living current in a river, a living, self-mobile fire, a small tree or a living, animate statue made of wood, stone, metal or glass.',
            'The character retains all Mental and Social Attributes and Skills. If she transforms into a solid element, for example, a statue of stone, this form has all of her physical attributes and Health, but she adds half of her Wyrd (round up) to her Strength and gains armor equal to half of her Wyrd. This increased Strength does not increase the character’s Speed.',
            'Characters who transform into air, water, fire or other formless elements have no physical characteristics but triple the character’s normal Speed. Elemental forms capable of damage either do lethal damage equal to half of the changeling’s Wyrd (round up) or bashing damage equal to the changeling’s Wyrd, depending upon the nature of the element. Fire always does lethal damage, while water and electricity always do bashing damage. To attack in elemental form, the character makes a normal attack roll using either Brawl or Weaponry (the character’s choice).',
            'Taking non-solid form makes the changeling largely immune from harm. If this element form is destroyed or seriously damaged (like a fire being extinguished), the changeling automatically reverts to his normal form. Due to the shock, the changeling also loses two points of Willpower and cannot use this clause for one full day. Otherwise, the clause lasts for one scene, at which point the character must once again assume his normal form. The character can voluntarily resume his normal form, but doing so ends the Contract.',
            '<b>Exceptional Success:</b> The character can remain in elemental form until the sun next rises or sets (whichever comes first), unless forced out of this form by damage to it. He can also end the effects at will.',
            {
                'Suggested Modifiers': [
                    { Modifier: "+1", Situation: "The changeling is in the presence of large amounts of the element." },
                    { Modifier: "-1", Situation: "Little or none of the element is present." },
                ]
            }
        ],
        "Description": "Transform into the chosen element, either hardy and solid or swift and malleable.",
        "Book": "CTL 140"
    },
    {
        "Name": "Contracts of the Wild",
        "Rank": "N/A",
        "Cost": "N/A",
        "Dice Pool": "N/A",
        "Catch": "N/A",
        "Action": "",
        "FullDescription": [
            'According to many legends and folktales, the Gentry are either spirits of the natural world or at least hold considerable sway over all manner of natural forces. Changelings who learn these Contracts embrace that power and learn to control the raw and wild powers of the natural world.',
            'These are considered affinity Contracts for Beasts and Elementals.'
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "N/A",
        "Book": "N/A"
    },
    {
        "Name": "Wildwalker",
        "Rank": "•",
        "Cost": "●",
        "Dice Pool": "Persuasion + Wyrd",
        "Catch": "After sleeping outdoors",
        "Action": "Instant",
        "FullDescription": [
            'The changeling places herself in harmony with the natural world, so that it does not impede her efforts. Rain and winds avoid her, and thin branches move out of her way. Thus, she can operate normally even in environmental conditions that would hinder others.'
        ],
        "FullCatch": [
            'The character spent the last night sleeping outdoors.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The changeling angers the local forces of nature, gaining a penalty to all rolls equal to her Wyrd for the next scene.',
            '<b>Failure:</b> The clause fails, and natural forces affect the character normally.',
            '<b>Success:</b> For each success she rolls, the character negates a -1 penalty caused by environmental conditions or the natural world. Such conditions include penalties to perception due to fog, smoke or wind as well as penalties to movement due to thick branches, ice, rain or high winds. The effects of this clause last for once scene. This changeling can use this clause on either herself or others, but each use of this clause protects only one individual. Also, this clause affects only the target, not any vehicle he may be operating. This clause allows a character to run through a thicket without hindrance or harm, but would not allow him to drive a car unhindered through a swamp. Multiple successes on this clause negate larger penalties, but may not completely remove them. If a thick fog imposes a -3 penalty to Wits + Composure rolls to see and the character rolls two successes, then these two successes negate two points of this penalty, leaving a -1 penalty to the character’s Wits + Composure rolls to see through the fog.',
            '<b>Exceptional Success:</b> Beyond the advantages gained by rolling multiple successes, no special bonus is gained.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-1", Situation: "The character is wearing delicate clothing that can be easily ruined by dirt or water." },
                    { Modifier: "+1", Situation: "The character is dressed in clothing designed for use in the wilderness." },
                ]
            }
        ],
        "Description": "Ignore penalties from environmental conditions for a scene.",
        "Book": "RoS 111"
    },
    {
        "Name": "Nature’s Curse",
        "Rank": "••",
        "Cost": "●",
        "Dice Pool": "Intimidation + Wyrd",
        "Catch": "Target has a gun",
        "Action": "Instant",
        "FullDescription": [
            'The character can persuade the local forces of nature to impede and harass a specific individual. Thus, rains strikes this individual with more force, fog and smoke collects around her more densely and twigs and brush resist her passage with more force.'
        ],
        "FullCatch": [
            'The target is carrying a gun.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> Natural forces aid the target, providing him with a +1 bonus to all rolls for the next scene.',
            '<b>Failure:</b> Natural forces affect the target normally.',
            '<b>Success:</b> Each success increases all penalties due to adverse natural conditions that the target suffers by 1. Thick brush and high wind both reduce her Speed by one additional point per success, and fog or smoke reduces her rolls to see clearly by an additional point. However, this clause cannot cause any environmental penalties to increase by more than a factor of two. If the target is already experiencing a -2 penalty to vision rolls due to thick fog, then even rolling three successes will not increase this penalty by more than an additional two points, to a total of -4. If there are no environmental penalties, then the maximum total penalty provided by this clause is -1.',
            '<b>Exceptional Success:</b> Increase the maximum penalty suffered by the target by an additional -1. If the target currently previously had no negative modifiers due to hostile environmental conditions, this clause imposes a total penalty of -2.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-1", Situation: "The target spent the last night sleeping outdoors or in a tent." },
                    { Modifier: "+1", Situation: "The target complained about some natural phenomena, such as mosquitoes or the weather, a minute or less before the changeling used this Contract." },
                ]
            }
        ],
        "Description": "Up to double existing environmental penalties against a target.",
        "Book": "RoS 111"
    },
    {
        "Name": "Viridian Embrace",
        "Rank": "•••",
        "Cost": "●●",
        "Dice Pool": "Expression + Wyrd",
        "Catch": "To aid a mortal",
        "Action": "Instant",
        "FullDescription": [
            'The changeling can cause natural forces to actively aid her efforts. Winds help speed her running or aid her balance, and plants shield her from observation.'
        ],
        "FullCatch": [
            'The changeling is attempting to come to the aid of a mortal.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The forces of nature actively hinder the character, providing a -2 penalty to all rolls involving perception, movement or stealth for the next scene.',
            '<b>Failure:</b> The clause fails.',
            '<b>Success:</b> For each success rolled, natural forces provide a +1 bonus to all rolls involving perception, movement or stealth the character makes during the next full scene. This clause also increases the character’s Speed by +1 per success. Characters can benefit from this clause only if they are either outdoors or in the presence of a large number of plants. Vines and tree branches attempt to shield the character from observation, just as ivy on a wall provides convenient footholds and winds help direct the character’s movements and carry sounds to her.',
            '<b>Exceptional Success:</b> Beyond the advantages gained by rolling multiple successes, no special bonus is gained.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-2", Situation: "The character is indoors but in a large space with many plants." },
                    { Modifier: "-1", Situation: "The weather is calm and clear." },
                    { Modifier: "+1", Situation: "The character is in a park, a dirty street or some other environment that is not carefully managed or regularly cleaned." },
                    { Modifier: "+1", Situation: "The character is in a forest, construction site or some other complex outdoor environment." }
                ]
            }
        ],
        "Description": "Gain environmental bonuses to move, hide and perceive.",
        "Book": "RoS 112"
    },
    {
        "Name": "Calling Wind and Weather",
        "Rank": "••••",
        "Cost": "●●●",
        "Dice Pool": "Presence + Wyrd",
        "Catch": "On behalf of a dozen mortals",
        "Action": "Instant",
        "FullDescription": [
            'The changeling can call or calm storms and otherwise control the local weather. This control is fairly general and is limited to conditions that would be reasonable given the season and location, and the character cannot create violent or seriously damaging weather conditions such as tornadoes, blizzards or hurricanes. However, within these limits, the weather is in the hands of the character.'
        ],
        "FullCatch": [
            'A dozen or more mortals all ask the changeling to provide the desired weather or are at least hoping the changeling will do so.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The weather changes in a manner opposite to the character’s wishes. If the character attempts to calm a windstorm, it becomes worse, and if he tries to call rain, the day becomes hotter and drier.',
            '<b>Failure:</b> The Contract fails, and the weather remains unchanged.',
            '<b>Success:</b> The character can change the weather to suit her desires. She cannot create snow in the tropics or blazing heat during a Minnesota winter, but she can create any weather condition that is possible for the area and season, regardless of the current weather. She can call a thunderstorm or a blizzard during a sunny day or calm high winds. Although she can slightly reduce the impact of severe weather such as a hurricane or tornado, she cannot create such extreme weather conditions, and she can’t entirely dispel them. The effects of this clause are local and depend upon how different the weather the character calls is from current conditions; it covers anything from one square mile to an entire large town or small city (not counting the suburbs).',
            'As long as the character succeeds, the weather arrives, but the number of successes affects how rapidly the weather arrives and how long it lasts.',
            {
                'Suggested Modifiers': [
                    { Successes: "1", 'Time to Arrive': "Three Hours", 'Duration': 'One Hours' },
                    { Successes: "2", 'Time to Arrive': "One Hours", 'Duration': 'Three Hours' },
                    { Successes: "3", 'Time to Arrive': "30 Minutes", 'Duration': 'Eight Hours' },
                    { Successes: "4", 'Time to Arrive': "10 Minutes", 'Duration': 'One Hours' },
                    { Successes: "5", 'Time to Arrive': "3 Minutes", 'Duration': 'Three Days' },
                ]
            },
            '<b>Exceptional Success:</b> Beyond the advantages gained by rolling multiple successes, no special bonus is gained.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-1 to -3", Situation: "The current weather is significantly different from the desired weather. Calling heavy rain on a sunny, cloudless day would have a -3 penalty." },
                    { Modifier: "+1 to +3", Situation: "The current weather is similar to the desired weather. Changing a drizzle to light rain would gain a +3 bonus." }
                ]
            }
        ],
        "Description": "Conjure weather native to a clime.",
        "Book": "RoS 112"
    },
    {
        "Name": "Calling Nature’s Wrath",
        "Rank": "•••••",
        "Cost": "●●●○",
        "Dice Pool": "Survival + Wyrd",
        "Catch": "On family land",
        "Action": "Instant",
        "FullDescription": [
            'The character unleashes the fury of the natural world over a large area. Branches whip with dangerous force, heavy winds blow debris, hail falls with damaging force and ice or water makes the ground slick.'
        ],
        "FullCatch": [
            'The changeling is on land owned by her family.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> Nature’s fury is directed solely at the character. For the remainder of the scene, the character suffers a -2 penalty to all rolls due to adverse environmental conditions.',
            '<b>Failure:</b> The character fails to stir the fury of the natural world.',
            '<b>Success:</b> The natural world attacks everyone within 50 yards of the changeling. Violent winds, hail, branches, debris lying on the ground and similar objects and weather conditions all attack everyone around the changeling in a manner that seems unnatural, but not entirely impossible. As a result, everyone within range suffers a penalty equal to the number of successes the changeling rolled to all rolls involving perception, agility, movement or combat for one full scene. The Speed of everyone within range is also reduced by the same amount. In addition, everyone within range suffers minor damage. Everyone within range takes the number of successes rolled as bashing damage. Armor protects against this damage, but Defense and Dodging do not. This damage consists of a mixture of exposure to adverse temperatures, slipping on ice and the impact of branches, rocks, hail or debris.',
            'The changeling is unaffected by these penalties and damage, and she can protect up to six other people who remain within a number of yards of her equal to her Wyrd. This clause works equally well in wilderness and urban areas, but works only in places exposed to the open air.',
            '<b>Exceptional Success:</b> The affected area extends 100 yards around the character.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-2", Situation: "The area around the changeling is partially enclosed." },
                    { Modifier: "-1", Situation: "The area around the changeling is particularly clean or otherwise devoid of debris." },
                    { Modifier: "+1", Situation: "The clause is used in brush, woods, a construction site or anywhere else that is filled with debris and intrinsically difficult or dangerous to move through." },
                    { Modifier: "+2", Situation: "The clause is used during a storm or other extreme environmental conditions." }
                ]
            }
        ],
        "Description": "The natural environment attacks for 50 yards around, excluding allies.",
        "Book": "RoS 113"
    }
]

const fairestContractsData = [
    {
        "Name": "Contracts of Reflection",
        "Rank": "N/A",
        "Cost": "N/A",
        "Dice Pool": "N/A",
        "Catch": "N/A",
        "Action": "",
        "FullDescription": [
            'Once the changeling has completed the greater endeavor and sacrificed the dot of Willpower, the player can now work out the mechanics of the Contract with the Storyteller. The following section contains both this new Contract, as well as a discussion of how it was created.'
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "N/A",
        "Book": "N/A"
    },
    {
        "Name": "Reflections of the Past",
        "Rank": "•",
        "Cost": "●",
        "Dice Pool": "Wits + Wyrd",
        "Catch": "On a loved one's mirror",
        "Action": "Instant",
        "FullDescription": [
            'The changeling can look into any reflective surface, from a mirror, to a pond, and see anything that has been reflected there in the last week.'
        ],
        "FullCatch": [
            'The mirror belongs to someone to whom the changeling has a close emotional connection.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The reflection shows untrue scenes that confirm the changeling’s fears or worries.',
            '<b>Failure:</b> The surface continues to reflect its present environment.',
            '<b>Success:</b> The changeling can summon up any image that the surface reflected within the last week. The quality of this reflection is the same as it was at the moment when it was originally reflected. The changeling can review the reflections as rapidly as desired or she can state a specific day and time to see exactly what the surface reflected at that moment, freezing this reflection in place for as long as desired. These reflections can be seen by anyone, though they can’t be photographed. The changeling can use this clause on any reflective surface, but many surfaces yield only vague and blurred reflections. She can continue using this clause on a mirror for one full scene.',
            '<b>Exceptional Success:</b> The reflection that is revealed is significantly sharper and clearer than it originally was. A dirty puddle still won’t reveal an image as clear as a clean mirror; however, the image from a smudged mirror, a relatively clean piece of glass, or a flat and relatively shiny sheet of metal will be as clear as a well polished mirror, and the image from a muddy puddle will be a clear as one from a still, clean puddle. The reflected image will show up on film if photographed.',
            {
                'Suggested Modifiers': [
                    { Modifier: "+1", Situation: "The changeling owns the reflecting surface or at least the land on which it rests." },
                    { Modifier: "-1", Situation: "The reflecting surface has been thoroughly cleaned, reshaped or otherwise significantly altered within the past month." }
                ]
            },
            '<b>Notes:</b> This clause’s effect matches the theme of reflections, essentially playing off the idea that a mirror might “store” a reflection. As a one-dot clause, it changes little and grants a fairly specialized advantage.',
            'If looking to other games for inspiration, mages are allowed to look into the past as a two-dot power. The limitations placed on this ability are significant, however, relying on the presence of a reflective surface for any scene and reaching back no more than a week. This clearly marks the power as quirky fae magic, and accounts for the one-dot power level.',
            'This clause uses Wits + Wyrd, because Wits is the Attribute used in almost all perception-related rolls. Also, since this clause provides information to the user, having an Exceptional Success provides clearer information and seems like the most reasonable option. This clause is also not exceptionally powerful, and so having the cost be one Glamour also makes sense. The catch implies that the changeling might use the power to spy on loved ones or hated rivals, which adds an interesting emotional twist to the power.'
        ],
        "Description": "Observe what has appeared in a reflective surface for the last week.",
        "Book": "ER 34"
    },
    {
        "Name": "Glimpse of a Distant Mirror",
        "Rank": "••",
        "Cost": "●",
        "Dice Pool": "Composure + Wyrd",
        "Catch": "Into a sworn enemy's mirror",
        "Action": "Instant",
        "FullDescription": [
            'The Lost can look into any reflective surface and use it to see out of another reflective surface in which his face has been reflected.'
        ],
        "FullCatch": [
            'The mirror the changeling is looking into belongs to someone who has sworn enmity against him.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The effect is reversed; anyone looking into the mirror through which the changeling is attempting to see can instead see the changeling.',
            '<b>Failure:</b> The changeling sees only himself in the mirror he is looking into.',
            '<b>Success:</b> The character and anyone he is with can see out of the mirror he wishes to see through as if it were a window. However, the target mirrored surface also displays the changeling’s image. This clause works at any range, as long as the changeling has seen his face in the target surface within the last week. However, he must choose the specific surface, and cannot merely attempt to look through any surface in a general area in which his face has been reflected. If the surface reflects poorly, like a somewhat dirty pot lid, the image the changeling sees is similarly distorted and blurred. The changeling can look through the reflective surface for up to one scene, or dismiss the effects at any time.',
            '<b>Exceptional Success:</b> The changeling can see through any reflective surface his face has been reflected in as if it were a perfectly clear piece of glass. Even a murky puddle can be used to its surroundings with perfect clarity.',
            {
                'Suggested Modifiers': [
                    { Modifier: "+2", Situation: "The changeling stands within a few feet of the reflective surface he wishes to look out of and stare into it for several minutes." },
                    { Modifier: "+1", Situation: "The changeling looks into and out of reflective surfaces that are of the same type and dimensions, such as two mirrors or two puddles of the same Size." },
                    { Modifier: "-2", Situation: "The changeling’s reflection in the reflective surface he wishes to look out of is blurred or only seen at a distance of more than five yards away." }
                ]
            },
            '<b>Notes:</b> This clause goes somewhat further from the normal properties of reflections than the previous clause. Turning a reflection into a window is a more powerful alteration in the nature of reflections, but not all that much more powerful. Also, it is a fairly logical extension of the previous clause. As a two-dot clause, it is also reasonable for it to have essentially unlimited range. The limitation that the changeling must have seen himself in the target surface within the last week encourages this clause to be used either to spy on familiar areas or to engage in preparation — both very appropriate uses of power. It also cuts down on the judgment calls or bookkeeping that would be necessary if there was no time duration.',
            'Here again, looking at similar abilities in Mage: The Awakening is useful. Mages tend to get a scrying ability at about two dots. However, as this Contract will be rather cheaper for a changeling to purchase, it should be less potent. Thus, the additional limitation that the distant surface reflects the changeling’s face is added. This also conjures up the eerie image of people who aren’t there watching you from mirrors — deliciously fae.',
            'The clause is rolled using Composure, because this is the other Attribute most commonly used in perception rolls, and it’s a good idea for consecutive clauses to use different Traits. It only costs one Glamour, because like the one-dot clause, it is relatively low powered. Its similarity with the previous clause is also why it has the same result for an Exceptional Success. The catch makes it specifically useful for spying on the changeling’s more outspoken enemies. However, looking into a mirror owned by such a person can prove difficult, so the catch rewards cunning play.'
        ],
        "Description": "Use one reflective surface to look through another which has reflected your image within the week.",
        "Book": "ER 35"
    },
    {
        "Name": "Reflection’s Grasp",
        "Rank": "•••",
        "Cost": "●●",
        "Dice Pool": "Dexterity + Wyrd",
        "Catch": "Through the mirror you most see yourself in",
        "Action": "Instant",
        "FullDescription": [
            'The changeling can reach through a reflective surface he has touched and manipulate any object within reach, including pulling objects through the reflective surface.'
        ],
        "FullCatch": [
            'The character attempts to reach through the mirror that he uses most often to look at himself.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The changeling’s arm becomes briefly stuck going through the two reflective surfaces. He injures his arm, taking one level of lethal damage in the process.',
            '<b>Failure:</b> The reflective surface fails to admit the character’s arm.',
            '<b>Success:</b> The changeling can physically reach his arm into one reflective surface and out another, assuming both are large enough for him to reach his arm and hand through. In effect, the character reaches through one reflective surface and his hand comes out of the other’s surface. The destination surface must either be within the character’s line of sight, or a surface he has physically touched within the last day.',
            'The character can manipulate objects on the other side of the reflective surface and can even bring inanimate objects of Size 2 or smaller back through a reflective surface large enough to fit them through. The changeling cannot see through the reflective surface he is reaching through, unless he uses the Glimpse of a Distant Mirror clause. The changeling can use this clause for one full scene, during which time he can put his hand and objects he is holding through the surface as often as possible. This clause is particularly useful in areas with plenty of reflective surfaces; a changeling could be able to reach through many different areas in a car dealership or fitting room. While the changeling can’t bring living things through the surface, he can grab a target and pull her into the mirror as hard as he can, or steal a gun or key ring from her belt.',
            '<b>Exceptional Success:</b> The changeling can see through the reflective surface as well as reach through it.',
            {
                'Suggested Modifiers': [
                    { Modifier: "+1", Situation: "The changeling is able to spend at least a minute running both of her bare hands over the reflective surface she wishes to reach out of." },
                    { Modifier: "+1", Situation: "The reflective surface is especially shiny and reflective, like a mirror" },
                    { Modifier: "-2", Situation: "The reflective surface is especially dim or dull, like poorly polished metal, or a muddy puddle." }
                ]
            },
            '<b>Notes:</b> Reaching through one reflective surface and out of another is an obvious extension of the previous clause, but is also significantly more powerful. Therefore, this clause makes an obvious next step in the Contract. One of the more interesting limits on this clause is the fact that it works far better if combined with the previous clause. However, rolling an exceptional success allows the changeling to bypass this limitation. This clause involves physical manipulation, so using Dexterity as the Attribute makes sense. The clause costs 2 points of Glamour, an average cost for a three-dot clause, and it is of relatively average power compared to other three-dot clauses.',
            'The catch for this clause allows the changeling to have easy access to a small number of useful items that he sets next to his bedroom or bathroom mirror, which are useful, but far from overpowering.'
        ],
        "Description": "Reach into one reflective surface and through another you have touched.",
        "Book": "ER 36"
    },
    {
        "Name": "Mirror Walk",
        "Rank": "••••",
        "Cost": "●●●",
        "Dice Pool": "Athletics + Wyrd",
        "Catch": "Out a mirror reflecting a blood relative",
        "Action": "Instant",
        "FullDescription": [
            'The changeling can step into one reflective surface large enough to fit his body through and out of a similarly-sized surface that he has touched and that his whole body has been reflected in for at least one minute.'
        ],
        "FullCatch": [
            'A blood relative is currently reflected in the surface out of which he is stepping.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The character steps into the reflective surface and becomes temporarily lost in the shining space between the mirrors. Each hour, he can make another roll (though needn’t spend additional Glamour). If he succeeds, he finds his way back through the surface he initially stepped through. This process is sufficiently confusing and uncomfortable that the character also loses one point of Willpower.',
            '<b>Failure:</b> The clause fails to activate.',
            '<b>Success:</b> The character can step into one reflective surface large enough for her to fit through and then immediately step out of another reflective surface. Once the character begins stepping through, she cannot stop. If she holds another person’s hand, she can bring that person through with her, but must spend another two points of Glamour and a point of Willpower to bring them through. The clause’s catch cannot negate the cost of bringing through an additional person. The changeling cannot see through the surface from which she is emerging, but she can use the Glimpse of a Distant Mirror clause to take a look through it before stepping through.',
            '<b>Exceptional Success:</b> The changeling can step back and forth through the reflective surface for a number of turns equal to his Wyrd without spending more Glamour.',
            {
                'Suggested Modifiers': [
                    { Modifier: "+1", Situation: "The changeling owns the reflective surface out of which he is attempting to step." },
                    { Modifier: "-1", Situation: "Either reflective surface is anything other than highly reflective, like a mirror, a still pool of clear water, or a flat sheet of well-polished metal." },
                    { Modifier: "-3", Situation: "The changeling is only reflected in the surface he wishes to exit at a significant distance or in some way obscures his appearance, such as a reflection through smoke or fog." }
                ]
            },
            '<b>Notes:</b> This clause is another evolution from the one previous. It is a potent travel power, but also has a fairly heavy cost, and relies on reflective surfaces that can reflect the entire body; it can’t be used to pop through a dressing-table mirror, for instance. Since the changeling must fit through all manner of oddly shaped portals to use this clause, using Athletics seems reasonable. Also, the limitation to only surfaces that the changeling has both touched and been fully reflected in introduces an interesting and useful limit on a clause that might otherwise be too powerful.',
            'Because it is significantly more powerful than the previous clause, the increased Glamour cost seems reasonable. Also, the catch specifically allows the changeling to be able to come to the aid and rescue of her relations, which is thematically appropriate for changelings.'
        ],
        "Description": "Step into one reflective surface and out another you have touched.",
        "Book": "ER 37"
    },
    {
        "Name": "Stealing the Solid Reflection",
        "Rank": "•••••",
        "Cost": "●●●○",
        "Dice Pool": "Larceny + Wyrd",
        "Catch": "The reflected object's owner owes you a debt",
        "Action": "Instant",
        "FullDescription": [
            'The changeling can reach into a surface and remove the reflection of any object with a Size equal to or less than his Wyrd x 2. Once removed, this reflection is a solid object.'
        ],
        "FullCatch": [
            'The changeling removes an image of an object owned by someone who is in debt to him.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The reflective object shatters loudly and violently. If the reflective object is solid, it will inflict one point of lethal damage from the shards of broken glass or metal. If the reflection is from a pool of liquid, the liquid erupts from the pool, spraying everyone standing within a yard of it.',
            '<b>Failure:</b> The changeling can remove nothing from the reflection.',
            '<b>Success:</b> The changeling can remove the image of an object currently reflected in a surface, effectively conjuring a solid duplicate. However, the actual object must have actually been reflected in this surface; a reflection of an image, photograph or reflection cannot produce a solid object (save for, say, a duplicate snapshot). The entirety of the object or person must have been reflected in the surface and the surface must be sufficiently reflective that the image is clear, detailed and relatively undistorted. Images from mirrors, large sheets of polished metal, or large ornamental reflecting pools all work well; muddy or windblown puddles or a sufficiently dirty and chipped mirror cannot be used. In addition, the surface must be large enough to remove the object from. The changeling can only pull out full-sized objects, not those that have been increased or reduced in Size.',
            'To remove an object or living being from a reflection, it must also not be too large. The object’s Size cannot be more than the changeling’s Wyrd x2. A changeling with a Wyrd of three could remove an object with a maximum Size of six, while a changeling with a Wyrd of six could remove objects of up to Size 12, which allows them to remove both cars and small boats from a reflection. Any object or living being removed from a reflection is an exact mirror image of the actual object or person — the reflection of a car has the steering wheel on the other side and all lettering, including the license plate, is also reversed. However, sound is not reversed, and so the reflection of a CD sounds the same as the actual CD.',
            'A reflected car can be destroyed, but this clause only makes reflections solid for one scene. After that time, the reflection returns to the mirror and all damage, including death, is removed. While a reflection has been made solid, the original object casts no reflection and neither does the temporarily solid reflection. Also, no matter how many reflective surfaces the changeling possesses, it is only possible to create a single solid reflection of a single object.',
            '<b>Exceptional Success:</b> The reflection of the object remains solid and substantial until the next time the Sun rises or sets.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-2", Situation: "The reflection is not perfectly clear and undistorted" },
                    { Modifier: "+1", Situation: "The person or object is currently being reflected in the surface" }
                ]
            },
            '<b>Notes:</b> This particular clause is clearly a five-dot climax to the Contract, since it can provide the changeling with easy access to all manner of tools, weapons or vehicles. Because this Contract involves a particularly unusual form of sleight of hand, using Larceny instead of another Attribute or Ability makes sense.',
            'The player’s initial pitch involved bringing living creatures out of mirrors as well, but that seemed prohibitively potent to the Storyteller, given changelings’ ability to acquire five-dot powers comparatively cheaply. (He does, however, make a note of a potential five-dot Goblin Contract to introduce later, one that would allow a changeling to extract living yet warped reflections with unpredictable and dangerous personalities.)',
            'As is the case with most five-dot clauses, the Catch is not one that will come up particularly often, but is thematically appropriate, since it allows the changeling to obtain at least an illusory repayment of a debt.',
            'If this clause was significantly more powerful, it would be beyond the range of normal Contracts. For example, a clause that allowed the user to permanently remove something from a reflection and make it permanently solid would fall outside the range of the power available for ordinary Contracts. This clause would either have to be rewritten or it would only be available as a Goblin Contract of Sacrifice.'
        ],
        "Description": "Draw a reflection out of a mirrored surface for one scene.",
        "Book": "ER 38"
    },
    {
        "Name": "Contracts of Separation",
        "Rank": "N/A",
        "Cost": "N/A",
        "Dice Pool": "N/A",
        "Catch": "N/A",
        "Action": "",
        "FullDescription": [
            'One of the deepest truths about the Fairest is that they are at least somewhat removed from the realities of the physical world. The sense of superiority many feel sometimes extends to the mundane details of life and the rules that govern the physical world. This Contract, alternately said to be struck with tools such as scissors, axes or scythes, allows a character to draw upon and enhance this separation in ways that allows her to circumvent many of these limitations.'
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "N/A",
        "Book": "N/A"
    },
    {
        "Name": "Tread Lightly",
        "Rank": "•",
        "Cost": "●",
        "Dice Pool": "Dexterity + Wyrd",
        "Catch": "Protecting nice shoes from getting dirty",
        "Action": "Instant",
        "FullDescription": [
            'The changeling can partially remove herself from gravity’s influence. She cannot fly or even jump further than normal, but she takes only bashing damage from falling, regardless of the distance. In addition, she can walk or run over any solid surface even if it would not normally support her weight, such as tissue paper or thin panes of glass. She can also walk across mud, dry sand or any other surface without getting her feet even damp.'
        ],
        "FullCatch": [
            'The character is wearing fancy and delicate footwear that would be ruined if she did not use this clause.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The changeling trips and falls, landing prone. She must take one full turn to regain her feet.',
            '<b>Failure:</b> The clause has no effect on the changeling’s movements.',
            '<b>Success:</b> The changeling can move across any solid surface as if she weighed no more than a few ounces. She leaves no tracks, can run across snow without breaking through the surface and also takes only bashing damage from falls. Anyone attempting to track the character suffers a -2 penalty, due to the light impressions her footfalls make. The character can also climb up surfaces too fragile to support her normal weight, but cannot run, jump or climb any better or faster than normal. The effects of this clause last for the scene.',
            '<b>Exceptional Success:</b> The character can jump twice as far and climb twice as fast as normal for the duration of this scene.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-1", Situation: "The character is running or jumping." },
                    { Modifier: "+1", Situation: "The character moves at a normal walking pace." }
                ]
            }
        ],
        "Description": "Walk weightlessly across surfaces for a scene. Reduce falling damage to bashing.",
        "Book": "WM 40"
    },
    {
        "Name": "Evasion of Shackles",
        "Rank": "••",
        "Cost": "●",
        "Dice Pool": "Larceny + Wyrd",
        "Catch": "Imprisoned for an offense you didn't commit",
        "Action": "Instant",
        "FullDescription": [
            'The character can automatically slip out of any hand- cuffs, straightjacket or other restraints.'
        ],
        "FullCatch": [
            'The changeling has been unjustly imprisoned for some crime or offense she did not actually commit.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> Knots grow tighter, locks jam and other attempts to remove the restraints suffer a -2 penalty.',
            '<b>Failure:</b> The clause has no affect on the changeling’s bonds.',
            '<b>Success:</b> The character is instantly freed of all restraints such as handcuffs, straightjackets or shackles. This clause can open locked doors only if the character is in a small compartment, such as a steamer trunk or trunk of a car, that significantly restricts her ability to move her body.',
            '<b>Exceptional Success:</b> In addition to removing all restraints on the character, the door of any room the character is locked into automatically unlocks.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-1", Situation: "The character has previously struggled against these bonds." },
                    { Modifier: "+1", Situation: "Since she was bound, the character has remained calm and not attempted to struggle or free herself by force or dexterity." }
                ]
            }
        ],
        "Description": "Slip bondage or imprisonment.",
        "Book": "WM 40"
    },
    {
        "Name": "Breaching Barriers",
        "Rank": "•••",
        "Cost": "●",
        "Dice Pool": "Presence + Wyrd",
        "Catch": "Imprisoned by a changeling",
        "Action": "Instant",
        "FullDescription": [
            'The changeling can walk through any closed or locked door or window that he could fit through if it were open.'
        ],
        "FullCatch": [
            'The character has been deliberately imprisoned by another changeling.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The clause fails, and the portal lets out a loud bang or thump as if character had tried to batter it down and failed.',
            '<b>Failure:</b> The changeling does not succeed in walking through the closed portal.',
            '<b>Success:</b> The changeling walks through the portal as if it weren’t there. The door or window doesn’t open, but the changeling simply moves instantly and effortlessly from one side of it to the other without disturbing it or setting off any alarms. This clause also leaves no marks or traces on the door.',
            '<b>Exceptional Success:</b> If the changeling wishes, she can spend an additional point of Glamour and take along one other individual, as long as she holds this person’s hand while walking through the door or window. The changeling cannot take along more than one person in this fashion.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-1", Situation: "The changeling has no idea what is on the other side of the barrier." },
                    { Modifier: "+1", Situation: "The changeling can clearly see what is on the other side of the barrier." }
                ]
            }
        ],
        "Description": "Pass through a sealed portal.",
        "Book": "WM 40"
    },
    {
        "Name": "Elegant Protection",
        "Rank": "••••",
        "Cost": "●●",
        "Dice Pool": "Dexterity + Wyrd",
        "Catch": "Unarmed, without aggressing",
        "Action": "Instant",
        "FullDescription": [
            'Attacks swerve to avoid the changeling. While using this clause, the changeling always looks elegant and poised when using her Defense or even while dodging.'
        ],
        "FullCatch": [
            'The changeling is unarmed and not attempting to attack anyone. If the clause is invoked while using this catch, the clause will instantly end its effects and burn away three of the changeling’s Glamour if she attacks anyone while it is active.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The character suffers a -1 penalty to her Defense for the remainder of the scene as all weapons swerve toward her.',
            '<b>Failure:</b> The clause has no effect on the character’s Defense.',
            '<b>Success:</b> The clause adds the changeling’s Wyrd to her Defense. The changeling does not lose this bonus even if she is restrained, immobilized or unconscious, since attacks naturally swerve to avoid her body. This bonus applies to all attacks, including firearms attacks and attacks made when the changeling cannot normally use her Defense. In such cases, this bonus serves as the changeling’s only Defense. Otherwise, it is cumulative with the changeling’s normal Defense and is also added to the doubled Defense characters gain by dodging. In addition, even when dodging, the changeling always appears to be moving in an elegant and carefree and manner, and can use her Defense or dodge without spilling the cocktail she is holding or wrinkling her gown. This bonus to Defense lasts for two turns per success.',
            '<b>Exceptional Success:</b> The Defense bonus lasts for the scene.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-3", Situation: "The changeling is wearing armor." },
                    { Modifier: "-1", Situation: "The changeling is ill dressed." },
                    { Modifier: "+1", Situation: "The changeling is especially well dressed." }
                ]
            }
        ],
        "Description": "Bonus Defense equal to Wyrd, even against firearms or while unconscious. Move gracefully while Dodging.",
        "Book": "WM 41"
    },
    {
        "Name": "Phantom Glory",
        "Rank": "•••••",
        "Cost": "●●○",
        "Dice Pool": "Persuasion + Wyrd",
        "Catch": "Unarmed and unarmored",
        "Action": "Instant",
        "FullDescription": [
            'The changeling temporarily becomes completely intangible. In this state, she is immune to all physical attacks and can pass through all physical barriers.'
        ],
        "FullCatch": [
            'The changeling carries no weapons and wears no armor. If the changeling picks up or dons either while using this catch, the clause instantly ends.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The changeling becomes slightly less solid than usual, temporarily reducing her Stamina by one for the remainder of the scene.',
            '<b>Failure:</b> This clause has no effect on the changeling.',
            '<b>Success:</b> Becoming intangible requires one turn, during which the changeling can do nothing else. However, doing so does not cause her to lose her Defense. Becoming tangible again is a reflexive action.',
            'While intangible, the character cannot be affected by any physical attack. She is effectively in a state of Twilight, like a ghost, and can attack or be attacked by ghosts or other immaterial entities as if they were both solid. Everything the changeling wears and carries also becomes intangible, but the changeling cannot make anyone else intangible, even if the changeling picks the person up and carries him (at that point, the other person would fall through her arms). While intangible, the changeling can freely walk or stick her head through walls, drawers and all other objects. She cannot walk on air, though she can walk on still water as if it were solid ground; moving water may require a Dexterity + Athletics check to successfully navigate. She might also be able to leap partly through a ceiling and pull herself up to the next floor.',
            'If the character becomes tangible while part of her is embedded in solid or liquid matter, she takes three points of aggravated damage and is expelled to the nearest open space.',
            '<b>Exceptional Success:</b> The changeling can pick up small objects (anything small enough to fit into her closed hand) while remaining intangible. The object becomes intangible once her hand closes around it. This may allow her to retrieve small objects from locked boxes.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-1", Situation: "The changeling is intent on attacking someone." },
                    { Modifier: "+1", Situation: "The changeling is being pursued and is not attempting to fight back." }
                ]
            }
        ],
        "Description": "Enter Twilight.",
        "Book": "WM 41"
    },
    {
        "Name": "Contracts of Vainglory",
        "Rank": "N/A",
        "Cost": "N/A",
        "Dice Pool": "N/A",
        "Catch": "N/A",
        "Action": "",
        "FullDescription": [
            'These Contracts draw on Glamour to make the changeling more impressive and awe-inspiring. Several of these clauses allow the changeling to reveal his true mien to mortals in a fashion that neither risks lowering his Clarity nor allows the mortals to remember it clearly. The Striking Looks Merit provides the listed +1 to +2 dice bonus to all Contracts of Vainglory.'
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "N/A",
        "Book": "N/A"
    },
    {
        "Name": "Mask of Superiority",
        "Rank": "•",
        "Cost": "●●",
        "Dice Pool": "Intimidation + Wyrd - Resolve",
        "Catch": "As a socialite or shallow celebrity.",
        "Action": "Instant",
        "FullDescription": [
            'The changeling convinces a single subject that she is his professional superior or someone of superior social status. This clause cannot compel anyone into obedience, only deceive him.'
        ],
        "FullCatch": [
            'The changeling pretends to be a socialite or similar celebrity whose fame comes from high standing or good looks alone.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The subject takes extra offense to the changeling’s obvious lies, perhaps viewing her as dangerously deluded.',
            '<b>Failure:</b> The illusion fails. The subject sees the changeling as she is.',
            '<b>Success:</b> The changeling can either convince the subject that she is a high-ranking person in the subject’s workplace, or simply that she is a celebrity, someone important and worthy of notice and respect. The changeling doesn’t control who the target sees, only the general “someone in his workplace” or “a celebrity.” If the subject is expecting someone important to come and talk with him, he assumes the changeling is this person. This Contract does not force any particular action on the subject, but most will behave deferentially. Along with this effect, every success rolled adds one bonus die to all Social rolls to impress, intimidate or command the target. This effect lasts for one scene or until someone else convinces the target that the changeling is not who she claims to be.',
            '<b>Exceptional Success:</b> In addition to the above effects, the target is firmly convinced of the changeling’s importance and will argue with anyone who claims otherwise. In his certainty, the target gains +1 die to all rolls to convince others of the changeling’s importance.',
            {
                'Suggested Modifiers': [
                    { Modifier: "+1", Situation: "The changeling is dressed appropriately for the position she claims." },
                    { Modifier: "-1", Situation: "The changeling is dressed inappropriately for the position she claims." },
                ]
            }
        ],
        "Description": "Appear to be a figure of authority or fame for a scene.",
        "Book": "CTL 146"
    },
    {
        "Name": "Songs of Distant Arcadia",
        "Rank": "••",
        "Cost": "●●",
        "Dice Pool": "Expression + Wyrd",
        "Catch": "Entertaining a powerful audience",
        "Action": "Instant",
        "FullDescription": [
            'Some Gentry keep slaves to provide them with more refined forms of entertainment. This clause allows changelings to become consummate performers, preternaturally skilled storytellers or inhumanly eloquent speakers.'
        ],
        "FullCatch": [
            'The changeling is giving a performance in front of a wealthy and powerful audience.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The character’s confidence in her ability is utterly misplaced. She receives a -2 dice penalty to all Expression or Persuasion rolls for the next scene, but believes she is giving an excellent performance.',
            '<b>Failure:</b> The changeling gains no bonus to speeches or performances.',
            '<b>Success:</b> The character gains a number of bonus dice equal to her Wyrd to all Expression and Persuasion rolls for the next scene.',
            '<b>Exceptional Success:</b> The changeling delivers an inhumanly excellent performance, adding a number of automatic successes equal to her Wyrd to her next Expression and Persuasion roll, as well as adding the usual bonus dice to all other Expression and Persuasion rolls for the next scene.',
            {
                'Suggested Modifiers': [
                    { Modifier: "+1 to +2", Situation: "The changeling is wearing an unusually fine costume, or using especially well-made instruments or other accoutrements." },
                    { Modifier: "-1 to -2", Situation: "The changeling is dressed in an unassuming fashion without special props or accoutrements." },
                ]
            }
        ],
        "Description": "Add Wyrd as bonus dice to Expression and Persuasion for a scene.",
        "Book": "CTL 147"
    },
    {
        "Name": "Splendor of the Envoy’s Protection",
        "Rank": "•••",
        "Cost": "●●●",
        "Dice Pool": "Presence + Wyrd",
        "Catch": "At a formal soirée",
        "Action": "Instant",
        "FullDescription": [
            'The Gentry sometimes send the finest on diplomatic missions where they must be both impressive and difficult to harm. The changeling temporarily abandons the Mask, revealing her fae mien to all mortals (and other beings) within sight. However, using this clause does not harm the changeling’s Clarity, because his appearance dazzles mortals with amazing glory rather than confusing or frightening them. Mortals can clearly see they are talking speaking to a creature of inhuman appearance, but this merely impresses them to the extent that mortal onlookers are incapable of attacking the character except in self-defense.'
        ],
        "FullCatch": [
            'This clause is invoked at a formal party containing at least a dozen people.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The character appears clumsy and ill mannered, suffering a -2 dice penalty to all Presence or Manipulation rolls for the next scene.',
            '<b>Failure:</b> The character’s appearance is unchanged.',
            '<b>Success:</b> The character appears in her true form. Onlookers are awed, but not frightened. The character gains the equivalent of the four-dot version of the Striking Looks Merit. This bonus adds to any others, such as if the character already has the Striking Looks Merit. In addition, as long as the changeling does not brandish a weapon or attempt to harm anyone, ordinary humans cannot attack her. They can attempt to block her path, but they cannot actually harm her except by accident. Supernatural beings may attack the changeling by making a successful reflexive Resolve + Composure roll before each attack. This Contract lasts for one scene, unless the character attacks someone or aims a weapon at someone with threatening intent. Either action instantly ends the Contract’s effects, but the character can order others to attack without necessarily dispelling the effects.',
            'During this time, cameras and other electronic devices will not show or record the character’s true form. Afterwards, human onlookers still consider the changeling as striking and impressive, but either remember her appearance as a wondrous costume or forget that she looked at all inhuman. Supernatural onlookers remember the changeling’s true form, however. This clause affects everyone who sees the character during this scene, not merely those present when it was first invoked.',
            '<b>Exceptional Success:</b> This effect lasts until the sun next rises or sets (whichever comes first).',
            {
                'Suggested Modifiers': [
                    { Modifier: "+1 to +2", Situation: "The character is wearing exquisite and expensive clothing." },
                    { Modifier: "-1 to -2", Situation: "The character is wearing shabby or cheaply made clothing." },
                    { Modifier: "-2", Situation: "The character is wearing a visible weapon." }
                ]
            }
        ],
        "Description": "Safely lower the Mask for a scene, gaining a +2 Striking Looks bonus. So long as you make no shows of aggression, characters must be supernatural beings and roll Resolve + Composure to assault you. In Victorian society, replace one bonus die with two temporary dots of Status.",
        "Book": "CTL 147, VL 23"
    },
    {
        "Name": "Mantle of Terrible Beauty",
        "Rank": "••••",
        "Cost": "●●○",
        "Dice Pool": "Intimidation + Wyrd vs Composure + Tolerance",
        "Catch": "Fighting a formal trial by combat",
        "Action": "Contested",
        "FullDescription": [
            'The changeling appears in her fae mien to all onlookers in a fashion that makes her appear both frightening and terrible. Onlookers see the changeling as a great and terrible version of her normal seeming, but afterwards cannot remember the exact details of what she looked like, only that she filled them with utter terror. As a result, invoking this clause does not risk a changeling losing Clarity.'
        ],
        "FullCatch": [
            'The character is fighting a duel or some other combat that has been agreed upon in advance by both sides.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The changeling looks harmless. All attackers gain confidence, giving them one additional die to all attacks on the changeling for the next scene. The changeling also cannot affect anyone within range until the sun next sets.',
            '<b>Failure:</b> The clause fails to invoke.',
            '<b>Success:</b> This clause affects everyone within three yards per dot of the changeling’s Wyrd. One contested roll may be made reflexively for a crowd of mortals based on the highest Composure present. Supernatural beings should each make their own resistance rolls. If the changeling rolls any successes, he fills the affected targets with a mixture of terror and awe. If he rolls more successes than a target, the person must flee the changeling’s presence in utter terror. Those who fail this contest but cannot flee are at a -2 dice penalty to all actions due to fear. They also cannot spend Willpower to gain three extra dice on any rolls, or +2 to any Resistance traits. (Willpower can be spent to activate capabilities or powers that require it, however.)',
            'Anyone who rolls as many or more successes as the changeling need not flee, but the changeling awes and frightens them, causing a -2 dice penalty to all rolls to attack or attempt to harm the changeling. The changeling also gains +2 dice to all rolls to Intimidate everyone within range. The changeling’s awe-inspiring appearance persists until the changeling decides to resume her normal appearance or until the end of the scene, whichever comes first. Record the number of successes rolled for the changeling when this clause is activated, and compare it to any rolled for newcomers to the power’s area of effect. This awe cannot be used selectively, and affects all characters near the changeling (save those bound to her by a motley pledge or who share her Court). This clause cannot be used more than once on any subject in a single scene.',
            '<b>Exceptional Success:</b> All who roll fewer successes than the changeling must either flee or cower helplessly until the awe ceases. Those who roll as many or more successes are at a -2 dice penalty to all actions.',
            {
                'Suggested Modifiers': [
                    { Modifier: "+1 to +2", Situation: "The changeling’s clothing, accoutrements or weapons are especially flamboyant and impressive." },
                    { Modifier: "-1 to -2", Situation: "The changeling’s clothing, accoutrements or weapons are bland, shoddy or ill kept." },
                ]
            }
        ],
        "Description": "Safely lower the Mask for a scene. Failed contestants flee or cower and cannot invest effort with Willpower, and those who succeed suffer -2 to attack you.",
        "Book": "CTL 147"
    },
    {
        "Name": "Words of Memories Never Lived",
        "Rank": "•••••",
        "Cost": "●●●○",
        "Dice Pool": "Expression + Wyrd vs Composure + Tolerance",
        "Catch": "Stories you believe to be fact",
        "Action": "Extended and Contested (five successes; each roll represents one minute). If the changeling has not achieved the needed number of successes in a number of rolls equal to her Presence + Expression, the audience loses interest. One contested roll may be made reflexively for a crowd based on the highest Composure present. Supernatural targets may make their own resistance rolls.",
        "FullDescription": [
            'The changeling gives a speech or performance, such as a song or play, which profoundly affects the minds of listeners within 50 yards of the changeling. Although the changeling can augment her voice with a microphone, videos or recordings do not contain the fae magic present in the actual in-person performance. Once the character succeeds in preparing the audience, she can begin weaving a speech or other performance that warps their memories and supercharges their emotions.'
        ],
        "FullCatch": [
            'The changeling is attempting to convince the audience of something that she believes to be factually correct.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The audience turns hostile. Those who are so inclined may turn to violence.',
            '<b>Failure:</b> The performance is uninspired and has no effect on listeners.',
            '<b>Success:</b> The character tells, sings or demonstrates an emotionally charged story. Listeners fall into a light dreamlike trance. The events of this story affect them deeply, and they remember the events being described either as having happened to them or as something they personally witnessed or heard from a trusted friend. The audience reacts to the described events as if to vivid reality, but will not likely take any action they would not normally perform under strong provocation. The changeling cannot control how the audience reacts to their new memories. The effects of this performance last until the sun next rises. A crowd verging on riot told a story about how the events angering them have a reasonable explanation will likely calm down and disperse. Similarly, the members of a peaceful community meeting could be moved to mob violence if told that a neighbor is secretly a serial killer plotting to kidnap and kill their children.',
            '<b>Exceptional Success:</b> The performance so completely touches the audience’s hearts that they follow any simple and not obviously foolish or suicidal suggestion that the changeling makes about how to react to the story.',
            {
                'Suggested Modifiers': [
                    { Modifier: "+1 to +2", Situation: "The changeling is wearing or using unusually fine costumes, instruments or other accoutrements." },
                    { Modifier: "+1", Situation: "The character has three or more dots in Presence." },
                    { Modifier: "+2", Situation: "The targets are an audience expecting and eager to see a speech or performance." },
                    { Modifier: "-1 to -2", Situation: "The changeling is dressed in an unassuming fashion and without special props or accoutrements." },
                ]
            }
        ],
        "Description": "Illustrate an emotionally charged story to introduce it to the audience as false memories in which they were involved.",
        "Book": "CTL 148"
    }
]

const ogreishContractsData = [
    {
        "Name": "Contracts of Oath and Punishment",
        "Rank": "N/A",
        "Cost": "N/A",
        "Dice Pool": "N/A",
        "Catch": "N/A",
        "Action": "",
        "FullDescription": [
            'The Gentry depend on their word, but even in Arcadia there are those who will break bread then betray their host. There thus develops a certain need for Contracts that allow a changeling to sense, pursue and punish oathbreakers. It’s little surprise that these Contracts are most frequently taught to Ogres, who have something of a... gift for punishment.'
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "N/A",
        "Book": "N/A"
    },
    {
        "Name": "Pursuer’s Seven-League Leap",
        "Rank": "•",
        "Cost": "●",
        "Dice Pool": "Athletics + Wyrd",
        "Catch": "Pursuing an oathbreaker",
        "Action": "Reflexive",
        "FullDescription": [
            'A changeling who invokes this clause can leap truly prodigious distances. This allows the changeling to jump ravines or leap over buildings as well as long leaps over open ground for one action.'
        ],
        "FullCatch": [
            'The changeling is pursuing an oathbreaker.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The clause fails to activate. The changeling suffers a -2 penalty to make the jump roll.',
            '<b>Failure:</b> The clause fails to activate.',
            '<b>Success:</b> For every success, the changeling can jump 15 feet horizontally or eight feet vertically.',
            '<b>Exceptional Success:</b> The clause additionally increases the character’s Defense score by two for the turn.'
        ],
        "Description": "Leap 15 feet per success, or half vertically.",
        "Book": "WM 47"
    },
    {
        "Name": "Sense Tainted Vows",
        "Rank": "••",
        "Cost": "●",
        "Dice Pool": "Wits + Wyrd vs Composure + Tolerance",
        "Catch": "Pledgesworn with the subject",
        "Action": "Instant, contested",
        "FullDescription": [
            'With this clause, the changeling can determine by touch if the subject has broken any oaths. The taint of a broken oath fades after a year and a day except for severe violations (such as a formal fae pledge) or a broken law of hospitality. This will also include violations that would not fall under the modern legal system, such as adulterers who violate their marriage vows (if their marriage vows included a pledge to forswear all others) or violations that seem minor, such as breaching a Terms of Service agreement for software.'
        ],
        "FullCatch": [
            'The subject is swearing, or has sworn a pledge with the changeling.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The changeling receives the wrong impression.',
            '<b>Failure:</b> The changeling can’t tell if the subject is an oathbreaker or not, and is aware the clause failed.',
            '<b>Success:</b> The changeling is able to sense the most significant oath or vow broken by the subject that still lingers on the subject. “Significant” is determined by the subject’s general understanding of the oath’s importance, though the changeling can still sense a broken vow even if the subject did not believe it was at all important. The clause tells the changeling the general nature of the broken promise, such as “marriage vow.”',
            '<b>Exceptional Success:</b> The changeling can sense any and all broken vows that still hang about the subject, and gets a faint impression of the details surrounding the most significant violation. For example, a changeling might know sense that an adulterous husband cheated with an alluring brunette in a sordid-seeming bedroom, even if specifics aren’t revealed.'
        ],
        "Description": "Sense the greatest vow broken within a year and a day",
        "Book": "WM 47"
    },
    {
        "Name": "Inexorable Pursuer",
        "Rank": "•••",
        "Cost": "●",
        "Dice Pool": "Resolve + Wyrd",
        "Catch": "Resisted manipulation within the day",
        "Action": "Instant",
        "FullDescription": [
            'Invoking this clause allows the changeling to resist attacks on her Clarity or any Court-derived emotional effects for the duration of the scene.'
        ],
        "FullCatch": [
            'The changeling has successfully resisted a Court-based emotional manipulation or attack within the past day.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The changeling suffers a two-dice penalty to Resolve or Composure checks made to resist emotional or Clarity manipulation.',
            '<b>Failure:</b> The changeling suffers mental and emotional attacks as normal.',
            '<b>Success:</b> The changeling gains a two-dice bonus to any attempts to resist emotional or Clarity manipulation for the scene.',
            '<b>Exceptional Success:</b> The bonus rises to five dice.'
        ],
        "Description": "+2 to resist the manipulation of Clarity or courtly emotions.",
        "Book": "WM 47"
    },
    {
        "Name": "Relentless Pursuit",
        "Rank": "••••",
        "Cost": "●●",
        "Dice Pool": "Stamina + Wyrd",
        "Catch": "Pursue without resting",
        "Action": "Extended (number of successes equals every 50 miles between the changeling and the subject)",
        "FullDescription": [
            'This clause gives the changeling a general idea (direction and rough distance) of where his subject is, so long as they are under the same sky. The clause lasts from sunrise to sunset or sunset to sunrise. “The same sky” is defined as being in the same realm (Arcadia or the mortal world, for example), and the subject and caster are on the same dayside or nightside of the planet.'
        ],
        "FullCatch": [
            'The changeling never stops to rest for more than 15 minutes in his pursuit of the subject. The changeling can ride cars or planes but must be the one driving or otherwise controlling the vehicle.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The changeling is given a completely wrong direction.',
            '<b>Failure:</b> The changeling cannot sense his subject.',
            '<b>Success:</b> The changeling is able to sense the distance and direction of his subject.',
            '<b>Exceptional Success:</b> Not only does the changeling know where his subject is, but the changeling gets a flashing vision of what the subject is doing at the very moment the clause is first invoked.'
        ],
        "Description": "Sense the distance and direction to a subject for a day or night.",
        "Book": "WM 47"
    },
    {
        "Name": "Cruel Vengeance",
        "Rank": "•••••",
        "Cost": "●●",
        "Dice Pool": "Presence + Wyrd vs Manipulation + Tolerance",
        "Catch": "Fellow freehold member",
        "Action": "Instant",
        "FullDescription": [
            'Invoking this clause demands that the changeling publicly accuse her subject of oath-breaking. The changeling must also describe the oath or pledge the subject has broken for this clause to take effect. If the subject has, in fact, not broken this vow, the clause does not take effect. If he has, the clause grants him a brutal ability to punish his foe.'
        ],
        "FullCatch": [
            'The subject of the clause is a member of the changeling’s freehold.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The changeling suffers a two-dice penalty on his attack rolls on that specific subject for a month’s duration.',
            '<b>Failure:</b> The clause does not take effect.',
            '<b>Success:</b> The changeling’s damage is upgraded from bashing to lethal, or from lethal to aggravated, when attacking the target. In addition, his subject’s Defense rating is reduced by 2, and the target suffers a -3 penalty to any dice pools made against the character.',
            '<b>Exceptional Success:</b> The target’s Defense loss is increased to -4 (to a minimum of 0), and the penalty to dice pools made against the character is increased to -5.'
        ],
        "Description": "Use an accusation of broken oaths to upgrade attack damage, reduce the oathbreaker's Defense, and penalize shows of resistance.",
        "Book": "WM 48"
    },
    {
        "Name": "Contracts of Stone",
        "Rank": "N/A",
        "Cost": "N/A",
        "Dice Pool": "N/A",
        "Catch": "N/A",
        "Action": "",
        "FullDescription": [
            'Ogres and other changelings use these powers to enhance their might, becoming even more savage and deadly opponents. The clauses of this Contract are simple and direct, having as little subtlety as the stone bound in the ancient pact.'
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "N/A",
        "Book": "N/A"
    },
    {
        "Name": "Might of the Terrible Brute",
        "Rank": "•",
        "Cost": "●",
        "Dice Pool": "Strength + Wyrd",
        "Catch": "Outnumbered and unarmed",
        "Action": "Reflexive",
        "FullDescription": [
            'The character’s muscles bulge and ripple with added power. He may use his strength more effectively through a combination of leverage and brute determination.'
        ],
        "FullCatch": [
            'The character fights multiple opponents simultaneously with his bare hands, not using weapons or tools of any sort.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The character strains his muscles and suffers a -2 dice penalty to his next action involving Strength.',
            '<b>Failure:</b> The changeling’s Strength is unaffected.',
            '<b>Success:</b> The changeling adds a number of additional dots to his Strength for this action equal to the number of successes rolled.',
            '<b>Exceptional Success:</b> The changeling also gains the 8 again quality for the next action he takes using a Strength- based dice pool.',
            {
                'Suggested Modifiers': [
                    { Modifier: "+1", Situation: "The character yells, grunts or boasts loudly about her great strength." },
                    { Modifier: "-1", Situation: "The character acts calm, restrained and sedate." },
                ]
            }
        ],
        "Description": "Temporarily boost Strength.",
        "Book": "CTL 144"
    },
    {
        "Name": "Ogre’s Rending Grasp",
        "Rank": "••",
        "Cost": "●●",
        "Dice Pool": "Strength + Wyrd",
        "Catch": "Smashing through barriers",
        "Action": "Instant",
        "FullDescription": [
            'The character can focus his inhuman prowess against an inanimate object. Using this Contract, the changeling can rip down a wall with his bare hands or bash in the sturdiest door with a lead pipe. The changeling must either touch or be able to clearly see an object to use this clause upon it.'
        ],
        "FullCatch": [
            'The changeling is attempting to remove a barrier, such as a door or a wall.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The character strains his muscles, suffering a -2 dice penalty to all Strength-based dice pools for the next scene.',
            '<b>Failure:</b> The object’s Durability is unaffected.',
            '<b>Success:</b> The changeling subtracts one point of Durability per success achieved on the roll. Note that this clause does not affect the object’s Structure. The reduced Durability applies to all attacks on the object and lasts for one scene.',
            '<b>Exceptional Success:</b> No benefit other than that gained from 5+ successes.',
            {
                'Suggested Modifiers': [
                    { Modifier: "+1", Situation: "The character attacks the target without taking time to think about it." },
                    { Modifier: "-1", Situation: "The character has carefully studied the target to determine the best way to destroy it." },
                ]
            }
        ],
        "Description": "Sap an object's Durability.",
        "Book": "CTL 144"
    },
    {
        "Name": "Display Grandiose Might",
        "Rank": "•••",
        "Cost": "●●",
        "Dice Pool": "Athletics + Wyrd",
        "Catch": "Just to impress or entertain",
        "Action": "Instant",
        "FullDescription": [
            'The Ogre can boost his Strength by a significant degree for tasks not involving combat. The character can run, climb, jump and lift heavy objects far more effectively than normal.'
        ],
        "FullCatch": [
            'The character is using this clause for the express purpose of showing off his physical or athletic prowess to others, perhaps to gain some prize or to win acclaim, but not for any more practical purpose.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The character strains his muscles and functions as if his Strength was half normal (round down) for the duration of the scene.',
            '<b>Failure:</b> The character’s Strength is unaffected.',
            '<b>Success:</b> The character gains additional dots of Strength equal to his Wyrd. The character can only use this added might for non-combat purposes. If the character attacks an opponent, the affects of this clause instantly end. Otherwise, it lasts for one full scene and provides bonuses to Speed, to lifting objects, breaking down or holding back a door, climbing, jumping and all other Strength dice pools not including combat. Attempting to break inanimate objects does not count as combat.',
            '<b>Exceptional Success:</b> Along with bonuses already provided, the character gains the 9 again quality to all appropriate Strength rolls for the scene.',
            {
                'Suggested Modifiers': [
                    { Modifier: "+1", Situation: "The character is dressed in a way that shows off his muscles and physique." },
                    { Modifier: "-1", Situation: "The character is dressed in a way that hides his physique." },
                ]
            }
        ],
        "Description": "Boost Strength for a scene while refraining from combat.",
        "Book": "CTL 145"
    },
    {
        "Name": "Gluttonous Feast of Health",
        "Rank": "••••",
        "Cost": "●●●",
        "Dice Pool": "Stamina + Wyrd",
        "Catch": "Offered a feast by a stranger",
        "Action": "Instant",
        "FullDescription": [
            'Ogres are noted for their prodigious appetites. The character can heal damage though the consumption of prodigious amounts of food and drink.'
        ],
        "FullCatch": [
            'The character is offered large amounts of food by a stranger.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The character makes himself ill with the effects of gluttony and inflicts a point of lethal damage on himself.',
            '<b>Failure:</b> The character eats and drinks his fill but gains no special benefit from the effort.',
            '<b>Success:</b> Each success on the roll converts two levels of lethal damage into two levels of bashing damage or one level of aggravated damage into two levels of bashing damage. To use this clause, the character must spend at least an hour in an orgy of gustatory excess. The food’s quality is irrelevant — fast food is just as effective as a five-star feast. The character suffers no ill effects from this mass consumption of food. This clause automatically reduces the worst damage first.',
            '<b>Exceptional Success:</b> Other than more levels of damage being downgraded, no special bonuses.',
            {
                'Suggested Modifiers': [
                    { Modifier: "+1", Situation: "The character eats continuously for three or more hours." },
                    { Modifier: "-1", Situation: "The only food and drink available are relatively low-calorie fare." },
                    { Modifier: "+1", Situation: "The available food is especially rich, hardy and abundant." }
                ]
            }
        ],
        "Description": "Reduce lethal damage to bashing or aggravated to lethal by gorging yourself for an hour.",
        "Book": "CTL 145"
    },
    {
        "Name": "Red Rage of Terrible Vengeance",
        "Rank": "•••••",
        "Cost": "●●●○",
        "Dice Pool": "Resolve + Wyrd",
        "Catch": "Avenging a loved one",
        "Action": "Instant",
        "FullDescription": [
            'Transforming rage into physical prowess, the changeling is filled with passion and fury and gains unparalleled Strength and resistance from harm.'
        ],
        "FullCatch": [
            'The changeling is using this Contract to gain justice or revenge for a loved one being killed or badly hurt.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The character becomes frightened rather than furious and attempts to flee combat if possible. If this is not possible, he suffers a -2 dice penalty to all actions for the next scene.',
            '<b>Failure:</b> The character fails to invoke the Contract.',
            '<b>Success:</b> Each success adds one each to the changeling’s Initiative, Stamina, Strength (which also adds to her Speed), gives him one point of armor, and reduces the wound penalty taken from both bashing and lethal damage by one. The character experiences rage and savage determination to gain victory over his enemies. While he knows friend from foe and can decide which weapons to use and whether to kill or capture an enemy, he will not retreat unless facing overwhelming odds and will never forgo an attack in order to dodge. This battle-fury lasts for one scene and may only occur during or immediately before a combat.',
            '<b>Exceptional Success:</b> No benefit other than that gained from 5+ successes.',
            {
                'Suggested Modifiers': [
                    { Modifier: "+1", Situation: "The changeling is heavily armed or wearing armor." },
                    { Modifier: "-1", Situation: "The changeling is unarmored and using only improvised weapons." },
                ]
            }
        ],
        "Description": "Enter a bold battle-rage which boosts Strength, Stamina, Initiative, and Armor for the duration.",
        "Book": "CTL 146"
    }
]

const wizenedContractsData = [
    {
        "Name": "Contracts of Animation",
        "Rank": "N/A",
        "Cost": "N/A",
        "Dice Pool": "N/A",
        "Catch": "N/A",
        "Action": "",
        "FullDescription": [
            'Most Wizened prefer dealing with their tools and creations simply as ordinary objects that they can use to shape the world to their desire. However, some Wizened see inanimate objects as having just as much spirit and personality as living beings and prefer to talk with them and request their assistance, rather than simply ordering them around. All of the Contracts of Animation require the character to touch the object she is communicating with.'
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "N/A",
        "Book": "N/A"
    },
    {
        "Name": "Knowing Touch",
        "Rank": "•",
        "Cost": "●",
        "Dice Pool": "Crafts + Wyrd",
        "Catch": "Owner bids you examine",
        "Action": "Instant",
        "FullDescription": [
            'The character talks to an object or device and learns of any damage it has suffered and the location and nature of all of its weak points. The object also tells her about any hidden spaces or secret compartments within it. To use this clause, the character must handle, examine and talk or whisper to the object or device for at least half a minute.'
        ],
        "FullCatch": [
            'The owner of the device asked the changeling to examine it. This catch does not function if the changeling owns the object in question.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The changeling misunderstands the device and for the next scene gains a penalty of -2 to any roll to repair or modify this device.',
            '<b>Failure:</b> The clause provides the character with no information about the object or device.',
            '<b>Success:</b> The character understands the details of the object’s construction. She gains a bonus equal to her Wyrd to repair or modify a damaged object or device. In addition, she knows what piece to remove to most effectively disable a device, or exactly where to hit an object to do the most damage. She can halve the object’s Durability (round down) for any attack she makes on it during the next scene.',
            '<b>Exceptional Success:</b> The character also automatically learns of any hidden compartments or spaces within the object she is examining.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-1", Situation: "The character is distracted and not concentrating entirely on the object. Burglars who keep an ear out for guards or the owners of a house they are breaking into suffer this penalty." },
                    { Modifier: "+1", Situation: "The character examines the object for at least five minutes." },
                ]
            }
        ],
        "Description": "Learn an object's shape and construction, gaining bonuses to repair or damage it.",
        "Book": "WM 52"
    },
    {
        "Name": "Instant Expertise",
        "Rank": "••",
        "Cost": "●",
        "Dice Pool": "Wits + Wyrd",
        "Catch": "Converse with the tool for ten minutes",
        "Action": "Instant",
        "FullDescription": [
            'By touching a device and listening to its spirit, the changeling gains an instinctive knowledge of how to use it. This clause allows characters who have no idea how to use a particular device to use it without penalty and also provides characters trained in its use with additional expertise. To use this clause, the character must touch and fiddle with the device for two full turns before using it. This clause can be used on weapons, vehicles, scientific instruments, individual computer programs or any other device or tool. Changelings can even use this to gain bonuses at picking locks or disarming security systems.'
        ],
        "FullCatch": [
            'The character has at least 10 minutes to talk with the device to learn the secrets of its use.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The character misinterprets the device’s suggestions and suffers a -2 penalty when using the device for the next scene.',
            '<b>Failure:</b> The clause does not affect the character’s use of the device.',
            '<b>Success:</b> The character gains a temporary specialty with the device she is touching. This supernatural benefit manifests as a bonus to dice rolls made to use the specific object equal to the number of successes. Thus, if the player rolled three successes to have his Wizened learn to ride a particular motorcycle, the Wizened would gain three dice to any Drive rolls made to drive that specific vehicle. This bonus lasts for three turns per point of the character’s Wyrd. It also counts as temporary dots in a Skill for the purpose of eliminating untrained penalties.',
            '<b>Exceptional Success:</b> The bonus lasts for the entire scene.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-2", Situation: "The character refrains from even whispering to the device." },
                    { Modifier: "+1", Situation: "The character speaks to the device in a normal conversational volume." },
                ]
            }
        ],
        "Description": "Learn how to use a tool, gaining a temporary Skill specialty bonus.",
        "Book": "WM 52"
    },
    {
        "Name": "Inanimate Communion",
        "Rank": "•••",
        "Cost": "●",
        "Dice Pool": "Empathy + Wyrd",
        "Catch": "In disuse for a year",
        "Action": "Instant",
        "FullDescription": [
            'The character directly senses and experiences events that happened to the object or device he is handling. The changeling experiences these events from the point of view of the object he is touching. While doing this, he hears and feels how the object was used and who used it.'
        ],
        "FullCatch": [
            'The object has not been used or handled for at least a year.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The character gains a few vague and utterly incorrect impressions from any object he touches.',
            '<b>Failure:</b> The character gains no impressions from the object.',
            '<b>Success:</b> The character can touch or handle an item and learn about the last few times it was extensively used, moved or handled. This clause works equally well on a bottle opener that was used a few hours before and an ancient Roman necklace last worn 2,100 years ago. The character learns who used the object, gaining a clear impression of the user’s appearance and manner. The character also learns where and how the object was used. One of the major limitations on this clause is that the character can only see and hear people and objects that actually touched the object. The character will know who or what a melee weapon was used upon, but not who a gun was fired at, unless the gun actually touched the target. The character requires only a minute or two to learn the past of any single object.',
            '<b>Exceptional Success:</b> The character can clearly see and hear a greater number of the events surrounding the object or device as it was used or handled. Her vision includes people who were not in physical contact with the object, up to a radius of five yards from the object.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-2", Situation: "The character does not touch the objects with both hands." },
                    { Modifier: "+1", Situation: "The character polishes, cleans or performs minor maintenance on the various objects." },
                ]
            }
        ],
        "Description": "Share memories of an object's uses and users.",
        "Book": "WM 53"
    },
    {
        "Name": "Animate Device",
        "Rank": "••••",
        "Cost": "●●",
        "Dice Pool": "Manipulation + Wyrd",
        "Catch": "Possessed and used regularly for a month",
        "Action": "Instant",
        "FullDescription": [
            'The character can cause any device to operate on its own. Cars drive themselves, guns fire while sitting on a table, doors open or close and locks unlock themselves.'
        ],
        "FullCatch": [
            'The character owns the device and has regularly used it for at least a month.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The device briefly malfunctions and cannot be used in any fashion for the next three turns.',
            '<b>Failure:</b> The clause has no effect upon the device.',
            '<b>Success:</b> The device obeys any single simple command by the character — the locked door of a safe unlocks itself and swings open, a car starts and drives in the direction the character indicates, a drawer opens or closes or a gun tucked in an opponent’s belt fires. However, devices cannot move in any way that is outside the normal range of their operation. A car can drive itself and a gun lying on the ground can fire, but the gun cannot aim itself.',
            'The efforts of anyone attempting to use the device normally automatically supersede the effects of this clause; the item cannot wrest control. Also, unless the normal function of the device is sufficiently forceful to harm someone, such as a car hitting someone or a gun firing, this clause cannot cause the device to operate with sufficient force to harm anyone. This clause causes the device to obey a single command by the changeling. The changeling can command any single device within Wyrd x 3 yards that he can see clearly.',
            '<b>Exceptional Success:</b> The changeling can control the device for an entire scene, causing the device to operate as he desires, within the limits of this clause.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-3", Situation: "The character uses only gestures to direct the object to do what he wants." },
                    { Modifier: "-1", Situation: "The character can see only part of the device, such as being able to see only the grip of a pistol in a holster." },
                    { Modifier: "+1 to +5", Situation: "The character gains an additional +1 to this roll for every success he rolls on a Manipulation + Persuasion roll to convince the device to do what he wants. The character must spend at least half a minute convincing the device to act as he wishes and must speak audibly to gain this bonus." },
                ]
            }
        ],
        "Description": "Command an object to act on its own.",
        "Book": "WM 53"
    },
    {
        "Name": "Command the Inanimate",
        "Rank": "•••••",
        "Cost": "●●○",
        "Dice Pool": "Presence + Wyrd",
        "Catch": "A stranger or enemy's neglected belongings",
        "Action": "Instant",
        "FullDescription": [
            'The changeling commands an inanimate object and imbues it with temporary animation. This clause enables a table to hop across a restaurant floor, a broom to sweep a floor, a knife to hurl itself across a room or a gun to aim and fire itself. These objects can all move swiftly and, if desired, with lethal force.'
        ],
        "FullCatch": [
            'The object’s owner is a stranger to or enemy of the changeling, and mistreats or does not take adequate care of the object.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The object briefly animates for one turn in a violent and uncontrolled fashion, in which the object attempts to harm the changeling who commanded it. If this is not possible, it attempts to destroy itself.',
            '<b>Failure:</b> The object remains immobile and unaffected.',
            '<b>Success:</b> The desired object becomes animate for the entire scene. Objects act as if they were controlled by a living being with Strength and Dexterity equal to the changeling’s Wyrd and (if appropriate) a skill equal to the changeling’s Presence. For example, if the changeling orders a drawer to open so as to hit someone standing nearby, it would do damage like a brawling attack using Wyrd + Presence instead of Strength + Brawl.',
            'In addition to a broom being able to sweep a floor on its own, drawers can open with sufficient force to harm someone nearby, and bottles can roll or hurl themselves across a room. When performing this clause, the changeling must issue a single command to the object. The object continues to perform this action for the entire scene. If the character wishes to change this instruction, including ordering the object to instantly stop, he must take a turn to deliver the new order and make a successful Presence + Wyrd roll. As long as this roll succeeds, the object immediately begins performing the new action. If the roll fails, the object continues performing the previously ordered action, but the changeling may attempt to repeat the new order the next turn. Ordering an object to change what it is doing does not cost any additional Glamour. The changeling can command any object within Wyrd x 5 yards that he can see clearly.',
            '<b>Exceptional Success:</b> The object remains animated until the sun next rises or sets (whichever comes first), and the changeling can order the object to change actions without needing to roll. As long as the object is within Wyrd x 5 yards away and the changeling can see or hear it clearly, it will instantly obey the changeling.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-2", Situation: "The character asks the object to do something that will harm or destroy it." },
                    { Modifier: "+1", Situation: "The character asks the object to perform its normal and expected function." },
                ]
            }
        ],
        "Description": "Animate an object and command its behavior for a scene.",
        "Book": "WM 54"
    },
    {
        "Name": "Contracts of Artifice",
        "Rank": "N/A",
        "Cost": "N/A",
        "Dice Pool": "N/A",
        "Catch": "N/A",
        "Action": "",
        "FullDescription": [
            'Artifice Contracts are the blessings to magically create, repair or destroy physical objects, especially objects made by humans. Wizened who use these Contracts are the source of many legends about helpful fae craftsmen. Due to these Contracts’ give-and-take nature, they work best when performed for others.'
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "N/A",
        "Book": "N/A"
    },
    {
        "Name": "Brief Glamour of Repair",
        "Rank": "•",
        "Cost": "●",
        "Dice Pool": "Crafts + Wyrd",
        "Catch": "Items you neither own nor use",
        "Action": "Instant or Extended",
        "FullDescription": [
            'With neither tools nor spare parts available, the character can still repair any device. More than half of the device must be intact for the character to use this Contract. The repair is almost always temporary. The changeling must perform or help perform the repairs to use this Contract.'
        ],
        "FullCatch": [
            'The Contract must fix an item owned and used by another, which the character has never used. For example, the changeling using this Contract could repair a friend’s car the changeling had ridden in but never driven.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The Contract damages the device or vehicle further, providing a -3 dice penalty to future repair attempts.',
            '<b>Failure:</b> The Contract fails to function but does no harm.',
            '<b>Success:</b> Even lacking tools and parts, the character repairs the device easily, which he can replace with leaves, sticks, bits of wire, tape or objects found in her pockets. In addition, if the repair requires an extended action, the Contract halves the number of total successes required. However, these repairs only last for the next full day. At the end of this time, the device reverts to the same state it was in before the Contract was used.',
            '<b>Exceptional Success:</b> The repair occurs as an ordinary success, except that the repair is as durable and functional as if performed using the correct parts and tools.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-1", Situation: "No necessary parts or tools are present." },
                    { Modifier: "+1", Situation: "All necessary tools are present.The character asks the object to perform its normal and expected function." },
                    { Modifier: "+1", Situation: "The changeling does not personally know the object’s owner or primary user." }
                ]
            }
        ],
        "Description": "Repair a device for a day, using minute scraps, in half the normal time.",
        "Book": "CTL 134"
    },
    {
        "Name": "Touch of the Workman’s Wrath",
        "Rank": "••",
        "Cost": "●●",
        "Dice Pool": "Larceny + Wyrd",
        "Catch": "Belongs to someone who has tried to cheat you",
        "Action": "Instant",
        "FullDescription": [
            'The character can disable or even seriously damage a device or vehicle with a single touch.'
        ],
        "FullCatch": [
            'The owner of the device either stole or attempted to steal something of value from the changeling or attempted (maybe successfully) to cheat the changeling in a business deal.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The device is unharmed, but to anyone watching, the character was obviously attempting sabotage.',
            '<b>Failure:</b> The Contract fails, and the device is unharmed.',
            '<b>Success:</b> By casually touching the device, the changeling damages it such that it requires minor repairs or adjustments to be used. These repairs require an extended action, with one roll made every minute. The number of successes needed to complete repairs is equal to the number of successes rolled + half of the changeling’s Wyrd score (rounded up).',
            '<b>Exceptional Success:</b> By casually touching the device for a turn, the changeling damages it such that it requires major repairs to be used. These repairs require an extended action, with one roll made every 10 minutes. The number of successes needed to complete the repairs is equal to the number of successes rolled + the changeling’s Wyrd.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-1", Situation: "The device is especially well built." },
                    { Modifier: "+1", Situation: "The device is flimsy or ill maintained." },
                    { Modifier: "+2", Situation: "The character can touch the device for more than a minute." }
                ]
            }
        ],
        "Description": "Hex a device by touch, making it require constant maintenance.",
        "Book": "CTL 134"
    },
    {
        "Name": "Blessing of Perfection",
        "Rank": "•••",
        "Cost": "●●●",
        "Dice Pool": "Wits + Wyrd",
        "Catch": "Returning a favor, upon another's possession",
        "Action": "Extended (one roll per turn, eight successes needed)",
        "FullDescription": [
            'By briefly handling and adjusting a weapon, vehicle or other device, the changeling can bless an object, making it easier to use and more efficient. To use this clause, the changeling must tinker with the item for a few turns. The changeling can use the same Contract to bless any action (including all rolls of an extended action intended to repair, modify or build a device or computer program, treat an illness or injury or create a work of art. This clause can be combined with Brief Glamour of Repair. Using this Contract to help repair a device and blessing the same object requires two separate uses of this clause.'
        ],
        "FullCatch": [
            'The changeling is blessing or repairing an object used and owned by someone the changeling does not know well, in return for some favor.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The changeling accidentally curses the device, causing a -1 die penalty to all uses of it for the next full day.',
            '<b>Failure:</b> The clause fails, leaving the device unaffected.',
            '<b>Success:</b> The object gains a bonus equal to the changeling’s Wyrd to all die rolls made using it for the next full scene. If the changeling expends one point of Willpower and uses the power of Promise Leaves from the Hedge to further bless the item, this blessing lasts until the sun next rises or sets (whichever comes first). The Willpower and the Promise Leaves must both be used before the roll is made.',
            'The changeling can also use this clause to improve how he performs his various crafts. If the changeling uses this clause on an appropriate Crafts, Medicine or Computer action, he can add his Wyrd to all the roll or rolls involved.',
            '<b>Exceptional Success:</b> If this Contract is used to bless an object, the object gains the listed bonus for all die rolls made using it until the sun next rises or sets (whichever comes first). If the changeling expended one point of Willpower and used Promise Leaves when performing this Contract, the item gains a permanent bonus equal to half of the changeling’s Wyrd (round up). Alternately, if the changeling uses this Contract to bless a Crafts, Medicine or Computer roll action, she automatically adds an additional +2 dice bonus to the roll or rolls involved.',
            {
                'Suggested Modifiers': [
                    { Modifier: "+2", Situation: "Taking at least one minute per roll on the extended task." },
                    { Modifier: "-1", Situation: "Using substandard tools to make a repair roll." }
                ]
            }
        ],
        "Description": "Tinker to smooth operations, adding Wyrd as an equipment bonus to a device or tinkering task for a scene.",
        "Book": "CTL 135"
    },
    {
        "Name": "Unmaker’s Destructive Gaze",
        "Rank": "••••",
        "Cost": "●●",
        "Dice Pool": "Presence + Wyrd",
        "Catch": "Study or handle the object",
        "Action": "Instant",
        "FullDescription": [
            'The character stares hard for a moment at a vehicle, weapon or device, causing the object to cease working until the user unjams or restarts it.'
        ],
        "FullCatch": [
            'The changeling has an opportunity to touch and examine the object for at least a minute.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The fickle Contract temporarily improves the device. For a number of turns equal to the changeling’s Wyrd, all attempts to use the device gain a +1 die bonus.',
            '<b>Failure:</b> The Contract fails, and the device is unharmed.',
            '<b>Success:</b> When the changeling stares directly at a vehicle, weapon or other device within 20 yards, she causes it to briefly cease working. A car might stall, a gun jam or a computer crash. The user must spend a full turn making a normal repair roll (typically Intelligence + Crafts) with the object to restart, unjam or otherwise get it working again. The number of successes on the changeling’s roll acts as a penalty to the user’s roll. On a failure, he has not succeeded in unjamming the device but may attempt again on the next turn at the same penalty. No specialized skills, tools or spare parts are needed to restart the device. This Contract works equally well on items that have no moving parts, such as knives, which experience minor, easily repairable damage, for example, having their blade to slip from their handle that renders the item useless until repaired.',
            '<b>Exceptional Success:</b> The changeling’s glance causes the vehicle, weapon or other device to need minor repairs or adjustments before it can be used again. These repairs require 10 successes on an extended action, with one roll being attempted once every minute. Repair rolls suffer the changeling’s successes as a penalty.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-2", Situation: "The changeling cannot see the device or weapon clearly." },
                    { Modifier: "+2", Situation: "The changeling touches the device while performing this Contract." }
                ]
            }
        ],
        "Description": "Jam, halt, or incapacitate a device with a glare.",
        "Book": "CTL 135"
    },
    {
        "Name": "Tatterdemalion’s Workshop",
        "Rank": "•••••",
        "Cost": "●●●●(○)",
        "Dice Pool": "Crafts + Wyrd",
        "Catch": "In your own workshop, with your own tools",
        "Action": "Extended (the target number and frequency of rolls are variable)",
        "FullDescription": [
            'Although the powers of the fae do not create anything truly new, they excel at combining existing elements. This clause allows the character to create a complex and useful device out of unlikely parts, for instance, building a hovercraft from a motorcycle engine, an inflatable air mattress and some tubing and heavy gauge wire. The character can create the item swiftly and with unlikely tools and equipment, but in all cases the item must be possible and the parts must physically be able to be used in this manner. Wands that throw bolts of lightning or belts that lift the wearer by means of anti-gravity are impossible, as is building a car without anything that could be used as tires or an engine. Similarly, if the character wants to build a bomb, he must possess something explosive, and if he wants to build a suitcase nuke, he requires a large supply of plutonium.'
        ],
        "FullCatch": [
            'The changeling creates the vehicle or device in her own workshop with her own tools. A changeling must use a workshop regularly for it to count as hers.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> in the attempt he breaks one or more parts so that they cannot be used again.',
            '<b>Failure:</b> The Contract fails, and the various parts are unaffected.',
            '<b>Success:</b> The character can create a new device out of vaguely appropriate parts, such as a working ultra-light plane out of a lawn mower or motorcycle engine and some copper pipe and canvas, or a machine pistol out of a nail gun and some other mechanical parts. Creating this item is always an extended action. The character can make one roll every minute when building any small handheld item such as a pistol or a power drill, and every 10 minutes when creating a device as large as a small car, hang glider or ultra-light plane. Devices larger than Size 10 cannot be created using this Contract. The Storyteller sets the number of successes required to create this item, which varies from five to 10, depending upon the complexity of the device and the quality of available materials.',
            'This device functions for one scene as well as a normal device of the type being duplicated. If the changeling expends one point of Willpower and uses the power of an item from the Hedge to further bless the item, this blessing works until the next sunrise. At the end of this time, the item falls to pieces, and these pieces are sufficiently worn and tattered to be unusable.',
            '<b>Exceptional Success:</b> The device functions until the next sunrise. If the changeling also expends one point of Willpower and uses the power of an item from the Hedge to further bless the item, then the item is built sturdily enough to last indefinitely.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-3", Situation: "The materials are both poor quality and relatively sparse." },
                    { Modifier: "-1", Situation: "The materials are either poor quality or relatively sparse." },
                    { Modifier: "+1", Situation: "The materials are abundant or high quality." },
                    { Modifier: "+3", Situation: "The materials are abundant and largely high quality." },
                    { Modifier: "+2", Situation: "A wide selection of tools is available." },
                    { Modifier: "-1", Situation: "Few tools are available." }
                ]
            }
        ],
        "Description": "Craft sophisticated works by jury-rigging inappropriate components, which fall apart after a scene, or with Willpower, until sunrise. In the Victorian era, may produce anachronistic wonders.",
        "Book": "CTL 135, VL 23"
    },
    {
        "Name": "Contracts of the Forge",
        "Rank": "N/A",
        "Cost": "N/A",
        "Dice Pool": "N/A",
        "Catch": "N/A",
        "Action": "",
        "FullDescription": [
            'The Gentry can reshape Arcadia with a whim and impose significant changes on the mortal world. Changelings lack this level of power, but can learn to alter and shape the reality of the mortal world in small ways, and to shape the Hedge in a more profound fashion.',
            'Contracts of the Forge are considered affinity Contracts for the Wizened.'
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "N/A",
        "Book": "N/A"
    },
    {
        "Name": "Rewriting the Image",
        "Rank": "•",
        "Cost": "●",
        "Dice Pool": "Expression + Wyrd",
        "Catch": "Replacing with your own likeness",
        "Action": "Instant",
        "FullDescription": [
            'The changeling can alter the details of any two-dimensional image, including paintings, photographs and video clips. The basic form of the image cannot be changed but all of the details can be, allowing the changeling to transform an image of one person into the image of someone else. This clause cannot alter writing — the changeling could twist the face in a driver’s license or political ad, but not alter the birth date or campaign slogan.',
            ''
        ],
        "FullCatch": [
            'The changeling is changing an image of someone else into the changeling’s own image.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The image is changed in some manner that is detrimental to the changeling or her immediate goals.',
            '<b>Failure:</b> The Contract fails, and the image remains unchanged.',
            '<b>Success:</b> The image that is the target of this clause shifts and alters, but retains its basic form. An ID photo remains a close-up image of someone’s face, but the changeling can determine whose picture is on this ID. Similarly, a grainy and dimly lit video of a robbery remains a grainy video of a robbery, but the changeling could replace blurry faces with clearly visible ones of her choice, or if the individuals shown were already clearly visible, it could show a different robber, a different victim or both.',
            'This clause works equally well on still and video images, and can be performed upon any single image or video regardless of size. However, affecting the image in a TV program changes only the image shown on one particular TV set; the images shown on other TV sets are unaffected. All changes last for the duration of the scene.',
            'This clause can affect everything from an ID photo to a large billboard, and the image appears to be authentic even under magnification or careful observation. However, this clause affects only photographs or videos; it has no effect on drawing, paintings or printed words and explicitly cannot be use to change the denomination of paper money.',
            '<b>Exceptional Success:</b> The change to the image is permanent.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-1", Situation: "The image is larger than the changeling." },
                    { Modifier: "-1", Situation: "The changeling is affecting a broadcast image." },
                    { Modifier: "-1 to -5", Situation: "-1 per six seconds of moving footage being altered." },
                    { Modifier: "+1", Situation: "The changeling touches the photograph, poster, DVD or videotape." },
                ]
            }
        ],
        "Description": "Alter the details of a two-dimensional likeness.",
        "Book": "RoS 99"
    },
    {
        "Name": "Trivial Reworking",
        "Rank": "••",
        "Cost": "●●",
        "Dice Pool": "Crafts + Wyrd",
        "Catch": "Turning a stolen item against its owner",
        "Action": "Instant",
        "FullDescription": [
            'The changeling can temporarily reshape a small object in relatively minor ways.'
        ],
        "FullCatch": [
            'The changeling is reshaping an item that she stole from someone so that the changeling can use it against this person.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The object breaks in the process of reshaping itself and can no longer be used for any purpose.',
            '<b>Failure:</b> The Contract fails, and the object is unharmed.',
            '<b>Success:</b> The changeling can take any object of Size 1 that she can easily hold in one hand, and reshape it to into a similar object. The changeling could transform a house key to be the key to another house, including the one she is standing in front of. She could instead reshape a stolen driver’s license so that it has her picture on it and contains whatever name and other information she wishes, and she could even transform this license into a corporate ID card or the official ID of an FBI agent. In addition, she could reshape a .45 bullet so that it becomes a 9mm pistol bullet that can be fired from a 9mm pistol. However, this clause cannot change objects in more extensive ways. A key to a piece of luggage could not be transformed into a house key, and a driver’s license could not be made into a credit card. A house key must remain a house key; an ID card must remain some sort of ID card. In addition, these changes cannot be used to alter any electronic data stored in the item.',
            'These changes last for only one scene. Also, carefully examining the object reveals that it is a clever fake. Money, ID cards or similar items will not pass either an examination by an expert used to finding fakes or any sort of instrument designed to indicate authenticity. Also, this clause cannot be used on any object that was created using a Contract; this clause can only be used on real objects.',
            '<b>Exceptional Success:</b> The object remains in its new form until the sun next rises.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-1", Situation: "The changeling does not have a chance to spend at least a minute examining the object before using this Contract upon it." },
                    { Modifier: "+1", Situation: "The changes are especially minor, such as changing the name and address on an ID card." }
                ]
            }
        ],
        "Description": "Remold a small object into a similar form for a scene.",
        "Book": "RoS 100"
    },
    {
        "Name": "Discreet Conjuration",
        "Rank": "•••",
        "Cost": "●●○",
        "Dice Pool": "Manipulation + Wyrd",
        "Catch": "As payment to an enemy",
        "Action": "Instant",
        "FullDescription": [
            'The character can remove a small object from a pocket, desk drawer or other location where the object could be — even though, before this Contract’s use, the object wasn’t there at all.'
        ],
        "FullCatch": [
            'The changeling is paying an enemy for some information or service with a valuable object of some sort.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The character pulls out an item that is useless and exceedingly awkward, such as drawing a fake but exceedingly realistic pistol in an airport or a piece of broken drug paraphernalia when talking to a police officer.',
            '<b>Failure:</b> The Contract fails, and the character finds nothing new in the pocket, drawer or other location.',
            '<b>Success:</b> The character reaches into some relatively small location she cannot see into, such as a pocket, handbag or desk drawer, and pulls out an item that fits comfortably in one hand and that has a maximum Size of 1. This item can be anything the character has handled before, and cannot be larger than a cell phone, a pistol or some similarly sized object. The item is fully functional — a pistol shoots bullets, a cell phone can make and receive calls and a digital camera can take pictures. The item is ready to use, full of ammunition, film or battery charge, though it’s the simplest version available. A pistol might have a full complement of bullets, but it wouldn’t be conjured with Teflon or hollow point rounds, much less silver or other unusual forms of ammunition.',
            'However, although the item can look very much as if it were made of precious materials such as gold or diamonds, in reality the item is made from clever fakes, a fact that becomes obvious after close observation. The item is also a relatively generic item of its kind and lacks small details such as serial numbers. The character can pull out a passport or credit card, but cannot determine whose face and name are on it. He could conjure a vial of acid, but would have no control over its strength. Certain properties are unavailable; this power cannot create radioactive materials or holy water, for instance. Also, whether the character pulls out cash, a credit card or an object that can be sold, the maximum value that can be obtained by using this clause is $100. Finally, this clause cannot produce objects made of iron.',
            'The object vanishes after one scene or as soon as it is either out of the character’s hands or the character ceases paying attention to it, whichever comes first.',
            '<b>Exceptional Success:</b> The character can determine the exact features of the object, such as the name and picture on the passport, the particular model of cell phone or pistol or what sort of ammunition the pistol carries. However, the object still lacks small details such as serial numbers and is no more valuable.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-1", Situation: "The changeling is removing the object from a drawer, bag or other object that she has never opened before." },
                    { Modifier: "+1", Situation: "The changeling is removing the object from either her clothing or from a piece of furniture in her home." }
                ]
            }
        ],
        "Description": "Draw a small, practical counterfeit out of any pocket.",
        "Book": "RoS 100"
    },
    {
        "Name": "Hidden Reality",
        "Rank": "••••",
        "Cost": "●●●○",
        "Dice Pool": "Wits + Wyrd",
        "Catch": "To escape confinement",
        "Action": "Reflexive",
        "FullDescription": [
            'The changeling can create or change some minor feature of her surroundings that was not previously obvious.'
        ],
        "FullCatch": [
            'The character is creating a way out of a place where she has been confined against her will.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> Reality resists the changeling’s efforts, causing her to lose an additional point of Willpower and preventing her from using any Contracts of the Forge for the rest of the scene.',
            '<b>Failure:</b> The clause fails, and the changeling fails to change her environment.',
            '<b>Success:</b> The changeling creates some feature of her surroundings that was not previously obvious and so might have been present naturally. For example, she causes a pair of bars in a cell to be loose enough to be removed if she tugs on them hard enough. Similarly, she can create a hidden catch that opens a door, cause a normal door to be left unlocked or an electrical outlet that was hidden behind a table. In all cases, the change must be small and relatively reasonable. This change cannot create anything larger than Size 1, and cannot create unlikely features such as pit traps or land mines underneath someone’s doormat. Similarly, if leaving a door unlocked would trip sensors that would register this fact, then causing the door to be left open is impossible. All changes vanish or simply cease to work after one scene or as soon as the character ceases paying attention to it, whichever comes first.',
            '<b>Exceptional Success:</b> The change remains for one full scene.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-1 to -3", Situation: "The change is either large enough that a careful observer might have noticed it before, or unlikely enough that its presence is surprising." },
                    { Modifier: "+1", Situation: "The change is minor and completely expected, such as a room having an additional electrical outlet." }
                ]
            }
        ],
        "Description": "Temporarily alter your surroundings in a plausible way.",
        "Book": "RoS 101"
    },
    {
        "Name": "Paths of Desire",
        "Rank": "•••••",
        "Cost": "●●●○○",
        "Dice Pool": "Academics + Wyrd",
        "Catch": "Bury your blood in the destination's soil",
        "Action": "Instant",
        "FullDescription": [
            'The character can open a gateway that leads to anyplace in the Hedge that the character has ever visited before.'
        ],
        "FullCatch": [
            'The character has buried a vial of his own blood in the soil of the desired location.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> Although the doorway seems to lead to the desired locations, in actuality the character ends up completely lost in an unknown portion of the Hedge.',
            '<b>Failure:</b> The Contract fails, and the character fails to open a doorway into the Hedge.',
            '<b>Success:</b> The character touches a doorway or other possible entrance into the Hedge and uses this clause to open a doorway that leads to any location in the Hedge that the character has visited before. This doorway remains open only for a number of turns equal to the successes rolled for this clause; after that, the doorway shuts and cannot be reopened. This clause cannot be used while the character is inside the Hedge, and so the character must find another way out. In addition to being a swift way to reach a source of goblin fruit or a Hollow, the character can travel to a portion of the Hedge a few feet from any entrance into the Hedge that the character has ever used, allowing exceedingly rapid transport though the Hedge. Characters cannot use this clause to travel to any location in the Hedge that they have not previously visited. Attempts to do so automatically fail, but do not cause dramatic failures.',
            '<b>Exceptional Success:</b> The gateway into the Hedge remains open for half an hour, allowing the characters to come and go as they please during this time. At the end of this time, the entrance vanishes and cannot be reopened except by using this clause again in the mortal world.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-2", Situation: "The character visited this location in the Hedge only once and hurried through it so rapidly that she was unable to gain a clear impression of it." },
                    { Modifier: "+1", Situation: "The character has visited the location in question several times and knows it well." }
                ]
            }
        ],
        "Description": "Open a Hedge gateway to anywhere in the Hedge you have been before.",
        "Book": "RoS 102"
    }
]

const springCourtContractsData = [
    {
        "Rank": "Contracts of Eternal Spring",
        "Name": "N/A",
        "Action": "",
        "FullDescription": [
            'The Contracts of Eternal Spring provide powers of growth and rejuvenation to the changeling, just as Spring brings growth and rejuvenation to Earth.'
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "N/A",
        "Catch": "N/A",
        "Court Goodwill Requirement if not a member": "N/A",
        "Cost": "N/A",
        "Dice Pool": "Lost 151"
    },
    {
        "Rank": "•",
        "Name": "Gift of Warm Breath",
        "Action": "Instant",
        "FullDescription": [
            'The character’s power rejuvenates a single living target, filling the target with energy and vigorous life.'
        ],
        "FullCatch": [
            'The subject of the Contract has freely offered the changeling some form of sustenance since the last sunrise.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The subject suffers starvation and fatigue as if he had been without food and sleep for a number of days equal to the changeling’s Wyrd, and without water for half that long. (See the World of Darkness Rulebook, pp. 175–176 and 179–180, for information on such things.) For things that can endure longer periods of deprivation without penalty, increase the base time until they are adversely affected (cacti, for example).',
            '<b>Failure:</b> The character does not aid the subject.',
            '<b>Success:</b> The Contract’s subject gains energy. He becomes as healthy and alert as though he has just risen from a full night’s rest and had a full breakfast. All fatigue penalties disappear, and any bashing damage or damage suffered from food or water deprivation is fully healed.',
            '<b>Exceptional Success:</b> The subject gains +1 Stamina for the duration of the scene.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-1", Situation: "Each point of fatigue penalty the subject suffers" },
                    { Modifier: "-1", Situation: "Each point of damage from deprivation the subject suffers" }
                ]
            }
        ],
        "Description": "Rejuvenates a target, alleviating suffering from fatigue and deprivation, and healing bashing damage.",
        "Catch": "The subject of the clause has freely offered the changeling some form of sustenance since the last sunrise.",
        "Court Goodwill Requirement if not a member": "Waived",
        "Cost": "●",
        "Dice Pool": "Mantle + Resolve + Survival"
    },
    {
        "Rank": "••",
        "Name": "New Lover’s Kiss",
        "Action": "Extended (5+ successes; each roll represents five minutes of imploring the sky)",
        "FullDescription": [
            'The character calls a rain down from even a cloudless sky.'
        ],
        "FullCatch": [
            'A mortal human has commented, within the character’s hearing and within the past hour, that it looks like rain.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The extended roll fails. It does not begin to rain, and the character cannot use this Contract again for 24 hours. ',
            '<b>Failure:</b> The character makes no progress toward her goal.',
            '<b>Success:</b> The character progresses toward making it rain. The character chooses the number of successes required ahead of time. Five successes yields a light, pleasant rain. Every additional five successes increases the ferocity of the precipitation until, at 25 successes, the character summons a true deluge that could flood local lakes and rivers and wash away unsecured objects.',
            '<b>Exceptional Success:</b> The character makes exceptional progress toward her goal.',
            {
                'Suggested Modifiers': [
                    { Modifier: "+1", Situation: "Extensive cloud cover" },
                    { Modifier: "-1", Situation: "Exceedingly clear day" }
                ]
            }
        ],
        "Description": "Conjure rain, no matter current cloud conditions, potentially up to even a deluge.",
        "Catch": "A mortal human has commented, within the character's hearing and within the past hour, that it looks like rain.",
        "Court Goodwill Requirement if not a member": "●●●",
        "Cost": "●",
        "Dice Pool": "Mantle + Intelligence + Survival"
    },
    {
        "Rank": "•••",
        "Name": "Warmth of the Blood",
        "Action": "",
        "FullDescription": [
            'The power of Spring is strong enough to heal injuries and soothe pain. This clause allows the changeling to channel the verdant might of Spring into a person’s body, mending his wounds. This power works only on living creatures of flesh and blood.'
        ],
        "FullCatch": [
            'The target has honestly professed a heartfelt and deep love, romantic or familial, for the changeling.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The clause’s effects go astray. One point of damage is upgraded from bashing to lethal; if all wounds are lethal, one is upgraded to aggravated.',
            '<b>Failure:</b> The clause takes no effect.',
            '<b>Success:</b> Each success on the roll allows the changeling to downgrade one of the target’s lethal wounds to a bashing wound, or to remove one bashing wound entirely. Thus, a changeling who rolled four successes could turn two lethal wounds into bashing wounds (two successes) and then remove both bashing wounds (two more).',
            '<b>Exceptional Success:</b> The changeling may also use successes to convert aggravated wounds into lethal wounds. Each aggravated wound converted to lethal requires the expenditure of an additional point of Glamour.'
        ],
        "Description": "Downgrade a subject's lethal wounds to bashing, or heal bashing wounds entirely.",
        "Catch": "The target has honestly professed a heartfelt and deep love, romantic or familial, for the changeling.",
        "Court Goodwill Requirement if not a member": "●●●●",
        "Cost": "●○",
        "Dice Pool": "Mantle + Wits + Medicine"
    },
    {
        "Rank": "••••",
        "Name": "Yesterday’s Birth",
        "Action": "",
        "FullDescription": [
            'The changeling endows a living object or creature with a season’s worth of growth and maturing in an instant.'
        ],
        "FullCatch": [
            'The character spills two drops of blood on the target object and cups it in her hands.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The target object dies in an obvious manner. Seeds are immediately overcome with rot, and insects fall over with bloat. Birds or mammals of Size 2 or larger do not die, but are wracked with hunger.',
            '<b>Failure:</b> The target object does not grow.',
            '<b>Success:</b> The target object grows the same amount it would over a full season with optimal care. The object ends its growth as if it were in the height of Spring, so plants are flowering. Insects lay grubs in this time (if they are able), which also grow. Subjects of this Contract require a great deal of sustenance during or after the growth, equivalent to about three full days’ worth. Plants in soil of only moderate fertility or less may drain their resources and soon begin to wither.',
            'This clause can be used on human beings, but the changeling must pay three points of Glamour and one Willpower dot. This cost cannot be averted by invoking the clause’s catch.',
            '<b>Exceptional Success:</b> The target object experiences up to a full year’s worth of growth (as much between one season and one year as the changeling desires). The full cycle of the year is visible and may provide fruit or other benefits.',
            {
                'Suggested Modifiers': [
                    { Modifier: "+1", Situation: "Object fits entirely in the palm of the hand (peach pit, mayfly grub)." },
                    { Modifier: "—", Situation: "Object is approximately Size 1." },
                    { Modifier: "-1", Situation: "Each point by which the target object/creature is greater in Size than 1." },
                    { Modifier: "-1", Situation: "Each additional object (affecting a group of seeds or a small group of ants)." }
                ]
            }
        ],
        "Description": "Age a target by a full season, leaving it as if it were now the height of Spring; requires additional Glamour and a willpower dot to apply to humans.",
        "Catch": "The character spills two drops of blood on the target object and cups it in her hands.",
        "Court Goodwill Requirement if not a member": "●●●●●",
        "Cost": "●(●●○)",
        "Dice Pool": "Wyrd + Medicine"
    },
    {
        "Rank": "•••••",
        "Name": "Mother of All Deaths",
        "Action": "Instant",
        "FullDescription": [
            'The character makes the region around her extraordi- narily verdant and rouses it to fight on her behalf.'
        ],
        "FullCatch": [
            'A man bled to death on this soil within the past year.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The plants the changeling attempted to control turn on her. They make a single grappling attack on her each turn for the rest of the scene. See below for more details.',
            '<b>Failure:</b> Nearby plants gain a few years’ worth of new growth over the next few minutes, but most of it dries up within the next hour and the plants to not move abnormally.',
            '<b>Success:</b> Plants around the changeling grow at an extraordinary rate, quickly enough for vines, roots and the like to grow around people and entangle them. Each turn, the character may designate one grapple attack on any creature or target within 10 feet of a plant in her sight in addition to her normal action. She may sacrifice her normal action to designate two grapple attacks, and if she does that she may also sacrifice her Defense for a third. Plant grapple attacks use a dice pool of the changeling’s Wyrd + 1–3 equipment bonus for the plant (vines are excellent, branches less so). This lasts a number of turns equal to the changeling’s Wyrd rating. Over the next hour, all but one  year’s worth of the new growth dies off.',
            '<b>Exceptional Success:</b> The plants fight for the character for the rest of the scene, and all new growth remains afterward.',
            {
                'Suggested Modifiers': [
                    { Modifier: "+1", Situation: "Bountiful plant life (rainforest)" },
                    { Modifier: "—", Situation: "Moderate plant life (rural area)" },
                    { Modifier: "-1", Situation: "Weak plant life (city trees)" },
                    { Modifier: "-1", Situation: "Controlled plant life (city park)" },
                    { Modifier: "-3", Situation: "Sparse plant life (city street with occasional fenced-in trees)" }
                ]
            }
        ],
        "Description": "Animates the plant life in an area and have it fight on the changeling's behalf.",
        "Catch": "A man bled to death on this soil within the past year.",
        "Court Goodwill Requirement if not a member": "-",
        "Cost": "●●●○",
        "Dice Pool": "Mantle + Presence + Empathy"
    },
    {
        "Rank": "Contracts of Fleeting Spring",
        "Name": "N/A",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "N/A",
        "Catch": "N/A",
        "Court Goodwill Requirement if not a member": "Court Goodwill (Spring)",
        "Cost": "N/A",
        "Dice Pool": "Lost 149"
    },
    {
        "Rank": "•",
        "Name": "Cupid’s Eye",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "Learn one of the subject's desires",
        "Catch": "Used on someone who has kissed the Changeling in the past 24 hours, or who desires the Changeling",
        "Court Goodwill Requirement if not a member": "Waived",
        "Cost": "●",
        "Dice Pool": "Wyrd + Wits vs Powerstat + Composure"
    },
    {
        "Rank": "••",
        "Name": "Growth of the Ivy",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "Change one of the subject's desires",
        "Catch": "Using the contract to resolve a Pledge. Must spend a Willpower point when using on a Supernatural",
        "Court Goodwill Requirement if not a member": "●●●",
        "Cost": "●●(○)",
        "Dice Pool": "Mantle + Manipulation + Persuasion - Subject's Resolve"
    },
    {
        "Rank": "•••",
        "Name": "Wyrd-Faced Stranger",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "Become someone who the target desire/expect to see",
        "Catch": "The changeling has offered food to the target and it was accepted, or the other way around.",
        "Court Goodwill Requirement if not a member": "●●●●",
        "Cost": "●●",
        "Dice Pool": "Mantle + Presence + Subterfuge vs Powerstat + Composure"
    },
    {
        "Rank": "••••",
        "Name": "Pandora’s Gift",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "Temporarily produce an object the subject desires",
        "Catch": "Used on someone who gave the Changeling a no strings attached gift in the past week",
        "Court Goodwill Requirement if not a member": "●●●●●",
        "Cost": "●●",
        "Dice Pool": "Mantle + Wits + Craft"
    },
    {
        "Rank": "•••••",
        "Name": "Waking the Inner Faerie",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "Alter a subject's desire and force them to pursue it above all else.",
        "Catch": "The subject freely told the Changeling his desires.",
        "Court Goodwill Requirement if not a member": "-",
        "Cost": "●●●○",
        "Dice Pool": "Mantle + Intelligence + Expression vs Powerstat + Composure"
    },
    {
        "Rank": "Contracts of Verdant Spring",
        "Name": "N/A",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "N/A",
        "Catch": "N/A",
        "Court Goodwill Requirement if not a member": "Court Goodwill (Spring)",
        "Cost": "N/A",
        "Dice Pool": "Lords of Summer 39"
    },
    {
        "Rank": "•",
        "Name": "Font of Inspiration",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "Each success is a +1 to Crafts or Expression rolls",
        "Catch": "Invests his own literal blood sweat or tears into the creation",
        "Court Goodwill Requirement if not a member": "Waived",
        "Cost": "●",
        "Dice Pool": "Mantle + Wits + Empathy - Subject's Resolve (If subject is opposed)"
    },
    {
        "Rank": "••",
        "Name": "The Ineffable Gift",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "Gains a +3 bonus in social challenges. Drawback of being less effective with multiple uses.",
        "Catch": "Speaks out loud about something she is passionate about",
        "Court Goodwill Requirement if not a member": "●●●",
        "Cost": "●",
        "Dice Pool": "Mantle + Presence + Manipulation vs Resolve + Composure"
    },
    {
        "Rank": "•••",
        "Name": "Impassioned Blow",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "+4 Bonus to attack pool, but the opponent gets a +2 bonus as well.",
        "Catch": "Target has insulted or assaulted by word or deed the changeling in the last hour",
        "Court Goodwill Requirement if not a member": "●●●●",
        "Cost": "●",
        "Dice Pool": "Mantle + Resolve + Brawl / Firearms / Weaponry"
    },
    {
        "Rank": "••••",
        "Name": "Spur the Crowd",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "Sway a crowd in a certain emotional direction",
        "Catch": "No one in the crowd knows the user is a changeling",
        "Court Goodwill Requirement if not a member": "●●●●●",
        "Cost": "●",
        "Dice Pool": "Mantle + Wyrd + Presence (Extended and Contested)"
    },
    {
        "Rank": "•••••",
        "Name": "Verdant, Roiling Heart",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "Renew Willpower pool as if fulfilling Virtue, drawback of all social actions being tainted by her virtue or vice and a -2 to all social rolls",
        "Catch": "Takes an action directly related to virtue or vice",
        "Court Goodwill Requirement if not a member": "-",
        "Cost": "●",
        "Dice Pool": "Mantle + Composure + Empathy"
    },
]

const summerCourtContractsData = [
    {
        "Rank": "Contracts of Eternal Summer",
        "Name": "N/A",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "N/A",
        "Catch": "N/A",
        "Court Goodwill Requirement if not a member": "Court Goodwill (Summer)",
        "Cost": "N/A",
        "Dice Pool": "Lost 155"
    },
    {
        "Rank": "•",
        "Name": "Son of the Hearth",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "Remain at a comfortable temperature, no matter what the outside circumstances are.",
        "Catch": "Spit on a fading ember or spark",
        "Court Goodwill Requirement if not a member": "Waived",
        "Cost": "●(○)",
        "Dice Pool": "Wyrd + Survival"
    },
    {
        "Rank": "••",
        "Name": "Ulf’s Heart",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "Produce light in radius pf 200 yards for one scene; extend its presence to one hour by spending 1 more Glamour.",
        "Catch": "Within 5 minutes of midnight",
        "Court Goodwill Requirement if not a member": "●●●",
        "Cost": "●(●)",
        "Dice Pool": "Mantle + Strength + Occult"
    },
    {
        "Rank": "•••",
        "Name": "Noonday Grasp",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "Gain +1 Strength with one success, and another +1 with every three successes after that.",
        "Catch": "Eats a chunk of naturally formed ice",
        "Court Goodwill Requirement if not a member": "●●●●",
        "Cost": "●●",
        "Dice Pool": "Mantle + Stamina + Brawl"
    },
    {
        "Rank": "••••",
        "Name": "Solstice Revelation",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "Let loose a bright light that reveals all hidden individuals and challenges supernatural cloaking.",
        "Catch": "Within five minuets of noon",
        "Court Goodwill Requirement if not a member": "●●●●●",
        "Cost": "●●●",
        "Dice Pool": "Mantle + Presence + Occult"
    },
    {
        "Rank": "•••••",
        "Name": "The Lord’s Dread Gaze",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "Unleashing a beam of focused sunlight that does Lethal (Aggravated with Willpower)",
        "Catch": "The target is wearing or touching gold",
        "Court Goodwill Requirement if not a member": "-",
        "Cost": "●●●(○)",
        "Dice Pool": "Mantle + Dexterity + Athletics - Subject's Defense"
    },
    {
        "Rank": "Contracts of Fleeting Summer",
        "Name": "N/A",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "N/A",
        "Catch": "N/A",
        "Court Goodwill Requirement if not a member": "Court Goodwill (Summer)",
        "Cost": "N/A",
        "Dice Pool": "Lost 153"
    },
    {
        "Rank": "•",
        "Name": "Baleful Sense",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "Sense the greatest nearby source of wrath.",
        "Catch": "Character is angry when he invokes this clause.",
        "Court Goodwill Requirement if not a member": "Waived",
        "Cost": "●",
        "Dice Pool": "Wyrd + Wits"
    },
    {
        "Rank": "••",
        "Name": "Goblin’s Malignance",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "Redirect the focus of a subject's wrath.",
        "Catch": "The current victim of the subject's wrath owes the character a favor, or the subject has red hair.",
        "Court Goodwill Requirement if not a member": "●●●",
        "Cost": "●",
        "Dice Pool": "Mantle + Manipulation + Persuasion vs Powerstat + Composure"
    },
    {
        "Rank": "•••",
        "Name": "Friendless Tongue",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "Stir a person to fury with harmless words.",
        "Catch": "The clause's target wears a ring on the left hand.",
        "Court Goodwill Requirement if not a member": "●●●●",
        "Cost": "●●",
        "Dice Pool": "Mantle + Manipulation + Subterfuge vs Powerstat + Composure"
    },
    {
        "Rank": "••••",
        "Name": "Sundown Eyes",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "Quell all conflict in an area temporarily.",
        "Catch": "The character is suffering wound penalties and has taken at least two points of lethal damage.",
        "Court Goodwill Requirement if not a member": "●●●●●",
        "Cost": "●●●",
        "Dice Pool": "Mantle + Presence + Socialize - Subject's Composure"
    },
    {
        "Rank": "•••••",
        "Name": "The Flames of Summer",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "Enter an unstoppable fury; gain +2 to Physical rolls and ignore all wound penalties.",
        "Catch": "The sun is within five minutes of its zenith, and the character has called out a formal challenge to an opponent.",
        "Court Goodwill Requirement if not a member": "-",
        "Cost": "●●○",
        "Dice Pool": "Mantle + Stamina + Animal Ken"
    },
    {
        "Rank": "Contracts of Punishing Summer",
        "Name": "N/A",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "N/A",
        "Catch": "N/A",
        "Court Goodwill Requirement if not a member": "Court Goodwill (Summer)",
        "Cost": "N/A",
        "Dice Pool": "Lords of Summer 59"
    },
    {
        "Rank": "•",
        "Name": "Smoldergrip",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "Makes an object unbearably hot to the touch.",
        "Catch": "The Changeling sports a real sunburn",
        "Court Goodwill Requirement if not a member": "None",
        "Cost": "●",
        "Dice Pool": "Strength + Wits - Objects Size"
    },
    {
        "Rank": "••",
        "Name": "Battle Bright",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "Creates a blinding beacon that distracts all attackers.",
        "Catch": "The Changeling is holding a real, burning torch.",
        "Court Goodwill Requirement if not a member": "●●●",
        "Cost": "●●",
        "Dice Pool": "Wyrd + Presence vs Highest Wits + Composure within sight."
    },
    {
        "Rank": "•••",
        "Name": "Crown of Clashing Fire",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "Summons up a ring of flaming thorns that forces a target into one-on-one combat.",
        "Catch": "The Changeling has one or more scars from the last battle with this foe.",
        "Court Goodwill Requirement if not a member": "●●●●",
        "Cost": "●●○",
        "Dice Pool": "Wyrd + Resolve - Subject's Stamina"
    },
    {
        "Rank": "••••",
        "Name": "Baleful Stroke of Summer Sun",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "Inflicts a sun stroke on the target, resulting in either mounting mechanical penalties or aggravated damage (target's choice).",
        "Catch": "The Changeling strikes with a metal weapon he forged, has to hit with substantial metal part.",
        "Court Goodwill Requirement if not a member": "●●●●●",
        "Cost": "●●●",
        "Dice Pool": "Wyrd + Stamina vs Stamina + Composure. This is after an attack."
    },
    {
        "Rank": "•••••",
        "Name": "Scorched Earth",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "Turns the area into a blighted waste land that inflicts penalties on all combatants.",
        "Catch": "The Changeling meditates under a Summer Court flag or pendant she helped make.",
        "Court Goodwill Requirement if not a member": "N/A",
        "Cost": "●●●●●",
        "Dice Pool": "Wyrd + Strength"
    },
]

const autumnCourtContractsData = [
    {
        "Rank": "Contracts of Eternal Autumn",
        "Name": "N/A",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "N/A",
        "Catch": "N/A",
        "Court Goodwill Requirement if not a member": "Court Goodwill (Autumn)",
        "Cost": "N/A",
        "Dice Pool": "Lost 159"
    },
    {
        "Rank": "•",
        "Name": "Last Breath Isaac",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "Ripen a portion of a plant",
        "Catch": "The plant or tree is unclaimed or the Changeling has permission to harvest from it.",
        "Court Goodwill Requirement if not a member": "Waived",
        "Cost": "●",
        "Dice Pool": "Wyrd + Manipulation"
    },
    {
        "Rank": "••",
        "Name": "Withering Glare",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "Wither a plant to Winter or age an animal.",
        "Catch": "The plant has the Changelings name or moniker carved into it or written on a tag.",
        "Court Goodwill Requirement if not a member": "●●●",
        "Cost": "●",
        "Dice Pool": "Mantle + Presence + Science"
    },
    {
        "Rank": "•••",
        "Name": "Brother to the Ague",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "Damage a foe through dehydration.",
        "Catch": "The character can name two diseases that the subject has suffered or is suffering, and one that the subject fears.",
        "Court Goodwill Requirement if not a member": "●●●●",
        "Cost": "●●",
        "Dice Pool": "Mantle + Dexterity + Medicine"
    },
    {
        "Rank": "••••",
        "Name": "Riding the Falling Leaves",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "Transform into a cloud of autumn leaves",
        "Catch": "The character catches a naturally falling leaf at the moment of the clause's activation.",
        "Court Goodwill Requirement if not a member": "●●●●●",
        "Cost": "●●",
        "Dice Pool": "Mantle + Dexterity + Survival"
    },
    {
        "Rank": "•••••",
        "Name": "Tears of Autumn",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "Bring about a hailstorm",
        "Catch": "The character holds a key encased in ice that finishes thawing at the start of the ritual.",
        "Court Goodwill Requirement if not a member": "-",
        "Cost": "●●●",
        "Dice Pool": "Mantle + Manipulation + Occult"
    },
    {
        "Rank": "Contracts of Fleeting Autumn",
        "Name": "N/A",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "N/A",
        "Catch": "N/A",
        "Court Goodwill Requirement if not a member": "Court Goodwill (Autumn)",
        "Cost": "N/A",
        "Dice Pool": "Lost 156"
    },
    {
        "Rank": "•",
        "Name": "Witches’ Intuition",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "Learn one of the subject's fears",
        "Catch": "Subject does not know the Changelings name",
        "Court Goodwill Requirement if not a member": "Waived",
        "Cost": "●",
        "Dice Pool": "Wyrd + Wits - Composure"
    },
    {
        "Rank": "••",
        "Name": "Tale of the Baba Yaga",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "Invoke fear of intended object in subjects for 1 turn per success.",
        "Catch": "The unnatural fear the character evokes is based upon a myth, urban legend or actual threat with which all subjects of the Contract are familiar.",
        "Court Goodwill Requirement if not a member": "●●●",
        "Cost": "●",
        "Dice Pool": "Mantle + Manipulation + Intimidation"
    },
    {
        "Rank": "•••",
        "Name": "Heart of the Antlion",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "Immune to mundane attempts at fear and resistant to supernatural fear.",
        "Catch": "The character consumes a spider or other vermin that has literally been scared to death.",
        "Court Goodwill Requirement if not a member": "●●●●",
        "Cost": "●",
        "Dice Pool": "Mantle + Resolve + Investigation"
    },
    {
        "Rank": "••••",
        "Name": "Scent of the Harvest",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "Heart of the Antlion for friends.",
        "Catch": "Two of the subjects greatest fears are each other.",
        "Court Goodwill Requirement if not a member": "●●●●●",
        "Cost": "●●",
        "Dice Pool": "Mantle + Presence + Expression, Extended"
    },
    {
        "Rank": "•••••",
        "Name": "Mien of the Baba Yaga",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "Become the subjects fear. Scare them badly enough to actually deal damage",
        "Catch": "One of the subjects greatest fears is actually the character.",
        "Court Goodwill Requirement if not a member": "-",
        "Cost": "●●●○",
        "Dice Pool": "Mantle + Wits + Empathy"
    },
    {
        "Rank": "Contracts of Spellbound Autumn",
        "Name": "N/A",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "N/A",
        "Catch": "N/A",
        "Court Goodwill Requirement if not a member": "Court Goodwill (Autumn)",
        "Cost": "N/A",
        "Dice Pool": "Lords of Summer 79"
    },
    {
        "Rank": "•",
        "Name": "Warlock’s Gaze",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "Detect the presence of the supernatural, even deliberately obscured. AoE: Yards = to Wyrd",
        "Catch": "Physical contact with non-allied supernatural being other than another changeling.",
        "Court Goodwill Requirement if not a member": "Waived",
        "Cost": "●●",
        "Dice Pool": "Wyrd + Occult (vs. Powerstat + Compusure if target supernaturally concealed)"
    },
    {
        "Rank": "••",
        "Name": "Barrow-Whisper",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "Hears and is heard by ghosts.",
        "Catch": "Ghost in the area wants to communicate.",
        "Court Goodwill Requirement if not a member": "●●●",
        "Cost": "●",
        "Dice Pool": "Wyrd + Expression"
    },
    {
        "Rank": "•••",
        "Name": "Smith’s Wisdom",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "Learn abilities and purpose of item of power (token or else).",
        "Catch": "The character has stolen the item from a friend (without permission) or been freely given the item by an enemy.",
        "Court Goodwill Requirement if not a member": "●●●●",
        "Cost": "●●●",
        "Dice Pool": "Mantle + Intelligence + Occult"
    },
    {
        "Rank": "••••",
        "Name": "Arcadian Commandment",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "Power to speak with authority of True Fae to hobgoblins and other Gentry minions, even to those incapable of speech.",
        "Catch": "Character knowingly comes unarmed and unarmored to the presence of entity to be commanded.",
        "Court Goodwill Requirement if not a member": "●●●●●",
        "Cost": "●●●○",
        "Dice Pool": "Wyrd + Presence vs Powerstat + Resolve"
    },
    {
        "Rank": "•••••",
        "Name": "Oathbreaker’s Honesty",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "Violate the pledge without falling under its Sanctions.",
        "Catch": "Begged to enact this clause by someone who will knowingly come to disaster on account of his betrayal.",
        "Court Goodwill Requirement if not a member": "-",
        "Cost": "●●●●●○",
        "Dice Pool": "Wyrd + Resolve (extended)"
    }
]

const winterCourtContractsData = [
    {
        "Rank": "Contracts of Eternal Winter",
        "Name": "N/A",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "N/A",
        "Catch": "N/A",
        "Court Goodwill Requirement if not a member": "Court Goodwill (Winter)",
        "Cost": "N/A",
        "Dice Pool": "Lost 162"
    },
    {
        "Rank": "•",
        "Name": "Jack’s Breath",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "Cools a room, potentially by a significant margin.",
        "Catch": "The character hears someone shiver or tastes someones sweat.",
        "Court Goodwill Requirement if not a member": "Waived",
        "Cost": "●",
        "Dice Pool": "Wyrd + Survival"
    },
    {
        "Rank": "••",
        "Name": "Touch of Winter",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "Freeze the surface of a body of water, potentially affecting quite a large area.",
        "Catch": "The character first spells out a name or idea he hates with liquid on a dry surface",
        "Court Goodwill Requirement if not a member": "●●●",
        "Cost": "●",
        "Dice Pool": "Mantle + Intelligence + Science"
    },
    {
        "Rank": "•••",
        "Name": "Riding the Devil’s Jawbone",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "Inflicts an area with intense cold, causing penalties to all within.",
        "Catch": "There is a bell ringing within 20 feet of the character.",
        "Court Goodwill Requirement if not a member": "●●●●",
        "Cost": "●●",
        "Dice Pool": "Mantle + Dexterity + Stealth"
    },
    {
        "Rank": "••••",
        "Name": "Fallen from the Timbers",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "Blasts a target with cold and ice, inflicting lethal damage and penalizing all of their actions.",
        "Catch": "The contracts target is wearing silver jewelry that has a religious meaning to her.",
        "Court Goodwill Requirement if not a member": "●●●●●",
        "Cost": "●●●",
        "Dice Pool": "Mantle + Dexterity + Athletics - Subject's Defense"
    },
    {
        "Rank": "•••••",
        "Name": "Witch’s Paradise",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "Summons a lasting snowstorm over an area.",
        "Catch": "The moon is in the sky and the character can hear a wolf howling.",
        "Court Goodwill Requirement if not a member": "-",
        "Cost": "●●●○",
        "Dice Pool": "Mantle + Presence + Occult"
    },
    {
        "Rank": "Contracts of Fleeting Winter",
        "Name": "N/A",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "N/A",
        "Catch": "N/A",
        "Court Goodwill Requirement if not a member": "Court Goodwill (Winter)",
        "Cost": "N/A",
        "Dice Pool": "Lost 160"
    },
    {
        "Rank": "•",
        "Name": "The Dragon Knows",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "Determine the source of sorrow someone is experiencing.",
        "Catch": "The character looks into the subjects eyes for a moment.",
        "Court Goodwill Requirement if not a member": "Waived",
        "Cost": "●",
        "Dice Pool": "Wyrd + Empathy - Subject's Composure"
    },
    {
        "Rank": "••",
        "Name": "Slipknot Dreams",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "Forces a subject to temporarily let go of their sorrow.",
        "Catch": "The subject has accepted something from the character in the past 24 hours.",
        "Court Goodwill Requirement if not a member": "●●●",
        "Cost": "●",
        "Dice Pool": "Mantle + Manipulation + Subterfuge - Subject's Resolve"
    },
    {
        "Rank": "•••",
        "Name": "Faces in the Water",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "Fills a subject with sorrow over a painful memory, inflicting social penalties.",
        "Catch": "The subject is carrying a photograph or some other image of an older relative or ancestor on her person.",
        "Court Goodwill Requirement if not a member": "●●●●",
        "Cost": "●",
        "Dice Pool": "Mantle + Intelligence + Investigation - Subject's Composure"
    },
    {
        "Rank": "••••",
        "Name": "Fallow Fields, Empty Harvest",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "Eliminates a subject's ability to feel positive emotions for a time, suffering social penalties and an inability to regain Willpower via virtues or vices.",
        "Catch": "The character has made the subject happy (or happier) within the last 10 minutes.",
        "Court Goodwill Requirement if not a member": "●●●●●",
        "Cost": "●●",
        "Dice Pool": "Mantle + Manipulation + Intimidation vs Powerstat + Composure"
    },
    {
        "Rank": "•••••",
        "Name": "Every Sorrow a Jewel",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "Paralyzes a subject with grief, rendering them briefly unable to take any actions.",
        "Catch": "The subject has tasted one of the changelings tears.",
        "Court Goodwill Requirement if not a member": "-",
        "Cost": "●●●○",
        "Dice Pool": "Mantle + Manipulation + Persuasion vs Powerstat + Composure"
    },
    {
        "Rank": "Contracts of the Sorrow-Frozen Heart",
        "Name": "N/A",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "N/A",
        "Catch": "N/A",
        "Court Goodwill Requirement if not a member": "Court Goodwill (Winter)",
        "Cost": "N/A",
        "Dice Pool": "Lords of Summer 99"
    },
    {
        "Rank": "•",
        "Name": "A Mere Vessel for Loss",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "Reduce the Effects of pain and discomfort by success",
        "Catch": "Pierces skin with a thin needle",
        "Court Goodwill Requirement if not a member": "Waived",
        "Cost": "●",
        "Dice Pool": "Mantle + Resolve + Occult"
    },
    {
        "Rank": "••",
        "Name": "Fear is Nothing",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "Reduces dice pool of supernatural fear effects by Wyrd",
        "Catch": "Empties his hands and leaves them open at his side",
        "Court Goodwill Requirement if not a member": "●●●",
        "Cost": "●",
        "Dice Pool": "Mantle + Composure + Expression"
    },
    {
        "Rank": "•••",
        "Name": "Grief is Stronger than Death",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "Damage from an attack is ignored for a round, to be applied next round",
        "Catch": "Contemptuously tosses a chunk of cold iron on the ground.",
        "Court Goodwill Requirement if not a member": "●●●●",
        "Cost": "●●",
        "Dice Pool": "Mantle + Resolve + Survival"
    },
    {
        "Rank": "••••",
        "Name": "Remorseless Strike",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "Next Brawl or weaponry attack target suffers additional bonus damage equal to Wyrd",
        "Catch": "Slashes himself with a sharp instrument and takes 1 lethal",
        "Court Goodwill Requirement if not a member": "●●●●●",
        "Cost": "●●",
        "Dice Pool": "Mantle + Resolve + Brawl"
    },
    {
        "Rank": "•••••",
        "Name": "A Cold Hand on the Heart",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "Bestow previous clauses on others as well.",
        "Catch": "Clutches target with one hand and anoints with ashes of a suicide victim or victim of a crime of passion.",
        "Court Goodwill Requirement if not a member": "-",
        "Cost": "●●●○",
        "Dice Pool": "Mantle + Composure + Expression"
    }
]

const minorCourtContractData = [
    {
        "Rank": "Directional Court Contracts",
        "Name": "N/A",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "N/A",
        "Catch": "N/A",
        "Court Goodwill Requirement if not a member": "N/A",
        "Cost": "N/A",
        "Dice Pool": ""
    },
    {
        "Rank": "Contracts of the Four Directions",
        "Name": "N/A",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "N/A",
        "Catch": "N/A",
        "Court Goodwill Requirement if not a member": "Court Goodwill (Directional)",
        "Cost": "N/A",
        "Dice Pool": "Winter Masques 134"
    },
    {
        "Rank": "•",
        "Name": "Mindfinder",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "Know the direction to any target",
        "Catch": "Changeling has a lock of hair from the target.",
        "Court Goodwill Requirement if not a member": "None",
        "Cost": "●",
        "Dice Pool": "Wyrd + Survival - Subject's Wits"
    },
    {
        "Rank": "••",
        "Name": "Finding the Flow",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "Ignore environmental penalties",
        "Catch": "The character successfully meditated for one full uninterrupted hour within the last 24 hours.",
        "Court Goodwill Requirement if not a member": "●●●",
        "Cost": "●",
        "Dice Pool": "Wyrd + Wits"
    },
    {
        "Rank": "•••",
        "Name": "Inequity of the Center",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "Confuses a target, causing them to take many wrong turns, effectively penalizing speed",
        "Catch": "The changeling succeeds in touching a magnet to the target's bare skin.",
        "Court Goodwill Requirement if not a member": "●●●●",
        "Cost": "●",
        "Dice Pool": "Wyrd + Manipulation vs Powerstat + Survival"
    },
    {
        "Rank": "••••",
        "Name": "The Hundred Steps",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "Powerful blessing upon an area to protect it from intruders",
        "Catch": "The character has two working compasses somewhere on his body",
        "Court Goodwill Requirement if not a member": "●●●●●",
        "Cost": "●●○",
        "Dice Pool": "Wyrd + Resolve"
    },
    {
        "Rank": "•••••",
        "Name": "Harmony of Portals",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "Walk between two doors, potentially separated by several miles",
        "Catch": "The character possesses the key to both doors.",
        "Court Goodwill Requirement if not a member": "N/A",
        "Cost": "●●",
        "Dice Pool": "Wyrd + Stamina"
    },
    {
        "Rank": "Auroral Court Contracts",
        "Name": "N/A",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "N/A",
        "Catch": "N/A",
        "Court Goodwill Requirement if not a member": "N/A",
        "Cost": "N/A",
        "Dice Pool": ""
    },
    {
        "Rank": "Contracts of Potential (Dawn)",
        "Name": "N/A",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "N/A",
        "Catch": "N/A",
        "Court Goodwill Requirement if not a member": "Court Goodwill (Dawn)",
        "Cost": "N/A",
        "Dice Pool": "Swords at Dawn 138"
    },
    {
        "Rank": "•",
        "Name": "Light the Path",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "Learn of the motivation of an action or statement",
        "Catch": "Previously caught the target in a lie.",
        "Court Goodwill Requirement if not a member": "None",
        "Cost": "●",
        "Dice Pool": "Wits + Wyrd vs Powerstat + Composure"
    },
    {
        "Rank": "••",
        "Name": "Read the Web",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "Determine the nature of a relationship between two people through a translucent strand that connects.",
        "Catch": "The Changeling shares a Pledge with the target",
        "Court Goodwill Requirement if not a member": "●●●",
        "Cost": "●●",
        "Dice Pool": "Intelligence + Wyrd - Subject's Composure"
    },
    {
        "Rank": "•••",
        "Name": "Martyr's Will",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "Increase extra dice when spending Willpower. Drawback of target being unable to regain willpower for the next 24 hours.",
        "Catch": "Deliberately shed a few drops of blood",
        "Court Goodwill Requirement if not a member": "●●●●",
        "Cost": "●●●",
        "Dice Pool": "Wyrd + Resolve"
    },
    {
        "Rank": "••••",
        "Name": "Shift the Foundation",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "Temporarily change the targets Virtue or Vice.",
        "Catch": "Changeling and Subject are conversing about Virtue or Vice targeted as the result of the Contract.",
        "Court Goodwill Requirement if not a member": "●●●●●",
        "Cost": "●●●",
        "Dice Pool": "Dusk Court Mantle +\n                Manipulation + Expression vs Composure + Subterfuge"
    },
    {
        "Rank": "•••••",
        "Name": "Tenacity of Hope",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "Massive benefits towards a goal, such as 8-again, etc. Drawback: If goal is not reached within time period, suffer penalties until goal or equal time is met.",
        "Catch": "Target is using this Contract for a selfless Purpose.",
        "Court Goodwill Requirement if not a member": "N/A",
        "Cost": "●●●○",
        "Dice Pool": "Wyrd + Resolve"
    },
    {
        "Rank": "Contracts of Entropy",
        "Name": "N/A",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "N/A",
        "Catch": "N/A",
        "Court Goodwill Requirement if not a member": "N/A",
        "Cost": "N/A",
        "Dice Pool": "N/A"
    },
    {
        "Rank": "(Dusk)",
        "Name": "N/A",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "N/A",
        "Catch": "N/A",
        "Court Goodwill Requirement if not a member": "Court Goodwill (Dusk)",
        "Cost": "Cost",
        "Dice Pool": "Dancers in the Dusk 141"
    },
    {
        "Rank": "•",
        "Name": "Babel's Curse",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "Prevent another from communicating",
        "Catch": "Write target's name or common nickname on a piece of paper then tear it to pieces",
        "Court Goodwill Requirement if not a member": "None",
        "Cost": "●",
        "Dice Pool": "Intelligence + Expression + Mantle (Dusk) - Resolve"
    },
    {
        "Rank": "••",
        "Name": "Sense the Impending Doom",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "Detect dangerous situations, react to danger faster",
        "Catch": "Consume at least a serving of caffeinated beverage within the last hour.",
        "Court Goodwill Requirement if not a member": "●●●",
        "Cost": "●",
        "Dice Pool": "Wits + Occult + Mantle (Dusk)"
    },
    {
        "Rank": "•••",
        "Name": "Gift of the Skald",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "Target(s) gain a bonus to Resolve checks",
        "Catch": "Invoker is a member of Dusk and spends at least 5 minutes proselytizing on the Dusk philosophy.",
        "Court Goodwill Requirement if not a member": "●●●●",
        "Cost": "● per target + ○",
        "Dice Pool": "Presence + Persuasion + Mantle (Dusk) (vs target's Resolve + Wyrd if they WANT to resist)"
    },
    {
        "Rank": "••••",
        "Name": "Hero's Stand",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "Challenge a target to gain a bonus to Brawl/Weaponry, they take Composure penalty if flee",
        "Catch": "Issue challenge while standing in a marked space <5' square.",
        "Court Goodwill Requirement if not a member": "●●●●●",
        "Cost": "●○",
        "Dice Pool": "Resolve + Brawl or Weaponry + Mantle (Dusk) vs Composure + Wyrd"
    },
    {
        "Rank": "•••••",
        "Name": "The Centre Cannot Stand",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "Nullify a target's Contract",
        "Catch": "The Changeling knows and has used the target Contract in the last 24 hours.",
        "Court Goodwill Requirement if not a member": "N/A",
        "Cost": "●●",
        "Dice Pool": "Intelligence + Occult + Mantle (Dusk) - level of Contract"
    }
]

const goblinContractData = [
    {
        "Rank": "Contracts of Goblin Fortune",
        "Name": "N/A",
        "Benefit": "N/A",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Drawback": "N/A",
        "Catch": "N/A",
        "Cost": "N/A",
        "Dice Pool": "N/A",
        "Book": "Rites of Spring 117"
    },
    {
        "Rank": "•",
        "Name": "Fortune’s Favor",
        "Benefit": "Change a single roll into a rote or a chance roll",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Drawback": "Expensive cost to invoke. Must spend a willpower dot.",
        "Catch": "Used to protect a close friend from harm",
        "Cost": "●",
        "Dice Pool": "Wyrd + Manipulation",
        "Book": "RoS 117"
    },
    {
        "Rank": "••",
        "Name": "Fortune’s Swift Blessing",
        "Benefit": "Change a chance roll into a normal roll or a normal roll into an exceptional success",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Drawback": "Expensive cost to invoke. Must spend a willpower dot.",
        "Catch": "Used when striking a blow against a mortal enemy",
        "Cost": "●●",
        "Dice Pool": "Wyrd + Wits",
        "Book": "RoS 117"
    },
    {
        "Rank": "•••",
        "Name": "Fortune’s Bane",
        "Benefit": "Exceptional success become normal successes, normal successes become failures and chance rolls dramatically fail at 7 or lower until the next sunrise or sunset",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Drawback": "Expensive cost to invoke. Must spend a willpower dot.",
        "Catch": "Target publicly lied about the user to turn public or official opinion against the user",
        "Cost": "●●",
        "Dice Pool": "Wyrd + Subterfuge vs. Powerstat + Resolve",
        "Book": "RoS 118"
    },
    {
        "Rank": "••••",
        "Name": "Distracting the Hounds",
        "Benefit": "Escape from any pursuit or confrontation",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Drawback": "Expensive cost to invoke. Must spend a willpower dot.",
        "Catch": "User is being pursued by Hobgoblins",
        "Cost": "●●●",
        "Dice Pool": "Wyrd + Stealth - Subject's Powerstat",
        "Book": "RoS 118"
    },
    {
        "Rank": "•••••",
        "Name": "Recalling the Lost",
        "Benefit": "Rescue anyone abducted by the Fae",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Drawback": "Expensive cost to invoke. Must spend 2 willpower dots.",
        "Catch": "Used to recall a child younger than seven",
        "Cost": "●●●●",
        "Dice Pool": "Wyrd + Occult",
        "Book": "RoS 119"
    },
    {
        "Rank": "Contracts of Goblin Transformation",
        "Name": "N/A",
        "Benefit": "N/A",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Drawback": "N/A",
        "Catch": "N/A",
        "Cost": "N/A",
        "Dice Pool": "N/A",
        "Book": "Rites of Spring 120"
    },
    {
        "Rank": "•",
        "Name": "Healing Sacrifice",
        "Benefit": "Heals any and all wounds or diseases",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Drawback": "Expensive cost to invoke. Must spend a willpower dot.",
        "Catch": "Used to heal or cure a blood relative",
        "Cost": "●",
        "Dice Pool": "Wyrd + Medicine",
        "Book": "RoS 120"
    },
    {
        "Rank": "••",
        "Name": "Seven-Year Gift",
        "Benefit": "Target does not age for the next seven years",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Drawback": "Expensive cost to invoke. Must spend a willpower dot.",
        "Catch": "Target is a blood relative within three generations",
        "Cost": "●●",
        "Dice Pool": "Wyrd + Stamina",
        "Book": "RoS 121"
    },
    {
        "Rank": "•••",
        "Name": "Trading Beauty for Love",
        "Benefit": "Makes a human feel more positively towards the Changeling",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Drawback": "Expensive cost to invoke. Changeling permanently loses the color of his eyes and his beauty, becoming bland and colorless (Though never ugly) or downgrading Striking Looks merit.",
        "Catch": "Target must be fed an item of food the user prepared",
        "Cost": "●●●",
        "Dice Pool": "Wyrd + Manipulation -Subject's Composure",
        "Book": "RoS 121"
    },
    {
        "Rank": "••••",
        "Name": "Changing Minds",
        "Benefit": "Change a target's opinion on something",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Drawback": "Expensive cost to invoke. Must spend a resolve dot.",
        "Catch": "Causes someone to believe an abstract ideal",
        "Cost": "●●●●○○",
        "Dice Pool": "Wyrd + Persuasion - Subject's Powerstat + Resolve",
        "Book": "RoS 122"
    },
    {
        "Rank": "•••••",
        "Name": "The Fatal Transformation",
        "Benefit": "Kill the target",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Drawback": "Expensive cost to invoke. Must spend a stamina dot.",
        "Catch": "Target has slain one of the user's blood relatives",
        "Cost": "●●●○",
        "Dice Pool": "Wyrd + Intimidation vs. Powerstat + Stamina",
        "Book": "RoS 123"
    },
    {
        "Rank": "Goblin Contracts of the Wyrd",
        "Name": "N/A",
        "Benefit": "N/A",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Drawback": "N/A",
        "Catch": "N/A",
        "Cost": "N/A",
        "Dice Pool": "N/A",
        "Book": "Dancers in the Dusk 65"
    },
    {
        "Rank": "•",
        "Name": "Mantle Mask",
        "Benefit": "Temporarily disguise your Mantle as another Court's",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Drawback": "Signs of use remain for twice as long as the disguised mantle.",
        "Catch": "The decorates her skin with a sign appropriate to the Court she is disguising herself as.",
        "Cost": "●",
        "Dice Pool": "Wyrd + Occult",
        "Book": "DiD 65"
    },
    {
        "Rank": "••",
        "Name": "Daunting Force",
        "Benefit": "The Changeling becomes intimidating to the subject",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Drawback": "All Glamour costs are increased by one for 24 hours.",
        "Catch": "Brandishing a drawn weapon.",
        "Cost": "●●",
        "Dice Pool": "Wyrd + Presence - Composure",
        "Book": "DiD 66"
    },
    {
        "Rank": "•••",
        "Name": "Nothing Hidden",
        "Benefit": "While the Contract is active, the Changeling may roll to notice supernaturally concealed things.",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Drawback": "Significant negative Perception modifiers to the following scene.",
        "Catch": "Burn the feather of a keen sighted bird and rub the ashes on your eyelid.",
        "Cost": "●●",
        "Dice Pool": "Wyrd + Occult",
        "Book": "DiD 66"
    },
    {
        "Rank": "••••",
        "Name": "Wyrd Eye",
        "Benefit": "Automatically become aware of any Contracts nearby. Ignore low Clarity modifiers to noticing Wyrd related phenomena and gain a bonus to Kenning",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Drawback": "All Perception for things unrelated to the Wyrd is penalized.",
        "Catch": "Breaks a pair of prescription glasses.",
        "Cost": "●●",
        "Dice Pool": "Wyrd + Occult",
        "Book": "DiD 67"
    },
    {
        "Rank": "•••••",
        "Name": "The Fatal Clause",
        "Benefit": "Block a Contract as it is being activated.",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Drawback": "Pay the cost of the Clause you are attempting to block.",
        "Catch": "The Changeling has been a target of a Contract cast by the subject in the past 24 hours.",
        "Cost": "●●○",
        "Dice Pool": "Wyrd + Occult - Subject's Wyrd",
        "Book": "DiD 68"
    }
]

const unclassifiedGoblinContractData = [
    {
        "Name": "•",
        "Benefit": "Contracts",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Drawback": "N/A",
        "Catch": "N/A",
        "Cost": "N/A",
        "Dice Pool": "N/A",
        "Book": "N/A"
    },
    {
        "Name": "Shooter’s Bargain",
        "Benefit": "Blesses the next three shots fired from a weapon to mitigate penalties when attacking.",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Drawback": "One of the three shots is automatically reduced to a chance die.",
        "Catch": "In a fight scheduled beforehand.",
        "Cost": "●",
        "Dice Pool": "Wyrd + Dexterity",
        "Book": "CtL 164"
    },
    {
        "Name": "Sight of Truth and Lies",
        "Benefit": "Gain the ability to instantly tell if a person is lying.",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Drawback": "If the user lies while the contract is active, however, they lose any ability to tell truth from lies, believing all but the most blatant fabrications.",
        "Catch": "Used at an official occasion",
        "Cost": "●",
        "Dice Pool": "Wyrd + Subterfuge",
        "Book": "RoS 114"
    },
    {
        "Name": "Trading Luck for Fate",
        "Benefit": "Gain a sudden simple insight into the immediate future.",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Drawback": "This is done in return for a minor turn of bad luck.",
        "Catch": "Using the contract to win at gambling.",
        "Cost": "●",
        "Dice Pool": "Wyrd + Wits",
        "Book": "CtL 164"
    },
    {
        "Name": "••",
        "Benefit": "Contracts",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Drawback": "N/A",
        "Catch": "N/A",
        "Cost": "N/A",
        "Dice Pool": "N/A",
        "Book": "N/A"
    },
    {
        "Name": "Calling the Guardian",
        "Benefit": "Summon an invisible guardian that strikes back the instant you're attacked.",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Drawback": "The guardian can not distinguish between a blow that would actually do harm or a playful shove.",
        "Catch": "Currently suffering at least one lethal or aggravated damage from a hand-to-hand attack",
        "Cost": "●●",
        "Dice Pool": "Wyrd + Dexterity",
        "Book": "Rites of Spring 114"
    },
    {
        "Name": "Dream Rendering",
        "Benefit": "Upgrade a Token, permitting it to be used in dreams.",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Drawback": "Make a clarity roll at 5 dice when you next sleep, regardless of your current Clarity.",
        "Catch": "Used while naked.",
        "Cost": "●",
        "Dice Pool": "Wyrd + Wits",
        "Book": "SaD 109"
    },
    {
        "Name": "Diviner’s Madness",
        "Benefit": "Gains a brief glimmer into the past or future of a person, place, or thing.",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Drawback": "Causes temporary insanity.",
        "Catch": "Divining the past or future of someone the changeling is in love with.",
        "Cost": "●",
        "Dice Pool": "Wyrd + Wits",
        "Book": "Lost 165"
    },
    {
        "Name": "Fair Entrance",
        "Benefit": "Opens a door, no matter how it is barred.",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Drawback": "Causes one of the changeling's doors to be similarly opened for another some time soon.",
        "Catch": "Opening the door to someone who confessed his hatred towards the Changeling.",
        "Cost": "●",
        "Dice Pool": "Wyrd + Larceny",
        "Book": "Lost 165"
    },
    {
        "Name": "Fool’s Gold",
        "Benefit": "Guises an object to look like something else, potentially appearing quite valuable.",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Drawback": "This illusion lasts only for a time though, and when it expires the deceived parties automatically know who was responsible for the deception.",
        "Catch": "Clause is used to deceive someone who's lied to the Changeling in the last 24 hours.",
        "Cost": "●",
        "Dice Pool": "Wyrd + Manipulation",
        "Book": "Lost 166"
    },
    {
        "Name": "Sandman's Bargain",
        "Benefit": "Makes a dream immune to disruption by Oneiropomps",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Drawback": "The user can takes real Lethal damage when hurt inside the dream.",
        "Catch": "Used after staying awake for 24 hours",
        "Cost": "●",
        "Dice Pool": "Wyrd + Resolve",
        "Book": "SaD 110"
    },
    {
        "Name": "•••",
        "Benefit": "Contracts",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Drawback": "N/A",
        "Catch": "N/A",
        "Cost": "N/A",
        "Dice Pool": "N/A",
        "Book": "N/A"
    },
    {
        "Name": "The Blessing of Forgetfulness",
        "Benefit": "Allows the user to erase any one memory from the target's mind.",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Drawback": "Curses the user to suffer a dramatic failure on the next Subterfuge roll to get someone to believe a necessary lie.",
        "Catch": "Used to make the target forget about an event in which the user betrayed the target",
        "Cost": "●●○",
        "Dice Pool": "Wyrd + Manipulation - Subject's Composure",
        "Book": "RoS 115"
    },
    {
        "Name": "Burden of Life",
        "Benefit": "Removes damage starting at Agg by 2 for each success. Must be done within turns the damage was done by equal to user's wyrd.",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Drawback": "If you heal target for 4 or more damage, the user takes all damage the target would take in the next day instead.",
        "Catch": "Target was injured while saving the Character from harm.",
        "Cost": "●●",
        "Dice Pool": "Wyrd + Empathy",
        "Book": "CtL 166"
    },
    {
        "Name": "Delayed Harm",
        "Benefit": "The user avoids damage from one attack.",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Drawback": "The next attack they suffer doing lethal or aggravated damage does the previously avoided damage as a bonus.",
        "Catch": "Character is unarmed or otherwise unable to defend herself.",
        "Cost": "●●",
        "Dice Pool": "Wyrd + Dexterity",
        "Book": "CtL 167"
    },
    {
        "Name": "Goblin Midwife",
        "Benefit": "Grant a temporary increase in fertility to your target",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Drawback": "Curse of antipathy on you and a minor fae curse on the target's offspring",
        "Catch": "the target has broken your heart",
        "Cost": "●●○",
        "Dice Pool": "Wyrd + Empathy",
        "Book": "GobM p25"
    },
    {
        "Name": "Hospitality's Hold",
        "Benefit": "Gain bonus (equal to glamour spent) maintaining hospitality in a location, mark violators",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Drawback": "Take a similar penalty on all actions not related to maintaining hospitality, except against violators",
        "Catch": "Own or be primary resident of location",
        "Cost": "● to ●●●●●",
        "Dice Pool": "Willpower + Wyrd",
        "Book": "GotU p29"
    },
    {
        "Name": "Mirror Mirror",
        "Benefit": "The Changeling spies on another through a mirror,",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Drawback": "The target will see the Changeling when she next looks into a mirror.",
        "Catch": "The changeling breaks the mirror.",
        "Cost": "●○",
        "Dice Pool": "Wyrd + Resolve",
        "Book": "SaD 53"
    },
    {
        "Name": "••••",
        "Benefit": "Contracts",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Drawback": "N/A",
        "Catch": "N/A",
        "Cost": "N/A",
        "Dice Pool": "N/A",
        "Book": "N/A"
    },
    {
        "Name": "Goblin Oath",
        "Benefit": "The changeling can bind another character to an oath. The party taking the oath has difficulty breaking this oath, and if she does, disaster will strike her down.",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Drawback": "The changeling must also swear an oath to the subject and suffers similar penalties if he breaks his oath — but the nature of the Goblin Oath is such that both parties may suffer if only one is unfaithful.",
        "Catch": "Used when making a treaty of alliance or non-aggression",
        "Cost": "●●○",
        "Dice Pool": "Wyrd + Intimidation",
        "Book": "RoS 115"
    },
    {
        "Name": "Good and Bad Luck",
        "Benefit": "Accurately guess the outcome of an event that would be difficult to predict.",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Drawback": "Suffer a bout of bad lack afterwords.",
        "Catch": "Used to best a rival or enemy.",
        "Cost": "●●",
        "Dice Pool": "Wyrd + Wits",
        "Book": "CtL 167"
    },
    {
        "Name": "Call the Hunt",
        "Benefit": "Calls a Wild Hunt from out of the Hedge.",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Drawback": "Haha oh man what were you thinking? No seriously, nice going dumb ass! You deserve this.",
        "Catch": "Character is in the Hedge",
        "Cost": "●○",
        "Dice Pool": "Wyrd + Presence",
        "Book": "CtL 167"
    },
    {
        "Name": "Riot",
        "Benefit": "The crowd becomes a violent, enraged mob. They target an obvious source of anger first, or are randomly violent with no target.",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Drawback": "Many people in the area vividly remember the changeling and that they are responsible for the riot.",
        "Catch": "The changeling addresses the crowd and urges them to violence immediately before use. Most of the crowd must hear the changeling.",
        "Cost": "●●○",
        "Dice Pool": "Wyrd + Presence",
        "Book": "VL 23"
    },
    {
        "Name": "Royal Oil",
        "Benefit": "Target is covered in magical, highly flammable oil.",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Drawback": "Changeling is marked with a fiery crown showing he was the one that activated the contract.",
        "Catch": "Drink a tablespoon of castor oil and suffer from stomach cramps.",
        "Cost": "●●",
        "Dice Pool": "Wyrd + Dexterity",
        "Book": "SaD 54"
    },
    {
        "Name": "•••••",
        "Benefit": "Contracts",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Drawback": "N/A",
        "Catch": "N/A",
        "Cost": "N/A",
        "Dice Pool": "N/A",
        "Book": "N/A"
    },
    {
        "Name": "Blood-Binding",
        "Benefit": "Drains a target splashed with blood of all Glamour",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Drawback": "The user is drained of all Glamour as well.",
        "Catch": "Used against someone who murdered a blood relative. (Glamour expenditure is not negated)",
        "Cost": "○(All Glamour)",
        "Dice Pool": "Wyrd + Presence",
        "Book": "RoS 116"
    },
    {
        "Name": "Goblin Ward",
        "Benefit": "Draw a magical mark; Any changeling not attuned to it and steps near it will suffer from hallucinations and confusion. When the ward is activated it will affect everyone nearby, even those attuned. High Clarity Changelings must roll for loss.",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Drawback": "The creator cannot use his Seeming Blessing for as long as the ward continues to exist.",
        "Catch": "The ward is painted with the blood of a murdered enemy.",
        "Cost": "●●○",
        "Dice Pool": "Wyrd + Occult",
        "Book": "SaD 54"
    },
    {
        "Name": "Lost and Found",
        "Benefit": "Escapes from captivity or pursuit, seemingly by chance, but always automatically.",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Drawback": "Another enemy is made aware of the escapee's new location.",
        "Catch": "Escaping someone who knew the changeling personally for over a year.",
        "Cost": "●●○",
        "Dice Pool": "Wyrd + Presence",
        "Book": "CtL 168"
    },
    {
        "Name": "Mad Trespass",
        "Benefit": "Use a dream to spy on a Keeper",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Drawback": "The keeper spied on knows where to find you until the following dawn.",
        "Catch": "Given a gift by the keeper or it's servants.",
        "Cost": "●○",
        "Dice Pool": "Wyrd + Composure",
        "Book": "SaD 110"
    },
    {
        "Name": "Sabotage",
        "Benefit": "Damage or disable a factory or equivalent full of machinery.",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Drawback": "The changeling suffers a roll of their total Wyrd in bashing damage.",
        "Catch": "The user has been employed at some point to work on machines that they are targeting.",
        "Cost": "●●●○",
        "Dice Pool": "Wyrd + Crafts",
        "Book": "VL 24"
    },
    {
        "Name": "Sleepwalker",
        "Benefit": "Devour a dream for a verity of potent benefits",
        "Action": "",
        "FullDescription": [
            '',
            ''
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Drawback": "-3 to perception while the contract is active. The user cannot sleep and halves all traits until they can sleep.",
        "Catch": "Devours a child's dream",
        "Cost": "●○",
        "Dice Pool": "Wyrd + Wits",
        "Book": "SaD 111"
    }
]

const allContracts = [
    ...filtreArrayOfObjects(universalContractData, "Name", ["N/A", "•", "••", "•••", "••••", "•••••"]),
    ...filtreArrayOfObjects(beastlyContractsData, "Name", ["N/A", "•", "••", "•••", "••••", "•••••"]),
    ...filtreArrayOfObjects(darklingContractsData, "Name", ["N/A", "•", "••", "•••", "••••", "•••••"]),
    ...filtreArrayOfObjects(elementalContractsData, "Name", ["N/A", "•", "••", "•••", "••••", "•••••"]),
    ...filtreArrayOfObjects(fairestContractsData, "Name", ["N/A", "•", "••", "•••", "••••", "•••••"]),
    ...filtreArrayOfObjects(ogreishContractsData, "Name", ["N/A", "•", "••", "•••", "••••", "•••••"]),
    ...filtreArrayOfObjects(wizenedContractsData, "Name", ["N/A", "•", "••", "•••", "••••", "•••••"]),
    ...filtreArrayOfObjects(springCourtContractsData, "Name", ["N/A", "•", "••", "•••", "••••", "•••••"]),
    ...filtreArrayOfObjects(summerCourtContractsData, "Name", ["N/A", "•", "••", "•••", "••••", "•••••"]),
    ...filtreArrayOfObjects(autumnCourtContractsData, "Name", ["N/A", "•", "••", "•••", "••••", "•••••"]),
    ...filtreArrayOfObjects(winterCourtContractsData, "Name", ["N/A", "•", "••", "•••", "••••", "•••••"]),
    ...filtreArrayOfObjects(minorCourtContractData, "Name", ["N/A", "•", "••", "•••", "••••", "•••••", "Directional Court Contracts", "Auroral Court Contracts"]),
    ...filtreArrayOfObjects(goblinContractData, "Name", ["N/A", "•", "••", "•••", "••••", "•••••"]),
    ...filtreArrayOfObjects(unclassifiedGoblinContractData, "Name", ["N/A", "•", "••", "•••", "••••", "•••••"])
];

export {
    universalContractData, beastlyContractsData, darklingContractsData, elementalContractsData,
    fairestContractsData, ogreishContractsData, wizenedContractsData, springCourtContractsData,
    summerCourtContractsData, autumnCourtContractsData, winterCourtContractsData, minorCourtContractData,
    goblinContractData, unclassifiedGoblinContractData, allContracts
}

