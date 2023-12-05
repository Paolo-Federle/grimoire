const primeOneData = [
    {
        "Titolo": "Analyze Enchanted Item",
        "Arcana": "Prime •",
        "DescrizioneAlta": "The mage can scrutinize an enchanted item — an Artifact, enhanced item, or imbued item — to discern its powers.",
        "Practice": "Knowing",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Covert",
        "Cost": "None",
        "DescrizioneMiddle": "See “Resonance,” pp. 277-280, for rules on scrutinizing items. With an exceptional success, the mage can tell if the enchanted item is cursed or has other exceptional circumstances (deleterious or benign) connected to its ownership or use.<p>The effect lasts for one scene, during which extended Intelligence + Occult rolls can be made to examine the enchanted item. Ten minutes’ time per roll; target number is equal to twice the enchanted item’s Merit dots. See the following Merits for more details on each type of item: “Artifact” (p. 80), “Enchanted Item” (p. 82), “Imbued Item” (p. 84).</p>",
        "RoteName": "Adamantine Arrow Rote: Artifact Hunt",
        "RoteDice": "Dice Pool: Intelligence + Occult + Prime",
        "RoteDescrizione": "No weapon is truly useful until its wielder comprehends its nature. Members of the Adamantine Arrow use this magic to learn the capabilities of enchanted items with which they come into contact, and to see if there are any strings attached to the use of such items. Given that a misunderstood Artifact is a dangerous Artifact, all orders make use of this rote."
    },
    {
        "Titolo": "Chronicle Resonance",
        "Arcana": "Prime • + Time ••",
        "DescrizioneAlta": "The willworker discerns local sources of Resonance over time. These include sources that are currently present but have grown less intense, as well as those that have disappeared completely. She can track the progress of the dispersing Resonance over time, as well as any sudden changes that took place during the time period studied (such as magical alterations to a given source of Resonance). She is not able to learn who did these things, or how (not without making use of other magics, at any rate), but can use this magic to get a feel for the local pattern of Resonance.",
        "Practice": "Unveiling",
        "Action": "Instant",
        "Duration": "Concentration",
        "Aspect": "Covert",
        "Cost": "None",
        "DescrizioneMiddle": "This spell’s Potency is used to determine how far back the mage can look, as well as to contest any temporal or Resonance occlusion that might have been used in the mage’s immediate vicinity.[TABLE1]*Each additional success adds three month to how far back the mage can look.",
        "Tables": [
            {
                "Placeholder": "[TABLE1]",
                "Data": [
                    [
                        "Mana Spent",
                        "Interval"
                    ],
                    [
                        "1",
                        "24 hours"
                    ],
                    [
                        "2",
                        "Two days"
                    ],
                    [
                        "3",
                        "One week"
                    ],
                    [
                        "4",
                        "One month"
                    ],
                    [
                        "5",
                        "Three months"
                    ]
                ]
            }
        ],
        "RoteName": "Guardians of the Veil Rote: Piercing the Shroud of Days",
        "RoteDice": "Dice Pool: Wits + Investigation + Prime",
        "RoteDescrizione": "Not even the passage of time enables a fugitive to evade the scrutiny of a dedicated and capable Guardian. This rote helps such mages to piece together the trails of Resonance that might otherwise go cold and allow their quarries to escape justice."
    },
    {
        "Titolo": "Copy Grimoire",
        "Arcana": "Matter •, Prime •",
        "Practice": "Compelling",
        "Action": "Extended",
        "Duration": "Lasting",
        "Cost": "None",
        "DescrizioneAlta": "The mage can copy an existing grimoire without knowing the rotes it contains or even how to properly read the text. The mage must have unimpeded physical access to the original grimoire for the duration of the spell. The basic threshold is one success per Arcanum dot, but the Storyteller may add additional difficulty if the grimoire is especially difficult to copy due to complex diagrams, confusing organization or even blurry text. In the case of some grimoires (such as the Corpus Mysteriorum), this makes it impossible to properly judge the difficulty and number of spells within.<p>The caster can’t alter the language, organization or basic appearance of the copy from the original except for a few minor deviations in materials and penmanship.</p><p>Once the caster is finished, the new grimoire contains all of the rotes of the original. The copy even retains any magical curses or safeguards contained in the original as long as those were part of a combined spell that created the original (or in the case of a copy of a copy, ultimately descends from an original work of this type). The copy functions just as a standard grimoire (described in “Inscribe Grimoire”), though it should be noted that this spell is often used to reproduce books that are difficult to understand.</p><p>This spell can’t copy a daimonomicon (see p. 81) unless it incorporates the master-ranked Arcanum used to create that work in the first place.</p>",
        "RoteName": "Mysterium Rote: Illuminated Hand",
        "RoteDice": "Dice Pool: Intelligence + Crafts + Prime",
        "RoteDescrizione": "Mystagogues copy grimoires such as the Corpus Mysteriorum to pass on its knowledge and demonstrate their devotion to knowledge. This rote is partly responsible for the order’s great storehouse of magical knowledge, but this rote can also be used to copy cursed books, spreading a corrupt tome throughout the Awakened community. Some cursed grimoires include an enchantment that compels readers to learn and use this rote to copy the monstrous knowledge within them."
    },
    {
        "Titolo": "Counterspell",
        "Arcana": "Any one of the attacking spell’s Arcana at •",
        "DescrizioneAlta": "The mage creates Pattern interference that can weaken or even cancel a spell.",
        "Practice": "Shielding",
        "Action": "Instant and contested; successes are compared to the target spell’s Potency",
        "Duration": "Lasting",
        "Aspect": "Covert",
        "Cost": "1 Mana",
        "DescrizioneMiddle": "<p>When someone directs a vulgar spell at the mage or other targets whom the mage wishes to protect, he can cast a countering spell that creates a form of magical interference, weakening or even canceling the attacking spell, similar to how an obstacle can act as cover against a ranged attack. He must first have Mage Sight to be able to perceive the attacking spell. Like a dodge action, he can cast Counterspell against vulgar spells cast by another mage with a higher Initiative. (He cannot counter attacks with lower Initiatives if he has already performed an action in the turn. See “Dodge,” p. 156 of the <b>World of Darkness Rulebook</b>, for rules on how this circumvents the normal Initiative order for the turn.) A mage can even counter sympathetic spells cast directly at him (but not those cast at other targets), by sensing the sympathetic conduit being forged by the spell (again, he must have Mage Sight for this). </p><p>Successes are subtracted from the target spell’s Potency. If the target spell is left with no Potency, it is canceled entirely. If even a single point of Potency remains, the spell is applied against its target (at its reduced Potency). </p><p>A covert spell cannot normally be countered, since the defending mage must first identify its Arcanum components using the normal rules for doing so (see “Scrutinizing Spells,” p. 278). Such investigation is not normally possible within the same turn in which the spell is cast, although some Time magic might give a mage the extra time needed or clue him in on what spell the caster will cast before he casts it. Vulgar spells do not need this kind of scrutiny; they are obvious enough to counter within the same turn of casting. </p><p>A spell aimed at more than one target does not need to be countered for each target; a successful countering diminishes or prevents its effects against all targets. </p><p>A countering mage must have at least one dot in one of the Arcana used by the attacking spell. For example, to counter a conjunctional Mind 3 + Life 2 spell, a mage needs either Mind 1 or Life 1, but not both. If he does not have a proper Arcanum lore, he cannot counter the spell. Counterspell can be learned as a rote (use Occult Skill), but it must be learned separately for each Arcanum to which it applies.</p><p>A mage with two dots of Prime can instead use the “Counterspell Prime” spell, p. 222, to counter any spell, regardless of Arcanum. In addition, Counterspell Prime allows him to counter covert spells (assuming he has active Mage Sight) without first needing to identify them.</p>"
    },
    {
        "Titolo": "Detect Banisher",
        "Arcana": "Prime •",
        "Practice": "Knowing",
        "Action": "Instant",
        "Duration": "Concentration",
        "Aspect": "Covert",
        "Cost": "None",
        "DescrizioneAlta": "The Banisher can recognize the subtle distinctions in aura between normal mages and those of his ilk.",
        "DescrizioneMiddle": "Banishers, for whatever reason, have magical signatures that are slightly different from those of other mages. While some Banishers refuse to work together, and are just as willing to kill each other as their foes, others long for companionship and backup. This spell allows a mage to see the cracks in a Banisher’s aura and feel the chill from the Abyss within.<p>Non-Banisher mages can use this spell as well, but they suffer a –2 penalty on the attempt. Use of this spell is also believed to make mages more susceptible to becoming Banishers, though this might just be a paranoid rumor.</p>Any use of this spell adds the target’s Abyssal Resonance Merit dots, if any, to the attempt (making mages with this Merit easier to detect). Note, though, that casting this spell upon a target with Abyssal Resonance •• makes the spell vulgar in aspect (see p. 39).",
        "RoteName": "Banisher Rote: Friendly Faces",
        "RoteDice": "Dice Pool: Wits + Composure + Prime",
        "RoteDescrizione": "More than one Banisher over the years has developed this rote, and in larger cults, it’s not too unlikely that someone winds up learning or creating it. Strength in numbers, after all."
    },
    {
        "Titolo": "Detect Banisher",
        "Arcana": "Prime •",
        "Practice": "Knowing",
        "Action": "Instant",
        "Duration": "Concentration",
        "Aspect": "Covert",
        "Cost": "None",
        "DescrizioneAlta": "Banishers, for whatever reason, have magical signatures that are slightly different from those of other mages. While some Banishers refuse to work together, and are just as willing to kill each other as their foes, others long for companionship and backup. This spell allows a mage to see the cracks in a Banisher’s aura and feel the chill from the Abyss within.<p>Non-Banishers mages can use this spell, as well, but they suffer a –2 penalty on the attempt. Use of this spell is also believed to make mages more susceptible to becoming Banishers, though this might just be paranoid rumor.</p><p>Any use of this spell adds the target’s Abyssal Resonance Merit dots, if any, to the attempt (making mages with this Merit easier to detect). Note, though, that casting this spell upon a target with Abyssal Resonance •• makes the spell vulgar in aspect (see p. 39).</p>",
        "RoteName": "Banisher Rote: Friendly Faces",
        "RoteDice": "Dice Pool: Wits + Composure + Prime",
        "RoteDescrizione": "More than one Banisher over the years has developed this rote, and in larger cults, it’s not too unlikely that someone winds up learning or creating it. Strength in numbers, after all."
    },
    {
        "Titolo": "Discern Phantasm",
        "Arcana": "Prime •",
        "DescrizioneAlta": "The mage can see through Prime-based illusions (those created with manifested Mana; see “Phantasm,” p. 227), knowing them for what they are. Having substance, however, they do not vanish from her sight.",
        "Practice": "Unveiling",
        "Action": "Instant",
        "Duration": "Concentration",
        "Aspect": "Covert",
        "Cost": "None",
        "DescrizioneMiddle": "The phantasm’s Potency levies dice penalties on the roll.",
        "RoteName": "Free Council Rote: Identifying the Unreal",
        "RoteDice": "Dice Pool: Wits + Occult + Prime",
        "RoteDescrizione": "No one appreciates being fooled, and Free Council willworkers use this rote to ascertain the unreality of Prime Arcanum phantasms. Silver Ladder mages make use of a similar rote, so that they might be aware of when they address the puppet and not its master."
    },
    {
        "Titolo": "Dispel Magic",
        "Arcana": "Prime •",
        "DescrizioneAlta": "Mages can dismantle or dispel existing spells, a process also known as 'unweaving.'",
        "Practice": "Compelling",
        "Action": "Instant and contested; successes are compared to the target spell’s Potency",
        "Duration": "Lasting",
        "Aspect": "Covert",
        "Cost": "1 Mana",
        "DescrizioneMiddle": "The mage must have at least one dot in each Arcanum used in the spell to be dispelled, unless he has Prime 4 (see 'Supernal Dispelation,' p. 229). (Note: This effect differs from 'Counterspell,' which requires one dot in only one of the Arcana used by the target spell.) The successes of the dispelling mage’s effort must exceed the Potency of the existing spell to successfully dispel it.",
        "RoteName": "Guardians of the Veil Rote: Unweaving the Flaw",
        "RoteDice": "Dice Pool: Intelligence + Occult + Prime vs. target spell’s Potency",
        "RoteDescrizione": "Attacking the magics of others is sometimes the most direct and practical means of protecting the secrecy of the hidden world. Guardians are not the only ones to use such magic, however. This useful rote is practiced by any mage with any degree of skill in the Prime Arcanum."
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
        "DescrizioneMiddle": "Success in the casting of this spell grants a willworker insight into the immediate past of an ephemeral entity presently manifested before her or whom she can otherwise perceive. Effectively, the mage begins to “rewind” the recent history of the entity, following it back, one minute per turn of concentration and studying the sensory input of its surroundings during that time. The mage may “pause” on any given minute and analyze it for content of interest. In the case of a being recently summoned from its home realm, this actually allows the caster to look upon that realm in the time leading up to the summoning.<p>An entity whose existence is only recently established (such as one temporarily created with the Spirit Arcanum), however, may not have much history to study. Likewise, a being summoned from a place in which time has no meaning may reveal nothing, or it may reveal wildly inconclusive information.</p><p>Following the history of an entity summoned from the Abyss back through the moment of summoning to its place of origin instantly terminates the spell and the mage’s player must successfully roll Resolve + Composure, with a dice-pool penalty equal to the Gulmoth’s Rank, with failure resulting in a mild derangement (or, if the mage already suffers from a mild derangement, a severe one). At the Storyteller’s discretion, a similar effect may befall a willworker using this spell to see back beyond the moment at which an alien entity first arrived in the Fallen World from outside of the Tapestry. Using this spell in an attempt to look past the moment of summoning for a denizen of the Supernal Realms grants a painful and confusing — and utterly unhelpful — glimpse of the higher world before abruptly ending the spell. Attempting to look into the Realms Supernal in this way is an act of hubris for any mage with a Wisdom higher than 3, requiring a degeneration roll on two dice.</p>",
        "RoteName": "Mysterium Rote: Whence It Came",
        "RoteDice": "Dice Pool: Wits + Occult + Time",
        "RoteDescrizione": "Information moves not just forward, but also backward, in time for those with the skill necessary to obtain it. Some mystagogues summon strange spirits from the other worlds, simply to analyze their places of origin by way of this magic, thus advancing the state of Awakened knowledge."
    },
    {
        "Titolo": "Gauge Essence",
        "Arcana": "Prime • + Death •, Life •, and/or Spirit •",
        "DescrizioneAlta": "Ghosts and spirits of all sorts use Essence, an ephemeral substance often imprinted with certain emotional qualities, signifying its origin. Just like scientists can discern the difference between a diamond mined in southern Africa, for instance, and one acquired from elsewhere in the world, an astute willworker can analyze the individual qualities of a particular source of Essence.",
        "Practice": "Knowing",
        "Action": "Instant and contested; target rolls Resistance or Resolve reflexively",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Covert",
        "Cost": "None",
        "DescrizioneMiddle": "With a successful casting of this spell, the mage determines the Resonance of a source of Essence, contained within a creature of the appropriate type. With Death 1, the willworker can analyze the Essence inside a ghost, while Life 1 grants insight into points of Essence contained within a living creature (for whatever reason), and Spirit 1, any Essence within a spirit of the Shadow Realm. This spell also gives the caster a rough sense of how much Essence a creature contains. For example, a ghost down to its last two points of Essence reads as nearly depleted, while a powerful denizen of Shadow holding 20 or more points of Essence registers as having a potent stockpile of Essence.<p>This spell also gives a mage a sense for the descriptive qualities of the Essence he sees; knowledge that may, in turn, grant further insight. A perfectly peaceful-looking suburban residence producing Essence flavored by atrocity hides something terrible in its past... or its present. Likewise, a seemingly helpful spirit whose Essence resonates with trickery might not be as accommodating as it seems.</p><p>Any creature that wishes to resist having its Essence scanned resists using its Resistance or Resolve (whichever is applicable). This counts only toward sources of Essence presently contained within the being. External sources may be concealed through other powers, however; in such a case, the entity’s successes are compared against those of the caster.</p>",
        "RoteName": "Silver Ladder Rote: Know Thy Enemy",
        "RoteDice": "Dice Pool: Wits + Empathy + Prime",
        "RoteDescrizione": "This spell is of old account among summoners, many of whom regard it as simple good business. Certain théarchs claim the spell actually predates the Fall, and it certainly would make sense were such the case. Some of the oldest texts from the Atlantean Diaspora speak of similar magics, causing certain summoners within the Ladder to point with pride to the venerable pedigree of their craft."
    },
    {
        "Titolo": "Inscribe Grimoire",
        "Arcana": "Prime •",
        "DescrizioneAlta": "The mage can record the secrets of his rotes into a magical book readable by other Awakened minds.",
        "Practice": "Compelling",
        "Action": "Extended",
        "Duration": "Lasting",
        "Aspect": "Covert",
        "Cost": "None",
        "DescrizioneMiddle": "Inscribing a grimoire is a bold act, for the mage puts part of his magic into the book by removing it from himself. In doing so, the mage forgets how to cast a rote. He can later re-learn it by studying his own grimoire (or learning from another mage who knows the rote) and with the expenditure of the proper experience points, but until he does he cannot cast that rote on his own again (although he can use the grimoire to cast it; see below). Recording would seem at first to be a selfless or foolish thing to do, but orders are hungry for grimoires with which to teach young mages, and pay for them in favors. Also, certain Mind spells or creatures can take knowledge from a mage’s mind, leaving a void in its place. In case rotes are lost in this way, it’s good to have them “backed up” in a book.<p>The spell’s target number equals one success per Arcanum dot used in the rote to be recorded. For example, a Life 3, Mind 2 rote requires five successes. The grimoire’s Duration is lasting; it cannot be dispelled and does not expire unless the grimoire itself is destroyed.</p><p>Grimoires allow mages to learn their contents without requiring a teacher, although the experience point cost is the same. Additionally, the mage can cast a grimoire’s rotes even if he does not personally know the rotes, as long as he references the book during casting. Doing so requires one turn of reference, during which the mage can do nothing but read the book and move up to his Speed. In the following turn, he can cast the rote. If he is interrupted before casting, he must reference the book all over again. If he already knows the rote, referencing the grimoire gives a +1 bonus to casting it.</p><p>Grimoires cannot be copied without going through the same spellcasting process used to create them. Only the original is enchanted; mundane copies produce only a mess of meaningless words. Despite the name, grimoires don’t have to be books. They can be computer programs or databases, or anything used to store knowledge.</p>",
        "RoteName": "Silver Ladder Rote: Inscribing the Ineffable Words",
        "RoteDice": "Dice Pool: Intelligence + Expression + Prime",
        "RoteDescrizione": "Great leaders often record their wisdom for later generations, and willworkers of the Silver Ladder are no exception. By creating grimoires, teachers can pass on knowledge to their students, and some Ladder mages use the very grimoires they have penned to facilitate their own subsequent castings. Mages of all orders make use of this magic, thereby preserving their arts for the future."
    },
    {
        "Titolo": "Supernal Vision",
        "Arcana": "Prime •",
        "DescrizioneAlta": "The mage gains the Mage Sight (see “Mage Sight,” p. 110). This is the most potent of the resonance-detecting senses and the Storyteller should be lavish with its details, explaining intricacies of any given source of resonance that would likely be invisible to one using another Arcanum. Some details, however, are best analyzed with other Arcana (in the way that Matter is best suited to “thick” or “ponderous” resonances), or better still in conjunction with Prime. Many mages describe this sense as sight, though some claim to “smell” or “taste” lingering sorcery on a person or place.<p>Others simply speak of a sixth sense or other esoteric perception that defies ordinary categorization.</p>",
        "Practice": "Unveiling",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Covert",
        "Cost": "None",
        "DescrizioneMiddle": "See “Resonance,” pp. 277-280, for rules on scrutinizing magic with this spell. A +1 dice bonus is gained on perception and scrutiny rolls to sense Awakened magic of any kind, as well as for detecting Mana, tass, enchanted items and Hallows. If the source of mystic power is concealed, the mage’s successes the Potency of the magic used to conceal the source.<p>In addition, the mage concentrates (an instant action during which he can move only his Speed and loses his Defense) to read a person’s aura to determine her nature (see “Aura Signifiers,” p. 206), but not her mental or emotional condition (which requires the Mind 1 “Aura Perception” spell, p. 205; adding Mind 1 to the casting of Supernal Vision allows the perception of both mental state and nature).</p>[TABLE1]",
        "Tables": [
            {
                "Placeholder": "[TABLE1]",
                "Data": [
                    [
                        "Nature",
                        "Color"
                    ],
                    [
                        "Awakened",
                        "Myriad sparkles in aura"
                    ],
                    [
                        "Sleeper",
                        "Weak, muted aura"
                    ],
                    [
                        "SleepWalker",
                        "Muted aura with faint glimmers within"
                    ],
                    [
                        "Lacking a soul",
                        "Empty void where the aura should be"
                    ],
                    [
                        "Under a Fate geas",
                        "Dark bands criss crossing aura"
                    ],
                    [
                        "Vampire",
                        "Aura colors are pale"
                    ],
                    [
                        "Shapeshifter",
                        "Intesely vibrating aura"
                    ],
                    [
                        "Ghost",
                        "Splotchy, intermittent aura"
                    ],
                    [
                        "Lich",
                        "Black veins in aura"
                    ],
                    [
                        "Promethean/Pandoran",
                        "Fiery aura"
                    ]
                ]
            }
        ],
        "RoteName": "Mysterium Rote: Eye of the Magus",
        "RoteDice": "Dice Pool: Wits + Occult + Prime",
        "RoteDescrizione": "Uncovering the hidden knowledge of the Awakened involves far more than the five mundane senses. Willworkers of the Mysterium use this magic to attune themselves to virtually any sort of paranormal phenomenon, detecting the presence of mystic artifacts and unseen spells. The mages of the Silver Ladder use this rote to discern the intricacies of nearby magical phenomena. After all, a diplomat from another Consilium carrying a small item heavily enchanted with potent Death magics may, in fact, be an assassin."
    }
]

const primeTwoData = [
    {
        "Titolo": "Activate Enchanted Item",
        "Arcana": "Prime ••",
        "DescrizioneAlta": "The willworker gains the ability to activate a contingent Artifact or imbued item, artificially satisfying the trigger of such an item (usually after having carefully analyzed it with “Analyze Enchanted Item,” p. 219).",
        "Practice": "Compelling",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Covert",
        "Cost": "None",
        "DescrizioneMiddle": "The mage can activate the item’s trigger at will anytime within this spell’s Duration. See the following Merits for more details on each type of item: “Artifact” (p. 80), “Enchanted Item” (p. 82), “Imbued Item” (p. 84).",
        "RoteName": "Mysterium Rote: Claiming the Ancient Heritage",
        "RoteDice": "Dice Pool: Intelligence + Investigation + Prime",
        "RoteDescrizione": "It happens on occasion that old words of power are lost and ancient lineages die out. Mysterium mages developed this rote as a means to make use of Artifacts for which no normal trigger can be deciphered or is possible."
    },
    {
        "Titolo": "Cleanse Aura",
        "Arcana": "Prime ••; optional + Life ••",
        "DescrizioneAlta": "It is not unusual for a person’s aura or personal resonance to become colored or contaminated by some outside source. This might merely be the effect of a spell, or it might be a deeper, more lasting stain. For instance, living in a rundown building with the resonance of murder might eventually leave marks on one’s aura, even if one never acted in accord with this resonance; living near it is enough to be affected by its pollution.<p>This spell cleanses alien resonance from one’s own aura. The spell will not alter personal resonance, but will remove any vestige of outside resonance that has somehow mixed with the mage’s own. This is often used to cover one’s tracks, to prevent magely detectives from determining where one has been simply by the trace “dirt” left on one’s aura.</p>",
        "Practice": "Weaving",
        "Action": "Extended",
        "Duration": "Lasting",
        "Aspect": "Covert",
        "Cost": "None",
        "DescrizioneMiddle": "The Storyteller rates the strength of the auric marks, generally from 1 to 5, although radical supernatural taint might be rated even higher. This strength must be matched by spellcasting successes for the cleansing to be effective.<p>While one success on the casting of this spell removes any sign of the mark from cursory perception, more intense scrutiny and examination (by others using Mage Sight) will still reveal lingering taint.</p><p>A Prime 3 version of this spell can be cast upon others.</p><p>By adding Life 2 to the spell, the mage can use this against auric taints that have some root in organic processes, such as the corruption caused by the practice of Sinister Organ qigong.</p>",
        "RoteName": "Guardians of the Veil Rote: Scour Auric Verdigris",
        "RoteDice": "Dice Pool: Manipulation + Occult + Prime",
        "RoteDescrizione": "The Guardians well know the value of a clean aura, one that does not display any hint of where they might have been or what activities they might have been up to. Although this spell cannot hide their own personal mind or nature from others, Scour Auric Verdigris can cleanse any marks left by the spirits or places the Guardians occasionally have to deal with."
    },
    {
        "Titolo": "Counterspell Prime",
        "Arcana": "Prime ••",
        "DescrizioneAlta": "The mage can counter spells from any Arcanum, and he can counter covert spells without first identifying their components.",
        "Practice": "Shielding",
        "Action": "Instant; successes subtract from the target spell’s Potency",
        "Duration": "Lasting",
        "Aspect": "Covert",
        "Cost": "1 Mana",
        "DescrizioneMiddle": "As the rules for “Counterspell,” p. 123, but the mage can now counter spells from any Arcanum (he does not need one dot in at least one of the spell’s Arcana) and he can counter covert spells even if he has not had time to identify their components.",
        "RoteName": "Guardians of the Veil Rote: Rend the Weave",
        "RoteDice": "Dice Pool: Composure + Occult + Prime",
        "RoteDescrizione": "This rote enables a Guardian to stop magics before they can take effect, preserving the secrecy of the Awakened world with preemptive action. Silver Ladder willworkers have their own variant on this rote (Resolve + Occult + Prime) that wills offending sorceries out of existence."
    },
    {
        "Titolo": "Ephemeral Image",
        "Arcana": "Prime ••",
        "DescrizioneAlta": "The mage can create purely two-dimensional inanimate phantasms. These creations possess no substance at all; they are simply flat images that must be overlaid upon some existing surface. However, using this spell, the mage can change the color or pattern of a suit, the picture and written information on an ID card, the appearance of a photograph, or even the apparent value of a piece of currency. The mage could also attempt to disguise a blank piece of paper as a valuable oil painting, but anyone touching it would feel smooth modern paper and not rough and aging paint.",
        "Practice": "Weaving",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Vulgar",
        "Cost": "None",
        "DescrizioneMiddle": "This spell can change the appearance of the surface of any item of Size 5 or less. The mage must make an Intelligence + Crafts or Intelligence + Expression roll (depending upon the nature of the image being created) to create the desired appearance. Excess successes on the casting roll each add 1 die to this roll. This spell cannot affect the texture, size, or shape of an object, only the colors, patterns, pictures, or text on its surface.",
        "RoteName": "Silver Ladder Rote: Ethereal Disguise",
        "RoteDice": "Dice Pool: Intelligence + Expression + Prime",
        "RoteDescrizione": "Whether they wish to ensure they are wearing the height of fashion or are attempting to impersonate someone by using an ID with the person’s name and their picture, this spell can be an invaluable tool for mages engaged in any form of intrigue."
    },
    {
        "Titolo": "Locate Node",
        "Arcana": "Prime ••",
        "DescrizioneAlta": "The African spirit Eshu often appears to travelers at places where two roads cross. Similarly, Hermes (for the Greeks) or Mercury (for the Romans) was associated with crossroads, as was the Christian St. Simon. Magic or Mana gathers here in larger clusters than at normal crossings, for crossroads are not just where two roads meet. They are where two ley lines or lines of power intersect one another, called a “node” by mages. Using a wand made specifically for this purpose, the mage can locate the nearest ley line node.",
        "Practice": "Unveiling",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Covert",
        "Cost": "None",
        "DescrizioneMiddle": "Successes apply to the spell’s duration factors. While the spell is active, the mage can make instant-action Wits + Occult perception rolls to scrutinize the immediate area’s Resonance (within sensory range) for the tell-tale signs of a node, where two or more ley lines meet.",
        "RoteName": "Hoodoo Rote: Find Crossroads",
        "RoteDice": "Dice Pool: Wits + Occult + Prime",
        "RoteDescrizione": "This rote must employ a wand created specifically for this purpose, though it can be used over and over so long as it remains dedicated to finding crossroads. The wand must be made from a tree made by the natural joining of two saplings of different types. It must lie beneath a full moon for three consecutive nights in three consecutive months. When looking for the crossroads, the mage must speak the name of whichever crossroads deity or saint she holds dearest, followed by “show me the way of power” three times before starting out."
    },
    {
        "Titolo": "Magic Shield",
        "Arcana": "Prime ••",
        "DescrizioneAlta": "This spell creates a shield against outside magic. Such a matrix of power is visible to those with Mage Sight, appearing as ghostly white flames limning the form of the caster.",
        "Practice": "Shielding",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Covert",
        "Cost": "Special",
        "DescrizioneMiddle": "The mage gains one point of armor per dot he possesses in the Prime Arcanum. By spending one Mana, the Duration can be made to last for one day.<p>This armor works only against spells that target the mage. It does not shield against magic that is not directly cast at the mage. A bolt of electricity thrown at him is shielded, while damage suffered by falling through a floor rotted through by magic is not. This shield functions against spells such as mind control or soul theft that do not directly inflict damage.</p><p>A magical shield requires one Mana each time it contends with an incoming spell. If the mage does not (or cannot) spend the Mana, the shield provides no armor against the attacking spell, although the shield remains until its Duration expires, so it can be activated later. Among other things, this spell allows a mage to use his magical shield selectively, blocking hostile spells but allowing friendly ones through. Mages often invest their shields with multiple charges, spending Mana during casting so that each charge already stores its own energy.</p>",
        "RoteName": "Silver Ladder Rote: Aegis Magicus",
        "RoteDice": "Dice Pool: Resolve + Occult + Prime",
        "RoteDescrizione": "Ladder willworkers often have to contend with hostile magics of one sort or another, so the order developed this rote to defend against such unwanted influences. All Awakened who are capable of doing so can enjoy the protection of this rote; only fools go without its protection when expecting trouble."
    },
    {
        "Titolo": "Manipulate Contingent Trigger",
        "Arcana": "Fate •• + Prime ••",
        "DescrizioneAlta": "A mage might make use of an Imbued Item for a variety of reasons: a way to carry magic that he doesn’t normally possess or to cheat the limits of how many spells his pattern can tolerate, or perhaps even to give certain limited magical abilities to a Sleeper or Sleepwalker. By way of this spell, however, the contingent triggers with which many such objects are programmed can be temporarily altered, potentially making the invocation of an item’s power difficult — if not impossible — for its possessor.",
        "Practice": "Ruling",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Covert",
        "Cost": "None",
        "DescrizioneMiddle": "This spell, if successfully cast, alters the contingent trigger of an Imbued Item that has one to a trigger of the caster’s choice. This trigger may be extraordinarily difficult to accomplish (“When sprinkled with lunar soil,”) or very easy (“When grasped in hand,”, but the item’s powers cannot be rendered either completely inaccessible or continual. If the item is currently in the possession of an individual unwilling to have its trigger altered, then the spell becomes contested, with the possessor rolling Resolve + Gnosis in opposition to the caster.",
        "RoteName": "Seers of the Throne Rote: Exchange the Secret Key",
        "RoteDice": "Dice Pool: Wits + Occult + Prime",
        "RoteDescrizione": "While it is true that every advantage counts in a conflict, so too does every enemy advantage that a willworker can counter. Thus, Seers of the Throne who pursue the secrets of the Prime and Fate Arcana learn to rob their foes of access to the spells concealed within certain objects of power."
    },
    {
        "Titolo": "Paths of Power",
        "Arcana": "Prime ••",
        "DescrizioneAlta": "This rote allows the mage to see ley lines and to sense the direction of the nearest.",
        "Practice": "Knowing",
        "Action": "Instant",
        "Duration": "Prolonged (1 scene)",
        "Aspect": "Covert",
        "Cost": "None",
        "DescrizioneMiddle": "With a single success on the casting roll, the character sees ley lines as streams of bright greenish-blue power flowing through the earth. If no ley line is within the immediate line of sight of the mage, he can sense the direction of the nearest as a reflexive action.",
        "RoteName": "Tablets of U’mat Rote",
        "RoteDice": "Dice Pool: Wits + Occult + Prime"
    },
    {
        "Titolo": "Primal Flow",
        "Arcana": "Prime ••",
        "DescrizioneAlta": "As the Prime 1 “Supernal Vision” spell, p. 221, except that the mage casts this effect upon another mage, or even a supernatural being such as a ghost or werewolf. If this spell is cast upon a Sleeper, it invokes Disbelief immediately, even if its Duration is less than one scene.",
        "Practice": "Unveiling",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Covert",
        "Cost": "None",
        "DescrizioneMiddle": "If the target is unwilling, he may resist with a reflexive contested Resolve + Gnosis roll.",
        "RoteName": "Guardians of the Veil Rote: Mass Hallucination",
        "RoteDice": "Dice Pool: Manipulation + Occult + Prime",
        "RoteDescrizione": "There are times when it is beneficial to extend one’s mystic perceptions to another. Perhaps a single person can be shown too much and then marginalized as a potentially dangerous crackpot when he tries to convince others of what he has seen. At other times, allowing multiple Sleepers to perceive the same phenomenon can, with a measure of diligent effort, ultimately serve to convince them that nothing supernatural took place, that everything is normal."
    },
    {
        "Titolo": "Shadow Chess",
        "Arcana": "Prime •• + Spirit ••• or •••••",
        "DescrizioneAlta": "Adding Spirit 3 (or 5) to the technique of “Squaring the Circle” (see <b>Mage: The Awakening</b>, p. 223) focuses the duelists’ magical power into animate forms: spirits that fight for the duelists. Some mages prefer “Shadow Chess” to the standard Duel Arcane.",
        "Practice": "Ruling",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Covert (in the Shadow Realm) or vulgar (in the Material Realm)",
        "Cost": "1 Mana",
        "DescrizioneMiddle": "Duelists within the “Shadow Chess” dueling circle prepare a dueling sword and shield, just as if they were fighting the standard Duel Arcane (see <b>Mage: The Awakening</b>, p. 286). Unlike a duel fought using “Squaring the Circle,” participants fight using spirit proxies called Dueling Pawns. The Pawns attack each other and the enemy mage.<p>Each success a mage scores with her dueling sword does not (and cannot) inflict damage to her enemy’s Willpower. Instead, each success temporarily generates a spirit out of the mage’s raw, emotionally charged magical power. This spirit accumulates traits just as if it had been created using the spell “Goetic Evocation” (see <b>Mage: The Awakening</b>, p. 325). The spirit resembles a cross between the mage’s sword, a spirit common to the local Shadow and the mage herself.</p><p>A Dueling Pawn serves the mage that created it faithfully. It cannot survive outside of a dueling circle, and dissipates the moment that the spell ceases. Dueling Pawns created with the Spirit 3 version of the spell are insubstantial to everyone but the duelists. There is, however, a Spirit 5 version of the spell where the Pawns are substantial to everyone inside the dueling circle.</p><p>Each turn, a dueling mage may use her sword to stack additional successes upon an existing Dueling Pawn, create a new Pawn or order her Pawns to attack or defend any other entity within the dueling circle. A mage can direct any number of Dueling Pawns by mental command as an instant action, but cannot create or enhance more Pawns or cast a spell in the same turn.</p><p>Pawns inflict damage on non-spirits using their own dice pools, but to Willpower first, then Health. They may injure other spirits normally. Any Numina they might acquire that would allow them to inflict direct Health damage conforms to the above rule, instead. A shield Arcanum subtracts dice from attacking Pawns’ dice pools as if it was Armor, but unlike a standard duel, mages may move about the local Shadow to “physically” evade attacks, and gain the benefits of Defense where applicable.</p><p>As they are inextricably linked to the sorcerer’s will, Dueling Pawns can provide energy to stave off psychic defeat. As a reflexive action, a mage can divert Willpower damage that he suffered to the Resistance of a Pawn. If this knocks a Pawn’s Resistance to zero, the mage suffers any excess damage and the Pawn is destroyed. Mages cannot sacrifice Pawns to stave off Health injuries however, so deadly Shadow duels often end in a quick, lethal “checkmate.”</p><p>There are “Sanguine” versions of this spell that allow Dueling Pawns to inflict lethal or aggravated damage. These require Prime 3 (to let Pawns inflict lethal damage) and Prime 5 (to let them inflict aggravated damage).</p>"
    },
    {
        "Titolo": "Sigilization",
        "Arcana": "Prime ••",
        "DescrizioneAlta": "This spell imposes upon an image or object (not a living creature) the caster’s own aura, or that of a group of people, such as a cabal of mages. Mages use this spell most often to create a sigil, an image or object that bears their personal mark.",
        "Practice": "Ruling",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Covert",
        "Cost": "None",
        "DescrizioneMiddle": "Successes are applied to the sigil’s Duration:[TABLE1]<p>This magical aura does not extinguish the object’s own resonance, but the aura does make it harder to scrutinize the object: anyone studying the object with Mage Sight must first collect a number of successes equal to this spell’s Potency before the natural resonance can be discerned past the mage’s imposed aura.</p><p>If this spell is cast as a group ritual, the auras of all the mages involved are imposed upon the target object. In this manner, cabals can mark items with their own group sigil.</p><p>With Prime 3, the mage can sigilize his aura upon living creatures, covering up their natural auras with his own. Some mages have been known to do this to “brand” their servants or even their apprentices.</p><p>When cast in combination with the Prime 2 “Transform Aura” effect, this spell can sigilize items with an aura other than the mage’s own. It is not easy counterfeiting other mage’s auras, however. The mage first has to examine the aura to be copied, using Mage Sight and the rules for scrutinizing resonance (see p. 277279 in <b>Mage: The Awakening</b>). If he’s trying to copy a cabal’s sigil, he must do this for every aura involved in the sigil. Once he’s done this and made the fake sigil, his copy can be scrutinized to see if it’s a forgery. Examiners make an extended action Intelligence + Occult roll (10 minutes per roll) with a target number equal to the concealing spell’s Potency.</p>",
        "Tables": [
            {
                "Placeholder": "[TABLE1]",
                "Data": [
                    [
                        "Successes",
                        "Duration"
                    ],
                    [
                        "1 success",
                        "One scene/hour"
                    ],
                    [
                        "2 successes",
                        "Two hours (24 hours with Prime 3)"
                    ],
                    [
                        "3 successes",
                        "12 hours (two days with Prime 3)"
                    ],
                    [
                        "4 successes",
                        "24 hours (One week with Prime 3)"
                    ],
                    [
                        "5 successes",
                        "Two days (One month with PRime 3)"
                    ]
                ]
            }
        ],
        "RoteName": "Mysterium Rote: Seal of Authority",
        "RoteDice": "Dice Pool: Presence + Expression + Prime",
        "RoteDescrizione": "Of all the orders, the Mysterium is perhaps the most obsessed with cataloguing things, including personal property. The Mysterium’s members use this rote to mystically mark things as theirs. Like other orders, they also use this rote in official communiqués, to prove that a letter or item comes from them."
    },
    {
        "Titolo": "Spell Cloaks",
        "Arcana": "Prime ••• + Conjunctional Arcanum",
        "Cost": "1 Mana",
        "DescrizioneAlta": "A mage with Prime 2 can add a cloaking effect to his spells when he casts them, making them invisible to a mage’s Unseen Senses and making it harder for those with Mage Sight to notice the spell. He spends one Mana upon casting (in addition to any other Mana required for the spell).<p>Those with Mage Sight can make reflexive Wits + Occult rolls to notice the spell; otherwise, it remains undetected. Targets suffer a –1 dice penalty to this roll per point of Potency of the cloaked spell. If they have some reason to believe there is a cloaked spell nearby, or are scouring the area for supernatural clues anyway, they can see through the spell cloak by exceeding twice its Potency with their scrutiny successes.</p>"
    },
    {
        "Titolo": "Squaring the Circle",
        "Arcana": "Prime ••",
        "DescrizioneAlta": "The mage creates a mystical space where two mages can engage in the Duel Arcane, a wizard’s war. See 'The Duel Arcane,' p. 286, for rules on using this spell.",
        "Practice": "Ruling",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Covert",
        "Cost": "1 Mana",
        "RoteName": "Guardians of the Veil Rote: Squaring the Circle",
        "RoteDice": "Dice Pool: Resolve + Occult + Prime",
        "RoteDescrizione": "It sometimes happens that the surest path to protecting the Mysteries involves allowing two willworkers to settle their dispute in a duel. Guardians of the Veil use this rote to give such irreconcilable mages the opportunity to settle their accounts in the ancient way. Silver Ladder mages also use this very rote for keeping peace within a Consilium or cabal."
    },
    {
        "Titolo": "Supernal Script",
        "Arcana": "Prime ••",
        "DescrizioneAlta": "The mage extracts minute traces of tass from his Awakened Pattern, shaping the energy into an enchanted pigment invisible to normal senses. To the appropriate Mage Sight, however, the ink glows brightly and distinctly.",
        "Practice": "Ruling",
        "Action": "Instant",
        "Duration": "Lasting",
        "Aspect": "Covert",
        "Cost": "None",
        "DescrizioneMiddle": "Upon casting this spell, the mage exudes invisible ink from any or all of his fingertips for as long as he continues writing. Once he stops work for longer than a minute, the magic runs dry, and he cannot continue without casting the spell again. While the magic lasts, he can mark surfaces using his finger as a stylus, or he may dip a quill or other writing implement into the plasm, depending on preference. The visibility of the text depends on the Arcana used to cast the spell. By default, the pigment glows brightly when viewed with all forms of Mage Sight. However, mages can also make ink that requires Prime-based Mage Sight to see, and may similarly specialize a text with the “color” of another Arcanum by incorporating a dot of that Arcanum into the casting as a conjunctional effect. It is worth noting that a mage cannot see his own Supernal Script without Mage Sight, so unless he intends to write blind, he must cast such a spell on himself first.",
        "RoteName": "Mysterium Rote: The Enlightened Quill",
        "RoteDice": "Dice Pool: Wits + Expression + Prime",
        "RoteDescrizione": "As the preeminent scholars of the Awakened, members of the Mysterium have regular need of bottomless inkwells, especially inkwells that help keep their secrets and mysteries out of sight of meddling Sleepers. The practical uses of this utilitarian spell are nearly limitless, from hiding a grimoire inside a mundane book to leaving mage-only graffiti as a subtle warning."
    },
    {
        "Titolo": "Transform Aura",
        "Arcana": "Prime ••",
        "DescrizioneAlta": "The mage can alter his aura’s nature. While many mages can manipulate the quality of their personal resonance or cloak it entirely, none do so with the finesse of a willworker skilled in Prime. He can alter the nature of his aura, appearing to be a Sleeper (or even an inhuman creature), or he can hide it or even disperse it completely for a time. Though an aura returns to its original state once the spell expires, it can be warded away for quite some time.",
        "Practice": "Veiling",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Covert",
        "Cost": "None",
        "DescrizioneMiddle": "Only by overcoming the Potency of this spell (with a spell such as “Supernal Vision”) can a mage detect the true aura.<p>See “Aura Signifiers,” p. 206, for a list of some aura natures. If this spell is cast conjunctionally with Mind 2, the mage can alter the appearance of his aura’s mental and emotional state, as per the Mind 2 “Alter Aura” spell, p. 207.</p><p>This spell cannot be detected except by a “Supernal Vision” (p. 221) Mage Sight spell with a higher Potency. Even once this spell is detected, the true nature of the mage cannot be perceived until the Transform Aura spell expires or is dispelled.</p>",
        "RoteName": "Guardians of the Veil Rote: Wolf in the Fold",
        "RoteDice": "Dice Pool: Intelligence + Occult + Prime",
        "RoteDescrizione": "Guardians must be able to vanish into the ranks of the mundane when their work calls for anonymity. This rote enables such mages to do just that."
    },
    {
        "Titolo": "Unseen Spy",
        "Arcana": "Prime ••",
        "DescrizioneAlta": "The mage can hide himself from other willworkers’ magical senses when he attempts to scrutinize or dispel their magic.",
        "Practice": "Veiling",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Covert",
        "Cost": "None",
        "DescrizioneMiddle": "Normally, mages cannot sense if their spells are being tampered with, but the “Sense the Threads” ability, p. 222, allows a mage to monitor the status of his spells. With Unseen Spy, a mage can attempt to hide from such a mage’s magical senses. Whenever a spy scrutinizes a vigilant caster’s spells or tries to dispel them, a reflexive Intelligence + Subterfuge roll is made for the spy, contested by the subject’s reflexive Wits + Occult roll. If the Unseen Spy exceeds the caster’s successes, his spying goes undetected.",
        "RoteName": "Free Council Rote: Innocuous Presence",
        "RoteDice": "Dice Pool: Composure + Subterfuge + Prime",
        "RoteDescrizione": "Free Council mages have always liked to study the spells of the Atlantean orders, but those societies usually don’t like upstarts meddling in their business. Hence, councilors resort to this spell to hide their surreptitious observations or even manipulations. Other orders also find use for this spell, such as the Guardians of the Veil in their ongoing efforts to police the practice of magic."
    }
]

const primeThreeData = [
    {
        "Titolo": "Armor of the Soul",
        "Arcana": "Prime •••",
        "DescrizioneAlta": "The mage can weave a barrier around a soul, protecting it from being stolen by a spirit or severed by an adept of Death.",
        "Practice": "Veiling",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Covert",
        "Cost": "None",
        "DescrizioneMiddle": "The target gains one point of armor per dot the caster possesses in the Prime Arcanum against magic or powers that affect the soul. By spending one Mana, the Duration can be made to last for a day. This spell can be combined with a “Magic Shield” spell (p. 222), and the armor points from both are added together against magic that affects the soul.",
        "RoteName": "Guardians of the Veil Rote: Shield the Fragile Link",
        "RoteDice": "Dice Pool: Composure + Occult + Prime",
        "RoteDescrizione": "Some of the most vicious and terrible among the Awakened are known to interpose themselves between Guardians of the Veil and their appointed objectives, and many of these intruders have no compunction about tearing out a soul or two. Guardians use this rote to defend themselves against such awful magics. Adamantine Arrow willworkers have their own version of this rote (Resolve + Occult + Prime) that they use to protect their own souls, even as they defend their allies from harm."
    },
    {
        "Titolo": "Astral Tass Conversion",
        "Arcana": "Prime •••",
        "DescrizioneAlta": "When traveling into Astral Space, every mage carries with her the Mana she can normally call upon in the real world. What she lacks is a store of tass from which she can replenish that supply — and this spell makes that possible.",
        "Practice": "Weaving",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Covert",
        "Cost": "None",
        "DescrizioneMiddle": "The mage casts this spell before she begins meditating to enter Astral Space. Tass containing one point of Mana per success becomes available to her during her astral journey. Equivalent or greater tass must be on the mage’s person in the real world; Prime 4 allows the character to cast this spell at sensory range, and Prime 5 allows this spell to be cast sympathetically. Consuming the tass in astral consumes a similar amount of tass in the material world. Without additional Duration factors, the tass is available only for the character’s first scene in Astral Space.",
        "RoteName": "Silver Ladder Rote: Shining Reserves",
        "RoteDice": "Dice Pool: Intelligence + Occult + Prime",
        "RoteDescrizione": "Never go anywhere without some extra resources to help you pull through the fight. Silver Ladder mages use this rote to ensure that they have plenty of Mana to see them through their astral trips."
    },
    {
        "Titolo": "Celestial Fire",
        "Arcana": "Prime •••",
        "DescrizioneAlta": "The mage manifests celestial fire.",
        "Practice": "Fraying",
        "Action": "Instant and aimed",
        "Duration": "Lasting",
        "Aspect": "Vulgar",
        "Cost": "None",
        "DescrizioneMiddle": "The mage flings a ball of glowing, fiery energy at a target. This projectile is large enough that targets gain their Defense against it. One point of bashing damage is inflicted per success. (Note that “celestial fire” is not the same thing as mundane fire; vampires are not especially susceptible to it and it does not induce Rötschreck.)<p>This spell affects beings or objects in the Twilight state (although the mage needs “Supernal Vision,” p. 221, or some other magical sense that allows him to see Twilight beings to be able to target such creatures, or else he fires blind).</p><p>With Prime 4, damage is lethal and the mage can choose to directly attack a target’s Pattern instead of casting it as an aimed spell (the target resists, subtracting Stamina from the caster’s roll). With Prime 5, one Mana can be spent to make the damage aggravated.</p>",
        "RoteName": "Adamantine Arrow Rote: Bolt of Heaven",
        "RoteDice": "Dice Pool: Dexterity + Occult + Prime",
        "RoteDescrizione": "A brutal and straightforward assault, this rote is used by Arrow mages to strike down their enemies, corporeal or otherwise, to destroy arms and armor, or to breach defenses. Perhaps one of the most efficient weapons in the Awakened arsenal, this rote sees use by members of all orders."
    },
    {
        "Titolo": "Channel Mana",
        "Arcana": "Prime •••",
        "DescrizioneAlta": "The mage can channel Mana from a Hallow without need of an hour-long oblation (see p. 77), or he can take it from tass or an enchanted item.",
        "Practice": "Weaving",
        "Action": "Instant",
        "Duration": "Lasting",
        "Aspect": "Covert",
        "Cost": "None",
        "DescrizioneMiddle": "Each success allows the mage to channel one Mana point from a source to his own Mana pool, up to a maximum of his Prime dots. The mage must touch the source (with Prime 4, he can channel within sensory range, and with Prime 5 he can use Space 2 for sympathetic range).<p>Tass can be drawn upon for its Mana with this spell, meaning that it can potentially serve as a form of currency. The mage must touch the tass to channel from it (with Prime 4, he can channel from it at sensory range). For each point of Mana siphoned out of tass, subtract one point from the tass’ Mana and its Structure. If it is siphoned to zero Mana or Structure, the tass collapses back into the Tapestry. See “Create Tass,” below, for more information.</p><p>An enchanted item that holds its own Mana stores (such as certain imbued items and Artifacts) can also be channeled. The subject must be touched, and one Mana is channeled per success, up to a maximum of the caster’s Prime dots.</p>",
        "RoteName": "Free Council Rote: Feedback",
        "RoteDice": "Dice Pool: Wits + Occult + Prime",
        "RoteDescrizione": "Free Council mages often see use of this rote as nothing more than returning the energy bound up in physical form into the Tapestry, and some point to Einsteinian physics to explain the process. Silver Ladder willworkers view use of this magic (Manipulation + Occult + Prime) as their rightful due, the bounty owed a leader."
    },
    {
        "Titolo": "Controlled Dispellation",
        "Arcana": "Prime •••",
        "DescrizioneAlta": "The mage can unravel an existing spell against only those targets he chooses, letting the spell continue to affect others.",
        "Practice": "Fraying",
        "Action": "Instant and contested; successes are compared to the target spell’s Potency",
        "Duration": "Lasting",
        "Aspect": "Covert",
        "Cost": "None",
        "DescrizioneMiddle": "This spell is like “Dispel Magic,” p. 220, in all its Arcana requirements (unless the caster has Prime 4, in which case he can perform it with “Supernal Dispellation,” p. 229). Controlled Dispellation allows a mage to protect himself or other select individuals from spells while still allowing those spells to take effect. He effectively makes his Pattern (and other targets of his choice) invisible to the spell.<p><i>Example: Arctos is thrown into a dungeon that’s protected by an area-affecting spell designed to befuddle anyone within its confines. He casts Controlled Dispellation to prevent the spell from affecting his own Pattern. Since he has not dispelled the magic — only its effect upon himself — his captor does not necessarily know that he is not affected. Arctos can pretend to be befuddled if it suits his escape plan.</i></p>",
        "RoteName": "Mysterium Rote: Slipping the Bonds",
        "RoteDice": "Dice Pool: Resolve + Occult + Prime",
        "RoteDescrizione": "Mysterium mages might find ancient spells guarding old temples. Rather than dispel them and risk the activation of some arcane trap, they can exempt themselves and others from the effects."
    },
    {
        "Titolo": "Create Tass",
        "Arcana": "Prime •••",
        "DescrizioneAlta": "The mage creates tass, solidified Mana. Tass can look like anything: a rock, a hammer, a table or even a car or a dog. (If it manifests as a seemingly living creature, the tass sits, inanimate, in whatever position it was created until such time as an outside force acts upon it. In other words, the mage could create a tass dog if he really wanted to, and curl it up by his fireplace, but as a lifeless, inanimate thing, it won’t go anywhere or do anything of its own accord.)",
        "Practice": "Weaving",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Covert",
        "Cost": "1 Mana (minimum)",
        "DescrizioneMiddle": "Successes are allocated between the tass’ Size and Durability. At least one Mana must be channeled into the tass. This Mana can be siphoned out of the tass using the “Channel Mana” spell, above.<p>While the object is real, it does not behave like an object made from the proper materials. In other words, a tass hammer is not as good as a metal one. If this spell is cast as an extended action, an extended Dexterity + Crafts roll can also be made for a mage to create tass that behaves much like its representative object would. The target number of success is based on the Size and complexity of the object to be crafted (one success for a simple hammer, three successes for a table, five successes for a cushioned recliner chair.). Tass objects inflict only bashing damage, unless carefully crafted with sharp edges (add one success to the extended Crafts roll’s target number per lethal damage modifier).</p><p>Tass dissolves into the Tapestry at the end of the spell’s Duration.</p>",
        "RoteName": "Free Council Rote: Celestial Sediment",
        "RoteDice": "Dice Pool: Resolve + Craft or Occult + Prime",
        "RoteDescrizione": "Just as matter and energy are different ends on the same spectrum, so too are raw Mana and manifested tass."
    },
    {
        "Titolo": "Disguise Resonance",
        "Arcana": "Prime •••",
        "DescrizioneAlta": "The mage can change the appearance of an area’s resonance, making it appear to possess different qualities or even hide its magical signature, meaning that she could make a powerful Hallow look like a magical dead zone.",
        "Practice": "Veiling",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Covert",
        "Cost": "None",
        "DescrizioneMiddle": "Even spirits, who rely on certain qualities of resonance for feeding, can be fooled by this spell. Each success also masks one level of a Hallow’s power. For example, two successes make a 3-dot Hallow look like a 1-dot Hallow. Or she could make it appear to be a greater place than it is, making a 3dot Hallow appear to be a 5-dot Hallow with two successes.<p>This spell cannot be detected except by a Mage Sight spell with a higher Potency. Even once this spell is detected, the true resonance of the area cannot be perceived until the Disguise Resonance spell expires or is dispelled.</p>",
        "RoteName": "Mysterium Rote: Mask of the Spirits",
        "RoteDice": "Dice Pool: Composure + Subterfuge + Prime",
        "RoteDescrizione": "An ounce of misdirection can be far more effective at times than a dozen trained guardsmen. When a Mysterium mage skilled in the Prime Arcanum wishes to protect a site, she can use this rote to alter its seeming resonance."
    },
    {
        "Titolo": "Disguise Spell",
        "Arcana": "Prime •••",
        "DescrizioneAlta": "As with the Prime 3 “Disguise Resonance” spell, the mage changes the appearance of resonance, but instead of affecting an area, he casts Disguise Spell upon a spell, to make it appear to occult investigators to be a different type of spell than it really is. He cannot change the actual effects of the spell this way, only its resonance and appearance to Mage Sight.",
        "Practice": "Veiling",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Covert",
        "Cost": "1 Mana",
        "DescrizioneMiddle": "A basic success completely disguises the identity, Gnosis rating and mastery of the caster. The caster can create fictional Traits to stand in for these, or he can try to replicate those of another mage. The caster must be familiar with the resonance signature of the mage to be mimicked and might need to make an instant Intelligence + Occult roll to get it right (the Storyteller should roll, keeping the result secret).<p>The mage can disguise one additional quality of the spell’s resonance per success: Arcanum composition (making the spell seem to be the product of a different Arcanum and of a higher or lower rank of his choice), Potency (making the spell seem more or less Potent than it is), Targets (making the spell seem to affect more or less people or area than it does) or Duration (making the spell seem to last longer or shorter than it will).</p><p>This spell cannot be detected except by a Mage Sight spell with a higher Potency. Even once Disguise Spell is detected, the true resonance of the spell cannot be perceived until it expires.</p>",
        "RoteName": "Guardians of the Veil Rote: J’Accuse",
        "RoteDice": "Dice Pool: Intelligence + Investigation + Prime",
        "RoteDescrizione": "The Guardians use this spell to plant “evidence” of another willworker’s misdeeds, making their spells seem to have been cast by him — especially when they affect inappropriate targets or places, such as those declared off-limits by the Consilium. The Guardians are the first to call for immediate reprisal against the lawbreaking spellcaster."
    },
    {
        "Titolo": "Dissolve Tass",
        "Arcana": "Prime •••",
        "DescrizioneAlta": "The mage can dissolve tass back into the Tapestry.",
        "Practice": "Fraying",
        "Action": "Instant",
        "Duration": "Lasting",
        "Aspect": "Covert",
        "Cost": "None",
        "DescrizioneMiddle": "Each success dissolves one point of the tass’ Mana and Structure.",
        "RoteName": "Guardians of the Veil Rote: Unstitch",
        "RoteDice": "Dice Pool: Resolve + Occult + Prime",
        "RoteDescrizione": "Just as a skilled tailor can unravel a garment by pulling out relatively few threads, a Guardian can pick apart the weave of a source of tass and unmake it, releasing its energy back into the Tapestry. Adamantine Arrow mages also use this rote to dissolve the tass of enemy willworkers, robbing them of a precious resource."
    },
    {
        "Titolo": "Energetic Tass",
        "Arcana": "Forces ••• + Prime •••",
        "DescrizioneAlta": "By means of this spell, a mage can craft tass that does not take the shape of a solid material object but, rather, the form of some kind of simple energy (light, heat, electricity or sound). Such tass might be a fire that burns without the need for fuel, or a pattern of shifting lights, crawling arcs of electricity or an otherworldly sound with no discernable source.",
        "Practice": "Weaving",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Covert (if cast in an unbelievable way, such as a green flame that burns harmlessly on the mage’s fingertips, the spell invokes Disbelief in Sleeper witnesses)",
        "Cost": "1 Mana (minimum)",
        "DescrizioneMiddle": "Successes are allocated between Size and Potency. The Potency of the spell determines how complex the phenomenon created can be.[TABLE1]<p>Mana must be channeled into the tass, and can be withdrawn by a mage skilled in the Prime Arcanum, as normal (see the “Create Tass” spell on pp. 224–225 of <b>Mage: The Awakening</b>). This energetic tass can inflict only bashing damage, and then only if in the form of electricity or fire. With Forces 4, and by adding an extra success to the spell’s Potency, however, the tass can be made to inflict lethal damage when in such forms.</p><p>Note that fire created by this spell does not automatically burn flammable items. Such fire must be made to inflict lethal damage, and the mage must will it to burn like a normal fire. The tass will then burn as normal for as long as the mage actively concentrates on making it do so.</p>",
        "Tables": [
            {
                "Placeholder": "[TABLE1]",
                "Data": [
                    [
                        "Successes",
                        "Effect"
                    ],
                    [
                        "1 success",
                        "Fixed white light, ordinary fire, intermittent electrical arcs, monotonous sound"
                    ],
                    [
                        "2 successes",
                        "Colored light or moving white light, strange but natural fire (blue or red), costant, random electrical arcs, modulating sound"
                    ],
                    [
                        "3 successes",
                        "Moving multicolored light, unnatural fire (violet or silver), patterned electrical arcs, multilayered complex sound"
                    ]
                ]
            }
        ],
        "RoteName": "Free Council Rote: Light of Creation",
        "RoteDice": "Dice Pool: Wits + Science + Prime"
    },
    {
        "Titolo": "Ephemeral Enchantment",
        "Arcana": "Prime •••",
        "DescrizioneAlta": "The mage enchants an object, allowing it to strike (if it is a weapon) or protect (if it is armor) against Twilight or Shadow Realm entities.",
        "Practice": "Weaving",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Vulgar",
        "Cost": "None",
        "DescrizioneMiddle": "If the weapon is a gun, all the bullets within its magazine, cylinder and/or chamber are enchanted. To enchant extra magazines or ammunition, additional Target factors must be added to the casting.<p>With Prime 5, the object can be given the power to inflict aggravated damage (one Mana must be spent for the caster or user with each aggravated strike).</p>",
        "RoteName": "Mysterium Rote: Ghost Stick",
        "RoteDice": "Dice Pool: Resolve + Occult + Prime",
        "RoteDescrizione": "Not all threats faced by a Mysterium mage walk in flesh, and so this rote enables such a willworker to defend herself against hostile incorporeal entities."
    },
    {
        "Titolo": "False Signature",
        "Arcana": "Prime ••• + conjunctional Arcanum (e.g., Prime 2 + Forces)",
        "DescrizioneAlta": "The mage combines Prime 2 into her spell to alter the mystical appearance of the spell. The ability to change the signature of a spell, making it appear to originate from a different Arcanum, can give the caster a psychological edge during magical combat. A Forces rote cast with the arcane signature of Time can make an opponent second guess the mage’s abilities and can act as a foil to countermagic (see p. 122 of <b>Mage: The Awakening</b>).",
        "Practice": "Weaving",
        "Action": "Instant",
        "Duration": "Lasting",
        "Aspect": "Covert",
        "Cost": "1 Mana",
        "DescrizioneMiddle": "Mages using Mage Sight are allowed a reflexive Wits + Occult roll to notice the true nature of a spell’s Arcanum. Targets suffer a –1 penalty to this roll per point of Potency of the altered spell.",
        "RoteName": "Adamantine Arrow Rote: Feint",
        "RoteDice": "Dice Pool: Wits + Subterfuge + Prime",
        "RoteDescrizione": "Many mages have been wrong-footed by an Arrow through the use of this spell. Some mages, anticipating a direct attack, see what they expect to see and are surprised when a Forces spell has a more subtle effect. Use of this rote can also conceal order-specific mystical secrets. It’s hard to copy a rote when a mage can’t be sure about the Arcanum involved."
    },
    {
        "Titolo": "Fortify Phantasmal Item",
        "Arcana": "Prime •••",
        "DescrizioneAlta": "Through the casting of this spell, a mage can augment a piece of non-weapon phantasmal equipment.",
        "Practice": "Perfecting",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Covert",
        "Cost": "None",
        "DescrizioneMiddle": "Successes accrued during the casting of this spell add to the equipment bonus granted by non-weapon objects made out of tass. (For weapons crafted through the use of the Prime Arcanum, see the “Phantasmal Weapon” spell on pp. 228–229 of <b>Mage: The Awakening</b>.) Though covert in Aspect, the spell suffers Disbelief if the granted bonus is greater than the base equipment bonus conveyed by the item in question.",
        "RoteName": "Mysterium Rote: Phantasmal Fortification",
        "RoteDice": "Dice Pool: Intelligence + Crafts + Prime",
        "RoteDescrizione": "By means of this rote, a mystagogue can enhance the efficiency of his phantasmal tools, so as to craft better equipment than that available to even the wealthiest and most well-connected of Sleepers."
    },
    {
        "Titolo": "Girding the Champion's Faith",
        "Arcana": "Prime •••",
        "DescrizioneAlta": "The Templar invokes a brilliant armor forged from the light of God to turn back the blows of his most ardent enemies.",
        "Practice": "Shielding",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Method": "Vulgar",
        "Cost": "None",
        "DescrizioneMiddle": "The Templar gains two points of armor for the duration of the rote. Additionally, the Templar, illuminated by the light of God, can withstand even the most heinous perils that his foes would inflict on him: While under the aegis of this spell, the Templar downgrades any aggravated damage he suffers to lethal damage. (This does not affect the upgrade of lethal damage to aggravated if the Templar has already suffered his full Health points in lethal damage, however. See p. 175 of the <b>World of Darkness Rulebook</b> for more information on this.)<p>The foci for this spell are the Baphomet and a cipher. First, the Templar encodes his own name in a cipher of his choosing, thus protecting his identity with the cipher just as he seeks to protect his body with the spell. The Templar also traces the sign of the Baphomet in the air before him as he casts the spell.</p>",
        "RoteDice": "Dice Pool: Wits + Occult + Prime",
        "RoteDescrizione": "The journals of the Templars indicate that this spell was most commonly used in preparation for a physical conflict with otherworldly enemies, when the knights would face hostile “angels” or entities from beyond most realms of perception. Tales of knights in shining armor, whether among actual military accounts, or even folkloric legends such as Beowulf or the Volsung Saga might have involved kennings related to this spell’s function, even though those sources clearly predate the Templar order.<p>While it works fine as a standard armor spell, most mages would likely eschew it as such, since it’s not as effective as the armor rotes of many other Arcana (o vulgar. On the other hand, the protection it offers from aggravated supernatural damage is certainly a boon.</p>"
    },
    {
        "Titolo": "Hallow Bond",
        "Arcana": "Prime •••",
        "DescrizioneAlta": "Through the use of this spell, the mage gains a mystical connection with a Hallow, allowing him to restrict who can harvest Mana from it.",
        "Practice": "Weaving",
        "Action": "Extended (1 success per Hallow dot)",
        "Duration": "Lasting (see below)",
        "Aspect": "Covert",
        "Cost": "1 Mana",
        "DescrizioneMiddle": "The casting of this extended action spell can only begin at the time of day in which the Hallow normally produces its daily allotment of Mana. The mage must be present, within the vicinity of the Hallow’s center (five-yard radius per dot). He needs one success per dot rating of the Hallow.<p>The mage’s aura cannot conflict with the Hallow’s quality of resonance. For example, if his aura is generally angry, he cannot marry a peacefully-aspected Hallow.</p><p>A dramatic failure at any point during the casting means that the land has rejected the mage. He cannot continue the spell and may not try again for at least a month, during which time he suffers a –2 dice penalty on all spellcasting attempts to channel Mana from that Hallow. Animistic mages believe that the Hallow has a consciousness and it has denied the supplicant; more scientific-minded mages believe that the mage is allergic to something in the Hallow’s mystical composition.</p><p>If the spell succeeds, its effects are lasting — so long as the mage properly maintains a relationship with the Hallow. He must perform at least one oblation per month per dot rating of the Hallow (i.e., a 3-dot Hallow needs three oblations per month), based not on his Path’s preferences but on those of the Hallow, determined by its resonance. A resonance of pain or fear might require oblations featuring torture, maiming or death. Tranquility resonance might need meditative oblations or the tending of a garden within the Hallow’s vicinity. Anxiety might be best served through rushed ceremonies and rituals, taut with emotional conflict. The mage — called the spouse — knows which oblations will appease the Hallow.</p><p>If the mage misses one of these oblations, the spell’s effects are dampened temporarily, until he can perform the rite. If more than three months pass without an oblation on the mage’s part, the spell expires. That mage cannot attempt to marry the same Hallow again for at least the next three months thereafter.</p><p>So long as the spell lasts, the mage can choose who can harvest Mana from the Hallow. Mages without permission cannot forcibly harvest the Hallow, except masters with a Prime 5 version of the “Channel Mana” spell, and, even then, they suffer a dice penalty equal to the spouse’s Resolve.</p><p>With Prime 4, this spell can be cast upon a willing target, bonding her to the Hallow instead of the mage.</p><p>Only one mage can be bonded to the same Hallow at the same time. For another to bond to it, the current spouse must either cancel his spell or die — or else his Hallow Bond spell can be dispelled.</p>",
        "RoteName": "Mysterium Rote: Marrying the Land",
        "RoteDice": "Dice Pool: Composure + Occult + Prime",
        "RoteDescrizione": "Of all the orders, the Mysterium most commonly maintains this ancient practice from a time when people lived more closely with the land."
    },
    {
        "Titolo": "Imbue Animal",
        "Arcana": "Prime ••• + Life •••",
        "DescrizioneAlta": "The Banisher can imbue a living creature with one or more spells, creating an animal that functions as an imbued item.",
        "Practice": "Weaving",
        "Action": "Extended",
        "Duration": "Special",
        "Aspect": "Vulgar",
        "Cost": "1 Mana per spell",
        "DescrizioneMiddle": "This spell functions as Imbue Item (p. 225 of <b>Mage: The Awakening</b>), save that this spell works on a living creature. The mage cannot affect human beings with this spell, though it’s possible that an archmage might have this ability. Unlike Imbue Item, this spell is always vulgar, but all other particulars of that spell apply here. In addition, any use of this spell causes a check to avoid degeneration at Wisdom 5 or greater.<p>More information on imbued animals can be found on p. 75.</p>",
        "RoteName": "Banisher Rote: Genesis 1:26",
        "RoteDice": "Dice Pool: Manipulation + Animal Ken + Prime",
        "RoteDescrizione": "“And God said, Let us make man in our image, after our likeness: and let them have dominion over the fish of the sea, and over the fowl of the air, and over the cattle, and over all the earth, and over every creeping thing that creepeth upon the earth.” The Banisher who created this rote quoted this passage whenever imbuing an animal with a spell. Though he is long dead, he inscribed the rote on numerous grimoires, marked with sigils intended to prevent anyone but Banishers from reading them."
    },
    {
        "Titolo": "Imbue Item",
        "Arcana": "Prime •••",
        "DescrizioneAlta": "The mage can imbue an item with magical powers.",
        "Practice": "Weaving",
        "Action": "Extended",
        "Aspect": "Special",
        "Cost": "1 Mana per spell",
        "DescrizioneMiddle": "Imbued items are granted one or more magical powers. In effect, whoever wields the imbued item gains the benefits of its spells, even though he did not necessarily cast them. See the “Imbued Item” Merit, p. 84.<p>The target number is equal to the successes required for all the spells imbued into the item. The mage must be able to cast each spell he wants to imbue, and each spell’s target number is determined as if he were casting that spell as an extended action. The target numbers of all spells to be imbued are combined to find the successes needed for the Imbue Item casting.</p><p>Each spell remains imbued for as long as its Duration. Most imbued items are made with spells of indefinite Duration, and the caster usually relinquishes such an item from his control so it no longer applies to his maximum spell limit. Doing so costs one Willpower dot. See “Relinquishing Control of Spells,” p. 220. One Mana point must be spent per spell imbued, in addition to any Mana normally required for the casting of each spell.</p><p>The caster decides whether each spell imbued into the item is persistent (always active) or contingent (triggered by a word, gesture or condition). Even contingent spells imbued into an item must be made indefinite, or they disappear from the item when their Duration expires. The caster can give the item the capacity to hold Mana points. Doing so requires three successes and the item has a capacity of 10 points plus one per spell imbued. Mana must be spent for the caster to actually fill the capacity of points, or else someone with the “Channel Mana” spell (p. 224) can do so later. The aspect of casting (covert or vulgar) depends on the spells imbued into the item.</p><p>If the item is imbued with vulgar spells, it risks a Paradox whenever these powers are used. The Paradox dice pool is based on the Gnosis of the imbued item’s creator at the time of the item’s creation (if his Gnosis later rises, the item’s Paradox dice pool does not also rise).<p>",
        "RoteName": "Mysterium Rote: Forge of Power",
        "RoteDice": "Dice Pool: Composure + Crafts + Prime",
        "RoteDescrizione": "Just as Mysterium mages seek out relics long lost, they create new objects of power, applying ancient arts to modern artifice. Silver Ladder willworkers use the rote as well in the crafting of their own enchanted items."
    },
    {
        "Titolo": "Imbue Mana",
        "Arcana": "Prime •••",
        "DescrizioneAlta": "The mage can imbue a living creature with Mana.",
        "Practice": "Weaving",
        "Action": "Instant",
        "Duration": "Lasting",
        "Aspect": "Covert",
        "Cost": "None",
        "DescrizioneMiddle": "The mage gives a living creature one of his Mana points per success. The caster must touch the target during casting (with Prime 4, he can affect the subject at sensory range). If combined with “Channel Mana,” p. 224, or “Siphon Mana,” p. 231, the mage can take Mana from one source (other than himself) to give to another.<p>Channeling Mana into a living being usually does nothing to it (save perhaps for a feeling of being energetic or edgy) unless the subject is Awakened, in which case she adds the Mana to her total.</p><p>If the number of points of Mana invested in a Sleeper’s Pattern exceeds her Size, the subject suffers one Health wound of bashing damage per point of Mana by which her Size is exceeded, as the celestial fire literally tears her Pattern apart like an over-inflated balloon rupturing. In this case, the target can resist the spell by subtracting her Stamina from the caster’s roll.</p>",
        "RoteName": "Adamantine Arrow Rote: Succor",
        "RoteDice": "Dice Pool: Presence + Persuasion + Prime",
        "RoteDescrizione": "Just like tossing a new clip of ammunition to a buddy who’s run out, Adamantine Arrow mages use this rote to make sure that everyone has sufficient resources to remain in a fight."
    },
    {
        "Titolo": "Instill Exclusiveness",
        "Arcana": "Prime •••",
        "DescrizioneAlta": "The mage weaves an enchantment into an item preventing anyone but its present owner from drawing on its imbued powers.",
        "Practice": "Weaving",
        "Action": "Extended",
        "Duration": "Prolonged (this spell uses the advanced prolongation factors)",
        "Aspect": "Covert",
        "Cost": "3 Mana",
        "DescrizioneMiddle": "Unauthorized users may still be targeted by the item’s other defensive enchantments, if any.<p>The mage may, at the time of casting, exempt any of the item’s magical properties from the purview of this spell. An item’s enhancements are often exempted; exclusiveness would otherwise make the item less durable when handled by enemies intent on destroying it.</p><p>A spell that has not yet been cast on the item at the time Instill Exclusiveness is woven into it is automatically exempted from its effect.</p>",
        "RoteName": "Guardians of the Veil Rote: Rights of Property",
        "RoteDice": "Dice Pool: Intelligence + Occult + Mind",
        "RoteDescrizione": "Guardians rankle at the thought of grubby outsider hands making profitable use of their precious Enchanted Items."
    },
    {
        "Titolo": "Item Failsafe",
        "Arcana": "Prime •••",
        "DescrizioneAlta": "The magician enchants an Imbued Item so that its spells are inaccessible to unauthorized users.",
        "Practice": "Weaving",
        "Action": "Extended",
        "Duration": "Prolonged (this spell uses the advanced prolongation factors)",
        "Aspect": "Covert",
        "Cost": "None",
        "DescrizioneMiddle": "One success is added to the target number per imbued spell that is to be protected from unauthorized users.",
        "RoteName": "Guardians of the Veil Rote: The Loyal Object",
        "RoteDice": "Dice Pool: Intelligence + Crafts + Prime",
        "RoteDescrizione": "Though less punitive than other protective enchantments, Guardians prefer the simplicity inherent in simply forbidding interlopers to make use of their Imbued Items."
    },
    {
        "Titolo": "Last Testament",
        "Arcana": "Prime •••",
        "DescrizioneAlta": "The mage enchants an item so that its owner may designate a rightful heir in the event of his death or long-term disappearance. Only that individual may then attune to the device. (See “Authorization,” p. 139.)",
        "Practice": "Weaving",
        "Action": "Extended",
        "Duration": "Prolonged (this spell uses the advanced prolongation factors)",
        "Aspect": "Covert",
        "Cost": "None",
        "DescrizioneMiddle": "A rightful owner of this item may designate a number of heirs equal to the spell’s Potency. The owner names them in order, so that if the first heir fails to take possession of the item after a specified period, the next in line is then cleared to step up and attune to the item.<p>If all specified heirs are dead when the owner dies, the item becomes generally available. As with any item bearing an authorization-based spell, any mage may now attune to it.</p><p>Owners can alter their list of heirs at any time. Owners also may specify an interval of neglect, after which their heirs may claim the item as theirs. If an entire interval passes during which the owner has not used or handled the item, the first-named heir becomes the item’s designated owner.</p><p>Mages inheriting an item in this way will likely wish to specify their own new heirs, rather than allowing the item to pass to the previous owner’s second-named beneficiary.</p>",
        "RoteName": "Silver Ladder Rote: Orderly Succession",
        "RoteDice": "Dice Pool: Intelligence + Crafts + Prime",
        "RoteDescrizione": "Certain items belong to Silver Ladder hierarchy itself, as a perquisite of particular offices. The Orderly Succession rote guarantees that these items are passed to the new holders of these positions, and are not subsumed into officers’ estates."
    },
    {
        "Titolo": "Ley Lines",
        "Arcana": "Prime •••",
        "DescrizioneAlta": "This spell harnesses the subtle power of the Earth’s ley lines, enabling a willworker to generate perpetual free energy for any number of purposes. Ley energies course unseen and unnoticed by most over the contours of the planet. It is said that the ancients realigned and manipulated such sources of perpetual power.",
        "Practice": "Weaving",
        "Action": "Extended",
        "Duration": "Lasting",
        "Aspect": "Covert",
        "Cost": "None",
        "DescrizioneMiddle": "This spell bestows upon the mage a source of perpetual energy, a node from which ley energy wells up. The mage determines the form of the node, whether it is the source of a pure spring, the center of a tranquil valley or a mountain peak, for example.<p>The effect is lasting — the energy of the earth replenishes itself, unless something later disrupts the ley lines. Such disruption can be done by altering the architecture or geography of the node, perhaps by simply damming its spring or flooding its valley.</p><p>The target number depends on how much power the node generates per day. One success makes enough energy per day to power a small room, such as a home office (for its usual day-to-day energy needs in mild temperatures). Three successes can power a small home. Five can power a large home or mansion. Seven successes can power an office building. The power is generated from a single node, so these buildings must have a central hook-up that is placed within the node. For example, a circuit box can be placed in the node, powering anything that leads to it, such as an electrical socket in an upstairs bedroom.</p><p>This spell does have a couple of drawbacks. First, the mage can create a ley-energy node only at a point at which energies actually converge. Such spots occur at the Storyteller’s discretion, but it is said that ancient cultures knew these places. Following old Roman roads or exploring the ruins of ancient villages might lead a mage to such a nexus. Most of the best and most accessible of these junctures have already been claimed. Second, this magic can be dispelled just as any other, causing all that is being powered by the subtle energies to cease functioning until the spell is cast anew (or an alternate power source is arranged).</p>",
        "RoteName": "Free Council Rote: Atlantean Generator",
        "RoteDice": "Dice Pool: Intelligence + Occult or Science + Prime",
        "RoteDescrizione": "While the Free Council as a whole seeks to advance the practice of magic, the old ways are still sometimes best. Using ancient techniques based on geography, sacred mathematics and other such disciplines, the willworker employs this rote to provide an essentially limitless source of free energy. Mysterium mages use similar magics to power sanctums and esoteric devices."
    },
    {
        "Titolo": "Ley Shift",
        "Arcana": "Prime •••",
        "DescrizioneAlta": "The mage can shift the geographical position of a ley line in a direction or shape of her choosing. While this spell moves the line’s direction of flow, the spell cannot sever or destroy the ley line, or reverse its direction of flow (see “Ley Flow,” below).",
        "Practice": "Weaving",
        "Action": "Extended (one success per five yards)",
        "Duration": "Prolonged (one scene)",
        "Method": "Covert",
        "Cost": "1 Mana (to anchor)",
        "DescrizioneMiddle": "Shifting a ley line is a three-stage process. First, the mage must mystically “grab” the conduit while reaching out into the air from the appropriate direction. (She needs some form of Mage Sight to see it.) If the mage wants to move it laterally, she reaches straight out so that pulling into her body moves the line in the desired direction. If she wants to pull the line closer to the surface, she reaches down toward her feet. Similarly, pulling the line down requires reaching up to the sky. Sleepers would perceive this as extremely odd behavior, but nothing that causes Disbelief.<p>Once she has a grip on the line, she next pulls on the line as if dragging a large steel cable. Onlookers see the mage straining against an invisible resistance. She can drag the line five yards for each success. The spell’s target number is thus determined by the total distance the mage wants to move the line.<p>As soon as the mage reaches the desired distance, she must finally anchor the line into its new position by investing one Mana to “peg” the line down. Imagine a tent spike that keeps a rope in place, and you have an idea what the mystical peg does to the conduit.</p><p>Once the spell expires, the ley line snaps back into its natural shape.</p>",
        "RoteName": "Free Council Rote: Urban Renewal",
        "RoteDice": "Dice Pool: Strength + Occult + Prime",
        "RoteDescrizione": "The Free Council uses this spell in their urban renewal projects, redirecting lines to flow through the buildings, parks or roads they think can best benefit from the line’s resonance. Alternatively, they redirect the line to remove its influence on a place, such as when its resonance is ill-aspected."
    },
    {
        "Titolo": "Magic Wall",
        "Arcana": "Prime •••",
        "DescrizioneAlta": "The mage can now cast a Magic Shield on another person.",
        "Practice": "Shielding",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Covert",
        "Cost": "Special",
        "DescrizioneMiddle": "See “Magic Shield,” p. 222, for the effects. If the target does not have his own Mana, the caster must incorporate Mana during casting to allow it a number of charges. The subject can choose when a charge is activated.",
        "RoteName": "Guardians of the Veil Rote: Invisible Boon",
        "RoteDice": "Dice Pool: Manipulation + Occult + Prime",
        "RoteDescrizione": "Guardians sometimes cast this rote on Sleepers to keep them safe from spells that might otherwise alert mundane folk to the working of magic."
    },
    {
        "Titolo": "Mana Leech",
        "Arcana": "Prime •••",
        "DescrizioneAlta": "The mage curses an item so that it drains its Awakened owner of Mana.",
        "Practice": "Weaving",
        "Action": "Extended",
        "Duration": "Prolonged (this spell uses the advanced prolongation factors)",
        "Aspect": "Covert",
        "Cost": "1 Mana",
        "DescrizioneMiddle": "Whenever a mage wearing or carrying the item casts a spell with a Mana cost, that cost increases by one. This item requires 20 successes to create.",
        "RoteName": "Guardians of the Veil: Inescapable Taxation",
        "RoteDice": "Dice Pool: Intelligence + Crafts + Prime",
        "RoteDescrizione": "Guardians of the Veil punish overly flamboyant magicians with gifts that make their magic harder to work."
    },
    {
        "Titolo": "Marked Power",
        "Arcana": "Prime ••• + Space ••",
        "DescrizioneAlta": "The art of intelligence-gathering includes a variety of ways to mark your target to allow for easier surveillance. This particular method of marking a mage targets their greatest strength and weakness, Mana.",
        "Practice": "Weaving",
        "Action": "Instant",
        "Duration": "Lasting",
        "Aspect": "Covert",
        "Cost": "1 Mana",
        "DescrizioneMiddle": "This spell targets tass that forms naturally around a Hallow. With a single success on the casting roll, the mage implants a magical signature into the tass. This signature lies dormant and cannot be detected by any means until the tass is broken down to be used. Once this occurs, the signature activates and functions as an intimate sympathetic connection to the mage who used the tass to refill her Mana pool. The sympathetic connection persists as long as even one dot of Mana gained from the marked tass remains in the mage’s pool.<p>A perceptive mage using Supernal Vision (see <b>Mage: The Awakening</b>, p. 221) may notice something odd about someone who has absorbed marked Mana. Suspicious mages may roll Resolve + Composure – the Potency of the “Marked Power” casting. With a success, the mage realizes that the Mana of person he is observing has been tampered with in some way, but additional study will be required to reveal exactly how.</p>",
        "RoteName": "Banisher Rote: Tag",
        "RoteDice": "Dice Pool: Resolve + Occult + Prime",
        "RoteDescrizione": "A cabal in Philadelphia brought a strange story to the notice of the local Consilium, shortly before the disappearance of the entire cabal. The mages had noticed an unusual quality about the Mana stored in their Patterns. Further investigation by the Consilium eventually uncovered evidence that the cabal had been attacked by a cell of Banishers calling themselves Children of Liberty.<p>When one of the Children of Liberty was apprehended, magically reinforced questioning revealed the Banishers had used this spell (in conjunction with more mundane forms of intelligence-gathering) to spy on the cabal and track the members’ movements. Appalled by this information, the Hierarch of Philadelphia ordered a full-scale seek-and-destroy attack on the remaining Children of Liberty.</p><p>To date, however, no further Banishers have been found in the city.</p>"
    },
    {
        "Titolo": "Mystic Shackle",
        "Arcana": "Prime •••",
        "DescrizioneAlta": "The mage curses an item so that it penalizes the use of one or more Arcana.",
        "Practice": "Weaving",
        "Action": "Extended",
        "Duration": "Prolonged (this spell uses the advanced prolongation factors)",
        "Aspect": "Covert",
        "Cost": "Variable; see below",
        "DescrizioneMiddle": "For every five successes added to the target number of the spell, the mage specifies one Arcanum. Any mage casting a spell from any of the specified Arcana while wearing or carrying the cursed item suffers a dice penalty equal to the Mana spent during its creation.",
        "RoteName": "Silver Ladder Rote: The Weighty Anchor",
        "RoteDice": "Dice Pool: Intelligence + Crafts + Prime",
        "RoteDescrizione": "Followers of the Silver Ladder who commit offenses against their leaders are sometimes, as a punishment short of expulsion or death, fitted temporarily with Weighty Anchors. Few who undergo this indignity are foolish enough to repeat their transgressions."
    },
    {
        "Titolo": "Path in the Skin",
        "Arcana": "Prime ••• + Life •• or •••",
        "DescrizioneAlta": "Mages use this spell to imbue their bodies with the properties of a magical tool. See “Body Art, Tattoos and Scarification,” p. 100, for the effects of the tool. The caster requires Life 2 to use the spell on herself and Life 3 to use it on another person.",
        "Practice": "Weaving",
        "Action": "Extended",
        "Duration": "Prolonged",
        "Aspect": "Covert",
        "Cost": "None",
        "DescrizioneMiddle": "Mages with Prime 4 normally cast this as a permanent spell (using the advanced prolongation factors), but this is not strictly necessary. Unlike most permanent spells, the recipient may cancel the spell at will, as long as the tool to be imbued is one of her own. When the spell is cast upon an unwilling recipient, the target contests with a roll of Resolve + Gnosis.<p>Note that this spell may be used to inscribe a sorcerer’s magical tool on someone else’s body. Thus, a mage may use her apprentice, companion or animal familiar as a “pentacle” or “sword.” The recipient must then be no more than a yard away or at touch range (these are not the same thing, as some mages may use Space to touch their tool-bearer at a distance) from the spellcaster for him to be able to use his tool. The mage intending to use the embodied tool must dedicate it before the spell is cast.</p>",
        "RoteName": "Free Council Rote: Tribal Art",
        "RoteDice": "Dice Pool: Dexterity + Crafts + Prime",
        "RoteDescrizione": "Free Council mages value magic centered in Fallen culture. They use this rote to proclaim this by choosing traditional tribal body art to hone their magical wills. Some Libertines use body art from the “new tribes” of alternative subcultures and even plastic surgery. All orders have equivalents that emphasize imbuing a body with distinctly Atlantean symbols, though what is purely Atlantean is, of course, a matter of debate."
    },
    {
        "Titolo": "Payment in Power",
        "Arcana": "Prime •••",
        "DescrizioneAlta": "This spell alters the usual cost of relinquishing a finishing spell. Instead of sacrificing a Willpower dot, the willworker pays Mana, spent over a period of days. Mana spent for this purpose is in addition to any other Mana costs required to make the item.",
        "Practice": "Weaving",
        "Action": "Instant",
        "Duration": "Lasting",
        "Aspect": "Covert",
        "Cost": "20 Mana; see below",
        "DescrizioneMiddle": "The high Mana cost of this spell is exacted over a period of days. The mage spends 1 Mana at the time of casting. Twenty-four hours later, the willworker loses another point of Mana. The process repeats itself for 20 days, until 20 points of Mana have been spent. Mana losses occur whether the mage likes it or not. If at the end of any interval the willworker has no Mana left, all spells woven into the item (including those cast by collaborators) are dispelled. Worse, Mana continues to drain from the mage at a rate of one per day until 20 points have been harvested, even to the point of scourging the mage against his will to get them.",
        "RoteName": "Free Council Rote: Conservation of the Will",
        "RoteDice": "Dice Pool: Intelligence + Occult + Prime",
        "RoteDescrizione": "Free Council doctrine teaches that it’s better to spend power, which is rare but recoverable, than to carve off a bleeding chunk of your selfhood just to create an item."
    },
    {
        "Titolo": "Phantasm",
        "Arcana": "Prime •••",
        "DescrizioneAlta": "This spell creates an inanimate phantasm, a construct woven of Mana threads. Such a creation possesses a degree of substance and appears to be a normal object of its type to Sleeping eyes, but is in reality a solidified illusion. The mage can create books, knives, chairs, stones or any other lifeless, inanimate objects she can think of. These objects do not and cannot possess qualities such as conductivity, magnetism or the like. Phantasmal wood does not float in water and it does not fuel a fire (though it can still be destroyed by such, it does not sustain the flame on its own).",
        "Practice": "Weaving",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Vulgar",
        "Cost": "1 Mana",
        "DescrizioneMiddle": "The spell creates an object of Size 5 or less. The phantasm has one point of Durability. It is fragile and breaks easily. The mage cannot create functional tools, weapons or armor at this level.<p>To create a convincing illusion, a reflexive Intelligence + appropriate Skill roll is required, and excess successes on the casting add one die each to this roll. To simulate an animal, use Animal Ken. For an object, use Crafts. For a person, use Medicine or perhaps Empathy.</p><p>At the Storyteller’s discretion, magically “dead” areas may not contain enough ambient Mana to fabricate such an object without the expenditure of a point of Mana, but this should be the case only rarely.</p>",
        "RoteName": "Silver Ladder Rote: Loom of the Gods",
        "RoteDice": "Dice Pool: Intelligence + Craft + Prime",
        "RoteDescrizione": "When a Ladder mage wishes to impress others with a collection of rare antiques or artwork behind glass, she can craft them from the Prima Materia itself."
    },
    {
        "Titolo": "Price of Hubris",
        "Arcana": "Prime ••• + any one of the attacking spell’s Arcana at •",
        "DescrizioneAlta": "For many mages, the casting of a vulgar spell is an act of arrogance. Even with full knowledge that the Fallen World rejects such overt displays of power, the mage who routinely employs such spells is akin to a brawler who relies only on his strength. In either case, the person’s arrogance becomes the root of his defeat.",
        "Practice": "Shielding",
        "Action": "Instant and contested; successes are compared to the target spell’s Potency",
        "Duration": "Lasting",
        "Aspect": "Covert",
        "Cost": "1 Mana",
        "DescrizioneMiddle": "This spell follows the same rules as Counterspell (see p. 123 of <b>Mage: The Awakening</b>) except that if the Potency of the “Price of Hubris” casting is equal to, or greater than, the potency of the targeted spell, the hostile spell is redirected to its source. Any redirected spell becomes an Aimed spell, requiring a single success on a Wits + Occult + Prime roll to hit the target (normal modifiers apply). The effects of a redirected spell are equal to successes rolled on the original casting of that spell.<p>The mage must be the direct target of a hostile spell to redirect that spell. Spells that include the mage in an area of effect, or that have an indirect effect on the mage cannot be redirected.</p>",
        "RoteName": "Banisher Rote: Simple Simon’s Glee",
        "RoteDice": "Dice Pool: Composure + Occult + Prime",
        "RoteDescrizione": "A Banisher by the name of Simon Barnes concocted this rote to turn the powers of the “demons” he fought back on them. Known as “Simple” Simon to the media, who thought him a serial killer, Simon was eventually shot and killed by city police. Shortly after his death, Simon’s body disappeared from the morgue and his notes, a sheaf of loose-leaf mad scribblings, vanished from the police evidence room."
    },
    {
        "Titolo": "Reset Platonic Exemplar",
        "Arcana": "Prime •••",
        "DescrizioneAlta": "The mage removes all spells woven into a Platonic exemplar, freeing up room for replacement magics.",
        "Practice": "Fraying",
        "Action": "Extended",
        "Duration": "Lasting",
        "Aspect": "Covert",
        "Cost": "1 Mana",
        "DescrizioneMiddle": "“Reset Platonic Exemplar” usually removes all spells from an item. On a dramatic success, the mage can choose which spells stay and which ones go. The mage must touch the item during casting.<p>Note that the normal rules preventing the permanent dispellation of Enchanted Items do not apply to Platonic exemplars, which by definition are vessels used to contain an ever-changing roster of spells.</p>",
        "RoteName": "Mysterium Rote: Retune the Ineffable Essence",
        "RoteDice": "Dice Pool: Intelligence + Occult + Prime",
        "RoteDescrizione": "Though Platonic exemplars arouse cupiditen the most ascetic of mages, none covet these items with a hotter fever than the members of the Mysterium. Many learn this rote in the mere anticipation of one day acquiring such a treasure."
    },
    {
        "Titolo": "Subvert Ownership",
        "Arcana": "Prime •••",
        "DescrizioneAlta": "The mage may specify a new rightful owner, set of authorized users or designated heir (per the “Last Testament” spell) for an Enchanted Item.",
        "Practice": "Fraying",
        "Action": "Instant and contested; successes are compared to target spell’s Potency",
        "Duration": "Lasting",
        "Aspect": "Covert",
        "Cost": "1 Mana",
        "DescrizioneMiddle": "A single casting of Subvert Ownership targets any and all spells woven into an item that depend on such designations.",
        "RoteName": "Mysterium Rote: Changing Hands",
        "RoteDice": "Dice Pool: Wits + Subterfuge + Prime",
        "RoteDescrizione": "The Mysterium’s shadier members are loath to allow mere technicalities of ownership stand in the way of a prestigious acquisition."
    },
    {
        "Titolo": "Summon Supernal Being",
        "Arcana": "Any Arcanum •••",
        "Practice": "Weaving",
        "Action": "Extended",
        "Duration": "Special",
        "Aspect": "Covert",
        "Cost": "10 Mana",
        "DescrizioneMiddle": "The mage must fashion a summoning circle, usually sing runes and High Speech glyphs appropriate not only to the Arcanum he is using, but to the intended purpose of the summoning. The process and form of the ritual is different for each realm, and is discussed in detail under the appropriate realm sections. <p>Before beginning the ritual, the player must decide upon how many successes the mage will attempt to accrue. The formula is as follows: </p>The mage needs 10 successes to open the gateway. Every additional success has one of the following effects: <ul><li>Extend the duration in which the being can remain in the Fallen World without suffering damage. Each success adds 30 minutes. If the mage allocates no successes to this duration, the being begins taking damage immediately.</li><li>Protect the gateway from Abyssal intrusion. Every success thus allocated allows the player to make one additional roll without the Storyteller checking for the Abyss creeping into the gateway. </li></ul>In addition, the following factors add to the necessary total: </ul><li>Add one success per Sleeper present. In addition, a Sleeper’s presence renders the spell improbable. </li><li>Add one success per mage of a different Path present. </li><li>Add one success if the summoning is taking place in a Demesne oriented to a realm other than the one in question. </li><li>Add one success if the mage has caused a Paradox (even if he contained it) within the last week.</li><li>Add one success if the mage is AbyssMarked (see p. 71). </li><li>Subtract one success from the target if the summoning is taking place in a Demesne oriented to the realm in question. </li><li>Subtract successes if the character incorporates items and conditions into the summoning that correspond to the realm in question. The sections on the different realms later in this chapter list sample correspondences, but the character must still weave these correspondences into the spell gracefully enough to ease the casting. The Storyteller can either adjudicate the number of successes shaved off the total based on the player’s descriptions of his character’s actions, or the player can roll Intelligence + Occult. Every two successes on this roll removes one success from the target number of the summoning spell. </li></ul> <p>Once the player has determined the target number of successes and how they will be allocated, he can start rolling. The amount of time required for each roll is, of course, determined by the mage’s Gnosis rating (see p. 76 of <b>Mage: The Awakening</b>). The player is not limited in the number of rolls he can make, but fatigue will eventually begin to set in. A greater danger, though, is Abyssal intrusion. </p>The player can make a number of rolls equal to the character’s Resolve + Composure + any successes allocated to avoid Abyssal intrusion. After that point, the Storyteller rolls the character’s unmodified Gnosis for every roll that the character makes. If the Storyteller accrues a number of successes equal to the mage’s Gnosis + [ruling Arcanum used to cast the spell], the Abyss breaks into the gateway, and the creature that arrives is not a Supernal being but an Abyssal one. The Storyteller should by no means reveal how many successes she gets on the intrusion rolls. The Abyssal being that arrives might impersonate a Supernal one, at least for a while. More information on Abyssal summoning and the creatures resulting from them can be found in Chapter Three. <p><b>Example:</b> Whim, an Acanthus of the Mysterium, decides to call down a recondite being from Arcadia as part of her ongoing quest to unravel the nature of the Fallen World. She is a Master of Fate, so she is more than qualified to cast the spell. Her Gnosis is 3, so every roll requires one hour. She requires 14 successes to start — 10 (base) + 3 (three of her cabal mates are present) + 1 (she caused a Paradox within the last week). Her player decides to add in three more successes. Two are allocated two duration (if she is successful, the being will be able to survive in the Fallen World for an hour without taking damage) and one is allocated to stave off Abyssal intrusion. Her Resolve + Composure is 5, so with the success she has allocated, her player can make six rolls before Abyssal intrusion becomes a problem. </p><p>If she fails to accumulate 17 successes in six rolls (which is a distinct possibility), the Storyteller rolls Whim’s Gnosis rating for every roll beginning with the seventh. If the Storyteller accumulates eight successes (Whim’s Gnosis + Fate) before her player finishes accumulating the 17 needed for the spell, an Abyssal entity intrudes. </p><p><b>Concluding the spell:</b> Once the Supernal being has returned “home,” the mage needs to channel the magic he used to work the summoning into something else. Leaving the spell “open” is dangerous, because if he does so, sooner or later the Abyss will seep in. The spell can be closed easily enough — the mage simply needs to choose what spell to cast. The player makes the appropriate roll, the spell occurs, and the gateway closes. </p><p>If the spell rolls fails, though, or if the Supernal being dies from exposure to the Fallen World or is deliberately destroyed outside the summoning circle, the gateway collapses. This creates a temporary portal to the Abyss. Every mage within 50’ of this portal suffers a number of Health points of aggravated damage equal to the summoner’s Gnosis. In addition, the portal remains open for a number of days equal to the summoner’s Gnosis. During that time, the mage needs to watch the portal carefully, because Abyssal creatures can and do escape into the Fallen World. </p>"
    },
    {
        "Titolo": "Target Interloper",
        "Arcana": "Prime •••",
        "DescrizioneAlta": "The willworker adds a defensive mechanism to anitem, allowing another spell, which must also be cast into the item, to target any unauthorized person touching the device. Typically, the spell must be capable of targeting an individual, without a complex set of options. However, if a ghost has been bound to the item, that entity can make any necessary decisions when the defense mechanism activates.",
        "Practice": "Weaving",
        "Action": "Extended",
        "Duration": "Prolonged (this spell uses the advanced prolongation factors)",
        "Aspect": "Covert",
        "Cost": "1 Mana",
        "DescrizioneMiddle": "When enchanting the item, add three successes to the target number for each of the target spell’s dots to allow the spell to target and trigger against interlopers. So, to allow the item to trigger the four-dot spell “Trigger the Lizard Brain,” 12 successes would be required.<p>Upon successful casting of this spell, the mage then rolls her usual dice pool for an improvised casting of the subject spell. The defensive spell gains one Potency per success. If the subject spell requires Mana, the item must be infused with it, per the usual “Imbue Item” process, and the item must have Mana to spend when triggered by an interloper. Without sufficient Mana, the effect is not activated.</p>",
        "RoteName": "Silver Ladder Rote: The Artful Tripwire",
        "RoteDice": "Dice Pool: Intelligence + Occult + Prime",
        "RoteDescrizione": "Silver Ladder mages appreciate the opportunities this spell provides to showcase both one’s mystical ingenuity, and one’s commitment to property rights."
    },
    {
        "Titolo": "Temporal Phantasm",
        "Arcana": "Prime ••• + Time ••",
        "DescrizioneAlta": "The mage summons a temporal echo from the past, imbuing the echo with solidity and fixed causality through infusion of Mana. The result is a nearly perfect copy of an inanimate object from the past, though a sadly impermanent one lacking any complicated features or supernatural powers of the original.",
        "Practice": "Weaving",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Vulgar",
        "Cost": "1 Mana",
        "DescrizioneMiddle": "This spell duplicates the Prime 3 “Phantasm” spell (see <b>Mage: The Awakening</b>, p. 227) with the following exceptions: first, the created object must copy an object the mage has perceived in a vision of the past, as the Time 2 “Postcognition” spell (<b>Mage: The Awakening</b>, p. 260). Because of this limitation, the item is automatically convincing, since it physically duplicates the original object’s external properties in every detail, down to the last nick, scratch, marking and resonance imprint. This makes books and other forms of writing particularly attractive targets for the spell, allowing a mage to peruse the contents of manuscripts otherwise lost to time. Once the spell’s Duration elapses, the object dissolves back into the flow of continuity.<p>With Prime 4, mages can summon more durable and mechanically functional constructs per the “Phantasmal Weapon” spell (see <b>Mage: The Awakening</b>, p. 228), though such objects cannot have any properties superior to the original object. Therefore, these items are more limited than conventional phantasms, though there is a certain hubristic panache to stabbing someone with Brutus’s knife still hot with Caesar’s blood instead of wielding a plain dagger.</p>",
        "RoteName": "Mysterium Rote: What Was Lost",
        "RoteDice": "Dice Pool: Intelligence + Occult + Time",
        "RoteDescrizione": "For an order dedicated to the pursuit of knowledge and the unveiling of mysteries, the usefulness of this rote requires no further explanation."
    },
    {
        "Titolo": "Transform Other Aura",
        "Arcana": "Prime •••",
        "Description": "The mage can alter another’s aura, changing the appearance of his true nature just as he does for himself with Prime 2.",
        "Practice": "Veiling",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Covert",
        "Cost": "None",
        "DescrizioneMiddle": "See “Transform Aura,” p. 223.",
        "RoteName": "Free Council Rote: Running with the Pack",
        "RoteDice": "Dice Pool: Intelligence + Occult + Prime",
        "RoteDescription": "A Free Council mage who intends to masquerade as a Sleeper — or even a vampire or werewolf — might want others of his “kind” nearby to back him up in case of trouble. With this rote, he can make his entire cabal look to be something its members are not, at least to the eyes of those who can read auras."
    },
    {
        "Titolo": "Tribute of Iron",
        "Arcana": "Prime ••• + Death •",
        "DescrizioneAlta": "Anyone who dies by metal, whether shot, crushed by a car or stabbed with a knife, belongs to Oggún. Horrible accidents and casualties of war are often considered the god of metal taking his tribute in blood from the world of men. One story, though, has it that a santero enslaved in Cuba rose up with a spade and slew several of his keepers in a burst of rage. He saw his masters’ relatives coming to kill him, and begged Oggún for help. The story says that Oggún answered him, telling him to taste the blood of his victims. The slave did so, and he found his strength replenished. He killed many of the slavers before they finally brought him low, and as the bullets pierced his heart, he uttered his thanks to Oggún and promised his blood and soul to the orisha.",
        "Practice": "Weaving",
        "Action": "Instant",
        "Duration": "Lasting",
        "Aspect": "Covert",
        "Cost": "None",
        "Dice Pool": "Strength + Occult + Prime",
        "RoteDescription": "Modern santeros are loath to use this spell often, because it requires another human being to die by metal (though it does not require the caster to kill the victim himself). The santero must taste the blood of the dead or dying. If the spell is successful, the mage can gain ashé (Mana) as if he had performed a blood sacrifice (see p. 78 of <b>Mage: The Awakening</b>). Casting this spell by itself doesn’t cause degeneration, though killing someone to facilitate it certainly does.<p>The casting mage must carry or wear a piece of metal, but no Oggún would ever be without such a focus anyway. Many mages using this spell dip a blade in the victim’s blood and lick it off while casting, but this isn’t necessary.</p>"
    }
]

const primeFourData = [
    {
        "Titolo": "Annihilate Spells",
        "Arcana": "Prime •••• + Time •••",
        "DescrizioneAlta": "The mage counters or activates all hung and prolonged spells that a target has active. A capable Banisher can spread this effect across an area.",
        "Practice": "Unraveling",
        "Action": "Instant",
        "Duration": "Lasting",
        "Aspect": "Covert",
        "Cost": "1 Mana",
        "DescrizioneMiddle": "Mages are fragile beings, but given every second that a mage isn’t dead is another opportunity for him to turn the tables on his Banisher assailant. This spell allows the Banisher to strip away a mage’s preexisting advantages: armor spells, hung spells, even Mage Sight. The Banisher uses Time to turn the “clock” ahead on an existing spell, and Prime to unravel it, much as Supernal Dispellation (see p. 229 of <b>Mage: The Awakening</b>). Unlike that spell, however, the mage doesn’t need to beat the spell’s Potency, as he is attacking the spell as it will exist in the future (that is, as it starts to fade and lose its Potency).<p>The Banisher must touch the mage to use this spell, but at Prime 5, he can cast it at sensory range. The mage can also work in target factors at this level, affecting several targets at once.</p>",
        "RoteName": "Banisher Rote: Oblivion",
        "RoteDice": "Dice Pool: Resolve + Occult + Prime",
        "RoteDescrizione": "The infamous Banisher known only as “Brown” perfected this rote, and used it to great effect against the mages of the Pacific Northwest. His cult, consisting only of Sleepers and Sleepwalkers, would wait until he removed the shields and other protective spells from their targets, and then the cult members would open fire."
    },
    {
        "Titolo": "Awaken Hallow",
        "Arcana": "Prime ••••",
        "DescrizioneAlta": "The mage awakens a dormant Hallow.",
        "Practice": "Patterning",
        "Action": "Extended",
        "Duration": "Lasting",
        "Aspect": "Covert",
        "Cost": "1 Mana",
        "DescrizioneMiddle": "The target number is equal to the original level of the Hallow before it became dormant.",
        "RoteName": "Mysterium Rote: Aligning the Stars",
        "RoteDice": "Dice Pool: Composure + Survival + Prime",
        "RoteDescrizione": "On occasion, secrets lay dormant within the quieted flow of a Hallow. Mysterium mages that return such a flow to life have been witness to wondrous secrets. Of course, some would argue that having an active Hallow at one’s disposal is reward enough. Mages of all orders with access to it make use of this rote, as there are few who would pass up the chance to tap into the power of a Hallow."
    },
    {
        "Titolo": "Bodyguard's Blessing",
        "Arcana": "Prime ••••",
        "DescrizioneAlta": "The mark of a dedicated bodyguard has always been the willingness to take a bullet (or arrow or sword in earlier times) for the people placed under the bodyguard’s protection. This spell allows the mage to redirect a magical attack from its intended target to the mage.",
        "Practice": "Ruling",
        "Action": "Instant and resisted; target rolls Resolve + Gnosis reflexively",
        "Duration": "Transitory (one turn)",
        "Aspect": "Covert",
        "Cost": "1 Mana",
        "DescrizioneMiddle": "On the turn after this spell is cast, the next spell cast by the target is redirected to strike the caster of this spell. The mage may redirect any one spell with a Potency no higher than the number of successes gained on the casting roll.",
        "RoteName": "Adamantine Arrow Rote: Lightning Rod",
        "RoteDice": "Dice Pool: Wits + Occult + Prime",
        "RoteDescrizione": "The tactical implications of this spell were not lost on the Arrows. Although they sometimes act in the capacity of bodyguards, the Arrows saw an opportunity to steal Shielding and healing spells from enemy mages. Timing, as well as a working knowledge of their opponent, is essential when applying the rote in this fashion. The Arrow must be able to predict how much damage their opponent is willing to take before resorting to a hasty healing or Shielding spell with a low enough Potency to be redirected."
    },
    {
        "Titolo": "Channel Paradox",
        "Arcana": "Life ••• + Prime ••••",
        "DescrizioneAlta": "Every manifestation of Paradox widens the great gulf of the Abyss, or so the Guardians of the Veil teach their neophytes. By accepting the hurts of Paradox into one’s own flesh, however, Plures believed the Abyss could be denied greater purchase in the Fallen World. This spell enables just that, allowing the Guardian to draw Paradox into his own living pattern, thus preventing the taint of the Abyss from further infecting this world.",
        "Practice": "Patterning",
        "Action": "Reflexive",
        "Duration": "Lasting",
        "Aspect": "Covert",
        "Cost": "None",
        "DescrizioneMiddle": "Upon successfully casting this spell — which can be done reactively in response to any form of Paradox in the mage’s vicinity, save backlash, so long as he has not yet taken his action for the turn — the Guardian draws the force of a Paradox into his own body. He then rolls the Paradox successes as a Backlash dice pool, suffering its effects, if any, as normal. Note that the Guardian may, if he wishes, use Mana to mitigate the Paradox before rolling for backlash. (See <b>Mage: The Awakening</b>, p. 123.)<p>Note that this spell <i>may not</i> be cast on another, whether willingly or otherwise.</p>",
        "RoteName": "Guardians of the Veil Rote: Taming the Void",
        "RoteDice": "Dice Pool: Stamina + Occult + Prime",
        "RoteDescrizione": "Reaching out with this magic, the Guardian seizes hold of the power of the Abyss and, through personal suffering, defies and negates it. Guardians who make use of this spell often look to it as a real, quantifiable means of striking back at the Void."
    },
    {
        "Titolo": "Curse of the Fallen World",
        "Arcana": "Prime ••••",
        "DescrizioneAlta": "This spell forces an enemy mage to reveal his Awakened state with every spell he casts and increases the likelihood of a backlash against that mage.",
        "Practice": "Fraying",
        "Action": "Instant and contested; target rolls Resolve + Gnosis reflexively",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Covert",
        "Cost": "1 Mana",
        "DescrizioneMiddle": "Mages are able to cast covert spells by working within the established rules for what is considered possible in the Fallen World. This spell forces magic used by the mage to manifest itself visibly and audibly. An “Alter Integrity” spell (see <b>Mage: The Awakening</b>, p. 198) used to weaken a lock might cause the lock to shriek with the sound of bending metal and glow red (for example).<p>With a successful casting, every spell cast by the targeted mage is considered vulgar for the remainder of the scene. Additionally, every casting uncloaks the cursed mage’s nimbus in an enhanced state, making the nimbus stronger in effect than is usual. The summation of all this excess magical energy results in the addition of +1 die to each Paradox check made by the cursed mage during the scene.</p>",
        "RoteName": "Banisher Rote: Force Paradox",
        "RoteDice": "Dice Pool: Resolve + Occult + Prime",
        "RoteDescrizione": "Order mages who have studied literature of more organized and educated Banishers have found citations of Paradox as support for their theories that magic is unnatural. They insist that if mages were meant to wield mystical powers, counterforces such as Paradox wouldn’t exist. Banishers claim this rote was first developed in Atlantis by the Timori, but such claims are dubious at best, and near impossible to prove."
    },
    {
        "Titolo": "Delusions of Grandeur",
        "Arcana": "Prime ••••",
        "DescrizioneAlta": "The heady rush of power involved with casting a spell is like a drug to mages. The more power available to a mage, the greater the temptation to use that power. This spell tempts a mage with power, then punishes him for using it.",
        "Practice": "Unraveling",
        "Action": "Instant; subtract target’s Resistance",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Covert",
        "Cost": "None",
        "DescrizioneMiddle": "This spell targets the Mana of an opponent, allowing it to flow more easily from the target for a limited time. For the Duration of the spell, the target mage may spend one Mana more per turn than would normally be allowed by his Gnosis rating. Excited by the feeling of the Mana surging within them, mages usually give in to the temptation of spending more Mana than is necessary, but this newfound power comes at a price. While the mage is under the effect of this spell, any Mana expenditure is doubled in cost.",
        "RoteName": "Banisher Rote: Mana Leak",
        "RoteDice": "Dice Pool: Wits + Occult + Prime – Resistance",
        "RoteDescrizione": "Abuse of power by mages is a common element in the poorly produced Banisher pamphlets used to indoctrinate their followers. No power is as absolute as magic, they say, and so it follows that all mages must be corrupted by their power eventually. The Banishers point to the success of this particular rote against order mages as proof of this claim."
    },
    {
        "Titolo": "Disenchant Item",
        "Arcana": "Prime ••••",
        "DescrizioneAlta": "Although an item’s finishing spells cannot be dispelled, Disenchant Item allows the mage to permanently excise one other spell from an Enchanted Item. Disenchant Item may target an imbued spell, curse, enhancement or defense. The spell can also be used to remove the item’s ability to hold Mana, if any. All Mana in the device when this effect is used disperses uselessly.",
        "Practice": "Unraveling",
        "Action": "Instant and contested; successes are compared to target spell’s Potency, or, if the spell targets the item’s Mana capacity, its total capacity",
        "Duration": "Lasting",
        "Aspect": "Covert",
        "Cost": "1 Mana",
        "DescrizioneMiddle": "The mage must have at least one dot in each Arcanum used in the targeted spell.",
        "RoteName": "Guardians of the Veil Rote: Righteous Pyre",
        "RoteDice": "Dice Pool: Intelligence + Occult + Prime",
        "RoteDescrizione": "Entire cadres of Guardians devote themselves to cleaning up the trail of Enchanted Items left behind by careless willworkers. They protect unworthy eyes from esoteric secrets by disassembling the evidence, one object at a time."
    },
    {
        "Titolo": "Eyes of the Awakened",
        "Arcana": "Prime ••••",
        "DescrizioneAlta": "The mage allows a Sleeper to possess Mage Sight. For the Duration of the spell, the Sleeper sees things that she did not believe possible before. During this period, her witnessing the Mysteries does not invoke Disbelief, but she still adversely influences a Paradox as a normal Sleeper witness.",
        "Practice": "Patterning",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Covert",
        "Cost": "None",
        "RoteName": "Silver Ladder Rote: Fitful Sleep",
        "RoteDice": "Dice Pool: Manipulation + Empathy + Prime",
        "RoteDescrizione": "One of the greatest powers is that of controlling knowledge. Ladder mages use this rote to bestow some small glimpse of the truth upon those who would otherwise remain forever blind. Sometimes they do so to win the loyalty of Sleepers, and sometimes their fear, but given the risks inherent to such an act, they rarely do so without good reason."
    },
    {
        "Titolo": "Ley Flow",
        "Arcana": "Prime ••••",
        "DescrizioneAlta": "The mage can alter the flow of energy through a ley line, adjusting the flow anywhere from a torrent to a mere trickle, or, instead, he can change the current’s direction of flow, sending the current back upstream to its source node.",
        "Practice": "Patterning",
        "Action": "Extended",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Covert",
        "Cost": "1 Mana",
        "DescrizioneMiddle": "Before casting, the mage must decide whether to adjust the strength of the line’s flow or alter its direction. He could, however, cast this spell twice, once to lower the strength and again to alter its flow or vice-versa.<p>Strength of Flow: When adjusting the flow’s Strength, the mage manages to raise or lower the Strength by one dot per success. Most ley lines have an existing Strength of 2. To raise a Strength 2 ley flow to Strength 4 would require a target number of two successes. The mage could reduce the Strength to zero, in which case the line ceases to flow. The higher the Strength, the more dramatic and quick are the effects of its resonance on people, places and things in the ley line’s path.</p><p>Direction of Flow: When reversing the line’s direction of flow, making it go upstream rather than down, the mage needs one success per Strength dot of the line’s flow. It is easier to reverse the flow of a weak line than a strong one. A line with a Strength of 2 would require a target number of two successes.</p>",
        "RoteName": "Silver Ladder Rote: Governing the Tides",
        "RoteDice": "Dice Pool: Composure + Occult + Prime",
        "RoteDescrizione": "The Silver Ladder learned early about the relationship between a ley line’s current and resonance. The order also discovered the subtle effectiveness that altering a rival sanctum’s nodal resonance has on the sanctum’s power. This spell is the primary reason why cabals patrol miles upstream to safeguard their holdings."
    },
    {
        "Titolo": "Marionette",
        "Arcana": "Prime ••••",
        "DescrizioneAlta": "By way of this magic, the willworker creates a potentially animate phantasm of an animal or other obviously non-human creature. It can move, but only as she directs it through active concentration. The phantasm moves as it would normally be able to, so a phantasm of a monkey can walk or run on all fours, walk awkwardly upright and swing by its hands or its tail, while a remote control car moves on its wheels. A ferret phantasm could, for example, filch a set of keys, while a wolf could be used to attack someone.",
        "Practice": "Patterning",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Vulgar",
        "Cost": "None",
        "DescrizioneMiddle": "As with the “Phastasm” spell, p. 227, except that each success grants two dots of Physical Attributes to the phantasm, allocated however the caster wishes, up to a limit of the mage’s Prime dots in any one trait. A combined casting with “Phantasmal Weapon,” below, gives the Marionette more solidity and allows successes to be allocated to an equipment modifier (including weapon damage) or armor. (With Prime 5, the mage doesn’t need to combine castings to gain this effect for his Marionette.) When calculating the phantasm’s Defense, use its Dexterity or the mage’s Wits, whichever is lower. If the phantasm runs out of Health or Structure, it disintegrates back into the Tapestry.<p>The mage must concentrate to direct the phantasm’s movements, and he cannot direct it out of the range of his mundane senses, unless he is scrying it with the Space Arcanum (a mage’s own phantasms are always treated as Intimately connected for such purposes). While concentrating on moving the phantasm, the mage can still use her Defense, but cannot initiate her own attacks or cast any other magic; her attention is too absorbed.</p><p>Note that the same sorts of “magic dead areas” that necessitate spending a point of Mana to create a static phantasm with the “Phantasm” spell (p. 227) require the same for this spell.</p>",
        "RoteName": "Silver Ladder Rote: Unreal Servitor",
        "RoteDice": "Dice Pool: Intelligence + Subterfuge + Prime",
        "RoteDescrizione": "When Ladder mages need capable and obedient servants quickly, many turn to this rote. Such a phantasm can serve as a laborer, a bodyguard, an attack dog — virtually anything the willworker can conceive of and mentally direct. Free Council mages interested in the nature of material existence sometimes experiment with a similar rote."
    },
    {
        "Titolo": "Phantasmal Weapon",
        "Arcana": "Prime ••••",
        "DescrizioneAlta": "The mage creates a sturdy phantasm, and can even create functional weapons and armor.",
        "Practice": "Patterning",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Vulgar",
        "Cost": "1 Mana",
        "DescrizioneMiddle": "As with Prime 3 'Phantasm,' p. 227 except the object has a Durability equal to the caster’s Prime dots. Successes can be allocated to create an equipment dice modifier or armor points for the object, or even to increase the Size above five points (on a one-for-one basis).",
        "RoteName": "Adamantine Arrow Rote: Forge of the Gods",
        "RoteDice": "Dice Pool: Intelligence + Craft + Prime",
        "RoteDescrizione": "Adamantine Arrow willworkers use this rote to fabricate arms and armor from thin air."
    },
    {
        "Titolo": "Pierce Magical Shield",
        "Arcana": "Prime ••••",
        "DescrizioneAlta": "The mage can bypass the protection granted by magical Shielding spells.",
        "Practice": "Unraveling",
        "Action": "Instant",
        "Aspect": "Covert",
        "Duration": "Prolonged (one scene)",
        "Cost": "None",
        "DescrizioneMiddle": "Each level of Potency allows the mage to ignore one point of magical armor when he attacks targets that possess it. This benefit is exclusive to the caster and affects any targets he attacks during the spell’s Duration.<p>This spell affects only Awakened Shielding spells. It does not affect mundane armor or armor granted by other supernatural powers.</p><p>A mage with Prime 5 can grant this spell’s benefit to another.</p>",
        "RoteName": "Banisher Rote: Eye and Hand of David",
        "RoteDice": "Dice Pool: Composure + Athletics + Prime",
        "RoteDescrizione": "Simplicius was a theologian, not a warrior, but in one desperate moment he had to defend himself from a seemingly unstoppable gang of mages. They shrugged off his son’s bullets before they killed the boy. They chased Simplicius to an old quarry. That’s when he prayed that God would forgive him for dabbling in the occult. He gave his magic up to God, and in seeming response, a stone dropped right into his open hand, jostled from above by a witch crawling down to ambush him.<p>With perfect faith he looked up, threw the stone and knocked the formerly bulletproof enemy unconscious. Simplicius managed to frighten off the rest with a few handfuls of rocks, got away and shared his revelation with other Banishers.</p>"
    },
    {
        "Titolo": "Poison Mana",
        "Arcana": "Prime ••••",
        "DescrizioneAlta": "The mage can introduce dangerous occult vibrations to part or all of a supply of Mana as long as it isn’t being stored within a living being. Once used, the poisoned Mana injures whoever’s channeling it.",
        "Practice": "Fraying/Patterning",
        "Action": "Extended",
        "Aspect": "Vulgar",
        "Duration": "Lasting",
        "Cost": "1 Mana",
        "DescrizioneMiddle": "The spell taints a number of points of Mana equal to the spell’s Potency. The spell can be cast on a Hallow, where it affects the first Mana drawn until its Potency in points has been withdrawn. Once a mage internalizes the Mana, the poisoned Mana stays inert until it’s transferred to another receptacle, expended on a spell or used on another action. When that happens, the Mana performs its normal functions, but each point spent also inflicts a point of lethal damage.<p>A Prime 5 version of this spell can be used to poison Mana to such an extent that it inflicts aggravated damage.</p>",
        "RoteName": "Banisher Rote: The Wages of Sin",
        "RoteDice": "Dice Pool: Presence + Expression + Prime",
        "RoteDescrizione": "Famous “cult awareness researcher” Isaiah Pickens conducts regular sermons at places he says are hotbeds of cult activity. He does the same thing for fellow Banishers when they bring him objects that stink of excess Mana. The theme of every sermon is that Satan has no real power and his promises and payments are always empty.<p>He says, “That rush you feel, exploring witchcraft and playing with the dark side can never profit you — Satan has nothing to give! Even when he looks like he’s giving you the power he has to take something away to keep the balance of his gifts — a balance of zero. Those are the wages of sin, my friends.” And, for mages who draw from Hallows and items he’s preached around, that turns out to be true.</p>"
    },
    {
        "Titolo": "Primal Transfer",
        "Arcana": "Prime ••••",
        "DescrizioneAlta": "One problem with crafting magic items for other mages is the loss of psychic force — of one’s very soul — involved in letting go of a spell so other people can use the item. An Adept of Prime, however, can demand that a client give of herself to assist in the item’s enchantment: the client, not the mage himself, sacrifices a dot of Willpower to make the spell independent.",
        "Practice": "Patterning",
        "Action": "Instant and contested; target rolls Composure + Gnosis reflexively",
        "Aspect": "Vulgar",
        "Duration": "Lasting",
        "Cost": "1 Mana",
        "DescrizioneMiddle": "Sacrificing a dot of Willpower is so deep and traumatic an experience that this spell (and associated rote) only succeeds if the target knowingly assists the mage. Even then, the character’s player must win a contested roll of the Forge Master’s Gnosis + Prime against the target’s Composure + Gnosis, for the soul resists giving up part of itself.",
        "RoteName": "Free Council Rote: Blood Quenching",
        "RoteDice": "Dice Pool: Resolve + Empathy + Prime",
        "RoteDescrizione": "Forge Masters sometimes demand that a client literally pay in blood. As part of this rote, the Powersmith bids his client to pierce her own flesh and let her blood drip onto the hot metal during the tempering process. With the blood and the taps of his hammer (actually the mudras of the rote), the Forge Master draws power from the client’s soul and forces it into the enchanted metal."
    },
    {
        "Titolo": "Scour Other's Pattern",
        "Arcana": "Prime •••• + Life •••",
        "DescrizioneAlta": "The mage can scour another person’s Pattern just as she can scour her own, changing flesh and blood into Mana. This causes Resistant Damage to the target (see p. 124 of <b>Mage: The Awakening</b>).",
        "Practice": "Unraveling",
        "Action": "Instant; subtract target’s Stamina",
        "Aspect": "Vulgar",
        "Duration": "Lasting",
        "Cost": "1 Mana",
        "DescrizioneMiddle": "The mage must touch her target (with Prime 5, this spell can be cast at sensory range). The target experiences searing pain as flesh boils away into magical energy. Each success inflicts one point of lethal Resistant Damage and gives the caster one point of Mana.<p>If Scour Other’s Pattern is cast upon a mage, however, the target can reap one benefit from this attack. The mage can attempt to take the Mana freed by the attack into her pool. The target makes a reflexive Stamina + Gnosis roll. If this roll succeeds, the target mage adds one point of Mana to her pool per two successes, up to her usual maximum. The caster is thus denied these points.</p><p>This spell cannot be successfully cast more than once on the same target per scene. Use of the spell requires a degeneration roll for mages of Wisdom 4 or more (roll three dice).</p>",
        "RoteName": "Silver Ladder Rote: Lash of the Aether",
        "RoteDice": "Dice Pool: Presence + Intimidation + Prime – Stamina",
        "RoteDescrizione": "Sometimes a Sleeper needs to learn that mages aren’t to be trifled with, and sometimes a mage needs to learn his place. The mages of the Silver Ladder don’t relish using this spell — it’s painful and the wounds take days to heal. But that is sometimes exactly what a hubristic spellcaster needs to realize that magic cannot solve all his problems."
    },
    {
        "Titolo": "Siphon Essence",
        "Arcana": "Prime ••••",
        "DescrizioneAlta": "The mage can pull the Essence out of a spirit, ghost or locus and convert it to personal Mana. He may either add it to his Mana store or disperse it into the Tapestry, as he wishes. Most experienced willworkers are quick to point out the folly almost always inherent to pillaging a locus. Even if there are no werewolves present (a rare enough occurrence), spirits regard loci in the same way that mages look at Hallows, and resent those who cheat them of their rightful sustenance. While not all spirits have the means to exact immediate retribution, most have long memories and at least a few allies willing and able to make life hell for pirating mages.",
        "Practice": "Unraveling",
        "Action": "Instant; subtract target’s Resistance",
        "Aspect": "Vulgar",
        "Duration": "Lasting",
        "Cost": "None",
        "DescrizioneMiddle": "Each success siphons one Essence from the targeted spirit, ghost or locus. See Werewolf: The Forsaken for more information on loci.",
        "RoteName": "Adamantine Arrow Rote: Ehrlik’s Due",
        "RoteDice": "Dice Pool: Resolve + Occult + Prime – Resistance",
        "RoteDescrizione": "Most Adamantine Arrow mages who make use of this rote see it as a simple case of requisitioning needed resources. Sometimes this spell is used offensively, stripping power from enemy spirits before it can be used against a mage and her allies. Guardians of the Veil apply the same rote to drain Essence from spirits, robbing them of their ability to cause mischief or harm, and potentially endanger the anonymity of the occult world and its denizens."
    },
    {
        "Titolo": "Siphon Integrity",
        "Arcana": "Prime ••••",
        "DescrizioneAlta": "The mage can pull the Mana out of a mundane lifeless object. He may either add this Mana to his own or disperse it into the Tapestry, as he wishes. Most such Patterns have but little Mana invested in them and siphoning it all away (or simply dispersing it) damages the item.",
        "Practice": "Unraveling",
        "Action": "Instant",
        "Aspect": "Vulgar",
        "Duration": "Lasting",
        "Cost": "None",
        "DescrizioneMiddle": "Each success gives the mage one Mana and inflicts one point of Structure damage to the object, making it brittle. (This damage circumvents the object’s Durability.) Only one point of Mana may be gleaned per three points of Size (rounding down); mundane objects smaller than Size 3 simply do not have enough material substance and presence to hold a full point of Mana.<p>The caster can replenish his own Mana reserves with this spell only once every 24 hours. The frayed Mana from successive castings cannot be integrated into the mage’s Pattern during that time, although he could use the “Channel Mana” spell, p. 224, to divert it elsewhere.</p><p>Enchanted items cannot be siphoned with this spell.</p>",
        "RoteName": "Mysterium Rote: Hidden Stores",
        "RoteDice": "Dice Pool: Resolve + Occult + Prime",
        "RoteDescrizione": "For a Mysterium mage skilled in the Prime Arcanum, stores of Mana are hidden in plain sight throughout the Tapestry. Providing a much-needed boost on short notice, this rote draws on the willworker’s immediate environment to replenish his power. Members of the Adamantine Arrow use similar magics (Strength + Occult + Prime) to simultaneously strip their opponents of needed items or protections while recouping their own stores of Mana."
    },
    {
        "Titolo": "Supernal Augumentation",
        "Arcana": "Prime •••• + Life ••• or Matter •••",
        "DescrizioneAlta": "Martial artists have demonstrated through the ages the incredible potential of ordinary weapons: hands, feet, swords, axes, and bows, for example. Sometimes, however, an Arrow requires recourse to force greater than that which her armaments will normally allow. Sometimes, she needs to destroy creatures of flesh and bone (or other, less natural organisms) with rapidity and finality, and elegance be damned.",
        "Practice": "Unraveling",
        "Action": "Instant",
        "Aspect": "Vulgar",
        "Duration": "Prolonged (one scene)",
        "Cost": "1 Mana per strike",
        "DescrizioneMiddle": "After casting this spell on either her own body (with Life) or her weapon (with Matter), the Arrow may reflexively spend a point of Mana when making an attack to cause <i>that single attack</i> to inflict aggravated damage if successful, rather than bashing or lethal. Note that the willworker must spend this point of Mana before making the attack, and if the strike misses, the point of Mana is wasted. This spell in no way otherwise alters the attack made — equipment bonuses remain the same, as do a weapon’s other qualities, if any. This spell may only be used to augment a ranged attack if the actual instrument of harm is in direct contact with some part of the willworker’s body <i>immediately</i> before being released (a throwing knife or arrow, for instance, but not a bullet).",
        "RoteName": "Adamantine Arrow Rote: Sword of Ruin",
        "RoteDice": "Dice Pool: Strength + Intimidation + Prime",
        "RoteDescrizione": "Grim necessities give rise to terrible weapons. The Arrow recognizes this unfortunate reality, and this rote is seen by many as more of a burden to bear than a resource to be cherished."
    },
    {
        "Titolo": "Supernal Dispellation",
        "Arcana": "Prime ••••",
        "DescrizioneAlta": "The mage can dispel magic. He can attack the Pattern of a spell, destroying it by pulling apart the threads that comprise it. At this level, the mage does not need to have any dots in the Arcana used in the magic to be dispelled. His Prime lore is enough to unweave any spell.",
        "Practice": "Unraveling",
        "Action": "Instant and contested; successes are compared to the target spell’s Potency",
        "Aspect": "Covert",
        "Duration": "Lasting",
        "Cost": "None",
        "DescrizioneMiddle": "This effect works like “Dispel Magic,” p. 220, but the mage does not need to possess all the Arcana involved.",
        "RoteName": "Free Council Rote: Undo the Art",
        "RoteDice": "Dice Pool: Resolve + Occult + Prime vs. target spell’s Potency",
        "RoteDescrizione": "Free Council mages use this rote to dissipate the magics of enemies, rivals, and sometimes people who need a lesson in humility. Guardians of the Veil use this magic in the execution of their duties, destroying all blatant manifestations of wizardry before they can be witnessed by the uninitiated."
    },
    {
        "Titolo": "Suppress Enchantment",
        "Arcana": "Prime ••••",
        "DescrizioneAlta": "The mage temporarily suppresses the power of an Artifact or imbued item, making one of its powers unusable for the Duration.",
        "Practice": "Unraveling",
        "Action": "Instant",
        "Aspect": "Covert",
        "Duration": "Prolonged (one scene)",
        "Cost": "None",
        "DescrizioneMiddle": "Each use of this spell affects only one of the powers possessed by a single Artifact or imbued item. If the mage knows the powers of the item, she can specifically cast the spell to affect one specific power; otherwise, the spell automatically affects the most powerful functional enchantment on the item. A single success temporarily removes one die from the dice pools of a contingent effect. If the number of successes equals or exceeds the number of dots of the highest Arcanum used in this power, then this spell temporarily renders this power unusable. For example, rolling three successes causes an item imbued with a single Life 3 effect to be temporarily non-magical. Persistent items are unaffected by any number of successes less than the number sufficient to completely suppress it. This spell can suppress the powers of an Artifact, but in all cases, powers on an Artifact require one additional success to suppress with this spell; suppressing a Life 3 spell on an Artifact would require the mage to roll four successes.<p>Repeated castings of this spell are not cumulative, but the caster can repeatedly attempt to suppress a single effect by making an especially good roll. Also, mages can cast this spell repeatedly on an item imbued with multiple powers in order to suppress each of these powers in turn. Because magic, just as life, is a phenomenon that is constantly in flux, it is impossible to cast this spell with an indefinite Duration; the longest possible Duration for this spell is one month (if cast using the advanced prolongation table).</p>",
        "RoteName": "Mysterium Rote: Restraining the Power",
        "RoteDice": "Dice Pool: Wits + Occult + Prime",
        "RoteDescrizione": "Some enchanted items are sufficiently dangerous that they are difficult to examine safely. Whether attempting to avoid the affects of a dangerous, millennia-old Artifact protecting an ancient tomb or trying to study an eccentric and deadly imbued item created by a half-mad mage, members of the Mysterium often find themselves in need of a way to temporarily suppress dangerous magics that have been placed on an item."
    },
    {
        "Titolo": "Suppress Hallow",
        "Arcana": "Prime ••••",
        "Description": "The mage suppresses an active Hallow.",
        "Practice": "Unraveling",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Covert",
        "Cost": "None",
        "DescrizioneMiddle": "One dot of the Hallow’s rating is diminished per success.",
        "RoteName": "Guardians of the Veil Rote: Shutting the Gate",
        "RoteDice": "Dice Pool: Presence + Survival + Prime",
        "RoteDescription": "Given the strange activity that often manifests around an active Hallow, Guardians are occasionally called upon to temporarily suppress such sources of power."
    },
    {
        "Titolo": "Tainted Source",
        "Arcana": "Prime ••••",
        "Description": "Poisoning a well used by your enemies has been a valid (if repugnant) strategy employed by humans in their struggles against each other from time out of mind. This spell poisons the Awakened version of the town well, the Hallow.",
        "Practice": "Unraveling",
        "Action": "Extended",
        "Duration": "Lasting",
        "Aspect": "Covert",
        "Cost": "1 Mana per roll",
        "DescrizioneMiddle": "The total number of successes gained during the casting represents the amount of Mana that will be tainted when it is drawn from the Hallow.[TABLE1]<p>Tainted Mana is sluggish in the body of a mage, and responds more slowly when called upon. While a mage retains any tainted Mana in his pool, he can spend only one Mana per turn, regardless of his Gnosis rating. Additionally, tainted Mana cannot be used for Pattern Restoration (see p. 77 of <b>Mage: The Awakening</b>).</p><p>Mages viewing a Hallow with Mage Sight may notice the Hallow has been tainted with a single success on a Composure + Occult roll. The simplest way to cleanse a Hallow of its taint is to simply draw out the tainted Mana, but mages theorize there must be other ways of accomplishing the cleansing.</p><p>Use of this rote is an act of hubris requiring a degeneration check for mages of Wisdom 4 or higher (roll three dice).</p>",
        "Tables": [
            {
                "Placeholder": "[TABLE1]",
                "Data": [
                    [
                        "Successes",
                        "Amount of Mana Tainted"
                    ],
                    [
                        "5",
                        "1"
                    ],
                    [
                        "10",
                        "5"
                    ],
                    [
                        "15",
                        "10"
                    ],
                    [
                        "20",
                        "15"
                    ],
                    [
                        "25",
                        "20"
                    ],
                    [
                        "30",
                        "25"
                    ]
                ]
            }
        ],
        "RoteName": "Banisher Rote: Poisoned Well",
        "RoteDice": "Dice Pool: Resolve + Occult + Prime",
        "RoteDescription": "For Banishers without the ability to completely shut down a functioning Hallow, this spell acts as a fair deterrent to mages seeking to refresh their Mana from an unclaimed Hallow. Use of the spell against a claimed Hallow is much more challenging, but can still be used as a sort of preliminary attack against a cabal. This rote is commonly used by the Shepherds (see p. 120) when they begin their citywide attacks against mages."
    }
]

const primeFiveData = [
    {
        "Titolo": "Concealing the Dragon's Path",
        "Arcana": "Prime •••••",
        "DescrizioneAlta": "This spell enables the mage to hide ley lines from the view of another who might otherwise be able to see them. This may be used as a way of protecting valuable sources of power from rivals or to preserve a path of power for the caster’s use.",
        "Practice": "Unmaking",
        "Action": "Extended",
        "Duration": "Lasting (permanent)",
        "Aspect": "Vulgar",
        "Cost": "1 Mana",
        "DescrizioneMiddle": "The mage must first know where the particular ley line or node of ley lines is. The spell itself puts up a powerful masking barrier that only a caster with greater power or who possesses the ability to see through strong illusions can penetrate. The ley lines, or dragon lines as they are sometimes called, are said to lead back to Atlantis, if one knows the proper sequence of paths to take. The spell can, therefore, be used to protect what’s left of proud Atlantis from prying eyes and nosy Sleepers. It can also be used to cover one’s path once a mage has traversed the lines to their destination.",
        "RoteName": "Mysterium Rote: Vigilant Safeguard",
        "RoteDice": "Dice Pool: Intelligence + Survival + Prime",
        "RoteDescrizione": "The Mysterium uses this rote to make precious and rare locations or objects 'disappear' from the sight of Sleepers or even other mages. The number of successes on the dice roll indicates how well concealed the object or place is."
    },
    {
        "Titolo": "Create Complex Phantasm",
        "Arcana": "Prime •••••",
        "DescrizioneAlta": "The mage creates a complex phantasm. These beings can mimic living people and complex objects (computers), and stand up to some degree of mundane scrutiny. Such a phantasm is subject to the same rules as a simple moving phantasm (see 'Marionette,' p. 228). A mechanical or electronic device, however, doesn’t conduct electricity (and doesn’t work if plugged into a socket; only the mage’s concentration makes it seem to work normally).",
        "Practice": "Making",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Vulgar",
        "Cost": "None",
        "DescrizioneMiddle": "A phantasmal person appears to possess the same Mental and Social Attributes as the caster (or fewer, if he wishes it) and can speak if compelled to by the mage, but has no individual initiative and collapses into a lifeless heap if the willworker doesn’t actively pay attention to it.",
        "RoteName": "Adamantine Arrow Rote: Tin Soldier",
        "RoteDice": "Dice Pool: Intelligence + Crafts (for objects) or Medicine (for people) + Prime",
        "RoteDescrizione": "When there isn’t time enough to call in backup (or someone is needed to walk into an untenably dangerous situation), some Adamantine Arrow mages make use of this powerful rote. The phantasm acts as directed, heedless of reason or its own personal wellbeing, making it an ideal decoy or suicide soldier. Mysterium mages on the trail of old Artifacts or forgotten lore and who are uncertain of what lies ahead sometimes create such simulacra by means of the same rote."
    },
    {
        "Titolo": "Create Hallow",
        "Arcana": "Prime •••••",
        "DescrizioneAlta": "The mage can create a temporary Hallow.",
        "Practice": "Making",
        "Action": "Extended",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Vulgar",
        "Cost": "1 Mana",
        "DescrizioneMiddle": "The target number equals the dots of the Hallow. The Hallow immediately yields up its rating in Mana, which can be harvested through normal means (by performing an oblation, p. 77, or casting “Channel Mana,” p. 224).<p>The effect lasts for one hour, but if it is made to last longer, the Hallow does not yield up more Mana until the same hour as its creation on each day for as long as the spell lasts. The spell uses the following Duration factors, but cannot be made to last indefinitely.</p>[TABLE1]<p>While Hallows can conceivably be created anywhere, certain places are more conducive than others. High places, such as at the top of a mountain, tall hill, tree or skyscraper are the best. If a mage attempts to cast this spell anywhere else, he suffers dice penalties. Casting at sea level is –1 die, while casting slightly below sea level, such as in a hollow, is –2 dice. Casting in a deep hole or pit is –3 dice.</p>",
        "Tables": [
            {
                "Placeholder": "[TABLE1]",
                "Data": [
                    [
                        "Success",
                        "Duration"
                    ],
                    [
                        "1 success",
                        "One scene/hour"
                    ],
                    [
                        "2 successes",
                        "24 hours"
                    ],
                    [
                        "3 successes",
                        "Two days"
                    ],
                    [
                        "4 successes",
                        "One week"
                    ],
                    [
                        "5 successes",
                        "One month"
                    ]
                ]
            }
        ],
        "RoteName": "Mysterium Rote: Sanctum Flow",
        "RoteDice": "Dice Pool: Composure + Occult + Prime",
        "RoteDescrizione": "When there are no uncontrolled Hallows nearby, the master of Prime creates one of his own. Mysterium mages in need of a source of Mana use this rote to provide themselves with the necessary power without having to return to a familiar Hallow or wrest free an unfamiliar one. Silver Ladder mages interested in forming sanctums of their own sometimes use similar magics to demonstrate the benefits of service to other willworkers."
    },
    {
        "Titolo": "Dead Zone",
        "Arcana": "Prime •••••",
        "DescrizioneAlta": "The mage expels the ambient Mana from an area, creating a 'magic dead zone.'",
        "Practice": "Unmaking",
        "Action": "Instant",
        "Aspect": "Vulgar",
        "Cost": "None",
        "DescrizioneMiddle": "A weak Gauntlet levies a –1 penalty on the spellcasting roll. Successes determine the Dead Zone’s radius or volume (the mage chooses which during casting).[TABLE1]*Add an extra x2 radius or x2 volume per additional success<p>While a mage can spend his own Mana within a dead zone, he cannot use the “Channel Mana” spell, p. XX, to draw them from another source.</p><p>Small animals, children and the elderly may sicken and even die in places devoid of a natural flow of Mana energies.</p>",
        "Tables": [
            {
                "Placeholder": "[TABLE1]",
                "Data": [
                    [
                        "Successes",
                        "Radius or Defined Volume"
                    ],
                    [
                        "1 success",
                        "1-yard radius<br>5 cubic yards"
                    ],
                    [
                        "2 successes",
                        "2-yard radius<br>10 cu. yards"
                    ],
                    [
                        "3 successes",
                        "4-yard radius<br>20 cu. yards"
                    ],
                    [
                        "4 successes",
                        "8-yard radius<br>40 cu. yards"
                    ],
                    [
                        "5 successes",
                        "16-yard radius<br>80 cu. yards"
                    ]
                ]
            }
        ],
        "RoteName": "Guardians of the Veil Rote: Banishing",
        "RoteDice": "Dice Pool: Composure + Occult + Prime",
        "RoteDescrizione": "By disrupting the local flow of Mana, a Guardian can sometimes stop conspicuous paranormal activity in an area."
    },
    {
        "Titolo": "Dessicate",
        "Arcana": "Prime ••••• + Life •••",
        "DescrizioneAlta": "The mage can drain the subject of one of her Physical Attributes, her Mana (if Awakened) or her Health and augment his own pool.",
        "Practice": "Unmaking",
        "Action": "Instant",
        "Aspect": "Vulgar",
        "Cost": "None",
        "DescrizioneMiddle": "The caster cannot increase his pool beyond the maximum he can have (for example, an individual with a Strength 3 can only increase his Strength to 5 and cannot exceed the amount of Mana he can hold according to his Gnosis rating). Similar to the spell “Siphon Mana” (Prime •••••), successive castings against the same target within the same scene suffer a cumulative –2 dice penalty.<p>If an Attribute or Health is reduced to 0, the caster has the option of returning a portion of the siphoned energy to bring the Attribute or Health rating up to 1. Otherwise, the victim dies.</p><p>An Awakened target can attempt to resist through a contested roll: Willpower versus the caster’s successes. A Sleeper has no defense unless otherwise protected by a mage. Protective spells apply.</p>",
        "RoteName": "Banisher Rote: Weaken the Alien",
        "RoteDice": "Dice Pool: Wits + Occult + Prime",
        "RoteDescrizione": "The Translator version of this spell, used by Morris, is intended to keep any aliens or suspected aliens (or even alien sympathizers) from operating at their full capacity and posing a threat to the Banishers during questioning and up to the time of 'translation.'"
    },
    {
        "Titolo": "Forge Tulpa",
        "Arcana": "Prime ••••• + Mind •••••",
        "DescrizioneAlta": "A tulpa, an idea-form so forcefully visualized that it assumes material substance, is known to Tibetan mysticism. The tulpa is dreamed into being by a creative mind in a state of intense and deliberate imagination. Such creations often grow beyond the direct control of their creators, becoming free-willed beings halfway to possessing reality of their own. Sometimes a tulpa becomes wicked or even physically monstrous, but this is the product of flawed discipline on the part of the creator, rather than any fault of the dream-being itself. A tulpa may look like a human being, an animal, a monster or just about any kind of physiologically plausible being of which the willworker can conceive.",
        "Practice": "Making",
        "Action": "Extended",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Vulgar",
        "Cost": "None",
        "DescrizioneMiddle": "Successes are allocated to construct the tulpa’s Mental, Physical and Social Attributes (to a maximum of the mage’s Prime dots in any single Attribute; at least one dot must be placed in every Attribute), and extra damage and armor (on a one-for-one basis). The tulpa possesses a Willpower score (the sum of Resolve and Composure as normal) and self-awareness, no matter how rudimentary. Its Size is 5 or less (the caster can decide to make it less than average human Size). The tulpa may be free-willed or bound to the will of the caster, as desired. An especially strong-willed tulpa may defy its binding creator and escape.<p>A physically monstrous or otherwise bizarre tulpa invokes Disbelief (p. 274) when witnessed by Sleepers.</p><p>Note that at this level of mastery, this spell cannot be given an indefinite Duration (i.e., the tulpa cannot have a “natural” life span of human years). The being dissolves when the spell expires. Unless the tulpa created is specifically designed to accept the inevitability of its own demise without emotional trauma, a Wisdom degeneration roll might be required for the caster (unless he has Wisdom 2 or lower). The mage could, however, recast this spell before the previous one expires, giving the tulpa a new Duration. Note that this is an exception to the normal rules for spell control. The tulpa is allowed to persist over a series of castings as long as the previous one does not expire before a successive spell is cast.</p>",
        "RoteName": "Free Council Rote: Dream Warrior",
        "RoteDice": "Dice Pool: Wits + Occult + Prime",
        "RoteDescrizione": "This Free Council magic forms a sentient being of pure Mana, invested with at least minimal social skills and reason. Those mages who cannot afford to give indefinite existence to such a creation do not use this rote lightly, as it is often cruel to craft an essentially living being with so brief an existence. Silver Ladder mages sometimes use their own rote (Presence + Occult + Prime) to create perfect servants, entrusting their personal care to no being they themselves have not fabricated."
    },
    {
        "Titolo": "Halt the Flow",
        "Arcana": "Prime •••••",
        "DescrizioneAlta": "The act of denying resources to an enemy is fundamental in any conflict. Sometimes harsh measures must be taken in particularly brutal situations to gain final victory. This spell is employed with the idea that it is better to destroy something than let the enemy use it to destroy you.",
        "Practice": "Unmaking",
        "Action": "Extended",
        "Duration": "Lasting",
        "Aspect": "Vulgar",
        "Cost": "1 Mana per dot rating of the target Hallow",
        "DescrizioneMiddle": "This spell slowly dissipates the energy of a Hallow, reducing it to a mundane location. Each dot of a Hallow is considered a separate extended roll and requires 10 successes to destroy. The Mana cost of the spell may be paid throughout the casting, rather than all at once. To fully destroy a Hallow, the mage must continue his work uninterrupted until the rating of the Hallow is reduced to zero. Once a Hallow is reduced to zero dots, it is considered destroyed. The backlash of suppressed magical energy forms a “Dead Zone” (see p. 230 of <b>Mage: The Awakening</b>) with the original rating of the Hallow acting as the number of successes gained to determine radius and volume. Until a Hallow is reduced to zero dots, treat the Hallow as being subjected to a “Suppress Hallow” spell (see p. 229 of <b>Mage: The Awakening</b>).<p>The casting of this spell creates a powerful clash in magic as the mage strives to pit himself against the natural magic of the Hallow. The visible results of this struggle can manifest themselves as violent storms, rains of frogs, glowing bands of light in the sky (similar to the aurora borealis) or anything else the Storyteller can devise. Mages attempting to destroy powerful Hallows are advised to seek help and cast this spell as a group ritual (see p. 129 of <b>Mage: The Awakening</b>) to increase their chances of success.</p>",
        "RoteName": "Banisher Rote: Destroy Hallow",
        "RoteDice": "Dice Pool: Composure + Occult + Prime",
        "RoteDescrizione": "Banishers adept at this level of Prime are a rare commodity amongst what passes for a Banisher community. Still, those practitioners capable of wielding this power have been known to keep in contact with each other and form ad hoc cabals for the sole purpose of destroying a particularly powerful Hallow."
    },
    {
        "Titolo": "Scorched Earth",
        "Arcana": "Prime •••••",
        "DescrizioneAlta": "Drawing an enemy to a battlefield of your choosing is a basic tenet of combat, understood instinctively even by lower life forms. Use of this spell prepares a battlefield on which magic is not welcome.",
        "Practice": "Unmaking",
        "Action": "Extended",
        "Duration": "Lasting",
        "Aspect": "Covert",
        "Cost": "1 Mana per category (see below)",
        "DescrizioneMiddle": "Casting this spell first requires the mage be inside the radius of a “Dead Zone” (<b>Mage: The Awakening</b>, p. 230). The “Scorched Earth” spell then increases the Potency of the magic Dead Zone by further leeching any remaining hints of magical energy from the physical surroundings of the area and strengthening the boundaries of the zone. In addition to the usual effects of a Dead Zone, every five successes gained on the extended casting roll increases the Potency of the Dead Zone by one category on the chart below. The caster needn’t raise the zone to category 5 if she doesn’t wish to, but may stop whenever she likes. Effects generated by increasing category are cumulative.[TABLE1]<p>Familiars, spirits and most other supernatural entities will not willingly enter an area of Scorched Earth, and even non-sapient entities will avoid the area instinctively.</p><p>Casting this spell is an act of hubris requiring a degeneration roll for mages of Wisdom 4 or higher (roll three dice).</p>",
        "Tables": [
            {
                "Placeholder": "[TABLE1]",
                "Data": [
                    [
                        "Category",
                        "Effects"
                    ],
                    [
                        "1",
                        "All spells suffer a -3 dice penalty."
                    ],
                    [
                        "2",
                        "Mana costs for spells are doubled."
                    ],
                    [
                        "3",
                        "Mana is leeched from every mage present at the rate of one Mana per turn."
                    ],
                    [
                        "4",
                        "The effective Gnosis rating of any mage in the zone is reduce by 2."
                    ],
                    [
                        "5",
                        "Any roll for Paradox gains the 8-again quality (re-roll results of 8,9 and 10)."
                    ]
                ]
            }
        ],
        "RoteName": "Banisher Rote: Safe House",
        "RoteDice": "Dice Pool: Composure + Occult + Prime",
        "RoteDescrizione": "Banishers create “Safe Houses,” the ultimate expression of their fear and hatred of magic, whenever possible. Banisher allies of the Sleeper variety frequently use such places as headquarters for their cults and sometimes as refuges from the terrors of the Fallen World.<p>This rote was first developed by the notorious Banisher named Elizabeth Reedy. Elizabeth worked as a web designer before her Awakening and has used her technical skills to spread instruction of how to cast this rote across the Internet. The information is disguised in the form of the eccentric ramblings of fantasy fansites and in mass email spamming.</p>"
    },
    {
        "Titolo": "Siphon Mana",
        "Arcana": "Prime •••••",
        "DescrizioneAlta": "The mage can siphon Mana at sensory range from an unwilling mage and add it to his own pool.",
        "Practice": "Unraveling",
        "Action": "Instant; subtract target’s Stamina",
        "Aspect": "Vulgar",
        "Cost": "None",
        "DescrizioneMiddle": "One Mana point is channeled per success. The caster cannot add more to his pool than the maximum amount allowed (based on his Gnosis; p. 76). Each successive casting against the same target within the same scene suffers a cumulative –2 dice penalty. Sleepers or other creatures cannot be siphoned (they do not have spendable Mana). (Although they can be killed without the need of a spell to yield their Health’s worth in Mana; see p. 78.)",
        "RoteName": "Silver Ladder Rote: Press Gang",
        "RoteDice": "Dice Pool: Resolve + Intimidation + Prime – Stamina",
        "RoteDescrizione": "Just as kings of old demanded tithes from their vassals, some mages of the Silver Ladder exact tribute from willing allies, unwilling rivals, and outright enemies. Guardians of the Veil use a variant rote (Composure + Intimidation + Prime) to mitigate the threat posed by a hostile willworker."
    },
    {
        "Titolo": "Supernal Sense",
        "Arcana": "Prime ••••• + Space •••",
        "DescrizioneAlta": "The mage expands his sense of the Supernal until he can sense the presence and rough location of all active spells within a certain radius.",
        "Practice": "Knowing",
        "Action": "Instant",
        "Duration": "Prolonged (scene)",
        "Aspect": "Covert",
        "Cost": "1 Mana",
        "DescrizioneMiddle": "The mage successfully senses all active Supernal magic within one mile of his current location. Each additional success on the roll adds one mile to the spell’s range. Currently active spells register, as do any spells activated during this spell’s Duration. As the mage knows constantly where these effects are located, he can try to find them. Locating a specific active spell requires an instant Wits + Occult roll. When a spell the caster has detected ends, he loses his sense of where it was. If he still wishes to navigate toward it, he must do so by memory.<p>This awareness provides only the basic information that a spell is active. In order to learn more about it, the mage must examine it, either in person or through scrying. Additionally, covert magic is significantly more difficult to pinpoint; though the mage can sense it, trying to locate a covert spell well enough to find it applies a –3 dice penalty on the Wits + Occult roll.</p><p>The mage notices spell effects performed behind wards only if the Potency of his spell exceeds that of the ward. Consider wards to be behind their own shields for the purposes of avoiding detection. Since the spell’s range is its primary factor, a mage must choose to increase its Potency specifically if he wants it to bypass any wards.</p><p>Imbued Items and Artifacts do not reveal themselves to the mage unless they are currently in use. Legacy Attainments do not register whatsoever.</p>",
        "RoteName": "Guardians of the Veil Rote: Supernal Radar",
        "RoteDice": "Dice Pool: Wits + Empathy + Prime",
        "RoteDescrizione": "The Guardians of the Veil take it upon themselves to police the Awakened — a usually unwilling and unappreciative populace. This rote serves the Guardians well. Using it to sense any active magic, a Guardian can locate and investigate any potential breaches of the Veil, or she can track fleeing mages who don’t realize that their personal shielding spells might give them away."
    },
    {
        "Titolo": "Universal Bane",
        "Arcana": "Prime ••••• + Space •••",
        "Practice": "Patterning",
        "Action": "Instant",
        "Duration": "Prolonged (scene)",
        "Aspect": "Vulgar",
        "Cost": "1 Mana",
        "DescrizioneMiddle": "This spell temporarily enchants a weapon or a single magazine of ammunition (the clip can be no larger than Size 1) so that it inflicts aggravated damage. The spell “supercharges” the weapon or ammunition’s Pattern, giving the weapon or ammunition the intense reality of a Supernal form. Fallen objects can’t endure this for long, however. The weapon or ammunition burns, melts or disintegrates once the spell’s Duration expires.",
        "RoteName": "Banisher Rote: Vajra Dagger",
        "RoteDice": "Dice Pool: Intelligence + Occult + Prime",
        "RoteDescrizione": "Dorjee talked about demons all the time because they plagued his dreams. After a near-death experience, he was trapped in a bardo or psychic “gap,” constantly confronting the Wrathful Deities that monks told him about when he was young. For years now, those same monks came to him, sharing their alms in exchange for his insights about spiritual realms.<p>Every night, Dorjee screamed in his dreams, but every dream taught him something new. So when the demon came disguised as a newly arrived monk Dorjee knew what to do. He stole a vajra — a knife that represented the “thunderbolt” of enlightenment — and stabbed the monster, calling on the absolute reality of the dharmakaya to dismiss its incarnation.</p>"
    }
]

export default { primeOneData, primeTwoData, primeThreeData, primeFourData, primeFiveData };