const dreadPowersData = [
    {
        "Name": "Absorb Energy",
        "Rank": "• to •••••",
        "Cost": "○○",
        "Description": "Regenerate damage and gain temporary Health and Willpower while exposed to a particular energy source",
        "FullCost": "2 Willpower",
        "Action": "Reflexive",
        "DicePool": "Stamina + Survival + Absorb Energy",
        "Effect": [
            "Some monsters draw their energy from a common, natural source of power, like fire. For others, electricity. And a few fearsome beasts draw their power from nuclear radiation. Whatever this power source, it empowers the monster when it basks in it.",
            "When the monster is exposed to her chosen energy source, it temporarily energizes her. She immediately gains a number of temporary health levels equal to her Absorb Energy dots, as well as an equal number of Willpower. For every turn she remains in contact with her power source, she regenerates two bashing damage, or one lethal damage.",
            "This Dread Power only works once per scene.",
            "<b>Dramatic Failure:</b> The power source doesn't absorb properly. The monster is shocked and pained, and denied her Defense for the remainder of the scene.",
            "<b>Failure:</b> The power fails",
            "<b>Success:</b> The monster absorbs the power, and can maintain the effect for a number of turns equal to her successes.",
            "<b>Exceptional Success:</b> The monster absorbs the power and channels it efficiently. She regenerates all bashing damage each turn, and regains a number of lethal damage equal to her Absorb Energy dots as long as she remains in contact with the energy source."

        ],
        "Book": "HMR 144"
    },
    {
        "Name": "Absorb Knowledge",
        "Rank": "•",
        "Cost": "○",
        "Description": "Gain a temporary skill specialty by absorbing the knowledge from a source of information",
        "FullCost": "1 Willpower",
        "Action": "Instant",
        "DicePool": "None",
        "Effect": [
            "The creature may touch a book or other repository of knowledge (a computer, perhaps) and absorb all the information contained within. The information in that book now represents a Specialty for a given Skill (Biology for Science, for instance, or Mythology for Academics) that provides the normal +1 to all appropriate rolls for the rest of the day. The knowledge fades at the end of the day, unless the creature spends another Willpower point to keep it going.",
        ],
        "Book": "BbBB 5"
    },
    {
        "Name": "Agonize",
        "Rank": "• to •••••",
        "Cost": "○",
        "Description": "Causes penalties up to -3 for duration of ability",
        "FullCost": "1 Willpower",
        "Action": "Instant",
        "DicePool": "Presence + Intimidation + Agonize - target’s Stamina",
        "Effect": [
            "The monster spends Willpower and concentrates. The target is wreathed in hellish flames, or bathed in electricity or bombarded by a deafening chorus of screams and demonic roars. However it manifests, the victim is in agony for as long as the creature concentrates.",
            "The monster must maintain line of sight with the target, and cannot do anything but move up to its Speed whilst concentrating. If concentration is broken, or line of sight is blocked, the power ends and the victim is released. Otherwise, the power lasts a number of turns equal to dots in Agonize.",
            "<b>Dramatic Failure:</b> The Dread Power cannot be activated for the rest of the story.",
            "<b>Failure:</b> The monster fails to inflict pain on the target, but may spend another Willpower next turn and try again.",
            "<b>Success:</b> The target suffers virtual wound penalties equal to successes rolled (to a maximum of -3). The target cannot be knocked unconscious by this power, but remains conscious, in sheer agony for the rest of the scene. The target can still apply Defense to an attack, but doing anything else is nigh impossible. Each turn, the target may attempt a Resolve + Stamina roll to break free; success ends the Dread Power.",
            "<b>Exceptional Success:</b> The target must make a Resolve + Composure roll to be able to do anything other than stand and scream.",
            "Once released, the character finds she is physically unharmed, at the Health level she was when caught in this power.",
            {
                'Suggested Modifiers': [
                    { Modifier: "-2", Situation: "Target has the Meditative Mind Merit" },
                ]
            }
        ],
        "Book": "HTV 276"
    },
    {
        "Name": "Alter Memory",
        "Rank": "• to •••••",
        "Cost": "○",
        "Description": "Add, edit, or delete memory",
        "FullCost": "1 Willpower",
        "Action": "Extended (1-100 successes necessary, with more simplistic memories necessitating fewer successes, and more complicated successes demanding much higher successes; each roll represents five minutes of manipulation)",
        "DicePool": "Intelligence + Subterfuge + Alter Memory - victim’s Resolve",
        "Effect": [
            "With this power, a vampire can reach into a victim’s memories and amend, add to or delete them. This power could be used therapeutically, to help a mortal or vampire overcome a Derangement by visiting the memories of her sins and helping her to come to terms with her actions, and helping vampires recover theirmemories after long torpor. However, given the nature of vampires, this Dread Power is far more often used towards less benign ends.",
            "Altering a victim’s memory can be highly useful to a vampire. If the vampire is at the center of a blood cult, she can toy with the memories of all her adherent cultists, turning them against their friends or inserting herself into their pasts as a central figure. If the vampire draws too much attention to herself with other Dread Powers, this ability allows her to “edit” their memories so that they forget that they ever saw her displays of unholy prowess.",
            "Note that most vampires do not have the finesse or patience to work this ability perfectly. Those who suffer use of this power are often left with a feeling of improper memories, even if they can’t dissect them to find the truth. Incomplete or overly-simplistic memories can actually stir a victim to investigate what really happened, which is surely the opposite of what the vampire intended (and, in fact, many hunters have been called to the Vigil in just such a way).",
            "Use of this power requires eye contact. The vampire acts almost as a hypnotist, asking questions and drawing out memories—memories she soon replaces with her own recalculated recollections.",
            "<b>Dramatic Failure:</b> The attempt fails: the vampire cannot use any Dread Powers upon that victim for the next 24 hours. Also, if the victim has a derangement, the vampire now suffers from that derangement without the possibility of controlling it for the remainder of the scene.",
            "<b>Failure:</b> The vampire fails to access the victim’s memories.",
            "<b>Success:</b> The vampire finds the specific memory he is after; when altering a memory, the vampire manages to perform the procedure successfully. If the vampire has inserted fake memories of herself to gain a victim’s trust, the vampire gains +1 to all Social rolls involving the victim per dot in Alter Memory; the same bonus applies as a penalty to Social rolls between the victim and her friends, if the false memories were implanted to turn the victim against them instead.",
            "The vampire can reinforce or weaken specific memories, adding successes rolled as a bonus or penalty to remember specific details of an incident, such as the vampire’s apparel or appearance, or to alter the memories of an incident where the witness saw obviously supernatural manifestations of the vampire’s Dread Powers; see <i>Memorizing and Remembering</i>, p. 44, The World of Darkness Rulebook.",
            "<b>Exceptional Success:</b> Extra successes are their own reward.",
            {
                'Suggested Modifiers': [
                    { Modifier: "+2", Situation: "Victim is a blood-addicted servant of the vampire (see <i>Thralls to the Blood</i>)" },
                    { Modifier: "+1", Situation: "Vampire has hypnotized or altered the memory of the victim before." },
                ]
            }
        ],
        "Book": "NS 169"
    },
    {
        "Name": "Balefire",
        "Rank": "• to •••••",
        "Cost": "○○○",
        "Description": "Deals damage equal to dots to anyone that attacks this NPC",
        "FullCost": "3 Willpower",
        "Action": "Instant",
        "DicePool": "This power requires no roll",
        "Effect": [
            "The creature wreaths itself in a green flame that lasts for the rest of the scene. Anyone who performs a successful close-quarters attack on the creature suffers one point of lethal damage per dot of Balefire possesses. The fire flicks out and burns those who get that close.",
            "Against supernatural creatures such as vampires and even incorporeal entities like other demons, Balefire inflicts aggravated damage.",
        ],
        "Book": "HTV 277"
    },
    {
        "Name": "Beastly Command",
        "Rank": "• to •••••",
        "Cost": "○/○○",
        "Description": "Communicate with and command animals",
        "FullCost": "1 or 2 Willpower",
        "Action": "Instant",
        "DicePool": "Manipulation + Animal Ken + Beastly Command",
        "Effect": [
            "The vampire has mastered the ability to communicate with animals and force them to submit to his dire commands. This ability necessitates the vampire make eye contact with the creature or creatures upon which he forces obeisance. With one Willpower point, the vampire commands only a single creature. Spending two Willpower allows the vampire to issue commands to all the creatures (of one type) within range of sight.",
            "Note that any vampires possessing this Dread Power can also communicate roughly with a creature without necessitating a roll. The two creatures communicate in vague turns of emotion and broken thoughts alongside yips, chirps, growls or however the animal might normally communicate with its brethren. Simple messages are easier to convey and understand than more complex ones.",
            "<b>Dramatic Failure:</b> The animal either attacks the vampire or does the opposite of the vampire’s command.",
            "<b>Failure:</b> The command fails to register.",
            "<b>Success:</b> The animal obeys its orders to the best of its ability.",
            "<b>Exceptional Success:</b> The animal develops a strong affection (some might say obsession) with the vampire."
        ],
        "Book": "NS 170"
    },
    {
        "Name": "Beastly Summons",
        "Rank": "•••",
        "Cost": "○",
        "Description": "Summon animals to the creature’s side",
        "FullCost": "1 Willpower",
        "Action": "Instant",
        "DicePool": "Presence + Animal Ken + Potency",
        "Effect": [
            "This power works to summon animals. A vampire using this power is an eerie sight; crouching, hissing or howling into the night as a horde of beasts flock to him. The vampire can only choose one type of animal to summon: rats, for instance, or cockroaches. The summoning act is usually an attempt to communicate with that type of animal—a vampire calling to wolves might howl, while calling owls might necessitate bird-like shrieks.",
            "<b>Dramatic Failure:</b> The vampire summons the animals desired… and on arrival they turn on him, attacking. Rats bite. Birds stab at the eyes with jabbing beaks. Insects swarm and sting.",
            "<b>Failure:</b> The vampire fails to summon any beasts.",
            "<b>Success:</b> The vampire summons all the creatures of the type desired—the area of the call is 100 yards per success rolled. Only those animals appropriate to the area will show up in meaningful numbers: thousands of cockroaches might skitter out of the walls of a rundown tenement, but summoning wolves or vultures in such a place is unlikely to yield results.",
            "<b>Exceptional Success:</b> Any Animal Ken rolls to communicate with or command the creatures gain +2 dice."
        ],
        "Book": "NS 170"
    },
    {
        "Name": "Biomechanical Nightmare",
        "Rank": "• to •••••",
        "Cost": "○",
        "Description": "Gain a major mechanical modification to form for each dot.",
        "FullCost": "1 Willpower",
        "Action": "Reflexive",
        "DicePool": "This power is not actively rolled",
        "Effect": [
            "The monster takes the guise of a biomechanical horror. Any or all parts of his body become machinery, metals, manufactured materials, and electronics, forming a morbid amalgamation of human technology in a rough humanoid form. His hand may become a power drill. He may sprout wings of broken glass. His chest may whirr and spark with an exposed coal generator. With these changes, the sky’s the limit.",
            "Demons commonly have biomechanical forms, as well as do certain fairies.",
            "Activating Biomechanical Nightmare requires only a single point of Willpower and a reflexive action to activate.",
            "When activating this Dread Power, choose whether to make a single change, or the whole body. Each unique appliance on the body should have clearly-stated benefits. Those benefits may be equipment modifiers, armor, weapon bonuses, or other effects. All such benefits use the monster’s Biomechanical Nightmare dots as a foundation, divided however you’d like.",
            "For example, a drill hand with four dots might offer +2 to Crafts rolls, as well as acting like a 2 lethal weapon. A skin made of raw, exposed electrical wiring with three dots may offer 1 point of armor and cause 2 points of damage to anyone touched by the monster.",
            "As a rule, you can choose one major feature for each dot in the Dread Power.",
            "Most monsters maintain one specific biomechanical form, and call on it at any time they need. Some can adapt their bodies in the moment and change each time they invoke this power.",
        ],
        "Book": "HMR 144"
    },
    {
        "Name": "Blackout",
        "Rank": "• to •••••",
        "Cost": "○○",
        "Description": "Create utter darkness in an area",
        "FullCost": "2 Willpower",
        "Action": "Instant",
        "DicePool": "Manipulation + Occult + Blackout",
        "Effect": [
            "Shadows are cloaks that obscure where a monster is hiding and enable them to escape or attack. This Dread Power enables the monster to darken an area, blotting out all light sources, and leaves the field in pitch blackness. For some monsters, this reflects an ultraviolet field that plays against witnesses’ eyesight, and demolishes light bulbs. For others, it could be a cloud of inky, otherworldly blackness. The end result, however, is the same.",
            "By default, a one success cloud is five feet in diameter, and causes a -1 penalty to all sight-based actions for all those found within. Once rolled, allocate additional successes to add five feet of diameter to the cloud, or thicken the cloud and add an additional -1 penalty to all sight-based actions.",
            "Additional Willpower can be spent and additional rolls can be made to increase the area and potency of the space.",
            "<b>Dramatic Failure:</b> The cloud fails to create, and the monster is unable to use it for the remainder of the scene.",
            "<b>Failure:</b> The power fails.",
            "<b>Success:</b> The monster creates the cloud. Allocate successes to Size and potency of the effect.",
            "<b>Exceptional Success:</b> The cloud blocks out one additional sense of your choice."
        ],
        "Book": "HMR 145"
    },
    {
        "Name": "Blast",
        "Rank": "• to •••••",
        "Cost": "○",
        "Description": "Attack with an elemental discharge, distributing Dread Power dots among bonus damage, lingering damage, and ignoring Defense or Armor.",
        "FullCost": "1 Willpower",
        "Action": "Instant",
        "DicePool": "Dexterity + Occult",
        "Effect": [
            "When on the prowl, some monsters do not need weapons to attack. Instead, they command their use of the elements to wreak havoc. This Dread Power represents the various distance attack abilities of several monster types. They may attack with lightning, acid, ice, fire, or other destructive elements.",
            "Choose the type of attack before taking this Dread Power.",
            "When taking dots of this Dread Power, assign each dot to one of two effects: direct damage or extended damage. You can mix and match the effects as you see fit. Additionally, you can ignore Defense or armor for one dot each.",
            "• <b>Direct Damage:</b> For direct damage, add the dot as a direct damage rating for the attack. For example, a three dot lightning bolt might be a three damage weapon on a successful attack.",
            "• <b>Extended Damage:</b> For extended damage, the attack will cause one dot of damage per turn after a successful attack, for twice the devoted dots in turns. For example, a fireball with four dots might cause one point of fire damage per turn for eight turns.",
            "• <b>Balancing Effects:</b> For each different effect, determine appropriately whether armor or Defense applies. If armor does not apply, it costs one dot. If Defense does not normally apply — like against firearms attacks — it costs one dot.",
            "The dice roll represents the attack roll for the blast. The attack can hit anything within the monster’s direct line of sight. If using distance modifiers for combat, its range is 15/30/45.",
            "<b>Dramatic Failure:</b> The attack fizzles, and cannot be used for the rest of the scene.",
            "<b>Failure:</b> The power fails.",
            "<b>Success:</b> The attack hits. It causes damage per its successes, and its damage rating.",
            "<b>Exceptional Success:</b> In this power’s case, these attacks can cause an appropriate Condition to the victim. For example, fire may burn, ice may freeze, and electricity may shock.",
        ],
        "Book": "HMR 146"
    },
    {
        "Name": "Blinding Speed",
        "Rank": "• to •••••",
        "Cost": "—",
        "Description": "Bonus +1 to Defense, Initative, and Speed scores for each dot",
        "FullCost": "None",
        "Action": "None",
        "DicePool": "None",
        "Effect": [
            "A monster with Blinding Speed moves much faster than a typical human. The monster gains a bonus equal to its Blinding Speed rating to its Defense, Initative and Speed scores.",
        ],
        "Book": "Spf 8"
    },
    {
        "Name": "Blood of Life",
        "Rank": "• to •••••",
        "Cost": "○",
        "Description": "Will the movement of your blood for a scene.",
        "FullCost": "1 Willpower",
        "Action": "Instant",
        "DicePool": "Manipulation + Occult + Blood of Life",
        "Effect": [
            "Blood is a powerful force that flows through a monster’s veins. With this Dread Power, the monster’s blood is completely under his control. He can force it to flow, to gush, to congeal, or to return to his body at will. His blood can be formed into strange tendrils, or made to cover entire surfaces. While frightening to onlookers, the practical uses of willfully using blood are unlimited to a creative monster.",
            "With a turn to initiate the power, the monster’s blood becomes completely malleable and subservient to its owner’s will. Manipulating the blood requires concentration, so it doesn’t allow the monster to do additional things with makeshift limbs. They can only compliment her normal actions. As a rule, the monster’s blood can cause a myriad of benefits and penalties which are usually equal to the monster’s Blood of Life dot rating.",
            "While the blood will return, if it’s separated from the monster’s body for more than ten minutes, it becomes inert. About every pint lost this way translates to one level of lethal damage to the monster. The blood will pool together like mercury, and return at the monster’s Speed if separated. However, the blood is not indestructible. It can be destroyed by fire and damaging chemicals.",
            "Roll Results",
            "<b>Dramatic Failure:</b> The blood flows, but not with the monster’s control. The monster takes lethal damage equal to the Dread Power dots.",
            "<b>Failure:</b> The power fails.",
            "<b>Success:</b> The monster controls his blood for the scene.",
            "<b>Exceptional Success:</b> The monster’s blood can separate from the body and act independently for a turn if the monster spends a point of Willpower. It can only take simple, crude actions, like an order to attack. But these actions occur independently of the monster. Use her Blood of Life dots to reflect any bonuses, penalties, or game traits for the blood.",
        ],
        "Book": "HMR 146"
    },
    {
        "Name": "Clamber",
        "Rank": "• to •••",
        "Cost": "○",
        "Description": "Climb on all fours across unclimbable surfaces",
        "FullCost": "1 Willpower",
        "Action": "Reflexive",
        "DicePool": "Dexterity + Athletics + Clamber",
        "Effect": [
            "For the remainder of the scene, the monster can climb on all fours up impossible to climb surfaces such as walls, ceilings, windows and the like. The monster moves as if she were walking or running on normal ground (see <i>Speed</i>, p. 95, World of Darkness Rulebook).",
        ],
        "Book": "BbBB 5"
    },
    {
        "Name": "Cloak of Authority",
        "Rank": "• to •••••",
        "Cost": "○",
        "Description": "Manifest influence and authority as Social Merits for a day.",
        "FullCost": "1 Willpower",
        "Action": "Instant",
        "DicePool": "Presence + Politics + Cloak of Authority",
        "Effect": [
            "Not every monster sticks to the shadows. Some, like mummies, seek to wield their influence like a weapon or a shield as they pursue their goals in the human world. With this Dread Power, the monster adorns herself with a mantle of power, audacity, and authority. Those around her assume she’s a leader or a prominent figure. This gives her temporary influence over organizations and groups.",
            "Once active, the monster gains a number of temporary Allies, Contacts, Retainers, or Status dots equal to twice her Cloak of Authority dots. They have to reflect organizations and people she’s surrounded with at the time of activation; the monster can’t claim influence over a random group found anywhere in the world.",
            "Note that the influence afforded is highly abstract. The monster has an air of authority, but no official position. She can cut through red tape, but the red tape still exists. Using this influence will likely require other Social Actions to accomplish, but they benefit from the mock Merits. The group will not act dangerously for the monster, but will let her access its resources with little struggle.",
            "Also, a monster can only have one instance of Cloak of Authority active at any given time. Using Cloak of Authority on the same group multiple times in the same month levies a cumulative -2 penalty on the monster.",
            "<b>Dramatic Failure:</b> Not only does the Cloak of Authority not take, but the monster cannot gain any Social Merits with the desired group, as they reject her whole cloth.",
            "<b>Failure:</b> The organization is not impressed.",
            "<b>Success:</b> Success awards the Social Merits for one day.",
            "<b>Exceptional Success:</b> As a success, but the Merits last up to a month.",
        ],
        "Book": "HMR 146"
    },
    {
        "Name": "Confuse",
        "Rank": "• to •••••",
        "Cost": "○",
        "Description": "Deny 10-Again and cause ones to negate successes",
        "FullCost": "1 Willpower",
        "Action": "Contested; resistance is reflexive",
        "DicePool": "Presence + Intimidation + Confuse; target rolls Resolve + Composure",
        "Effect": [
            "The monster spends 1 Willpower and glances at the target to activate this power. A successful attack overwhelms the target with vertigo and confusion.",
            "<b>Dramatic Failure:</b> The monster can’t use the power again for the rest of the scene.",
            "<b>Failure:</b> The power fails to activate, but the monster may try again if it spends more Willpower the following turn.",
            "<b>Success:</b> The target is struck by a wave of mental confusion and vertigo, which overwhelms all higher thought processes. The target loses the 10-again quality on Mental rolls, and 1s rolled subtract from any successes gained. This includes perception rolls and dice pools based on Resolve. This confusion lasts until the end of the scene.",
            "<b>Exceptional Success:</b> The effect lasts until the following sunrise or sunset, whichever comes first.",
            {
                'Suggested Modifiers': [
                    { Modifier: "+2", Situation: "Enviroment is already hectic and filled with activity." },
                    { Modifier: "-2", Situation: "Target has the Meditative Mind Merit" },
                ]
            }
        ],
        "Book": "HTV 277"
    },
    {
        "Name": "Control Emotion",
        "Rank": "• to •••••",
        "Cost": "○",
        "Description": "Instill, control or cancel out an emotion in another",
        "FullCost": "1 Willpower",
        "Action": "Contested; victim rolls Resolve + Composure",
        "DicePool": "Manipulation + Persuasion + Control Emotion",
        "Effect": [
            "Vampires sometimes like to induce certain emotions in their prey, theorizing that such intense emotions add flavor to their blood. Others simply induce lust or pleasure in their victims, making the job of seducing them into a position where they can be fed from that much simpler.",
            "The most insidious use of this Dread Power is its application as a tool of brainwashing and conditioning. By judiciously applying emotional pressure to the victims—bursts of despair and self-doubt, followed by waves of emotional fulfillment and a sense of joy and of being loved, as well as love for the vampire—the vampire can secure long-term loyalty from his herd of followers, bypassing the need to gain their trust the hard way.",
            "<b>Dramatic Failure:</b> The victim sees right through the vampire’s manipulations. The vampire can’t affect the victim with this Dread Power for the rest of the night.",
            "<b>Failure:</b> The vampire fails to affect the victim.",
            "<b>Success:</b> The vampire controls the victim’s emotional state, making her feel the desired emotion. She feels anger, grief, sexual arousal, anger, fear or similar emotion, and believes it to be her own. The effect applies as a Social penalty to the victim’s Composure in all Social rolls involving that emotion for the rest of the scene.", 
            "Used for conditioning purposes, successes rolled for this Dread Power are added to the vampire’s extended action rolls to brainwash the victim.",
            "<b>Exceptional Success:</b> The emotion is inhumanly intense, causing the victim strain: any attempts to perform an action contrary to the emotion felt (i.e saying kind words while angry) suffer a -2 penalty.",
        ],
        "Book": "NS 171"
    },
    {
        "Name": "Corpse Door",
        "Rank": "•••••",
        "Cost": "○○○",
        "Description": "Teleport by using a dead body as the gate",
        "FullCost": "3 Willpower",
        "Action": "Instant",
        "DicePool": "Wits + Occult + Willpower (or Potency – see <i>Night Stalkers</i>, pp. 157-158)",
        "Effect": [
            "The monster is able to literally “travel” long distances in a very short time (one turn) by crawling out of the chest of corpses. (This is, for lack of a better term, a teleportation power done up in a very grisly mode.) Each success gained on this roll equals 50 square miles of potential travel — the creature can’t exactly pinpoint where she’ll appear, but she will appear out of the nearest possible corpse to her intended destination or target victim. It takes her three full turns to wriggle free from the corpse. The corpse itself needn’t be dead any particular amount of time, but must have a body with the torso still intact and still have some flesh (at least 25%) hanging on the bones. The creature can only use Corpse Door once per 24-hour period.",
        ],
        "Book": "BD 7"
    },
    {
        "Name": "Crushing Blow",
        "Rank": "•••",
        "Cost": "○○",
        "Description": "Inflict lethal damage for a scene",
        "FullCost": "2 Willpower",
        "Action": "Instant",
        "DicePool": "None",
        "Effect": [
            "All bashing damage that this creature deals with his body (fist, foot, head, elbow, whatever) is instead done as lethal damage. This power lasts until the end of the scene.",
        ],
        "Book": "HTV 278"
    },
    {
        "Name": "Curse of Failings",
        "Rank": "• to •••••",
        "Cost": "○○",
        "Description": "Issue a curse of doubt for a matter of weeks.",
        "FullCost": "2 Willpower",
        "Action": "Instant",
        "DicePool": "Manipulation + Occult + Curse of Failings",
        "Effect": [
            "The pain of memory can be turned into a devastating force that renders hearts in two and freezes victims with doubt and insecurity. This Dread Power curses its victim with visions and memories of lost loves, lost opportunities, and other actions he wishes he could do over. Everything the victim does acts as a reminder of a personal failing. This leaves the victim drained, second guessing his every action. For some, this manifests as a mental paralysis, being unable to act at all, for fear of massive failure.",
            "This Dread Power requires the victim hear the monster’s words. The monster expresses to the victim a seed of doubt. The victim does not need to understand the monster’s words; he just needs to hear them. Unless the character is assured of his success, doubt will set in, and memories of past failings will haunt his immediate actions.",
            "The victim suffers a Persistent Doubtful Condition. It causes a penalty equal to the monster’s Curse of Failings dots to any actions the victim takes with five or fewer dice (this limitation applies after all modifiers). Any such rolls that fail are automatically considered dramatic failures, offering the character a Beat. The effect eventually fades after a week per dot of the monster’s Curse of Failings. If it fades, the character does not earn a Beat. The character can resolve it by learning a risky or harmful lesson in the present that offers a new perspective on a past failing.",
            "<b>Dramatic Failure:</b> The curse falls on the monster, instead of the victim.",
            "<b>Failure:</b> The power fails.",
            "<b>Success:</b> The victim suffers the Condition.",
            "<b>Exceptional Success:</b> Not only does the curse take, but the Condition will not fade over time. It must be resolved, or it persists.",
        ],
        "Book": "HMR 147"
    },
    {
        "Name": "Curse of Words",
        "Rank": "• to •••••",
        "Cost": "○○",
        "Description": "Issue a curse of distracting voices for a matter of days.",
        "FullCost": "2 Willpower",
        "Action": "Instant",
        "DicePool": "Manipulation + Occult + Curse of Words",
        "Effect": [
            "A victim’s worst fears are triggered by the persistent sound of fearful screams that echo in his mind. This Dread Power allows the monster to curse its victim with distracting, frightening voices. Depending upon when this Power is used, these sounds can cripple a victim at inopportune times, but will pull at the back of his mind for some time, before the voices encompass him in a frightening cacophony of noise.",
            "This Dread Power requires the victim hear the monster’s words. Many monsters with Curse of Words will confidently express the curse to the victim; some mumble esoteric languages, while others use completely unrelated phrases. Monsters may curse victims with the voices of their dead family members, the chattering of alien beasts, or the sounds of children playing loudly. Each monster expresses this Dread Power differently.",
            "Once active, the victim suffers a Vocalization Condition. This distraction removes the 10-again quality from the victim’s rolls until resolved. To resolve the Condition, the victim must roll a chance die on a meaningful action, reflecting the voices building to a crescendo. Alternatively, the voices vanish after one day per dot of Curse of Words the monster possesses.",
            "<b>Dramatic Failure:</b> The voices do not take, and the victim is now immune to this Dread Power going forward. The monster cannot use the power on the victim ever again.",
            "<b>Failure:</b> The power fails.",
            "<b>Success:</b> The victim suffers the Condition.",
            "<b>Exceptional Success:</b> The Condition lasts for double the time without resolution. Ignore the first success on any of the victim’s rolls until resolved.",
        ],
        "Book": "HMR 147"
    },
    {
        "Name": "Damnation",
        "Rank": "• to •••••",
        "Cost": "○○○",
        "Description": "Target loses ability to regain Willpower through any avenue other than Vice for one month",
        "FullCost": "3 Willpower",
        "Action": "Extended and Contested; each roll represents one hour in which both parties struggle mentally against one another; if this struggle is at any point interrupted or broken up, the struggle ends",
        "DicePool": "Wits + Occult + Damnation vs. target’s Resolve + Composure",
        "Effect": [
            "The target affected by this Dread Power can’t regain Willpower except through indulging her Vice. She also cannot regain Willpower through fulfilling her Virtue — she can still act virtuously, but no mechanical reward awaits.",
            "Fulfilling the Vice regains Willpower normally. Fulfilling the Vice in a way that leads to a degeneration roll regains all spent Willpower, regardless of whether the degeneration roll succeeds or fails.",
            "The number of successes required by the demon is the target’s Morality times three.",
            "The curse lasts for one lunar month. However, if the creature who cast Damnation to begin with is destroyed during this time, the curse ends early.",
        ],
        "Book": "HTV 278"
    },
    {
        "Name": "Dark Gate",
        "Rank": "• to •••••",
        "Cost": "○○○○○",
        "Description": "Align and attune a portal between two points as an extended action.",
        "FullCost": "5 Willpower",
        "Action": "Extended",
        "DicePool": "Intelligence + Occult + Dark Gate",
        "Effect": [
            "The shortest distance between two points isn’t a straight line, but a magical door that allows the monster to quickly step where others can’t. This Dread Power allows a monster to mystically connect two locations. She steps through one portal, doorway, arch, or other passage, and emerges from the other. Many monsters use the Dark Gate for emergency escape and ambush routes. Some use it to build access points to victims, or even to steal valuable items at opportune times.",
            "To open the Dark Gate, the monster must spend hours attuning each location. Each roll takes a half an hour, and half the successes must be garnered at each site. The Whole process requires four successes. If the distance is more than ten miles, it requires eight. If it’s more than 100 miles, it requires twelve. Any Gates leading to a different continent require twenty successes.",
            "Once established, the monster may step through the Dark Gate at any time with the expenditure of a Willpower point. Others may step through if they know how it works (usually explained by the monster), and are touching the monster or one of its personal possessions. Usually, passing through a Dark Gate requires an instant action.",
            "After a Dark Gate has been established, it remains in effect until somehow dispelled, or until the monster revokes it. A monster may establish a number of Dark Gates equal to his Dark Gate Dread Power dots.",
            "<b>Dramatic Failure:</b> The gate refuses to take. The given portal will never take a Dark Gate from the monster.",
            "<b>Failure:</b> Add no successes to the total.",
            "<b>Success:</b> Successes are added to the total.",
            "<b>Exceptional Success:</b> With an Exceptional Success, the created gate can be passed through with a reflexive action instead of an instant action.",
        ],
        "Book": "HMR 147"
    },
    {
        "Name": "Dead Flesh",
        "Rank": "• to •••••",
        "Cost": "—",
        "Description": "When harmed, downgrade a point of non-aggravated damage for each dot.",
        "FullCost": "None",
        "Action": "Reflexive",
        "DicePool": "This Dread Power is not rolled",
        "Effect": [
            "Some monsters are little more than moving corpses; puppeteers controlling bags of meat and bone. For these monsters, harm to the body is largely meaningless. Cuts and tears mean nothing to the undead. Vampires commonly possess this Dread Power, as do creatures that possess or control corpses.",
            "From each source of harm, the monster downgrades damage up to her Dead Flesh dots from lethal to bashing, or from bashing to nothing.",
            "For example, a vampire with three dots of Dead Flesh that suffers a five lethal damage attack only takes two lethal and three bashing damage. If she suffered five bashing, she’d only take two bashing. If she has sufficient dots to downgrade all suffered lethal, additional dots ignore levels of bashing damage.",
            "Thus, a vampire with three dots of Dead Flesh that suffers a two lethal damage wound would first downgrade both points to bashing, then ignore one of those two bashing.",
            "This Dread Power has no effect on aggravated damage.",
        ],
        "Book": "HMR 148"
    },
    {
        "Name": "Degradation",
        "Rank": "• to •••••",
        "Cost": "○",
        "Description": "Erode a touched object’s Durability.",
        "FullCost": "1 Willpower",
        "Action": "Reflexive",
        "DicePool": "Stamina + Brawl + Degredation",
        "Effect": [
            "Rust eats away at metal. The slow march of time weathers stone, turning blocks of granite into fine dust. The material world eventually fades, and some monsters can accelerate that process. With this Dread Power, the monster can devastate physical objects with a single touch. For some monsters, this is simply a mystical affinity for material objects. However, this Dread Power could also reflect an acidic secretion, or the ability to decay and age items with a touch. No matter the cause, objects become brittle and fall apart within seconds.",
            "This Dread Power requires touch to activate. Successes translate to lost Durability on the object touched. Then, when Durability is gone, successes destroy Structure. It can be activated reflexively any time the monster touches an object.",
            "This Power can also be administered if the creature attempts to break the object through brute strength. Depending on the monster and the method, certain objects may be immune. For example, treated glass may be immune to acidic secretions.",
            "Magical items subtract any relevant dot ratings from the monster’s dice pool to activate Degredation.",
            "<b>Dramatic Failure:</b> The object rejects the monster’s efforts, and the monster takes 3 lethal damage from the strain.",
            "<b>Failure:</b> The object does not degrade.",
            "<b>Success:</b> Successes remove Durability then Structure.",
            "<b>Exceptional Success:</b> Ignore the object’s Durability; apply successes directly to its Structure.",
        ],
        "Book": "HMR 148"
    },
    {
        "Name": "Dement",
        "Rank": "• to •••••",
        "Cost": "○",
        "Description": "Cause a mild derangement or upgrade an existing one for days equal to rating",
        "FullCost": "1 Willpower",
        "Action": "Extended and Contested; resistance is reflexive",
        "DicePool": "Presence + Occult + Dement vs. target’s Resolve + Composure",
        "Effect": [
            "This Dread Power assaults the target’s mind with nightmarish visions, breaking down the target’s sanity. If the creature wins the contest, the target gains a mild derangement chosen by the Storyteller for one day equal to the creature’s dots in Dement. If the target already possesses a mild Derangement, it is upgraded to its severe version instead.",
        ],
        "Book": "HTV 278"
    },
    {
        "Name": "Destiny",
        "Rank": "• to •••••",
        "Cost": "—",
        "Description": "Gain extra \"destiny dice\" per story, and a nemesis who causes a detriment to the destiny dice pool",
        "FullCost": "None",
        "Action": "None",
        "DicePool": "None",
        "Effect": [
            "This creature is bound to the crass weave and weft of fate, for good or ill (probably for ill). For every story, the creature gains a pool of “destiny dice” equal to twice the number of dots the fiend possesses in this Dread Power. The monster may add these dice to any dice roll during that story, but once they’re spent, they do not return until the next story.",
            "<b>Drawback:</b> The fiend has a nemesis, an individual (or a type of individual) that is forever a thorn in the monster’s side (such as an individual hunter, or all the hunters of, say, the Union). Whenever that character or type of character comes into play, the monster’s dice pool is penalized by one die per dot in Destiny possessed. This only applies to dice rolls directly dealing with the nemesis, however.",
        ],
        "Book": "BbBB 5"
    },
    {
        "Name": "Drain",
        "Rank": "• to •••••",
        "Cost": "—",
        "Description": "Cause damage or sap Willpower equal to dots per turn, recovers Willpower or Health for antagonist",
        "FullCost": "None",
        "Action": "Instant",
        "DicePool": "This power is not rolled",
        "Effect": [
            "The most dreaded power of vampires, other than turning mortals into monsters like them, is the ability to suck the life out of their victims with a bite. That said, this lifeleeching ability is said to be possessed by a number of horrors: soul-stealing witches, jubilant succubi, or some accursed shapeshifters.",
            "This Dread Power draws forth either a victim’s Willpower or Health. The monster must physically touch the target (see “Touching an Opponent,” the World of Darkness Rulebook, p. 157). The demon spends an Instant action to attack the target with this power.",
            "The trait being drained (Health or Willpower) is chosen by the Storyteller, and may not be changed later. Vampires typically drain mortals’ Health through blood loss, though some drain Willpower points instead; either way, they drain with their bite, requiring that they must first spend an action grappling an opponent, and then spend the next turn’s action biting the victim while the victim is restrained. (See pp. 157–159 in the World of Darkness Rulebook.) The victim may struggle each turn unless held in place with another power, such as Agonize, above, or Ecstasy, below.",
            "The amount of the trait drained each turn is determined by the monster’s dots in Drain. The monster gains those drained dots as Health or Willpower per turn.",
            "<b>Variant:</b> The monster drains a sleeping victim of her restful sleep. The victim loses a number of hours of sleep equal to the monster’s dots in Drain. Each hour lost converts to 1 Willpower for the monster. The victim loses her Willpower for that morning, and must roll Stamina or suffer the effects of Fatigue as if she’d not slept for 24 hours (see p. 179 of the World of Darkness Rulebook). She must also sleep the following night an extra number of hours equal to those lost the previous night, or the fatigue penalty will remain. The monster may only drain a given victim of sleep once in any given night.",
        ],
        "Book": "HTV 278"
    },
    {
        "Name": "Dread Attack",
        "Rank": "• to •••••",
        "Cost": "(○)",
        "Description": "Deal one point of lethal per dot on a successful brawl attack",
        "FullCost": "None or 1 Willpower",
        "Action": "Instant",
        "DicePool": "None, though attack rolls must be made to utilize this power’s benefit.",
        "Effect": [
            "Vampires have fangs, werewolves have claws, and a slasher never quite lets go of that first machete. The Dread Attack covers anything that cuts or rends, and is hard or impossible to separate from its owner. Whether or not it’s physically a part of the monster, a Dread Attack always finds its way back to his hand, and almost as often into the gut of his prey. This Dread Attack is always accessible; a vampire’s razor appears in her hand as swiftly as her fangs extend. In combat, the character deals +1 point of lethal damage for each dot in this ability.",
            "Examples include a vampire’s fangs, a werewolf’s powerful jaw and claws, a fiend’s whipping tail, a slasher’s favorite cleaver (which always seems to appear in his hands). If the Dread Attack modifies one’s bite, then a grapple is no longer necessary to do damage with that bite.",
            "Note that any creature whose example of a Dread Attack is not a part of his body (the aforementioned slasher’s cleaver, for instance) necessitates 1 Willpower point to “summon” the weapon reflexively to hand. Some other creatures may also need to expend Willpower to push talons through fingertip flesh or fangs through gums.",
        ],
        "Book": "HTV 278"
    },
    {
        "Name": "Dream Seeing",
        "Rank": "• to •••••",
        "Cost": "—",
        "Description": "Read a character’s subconscious by viewing their dreams.",
        "FullCost": "None",
        "Action": "Instant",
        "DicePool": "Wits + Occult + Dream Seeing",
        "Effect": [
            "Dream Seeing allows a monster to literally see and experience a victim’s dreams. She reaches into the subject’s mind, and invades his personal dream space. She cannot interact with the dreams (at least, not with this Dread Power), but she can learn more about her victim, and potentially influence his future dreams with daytime activity.",
            "This Dread Power lays the foundation for two later Dread Powers: Dream Shaping and Dream Walking. A monster must have Dream Seeing before she can use the others. The other two Dread Powers cannot exceed her Dream Seeing dots.",
            "The monster must see the dreamer to activate the power, either directly, through divination, or through live feed surveillance technology. While concentrating, her perceptions enter the dreamer’s mind. Though the monster cannot directly influence dreams, she can learn about the dreamer’s subconscious. Through waking influence, she may be able to influence future dreams. For example, if a monster knows that her victim fears public nudity, she can throw that anxiety in the dreamer’s face to allow nightmares to flourish.",
            "For each success on the activation roll, you may ask one yes or no question about the victim’s subconscious. This should be answered within the narrative of the dream. Because of the yes/no nature of the questions, Dream Seeing works best of the monster knows the victim beforehand.",
            "<b>Dramatic Failure:</b> The power fails. For the following week, the monster has harrowing dreams that feature the would-be victim prominently.",
            "<b>Failure:</b> The power fails.",
            "<b>Success:</b> The monster perceives the victim’s dreams. Each success allows for a yes/no question, as detailed above.",
            "<b>Exceptional Success:</b> In addition to the yes/no questions, the victim’s player must reveal any Persistent Conditions his character suffers.",
        ],
        "Book": "HMR 148"
    },
    {
        "Name": "Dream Shaping",
        "Rank": "• to •••••",
        "Cost": "○",
        "Description": "Requires Dream Seeing. Alter and shape someone’s dreams.",
        "FullCost": "1 Willpower",
        "Action": "Instant, Resisted",
        "DicePool": "Manipulation + Occult + Dream Shaping - Resolve",
        "Effect": [
            "<b>Prerequisite:</b> Dream Seeing",
            "With this Dread Power, the monster cannot only see her victim’s dreams, but can also manipulate and shape them to her will. She can create magnificent visions or terrifying nightmares that stay with the victim for the rest of his life.",
            "This power requires the monster have as many or more dots in the Dream Seeing Dread Power.",
            "The monster can create, manipulate, and shift the features of a victim’s dreams.",
            "The effects of this Dread Power are largely variable, since dreams will have different effects on different victims. Create an appropriate Condition to cover the effects.",
            "As a rule, normal Conditions are fine for most situations. However, if the monster uses integral hopes, fears, Aspirations, Virtues, Vices, or other personal qualities as leverage in the dream space, the resulting Conditions can be quite massive and traumatizing.",
            "An exceptional success causes a Persistent Condition. This should be resolved through long-term, meaningful actions in the story, like group therapy or psychiatric counseling. Additionally, if the monster dies, the victim should be released from the effects.",
            "<b>Dramatic Failure:</b> The power fails. The dream also features an image of the monster, in whatever forms – any and all – the victim might be familiar with. He knows that she had somehow invaded his mind.",
            "<b>Failure:</b> The power fails.",
            "<b>Success:</b> The monster can shape the victim’s dream as she sees fit. Work with the victim’s player to create an appropriate Condition.",
            "<b>Exceptional Success:</b> The Dread Power succeeds. Additionally, the Condition is Persistent.",
        ],
        "Book": "HMR 148"
    },
    {
        "Name": "Dream Walking",
        "Rank": "• to •••••",
        "Cost": "○○",
        "Description": "Requires Dream Seeing. Physically enter a subject’s dreams.",
        "FullCost": "2 Willpower",
        "Action": "Instant",
        "DicePool": "Presence + Occult + Dream Walking - Resolve",
        "Effect": [
            "With Dream Walking, the monster can not only see a victim’s dreams as an outside observer, but can also physically enter them. She ceases to exist in the material world, and lives only within the scope of the victim’s subconscious. This power requires the monster have as many or more dots in the Dream Seeing Dread Power.",
            "The monster peers into the victim’s subconscious, then steps through a window, closet, or door, and enters the dream. As long as the victim sleeps, the monster remains in the dream space.",
            "The monster operates in the dream as if she existed in material reality. Her actions are bound by the confines of the dream’s logic. She cannot affect the outside environment any differently. However, a monster with the Dream Shaping Dread Power can manipulate the dreams she inhabits.",
            "In the dream, the monster can suffer injuries or even death. A savvy dreamer can spend a point of Willpower and make a Composure + Resolve roll to regain control of the dream for a scene, if he achieves as many successes as the monster’s activation. The victim can use the dream to harm the monster, using his Intelligence + Investigation as a dice pool, where the monster uses the lower of its Wits + Resolve as a surrogate “mental Defense” score. Use the narrative context of the dream to determine types and amounts of damage.",
            "If the victim dies while the monster has manifested in his dream, she’ll emerge back into reality with her entire health track full of lethal damage.",
            "Leaving the dream requires an instant action to accomplish.",
            "<b>Dramatic Failure:</b> The power fails. The monster is ejected from the dream, with a health track full of bashing damage.", 
            "<b>Failure:</b> The power fails.",
            "<b>Success:</b> The monster vanishes from the material world, and finds herself in the victim’s dreams. She can interact with the dream space in the same way she interacts with the real world, and may use her Dread Powers.",
            "<b>Exceptional Success:</b> Halve any damage the monster takes from the dream back into reality.",
        ],
        "Book": "HMR 149"
    },
    {
        "Name": "Earthquake",
        "Rank": "• to •••••",
        "Cost": "○○○○○(○○○○○)",
        "Description": "Inflict the Earthquake Tilt on an area, whose effects you ignore.",
        "FullCost": "5 or 10 Willpower",
        "Action": "Instant",
        "DicePool": "Strength + Occult + Earthquake",
        "Effect": [
            "The earth shakes and fissures crack open, forcing people to fall, streetlights to crack in half, and cars to crash. With this Dread Power, the monster shakes the ground, destroying infrastructure and damaging people. For some monsters, this supernatural quake appears as a dark prayer to the spirits of the Earth. For others, they strike the earth with massive strength, and shatter the ground beneath their feet.",
            "The monster causes an earthquake. It creates massive environmental damage, radiating outward ten yards per success with the 5 Willpower version. For 10 Willpower, the power can affect a mile per success.",
            "Everyone within ten yards per success suffers the Earthquake Tilt (The God-Machine Chronicle, p. 208). The Tilt causes one damage per turn at one or two dots of Earthquake, two at three or four dots, and three at five dots. The monster is immune to her own Earthquake effects.",
            "<b>Dramatic Failure:</b> The power fails. The Earth rejects the monster’s efforts, and the monster suffers the Earthquake Tilt for three turns.",
            "<b>Failure:</b> The power fails.",
            "<b>Success:</b> The monster creates an earthquake, which lasts one turn per success.",
            "<b>Exceptional Success:</b> Additional successes are their own benefit.",
        ],
        "Book": "HMR 149"
    },
    {
        "Name": "Ecstasy",
        "Rank": "• to •••••",
        "Cost": "○",
        "Description": "Freezes target for the rest of a scene assuming they aren't attacked",
        "FullCost": "1 Willpower",
        "Action": "Instant",
        "DicePool": "Presence + Intimidation + Ecstasy - target’s Stamina",
        "Effect": [
            "The monster spends Willpower and must physically contact the target in some way, by touching her or exhaling a spray or vapor in her face (different monsters achieve this effect in unique ways). The monster has to achieve surprise to use this power (see “Surprise” in the World of Darkness Rulebook, pp. 46 and 151, and “Touching an Opponent” on p. 157). Vampires apply Ecstasy as they feed, merely requiring a successful bite attack. Using Ecstasy to feed costs vampires no Willpower.",
            "This power transfixes the victim with a flood of undiluted pleasure.",
            "<b>Dramatic Failure:</b> Surprise is lost. The Dread Power does the opposite of its intended effect and causes horror and fright in the victim. The monster cannot succeed on Social rolls with that individual until the next sunrise or sunset, whichever comes first.",
            "<b>Failure:</b> The monster fails to infl ict Ecstasy on the target.",
            "<b>Success:</b> The target is transfixed with Ecstasy and cannot act for the rest of the scene, unless she is attacked violently (a vampire’s bite can be done without intimating attack). She must attempt a Resolve + Composure roll each turn to break free at a penalty of the dots in Ecstasy.",
            "<b>Exceptional Success:</b> As above, except that the victim must roll Resolve + Composure penalized by the dots in Ecstasy to avoid becoming addicted to the power (she gains the “Addiction” Flaw; see the World of Darkness Rulebook, p. 218).",
            {
                'Suggested Modifiers': [
                    { Modifier: "+2", Situation: "Target already has the Addiction Flaw." },
                ]
            }
        ],
        "Book": "HTV 278"
    },
    {
        "Name": "Elemental Form",
        "Rank": "• to •••••",
        "Cost": "○○",
        "Description": "Hybridize with a chosen element, halving inappropriate damage and using half Elemental Form as a weapon rating.",
        "FullCost": "2 Willpower",
        "Action": "Instant",
        "DicePool": "None; this power is not rolled.",
        "Effect": [
            "Fire. Wood. Metal. Water. Earth. Air. With this Dread Power, the monster becomes a choice element, chosen when taking the power. Her body becomes an amalgamation of her physical body and a specific element.", 
            "Once active, the monster becomes a hybrid of her element and herself.", 
            "For any attacks that wouldn’t normally hurt the element (like a gun against fire, for example), the attack does half damage, rounded down.", 
            "If she uses her body to cause harm, it acts as a weapon with a damage rating equal to half her dots in Elemental Form, rounded down.",
            "She can also use her body as a tool for whatever the chosen element may be useful for; the equipment modifier is equal to her dots in Elemental Form. For example, if her body is metal, she may use it to hammer in nails. This would add her dots in Elemental Form to her Crafts rolls.",
        ],
        "Book": "HMR 149"
    },
    {
        "Name": "Embolden the Mob",
        "Rank": "• to •••••",
        "Cost": "○○",
        "Description": "Uninhibit a group of people and inflict impulsiveness.",
        "FullCost": "2 Willpower",
        "Action": "Instant",
        "DicePool": "Presence + Expression + Embolden the Mob",
        "Effect": [
            "Embolden the Mob creates a powerful, false courage and artificial confidence in a group of people. They immediately lose their sense of apprehension and act on impulse; often times, dangerously so, for the the mood of any mob is its own power. While it doesn’t make a group inherently hostile, it does foster less-reserved reactions.",
            "This causes an Emboldened Condition that gives a -2 (or -5 with Exceptional Success) to all the victims’ Resolve + Composure rolls to resist impulse or temptation.",
            "<b>Dramatic Failure:</b> The cloud not only fails, but the monster suffers the effects of success herself.",
            "<b>Failure:</b> The power fails.",
            "<b>Success:</b> The monster creates the cloud.",
            "<b>Exceptional Success:</b> Additional successes add the stronger version of the Emboldened Condition mentioned above.",
        ],
        "Book": "HMR 150"
    },
    {
        "Name": "Enhanced Senses",
        "Rank": "• to •••••",
        "Cost": "—",
        "Description": "Improve and enhance the senses",
        "FullCost": "None",
        "Action": "Reflexive",
        "DicePool": "None. This power is considered on when the vampire demands it.",
        "Effect": [
            "The power to track their prey by scent, or by following the sound of their frantic heartbeats, is a thrilling Dread Power for vampires. This Dread Power also enhances the rush of feeding for the vampire beyond any pleasure experienced by a human.",
            "The vampire’s senses expand far beyond human capacity. She can hear the worms turning in the ground beneath her feet, identify a song being played on an MP3 player across a room, or track a particular human through a crowd by their scent.",
            "The vampire gains night vision such that he can read by faint moonlight; his scent tracking is as accurate as that of a wolf; his hearing is as acute as a bat, and can pick up sounds at frequencies which lie beyond the range of human hearing.",
            "All Perception rolls and Wits + Composure rolls to react to surprise gain +1 bonus dice per dot of Enhanced Senses.",
            "<b>Drawback:</b> Loud sounds, bright lights and pungent odors stun the vampire when this power is active, inhibiting her actions as long as the stimuli remain; in such an environment all her actions, including Initiative and reacting to surprise, are penalized by -1 per dot in Enhanced Senses.",
        ],
        "Book": "NS 171"
    },
    {
        "Name": "Eye for Desire",
        "Rank": "• to •••••",
        "Cost": "○",
        "Description": "Intuit a subject’s Vice.",
        "FullCost": "1 Willpower",
        "Action": "Instant",
        "DicePool": "Wits + Empathy + Eye for Desire",
        "Effect": [
            "Some monsters can peer into the soul, and see a victim’s weakness. Many demons can see and subsequently exploit a person’s flaws. Some vampires cultivate this ability in order to tempt victims into vulnerable positions for feeding.",
            "This Dread Power allows a monster to learn a victim’s Vice. Once successful, the monster knows the victim’s Vice. If the victim has multiple Vices, the monster identifies each.",
            "<b>Dramatic Failure:</b> The monster reveals her own Vice to the victim.",
            "<b>Failure:</b> The Vice remains hidden.",
            "<b>Success:</b> The victim’s Vice is revealed. When the monster acts on that Vice, she enjoys a +1 bonus on any relevant rolls. On any social maneuver (see The God-Machine Chronicle, p. 188), ignore the first two Doors.",
            "<b>Exceptional Success:</b> The victim’s Vice is revealed. When the monster acts on that Vice, she enjoys a +3 bonus on any relevant rolls. On any social maneuverm ignore the first three Doors."
        ],
        "Book": "HMR 150"
    },
    {
        "Name": "Flicker and Flash",
        "Rank": "• to •••••",
        "Cost": "○",
        "Description": "Move instantaneously up to your Speed + Flicker and Flash and take a bonus to Defense.",
        "FullCost": "1 Willpower",
        "Action": "Reflexive",
        "DicePool": "Dexterity + Athletics + Flicker and Flash",
        "Effect": [
            "This Dread Power allows the monster to step across spaces so quickly, she may as well be teleporting. The monster moves in short bursts, so quickly that anything without supernatural senses cannot see her do so. For hunters, this means facing an opponent that takes a little more than raw power to stop, as she can dart from harm’s way with no notice.",
            "Successful use of this Dread Power adds the monster’s successes to her Defense for the turn, and allows her to reflexively move her Speed, plus her Flicker and Flash dots. If she uses Flicker and Flash reflexively before an attack roll is made, she might move out of its range and avoid it altogether. She can only activate Flicker and Flash a number of times equal to her dots in a turn. However, take the highest rolled successes to modify her Defense; the effect is not cumulative.",
            "<b>Dramatic Failure:</b> The monster stumbles. She takes the Knocked Down Tilt (see The God-Machine Chronicle, p. 211) and loses her Defense for the turn.",
            "<b>Failure:</b> The power fails.",
            "<b>Success:</b> The monster can move up to her Speed plus her Flicker and Flash dots, and her successes add to her Defense for the turn.",
            "<b>Exceptional Success:</b> Additional successes are their own reward.",
        ],
        "Book": "HMR 150"
    },
    {
        "Name": "Fluid Lessons",
        "Rank": "• to •••••",
        "Cost": "○",
        "Description": "Divine about a character and their future using a chosen bodily fluid.",
        "FullCost": "1 Willpower",
        "Action": "Instant",
        "DicePool": "Wits + Investigation + Fluid Lessons",
        "Effect": [
            "By examining another’s bodily fluids, the monster can discern certain truths about that person, even events that have yet to happen. The monster looks into the mystical patterns that flow through the person’s bile. Most monsters have a fluid of choice that they focus on, though technically blood, saliva, urine, vitreous fluid, or other fluid bodily excretions can act as the vehicle for this divination.",
            "For every fairy that can use this dark gift for frightening object lessons, another creature pretends to predict the future, to disastrous ends for the subject. The visions are also unique to the monster. Some see visions in a pool, while others must taste the fluid and dream of the person.",
            "Successful divinations are questions about a specific person formed to provide a yes/no response. As Storyteller, you can ask the player questions about their character’s background, or you can come up with vague truths about their potential future. If this Power is used on Storyteller characters, simply make up relevant facts.",
            "Often, the monster will allow the subject or a client to ask the questions, or coaxes queries out as part of a “cold read.” On a successful roll, the monster receives a number of answers equal to her Fluid Lessons Dread Power dots.",
            "The divinations are revealed in the form of imagery and arcane symbols, so clarity often leaves something to be desired. The monster, or any subject clued in on the visions, can attempt to draw clarity from the images. This requires an Intelligence + Investigation roll. Once interpreted, they offer the Informed Condition (The God-Machine Chronicle, p. 182).",
            "<b>Dramatic Failure:</b> The information is tainted and the divination backfires. Instead of obtaining answers about a specific subject, the divination will reflect a negative truth about the monster’s past, present, or future. If revealed to outsiders, this revelation could offer clues about a weakness or vulnerability.",
            "<b>Failure:</b> The power fails. Fate offers no answers.",
            "<b>Success:</b> The monster receives answers to her questions.",
            "<b>Exceptional Success:</b> The answers given are so clear they don’t require further interpretation. They provided the Informed Condition with no further effort.",
        ],
        "Book": "HMR 150"
    },
    {
        "Name": "Fury",
        "Rank": "• to •••••",
        "Cost": "○○",
        "Description": "Cause characters to go berserk and attack everyone",
        "FullCost": "2 Willpower",
        "Action": "Contested; resistance is reflexive",
        "DicePool": "Manipulation + Persuasion + Fury versus target’s Resolve + Composure",
        "Effect": [
            "The target explodes into a wild frenzy of fury. The target goes berserk and attacks everyone and everything in sight, and cannot be reasoned with. All attempts, by mundane means or supernatural, to coerce or control him are at a dice pool penalty of -2. The target’s moral center is overwhelmed by this fury, and he will attack with murderous intent.",
            "When the target emerges from his wild fury, he is likely to feel great remorse and confusion over his actions. The target is likely to have to make a degeneration roll if he was induced into a frenzy amongst a crowd of people, for example, but gains +2 to that roll (as some part of him recognizes his distance from the atrocity).",
            "<b>Dramatic Failure:</b> The subject cannot be affected by this power from any source for the rest of the night.",
            "<b>Failure:</b> The power fails to activate.",
            "<b>Success:</b> The power triggers as described above. The target remains in a frenzy for a number of turns equal to the monster’s Resolve + Composure score.",
            "<b>Exceptional Success:</b> In addition to the above, the target also loses 1 Willpower point.",
            {
                'Suggested Modifiers': [
                    { Modifier: "+3", Situation: "Enviroment is volatile and could explode into violence." },
                    { Modifier: "+2", Situation: "Target has the Vice of Wrath." },
                    { Modifier: "+1", Situation: "Enviroment is tense but not volatile." },
                    { Modifier: "-2", Situation: "Enviroment is calm and peaceful." },
                    { Modifier: "-2", Situation: "Target has the Virtue of either Fortitude or Temperance." },
                ]
            }
        ],
        "Book": "HTV 279"
    },
    {
        "Name": "Giant Size",
        "Rank": "••••",
        "Cost": "○/Size",
        "Description": "Grow up to +5 in Size",
        "FullCost": "1 Willpower per point of Size gained",
        "Action": "",
        "DicePool": "",
        "Effect": [
            "The creature’s Size (and its Health, if corporeal, and Corpus, if non-corporeal), increase by the points of Willpower spent (to a maximum of +5). Apart from increasing Health, dots in Giant Size also add to Intimidation dice pools. It lasts for one scene. It has, however, one drawback: for every point of Size gained, potential penalties from targeted attacks drop by one.",
        ],
        "Book": "HTV 279"
    },
    {
        "Name": "Ghost in the Machine",
        "Rank": "• to •••••",
        "Cost": "○",
        "Description": "Manipulate machines and tools at a distance for a scene.",
        "FullCost": "1 Willpower",
        "Action": "Instant",
        "DicePool": "Manipulation + Occult + Ghost in the Machine",
        "Effect": [
            "With this Dread Power, the monster uses her mental prowess to control machinery. With the same mental impulses that allow her arms to bend, she can remotely activate and use power tools. With the same synapses that trigger memories, she can dig through databases, searching for information.",
            "This Dread Power allows the monster to control electronic and mechanical devices. She can only use them as they are intended, but she can use them remotely, and without standard controls.",
            "<b>Dramatic Failure:</b> The power fails to work, and the device behaves erratically in the worst way possible, as if it was possessed.",
            "<b>Failure:</b> The power fails to work.",
            "<b>Success:</b> The monster can control the device for the remainder of the scene. For any turn she intends to change the device’s functionality, she must concentrate to turn it on or to turn it off.",
            "<b>Exceptional Success:</b> She can change the device’s functionality as a reflexive action.",
        ],
        "Book": "HMR 151"
    },
    {
        "Name": "Gift of Life",
        "Rank": "• to •••••",
        "Cost": "○",
        "Description": "Draw water from the earth for a day.",
        "FullCost": "1 Willpower",
        "Action": "Instant",
        "DicePool": "Intelligence + Occult + Gift of Life",
        "Effect": [
            "No mortal can survive without fresh water. With this Dread Power, the monster creates abundant, clean, life-bringing water. For many monsters, this Power functions as evidence of their innocence, and proves that they deserve to live, when confronted with hunters or pitchfork-wielding mobs. For some, it’s a bargaining chip to use when in the midst of a droughtridden mortal population. Entire cults have sprung up around monsters wielding this power, for their followers believe them to be a god.",
            "While the water does not materialize from the air, the monster is able to draw it from places it might not naturally spring from. Many monsters will strike the earth to produce a natural spring from a well-placed crack. Some will re-open a dry well or cistern. Monsters must be careful when wielding the Gift of Life, for the place where they draw water from must be able to contain the amount produced.",
            "At one dot, the creature produces enough water to keep a person healthy. At three, a family and their crops are safe. At five dots, the monster can keep an entire farming community nourished, even in a desert.",
            "<b>Dramatic Failure:</b> The power fails, and instead of water, a spring of bodily fluids comes forth. This may be blood, urine, semen, or whatever would seem worst in the moment.",
            "<b>Failure:</b> The power fails.",
            "<b>Success:</b> Water flows forth. For every success, the water will gush from that location for one full day.",
            "<b>Exceptional Success:</b> With an exceptional success, the monster can produce water in that spot for a full month.",
        ],
        "Book": "HMR 151"
    },
    {
        "Name": "Glitch",
        "Rank": "• to •••••",
        "Cost": "—",
        "Description": "Once a scene, when spending Willpower for a bonus, reroll up to your Glitch dots in dice through serendipitous coincidences.",
        "FullCost": "None",
        "Action": "Reflexive",
        "DicePool": "This Dread Power is not actively rolled",
        "Effect": [
            "In the World of Darkness, many monsters operate out of the corner of a mortal’s eye. This Dread Power allows the monster to bend reality ever-so-slightly in her favor. A gun is a half inch off mark, her jump is just a bit higher, or a book flips open to the right page. These subtle shifts can be remarkable in the right circumstances and impress or amaze others. This Dread Power is a common part of a demon’s repertoire; their ability to toy with reality gets them out of many binds.",
            "Glitch comes into play once per scene when the monster spends Willpower to add dice to a pool, or to bolster a resistance trait. When spending for more dice, after the roll, reroll a number of failed dice up to the monster’s Glitch dots. When spending to bolster a resistance trait, you may force the opponent to reroll successful dice equal to the monster’s Glitch dots.",
            "This manifests as subtle shifts in expectation, or bouts of remarkable luck. Really, what’s occurring is that the fabric of reality shifts to suit the monster’s immediate needs. Sometimes insignificant objects will appear or disappear from the environment in order to facilitate the monster’s desires. For example, a wall may just have a brick missing that serves as the perfect foothold. If anyone knew the wall well, they might notice the difference. But most observers would just assume the wall always had a hole in it.",
        ],
        "Book": "HMR 151"
    },
    {
        "Name": "Gremlinize",
        "Rank": "• to •••••",
        "Cost": "○/○○○",
        "Description": "Cause things to stop working up to a number of turns equal to dots",
        "FullCost": "1 or 3 Willpower",
        "Action": "Instant",
        "DicePool": "This power requires no roll",
        "Effect": [
            "The creature simply needs to touch the device, at which point the machine ceases to function for a number of turns equal to the dots in Gremlinize. Simple objects such as knives, door hinges and syringes are immune. Guns aren’t. If the machine affected is of greater Size than dots possessed in Gremlinize, the cost to activate this power becomes 3 Willpower, instead.",
        ],
        "Book": "HTV 279"
    },
    {
        "Name": "Haunting",
        "Rank": "• to •••••",
        "Cost": "○○○○○",
        "Description": "Claim a structure or area as an extended action, permitting Dread Power use there to ignore range.",
        "FullCost": "5 Willpower",
        "Action": "Extended",
        "DicePool": "Intelligence + Occult + Haunting",
        "Effect": [
            "Passersby steer clear of a dilapidated house. Investigators think twice before going into an abandoned warehouse. This power allows a monster to infest an area to use it as a tool, an intermediary for her other Dread Powers. The infected area is as good as her eyesight or touch, for the purposes of using her blasphemies on the innocent.",
            "To infect an area, the monster requires a number of successes reflective of the relative size and population affected. Each roll requires one full night of inhabitance, along with other, often disgusting practices unique to the monster. A werewolf might urinate on the chosen territory, while demons may adorn the zone with bits and pieces of victims.",
            "The size of the area impacted by Haunting depends upon the number of successes. A single room, or a comparable area, requires three successes. A small house requires six. A mansion nine. A field or block fifteen. Larger zones, like an entire metropolis or subway line, cannot be haunted. If a small group of humans resides in the targeted zone, double the required successes. If more than a family resides there, triple the requirement. A monster may not haunt a zone with more residents than three times her Haunting dots.",
            "Once active, she impresses her mystical might over a house, a graveyard, or another conceptual place. From that point forward, the monster may use the area as if it were her immediate line of sight or touch. For example, if she haunts a graveyard, and a hunter touches one of the tombstones, she might use a Dread Power that usually requires her touch to disorient the hunter.",
            "Note that, for Haunting to work, it has to be a reasonable connection; a vampire’s blood-drinking isn’t likely to manifest through the handrails of an old mansion. Then again, favor what’s best for your story in these cases. It’s also worth mentioning that use of this Power does not inherently extend the monster’s perceptions. The Lord of the Land Dread Power affords that advantage.",
            "Unless it’s somehow dispelled, the haunting lasts until the monster ends it. A monster may only have one such haunted zone at once.",
            "<b>Dramatic Failure:</b> The power fails. The selected grounds are forever immune to the monster’s haunting. From that point forward, all Dread Powers by that monster in that zone suffer -5 to activate.",
            "<b>Failure:</b> The monster accumulates no successes.",
            "<b>Success:</b> Successes are added toward the monster’s total.",
            "<b>Exceptional Success:</b> With an exceptional success, the monster also gains an ongoing +1 to all Dread Power usage on the haunted zone.",
        ],
        "Book": "HMR 151"
    },
    {
        "Name": "Hypnotism",
        "Rank": "• to •••••",
        "Cost": "○",
        "Description": "Issue a non-violent command",
        "FullCost": "1 Willpower",
        "Action": "Contested; resistance is Reflexive",
        "DicePool": "Manipulation + Expression + Hypnotism versus target’s Wits + Resolve",
        "Effect": [
            "The target is entranced by the monster’s voice, or gaze, or even scent. The monster needs only to hold the target’s attention long enough to implant a verbal suggestion.",
            "That suggestion could be simple, such as “Take your clothes off,” or complex, such as “Go to Riley’s bar, wait until you see a brunette in a blue dress and ask her if she’s a Libra.” A suggestion can’t overtly involve violence, such as “jump in front of that bus” or “shoot at those cops.”",
            "<b>Dramatic Failure:</b> The target sees right through the trick, and can’t be hypnotized again by this monster for the rest of the scene.",
            "<b>Failure:</b> The creature may try again next turn.",
            "<b>Success:</b> The target obeys to the best of her ability.",
            "<b>Exceptional Success:</b> The target goes so far as to believe the suggestions are her own idea in the first place.",
        ],
        "Book": "HTV 279"
    },
    {
        "Name": "Ignorance of the Flesh",
        "Rank": "••• or •••••",
        "Cost": "—",
        "Description": "Ignore bashing (and with five dots, lethal) damage; take aggravated damage from relatively common substance",
        "FullCost": "None",
        "Action": "Ability is considered “always on”",
        "DicePool": "None",
        "Effect": [
            "At three dots, the creature in question can ignore bashing damage; it just fails to harm the fiend. At five dots, this is increased to being able to ignore lethal damage as well, meaning the creature only takes damage from aggravated sources. This Dread Power can manifest in different ways for different creatures: one reptilian thing might simply possess thick lizard skin, while a rampaging demon may be surrounded by some bleak miasma that seems to absorb certain attacks.",
            "<b>Drawback:</b> Taking this Dread Power, however, confers upon the creature a vulnerability. In much the same way a werewolf takes aggravated damage from silver, the creature suffers aggravated damage from sources or weapons made of a relatively common element (water, fire, gold, oak and so on).",
        ],
        "Book": "BbBB 6"
    },
    {
        "Name": "Impress",
        "Rank": "• to •••••",
        "Cost": "○",
        "Description": "Makes people impressed by the character",
        "FullCost": "1 Willpower",
        "Action": "Instant",
        "DicePool": "Presence + Expression + Impress, penalized by the highest Resolve in the area. If this Resolve can be affected, all others in the area are affected automatically",
        "Effect": [
            "The monster projects an aura about her, making her the center of attention to everyone affected in range of the effect. The wave expands outwards at a rate of yards per turn equal to the monster’s Presence in a hemisphere centered on the fiend. This lasts for one scene. Everyone caught in the area has the chance of being affected.",
            "<b>Dramatic Failure:</b> The monster’s attempt to sway the crowd fails utterly. She may not attempt to use this power on the same crowd at any time during the course of the night.",
            "<b>Failure:</b> The monster’s attempt fails to activate. She might try again in the following turn with the expenditure of another Willpower point.",
            "<b>Success:</b> The effect expands outwards as described above. As a result, the monster gains a number of bonus dice to Social rolls equal to successes rolled, though this bonus only applies to those affected by Impress.",
            "<b>Exceptional Success:</b> All affected also lose a Willpower point.",
            {
                'Suggested Modifiers': [
                    { Modifier: "+2", Situation: "Boring enviroment (e.g. a waiting room)." },
                    { Modifier: "-1", Situation: "Hectic, noisy enviroment." },
                    { Modifier: "-2", Situation: "Targets’ Resolve is higher than the monster’s Presence or Power." },
                ]
            }
        ],
        "Book": "HTV 280"
    },
    {
        "Name": "Inebriate",
        "Rank": "• to •••••",
        "Cost": "○",
        "Description": "Drug victims by touch.",
        "FullCost": "1 Willpower",
        "Action": "Instant and Contested",
        "DicePool": "Presence + Medicine + Inebriate versus the victim’s Stamina",
        "Effect": [
            "Alcohol impairs a mortal’s judgment and dulls the senses. Drugs alter a victim’s ability to run, to scream, and to fight off an attacker. This Dread Power allows the monster to affect a victim with the effects of inebriation. Every monster has a different drug of choice that their touch emulates, chosen when taking this Dread Power. The power requires touch, but most monsters have a distinct method for delivery. Some deliver its effects through bodily fluids; some through tiny needles in their flesh.",
            "The effect emulates a drug from The World of Darkness Rulebook, but as a Condition that lasts for one full night. Alternatively, create a custom Condition to reflect the monster’s specific Inebriate. It should offer a situational penalty equal to the monster’s dots in Inebriate. If it comes into play, its Toxicity is equal to the monster’s Inebriate dots.",
            "<b>Dramatic Failure:</b> The power fails, and the victim remains immune to the monster’s Inebriate power.",
            "<b>Failure:</b> The power fails.",
            "<b>Success:</b> The monster affects the victim if his successes exceed hers. The Inebriate takes hold.",
            "<b>Exceptional Success:</b> Not only does the Inebriate take effect, the victim also gains the Addicted Condition (The God-Machine Chronicle, p. 181) pertaining to the drug in question.",
        ],
        "Book": "HMR 152"
    },
    {
        "Name": "Inhabit",
        "Rank": "• to •••••",
        "Cost": "—",
        "Description": "Control surroundings (close doors, set off alarms, etc.) where a creature is bound",
        "FullCost": "",
        "Action": "",
        "DicePool": "Power + Resistance + Inhabit (or Intelligence + Crafts + Inhabit for manifested monsters)",
        "Effect": [
            "The Inhabit Dread Power represents a monster’s ability to manipulate the location to which it is tied. The monster must be tied to a location for the power to work.",
            "<b>Dramatic Failure:</b> The monster is unable to use Inhabit for the remainder of the scene.",
            "<b>Failure:</b> No aspects of the location are manipulated.",
            "<b>Success:</b> Each success rolled allows one normal, working aspect of the location to be manipulated. Examples include opening or closing all of the doors in a building, turning all the lights on or off, activating all of the fire alarms or sprinklers, using climate control to raise or lowed a building’s temperature or throttling the phone lines or Internet connections.",
            "<b>Exceptional Success:</b> No effect Beyond additional successes.",
            {
                'Suggested Modifiers': [
                    { Modifier: "-3", Situation: "The location is suffering significant damage (such as being on fire or during an earthquake)." },
                ]
            }
        ],
        "Book": "MWO 7"
    },
    {
        "Name": "Judgment of Guilt",
        "Rank": "•••••",
        "Cost": "○○○",
        "Description": "Force a degeneration roll, threatening penalties rather than Morality loss",
        "FullCost": "3 Willpower",
        "Action": "Contested; resistance is reflexive",
        "DicePool": "Presence + Manipulation vs. target’s Morality",
        "Effect": [
            "The target is faced with her own past. This Dread Power assaults the target’s mind with visions dredged up from the darkest part of the target’s own mind. Like Dement, this attack erodes the target’s moral core; unlike Dement, this is a straightforward assault on her Morality and sanity.",
            "<b>Dramatic Failure:</b> The target not only fails to suffer any extreme visions of moral decay, but seems suddenly bolstered and righteous, gaining +1 to any rolls made against the creature.",
            "<b>Failure:</b> The guilt fails to fall upon the target.",
            "<b>Success:</b> The target revisits every action that prompted a degeneration roll in her past (assume that, unless the Storyteller declares otherwise, this counts toward those rolls made in this particular story). She must make these degeneration rolls all over again, except this time, the result is not lost Morality but dice penalties. The target suffers a -1 dice penalty for each failed degeneration roll as she is plagued by constant waking visions and nightmares of her guilt.",
            "<b>Exceptional Success:</b> The target also gains a mild derangement of the Storyteller’s choice.",
        ],
        "Book": "HTV 280"
    },
    {
        "Name": "Lord of the Manor",
        "Rank": "• to •••••",
        "Cost": "○○○○○",
        "Description": "Claim a territory as an extended action, suffusing your senses through it and permitting mastery of the space within.",
        "FullCost": "5 Willpower",
        "Action": "Extended, each roll takes one minute",
        "DicePool": "Presence + Survival + Lord of the Manor",
        "Effect": [
            "Some monsters feel the best way to go on the offensive is to protect their tomb, haven, or home. With this power, the monster becomes attuned to a specific space, to control that area the way she would take command of her own body. The monster can reach through corners and drop from the ceiling. She can perceive, without needing to physically see, anywhere within that space. The monster knows all who enter, linger, and leave her domain.",
            "This Dread Power is common for mummies and other monsters long-buried in ancient tombs. Nature spirits, and other creatures that commune with the land, also use this as well.",
            "This Dread Power ties the monster to a temporary or permanent location that’s chosen when buying it. If temporary, the monster can use it in one specific type of place, such as the woodlands, industrial buildings, or in the bedrooms of sleeping mortals. The specificity is unique to the monster, and can be general (the woods) or very specific (highschool boiler rooms).",
            "If permanent, the Power becomes tied to a unique spot, and cannot change. However, the monster does not need to spend Willpower or roll to activate it.",
            "Activation requires five successes for a small room, ten for a house, and fifteen for a city block. Larger spaces cannot be controlled with this power.",
            "Once active, the monster can take any actions as if that space was an extension of herself. For example, she can reach through walls and out others. She can peer out one window and see through another. Be creative in these expressions, but understand there is a limitation. Any dice pools used through the space are limited to two times the monster’s Lord of the Land dot rating. Thus, at two dots, the monster may take four actions in a scene.",
            "The monster intuitively knows any time someone enters or leaves the territory. Any perception-based rolls or supernatural detection powers add her Lord of the Land rating as automatic successes.",
            "By spending a point of Willpower, the monster can drag things through the space, from one part to another. When incorporating objects, this action should employ a portal of sorts; for example, a monster might reach into a closet, through a window on the other side of the building, and drag a person through. This necessitates an additional activation roll, requiring a Willpower point and successes equal to the object or person’s Size. Pulling things through the territory only takes a turn per roll, though.",
            "<b>Dramatic Failure:</b> The land rejects her. For every accumulated success thus far, she takes one bashing damage. The power cannot be used on the same space again.",
            "<b>Failure:</b> The monster fails to garner any successes.",
            "<b>Success:</b> Successes are added to the monster’s total. If the required successes are achieved, the monster is attuned to the land.",
            "<b>Exceptional Success:</b> Additional successes get the monster closer to the required total faster.",
        ],
        "Book": "HMR 152"
    },
    {
        "Name": "Lurker in Darkness",
        "Rank": "• to •••••",
        "Cost": "○",
        "Description": "Gain bonuses to stealth and become almost invisible",
        "FullCost": "1 Willpower",
        "Action": "Reflexive",
        "DicePool": "Manipulation + Stealth + Lurker in Darkness",
        "Effect": [
            "The monster gathers ambient shadows around her, slipping out of sight. Successes add to the creature’s Dexterity + Stealth dice pool. She can move at a Speed up to twice the number of dots in Lurker in Darkness, or her own Speed, whichever is lower. She can take no other action whilst concealed.",
            "<b>Dramatic Failure:</b> The monster draws all eyes toward itself.",
            "<b>Failure:</b> The shadows fail to gather at the creature’s behest.",
            "<b>Success:</b> The effect expands outwards as described above. The monster can only be seen by those actively looking for it with a Wits + Investigation roll. This roll is contested against the successes earned on Lurker in Darkness’ activation.",
            "<b>Exceptional Success:</b> Those looking for the monster suffer a -2 penalty to the Wits + Investigation roll.",
            {
                'Suggested Modifiers': [
                    { Modifier: "+1", Situation: "Nighttime." },
                    { Modifier: "-1", Situation: "Bright lights (for example, fluorescence)." },
                    { Modifier: "-3", Situation: "Sun is shining upon the monster." },
                ]
            }
        ],
        "Book": "HTV 280"
    },
    {
        "Name": "Mist Form",
        "Rank": "•••••",
        "Cost": "○○",
        "Description": "Transform into an icy mist",
        "FullCost": "2 Willpower",
        "Action": "Instant",
        "DicePool": "No roll is necessary",
        "Effect": [
            "Legends tell of vampires turning into an icy, fine mist that moves of its own accord, even against the breeze. This Dread Power verifies the myth.",
            "The vampire concentrates and uses an action to turn into a cloud of fog or vapor, which can travel at his natural Speed in any direction—even against the breeze. Changing back into solid form necessitates the expenditure of another Willpower point. Normal weapons cannot harm a vampire in this state, while mystical attacks (or damage suffered from fire or sunlight) do one less damage to the vampire.",
        ],
        "Book": "NS 171"
    },
    {
        "Name": "Mixed Blessings",
        "Rank": "• to •••••",
        "Cost": "○/dot",
        "Description": "Gain advantage over a mortal through an offering of a chosen Merit.",
        "FullCost": "1 Willpower per dot of the Merit",
        "Action": "Instant",
        "DicePool": "Presence + Expression + Mixed Blessings",
        "Effect": [
            "Not every conflict between a hunter and a monster is resolved with bullets. Sometimes, the monster may try to cajole or negotiate her way out of a situation by promising hunters a boon. Other times, monsters recognize the frailty of mortals and leverage base desires against them. With this Dread Power, the monster can bless a mortal with certain advantages in Exchange for a degree of power over them.",
            "The offer must be clearly expressed to the would-be recipient, even though the drawback need not be. Initially, the mortal can decline the blessing. Such a refusal must be clear and definite; if the mortal has acknowledged the offer, but hasn’t clearly refused it within one week of the offer, the offer takes.",
            "When purchasing this Dread Power, choose a Merit with a dot rating equal to or less than the dots in the power. The Dread Power ties directly with that Merit; the monster can have multiple powers, each offering different Merits. The Merit can be any Merit from The God-Machine Chronicle, including supernatural Merits, but excluding the Virtuous Merit. If the mortal does not decline the offer, she receives the Merit, free of charge.",
            "The Merit lasts as many days as the roll had successes and the mortal suffers an Ensorcelled Condition for its duration. During this time, the monster achieves exceptional success on any roll against the mortal with three successes, and the mortal does not get 10-again on any roll against the monster. Defying the monster becomes a breaking point with a -2 penalty. At any time, the mortal can buy the Merit at half cost, rounded down. This makes the Condition Persistent. The Persistent Condition can then only be resolved with the monster’s destruction.",
            "<b>Dramatic Failure:</b> The magic backfires, and the monster receives the Ensorcelled Condition that was previously directed toward the mortal.",
            "<b>Failure:</b> The power does not take.",
            "<b>Success:</b> The mortal gains the Merit and the Condition. Both last a number of days equal to the successes rolled.",
            "<b>Exceptional Success:</b> With an exceptional success, the Ensorcelled Condition becomes Persistent, and so does the Merit. The mortal does not need to purchase the Merit.",
        ],
        "Book": "HMR 153"
    },
    {
        "Name": "New Face",
        "Rank": "• to •••••",
        "Cost": "○○",
        "Description": "Mimic people’s faces",
        "FullCost": "2 Willpower",
        "Action": "Instant",
        "DicePool": "Presence + Empathy",
        "Effect": [
            "The creature can mimic the facial features of someone he’s already met with supernatural accuracy. Bones may shift. Skin may darken or lighten or even gain appropriate pockmarks. This isn’t a perfect transition, but it allows her to add a bonus to dots in New Face to any Wits + Subterfuge Disguise attempts.",
        ],
        "Book": "HTV 280"
    },
    {
        "Name": "The Oldest Temptation",
        "Rank": "• to •••••",
        "Cost": "○",
        "Description": "Tempt someone towards a compulsion to murder, or weaken them from the strain of resistance.",
        "FullCost": "1 Willpower",
        "Action": "Extended and Contested, each roll takes one night’s time.",
        "DicePool": "Manipulation + Persuasion + The Oldest Temptation, contested by the victim’s Composure",
        "Effect": [
            "Cain. Abel. Brother fights brother. Lover attacks another. With this Dread Power, the monster whispers a temptation to a human target, and urges them to murder another. The whisper can be literal or metaphorical. Some demons speak to a subject’s mind; some monsters offer favors for compliance. Monsters typically wield The Oldest Temptation as a weapon. Others, however, are amused when a innocent victim takes up the knife.",
            "Once the monster reaches successes equal to the victim’s Willpower dots, the power takes effect. The victim must make a choice: murder the designated target, or resist the call.",
            "If the victim chooses to commit the murder, she gains a Beat and “Commit Murder” becomes a new, second Virtue for her. If she resists, she must spend a Willpower point per day for a number of days equal to the monster’s The Oldest Temptation dots. She also gains a Persistent Condition that gives her -3 to resist the monster’s Social actions and Dread Powers. If the monster scored an exceptional success, the Condition is -5. The Condition is only permanently resolved with the monster’s destruction.",
            "If the victim achieves successes greater than the monster’s dots in The Oldest Temptation before the monster succeeds, the power does not take effect.",
            "<b>Dramatic Failure:</b> The monster fails to tempt his victim. The human becomes resistant to the Dread Power in the future, and gains the Inspired Condition with respect to destroying the monster.",
            "<b>Failure:</b> The monster fails to garner any successes.",
            "<b>Success:</b> Successes are added to the monster’s total.",
            "<b>Exceptional Success:</b> Successes are added to the monster’s total. If the result of this roll achieves success, the resulting Condition is stronger.",
        ],
        "Book": "HMR 155"
    },
    {
        "Name": "The Primal Dirt",
        "Rank": "• to •••••",
        "Cost": "○",
        "Description": "While planted upon the earth, ignore damage up to dots in this Dread Power except from tool-worked sources. Burrow through earth.",
        "FullCost": "1 Willpower",
        "Action": "Reflexive",
        "DicePool": "No roll is required",
        "Effect": [
            "Earth may be consecrated by mortals, but for some monsters it’s already sacred. This Dread Power reflects a creature that is born from dirt, and shares a deep, intimate connection with the Earth. Impact with natural minerals, uncut gemstones, and precious base metals will cause the creature no harm, and her body can flow easily with such fruits found deep beneath the soil. Inhuman constructs made of dirt, and certain mummies have this affinity.",
            "Any time the creature comes in contact with dirt, base metals, rocks, clay, sand, or other bits of unprocessed earth, you may activate this Dread Power reflexively. She ignores any damage equal to her dots in The Primal Dirt. Damage beyond those dots occurs normally. Additionally, she can inter herself into the material, flowing through it like one might wade through mud. The monster moves through the substance at a Speed equal to her dots in The Primal Dirt.",
            "The Primal Dirt will negate damage from falling, from being struck with a stone, or being hit with another unprocessed weapon. However, objects processed by the hands of man will affect the monster normally. Diamonds will pierce flesh when cut. Silver bullets will puncture. Granite statues will bruise. However, uncut diamonds, newly-mined silver, and granite rocks will have no effect.",
        ],
        "Book": "HMR 155"
    },
    {
        "Name": "Read Aura",
        "Rank": "••",
        "Cost": "○",
        "Description": "Discern a creature’s aura",
        "FullCost": "1 Willpower",
        "Action": "",
        "DicePool": "Wits + Empathy",
        "Effect": [
            "As per the Devil’s Eyes Thaumatechnology Endowment (pp. 186-187, Hunter: The Vigil), the creature can discern portions of person’s aura. Note that the creature does not actually need to implant eyes as per Cheiron surgery; this effect is likely endemic to the creature (though, should you decide that a creature can only gain this ability by ripping out the eyes of another monster, go for it).",
        ],
        "Book": "BbBB 6"
    },
    {
        "Name": "Reap",
        "Rank": "• to •••••",
        "Cost": "○○○○○",
        "Description": "Slay multiple victims with a show of killing power.",
        "FullCost": "5 Willpower",
        "Action": "Instant",
        "DicePool": "Intelligence + Medicine + Reap",
        "Effect": [
            "In the World of Darkness, some monsters believe mastery over life and death is the ultimate gift. This devastating Dread Power gives the monster power over death. With a swift motion, she can strike the life out of a swath of humans or target a specific individual. Different monsters exhibiting Reap in different ways; some breathe on their victims, others will send a hail of bullets into a crowd for a clean kill. Others act in a manner that befits their true nature. For example, demons mimic biblical curses to extinguish all the life in a room.",
            "This power has two different effects, depending on whether or not you’re using the Down and Dirty Combat option (see The God-Machine Chronicle, p. 195). Use the second option if you’re using this Power against players’ characters.",
            "With the Down and Dirty Combat rules, each success affects one victim. They suffer lethal damage in each of their health boxes. They may survive with immediate medical attention.",
            "Alternatively, without using this rule (or in situations where the monster isn’t using this Power against players’ characters) add the monster’s Reap dots as an additional weapon modifier on any successful attack. Then, ignore any armor the victim might be wearing. He causes lethal damage, regardless of the source of the attack.",
            "<b>Dramatic Failure:</b> Not only does the monster fail to kill his target, he reveals a flaw his opponents can exploit. Any harm he suffers for the remainder of the scene increases by two levels.",
            "<b>Failure:</b> The monster fails to kill his intended victims.",
            "<b>Success:</b> Pending which rules are used, the monster either kills a number of targets equal to his successes, or gains an additional weapon modifier on any successful attack.",
            "<b>Exceptional Success:</b> Additional successes kill additional targets. If you’re not using Down and Dirty Combat, the monster also ignores a victim’s Defense in addition to her armor.",
        ],
        "Book": "HMR 153"
    },
    {
        "Name": "Revelation",
        "Rank": "• to •••••",
        "Cost": "○ to ○○○",
        "Description": "Reveal your true nature, inflicting awe or fear.",
        "FullCost": "1 Willpower for a single witness, 2 for a handful of witnesses, 3 for numerous witnesses",
        "Action": "Instant and resisted",
        "DicePool": "Presence + Intimidation + Revelation - the highest Resolve of all witnesses",
        "Effect": [
            "With this Dread Power, the monster reveals his true nature to witnesses, causing fear, awe, and shock. Revelation requires the monster have some supernatural aspects that he can show off. If he appears to be completely human, and has no visible Dread Powers, he cannot use this Dread Power. Every monster is attuned to his own method of Revelation befitting his guise. Vampires might bear fangs, werewolves may shapeshift before mortals, and fairies might show their true, Arcadian forms.",
            "When choosing this Dread Power, choose the method of Revelation, and the expected reaction. For some Revelations, mortals will be impressed and enrapt by the experience. Others might strike unearthly fear into the hearts of his witnesses.",
            "When witnesses attempt to take an action that counteracts the effects of this Power, they suffer the monster’s Revelation dots on any roll; add the monster’s Revelation dots to any contested rolls that would cause the mortal to betray the reaction. For example, a fearsome ghost with four dots of Revelation, that creates a Revelation of terror, causes a -4 to any roll to stand up to the specter. Additionally, witnesses would add +4 to any roll that would force the witness to stand up to the apparition, such as a vampire’s hypnotic command.",
            "<b>Dramatic Failure:</b> The monster fails to cause the desired reaction; witnesses see the monster for what it is, and gains Willpower any time they defy the would-be response.",
            "<b>Failure:</b> The monster fails to evoke the desired reaction.",
            "<b>Success:</b> The reaction takes. Witnesses suffer the monster’s Revelation dots from any roll to defy the desired reaction.",
            "<b>Exceptional Success:</b> The reaction takes. Additionally, the witness must spend Willpower to even attempt to defy the reaction. This Willpower does not add additional dice to his roll.",
        ],
        "Book": "HMR 153"
    },
    {
        "Name": "Revivify",
        "Rank": "• to •••••",
        "Cost": "○",
        "Description": "Sacrifice a dot of Stamina to rise from death.",
        "FullCost": "1 Willpower and 1 dot of Stamina",
        "Action": "Instant",
        "DicePool": "Stamina + Survival + Revivify",
        "Effect": [
            "Immortality is a word whispered among many monsters like a prayer. A creature with this Dread Power is nigh unstoppable. They’ll die like anyone — or anything — else, but that does not spell the end of their rampage. They can return from the grave quickly, albeit weakened. While extremely powerful, Revivify does not guarantee a full revival. The Power takes a hefty toll on the monster, causing irreparable harm to the body. This is, of course, a small price to pay for immortality.",
            "Revivify can only be activated when the monster is effectively dead — that is incapacitated — with a health track full of lethal damage. It must be used within one day of death for each dot of the Dread Power. The monster spends Willpower and a permanent dot of Stamina (or Resistance, if using disembodied traits). If successful, the monster rises from death, slightly less injured. Each success on the dice roll removes two bashing damage, or one lethal damage.",
            "<b>Dramatic Failure:</b> The monster not only stays dead, but cannot attempt to use Revivify ever again. Death is permanent.",
            "<b>Failure:</b> The monster does not rise, but loses both the Willpower and dot of Stamina. If he still has Stamina and Willpower remaining, he can attempt again.",
            "<b>Success:</b> The monster rises, provided his entire health track isn’t full of aggravated damage. Successes heal two bashing or one lethal damage each.",
            "<b>Exceptional Success:</b> The monster rises fully healed of all damage, aggravated or otherwise.",
            "<b>Note:</b> The monster cannot use this power if it only has a single dot of Stamina. At that point, the monster is permanently destroyed. If his health track is completely full of aggravated damage, the monster can only resurrect with an exceptional success on the activation roll.",
        ],
        "Book": "HMR 155"
    },
    {
        "Name": "Ride Corpse",
        "Rank": "••",
        "Cost": "○",
        "Description": "Inhabit a corpse as a meat suit",
        "FullCost": "1 Willpower",
        "Action": "Instant",
        "DicePool": "Presence + Occult",
        "Effect": [
            "The creature is able to take over a human corpse as its host, effectively becoming one of the shambling dead. Bodiless spirits aren’t the only creatures who possess this power: any awful monster of the night can mystically transfer its soul to a corpse for a time, provided it has this Dread Power. During this time, if the monster has a body of its own, its body lies dormant (as if comatose).",
            "<b>Dramatic Failure:</b> The creature transfers its senses into the corpse… and then finds it can’t animate the corpse. It lies trapped in the body for a full 24-hour period.",
            "<b>Failure:</b> The creature cannot forge a mystical connection with the corpse.",
            "<b>Success:</b> The creature’s soul transfers to the corpse for a number of hours equal to its Resolve score. The creature still has access to all his Skills, but all Attributes suffer the loss of one dot while inhabiting the corpse. In addition, Speed is halved (round down). The creature feels no pain when the corpse is damaged. The corpse body has 10 total levels of Health, but can only take five points of damage before penalties start to mount (to a maximum of -5). If the body is destroyed, the creature snaps back to its own body (or, if it has no body, is left bodiless and ephemeral in Twilight). Note, however, that if the creature’s actual body is harmed while torpid, it automatically exits the corpse body and returns to its own.",
            "<b>Exceptional Success:</b> As above, but the creature retains his Speed.",
        ],
        "Book": "HTV 280"
    },
    {
        "Name": "Scapegoating",
        "Rank": "• to •••••",
        "Cost": "○",
        "Description": "Touch a victim to project an innocent aura, casting aspersions upon the victim instead.",
        "FullCost": "1 Willpower",
        "Action": "Instant",
        "DicePool": "Intelligence + Subterfuge + Scapegoating",
        "Effect": [
            "Misdirection is a tool in almost every monster’s arsenal. With this Dread Power, the monster assumes an air of innocence, and places all suspicion and all preternatural eminence onto a human. The human still looks the same, but adopts auras and presences indicative of monstrosity. He becomes unsettling to onlookers; he inspires suspicion and fear with every move. Meanwhile, the monster appears sympathetic and overwhelmingly human.",
            "Once active, this Dread Power has a twofold effect; it makes a human target seem monstrous, and makes the monster seem human. Humans react dramatically to the victim; this often results in aggression that may lead to violence. On the other hand, humans react sympathetically to the monster, often coming to its aid.",
            "To create a scapegoat, the monster must touch the victim.",
            "Dispelling the façade can be done through illusion-piercing Endowments, but must exceed the monster’s successes. Careful investigation and research can pierce the illusion in time, but any of the victim’s mundane efforts suffer the monster’s Scapegoating dots as a penalty to the roll.",
            "<b>Dramatic Failure:</b> The monster fails in his effort, and draws undue attention to himself. All humans within eyeshot immediately know that they’re looking upon an evil entity or force.",
            "<b>Failure:</b> The monster fails to create a scapegoat.",
            "<b>Success:</b> The monster creates the scapegoat. Any efforts to discern the monster’s true nature or dispel the victim’s façade must achieve more successes than the monster’s. Until the effect is dispelled, any attempt to harm the monster is considered a breaking point with a -2 penalty to the roll.",
            "<b>Exceptional Success:</b> The monster creates the scapegoat. As above, but harming the monster is considered a breaking point at -4.",
        ],
        "Book": "HMR 156"
    },
    {
        "Name": "Sleep",
        "Rank": "• to •••••",
        "Cost": "○",
        "Description": "Put people to sleep with a contested roll",
        "FullCost": "1 Willpower",
        "Action": "Instant and Contested",
        "DicePool": "Manipulation + Persuasion + Sleep versus target’s Wits + Stamina",
        "Effect": [
            "The target passes out for a number of turns equal to 10 minus her Resolve score. Use of this ability necessitates eye contact.",
            "<b>Dramatic Failure:</b> The monster can’t use this power on a target again for the rest of the night. The target even feels like she’s hopped up on double espressos, and may go without sleep if she chooses.",
            "<b>Failure:</b> The effect fails to catch. The creature may try again in the next turn, spending another Willpower to do so.",
            "<b>Success:</b> The creature earns more successes than the target. The target falls into a light slumber from which she can be awakened easily: any noise beyond the ambient or touch to her person will startle her from sleep. She will, upon waking, suffer a -1 penalty for the rest of the scene, as she is otherwise plagued by grogginess. Note, however, that she can avoid falling asleep (and taking the penalty) if the target’s player chooses to refl exively spend a Willpower point at the time of Sleep’s activation. Once asleep, however, Willpower cannot save her slumber.",
            "<b>Exceptional Success:</b> The target cannot spend the Willpower to prevent slumber. In addition, she can only be awakened via injury to her person.",
        ],
        "Book": "HTV 281"
    },
    {
        "Name": "Shadow Harvest",
        "Rank": "•",
        "Cost": "—",
        "Description": "Gather Willpower by harvesting in a graveyard",
        "FullCost": "None",
        "Action": "Extended; each roll represents one hour of gathering",
        "DicePool": "Wits + Occult + Shadow Harvest",
        "Effect": [
            "The monster spends at least one hour lurking around graves under a clear, strong full moon, gathering shadows. Each success rolled gifts the monster with 1 point of Willpower, which the creature can either spend at the time it’s gathered or collect in some kind of container (burlap bag, metal briefcase, blue-glass bottle). The Willpower doesn’t appear in any physical form; it’s as light as air. The creature can, once per day, withdraw a number of points equal to his Shadow Harvest score.", 
            "This power carries with is a dreadful drawback; corpses beneath those headstones are more open to possession by malignant demons and might emerge the following night as vampire Bloodjackers (see p. 316).",
        ],
        "Book": "HTV 282"
    },
    {
        "Name": "Soul Binding",
        "Rank": "••• or •••••",
        "Cost": "○/Willpower",
        "Description": "Bind a victim to drain their will as monstrous energy.",
        "FullCost": "Willpower equal to the victim’s Willpower dots",
        "Action": "Instant and Contested",
        "DicePool": "Intelligence + Politics + Soul Binding, contested with Resolve",
        "Effect": [
            "A mortal’s soul is precious to a monster, for his spirit holds precious power. This Dread Power allows the monster to bind a victim’s soul to hers, allowing her to tap into the victim’s reserves to fuel her monstrosity. The monster’s target may be a willing subject, ready to support her in her time of need, or a tragic, unwilling pawn. Given time, the monster can leave a victim drained or — if she’s tapped into his soul for too long — dead.",
            "There are two versions of this Dread Power: a three dot version and a five dot.",
            "The three dot version of Soul Binding may only be used on a willing subject, who usually signs a contract or makes a similar agreement with the monster. In this case, the victim does not make a contested roll. The five dot version may be used on unwilling subjects. Upon using the Dread Power, the monster must spend Willpower equal to the victim’s Willpower dots.",
            "Once the victim is bound, the monster may draw Willpower from him at any time, over any distance, reflexively, but only once per turn. The victim loses a point of Willpower, and if the monster draws multiple points in a day, the victim also suffers a level of lethal damage per Willpower drawn. However, with a successful Resolve roll, the character can stop the monster for the day after the first level of lethal damage is caused.",
            "Each version of this Dread Power has a different way to abolish the effect. With an extended Intelligence + Occult roll, characters will be able to uncover an esoteric method for ending the effect. It should be a challenging but reasonable solution, like finding a rare herb or uncovering a secret piece of the monster’s history. A monster may only have one such bound victim at a time.",
            "<b>Dramatic Failure:</b> The monster fails, and the victim can instantly sap one Willpower from the monster. If he wishes, he can turn the Dread Power back on the monster, creating a reverse bond that allows him to suck Willpower.",
            "<b>Failure:</b> The monster fails to establish the bond.",
            "<b>Success:</b> The monster creates the bond.",
            "<b>Exceptional Success:</b> The monster creates the bond, and any research efforts to solve the bond suffer a -3 penalty.",
        ],
        "Book": "HMR 156"
    },
    {
        "Name": "Stealthy Attack",
        "Rank": "••••",
        "Cost": "—",
        "Description": "The victim does not know that they have been attacked or how much damage they have taken until they collapse or make an Intelligence + Medicine check to diagnose themselves.",
        "FullCost": "None",
        "Action": "Reflexive",
        "DicePool": "Dexterity + Stealth + Stealthy Attack",
        "Effect": [
            "The monster can attack with such speed or subterfuge thata victim may not be aware of the wound. This Dread Power could represent a strike so fast and painless the subject doesn’t even know she’s injured, or the strike is particularly subtle, such as a demonically-infected mosquito bite or a sneaky tentacle that attaches itself to the back while unseen.",
            "When making an attack, the monster may use Stealthy Attack before the attack roll to prevent the victim from realizing she’s suffered any damage. Stealthy Attack also hides the aftereffects of a strike, so if the monster has some kind of debilitating touch or disease-causing blow, the subject will remain unaware of the power until its symptoms manifest. The monster doesn’t realize a Stealthy Attack roll has failed until it performs its attack—it can’t choose to halt or change the attack if this roll fails.",
            "<b>Dramatic Failure:</b> The monster’s attempt to conceal its strike fails, and the victim automatically notices the attack. The victim gains a +2 bonus to Defense against the attack as a result of seeing the strike coming.",
            "<b>Failure:</b> The monster fails to conceal its attack.",
            "<b>Success:</b> The monster’s attack is concealed; the victim is unaware whether she is hit, and does not know how many health points of damage are suffered. If the monster is hidden, the victim may not even know she’s under attack. Diagnosing the extent of the injury (and thus learning how many health points of damage were inflicted) requires a successful roll of Intelligence + Medicine by someone examining the victim.",
            "<b>Exceptional Success:</b> The attack is concealed, and gains a +2 bonus to the attack roll.",
        ],
        "Book": "Spf 8"
    },
    {
        "Name": "Strange Form",
        "Rank": "• to •••••",
        "Cost": "○○○",
        "Description": "Gain extra dots in attributes by changing form",
        "FullCost": "3 Willpower",
        "Action": "Instant",
        "DicePool": "Wits + Occult",
        "Effect": [
            "The creature takes a strange form, usually that of an animal (though some may shift into other things: objects, atavistic throwbacks, mythical beasts, creatures out of folklore or fairy tales). The creature can add dots to his Attributes equal to twice the dots purchased in Strange Form. He can increase this further by reducing dots to other Attributes, gaining one dot in an Attribute per dot lost in another Attribute. (If a demon possesses Strange Form at two dots, he can add a total of +4 dots across his Attributes, so he adds +2 to Wits and +2 to Strength, but he also takes a loss of -2 to Intelligence, because in this form, the creature’s mind devolves to a more feral state. Because of this, the beast can add another +2 to his Attributes, which he splits between Wits and Strength, with both now having a total of +3).",
            "Unless specified otherwise, this cannot take a creature’s Attributes beyond six dots per stat. Note that many traits — Speed, Defense, Health, Initiative — may change accordingly.",
            "Strange Form also allows the creature to gain or lose Size equal to half the dots (round up) spent in this Dread Power.",
            "The transformation lasts for a single scene, though an additional Willpower point can be spent to extend it by one scene per point spent",
        ],
        "Book": "HTV 282"
    },
    {
        "Name": "Tempest",
        "Rank": "• to •••••",
        "Cost": "○○○○○+",
        "Description": "Summon forth a furious storm, whose effects you ignore.",
        "FullCost": "5, 10 or 15 Willpower",
        "Action": "Extended; each roll takes one turn",
        "DicePool": "Presence + Occult + Tempest",
        "Effect": [
            "The sky turns black and Lightning splits the sky. Strong winds whip the ocean’s waves. Thunder booms and cracks. This Dread Power allows the monster to call forth a quick, powerful storm to hurt, distract, and disorient any nearby. Both an effective combat tactic and escape tool, the power to control weather has long been a symbol of frightening, phenomenal mystic power. Few beings in the world stand unafraid of natural disaster.",
            "The tempest requires between ten and thirty successes to summon forth. Once summoned, the storm affects a wide area. For 5 Willpower and ten successes, it covers a city block. For 10 Willpower and twenty successes, it will cover a town. For 15 Willpower and thirty successes, it’ll blanket a metropolitan area. Note that this massive cost can occur over the course of a day. So, the monster may replenish Willpower during the Power’s activation.",
            "Once activated, those in the affected area can only see a few feet ahead of them. Anything beyond arm’s reach is considered total darkness. The sound and power of the storm mutes all senses. Anyone who’s outside in the tempest takes one bashing damage per minute of full exposure. Movement is limited; each turn characters must succeed in a Stamina + Athletics roll or be knocked down, characters may only move half their Speed.",
            "Additionally, weak structures will break in the deluge. Floods will result in prone areas. The storm will cause severe, costly, lasting damage within its area of effect.",
            "The monster is completely immune to the effects of his own tempest. He can see through it, and move through it effortlessly.",
            "The tempest’s duration will either last for one hour per dot of the Dread Power. The monster can end the storm prematurely.", 
            "<b>Dramatic Failure:</b> The tempest comes in full force, but the monster is affected just like everyone else. Additionally, the storm follows the monster, centering on him at all times. The storm lasts the scene; the monster cannot end it prematurely.",
            "<b>Failure:</b> The monster fails to garner any successes.",
            "<b>Success:</b> Successes are added to the monster’s total.",
            "<b>Exceptional Success:</b> Additional successes speed the tempest’s arrival.",
        ],
        "Book": "HMR 154"
    },
    {
        "Name": "Tendrils",
        "Rank": "•••",
        "Cost": "○○",
        "Description": "Summon tendrils to attack people, reduce Defense by -1",
        "FullCost": "2 Willpower",
        "Action": "Instant",
        "DicePool": "This power requires no roll to activate",
        "Effect": [
            "The monster attacks with some kind of tendril: whips of shadow or blood, spectral limbs, life-choking vines, or even briny tentacles. These tendrils can be used to attack and do lethal damage with a Dexterity + Brawl roll. Alternatively, the monster can make the same Dexterity + Brawl roll at a -3 penalty, performing a targeted attack against the subject’s mouth. Upon success, the tendrils force themselves into the victim’s mouth and throat. The target must make Stamina rolls for suffocation, as per “Holding Breath” in the World of Darkness Rulebook, p. 49. The tendrils manifest for up to one scene.",
            "<b>Drawback:</b> Manifesting these tendrils requires intense concentration: the creature’s Defense is at -1 while they are active. The tendrils can also be attacked directly (-3 to the attack in addition to the monster’s now-diminished Defense): a single lethal level done against them disperses them.",
        ],
        "Book": "HTV 282"
    },
    {
        "Name": "Terrify",
        "Rank": "• to •••••",
        "Cost": "○",
        "Description": "Makes a target flee or spend Willpower to remain, if remaining take penalties equal to dots",
        "FullCost": "1 Willpower",
        "Action": "Instant and Contested; resistance is reflexive",
        "DicePool": "Presence + Intimidation + Terrify versus target’s Resolve + Composure",
        "Effect": [
            "The monster spends an action engaging the target in eye contact and activates this power, making this roll. If the attack succeeds, the target flees the scene as quickly as possible, via the nearest available escape route. She will not stop running until she reaches a location she considers to be safe.",
            "<b>Dramatic Failure:</b> The target is unimpressed by the monster’s attempt to frighten her. In fact, it emboldens the target, and she may gain a point of Willpower.",
            "<b>Failure:</b> The monster fails to frighten the target, but may spend another Willpower in the next turn and try again.",
            "<b>Success:</b> The result for success is described above. If the target cannot escape (or spends a point of Willpower to remain), she suffers a penalty to all rolls equal to the creature’s dots in Terrify. This effect lasts for one scene.",
            "<b>Exceptional Success:</b> The effect so terrifies the target that she also loses one Willpower point.",
        ],
        "Book": "HTV 282"
    },
    {
        "Name": "Titan’s Strength",
        "Rank": "• to •••••",
        "Cost": "—",
        "Description": "Lift objects with Size up to your Size + Titan’s Strength. All throwing attacks are aerodynamic. Add dots in this Dread Power as a bonus to feats of strength.",
        "FullCost": "None",
        "Action": "None; this Dread Power is not activated or rolled",
        "DicePool": "None",
        "Effect": [
            "Many battles are won not through strategy, but through the use of brute force. This Dread Power enables the monster to commit acts of immense strength. Trolls, Frankensteins, and all manner of monstrous beasts can possess this ability, which allows them to lift far more than nature might otherwise allow.",
            "Once a monster has this Dread Power, she can automatically lift anything with a Size equal to or less than her Size + Titan’s Strength. If she throws lighter objects like a weapon, that item is considered aerodynamic. Any time you make a feat of strength with the monster, add her Titan’s Strength dots to the roll. This can stack with Unholy Attribute, but these dice do not apply to combat actions, only feats.",
        ],
        "Book": "HMR 156"
    },
    {
        "Name": "Totemic Form",
        "Rank": "• to •••••",
        "Cost": "○",
        "Description": "Manifest a divine animal feature that grants 8-Again to a chosen Attribute. Characters with Composure less than your Totemic Form must spend Willpower to attack you.",
        "FullCost": "1 Willpower",
        "Action": "Instant",
        "DicePool": "None; this Dread Power is not rolled",
        "Effect": [
            "Bears protect, spiders weave fates, and butterflies signify transformation. For centuries, mortals have relied on the wisdom of animal totems for advice and guidance. This Dread Power gives an otherwise human-appearing monster the ability to take on a feature of a totemic animal spirit. Often, mummies use a Totemic Form to take on the head of a patron animal like a lion, jackal, or crocodile. Some malevolent fairies will take on animal traits as a way to trick humans into believing they were cursed. Totemic Form affords a certain supernatural majesty and is near impossible to hurt.",
            "When purchasing this Dread Power, choose the desired animal trait. Each instance of the power allows for only one such modification; further purchases allow for other changes. The modification must be tied to an Attribute. While changed, any rolls with the chosen Attribute gain 8-again. The changed body part has an armor rating equal to the dots in this Dread Power, as it stands as an icon of the monster’s spiritual identity. Onlookers, who have Composure scores less than the dot rating, must spend a point of Willpower in order to attack the monster.",
        ],
        "Book": "HMR 156"
    },
    {
        "Name": "Transmutation",
        "Rank": "• to •••••",
        "Cost": "○",
        "Description": "Transmute inorganic materials.",
        "FullCost": "1 Willpower",
        "Action": "Instant",
        "DicePool": "Intelligence + Occult + Transmutation",
        "Effect": [
            "For centuries, mortals have attempted to change lead into gold. This Dread Power allows the monster to do just that, by changing one physical substance into another. The monster’s creativity and the object’s size and availability are the only limits as to how the inorganic matter may be altered. From water into wine, or copper coins into silver, the monster is able to shift the chemical and structural properties of the substance into something completely different.",
            "This Dread Power transforms one inorganic substance into another. The monster can affect and create substances with a Size and Availability (see The God-Machine Chronicle, p. 232) no greater than her Transmutation dots. Though it only affects inorganic substances, err on the side of allowance. Objects that are long since dead, like a bone shard or piece of driftwood, should count as inorganic for the purposes of this power.",
            "As a rule of thumb, most commonly-found substances like water, rocks, or soil should be one dot Availability. Twodots reflect most industrially-processed substances, high end manufactured alloys are three dot, and gold and other precious metals are often four dots. Diamond, alongside other high-or-controlled cost substances, are five dots when attempting to transmute anything but the tiniest quantities.",
            "<b>Dramatic Failure:</b> The object not only remains the same, but the monster’s body partly transforms into the desired substance. This causes 3 lethal damage to the monster.",
            "<b>Failure:</b> The substance does not change.",
            "<b>Success:</b> The object changes composition from one inorganic material to another.",
            "<b>Exceptional Success:</b> The object changes to a perfect elemental example of the target substance. Add +2 to its Durability and Structure (if relevant), and +1 to its Availability value.",
        ],
        "Book": "HMR 157"
    },
    {
        "Name": "Twist Desires",
        "Rank": "• to •••••",
        "Cost": "○/○○○○○",
        "Description": "Temporarily warp a character’s Vice.",
        "FullCost": "1 or 5 Willpower",
        "Action": "Instant and Resisted",
        "DicePool": "Manipulation + Persuasion + Twist Desires - victim’s Resolve",
        "Effect": [
            "To some, greed is a virtue and lust is an everyday part of life. To monsters, however, finding out what makes a mortal tick allows them to assert control over his psyche. With this Dread Power, the monster shifts a victim’s weaknesses and character flaws to one of his own choosing. Some demons will alter a victim’s Vice to suit her particular desires. Others will use this Power to effect a mortal on a base level. Many mummies will use this gift to build like-minded cults of personality. Regardless the reason, knowing a victim’s Vice and shaping it to a monster’s desires is an invaluable tool.",
            "Twist Desires allows the monster to choose a new Vice for the victim. If she invests a single point of Willpower, the effect lasts one night per dot of the Dread Power for a maximum of five. If the monster invests five points of Willpower, it lasts one week per dot of Twist Desires. Thus, if she has three dots and spends five Willpower, the effect lasts for three weeks.",
            "When the effect does take hold, the victim’s player may take a Beat to make the change permanent.",
            "<b>Dramatic Failure:</b> The monster fails to change the target’s Vice. As a result, the would-be victim now has a new Virtue: destroying the monster. This effect lasts as long as the monster lives.",
            "<b>Failure:</b> The monster fails to change the Vice.",
            "<b>Success:</b> The monster succeeds in changing the victim’s Vice. For one Willpower, the change lasts one night per dot of Twist Desires. For five Willpower, it lasts a week per dot.",
            "<b>Exceptional Success:</b> As above. However, the victim can make the one Willpower effect permanent for a Beat. With the five Willpower effect, the victim can also choose to allow the monster to change her Virtue for a second Beat.",
        ],
        "Book": "HMR 157"
    },
    {
        "Name": "Uncanny Reflexes",
        "Rank": "• to •••••",
        "Cost": "○○○(○)",
        "Description": "Apply the rote quality to one Dexterity action for each dot in this Dread Power.",
        "FullCost": "3 Willpower",
        "Action": "Reflexive",
        "DicePool": "None; this Dread Power is not rolled",
        "Effect": [
            "Well-timed bullets miss their mark. Attackers punch thin air where a monster once stood. With this Dread Power, a monster’s reflexes are honed to a frightening degree. Her aim is perfect, her balance impeccable. Uncanny Reflexes may be caused by pure physical acumen, a supernatural degree of spatial awareness, or even a decelerated perception of time. Whatever the reason, a monster who’s fast on her feet and can dodge incoming attacks is a formidable foe.",
            "Once activated, the monster can count a number of Dexterity-based actions equal to her Uncanny Reflexes dots as rote actions (reroll all failed dice). An additional point of Willpower allows one of these uses to be decided after rolling the dice.",
        ],
        "Book": "HMR 157"
    },
    {
        "Name": "Unholy Attribute",
        "Rank": "• to •••••",
        "Cost": "(○)",
        "Description": "Gain extra dots in an Attribute",
        "FullCost": "",
        "Action": "",
        "DicePool": "",
        "Effect": [
            "This power grants a monster incredible potency in a single Attribute. The monster spends Willpower to boost that Attribute by the number of points invested in Unholy Attribute. This bonus lasts until the end of the scene. Monsters using this power recalculate appropriate traits (Speed, Health, Initiative, Defense) using the new Attribute score.",
        ],
        "Book": "HTV 283"
    },
    {
        "Name": "Unholy Grace",
        "Rank": "••••",
        "Cost": "○/die",
        "Description": "Move with inhuman grace and dexterity.",
        "FullCost": "1 Willpower per bonus die",
        "Action": "Reflexive",
        "DicePool": "No roll is necessary",
        "Effect": [
            "A vampire equipped with this Dread Power is a feared foe in combat, her senses honed with a powerful kinesthesia, moving with inhuman grace, her every step planned and executed precisely, never putting a foot wrong.",
            "The vampire moves with inhuman grace. Each Willpower point spent grants the vampire bonus dice to use in any Dexterity dice pool based on Athletics, Brawl, Firearms, Stealth or Weaponry. Furthermore, if the vampire needs to make a Dodge maneuver, each Willpower point adds +1 to her Defense before being added to the Dodge dice pool. Finally, the vampire may abort an appropriate dice pool if the result is a failure: the vampire merely does not take an action that turn. All these benefits apply for the duration of an entire scene.",
        ],
        "Book": "NS 172"
    }
]


const dominionsData = [
    {
        "Name": "Clarity",
        "Rank": "•",
        "Dice Pool": "Wits + Brawl + Primal Urge",
        "Description": "+2 to Initiative per success",
        "Book": "SpSl 165"
    },
    {
        "Name": "City Eyes",
        "Rank": "•",
        "Dice Pool": "Wits + Composure + Primal Urge",
        "Description": "Character can see through any window from a single building",
        "Book": "SpSl 165"
    },
    {
        "Name": "Malfunction",
        "Rank": "•",
        "Dice Pool": "Presence + Craft + Primal Urge",
        "Description": "Touched item ceases to function for one turn per success",
        "Book": "SpSl 165"
    },
    {
        "Name": "Terrible Strike",
        "Rank": "•",
        "Dice Pool": "Strength +  Brawl + Primal Urge",
        "Description": "Inflict lethal damage for one turn per success",
        "Book": "SpSl 165"
    },
    {
        "Name": "Unnatural Senses",
        "Rank": "•",
        "Dice Pool": "Resolve + Computer + Primal Urge",
        "Description": "For 30 seconds, pinpoint every electronic device within 5 yards per success.",
        "Book": "SpSl 165"
    },
    {
        "Name": "Warning Growl",
        "Rank": "•",
        "Dice Pool": "Presence + Intimidation + Primal Urgevs Resolve + Composure",
        "Description": "Inflict a -2 penalty to attack the werewolf for one scene",
        "Book": "SpSl 165"
    },
    {
        "Name": "Commandment",
        "Rank": "••",
        "Dice Pool": "Presence + Intimidation + Primal Urge vs Resolve + Composure",
        "Description": "Target must obey a short command",
        "Book": "SpSl 166"
    },
    {
        "Name": "Nightfall",
        "Rank": "••",
        "Dice Pool": "Wits + Larceny + Primal Urge",
        "Description": "Lights die in a specified area",
        "Book": "SpSl 166"
    },
    {
        "Name": "Ruin",
        "Rank": "••",
        "Dice Pool": "Wits + Craft + Primal Urge",
        "Description": "Item suffers 1 Structure damage per success",
        "Book": "SpSl 166"
    },
    {
        "Name": "Shallow Heart",
        "Rank": "••",
        "Dice Pool": "Composure + Larceny + Primal Urgevs Resolve + Composure",
        "Description": "Target's Vice changes for one day",
        "Book": "SpSl 166"
    },
    {
        "Name": "Slip Away",
        "Rank": "••",
        "Dice Pool": "Presence + Larceny + Primal Urge",
        "Description": "Break free of bonds or grapples",
        "Book": "SpSl 166"
    },
    {
        "Name": "Warrior Ideal",
        "Rank": "••",
        "Dice Pool": "Wits + Brawl + Primal Urge – Resolve",
        "Description": "Reduce the target's Defense by Primal Urge, to a minimum of 1",
        "Book": "SpSl 166"
    },
    {
        "Name": "Command Fire",
        "Rank": "•••",
        "Dice Pool": "Strength + Survival + Primal Urge",
        "Description": "Werewolf can force flame to lash out and deal 1 point of damage, to spread faster or diminish",
        "Book": "SpSl 168"
    },
    {
        "Name": "Death Grip",
        "Rank": "•••",
        "Dice Pool": "Strength + Brawl + Primal Urge",
        "Description": "In a grapple, double your dice pool when biting and take +6 to overpower.",
        "Book": "SpSl 168"
    },
    {
        "Name": "Gridlock",
        "Rank": "•••",
        "Dice Pool": "Resolve + Streetwise + Primal Urgevs Resolve + Composure",
        "Description": "Target can't leave his surroundings by vehicle, and his Speed is reduced by your Primal Urge",
        "Book": "SpSl 168"
    },
    {
        "Name": "Primal Fear",
        "Rank": "•••",
        "Dice Pool": "Presence + Expression + Primal Urgevs Composure",
        "Description": "Target is affected by Lunacy as if you were in Bestial Hybrid form.",
        "Book": "SpSl 168"
    },
    {
        "Name": "Talons of Guilt",
        "Rank": "•••",
        "Dice Pool": "Presence + Investigation + Primal Urge – Morality",
        "Description": "Target suffers 1 point of lethal damage per success and gets -1 penalty during his next turn.",
        "Book": "SpSl 168"
    },
    {
        "Name": "Beast Control",
        "Rank": "••••",
        "Dice Pool": "Wits + Animal Ken + Primal Urge",
        "Description": "You take control of target animal's mind.",
        "Book": "SpSl 170"
    },
    {
        "Name": "Fracture",
        "Rank": "••••",
        "Dice Pool": "Strength + Medicine + Primal Urge",
        "Description": "You deal one extra point of lethal damage per success rolled.",
        "Book": "SpSl 170"
    },
    {
        "Name": "Graveyard Chill",
        "Rank": "••••",
        "Dice Pool": "Manipulation + Survival + Primal Urge",
        "Description": "Temperature in surrounding area drops below freezing for one turn per success.",
        "Book": "SpSl 170"
    },
    {
        "Name": "Savage Rending",
        "Rank": "••••",
        "Dice Pool": "Strength + Brawl + Primal Urge",
        "Description": "Your claws and teeth deal aggravated damage for one scene.",
        "Book": "SpSl 170"
    },
    {
        "Name": "Shadow Hunter",
        "Rank": "••••",
        "Dice Pool": "Wits + Stealth + Primal Urge",
        "Description": "You transform into a two-dimensional shadow for one minute per success.",
        "Book": "SpSl 170"
    },
    {
        "Name": "Discordant Howl",
        "Rank": "•••••",
        "Dice Pool": "Manipulation + Expression + Primal Urgevs Resolve",
        "Description": "For as long as you concentrate on your howl, all of target's actions are reduced to a chance die. You can't take any non-reflexive action while howling.",
        "Book": "SpSl 171"
    },
    {
        "Name": "Devastation",
        "Rank": "•••••",
        "Dice Pool": "Intelligence + Streetwise + Primal Urge",
        "Description": "City block makes two attacks per turn, using your Primal Urge score as dice pool. Everyone in the blocks suffers -1 penalty for actions and their Speed is reduced by two.",
        "Book": "SpSl 171"
    },
    {
        "Name": "Savage Fury",
        "Rank": "•••••",
        "Dice Pool": "Dexterity + Empathy + Primal Urge",
        "Description": "For one turn per success, you receive the benefit of Dodge against all attacks and can make attacks with benefit of an all-out attack.",
        "Book": "SpSl 171"
    },
    {
        "Name": "Terrible Might",
        "Rank": "•••••",
        "Dice Pool": "Strength + Athletics + Primal Urge",
        "Description": "You gain one point of Strength per success for one turn.",
        "Book": "SpSl 171"
    }
]

export { dreadPowersData, dominionsData }