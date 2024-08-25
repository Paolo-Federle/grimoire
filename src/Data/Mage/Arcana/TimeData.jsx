const timeOneData = [
    {
        "Titolo": "Counterspell",
        "Arcana": "Any one of the attacking spell’s Arcana at •",
        "DescrizioneAlta": "The mage creates Pattern interference that can weaken or even cancel a spell.",
        "Practice": "Shielding",
        "Action": "Instant and contested; successes are compared to the target spell’s Potency",
        "Duration": "Lasting",
        "Aspect": "Covert",
        "Cost": "1 Mana",
        "DescrizioneMiddle": "<p>When someone directs a vulgar spell at the mage or other targets whom the mage wishes to protect, he can cast a countering spell that creates a form of magical interference, weakening or even canceling the attacking spell, similar to how an obstacle can act as cover against a ranged attack. He must first have Mage Sight to be able to perceive the attacking spell. Like a dodge action, he can cast Counterspell against vulgar spells cast by another mage with a higher Initiative. (He cannot counter attacks with lower Initiatives if he has already performed an action in the turn. See “Dodge,” p. 156 of the <b>World of Darkness Rulebook</b>, for rules on how this circumvents the normal Initiative order for the turn.) A mage can even counter sympathetic spells cast directly at him (but not those cast at other targets), by sensing the sympathetic conduit being forged by the spell (again, he must have Mage Sight for this). </p><p>Successes are subtracted from the target spell’s Potency. If the target spell is left with no Potency, it is canceled entirely. If even a single point of Potency remains, the spell is applied against its target (at its reduced Potency). </p><p>A covert spell cannot normally be countered, since the defending mage must first identify its Arcanum components using the normal rules for doing so (see “Scrutinizing Spells,” p. 278). Such investigation is not normally possible within the same turn in which the spell is cast, although some Time magic might give a mage the extra time needed or clue him in on what spell the caster will cast before he casts it. Vulgar spells do not need this kind of scrutiny; they are obvious enough to counter within the same turn of casting. </p><p>A spell aimed at more than one target does not need to be countered for each target; a successful countering diminishes or prevents its effects against all targets. </p><p>A countering mage must have at least one dot in one of the Arcana used by the attacking spell. For example, to counter a conjunctional Mind 3 + Life 2 spell, a mage needs either Mind 1 or Life 1, but not both. If he does not have a proper Arcanum lore, he cannot counter the spell. Counterspell can be learned as a rote (use Occult Skill), but it must be learned separately for each Arcanum to which it applies.</p><p>A mage with two dots of Prime can instead use the “Counterspell Prime” spell, p. 222, to counter any spell, regardless of Arcanum. In addition, Counterspell Prime allows him to counter covert spells (assuming he has active Mage Sight) without first needing to identify them.</p>",
        "DescrizioneBreve": "counter Time spells"
    },
    {
        "Titolo": "Momentary Flux",
        "Arcana": "Time •",
        "DescrizioneAlta": "This is the power to discern the “Butterfly Effect.” The mage can judge a currently ongoing event, one about to take place (within the next five turns) or one that has just taken place (within five turns) and discover whether it will be beneficial or adverse for her.",
        "Practice": "Knowing",
        "Action": "Instant",
        "Duration": "Transitory (one turn)",
        "Aspect": "Covert",
        "Cost": "None",
        "DescrizioneMiddle": "A simple success is enough to get an answer concerning one action or event. The Storyteller answers this question as well as he can, knowing what he knows about the situation and the intentions of his Storyteller characters. However, there is no guarantee that the new course of action the mage chooses based on this knowledge will not eventually lead to an adverse choice, since events are always in flux based on many factors. This spell tells the mage only if the specific event queried will lead to good or ill for him in the immediate future.",
        "RoteName": "Silver Ladder Rote: Seizing the Moment",
        "RoteDice": "<b>Dice Pool:</b> Wits + Investigation + Time",
        "RoteDescrizione": "To mages of the Silver Ladder, the use of this rote is nothing less than asserting power over an instant in time and shaping its outcome according to one’s own will.",
        "DescrizioneBreve": "determine if event was beneficial"
    },
    {
        "Titolo": "Perfect Timing",
        "Arcana": "Time •",
        "DescrizioneAlta": "This spell allows a mage to accurately assess all of the temporal components occurring in her immediate presence, giving her an opportunity to act at exactly the proper time to have the maximum effect. If she wants to throw a punch, she knows how and where to strike with the greatest possible (mundane) precision and force. Or if she wants to convince someone of something, she knows the most opportune instant in which to speak.",
        "Practice": "Knowing",
        "Action": "Reflexive",
        "Duration": "Special",
        "Aspect": "Covert",
        "Cost": "1 Mana",
        "DescrizioneMiddle": "Each success grants the mage a single extra die in the next roll that has to — or is chosen to — be made. This does not include spellcasting rolls. If the next roll is for a spell (perhaps the mage needs to quickly cast a countermagic), the character loses the benefit.",
        "RoteName": "Adamantine Arrow Rote: Strike True",
        "RoteDice": "<b>Dice Pool:</b> Intelligence + Composure + Time",
        "RoteDescrizione": "Mages of the Adamantine Arrow who master this rote find that they need strike only once in order to fell their enemies. By attuning his perceptions to the perfect instant in time in which to act, the willworker attacks with efficiency.",
        "DescrizioneBreve": "add dice to next roll in turn"
    },
    {
        "Titolo": "Precise Dating",
        "Arcana": "Time •",
        "DescrizioneAlta": "The mage can determine exactly when an object or living being attained its current form. This spell reveals when an object was made, when a raw gemstone was cut or a hunk of ore was mined, when a person or animal was born or when a body or fragment of bone died. Including Life • or Matter • reveals the date of the other major changes the person or object underwent — allowing a mage who finds a human skull to determine when the skull’s owner was born and when he died, or holding a knife, and knowing when it was made and when the ore it was made from was mined. Also, if combined with Forces •, this spell can be used to determine the last time a piece of electrically powered or electronic equipment was used or when a computer file was created or edited.",
        "Practice": "Unveiling",
        "Action": "Instant",
        "Duration": "Instant",
        "Aspect": "Covert",
        "Cost": "None",
        "DescrizioneMiddle": "For objects more than a decade old, a single success on this roll allows the mage to know the date within a month. For more recent objects, one success determines the date within a day. Each additional success narrows the time down further, in the progression listed below. If the object reached its final state very recently, then use the time listed below that as the starting point for the chart. For example, if someone died within the past hour, then one success allows the time of death to be dated to the correct minute, and two successes allow the time of death to be dated to the correct second.[TABLE1]",
        "Tables": [
            {
                "Placeholder": "[TABLE1]",
                "Data": [
                    [
                        "Success",
                        "Old Objects",
                        "Recent Objects"
                    ],
                    [
                        "One",
                        "Month",
                        "Day"
                    ],
                    [
                        "Two",
                        "Day",
                        "Hour"
                    ],
                    [
                        "Three",
                        "Hour",
                        "Minute"
                    ],
                    [
                        "Four",
                        "Minute",
                        "Second"
                    ]
                ]
            }
        ],
        "RoteName": "Mysterium Rote: Temporal Forensics",
        "RoteDice": "<b>Dice Pool:</b> Wits + Science + Time",
        "RoteDescrizione": "For the Mysterium’s archeologists, learning if a shard of ancient pottery dates to the long-lost days of Atlantis, or is merely a 1,300-years-old relic of the Dark Ages is an invaluable method of separating fakes from real artifacts. This spell is also a swift and useful method of determining if a potentially interesting site is worth pursuing or if it is more recent, and therefore less interesting, than it looks.",
        "DescrizioneBreve": "determine when target reached its current form"
    },
    {
        "Titolo": "Temporal Eddies",
        "Arcana": "Time •",
        "DescrizioneAlta": "The mage gains the Mage Sight (see 'Mage Sight,' p. 110). He perceives resonance through the way in which it 'snags' things, people and events moving through the timestream, by the magnitude of its presence (in much the same way as scientists determine the presence of a black hole by witnessing the phenomena around it). He can also tell perfect time, anywhere, discerning the passage of instants with such clarity that his sense is more precise than even those most carefully maintained clock.",
        "Practice": "Unveiling",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Covert",
        "Cost": "None",
        "DescrizioneMiddle": "",
        "RoteName": "Free Council Rote: The Gravity of Instants",
        "RoteDice": "<b>Dice Pool:</b> Wits + Investigation + Time",
        "RoteDescrizione": "Free Council willworkers use this rote to perceive the ways in which Time clings to people, places, and things, and how more or less 'substantial' pockets of Time accrue within the flow of the greater whole.",
        "DescrizioneBreve": "Mage Sight"
    },
    {
        "Titolo": "Temporal Wrinkles",
        "Arcana": "Time •",
        "DescrizioneAlta": "The mage can sense temporal disturbances. She can detect the presence of temporal phenomena, such as the subtle distortions clinging to a person suffering from 'lost time' or those surrounding advanced uses of this Arcanum.",
        "Practice": "Unveiling",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Covert",
        "Cost": "None",
        "DescrizioneMiddle": "During this spell’s Duration, a reflexive Wits + Investigation roll can be made for the mage to detect a temporal disturbance that occurs within his sensory range. She can also examine such phenomena.",
        "RoteName": "Guardians of the Veil Rote: Espying the Graven Hour",
        "RoteDice": "<b>Dice Pool:</b> Wits + Occult + Time",
        "RoteDescrizione": "With this rote, Guardians of the Veil are able to discern Time magics (or similar powers) that have been used to somehow alter the natural flow of past, present, and future. Some describe such phenomena as being 'etched' or 'engraved' on the progression of Time. Mages of the Adamantine Arrow prefer not to be surprised by other uses of the Arcanum (such as 'Prepared Spells,' p. 260), so use this rote as a matter of security.",
        "DescrizioneBreve": "detect presence of temporal disturbances"
    },
    {
        "Titolo": "Tempus Fugit",
        "Arcana": "Time •",
        "DescrizioneAlta": "Time is relative: it crawls when you’re stuck in traffic, it speeds by when you’re visiting a lover. With this spell, the mage can influence a target’s subjective experience of time.",
        "Practice": "Compelling",
        "Action": "Instant; subtract target’s Composure.",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Covert",
        "Cost": "None",
        "DescrizioneMiddle": "For each success, the mage may add or subtract up to five minutes to the target’s internal time clock. The target will feel with absolute certainty that the correct time is that much later or earlier, and act accordingly. So strong is this altered sense of time that the spell’s recipient won’t feel any need to check with a watch or clock for the duration of the spell. When the spell expires, the target’s sense of time resumes its normal accuracy, but he won’t sense that he’s gained or lost time until he sees a clock or some other clue to the real time. (Should the target happen to see the correct time while the spell is in effect, he’s free to act on that knowledge even though it contradicts his instincts.)<p>If the target is a mage with Time 1 or greater, he makes a reflexive Wits + Composure roll to sense that he’s a victim of Time magic.</p>",
        "RoteName": "Guardians of the Veil Rote: Personal Time",
        "RoteDice": "<b>Dice Pool:</b> Intelligence + Subterfuge + Time Composure",
        "RoteDescrizione": "As with many Guardian rotes, strategic application is key to getting the best results from this spell. Knowing the target’s schedule — he needs to be at such-and-such a place at such-andsuch a time — allows the mage to disrupt or manipulate him more effectively (someone taking a leisurely day off may not change his behavior much no matter what time he thinks it is, while someone on his lunch hour may bolt if he thinks his time is up). The rote can still be useful in the absence of such knowledge; causing a subject of surveillance to linger in one place long enough to be carefully observed, for example.",
        "DescrizioneBreve": "alter target's sense of time"
    },
    {
        "Titolo": "Time Limit",
        "Arcana": "Time •",
        "DescrizioneAlta": "The mage relinquishes control over a finishing spell, by accepting a time limit on the item’s operations.",
        "Practice": "Compelling",
        "Action": "Instant",
        "Duration": "Lasting",
        "Aspect": "Covert",
        "Cost": "1 Mana",
        "DescrizioneMiddle": "This spell is cast during item creation. The Storyteller secretly makes the spell roll for the character, noting the interval on the following chart. [TABLE1] At the end of the interval, all of the item’s magical properties — not only the spell to which “Time Limit” originally applied — cease to function for the item’s current owner. After a transfer of ownership, the item again functions for its inherent interval, then shuts down again. Previous owners may never again access the item’s powers. If multiple instances of Time Limit are cast on the same item, the lowest interval applies.",
        "Tables": [
            {
                "Placeholder": "[TABLE1]",
                "Data": [
                    [
                        "Successes",
                        "Interval"
                    ],
                    [
                        "1",
                        "1 day"
                    ],
                    [
                        "2",
                        "1 week"
                    ],
                    [
                        "3",
                        "1 month"
                    ],
                    [
                        "4",
                        "6 months"
                    ],
                    [
                        "5",
                        "1 year"
                    ]
                ]
            }
        ],
        "RoteName": "Mysterium Rote: Acceptable Expiration",
        "RoteDice": "<b>Dice Pool:</b> Intelligence + Crafts + Time",
        "RoteDescrizione": "Though this spell results in eventually unusable items, the peripatetic experimenters of the Mysterium rely heavily on this technique of spell relinquishment when playing around with new concepts. If an item proves unsatisfactory after preliminary testing, no great inconvenience arises from the item’s eventual shutdown. Truly compelling concepts, on the other hand, can later be remade using more costly but reliable relinquishment methods.",
        "DescrizioneBreve": "item crafting, alternate relinquishment cost - each owner only gets a limited time of usability"
    },
    {
        "Titolo": "Time's Mark",
        "Arcana": "Time • + Matter or Life •",
        "DescrizioneAlta": "The mage can tell the age of a living being or an object.",
        "Practice": "Knowing",
        "Action": "Instant",
        "Duration": "Concentration",
        "Aspect": "Covert",
        "Cost": "None",
        "DescrizioneMiddle": "The mage stares intently at the object or target of the spell. She does not need to touch the target. If the spell is successfully cast, the mage knows how much time has passed since the target was born (for a living being, which requires Life 1) or worked into its present form (for an object, which requires Matter 1). Using this spell on unworked natural matter, such as a simple stone, tends to produce a disorienting rush of images as the mage’s mind tries to process the sheer onslaught of years bombarding her brain; as such, Time’s Mark is much more useful on crafted objects such as works of art or weapons. <p>Using this spell on a book or a piece of paper with writing on it doesn’t tell how long ago the words were written (or conceived), only how long ago the book or paper was created. No information about the object or target of this spell is conveyed other than age.</p><p>This spell can be used to discern how much time has elapsed since a ghost or vampire’s death, but requires the mage to have Death 1.</p><p>If the mage has Time 2, she can cast this spell without use of a conjunctional Arcanum.</p><p>If the object or being has been artificially aged or its age has been retarded somehow (for instance, a vampire’s ghoul doesn’t age as long as he continues to drink vampiric blood), this spell detects an anomaly but does not automatically tell the mage how old the being or object is. In this case, the caster can perform an extended scrutiny action, with each roll taking one turn. The number of success required is equal to the target’s Resolve (if a living being) or 5 (if an object). The spell’s Duration is still concentration, so if the caster is interrupted during this extended examination, the spell expires.</p>",
        "RoteName": "Mysterium Rote: Rings of the Oak",
        "RoteDice": "<b>Dice Pool:</b> Intelligence + Investigation + Time",
        "RoteDescrizione": "The mages of the Alae Draconis find that, while it’s possible to discern a relic’s age through scientific or scholarly means, using magic is much more precise.",
        "DescrizioneBreve": "reliably determine object/person's creation/birth date"
    }
]

const timeTwoData = [
    {
        "Titolo": "Augury",
        "Arcana": "Time ••",
        "DescrizioneAlta": "The mage sees the future in terms of generalities.",
        "Practice": "Unveiling",
        "Action": "Instant",
        "Duration": "Concentration",
        "Aspect": "Covert",
        "Cost": "None",
        "DescrizioneMiddle": "The mage must declare a target — a person, place, or thing. (Temporal sympathy modifies the casting roll; see p. 259.) He can then ask a simple question about that target’s future and gain a general answer. Examples of proper questions include: “Will Tony get the job he just interviewed for?” “Will Charlotte marry George?” “Will Angrboda kill again?“ <p>Improper questions get no answers. Examples of improper questions include: “How much money will that lottery ticket win me? (Too specific; try instead: “Is this the winning ticket?”) “Will my son be a good man?” (“Good” is too relative a term — good to whom, exactly?)<p>The Storyteller decides what the future holds for the target, knowing that knowledge of the future is often enough to change that future. A woman who is told she will be a store clerk for the rest of her life might then quit her job to go back to school. Some mages don’t even need to cast this spell to effect change. Their reputations for prophecy can be used to make others think they have read the future by means of magic. In this way, a mage might influence a friend’s behavior in hopes of turning her toward a more productive life by scaring her with predictions of just where her current path will lead.</p> The same person can be targeted with this spell only once every 24 hours. Any attempts to augur him again before 24 hours have passed reveal meaningless echoes of myriad possible actions the target could take, but with no clue as to which might occur, or which is even more probable than the others. If the mage persists, the spell becomes vulgar.</p>",
        "RoteName": "Silver Ladder Rote: Seer’s Song",
        "RoteDice": "<b>Dice Pool:</b> Intelligence + Occult + Time",
        "RoteDescrizione": "Leadership carries many burdens, among them the need to know what may yet come to pass. Mages of the Silver Ladder use this rote in their constant efforts to bring order to chaos and to have some sense of how best to provide wise counsel during uncertain times.",
        "DescrizioneBreve": "see the general nature of the future"
    },
    {
        "Titolo": "Ephemeral Postcognition",
        "Arcana": "Prime • + Time ••",
        "DescrizioneAlta": "For some mages, it is not enough merely to know what a summoned entity is; they must also understand where it came from. This spell enables such willworkers to catch fleeting glimpses of the native realities of the ephemeral beings that they call into the Fallen World by studying the immediate history of the Resonance that such creatures carry with them.",
        "Practice": "Ruling",
        "Action": "Instant and contested; target rolls Resistance reflexively",
        "Duration": "Concentration",
        "Aspect": "Covert",
        "Cost": "None",
        "DescrizioneMiddle": "<p>Success in the casting of this spell grants a willworker insight into the immediate past of an ephemeral entity presently manifested before her or whom she can otherwise perceive. Effectively, the mage begins to “rewind” the recent history of the entity, following it back, one minute per turn of concentration and studying the sensory input of its surroundings during that time. The mage may “pause” on any given minute and analyze it for content of interest. In the case of a being recently summoned from its home realm, this actually allows the caster to look upon that realm in the time leading up to the summoning. </p><p>An entity whose existence is only recently established (such as one temporarily created with the Spirit Arcanum), however, may not have much history to study. Likewise, a being summoned from a place in which time has no meaning may reveal nothing, or it may reveal wildly inconclusive information. </p><p>Following the history of an entity summoned from the Abyss back through the moment of summoning to its place of origin instantly terminates the spell and the mage’s player must successfully roll Resolve + Composure, with a dice-pool penalty equal to the Gulmoth’s Rank, with failure resulting in a mild derangement (or, if the mage already suffers from a mild derangement, a severe one). At the Storyteller’s discretion, a similar effect may befall a willworker using this spell to see back beyond the moment at which an alien entity first arrived in the Fallen World from outside of the Tapestry. Using this spell in an attempt to look past the moment of summoning for a denizen of the Supernal Realms grants a painful and confusing — and utterly unhelpful — glimpse of the higher world before abruptly ending the spell. Attempting to look into the Realms Supernal in this way is an act of hubris for any mage with a Wisdom higher than 3, requiring a degeneration roll on two dice.</p>",
        "RoteName": "Mysterium Rote: Whence It Came",
        "RoteDice": "<b>Dice Pool:</b> Wits + Occult + Time",
        "RoteDescrizione": "Information moves not just forward, but also backward, in time for those with the skill necessary to obtain it. Some mystagogues summon strange spirits from the other worlds, simply to analyze their places of origin by way of this magic, thus advancing the state of Awakened knowledge.",
        "DescrizioneBreve": "see the past of an ephemeral being"
    },
    {
        "Titolo": "Flip of the Coin",
        "Arcana": "Time ••",
        "DescrizioneAlta": "The mage can glance forward and check the outcome of a simple undertaking, one with only two major variables (heads or tails, for example, or cutting the red wire instead of the green one). This sense works only under circumstances where consequences are immediate (someone wins the coin toss or the bomb blows up).",
        "Practice": "Knowing",
        "Action": "Instant",
        "Duration": "Concentration",
        "Aspect": "Covert",
        "Cost": "1 Mana",
        "DescrizioneMiddle": "Even one success accrued in the casting of the spell enables a mage to automatically succeed (or fail if he wishes) at an uncontested action with only two possible outcomes and immediate consequences for success or failure.<p>(In this case 'uncontested' could mean a coin toss or bucking up for evens or odds, despite the fact that there are two participants, since no one can normally exert effort to win.) Note that this effect cannot be used in relation to combat, since a fight is contested (opponents exert effort to win) and the variables are more than simple success or failure (one can win but at the cost of major wounds, or the fight can result in a draw or surrender).</p>",
        "RoteName": "Free Council Rote: Instant Gratification",
        "RoteDice": "<b>Dice Pool:</b> Wits + Investigation + Time",
        "RoteDescrizione": "Mages of the Free Council understand that sometimes what others perceive as luck or a good sense of intuition is nothing more than the product of knowing how it’s all going to turn out.",
        "DescrizioneBreve": "determine outcome of simple act"
    },
    {
        "Titolo": "Glimpsing the Future",
        "Arcana": "Time ••",
        "DescrizioneAlta": "The mage can study the outcome of a current personal action. The willworker can quickly scan the immediate future and determine whether her next action will go well or not, and adjust to improve her chances of success. Effectively, the mage watches herself perform an action in the immediate future in an instant and then decides how it could be done better.",
        "Practice": "Knowing",
        "Action": "Instant",
        "Duration": "Transitory (one turn)",
        "Aspect": "Covert",
        "Cost": "1 Mana",
        "DescrizioneMiddle": "Success allows the player to roll twice for a single instant action his character performs in the following turn, taking the better of the two results.<p>With Time 3, this spell can be cast reflexively, applying to an instant action taken in the same turn in which the magic is cast.</p>",
        "RoteName": "Adamantine Arrow Rote: Failure is Death",
        "RoteDice": "<b>Dice Pool:</b> Wits + Investigation + Time",
        "RoteDescrizione": "The Adamantine Arrow willworker knows that when battle is joined a misplaced blow or inaccurate shot transforms certain victory into disastrous failure. She does not tolerate such weakness in herself. Members of other orders use this rote for different reasons. Mages of the Silver Ladder sometimes discover that a given idea could be better expressed (or at least better accepted) with a slightly different turn of phrase (Resolve + Investigation + Time).",
        "DescrizioneBreve": "roll twice for action, taking the better roll"
    },
    {
        "Titolo": "Library of Time",
        "Arcana": "Time ••",
        "DescrizioneAlta": "While the Guardians are known for their patience and deliberation, they also appreciate the need for speed. At times when they must pore over tomes of lore as quickly as possible, the use of the Time Arcanum allows them to research in minutes what others would take hours to do.",
        "Practice": "Ruling",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Covert",
        "Cost": "None",
        "DescrizioneMiddle": "Each success allows the caster to make one Research roll per 15 minutes for extended action research (see 'Research,' pp. 55–56, the <b>World of Darkness Rulebook</b>), instead of the usual 30 minutes per roll.",
        "RoteName": "Guardians of the Veil Rote: The Right Book",
        "RoteDice": "<b>Dice Pool:</b> Wits + Academics + Time",
        "RoteDescrizione": "An Eleventh Question mage (Guardians of the Veil Rulebook p. 166-168) devised this rote after being forced to go through a suspect’s rare book collection, looking for a specific clue about a breed of octopus used for a sympathetic connection to an acamoth. Because he was unable to find the information in time, the acamoth caused the deaths of three mages before its destruction. The Question vowed he would find a way to search for information more quickly and so developed this rote.",
        "DescrizioneBreve": "half Research roll time"
    },
    {
        "Titolo": "Postcognition",
        "Arcana": "Time ••",
        "DescrizioneAlta": "The mage can experience postcognition. She can review the past of her current location or any moment in her own past, or that of an object, with flawless clarity. To focus this sense on something or someplace other than the mage’s current physical location, the mage must also use Space 2. Without the use of Space 2, she can do this only for an exact spot in which she was or is. She can look only at what was going on while she was physically present in such a location. Generally speaking, the past is much easier to read than the future (since the past’s variables are already locked into place), giving a more-or-less objective view of how things unfolded at a given time, in a given place.",
        "Practice": "Unveiling",
        "Action": "Instant",
        "Duration": "Concentration",
        "Aspect": "Covert",
        "Cost": "None",
        "DescrizioneMiddle": "The mage declares the time and place that she wishes to view, and casting dice pool is modified by temporal sympathy (see p. 259). Each success allows the mage to view up to one turn of time in that place, beginning at the moment declared during casting (such as 'Midnight on New Years Day, 1999, at Times Square'). She views events in real time (it takes one turn of current time to review one turn of past time) as if through a camera placed amidst the scene, but she can fast forward and replay any part within the viewing period. With Time 3, the mage can view one minute of time per success, and 10 minutes per success with Time 4.<p>The Duration of this spell is concentration; as soon as the mage ceases to concentrate on viewing the past, the spell expires.</p>",
        "RoteName": "Mysterium Rote: Gazing Through the Sands",
        "RoteDice": "<b>Dice Pool:</b> Intelligence + Investigation + Time",
        "RoteDescrizione": "With this rote, a mage of the Mysterium can bear witness to events that have already transpired, a useful capability for those who seek to uncover the lost secrets of the past. Guardians of the Veil use this rote for similar purposes, though they usually apply whatever knowledge they glean to protecting the occult world from the scrutiny of the unenlightened.",
        "DescrizioneBreve": "view past events"
    },
    {
        "Titolo": "Shield of Chronos",
        "Arcana": "Time ••",
        "DescrizioneAlta": "The mage protects himself against Time senses, warding against sensory uses of the Time Arcanum and making it harder for others to scry upon his past or future (or, for those who look from the past or the future, his present).",
        "Practice": "Veiling",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Covert",
        "Cost": "1 Mana (optional)",
        "DescrizioneMiddle": "The mage becomes invisible to prophecy, divination and other forms of temporal scrying unless the caster overcomes the Potency of the occluded mage’s spell.<p>By spending one Mana, the Duration can be made to last for one day.</p>",
        "RoteName": "Guardians of the Veil Rote: Breaking the Trail of Days",
        "RoteDice": "<b>Dice Pool:</b> Composure + Stealth + Time",
        "RoteDescrizione": "For many Guardians of the Veil, the first, best secrets to keep are one’s own. With this rote, the mage becomes invisible to all save the most persistent and invasive searches of the Time Arcanum. Willworkers of the Silver Ladder use such magic (Presence + Stealth + Time) to occlude any unsavory activities upon the long road to rule, while those of the Adamantine Arrow employ this spell as yet another means to approach their enemies unseen.",
        "DescrizioneBreve": "prevent others from viewing through Time"
    },
    {
        "Titolo": "Temporal Dodge",
        "Arcana": "Time ••",
        "DescrizioneAlta": "The mage protects herself from harm. She creates a small bubble of 'warped' time, either speeding herself up or slowing things down as they approach her. She performs small manipulations to her immediate temporal surroundings, protecting herself from harm by delicately twisting the fabric of time. She could, for example, decelerate incoming gunfire (by expanding the fourth-dimensional axis of its movement) or slightly speed up her own motions so as to allow her to roll better with punches and other attacks.",
        "Practice": "Shielding",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Covert",
        "Cost": "1 Mana (optional)",
        "DescrizioneMiddle": "The mage gains one point of armor per dot she possesses in the Time Arcanum. By spending one Mana, the Duration can be made to last for one day. Most mages cast such a shielding spell at the beginning of the day, as part of their morning rituals. Successes are used to combat attempts to dispel the shield.<p>Note that this magical armor applies against attempts to grapple the caster (both his Defense and Temporal Dodge armor are subtracted from the grappler’s dice pool when he attempts to achieve a hold on the mage), but it does not protect against attempts by an opponent to overpower and/or inflict damage once he has managed to grapple the mage.</p>",
        "RoteName": "Adamantine Arrow Rote: Dancing upon the River",
        "RoteDice": "<b>Dice Pool:</b> Dexterity + Athletics + Time",
        "RoteDescrizione": "The River of Time is a dangerous place. One who knows how to dance upon its surface understands that danger, like all other things, is fleeting and can be circumvented by those with understanding of Time’s intricacies.",
        "DescrizioneBreve": "Shielding"
    },
    {
        "Titolo": "Temporal Flow",
        "Arcana": "Time ••",
        "DescrizioneAlta": "As the Time 1 'Temporal Eddies' spell, except that the mage casts this upon another mage, or even a supernatural being such as a ghost or werewolf. If this spell is cast upon a sleeper, it invokes Disbelief immediately, regardless of the spell’s Duration.",
        "Practice": "Unveiling",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Covert",
        "Cost": "None",
        "DescrizioneMiddle": "If the target is unwilling, he may resist with a reflexive and contested Resolve + Gnosis roll.<p>The effect lasts for one hour.</p>",
        "RoteName": "Silver Ladder Rote: A Glance Through the Hourglass",
        "RoteDice": "<b>Dice Pool:</b> Presence + Persuasion + Time",
        "RoteDescrizione": "Sometimes it just isn’t enough to explain a thing to another. On occasion, one must show. This rote enables a willworker to extend his temporal perceptions to someone else so that she might perceive resonance as he does.",
        "DescrizioneBreve": "grant Mage Sight"
    },
    {
        "Titolo": "Worst Moment",
        "Arcana": "Time ••",
        "DescrizioneAlta": "The Banisher learns the best possible time to strike her opponents, taking advantage of terrain, injury or any other conditions that might help.",
        "Practice": "Knowing",
        "Action": "Instant",
        "Duration": "Concentration",
        "Aspect": "Covert",
        "Cost": "None",
        "DescrizioneMiddle": "The mage can either use this spell while physically at the location where she expects to attack her foes or combine it with Space 2 to determine both when and where to strike. In either case, temporal sympathy applies, and if the subject of the spell is under the effect of the 'Shield of Chronos' spell, the Banisher must exceed the Potency of that spell for this one to function.<p>If the spell succeeds, the Banisher knows when to attack the target to gain the greatest tactical advantage. What 'greatest tactical advantage' means in game terms is somewhat fluid; the spell might indicate that attacking the target at dawn, while he is just waking, would be the best use, and in that case, the character might be disoriented and without his armor spells. The spell might induce the Banisher to attack the target after a protracted battle, when his Mana and Willpower reserves are depleted. The advantages can be story-based rather than mechanical, but if the Storyteller would like something more objective, he can allow the Banisher to apply twice the successes rolled for the spell in penalties over the course of the scene.</p>",
        "RoteName": "Banisher Rote: Never Let Up",
        "RoteDice": "<b>Dice Pool:</b> Wits + Investigation + Time",
        "RoteDescrizione": "The creator of this rote is long dead, shot multiple times by the Sleeper widow of one of the mages he killed. The creator was a ruthless Banisher, pursuing identified mages until they couldn’t run anymore and then looking ahead to determine where they would go to sleep. He taught this rote to at least one of his protégés, however, and so it slowly spreads to other Banishers.",
        "DescrizioneBreve": "predict the best time to attack target, inflict environmental penalties"
    }
]

const timeThreeData = [
    {
        "Titolo": "Acceleration",
        "Arcana": "Time •••",
        "DescrizioneAlta": "The mage accelerates his personal temporal motion, enabling her to move and act quicker than is normally possible.",
        "Practice": "Perfecting",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Vulgar",
        "Cost": "None during casting, 1 Mana per turn after casting",
        "DescrizioneMiddle": "This spell boosts the mage’s ability to avoid attacks, her Initiative, and Speed. Although the spell’s Duration lasts for one hour, the mage gains its benefits only in those turns in which she spends one Mana reflexively, and the benefits last for that turn. <p>The benefits are as follows:</p><ul><li> For each Time dot the mage possesses, one die is subtracted from any and all attackers’ dice pools (including ranged attacks), as the mage moves much more quickly than normal and is harder to hit.</li><li> Adds one to the mage’s Initiative per dot of Time.</li><li> Each dot of Time allows the caster’s Speed to be added again to his total Speed rating.</li></ul>With Time 4, the mage can cast this spell on others.",
        "RoteName": "Adamantine Arrow Rote: Swift as Death",
        "RoteDice": "<b>Dice Pool:</b> Stamina + Athletics + Time",
        "RoteDescrizione": "Mages of the Adamantine Arrow must be ready for battle at all times. As history has proven, speed is one the most crucial advantages in combat. With this rote, the willworker can close on an enemy with preternatural speed and avoid attacks with ease. Naturally, this utilitarian rote sees use by members of every order.",
        "DescrizioneBreve": "1 mana/turn to increase speed, defense by time dots against"
    },
    {
        "Titolo": "Borrow From the Future",
        "Arcana": "Time •••",
        "DescrizioneAlta": "The mage ensorcels an item so that users can borrow successes from their future destinies and apply them to their present circumstances.",
        "Practice": "Weaving",
        "Action": "Extended",
        "Duration": "Prolonged (this spell uses the advanced prolongation factors)",
        "Aspect": "Covert",
        "Cost": "1 Mana",
        "DescrizioneMiddle": "For every five successes added to the target number, the user of the item can borrow one success per roll on any action to which the item contributes an equipment bonus. The Storyteller takes note of the situation, type of action, and number of successes borrowed. In a subsequent scene, when the user undertakes a similar action, the same number of successes is subtracted as dice from that roll, even if this means reducing the dice pool to a chance die. This occurs whether or not the user employs the item in that attempt. The Storyteller times this settling of temporal accounts so that the failure carries negative consequences roughly equal to what the character would have suffered in the original incident.<p><b>Example:</b> <i>A user borrows successes from his magic gun during a firefight with members of a drug gang. He can’t erase his debt with a mere trip to the range to pop off a few failed shots. It will instead catch up with him the next time he finds himself in life-or-death combat.</i></p>",
        "RoteName": "Adamantine Arrow Rote: Temporal Marker",
        "RoteDice": "<b>Dice Pool:</b> Wits + Occult + Time",
        "RoteDescrizione": "The use of items enchanted with this spell reminds one of a popular Adamantine Arrow adage: “Kill your enemies today; let tomorrow fend for itself.” This motto is sometimes engraved on the items themselves.",
        "DescrizioneBreve": "item crafting, trade future penalties for successes"
    },
    {
        "Titolo": "Divination",
        "Arcana": "Time •••",
        "DescrizioneAlta": "The mage can read the future. As per the Time 2 “Augury” spell, p. 258, save that the mage receives more specific details.",
        "Practice": "Unveiling",
        "Action": "Instant",
        "Duration": "Concentration",
        "Aspect": "Covert",
        "Cost": "1 Mana",
        "DescrizioneMiddle": "As with the Augury spell, the mage must declare a target. (Temporal sympathy modifies the casting roll; see p. 259.) One success allows the mage to ask one question about the target’s future and get an answer. Additional successes allow follow-up questions, allowing the mage to get more specific details.<p><i>Example: Arethusa gets three successes on her Divination roll, so she can ask one lead question and two follow-up questions. She’s trying to find out if a rival mage named Garrik is planning on attacking her. Her first question is: “Will Garrick attack us tonight?” She gets a vision of Garrick standing in her foyer, readying a spell. Her first follow-up question is “When will Garrick attack?” The image changes “camera” angles, and she can see the large grandfather clock in the foyer past Garrick, showing 10 minutes until midnight. Her final follow-up question is “Is he working alone?” She sees a new image, this one showing her a number of stealthy, black-clad figures sneaking through the bushes outside her home.</i></p>The same person can be targeted with this spell only once every 24 hours. Any attempts to divine him again before 24 hours have passed reveal only meaningless echoes of myriad possible actions the target could take, but with no clue as to which he might take, or which are even more probable than others. If the mage persists, the spell becomes vulgar.",
        "RoteName": "Guardians of the Veil Rote: Speaking the Name of Tomorrow",
        "RoteDice": "<b>Dice Pool:</b> Intelligence + Investigation + Time",
        "RoteDescrizione": "Time presents innumerable variables and one who would guard the Mysteries must be apprised of them in order to perform his duty. Guardians of the Veil cast this magic when vague predictions simply will not do. Mages of the Silver Ladder are often known to use such magic when attempting to discern the designs of their rivals.",
        "DescrizioneBreve": "gain information about possible future events by asking questions"
    },
    {
        "Titolo": "Falsify Temporal Presence",
        "Arcana": "Time •••",
        "DescrizioneAlta": "Among the more treasured of the arts available to those who pursue understanding of the Time Arcanum is the ability to read the past or the future, learning what has already come to pass or what may yet be. Some mages learn to occlude their own pasts and futures from others’ scrutiny (see <b>Mage: The Awakening</b>, p. 261: “Shield of Chronos”), but simple concealment isn’t always sufficient; sometimes, deception is called for. Under these sorts of circumstances, mages skilled in Time’s magic can fabricate events in history or yet to come, deliberately leading enemies astray.",
        "Practice": "Weaving",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Covert",
        "Cost": "None",
        "DescrizioneMiddle": "For this spell’s Duration, the caster’s history and future reflect whatever she wishes when glimpsed by anyone using prophecy, divination or any other form of temporal Scrying to read either, unless the caster overcomes the Potency of this spell.",
        "RoteName": "Seers of the Throne Rote: Lie to Yesterday and Tomorrow",
        "RoteDice": "<b>Dice Pool:</b> Wits + Investigation + Time",
        "RoteDescrizione": "Few things are as precious as one’s history and future, particularly to Seers of the Throne who have pursued the mysteries of the Time Arcanum. With magic such as this, however, an enterprising servant of the Throne can skew an enemy’s temporal perceptions when he turns them on her, allowing her to reflect whatever past or future she wishes.",
        "DescrizioneBreve": "for Duration of spell, caster's history and future are shown as defined"
    },
    {
        "Titolo": "Metabolic Suspension",
        "Arcana": "Life •••, Time •••; or Life ••••; or Time ••••",
        "DescrizioneAlta": "Where lesser mages enhance and reinforce their metabolisms with superhuman efficiency, mages with appropriate command of Life and/or Time may transcend such frailties outright.",
        "Practice": "Perfecting",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Vulgar",
        "Cost": "1 Mana",
        "DescrizioneMiddle": "A successful casting of this spell confers the following benefits: the mage does not require any sustenance, does not need to breathe and most of her internal organs cease functioning in any measurable capacity, providing complete immunity to non-magical diseases and toxins. This spell cannot suspend the aging process, as the inevitability of entropy carries more metaphysical weight than the mundane urgency of bodily functions. Although mundane medical examinations invariably diagnose a mage with this attainment as dead (and offer no rational explanation for how she can continue to function), magic still detects her Pattern as living unless she has somehow modified it with other magic.<p>Mages with one more dot in the spell’s required Arcana than listed above can cast a variant of this spell to suspend another’s body with an enchanted touch.</p>",
        "RoteName": "Mysterium Rote: Life Between Heartbeats",
        "RoteDice": "<b>Dice Pool:</b> Stamina + Survival + Life/Time",
        "RoteDescrizione": "Mysterium researchers cannot be troubled to take precious time away from their studies for anything so trivial as food or an insistent bladder. More intrepid members of the order use this rote to fortify themselves for hazardous expeditions without worrying about malaria, packing provisions or a pounding heartbeat betraying their location to a guardian monster’s keen sense of hearing.",
        "DescrizioneBreve": "make self immune to toxins/disease"
    },
    {
        "Titolo": "Prophetic Dream",
        "Arcana": "Mind ••• + Time •••",
        "DescrizioneAlta": "This spell causes a chosen subject, even a Sleeper, to experience a precognitive dream.",
        "Practice": "Weaving",
        "Action": "Instant and contested; target rolls Resolve + Gnosis reflexively",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Covert",
        "Cost": "None",
        "DescrizioneMiddle": "The subject simply knows that she is experiencing (and has experienced) a dream about the future, though she might choose to disregard this awareness if she is morally or intellectually opposed to the idea of divinations, psychic phenomena or magic. (This spell does not, however, invoke Disbelief under any circumstances.) <p>Note that the mage does not have any control over what the subject perceives in such a dream, and he doesn’t possess any special insight into it, beyond that which might be gleaned through other uses of his Arcana. Subjects of this spell tend to experience visions based upon their own circumstances and experiences, though especially significant impending phenomena might take a subject outside of the cares and experiences of her own life.</p><p>The effects are similar to those of Time 3 “Divination,” centered on the dreamer herself.</p>",
        "RoteName": "Silver Ladder Rote: Naming the Prophet",
        "RoteDice": "<b>Dice Pool:</b> Presence + Empathy + Time",
        "RoteDescrizione": "With this rote, a Ladder willworker can bestow the gift (or curse) of prophecy upon another, willing or otherwise.",
        "DescrizioneBreve": "grant another a prophetic dream, typically centered around the target"
    },
    {
        "Titolo": "Rapid Fire",
        "Arcana": "Time ••• + Forces •• + Life •• + Matter ••",
        "DescrizioneAlta": "Put simply, the ability to empty more lead into an enemy is almost always preferable to less. But not everyone has access to automatic weaponry or, for that matter, the training or even the desire to make use of such instruments. This is a spell for those who wish to employ the axiom that “too much is never enough,” without having to tote submachine guns everywhere they go.",
        "Practice": "Weaving",
        "Action": "Instant",
        "Duration": "Transitory",
        "Aspect": "Vulgar",
        "Cost": "1 Mana per attack",
        "DescrizioneMiddle": "Upon successfully casting this spell, the mage may make use of the various autofire options (see the <b>World of Darkness Rulebook</b>, pp. 160–161), with any sort of ranged weapon (not a ranged spell, but only a ranged weapon — even an enchanted one); even those that do not normally allow for such. In fact, the mage can, if he so wishes, use autofire with weapons that aren’t even firearms (and using another Skill, such as Athletics, if appropriate), such as bows or throwing hatchets. The mage’s hands move in a blur almost too swift to follow, and the projectiles fly faster than wind resistance and the constraints of physics should allow. Note that the mage must release three projectiles (from a single weapon, in the case of guns, bows, slings and the like) to use the first stage of autofire, 10 for the second stage and 20 for the third (meaning that the constraint of how many projectiles he has on hand may limit his options). Also note that a character with the Gunslinger Merit may use autofire with both of his pistols while under the effects of this spell if he so wishes, provided that he has the Mana to spend on both attacks.",
        "RoteName": "Adamantine Arrow Rote: Pissing Metal",
        "RoteDice": "<b>Dice Pool:</b> Dexterity + Athletics + Time",
        "RoteDescrizione": "No one is really sure where this rote came from, or who it was that first conceived of it. Some Arrows who are tight with certain mystagogues claim that sparse records exist of an Atlantean diaspora-era archer named Sharmach-il having bent the tides of time to cast dozens of arrows at his enemies in the blink of an eye. Others say that the rote has its origins in a 19th-century Arrow by the shadow name of Six-Gun Kate. Still others maintain that it was a veteran of the Second World War, simply called Sarge, who invented the rote. In the end, though, while they might dispute the circumstances of its genesis, few argue with the magic’s effectiveness.",
        "DescrizioneBreve": "use Autofire with any ranged weapon"
    },
    {
        "Titolo": "Review History",
        "Arcana": "Time •••, Mind •• and Death • or Matter •",
        "DescrizioneAlta": "During the course of a few minutes, the mage can review the entirety of a person’s life by touching the person’s corpse, or even holding one of her bones. Similarly, the mage can learn the entire history of an object by touching the object or a fragment of it. Using this spell on a corpse or fragment of bone requires Death •; using this spell on an object requires Matter •.",
        "Practice": "Unveiling",
        "Action": "Instant",
        "Duration": "Instant",
        "Aspect": "Covert",
        "Cost": "None",
        "DescrizioneMiddle": "Even a single success allows the mage to gain a general understanding of the events of a person’s life or the history of an object. Additional successes provide further details and a more complete knowledge of events. A single success provides as much information about the person or object as might be contained in a two or three paragraph, written summary. Two successes reveal an amount of information that might be written on a single page, and five successes provide approximately the same information as a 15 or 20-page monograph about the history of the person or object. Even if five successes are rolled, this spell does not provide all of the minute details of a person’s life and is definitely not a substitute for the far more detailed information gained through the Time 2 spell “Postcognition.” However, this spell can provide a breadth of information and a general outline of the history of the subject that require only a few minutes for the mage to absorb.",
        "RoteName": "Mysterium Rote: Reading the Book of Time",
        "RoteDice": "<b>Dice Pool:</b> Intelligence + Investigation + Time",
        "RoteDescrizione": "The histories written by Sleepers rarely include much information about magic and the lives of mages. This spell allows Mysterium historians and researchers to obtain general information about people or artifacts. This spell has allowed the historian of the Mysterium to understand the general outline of the history of magic and magical events. Also, this spell provides sufficient information to allow other researchers to target more precise spells (such as “Postcognition”) to learn the details of events that this spell provides basic information about.",
        "DescrizioneBreve": "view entirety of dead/broken pieces lifetime"
    },
    {
        "Titolo": "Shifting Sands",
        "Arcana": "Time •••",
        "DescrizioneAlta": "The mage rewinds time. He grabs hold of the threads of time and pulls himself back one turn, allowing him to choose a different approach to a situation (though, from the perspective of all save the willworker himself, this is the first and only time this moment has occurred or will occur).",
        "Practice": "Weaving",
        "Action": "Instant",
        "Duration": "Special",
        "Aspect": "Vulgar",
        "Cost": "1 Mana",
        "DescrizioneMiddle": "This spell can be cast anytime in the Initiative roster from when the caster performed his action until his place in the roster in the next turn. If the player does not declare this casting before then, the previous turn cannot be replayed. If the casting roll fails, the mage does not rewind time (he essentially spends that turn casting and nothing else). If it succeeds, he rewinds himself through time and can then replay his action from the last turn, changing it however he wants (he might decide not to open the door that released a spirit guardian, for example). Doing so, of course, might change other characters’ actions that occurred after his action in the turn he replays and before he casts this spell.<p><i>Example: Zeno steps into an alley and is confronted by a gang of submachine-guntoting thugs. They smile at him and heft their guns, ready to fire, but delay for a moment to savor Zeno’s obvious dismay. Smirking at Zeno is their action for the turn. The next turn now plays out. Zeno has a higher Initiative than all the thugs but one. That thug fires a short burst of autofire, missing. On his turn in the Initiative roster, Zeno casts Shifting Sands, rewinding himself through time by one turn. In the original turn, he entered the alley. This time, during his replay, he decides to turn the other way and run, never even showing his face around the corner. From that point on, all other characters redo their actions as if the original turn never happened. Since Zeno doesn’t enter the alley, the thug doesn’t fire his gun (as he did in the original flow of time). He still awaits Zeno’s appearance as his cue. </i></p>This spell cannot undo any effects the mage suffered the first time he experienced the turn that he replays. If he got shot in that turn, and then casts this spell to replay that action, he still suffers from the gunshot wound, even though he might decide to dodge in his replay of the turn, causing the bullet to miss him. (And if it does hit him, he suffers a second wound!). This spell does not erase the effects of time on the mage. It merely allows him to step back in the river of time by one turn and replay its flow. Although he cannot reverse any harm he himself has suffered, it can be instrumental in allowing the mage to save the lives of others. <p>Those other than the caster may feel a sense of déjà vu about the situation, but for them the caster’s new action is the first and only time this turn has happened or will happen. Participants remember the turn only as it has just been played, not as it was previously played before Shifting Sands altered it. (Unless one of them uses the “Temporal Wrinkles” spell, p. 258, in which case he is aware of what happened.) </p>With Time 4, the mage can cast this spell upon others, allowing them to alter their actions when replaying the turn. ",
        "RoteName": "Silver Ladder Rote: Turn Back the Page",
        "RoteDice": "<b>Dice Pool:</b> Resolve + Occult + Time",
        "RoteDescrizione": "A leader must sometimes acknowledge that things have not gone as planned. For mages of the Silver Ladder, the ability to admit the possibility of failure is not nearly so laudable as the power to erase such mistakes and see things done correctly. Mages of all orders manage to find uses for this rote.",
        "DescrizioneBreve": "rewind events by one turn"
    },
    {
        "Titolo": "Strike in the Perfect Moment",
        "Arcana": "Time •••",
        "DescrizioneAlta": "This spell gives the mage a supernatural sense of fighting rhythm. She can sense moments when her opponent isn’t prepared to defend against an attack.",
        "Practice": "Perfecting",
        "Action": "Instant",
        "Duration": "Prolonged (1 scene)",
        "Aspect": "Covert",
        "Cost": "None during casting; 1 Mana per use after casting.",
        "DescrizioneMiddle": "If she spends a point of Mana while attacking with a weapon or unarmed strike during the duration of the spell, reduce her opponent’s Defense by her Time dots. This benefit does not affect the benefits of armor or Shielding Practice spells except for Time-based protection. It does reduce the defensive benefits of supernatural powers that provide increased speed or raw agility, but not those that protect the user by virtue of increased toughness, mental misdirection or any other means. This spell doesn’t benefit ranged attacks.",
        "RoteName": "Adamantine Arrows Rote: Shikake",
        "RoteDice": "<b>Dice Pool:</b> Composure + Weaponry + Time",
        "RoteDescrizione": "An Arrow who uses this rote learns how to strike when opponents are unprepared to respond. Every fight has a rhythm; the warrior breaks it, attacking in the moments between an enemy’s movements.",
        "DescrizioneBreve": "able to spend 1 mana per strike that reduces opponent's Defense by Time dots"
    },
    {
        "Titolo": "Summon Supernal Being",
        "Arcana": "Any Arcanum •••",
        "Practice": "Weaving",
        "Action": "Extended",
        "Duration": "Special",
        "Aspect": "Covert",
        "Cost": "10 Mana",
        "DescrizioneMiddle": "The mage must fashion a summoning circle, usually sing runes and High Speech glyphs appropriate not only to the Arcanum he is using, but to the intended purpose of the summoning. The process and form of the ritual is different for each realm, and is discussed in detail under the appropriate realm sections. <p>Before beginning the ritual, the player must decide upon how many successes the mage will attempt to accrue. The formula is as follows: </p>The mage needs 10 successes to open the gateway. Every additional success has one of the following effects: <ul><li>Extend the duration in which the being can remain in the Fallen World without suffering damage. Each success adds 30 minutes. If the mage allocates no successes to this duration, the being begins taking damage immediately.</li><li>Protect the gateway from Abyssal intrusion. Every success thus allocated allows the player to make one additional roll without the Storyteller checking for the Abyss creeping into the gateway. </li></ul>In addition, the following factors add to the necessary total: </ul><li>Add one success per Sleeper present. In addition, a Sleeper’s presence renders the spell improbable. </li><li>Add one success per mage of a different Path present. </li><li>Add one success if the summoning is taking place in a Demesne oriented to a realm other than the one in question. </li><li>Add one success if the mage has caused a Paradox (even if he contained it) within the last week.</li><li>Add one success if the mage is AbyssMarked (see p. 71). </li><li>Subtract one success from the target if the summoning is taking place in a Demesne oriented to the realm in question. </li><li>Subtract successes if the character incorporates items and conditions into the summoning that correspond to the realm in question. The sections on the different realms later in this chapter list sample correspondences, but the character must still weave these correspondences into the spell gracefully enough to ease the casting. The Storyteller can either adjudicate the number of successes shaved off the total based on the player’s descriptions of his character’s actions, or the player can roll Intelligence + Occult. Every two successes on this roll removes one success from the target number of the summoning spell. </li></ul> <p>Once the player has determined the target number of successes and how they will be allocated, he can start rolling. The amount of time required for each roll is, of course, determined by the mage’s Gnosis rating (see p. 76 of <b>Mage: The Awakening</b>). The player is not limited in the number of rolls he can make, but fatigue will eventually begin to set in. A greater danger, though, is Abyssal intrusion. </p>The player can make a number of rolls equal to the character’s Resolve + Composure + any successes allocated to avoid Abyssal intrusion. After that point, the Storyteller rolls the character’s unmodified Gnosis for every roll that the character makes. If the Storyteller accrues a number of successes equal to the mage’s Gnosis + [ruling Arcanum used to cast the spell], the Abyss breaks into the gateway, and the creature that arrives is not a Supernal being but an Abyssal one. The Storyteller should by no means reveal how many successes she gets on the intrusion rolls. The Abyssal being that arrives might impersonate a Supernal one, at least for a while. More information on Abyssal summoning and the creatures resulting from them can be found in Chapter Three. <p><b>Example:</b> Whim, an Acanthus of the Mysterium, decides to call down a recondite being from Arcadia as part of her ongoing quest to unravel the nature of the Fallen World. She is a Master of Fate, so she is more than qualified to cast the spell. Her Gnosis is 3, so every roll requires one hour. She requires 14 successes to start — 10 (base) + 3 (three of her cabal mates are present) + 1 (she caused a Paradox within the last week). Her player decides to add in three more successes. Two are allocated two duration (if she is successful, the being will be able to survive in the Fallen World for an hour without taking damage) and one is allocated to stave off Abyssal intrusion. Her Resolve + Composure is 5, so with the success she has allocated, her player can make six rolls before Abyssal intrusion becomes a problem. </p><p>If she fails to accumulate 17 successes in six rolls (which is a distinct possibility), the Storyteller rolls Whim’s Gnosis rating for every roll beginning with the seventh. If the Storyteller accumulates eight successes (Whim’s Gnosis + Fate) before her player finishes accumulating the 17 needed for the spell, an Abyssal entity intrudes. </p><p><b>Concluding the spell:</b> Once the Supernal being has returned “home,” the mage needs to channel the magic he used to work the summoning into something else. Leaving the spell “open” is dangerous, because if he does so, sooner or later the Abyss will seep in. The spell can be closed easily enough — the mage simply needs to choose what spell to cast. The player makes the appropriate roll, the spell occurs, and the gateway closes. </p><p>If the spell rolls fails, though, or if the Supernal being dies from exposure to the Fallen World or is deliberately destroyed outside the summoning circle, the gateway collapses. This creates a temporary portal to the Abyss. Every mage within 50’ of this portal suffers a number of Health points of aggravated damage equal to the summoner’s Gnosis. In addition, the portal remains open for a number of days equal to the summoner’s Gnosis. During that time, the mage needs to watch the portal carefully, because Abyssal creatures can and do escape into the Fallen World. </p>",
        "DescrizioneBreve": "(Acanthus only) call an Anachronism from Arcadia, with difficulty"
    },
    {
        "Titolo": "Temporal Shift",
        "Arcana": "Time •••",
        "DescrizioneAlta": "The mage protects others. This works like the Time 2 “Temporal Dodge” spell, p. 261, except that the mage can now cast it upon others.",
        "Practice": "Shielding",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Covert",
        "Cost": "1 Mana (optional)",
        "DescrizioneMiddle": "The target gains one point of armor per dot the caster possesses in the Time Arcanum. The effect lasts for one hour, but the Duration can be made to last for a day by spending one Mana.",
        "RoteName": "Adamantine Arrow Rote: Bending the River’s Flow",
        "RoteDice": "<b>Dice Pool:</b> Manipulation + Investigation + Time",
        "RoteDescrizione": "Often cast in preparation for battle, this rote enables a mage to defend a charge, dispersing the force of incoming attacks along the unseen axes of Time.",
        "DescrizioneBreve": "grant Shielding"
    },
    {
        "Titolo": "Time Out of Mind",
        "Arcana": "Time ••• + Mind ••",
        "DescrizioneAlta": "The mage can enter a “timeless” state of mind wherein lengthy contemplation is possible in virtually no time at all.",
        "Practice": "Weaving",
        "Action": "Extended",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Covert",
        "Cost": "None",
        "DescrizioneMiddle": "This spell is similar to Temporal Pocket (see <b>Mage: The Awakening</b>, p. 265) except the spell only affects the mage’s mental state: the mage is able to think for an extended period of time “in between” moments. Successes are assigned to the spell’s Duration, affecting the subjective time the mage has in which to think. So, at a basic level, the mage can consider for up to an hour while no time at all appears to pass for everyone else. Additional successes increase this time as usual for a prolonged spell. The caster under this spell is “inside” his or her own mind and has no resources other than what the mage can think or imagine. Still, the mage may be able to undertake and complete extended mental actions, appearing to accomplish them in just a moment’s time. This does not include extended spellcasting, as that is not a purely mental action.",
        "RoteName": "Free Council Rote: Seven Thoughts in a Moment",
        "RoteDice": "<b>Dice Pool:</b> Intelligence + Science + Time",
        "RoteDescrizione": "When a mage needs a “moment to consider,” this techné is just the thing, since it usually grants more than enough time to puzzle out a particular situation, giving Free Councilors a reputation for the ability to think of their feet.",
        "DescrizioneBreve": "accelerate mental state"
    }
]

const timeFourData = [
    {
        "Titolo": "Chronos' Curse",
        "Arcana": "Time ••••",
        "DescrizioneAlta": "Through the use of this spell, a mage can cause an individual to “lag” within the flow of time. As she sees it, everything around her occurs at an accelerated rate and she struggles to keep up.",
        "Practice": "Patterning",
        "Action": "Instant; subtract target’s Composure",
        "Duration": "Transitory (one turn)",
        "Aspect": "Vulgar",
        "Cost": "1 Mana",
        "DescrizioneMiddle": "The target suffers a –1 penalty to Defense per success on the casting roll. Additionally, the subject’s Speed is halved per success (rounding up), to a minimum of 1. When the victim of this spell attacks others with a ranged attack, her targets gain their Defense (even if the attack is not at point-blank range). The attacker moves slowly enough that others can anticipate her attack.",
        "RoteName": "Silver Ladder Rote: Crushed Beneath the Sands",
        "RoteDice": "<b>Dice Pool:</b> Manipulation + Occult + Time – Composure",
        "RoteDescrizione": "When afflicted by this magic, enemies of the sanctum or cabal usually prove easy prey. Mages of the Mysterium sometimes use a variant of this rote (Wits + Occult + Time) while making an escape with lore or relics “appropriated” from jealous owners.",
        "DescrizioneBreve": "slow target and reduce Defense"
    },
    {
        "Titolo": "Create Potentiality",
        "Arcana": "Time ••••",
        "DescrizioneAlta": "Possibility is an amazing thing; nearly anything — no matter how unlikely — can, potentially, happen. Mages with considerable skill in the nuances of the Time Arcanum can latch onto those improbable future events, guiding the present moment toward them.",
        "Practice": "Patterning",
        "Action": "Reflexive",
        "Duration": "Transitory (one turn)",
        "Aspect": "Vulgar",
        "Cost": "One point of Mana",
        "DescrizioneMiddle": "Immediately after failing to perform a non-magical action, the willworker may reflexively cast this spell. Successes accrued in the casting effectively add to the failed action’s dice pool, retroactively. These dice are rolled, as normal, during the mage’s current place in the initiative roster, and any successes scored on them count as normal. Qualities such as 8-again apply to the bonus dice created by this spell, though not for actions initially rolled on a chance die. This spell’s Duration may not be increased. Further, its effects may not be coupled with the Fate 4 spell, “Probable Cause” (<b>Mage: The Awakening</b>, p. 157); the willworker must choose one spell or the other to take precedence. This spell may only be cast once in a given turn.",
        "RoteName": "Free Council Rote: Short-Term Gain",
        "RoteDice": "<b>Dice Pool:</b> Intelligence + Science + Time",
        "RoteDescrizione": "Around the time of the Great Refusal, Libertines were beset on all sides by the depredations of the Seers of the Throne whose offer they had spurned. The forces of the Exarchs were seemingly everywhere and many members of the newly convened Free Council were run to ground in those desperate days, unable to stand against the considerable might of the Exarchs’ slaves. A charming Libertine Enchanter known simply as “the Gentleman” concocted this spell in the darkest hours of that conflict, granting outmanned and outgunned willworkers that last, desperate chance that often spelled the difference between life and death. While the Gentleman was murdered in a Parisian back alley on the five-year anniversary of the Great Refusal by vindictive Seers of the Throne, his spell became part of the Free Council’s repertoire, and eventually spread to the other Pentacle Orders and beyond.",
        "DescrizioneBreve": "retroactively add successes on casting to failed non-magical roll"
    },
    {
        "Titolo": "Erase History",
        "Arcana": "Time ••••",
        "DescrizioneAlta": "<p>This magic removes information about a target from the past, so that the information cannot be detected through temporal senses such as 'Postcognition' (Time 2). The spell has to target a specific person, object or place. Neither the target nor the world suffers physical or mental change; a person who had a span of her past erased would still remember that time, and so would anyone she was with.</p><p>By itself, “Erase History” only blocks attempts to observe through time. Unlike a mere warding spell, however, “Erase History” actually destroys information about a target’s past — the gap in time can’t be broken or bypassed with a stronger spell. “Erase History,” therefore, offers a perfect defense against magical attempt to probe a target’s past — but any mage must realize something very strange is going on when “Postcognition” on a person can find no trace of her existence between 10 and 11 o’clock last Tuesday. </p><p>When most mages use “Erase History,” the subject’s past merely becomes undetectable: another mage using “Postcognition” simply can’t find the target during that timespan. Doomsday Clocks are worse. They leave gaps in history that inspire horror in Time-sensing mages. Part of the past is gone, leaving a soul-shuddering void. Every memory or record of what (or who) was destroyed is a little Time-Paradox — one thread of reality pulled out, fraying the whole. </p>",
        "Practice": "Unraveling",
        "Action": "Instant",
        "Duration": "Lasting",
        "Aspect": "Covert",
        "Cost": "None",
        "DescrizioneMiddle": "<p>’Erase History' requires a simple success, but the character’s dice pool is penalized by the span of time he wants to occlude. Use the Duration chart for Prolonged spells to find the dice penalty (see <b>Mage: The Awakening</b>, p. 119). If a character has Time 5, use the Advanced Prolongation chart (so blocking an Indefinite span of time, such as occluding an entire human life or the history of a building, would require Time 5 and a –10 dice penalty). Large or multiple targets can impose further penalties.</p><p>If a mage wants to block a section of time that itself is far in the past, use the modifiers for sympathetic ties (see <b>Mage: The Awakening</b>, pp. 114–115), but for the temporal connection. The less accurately you can define the span of time you want to occlude, the weaker the sympathetic tie will be. For instance, erasing “Bob’s history between 8 and 10 p.m. last Tuesday, when he was at that motel” would provide a Known connection: you know exactly what time, by clock, calendar and what the subject was doing. Having an object tied to a specific event in that timespan, such as the wrapper of a cheeseburger Bob ate in the motel room, would raise the connection to Intimate. However, hiding “Bob’s visit to the motel some time last week” would provide, at most, an Acquainted connection. If you had no idea when Bob might have visited the motel, the connection would be Unknown, and the spell would fail; and, of course, you would need Bob’s presence to block that episode in his past, anyway. </p><p>A mage can also perform “Erase History” through an Extended casting, and try to accumulate enough successes to erase a span of history from temporal sensing. </p>",
        "RoteName": "Guardians of the Veil Rote: Forgotten Past",
        "RoteDice": "<b>Dice Pool:</b> Intelligence + Subterfuge + Time",
        "RoteDescrizione": "Sometimes the Guardians of the Veil need to make sure nobody can ever find out what they did, or what someone else did. This rote can shield hours or even days from 'Postcognition' and similar attempts to view the past. The Seers of the Throne also use the rote to hide mystical events from later viewing, while the Cult of the Doomsday Clock erases its operatives’ time-traces during missions. The Mysterium loathes this rote, and 'Erase History' in general, for mages have blocked many significant moments in Sleeper and occult history from later viewing.",
        "DescrizioneBreve": "remove a piece of time to prevent scrying"
    },
    {
        "Titolo": "Eternal Object",
        "Arcana": "Time •••• + Matter •",
        "DescrizioneAlta": "This spell allows the mage to “freeze” an object in time, preserving it in its current state. Despite the name, though, the spell isn’t necessarily permanent. Students of the Last Riddle feel that this spell was a precursor to whatever magic currently enchants the grimoire, since that magic is considerably more potent than this spell.",
        "Practice": "Patterning",
        "Action": "Extended",
        "Duration": "Prolonged (1 scene)",
        "Aspect": "Covert",
        "Cost": "Special (see below)",
        "DescrizioneMiddle": "This spell functions on any single object up to Size 10. While this spell does function on machines, it renders them inoperable for the duration of the spell. (See below.) The target number of successes is equal to twice the Size of the object, and the mage must expend Mana equal to the object’s Structure. When the ritual is complete, the object remains in its current state for 1 scene. It cannot be altered, damaged, defaced or repaired, though it can be moved. A gun imbued with this spell could not be fired, since no part of the object can be removed (and so the bullet could not leave the chamber). A car using this spell would not function, as doing so requires gasoline to be consumed, though a bicycle would function normally. A painting could not be marred or damaged even if tossed into a bonfire. Any attempted change to an object won’t “take” — fire ignores the painting, the magazine on the pistol won’t eject. At Time 5, this spell can be cast with advanced Prolongation factors, allowing an Indefinite duration.",
        "RoteName": "Orpheus’ Last Riddle Rote",
        "RoteDice": "<b>Dice Pool:</b> Resolve + Occult + Time",
        "DescrizioneBreve": "prevent object from being altered in any way"
    },
    {
        "Titolo": "Precognitive Ordeal",
        "Arcana": "Time ••••",
        "DescrizioneAlta": "Guardians of the Veil know and understand that they must suffer for the good of many. Those that master this magic, however, truly take to heart this axiom, looking forward to the pain that will befall them and drawing strength from an awareness of the trials to come. Though the knowledge that comes to the Guardian takes the shape of a nebulous sense, she nevertheless takes comfort in the certainty that she will and must endure.",
        "Practice": "Patterning",
        "Action": "Instant",
        "Duration": "Prolonged (1 scene)",
        "Aspect": "Covert",
        "Cost": "1 Mana",
        "DescrizioneMiddle": "Upon successfully casting this spell, the caster regains a point of Willpower (up to her normal maximum) each time she suffers an attack that results in at least 1 point of lethal or aggravated damage, has her soul directly targeted by any kind of hostile effect, or is the subject of any effect intended to usurp control of her mind or body, whether magical or otherwise, out to a maximum number of times equal to the successes accrued in the casting. The caster regains only a single Willpower point per 'attack,' but may regain Willpower points multiple times in a single turn if targeted by more than one effect meeting the criteria above. If the character is already at maximum Willpower when subjected to a trigger for this spell’s effect, one use of the spell is wasted, without benefit.",
        "RoteName": "Guardians of the Veil Rote: Agonies of the Prophet",
        "RoteDice": "<b>Dice Pool:</b> Wits + Occult + Time",
        "RoteDescrizione": "Religion, myth, and history alike are filled with examples of those who knew of torments to come and found courage in the face of inevitable suffering. Guardians of the Veil who master this magic willingly embrace the path of martyrdom for the greater good, learning how to recover a sense of purpose through the many slings and arrows the Fallen World casts.",
        "DescrizioneBreve": "gain Willpower by suffering foreseen attacks"
    },
    {
        "Titolo": "Present as Past",
        "Arcana": "Time ••••",
        "DescrizioneAlta": "The mage predicts the immediate future with absolute clarity.",
        "Practice": "Patterning",
        "Action": "Instant and contested; target rolls Composure + Gnosis reflexively",
        "Duration": "Transitory (one turn)",
        "Aspect": "Vulgar",
        "Cost": "1 Mana",
        "DescrizioneMiddle": "On the turn following a successful casting, the mage’s player can require that every player who has a character affected by the spell’s Target factors declare what his character’s action will be for that turn. The Storyteller does the same for his characters. The player does not need to declare his own action for the turn, but can wait to act at any point within the initiative order, trumping all other supernatural Initiative effects. (In the event that two or more willworkers use this spell during the same scene, determine their Initiatives normally, in the event that more than one attempts to act at the same time.)<p>In addition, the character gains +1 Defense per spellcasting success against attacks from those affected by the spell. (This is in addition to any benefit provided by the “Acceleration” spell; see p. 262)</p>",
        "RoteName": "Adamantine Arrow Rote: Measure the River’s Flow",
        "RoteDice": "<b>Dice Pool:</b> Intelligence + Occult + Time vs. Composure + Gnosis",
        "RoteDescrizione": "Ultimately, knowledge and understanding can overcome any strength of arms. Mages of the Adamantine Arrow understand this wisdom and use this rote to predict, and thus dictate, the pacing of a violent encounter. Willworkers of the Silver Ladder have sometimes been known to use this magic (Presence + Occult + Time) in order to control less physical (but no less dangerous) situations.",
        "DescrizioneBreve": "predict actions of others perfectly"
    },
    {
        "Titolo": "Prophecy",
        "Arcana": "Time ••••",
        "DescrizioneAlta": "The mage can gain prescriptive advice on how to alter the future, perhaps to make something come true or to avert an event he fears or knows is coming.",
        "Practice": "Patterning",
        "Action": "Instant",
        "Duration": "Concentration",
        "Aspect": "Covert",
        "Cost": "None",
        "DescrizioneMiddle": "As with “Divination,” p. 263, the mage can ask one question about a target or event per success. Instead of reading the future, however, he reads how things might be, provided some action or event comes to pass. Note that a target’s dots in the Destiny Merit (if any) levy penalties on the spellcasting roll — it is more difficult to find an alternate future when a person’s fate is ordained.<p><i>Example: Bahazid has learned that a certain boy is destined to become a great leader. She uses Prophecy to find out how she might avert that fate, for she does not want it to come to pass. She gains an image of somebody murdering the boy’s mother, and knows that if this comes to pass the boy shall become a tyrant.</i></p><p>Because of the vagueness of prophetic ability at this level, the mage learns only broad and sweeping details. Bahazid might not, for example, discover that saving the boy’s mother will lead to his sister becoming a great leader.</p>The same target can be targeted with this spell only once every 24 hours.",
        "RoteName": "Guardians of the Veil Rote: Merlin’s Foresight",
        "RoteDice": "<b>Dice Pool:</b> Intelligence + Occult + Time",
        "RoteDescrizione": "Protecting the Mysteries is not always simply a matter of knowing the past or perceiving the present. Sometimes such work involves discerning that which has not yet come. In this fashion, the ignorant can be shepherded away from perils they lack the discernment to understand, and the occult world can be shielded from the gaze of those who might seek to do it harm in their blindness.",
        "DescrizioneBreve": "gain information about possible future events by asking questions"
    },
    {
        "Titolo": "Temporal Pocket",
        "Arcana": "Time ••••",
        "DescrizioneAlta": "This spell enables a mage to withdraw into a personal temporal pocket, there to take whatever actions she sees fit during the subjective time allotted to her. If hunted and exhausted, she could take a nap outside of “mainstream” time and emerge a few minutes later, awake, alert and ready to keep moving. <p>While existing within such a temporal pocket, the mage cannot interact with or be interacted with by others, save for others proficient in the Time Arcanum who attempt to “break in” to her time bubble. The mage’s own subjective time continues to flow at the same rate within this pocket, but time passes at a different rate outside, determined by the strength of the mage’s spell. While within, she could set up an elaborate ritual and return to “mainstream” time with a powerful casting at the ready.</p>",
        "Practice": "Weaving",
        "Action": "Extended",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Vulgar",
        "Cost": "None",
        "DescrizioneMiddle": "Successes are assigned to increasing the time that passes within the Pocket relative to what time passes without. <p>Example: One success allows two turns to pass within for every one turn that passes without, or two minutes within for one minute without, or two hours per one hour. <p>This spell affects only the mage.</p>The maximum target number the caster can aim for is equal to his Gnosis or Time, whichever is higher. Once the Duration expires (measured in time without), the Pocket ceases to exist and the mage returns to normal time.</p>",
        "Tables": [
            {
                "Placeholder": "[TABLE1]",
                "Data": [
                    [
                        "Time within Pocket",
                        "Target Number"
                    ],
                    [
                        "x2",
                        "1 success"
                    ],
                    [
                        "x3",
                        "2 successes"
                    ],
                    [
                        "x4",
                        "3 successes"
                    ],
                    [
                        "x5",
                        "4 successes"
                    ],
                    [
                        "x6",
                        "5 successes"
                    ]
                ]
            }
        ],
        "RoteName": "Free Council Rote: Seven Breaths in an Instant",
        "RoteDice": "<b>Dice Pool:</b> Wits + Occult + Time",
        "RoteDescrizione": "This rote enables a Free Council willworker to step outside of Time, assess his situation, and make any preparations he requires in order to be at his most effective when he returns. After all, adaptability is sometimes nothing more than a chance to evaluate a difficulty from a safe vantage and with plenty of time to plan.",
        "DescrizioneBreve": "step into altered time flow"
    },
    {
        "Titolo": "Temporal Stutter",
        "Arcana": "Time ••••",
        "DescrizioneAlta": "The mage causes people or things to stutter forward in time.",
        "Practice": "Patterning",
        "Action": "Instant and contested; target rolls Composure + Gnosis reflexively",
        "Aspect": "Vulgar",
        "Cost": "1 Mana",
        "DescrizioneMiddle": "This spell affects only a living creature (and what he wears and carries), stuttering him forward for one turn per success. (If cast over an area, only people or objects that are wholly within the defined area are affected.)<p>Onlookers simply see those affected disappear for up to several seconds, while those affected lurch forward in time (to find whatever changes having occurred outside of the spell’s area of effect during those seconds). Thus, reinforcements three turns away might, in the subjective time of those affected by the spell, arrive in one.</p>If, in the intervening turns, a person or object moves into the space occupied by one or more of the time-stuttering targets, a clash ensues when the time travelers arrive back in their places. Compare the Size of each person or thing who now shares the same space. Those with the smallest Size suffer a knockdown effect (see p. 168 of the <b>World of Darkness Rulebook</b>). If Sizes are equal, both must contend with a knockdown.<p><i>Example: Zeno, standing next to his motorbike, uses Temporal Stutter to shift forward in time for three turns (three successes were rolled for him). In the intervening turns, Arctos sees Zeno’s bike and walks over to check it out. In the fourth turn, Zeno reappears — exactly where Arctos is standing. Both mages are Size 5, so both must contend with knockdown. A reflexive Dexterity + Athletics roll is made for each. Zeno succeeds, but Arctos fails, so falls down, knocked aside by Zeno’s sudden appearance. </i></p>",
        "RoteName": "Mysterium Rote: Cresting the Wave",
        "RoteDice": "<b>Dice Pool:</b> Wits + Occult + Time",
        "RoteDescrizione": "Sometimes the flow of history doesn’t move quite fast enough for a willworker’s purposes. The mages of the Mysterium have circumvented that restriction by means of this rote. While it moves subjects forward in time only by several seconds, those seconds have occasionally meant the difference between a fantastic discovery and a grisly demise. Mages of the Adamantine Arrow have been known to use this very same rote in combat (perhaps vanishing into the immediate future just before an explosion and then reappearing seconds afterward).",
        "DescrizioneBreve": "push self or target forward in time"
    }
]

const timeFiveData = [
    {
        "Titolo": "Duplicate",
        "Arcana": "Time •••••",
        "DescrizioneAlta": "The mage prepares Time to repeat itself, allowing him to duplicate the results of a single action as if he had performed that action exactly the same way two times.",
        "Practice": "Making",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Covert",
        "Cost": "1 Mana during casting; 1 Mana on activation",
        "DescrizioneMiddle": "The mage casts the spell on himself, storing it for later use (this storage counts against the mage’s Spell Tolerance). Casting the spell requires the expenditure of one Mana and a single success on the casting roll. This spell may have its Duration increased to one day by spending an additional Mana during the casting. Only one instance of Duplicate may exist on a mage at any time.<p>Activating the stored spell is a reflexive action that costs one Mana. Once the spell is active, the next instant action performed by the mage will be doubled as though the mage had performed the action twice.</p> Any expenditure required by the repeated action must be paid for twice, and any penalties accrued by that action will be inflicted twice.<p><i>An Adamantine Arrow decides to attack his enemy with the “Telekinetic Strike” rote (see <b>Mage: The Awakening</b>, p. 170) and double the effectiveness of the spell by activating Duplicate. The Arrow gains four successes on his casting roll for Telekinetic Strike and succeeds at the aiming check to hit his target. In the span of one turn, the Arrow’s target receives eight levels of bashing damage from the duplicated “Telekinetic Strike” spell. If the Arrow had decided to change the damage to lethal, he would have been required to spend three Mana this turn (one for each casting of Telekinetic Strike and one Mana for activating Duplicate). The total number of Paradox dice rolled for the doubled casting of Telekinetic Strike would be a minimum of three (Gnosis 3 required to spend three Mana a turn generates a base pool of two dice, plus an additional die from the successive casting of a vulgar spell in the same scene).</i></p>",
        "RoteName": "Adamantine Arrow Rote: Multiplicity",
        "RoteDice": "<b>Dice Pool:</b> Resolve + Occult + Time",
        "RoteDescrizione": "The origins of this rote are dubious at best. Legend states this rote was developed by a warrior-mage Exarch shortly before his ascension to the Realms Supernal via the Celestial Ladder. Regardless of the rote’s origin, the obvious advantages of this spell led to its further development by the Adamantine Arrow. The ability to increase damage done versus time spent is of interest to any warrior.",
        "DescrizioneBreve": "loop time so that one action happens twice"
    },
    {
        "Titolo": "Faerie Glade",
        "Arcana": "Time •••••",
        "DescrizioneAlta": "It is said that, in elder days, the Fair Folk lived in places that were not quite in synch with time as mortal creatures knew it. Thus, the tales of men who bedded down in mushroom rings, only to wake a century later or the next morning, as bent and hobbling ancients. This spell mimics such faerie enchantments, allowing a mage to push a place outside of the normal flow of time so that those within experience a lot of subjective time in a very short period of “mainstream” time, or vice versa.",
        "Practice": "Making",
        "Action": "Extended and contested; target rolls Composure + Gnosis reflexively",
        "Aspect": "Vulgar",
        "Cost": "1 Mana",
        "DescrizioneMiddle": "This spell acts like the “Temporal Pocket” spell, p. 265, except that the mage can now cast it upon an area. One success affects a five-foot square area and anything within it, and additional Target factors can be devoted to increasing this area.<p>The flow of time can also be reversed so that time within the Pocket moves more slowly than time without. For example, with one success the time within the pocket moves at half the rate as time without: one turn within for every two turns without. With three successes, four turns pass within for every one turn that passes without. A person who enters the area must succeed in a reflexive and contested Composure + Gnosis roll or be caught within the time flux.</p>",
        "RoteName": "Mysterium Rote: Temporal Bastion",
        "RoteDice": "<b>Dice Pool:</b> Wits + Occult + Time",
        "RoteDescrizione": "Mages of the Mysterium often use this rote to provide themselves with nearly limitless quantities of time to devote to their esoteric research. Some members of the Silver Ladder, when pondering a particularly difficult course of action, may use the same magic (Composure + Occult + Time) to afford themselves weeks or even months in which to consider a decision that must be made by tomorrow morning.",
        "DescrizioneBreve": "alter speed of time flow in area"
    },
    {
        "Titolo": "Future Legacy",
        "Arcana": "Time •••••",
        "DescrizioneAlta": "The mage shunts an object forward in time. While he could previously move things forward in time for a few turns using “Temporal Stutter,” p. 265, mastery of this level allows him to move an object far into the future, perhaps to keep it out of enemy hands or to ensure that only an heir will wield it.",
        "Practice": "Making",
        "Action": "Instant",
        "Duration": "Lasting",
        "Aspect": "Vulgar",
        "Cost": "None",
        "DescrizioneMiddle": "The number of successes determines how far into the future the object can be sent. The mage can opt to send it to any time between now and that allowed by his successes. [TABLE1]*add 10 years per additional success <p>The object appears at the future time in the exact same space it occupies in the present, unless Space 2 is added to locate it elsewhere. (See “Apportation,” p. 234.)</p> The drawback to this spell is that, once cast, the object cannot be retrieved, except at the point in the future in which it appears. It is said that archmasters of Time have the power to reach forward and snatch back objects that have been sent forward.",
        "Tables": [
            {
                "Placeholder": "[TABLE1]",
                "Data": [
                    [
                        "Successes",
                        "Future Time"
                    ],
                    [
                        "1 success",
                        "One year"
                    ],
                    [
                        "2 successes",
                        "Two years"
                    ],
                    [
                        "3 successes",
                        "Five years"
                    ],
                    [
                        "4 successes",
                        "10 years"
                    ],
                    [
                        "5 successes",
                        "20 years"
                    ]
                ]
            }
        ],
        "RoteName": "Free Council Rote: Archeologist’s Boon",
        "RoteDice": "<b>Dice Pool:</b> Presence + Investigation + Time",
        "RoteDescrizione": "A few Free Council mages use this rote to plant buried treasures from their own past, although they can’t mine such bounties until well into the future. At least they assure that nobody else can use them, either.",
        "DescrizioneBreve": "shunt object to future time"
    },
    {
        "Titolo": "Legacy of Power",
        "Arcana": "Fate •• + Prime •• + Time •••••",
        "DescrizioneAlta": "The mage shunts some of her personal stores of Mana forward in time, to a moment when she will need it.",
        "Practice": "Making",
        "Action": "Instant",
        "Duration": "Lasting",
        "Aspect": "Vulgar",
        "Cost": "Special (see below)",
        "DescrizioneMiddle": "For each success accrued in the casting of this spell, the mage may send a single point of Mana from her current total forward into the future, using the table given for the “Future Legacy” spell (<b>Mage: The Awakening</b>, p. 267) to determine how long the character has to recover her Mana. Because the caster attunes her spell to the threads of her own destiny and because the Mana within her is essentially stored within her Awakened spirit, she effectively chooses the moment that constitutes her “hour of need” and may freely recover the Mana at that time, circumventing even wards and other barriers that prevent the flow of such energies; the Mana exists out of time and place until it is needed and never actually “goes” anywhere. No willworker may have more points of Mana readied for use in this way than she has dots in Fate or Prime, whichever is less. The Mana sent forward is lost from the character’s current total and recovered points may not bring her over the normal maximum Mana permitted by her Gnosis. Mana not recovered before the maximum allowable span of time is lost back into the Tapestry.",
        "RoteName": "Silver Ladder Rote: Supernal Reserve",
        "RoteDice": "<b>Dice Pool:</b> Manipulation + Subterfuge + Time",
        "RoteDescrizione": "A capable leader knows her true power lies not merely in what she has at hand, but also in what she can bring to bear when the need is dire. By exercising a bit of resource management, a théarch well-versed in the lore of time’s flow can put aside some much needed Mana in times of feast, knowing a time of famine must, inevitably, follow.",
        "DescrizioneBreve": "store Mana in timestream for future use"
    },
    {
        "Titolo": "Rewrite History",
        "Arcana": "Time •••••",
        "DescrizioneAlta": "The mage can sculpt his personal history, within normal possibility. The willworker can perform extensive modifications to his own past, enabling him to redefine the person he currently is, even if only temporarily. He cannot, however, change his soul’s history, remaking his magical past (he cannot change his Path, Gnosis or Arcana).",
        "Practice": "Making and Unmaking",
        "Action": "Extended",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Vulgar",
        "Cost": "1 Mana",
        "DescrizioneMiddle": "Each success allows the mage to shift one dot from a mundane trait (an Attribute, Skill or Merit, but not a magical trait such as Gnosis or an Arcanum) to another within the same trait category (dots of Social Attributes switch with other Social Attributes, etc.), up to his normal maximum within a given category (five dots for most humans). (Dots cannot be added directly to or subtracted directly from Advantages.) It is as if he had made different choices in the past, leading to different personal results. For example, in his newly rewritten past, a mage went to the gym rather than to the library he actually frequented in his real past, allowing him to shift traits from Mental Attributes to Physical Attributes.<p>Note that changing a number that has derived characteristics (Composure or Stamina, for example) alters any such derived characteristics appropriately (say, Willpower or Health).</p><p>When the spell expires, the caster’s real history is restored and his traits return to their original distribution.</p>",
        "RoteName": "Silver Ladder Rote: Thief of Years",
        "RoteDice": "<b>Dice Pool:</b> Manipulation + Investigation + Time",
        "RoteDescrizione": "The Silver Ladder’s willworkers will not be ruled by any force outside of their order, not even the immutability of Time itself. By means of this rote, such mages become eloquent speakers, capable swordsmen, marathon runners or whatever else is required, moving just a little bit of history here and there to affect the desired changes.",
        "DescrizioneBreve": "alter your Skills and Attributes"
    },
    {
        "Titolo": "Stop Time",
        "Arcana": "Time •••••",
        "DescrizioneAlta": "The mage suspends time around the target. The target’s subjective perception shows him as existing in one moment and then, instantaneously, another later time. To onlookers, it appears as if the target is perfectly still, even if he’s in mid-air.",
        "Practice": "Unmaking",
        "Action": "Instant and contested; target rolls Composure + Gnosis reflexively",
        "Duration": "Transitory (one turn)",
        "Aspect": "Vulgar",
        "Cost": "1 Mana",
        "DescrizioneMiddle": "Each success allows the subject to be frozen in time for one turn. The field of suspended time exists immediately around the target. If anyone or anything enters this field — that is, if the target is touched — the spell is broken and the target is restored to normal time.",
        "RoteName": "Free Council Rote: Hand of Glory",
        "RoteDice": "<b>Dice Pool:</b> Intelligence + Occult + Time vs. Composure + Gnosis",
        "RoteDescrizione": "Willworkers of the Free Council use this rote for a wide variety of purposes, such as stealing money from a wealthy countesses’ safe right before her very (unseeing) eyes, or giving a conspiracy theorist a case of “lost time,” so that he might think that aliens had abducted him in the interval of time of which he has no memory (but which clocks clearly show having passed).",
        "DescrizioneBreve": "freeze time around a target"
    },
    {
        "Titolo": "Temporal Lifeline",
        "Arcana": "Time •••••",
        "DescrizioneAlta": "The mage forges a temporal connection with the moment of the spell’s casting and can later choose to return there with knowledge of what “happened” in the future.",
        "Practice": "Making",
        "Action": "Instant",
        "Duration": "Lasting",
        "Aspect": "Vulgar",
        "Cost": "1 Mana",
        "DescrizioneMiddle": "The mage “fixes” a moment in time when the spell is completed. Thereafter, an invisible, ethereal “lifeline” connects the caster to that moment as it moves into the past. At any time thereafter, the mage can choose to return to that moment as an instant action, simply by willing it. This ends the spell as the temporal lifeline “snaps back” into the past and disappears. The Mana cost of the temporal lifeline cannot be regained so long as the lifeline exists. The mage returns to the chosen moment and all the intervening “time” essentially never happened, although the mage remembers it as though it did. It can be considered a “possible” future in that the mage can take actions to change the outcome of events. Once Temporal Lifeline is cast, a mage can even use spells such as Temporal Pocket and Temporal Stutter to move forward faster in time in order to reach a particular future point, then “snap back” to the past using the lifeline. It is impossible for the same caster to fix the “end point” at two temporal lifelines closer than 24 hours together or to have more than one temporal lifeline active at a time. Thus, after activating the lifeline and returning to the past, the mage cannot cast this spell again until at least 24 hours later.",
        "RoteName": "Free Council Rote: Save Point",
        "RoteDice": "<b>Dice Pool:</b> Wits + Science + Time",
        "RoteDescrizione": "Free Council legend has it that this rote was actually inspired by multiple-choice adventure fiction even before the advent of videogames, but the popular name has stuck. The rote — similar to many others in the Free Council arsenal — originated during the Nameless War with desperate measures taken by Libertine masters to ensure the survival of their movement (and themselves, of course).",
        "DescrizioneBreve": "mark a point in time to return to up to 24 hours later"
    }
]

export { timeOneData, timeTwoData, timeThreeData, timeFourData, timeFiveData };