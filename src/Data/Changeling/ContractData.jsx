import { filtreArrayOfObjects } from "../../utils"

const universalContractData = [
    {
        "Name": "Contracts of the Board",
        "Rank": "N/A",
        "FullCost": "N/A",
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
        "FullCost": "1 Glamour",
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
        "FullCost": "1 Glamour",
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
        "FullCost": "3 Glamour",
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
        "FullCost": "4 Glamour or 4 Glamour and 1 Willpower",
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
        "FullCost": "4 Glamour and 1 Willpower",
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
        "FullCost": "N/A",
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
        "FullCost": "1 Glamour",
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
        "FullCost": "1 Glamour",
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
        "FullCost": "1 Glamour",
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
        "FullCost": "1 Glamour",
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
        "FullCost": "1 Glamour",
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
        "FullCost": "N/A",
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
        "FullCost": "1 Glamour",
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
        "FullCost": "1 Glamour",
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
        "FullCost": "1 Glamour",
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
        "FullCost": "1 Glamour",
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
        "FullCost": "1 Glamour + 1 Willpower",
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
        "FullCost": "",
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
        "FullCost": "1 Glamour",
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
        "FullCost": "2 Glamour",
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
        "FullCost": "2 Glamour",
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
        "FullCost": "2 Glamour + 1 Willpower",
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
        "FullCost": "4 Glamour + 1 Willpower",
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
        "FullCost": "",
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
        "FullCost": "1 Glamour",
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
        "FullCost": "2 Glamour",
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
        "FullCost": "1 Glamour per level of Clarity rating “lent”(to a maximum of 3) + 1 Willpower",
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
        "FullCost": "3 Glamour",
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
        "FullCost": "3 Glamour + 1 Willpower",
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
        "FullCost": "",
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
        "FullCost": "1 Glamour",
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
        "FullCost": "1 Glamour",
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
        "FullCost": "1 Glamour",
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
        "FullCost": "1 Glamour",
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
        "FullCost": "1 Glamour",
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
        "FullCost": "N/A",
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
        "FullCost": "1 Glamour",
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
        "FullCost": "2 Glamour",
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
        "FullCost": "2 Glamour",
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
        "FullCost": "3 Glamour + 1 Willpower",
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
        "FullCost": "3 Glamour + 1 Willpower",
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
        "FullCost": "N/A",
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
        "FullCost": "1 Glamour",
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
        "FullCost": "1 Glamour, 2 Glamour if cast reflexively",
        "Cost": "●/●● if cast reflexively",
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
        "FullCost": "2 Glamour",
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
        "FullCost": "4 Glamour + 1 Willpower",
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
        "FullCost": "3 Glamour + 2 Willpower",
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
        "FullCost": "N/A",
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
        "FullCost": "1 Glamour",
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
        "FullCost": "1 Glamour",
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
        "FullCost": "1 Glamour",
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
        "FullCost": "1 Glamour",
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
        "FullCost": "2 Glamour",
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
        "FullCost": "1 Glamour + 1 Willpower",
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
        "FullCost": "N/A",
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
        "FullCost": "1 Glamour",
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
        "FullCost": "2 Glamour",
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
        "FullCost": "2 Glamour",
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
        "FullCost": "3 Glamour",
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
        "FullCost": "4 Glamour or 4 Glamour + 1 Willpower",
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
        "FullCost": "N/A",
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
        "FullCost": "1 Glamour",
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
        "FullCost": "1 Glamour",
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
        "FullCost": "2 Glamour",
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
        "FullCost": "2 Glamour",
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
        "FullCost": "3 Glamour + 1 Willpower",
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
        "FullCost": "N/A",
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
        "FullCost": "1 Glamour",
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
        "FullCost": "2 Glamour",
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
        "FullCost": "2 Glamour",
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
        "FullCost": "2 Glamour",
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
        "FullCost": "4 Glamour",
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
        "FullCost": "N/A",
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
        "FullCost": "1 Glamour",
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
        "FullCost": "1 Glamour",
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
        "FullCost": "2 Glamour",
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
        "FullCost": "3 Glamour",
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
        "FullCost": "3 Glamour + 1 Willpower",
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
        "FullCost": "N/A",
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
        "FullCost": "1 Glamour or 2 Glamour + 1 Willpower",
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
        "FullCost": "1 Glamour",
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
        "FullCost": "1 Glamour",
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
        "FullCost": "3 Glamour",
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
        "FullCost": "2 Glamour + 1 Willpower",
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
        "FullCost": "",
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
        "FullCost": "1 Glamour",
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
        "FullCost": "1 Glamour",
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
        "FullCost": "1 Glamour",
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
        "FullCost": "2 Glamour",
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
        "FullCost": "2 Glamour, 1 Willpower",
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
        "FullCost": "",
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
        "FullCost": "1 Glamour",
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
        "FullCost": "1 Glamour",
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
        "FullCost": "2 Glamour and (optional) 1 Willpower",
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
        "FullCost": "3 Glamour",
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
        "FullCost": "3 Glamour + 1 Willpower",
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
        "FullCost": "",
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
        "FullCost": "2 Glamour",
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
        "FullCost": "2 Glamour",
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
        "FullCost": "3 Glamour",
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
        "FullCost": "4 Glamour",
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
        "FullCost": "4 Glamour",
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
        "FullCost": "",
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
        "FullCost": "1 Glamour",
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
        "FullCost": "1 Glamour",
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
        "FullCost": "2 Glamour",
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
        "FullCost": "3 Glamour",
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
        "FullCost": "3 Glamour + 1 Willpower",
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
        "FullCost": "",
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
        "FullCost": "1 Glamour",
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
        "FullCost": "1 Glamour",
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
        "FullCost": "2 Glamour",
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
        "FullCost": "3 Glamour",
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
        "FullCost": "3 Glamour + 1 Willpower",
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
        "FullCost": "",
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
        "FullCost": "1 Glamour",
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
        "FullCost": "1 Glamour",
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
        "FullCost": "1 or 2 Glamour",
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
        "FullCost": "2 Glamour",
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
        "FullCost": "2 Glamour + 1 Willpower",
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
        "FullCost": "",
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
        "FullCost": "2 Glamour",
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
        "FullCost": "2 Glamour",
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
        "FullCost": "3 Glamour",
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
        "FullCost": "2 Glamour + 1 Willpower",
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
        "FullCost": "3 Glamour + 1 Willpower",
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
        "FullCost": "",
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
        "FullCost": "1 Glamour",
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
        "FullCost": "1 Glamour",
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
        "FullCost": "1 Glamour",
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
        "FullCost": "2 Glamour",
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
        "FullCost": "2 Glamour",
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
        "FullCost": "",
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
        "FullCost": "1 Glamour",
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
        "FullCost": "2 Glamour",
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
        "FullCost": "2 Glamour",
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
        "FullCost": "3 Glamour",
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
        "FullCost": "3 Glamour + 1 Willpower",
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
        "FullCost": "",
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
        "FullCost": "1 Glamour",
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
        "FullCost": "1 Glamour",
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
        "FullCost": "1 Glamour",
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
        "FullCost": "2 Glamour",
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
        "FullCost": "2 Glamour + 1 Willpower",
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
        "FullCost": "",
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
        "FullCost": "1 Glamour",
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
        "FullCost": "2 Glamour",
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
        "FullCost": "3 Glamour, or 3 Glamour + 1 Willpower",
        "Cost": "●●●/●●●○",
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
        "FullCost": "2 Glamour",
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
        "FullCost": "4 Glamour or 4 Glamour + 2 Willpower",
        "Cost": "●●●●(○○)",
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
        "FullCost": "",
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
        "FullCost": "1 Glamour",
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
        "FullCost": "2 Glamour",
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
        "FullCost": "2 Glamour + 1 Willpower",
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
        "FullCost": "3 Glamour +1 Willpower",
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
        "FullCost": "3 Glamour + 2 Willpower",
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
        "Rank": "N/A",
        "Name": "Contracts of Eternal Spring",
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
        "FullCost": "",
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
            '<b>Dramatic Failure:</b> The subject suffers starvation and fatigue as if he had been without food and sleep for a number of days equal to the changeling’s Wyrd, and without water for half that long. (See the World of Darkness Rulebook, pp. 175-176 and 179-180, for information on such things.) For things that can endure longer periods of deprivation without penalty, increase the base time until they are adversely affected (cacti, for example).',
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
        "FullCost": "1 Glamour",
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
        "FullCost": "1 Glamour",
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
        "FullCost": "1 Glamour + 1 Willpower",
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
        "FullCost": "1 Glamour or 3 Glamour + 1 Willpower dot",
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
            '<b>Success:</b> Plants around the changeling grow at an extraordinary rate, quickly enough for vines, roots and the like to grow around people and entangle them. Each turn, the character may designate one grapple attack on any creature or target within 10 feet of a plant in her sight in addition to her normal action. She may sacrifice her normal action to designate two grapple attacks, and if she does that she may also sacrifice her Defense for a third. Plant grapple attacks use a dice pool of the changeling’s Wyrd + 1-3 equipment bonus for the plant (vines are excellent, branches less so). This lasts a number of turns equal to the changeling’s Wyrd rating. Over the next hour, all but one  year’s worth of the new growth dies off.',
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
        "FullCost": "3 Glamour + 1 Willpower",
        "Cost": "●●●○",
        "Dice Pool": "Mantle + Presence + Empathy"
    },
    {
        "Rank": "N/A",
        "Name": "Contracts of Fleeting Spring",
        "Action": "",
        "FullDescription": [
            'The Contracts of Fleeting Spring allow changelings to manipulate and evoke feelings of desire within others.'
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
        "FullCost": "",
        "Cost": "N/A",
        "Dice Pool": "Lost 149"
    },
    {
        "Rank": "•",
        "Name": "Cupid’s Eye",
        "Action": "Contested",
        "FullDescription": [
            'This clause takes the first step in fulfilling a person’s desires — or teasing him and stringing him along — by revealing what those desires are.'
        ],
        "FullCatch": [
            'The character has kissed the subject within the past 24 hours, or the subject’s object of desire is the character.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The changeling receives false impressions, becoming absolutely sure that the subject’s desire is something it is not.',
            '<b>Failure:</b> The character cannot discern the subject’s desires.',
            '<b>Success:</b> The changeling learns one of the subject’s desires. See the suggested modifiers list that follows for specific depths to which this power can plumb.',
            '<b>Exceptional Success:</b> Exceptional success at Cupid’s Eye provides the character with two desires of the targeted level, or the knowledge that there is only one desire at that level.',
            {
                'Suggested Modifiers': [
                    { Modifier: "+1", Situation: "The character has a pledge with the subject." },
                    { Modifier: "—", Situation: "The character discerns a desire currently in the forefront of the subject’s mind." },
                    { Modifier: "-1", Situation: "The character learns a desire not currently concerning the subject." },
                    { Modifier: "-1", Situation: "The character learns a specific kind of desire (sexual, employment, etc.)." },
                    { Modifier: "-2", Situation: "The character discovers a desire the subject recognizes but generally keeps hidden." },
                    { Modifier: "-3", Situation: "The character finds a desire the subject hides even from himself." }
                ]
            }
        ],
        "Description": "Learn one of the subject's desires",
        "Catch": "Used on someone who has kissed the Changeling in the past 24 hours, or who desires the Changeling",
        "Court Goodwill Requirement if not a member": "Waived",
        "FullCost": "1 Glamour",
        "Cost": "●",
        "Dice Pool": "Wyrd + Wits vs Powerstat + Composure"
    },
    {
        "Rank": "••",
        "Name": "Growth of the Ivy",
        "Action": "Contested; resistance is reflexive.",
        "FullDescription": [
            'Humans are fickle creatures, changing desires with the day or the season. This Contract allows the character to direct a subject’s desires somewhat.'
        ],
        "FullCatch": [
            'The character is acting to make the subject desire her or is doing so to resolve a pledge.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The target develops an active dislike for or aversion to the subject of the intended desire.',
            '<b>Failure:</b> The subject’s desires do not change.',
            '<b>Success:</b> The subject’s desires change in a manner of the character’s choosing. See the suggested modifiers list that follows for guidelines on how a character may affect the target. The change lasts for one day per success rolled, though natural interaction may be able to prolong the desire beyond the point where the supernatural effect ends.',
            '<b>Exceptional Success:</b> The change is instead permanent. The inflicted desires remain until the character chooses to release them, and they may then become natural.',
            {
                'Suggested Modifiers': [
                    { Modifier: "+1", Situation: "The character changes a momentary desire." },
                    { Modifier: "—", Situation: "The character changes a long-term desire." },
                    { Modifier: "—", Situation: "The character changes a desire to something similar (e.g., lust for one man to lust for another)." },
                    { Modifier: "-1", Situation: "The character changes a desire concealed from others." },
                    { Modifier: "-1", Situation: "The character changes a desire moderately (e.g., from wanting a cat to wanting a Nintendo)." },
                    { Modifier: "-2", Situation: "The character changes a desire the subject conceals from himself." },
                    { Modifier: "-2", Situation: "The character changes a desire significantly (e.g., a desire for the Nobel Prize becomes the desire for a family)." },
                    { Modifier: "-5", Situation: "The character eliminates a desire or creates one from scratch." },
                ]
            }
        ],
        "Description": "Change one of the subject's desires",
        "Catch": "Using the contract to resolve a Pledge. Must spend a Willpower point when using on a Supernatural",
        "Court Goodwill Requirement if not a member": "●●●",
        "FullCost": "2 Glamour; add 1 Willpower for a supernatural subject",
        "Cost": "●●(○)",
        "Dice Pool": "Mantle + Manipulation + Persuasion - Subject's Resolve"
    },
    {
        "Rank": "•••",
        "Name": "Wyrd-Faced Stranger",
        "Action": "Instant",
        "FullDescription": [
            'The changeling appears as whomever the subject most desires to see at that moment.'
        ],
        "FullCatch": [
            'The character has recently offered food to the target and the target has accepted, or vice versa.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The subject instead sees the character as the person he would least like to see right now. The character is not aware of the failure.',
            '<b>Failure:</b> The character appears as herself, and she is aware of the failed attempt.',
            '<b>Success:</b> The subject recognizes the character as the person he would most like to see at the moment. The character has no say over who she becomes, she just knows that she is recognized as the desired individual. This lasts for one scene.',
            'When using this power on a group of observers, the changeling chooses one as the subject but subtracts the highest Composure in the group from her roll. Success indicates that all observers see her as the same person.',
            'Acting in ways foreign to the visage donned allows reflexive Wits + Composure rolls from people who know whomever the character is pretending to be. These rolls suffer a dice penalty equal to the successes on the character’s activation roll but gain a +1 or +2 dice bonus for actions flagrantly out of character.',
            'Note that the changeling does not always appear as someone the subject knows. The character may appear to be the dark, handsome stranger the target was secretly wishing would appear and whisk her away or the “federal agent” that the beat cop wants to take a murder off his hands. In such cases, the changeling’s actual appearance becomes whatever the subject assumes the desired person would look like.',
            '<b>Exceptional Success:</b> The deception lasts as long as the changeling would like to maintain it.',
            {
                'Suggested Modifiers': [
                    { Modifier: "+1", Situation: "The character knows the subject’s current desire(s)." },
                    { Modifier: "—", Situation: "The character approaches the subject “blind.”" }
                ]
            }
        ],
        "Description": "Become someone who the target desire/expect to see",
        "Catch": "The changeling has offered food to the target and it was accepted, or the other way around.",
        "Court Goodwill Requirement if not a member": "●●●●",
        "FullCost": "2 Glamour",
        "Cost": "●●",
        "Dice Pool": "Mantle + Presence + Subterfuge vs Powerstat + Composure"
    },
    {
        "Rank": "••••",
        "Name": "Pandora’s Gift",
        "Action": "Extended (2+ successes, based on the complexity and size of the object; each roll represents 10 minutes of effort)",
        "FullDescription": [
            'The changeling creates an object that another person truly desires out of nothing but emotion, dreamstuff and random materials.'
        ],
        "FullCatch": [
            'The subject has recently (within one week) given the character a gift. This gift comes with no strings attached, including any expectation of this gift.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The character creates the desired object, but it is destined to fail its wielder at an appropriately dramatic moment — the gun jams at the last minute, the masterpiece painting discolors in the sun or the key breaks off in the lock.',
            '<b>Failure:</b> The character makes no progress.',
            '<b>Success:</b> The character makes progress toward creating the desired object. The number of required successes is equal to the object’s Size + rough complexity, 1 being no moving parts and 10 being a high-precision pocket watch. Things created through this Contract last for the rest of the scene (or longer, based on modifiers) before returning to their original states. Until that time, they function perfectly as normal.',
            '<b>Exceptional Success:</b> The character makes significant progress toward creating the object.',
            {
                'Suggested Modifiers': [
                    { Modifier: "+1", Situation: "Exceptionally appropriate materials" },
                    { Modifier: "-1", Situation: "Exceptionally inappropriate materials" },
                    { Modifier: "-1", Situation: "Object is exceptional (per point of equipment bonus above normal)" },
                    { Modifier: "-1", Situation: "One-hour duration" },
                    { Modifier: "-2", Situation: "One-day duration" },
                    { Modifier: "-3", Situation: "Two-day duration" },
                ]
            }
        ],
        "Description": "Temporarily produce an object the subject desires",
        "Catch": "Used on someone who gave the Changeling a no strings attached gift in the past week",
        "Court Goodwill Requirement if not a member": "●●●●●",
        "FullCost": "2 Glamour",
        "Cost": "●●",
        "Dice Pool": "Mantle + Wits + Craft"
    },
    {
        "Rank": "•••••",
        "Name": "Waking the Inner Faerie",
        "Action": "Contested and Extended (subject’s Willpower in successes, one roll is made each turn); resistance is reflexive.",
        "FullDescription": [
            'The changeling makes a target pursue his greatest de- sires, regardless of other considerations.'
        ],
        "FullCatch": [
            'The subject of the Contract has voluntarily and without coercion confided his desire(s) to the character.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The Contract backfires, affecting the character for one scene instead of the subject.',
            '<b>Failure:</b> The character rolls fewer or equal successes than the subject. The character makes no headway.',
            '<b>Success:</b> The character rolls more successes than the subject and makes headway. If the character reaches the required number of successes, the target feels the immediate impulse to try to achieve one of his greatest desires. He abandons other responsibilities and rational thinking to obey that urge. See the list of suggested modifiers below for guidelines on the effect’s duration.',
            '<b>Exceptional Success:</b> The character rolls many more successes than the subject and makes great headway.',
            {
                'Suggested Modifiers': [
                    { Modifier: "+1", Situation: "The character knows what the target’s greatest desires are." },
                    { Modifier: "+1", Situation: "Five-minute duration" },
                    { Modifier: "—", Situation: "One scene’s duration" },
                    { Modifier: "-1", Situation: "One-hour duration" },
                    { Modifier: "-2", Situation: "One-day duration" },
                    { Modifier: "-3", Situation: "Two-day duration" },
                ]
            }
        ],
        "Description": "Alter a subject's desire and force them to pursue it above all else.",
        "Catch": "The subject freely told the Changeling his desires.",
        "Court Goodwill Requirement if not a member": "-",
        "FullCost": "3 Glamour + 1 Willpower",
        "Cost": "●●●○",
        "Dice Pool": "Mantle + Intelligence + Expression vs Powerstat + Composure"
    },
    {
        "Rank": "N/A",
        "Name": "Contracts of Verdant Spring",
        "Action": "",
        "FullDescription": [
            'Passion is a keen-edged weapon: it is capable of spurring a changeling to unimaginable heights but, like dancing along a cliff edge, the exhilaration is equal to the potential risk. While the Fleeting Spring Contract allows those of the Emerald Court to sense, manipulate and fulfill desire, the Verdant Court Contract allows them to channel their passion to accomplish a variety of goals.',
            'Within the Spring Court, the Verdant Spring is a popular Contract among those who would ride their passionate desire to something greater than a cold beer or a hot lay. The clauses of the Verdant Spring offer the Spring Court the possibility of spurring themselves and others to great heights, but like passion itself, they are neither safe nor sure. Each carries with it a higher than normal penalty for failure (akin to those normally associated with dramatic failures). Among the Emerald Court, great risk always exists when striving for great accomplishment.',
            'Unlike the Fleeting and Enduring Spring Contracts, Verdant Spring Contracts are, in many ways, fickle. Their catches are often more generous than is usual for a Contract. On the other hand, some of the Verdant Spring clauses contain a drawback that comes into play only during certain circumstances, even when the clause is used successfully. Thus are the whims of Spring, which gives (and takes away) according to its own whims.',
            'While some clauses of the Verdant Spring contract are taught to those who are not of the Court but held in their Goodwill, the Contract works best for those who have the inner drive and passion of the Spring Court. Many of the clauses take into consideration the Spring Mantle level of the changeling who is activating it when figuring its effectiveness or potency. As usual, Court Goodwill (Spring) cannot be used in place of Spring Mantle; Court Goodwill represents enough social standing to be taught a basic clause, but does not have the mystical power of the season strengthening it.'
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
        "FullCost": "",
        "Cost": "N/A",
        "Dice Pool": "Lords of Summer 39"
    },
    {
        "Rank": "•",
        "Name": "Font of Inspiration",
        "Action": "Instant",
        "FullDescription": [
            'There is more to a successful creation than the creating itself. In order to craft an effective speech, you have to not only have a way with words, but an knack for reading your audience and what they want (or are willing) to hear. Creating the perfect toy requires more than the ability to build, paint or design mechanics. You have to have a sense of what will be fun for the toy’s intended owner. By accessing their own inherent knack for sensing others’ desires, Lost with this clause are able to create more successfully. The enhanced results are not a result of the clause increasing their workmanship, but because it allows them to better interpret and anticipate the needs and desires of their target demographic. Thus, the ability can be applied to other’s creations as well, allowing a changeling with this clause to inspire, advise and consult with other people and enhance their ability to create as well.',
            'Unfortunately, the line between incredible success and dismal failure is sometimes a very thin one, and the fires of creativity can burn unwary fingers. For those who set their sights on amazing creations, one misstep may mean disaster. Success or failure, only one attempt to use this Clause may be made on any given creative endeavor.'
        ],
        "FullCatch": [
            'The changeling invests his own (literal) blood, sweat or tears into the creation of the object or plans for the project.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The endeavor fails horribly. The creator (and inspiration, should the changeling be exerting influence on another individual) is under a -4 penalty for all creative works (Crafts or Expression challenges) for the next month as the weight of his disastrous efforts hinder future creations. As well, even if the failure happens in secret, the creator (and inspiration, if applicable) is set at -2 for all social challenges against members of the Spring Court for one month, as those of the Antler Crown will inherently sense the failure.',
            '<b>Failure:</b> The creator (and inspiration, should the changeling be exerting influence on another individual) is under a -4 penalty for all creative works (Crafts or Expression challenges) for the next month as the weight of his disastrous efforts hinder future creations.',
            '<b>Success:</b> For each success, the changeling (or person he is inspiring) receives a +1 bonus to his next Crafts or Expression challenge. These bonuses stack with any other supernatural or equipment bonuses applicable to the challenge.',
            '<b>Exceptional Success:</b> Not only does the bonus above apply to the character’s next creative challenge, but to all social challenges made against members of the Spring Court (minimum 1 point of Spring Mantle) for the next week. Only one such bonus can be active at any given time. For better or worse, if another exceptional success using this clause is made before the previous one wears off, its bonuses apply rather than the earlier ones.'
        ],
        "Description": "Each success is a +1 to Crafts or Expression rolls",
        "Catch": "Invests his own literal blood sweat or tears into the creation",
        "Court Goodwill Requirement if not a member": "Waived",
        "FullCost": "1 Glamour",
        "Cost": "●",
        "Dice Pool": "Mantle + Wits + Empathy - Subject's Resolve (If subject is opposed)"
    },
    {
        "Rank": "••",
        "Name": "The Ineffable Gift",
        "Action": "Contested; resistance is reflexive.",
        "FullDescription": [
            'Some people have a certain aura of confidence and focus about them that comes from being dedicated to following their own dreams, goals and desires - regardless of what the rest of the world thinks. This can come across to others as intensely annoying and self-centered, or strangely attractive and intriguing. Changelings with this clause of Verdant Spring can use their own inner passions to appear more appealing to others. Unfortunately, if used too often, the clause backfires, driving others away.'
        ],
        "FullCatch": [
            'The character speaks out loud about something she is passionate about.'
        ],
        "Roll Results": [
            '<b>Drawback:</b> Every time after the first that this Clause is attempted on the same target gives a -1 cumulative penalty to the roll. Thus the second time the Clause is attempted on any given target (whether the first attempt was successful or not) the roll is made at a -1 penalty; the third attempt is -2, and so on. Attempts on other targets do not affect each other. These penalties do not decrease over time.',
            '<b>Dramatic Failure:</b> The character’s passion comes across as self-centered narcissism. Any attempts at Social challenges (those using Presence, Manipulation, Composure as a stat) towards the target fail for a number of weeks equal to the changeling’s Mantle (Spring) plus the target’s Mantle (Spring) or Court Goodwill (Spring) if they have any. As well, all Social challenges made by the changeling against any target are at -4 for the next 24 hours as his self-centered nature taints interactions with others.',
            '<b>Failure:</b> The clause doesn’t take hold. This still counts as an attempt for purposes of the cumulative penalties applied against a single target.',
            '<b>Success:</b> The changeling’s passions come across as somehow appealing or persuasive to the target. For the next 24-hour period, all Social challenges towards the target by the changeling gain a +3 bonus, which is stackable with any other supernatural or natural bonuses the changeling may possess, but not stackable with itself (i.e.: only one use of this clause by any changeling can be actively affecting a target at any given time.',
            '<b>Exceptional Success:</b> The target cannot help but be struck by the changeling’s passionate nature. The changeling is at a +4 bonus for any Social challenges made against the target for a number of days equal to the changeling’s Mantle (Spring) plus the target’s Mantle (Spring) or Court Goodwill (Spring).'
        ],
        "Description": "Gains a +3 bonus in social challenges. Drawback of being less effective with multiple uses.",
        "Catch": "Speaks out loud about something she is passionate about",
        "Court Goodwill Requirement if not a member": "●●●",
        "FullCost": "1 Glamour",
        "Cost": "●",
        "Dice Pool": "Mantle + Presence + Manipulation vs Resolve + Composure"
    },
    {
        "Rank": "•••",
        "Name": "Impassioned Blow",
        "Action": "Instant",
        "FullDescription": [
            'Some combats are calm, cool and calculated. Then there are those that involve the Spring Court. A courtier driven to combat by her passions may well find that they allow her to strike a devastating blow. Unfortunately, this same drive can leave her vulnerable to less hot-headed opponents.'
        ],
        "FullCatch": [
            'The target has insulted or assaulted (by word or deed) the changeling in the last hour.'
        ],
        "Roll Results": [
            '<b>Drawback:</b> Intended target gets +2 to next physical attack of any sort against the changeling. This penalty is in effect whether the Clause is successful or has failed. It is not, however, stackable. If the changeling’s target does not attack her between multiple uses of Impassioned Blow, the target only gains a single +2 bonus against the changeling.',
            '<b>Dramatic Failure:</b> The changeling’s emotions get the best of her, effectively leaving her vulnerable for the rest of the turn. This may manifest as a misstep that throws her to the ground, a jammed firearm or a dropped weapon. She loses all Defense (not including Armor) for the remainder of the scene, and can take no further actions (including reflexive ones) for the remainder of the turn. If she wishes to continue combat, she must spend the next turn preparing again (picking herself up, recovering her weapon, clearing her firearm’s chamber, etc.) and can make no attack until the following turn.',
            '<b>Failure:</b> The clause fails; the attack is resolved as normal.',
            '<b>Success:</b> Passion steers the changeling’s attack, compounding its effectiveness. She receives +4 to her attack pool against the chosen target.',
            '<b>Exceptional Success:</b> In addition to the + 4 dice bonus offered by the success, the changeling receives an additional dice bonus equal to her level of Mantle (Spring).'
        ],
        "Description": "+4 Bonus to attack pool, but the opponent gets a +2 bonus as well.",
        "Catch": "Target has insulted or assaulted by word or deed the changeling in the last hour",
        "Court Goodwill Requirement if not a member": "●●●●",
        "FullCost": "1 Glamour",
        "Cost": "●",
        "Dice Pool": "Mantle + Resolve + Brawl / Firearms / Weaponry"
    },
    {
        "Rank": "••••",
        "Name": "Spur the Crowd",
        "Action": "Extended and Contested (five successes; each roll represents five minutes). One contested roll may be made reflexively for a crowd based on the highest Composure present. Supernatural targets make their own resistance rolls.",
        "FullDescription": [
            'Sometimes a changeling’s goal is not to exert his influence on a single person, but to sway an entire crowd. Whether it’s rallying folks at a political protest march from passive resistance to aggressive action, or turning a cocktail party against a newcomer’s cutting edge fashion statement, a mob can be a potent tool for the Emerald Court.',
            'Unlike the Vainglory Contract “Words of Memories Never Lived”, this clause does not rely upon the changeling’s own inherent impressiveness, but rather his ability to trigger the (sometimes hidden) desires of certain members of the crowd, bringing them to the surface where they can spark similar passions in others. Because of this, the changeling does not need to be actively speaking or performing in front of the crowd, or even be visible to them. His kenning of their desires (and ability to shift them to suit his needs) is enough.'
        ],
        "FullCatch": [
            'No one in the target crowd knows that the individual using the clause is a changeling.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The crowd is not only not swayed, but turns on the changeling. The effects of this may vary: in a public political gathering, the changeling may become the target of the police’s attention, leading to arrest or physical assault even if he’s done nothing to deserve it. In a social setting, the changeling becomes the brunt of the crowd’s derision, even if they do not realize he was attempting to sway them. Any Social challenge the character makes automatically fails for the rest of the scene. As well, any Social challenge the changeling makes against any member of the targeted group is at a -4 penalty for a full lunar month.',
            '<b>Failure:</b> The crowd is not swayed.',
            '<b>Success:</b> The crowd begins to sway in the direction that the changeling desires. A complacent and peaceful group may be made anxious and irritated. A burgeoning mob might be soothed and calmed. The changeling can encourage a group to disperse by increasing their paranoia, incite an already-irritated group to violent action, or lull a relaxed and comfortable one into a near-sleep. At the Storyteller’s discretion, changing a crowd’s attitude and energy level more than one “degree” (i.e. from calm to agitated and then from agitated to violent) may require exceptional success or continued effort on the part of the changeling.',
            '<b>Exceptional Success:</b> The crowd is so completely affected that their attitude and demeanor as a group is moved entirely in the direction that the changeling desired.',
            {
                'Suggested Modifiers': [
                    { Modifier: "+1", Situation: "The character has successfully performed Cupid’s Eye (Fleeting Spring •) upon a  member of the crowd and uncovered desires of the kind that he is attempting to spark. (Cumulative bonus)" },
                    { Modifier: "-3", Situation: "The crowd is actively gathered for a reason which directly opposes the desired reaction (i.e. inspiring violence in a peace rally, or turning a loyal gathering of changelings against the leader they have gathered to protect)." }
                ]
            }
        ],
        "Description": "Sway a crowd in a certain emotional direction",
        "Catch": "No one in the crowd knows the user is a changeling",
        "Court Goodwill Requirement if not a member": "●●●●●",
        "FullCost": "1 Glamour",
        "Cost": "●",
        "Dice Pool": "Mantle + Wyrd + Presence (Extended and Contested)"
    },
    {
        "Rank": "•••••",
        "Name": "Verdant, Roiling Heart",
        "Action": "Instant",
        "FullDescription": [
            'Virtues and Vices represent, on a fundamental level, the things a character is passionate about and how those passions manifest. In using Verdant, Roiling Heart, the changeling taps into her inherent passions (as represented by her Virtue or Vice) and uses her core sense of self to renew her internal fortitude. This clause may only be attempted one time per week, whether it is successful or not. Additional attempts automatically fail, but may incur the Glamour cost and drawback, regardless.'
        ],
        "FullCatch": [
            'The character takes an action that is di- rectly related to his Virtue or Vice.'
        ],
        "Roll Results": [
            '<b>Drawback:</b> For the rest of the scene, all social interactions the changeling undertakes are tainted by his Virtue or Vice. Social interactions are strained for the remainder of the scene and all Social challenges the character initiates are subject to a -2 penalty for the scene.',
            '<b>Dramatic Failure:</b> Unable to tap into his inner strength, the character loses a Willpower point and is unable to regain Willpower through any means until he has slept for at least 8 hours.',
            '<b>Failure:</b> The clause fails to activate.',
            '<b>Success:</b> Bolstered by his passions, the changeling’s Willpower pool is entirely refreshed. All previously spent Willpower is renewed and the changeling’s inner strength is bolstered by tapping into his sense of self.',
            '<b>Exceptional Success:</b> The character’s Willpower pool is entirely refreshed at the end of the turn. As well, he receives a +2 bonus to any challenges involving his Resolve or Composure for the duration of the scene.'
        ],
        "Description": "Renew Willpower pool as if fulfilling Virtue, drawback of all social actions being tainted by her virtue or vice and a -2 to all social rolls",
        "Catch": "Takes an action directly related to virtue or vice",
        "Court Goodwill Requirement if not a member": "-",
        "FullCost": "",
        "Cost": "●",
        "Dice Pool": "Mantle + Composure + Empathy"
    },
]

const summerCourtContractsData = [
    {
        "Rank": "N/A",
        "Name": "Contracts of Eternal Summer",
        "Action": "",
        "FullDescription": [
            'These Contracts provide changelings with physical manifestations of Summer, including great heat and bright sun.'
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
        "FullCost": "",
        "Cost": "N/A",
        "Dice Pool": "Lost 155"
    },
    {
        "Rank": "•",
        "Name": "Son of the Hearth",
        "Action": "Instant",
        "FullDescription": [
            'The character is comfortable in all temperatures, and may even heat a chamber with his power.'
        ],
        "FullCatch": [
            'The character spits on a fading ember or spark.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> Rather than remaining comfortably warm, the character treats his surroundings as very hot or very cold (whichever is more appropriate) and may not activate this Contract again. See the World of Darkness Rulebook, p. 181, for rules on temperature extremes.',
            '<b>Failure:</b> The character fails to keep out the cold or conquer the heat.',
            '<b>Success:</b> The character heats himself or expels excess heat to avoid growing too hot. He remains at a personally comfortable temperature. If he spends a point of Willpower, he can keep an entire room at the same temperature (and thus avail his companions of the same warmth). The effects last for one hour.',
            '<b>Exceptional Success:</b> The effects last for a full day. With the point of Willpower, the area around the character remains comfortably warm no matter what (i.e., heated air will not be lost when doors are opened).',
            {
                'Suggested Modifiers': [
                    { Modifier: "-1", Situation: "Every 20 degrees below zero or above 120 degrees Fahrenheit." },
                    { Modifier: "-1", Situation: "The space to be heated is Size 10." },
                    { Modifier: "-2", Situation: "The space to be heated is Size 20." }
                ]
            }
        ],
        "Description": "Remain at a comfortable temperature, no matter what the outside circumstances are.",
        "Catch": "Spit on a fading ember or spark",
        "Court Goodwill Requirement if not a member": "Waived",
        "FullCost": " Glamour, or 1 Glamour + 1 Willpower",
        "Cost": "●(○)",
        "Dice Pool": "Wyrd + Survival"
    },
    {
        "Rank": "••",
        "Name": "Ulf’s Heart",
        "Action": "Instant",
        "FullDescription": [
            'The character shines the light of high Summer on his surroundings.'
        ],
        "FullCatch": [
            'It is within five minutes of midnight.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The character becomes unable to see for five minutes.',
            '<b>Failure:</b> No light appears.',
            '<b>Success:</b> The character shines with a light as bright as the Summer noonday sun. The light illuminates an area 200 yards around the character and does not hinder his vi- sion. It does significantly hinder any attempts at stealth the character may make. This is not true sunlight and cannot harm creatures susceptible to light (such as vampires), but it might frighten them. The light remains for the rest of the scene, but the character may spend two points of Glamour at activation to instead summon the light for a full hour.',
            '<b>Exceptional Success:</b> The character may also dim the light at will for the Contract’s duration, allowing at least the possibility of stealth.'
        ],
        "Description": "Produce light in radius pf 200 yards for one scene; extend its presence to one hour by spending 1 more Glamour.",
        "Catch": "Within 5 minutes of midnight",
        "Court Goodwill Requirement if not a member": "●●●",
        "FullCost": "1 or 2 Glamour",
        "Cost": "●(●)",
        "Dice Pool": "Mantle + Strength + Occult"
    },
    {
        "Rank": "•••",
        "Name": "Noonday Grasp",
        "Action": "Instant",
        "FullDescription": [
            'The character borrows some of Summer’s immense strength to increase his own.'
        ],
        "FullCatch": [
            'The character eats a chunk of naturally formed ice.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The character loses a dot of Strength for the rest of the scene.',
            '<b>Failure:</b> The character fails to bolster his Strength.',
            '<b>Success:</b> The character successfully increases his Strength by one point, plus one point for every three successes after the first (to a maximum of three points). Note that increased Strength may change other values, such as Speed. The increase lasts for the rest of the scene.',
            '<b>Exceptional Success:</b> The character also increases his Stamina by one for the rest of the scene.',
            {
                'Suggested Modifiers': [
                    { Modifier: "+1", Situation: "The sun is in the sky and clearly visible." },
                    { Modifier: "-1", Situation: "It is after dark." }
                ]
            }
        ],
        "Description": "Gain +1 Strength with one success, and another +1 with every three successes after that.",
        "Catch": "Eats a chunk of naturally formed ice",
        "Court Goodwill Requirement if not a member": "●●●●",
        "FullCost": "2 Glamour",
        "Cost": "●●",
        "Dice Pool": "Mantle + Stamina + Brawl"
    },
    {
        "Rank": "••••",
        "Name": "Solstice Revelation",
        "Action": "Instant",
        "FullDescription": [
            'Channeling the light of the sun at its most intense, the changeling reveals all that is hidden around him. Darkness and illusion can hide nothing from his gaze.'
        ],
        "FullCatch": [
            'The changeling is using the power within five minutes of noon.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The improperly channeled energy of Summer sears the changeling rather than revealing what’s hidden. The changeling takes one point of bashing damage, and receives a -2 dice penalty to any rolls involving vision for the remainder of the scene.',
            '<b>Failure:</b> The power of the sun eludes the changeling.',
            '<b>Success:</b> The character floods the area with light, up to a radius of 100 feet. Anywhere the light shines, the ability to hide or disguise oneself is reduced to a chance roll, and previously hidden or disguised characters must make a chance roll or lose their obfuscations. Those attempting to hide or disguise themselves with supernatural powers must make a Stealth + Wyrd roll (substituting Blood Potency, Primal Urge or similar Traits, if possessed) at -5 or lose the protection of those powers as well. Even the Mask flickers and weakens; anyone who could not normally see through the Mask may make a standard perception test to see the fae miens of any fae or tokens they look at. The light lasts for one turn per success, after which any characters may attempt to conceal themselves once more.',
            '<b>Exceptional Success:</b> The revelatory light lasts for two turns per success, and the changeling may choose to dismiss it at will.'
        ],
        "Description": "Let loose a bright light that reveals all hidden individuals and challenges supernatural cloaking.",
        "Catch": "Within five minuets of noon",
        "Court Goodwill Requirement if not a member": "●●●●●",
        "FullCost": "3 Glamour",
        "Cost": "●●●",
        "Dice Pool": "Mantle + Presence + Occult"
    },
    {
        "Rank": "•••••",
        "Name": "The Lord’s Dread Gaze",
        "Action": "Instant",
        "FullDescription": [
            'Channeling the destructive power of the relentless Sum- mer sun, the changeling sears his enemies with sunlight.'
        ],
        "FullCatch": [
            'The character’s target is wearing or touching elemental gold.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The character’s blazing strike misses his target, and the character’s lack of control causes him to strike something he had hoped not to harm.',
            '<b>Failure:</b> The beam of sunlight misses its target but fades to harmlessness without doing other damage.',
            '<b>Success:</b> A sunbeam heavy with potent Glamour lashes out from the changeling to strike his foe. It inflicts lethal points of damage equal to successes on the activation roll. If the changeling spends one point of Willpower, the damage is aggravated. Against creatures susceptible to sunlight, this attack may have additional affects (inflicting aggravated or additional damage, for example). The Ranges for this attack are 10/30/50 and inflict penalties as normal.',
            '<b>Exceptional Success:</b> No special benefits other than a great deal of damage.'
        ],
        "Description": "Unleashing a beam of focused sunlight that does Lethal (Aggravated with Willpower)",
        "Catch": "The target is wearing or touching gold",
        "Court Goodwill Requirement if not a member": "-",
        "FullCost": "3 Glamour (+ 1 Willpower, optional)",
        "Cost": "●●●(○)",
        "Dice Pool": "Mantle + Dexterity + Athletics - Subject's Defense"
    },
    {
        "Rank": "N/A",
        "Name": "Contracts of Fleeting Summer",
        "Action": "",
        "FullDescription": [
            'The Contracts of Fleeting Summer give a changeling the ability to influence the wrath of those around him.'
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
        "FullCost": "",
        "Cost": "N/A",
        "Dice Pool": "Lost 153"
    },
    {
        "Rank": "•",
        "Name": "Baleful Sense",
        "Action": "Instant",
        "FullDescription": [
            'The character senses the greatest source of wrath nearby.'
        ],
        "FullCatch": [
            'The character is angry when he -invokes this clause.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The character becomes enraged, and the clause pinpoints only him.',
            '<b>Failure:</b> The character cannot locate wrath in his vicinity.',
            '<b>Success:</b> The character becomes aware of the greatest concentration of wrath (in any form) within a mile radius. He knows the direction and approximate distance, and approximately how many people are involved.',
            '<b>Exceptional Success:</b> The character also learns the cause of the anger and approximately how many people are intimately involved.'
        ],
        "Description": "Sense the greatest nearby source of wrath.",
        "Catch": "Character is angry when he invokes this clause.",
        "Court Goodwill Requirement if not a member": "Waived",
        "FullCost": "1 Glamour",
        "Cost": "●",
        "Dice Pool": "Wyrd + Wits"
    },
    {
        "Rank": "••",
        "Name": "Goblin’s Malignance",
        "Action": "Contested",
        "FullDescription": [
            'The character redirects the subject’s wrath onto a new target, most likely himself.'
        ],
        "FullCatch": [
            'The current victim of the subject’s wrath owes the character a favor, or the subject has red hair.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The subject’s anger redoubles, ensuring that she will focus on her victim for the rest of the scene. No attempt to change her focus works for that length of time.',
            '<b>Failure:</b> The character fails to redirect the subject’s wrath.',
            '<b>Success:</b> The character redirects the subject’s wrath onto a target of the character’s choice. The target must be present, and the subject must be aware of the target. As an exception, the character may always make himself the target of the subject’s wrath, which explicitly makes the subject aware of the character.',
            '<b>Exceptional Success:</b> Subjects of this clause rationalize the change of focus and anger to themselves after the fact. (“He was on her side,” “I knew he was talking trash about me,” etc.)',
            {
                'Suggested Modifiers': [
                    { Modifier: "+3", Situation: "The subject redirects anger onto the character." },
                    { Modifier: "-1", Situation: "The subject has no reason to be angry at new target." },
                    { Modifier: "-2", Situation: "The subject likes or is loyal to new target." },
                    { Modifier: "-3", Situation: "The subject redirects anger off the character." }
                ]
            }
        ],
        "Description": "Redirect the focus of a subject's wrath.",
        "Catch": "The current victim of the subject's wrath owes the character a favor, or the subject has red hair.",
        "Court Goodwill Requirement if not a member": "●●●",
        "FullCost": "1 Glamour",
        "Cost": "●",
        "Dice Pool": "Mantle + Manipulation + Persuasion vs Powerstat + Composure"
    },
    {
        "Rank": "•••",
        "Name": "Friendless Tongue",
        "Action": "Extended (successes required equal to the subject’s Willpower; each roll represents one minute of conversation with the subject); resistance is reflexive.",
        "FullDescription": [
            'The character incites a person to uncontrollable wrath through innocent-seeming conversation.'
        ],
        "FullCatch": [
            'The clause’s subject wears a ring on the left hand.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The attempt fails. The subject realizes what the changeling is trying to do and reacts naturally.',
            '<b>Failure:</b> The character garners no successes.',
            '<b>Success:</b> The character gains successes. If his total number of successes equals or exceeds the subject’s Willpower, the subject becomes intensely incensed at whomever is the focus of his attention. This will often be the changeling, but in a group, the character’s comments may rouse anger at someone else principal in the discussion, or the subject’s attention could be on an old flame at the bar even while she listens to the character talk.',
            '<b>Exceptional Success:</b> The character is at +2 dice bonus when using other Fleeting Summer clauses on the subject for the rest of the scene, and +1 die bonus when using Friendless Tongue on the subject for the rest of the month.',
            {
                'Suggested Modifiers': [
                    { Modifier: "+1", Situation: "The subject is easily roused to anger." },
                    { Modifier: "+1", Situation: "The subject has “issues” with her current focus." },
                    { Modifier: "-1", Situation: "The subject is extremely unlikely to become angry at her current focus under normal circumstances." }
                ]
            }
        ],
        "Description": "Stir a person to fury with harmless words.",
        "Catch": "The clause's target wears a ring on the left hand.",
        "Court Goodwill Requirement if not a member": "●●●●",
        "FullCost": "2 Glamour",
        "Cost": "●●",
        "Dice Pool": "Mantle + Manipulation + Subterfuge vs Powerstat + Composure"
    },
    {
        "Rank": "••••",
        "Name": "Sundown Eyes",
        "Action": "Instant",
        "FullDescription": [
            'The character drains wrath from those near him, calm- ing even the most furious combatants.'
        ],
        "FullCatch": [
            'The character is suffering wound penalties and has taken at least two points of lethal damage.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The attempt to calm the situation backfires. Each of the character’s opponents gain a +1 die bonus to attack the character on their next actions.',
            '<b>Failure:</b> The attempt fails.',
            '<b>Success:</b> The character drains the wrath from the people nearby. Combat ceases and does not begin again for at least a number of turns equal to the character’s Wyrd. Add one die to attempts to make peace (or prevent a return to open combat) per success on the roll. The character may not use this Contract again for the rest of the scene.',
            '<b>Exceptional Success:</b> Combat ends. Even if the people involved cannot resolve their differences, they refuse to use violent means of interacting with one another for the rest of the scene. The character may not use this Contract again for the rest of the scene.',
            {
                'Suggested Modifiers': [
                    { Modifier: "+1", Situation: "A significant fraction of combatants fight reluctantly." },
                    { Modifier: "-", Situation: "Two people are targeted." },
                    { Modifier: "-1", Situation: "Four people are targeted." },
                    { Modifier: "-2", Situation: "Eight people are targeted." },
                    { Modifier: "-3", Situation: "Twelve people are targeted." },
                    { Modifier: "-4", Situation: "Twenty people are targeted." }
                ]
            }
        ],
        "Description": "Quell all conflict in an area temporarily.",
        "Catch": "The character is suffering wound penalties and has taken at least two points of lethal damage.",
        "Court Goodwill Requirement if not a member": "●●●●●",
        "FullCost": "3 Glamour",
        "Cost": "●●●",
        "Dice Pool": "Mantle + Presence + Socialize - Subject's Composure"
    },
    {
        "Rank": "•••••",
        "Name": "The Flames of Summer",
        "Action": "Instant",
        "FullDescription": [
            'The character drives his anger into the realm of rage, making it impossible to disturb and lending extra strength to his wrath.'
        ],
        "FullCatch": [
            'The sun is within five minutes of its zenith, and the character has called out a formal challenge to an opponent.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The attempt to inflame the character’s anger fails, and the character may not try again for a full week.',
            '<b>Failure:</b> The attempt fails.',
            '<b>Success:</b> The attempt succeeds. The character becomes implacable in his anger, incapable of being swayed by reason or calmed down for the rest of the scene. He attacks the targets of his wrath without hesitation or mercy and may not take rational or thoughtful actions. He adds a +2 dice bonus to all Physical rolls for the duration. The character also ignores all wound penalties for the duration and need not roll Stamina to remain conscious when his last wound box is marked with bashing damage.',
            '<b>Exceptional Success:</b> The bonus to Physical rolls rises to +4.',
            {
                'Suggested Modifiers': [
                    { Modifier: "+1", Situation: "The character is expected to fight." },
                    { Modifier: "+1", Situation: "The character is up against losing odds." },
                    { Modifier: "-1", Situation: "The character’s opponent is (perceived as) inferior." }
                ]
            }
        ],
        "Description": "Enter an unstoppable fury; gain +2 to Physical rolls and ignore all wound penalties.",
        "Catch": "The sun is within five minutes of its zenith, and the character has called out a formal challenge to an opponent.",
        "Court Goodwill Requirement if not a member": "-",
        "FullCost": "2 Glamour + 1 Willpower",
        "Cost": "●●○",
        "Dice Pool": "Mantle + Stamina + Animal Ken"
    },
    {
        "Rank": "N/A",
        "Name": "Contracts of Punishing Summer",
        "Action": "",
        "FullDescription": [
            'Long ago, the earliest rulers of the Court of Wrath forged contracts with the blistering heat of the hottest summers. Many of the clauses to these pacts are lost to the weave and weft of history, but some still remain. Those of the Summer Court use these searing clauses to punish their enemies for their transgressions, whether on the sunlit battlefield or in a dark subbasement. These are the tools of war. These are the instruments of Wrath.',
            'Any of the clauses within this contract are subject to the same set of potential modifiers.',
            {
                'Suggested Modifiers': [
                    { Modifier: "+2", Situation: "Performed during summer" },
                    { Modifier: "+1", Situation: "Sun is at its apex in the sky (between 11AM — 1PM)" },
                    { Modifier: "-1", Situation: "Performed at night" },
                    { Modifier: "-2", Situation: "Performed during winter" }
                ]
            },
            '<b>Vampires Don’t Like Sunlight:</b> All of these clauses evoke sunlight (the hot, summer sun to be specific), but what does that mean for vampires? None of these abilities conjure real sunlight, and as such it doesn’t do additional damage to the Kindred. That said, it’s similar enough to sunlight where it likely triggers a vampire’s panicked aversion to it. Sometimes called the “Red Fear,” a vampire who witnesses a clause like Battle Bright in action must make an extended Resolve + Composure roll and achieve five total successes (with each roll equivalent to one turn). If at any point one of those rolls fails, the vampire automatically flees — and, frankly, even if the rolls don’t fail, some vampires are going to get the hell out of Dodge anyway, having little interest in suffering aggravated burns.'
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
        "FullCost": "",
        "Cost": "N/A",
        "Dice Pool": "Lords of Summer 59"
    },
    {
        "Rank": "•",
        "Name": "Smoldergrip",
        "Action": "Instant",
        "FullDescription": [
            'Items left long in the sun collect deep and terrible heat: a steering wheel in a hot car, a plastic toy left on a desiccated lawn, the rubber grips to sun-scorched pruning shears. With this clause, the Summer courtier may force any object of Size 3 or smaller to burn turn after turn, as if left in the hottest noon-time sun. The object must be in sight for this clause to be successful.',
            'A courtier might use this on a foe in battle, hoping to force the adversary to drop that deadly revolver, or might instead use it to help stall pursuers reaching for that now-scorching doorknob.'
        ],
        "FullCatch": [
            'The character sports a real sunburn (not artificial).'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The character’s own hand suddenly suffers a terrible sunburn; the skin grows blistery red. She takes one point of bashing damage.',
            '<b>Failure:</b> The changeling fails to manifest the heat needed, and the object remains at its extant temperature.',
            '<b>Success:</b> The object gains the heat of an object lying in direct summer sun. Any attempts to touch the object fail unless the target succeeds on a Resolve + Stamina roll. This roll is penalized by a number of dice equal to the Mantle (Summer) score of the changeling who invoked Smoldergrip. If the target is able to touch or use it, prolonged use is still difficult: he must succeed on that same roll every turn he touches the item. The terrible heat lasts for a number of turns equal to the changeling’s Wyrd score.',
            '<b>Exceptional Success:</b> As with success, except any time someone touches the object while it’s hot, he suffers one point of bashing damage.'
        ],
        "Description": "Makes an object unbearably hot to the touch.",
        "Catch": "The Changeling sports a real sunburn",
        "Court Goodwill Requirement if not a member": "None",
        "FullCost": "1 Glamour",
        "Cost": "●",
        "Dice Pool": "Strength + Wits - Objects Size"
    },
    {
        "Rank": "••",
        "Name": "Battle Bright",
        "Action": "Instant and contested",
        "FullDescription": [
            'Fighting with the sun in one’s eyes is no easy task. Depth perception is weakened as a fighter squints to see his foe. Is that his target or his target’s shadow? The bright light blinds. While using this ability, a changeling makes himself radiate with the white, searing light of the summer sun, a hot bright mote that burns in the eyes of all who see it. The exception to this is those who possess any dots in Mantle (Summer). Summer courtiers who wear the Mantle of the Court remain unaffected by the bright light since the fierce light is their ally, not their enemy. This ability can only be used once per day.'
        ],
        "FullCatch": [
            'The changeling holds a real, burning torch aloft.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The changeling must’ve missed a detail in fulfilling this clause of the contract, and the summer sun rebukes him for it: his vision becomes filled with bright “floaters,” causing him a -3 to all sight-based Perception rolls for the rest of the day.',
            '<b>Failure:</b> The character fails to draw on the summer sun’s intensity.',
            '<b>Success:</b> The changeling becomes a supernatural beacon of intense light. Any who can see the changeling suffer the following: Defense halved (round down), any rolls to attack are made at -2 dice, and all sight-based Perception rolls are complicated by a -3 penalty. This ability lasts for up to one scene, with one exception. Use of this clause necessitates that the changeling remain still. If the changeling moves more than one inch, the clause ends prematurely. Note that any characters who possess one or more dots in the Mantle (Summer) Merit are unaffected by this power.',
            '<b>Exceptional Success:</b> Targets affected by this clause continue to suffer from the Perception penalty (-3) even after the clause ends. The penalty remains for one hour after completion of the clause.'
        ],
        "Description": "Creates a blinding beacon that distracts all attackers.",
        "Catch": "The Changeling is holding a real, burning torch.",
        "Court Goodwill Requirement if not a member": "●●●",
        "FullCost": "2 Glamour",
        "Cost": "●●",
        "Dice Pool": "Wyrd + Presence vs Highest Wits + Composure within sight."
    },
    {
        "Rank": "•••",
        "Name": "Crown of Clashing Fire",
        "Action": "Instant",
        "FullDescription": [
            'Woe to those chosen to do battle with a courtier of Summer in the Crown of Clashing Fire. With this clause, a changeling chooses a foe on the battlefield with a simple point of the finger. When the two are within 10 yards of one another, a ring of thorns rises up around the two of them and in the next turn those thorns catch fire. The duel is on.'
        ],
        "FullCatch": [
            'The changeling has one or more scars from his last battle with this foe.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The fiery thorns rise up and encircle only the changeling. Trying to leave the crown of fire is as per a success, below.',
            '<b>Failure:</b> The thorns and fire fails to manifest.',
            '<b>Success:</b> A ring of thorns about two feet high rise up and, in the subsequent turn, catch fire. The fire burns high with hot, red flames.',
            'At the time of the circle’s inception, any other characters within the fiery circle who are not part of the duel hear a deafening, crackling roar in their ears: the sounds of surrounding conflagration. Remaining within that circle is difficult, demanding one Willpower point per turn. In addition, those not part of the duel but lingering in the circle also suffer -3 to all Physical rolls while within the fiery borders. In leaving the circle, the flames do not burn any of these nondueling characters.',
            'The same cannot be said for the two individuals locked in skirmish. If either try to leave the circle before the flames burn out, that character suffers two aggravated levels of damage automatically upon exit. (And he can be dragged back into the circle by the other opponent.)',
            'The fire burns for a number of turns equal to twice the changeling’s Wyrd score and only ends prematurely when one of the opponents is either knocked unconscious or killed (thus resulting in an “end” to the duel). Otherwise, the changeling cannot end it until those turns expire.',
            '<b>Exceptional Success:</b> As with success, but the changeling who initiated this clause gains the spent Willpower back.'
        ],
        "Description": "Summons up a ring of flaming thorns that forces a target into one-on-one combat.",
        "Catch": "The Changeling has one or more scars from the last battle with this foe.",
        "Court Goodwill Requirement if not a member": "●●●●",
        "FullCost": "2 Glamour, 1 Willpower",
        "Cost": "●●○",
        "Dice Pool": "Wyrd + Resolve - Subject's Stamina"
    },
    {
        "Rank": "••••",
        "Name": "Baleful Stroke of Summer Sun",
        "Action": "Reflexive and contested",
        "FullDescription": [
            'With a close strike of a deadly weapon, a Summer courtier with this ability infects the target with a debilitating poison that simulates the effects of sunstroke and heat exhaustion. As the seconds pass after the strike, the victim begins to feel the effects take hold. He is no longer able to sweat. His tongue turns to cotton. The target’s heart race accelerates, he suffers splitting cramps, and he gets dizzy with fatigue.'
        ],
        "FullCatch": [
            'The changeling strikes with a weapon featuring metal that the changeling himself forged. It must be a substantial part of the weapon: the pommel and quillons of a sword, the blade of a knife, the bludgeoning end of a mace.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The effect does not occur and the changeling loses his Defense in the subsequent turn due to the invested (and failed) attempt.',
            '<b>Failure:</b> While the attack may have been successful, the effects of the clause fail to manifest.',
            '<b>Success:</b> One turn after the successful lethal attack, the target begins to suffer the effects of sunstroke and heat exhaustion. This cursed effect lasts for a number of turns equal to the Resolve score of the changeling who used this clause.',
            'However, the victim does have a choice as to how this curse manifests: she can choose to accept cumulative dice penalties equal to one die of penalty per turn (thus she chooses to let the heatstroke potentially affect her actions) or she can choose to instead internalize the effects and eschew taking penalties, but in doing so she takes one aggravated level of damage every turn she makes this choice. The choice can be made on a turn by turn basis. If the changeling’s Resolve was 3, the effect would go for three turns. On the first turn, the target might choose a -1 die penalty, on the second turn she might take a point of aggravated damage, and on the third and final turn might take another penalty, which becomes a -2 penalty (as those dice are cumulative until the effect ends). Alternately, she could just choose to take three full aggravated (with no penalties) or -3 dice (with no damage). Penalties occur at the beginning of a combat round, and thus are in play when the target opts to make a roll.',
            'Penalties from the curse fade once the effect’s turns are completed (in the above example, starting on the fourth turn) at a rate of one die of penalty per turn. (So, 3 penalty dice after three turns becomes -2 on the fourth turn, -1 on the fifth, and no related penalty on the sixth.)',
            '<b>Exceptional Success:</b> As with success, but the affected target cannot spend Willpower while the curse is active.'
        ],
        "Description": "Inflicts a sun stroke on the target, resulting in either mounting mechanical penalties or aggravated damage (target's choice).",
        "Catch": "The Changeling strikes with a metal weapon he forged, has to hit with substantial metal part.",
        "Court Goodwill Requirement if not a member": "●●●●●",
        "FullCost": "3 Glamour",
        "Cost": "●●●",
        "Dice Pool": "Wyrd + Stamina vs Stamina + Composure. the changeling must first make a successful close combat attack (with Brawl or Weaponry) and do at least a sin- gle point of lethal damage. The moment of the attack’s success occurs when the reflexive roll takes place."
    },
    {
        "Rank": "•••••",
        "Name": "Scorched Earth",
        "Action": "Extended (10+ successes; each roll represents a turn of uninterrupted meditation)",
        "FullDescription": [
            'This clause represents the ultimate punishment of summer: with it, a changeling curses an area to bake in blistering heat, blighting the plants, incurring drought, possibly even invoking the death of pets, older adults, or children. Many Summer courtiers have been known to invoke this clause in the midst of battle. While it runs the risk of harming those who fight for the freehold, one hopes that they are prepared to fight through such scorching weather.'
        ],
        "FullCatch": [
            'The changeling meditates beneath a Summer Court pennon or battle-flag that she helped to create.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The changeling grows warm, then hot, then the air is sucked out of her lungs in a vacuous rush of heat. She falls unconscious for a number of turns equal to 10 minus her Resolve score.',
            '<b>Failure:</b> No progress is made.',
            '<b>Success:</b> The character makes progress toward the end result. Ten successes are required for every half-mile radius of effect. The character must decide the radius of effect before beginning to evoke this clause.',
            'Once the Scorched Earth curse is active, the following effects occur:',
            '<ul><li>All of those within the radius of effect find the following stats halved (round down): Stamina, Strength, Composure, Resolve. (The loss of these dots while in the radius of effect also affects related traits such as Speed, Health, Willpower, etc.)</li><li>Bashing damage does not heal while one is in the area of effect and Willpower cannot be regained. The heat truly saps one’s internal energy and spirit.</li><li>All plant life within the radius of effect begins to die. Death can be forestalled by some measure of preventative care (usually necessitating Wits + Science rolls).</li><li>Water turns to steam. Faucets and hoses only trickle water. Puddles turn to vapor. Rivers run thin and muddy while streams dry up entirely. Water is not impossible to get, but it’s always warm and in far scarcer supply than it had been.</li></ul>',
            'Effects plaguing a character end as soon as that character leaves the area of effect.',
            'The Scorched Earth curse continues for a number of days equal to the changeling’s Wyrd score. It can be ended prematurely, but requires that the changeling spills a pint of his own blood (necessitating him taking one point of lethal damage) on the ground of the affected area.',
            'Note that this effect can occur even in winter. While it likely baffles meteorologists and is surely an extraordinary experience, it doesn’t necessarily appear supernatural.',
            '<b>Exceptional Success:</b> If the character achieves an exceptional success on the extended roll (gaining five successes in total beyond what was necessary to activate the clause), she may add a stipulation to the clause that allows for those with dots in Mantle (Summer) to remain unaffected by the Scorched Earth effects.',
            {
                'Suggested Modifiers': [
                    { Modifier: "+1", Situation: "Meditative Mind Merit" },
                    { Modifier: "-1", Situation: "Spring or Autumn" }
                ]
            },
            '<b>Cloudburst:</b> There is a variant version of the Scorched Earth clause that features not the dry, blistering weather of summer, but the punishing monsoons common in certain parts of the world. The effects on individual characters remain the same. Water, however, is not scarce; quite the opposite, as flooding becomes a certainty. Plants don’t necessarily die from drought, either, though many will either die from over-watering (yes, plants can drown, too) or are broken and diminished by ravaging hurricane-like winds.'
        ],
        "Description": "Turns the area into a blighted waste land that inflicts penalties on all combatants.",
        "Catch": "The Changeling meditates under a Summer Court flag or pendant she helped make.",
        "Court Goodwill Requirement if not a member": "N/A",
        "FullCost": "",
        "Cost": "●●●●●",
        "Dice Pool": "Wyrd + Strength"
    },
]

const autumnCourtContractsData = [
    {
        "Rank": "N/A",
        "Name": "Contracts of Eternal Autumn",
        "Action": "",
        "FullDescription": [
            'Changelings who use the Eternal Autumn Contracts affect harvests, autumnal natures and weather.'
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
        "FullCost": "",
        "Cost": "N/A",
        "Dice Pool": "Lost 159"
    },
    {
        "Rank": "•",
        "Name": "Last Breath Isaac",
        "Action": "Instant",
        "FullDescription": [
            'The character brings a plant to its ripest point of the year, ready for harvest. Changelings often use this clause to gather food when necessary, but some also find it a way to gather more baneful fruits such as mistletoe berries.'
        ],
        "FullCatch": [
            'The plant or tree is unclaimed, or the changeling has permission to harvest from it (to any degree).'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The plant withers a little and will bear no harvest for the next year and a day.',
            '<b>Failure:</b> The character fails to make the plant bear fruit.',
            '<b>Success:</b> Over the next minute, the plant bears a ripe harvest. A pumpkin plant grows a few plump pumpkins, an apple branch grows heavy with juicy apples and so on. This Contract can only affect parts of the plant around which the character can put her hand. She can affect the branch of an apple tree by putting her hand around it (and the entire branch from that point out is affected), but not the whole tree. Likewise, she could only target some branches of a blueberry bush unless she could circle her hand around its very base.',
            '<b>Exceptional Success:</b> The entire plant is affected, even when the character could only target a portion.',
            {
                'Suggested Modifiers': [
                    { Modifier: "+1", Situation: "Within a month (either way) of the plant’s natural harvest season" },
                    { Modifier: "-1", Situation: "The month opposite the plant’s natural harvest season" },
                ]
            }
        ],
        "Description": "Ripen a portion of a plant",
        "Catch": "The plant or tree is unclaimed or the Changeling has permission to harvest from it.",
        "Court Goodwill Requirement if not a member": "Waived",
        "FullCost": "1 Glamour",
        "Cost": "●",
        "Dice Pool": "Wyrd + Manipulation"
    },
    {
        "Rank": "••",
        "Name": "Withering Glare",
        "Action": "Instant",
        "FullDescription": [
            'The character can wither any plant to any degree with a simple glance. Her gaze will also sicken animals that cross her glare.'
        ],
        "FullCatch": [
            'The plant bears the changeling’s name (or common moniker) on it somewhere, carved into the bark or written on a tag.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The character fails to harm the target and suffers one point of bashing damage.',
            '<b>Failure:</b> The character fails to affect the target.',
            '<b>Success:</b> The character makes the plant progress toward Winter or toward death as she desires, but she cannot make the plant grow more Spring-like or healthier. She may make the plant instantly shed its leaves or retract into a bulb as though it were the deepest Winter, or make it shed its needles, leaves or petals and completely dry up into a state of near-death. Plants forced into the Winter season remain alive and prove it with the advent of true Spring, but only the most skilled gardener could bring a plant back from near-death.',
            'If this clause is used against an animal, including a human being or even a supernatural entity, this clause inflicts one point of bashing damage for every success. Armor does not protect against the glare, though Defense still applies.',
            '<b>Exceptional Success:</b> The character can completely kill a plant. She may also choose to make the plant act as though it were Winter for a full year and a day, recovering only when Spring comes after that time.',
            {
                'Suggested Modifiers': [
                    { Modifier: "+1", Situation: "Plant is not overly robust or well cared for." },
                    { Modifier: "-1", Situation: "Plant is remarkably robust and well cared for." },
                ]
            }
        ],
        "Description": "Wither a plant to Winter or age an animal.",
        "Catch": "The plant has the Changelings name or moniker carved into it or written on a tag.",
        "Court Goodwill Requirement if not a member": "●●●",
        "FullCost": "1 Glamour",
        "Cost": "●",
        "Dice Pool": "Mantle + Presence + Science"
    },
    {
        "Rank": "•••",
        "Name": "Brother to the Ague",
        "Action": "Instant",
        "FullDescription": [
            'The life of the world wanes with the advent of Autumn. This clause inflicts the same fate on a changeling’s enemy.'
        ],
        "FullCatch": [
            'The character can name two diseases that the subject has suffered (or is suffering) and one that the subject fears.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> Rather than enervating an opponent, the character loses energy herself. She suffers a -1 die penalty to all dice pools as if she had stayed awake for 30 hours straight and suffers one point of bashing damage as if she had been deprived of water for several days. (See the World of Darkness Rulebook, pp. 175-176 and pp. 179-180, for more information on water and sleep deprivation.)',
            '<b>Failure:</b> The character fails to weary the subject.',
            '<b>Success:</b> The subject takes one point of bashing damage per success, as from dehydration. In addition, he suffers a -1 die fatigue penalty to all dice pools for every two points of the character’s Wyrd (rounded up). The subject actually becomes tired, so his fatigue penalties only disappear after sleep. The subject does not actually become severely dehydrated, so his bashing wounds heal naturally.',
            '<b>Exceptional Success:</b> The subject actually does become dehydrated, so points of bashing damage inflicted through this Contract do not heal until the subject has rehydrated.'
        ],
        "Description": "Damage a foe through dehydration.",
        "Catch": "The character can name two diseases that the subject has suffered or is suffering, and one that the subject fears.",
        "Court Goodwill Requirement if not a member": "●●●●",
        "FullCost": "2 Glamour",
        "Cost": "●●",
        "Dice Pool": "Mantle + Dexterity + Medicine"
    },
    {
        "Rank": "••••",
        "Name": "Riding the Falling Leaves",
        "Action": "Instant",
        "FullDescription": [
            'The changeling becomes a temporary avatar of Autumn, transforming into a colorful spray of dry Autumn leaves. This ability is typically invoked to move inconspicuously or evade harm.'
        ],
        "FullCatch": [
            'The character catches a naturally falling leaf at the moment of the clause’s activation.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The changeling’s innards temporarily transform into leaves, but not the entirety of her body. She takes two points of bashing damage from the shock.',
            '<b>Failure:</b> The transformation does not take place.',
            '<b>Success:</b> The changeling’s body transforms into a spray of dry Autumn leaves. Despite the fragmented physicality of this form, the changeling is still a single entity, and the leaves are highly resistant to being separated or scattered. These leaves are also resistant to damage, though the changeling can still be injured in this form. While in this form, she receives an additional six Defense; this does not apply to attacks that could conceivably damage a great many falling leaves at once, such as fire or being sucked into a large fan. The character may fly in this form at -3 Speed, gaining altitude on unseen thermals. She may also pass through openings too small to admit her ordinary form. However, while riding the leaf-form, the character cannot manipulate physical objects or cause any damage.',
            '<b>Exceptional Success:</b> The character’s Defense bonus rises to eight, and she may fly at her full Speed.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-1", Situation: "Spring" },
                    { Modifier: "+1", Situation: "Winter or Autumn" },
                ]
            }
        ],
        "Description": "Transform into a cloud of autumn leaves",
        "Catch": "The character catches a naturally falling leaf at the moment of the clause's activation.",
        "Court Goodwill Requirement if not a member": "●●●●●",
        "FullCost": "2 Glamour",
        "Cost": "●●",
        "Dice Pool": "Mantle + Dexterity + Survival"
    },
    {
        "Rank": "•••••",
        "Name": "Tears of Autumn",
        "Action": "Extended (5+ successes; each roll represents 10 minutes of commanding the sky)",
        "FullDescription": [
            'The character calls a hailstorm from the sky, which can be light enough to just keep people off the streets or heavy enough to inflict major damage.'
        ],
        "FullCatch": [
            'The character holds a key encased in ice that finishes thawing at the start of the ritual.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The attempt to command the weather fails. A localized hailstorm of the desired strength forms, just large enough to hover overhead of the changeling and drop hailstones on only her. This lasts for one full hour, and time spent indoors (or otherwise safe) does not count.',
            '<b>Failure:</b> The character makes no progress.',
            '<b>Success:</b> The character makes some progress. If she accumulates successes equal to or greater than the required number, the hailstorm begins anywhere within her line of sight. Five successes summons a minor hailstorm with stones that might sting but do no harm. For every 10 additional successes required, the character causes the hailstones to do one point of bashing damage to anything caught in them each turn, to a maximum of three points of bashing damage. The hailstorm lasts for a number of minutes equal to the changeling’s Wyrd, and covers an area equal to 100 yards radius per point of Wyrd.',
            '<b>Exceptional Success:</b> The character makes excellent progress.',
            {
                'Suggested Modifiers': [
                    { Modifier: "+1", Situation: "Already cloudy and cold" },
                    { Modifier: "-1", Situation: "Not cloudy at all" },
                    { Modifier: "-1", Situation: "Completely unseasonal" },
                ]
            }
        ],
        "Description": "Bring about a hailstorm",
        "Catch": "The character holds a key encased in ice that finishes thawing at the start of the ritual.",
        "Court Goodwill Requirement if not a member": "-",
        "FullCost": "3 Glamour",
        "Cost": "●●●",
        "Dice Pool": "Mantle + Manipulation + Occult"
    },
    {
        "Rank": "N/A",
        "Name": "Contracts of Fleeting Autumn",
        "Action": "",
        "FullDescription": [
            'These Contracts provide the changelings who wield them power over aspects of fear.'
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
        "FullCost": "",
        "Cost": "N/A",
        "Dice Pool": "Lost 156"
    },
    {
        "Rank": "•",
        "Name": "Witches’ Intuition",
        "Action": "Instant",
        "FullDescription": [
            'The character dredges knowledge of one fear from the subject’s mind or subconscious.'
        ],
        "FullCatch": [
            'The Contract’s subject does not know the character’s name.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The character fails to discern one of the subject’s fears. Worse, the next time the character speaks to the subject, the character will accidentally let the subject know one of hers.',
            '<b>Failure:</b> The character learns no fears.',
            '<b>Success:</b> The character acquires knowledge of one of the subject’s fears. See the list of suggested modifiers below for guidelines on what fear the character learns.',
            '<b>Exceptional Success:</b> The character learns two fears of the targeted level, if there are two such fears to be had.',
            {
                'Suggested Modifiers': [
                    { Modifier: "+1", Situation: "The character has a pledge with the target." },
                    { Modifier: "-", Situation: "The character discerns a fear currently in the forefront of the target’s mind." },
                    { Modifier: "-1", Situation: "The character learns a fear not currently concerning the target." },
                    { Modifier: "-1", Situation: "The character learns a specific kind of fear (i.e., Halloween monsters, school-related, etc.)." },
                    { Modifier: "-2", Situation: "The character discovers a fear the target recognizes but generally keeps hidden." },
                    { Modifier: "-3", Situation: "The character finds a fear the target hides even from herself." },
                ]
            }
        ],
        "Description": "Learn one of the subject's fears",
        "Catch": "Subject does not know the Changelings name",
        "Court Goodwill Requirement if not a member": "Waived",
        "FullCost": "1 Glamour",
        "Cost": "●",
        "Dice Pool": "Wyrd + Wits - Composure"
    },
    {
        "Rank": "••",
        "Name": "Tale of the Baba Yaga",
        "Action": "Extended (one success per person to scare; each roll represents five minutes of fright-mongering)",
        "FullDescription": [
            'Through the course of conversation or oratory, the character makes a concept as supernaturally frightening as she can, instilling individuals or entire crowds with an unnatural fear of that thing.'
        ],
        "FullCatch": [
            'The unnatural fear the character evokes is based upon a myth, urban legend or actual threat with which all subjects of the Contract are familiar.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The character does not influence her subjects as desired. Instead, they find her silly, and she suffers a -1 die penalty to all Social rolls to influence them for the rest of the scene or night (whichever is longer).',
            '<b>Failure:</b> The character fails to induce supernatural fear.',
            '<b>Success:</b> The subjects develop a temporary fear of the intended topic. Without further stimulus, this only manifests as some jittery conversation, on-edge whispers and a few people getting a thrill from the story. Should they be faced with a believable manifestation of that fear, this Contract evokes a supernaturally strong fear in all affected individuals. They are afflicted with mind-numbing terror, fleeing from the built-up monster for one turn per success. If they cannot flee, they cower (but are not denied Defense).',
            '<b>Exceptional Success:</b> The character’s seed bears a rich harvest. Add the character’s Wyrd rating to the number of turns the subjects must flee or cower',
            {
                'Suggested Modifiers': [
                    { Modifier: "+1", Situation: "Spooky ambiance (graveyard, skeletal orchard)" },
                    { Modifier: "-1", Situation: "Every five people in crowd/at party not subject to the Contract" },
                    { Modifier: "-1", Situation: "Comfortable, safe ambiance (lit dining hall, kindly dean’s office)" },
                ]
            }
        ],
        "Description": "Invoke fear of intended object in subjects for 1 turn per success.",
        "Catch": "The unnatural fear the character evokes is based upon a myth, urban legend or actual threat with which all subjects of the Contract are familiar.",
        "Court Goodwill Requirement if not a member": "●●●",
        "FullCost": "1 Glamour",
        "Cost": "●",
        "Dice Pool": "Mantle + Manipulation + Intimidation"
    },
    {
        "Rank": "•••",
        "Name": "Heart of the Antlion",
        "Action": "Instant",
        "FullDescription": [
            'The character uses her Contract with Autumn to steel herself against all manner of fear, natural or supernatural.'
        ],
        "FullCatch": [
            'The character consumes a spider or other vermin that has literally been scared to death.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The character becomes more susceptible to fear. Add two dice to any external attempts to scare her until the next sunrise.',
            '<b>Failure:</b> The character gains no special fortitude.',
            '<b>Success:</b> The character becomes strong against fear. Mundane attempts to frighten, scare or intimidate her automatically fail. Supernatural attempts to frighten her suffer a penalty equal to the number of successes scored on her roll. This lasts the rest of the scene.',
            '<b>Exceptional Success:</b> The protection lasts until the next sunrise.',
            {
                'Suggested Modifiers': [
                    { Modifier: "+1", Situation: "The character invokes the clause in a supportive environment (i.e., surrounded by friends, in a comfortable sanctum or under the reassuring sun)." },
                    { Modifier: "-1 to -3", Situation: "The character invokes the clause when she is already nervous (i.e., surrounded by zombies, in a vampire’s haven or lost in a misty graveyard at night)." },
                ]
            }
        ],
        "Description": "Immune to mundane attempts at fear and resistant to supernatural fear.",
        "Catch": "The character consumes a spider or other vermin that has literally been scared to death.",
        "Court Goodwill Requirement if not a member": "●●●●",
        "FullCost": "1 Glamour",
        "Cost": "●",
        "Dice Pool": "Mantle + Resolve + Investigation"
    },
    {
        "Rank": "••••",
        "Name": "Scent of the Harvest",
        "Action": "Extended (one success per subject; each roll represents one minute of support)",
        "FullDescription": [
            'The character reassures friends and allies, protecting them against fear just as she protects herself.'
        ],
        "FullCatch": [
            'Two of the subjects’ greatest fears are each other.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The attempt to bolster the character’s allies fails. The character cannot try again until the next sunrise.',
            '<b>Failure:</b> The character makes no progress.',
            '<b>Success:</b> The character makes progress. If she reaches the required number of successes, she completes the effort. Affected allies are completely immune to mundane efforts to scare them, and supernatural efforts suffer a dice penalty equal to the dice penalty the character took invoking the Contract. This lasts the rest of the scene.',
            '<b>Exceptional Success:</b> The protection lasts until the next sunrise.',
            {
                'Suggested Modifiers': [
                    { Modifier: "+1", Situation: "The character’s allies are in a supportive environment (i.e., surrounded by friends, in a comfortable sanctum or under the reassuring sun)." },
                    { Modifier: "-1", Situation: "Each point of dice penalty to rolls that would cause supernatural fear (to a maximum of the character’s Wyrd)." },
                    { Modifier: "-1 to -3", Situation: "The character’s allies are already nervous (i.e., surrounded by zombies, in a vampire’s haven or lost in a misty graveyard at night)." },
                ]
            }
        ],
        "Description": "Heart of the Antlion for friends.",
        "Catch": "Two of the subjects greatest fears are each other.",
        "Court Goodwill Requirement if not a member": "●●●●●",
        "FullCost": "2 Glamour",
        "Cost": "●●",
        "Dice Pool": "Mantle + Presence + Expression, Extended"
    },
    {
        "Rank": "•••••",
        "Name": "Mien of the Baba Yaga",
        "Action": "Instant",
        "FullDescription": [
            'The character takes on the aspect of one of her subject’s great fears.'
        ],
        "FullCatch": [
            'One of the subject’s great fears is actually the character.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The character temporarily sees the subject as one of the character’s greatest fears. She suffers one point of bashing damage.',
            '<b>Failure:</b> The character fails to become her subject’s nightmare.',
            '<b>Success:</b> The changeling, to all observers, takes on the aspect of one of the subject’s great fears. The character cannot see what this is without a reflective surface. The subject of the Contract suffers points of bashing damage out of fear equal to the successes rolled, and may only flee or cower in fear for a like number of turns. He is not denied his Defense. This visage may frighten others as well, but holds no special power over them. (Except that it might, if used with Tale of the Baba Yaga, above.)',
            '<b>Exceptional Success:</b> The subject of this Contract loses a point of Willpower and loses access to his Defense until the end of the next turn.',
            {
                'Suggested Modifiers': [
                    { Modifier: "+1", Situation: "The character has been building up the subject’s fear." },
                    { Modifier: "+1", Situation: "The locale has appropriate ambiance (e.g., abandoned school for the fear of a teacher)." },
                    { Modifier: "-1", Situation: "Someone has been bolstering the subject against this fear." },
                    { Modifier: "-1", Situation: "The locale is unsupportive of the fear’s appearance (e.g., Freddy Krueger at a sunny picnic)." },
                ]
            }
        ],
        "Description": "Become the subjects fear. Scare them badly enough to actually deal damage",
        "Catch": "One of the subjects greatest fears is actually the character.",
        "Court Goodwill Requirement if not a member": "-",
        "FullCost": "3 Glamour + 1 Willpower",
        "Cost": "●●●○",
        "Dice Pool": "Mantle + Wits + Empathy"
    },
    {
        "Rank": "N/A",
        "Name": "Contracts of Spellbound Autumn",
        "Action": "",
        "FullDescription": [
            'The season of lengthening nights and falling leaves is possessed of magic that is more than simple symbolism. Changelings who use the Contracts of Spellbound Autumn call upon the season’s affinity for sorcery and otherworldly phenomena.'
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
        "FullCost": "",
        "Cost": "N/A",
        "Dice Pool": "Lords of Summer 79"
    },
    {
        "Rank": "•",
        "Name": "Warlock’s Gaze",
        "Action": "Instant (and possibly Contested; resistance is reflexive)",
        "FullDescription": [
            'The character detects the presence of the supernatural; even those beings, objects and effects that are deliberately concealed.'
        ],
        "FullCatch": [
            'The character physically makes contact with a non-allied supernatural being other than another changeling when activating this clause.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The character falsely detects the presence of one or more supernatural creatures, objects, and/or phenomena, as well as failing to detect any such presences that are truly in his vicinity.',
            '<b>Failure:</b> The character either rolls no successes or fails to exceed the successes accrued by a character concealed by or concealing a supernatural effect, and does not detect any supernatural creatures, objects, and/or phenomena. He is aware that the clause was not successfully enacted.',
            '<b>Success:</b> The character scores successes in excess of those accrued by a character concealed by or concealing any supernatural effect, if any, and detects any non-concealed supernatural creatures, objects, and/or phenomena within a number of yards equal to his Wyrd. (Note that the character may succeed against some subjects and fail against others, depending upon how many successes are scored by each character in the contested roll. The character using this clause, however, rolls only once and compares his total successes against all other nearby individuals using supernatural powers of occlusion.)',
            '<b>Exceptional Success:</b> No additional result, beyond the possibility of penetrating especially strong methods of supernatural occlusion.'
        ],
        "Description": "Detect the presence of the supernatural, even deliberately obscured. AoE: Yards = to Wyrd",
        "Catch": "Physical contact with non-allied supernatural being other than another changeling.",
        "Court Goodwill Requirement if not a member": "Waived",
        "FullCost": "2 Glamour",
        "Cost": "●●",
        "Dice Pool": "Wyrd + Occult (vs. Powerstat + Compusure if target supernaturally concealed)"
    },
    {
        "Rank": "••",
        "Name": "Barrow-Whisper",
        "Action": "Instant",
        "FullDescription": [
            'The changeling learns how to utter the sepulchral tongue of the unquiet dead — to hear and be heard by such restless shades.'
        ],
        "FullCatch": [
            'A ghost in the area wants to communicate, either with the character specifically or with anyone who will listen.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The character’s presumption angers any nearby ghosts, who will do what they can to inconvenience, harass, or even harm her.',
            '<b>Failure:</b> The character is unable to communicate with or otherwise perceive the presence of any ghosts in the vicinity.',
            '<b>Success:</b> For the remainder of the scene the character can hear and be heard by (though not see) any restless shades in her presence.',
            '<b>Exceptional Success:</b> As a normal success, but the ability to hear and be heard by ghosts lasts for the entire night, should the character wish it.'
        ],
        "Description": "Hears and is heard by ghosts.",
        "Catch": "Ghost in the area wants to communicate.",
        "Court Goodwill Requirement if not a member": "●●●",
        "FullCost": "1 Glamour",
        "Cost": "●",
        "Dice Pool": "Wyrd + Expression"
    },
    {
        "Rank": "•••",
        "Name": "Smith’s Wisdom",
        "Action": "Extended — 5 successes required per dot of the item (Storyteller’s discretion for items without dot values); each roll represents four hours of uninterrupted study.",
        "FullDescription": [
            'By studying an unknown object of power — whether a token or something else — the fae learns its abilities and intended purpose.'
        ],
        "FullCatch": [
            'The character has stolen the item from a friend (the theft must be malicious; items left un- attended in the hopes that they will be taken don’t count) or been freely given the item by an enemy.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The character radically misinterprets the object’s abilities and implicitly believes his assessment to be correct, to the point of being willing to stake his wellbeing or that of his allies on it.',
            '<b>Failure:</b> The character accrues no further successes in his attempt to discern the item’s function and powers, and suffers a -1 die penalty to all subsequent rolls to unravel the object’s secrets. This penalty is cumulative for multiple failures.',
            '<b>Success:</b> The character scores one or more successes and grows closer to learning the purpose of the item in question. When the Storyteller rules that the appropriate number of successes has been accrued, the character learns the object’s supernatural capabilities. Note, however, that this does not necessarily equate to being able to actually make use of these powers.',
            '<b>Exceptional Success:</b> No additional effect, beyond accruing five or more successes toward uncovering the item’s mystic secrets.'
        ],
        "Description": "Learn abilities and purpose of item of power (token or else).",
        "Catch": "The character has stolen the item from a friend (without permission) or been freely given the item by an enemy.",
        "Court Goodwill Requirement if not a member": "●●●●",
        "FullCost": "3 Glamour",
        "Cost": "●●●",
        "Dice Pool": "Mantle + Intelligence + Occult"
    },
    {
        "Rank": "••••",
        "Name": "Arcadian Commandment",
        "Action": "Instant and Contested",
        "FullDescription": [
            'The character gains the power to speak with the authority of a True Fae to a hobgoblin or other such minion of the Gentry, even those normally incapable of understanding speech.'
        ],
        "FullCatch": [
            'The character knowingly comes unarmed and unarmored into the presence of the creature to be commanded.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The character automatically earns the enmity of whatever creature she is attempting to command. It immediately reacts in a manner appropriate to its nature.',
            '<b>Failure:</b> The character either accrues either no successes or fewer successes than the creature she is trying to command, and cannot exert any influence over it.',
            '<b>Success:</b> The character scores more successes than the creature she is attempting to command. For the remainder of the scene, she may compel the being to any course of action that doesn’t directly endanger its wellbeing, or that of the Gentry that created it and/or acts as its direct master, if applicable. If the changeling sends the creature out of her direct presence to perform a task, it will do so to the best of its ability, subject to the parameters outlined above, until an hour is up, whereupon the creature will immediately break off from the task. The creature is aware that it has been supernaturally compelled and may pursue revenge or other action against the character, if such is in its nature.',
            '<b>Exceptional Success:</b> As above, save that the creature may be dispatched on a task taking up to a full day and night, and will believe its actions to have been of its own choosing, unless the character’s influence is subsequently pointed out to it.'
        ],
        "Description": "Power to speak with authority of True Fae to hobgoblins and other Gentry minions, even to those incapable of speech.",
        "Catch": "Character knowingly comes unarmed and unarmored to the presence of entity to be commanded.",
        "Court Goodwill Requirement if not a member": "●●●●●",
        "FullCost": "3 Glamour and 1 Willpower",
        "Cost": "●●●○",
        "Dice Pool": "Wyrd + Presence vs Powerstat + Resolve"
    },
    {
        "Rank": "•••••",
        "Name": "Oathbreaker’s Honesty",
        "Action": "Extended — one success per level of bonus or penalty involved in each factor of the Pledge (in other words, a -3 penalty Alliance Task factor would require three successes, and a -2 Poisoning of Boon Sanction another two successes); each roll takes one turn.",
        "FullDescription": [
            'The changeling manipulates the power of a pledge to violate its strictures without falling under its Sanction.'
        ],
        "FullCatch": [
            'The changeling is begged to enact this clause by someone who will knowingly come to disaster (loss of life or loved ones, loss of Clarity to the point of a descent into madness, etc.) on account of his betrayal.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The character immediately falls under the Sanction of the Pledge, just as though he’d broken it normally, and may never again attempt to circumvent this pledge. The spent Glamour and Willpower dot are lost (the Willpower dot may, however, be re-purchased for eight experience points).',
            '<b>Failure:</b> The character fails to circumvent the pledge and loses his Glamour and Willpower dot, as above, though he may later attempt to cheat the Pledge if he so wishes.',
            '<b>Success:</b> The character accrues successes toward the process of sidestepping the Pledge. When sufficient successes have been scored, he may do so for the remainder of the scene or an hour, whichever is less, without incurring the pledge’s Sanction. As above, the character’s Willpower dot may be re-purchased for eight experience points.',
            '<b>Exceptional Success:</b> No additional effect, beyond scoring numerous successes toward circumventing the Pledge.'
        ],
        "Description": "Violate the pledge without falling under its Sanctions.",
        "Catch": "Begged to enact this clause by someone who will knowingly come to disaster on account of his betrayal.",
        "Court Goodwill Requirement if not a member": "-",
        "FullCost": "",
        "Cost": "●●●●●○",
        "Dice Pool": "Wyrd + Resolve (extended)"
    }
]

const winterCourtContractsData = [
    {
        "Rank": "N/A",
        "Name": "Contracts of Eternal Winter",
        "Action": "",
        "FullDescription": [
            'Changelings who wield the Eternal Winter Contracts control the cold strength of the season itself.'
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
        "FullCost": "",
        "Cost": "N/A",
        "Dice Pool": "Lost 162"
    },
    {
        "Rank": "•",
        "Name": "Jack’s Breath",
        "Action": "",
        "FullDescription": [
            'The character cools a room considerably, or an area roughly the size of a room.'
        ],
        "FullCatch": [
            'The character hears someone shiver or tastes someone’s sweat.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The room grows warmer instead of colder.',
            '<b>Failure:</b> The character fails to cool the room.',
            '<b>Success:</b> The room cools by a degree decided by the character before the dice roll. See the list of suggested modifiers below for guidelines on how far a character can reduce the temperature, and in how large a room. The cooling lasts for one scene before the room gradually returns to normal temperature.',
            '<b>Exceptional Success:</b> The cooling lasts as long as the character desires before returning to normal.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-1", Situation: "Every 20 degrees Fahrenheit of cooling." },
                    { Modifier: "-1", Situation: "The room is Size 20." },
                    { Modifier: "-2", Situation: "The room is Size 40." },
                ]
            }
        ],
        "Description": "Cools a room, potentially by a significant margin.",
        "Catch": "The character hears someone shiver or tastes someones sweat.",
        "Court Goodwill Requirement if not a member": "Waived",
        "FullCost": "1 Glamour",
        "Cost": "●",
        "Dice Pool": "Wyrd + Survival"
    },
    {
        "Rank": "••",
        "Name": "Touch of Winter",
        "Action": "Instant",
        "FullDescription": [
            'Liquid freezes with just a caress of the changeling’s fin- gertips.'
        ],
        "FullCatch": [
            'The character first spells out a name or idea he hates with the liquid on a dry surface.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The character’s hand grows very cold, and the character suffers a point of bashing damage from early frostbite.',
            '<b>Failure:</b> The character fails to freeze the liquid.',
            '<b>Success:</b> The liquid freezes over. The liquid has an effective Strength (for purposes of supporting people on a frozen pond, for example) equal to the number of successes rolled. (See the World of Darkness Rulebook, p. 47, for Strength and weight information.) This Strength is effective over a few square feet, not the entire surface, so a group can walk across the frozen pond as long as they give each other distance. A character may distribute his weight (cutting it approximately in half) by lying down on the frozen surface. See the list of suggested modifiers for guidelines on the area this Contract freezes. The liquid’s surface remains frozen until it melts naturally.',
            '<b>Exceptional Success:</b> The character may instantly return the frozen liquid to its original liquid form, as long as he chooses to do so within the same scene.',
            {
                'Suggested Modifiers': [
                    { Modifier: "+1", Situation: "Liquid is already near its freezing point" },
                    { Modifier: "-", Situation: "The area of a bathtub" },
                    { Modifier: "-1", Situation: "The area of a driveway" },
                    { Modifier: "-2", Situation: "The area of a swimming pool" },
                    { Modifier: "-3", Situation: "The area of a parking lot" },
                ]
            }
        ],
        "Description": "Freeze the surface of a body of water, potentially affecting quite a large area.",
        "Catch": "The character first spells out a name or idea he hates with liquid on a dry surface",
        "Court Goodwill Requirement if not a member": "●●●",
        "FullCost": "1 Glamour",
        "Cost": "●",
        "Dice Pool": "Mantle + Intelligence + Science"
    },
    {
        "Rank": "•••",
        "Name": "Riding the Devil’s Jawbone",
        "Action": "Instant",
        "FullDescription": [
            'The character surrounds himself with an aura so cold that it can disable his enemies.'
        ],
        "FullCatch": [
            'There is a bell ringing within 20 feet of the character.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The character grows instantaneously cold himself, suffering two points of bashing damage.',
            '<b>Failure:</b> The character fails to activate the clause.',
            '<b>Success:</b> The character blankets everything within 20 feet under a cloak of intense cold. Anyone other than the character within that field, which moves with him, suffers a -1 die penalty to all actions while in the freezing aura. Multiple changelings invoking this clause do not increase the level of cold, but the penalty may increase with further exposure. For every five turns someone spends inside the aura (cumulative), that penalty increases by one. Penalties immediately disappear when the aura fades or when a person steps outside the aura, but return at full current strength if the person is again caught inside it. The field lasts for a number of minutes equal to successes on the roll, or until the changeling falls unconscious or dies.',
            '<b>Exceptional Success:</b> The field lasts the entire scene, or until the changeling falls unconscious or dies.',
            {
                'Suggested Modifiers': [
                    { Modifier: "+2", Situation: "Already quite cold" },
                    { Modifier: "+1", Situation: "Already chilly" },
                    { Modifier: "-1", Situation: "Warm day" },
                    { Modifier: "-2", Situation: "Heat wave" },
                ]
            }
        ],
        "Description": "Inflicts an area with intense cold, causing penalties to all within.",
        "Catch": "There is a bell ringing within 20 feet of the character.",
        "Court Goodwill Requirement if not a member": "●●●●",
        "FullCost": "2 Glamour",
        "Cost": "●●",
        "Dice Pool": "Mantle + Dexterity + Stealth"
    },
    {
        "Rank": "••••",
        "Name": "Fallen from the Timbers",
        "Action": "Instant",
        "FullDescription": [
            'The character calls a great shaft of cold air and partially frozen particles to materialize above an enemy and fall upon her.'
        ],
        "FullCatch": [
            'The Contract’s target wears silver jewelry that has religious meaning for her.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> A small wind of sharp ice particles cuts the character and causes one point of lethal damage.',
            '<b>Failure:</b> The character fails to materialize his attack.',
            '<b>Success:</b> The blast of cold and ice inflicts points of lethal damage equal to the successes on the roll. The target of the attack also suffers a -1 die penalty to all actions for the rest of the scene due to the extreme chill.',
            '<b>Exceptional Success:</b> The attack inflicts a great deal of damage. The penalty from cold escalates to -2.'
        ],
        "Description": "Blasts a target with cold and ice, inflicting lethal damage and penalizing all of their actions.",
        "Catch": "The contracts target is wearing silver jewelry that has a religious meaning to her.",
        "Court Goodwill Requirement if not a member": "●●●●●",
        "FullCost": "3 Glamour",
        "Cost": "●●●",
        "Dice Pool": "Mantle + Dexterity + Athletics - Subject's Defense"
    },
    {
        "Rank": "•••••",
        "Name": "Witch’s Paradise",
        "Action": "Extended (5+ successes; each roll represents five minutes of exhorting the sky)",
        "FullDescription": [
            'The changeling summons a lasting snowstorm over an extended area.'
        ],
        "FullCatch": [
            'The moon is in the sky, and the character can hear a wolf howling.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The attempt fails. The weather lightens and gets a little warmer.',
            '<b>Failure:</b> The character makes no headway.',
            '<b>Success:</b> The character makes some headway. If he accumulates the required number of successes, the snowstorm begins. Five required successes summons light flurries over a one-mile radius for one hour. Each additional five successes drops the temperature by 10 degrees Fahrenheit, increases the wind strength by five miles per hour, doubles the storm’s radius or increases the duration by one hour.',
            '<b>Exceptional Success:</b> The character makes great headway.'
        ],
        "Description": "Summons a lasting snowstorm over an area.",
        "Catch": "The moon is in the sky and the character can hear a wolf howling.",
        "Court Goodwill Requirement if not a member": "-",
        "FullCost": "3 Glamour + 1 Willpower",
        "Cost": "●●●○",
        "Dice Pool": "Mantle + Presence + Occult"
    },
    {
        "Rank": "N/A",
        "Name": "Contracts of Fleeting Winter",
        "Action": "",
        "FullDescription": [
            'The Fleeting Winter Contracts allow a changeling to manipulate the signature emotion of the Court: sorrow.'
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
        "FullCost": "",
        "Cost": "N/A",
        "Dice Pool": "Lost 160"
    },
    {
        "Rank": "•",
        "Name": "The Dragon Knows",
        "Action": "Instant",
        "FullDescription": [
            'The character can tell why a person is sorrowful, guess- ing her regrets with but a glance.'
        ],
        "FullCatch": [
            'The character looks into the subject’s eyes for a moment.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The character cannot figure out why the subject is sad, but it afflicts the character as well. His mood lasts the rest of the scene and inflicts a -1 die penalty on his Social dice pools.',
            '<b>Failure:</b> The character fails to discover the subject’s regrets.',
            '<b>Success:</b> The character discovers the root of the subject’s sorrow. This Clause reveals only the cause of the sorrow the subject feels now, and returns no result at all (even if successfully used) if the subject is not currently experiencing sorrow (or sadness or another similar emotion).',
            '<b>Exceptional Success:</b> If the subject is not currently sad but was within the last hour, the character finds out the cause of that and why it ended.',
            {
                'Suggested Modifiers': [
                    { Modifier: "+1", Situation: "The emotion is evident." },
                    { Modifier: "-1", Situation: "The subject is hard to see." },
                ]
            }
        ],
        "Description": "Determine the source of sorrow someone is experiencing.",
        "Catch": "The character looks into the subjects eyes for a moment.",
        "Court Goodwill Requirement if not a member": "Waived",
        "FullCost": "1 Glamour",
        "Cost": "●",
        "Dice Pool": "Wyrd + Empathy - Subject's Composure"
    },
    {
        "Rank": "••",
        "Name": "Slipknot Dreams",
        "Action": "Instant",
        "FullDescription": [
            'The changeling forces a person to forget about her sorrows just long enough to deal with the matters at hand.'
        ],
        "FullCatch": [
            'The subject has accepted something from the character within the past 24 hours.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The subject becomes even more sad, making it even more difficult to deal with her.',
            '<b>Failure:</b> The character fails to put off the subject’s sorrows.',
            '<b>Success:</b> The subject completely forgets why she feels sad, or even that she was sad just a moment ago. She acts as though everything were perfectly all right for a number of minutes equal to the successes rolled.',
            '<b>Exceptional Success:</b> The character may, if he so desires, cause the subject to remain blissfully ignorant for a full hour.',
            {
                'Suggested Modifiers': [
                    { Modifier: "+1", Situation: "Minor or distant sorrow (goldfish died, weeping over the state of the world)" },
                    { Modifier: "-2", Situation: "Deeply personal tragedy (entire branch of the family dead in accident)" },
                ]
            }
        ],
        "Description": "Forces a subject to temporarily let go of their sorrow.",
        "Catch": "The subject has accepted something from the character in the past 24 hours.",
        "Court Goodwill Requirement if not a member": "●●●",
        "FullCost": "",
        "Cost": "●",
        "Dice Pool": "Mantle + Manipulation + Subterfuge - Subject's Resolve"
    },
    {
        "Rank": "•••",
        "Name": "Faces in the Water",
        "Action": "Instant",
        "FullDescription": [
            'The subject remembers a sad memory from her past and dwells on it, filling herself with sorrow.'
        ],
        "FullCatch": [
            'The subject is carrying a photograph (or other image) of an older relative or ancestor on her person.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The attempt fails, and the subject is immune to the character’s Fleeting Winter Contracts for one full day.',
            '<b>Failure:</b> The subject remains unaffected.',
            '<b>Success:</b> The subject recalls one sad or painful memory, and it causes her sorrow. The character has no influence over what memory surfaces. The subject’s Social rolls suffer a dice penalty equal to half the number of the character’s successes; the same penalty is applied to people attempting to influence the subject. The recollection and sorrow last for one scene.',
            '<b>Exceptional Success:</b> The character may also choose to trigger another such event (which may or may not be a different memory) at a set time within the next 24 hours.',
            {
                'Suggested Modifiers': [
                    { Modifier: "+1", Situation: "The subject has a doleful personality." },
                    { Modifier: "-1", Situation: "The subject is naturally upbeat." },
                    { Modifier: "-1", Situation: "Something good just happened to the subject." },
                    { Modifier: "-3", Situation: "The subject has no genuinely sad memories (a truly innocent child, for instance)." },
                ]
            }
        ],
        "Description": "Fills a subject with sorrow over a painful memory, inflicting social penalties.",
        "Catch": "The subject is carrying a photograph or some other image of an older relative or ancestor on her person.",
        "Court Goodwill Requirement if not a member": "●●●●",
        "FullCost": "1 Glamour",
        "Cost": "●",
        "Dice Pool": "Mantle + Intelligence + Investigation - Subject's Composure"
    },
    {
        "Rank": "••••",
        "Name": "Fallow Fields, Empty Harvest",
        "Action": "Contested; resistance is reflexive.",
        "FullDescription": [
            'The character eliminates a person’s ability to experience positive emotions for a significant period of time.'
        ],
        "FullCatch": [
            'The character has made the subject happy (or happier) within the last 10 minutes.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The subject remains capable of positive emotions and becomes immune to the character’s Fleeting Winter Contracts for one full day.',
            '<b>Failure:</b> The character does not affect the subject.',
            '<b>Success:</b> The subject loses all capability to experience positive emotions such as joy, happiness and variations thereon for one day per success rolled. She becomes unable to regain Willpower by acting on her Virtues or Vices, and suffers a -2 dice penalty to all Social rolls.',
            '<b>Exceptional Success:</b> The subject’s positive emotions remain deadened until the changeling releases them.',
            {
                'Suggested Modifiers': [
                    { Modifier: "+1", Situation: "The subject is already sad." },
                    { Modifier: "-1", Situation: "The subject is experiencing positive emotions currently." },
                    { Modifier: "-2", Situation: "The subject’s positive emotions are notably strong." },
                ]
            }
        ],
        "Description": "Eliminates a subject's ability to feel positive emotions for a time, suffering social penalties and an inability to regain Willpower via virtues or vices.",
        "Catch": "The character has made the subject happy (or happier) within the last 10 minutes.",
        "Court Goodwill Requirement if not a member": "●●●●●",
        "FullCost": "2 Glamour",
        "Cost": "●●",
        "Dice Pool": "Mantle + Manipulation + Intimidation vs Powerstat + Composure"
    },
    {
        "Rank": "•••••",
        "Name": "Every Sorrow a Jewel",
        "Action": "Contested; resistance is reflexive.",
        "FullDescription": [
            'The character magnifies the emotions of a person already feeling sorrowful to such extremes that the subject becomes incapable of taking any action.'
        ],
        "FullCatch": [
            'The subject has tasted one of the changeling’s tears.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The subject remains only moderately sad, but the character is momentarily overcome with great sadness. He loses his Defense until his next action.',
            '<b>Failure:</b> The character fails to inflate the subject’s emotions.',
            '<b>Success:</b> The subject’s sorrow grows to unmanageable proportions. She can do nothing beyond curl up and feel terrible for a number of turns equal to the successes rolled. The subject may take no actions and may not move but retains her Defense. This Contract affects only subjects already feeling sorrow.',
            '<b>Exceptional Success:</b> The subject’s emotion so overwhelms her that she loses her Defense for the Contract’s duration.',
            {
                'Suggested Modifiers': [
                    { Modifier: "+2", Situation: "The subject’s sorrow is already great." },
                    { Modifier: "+1", Situation: "The subject’s sorrow is strong." },
                    { Modifier: "-1", Situation: "The subject’s sorrow is quite minor." },
                ]
            }
        ],
        "Description": "Paralyzes a subject with grief, rendering them briefly unable to take any actions.",
        "Catch": "The subject has tasted one of the changelings tears.",
        "Court Goodwill Requirement if not a member": "-",
        "FullCost": "3 Glamour + 1 Willpower",
        "Cost": "●●●○",
        "Dice Pool": "Mantle + Manipulation + Persuasion vs Powerstat + Composure"
    },
    {
        "Rank": "N/A",
        "Name": "Contracts of the Sorrow-Frozen Heart",
        "Action": "",
        "FullDescription": [
            'Sorrow is the paradoxical torment: the suffering that eases suffering. In Arcadia, pain was a species: a hundred races of hurt, each devoted to its own method and taste. But Sorrow set itself apart from the simple animal pains of Burning, Cutting and their cousins, for it induced a special numbness: a fatalism that allowed contracted changelings to endure other discomfort. Sorrow is a pain of contemplation. Once the Lost accepts its inevitability, other hurts fade.',
            'In the Winter Court, the Sorrow-Frozen Heart is an unpopular Contract, but it is theirs nonetheless. Most Winter changelings prefer to master sorrow through calculated denial. They fight despondency with hope, but only apply it to attainable things. To live for today and revel in a quiet life is hardly spectacular, but serves cautious courtiers well enough. The minority who embrace the contract take the radical step of accepting their sadness, even reveling in it. She crosses that threshold and strikes a powerful, heart-wrenching bargain.',
            'As the Lost explores this Contract’s clauses, she inevitably loses her empathy for others. Practitioners become absorbed in the particulars of their own sorrow. How could anyone else’s pain compare to that which they’ve come to know so intimately? This is a power of the Sorrow-Frozen Heart. Its warriors do not flinch at inflicting pain. Compared to sorrow, anything else is like a snowflake compared to a glacier.',
            'The Sorrow-Frozen Heart is a subtle Contract, suited to the Court. It doesn’t cause any obviously supernatural displays. The Court desires quiet survivors who can protect Winter’s holdings even in extreme adversity. Practitioners treat it as a memoriam in action. They remember the sorrow of slavery and channel it into tools that will protect them from it ever after.',
            'This Contract’s nature makes it fundamentally incompatible with the ability to regain Willpower from fulfilling a Virtue. Inspiring moments disrupt the character’s sorrow. If the changeling satisfies a Virtue while using Contracts of the Sorrow-Frozen Heart, the player can refuse to refresh his character’s Willpower. (The character chooses to dwell within his sorrow instead of the moment of inspiration.) If he does not, the Contract’s benefits end immediately.'
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
        "FullCost": "",
        "Cost": "N/A",
        "Dice Pool": "Lords of Summer 99"
    },
    {
        "Rank": "•",
        "Name": "A Mere Vessel for Loss",
        "Action": "Instant",
        "FullDescription": [
            'The changeling focuses on her own sorrow to ex- clude debilitating physical conditions. Numbness sets in, followed vitality, driven by a sense of the inevitable. She can ignore the effects of pain and discomfort.'
        ],
        "FullCatch": [
            'The character pierces her skin with a thin needle (this does not inflict damage).'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The character is overwhelmed by physical pain and discomfort, even minor irritations that she could normally endure. She suffers a -1 die penalty to all actions until then end of the next turn.',
            '<b>Failure:</b> The character feels physical discomfort normally.',
            '<b>Success:</b> Reduce the character’s dice pool penalties for physical discomfort, pain or illness by the number of successes scored. This includes wound penalties, drowsiness, nausea — any physical irritation, no matter which actions these would normally penalize. This does not remove the actual injuries. A cut still bleeds, bones are still broken, flesh is still burnt and so on. This effect lasts for a scene.',
            '<b>Exceptional Success:</b> In addition to the effects of a standard success, the character cannot be incapacitated by physical injuries or sensations for the rest of the scene.'
        ],
        "Description": "Reduce the Effects of pain and discomfort by success",
        "Catch": "Pierces skin with a thin needle",
        "Court Goodwill Requirement if not a member": "Waived",
        "FullCost": "1 Glamour",
        "Cost": "●",
        "Dice Pool": "Mantle + Resolve + Occult"
    },
    {
        "Rank": "••",
        "Name": "Fear is Nothing",
        "Action": "Instant",
        "FullDescription": [
            'The changeling takes refuge in sorrow: memories of a terrible loss or knowledge of a doom to come. He accepts his destiny with fatalistic fervor, warding off fear.'
        ],
        "FullCatch": [
            'The character empties his hands and leaves them open at his sides, as if he feels no need to arm himself against danger. (If necessary, he can arm himself after invoking the clause.)'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The character drifts from his sorrow into fear. He suffers a -2 penalty to dice rolls to resist a source of fear, or reduces the applicable Resistance attribute by one for the purpose of determining a fear-inducing power’s effects if that power’s dice pool is normally reduced by the attribute.',
            '<b>Failure:</b> The character deals with fear as well or as poorly as anyone else.',
            '<b>Success:</b> The character reduces the dice pool of supernatural powers that might cause him fear by his Wyrd dots. This effect lasts for the scene. He can freely ignore mundane sources of fear or disgust. Things like butchered corpses and big, growling dogs don’t faze him at all. Mundane terrors cannot induce derangements while he is in this state.',
            '<b>Exceptional Success:</b> As for a standard success, except increase the penalty of fear-inducing powers by the character’s Wyrd + 2. Furthermore, the character does not suffer from any Phobia derangements for the rest of the scene, even if they were imposed beforehand.'
        ],
        "Description": "Reduces dice pool of supernatural fear effects by Wyrd",
        "Catch": "Empties his hands and leaves them open at his side",
        "Court Goodwill Requirement if not a member": "●●●",
        "FullCost": "1 Glamour",
        "Cost": "●",
        "Dice Pool": "Mantle + Composure + Expression"
    },
    {
        "Rank": "•••",
        "Name": "Grief is Stronger than Death",
        "Action": "2 Glamour",
        "FullDescription": [
            'The changeling is so immersed in his own sorrow that her injuries are irrelevant.'
        ],
        "FullCatch": [
            'The character contemptuously tosses a chunk of cold iron to the ground.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The character’s attention snaps back to her body, leaving her vulnerable and clumsy. Add a die to the next attack directed against her during the scene.',
            '<b>Failure:</b> The character does not benefit from the clause.',
            '<b>Success:</b> The character staves off the effects of injury. When she is struck in combat, tally the damage (any abilities or equipment that would affect it apply) and leave it aside for the rest of the scene. The character can “ignore” damage equal to her successes. Do not apply it to the character’s health levels.',
            'Once the scene ends or she runs out of successes, inflict all of the damage that she “ignored” in the order in which it was inflicted. This takes effect over successive turns, effectively “paying back” the wounds that were delayed.',
            '<b>Exceptional Success:</b> As a standard success, but the character also benefits from one point of armor until the power’s effects end.'
        ],
        "Description": "Damage from an attack is ignored for a round, to be applied next round",
        "Catch": "Contemptuously tosses a chunk of cold iron on the ground.",
        "Court Goodwill Requirement if not a member": "●●●●",
        "FullCost": "2 Glamour",
        "Cost": "●●",
        "Dice Pool": "Mantle + Resolve + Survival"
    },
    {
        "Rank": "••••",
        "Name": "Remorseless Strike",
        "Action": "Instant",
        "FullDescription": [
            'The changeling has as little regard for others’ pain as his own; all are doomed to sorrow. He strikes with cold savagery, holding nothing back. Compared to his own pain, the enemy’s suffering means nothing.'
        ],
        "FullCatch": [
            'The character slashes himself with a sharp instrument and suffers a point of lethal damage.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The character is struck with a torrent of overwhelming compassion. He cannot harm another person for the rest of the turn.',
            '<b>Failure:</b> The character fights and acts normally.',
            '<b>Success:</b> If the character’s next Brawl or Weaponry attacks inflict any damage at all by scoring at least one success, the target suffers additional damage equal to the character’s Wyrd. This damage is of the same type as the original attack unless the character’s using a cold iron weapon.',
            '<b>Exceptional Success:</b> The unrelenting force of the blow also stuns the victim for a turn. Note that this assumes that the target has a Size of 5. If the target’s Size is more or less, the victim suffers the stunning effect if the clause’s successes meet or exceed that Size number.'
        ],
        "Description": "Next Brawl or weaponry attack target suffers additional bonus damage equal to Wyrd",
        "Catch": "Slashes himself with a sharp instrument and takes 1 lethal",
        "Court Goodwill Requirement if not a member": "●●●●●",
        "FullCost": "2 Glamour",
        "Cost": "●●",
        "Dice Pool": "Mantle + Resolve + Brawl"
    },
    {
        "Rank": "•••••",
        "Name": "A Cold Hand on the Heart",
        "Action": "Instant and Contested. Roll the target’s Composure + Wyrd to resist (though he may choose not to do so).",
        "FullDescription": [
            'The changeling learns how to give others the “gift” of his sorrowful fatalism. They share her power and outlook.'
        ],
        "FullCatch": [
            'The character clutches the recipient of her power with one hand and anoints her forehead with the ashes of a suicide or someone who died from a crime of passion.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The target’s unaltered emotions flow back to the character. She cannot use Contracts of the Sorrow-Frozen Heart for the rest of the scene.',
            '<b>Failure:</b> The target feels none of the character’s sorrow.',
            '<b>Success:</b> The target’s fatalism rows powerful enough to benefit from either the first, second or third clauses of this Contract. The character chooses the recipient’s benefit. Use successes scored on The Coldest Comfort to determine the effects of the clause on the target. If the recipient uses Fear is Nothing, use the character’s Wyrd to determine its benefits instead of the recipient’s. The character can cancel the effects of this power at any time.',
            'There are significant drawbacks to the power. The recipient’s sorrow is taxing; he loses a Willpower point. The power also automatically wracks the recipient with sorrowful, fatalistic Bedlam. The clause’s effects also automatically end if the recipient regains Willpower points from satisfying a Virtue. A changeling can choose to deny that inspiration and stick with The Coldest Comfort, but a mortal cannot.',
            'The Coldest Comfort cannot affect supernatural beings other than changelings. Normal humans can be subjected to this power, but at a grave price. The recipient suffers a new, permanent mild derangement (one that belongs to the character or a new one determined by the storyteller) at the end of the scene unless he succeeds at a Resolve + Composure roll. If the recipient already suffers from a mild derangement, “upgrade” it to a related, severe derangement. Thus, a changeling can turn a mortal into a powerful ally, but repeated uses of this power will drive him irrevocably insane. Fortunately, a mortal can evade this danger if he fulfills his Virtue while he’s under the throes of the clause. Its benefits cease, but he finds his own way out of maddening sorrow.',
            'Needless to say, using this power on a mortal usually demands a Clarity check.',
            '<b>Exceptional Success:</b> The powerful emotions the clause arouses are refined enough to prevent the recipient from losing a point of Willpower.'
        ],
        "Description": "Bestow previous clauses on others as well.",
        "Catch": "Clutches target with one hand and anoints with ashes of a suicide victim or victim of a crime of passion.",
        "Court Goodwill Requirement if not a member": "-",
        "FullCost": "3 Glamour + 1 Willpower",
        "Cost": "●●●○",
        "Dice Pool": "Mantle + Composure + Expression"
    }
]

const minorCourtContractData = [
    {
        "Rank": "N/A",
        "Name": "Directional Court Contracts",
        "Action": "",
        "FullDescription": '',
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "N/A",
        "Catch": "N/A",
        "Court Goodwill Requirement if not a member": "N/A",
        "FullCost": "",
        "Cost": "N/A",
        "Dice Pool": ""
    },
    {
        "Rank": "N/A",
        "Name": "Contracts of the Four Directions",
        "Action": "",
        "FullDescription": [
            'These Contracts were founded long ago by those of the directional Courts, and generally help a changeling find his way in this world — or cause others to lose theirs. It’s not just about the so-called cardinal directions; it’s about the space in which a changeling exists, and his innate understanding of how all the world and universe moves around him.'
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
        "FullCost": "",
        "Cost": "N/A",
        "Dice Pool": "Winter Masques 134"
    },
    {
        "Rank": "•",
        "Name": "Mindfinder",
        "Action": "Reflexive",
        "FullDescription": [
            'The changeling is able to track down another individual without any tracking skills or other information. It doesn’t provide the character with the target’s location, only the direction of that location. Mystically, the target’s chi or internal energy suddenly appears on the character’s internal radar — it may manifest as a faint humming sound that increases as one gets closer, or even a flash of light or a “floater” in one’s vision that changes as the distance between character and target decreases.'
        ],
        "FullCatch": [
            'The changeling has a lock of hair from the target.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The character’s internal compass goes wild, causing dizziness and headaches. The character suffers a -1 penalty to all rolls until she secures eight hours of uninterrupted sleep.',
            '<b>Failure:</b> The character is unable to get a bead on the target.',
            '<b>Success:</b> For the next hour, the character knows in what direction the target is. If the target moves, the character’s sense of direction toward the target adjusts accordingly. Note that the target may be moving in the opposite direction, and Speed may end up a factor in if one is able to outpace the other.',
            'The character can reactivate this clause once the hour is up in an endeavor to continue tracking that same target. Doing so, however, becomes more and more difficult as the hours go on — with each subsequent hour after the first, the character suffers a cumulative -1 penalty to the roll to activate Mindfinder.',
            'Note that the character must have at least met the target in question, even in passing. She cannot use this clause to locate targets she has never before encountered.',
            '<b>Exceptional Success:</b> The power works for two hours instead of one on this activation.'

        ],
        "Description": "Know the direction to any target",
        "Catch": "Changeling has a lock of hair from the target.",
        "Court Goodwill Requirement if not a member": "None",
        "FullCost": "1 Glamour",
        "Cost": "●",
        "Dice Pool": "Wyrd + Survival - Subject's Wits"
    },
    {
        "Rank": "••",
        "Name": "Finding the Flow",
        "Action": "Instant",
        "FullDescription": [
            'The character finds that his movement is aided by a preternatural flow that he did not before possess — perhaps he feels in step with the southerly warm wind or the harsh gales sweeping from the north. Perhaps he simply feels in tune with every element in his proximity.'
        ],
        "FullCatch": [
            'The character successfully meditated for one full uninterrupted hour within the last 24 hours.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The character’s movements are cursed for the remainder of the scene. All Physical dice pools suffer a -2 penalty during this time.',
            '<b>Failure:</b> The character is unable to find his directional flow.',
            '<b>Success:</b> The character can ignore a number of environmental dice penalties equal to successes gained (maximum of five penalty dice ignored). This works only on environmental penalties that would hamper Physical dice rolls (for instance, during a fight on an icy street, driving through a flooded parking lot, jumping across a chasm in gale-force winds or while picking a lock in total darkness). The character’s body seems to move almost of its own accord, aided by the balancing forces of the four directions. The effect lasts for a scene.',
            '<b>Exceptional Success:</b> The character also gains +1 to his Defense during this time — he finds himself almost supernaturally attuned to incoming attacks.'
        ],
        "Description": "Ignore environmental penalties",
        "Catch": "The character successfully meditated for one full uninterrupted hour within the last 24 hours.",
        "Court Goodwill Requirement if not a member": "●●●",
        "FullCost": "1 Glamour",
        "Cost": "●",
        "Dice Pool": "Wyrd + Wits"
    },
    {
        "Rank": "•••",
        "Name": "Inequity of the Center",
        "Action": "Instant",
        "FullDescription": [
            'In much of Asia, the “center” is as much a direction as north, south, east or west. One’s center is, to a point, one’s current location but it’s also more than that — it’s the axis of that person’s very being upon which all of space and time swings. This clause disrupts one’s sense of self, staggering the flow of chi in the brain and body — or, in less mystical terms, upsets the magnetic balance of a target’s internal compass with a directional curse.'
        ],
        "FullCatch": [
            'The changeling succeeds in touching a magnet to the target’s bare skin (requires a successful touch attack).'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The character loses his own center. Assume that the negative effects that would plague the intended target now plague the character, instead (see below under “success”).',
            '<b>Failure:</b> The curse fails to take hold (the opponent gets the same or more successes).',
            '<b>Success:</b> The character rolls more successes. The target feels slightly confused and dizzy, particularly in regard to his location. In system terms, the target’s Speed is halved (round down) for the remainder of the scene. This also applies to any vehicle in which the character drives or is a passenger.',
            'In story terms, this manifests in a number of ways. If walking, running or driving, the character makes persistent wrong turns without meaning to — in meaning to run through the doors of the restaurant, he accidentally instead walks into the alley just behind the restaurant without realizing he’s done so. In driving, he perhaps pulls into a dead-end or cul-de-sac, or maybe finds himself hemmed in by construction while the character’s own vehicle is able to handily escape. (In this way, the curse may manifest as obstacles as well as wrong turns.)',
            'While the target’s actual Speed is technically unaffected (a man walking 10 miles per hour still walks 10 miles per hour), the Speed score sees a drop because of constant wrong turns, obstacles and interruptions.',
            '<b>Exceptional Success:</b> The confusion further affects the target’s balance, and he assumes a -1 Defense for the remainder of the scene.'
        ],
        "Description": "Confuses a target, causing them to take many wrong turns, effectively penalizing speed",
        "Catch": "The changeling succeeds in touching a magnet to the target's bare skin.",
        "Court Goodwill Requirement if not a member": "●●●●",
        "FullCost": "1 Glamour",
        "Cost": "●",
        "Dice Pool": "Wyrd + Manipulation vs Powerstat + Survival"
    },
    {
        "Rank": "••••",
        "Name": "The Hundred Steps",
        "Action": "Extended (one roll is equivalent to one minute, successes required increase with the size of the space protected; a 100-square-foot room requires five successes, a 500-square-foot room requires 10 successes and a 1,000-square-foot room requires 15 successes)",
        "FullDescription": [
            'With this clause, a changeling protects his domicile — up to a thousand square feet — from intruders. The clause requires him to walk 100 steps away from his domicile in each of the four directions before the clause can take full effect.'
        ],
        "FullCatch": [
            'The character has two working compasses somewhere on his body at the time of the clause’s activation.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The supposedly protected room rejects the character. For as long as he remains within that space, he suffers flulike symptoms (chills, fever, coughing, nausea) that cause him a -3 dice penalty. The flu-like effects fade immediately when he leaves the space. The space remains cursed in this way for 12 hours.',
            '<b>Failure:</b> The character fails to call the four directions to protect his chosen space.',
            '<b>Success:</b> The space is blessed by the four directions that conspire to protect it from intrusion. If the space is a room or building with exits and entry points, anybody besides the character must make a successful Lockpicking roll (five successes necessary) just to open a door, window, or other point-of-entry (such as a gate, grate, manhole cover, etc.). Even if the point of entry isn’t or cannot be locked, it becomes locked during this time (even so far as manifesting a keyhole during this time frame). If the space protected has no walls, then the general area gains the following blessings, but can be penetrated without fail (as there are no points of entry able to feature the mystical locks).',
            'Once inside, anybody besides the character suffers several ill effects. His Defense and Initiative scores are halved (round up). Also, changelings and the True Fae cannot access their Contracts in this space (though they can affect the space from outside of it with no problem). The Storyteller might also declare that other supernatural creatures cannot access their magic in the protected space (vampires are cut off from Disciplines, werewolves from Gifts, Prometheans from Transmutations, mages from their spells, etc.).',
            'In story and setting terms, all but the character feels “off” while in the space. They find objects are always in their way, the might inadvertently trip on loose floorboards or simply feel queasy as they smell something strange, feel unnaturally warm, or suffer from a chill wind at their backs.',
            'This blessing lasts until the next sunrise or sundown, which-ever comes first. However, the character may continue the benefits without rolling by expending an additional two Glamour (the catch does not apply, here). If the character does so, the benefits extend for another 24 hours. He can continue these effects indefinitely.',
            '<b>Exceptional Success:</b> Not only is the space itself blessed, but the character using the clause finds himself blessed, as well.'
        ],
        "Description": "Powerful blessing upon an area to protect it from intruders",
        "Catch": "The character has two working compasses somewhere on his body",
        "Court Goodwill Requirement if not a member": "●●●●●",
        "FullCost": "2 Glamour and 1 Willpower",
        "Cost": "●●○",
        "Dice Pool": "Wyrd + Resolve"
    },
    {
        "Rank": "•••••",
        "Name": "Harmony of Portals",
        "Action": "Reflexive",
        "FullDescription": [
            'A changeling using this clause can step through one door and walk out another one miles away — in no more time than it takes to blink an eye.'
        ],
        "FullCatch": [
            'The character possesses the key to both doors.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The character steps through the door and appears in a particularly dangerous part of the Hedge.',
            '<b>Failure:</b> The character walks through the doorway and comes out the other side.',
            '<b>Success:</b> The character walks, climbs or crawls through one portal and exits out another portal of his choice within a number of miles equal to his Wyrd score.',
            'This has a few restrictions. First, it requires that each portal be closeable in some fashion — a door on hinges, a manhole cover sliding over the hole, a trap door to be shut, etc. Second, the changeling cannot come out a random door. He must have in the past seen the portal out of which he cares to exit. Choosing a random door dumps him into the Hedge — which may be fine, but it may also put him in great danger, as this portal into the Hedge is only one-way.',
            '<b>Exceptional Success:</b> The character can choose an exit portal within a range equal to twice his Wyrd score in miles.'
        ],
        "Description": "Walk between two doors, potentially separated by several miles",
        "Catch": "The character possesses the key to both doors.",
        "Court Goodwill Requirement if not a member": "N/A",
        "FullCost": "2 Glamour",
        "Cost": "●●",
        "Dice Pool": "Wyrd + Stamina"
    },
    {
        "Rank": "N/A",
        "Name": "Auroral Court Contracts",
        "Action": "",
        "FullDescription": '',
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Description": "N/A",
        "Catch": "N/A",
        "Court Goodwill Requirement if not a member": "N/A",
        "FullCost": "",
        "Cost": "N/A",
        "Dice Pool": ""
    },
    {
        "Rank": "Contracts of Potential (Dawn)",
        "Name": "N/A",
        "Action": "",
        "FullDescription": [
            'Entropy is an active force in the world, attempting to break down all aspects of reality. Left unguided and unsupported, all manner of things will deteriorate, whether they be objects falling to decay, politics tangling to disorder or ideals tarnishing into apathy. To combat this force and bring about positive change, active effort must be made. Determining where and when to bring about change is a heavy responsibility, but to ignore it is to concede the Lost existence to destruction, and that is an unacceptable fate to allow.',
            'This is the basis of the Dawn Court’s philosophy, and the bargains they’ve struck with Potential reflect their views. Because Dawn Court believes not all Lost are capable of the insight or responsibility to Lost society that must be possessed to use the Contracts of Potential wisely, Court Goodwill for Dawn is required in order for those outside the Court to purchase the Contracts of Potential. It is their hope that all Lost will eventually come to see the wisdom of the Bloody Rose, and, in doing so, play their own vital role in Lost culture’s future. They are, however, pragmatic enough to know that time has not yet come. Contracts of Potential are non-affinity Contracts for any Lost who is not a part of the Dawn Court.'
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
        "FullCost": "",
        "Cost": "N/A",
        "Dice Pool": "Swords at Dawn 138"
    },
    {
        "Rank": "•",
        "Name": "Light the Path",
        "Action": "Instant",
        "FullDescription": [
            'Lost are as capable of duplicity and subterfuge as any other sentient beings, but an accurate understanding of another’s true motives can be vital when determining what path to take forward. For the Dawn Courtier whose life is at stake (along with the lives and Clarity of others), being able to sense others’ true motivations in taking a certain action can be vital.'
        ],
        "FullCatch": [
            'The changeling has caught the target in a lie previously.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The changeling receives an incorrect motivation about the specified action or statement, and believes it to be true.',
            '<b>Failure:</b> The character cannot discern the target’s motivation.',
            '<b>Success:</b> The changeling learns one of the subject’s motivations of the specified action or statement.',
            '<b>Exceptional Success:</b> The character learns two motivations of the specified action or statement or that only a single motivation exists for it.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-", Situation: "The statement or action is currently happening or just happened in the last turn." },
                    { Modifier: "-1", Situation: "The specified statement or action is not currently pertinent to the situation at hand (ie: is not being discussed, was not recently witnessed, a similar situation is not happening, etc.)" },
                    { Modifier: "+1", Situation: "The changeling was present for the statement or action." },
                    { Modifier: "-3", Situation: "The changeling was not present, but only heard about it second hand." },
                    { Modifier: "-1", Situation: "The motives for the specified action or statement are something the targeted individual is actively hiding or considers a secret." },
                    { Modifier: "-3", Situation: "The targeted individual is not, himself, aware of his motivations for the specified action or statement." },
                ]
            }
        ],
        "Description": "Learn of the motivation of an action or statement",
        "Catch": "Previously caught the target in a lie.",
        "Court Goodwill Requirement if not a member": "None",
        "FullCost": "1 Glamour",
        "Cost": "●",
        "Dice Pool": "Wits + Wyrd vs Powerstat + Composure"
    },
    {
        "Rank": "••",
        "Name": "Read the Web",
        "Action": "Instant",
        "FullDescription": [
            'No man is an island. When decisive action must be taken, knowing the relationship between those involved can help to minimize potential unexpected backsplash from said action. Being able to sense where one’s allies or enemies exist is even more helpful. A changeling with this clause can perceive and interpret the relationships of those around him, as represented by a web of ethereal threads perceivable only to him.'
        ],
        "FullCatch": [
            'The changeling shares a pledge with the target.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The character misreads the relationship threads between the target and other individuals. This could manifest as if no web existed, or in a wholly inaccurate set of readings.',
            '<b>Failure:</b> The changeling is unable to perceive any relationship ties between the target and others.',
            '<b>Success:</b> The character perceives the connections between the target and those presently around him as translucent threads that run between them. This effect lasts only for a single turn, and the amount of information gleaned is equal to the number of successes achieved (see Relationship Threads sidebar for details.) Examples of information gleaned include but are not limited to: whether the target has a relationship tie with the other individual, the general length of acquaintance, the intensity of the target’s feelings for or about the other individual, the dominant emotion the target is feeling for or about the other individual at the moment, whether the target shares an oath with the other individual and how significant that oath is.',
            '<b>Exceptional Success:</b> As per a success, however the number of pieces of information gleaned is twice the number of successes.',
            '<b>Relationship Threads:</b> The relationship threads brought to light by the use of Read the Web represent the connection between two individuals in a visible fashion. Read the Web gives the character using it the ability to see and understand the relationship threads connecting his target with others present at that time. The changeling can choose to gain one piece of information about a thread between his target and any other person present. The first success is enough to tell if there is a relationship thread present between the target and one other individual present. If more successes are achieved, the changeling can either note the existence of threads between the target and other individuals, or garner more details on the first thread noted (assuming that a thread exists.)',
            'Relationship threads grow in dimension over time, so the bonds between two individuals who have just met might be as narrow as a spider’s web, while those between Lost who shared decades’ worth of a durance together might appear as a thick rope. One trait the changeling can look for is the thickness of the thread, from which he can garner a general idea of whether the target has known the other individual for a long time or is a recent acquaintance. As with all information garnered using this clause, the data is general. A lifelong acquaintance will obviously be thicker than newly-met individuals, but exact months, or even years of time are impossible to tell.',
            'Other traits that can be learned from a relationship thread are the intensity and general emotion felt by the target for the person on the other end of the thread. Different relationship types are represented visually through different colors. Romantic love glows a bright and healthy pink, with lust and passion tinting the connections into the burgundy range. Anger or hatred flares a jarring orange, while loathing or distaste falls into the icy blue-white range. Bland or casual acquaintanceships are represented by threads that are likewise bland and dull in color, whereas intense emotions (positive or negative) appear vibrant or even luminescent.',
            'Oathbound individuals’ ties to another person are woven through with tiny red decorative threads, with the ornamental threads being thicker to reflect weightier oaths.',
            'Note that this clause shows only the general feelings of the target for the person on the other end of the relationship thread, not the other person’s feelings for them. While some relationships will be equal in both directions, if a stalker who is obsessed with someone was the target, his thread might show a bright and loving thread for his object of admiration. On the other hand, if the object of his admiration was the target, her thread to him might show apathy or distaste.'
        ],
        "Description": "Determine the nature of a relationship between two people through a translucent strand that connects.",
        "Catch": "The Changeling shares a Pledge with the target",
        "Court Goodwill Requirement if not a member": "●●●",
        "FullCost": "2 Glamour",
        "Cost": "●●",
        "Dice Pool": "Intelligence + Wyrd - Subject's Composure"
    },
    {
        "Rank": "•••",
        "Name": "Martyr's Will",
        "Action": "Instant",
        "FullDescription": [
            'Sometimes doing what must be done to help bring about change demands more than the average Lost can provide. For those who steel themselves to the task, however, using Martyr’s Will can bolster their resolve and supplement their bravery even beyond what Heroic Effort normally can reach.'
        ],
        "FullCatch": [
            'The changeling deliberately sheds a few drops of his own blood.'
        ],
        "Roll Results": [
            '<b>Drawback:</b> Using Martyr’s Will stretches the potential of even the strongest Lost’s Willpower. After successfully activating this clause, the changeling may not regain Willpower by any means for the next 24 hours.',
            '<b>Dramatic Failure:</b> The changeling’s will is simply not strong enough to bolster them. The Contract fails, and any attempts to spend Willpower to gain bonuses to actions or Resistance efforts garner one less die bonus than normal (ie: only 2 for Heroic Effort and 1 for Resistance efforts.)',
            '<b>Failure:</b> The Contract fails to have any effect.',
            '<b>Success:</b> For the remainder of the scene after activating Martyr’s Will, the changeling receives an additional +2 dice bonus (for a total of a +5 dice bonus) to any action where Willpower is being expended for Heroic Effort (pp. 132-133 of the World of Darkness Rulebook.) They also receive a +2 die bonus to any Resistance efforts where Willpower is expended (for a total of a +4 dice bonus.)',
            '<b>Exceptional Success:</b> As with a normal success, but the effect of Martyr’s Will lasts until the next sunrise.'
        ],
        "Description": "Increase extra dice when spending Willpower. Drawback of target being unable to regain willpower for the next 24 hours.",
        "Catch": "Deliberately shed a few drops of blood",
        "Court Goodwill Requirement if not a member": "●●●●",
        "FullCost": "3 Glamour",
        "Cost": "●●●",
        "Dice Pool": "Wyrd + Resolve"
    },
    {
        "Rank": "••••",
        "Name": "Shift the Foundation",
        "Action": "Instant",
        "FullDescription": [
            'Sometimes one’s own efforts are not enough to create great change, and allies must be formed or opinions swayed. This clause allows the Dawn Court to create fundamental (although temporary) changes in others, shifting their Virtue or Vice to one which is more conducive to the targeting changeling’s goals.'
        ],
        "FullCatch": [
            'The changeling and target are actively involved in a conversation related to the Vice or Virtue he hopes to shift the target towards.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The targeted individual’s Virtue or Vice is unchanged. Instead, the changeling’s Virtue or Vice (whichever he was attempting to shift) changes to match that of the target.',
            '<b>Failure:</b> The clause fails to have any effect.',
            '<b>Success:</b> The target’s Virtue or Vice temporarily changes to that specified by the changeling. If the target’s Virtue or Vice is already what the changeling is attempting to shift it to (either naturally or because it has been successfully shifted previously), that Virtue or Vice is strengthened, and the target must make a successful Resolve + Composure roll (or spend a Willpower) to avoid taking action in any situation where their Virtue or Vice comes into play. Either effect lasts until the next sunrise.',
            '<b>Exceptional Success:</b> As with a normal success, but the target makes a Resolve + Composure check at the next dawn. If he fails, the effects continue until sunset. Tests are run at each dawn and sunset and the effects last until the target succeeds in his roll.'
        ],
        "Description": "Temporarily change the targets Virtue or Vice.",
        "Catch": "Changeling and Subject are conversing about Virtue or Vice targeted as the result of the Contract.",
        "Court Goodwill Requirement if not a member": "●●●●●",
        "FullCost": "3 Glamour",
        "Cost": "●●●",
        "Dice Pool": "Dusk Court Mantle + Manipulation + Expression vs Composure + Subterfuge"
    },
    {
        "Rank": "•••••",
        "Name": "Tenacity of Hope",
        "Action": "Instant",
        "FullDescription": [
            'Some victories are simply too important to allow anything to keep them from being accomplished. By using Tenacity of Hope, a changeling can supernaturally dedicate himself towards achieving a certain goal and be aided by the force of the Wyrd in their efforts.',
            'A changeling attempting to activate this clause must focus it towards a certain specific goal that is achievable through the action of the Lost in question. The Storyteller is the final authority on what goals are acceptable to use for this clause, and whether a specific goal has been accomplished or not. Specific goals such as “To discover who betrayed my motley” is likely acceptable. “To bring about Mara-Zen’s social downfall” might be acceptable, although vague. “To have the sun come up in the morning” or other accomplishments that are assured to happen through no action of the Lost are not appropriate goals — unless for some reason the sun is currently being prevented from rising in some fashion and the changeling has set the goal of fixing the matter.',
            '“To survive” is never an acceptable goal for the purpose of this clause. The Wyrd will not make bargains in a situation where its price (the drawback) has no chance of being fulfilled.'
        ],
        "FullCatch": [
            'The target is using this Contract for a selfless purpose (ie: to benefit someone other than himself, or Lost society as a whole.)'
        ],
        "Roll Results": [
            '<b>Drawback:</b> Once the Contract is successfully activated, if the specified task is not fully accomplished before the Contract wears off, the character receives a penalty of -3 dice on all attempted actions and a -2 dice penalty on all Resistance efforts (not just those related to the goal) for a number of days equal to the duration of the clause. If the goal is achieved during the drawback, the drawback ends immediately.',
            '<b>Dramatic Failure:</b> The changeling fails to receive any benefit to attempts to accomplish the specified task, and loses the benefit of the 10-again rule on any attempts related towards that task for the next 24 hours; attempts by the changeling to activate Tenacity of Hope on that that specific task within the next 24 hours will automatically fail.',
            '<b>Failure:</b> The clause fails to have any effect.',
            '<b>Success:</b> The changeling receives the benefits of the 8-again rule towards any actions taken to accomplish the specific goal focused on while activating it. As well, any action or resistance rolls directly related to achieving that goal are made as if they were under the effects of Heroic Effort rules (p. 132, World of Darkness Rulebook). These include a +3 die bonus to any actions taken towards achieving the goal and a +2 die bonus to Resistance efforts related to attempts to deter or delay their efforts towards the goal. These bonuses end when the task is completed, or after a number of days equal to the number of successes achieved, whichever comes first.',
            'If the goal is accomplished before the Contract wears off, no drawback is enacted. Once activated, Tenacity of Hope cannot be voluntarily “turned off” before the duration runs out or the task is accomplished, whichever comes first.',
            '<b>Exceptional Success:</b> As with a normal success, but the changeling receives the benefits for a number of days equal to twice the amount of successes rolled or until the goal is achieved, whichever comes first.'
        ],
        "Description": "Massive benefits towards a goal, such as 8-again, etc. Drawback: If goal is not reached within time period, suffer penalties until goal or equal time is met.",
        "Catch": "Target is using this Contract for a selfless Purpose.",
        "Court Goodwill Requirement if not a member": "N/A",
        "FullCost": "3 Glamour and 1 Willpower",
        "Cost": "●●●○",
        "Dice Pool": "Wyrd + Resolve"
    },
    {
        "Rank": "N/A",
        "Name": "Contracts of Entropy",
        "Action": "",
        "FullDescription": [
            'The end is predestined; it is only our path between here and there which we have any control over. All things will fail in the end; we can only shine as brightly as we can before the night envelops us entirely. This is the basis of the Dusk Court’s philosophy, and the bargains they’ve struck with Entropy reflect this fatalistic belief. Because the Dusk Court believes that the truth behind their fatalism affects all Lost, not only those of their own Court (and because they believe that the Fate of all Lost is to eventually come to realize the truth in their philosophy), no Court Goodwill for Dusk is required to purchase the Contracts of Entropy. Whatever pact was struck with Entropy, apparently it was a generous one. They are, however, considered non-affinity Contracts for any Lost who is not a part of the Dusk Court. Those with Dusk Court’s Goodwill can also purchase them as affinity Contracts.'
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
        "FullCost": "",
        "Cost": "N/A",
        "Dice Pool": "Dancers in the Dusk 141"
    },
    {
        "Rank": "•",
        "Name": "Babel's Curse",
        "Action": "Instant",
        "FullDescription": [
            'Communication is based on a carefully crafted set of common understanding, symbolism and meaning. An utter breakdown of one’s ability to give and share information is a devastating blow.'
        ],
        "FullCatch": [
            'The changeling writes the target’s name or commonly-used nickname on a piece of paper and tears it into tiny pieces.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The Contract backfires, and the changeling suffers from the effects of Babel’s Curse for the next 24 hours.',
            '<b>Failure:</b> The Contract has no effect.',
            '<b>Success:</b> The targeted individual is unable to communicate in any manner for a number of turns equal to the changeling’s successes. This includes verbal, written, physical or supernatural means. It is not simply a matter of losing one’s voice or forgetting how to write; the shared basis for communicating ideas breaks down for the target, leaving them able to speak words, write letters or use gestures, but not in such a way that they have any meaning for those around them. The most fundamental of communications: a shout of alarm, a cry of pain or a joyful laugh can be communicated. Anything more complex is scrambled until its meaning is lost entirely.',
            '<b>Exceptional Success:</b> As with an ordinary success, however, for the duration of the Contract the targeted individual can also not understand any written, verbal, physical or supernatural communication more complex than the fundamentals expressed above, effectively shutting off communication entirely as long as the Contract is in effect.'
        ],
        "Description": "Prevent another from communicating",
        "Catch": "Write target's name or common nickname on a piece of paper then tear it to pieces",
        "Court Goodwill Requirement if not a member": "None",
        "FullCost": "1 Glamour",
        "Cost": "●",
        "Dice Pool": "Intelligence + Expression + Mantle (Dusk) - Resolve"
    },
    {
        "Rank": "••",
        "Name": "Sense the Impending Doom",
        "Action": "Instant",
        "FullDescription": [
            'The changeling invoking this clause is able to sense disaster headed his direction. His sheer certainty that something bad will without a doubt befall him becomes not paranoia, but a supernatural sensitivity to the many dooms lying in wait.'
        ],
        "FullCatch": [
            'The changeling has consumed at least a serving of caffeinated beverage within the last hour.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The changeling’s fatalism reaches paranoid levels, effectively undermining his ability to sense potential true danger. For the next 24 hours, all Perception rolls he makes suffer from a -2 penalty. This penalty is cumulative, if he suffers multiple instances of dramatic failure while making attempts to activate this Contract.',
            '<b>Failure:</b> The changeling’s senses are unaltered.',
            '<b>Success:</b> The character’s acceptance that bad things will happen to him gives him the ability to react to them faster when they do. After successfully activating this Contract, the changeling receives the benefit of the Danger Sense Merit for the scene. If he already possesses the Danger Sense Merit, the normal +2 modifier becomes +4 for the duration of the Contract. As well, when entering into an inherently dangerous situation with the Contract activated (even one which does not involve an impending ambush) the Lost experiences an uneasy feeling. The Contract gives no indication of the nature or source of the danger, but it does grow somewhat stronger should the Lost continue towards a dangerous Fate. This power is not specific enough to determine which wire is connected to a bomb and which is not, for example, but might be used to warn a changeling that opening or passing through a certain door is more dangerous than remaining in the room or going back the way he came.',
            '<b>Exceptional Success:</b> As per a success, but the effects last for a 24-hour period.'
        ],
        "Description": "Detect dangerous situations, react to danger faster",
        "Catch": "Consume at least a serving of caffeinated beverage within the last hour.",
        "Court Goodwill Requirement if not a member": "●●●",
        "FullCost": "1 Glamour",
        "Cost": "●",
        "Dice Pool": "Wits + Occult + Mantle (Dusk)"
    },
    {
        "Rank": "•••",
        "Name": "Gift of the Skald",
        "Action": "Instant",
        "FullDescription": [
            'This clause allows the Dusk Court to share the strength gleaned from their acceptance of their Fate with those around them. It is often used as a recruiting tool to the Dusk Court, by those who believe that it is the ultimate Fate of all Lost to join the Glacial Axe.',
            'The Gift of the Skald bonus cannot be stacked with other applications of the same Contract. Any individual may only be affected by one “application” of this Contract at any given time.'
        ],
        "FullCatch": [
            'The changeling is a member of the Dusk Court and proselytizes to the target(s) for a minimum of five minutes about the truth of the Dusk philosophy.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The changeling suffers a -2 penalty to all Resistance-based rolls for the next 24 hours.',
            '<b>Failure:</b> The Contract fails to have any effect.',
            '<b>Success:</b> For a number of turns equal to the changeling’s successes, each target receives a +2 bonus to all Resistance rolls made.',
            '<b>Exceptional Success:</b> As with a normal success, but the targets’ bonuses last for 24 hours.',
            {
                'Suggested Modifiers': [
                    { Modifier: "+1", Situation: "At least half the targeted group is Dusk Court." },
                    { Modifier: "+1", Situation: "The changeling has bested at least one of the target group in combat within the last 24 hours." },
                ]
            }
        ],
        "Description": "Target(s) gain a bonus to Resolve checks",
        "Catch": "Invoker is a member of Dusk and spends at least 5 minutes proselytizing on the Dusk philosophy.",
        "Court Goodwill Requirement if not a member": "●●●●",
        "FullCost": "1 Glamour per target (to a maximum of the changeling’s Wyrd in targets) + 1 Willpower",
        "Cost": "● per target + ○",
        "Dice Pool": "Presence + Persuasion + Mantle (Dusk) (vs target's Resolve + Wyrd if they WANT to resist)"
    },
    {
        "Rank": "••••",
        "Name": "Hero's Stand",
        "Action": "Instant Contested",
        "FullDescription": [
            'Using this clause allows the changeling to draw a proverbial line in the sand and declare a formal duel against any single enemy or foe within earshot of him. While this challenge does not force the enemy to engage him in battle, it gives the changeling strong bonuses when fighting his declared enemy, and curses the foe who would run rather than face him.',
            'The changeling indicates his target, challenging him in no uncertain terms. This can be visual (making an obscene gesture) or verbal (anything from yelling “Hey you!” to a formal declaration of challenge.) The target must be able to perceive the challenge (visually or audibly) but the Contract makes the nature of the challenging words or gesture immediately apparent.'
        ],
        "FullCatch": [
            'The changeling is standing on something which marks off a small territory (no more than 5 foot by 5 foot). This can be as simple and temporary as a blanket thrown on the ground, or as elaborate or permanent as a formal Holm-gang square or inlayed square of flooring. If the changeling uses this catch to activate the Contract, all effects of the Contract (bonuses and target’s curse) end immediately if he steps (or is forced) outside of that marked ground.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The changeling suffers a -2 penalty to all Brawl or Weaponry rolls for the next 24 hours, and the Glamour is wasted. The target is aware he has been challenged and may respond, but is under no ill effects if he does not.',
            '<b>Failure:</b> The Contract fails to have any effect and the Glamour is wasted. The target is aware that he has been challenged and may respond, but is under no ill effects if he does not.',
            '<b>Success:</b> For a number of turns equal to the changeling’s successes, the changeling’s Brawl or Weaponry (whichever was used in the challenge) is increased by a number of dots equal to the number of successes rolled, but only against the specified target. As well, should the targeted enemy attempt to flee or refuse to engage the changeling in combat, he is cursed with a -2 penalty to all Composure rolls for a number of turns equal to the changeling’s number of successes.',
            '<b>Exceptional Success:</b> As with a normal success, but the target’s penalty curse lasts for 24 hours.',
            {
                'Suggested Modifiers': [
                    { Modifier: "+1", Situation: "The changeling is wielding an axe." },
                    { Modifier: "+1", Situation: "The changeling and his target have already exchanged blows within the last 24 hours." },
                    { Modifier: "+1", Situation: "The target’s allies in the immediate area outnumber the changeling’s allies in the immediate area (+1 for each ally over to a maximum of +5)" },
                    { Modifier: "-1", Situation: "The changeling’s allies in the immediate area outnumber the target’s allies in the immediate area (-1 for each ally over to a maximum of -5)" },
                ]
            }
        ],
        "Description": "Challenge a target to gain a bonus to Brawl/Weaponry, they take Composure penalty if flee",
        "Catch": "Issue challenge while standing in a marked space <5' square.",
        "Court Goodwill Requirement if not a member": "●●●●●",
        "FullCost": "1 Glamour + 1 Willpower",
        "Cost": "●○",
        "Dice Pool": "Resolve + Brawl or Weaponry + Mantle (Dusk) vs Composure + Wyrd"
    },
    {
        "Rank": "•••••",
        "Name": "The Centre Cannot Stand",
        "Action": "Instant",
        "FullDescription": [
            'Even Wyrd is not immune to the effects of entropy, and with sufficient effort a changeling may turn the Wyrd against itself, dispelling an active Contract. The targeting changeling must specify what Contract she are attempting to cancel. If the Contract is specifically cast on a target object or individual, she must specify the object or individual as well.'
        ],
        "FullCatch": [
            'The changeling herself possesses the Contract which she is targeting and has activated it within the last 24 hours.'
        ],
        "Roll Results": [
            '<b>Dramatic Failure:</b> The attempt to nullify the Contract fails and some unpredictable but negative by-product befalls the changeling. This effect is left to the Storyteller’s discretion. Options include (but are not limited to) having the changeling fall under the effects of the Contract she was attempting to dispel (mirroring the level and duration that it was originally activated at), a loss of half (rounded up) of her remaining Glamour, delivering lethal damage equal to the dot level of the Contract she was targeting, or bestowing a major derangement for a number of days equal to the dot level of the Contract she was targeting. Derangements gained in this way do trigger clarity checks at the appropriate level. Storytellers are encouraged to elaborate on cosmetic but neutral effects for this backlash of Wyrd, as well.',
            '<b>Failure:</b> The changeling is unable to affect the targeted Contract. If the Contract is actively affecting someone else, the affected individual may make a Wyrd + Occult test to attempt to determine that someone was attempting to dispel the Contract. An exceptional success on this test allows them to identify the source of the attempt as well.',
            '<b>Success:</b> The targeted Contract is nullified. If the Contract is actively affecting someone else, the affected individual may make a Wyrd + Occult test to determine that someone was attempting to dispel the Contract. An exceptional success on this test allows him to identify the source of the attempt as well.',
            '<b>Exceptional Success:</b> The Contract is nullified, and none of the previously-mentioned tests can be made to determine where the dispelling came from. This does not stop others from assuming the Lost is guilty, if they are aware of her ability to cancel Contracts, nor does it protect her action from being sensed by other abilities or Contracts (such as Wyrd’s Eye.)',
            {
                'Suggested Modifiers': [
                    { Modifier: "-1", Situation: "The Lost who activated the targeted Contract is of a higher Wyrd than the changeling attempting to cancel it (-1 per level higher)" },
                    { Modifier: "+1", Situation: "The changeling has witnessed the specific Contract she is attempting to nullify being activated" },
                    { Modifier: "+1", Situation: "The changeling spends additional Glamour into her efforts (beyond the required 2, +1 modifier per extra Glamour spent up to a maximum of 3)" },
                ]
            }
        ],
        "Description": "Nullify a target's Contract",
        "Catch": "The Changeling knows and has used the target Contract in the last 24 hours.",
        "Court Goodwill Requirement if not a member": "N/A",
        "FullCost": "2 Glamour",
        "Cost": "●●",
        "Dice Pool": "Intelligence + Occult + Mantle (Dusk) - level of Contract"
    }
]

const goblinContractData = [
    {
        "Rank": "N/A",
        "Name": "Contracts of Goblin Fortune",
        "Benefit": "N/A",
        "Action": "",
        "FullDescription": [
            'These Contracts impart some significant blessing or curse upon the target and can either protect the target from some doom or cause a significant calamity. Succeeding in any of these Contracts automatically causes the changeling to permanently lose one dot of Willpower. By spending eight experience points, the changeling can regain this lost dot of Willpower.'
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Drawback": "N/A",
        "Catch": "N/A",
        "FullCost": "",
        "Cost": "N/A",
        "Dice Pool": "N/A",
        "Book": "Rites of Spring 117"
    },
    {
        "Rank": "•",
        "Name": "Fortune’s Favor",
        "Benefit": "Change a single roll into a rote or a chance roll",
        "Action": "Instant",
        "FullDescription": [
            'The changeling can extend or withdraw Fortune’s Favor to any single dice roll. This Contract can be cast reflexively as the roll is made, but before the dice have been rolled, or the character can use it ahead of time, whenever the character knows the roll will be made. The character can use this Contract to affect any single roll, and can either specify general conditions such as having this Contract affect the next attack upon the character or more specific conditions such as the next attack the character makes on one of the Gentry or the next attack on the character by someone wielding a weapon that does aggravated damage. Using this Contract costs the changeling a permanent dot of Willpower.'
        ],
        "FullCatch": [
            'The character is using this Contract to protect a close friend from harm.'
        ],
        "Roll Results": [
            'Dramatic Failure: The character loses one dot of Willpower and gains nothing in return.',
            'Failure: The Contract fails, and the desired roll is unaffected.',
            'Success: The character can cause a single desired roll to either gain the rote quality (reroll any failed dice once) or to become a chance roll. The character could pick a lock or drive in a high-speed care chase through heavy traffic with consummate skill, or cause the driver of the car pursuing him in the high-speed chase to drive exceptionally poorly.',
            'Exceptional Success: Any roll the character gives the rote quality to also gains the 8 again quality. In any chance roll, the target must roll the chance die twice and take the worse of the two rolls.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-1", Situation: "The character is using the roll to cause someone else to come to harm." },
                    { Modifier: "+1", Situation: "The character is using this Contract in advance of the roll being made." }
                ]
            }
        ],
        "Drawback": "Expensive cost to invoke. Must spend a willpower dot.",
        "Catch": "Used to protect a close friend from harm",
        "FullCost": "1 Glamour + 1 dot of Willpower",
        "Cost": "●",
        "Dice Pool": "Wyrd + Manipulation",
        "Book": "RoS 117"
    },
    {
        "Rank": "••",
        "Name": "Fortune’s Swift Blessing",
        "Benefit": "Change a chance roll into a normal roll or a normal roll into an exceptional success",
        "Action": "Reflexive",
        "FullDescription": [
            'The character can avert disaster and guarantee exceptional success, if she’s willing to pay the cost.'
        ],
        "FullCatch": [
            'The character is using this Contract when she strikes a blow against a sworn enemy.'
        ],
        "Roll Results": [
            'Dramatic Failure: The character loses one dot of Willpower and gains nothing in return.',
            'Failure: The Contract fails, and the desired roll is unaffected.',
            'Success: The character can reflexively transform a single chance roll into a normal roll where he rolls his normal dice pool. If used upon a roll that is not a chance roll, this Contract automatically transforms that roll into an exceptional success, where the character obtains five successes. If used upon an extended action, this roll provides five successes toward the target number. The character can use this Contract to affect her own rolls and the rolls of any character who she can see clearly.',
            'Exceptional Success: A chance roll becomes a normal roll at the character’s full dice pool, with an added bonus equal to the character’s Wyrd. A normal, non-chance roll gains a total of 10 successes for normal and extended actions.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-1", Situation: "The changeling cannot clearly see the character making the roll." },
                    { Modifier: "+1", Situation: "The changeling is fighting a duel or other prearranged battle." }
                ]
            }
        ],
        "Drawback": "Expensive cost to invoke. Must spend a willpower dot.",
        "Catch": "Used when striking a blow against a mortal enemy",
        "FullCost": "2 Glamour + 1 dot of Willpower",
        "Cost": "●●",
        "Dice Pool": "Wyrd + Wits",
        "Book": "RoS 117"
    },
    {
        "Rank": "•••",
        "Name": "Fortune’s Bane",
        "Benefit": "Exceptional success become normal successes, normal successes become failures and chance rolls dramatically fail at 7 or lower until the next sunrise or sunset",
        "Action": "Instant and contested",
        "FullDescription": [
            'If the changeling is willing to make the sacrifice, she can curse a target with vast ill luck until the sun next sets or rises.'
        ],
        "FullCatch": [
            'The target has publicly lied about the changeling in an effort to turn public or official opin- ion against her.'
        ],
        "Roll Results": [
            'Dramatic Failure: The character loses one dot of Willpower and gains nothing in return.',
            'Failure: The Contract fails, and the target’s luck is unaffected.',
            'Success: Until the sun next rises or sets, the target is cursed with horrible luck. Every roll that the target makes is automatically a failure. The only exceptions are rolls on which the target makes an exceptional success. Under the influence of this curse, an exceptional success is treated as a single normal success, while every other roll becomes a failure. This curse subtracts no dice from the target’s dice pool, and so a roll made under this curse is no more likely to be a chance roll. However, if the target does have to make a chance roll, this roll is a normal failure if the target rolls an 8 or higher and a dramatic failure of the target rolls any lesser number. All of these failures seem perfectly ordinary and explainable, but the target does appear to be suffering from a combination of exceptionally bad luck and a temporary lack of either skill or attention. To use this Contract on a target, the changeling must either touch the target or look at him clearly from no more than Wyrd feet away.',
            'Exceptional Success: The curse continues to affect the target for three full days.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-2", Situation: "The changeling does not know the target’s name." },
                    { Modifier: "+2", Situation: "The changeling is touching the target." }
                ]
            }
        ],
        "Drawback": "Expensive cost to invoke. Must spend a willpower dot.",
        "Catch": "Target publicly lied about the user to turn public or official opinion against the user",
        "FullCost": "2 Glamour + 1 dot of Willpower",
        "Cost": "●●",
        "Dice Pool": "Wyrd + Subterfuge vs. Powerstat + Resolve",
        "Book": "RoS 118"
    },
    {
        "Rank": "••••",
        "Name": "Distracting the Hounds",
        "Benefit": "Escape from any pursuit or confrontation",
        "Action": "Instant",
        "FullDescription": [
            'The character creates a “coincidental” distraction that allows her and her companions to escape any pursuit or even to break off combat and escape without fear of attack.'
        ],
        "FullCatch": [
            'The changeling is being pursued by hobgoblins.'
        ],
        "Roll Results": [
            'Dramatic Failure: The character loses one dot of Willpower but does not succeed in escaping from her attackers or pursuers.',
            'Failure: The Contract fails, and the character fails to escape but also does not lose any Willpower or Glamour.',
            'Success: Your character and a number of companions equal to twice her Wyrd can escape from any pursuit or confrontation. The characters’ pursuers or opponents are all completely distracted for five minutes per success rolled. If the character and her companions are out of their sight once this distraction ends, then the pursuers are unable to locate the characters or find any traces of their passage. These pursuers may continue to search for the characters, but the pursuers lack any information about the characters’ current whereabouts. In addition to making the characters able to flee pursuit, this Contract works equally well if the characters are surrounded by a group of pursuers who are closing in for attack or even in the midst of a combat. However, this Contract automatically fails if any of the characters protected by this Contract attacks one of their pursuers or attackers while they are distracted. This Contract works on any number of pursuers and on anyone from the police to the Gentry. However, if any of the pursuers or attackers are changelings or True Fae, subtract the highest Wyrd of the pursuers from the roll. The nature of the distraction produced by this Contract is up to the Storyteller. It could be anything from the pursuers being called to a more urgent matter to a mistaken report that the characters are either decoys or unimportant or even simply all of the pursuers becoming frightened, distracted or mistaking the situation so that they briefly pause and look around them.',
            'Exceptional Success: The pursuers or attackers are distracted for one hour, and after this time, the pursuers lose all interest in pursuing the characters. If the pursuers either have an excellent reason to continue to pursuit or are compelled to do so, perhaps because the characters are wanted fugitives, the pursuit continues but becomes desultory and is regarded as a relatively low priority. However, if the characters attack their pursuers or otherwise call negative attention to themselves, the effects of this Contract instantly end and pursuing the characters again becomes an important priority.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-2", Situation: "The changeling or one of her companions has already caused at least one of the pursuers or attacks to suffer at least one point of aggravated damage." },
                    { Modifier: "+2", Situation: "The changeling and one of her companions have done no damage to any of the attackers or pursuers during the pursuit or attack." }
                ]
            }
        ],
        "Drawback": "Expensive cost to invoke. Must spend a willpower dot.",
        "Catch": "User is being pursued by Hobgoblins",
        "FullCost": "3 Glamour + 1 dot of Willpower",
        "Cost": "●●●",
        "Dice Pool": "Wyrd + Stealth - Subject's Powerstat",
        "Book": "RoS 118"
    },
    {
        "Rank": "•••••",
        "Name": "Recalling the Lost",
        "Benefit": "Rescue anyone abducted by the Fae",
        "Action": "Extended. The number of successes necessary to activate this Contract is equal to twice the num- ber of days the abducted person has been gone. Each roll requires one turn, and the Contract is activated on the turn in which the target number of successes if reached or exceeded. The Glamour cost for the Contract must be paid the turn the first roll is made. Performing any other action cancels the Contract. However, any Glam- our expenditures are not recovered. However, the dots of Willpower are paid only if the Contract is successful. If the changeling abandons the attempt before it succeeds, she does not lose any Willpower.",
        "FullDescription": [
            'When needed, freedom from torment can be the greatest of blessings. The character can call back someone recently abducted by the Fae. The changeling can call back only someone who has been abducted within the last week. The longer the person has been gone, the more difficult he is to recover. This Contract can be performed only if the changeling can see and touch the victim’s fetch.'
        ],
        "FullCatch": [
            'The changeling is using the Contract to rescue a child younger than seven years old.'
        ],
        "Roll Results": [
            'Dramatic Failure: The victim remains in Arcadia, but the fetch dies in a manner that looks as if the changeling beat the fetch to death.',
            'Failure: The Contract fails, the victim remains in Faerie and the fetch is unharmed.',
            'Success: The changeling speaks loudly to the fetch and, at the climax of the ritual, grabs the fetch, who is rendered unable to move by the power of the ritual. The changeling shakes the fetch and throws her through a portal into Arcadia that opens at the culmination of this Contract. An instant later, the abducted person falls through the portal, alive, unharmed and still mortal, but almost certainly very confused. In some cases, the fetch either pleads with the changeling not to send her to Faerie or cries for help, but once the changeling has begun using this Contract, the fetch can do nothing other than speak. The instant the changeling succeeds in opening the portal into Arcadia and throwing the fetch through, he permanently gives up two dots of Willpower.',
            'Exceptional Success: The power of the ritual is sufficient that it prevents anyone outside of the immediate vicinity of the changeling and the fetch from hearing or seeing anything out of the ordinary, including any sounds of struggle or cries for help. Also, the rescued victim may or may not remember what happened, but is not traumatized by the event.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-1", Situation: "The changeling is being paid to save the target." },
                    { Modifier: "+1", Situation: "The target is a blood relative of the changeling." }
                ]
            }
        ],
        "Drawback": "Expensive cost to invoke. Must spend 2 willpower dots.",
        "Catch": "Used to recall a child younger than seven",
        "FullCost": "",
        "Cost": "●●●●",
        "Dice Pool": "Wyrd + Occult",
        "Book": "RoS 119"
    },
    {
        "Rank": "N/A",
        "Name": "Contracts of Goblin Transformation",
        "Benefit": "N/A",
        "Action": "",
        "FullDescription": [
            'These Contracts of Sacrifice transform the target in a significant and often permanent manner.'
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Drawback": "N/A",
        "Catch": "N/A",
        "FullCost": "",
        "Cost": "N/A",
        "Dice Pool": "N/A",
        "Book": "Rites of Spring 120"
    },
    {
        "Rank": "•",
        "Name": "Healing Sacrifice",
        "Benefit": "Heals any and all wounds or diseases",
        "Action": "Instant",
        "FullDescription": [
            'The changeling can cause a target to instantly heal any wound or illness, but must pay a dot of permanent Willpower to accomplish this healing. The changeling can use this Contract on any human, changeling, hobgoblin or other living supernatural being, including the changeling herself.'
        ],
        "FullCatch": [
            'The changeling is using this Contract to heal or cure a blood relative.'
        ],
        "Roll Results": [
            'Dramatic Failure: The character loses the dot of Willpower, but the target is not healed.',
            'Failure: The Contract fails; the target is not healed, and the changeling does not lose a dot of Willpower.',
            'Success: This Contract heals all of the target’s wounds and cures any diseases she is suffering from. Immediately after this Contract is used, the target falls briefly unconscious and cannot be awakened. The character remains unconscious for five minutes, minus one minute per success rolled on this Contract. At the end of this time, the target wakes up in perfect health and feeling well rested. Succeeding in this Contract causes the changeling to permanently lose one dot of Willpower. By spending eight experience points, the changeling can regain this lost dot of Willpower. Us- ing this Contract does not remove scars or other exist- ing damage from already healed injuries or illnesses and does nothing to alleviate congenital conditions such as poor eyesight or a missing limb.',
            'Exceptional Success: The target does not fall un- conscious and also heals all wounds twice as fast as normal for the next week.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-1", Situation: "The changeling is using this Contract on himself." },
                    { Modifier: "+1", Situation: "The target was injured within the last five minutes or has just noticed symptoms of her illness." }
                ]
            }
        ],
        "Drawback": "Expensive cost to invoke. Must spend a willpower dot.",
        "Catch": "Used to heal or cure a blood relative",
        "FullCost": "1 Glamour + 1 dot of Willpower",
        "Cost": "●",
        "Dice Pool": "Wyrd + Medicine",
        "Book": "RoS 120"
    },
    {
        "Rank": "••",
        "Name": "Seven-Year Gift",
        "Benefit": "Target does not age for the next seven years",
        "Action": "Instant",
        "FullDescription": [
            'By permanently reducing her Willpower, the character can give a target seven extra years of life.'
        ],
        "FullCatch": [
            'The target is a blood relative of the changeling within three generations.'
        ],
        "Roll Results": [
            'Dramatic Failure: The changeling loses a dot of Willpower, but does not succeed in granting the target a longer life.',
            'Failure: The Contract fails; the changeling loses no Willpower, and the target’s lifespan remains unchanged.',
            'Success: The changeling loses a dot of Willpower, and the target will not age for the next seven years (though she is not protected from disease or other potential ills). By spending eight experience points, the changeling can regain this lost dot of Willpower. To use this Contract, the changeling must touch the target. However, the target does not need not know what is being done.',
            'Exceptional Success: The changeling loses a dot of Willpower, and the target becomes seven years younger. The target cannot become more than physically younger than 20 years old and ages normally.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-1", Situation: "The changeling is being paid for the use of this Contract." },
                    { Modifier: "+1", Situation: "The Contract is being used without the target’s knowledge." }
                ]
            }
        ],
        "Drawback": "Expensive cost to invoke. Must spend a willpower dot.",
        "Catch": "Target is a blood relative within three generations",
        "FullCost": "2 Glamour + 1 dot of Willpower",
        "Cost": "●●",
        "Dice Pool": "Wyrd + Stamina",
        "Book": "RoS 121"
    },
    {
        "Rank": "•••",
        "Name": "Trading Beauty for Love",
        "Benefit": "Makes a human feel more positively towards the Changeling",
        "Action": "Instant",
        "FullDescription": [
            'The character can trade the color of her eyes and the beauty of her face for a close relationship with someone. Both changes are permanent, although the relationship can sour or fade if the character ignores or mistreats the person.'
        ],
        "FullCatch": [
            'The character must feed the target some item of food that the character prepared. This can be anything from a piece of popcorn that the character microwaved to a hand-dipped truffle that the character slaved for hours to make.'
        ],
        "Roll Results": [
            'Dramatic Failure: The character permanently reduces her appearance but does not change her relationship with the target.',
            'Failure: The Contract fails and has no effect upon the character’s appearance or her relationship with the target.',
            'Success: The character can form a strong and lasting relationship with someone. With anyone at all positively inclined toward the character or someone who has no particular positive or negative opinion about the character, this new relationship is relatively close. The person becomes a friend or possibly even a romantic interest. Depending upon circumstances, the character may gain up to two dots of the Ally or Retainer Merit. However, even this powerful Contract cannot make the character the most important person in the target’s life, and the target will not ignore or abuse his responsibilities or other close personal connections for the character without a very good reason. Clever and dedicated characters can build upon this relationship and may eventually be able to cause the target to regard the character as the most important person in his life. However, doing this is a matter of roleplaying and not Contracts. Characters cannot successfully use this Contract more than once on a single target.',
            'If the target dislikes, fears or is otherwise negatively inclined toward the character, using this Contract causes the target to be mildly positively inclined toward the character. In general, the target is willing to work with the character if the action is to their mutual benefit and will do small favors for the character, while expecting favors to be done in return. If it makes sense, the character may gain another dots of the Contacts Merit.',
            'However, this Contract can be used only on ordinary humans who do not hate the character and who have already met the character and know her at least slightly. The Contract automatically fails (causing a normal failure) if used upon True Fae, changelings or other supernatural beings. This Contract also fails if used on anyone who either does not know or feels extreme hatred for the changeling. To use this Contract, the character must briefly touch the target’s bare skin with at least a fingertip. Also, the feelings produced by this Contract take up to an hour to fully manifest, they do not instantly appear.',
            'This Contract also carries a very heavy price. If the character has the Striking Looks Merit, she reduces the value of this Merit by two dots, so a character with only two dots in this Merit loses it entirely, and a character with four dots in this Merit reduces the value to two dots. Characters with no dots in the Striking Looks Merit change so that they appear especially bland and colorless and suffer a -1 penalty to all Presence and Manipulation rolls involving their appearance. In all cases, this loss of appearance renders the character more bland, colorless and forgettable. The character never becomes ugly, merely utterly lacking in attractive features.',
            'Characters who already suffer penalties to their appearance cannot use this Contract until they have removed these penalties. Removing a character’s negative appearance requires roleplaying and spending eight experience points.',
            'Exceptional Success: The relationship formed with the target is especially close and lasting. A target who disliked the character becomes the character’s friend or ally, and a target who already liked the character, then the relationship is no closer, but it is considerably more durable, and the character would need to ignore or mistreat the target for several weeks to cause the target’s affection for them to begin to fade.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-2", Situation: "The changeling secretly hates the target and is using this Contract as a way to harm her." },
                    { Modifier: "+1", Situation: "The changeling honestly likes the target." }
                ]
            }
        ],
        "Drawback": "Expensive cost to invoke. Changeling permanently loses the color of his eyes and his beauty, becoming bland and colorless (Though never ugly) or downgrading Striking Looks merit.",
        "Catch": "Target must be fed an item of food the user prepared",
        "FullCost": "3 Glamour + reduction in appearance",
        "Cost": "●●●",
        "Dice Pool": "Wyrd + Manipulation -Subject's Composure",
        "Book": "RoS 121"
    },
    {
        "Rank": "••••",
        "Name": "Changing Minds",
        "Benefit": "Change a target's opinion on something",
        "Action": "Instant",
        "FullDescription": [
            'The character can permanently change a single opinion one person holds about any person or group. To use this Contract, the character must state this opinion to the target when using the Contract. The price for using this Contract is that the character loses a point of Resolve. This point can be regained normally with experience points.'
        ],
        "FullCatch": [
            'The changeling is causing someone to believe in an abstract ideal.'
        ],
        "Roll Results": [
            'Dramatic Failure: The character loses a point of Resolve and gains nothing to compensate for this loss.',
            'Failure: The Contract fails, and the character does not lose a point of Resolve.',
            'Success: The character causes the target to hold a specific opinion of another person or group. This can be as specific as believing that the target’s wife is a drunk who is having an affair with her secretary and as general as believing that all Darklings are liars who cannot be trusted. However, the changeling can affect only opinions, not behavior. The character can convince someone that a colleague is planning to kill him, but cannot determine if the target will attempt to kill that person first, contact the police or try to talk the colleague out of committing murder.',
            'Also, this Contract cannot be to cause someone to believe something she would find inherently ludicrous and unbelievable. A changeling cannot convince someone that a person is a Martian unless the target already believes that Martians walk the Earth. Also, while the target sincerely believes this new opinion, a sufficient amount of reasoned arguments and evidence can convince her of the falsity of this belief. In general, persuading the target to give up this belief is no harder than persuading the target to give up any other belief. To use this Contract, the changeling must mention the belief to the target, at least in passing.',
            'The price of this Contract is especially harsh. The changeling instantly loses one point of Resolve. This point can be regained by spending experience points, but is otherwise lost forever. Also, characters cannot use this Contract if they have only one dot in Resolve, since a character cannot lose his last dot in any Attribute. Changelings can use this Contract on anyone who is or once was human, including ghosts and other changelings as well as ordinary mortals, but specifically excluding the True Fae. Storytellers should try to convince players not to use this Contract on another character without that player’s permission.',
            'Exceptional Success: The target’s belief in the opinion she has been given is especially strong and tenacious, and so the level of proof necessary to dissuade the target of it is especially high. In effect, this belief becomes one of the target’s core beliefs and is very difficult to change.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-2", Situation: "The character is able to talk to the target about this opinion for less than 30 seconds." },
                    { Modifier: "+1", Situation: "The character is able to talk to the target about this opinion for more than five minutes." }
                ]
            }
        ],
        "Drawback": "Expensive cost to invoke. Must spend a resolve dot.",
        "Catch": "Causes someone to believe an abstract ideal",
        "FullCost": "4 Glamour, 2 Willpower + 1 dot of Resolve",
        "Cost": "●●●●○○",
        "Dice Pool": "Wyrd + Persuasion - Subject's Powerstat + Resolve",
        "Book": "RoS 122"
    },
    {
        "Rank": "•••••",
        "Name": "The Fatal Transformation",
        "Benefit": "Kill the target",
        "Action": "Resisted",
        "FullDescription": [
            'The changeling can slay a target at the cost of some of her own health. Using this Contract causes the changeling to permanently lose one point of Stamina.'
        ],
        "FullCatch": [
            'The target has slain one of the change- ling’s blood relatives.'
        ],
        "Roll Results": [
            'Dramatic Failure: The changeling loses one point of Stamina, but the target is unharmed.',
            'Failure: The Contract fails, and the target is unharmed.',
            'Success: The target dies of some seemingly natural cause such as a heart attack. The changeling can use this Contract on a target only if she touches him or if she can clearly see the target and stares directly at him from no more than Wyrd feet away. Prompt medical treatment for a heart attack may save the target, but all such attempts suffer a penalty equal to the number of successes rolled for this Contract. Also, without treatment, the target is permanently dead in five minutes, minus one minute for every success rolled on this Contract.',
            'The price of this Contract is especially harsh. The changeling instantly loses one point of Stamina. This point can be regained by spending experience points, but is otherwise lost forever. Also, characters cannot use this Contract if they have only one dot in Stamina, since a character cannot lose his last dot in any Attribute. Changelings can use this target on any being that can die. This Contract cannot be used on spirits, ghosts or the True Fae, since none of these beings are mortal.',
            'Exceptional Success: The target dies instantly, and only powerful magic can save his life. No amount of mundane medical treatment will save the character.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-1", Situation: "The target is a supernatural being." },
                    { Modifier: "-1", Situation: "The changeling cannot clearly see the target’s face." },
                    { Modifier: "+1", Situation: "The changeling is touching the target." }
                ]
            }
        ],
        "Drawback": "Expensive cost to invoke. Must spend a stamina dot.",
        "Catch": "Target has slain one of the user's blood relatives",
        "FullCost": "3 Glamour + 1 Willpower + 1 dot of Stamina.",
        "Cost": "●●●○",
        "Dice Pool": "Wyrd + Intimidation vs. Powerstat + Stamina",
        "Book": "RoS 123"
    },
    {
        "Rank": "N/A",
        "Name": "Goblin Contracts of the Wyrd",
        "Benefit": "N/A",
        "Action": "",
        "FullDescription": [
            'Fae magic is based on bargains and agreements. From pledges and vows to Contracts, each can trace its roots back to some ancient pact between fae folk and the concepts, objects or entities of reality around them. These deals are witnessed and given power by the Wyrd, a mystic fae force without which Faerie and the Hedge would not exist. It makes sense then, that some of the oldest and most powerful of faerie magic is based upon bargains struck with the Wyrd itself. However, just as making bargains with the canny Gentry is dangerous business for the Lost, so is attempting to exert control over the wily and powerful Wyrd. Goblin Contracts of the Wyrd all have inherent drawbacks that come into play when a changeling attempts to activate them. And, while they are powerful and very useful, the Wyrd does not tolerate incompetence — each Wyrd Goblin Contract also has an unusually high penalty that must be paid if the changeling attempting to activate them dramatically fails to successfully do so. Still, when the cause is desperate enough, some Lost are willing to take their chances.',
            '<b>Expanded Mechanic: Kenning</b> Lost with high Clarity ratings (6 or greater) are able to detect the presence of supernatural creatures (fae or otherwise) around them. They are also able to detect supernatural items or magical effects, such as active Contracts, and have a chance to notice when Contracts are being activated.',
            'The mechanics for detecting active Contracts are similar to those for detecting supernatural beings (p. 92, Changeling: The Lost.) At the player’s request, the Storyteller makes a secret roll using the Lost’s Clarity as the dice pool, with standard Perception modifiers applied. The Lost can detect one already activated, non-concealed Contract in the area per success. (Dramatic failures work per the standard Kenning rules.) This detection gives the Lost the general Contract type (Dream, Fleeting Spring or Goblin Sacrifice, for example) but does not reveal the specific clause activated unless the Lost possesses that clause themselves, or an Exceptional Success is rolled. The changeling may, however, make an Intelligence + Occult roll for each Contract sensed by Kenning. Upon a success, the Lost is able to determine the specific clause active. The ST may require more than one success for rare or unusual Contracts or clauses. This roll may be made for each specific Contract detected.',
            'The changeling may target this Kenning in an area (within his eyeshot), or focus it on a specific individual or object. Normal perception modifiers apply to this challenge.',
            'To notice a Contract being cast, however, is a more difficult matter. To do so, the Lost must be actively attempting to notice supernatural effects. She makes her Clarity roll as a reflexive challenge at a -2 penalty (with normal Perception modifiers applied.) Success indicates that the character is aware that another Lost is attempting to activate a Contract, but it does not automatically tell her what Contract is being attempted unless she achieves an Exceptional Success (even if she possesses the Contract and/or clause herself). Upon making an Exceptional Success, she may make an additional Intelligence + Occult roll (with standard Perception modifiers) to determine the specific clause being attempted, with the target number of successes required being determined by the Storyteller based on the Contract’s rarity.',
            'These same rolls can also be used to determine if one is being targeted by a Contract, Token or Curse. Being the target of a supernatural effect, individual or item gives a +2 dice bonus to determine that it is being activated (or attempted to be activated), and the same bonus to determine the nature of the effect attempted.'
        ],
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Drawback": "N/A",
        "Catch": "N/A",
        "FullCost": "",
        "Cost": "N/A",
        "Dice Pool": "N/A",
        "Book": "Dancers in the Dusk 65"
    },
    {
        "Rank": "•",
        "Name": "Mantle Mask",
        "Benefit": "Temporarily disguise your Mantle as another Court's",
        "Action": "Instant",
        "FullDescription": [
            'One of the ways a changeling’s Wyrd manifests is through the sensory attributes that resonate with her chosen Court. Just as Contracts of the Mirror allow a Lost to change her Mask or mein, Mantle Mask allows her to manipulate her Mantle, or to create the perception of one where none existed previously.',
            'In no way does this Contract change the mechanical effects of a Lost’s Mantle — only the cosmetic appearance thereof. Thus a Summer Courtier with a Mantle of 3 could temporarily modify her flame-cloak Mantle and the sound of crowds cheering her name to a shroud of autumn leaves accompanied by crow’s calling. She would not, however, lose the armor and other benefits her Summer Mantle provides, nor would she gain Autumn’s equivocal bonuses dealing with the True Fae.'
        ],
        "FullCatch": [
            'The changeling draws, paints or otherwise decorates her skin with an emblem symbolic of the Court whose Mantle she is attempting to mimic.'
        ],
        "Roll Results": [
            'Dramatic Failure: The changeling’s attempt to force a new appearance to her Mantle fails, and her Mantle becomes a jumbled mass of contradictions for the next scene. For a Spring Courtier, her normally vibrant leaves, flowers and vines might take on a jaundiced look as if affected by some Wyrd-blight, or her Mantle’s soft spring breeze might become tainted with a malodorous stench. Autumn courtiers might find their dark Mantle turned farcical, or Winter’s ice and chill turned to annoying slush festooned with sparks of bonfire. A Courtless who invokes this great of a failure finds herself possessing an unruly temporary Mantle that blends elements from all four of the seasonal courts in a disturbing and jarring way. Any Lost under this effect suffer a -2 penalty to all Social challenges (offensive or defensive) with anyone who can perceive their disturbing pseudo-Mantle.',
            'Failure: The changeling’s Mantle (or lack thereof) is unaffected.',
            'Success: The changeling’s mastery of her Wyrd is able to temporarily overshadow the inherent cosmetic manifestation of her Mantle. The materialization of her normal Mantle (visual, auditory, olfactory, sensory, etc.) dwindles to an imperceptible level for the remainder of the scene, and is replaced by that of the Court she focuses upon while activating the Contract. If no Court is chosen, she is left with no Mantle, and is likely to be assumed to be Courtless by those judging such matters by Mantle alone. For every success achieved on her activation roll, she may manifest a single sensory aspect to her illusionary Mantle, up to the level of her normal Mantle rating. Courtless who use this clause to manifest a Mantle from scratch can create the illusion of one up to a level equal to half the successes they rolled on the activation, rounded up, although this number may never exceed 5 levels.',
            'At the end of the first scene, the changeling may choose to spend two points of Glamour to automatically activate the Contract for an additional scene. This must be paid for with Glamour (not a use of the catch). At the end of this second scene, she may pay three Glamour to continue the effect for a third scene, and so on, until she reaches the maximum amount of glamour she can spend during any one turn. This extension can be done for as long as the Lost chooses continues to spend the Glamour and is able to spend enough to meet the ever-growing cost. However, when the changeling ceases to spend the Glamour to extend the effect, the Drawback immediately manifests, and lasts for the entire time the Contract’s power was in effect (in days, hours and minutes, not number of scenes.)',
            'Exceptional Success: As with a success, however the changeling may manifest the illusion of any level of Mantle up to 5, regardless of her normal Mantle rating (even if she is Courtless).',
            '<b>Drawback:</b> Mantle’s illusion, once created, does not fade quickly. Although the changeling’s natural Mantle springs back in full force at the end of the scene, for a time period twice the length of the time period the illusory Mantle was in place, remnants of the false Mantle remain perceptible. A Winter Courtier who had suppressed her icicle-bedecked hair in favor of manifesting Spring blossoms for a three-hour scene, might find that, for the three hours after the scene ended, there were still fading rose-petals encased in her newly-returned frost, for example. For the Courtless, this manifestation results in a fading traces of her manifested Mantle enshrouding her. Too weak to be mistaken for a “real” Mantle, this after-effect is only strong enough to act as a clue to others that the Lost has been tinkering with strange magic.'
        ],
        "Drawback": "Signs of use remain for twice as long as the disguised mantle.",
        "Catch": "The decorates her skin with a sign appropriate to the Court she is disguising herself as.",
        "FullCost": "1 Glamour",
        "Cost": "●",
        "Dice Pool": "Wyrd + Occult",
        "Book": "DiD 65"
    },
    {
        "Rank": "••",
        "Name": "Daunting Force",
        "Benefit": "The Changeling becomes intimidating to the subject",
        "Action": "Instant",
        "FullDescription": [
            'Wyrd is a powerful force, and those with high amounts of it have the potential to wield this power with elegant dexterity or brutish might. While the former is sometimes more effective, the latter is certainly a force to be reckoned with. By using this Contract, a changeling may attempt to use the brute strength of his Wyrd to intimidate someone else.'
        ],
        "FullCatch": [
            'The changeling is actively wielding an un-holstered, unsheathed weapon or firearm of some sort.'
        ],
        "Roll Results": [
            'Dramatic Failure: The clause backfires. For the remainder of the scene, the changeling is at a -2 dice penalty to all Presence based challenges and a -2 dice penalty for all Intimidation based rolls (cumulative, for a -4 penalty to rolls using Presence + Intimidation) attempted against any target.',
            'Failure: The subject is unaffected.',
            'Success: For the remainder of the scene, the force of the changeling’s Wyrd has an intimidating affect on the subject. All social challenges made by the changeling against the subject gain a +2 dice bonus, and any attempts by the subject to take actions (physically, socially, mentally or supernaturally) against the changeling are made at a -2 dice penalty.',
            'Exceptional Success: As with a success, but the bonuses and penalties are increased to +4 and -4 respectively.',
            '<b>Drawback:</b> Regardless of whether the Contract succeeds or fails, the changeling’s Wyrd is taxed by the intimidation effort. For the next 24 hours, any use of Glamour by the subject for any purpose requires an additional Glamour to activate.'
        ],
        "Drawback": "All Glamour costs are increased by one for 24 hours.",
        "Catch": "Brandishing a drawn weapon.",
        "FullCost": "2 Glamour",
        "Cost": "●●",
        "Dice Pool": "Wyrd + Presence - Composure",
        "Book": "DiD 66"
    },
    {
        "Rank": "•••",
        "Name": "Nothing Hidden",
        "Benefit": "While the Contract is active, the Changeling may roll to notice supernaturally concealed things.",
        "Action": "Instant",
        "FullDescription": [
            'The Wyrd is power, and the Wyrd is perception. Those who are willing to take the proper shortcuts find themselves able to discern things normally beyond their ken... for the usual price, of course.'
        ],
        "FullCatch": [
            'The changeling has burned the feather of an owl, eagle or other keen sighted bird within the last four hours, and smudged the ashes on his eyelids.'
        ],
        "Roll Results": [
            'Dramatic Failure: The Contract does not take effect, and the changeling is struck blind for an hour or a scene, whichever is longer.',
            'Failure: The Contract does not take effect, and the changeling is blinded for a number of turns equal to his dice pool for activating this Contract.',
            'Success: The changeling’s perceptions of the supernatural are enhanced, and his ability to notice and identify hidden supernatural beings, items or effects (fae or otherwise) is improved. For the remainder of the scene, if the Lost can perceive the presence of the supernatural (through either a naturally high Clarity rating, a supernaturally enhanced Clarity or the successful activation of Wyrd’s Eye), this clause allows them to extend that perception to the concealed supernatural world as well.',
            'After successfully activating Nothing Hidden, a player may ask the Storyteller to make a secret reflexive Wits + Investigation roll to detect the presence of concealed supernatural entities, objects or effects (including active Contracts, but not those which are being cast) within a 10 foot radius of him. Should there be any such, he may notice one per success made on the roll, and go on to have the Storyteller make an Intelligence + Occult roll for him to attempt to identify each of the specific Contract, creature or objects (as specified in the Kenning rules.) There is no Glamour cost for making either of these rolls once the Contract has been successfully activated, and the second roll counts as an extension of the first, rather than its own action. Thus a changeling who achieved 3 successes on his Wits + Investigation roll as a reflexive action and detected all three of the concealed supernatural creatures standing beside him could then have the Storyteller roll to identify them. If he achieved three successes on the second roll, he might be able to tell that two of the beings were Lost (an Ogre and a Darkling) and that one appeared to be a huge wolfish creature that didn’t appear to be a Briarwolf or Beast (see below.)',
            'The Storyteller is encouraged to use his discretion in both the detection and identification of concealed items, individuals and effects. While it should only take a single success to notice “normally” concealed targets, supernatural targets with exceptionally high concealment abilities might, at the Storyteller’s discretion, require more than a single success to locate. Likewise, very obscure creature, object or effect types (one of a kind fae items, creatures, or very rare Wyrdfocused spells, powers or emanations) might require more than a single success to identify clearly. Similarly, this power does not automatically give Lost in depth information about non-fae items or supernatural character types, other than their general appearance, demeanor or resonance, and that they are of a non-fae supernatural type. Thus the lupine creature above would not be identified as a werewolf, although it would be clear it was not one of the wolven creatures the Lost was familiar with. A magic knife might resonate with death energy, but this Contract would not reveal that it’s specifically designed for staking vampires.',
            'If the changeling does not possess the sufficient Clarity (normal or enhanced) to perceive the presence of the supernatural (and if he is not currently under the affect of Wyrd’s Eye), after successfully activating this clause, he may have the Storyteller make a secret reflexive Wits + Investigation roll to detect the supernatural, and (only if he is successful) another roll as part of the same action (but at a -2 penalty) to either identify the non-concealed targets or to attempt to detect concealed supernatural beings, objects or effects. Identifying the concealed targets (if he detected them) could be done as a part of the same reflexive action, but at a -4 dice penalty.',
            'After the Contract has ended, the changeling’s eyesight is strained by seeking the minute details of the Wyrd that reveal the presence of concealed supernaturals, and all Perception checks made for the next scene are made at a -4 dice penalty.',
            'Exceptional Success: As with a success, but the changeling receives a +4 bonus to his Wits + Investigation rolls to detect the concealed for the remainder of the scene.'
        ],
        "Drawback": "Significant negative Perception modifiers to the following scene.",
        "Catch": "Burn the feather of a keen sighted bird and rub the ashes on your eyelid.",
        "FullCost": "",
        "Cost": "●●",
        "Dice Pool": "Wyrd + Occult",
        "Book": "DiD 66"
    },
    {
        "Rank": "••••",
        "Name": "Wyrd Eye",
        "Benefit": "Automatically become aware of any Contracts nearby. Ignore low Clarity modifiers to noticing Wyrd related phenomena and gain a bonus to Kenning",
        "Action": "Instant",
        "FullDescription": [
            'A favorite of the Autumn Court, this Goblin Contract opens the Lost’s senses to all aspects of the Wyrd.'
        ],
        "FullCatch": [
            'The changeling is breaks a pair of prescription eyeglasses.'
        ],
        "Roll Results": [
            '<b>Effect:</b> Upon a successful activation, the changeling becomes automatically aware of any activation of unconcealed Contracts within a 10 foot radius around him The Lost is also able to automatically perceive any active Contract present within that area as a reflexive action (one perceived Contract per turn). As well, regardless of the rarity of the Contracts he perceives, he only needs a single success on the Intelligence + Occult check to identify any specific perceived Contract’s Contract type and clause. If this challenge is successful, the Lost gains a general understanding of the Contract even if they have never seen it before. For example, he may learn that Temporary Sanity bolsters a changeling’s Clarity, but not for how long or that there is a negative effect to their Clarity afterward.',
            'In addition, during the period of a successful activation of Wyrd’s Eye, any Clarity penalties the Lost normally would be functioning under are ignored for perception challenges specifically involving sensing the Wyrd (identifying Contracts, Lost, perceiving fae items, etc.) As well, the Lost gains a +3 bonus to Kenning attempts to detect concealed supernatural beings, items or effects, but only those related to the Wyrd or fae magic (hobs, Lost, Hedge Beasts, True Fae, Tokens, goblin fruit, etc.) ',
            'This increased Wyrd perception lasts for one scene, and cannot be deactivated earlier.',
            '<b>Drawback:</b> The Lost’s increased perception of the Wyrd creates a kind of sensory overload. Any perception challenges (including Kenning) not related to the Wyrd or fae magic receive a penalty equal to the Lost’s Wyrd. This penalty lasts as long as the Contract is active, and for an additional scene afterwards, and cannot be erased, countered or avoided by any means. It takes a while for the Lost to recover from the huge influx of sensation this Contract invokes.'
        ],
        "Drawback": "All Perception for things unrelated to the Wyrd is penalized.",
        "Catch": "Breaks a pair of prescription glasses.",
        "FullCost": "2 Glamour",
        "Cost": "●●",
        "Dice Pool": "Wyrd + Occult",
        "Book": "DiD 67"
    },
    {
        "Rank": "•••••",
        "Name": "The Fatal Clause",
        "Benefit": "Block a Contract as it is being activated.",
        "Action": "Instant and Contested",
        "FullDescription": [
            'Each Contract is, at its heart, an agreement, a pact that was originally crafted between the True Fae and the world around them, and is now activated by a changeling reaffirming that accord. Every agreement, however, has loopholes. Lost frequently make use of the most common loophole in the form of each Contract’s catch. Other loopholes do exist, though, and those who learn this Contract are well aware of how best to take advantage of this. By exploiting a weakness in the Wyrd, The Fatal Clause allows Lost to nullify another Contract as it is being activated, essentially expending their own Glamour to short-circuit the targeted Contract.'
        ],
        "FullCatch": [
            'Within the last 24 hours, the changeling has been the target of a Contract cast by subject. The catch only negates the need to pay the activation cost of the Contract, not the additional Drawback Glamour sapped from him.'
        ],
        "Roll Results": [
            '<b>Effects:</b> The Lost makes a contested roll against the character activating the Contract he wishes to nullify, with a target number equal to the level of that Contract. If the targeting Lost achieves a number of successes equal to or greater than the level of the Contract he is targeting, then the Contract is nullified. Any cost that the targeted character spent to activate the Contract is lost, but to no effect. If he rolls fewer successes than the level of the targeted Contract, then the Contract activates as normal, but the targeting changeling still must pay the full casting cost (unless using the catch) and the Drawback cost.',
            'The changeling must be able to perceive that the Contract is being activated in some fashion, whether through the Kenning rules (see Modified Rules - Expanded Mechanic: Kenning) or through an already activated Contract (such as Wyrd’s Eye.)',
            'Drawback: This Contract uses the Glamour of the changeling who is activating it to attempt to short-circuit the targeted Contract. In addition to the activation cost, this Contract sucks away Glamour and/or Willpower equal to the casting cost of the targeted Contract. This Drawback drain cannot be mitigated by the activator of The Fatal Clause by completing the catch of the targeted Contract, or by any other means. It is automatic, whether The Fatal Clause is successful or not. If the activator does not have sufficient Glamour (or Willpower if the targeted Contract uses that) for The Fatal Clause to drain, the Contract deals 1 level of lethal damage to him for every Glamour or Willpower he is “short”. This damage cannot be avoided, redirected or lessened by any means, including armor or supernatural powers — in spite of the Lost’s best efforts, the Wyrd will take its due.',
        ],
        "Drawback": "Pay the cost of the Clause you are attempting to block.",
        "Catch": "The Changeling has been a target of a Contract cast by the subject in the past 24 hours.",
        "FullCost": "2 Glamour and 1 Willpower",
        "Cost": "●●○",
        "Dice Pool": "Wyrd + Occult - Subject's Wyrd",
        "Book": "DiD 68"
    }
]

const unclassifiedGoblinContractData = [
    {
        "Name": "•",
        "Rank": "•",
        "Benefit": "Contracts",
        "Action": "",
        "FullDescription": '',
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Drawback": "N/A",
        "Catch": "N/A",
        "FullCost": "",
        "Cost": "N/A",
        "Dice Pool": "N/A",
        "Book": "N/A"
    },
    {
        "Name": "Shooter’s Bargain",
        "Rank": "•",
        "Benefit": "Blesses the next three shots fired from a weapon to mitigate penalties when attacking.",
        "Action": "Instant",
        "FullDescription": [
            'The changeling can bless a ranged weapon such as a bow, crossbow or gun so that two of the next three shots fired will be exceptionally accurate. However, one of these three (chosen by the Storyteller and unknown to the player or character) will automatically be a chance roll.'
        ],
        "FullCatch": [
            'The character is fighting a duel or some other combat that has been agreed upon in advance by both sides.'
        ],
        "Roll Results": [
            'Dramatic Failure: The changeling pays the Contract’s price but gains no benefit.',
            'Failure: The blessing fails, and the weapon is unaffected.',
            'Success: The character blesses a specific weapon so that two of the next three shots it makes hit with unusual accuracy. Each success reduces one die of ranged combat penalties normally due to the target’s distance (range penalties), position (such as being prone), size (for very small targets) or environmental factors such as darkness, snow, cover penalties or anything else that doesn’t directly work directly upon the changeling. However, one of the next three shots is cursed and will instead automatically be a chance roll. Neither the blessings nor the curse affects shots that are not made with the intent of hitting the target or where the gun fires blanks.',
            'Exceptional Success: Beyond greatly reducing the penalties to ranged attacks, no further bonus is gained.',
            {
                'Suggested Modifiers': [
                    { Modifier: "+1", Situation: "The character is using a weapon she has owned for at least a month that serves as her primary ranged weapon." },
                    { Modifier: "-1", Situation: "The character is using a weapon she has never used before." },
                ]
            }
        ],
        "Drawback": "One of the three shots is automatically reduced to a chance die.",
        "Catch": "In a fight scheduled beforehand.",
        "FullCost": "1 Glamour",
        "Cost": "●",
        "Dice Pool": "Wyrd + Dexterity",
        "Book": "CtL 164"
    },
    {
        "Name": "Sight of Truth and Lies",
        "Rank": "•",
        "Benefit": "Gain the ability to instantly tell if a person is lying.",
        "Action": "Instant",
        "FullDescription": [
            'The changeling can automatically tell truth from lies, but while doing so, he must tell the truth. If he lies while using this Contract, he becomes temporarily incapable of telling truth from lies.'
        ],
        "FullCatch": [
            'The changeling uses this Contract at an official occasion, such as a trial or a formal gathering of the leaders of the local freehold.'
        ],
        "Roll Results": [
            'Dramatic Failure: For the remainder of the scene, the changeling automatically believes all lies that are not immediately and obviously false.',
            'Failure: The Contract fails, and the changeling is left with his natural ability to tell truth from falsehood.',
            'Success: The character can automatically tell any lie spoken in his presence. He doesn’t know what the truth is, merely that any lie he hears is not true. The character can use this ability for one full scene. However, while doing so, the character must speak the truth at times during this scene. The character can remain silent, but any statement he makes must be true to the best of the character’s knowledge; he also cannot knowingly exaggerate. If the character lies for any reason, even a minor lie such as telling someone that her hideously garish shirt actually looks nice on her, then he becomes completely unable to tell truth from falsehood for the remainder of the scene. As long as a statement is not obviously false, such as someone claiming that it is nighttime when the character is standing under a hot noonday sun, the character is certain that the person is telling the truth and also that the statement itself is true, even if the statement is an obvious exaggeration to everyone else present. The character’s ability to tell truth from falsehood applies only in person or in two-way verbal conversations such as phone calls.',
            'When hearing and telling lies, statements that the person honestly believes to be true are never considered lies, even if the statement is actually false. For this Contract, the ultimate definition of truth or falsehood is whether or not the person saying the statement believes it is true or not.',
            'Exceptional Success: The character can also tell truth from falsehood in recorded media such as television shows or in print.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-1", Situation: "The character has told a lie within the last scene." },
                    { Modifier: "+1", Situation: "The character is acting as a judge or is otherwise charged with determining the truth of statements or events." },
                ]
            }
        ],
        "Drawback": "If the user lies while the contract is active, however, they lose any ability to tell truth from lies, believing all but the most blatant fabrications.",
        "Catch": "Used at an official occasion",
        "FullCost": "1 Glamour",
        "Cost": "●",
        "Dice Pool": "Wyrd + Subterfuge",
        "Book": "RoS 114"
    },
    {
        "Name": "Trading Luck for Fate",
        "Rank": "•",
        "Benefit": "Gain a sudden simple insight into the immediate future.",
        "Action": "Instant",
        "FullDescription": [
            'The character knows the result of some random or otherwise impossible-to-determine event. In return, she experiences some sort of bad luck within the next several hours. The character cannot use this Contract again until this bad luck occurs.'
        ],
        "FullCatch": [
            'Using this Contract to win at gambling.'
        ],
        "Roll Results": [
            'Dramatic Failure: The changeling pays the Contract’s price but gains no benefit.',
            'Failure: The character experiences neither good nor bad luck.',
            'Success: The caster knows the outcome of something random or similarly unknowable in her immediately vicinity, such as which of four streets the people she is pursuing fled down or which roll of scratch-tickets to buy to win between $10 and $25. The Contract cannot answer open questions (such as “Where can I find my target?”), only questions that select one of several obvious possibilities. This Contract cannot cause anything otherwise impossible to occur and cannot predict anything with odds of less than one in 100. During the next day, the changeling will experience a single incidence of bad luck — being cut off by a clumsy pedestrian while chasing someone, having an expensive suit of clothing ruined by being splashed by a passing car or having a cell phone run out of power at an inopportune time. This bad luck is never life threatening, merely distressing and inconvenient. At worst, an incident of bad luck will do two or three points of bashing damage to the character.',
            'Exceptional Success: The character makes an unusually accurate guess, winning $50 at the lottery, guessing the next two turns that someone fleeing will make.',
            {
                'Suggested Modifiers': [
                    { Modifier: "+1", Situation: "Taking a few minutes to carefully examine the situation" },
                    { Modifier: "-1", Situation: "Making an instant guess" },
                ]
            }
        ],
        "Drawback": "This is done in return for a minor turn of bad luck.",
        "Catch": "Using the contract to win at gambling.",
        "FullCost": "1 Glamour",
        "Cost": "●",
        "Dice Pool": "Wyrd + Wits",
        "Book": "CtL 164"
    },
    {
        "Name": "••",
        "Rank": "••",
        "Benefit": "Contracts",
        "Action": "",
        "FullDescription": '',
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Drawback": "N/A",
        "Catch": "N/A",
        "FullCost": "",
        "Cost": "N/A",
        "Dice Pool": "N/A",
        "Book": "N/A"
    },
    {
        "Name": "Calling the Guardian",
        "Rank": "••",
        "Benefit": "Summon an invisible guardian that strikes back the instant you're attacked.",
        "Action": "Instant",
        "FullDescription": [
            'The character calls up a semi-animate force to protect him. It will protect the character from the next attempt to attack him in hand-to-hand combat. However, the guardian summoned by this Contract cannot differentiate between a dangerous attack and an accidental but forceful shove or any other equally harmless gesture.'
        ],
        "FullCatch": [
            'The character is currently suffering from at least one point of lethal or aggravated damage due to some form of hand-to-hand attack.'
        ],
        "Roll Results": [
            'Dramatic Failure: The Contract works normally, except that instead of protecting the character from attack, the force strikes the character immediately after the attack that triggers it.',
            'Failure: The Contract fails, and the character remains unprotected.',
            'Success: The character is protected from the next attempt to attack him in either armed or unarmed hand-to-hand combat. As the attacker is moving in to attack the character, just before the attacker’s blow strikes the character, the force summoned by this Contract violently shoves the attacker. This counterattack is invisible and unexpected and so cannot be dodged and ignores the attacker’s defense score. Each success rolled on this Contract does one point of bashing damage to the attacker and moves the attacker one yard away from the character.',
            'Although changelings and other supernatural beings will see the attacker being shoved out of the way by a form that becomes faintly visible as it shoves the attacker out of the way, this being is completely invisible to ordinary mortals. Mortals who observe this, including the attacker, if she is mortal, instead see the changeling swing around at the last minute before the attack and violently shove the attacker away from her.',
            'Unfortunately, the force called up by this Contract cannot distinguish between real attacks and other similar behaviors. As a result, the force treats someone friendly punching the character in the arm or touching him on the back or shoulder as an attack. This force deals with an angry lover attempting to slap the character in the face in exactly the same way the force would deal with a large bouncer forcefully throwing the character out of a bar or a psychotic mugger’s attempt to beat the character to death with a lead pipe. In ideal circumstances, this Contract can save a character’s life; in other circumstances, this Contract can get the character arrested on assault charges. Once the character uses this Contract, she has no control over whom it affects. The guardian vanishes after it protects the changeling from one hand-to-hand attack, or after 24 hours, if the character has not been attacked before this time elapses. A character cannot be protected by more than one guardian at a time. Using this Contract on a character who already has a guardian waiting to protect him dispels the first guardian.',
            'This Contract cannot be invoked during combat.',
            'Exceptional Success: Instead of merely acting once, the Contract remains active for a number of attacks equal to the character’s Wyrd.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-1", Situation: "The character has already used this Contract once within the last day." },
                    { Modifier: "+2", Situation: "The character offers the guardian a goblin fruit as payment." },
                ]
            }
        ],
        "Drawback": "The guardian can not distinguish between a blow that would actually do harm or a playful shove.",
        "Catch": "Currently suffering at least one lethal or aggravated damage from a hand-to-hand attack",
        "FullCost": "2 Glamour",
        "Cost": "●●",
        "Dice Pool": "Wyrd + Dexterity",
        "Book": "Rites of Spring 114"
    },
    {
        "Name": "Dream Rendering",
        "Rank": "••",
        "Benefit": "Upgrade a Token, permitting it to be used in dreams.",
        "Action": "Instant",
        "FullDescription": [
            'In Faerie, the True Fae can take a passing fancy and shape it into reality through the power of the Wyrd. A changeling that learns the Contracts of Dreams gains some of this ability thanks to Cobblethought (see Changeling: the Lost, p. 126) but most of the items she snatches from dreams soon fade away in the lands of waking. This Contract allows the changeling to break down the objects gained from Cobblethought into the pure stuff of possibility and use the dream-stuff to modify tokens so they can be used while slumbering.',
            'In order to use Dream Rendering, the character must first have successfully pulled an object out of her own unconsciousness using Cobblethought.'
        ],
        "FullCatch": [
            'The changeling is naked.'
        ],
        "Roll Results": [
            'Dramatic Failure: The changeling pays the Contract’s price but gains no benefit. The object gained from Cobblethought vanishes, even if the character managed an exceptional success on the roll.',
            'Failure: The Contract fails to work and the character pays no price.',
            'Success: The character succeeds in breaking down the object gained from Cobblethought into the dreamstuff of possibility. In this form, the dream-stuff resembles brown cotton candy and is equally tacky to the touch. The character can then augment an existing token by weaving, wrapping and hammering the dream-stuff into place until it merges with the token. This requires a Dexterity + Crafts roll. Assuming everything goes to plan, the token can then be used by the changeling that owns it even while asleep. Dream-stuff persists for one scene before vanishing.',
            'Such close contact with the magic of possibility infests the changeling, reminding her of her durance. The next time she sleeps, the changeling has intense flashback nightmares about her time in Arcadia that she can’t snap out of, even through the use of oneiromancy. These dreams are powerful enough to make the changeling wonder whether she really ever escaped at all and require a roll for degeneration on 5 dice (regardless of current Clarity rating).',
            'Exceptional Success: The character manages to extract enough dream-stuff to augment two tokens, though each still requires a successful Dexterity + Crafts roll to complete.',
            {
                'Suggested Modifiers': [
                    { Modifier: "+1", Situation: "The object pulled from dreams is Size 3 or larger." },
                    { Modifier: "+2", Situation: "The object pulled from dreams came from a target that is currently asleep." },
                    { Modifier: "-1", Situation: "The object pulled from dreams is Size 1." },
                    { Modifier: "-2", Situation: "The object pulled from dreams comes from a source not wholly human." },
                ]
            }
        ],
        "Drawback": "Make a clarity roll at 5 dice when you next sleep, regardless of your current Clarity.",
        "Catch": "Used while naked.",
        "FullCost": "1 Glamour",
        "Cost": "●",
        "Dice Pool": "Wyrd + Wits",
        "Book": "SaD 109"
    },
    {
        "Name": "Diviner’s Madness",
        "Rank": "••",
        "Benefit": "Gains a brief glimmer into the past or future of a person, place, or thing.",
        "Action": "Instant",
        "FullDescription": [
            'The changeling gains an accurate image of the past or the future of some person or place. Afterwards, she temporarily goes somewhat mad. All madness lasts for one day. At the end of this time, the changeling also forgets the contents of the divination.'
        ],
        "FullCatch": [
            'Divining the past or the future of someone the changeling is in love with.'
        ],
        "Roll Results": [
            'Dramatic Failure: The changeling gains one of the severe derangements listed below for one day.',
            'Failure: The changeling experiences no visions or madness.',
            'Success: The changeling can have a vision of the past or the future. She first declares a target, a person, place or object that she has visited, met or touched at least once. She can make herself the target. If she views the past, she can examine the target’s past with flawless clarity, seeing anything that has occurred. Each success allows the changeling to view up to one turn of time in that place in real time, beginning with the moment declared when the Contract was performed. Alternately, the character can ask a simple question about the target’s future and gain a general answer. Examples of proper questions include: “What time will Joseph Klein arrive home tonight” or “Will the North Park Strangler kill someone tonight?” (given a brief prior encounter with the Strangler). Improper questions get incoherent answers. Each success grants the changeling an answer to one question about the target’s future. Additional successes allow follow-up questions, allowing the changeling to get more specific details, such as asking if Joseph Klein will stop on his way home tonight or the exact time or location of the Strangler’s next murder.',
            'Performing this divination also causes temporary madness. If the changeling rolls three or fewer successes, she gains one of the following severe derangements: Megalomania, Multiple Personality, Paranoia or Schizophrenia. With four or more successes, she gains one of the following mild derangements: Narcissism, Irrationality, Suspicion or Vocalization. Regardless of successes rolled, this madness lasts for one full day.',
            'Exceptional Success: Beyond the advantages gained by rolling multiple successes, no special bonus is gained.',
            {
                'Suggested Modifiers': [
                    { Modifier: "+1", Situation: "The subject of the divination is present." },
                    { Modifier: "-1", Situation: "The changeling knows the target moderately well (such as a co-worker), or has visited him regularly." },
                    { Modifier: "-2", Situation: "The changeling has encountered the person, place or object several times." },
                    { Modifier: "-4", Situation: "The changeling has only encountered the target once." },
                ]
            }
        ],
        "Drawback": "Causes temporary insanity.",
        "Catch": "Divining the past or future of someone the changeling is in love with.",
        "FullCost": "1 Glamour",
        "Cost": "●",
        "Dice Pool": "Wyrd + Wits",
        "Book": "Lost 165"
    },
    {
        "Name": "Fair Entrance",
        "Rank": "••",
        "Benefit": "Opens a door, no matter how it is barred.",
        "Action": "Instant",
        "FullDescription": [
            'This Contract allows the changeling to open any door as easily as the owner, instantly disarming all alarm systems and locks. However, by using this Contract, the character ensures she will be left similarly vulnerable. The next time someone with hostile or malevolent intent tries a lock on a dwelling or vehicle regularly used by the character, the lock is open and any alarm systems fails to function. However, any cameras that passively record all who enter or leave a region will record the character.'
        ],
        "FullCatch": [
            'When used to open the door to the dwelling of a personal enemy — someone who the character knows, who knows the character and who has admitted his enmity to the character.'
        ],
        "Roll Results": [
            'Dramatic Failure: The changeling pays the Contract’s price but gains no benefit.',
            'Failure: The Contract fails to work, and the character need pay no price.',
            'Success: The Contract opens the desired door. If examined, the door the character opened shows signs of having been opened, and cameras or recording equipment will reveal the intrusion. Later, one of the changeling’s doors or other locks suffers the same effect. Using this Contract multiple times before the price is paid attracts people with malicious intent to the character’s dwelling and vehicle and makes attempts to break into or steal them far more likely.',
            'Exceptional Success: The desired door shows no trace of having been opened by the character, and any cameras or recording equipment associated with the door do not record the character’s presence.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-1 to -3", Situation: "Especially complex or secure locks" },
                    { Modifier: "+1", Situation: "Carrying an article of clothing or a photograph of someone who regularly unlocks the door" }
                ]
            }
        ],
        "Drawback": "Causes one of the changeling's doors to be similarly opened for another some time soon.",
        "Catch": "Opening the door to someone who confessed his hatred towards the Changeling.",
        "FullCost": "1 Glamour",
        "Cost": "●",
        "Dice Pool": "Wyrd + Larceny",
        "Book": "Lost 165"
    },
    {
        "Name": "Fool’s Gold",
        "Rank": "••",
        "Benefit": "Guises an object to look like something else, potentially appearing quite valuable.",
        "Action": "Instant",
        "FullDescription": [
            'A common fae deceit, this Contract can make one object appear to be another by covering it with the Mask. This Contract’s most common use is to trick foolish, greedy mortals into accepting worthless dross in payment for valuable goods or services; in this day and age, however, that can be dangerous, as the Contract leaves its dupes aware of who tricked them. The Gentry like to be remembered, after all.'
        ],
        "FullCatch": [
            'The changeling uses this Contract to deceive someone who has been dishonest to or broken his word to the changeling in the past 24 hours.'
        ],
        "Roll Results": [
            'Dramatic Failure: The changeling fails to conceal the object behind the Mask, and cannot attempt to use this Contract again for 24 hours.',
            'Failure: The changeling fails to conceal the object behind the Mask.',
            'Success: The changeling makes an ordinary, mundane object appear to be another object of similar size and shape. This is, specifically, granting the object an aspect of the Mask (see p. 172), and all the rules governing the Mask apply. A weapon cannot be made to look completely non-threatening, for example, and armor can be disguised as some less suspicious form of protective clothing (such as sports padding) but not as ordinary clothing. This Contract cannot affect anything too large for the changeling to carry comfortably.',
            'This effect is a purely psychological one on the part of mortals interacting with the object, just as the Mask covering a changeling’s mien. A dry leaf disguised as a $100 bill will look and feel exactly like a $100 bill to any mortal who interacts with it, but it will not stand up to counterfeit detection measures. Likewise, a playing card disguised as a platinum credit card will not read if swiped through a reader and does not access an actual account. Since this illusion is an effect of the Mask, ensorcelled mortals, other changelings and any other beings able to see through the Mask are automatically immune to this power.',
            'The transformative effects of this Contract last until the end of the scene. If the no longer Masked object is in the possession of a mortal or supernatural being affected by the Mask (for example, if the changeling used phantom money to pay for something), that individual develops a certainty that the changeling was somehow connected to the Masked objects.',
            'Exceptional Success: As an ordinary success, except that the Mask lasts until the next sunrise and witnesses do not gain a Wits + Composure roll to recognize the changeling’s involvement.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-3", Situation: "Disguising an object of no inherent value as something of great worth (a pebble on a string for a diamond necklace)" },
                    { Modifier: "-2", Situation: "Disguising an object of no inherent worth as something of moderate worth (dry leaves for $20 bills)" },
                    { Modifier: "-1", Situation: "Disguising multiple similar objects (a handful of bottle caps into a handful of Spanish doubloons)" },
                    { Modifier: "-1", Situation: "Disguising an object of moderate worth as something of great worth (semiprecious necklace for diamond necklace)" },
                    { Modifier: "-", Situation: "Disguising an object of minor value as one of moderate value ($5 bill for $20 bill)" }
                ]
            }
        ],
        "Drawback": "This illusion lasts only for a time though, and when it expires the deceived parties automatically know who was responsible for the deception.",
        "Catch": "Clause is used to deceive someone who's lied to the Changeling in the last 24 hours.",
        "FullCost": "1 Glamour",
        "Cost": "●",
        "Dice Pool": "Wyrd + Manipulation",
        "Book": "Lost 166"
    },
    {
        "Name": "Sandman's Bargain",
        "Rank": "••",
        "Benefit": "Makes a dream immune to disruption by Oneiropomps",
        "Action": "Instant",
        "FullDescription": [
            'One of the problems with altering dreams is the tight-rope act that changelings must walk between changing a dream to suit his purposes and maintaining enough dream integrity so that the entire thing doesn’t collapse. This Contract can be used while in dreams to ensure stability at the possible cost of real damage to the oneiropomp.'
        ],
        "FullCatch": [
            'The changeling stayed awake for at least 24 hours prior to activating this Contract.'
        ],
        "Roll Results": [
            'Dramatic Failure: The changeling pays the Contract’s price but gains no benefit. The dream the changeling was attempting to modify immediately ends and he suffers one point of lethal damage from the trauma of the dream’s collapse.',
            'Failure: The Contract fails to work and the character pays no price.',
            'Success: For the duration of the current dream, the oneiropomp can make any changes he likes to a dream with no chance of disrupting it. No matter how abrupt, unusual or drastic the changes are, the dream remains stable. This will also keep a scoured dream from ending if the Intensity is reduced below 0.',
            'A dream touched with this Contract not only seems more real to the dreamer, but also to the changeling that invades it. Any damage taken by the user during a dream that has been stabilized with this Contract becomes actual, lethal damage.',
            'Exceptional Success: As above, but any damage suffered during the dream is considered bashing rather than lethal damage.',
            {
                'Suggested Modifiers': [
                    { Modifier: "+1", Situation: "The dreamer is personally known to the changeling" },
                    { Modifier: "+2", Situation: "The dreamer shares a dream pledge or task with the changeling" },
                    { Modifier: "-1", Situation: "The dreamer is a complete stranger to the changeling" },
                    { Modifier: "-2", Situation: "The Contract is used on the same dreamer for successive nights" }
                ]
            }
        ],
        "Drawback": "The user can takes real Lethal damage when hurt inside the dream.",
        "Catch": "Used after staying awake for 24 hours",
        "FullCost": "1 Glamour",
        "Cost": "●",
        "Dice Pool": "Wyrd + Resolve",
        "Book": "SaD 110"
    },
    {
        "Name": "•••",
        "Rank": "•••",
        "Benefit": "Contracts",
        "Action": "",
        "FullDescription": '',
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Drawback": "N/A",
        "Catch": "N/A",
        "FullCost": "",
        "Cost": "N/A",
        "Dice Pool": "N/A",
        "Book": "N/A"
    },
    {
        "Name": "The Blessing of Forgetfulness",
        "Benefit": "Allows the user to erase any one memory from the target's mind.",
        "Action": "Instant",
        "FullDescription": [
            'The character can cause the target to forget any single event that lasted no longer than three hours. In return, the character automatically suffers a dramatic failure when attempting to tell one lie that she sincerely hopes that the person she is telling it to will believe.'
        ],
        "FullCatch": [
            'The changeling is attempting to cause the target to forget about an event in which the changeling betrayed the target.'
        ],
        "Roll Results": [
            'Dramatic Failure: The Contract fails, but the character pays the price and suffers a dramatic failure when telling an important lie.',
            'Failure: The Contract fails, and the character does not have to pay the price.',
            'Success: The character causes the target to forget a single incident, such as a conversation, gunfight or some other event that lasted no more than three hours. All of events the target forgets must be from a single continuous time-period. If a single conversation about a topic took place in several parts, over the course of several days, the changeling could only cause the target to forget one of the various parts of this conversation. Instead of remembering the deleted events, the target constructs a series of memories consisting of the events that occurred immediately before and after the deleted memories and events that the target would have likely done during the time in question.',
            'Memories affected by this Contract are gone forever, and no amount of reminding the target about them will cause the target to remember them. However, if shown evidence that these events actually occurred, the target can convince himself that he, for some reason, forgot the event. Upon learning what actually occurred, most targets unconsciously construct memories that resemble the stories about the events that he has been told. However, these are constructed memories that the target may believe, but which contain no actual memories.',
            'The payment for the Contract’s success is called at a time not of the character’s choosing. Until the character has dramatically failed at an important lie, he cannot use this Contract again.',
            'Exceptional Success: The character can cause the target to forget the incident and any conversations or other events that caused the target to think or talk about this incident.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-1", Situation: "The character is attempting to cause the target to forget events that were of deep personal importance to the target." },
                    { Modifier: "+1", Situation: "Forgetting the events in question will make the target happier." }
                ]
            }
        ],
        "Drawback": "Curses the user to suffer a dramatic failure on the next Subterfuge roll to get someone to believe a necessary lie.",
        "Catch": "Used to make the target forget about an event in which the user betrayed the target",
        "FullCost": "2 Glamour + 1 Willpower",
        "Cost": "●●○",
        "Dice Pool": "Wyrd + Manipulation - Subject's Composure",
        "Book": "RoS 115"
    },
    {
        "Name": "Burden of Life",
        "Rank": "•••",
        "Benefit": "Removes damage starting at Agg by 2 for each success. Must be done within turns the damage was done by equal to user's wyrd.",
        "Action": "Instant",
        "FullDescription": [
            'As long as the changeling does so swiftly, he can heal someone from an injury or catastrophic event such as a heart attack. However, the healing causes the changeling to take on the burden of that person’s life. For the next full day, all damage that would harm that person applies to the changeling instead. The changeling cannot heal herself with this Contract.'
        ],
        "FullCatch": [
            'The target was injured during the act of saving the character from harm.'
        ],
        "Roll Results": [
            'Dramatic Failure: The changeling pays the Contract’s price but gains no benefit.',
            'Failure: The changeling neither heals the target nor takes on the burden.',
            'Success: For every success rolled, the target heals two points of damage. This Contract heals aggravated damage first, and if all of that is healed, the Contract heals lethal and then bashing damage. If the subject had taken at least four levels of lethal damage, and is healed of at least four levels of lethal or aggravated, the life burden is activated. For the next full day, all damage that the target would suffer instead affects the changeling. No armor, Contracts or other protections can prevent this damage from affecting the changeling. During this time, the target is immune to all damage save that delivered by cold iron. Self-destructive targets can swiftly kill or seriously injure the changeling. A changeling can use this Contract as often as desired, but for a day after using it, he cannot have this Contract used upon him — all such attempts automatically fail. A single target cannot benefit from this Contract more than once a day.',
            'To use this Contract, the changeling must touch the target within a number of turns of the injury or event equal to the changeling’s Wyrd.',
            'Exceptional Success: Regardless of severity, the target’s injuries are completely healed.',
            {
                'Suggested Modifiers': [
                    { Modifier: "+2", Situation: "The target literally saved the changeling’s life, sustaining the injury." },
                    { Modifier: "+1", Situation: "The changeling injured the target." },
                    { Modifier: "-1", Situation: "The changeling is only slightly acquainted with the target." },
                    { Modifier: "-3", Situation: "The changeling has never encountered the target before." }
                ]
            }
        ],
        "Drawback": "If you heal target for 4 or more damage, the user takes all damage the target would take in the next day instead.",
        "Catch": "Target was injured while saving the Character from harm.",
        "FullCost": "2 Glamour",
        "Cost": "●●",
        "Dice Pool": "Wyrd + Empathy",
        "Book": "CtL 166"
    },
    {
        "Name": "Delayed Harm",
        "Rank": "•••",
        "Benefit": "The user avoids damage from one attack.",
        "Action": "Reflexive",
        "FullDescription": [
            'The character can avoid any single lethal or aggravated attack she can see coming. However, the next lethal or aggravated attack upon the character is worse than it normally would be. This Contract may be used after the attack is actually rolled.'
        ],
        "FullCatch": [
            'The character is attacked while unarmed or otherwise not immediately able to defend herself.'
        ],
        "Roll Results": [
            'Dramatic Failure: The attack affects the changeling normally, but all successes on this attack roll are also added to the next attack doing lethal or aggravated damage that strikes the character.',
            'Failure: The Contract fails to work, and the character need pay no price.',
            'Success: Each success subtracts one point of damage. If sufficient successes are rolled, the changeling is unharmed. Each subtracted point of damage is then added to the next lethal or aggravated attack that injures the character. If the attack “blocked” was aggravated and the next attack suffered is lethal, the character takes two additional points of lethal damage. This Contract functions only on attacks doing lethal or aggravated damage, and cannot be used to block damage incurred from using this Contract.',
            'Exceptional Success: The attack fails to strike the character but is rolled anyway to determine the number of successes to be added to the next attack.',
            {
                'Suggested Modifiers': [
                    { Modifier: "+2", Situation: "The attack being blocked would incapacitate or kill the character." },
                    { Modifier: "+1", Situation: "The character is already injured." },
                    { Modifier: "-1", Situation: "The character is wearing armor." }
                ]
            }
        ],
        "Drawback": "The next attack they suffer doing lethal or aggravated damage does the previously avoided damage as a bonus.",
        "Catch": "Character is unarmed or otherwise unable to defend herself.",
        "FullCost": "2 Glamour",
        "Cost": "●●",
        "Dice Pool": "Wyrd + Dexterity",
        "Book": "CtL 167"
    },
    {
        "Name": "Goblin Midwife",
        "Rank": "•••",
        "Benefit": "Grant a temporary increase in fertility to your target",
        "Action": "Instant",
        "FullDescription": [
            'The stories of infertile couples seeking out the supernatural in order to have children have their basis in fact. This Contract allows the changeling to act as that go-between, blessing the subject with a temporary increase in fertility. The drawback is twofold, however. First, the child or children conceived with the aid of this Contract will bear some sort of faerie curse. Second, the character using the Contract suffers a mild backlash of twisted love; a former or current paramour develops a strong antipathy for the character. If the character using the Contract has no lovers past or present who are not already bitter and resentful towards him, then the curse will fall on the next object of his affections. He cannot use this Contract again until the curse has been expiated.'
        ],
        "FullCatch": [
            'The target of the Contract has broken the changeling’s heart.'
        ],
        "Roll Results": [
            'Dramatic Failure: Something goes terribly wrong. The target may sire or bear a true monster, or suffer a terrible curse that takes effect upon seeing or holding a child.',
            'Failure: The Contract has no effect, though its curse on the user is still levied. It cannot be used again until the curse has been expiated.',
            'Success: The target and the first sexual partner the target takes after receiving this blessing are both made temporarily fertile; even a vasectomy or tubal ligation will temporarily undo itself. For the next night and a day, the target may conceive or bear a child at greatly increased odds. Pregnancy is not guaranteed, but only extreme circumstances or outright supernatural interference will prevent sexual intercourse from resulting in conception. As described above, any resulting child is born with some form of minor fae curse, and a curse of antipathy falls on the changeling using the Contract.',
            'Exceptional Success: The child conceived by use of this Contract is born with some minor fae boon as well as the curse. This manifests as a Merit of up to three dots; the Storyteller may choose the Merit that will eventually take hold, or allow the character to choose the blessing’s form.'
        ],
        "Drawback": "Curse of antipathy on you and a minor fae curse on the target's offspring",
        "Catch": "the target has broken your heart",
        "FullCost": "2 Glamour + 1 Willpower",
        "Cost": "●●○",
        "Dice Pool": "Wyrd + Empathy",
        "Book": "GobM p25"
    },
    {
        "Name": "Hospitality's Hold",
        "Rank": "•••",
        "Benefit": "Gain bonus (equal to glamour spent) maintaining hospitality in a location, mark violators",
        "Action": "",
        "FullDescription": [
            'The tradition of Hospitality is one that is longstanding among the Lost. Bartenders, hoteliers, innkeepers, restaurateurs, nightclub owners and sometimes even private individuals may mark a particular location as subject to the rules of Hospitality, and all who come there know that they have been promised sanctuary, at least for a limited period of time.',
            'This social convention is one of the sole reasons why the wary Lost are willing to gather together in more than small and splintered groups - it encourages even the most cautious Changeling to be willing to meet face- to-face with others, knowing that centuries of tradition protect her.',
            'In most cases, Hospitality is enforced solely as a social agreement. A place marked as under Hospitality and any who violate it are looked down upon, shunned, or refused Hospitality in the future. However, this relies on social intercourse to be effective. Word of mouth can be an unreliable means of spreading news about such social indiscretions (especially if the violation was done in a stealthy manner, or caused so much damage that no one lived to tell the tale.) As well, a Changeling who violates Hospitality in one area, then travels to another, may find that he has travelled faster than his reputation and thus outstepped the consequences of his actions.',
            'In order to thwart these weaknesses in the social constraint, some Lost take their commitment to Hospitality a step further. By enacting a Goblin Contract to aid in the enforcement, they make certain that violators (especially those who make a habit out of breaking this tradition) can be easily identified.',
            'This Contract can only be activated in an area which is clearly marked as a place of Hospitality (see details on potential Hospitality marks on pp. 34-35 of Changeling: the Lost). Only one instance of Hospitality’s Hold may be active in any particular area at a time.'
        ],
        "FullCatch": [
            'The changeling owns or is the primary resident of the building which the Contract affects. (Note: if the Catch is used, the changeling spends no Glamour to activate the Contract, but must still choose an enforcement level as this will determine the duration of the Violation Marks as well as the changeling’s weakness during the duration of the Contract.'
        ],
        "Roll Results": [
            'Dramatic Failure: The changeling host expends the Glamour, but the Contract does not take effect. In fact, it backfires on its originator, and she is wrongly marked by the Wyrd as a violator of Hospitality. The marks look and endure just as if the Contract had been successful and the changeling had violated Hospitality under her own Enforcement.',
            'Failure: There is no effect, although the Glamour is still expended. The changeling host can tell the Contract has not been successfully activated, and may attempt to activate it again after 10 minutes’ time has passed.',
            'Success: The tradition of Hospitality is bolstered by the changeling host’s intention to enforce it. The host determines what level of Enforcement she wants the area to be under, with a minimum of 1 and a maximum of 5, and spends that may points of Glamour while traveling around the perimeter of the area affected. Until the next dusk or dawn (whichever comes first) or until the host leaves the area of Hospitality, anyone who violates the traditions of Hospitality in that area is marked by the Wyrd for their crime. (For details on Hospitality, see pp. 34-35 of Changeling: the Lost; for more on Violation Marks, see the sidebar.) The area may be as large as an entire building, or as small as a single room.',
            'For the duration of the Contract, the host is at a penalty equal to the level of Enforcement on any action not directly related to maintaining or enforcing the traditions of Hospitality, and at a bonus equal to the level of Enforcement for any actions that are directly related to protecting that Hospitality. This is a supernatural modifier and relates to any challenge, including the use of Contracts. The penalty does not apply in any actions taken against those currently bearing Violation Marks.',
            'Breaking Hospitality does not break the Contract. A host protecting other visitors against someone who has already violated Hospitality does not mark the host.',
            'Exceptional Success: As per Success; however, the contract does not enforce a penalty on the host’s non-Hospitality related actions as described above. The bonus remains in effect for actions directly pertaining to enforcing the Hospitality.'
        ],
        "Drawback": "Take a similar penalty on all actions not related to maintaining hospitality, except against violators",
        "Catch": "Own or be primary resident of location",
        "FullCost": "1 Glamour per level of Enforcement",
        "Cost": "● to ●●●●●",
        "Dice Pool": "Willpower + Wyrd",
        "Book": "GotU p29"
    },
    {
        "Name": "Mirror Mirror",
        "Rank": "•••",
        "Benefit": "The Changeling spies on another through a mirror,",
        "Action": "Instant",
        "FullDescription": [
            'Sometimes a changeling must know what an enemy is up to. This Contract allows the changeling to watch an adversary’s actions through a mirror for a short period. Unfortunately for the character, the next time the adversary peers into a mirror, she will be able to see the changeling.'
        ],
        "FullCatch": [
            'The changeling must break the mirror (by cracking its surface) before using this power. Given the tumultuous relationship between the Lost and fate, surprisingly few changelings are willing to risk such a catch.'
        ],
        "Roll Results": [
            'Dramatic Failure: The power seems to fail, but the next time the subject attempts to look through a mirror, he sees the changeling and may observe her for a number of minutes equal to the changeling’s Wyrd.',
            'Failure: Nothing happens.',
            'Success: The mirror’s surface seems to fog over for a moment; when the fog clears, the changeling can see (and only see) the subject of the Contract. The perspective is always from a corner of the room (usually an upper corner, where two walls adjoin a ceiling) the subject is in. If the subject is outside, the image usually hangs above him and to one side by two to three feet. Either way, the image moves with the subject but is otherwise set on the subject. The changeling has no control over it. The image remains in the mirror, even if the mirror is set aside or left alone by the changeling, for a number of hours equal to the changeling’s successes on the activation roll. While the subject has no way of knowing she is being watched, any mirror she looks into reflects not her own visage but that of the changeling — including whatever she’s doing at that time.',
            'Note that for the purpose of this Contract, a mirror must have been expressly constructed for the purpose of being a mirror. No other reflective surfaces, including items that were designed to be reflective for aesthetic purposes (such as certain pieces of art, car windows or sunglasses), count.',
            'Exceptional Success: As per success, save that the length of the effect becomes the number of successes the changeling rolled multiplied by her Wyrd in hours and can be ended at will.',
            {
                'Suggested Modifiers': [
                    { Modifier: "+3", Situation: "Changeling has some personal effect of the subject (hair, fingernail clipping, underwear, etc.); if the character has such an item, the below penalty does not apply" },
                    { Modifier: "-1 to -5", Situation: "Familiarity with the subject, ranging from intimate friend or lover (-1) to casual acquaintance (-3) to someone seen once or twice from a distance (-5)" },
                    { Modifier: "-10", Situation: "Subject is a complete stranger, but the character has some image of her available for reference. If the character doesn’t know what the subject looks like, she can’t attempt to use this Contract." }
                ]
            }
        ],
        "Drawback": "The target will see the Changeling when she next looks into a mirror.",
        "Catch": "The changeling breaks the mirror.",
        "FullCost": "1 Glamour + 1 Willpower",
        "Cost": "●○",
        "Dice Pool": "Wyrd + Resolve",
        "Book": "SaD 53"
    },
    {
        "Name": "••••",
        "Rank": "••••",
        "Benefit": "Contracts",
        "Action": "",
        "FullDescription": '',
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Drawback": "N/A",
        "Catch": "N/A",
        "FullCost": "",
        "Cost": "N/A",
        "Dice Pool": "N/A",
        "Book": "N/A"
    },
    {
        "Name": "Goblin Oath",
        "Rank": "••••",
        "Benefit": "The changeling can bind another character to an oath. The party taking the oath has difficulty breaking this oath, and if she does, disaster will strike her down.",
        "Action": "Instant",
        "FullDescription": [
            'The changeling can bind another character to an oath. The party taking the oath has difficulty breaking this oath, and if she does, disaster will surely strike her down. The changeling must also swear an oath to the subject and suffers similar penalties if he breaks his oath — but the nature of the Goblin Oath is such that both parties may suffer if only one is unfaithful.'
        ],
        "FullCatch": [
            'The changeling and the other party are making a treaty of alliance or non-aggression.'
        ],
        "Roll Results": [
            'Dramatic Failure: The changeling is bound by his oath, but the target is not.',
            'Failure: The Contract fails, and neither party is bound by the oath.',
            'Success: The changeling and the target must each swear an oath to one another. Since most changelings have heard of this Contract, they attempt to get the character using this Contract to swear an oath at least as potent as the one they are swearing. Often, both parties swear the same oath, but this is not required. Although this oath can be a pledge, it needn’t be.',
            'This Contract represents a method in which changelings can attempt to effectively increase the number of pledges they can swear. It can even be used to oathbind one of the Gentry, assuming that a changeling can force one of them to swear an oath bound by this Contract. Using this Contract is obvious to any changeling or Gentry present, but mortals will just think that the changeling is using unusually formal and elaborate language when making a promise.',
            'Once the oath is sworn, the changeling and the target must make a Resolve + Composure roll to actually break the oath they have sworn. Each success rolled for when performing this Contract acts as a -1 penalty to this roll. Failure means that the character cannot attempt to break the oath during until the sun next rises, and a dramatic failure means that the character cannot attempt to break the oath for one full week. An exceptional success allows the character to break the oath and avoid any further penalties. However, breaking this oath under any other circumstances results in disaster striking the oathbreaker. A number of times equal to the changeling’s Wyrd, one of the oathbreaker’s rolls becomes a chance die. In all cases, these rolls are ones that are important to the character who broke the oath, meaning that the disaster strikes at the worst possible times. However, once the character has suffered that number of disasters, the effects of this Contract cease to plague him.',
            'The other party in the Goblin Oath also suffers from the oathbreaker’s infidelity, though to a lesser degree. The wronged party is subject to rolling only a chance die at the worst possible time, although he must endure this only once before the oath’s effects on him have passed.',
            'Exceptional Success: Both people swearing the oath must make an exceptional success on the Resolve + Composure roll needed to break the oath in order to do so; an ordinary success does not allow either party to break the oath. Also, even if the character does roll an exceptional success, he still suffers a number of disasters equal to the changeling’s Wyrd, where an important roll becomes a change roll.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-1", Situation: "The other party is swearing the oath under duress." },
                    { Modifier: "+1", Situation: "The changeling and the other party swear the same oath." }
                ]
            }
        ],
        "Drawback": "The changeling must also swear an oath to the subject and suffers similar penalties if he breaks his oath — but the nature of the Goblin Oath is such that both parties may suffer if only one is unfaithful.",
        "Catch": "Used when making a treaty of alliance or non-aggression",
        "FullCost": "2 Glamour + 1 Willpower",
        "Cost": "●●○",
        "Dice Pool": "Wyrd + Intimidation",
        "Book": "RoS 115"
    },
    {
        "Name": "Good and Bad Luck",
        "Rank": "••••",
        "Benefit": "Accurately guess the outcome of an event that would be difficult to predict.",
        "Action": "Instant",
        "FullDescription": [
            'The character can make a single lucky guess, at the price of a bout of bad luck. The guess can determine which apartment in a building holds a sniper, or uncover a lottery number or computer password. However, the chance of determining the correct guess must be one in 10,000 or better — sufficient to guess four digits in a password or win approximately $500 at lottery or gambling. The bad luck is similarly impressive, striking only when it would do the worst harm.'
        ],
        "FullCatch": [
            'The character is using the Contract to best a single well-known rival or enemy.'
        ],
        "Roll Results": [
            'Dramatic Failure: The changeling pays the Contract’s price but gains no benefit.',
            'Failure: The changeling finds neither good nor bad luck.',
            'Success: The character makes a single lucky guess with odds no greater than one in 10,000. However, the next roll he fails while under significant stress, including the physical stress of combat, the emotional stress of important social expectations or simple time pressure, automatically be- comes a dramatic failure. Because of the power inherent in this Contract, only an important failed roll becomes a dramatic failure. However, this bad luck almost never waits more than a month to strike.',
            'Exceptional Success: The guesser can make a one in 100,000 guess, potentially winning as much as $5,000.',
            {
                'Suggested Modifiers': [
                    { Modifier: "+1", Situation: "The character has at least two or three minutes to consider her guess." },
                    { Modifier: "-1", Situation: "The character has only a few moments to make her guess." }
                ]
            }
        ],
        "Drawback": "Suffer a bout of bad lack afterwords.",
        "Catch": "Used to best a rival or enemy.",
        "FullCost": "2 Glamour",
        "Cost": "●●",
        "Dice Pool": "Wyrd + Wits",
        "Book": "CtL 167"
    },
    {
        "Name": "Call the Hunt",
        "Rank": "••••",
        "Benefit": "Calls a Wild Hunt from out of the Hedge.",
        "Action": "Instant",
        "FullDescription": [
            'This dread Contract is its own price. The changeling calls a Fae hunting party. The character can only use this Contract within clear sight of an entrance into the Hedge, and the Wild Hunt emerges from that point in the Hedge. This Contract sends what seems to be a call for aid by a powerful and important Fae; when the hunting party discovers otherwise, they will certainly look into who called them.'
        ],
        "FullCatch": [
            'The character is actually in the Hedge.'
        ],
        "Roll Results": [
            'Dramatic Failure: The hunting party hears the call but is aware that it was made by the changeling. They may come anyway, specifically to hunt the changeling who called them.',
            'Failure: The Contract fails, and the hunting party is not called.',
            'Success: The character calls the Wild Hunt, and it arrives within 10 minutes.',
            'Exceptional Success: The hunting party arrives the turn after the character performs this Contract.',
            {
                'Suggested Modifiers': [
                    { Modifier: "+1", Situation: "The changeling yells loudly for the hunt to come." },
                    { Modifier: "-1", Situation: "The changeling performs this Contract while deliberately hidden." }
                ]
            }
        ],
        "Drawback": "Haha oh man what were you thinking? No seriously, nice going dumb ass! You deserve this.",
        "Catch": "Character is in the Hedge",
        "FullCost": "1 Glamour + 1 Willpower",
        "Cost": "●○",
        "Dice Pool": "Wyrd + Presence",
        "Book": "CtL 167"
    },
    {
        "Name": "Riot",
        "Rank": "••••",
        "Benefit": "The crowd becomes a violent, enraged mob. They target an obvious source of anger first, or are randomly violent with no target.",
        "Action": "Instant",
        "FullDescription": [
            'The changeling can cause a crowd of at least two dozen people to riot. To use this Contract, the majority of this crowd must be experiencing a negative emotion such as sadness, frustration, or anger. Workers who have just been laid off, the audience of a terrible speech or performance, or the mourners at the funeral are all examples of such crowds. However, the drawback of this Contract is that many people in the area, including both bystanders and participants, vividly remember the changeling and associate her in some way with instigating the riot.'
        ],
        "FullCatch": [
            'The changeling addresses the crowd and urges them to violence immediately before using this Contract. The changeling must be heard by a significant portion of the crowd for this catch to be effective.'
        ],
        "Roll Results": [
            'Dramatic Failure: The crowd remains largely peaceful, but several members become extremely hostile towards the changeling and may become violent towards her.',
            'Failure: The Contract fails and the crowd remains peaceful.',
            'Success: The crowd becomes violent, yelling and destroying property. If there is an obvious target for the crowd’s negative emotion, like a boss that just fired a large number of workers or the fans of a rival sports team, the crowd attacks them or their property. Otherwise, the crowd becomes randomly violent, destroying property and attacking anyone who attempts to stop them. However, serious threats like armed guards cause the crowd to disperse.',
            'Exceptional Success: The crowd becomes exceptionally violent, starting fires, causing massive property destruction, and attacking with murderous violence anyone who is an obvious target. The crowd is also motivated enough to march as far as a mile or two to gain access to an obvious target. If there are other people nearby who would have any chance of joining this riot, they will, and the riot can easily spread.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-3", Situation: "The crowd is peaceful and subdued, and a riot is exceptionally unlikely" },
                    { Modifier: "-1", Situation: "There is no clear target for the crowd’s negative feelings" },
                    { Modifier: "+1", Situation: "An obvious target for the crowd’s negative feelings is nearby" },
                    { Modifier: "+3", Situation: "The crowd is already angry and could potentially riot without incitement" }
                ]
            }
        ],
        "Drawback": "Many people in the area vividly remember the changeling and that they are responsible for the riot.",
        "Catch": "The changeling addresses the crowd and urges them to violence immediately before use. Most of the crowd must hear the changeling.",
        "FullCost": "2 Glamour + 1 Willpower",
        "Cost": "●●○",
        "Dice Pool": "Wyrd + Presence",
        "Book": "VL 23"
    },
    {
        "Name": "Royal Oil",
        "Rank": "••••",
        "Benefit": "Target is covered in magical, highly flammable oil.",
        "Action": "Instant",
        "FullDescription": [
            'This vicious Contract has been outlawed in many domains. It produces a viscous supernatural liquid that clings to a character, making her far more susceptible to the ravages of flame. The effect gets its name from its drawback, a phantom crown of fire that rings the character’s head, marking him as a user of this Contract.',
            'A character must touch a target before using this effect.'
        ],
        "FullCatch": [
            'The character drinks a tablespoon of castor oil prior to using the power. The oil causes mild but distracting cramping, levying a -1 die penalty on all rolls for the scene.'
        ],
        "Roll Results": [
            'Dramatic Failure: The oil oozes forth from the char- acter’s skin... and remains there. She becomes susceptible to attacks from fire, and any such attacks inflict aggravated damage. The crown of fire does not appear, however, but that might be cold comfort for the changeling oiled-up by her own hand.',
            'Failure: Nothing happens.',
            'Success: Oil seeps forth from the character’s skin and slides onto the subject’s skin and clothes, spreading across her. She takes on a slight yellowish sheen, and others trained to recognize the effect know that she has been oiled (bar- ring supernatural obfuscation on the part of the subject). The oiled character becomes particularly weak against fire, suffering aggravated damage from all such attacks. If the character already suffered aggravated damage from fire (if she is a vampire, for example), then such attacks against her do an additional three dice of damage.',
            'Meanwhile, a crown of flickering flames appears above the changeling’s head, marking him as the user of the Con- tract to all who know what it means. This crown reduces all Stealth rolls to a chance die and provides a +1 bonus to characters making ranged attacks on the changeling.',
            'This power’s effects, both on the changeling and her subject, last for a number of turns equal to the number of successes rolled to activate the Contract.',
            'Exceptional Success: Additional successes are their own reward.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-2", Situation: "The subject is undead (vampire, zombie, promethean, etc.)" },
                    { Modifier: "-3", Situation: "The weather is rainy or the subject’s skin is otherwise particularly wet" },
                    { Modifier: "-5", Situation: "The subject is a normally-ephemeral entity, such as a ghost or spirit; this penalty applies even when such an entity is manifested" }
                ]
            }
        ],
        "Drawback": "Changeling is marked with a fiery crown showing he was the one that activated the contract.",
        "Catch": "Drink a tablespoon of castor oil and suffer from stomach cramps.",
        "FullCost": "2 Glamour",
        "Cost": "●●",
        "Dice Pool": "Wyrd + Dexterity",
        "Book": "SaD 54"
    },
    {
        "Name": "•••••",
        "Rank": "•••••",
        "Benefit": "Contracts",
        "Action": "",
        "FullDescription": '',
        "FullCatch": [
            ''
        ],
        "Roll Results": [
            ''
        ],
        "Drawback": "N/A",
        "Catch": "N/A",
        "FullCost": "",
        "Cost": "N/A",
        "Dice Pool": "N/A",
        "Book": "N/A"
    },
    {
        "Name": "Blood-Binding",
        "Rank": "•••••",
        "Benefit": "Drains a target splashed with blood of all Glamour",
        "Action": "Instant",
        "FullDescription": [
            'The changeling can strip an opponent of all protections, dispelling all magics, including all protective Contracts and negating all other supernatural protections for the entire scene. The target also loses all Glamour points. However, to use this Contract, the changeling must throw a drop of her blood at the target and also sacrifice all of her Glamour.'
        ],
        "FullCatch": [
            'The changeling uses this Contract against someone who has murdered a blood relative. Using this catch negates the Willpower expenditure, but the changeling must still sacrifice all her Glamour points.'
        ],
        "Roll Results": [
            'Dramatic Failure: The changeling loses all her Glamour, while the target is unaffected.',
            'Failure: The Contract fails.',
            'Success: By spending all of her remaining Glamour points, the changeling strips the target of all supernatural protections. All Contracts protecting the target are dispelled and all tokens or other supernatural protections of a more enduring nature are negated for one full scene. This Contract even temporarily negates any consciously activated supernatural powers of ghosts, vampires and other supernatural beings (in other words, a werewolf could not shift forms, but would not lose its regenerative capabilities). In addition, a fae target is stripped of all his remaining Glamour points. The target can regain Glamour normally, but for a short time, he is utterly helpless.',
            'To use this Contact, the changeling must face the target, look him in the eyes, cut herself sufficiently to draw blood and throw a drop of blood in the direction of the target. The changeling must also be no more than Wyrd yards from the target.',
            'Exceptional Success: For the next scene, the target cannot be affected by any supernatural protections, even those placed on him by other characters.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-1", Situation: "The changeling cannot clearly see the target’s face." },
                    { Modifier: "+2", Situation: "The changeling knows the target’s true name and shouts it when performing this Contract." },
                ]
            }
        ],
        "Drawback": "The user is drained of all Glamour as well.",
        "Catch": "Used against someone who murdered a blood relative. (Glamour expenditure is not negated)",
        "FullCost": "All remaining Glamour + 1 Willpower",
        "Cost": "○(All Glamour)",
        "Dice Pool": "Wyrd + Presence",
        "Book": "RoS 116"
    },
    {
        "Name": "Goblin Ward",
        "Rank": "•••••",
        "Benefit": "Draw a magical mark; Any changeling not attuned to it and steps near it will suffer from hallucinations and confusion. When the ward is activated it will affect everyone nearby, even those attuned. High Clarity Changelings must roll for loss.",
        "Action": "Extended (5 successes necessary; each roll represents 10 minutes of ritual)",
        "FullDescription": [
            'Particularly paranoid Lost swear by this Contract, claiming that the usual security measures changelings adopt in their Hollows (namely the Hollow Wards Merit) simply don’t go far enough to protect from privateers, loyalists, hobgoblins and the other dangers of the Hedge. Detractors question just how effective against hobgoblins such a ward can be if it is readily available at the Goblin Market.',
            'The Lost paints an occult symbol in the location she hopes to ward against intruders. This is often a Hollow, but the power does not necessitate that the ward be placed within the Hedge. The Lost may specify any individuals she wishes to remain unaffected by the ward’s magic. Thereafter, any other person who enters the area is temporarily mentally enervated, allowing the character to defend herself or make her escape.',
            '<b>Note:</b> Changelings of Clarity 7 or higher who suffer the effects of this Contract must roll to avoid a loss of Clarity (four dice). This does not apply to any other form of the Morality Advantage.'
        ],
        "FullCatch": [
            'The character paints the ward in the blood of a murdered enemy.'
        ],
        "Roll Results": [
            'Dramatic Failure: The fae madness the character attempted to bind into the symbol escapes, overwhelming his senses. He suffers vivid hallucinations, possibly for hours. The character suffers a -5 penalty to all mental and social rolls until the following sunrise or sunset, whichever comes first.',
            'Failure: The Contract has no effect.',
            'Success: The character binds a fraction of the Wyrd into the symbol. The number of successes she rolls determines the potency of the ward. If the ward is never triggered, it remains in place for a month. If, however, characters not attuned to the ward approach within the changeling’s Wyrd in yards, the ward goes off, showering everyone within the room or within 10 square yards (whichever is smaller) with mad fae magic. While the ward differentiates between those its creator attuned it to and those she didn’t, the magic that pours forth when the ward has been set off is not so discriminatory, and will even affect the creator if she is within range. Each character in the area of effect must roll Composure + Wyrd at a penalty equal to the number of successes rolled by the ward’s creator. Any character that fails this roll becomes overwhelmed by the madness of Faerie, his senses twisted and distorted and his mind numbed. He perceives enemies where there are none and mistakes strangers for friends, all tinged with the palpable magic of the fae.',
            'A character affected by the ward suffers a -3 to all dice pools and a -2 to his Defense and Initiative. He suffers hallucinations, but may roll Resolve + Composure -3 to gain clarity for a number of turns equal to his Resolve. (This clarity does not reduce penalties, but does allow the character to differentiate a raven from a writing desk.) The effects last for a number of minutes equal to the ward creator’s Wyrd. Once the ward’s magic has been discharged, the ward becomes inert, its magic spent.',
            'The creator, for his part, suffers from the amount of fae magic he must invest into the ward. He does not benefit from his seeming blessing (seeming curse and kith blessing are not affected) for as long as the ward exists, though he regains those benefits the moment the ward fades or is set off (allowing him to know that his fae alarm has been tripped, regardless of his current location). A changeling may have only one Goblin Ward active at any given time, and may end the Contract’s effect at any time by physically destroying the symbol.',
            'Exceptional Success: If the creator rolls 10 or more successes, the ward lasts for an additional month without further expenditure on the part of the changeling.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-2", Situation: "Ward is set anywhere aside from the Hedge or Arcadia" }
                ]
            }
        ],
        "Drawback": "The creator cannot use his Seeming Blessing for as long as the ward continues to exist.",
        "Catch": "The ward is painted with the blood of a murdered enemy.",
        "FullCost": "2 Glamour + 1 Willpower",
        "Cost": "●●○",
        "Dice Pool": "Wyrd + Occult",
        "Book": "SaD 54"
    },
    {
        "Name": "Lost and Found",
        "Rank": "•••••",
        "Benefit": "Escapes from captivity or pursuit, seemingly by chance, but always automatically.",
        "Action": "Instant",
        "FullDescription": [
            'This Contract allows the character to escape from almost any situation, but his current location becomes known to another enemy.'
        ],
        "FullCatch": [
            'The changeling is escaping a well-known enemy who has been after her personally for more than a year.'
        ],
        "Roll Results": [
            'Dramatic Failure: The changeling pays the Contract’s price without benefit.',
            'Failure: The Contract fails, and the character does not escape.',
            'Success: Through some coincidence, the character can escape pursuit or captivity. A distraction may draw off pursuers. The character may find her bonds are not as tight as she thought, that someone left the cell door open or keys within easy reach and her guards are asleep or busy. As long as some possible coincidence allows her to escape capture or pursuit, she automatically escapes. However, as soon as the character has escaped, another of the character’s enemies, or at minimum someone looking for her for some malevolent purpose, such as a bounty hunter or an agent of the Fae, coincidentally discovers the character’s current location.',
            'Exceptional Success: In addition to the escape, the character’s captors or pursuers cannot find any trace of how she escaped or where she went. These traces are still visible to the new enemy that finds her location.',
            {
                'Suggested Modifiers': [
                    { Modifier: "+3", Situation: "The changeling is escaping pursuit instead of capture." },
                    { Modifier: "+1 to +2", Situation: "The changeling is poorly guarded or in a flimsy prison." },
                    { Modifier: "-1 to -2", Situation: "The changeling is well guarded or in a well- built cell." },
                    { Modifier: "-4", Situation: "The changeling is imprisoned in a way almost impossible to escape from." },
                ]
            }
        ],
        "Drawback": "Another enemy is made aware of the escapee's new location.",
        "Catch": "Escaping someone who knew the changeling personally for over a year.",
        "FullCost": "2 Glamour + 1 Willpower",
        "Cost": "●●○",
        "Dice Pool": "Wyrd + Presence",
        "Book": "CtL 168"
    },
    {
        "Name": "Mad Trespass",
        "Rank": "•••••",
        "Benefit": "Use a dream to spy on a Keeper",
        "Action": "Instant",
        "FullDescription": [
            'Changelings are paranoid. Everywhere they look they see signs that their Keepers are coming to retrieve their missing property. Nearly every pledge they take is intended to make the job of finding them more difficult. More than a few changelings have wished they could turn the tables on the Gentry and spy on them. This Contract fulfills that wish.'
        ],
        "FullCatch": [
            'The changeling was freely given some gift or boon by the target or one of its loyal servants.'
        ],
        "Roll Results": [
            'Dramatic Failure: The changeling pays the Contract’s price but gains no benefit.',
            'Failure: Contract fails to work and the character pays no price.',
            'Success: This Contract only works while the changeling is dreaming. To proceed, the changeling must first scour his dream (see Changeling: the Lost, p. 195), reducing the Intensity to 0. While his sleeping minds lies in a fallow state, the changeling speaks the name or a Title of the True Fae he intends to spy on and activates the Contract.',
            'Upon activation, the changeling’s dream begins to rebuild itself to show the named Gentry and her immediate vicinity. The oneiromancer’s point of view follows the True Fae no matter where she travels for the duration of the dream. Everything the True Fae sees and hears is clearly distinct and audible to the changeling. For all intents, the changeling exists as an undetectable shade that can neither influence his surroundings nor be influenced by them.',
            'The price for this Goblin Contract is particularly steep. When the character awakes from his dream, his Keeper knows exactly where to find him until the following dawn.',
            'Exceptional Success: With an exceptional success, instead of following the Gentry, the dreaming changeling can shift his point of view and explore the Domain or area of the Hedge the Gentry is currently in. If the True Fae leaves that Domain or the Hedge, the dream shifts its focus back to the True Fae.',
            {
                'Suggested Modifiers': [
                    { Modifier: "+1", Situation: "The changeling uses both the name and a Title of the targeted True Fae" },
                    { Modifier: "+2", Situation: "The changeling uses the Contract to target his Keeper" },
                    { Modifier: "-1", Situation: "The targeted Gentry isn’t in Arcadia or the Hedge" },
                    { Modifier: "-2", Situation: "The changeling is currently sharing his dream with other changelings" }
                ]
            }
        ],
        "Drawback": "The keeper spied on knows where to find you until the following dawn.",
        "Catch": "Given a gift by the keeper or it's servants.",
        "FullCost": "1 Glamour + 1 Willpower",
        "Cost": "●○",
        "Dice Pool": "Wyrd + Composure",
        "Book": "SaD 110"
    },
    {
        "Name": "Sabotage",
        "Rank": "•••••",
        "Benefit": "Damage or disable a factory or equivalent full of machinery.",
        "Action": "Instant",
        "FullDescription": [
            'The changeling can damage and disable a factory full of machines or another large collection of industrial machinery, like a rail yard full of trains. To use this Contract, the changeling must touch one of the machines. Unfortunately, when the machines break down, the one that the changeling touched breaks in some dramatic fashion and causes the changeling a number of dice of bashing damage equal to her Wyrd. This damage cannot be dodged or otherwise avoided, but armor protects against it.'
        ],
        "FullCatch": [
            'The changeling has at some time been employed to work on or with machines like the targets.'
        ],
        "Roll Results": [
            'Dramatic Failure: The machine the changeling touches causes the changeling a number of dice of bashing damage equal to his Wyrd, but it and other machines are unharmed.',
            'Failure: The Contract fails and the machines function normally.',
            'Success: All of the machines in a factory break and require repair. These repairs require an extended action, with one roll made every minute for each machine. The number of successes needed to complete the repairs is equal to the number of successes rolled by the changeling + the changeling’s Wyrd divided by 2 (round up).',
            'Exceptional Success: The machines are badly damaged and the needed repairs require an extended action, with one roll being attempted every 10 minutes for each machine. The number of successes needed to complete the repairs is equal to the number of successes rolled by the changeling + the changeling’s Wyrd.',
            {
                'Suggested Modifiers': [
                    { Modifier: "-1", Situation: "The changeling wears armor to protect against the damage" },
                    { Modifier: "+1", Situation: "The character makes a loud speech about why the machines need to be destroyed as they use this Contract" }
                ]
            }
        ],
        "Drawback": "The changeling suffers a roll of their total Wyrd in bashing damage.",
        "Catch": "The user has been employed at some point to work on machines that they are targeting.",
        "FullCost": "3 Glamour + 1 Willpower",
        "Cost": "●●●○",
        "Dice Pool": "Wyrd + Crafts",
        "Book": "VL 24"
    },
    {
        "Name": "Sleepwalker",
        "Rank": "•••••",
        "Benefit": "Devour a dream for a verity of potent benefits",
        "Action": "Instant",
        "FullDescription": [
            'The realms of sleep operate under a different set of rules than reality, if any rules exist at all. In dreams, even humans are capable of performing the impossible. In dreams, flight, mighty feats of strength and other such incredible acts are considered normal. This Contract draws on the Wyrd-fueled dreams of changelings to allow the Lost to impose some of the rules of dreams over reality.'
        ],
        "FullCatch": [
            'The dream to be devoured is that of a child.'
        ],
        "Roll Results": [
            'Dramatic Failure: The changeling pays the Contract’s price but gains no benefit. The prepared dream is wasted.',
            'Failure: The Contract fails to work and the character pays no price. The prepared dream is wasted.',
            'Success: Not just any old dream will work for the purposes of this Contract. A changeling must prepare the dream to be used through dreamweaving (see Changeling: the Lost, p. 196) with a specific effect in mind. When the changeling activates this Contract, she must devour the prepared dream as part of the cost. Each use of this Contract requires the creation of a new dream. Dreams may be prepared to produce one of the following effects.',
            '<ul><li><b>Dreams of Might:</b> Any one Attribute chosen by the changeling at the time the dream was created is boosted to superhuman levels. Increase a single Attribute by 5 (ignoring the usual restrictions) for the remainder of the scene.</li><li><b>Dreams of Glory:</b> Any one Skill chosen by the changeling at the time the dream was created is enhanced by the Wyrd. Increase a single Skill by 5 (ignoring the usual restrictions) for the remainder of the scene.</li><li><b>Dreams of Flight:</b> The changeling gains the power to fly for the remainder of the scene. Flight speed is double the usual Speed of the changeling. An interesting side-effect of this particular dream is that normal humans don’t tend to notice the changeling while she’s flying or if they do, the Mask extends to cover this unnatural act by providing some visual explanation of flight (such as a parachute or a hang glider).</li><li><b>Dreams of Vanity:</b> The changeling becomes almost irresistible to members of the opposite sex (or preferred sex). For the remainder of the scene the character gains the Striking Looks Merit at four dots, has her Persuasion and Socialize Skills increased by three (ignoring usual restrictions) and exudes an intoxicating scent that is different for each person who smells it. Oddly, this particular dream has no effect on individuals that already truly love the changeling.</li><li><b>Dreams of Dominance:</b> Everyone within line-of-sight of the changeling considers her the absolute final authority on all matters. Short of suggesting suicidal courses of action, or actions that violate the moral code of an individual (i.e. would require a Morality or Clarity roll), any command given by the changeling will be followed immediately. Even people that are unable to communicate with the changeling because of language differences or deafness will follow her lead. Unlike the other dreams, this particular usage of the Contract persists until either the next dawn or until the changeling gives the same person contradictory orders.</li></ul>',
            'While under the influence of this Contract, the changeling exists in a sort of waking-slumber in which the sharp edges of reality are dulled and blurred by the overlap of dreams. All Perception rolls suffer a –3 penalty.',
            'After the effects of this Contract have ended, the changeling will be unable to sleep (by any means, including magical effects or unconsciousness due to injury), or to dream, for 36 hours. All traits are halved (round down) during this period until the changeling is able to sleep.',
            'Exceptional Success: As above and the prepared dream may be reused.'
        ],
        "Drawback": "-3 to perception while the contract is active. The user cannot sleep and halves all traits until they can sleep.",
        "Catch": "Devours a child's dream",
        "FullCost": "1 Glamour + 1 Willpower",
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

