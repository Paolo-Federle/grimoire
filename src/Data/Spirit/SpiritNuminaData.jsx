const spiritNuminaData = [
    {
        "Name": "Abduct",
        "Origin": "Spirit",
        "Description": "Drag a being across the Gauntlet, either from the Twilight, or using Reaching to go to the Shadow",
        "Long Description": [
            "With this Numen, a spirit can literally drag a human being across the Gauntlet and into the Shadow. The spirit must first either dwell on the material side of the Gauntlet (using Materialize or Gauntlet Breach) or at least have a conduit beyond the Shadow (using the reaching Numen). Once this is established and a target is identified, the spirit can literally grab a human and pull him across the Gauntlet. Spend a number of Essence equal to the human’s Stamina, and then roll the spirit’s Power + Finesse. The mortal can resist with a Resolve + Composure Roll. If the spirit is successful, the human crosses the Gauntlet and is dragged into the Shadow. If the human wins the contested roll, he remains on the material side of the Gauntlet.",
            "Note this Numen only works one way. If the human wins the roll, he remains on the material side of the Gauntlet. The spirit cannot use this ability to move a human back to the material world. For the human to exit the Hisil, he must find an alternate way out.",
            "The power does not work on supernatural targets, even if technically mortal (such as ghouls or magi). Abduct does work on the wolf-blooded, or those with lesser templates, such as thaumaturges and psychics."
        ],
        "Pool": "",
        "Cost": "",
        "Book": "BoS 138"
    },
    {
        "Name": "Accelerate",
        "Origin": "Arcadian",
        "Description": "act twice, only one of which is Influence or Numina",
        "Long Description": [
            "This Numen is proprietary to a handful of potent Arcadian Supernal spirits, though rare accounts exist of beings from unknown realms — perhaps those in which time, itself, has no meaning — possessing this ability, as well. On its initiative in a given turn, the spirit spends five points of Essence as a reflexive action and may act twice that turn, though only one of its two actions may involve the use of an Influence or another Numen."
        ],
        "Pool": "-",
        "Cost": "5e",
        "Book": "Summ 221"
    },
    {
        "Name": "Aggressive Meme",
        "Origin": "Pyros",
        "Description": "the Quashmal speaks to someone, and an idea takes hold as if it was their own. This idea then spreads to each person the original talk to about it.",
        "Long Description": [
            "The qashmal speaks to a person, and an idea takes root in the person’s mind. Maybe the idea is a religious experience, or a scientific idea or a political idea. It can be anything from “the nun who lives in the boathouse has been abusing children, and the police aren’t doing anything about it, so we’d better take it into our own hands” to “Muslims are terrorists” to “we’re the people, and if we join together, we could have the power to topple this corrupt government” to something as frivolous as “cereal bars are really good to eat and you need to buy one.” Whatever the idea is, it takes hold in the person’s mind. The person’s mind is changed. And then, when the person tells someone else, the idea takes hold in that person’s mind. And so on. The idea spreads, until hundreds, perhaps thousands of people know. The player spends seven points of Pyros and rolls Power + Finesse, which the subject contests with Resolve + Composure + Azoth. If the roll succeeds, the idea takes hold over the person, and he feels the need to tell others. ",
            "The idea spreads. Promethean characters are unlikely to take direct part in this, but they are more than likely to be on the receiving end, as mobs begin to form."
        ],
        "Pool": "",
        "Cost": "",
        "Book": "PB 76"
    },
    {
        "Name": "Animal Control",
        "Origin": "",
        "Description": "control up to (Finesse) animals for duration of the scene",
        "Long Description": [
            "The ghost is able to exert its will over an animal, controlling it completely. Spend one Essence and roll Power + Finesse, subtracting the animal’s Resolve from the dice pool. Success means the ghost is able to command the animal to perform any task the spirit desires, to the limit of the animal’s physical abilities. The ghost can control the animal for the duration of the scene if desired. A ghost can control a number of animals simultaneously (so long as it has sufficient Essence) equal to its Finesse trait."
        ],
        "Pool": "Power+Finesse-Resolve",
        "Cost": "1e/animal",
        "Book": "WoD 210"
    },
    {
        "Name": "Apprehend",
        "Origin": "",
        "Description": "This numina pulls someone into the Twilight",
        "Long Description": [
            "With this Numen, a Judge can literally drag the guilty into Twilight. Spend a number of Essence equal to the target’s Stamina, and then roll the Judge’s Power + Finesse. The target can resist with a Resolve + Composure Roll. If the Judge is successful, the target is unceremoniously yanked into Twilight where the Judge may more easily interact with him. If the target wins the contested roll, the Numen has no effect. Note this Numen only works one way. The Judge cannot use this ability to move a target out of Twilight. For the target to exit his new Twilight state, he must find an alternate way out or enter the Underworld, which translates his form back to solidity."
        ],
        "Pool": "",
        "Cost": "",
        "Book": "BotD 152"
    },
    {
        "Name": "Astral Sojourn",
        "Origin": "Astral, Pandemonium, Abyssal",
        "Description": "ascend to Astral Realm",
        "Long Description": [
            "This Numen is often possessed by spirits from the various layers of the Astral Realm and, sometimes, by those descending from Pandemonium or even from the Abyss. Certain other particularly unusual spirits possess this Numen, as well. The spirit spends a point of Essence and rolls Power + Finesse, with success enabling the entity to ascend into the Astral Realm. In the event that its way is barred (by a spell, for example), the spirit’s successes are compared to those of the effect confining it. By spending an additional point of Essence per passenger, the spirit can take along with it the consciousnesses of willing individuals, who are then subject to all of the customary rules of the Astral reaches. "
        ],
        "Pool": "Power+Finesse",
        "Cost": "1e",
        "Book": "Summ 221"
    },
    {
        "Name": "Awe",
        "Origin": "Pyros",
        "Description": "Paralyze someone with terror.",
        "Long Description": [
            "The qashmal’s presence paralyzes those who view it with holy (or unholy) terror. Spend three points of Pyros and roll Power + Finesse. All those who can see the qashmal contest the roll with Presence + Composure + Azoth. Anyone who gains fewer successes than the qashmal is unable to move or speak for one turn, either from awe (as, unwilling, they prostrate themselves before the angelic figure) or all-consuming fear (as their legs turn to jelly, their throats dry up and their backs turn to ice). If the qashmal achieves an exceptional success against a target, the effect lasts for three turns."
        ],
        "Pool": "",
        "Cost": "",
        "Book": "PB 76"
    },
    {
        "Name": "Babel",
        "Origin": "Infernal",
        "Description": "It becomes impossible for the target to speak coherently",
        "Long Description": [
            "The demon can make it impossible for its target to speak coherently. Spend 1 Essence and roll Power + Finesse + Infernal Rank – the target’s Resolve (and a supernatural power trait such as Blood Potency, Primal Urge or Gnosis, if it applies). Every success prevents the victim from speaking intelligibly for a minute. Try as she might, she simply spouts random syllables. She may communicate only in the Dragon’s Tongue, as this is not affected by the Numen."
        ],
        "Pool": "",
        "Cost": "",
        "Book": "Inf 52"
    },
    {
        "Name": "Ban of Power",
        "Origin": "Spirit",
        "Description": "Can be taken 3 times, add an additional ban each time. Each time is taken, can increase Willpower by 1, add 2 Numina, or increase maximum essence by 2",
        "Long Description": [
            "By taking on an additional ban, spirits can increase their power. Each additional ban can give the spirit one of these awards: two Numina (a net increase of one), one Willpower or an increase of two maximum Essence. A spirit may take up to three additional bans, but they may only have one particular award. Each additional ban, including the first, must be more punitive than the spirit’s default ban."
        ],
        "Pool": "",
        "Cost": "",
        "Book": "BoS 138"
    },
    {
        "Name": "Banshee Wail",
        "Origin": "Ghostly",
        "Description": "Stun enemies with a wail, per successes",
        "Long Description": [
            "The ghost creates an earsplitting scream that deafens anyone nearby. Spend one point of Essence and roll Power + Finesse. Anyone within 20 yards of the ghost must succeed on a Resolve + Stamina roll – the number of successes gained or be stunned for one turn (see the World of Darkness Rulebook, p. 167). Characters that are stunned by the wail also suffer a –3 penalty to any Perception checks that rely on hearing for the remainder of the scene.",
            "<b>Channeled:<b> The effects of the Numina remain the same when channeled by a Sin-Eater, with the Sin-Eater acting as the source of the wail. The Sin-Eater is immune to the effects of a wail channeled by him. "
        ],
        "Pool": "",
        "Cost": "",
        "Book": "GTS 233, BotD p120"
    },
    {
        "Name": "Binding Vow",
        "Origin": "Aether, Arcadian, Abyssal",
        "Description": "as Fate 4 'Sanctify Oaths'",
        "Long Description": [
            "This Numen is shared by certain Supernal entities descending from both the Aether and Arcadia, though it is also known to a variety of other spirits from various realms (Acamoth and Gulmoth, included), and some which are native to the Fallen World. To create a Binding Vow, the spirit spends a point of Essence and rolls Power + Finesse as a reflexive action while acting as witness to a promise willingly sworn. Some entities may be willing to accept words freely spoken while under duress, while others may not. A person unwilling to accept the use of this Numen upon him may reflexively contest it, using Composure + Gnosis. The use of this Numen is in every other way identical to the Fate 4 spell, “Sanctify Oaths” (Mage: The Awakening, pp. 157–8); identical enough, in fact, that any Awakened magic used to alter a Fate-based oath can similarly effect the Binding Vow. Rumors exist of spirits capable of inflicting even more potent bindings upon others, using a Numen version of the Fate 5 spell, “Geas” (Mage: The Awakening, p. 160)."
        ],
        "Pool": "Power+Finesse",
        "Cost": "1e",
        "Book": "Summ 221"
    },
    {
        "Name": "Bemuse",
        "Origin": "",
        "Description": "Cause various minor but persistant sensory illusions such as distant lights, whispers, and visions, causing a -2 to perception tests.",
        "Long Description": [
            "The Dreamer will mentally whisper or distract the victim in subtle ways – soft, distracting lights, a murmuring whisper that is too far away to be understood, sensations being stronger or softer or merely different from what they are supposed to be. This bemusement may also take the more aggressive form of a shape hovering just out of sight, something flashing by or a jarring sound that the only the victim can hear. Bemused victims have a -2 dice penalty to all perception rolls.",
            "(Power + Finesse versus the victim’s Resolve + Composure)"
        ],
        "Pool": "Power+Finesse vs Resolve+Composure",
        "Cost": "",
        "Book": "PM 21"
    },
    {
        "Name": "Blast",
        "Origin": "Any",
        "Description": "Strike a person at a distance, 10 yrds per Power",
        "Long Description": [
            "The spirit is able to strike opponents at a distance. An electricity-spirit might hurl small thunderbolts at its foes, a fire-spirit might summon flame or a pain-spirit with this Numen might conjure razor blades. The range is equal to 10 yards per point of Power, and the spirit suffers no penalties for range. The spirit rolls Power + Finesse to hit and may add two dice to the roll for every additional point of Essence the spirit spends to fuel this power. The damage is lethal."
        ],
        "Pool": "",
        "Cost": "",
        "Book": "BoS 138"
    },
    {
        "Name": "Blight",
        "Origin": "Lilithim",
        "Description": "Destroy all crops within a mile radius",
        "Long Description": [
            "The Lilith can destroy a year’s crop of food within a radius of a mile. Spend two Pyros and roll Power + Finesse. On a success, the crop fails, afflicted with a sudden, crippling blight that kills the plants overnight, leaving not a single grain or piece of fruit edible."
        ],
        "Pool": "",
        "Cost": "",
        "Book": "PB 80"
    },
    {
        "Name": "Breath Stealing",
        "Origin": "",
        "Description": "Steal the breath of the living to replenish Essence as a touch, causing asphyxiative bashing damage.",
        "Long Description": [
            "The ghost can replenish its Essence by stealing the breath of living people. This requires that the ghost “touch” the person, though the victim doesn’t have to be able to see the ghost. Roll Power + Finesse – victim’s Stamina. Every success inflicts one level of bashing damage to the victim and bestows one point of Essence on the ghost."
        ],
        "Pool": "Power+Finesse - Stamina",
        "Cost": "",
        "Book": "Asy 114"
    },
    {
        "Name": "Burning Coal",
        "Origin": "Elpidos",
        "Description": "Impart to a person the courage to disregard the consequence of an idea.",
        "Long Description": [
            "Sometimes the spirit is willing, but the flesh is weak. A qashmal grants a vision to an individual, and the mortal is too scared to act upon what he has seen. With this Numen, the qashmal grants a mortal to whom it has imparted a vision the courage to do something about it. Spend two points of Pyros and roll Power + Finesse. On a success, the mortal is no longer afraid of the consequences of following the vision’s lead. Although the mortal isn’t suicidal, he is prepared to die for what he considers to be the truth. If the roll is an exceptional success, the mortal regains Willpower from doing things that directly follow the dictates of the vision, in the same way as he would from fulfilling his Virtue."
        ],
        "Pool": "",
        "Cost": "",
        "Book": "PB 78"
    },
    {
        "Name": "Call the Breeze",
        "Origin": "Naturae",
        "Description": "The spirit can summon a brisk wind and direct it as they will.",
        "Long Description": [
            "A werewolf may summon a brisk wind (approximately 25 miles per hour) and direct it as he wills. This wind is useful both for dispersing or redirecting a fire or flying insects, or as a distraction. ",
            "<b>Cost:</b> None",
            "<b>Dice Pool:</b> This power requires no roll.",
            "<b>Action:</b> Instant",
            "Though it requires no roll to actually summon the wind, a successful Manipulation + Occult roll is necessary to direct it to any specific task, such as to disperse tear gas. Because of the distraction of the sudden breeze, perception task rolls (World of Darkness Rulebook, p. 45) made in the area suffer a –1 penalty. The Gift lasts for one turn per dot of Primal Urge that the summoner has. The breeze can be conjured indoors or out."
        ],
        "Pool": "",
        "Cost": "",
        "Book": "WtF 146"
    },
    {
        "Name": "Call Water",
        "Origin": "Naturae",
        "Description": "The spirit manifests water.",
        "Long Description": [
            "Any animal knows that even a small pool of water can mean the difference between life and death. Such is the purpose behind this Gift, which can draw a few cups of water into the hands of a werewolf, even in a desert.",
            "<b>Cost:</b> None",
            "<b>Dice Pool:</b> Stamina + Survival + Purity",
            "<b>Action:</b> Instant",
            "After invoking this Gift, the character creates the element of water between his hands seemingly from thin air, at least enough to stave off death from dehydration. (See “Deprivation,” World of Darkness Rulebook, p. 175) The character creates one cup of water for every success rolled — the excess overflowing his hands either into a container or just onto the ground. The Gift cannot be invoked more than once an hour.",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "WtF 111"
    },
    {
        "Name": "Camouflage",
        "Origin": "",
        "Description": "Remain still, is camouflaged with a penalty to find = to Finesse",
        "Long Description": [
            "The spirit has a means of active camouflage. This might appear as an octopus’s skin that can change texture and color, or may be more mystical in nature. The spirit spends a point of Essence and remains still. As long as the spirit does not move, the camouflage remains active — up to a scene. This Numen can be used along with Hibernate to disguise the spirit while sleeping. Anyone trying to perceive the spirit suffers a negative modifier equal to the spirit’s Finesse."
        ],
        "Pool": "",
        "Cost": "",
        "Book": "BoS 138"
    },
    {
        "Name": "Chain of Death",
        "Origin": "Any",
        "Description": "Can transfer to another Corpse whilst using Corpse Ride via Touch",
        "Long Description": [
            "This Numen is a powerful addition to Corpse Ride. Chain of Death allows a spirit currently using the Corpse Ride Numen to transfer its consciousness to any of its victims’ corpses. The Ridden must touch the targeted corpse to use this Numen. It costs three Essence per jump."
        ],
        "Pool": "",
        "Cost": "",
        "Book": "BoS 138"
    },
    {
        "Name": "Chariot of Fire",
        "Origin": "Elpidos",
        "Description": "Teleport a target anywhere on Earth, including converting it into Twilight.",
        "Long Description": [
            "With this Numen, a qashmal can whisk a character away, gathering her up in a circle of fire, and depositing her anywhere else in a matter of seconds. Spend four Pyros and roll Power + Finesse. If the qashmal’s passenger doesn’t want to be carried away, she can resist with a roll of Resolve + Stamina + Azoth. If the qashmal succeeds, it lifts its subject up in a spectacular display of screaming wind and lashing fire. The wind and fire stop as suddenly as they began, and the passenger is gone. The Elpidos drops its passenger anywhere on Earth, in the material world or in Twilight, seconds later. The passenger has no say in where she is left."
        ],
        "Pool": "",
        "Cost": "",
        "Book": "PB 78"
    },
    {
        "Name": "Choke",
        "Origin": "",
        "Description": "Cause normal asphyxiation throught clogging the person's airways.",
        "Long Description": [
            "This ability is part physical and part supernatural. It is the ability to choke and suffocate a targeted victim. It does this through forcing itself into the victim’s nose and mouth, using its smoke-like body to block all air passages. (Power + Finesse versus Stamina + Athletics)"
        ],
        "Pool": "Power+Finesse vs Stamina + Athletics",
        "Cost": "",
        "Book": "PM 50"
    },
    {
        "Name": "Chorus",
        "Origin": "Naturae",
        "Description": "Speak to any Spirits in Chorus within miles equal to Power",
        "Long Description": [
            "This Numen allows a spirit to speak to any or all other spirits of its own choir within a radius determined by the spirit’s Power in miles. To activate the Gift, the spirit spends a point of Essence and then rolls Power + Finesse to determine how long and detailed a message the spirit can send. A single success allows the spirit to send an image or a short phrase. Three or more successes would allow a couple of sentences or a detailed image. "
        ],
        "Pool": "",
        "Cost": "",
        "Book": "BoS 138"
    },
    {
        "Name": "Claim",
        "Origin": "Naturae",
        "Description": "Gain Permanent control of a victim",
        "Long Description": [
            "This Numen is a more powerful version of Possession; if the roll is successful, the possession is permanent. Spend three Essence points and roll Power + Finesse in an extended and contested roll versus the victim’s Resolve + Composure + Supernatural Advantage; each roll represents one hour. If the spirit gains 50 successes between dusk and dawn, the spirit gains permanent control of the victim’s body. Use the victim’s available traits (except Willpower points, which are equal to the spirit’s current Willpower points) and dice pools for any action the spirit wishes to take. If the spirit fails to accumulate 50 successes within the required period of time, the attempt fails. If a possessed body is killed, the spirit is forced out and must possess another victim if it still wishes to act. Use of this Numen creates a Ridden, specifically a Spirit-Claimed (p. 180)."
        ],
        "Pool": "",
        "Cost": "",
        "Book": "BoS 139"
    },
    {
        "Name": "Claim Body",
        "Origin": "",
        "Description": "Similar to 'Claim' above, but imperfect, and used by Ghosts.",
        "Long Description": [
            "The ravening ghost does not simply possess a body. As long as the person’s psyche remains in the body, there is a chance the victim can wrest control from the possessor and evict it. This is simply not acceptable to the bhüta, as it requires a more permanent solution. The bhüta attempts to gain access to its chosen victim’s body and digs away at his soul. ",
            "<b>Dice Pool:</b> Power + Finesse vs. target’s Resolve + Composure",
            "<b>Cost:</b> 3 Essence",
            "<b>Action:</b> Extended and Contested; the bhüta must gather 50 successes before sunrise. Each roll represents one hour of effort. If the bhüta fails to gather 50 successes in the required time, the attempt fails."
        ],
        "Pool": "Power+Finesse vs Resolve + Composure",
        "Cost": "3e",
        "Book": "NH-WD p27"
    },
    {
        "Name": "Clairvoyance",
        "Origin": "Ghost",
        "Description": "Speak to people using another person's speach, causing damage to the person's vocal chords.",
        "Long Description": [
            "The ghost can speak to mortals through the body of another living person. Roll Power + Finesse, with the subject’s Resolve subtracted from the dice pool as a penalty. If the victim is a willing participant, no roll is made. If the ghost fails, no communication is possible. If the ghost wins, it can speak using the victim’s vocal cords for a single turn. At the end of the turn the victim suffers a single point of bashing damage due to the strain of contact. If the ghost wishes to continue speaking through the medium, a further Power + Finesse roll must be made each turn. The medium continues to suffer an additional point of bashing damage at the end of each turn of communication. If the medium is rendered unconscious, no further contact is possible."
        ],
        "Pool": "Power+Finesse - Resolve",
        "Cost": "1e",
        "Book": "WoD 211"
    },
    {
        "Name": "Clasp",
        "Origin": "Any",
        "Description": "Used to effect same-state beings with a grapple attack.",
        "Long Description": [
            "This Numen allows the spirit to lock a target in a crushing embrace. The Numen functions like any brawling attack. If in the physical world, the spirit must be Materialized to affect a material target; otherwise, this Numen can only be used on other spirits in Twilight. The spirit may roll Power + Finesse when grappling instead of Power alone. (This takes the place of any Strength + Brawl rolls; see the World of Darkness Rulebook, p. 157). If the spirit spends one point of Essence, the spirit’s grappling attacks inflict lethal instead of bashing damage for the rest of the scene."
        ],
        "Pool": "",
        "Cost": "",
        "Book": "BoS 139, Pred p65"
    },
    {
        "Name": "Command Fire",
        "Origin": "Naturae",
        "Description": "The spirit can manipulate fire.",
        "Long Description": [
            "Fire’s flames can both soothe the spirit and sear the flesh. This Gift shows the strong connection werewolves have with this element, even to the point of commanding fire to burn enemies or to cease its scorching wrath.",
            "<b>Cost:</b> 1 Essence",
            "<b>Dice Pool:</b> Strength + Survival + Glory",
            "<b>Action:</b> Instant",
            "The character can’t summon fire from nothingness, but if open flames such as a nearby campfire or burning torch are within sight, she can command the flames at will, even having them arc through the air. The werewolf may cause one point of fire damage per success to a single target within line of sight. The target must be within 20 yards of an existing source of flame. The roll to attack someone with fire is penalized by the victim’s Defense and any cover or concealment involved. In addition, armor may offer some protection against the attack. (See “Fire” in the World of Darkness Rulebook, p. 180.)",
            "This Gift can also be used more simply, to spread an existing fire to a larger area (doubling the fire’s rate of growth) or to stop a fire from progressing toward a forest or settlement. This more exacting control lasts for as long as the werewolf concentrates. It is demanding, however, and imposes a –2 penalty on the activation roll. "
        ],
        "Pool": "",
        "Cost": "",
        "Book": "WtF 111"
    },
    {
        "Name": "Command Pandoran",
        "Origin": "Pyros",
        "Description": "The Lillithim can control or awaken Pandorans",
        "Long Description": [
            "Lilithim cause Pandorans to awaken, simply by being present, and they can directly control them with this Numen. The qashmal’s player spends two Pyros and makes a roll of Power + Finesse, contested against the Pandoran’s Resolve + Composure. For every success the Lilithim gains, it can control one Pandoran, body and mind, for one scene. Spending one Pyros extends the duration of this power to 24 hours."
        ],
        "Pool": "",
        "Cost": "",
        "Book": "PtC 252, PB p80"
    },
    {
        "Name": "Commune",
        "Origin": "Any",
        "Description": "Learn basic state of the environment, including potential threats, within 500 yrds.",
        "Long Description": [
            "The spirit can learn the general state of its home spiritscape. When materialized, this Numen can also function with any environment tied to the spirit’s chorus: woodland for tree spirits, sewers for rat spirits, etc. Successful activation of this Numen allows basic information (presence of intruders, potential threats such as fires) up to 500 yards from the spirit. Each additional success increases the radius by an additional 100 yards and increases the detail of information learned. One success could tell the presence of intruders, while three successes could reveal the species/chorus and gender of those intruders. The Numen lasts as long as the user remains in the trance, but she is unaware of and cannot react to the outside world, nor can she relay her findings while the Numen is active. It costs one Essence per round spent in communion."
        ],
        "Pool": "",
        "Cost": "",
        "Book": "BoS 139"
    },
    {
        "Name": "Commune with the Flesh",
        "Origin": "",
        "Description": "As per 'Clairvoyance'",
        "Long Description": [
            "The spirit can speak to mortals through the body of another living person. Roll Power + Finesse, with the subject’s Resolve subtracted from the dice pool. If the victim is a willing participant, no roll is necessary. If the spirit fails, no communication is possible. If the spirit succeeds, it can speak using the victim’s voice for a single turn. At the end of the turn, the victim suffers a single point of bashing damage due to the strain of contact. If the spirit wishes to continue speaking through an unwilling medium, a further Power + Finesse roll must be made each turn. The medium continues to suffer an additional point of bashing damage at the end of each turn of communication, regardless of whether she is willing or not. If the medium is rendered unconscious, no further contact is possible. This Numen is especially appropriate for ghosts."
        ],
        "Pool": "Power+Finesse - Resolve",
        "Cost": "1e",
        "Book": "Inno 207"
    },
    {
        "Name": "Communion with the Land",
        "Origin": "Naturae",
        "Description": "The spirit gains knowledge of the physical land, where enemies are and where to hide.",
        "Long Description": [
            "In war, knowledge of the terrain is key to victory. This Gift is an expression of that maxim. The werewolf opens her mind to her environment and gains knowledge of the terrain around her — where enemies are, where she can hide, where the best avenues of attack lie. When used on the home territory of an enemy, the werewolf might find she knows more about her foe’s home ground than he does.",
            "<b>Cost:</b> 1 Essence",
            "<b>Dice Pool:</b> Intelligence + Streetwise + Cunning",
            "<b>Roll Results</b>",
            "<b>Dramatic <b>Failure:</b></b> The character gains conflicting messages about her surroundings. She suffers a –1 penalty to Initiative until the scene ends or she leaves the area.",
            "<b>Failure:</b> The character gains no knowledge of her surroundings. ",
            "<b>Success:</b> The character immediately gains full knowledge of her surroundings with regard to potential entrances and exits, the number of creatures larger than a rat present and general terrain features. While she remains in the area, a +2 bonus to Defense and Initiative is gained. The area to which she can attune herself is roughly equal to one acre per success. The Gift effects last for a scene.",
            "<b>Exceptional Success:</b> As success, but the bonus to Defense and Initiative is +3."
        ],
        "Pool": "",
        "Cost": "",
        "Book": "WtF 127"
    },
    {
        "Name": "Compulsion",
        "Origin": "Any",
        "Description": "Gain temporary control of a person, which is resisted every turn.",
        "Long Description": [
            "The ghost is able to exert its will over a living person, commanding him to perform actions like a puppet. Spend one Essence point and roll Power + Finesse in a contested roll versus the victim’s Resolve + Composure. If the ghost fails or ties the roll (or the mortal wins), the victim is unaffected. If the ghost wins the roll, it seizes control of the victim and can command him to perform any acts the spirit desires, within the victim’s capabilities. The victim can attempt to throw off the ghost’s control each successive turn with another contested roll. Use the victim’s own dice pools to determine the outcome of his actions. The ghost can compel a number of victims simultaneously (so long as it has sufficient Essence) equal to its Finesse trait. "
        ],
        "Pool": "",
        "Cost": "",
        "Book": "WoD 211"
    },
    {
        "Name": "Concealment",
        "Origin": "",
        "Description": "Create a concealing vapor/mist/shadows",
        "Long Description": [
            "The spirit is able to create a fog, summon shadows or whip up a dust storm to conceal its exact location. The spirit spends a point of Essence per level of concealment (barely, partially or substantially, or fully concealed; see the World of Darkness Rulebook, p. 162) and rolls Power + Finesse. Each success extends the effect up to one yard from the spirit. The effect lasts up to a scene. Remember that the spirit suffers penalties to its ranged attacks as well while in cover."
        ],
        "Pool": "",
        "Cost": "",
        "Book": "BoS 139, BotD p120"
    },
    {
        "Name": "Consume Offering",
        "Origin": "Ghostly",
        "Description": "The ghost can regain essence from food offered up ritually to them in the material world, or any material food brought into the Underworld.",
        "Long Description": [
            "The ghost can regain sustenance from consuming food and drink brought down into the Underworld, whether by a Sin-Eater directly, or through a Day of the Dead-style of ceremony. Similarly, the ghost can sup on the blood that sometimes trickles down from stalactites, or from the waters of the Underworld’s myriad of rivers. When the ghost consumes any of these, roll Power + Finesse. Each success translates to one point of regained Essence. The ghost may only perform this once per day (a day being a 24-hour period within the Underworld, given that no sun ever rises on this subterranean realm)."
        ],
        "Pool": "",
        "Cost": "",
        "Book": "GTS 281, BotD p120"
    },
    {
        "Name": "Consumption",
        "Origin": "",
        "Description": "Consumation of unprotected intercoursewith the user of this Numina results in the sapping of 1 willpower from the target, and the gaining of 1 willpower or 3 essence for the user.",
        "Long Description": [
            "When Driala’s host consummates unprotected intercourse with a mortal male, the spirit steals one point of Willpower from the man and converts it to a point of Willpower of its own or three points of Essence. The male finds the experience to be pleasurable, if exhausting."
        ],
        "Pool": "none",
        "Cost": "none",
        "Book": "MP 91"
    },
    {
        "Name": "Corpse Ride",
        "Origin": "",
        "Description": "Claim a dead body like possession",
        "Long Description": [
            "This Numen allows the spirit to Claim a dead body as other spirits would Claim a living being. The body’s Soul is not Claimed, however, meaning that a contested roll is not necessary, the spirit simply spends three Essence points and Claims the body automatically during the course of a single hour. The host’s attributes increase a normal, but at a drastically accelerated rate: the Claimed gains points at a rate of one per hour instead of one per week, This power comes at a price, however; while most Claimed can last for years, if not centuries, the corpse is not so lucky — once it achieves full synthesis with its Riding spirit, the corpse begins to deteriorate, losing one Attribute point every three days as the spirit power consumes the body. Once any of its Physical Attributes reach 0, the body disintegrates, shunting the spirit and the body’s soul (if present) into the Shadow Realm. Fortunately, this fate is typically a theoretical one; most such spirits have completed their business long before such a fate becomes an issue."
        ],
        "Pool": "",
        "Cost": "",
        "Book": "BoS 139"
    },
    {
        "Name": "Countermagic",
        "Origin": "Astral",
        "Description": "As per the Mage Prime 2 Spell Countermagic",
        "Long Description": [
            "An Astral Blight can use this Numen as reflexive countermagic against spells targeted on the Blight or used to interfere with its actions. One Essence is spent, and Power + Finesse is rolled. If successes equal or exceed those of the spell, the spell is countered."
        ],
        "Pool": "Power+Finesse vs Spell Potency",
        "Cost": "1e",
        "Book": "AR 100"
    },
    {
        "Name": "Create Anomaly",
        "Origin": "Abyssal",
        "Description": "create an Anomaly Paradox tied to a particular Supernal Realm",
        "Long Description": [
            "This Numen is unique to Abyssal spirits — either Acamoth or Gulmoth — and enables such an entity to create an Anomaly Paradox, attuned to a single Supernal Realm, appropriate to the spirit’s nature. The spirit spends a point of Essence and rolls Power + Finesse as an instant action. The effective Arcanum dot level to determine the size of the Anomaly is equal to the creature’s Rank, with no upper limit. Subtract the entity’s Rank from 10 to determine an effective Wisdom score for the purposes of the effect’s duration. Acamoth and Gulmoth with this Numen are rare, as a certain degree of connection to a given Supernal Realm is necessary to create such a Paradox."
        ],
        "Pool": "Power+Finesse",
        "Cost": "1e",
        "Book": "Summ 221"
    },
    {
        "Name": "Create Pact",
        "Origin": "Infernal",
        "Description": "The demon enters a pact (can only be done to individuals with a morality or equivalent scale)",
        "Long Description": [
            "This Numen allows a demon to enter into a pact with another person or creature. The target must possess a Morality score, even if (like a werewolf’s Harmony) it does not necessarily represent human morals. See Chapter Two for more about Infernal pacts."
        ],
        "Pool": "",
        "Cost": "",
        "Book": "Inf 52"
    },
    {
        "Name": "Create Swarm",
        "Origin": "Kerberos",
        "Description": "Once per week, can create a single drone for the swarm a ghost with Power 1, Finesse 3, Resistance 2",
        "Long Description": [
            "It takes a week for the Clockwork Hive to produce another drone to join the swarm. Spend one Essence point and roll Power + Finesse. If successful, the drone has Power 1, Finesse 3, Resistance 2, and derived traits appropriate for a ghost. It can attack using Power + Finesse, dealing lethal damage. The real use of the Swarm is to bring lawbreakers to the Clockwork Hive’s presence."
        ],
        "Pool": "Power+Finesse",
        "Cost": "1e",
        "Book": "GTS 253"
    },
    {
        "Name": "Damnation’s Path",
        "Origin": "",
        "Description": "effected person cannot gain willpower from their Virtue",
        "Long Description": [
            "This Numen makes it impossible for its victims to regain Willpower without fulfilling their Vice. While under the spirit’s curse, they no longer are able to regain Willpower by fulfilling their Virtue — this Numen does not prevent the virtuous act, but there is no mechanical reward. Fulfilling a Vice restores Willpower as normal. Satisfying a Vice that also leads to a degeneration roll returns all spent Willpower, whether the degeneration roll succeeds or fails. Spend three points of Essence and roll Power + Finesse in an extended and contested roll; each roll represents one hour. If the spirit gains the requisite successes between dusk and dawn, the victim is forced onto Damnation’s Path. The number of successes needed by the spirit is equal to the victim’s current Morality times three. To fight off the spirit’s influence, the victim rolls Resolve + Composure + Supernatural Tolerance. Her target is the spirit’s Power + Rank.",
            "If a spirit encounters its ban during the duration of Damnation’s Path, the curse is lifted and the Numen fails. Encountering a ban during the “conversion” process likewise ends the struggle. A victim who successfully fights off the spirit’s curse (via ban or otherwise) is immune to this Numen for one lunar month."
        ],
        "Pool": "",
        "Cost": "",
        "Book": "BoS 140"
    },
    {
        "Name": "Dead Eyes",
        "Origin": "Revenant",
        "Description": "The revenant can see Ghosts",
        "Long Description": [
            "The character focuses perceiving the invisible, and the Storyteller spends two points of the revenant’s Essence. For the remainder of the scene the revenant is able to see ghosts."
        ],
        "Pool": "None",
        "Cost": "2e",
        "Book": "Ant 38"
    },
    {
        "Name": "Dead Skin",
        "Origin": "Revenant",
        "Description": "The Revenant becomes Incorporeal for a number of turns equal to Composure.",
        "Long Description": [
            "The revenant focuses and shatters the wall between spirit and flesh for a moment. One Willpower point and once Essence point are spent and the revenant becomes incorporeal for a number of turns equal to her composure. The revenant is still invisible, but hazy and indistinct. Normal weapons inflict no damage, but the undead might suffer damage from magical or blessed weapons at the storyteller’s discretion."
        ],
        "Pool": "None",
        "Cost": "1wp & 1e",
        "Book": "Ant 38"
    },
    {
        "Name": "Deluge",
        "Origin": "Naturae",
        "Description": "The spirit summons a very heavy rain",
        "Long Description": [
            "With this Gift, a werewolf summons a rain-spirit to bring a torrential downpour to an area. No gentle shower, this torrent has myriad uses, from ruining crops to starting flash floods to erasing evidence of a pack’s passage. This Gift can only be used outdoors.",
            "<b>Cost:</b> 1 Essence",
            "<b>Dice Pool:</b> Manipulation + Survival + Honor",
            "<b>Action:</b> Extended (20 successes; one turn passes per roll)",
            "<b>Roll Results</b>",
            "<b>Dramatic <b>Failure:</b></b> The weather alters in a manner other than the character’s choosing. It may shift from rain to snow to hail to high wind, usually in some fashion horribly inconvenient to the Gift user. The aberrant and troublesome weather persists for the duration of the scene.",
            "<b>Failure:</b> The weather doesn’t change.",
            "<b>Success:</b> The area affected is equal to one square mile per success achieved. Common sense must be applied to applications of this Gift. The deluge could flood low-lying areas or cause a river to swell its banks, but no one standing on even reasonably high ground is going to drown. The Gift isn’t designed to directly damage an individual, but it can sure as hell do so indirectly, causing thousands of dollars in property damage alone. In times of drought, the power of this Gift can be a great boon. The downpour lasts for a scene. Those caught in heavy rain suffer a –2 penalty to perception rolls and ranged combat.",
            "<b>Exceptional Success:</b> The character can select an area that receives less or no rain, effectively creating an eye of the storm.",
            "Suggested Modifiers<br><table border='1' style='margin: 15px 0;'><thead><tr><th style='padding: 5px;'>Modifier</th><th style='padding: 5px;'>Situation</th></tr></thead><tbody><tr><td style='padding: 5px;'>+1</td><td style='padding: 5px;'>A heavily clouded day</td></tr><tr><td style='padding: 5px;'>+2</td><td style='padding: 5px;'>The weather is already raining or drizzling</td></tr><tr><td style='padding: 5px;'>–3</td><td style='padding: 5px;'>A cloudless day</td></tr><tr><td style='padding: 5px;'>–5</td><td style='padding: 5px;'>Desert or other similarly arid area</td></tr></tbody></table>"
        ],
        "Pool": "",
        "Cost": "",
        "Book": "WtF 146"
    },
    {
        "Name": "Dement",
        "Origin": "Ghostly",
        "Description": "Afflict a person with disturbing images from their memory and give them a mild derangement",
        "Long Description": [
            "You may decide that this Numen has been used to mold Donnie into an obsessive-compulsive sycophant of Fort Assumption. Alternatively, Donnie could have been sufficiently imbalance before, foregoing the need for this power.",
            "This Numen assaults a person’s mind with a cavalcade of nightmarish imagery, breaking down his sanity in the process. Such images are often personal and culled from a victim’s own memory, although the user sometimes applies images from its own history or “memory” to decide such visions.",
            "Use of Dement is a contested action, with opposing rolls being made reflexively. Spend one Essence and roll Power + Finesse versus the victim’s Intelligence + Composure.",
            "<b>Roll Results</b><br><b>Dramatic <b>Failure:</b></b> The power can’t be used against the same target again for a week. If a dramatic failure is rolled for the target, no contested rolls are allowed against other applications for a week.",
            "<b>Failure:</b> The most or an equal number of successes are rolled for the target. The power has no effect on him, but successive attempts are possible.",
            "<b>Success:</b> The most successes are rolled for the town or spirit. The victim gains a mild derangement of the Storyteller’s choice (see World of Darkness Rulebook, p. 96) for a number of days equal to the successes rolled.",
            "<b>Exceptional Success:</b> The most — five or more — successes are rolled for the town or spirit. A mild derangement is inflicted upon the victim permanently, or a severe one is imposed for a number of days equal to successes rolled. A permanent disability may be overcome only through prolonged treatment.",
            "Suggested Equipment: Intended target already has a mild (+1) or severe (+2) derangement, target has a Morality of 5 or 6 (+1) or lower (+2)",
            "Possible Penalties: Intended target currently under mental care (-3), target has the Meditative Mind Merit (-2)",
            "Dement can be used successfully on a victim only once per week. Its range is variable, perhaps as far as a number of miles equal to its user’s Power dots, or a distance determined by the Storyteller."
        ],
        "Pool": "",
        "Cost": "",
        "Book": "GS 36, BotD p122, BOS 140"
    },
    {
        "Name": "Derange",
        "Origin": "Pandemonium, Abyssal",
        "Description": "inflict a Derangement of your choosing on the target for a number of weeks equal to Rank",
        "Long Description": [
            "This Numen is common to Acamoth and Gulmoth, as well as certain Supernal spirits of Pandemonium, some alien beings from outside of the known Realms, and a few terrestrial spirits (particularly those aligned with madness and similar concepts). The spirit spends a point of Essence and rolls Power + Finesse as an instant action, reflexively contested by the target’s Resolve + Gnosis. On a success, the entity inflicts a Derangement of its choosing on the target, which lasts for a number of weeks equal to the spirit’s Rank. A given subject may only be targeted by one use of this Numen at a time; until her mind heals, a person’s psyche cannot be shocked into further insanity by way of this particular power."
        ],
        "Pool": "Power+Finesse",
        "Cost": "1e",
        "Book": "Summ 221"
    },
    {
        "Name": "Desiccation",
        "Origin": "",
        "Description": "Remove moisture from a target",
        "Long Description": [
            "This Numen is most often possessed by water-spirits, although rumors speak of blood-spirits that use it to devastating effect. Desiccation allows a spirit to withdraw some or all of the fluid most closely associated with it from its opponent’s body. Water-spirits can drain their victims of the water in their bodies; blood-spirits can do the same with blood. The range is five yards per point of power. Roll Power + Finesse; the number of successes determines the number of points of damage the target takes from loss of fluid. The damage is bashing. Due to a lack of real biology, vampires and the Created may contest the spirit’s roll with Stamina + Supernatural Tolerance; however, if the spirit wins the contest, the supernatural loses a point of Vitae or Pyros in addition to taking bashing damage."
        ],
        "Pool": "",
        "Cost": "",
        "Book": "BoS 140, Pred p65"
    },
    {
        "Name": "Discorporation",
        "Origin": "",
        "Description": "Discorporate immediately to eventually reincorporate later",
        "Long Description": [
            "This Numen allows a spirit to discorporate voluntarily, surrendering its Corpus to the Shadow Realm and allowing itself to reform elsewhere as normal. Discorporation is always painful, but desperate spirits choose this route rather than face a greater spirit in combat, with the risk of permanent destruction such conflict carries. Roll the spirit’s Power + Resistance for this Numen to succeed."
        ],
        "Pool": "",
        "Cost": "",
        "Book": "BoS 140"
    },
    {
        "Name": "Dissembling Guise",
        "Origin": "Ghost",
        "Description": "The ghost forms into the vision of a departed loved one of the target",
        "Long Description": [
            "This Numen draws on the memories of a manifested ghost’s target to give it the features of a loved one that has passed on. Spend a point of Essence and roll Power + Finesse.With success, the manifested ghost takes on the appearance of a dead friend or family member of the target to all who view it.This false countenance carries a subtle compulsion that exploits the emotions of the target, making him unwilling to harm (or countenance harm being done to) the ghost or the ghost’s anchor.The target may spend a point of Willpower to overcome this effect for one turn or can roll Resolve + Composure - the number of successes gained on the Numen roll to negate the effect completely."
        ],
        "Pool": "",
        "Cost": "",
        "Book": "GTS 234, BotD p122"
    },
    {
        "Name": "Dominion Sense",
        "Origin": "Kerberos",
        "Description": "The Kerberos knows all laws within their domain, and knows the location of those who break those laws within their domain. Power+Finesse is rolled if lawbreaker is supernaturally masking their presence.",
        "Long Description": [
            "The Kerberos has an intimate understanding of the laws of his Dominion, in both letter and spirit. Further, he knows when someone’s broken those laws, and where they are. If a Sin-Eater’s using a Manifestation or other ability to mask his presence, the Kerberos rolls Power + Finesse. If it gets more successes than were rolled for the Manifestation, it pierces the veil of secrecy and knows precisely where the Sin-Eater is. Outside the Kerberos’ Dominion, it only knows direction and range."
        ],
        "Pool": "None",
        "Cost": "None",
        "Book": "GTS 252"
    },
    {
        "Name": "Drain",
        "Origin": "",
        "Description": "Steal essence or willpower from a being.",
        "Long Description": [
            "This Numen enables the spirit to steal Essence or Willpower from a material being, much as spirits can attempt to siphon Essence from one another (see p. 135). The spirit first decides which trait it is attempting to drain, then rolls Power + Finesse against the subject’s Stamina + Resolve + Supernatural Tolerance. If the attacker wins, the victim loses one point of Essence or Willpower; these points are gained by the attacking spirit. If the target wins, the attacker loses a number of points of Essence or Willpower equal to the successes scored by the target. This spirit must “touch” the target to use this Numen, and must Manifest or Materialize to do so as normal."
        ],
        "Pool": "",
        "Cost": "",
        "Book": "BoS 140, Pred p66, BotD p191"
    },
    {
        "Name": "Drawn to Sin",
        "Origin": "Kerberos",
        "Description": "If the character breaks at least 3 Old Laws and escapes punishment, the numina can be used, and each time an Old Law is broken, the Judge knows what level of the lower Mysteries or the Autocthonus depths the character is on.",
        "Long Description": [
            "A character that breaks at least three of the Old Laws and escapes punishment for her crimes comes to the attention of Yama and through it the Judges. While the character remains in the Underworld, each time an Old Law is broken after that point, a Judge may spend a point of Essence and roll Power + Finesse to determine exactly which of the Lower Mysteries or what part of the Autochthonous Depths the character is currently in. If the character breaks another of the Old Laws while the Judge is in the same Dominion or is anywhere in the Autochthonous Depths, the Judge can use this Numen to locate her exact position. On the surface, this Numen acts more like a compass heading, indicating in which general direction the offender can be found."
        ],
        "Pool": "",
        "Cost": "",
        "Book": "BotD 152"
    },
    {
        "Name": "Elemental Immunity",
        "Origin": "Naturae",
        "Description": "Gain immunity from chosen Element",
        "Long Description": [
            "Normally, this Numen is only possessed by elemental-spirits, making them effectively immune to attacks from their constituent elemental energy. When a victim is targeted by one of these attacks, add the spirit’s Resistance to its Defense. The spirit’s Resistance is also automatically subtracted from environmental exposure as well. For example, a Rank 2 fire elemental with a Resistance of 6 could sleep in a burning chemical plant with no ill effects (see the World of Darkness Rulebook, p. 180)."
        ],
        "Pool": "",
        "Cost": "",
        "Book": "BoS 140"
    },
    {
        "Name": "Emotional Aura",
        "Origin": "",
        "Description": "Distract people to a -2 to all actions, with a powerfully broadcast emotion",
        "Long Description": [
            "This Numen is somewhat like Harrow, but broadcasts a general pulse of emotion over a wide area rather than focusing on one target. The spirit spends one Essence to activate the aura of emotion, which then lasts for a scene. Anyone within five yards of the spirit, or who later comes within five yards of the spirit, must make a Resolve + Composure + Supernatural Tolerance roll contested by the spirit’s Power + Finesse. If the spirit wins, the subject suffers a –2 dice penalty to dice pools for the duration of the scene or until the spirit stops using this Numen, powerfully distracted by the broadcast emotion. If the subject wins, she is immune to this Numen for the duration of the scene."
        ],
        "Pool": "",
        "Cost": "",
        "Book": "BoS 140, Pred p66"
    },
    {
        "Name": "End Disease",
        "Origin": "Elpidos",
        "Description": "Remove all disease from the target",
        "Long Description": [
            "The qashmal can use this Numen to remove all disease from a living being. Spend one point of Pyros and roll Power + Finesse. If the roll is successful, the qashmal heals any disease the subject may have, no matter how trivial or serious, treatable or incurable. If the disease is of supernatural origin, such as the result of a supernatural being’s machinations, the qashmal must spend three Pyros to cure the disease."
        ],
        "Pool": "",
        "Cost": "",
        "Book": "PB 78"
    },
    {
        "Name": "Enforcement",
        "Origin": "Kerberos",
        "Description": "Usable only on those that have broken Laws in the Kerberos's domain. If they succeed, the target must abide by a single punishment for a month. Attempts to not enact that punishment when the opportunity presents itself costs a willpower. The Kerberos is aware if the punishment is not finished by the months end.",
        "Long Description": [
            "When a Kerberos catches its prey, it can use this Numen to bind the prey to a specific course of action — it could want a living being brought back to its Domain, or command her to shatter the anchors of those killed in a certain fashion. To enforce the punishment, spend one point of Essence and roll Power + Finesse, resisted by the victim’s Resolve + Psyche. If the Kerberos succeeds, its victim has to abide by the issued punishment for the next month. Attempting to dodge the punishment costs the victim a point of Willpower. If the punishment hasn’t been met by the end of the month, the Kerberos is well aware — and is likely going to be pissed.",
            ""
        ],
        "Pool": "Power+Finesse - Resolve +Supernatural Resistance",
        "Cost": "1e",
        "Book": "GTS 252"
    },
    {
        "Name": "Ensnare",
        "Origin": "",
        "Description": "Cast an tangling attack",
        "Long Description": [
            "The spirit possesses an entangling attack, be it mystic webbing, gobbets of intestine, wire mesh or glue-like spittle. To hit its target, the spirit makes a Finesse roll – the target’s Defense (armor does not add to Defense in this instance. Subjects struck by the attack are automatically grappled (see the World of Darkness Rulebook, p. 157). Each turn the victim may roll Strength + Athletics – the spirit’s Power to escape; otherwise she is immobilized. After a number of turns equal to the spirit’s Resistance, begin reducing the effective Power of the snare by two each turn. This attack costs one point of Essence. Additional Essence may be spent to add to the snare.",
            "",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "BoS 141"
    },
    {
        "Name": "Ersatz Morality",
        "Origin": "Greater Elpidos",
        "Description": "The supernatural being becomes human for a scene.",
        "Long Description": [
            "With this Numen, a Greater qashmal can cause a supernatural being with a human element —– a vampire, werewolf, mage or Promethean —– to become a normal mortal. Spend 10 Pyros and roll Power + Finesse – the subject’s Stamina + Azoth (or Gnosis, Primal Urge or Blood Potency). If the qashmal succeeds against a Promethean, the Promethean becomes mortal for one scene. When he regains his Promethean nature, he must immediately roll to resist Torment — the taste of humanity, no matter how inconvenient it may have been, was sweet and losing it is a bitter blow.",
            "If the qashmal is using this power against a vampire, werewolf or mage, each success cancels out one dot of Blood Potency, Primal Urge or Gnosis for a scene. If all the character’s dots are canceled out, the character becomes an ordinary human, losing access to all powers and weaknesses until the scene is over.",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "PB 79"
    },
    {
        "Name": "Essence Conversion",
        "Origin": "Aether, Abyssal",
        "Description": "transfer Essence to a mage's Mana pool",
        "Long Description": [
            "Typically, only Supernal spirits of the Aether and Abyssal entities possess this Numen. The spirit may, at will, spend points of its Essence as an instant action to add, on a one-for-one basis, to the Mana pool of a willworker, out to the maximum allowed by his Gnosis. Aetherial spirits sometimes use this Numen as a gift or to aid a Theurgist in time of hardship, while Acamoth and Gulmoth almost invariably use it as a bargaining chip in their negotiations. It is possible that other types of spirits know versions of this Numen that enable them to create the different sorts of mysterious energies required by other supernatural beings.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "None",
        "Cost": "1e/mana",
        "Book": "Summ 222"
    },
    {
        "Name": "Fascination with Vengeance",
        "Origin": "Astral",
        "Description": "The target gains the urge to plan vengence then next time the target sleeps. This lasts for a full day.",
        "Long Description": [
            "This Numen plants an unconscious need in the target to seek vengeance on someone who has wronged him. It takes effect the next time the target sleeps, presumably outside Astral Space. For each success by which the demon wins the contest, plotting vengeance consumes the target’s life for one full day. People subjected to this Numen multiple times tend to pick up the threads of a vengeance planned before and dropped when the Numen’s effect ends.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "None",
        "Cost": "None",
        "Book": "AR 98"
    },
    {
        "Name": "Fearstruck",
        "Origin": "",
        "Description": "Paralyse someone with fear.",
        "Long Description": [
            "This Numen allows a spirit to cause an opponent to become paralyzed by fear. The spirit spends a point of Essence and then rolls Power + Finesse; the targeted opponent contests the roll with Presence + Composure + Supernatural Tolerance. Success renders the victim unable to move or speak (or even scream) for one turn. Exceptional success indicates that the victim freezes in place for three turns.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "BoS 141, Pred p66"
    },
    {
        "Name": "Festering Touch",
        "Origin": "",
        "Description": "",
        "Long Description": [
            "Wastes of Civilization must make physical contact (using its own or Sarah’s body) with the item it wishes to affect with Corrosive Touch, spend two Essence and roll Resistance + Power. Success causes metal to rust, clothes to become threadbare and skin to rash or age. If successes equal or exceed an item’s structure, that item is destroyed or otherwise rendered unusable. In contact with skin, the target takes half the successes rounded down in lethal damage.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "UtS 7"
    },
    {
        "Name": "Fetter",
        "Origin": "Spirit",
        "Description": "Bind self to a particular real object",
        "Long Description": [
            "This Numen secures a spirit inside an object once the spirit has crossed the Gauntlet into the physical world. Rather than Materializing, the spirit remains its ephemeral self in the material world. Normally, the spirit would be sucked back through the Gauntlet within a few hours, but once fettered, the spirit can remain in the physical world almost indefinitely. Once through the Gauntlet, the spirit activates this Numen by spending a point of Essence. The spirit must choose an object within five meters of its current position and spend an additional Essence to fetter itself to the object. The spirit can stay fettered in the material world for as long as it likes, unless the fetter is destroyed, in which case the spirit immediately discorporates and starts to re-form back in the spirit world. This Numen cannot be used across the Gauntlet without the use of the Reaching Numen.",
            "The spirit is invisible and intangible while in the material world. The spirit can be seen by werewolves and other spiritually sensitive creatures only. The spirit may never move more than five meters from its fetter, lest the link be lost, forcing the spirit back through the Gauntlet. A fettered spirit may materialize, if it has that Numen. While in material form, the spirit may move more than five meters from its fetter, but must be back within that radius when its materialization ends.",
            "Almost all artificial-spirits possess this Numen.",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "BoS 141, Inno p207"
    },
    {
        "Name": "Fiery Bite",
        "Origin": "Spirit",
        "Description": "",
        "Long Description": [
            "The dog’s bite inflicts fire damage instead of simple lethal damage. To most targets, the only difference this makes is cosmetic (the damage is accompanied by blistering and searing rather than just punctures and torn flesh), but to Prometheans, it means the dog inflicts aggravated damage with its bite.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "MO 142"
    },
    {
        "Name": "Final Strike",
        "Origin": "",
        "Description": "Make an immediate attack before finally discorporating.",
        "Long Description": [
            "This Numen allows a spirit on the verge of discorporation to make one last attack against its opponent. The spirit spends a point of Essence and makes an immediate attack against its foe as a reflexive action. This Numen is only usable when a spirit has fallen to 4 Corpus or below.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "BoS 141, Pred p66"
    },
    {
        "Name": "Firestarter",
        "Origin": "",
        "Description": "Can make a small fire.",
        "Long Description": [
            "The spirit can create a number of small fires. The spirit spends one Essence and rolls Power + Finesse. Each success causes a small fire to break out within its Power in yards, the number of fires is limited to the Rank of the spirit. This Numen is dependant upon having fuel to feed the flames — the spirit cannot cause nonflammable material to burn. The size and intensity of the fires generated is equal to the flames of a torch — though the fires may grow or decrease in size and intensity naturally once started. Use the Blast Numen to emulate a spirit that can burn living targets.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "BoS 141"
    },
    {
        "Name": "Forest Communion",
        "Origin": "Naturae",
        "Description": "The spirit possess some of the sense of nearby forest beings, gaining knowledge of the surrounding area.",
        "Long Description": [
            "The forest is alive, and much can be gleaned by those who know how to listen. With this Gift, a werewolf can sense much about the life around her: the tread of boots on the earth, fleeting images through the eyes of an owl or fox, or the scent of recent visitors.",
            "<b>Cost:</b> 1 Essence",
            "<b>Dice Pool:</b> Manipulation + Survival + Cunning",
            "<b>Action:</b> Instant",
            "<b>Roll Results</b><br><b>Dramatic <b>Failure:</b></b> The character is overwhelmed by the amount of information, suffering a –1 penalty to Wits rolls for the remainder of the scene.",
            "<b>Failure:</b> The character cannot establish communication.",
            "<b>Success:</b> The user slips into a trancelike state. Successful activation of this Gift allows basic information (presence of intruders, potential threats such as fires) up to 500 yards from the werewolf. Each additional success increases the radius by an additional 100 yards and increases the detail of information learned. One success could tell the presence of intruders, while three successes could reveal the species and gender of those intruders. The Gift lasts as long as the user remains in the trance, but she is unaware of and cannot react to the outside world, nor can she relay her findings while the Gift is active. This Gift doesn’t function in an urban environment. ",
            "<b>Exceptional Success:</b> No additional effect apart from greater range and increased information."
        ],
        "Pool": "",
        "Cost": "",
        "Book": "WtF 130"
    },
    {
        "Name": "Fortify Material",
        "Origin": "Stygian",
        "Description": "increase physical qualities of object for a scene",
        "Long Description": [
            "This Numen is known to some Stygian Supernal entities, as well as to a handful of Fallen World spirits associated with craftsmanship, alchemy, industry, and the like. The spirit rolls Power + Finesse as an instant action. For each success, it may spend a point of Essence to improve one of the following: an item’s equipment bonus, its Durability, its armor value, its armor piercing quality (also, an item without the armor piercing quality can be given one through the use of this Numen). Each one of these traits may be improved by a maximum number of points equal to the spirit’s Rank. These alterations last for the remainder of the scene.",
        ],
        "Pool": "Power+Finesse",
        "Cost": "1e/suxx",
        "Book": "Summ 222"
    },
    {
        "Name": "Freeze",
        "Origin": "",
        "Description": "Steal the heat from something.",
        "Long Description": [
            "The spirit can rob the heat from a radius equal to it Finesse in yards. The spirit spends one Essence and rolls Power + Finesse; this is contested by a reflexive Stamina + Resolve + Supernatural Tolerance roll. If the spirit scores more successes than its victims, they take that number as levels of bashing damage. Armor and insulating clothes can provide some protection for a limited period of time. Armor automatically blocks damage equal to its rating for a number of rounds equal to its rating.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "BoS 141"
    },
    {
        "Name": "Frenzy",
        "Origin": "",
        "Description": "Attacked targets half their defense. Also ass +1 for each damage taken to Corpus",
        "Long Description": [
            "Dominus gleefully abandons itself to the whirl of battle, disdaining personal defense in preference of tearing opponents limb-from-limb. Spend two points of Essence. For the remainder of the scene, Dominus gains a +1 bonus to attacks for each point of damage suffered to its Corpus. In addition, when Dominus makes an all-out attack while this Numen is active it may apply half its Defense rating (round down) as bonus dice to its attack pool in addition to the usual +2 bonus (Defense is reduced to zero as normal). ",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "BotD 145"
    },
    {
        "Name": "Frequency",
        "Origin": "Ghost",
        "Description": "Can transmit short repeated voice message over radio or television band.",
        "Long Description": [
            "Similar to Ghost Sign, the ghost can broadcast its voice over a radio or television band. Spend one Essence and roll Power + Finesse. If the roll fails, nothing happens. If the roll succeeds, the ghost can repeat a message (no longer than five minutes in length) over that frequency for up to a single day (24 hours). The message is never perfect, and is usually hampered by bouts of static and other radio interruptions.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "Power+Finesse",
        "Cost": "",
        "Book": "Summ 160"
    },
    {
        "Name": "Gauntlet Breach",
        "Origin": "Naturae",
        "Description": "Force the spirit through the Gauntlet into the Twilight.",
        "Long Description": [
            "This Numen allows a spirit to force itself through the Gauntlet. This isn’t a natural or easy thing for a fleshless entity, but it’s the most reliable way to enter the physical world. Indeed, unless the spirit fetters itself (using that Numen), the spirit can remain in the material world for only a matter of hours. Spend three points of Essence and roll Power + Finesse to force the spirit through the Gauntlet. Every hour that the spirit spends unfettered or in Twilight in the material world costs the spirit one point of Essence per Rank, as its ephemera is gradually consumed. When the spirit runs out of Essence, it discorporates, re-forming in the Shadow as normal. The spirit can, however, choose to return through the Gauntlet freely at any time. ",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "BoS 142"
    },
    {
        "Name": "Gauntlet Control",
        "Origin": "Primal Wild",
        "Description": "raise or lower Gauntlet by one/suxx",
        "Long Description": [
            "This Numen is unique to certain Supernal spirits hailing from the Primal Wild, though rumors exist of its possession by a handful of alien spirits from the unknown realms outside of the Tapestry. The spirit spends a point of Essence and rolls Power + Finesse as an instant action, with each success enabling the spirit to raise or lower the local Gauntlet strength by one, to a maximum of five or a minimum of zero. Note that a Gauntlet reduced to zero automatically creates a Verge (see Mage: The Awakening, p. 282). In the event that a spirit’s use of this Numen is contested (by another spirit with the same power, for example, or by a mage capable of influencing the Gauntlet), the party scoring fewer successes subtracts them from those of the party with more successes, and the Gauntlet strength adjusts by that many points in the winner’s desired direction, to the maximum amount allowed by the power used by the winner.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "Power+Finesse",
        "Cost": "1e",
        "Book": "Summ 222"
    },
    {
        "Name": "Geognosis",
        "Origin": "",
        "Description": "Can alter the geography of an area the entity is completely bound to.",
        "Long Description": [
            "Polydegmon is intimately tied to his Dominion. He is able to see and interact with any part of it. By rolling Power + Finesse, Polydegmon may shape the very fundament of the Dominion: shortening or lengthening the path, raising or lowering the temperature, shaping the landscape with a whim. This power beyond any other gives pilgrims the evidence and pause that they are in the company of a mythical deathlord.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "BotD 185"
    },
    {
        "Name": "Ghastly Crew",
        "Origin": "Pyros",
        "Description": "The entity inhabits a corpse, but the corpse reverts to only being a few days dead. The entity may also inhabit several corpses at once with this.",
        "Long Description": [
            "The qashmal can inhabit a corpse, working the body like a puppet. This Numen is sometimes used to complete a task that the corpse’s original owner left unfinished. For example, a group of Elpidos once inhabited the bodies of a crew of dead men on a becalmed sailing vessel, in order to bring the ship (and its sole survivor, an ancient mariner) safely back to port, before leaving the men’s bodies behind. Spend a point of Pyros and roll Power + Finesse. The body uses the qashmal’s Attributes, and the qashmal’s presence mostly reverses the body’s decay — it’s apparent that the body is dead, but even if the corpse has been dead for years, it looks as if he or she died only a few days ago. A qashmal inhabiting a corpse in this way does not lose Pyros over time. The qashmal must leave the body when the task is completed. When the qashmal departs, the body reverts to a state of decay reflecting the amount of time the corpse has been dead.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "PB 76"
    },
    {
        "Name": "Ghost Eater",
        "Origin": "Spirit",
        "Description": "Consume Ghosts as if they were spirits",
        "Long Description": [
            "The spirit with this Numen is able to steal Essence from or consume ghosts as if they were spirits. The spirit spends one point of Essence to activate this Numen and attune its “digestion.” The effects last for the rest of the scene. Naturally, the spirits must still be able to affect the ghost in other ways; this usually requires the spirit to be in the physical world and in Twilight.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "BoS 142, BotD p120"
    },
    {
        "Name": "Ghost Sign",
        "Origin": "Ghostly",
        "Description": "Create an image on a malleable media.",
        "Long Description": [
            "The ghost is capable of creating messages or images in malleable forms of media. Spend one Essence point and roll Power + Finesse. If the roll fails, nothing happens. If the roll succeeds, the ghost can create a single message or image. A sentence can be written in the steam condensed on a mirror. A ghostly statement can be heard amid the static of an audio tape. Or an image can be superimposed on a frame of camera film or videotape.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "WoD 211"
    },
    {
        "Name": "Ghost Speech",
        "Origin": "Ghostly",
        "Description": "Can speak when manifested.",
        "Long Description": [
            "The ghost is capable of speaking directly to mortals when it manifests. Spend one Essence point and roll Power + Finesse. If the roll succeeds, the ghost can utter a single sentence.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "WoD 211"
    },
    {
        "Name": "Ghostly Presence",
        "Origin": "Stygian, Underworld",
        "Description": "gain ability to interact with ghosts for duration of scene",
        "Long Description": [
            "Many Supernal entities from Stygia possess this Numen, as do many from the Underworld and some Fallen World spirits associated with death and other such concepts. The spirit spends a point of Essence and rolls Power + Finesse (penalized by the local Gauntlet strength) as an instant action to gain the ability to interact with (and be interacted by) ghosts in Twilight for the remainder of the scene. As an instant action, the spirit may activate or deactivate this ability, however many times it wishes, during the course of a scene.",
            "Some spirits of the Primal Wild possess a variant of this Numen that can be used to interact with Twilight familiars in a similar manner.",
            "",
            "",
            ""
        ],
        "Pool": "Power+Finesse",
        "Cost": "1e",
        "Book": "Summ 222"
    },
    {
        "Name": "Ghostly Thirst",
        "Origin": "",
        "Description": "",
        "Long Description": [
            "This  desperate  ghost can draw the moisture out of any living mortal it can “touch”  while  manifested.  To  do  so,  the  ghost  pits its Power + Finesse against the subject’s Strength + Stamina in a contested action. If the ghost succeeds, it  draws water out  of the  subject’s body  in the  form of sweat, tears or even a clear, vomited spray (in the event of an exceptional success). This causes the victim one point of bashing damage per success. Once an individual subject has suffered an amount of damage equal to his Health, he is dehydrated and the ghost gives up on him and resumes his search for water. This leaves the subject deprived of water as if he had gone days or weeks without drinking (see “Deprivation,” p. 175-176 of the World of Darkness Rulebook). The ghost tries to lick the sweat from a subject’s  skin. He tries to suck it from the dirt at his feet. He kisses subjects and dries away their spit. But none of it helps him — it’s too late.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "SoM 182"
    },
    {
        "Name": "Grant Influence",
        "Origin": "Astral",
        "Description": "",
        "Long Description": [
            "This Numen is common to all Animal Masters and Naturae. It represents the ability to grant others their “Platonic” or “morphogenic” template. Mages whose souls acquire the template can alter it through visualization. Granted, few mages quest the subtle realms to master the Platonic template of all raccoons, but control over Toronto’s ecosystem (see Wonscotanach, p. 112) might be a more tempting prize.",
            "To Grant Influence, roll the spirit’s Power + Finesse. Each success grants one dot of Influence or one use of the Influence. Divide successes between the number of uses and the level of Influence granted. The spirit chooses the balance as well as the maximum power and number of uses the spirit grants. Spirits can grant up to one Rank of Influence less than they possess. Once granted, the Influence can be used anywhere its subject or domain exists, and the potential to use the Influence lasts until the possessor uses or consciously relinquishes it. This power costs the spirit one point of Essence per Influence Rank granted, plus one per use. Targets can benefit from the influence of this Numen only once at any given time.",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "AR 110"
    },
    {
        "Name": "Grant Vision",
        "Origin": "Pyros",
        "Description": "The entity grants a sleeping or waking vision to the target.",
        "Long Description": [
            "Elpidos can invade the dreams of humans and Prometheans alike, granting vivid revelations in which they can impart valuable information, reveal truths or show apocalyptic visions of things that might come to pass. The Elpidos’ player spends one Pyros and makes a roll of Power + Finesse, contested against the victim’s Resolve + Composure. A qashmal with this Numen can impart visions to people who are wide awake, at a -2 dice pool penalty. If the victim is under the influence of drugs, particularly hallucinogenic drugs, the qashmal gains a +2 bonus to its dice pool.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "PtC 252, PB p77"
    },
    {
        "Name": "Greater Influence",
        "Origin": "Naturae",
        "Description": "Each time taken, can increase Influence by 1.",
        "Long Description": [
            "Spirits possessed of multiple Influences are not necessarily weaker than their more narrowly focused kin. Each time this Numen is taken, a spirit may increase one of its Influences by one dot. Rank 1 spirits may not take Greater Influence. No spirit may have a single Influence greater than its Rank, or more different kinds of Influences than its Rank. Example: By taking this Numen twice, Ember Man, a Rank 2 spirit of murderous arson, could have both Fire •• and Pain •• as its Influences (at the expense of having two other Numina).",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "BoS 142"
    },
    {
        "Name": "Gremlin Repairs",
        "Origin": "",
        "Description": "",
        "Long Description": [
            "Gremlins are capable of repairing mechanical and electrical devices with extreme skill, but only stop tinkering once those devices begin significant motion or noise. “Repairs” get progressively more destructive as the object refuses to “work.” Eventually, the gremlin gives up and breaks the object down into any interesting parts.",
            "Gremlins treat flesh and blood machines the same way. Gremlins attempt to stop “leaks” and identify and replace damaged body parts. Replacement pieces from other beings of the same species function as intended, though they cause constant pain and probable psychological trauma. Gremlin repairs suppress severe immune reaction to mechanical or organic transplants.",
            "In the absence of suitable replacement parts from the same species, though, gremlins attempt to fix living beings using parts from any other creature or from machines. These “repairs” do not turn people into cyborgs. Such ministrations are a death sentence, because the gremlin cannot fix a person using car parts. Thus, the person still appears “broken” to the gremlin, which means that the gremlin cannot leave the person alone, and attempts more repairs . . . eventually, the person dies from shock or blood loss, and the gremlin sadly dismembers its “project,” keeping the best parts in its lair.",
            "The Storyteller spends one point of Essence and rolls the gremlin’s Power + Finesse. This action is extended. Each roll requires 30 minutes of work, but the target number depends on what the gremlin is trying to do. If the gremlin is trying to fix a being or machine and has appropriate parts to do so (a wrecked car to fix another wrecked car, or a dead person to fix a dying one), the target number is five successes per point of Health or Structure that the target has suffered. Once the work is complete, the target bears the scars of being patched together from spare parts, but the spare parts work. A man sewn together after receiving new organs from his recently deceased friends might well wind up with a derangement or two, at the Storyteller’s discretion.",
            "On the other hand, if the gremlin is trying to fix a living being with parts from a machine or a different species, the target number is the number of Health points that the being has remaining that are not filled with aggravated damage. For instance, a man with Health 7 survives a car wreck, but suffers eight points of lethal damage in the process. He has six boxes that are not marked with aggravated damage (since one point “wrapped” and became aggravated), and so a gremlin trying to fix him with parts from his car needs six successes to do so. Once this target is reached, the victim is a horrid mishmash of organic parts and machinery (see below for an example). This unfortunate being lives only until the gremlin’s Materialize Numen expires (see below), and then the being dies."
        ],
        "Pool": "",
        "Cost": "",
        "Book": "MR 81"
    },
    {
        "Name": "Gremlin’s Touch",
        "Origin": "",
        "Description": "",
        "Long Description": [
            "This Numen temporarily disables a specific technological object, such as a cell phone, computer or an automobile engine. The malfunction has no apparent external cause. The spirit expends a point of Essence and touches the object to disable it. The object ceases to work for a number of turns equal to the successes rolled. If the object is carried by another who seeks to avoid the spirit’s touch, a roll is required to make contact (see Targeting an Object, p. 132). Valid pieces of technology that can be overcome include anything manufactured by industrial means, with at least three separate parts; a gun is valid, but a hinge or syringe is not. The object cannot be larger than the spirit, but a discernible part of a complex machine may also be targeted. A man-sized spirit can affect the engine of a car, but not the entire automobile.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "Inno 208"
    },
    {
        "Name": "Hallucinations",
        "Origin": "",
        "Description": "Create an illusion in the mind of the target.",
        "Long Description": [
            "This Numen allows a spirit to create an illusion. The spirit spends a point of Essence and pictures the illusion the spirit wants to create in its mind. This may be a sight, sound or even a person meant to interact with the target. The spirit makes a contested Power + Finesse versus the subject’s Wits + Composure + Supernatural Advantage roll. For each success the spirit rolls in excess of the target, the illusion affects one of the subject’s senses. The illusion is utterly compelling, but if the vision does something notably unusual the Storyteller may allow the target a Resolve + Composure roll to realize that his senses are lying to him.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "BoS 142, BotD p120"
    },
    {
        "Name": "Harrow",
        "Origin": "",
        "Description": "Overwhelm the person with a specific emotion.",
        "Long Description": [
            "This Numen is typically associated with spirits of negative emotions, such as fear or wrath. The spirit can focus its negative resonance to create a crippling attack of its associated emotional state in an enemy. Spend a point of Essence and roll the spirit’s Power + Finesse, contested by the victim’s Resolve + Composure + Supernatural Tolerance. If the spirit wins the contest, the target is overwhelmed by the relevant emotional state for a number of turns equal to the number of successes the spirit gained.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "BoS 142"
    },
    {
        "Name": "Heal",
        "Origin": "",
        "Description": "Heal damage equal to successes, or fight off disease.",
        "Long Description": [
            "The spirit can heal others’ wounds, typically for a hefty price. The spirit expends a point of Essence and rolls Power + Finesse. Bashing damage is healed before lethal, and all lethal damage must be healed before aggravated damage. Each success heals a level of bashing damage, while two successes can heal a point of lethal damage. The lethal damage healed can be used to mend aggravated damage, but each point of aggravated damage cured costs one additional point of Essence. (Healing two aggravated wounds calls for four successes and three points of Essence.) This Numen may also be used to help a character fight off disease or the effects of poison — each success adding to the character’s resistance rolls on a one-to-one basis.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "BoS 142"
    },
    {
        "Name": "Heal the Land",
        "Origin": "Elpidos",
        "Description": "The quashmal can lessen the effect of Wasteland",
        "Long Description": [
            "The qashmal can lessen the Wasteland effect around a Promethean. Spend three points of Pyros, and roll Power + Finesse. If the roll is successful, the qashmal lessens the Wasteland effect caused by one Promethean by one stage per success.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "PB 78"
    },
    {
        "Name": "Hellform",
        "Origin": "Infernal",
        "Description": "The demon assumes a fast, strong and tough form",
        "Long Description": [
            "The demon assumes a strong, fast and frightening shape. Classic Hellforms have horns, bat wings and scaled skins, but these are not the only possibilities. The demon might take the shape of a glass statue filled with green ichor and inhuman viscera, or a snakelike spinal column topped with a deformed skull. When the demon assumes the Hellform, unnatural speed and strange limbs allow it to make an additional attack for every dot of Finesse over 3. Storytellers may also divide its Infernal Rank between bonus attack dice and Corpus.",
            "Roll Power + Resistance. Each success allows the demon to maintain the Hellform for a turn. This Numen costs 1 Willpower (which does not add 3 dice to any actions) to activate, plus 1 point of Essence for every turn it functions.",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "Inf 52"
    },
    {
        "Name": "Hibernate",
        "Origin": "Naturae",
        "Description": "Sleep for a designated amount of time and stop hemorrhaging Essence",
        "Long Description": [
            "The spirit can enter a voluntary state of slumber in the Shadow to preserve its Essence. Spirits might choose to do this if the Essence flow in a particular area is seasonal. For every point of Essence spent to Hibernate, the spirit may slumber for up to one month. During this time, the spirit does not have to spend Essence every day to survive, though the spirit always awakes from its slumber famished. For an additional expenditure of Essence, the spirit can create an additional condition that will cause the spirit to awaken (other than the passage of time). This condition must be relevant to its Influences. A tree-spirit might choose to awaken if the trees in its wood are harmed, or a frog-spirit might choose to reawaken when it rains.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "BoS 142"
    },
    {
        "Name": "Horrific Renewal",
        "Origin": "",
        "Description": "",
        "Long Description": [
            "The Hognose has survived decades of use in a surprisingly pristine condition. The secret of its longevity is the ghosts that hide within its shell. Even while alive, Rattler and Python fed on human pain and misery. In death they’ve found ways to put those emotions to work for them. Mortal crews fear piloting the copter for good reasons. The whispering and cajoling of Rattler and Python to kill infects the crew with unease and the compulsion to kill becomes overwhelming. The ghosts seek to cause despair in the humans that pilot the Hognose, to taint the crew’s moral compass. Each time a crewman onboard the Hognose fails a Morality degeneration roll, Rattler and Python funnel the power of that anguish into the machine. Ten points of Structural damage is instantly repaired each time a pilot or gunner loses Morality while in the Hognose.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "Reload 36"
    },
    {
        "Name": "Host Affinity",
        "Origin": "",
        "Description": "",
        "Long Description": [
            "All ghosts are inextricably tied to the people, places, and things that serve at their footholds in the mortal world. Some however, develop the ability to forge a particularly potent relationship with a specific living person. A ghost with the Host Affinity Numen may not learn the Possession Numen, but gains in exchange a number of special abilities that pertain solely to the chosen “host” (a person who serves as the spirit’s Anchor). Typically, such a ghost has only one person as an Anchor, and it can only ever apply this Numen to one individual, who must be an Anchor.",
            "When in the vicinity of its human Anchor (within 10 yards times its Power Attribute), the ghost gains a +2 bonus to its Manifestation rolls, and may use the Ghost Sign or Ghost Speech Numina to create a number of sentences or (in the case of Ghost Sign) images equal to its Power on a single successful roll, rather than the customary one per use. Also, the ghost is considered to have the Compulsion and Possession Numina, with respect to its chosen host only. Should the target of the ghost’s Host Affinity ever die, then the ghost must make a successful Power + Finesse roll, minus the host’s Willpower, or else move on to its final fate, regardless of how many of its other Anchors survive.",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "Harvest 10"
    },
    {
        "Name": "Howl",
        "Origin": "",
        "Description": "Cause a howl that makes other flee their presence.",
        "Long Description": [
            "This Numen enables a spirit to let out a blood-curdling howl that causes an opponent to panic and run. The spirit spends a point of Essence and then rolls Power + Finesse – the opponent’s Composure. If the spirit wins the contest, the victim must flee the spirit’s presence for a number of turns equal to the number of successes achieved.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "BoS 142, Pred p66"
    },
    {
        "Name": "Ill Wind",
        "Origin": "",
        "Description": "",
        "Long Description": [
            "By spending 3 Essence and rolling Finesse + Power, Wastes of Civilization breathes out a noxious fume which causes all within its area of effect double over wracked with pain (unless they resist with a reflexive Resolve + Composure roll), taking bashing damage equal to the amount of successes rolled in the form of retching and vomiting.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "UtS 7"
    },
    {
        "Name": "Imitation",
        "Origin": "Pyros",
        "Description": "The Quashmal can take the appearance of any human it has met.",
        "Long Description": [
            "A Materialized qashmal with this Numen can take on the semblance of a human the qashmal has met. Spend one point of Pyros and roll Power + Finesse. Those who know the imitated person might see through the deception. Players of such characters make contested Wits + Empathy rolls. The number of successes is compared to the roll for this Numen. If the qashmal wins, the deception holds. If not, the viewer realizes that something is wrong with his acquaintance, though he probably won’t be able to put his finger on what.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "PB 77"
    },
    {
        "Name": "Immolate",
        "Origin": "Pyros",
        "Description": "The quashmals hands burst into flame, dealing Aggravated damage.",
        "Long Description": [
            "The qashmal’s hands (or claws, or mouth, or tentacles or wings) can, in an instant, be wreathed in cold Transforming Fire, which sears flesh and boils blood. Spend three points of Pyros. All of the qashmal’s Brawl attacks cause aggravated damage for the rest of the scene.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "PB 77"
    },
    {
        "Name": "Immunity (firearms)",
        "Origin": "",
        "Description": "",
        "Long Description": [
            "Firearms are ineffective against it. Even a direct hit from an RPG will only stop its advance for one turn.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "DoW 33"
    },
    {
        "Name": "Impart",
        "Origin": "Pyros",
        "Description": "The target mortal can be infused with Pyros, and is granted one of the quashmal's numina.",
        "Long Description": [
            "The qashmal can infuse a mortal’s being with the Pyros and grant the mortal the use of one of the qashmal’s Numina. Roll Power + Finesse. If the mortal is unwilling, or doesn’t know what’s happening, he can resist with Resolve + Stamina. If the qashmal succeeds, it burns itself out and returns to the Pyros, effectively ceasing to exist, while the mortal now gains the use of whatever Numen the qashmal wanted to pass on. The human’s dice pool when using the Numen is composed of appropriate Attributes. For example, if the qashmal bestows a human with the Awe Numen, that human’s player rolls Presence + Manipulation to use the Numen (the Power Attribute + the Finesse Attribute). If the Numen requires Pyros to be activated, the mortal’s player must spend Willpower instead, on a one-for-one basis. Any qashmal with the Impart Numen has almost always been sent to Earth for the purpose of using that Numen. The Numen only works for the mortal until such time as the qashmal’s purpose in granting it has been fulfilled, and it’s quite likely the qashmal will tell its mortal beneficiary exactly what this circumstance is (“you shall bear the cold flame in your hands, until such time as the creature under the bridge is dead,” for example). This power does not work on supernatural beings, including mages (whose Awakened souls will not allow the interference of the Pyros) and ghouls (whom the Vitae keeps in a state of spiritual stasis that the qashmal cannot alter). This power does work on mortals with supernatural qualities, such as the wolf-blooded and Sleepwalkers, however.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "PB 77"
    },
    {
        "Name": "Implant Delusion",
        "Origin": "Pyros",
        "Description": "The quashmal can make someone believe something that is not true, demonstration of the untruth ends the effect.",
        "Long Description": [
            "The qashmal can make someone believe something that isn’t true, or implant a false memory in a subject. Spend two Pyros and roll Power + Finesse, contested by the subject’s Composure + Azoth. If the roll is successful, the subject believes whatever the qashmal has just told him to believe. If this belief is something that can easily be proven false (for instance, “lead turns to gold when anointed with this oil”), demonstration of the delusion’s untruth ends the Numen’s effects. Qashmallim usually implant delusions of a spiritual and therefore unassailable nature, however.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "PB 77"
    },
    {
        "Name": "Impossible Technologies",
        "Origin": "",
        "Description": "",
        "Long Description": [
            "The gray spends a point of Essence to temporarily craft a piece of impossible machinery: devices for telepathic communication, the generation of anti-gravity fields, and the like. These devices last for a scene before breaking down into components that register as inconclusive to modern scientific tests. By spending one point of Essence per item, a graycan sustain its impossible technologies from scene to scene.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "Summ 31"
    },
    {
        "Name": "In Vino Veritas",
        "Origin": "",
        "Description": "",
        "Long Description": [
            "Priest can loosen the lips of potential targets by serving them alcohol and reflexively using this power. Roll Priest’s Power + Finesse - the target’s Resolve. Successes on this roll subtract from the Composure + Subterfuge roll that the target makes to resist telling Priest a secret later. This Numen can only used once per scene per target, and only if the target orders a drink from Priest.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "CoH"
    },
    {
        "Name": "Innocuous",
        "Origin": "",
        "Description": "-2 penalty to being noticed.",
        "Long Description": [
            "The spirit is very good at being overlooked. Onlookers suffer a –2 dice penalty on Perception rolls to notice the spirit, unless it does something to draw attention to itself.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "BoS 142"
    },
    {
        "Name": "Inspire Iniquity",
        "Origin": "Abyssal",
        "Description": "",
        "Long Description": [
            "The demon can evoke in others a desire to thwart justice and to support acts that deny honor and integrity. A point of Essence is spent, and Power + Finesse is rolled. The subject can resist this effect reflexively with a Resolve + Gnosis roll. Should the resistance roll fail, however, the character must find some way of directly and immediately upholding the iniquity that the demon prizes. If the spirit wins the contested roll by three or more successes, the spirit can direct the character to a specific act of iniquity. The compulsion lasts for a scene or an hour, whichever is less, unless the victim’s Virtue is Justice; in such a case, the effect lasts for a scene or an hour, whichever is greater.",
            "The demon may not use this power on a single target more than once in a given day.",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "IEwtA 113"
    },
    {
        "Name": "Investiture",
        "Origin": "",
        "Description": "Known only to Kerberos Yama, creates a Judge.",
        "Long Description": [
            "This Numen is known only to Yama and it is with this power that the Kerberos creates Judges and scribes to serve it, and deputizes those from the living world that offer service as payment. Used to target a ghost, the Numen has two effects. The first, lesser effect is to create a scribe. This investiture gives a ghost a slight boost to its mental capacities, which allows it to better serve Yama without altering the core personality of the ghost. The second effect is more intrusive. Each time Yama creates a Judge, it exhausts all of its available Essence, pouring it into the wraith. In return, the Kerberos absorbs some of the ghost’s Essence, making Yama an anchor of sorts for the new Judge. This process allows Judges freedom from the Underworld and reshapes the ghost’s Corpus to the familiar form worn by all Judges. Used to deputize a visitor from the living world, Yama invests a single point of Essence into the character. This breath of Yama acts as a sort of monitor of the deputy’s behavior and only returns to the Kerberos upon completion of a successful mission or if the deputy reneges on the deal.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "BotD 153"
    },
    {
        "Name": "Invoke Disquiet",
        "Origin": "Lilithim",
        "Description": "The quashmal can increase the disquiet of an individual",
        "Long Description": [
            "The qashmal’s words can worsen Disquiet in an individual. Spend one Pyros and roll Power + Finesse, contested by the subject’s Resolve + Composure. If the qashmal succeeds, the subject suffers the first stage of Disquiet, directed at a Promethean of the qashmal’s choice. If the subject is already suffering from Disquiet, the qashmal causes it to increase in severity by one stage.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "PB 80"
    },
    {
        "Name": "Invoke Firestorm",
        "Origin": "Greater Lilithim",
        "Description": "The quashmal can summon some of the strongest Firestorms.",
        "Long Description": [
            "Some of the most potent of the Lilithim can bring Firestorms into being. The qashmal spends seven points of Pyros, and rolls Power + Resistance. If the qashmal succeeds, a Firestorm brews up in the space of about an hour. Each success the qashmal gains is equal to one success on an Azoth roll, as if a Centimanus or Sublimatus had called the Firestorm into being (see Promethean: The Created, p. 254). This Firestorm’s trigger is Potniae (see Chapter Three for more information).",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "PB 80"
    },
    {
        "Name": "Invoke the Wind's Wrath",
        "Origin": "Naturae",
        "Description": "Summon a fearsome whirlwind",
        "Long Description": [
            "This Gift in many ways expresses the primal anger and inner turmoil of the werewolf’s spirit. The wind can be a fearsome ally, able to destroy flesh as well as metal, wood and stone. When a werewolf calls upon the wind, great destruction is sure to follow.",
            "<b>Cost:</b> 2 Essence",
            "<b>Dice Pool:</b> Strength + Empathy + Honor",
            "<b>Action:</b> Instant",
            "<b>Roll Results</b><br><b>Dramatic <b>Failure:</b></b> The character stirs up a weather pattern beyond his control, such as a freak snowstorm or a bolt of lightning that strikes a random tree or building.",
            "<b>Failure:</b> The local winds stir a bit with no real consequence.",
            "<b>Success:</b> A whirlwind of terrible intensity forms immediately within 50 yards of the character. He can then set it moving in any direction he chooses (though he cannot make it change direction). The whirlwind’s radius of effect is approximately 10 feet, and it moves at the character’s unmodified base Speed. People or objects caught in that radius suffer one die of lethal damage per success rolledon the Gift’s activation roll. Anyone within the radius of effect also suffers a –4 penalty on all die rolls, and targets weighing 150 pounds or less may be lifted and thrown in a random direction. A character who is within the radius of effect can attempt to get out of harm’s way during the Gift-user’s place in the Initiative order if his action falls after that of the Gift user. His player rolls Dexterity + Athletics (though this roll suffers the –4 penalty). Even a single success allows the dodging character to get out of harm’s way, but doing so costs him his action at his own later place in the Initiative order that turn. The whirlwind dissipates after two turns. The Gift user himself can be affected by the wind if he comes in contact with it.",
            "<b>Exceptional Success:</b> As success, but the whirlwind remains for an additional turn.",
            "Suggested Modifiers<br><table border='1' style='margin: 15px 0;'><thead><tr><th style='padding: 5px;'>Modifier</th><th style='padding: 5px;'>Situation</th></tr></thead><tbody><tr><td style='padding: 5px;'>+1</td><td style='padding: 5px;'>A heavily clouded day</td></tr><tr><td style='padding: 5px;'>+2</td><td style='padding: 5px;'>The weather is already raining or drizzling</td></tr><tr><td style='padding: 5px;'>–3</td><td style='padding: 5px;'>A cloudless day</td></tr><tr><td style='padding: 5px;'>–5</td><td style='padding: 5px;'>Desert or other similarly arid area</td></tr></tbody></table>"
        ],
        "Pool": "",
        "Cost": "",
        "Book": "WtF 111"
    },
    {
        "Name": "Iron-Rending",
        "Origin": "Naturae",
        "Description": "The spirit ignores suxx durability of inanimate objects",
        "Long Description": [
            "Werewolves tap into a source of strength that is older than all the works of man. Iron-Rending infuses a werewolf’s claws with such destructive power that iron, steel and concrete cannot withstand his might. A character with this Gift can tear apart steel like cardboard and claw stone as easily as clay. This Gift is usable only in Dalu, Gauru or Urshul form.",
            "<b>Cost:</b> 1 Essence",
            "<b>Dice Pool:</b> Strength + Crafts + Glory",
            "<b>Action:</b> Reflexive",
            "<b>Roll Results</b><br><b>Dramatic <b>Failure:</b></b> The Gift fails and the werewolf’s claws actually soften and break off. The result inflicts one point of bashing damage.",
            "<b>Failure:</b> The werewolf gains no particular advantage.",
            "<b>Success:</b> When attempting to damage an inanimate object with his bare claws, the character may ignore a number of points of Durability (see the World of Darkness Rulebook, p. 135) equal to the number of successes achieved on this power’s activation roll. The Gift’s effects last for one turn per success rolled. If the werewolf attacks a target protected by worn armor, this Gift allows a number of Armor points to be ignored equal to successes achieved on the power’s activation roll. This Gift cannot penetrate Durability or Armor gained by mystical means, such as through the Gift: Rage Armor.",
            "<b>Exceptional Success:</b> Not only does the character ignore a portion of an object’s Durability or a target’s Armor, but he gains a +1 bonus to unarmed close-combat attacks for the duration of the effect."
        ],
        "Pool": "",
        "Cost": "",
        "Book": "WtF 141"
    },
    {
        "Name": "Know the Path",
        "Origin": "Naturae",
        "Description": "The spirit visualizes the fast way to a location",
        "Long Description": [
            "Not all werewolves hunt by scent. The werewolf with this Gift draws forth knowledge of the quickest path to wherever she wants to go, be it the safe house of an allied pack or the heart of a Beshilu infestation. The quickest and most efficient path isn’t always the safest, but so it goes.",
            "<b>Cost:</b> 1 Essence ",
            "<b>Dice Pool:</b> Wits + Survival + Glory (versus subject’s Resolve + Primal Urge)",
            "<b>Action:</b> Instant or contested; resistance is reflexive",
            "<b>Roll Results</b><br><b>Dramatic <b>Failure:</b></b> The character perceives an improper path, one that leads someplace considerably less useful and potentially more dangerous.",
            "<b>Failure:</b> The character fails to discern the proper path and cannot use this Gift again until after the next moonrise.",
            "<b>Success:</b> The character visualizes the closest and most efficient route to the location she wishes. The information is stored in her head as a precise set of directions, allowing her to spend minimal time checking for landmarks. This Gift does not reveal the presence of dangers or obstacles along the way, unless they are specific landmarks. (“Turn left at the open chemical vats.”)",
            "If the location in question is kept secret by its owner (such as a vampire’s haven), the roll is contested. Roll Resolve + Primal Urge for the subject. If the place is shared by multiple people, roll the lowest Resolve + Primal Urge pool among them. The Gift user must be in the physical presence of someone whose secret lair is discerned. If a subject ties or wins the roll, he cannot be subjected to this Gift again for 24 hours.",
            "This Gift cannot locate the path to a place that is magically veiled or that exists on another plane of existence. The character can, however, use the Gift in the Shadow Realm to find the way to another location in the spirit world.",
            "The Gift effects last for a scene. If the character doesn’t reach her destination in that time, she must use the Gift again, or Intelligence + Composure can be rolled to remember the details (World of Darkness Rulebook, p. 44). ",
            "<b>Exceptional Success:</b> The character learns not only the most efficient route to the desired location, but also the safest. She might not choose the safest, but the option is there.",
        ],
        "Pool": "",
        "Cost": "",
        "Book": "WtF 127"
    },
    {
        "Name": "Know the Soul",
        "Origin": "",
        "Description": "The user gains a single insight to the targets soul, being vice, virtue, loves, sins, location.",
        "Long Description": [
            "The Sibitti use this Numen to know the weight of a soul they’re hunting: vices, sins, loves, location (or at least the direction in which to start), etc. With a Power + Finesse roll, Erra gains one insight into her target per success. This comes in the form of intuitions and won’t provide specific names or detailed litanies of sin, only feelings. Whether this sense can be wrong is something the Sibitti have never considered.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "BotD 153"
    },
    {
        "Name": "Lament",
        "Origin": "",
        "Description": "",
        "Long Description": [
            "The creature spends 1 Essence and howls a lament which causes everyone within earshot (100 yards) to drop their weapons and cover their ears. Victims roll Resolve + Composure to stop fleeing the area in fear. The effect lasts for one minute.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "DoW 33"
    },
    {
        "Name": "Left Handed Spanner",
        "Origin": "",
        "Description": "Disable technological device.",
        "Long Description": [
            "This Numen temporarily disables a specific technological object, such as a cell phone, computer or an automobile engine. The malfunction has no apparent external cause. In truth, the spirit using the Numen has interrupted the flow of spiritual energy into the object, thus causing its breakdown.",
            "The spirit expends a point of Essence and touches the object to disable it. The object ceases to work for a number of turns equal to the successes rolled. If the object is carried by another who seeks to avoid the spirit’s touch, a roll is required to make contact (see “Touching an Opponent,” the World of Darkness Rulebook, p. 157). Valid pieces of technology that can be overcome include anything manufactured by industrial means with at least three separate parts; a gun is valid, but a hinge or syringe is not. The object cannot be larger than the spirit, but a discernable part of a complex machine may also be targeted. A human-sized spirit can affect the engine of a car, but not the entire automobile.",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "BoS 142, BotD p120"
    },
    {
        "Name": "Legion",
        "Origin": "Infernal",
        "Description": "The demon divides into various smaller demons",
        "Long Description": [
            "The demon can divide into several lesser forms. Spend 1 Willpower point and 3 Essence. Divide the demon’s Infernal Rank any way you would like to determine the number of forms and their basic power. Divide its Attribute dots between each form, but do not divide Essence or Willpower. All component demons use the original’s point total, drawing from the common pool. Each form possesses just one of the demon’s Numina (and that Numina cannot be Legion) and the same Malapraxis.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "Inf 52"
    },
    {
        "Name": "Life Drain",
        "Origin": "",
        "Description": "",
        "Long Description": [
            "In certain specific situations, Pan can regain Essence at an accelerated rate when in the presence of someone who has died. There are two conditions. First, the person must have committed suicide out of shame or humiliation. Second, the person must have a Morality rating of 6 or higher. If the two conditions are met, then Pan will regain Essence equal to the sum of the victim’s Health points and Willpower. The Essence gained cannot exceed Pan’s maximum Essence pool, which is 20.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "13th 121"
    },
    {
        "Name": "Living Fetter",
        "Origin": "",
        "Description": "Bind self to a person as Fetter (does not control that person)",
        "Long Description": [
            "This variation on Fetter allows the spirit to fetter itself in a living being rather than an inanimate object. The same rules and restrictions as Fetter apply, save that the spirit must first succeed at a Power + Finesse roll contested by the target’s Resolve + Composure + Supernatural Tolerance. A successful use of this Numen creates one of the Ridden, specifically a Spirit-Urged (see p. 166). The spirit essentially uses the living being as a fetter and its Influence to impel its “host.” The most reliable way to break the bond between a spirit using the Living Fetter Numina and its host is to force the host into contact with the spirit’s ban.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "BoS 143, 13th p121"
    },
    {
        "Name": "Looking Glass",
        "Origin": "",
        "Description": "",
        "Long Description": [
            "This Numen allows the ghost to project its image in glass, mirrors, and other reflective surfaces without an actual physical manifestation. Spend one Essence and roll Power + Finesse. With success, the image of the ghost appears in the reflective surface. Any Numina that require the ghost to manifest but don’t have physical effects can be enacted through the projection (Dissembling Guise, for example). In addition, if anyone stares into the reflective surface containing the projection and speaks the name of the ghost aloud three times, the ghost may physically manifest without a roll and is refunded the point of Essence spent to activate this Numen.",
            "<b>Channeled:</b> While channeling this Numen, the Sin-Eater can look into a mirror or other reflective surface and see out of another reflective surface in the same building. Anyone that happens to be looking at their reflection when the Sin-Eater uses this Numen sees the reflection of the Sin-Eater in place of their own.",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "GTS 235"
    },
    {
        "Name": "Magnetic Disruption",
        "Origin": "",
        "Description": "Disrupt electronic equipment for a short time.",
        "Long Description": [
            "The ghost’s manifestation causes electronic equipment to malfunction due to an intense magnetic distortion. No roll is required. If the ghost manifests successfully it disrupts electronics within a number of yards equal to its Power trait. Radios, TVs and telephones emit static. Appliances stop working. Lights go out. Videotapes and camera film is erased/ exposed, ruining any captured images.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "WoD 211"
    },
    {
        "Name": "Manacles",
        "Origin": "",
        "Description": "",
        "Long Description": [
            "The ghost is able to enslave another shade and force it to perform whatever acts the lording ghost so desires. A specter can only use shades when its Power score is higher than the target’s Power score. If this is the case, spend one point of Essence and roll Power + Finesse in a contested roll versus the target ghost’s Power + Resistance. Success indicates that the ghost is able to enslave the victim shade, seizing control of the target. The ghost can force the victim to perform any command, however menial, contradictory, or dangerous. The ghost can enslave a number of ghosts equal to its Finesse score. The ghost must reattempt this Numen once per year if it aims to continue enslavement. This Numen isn’t necessarily restricted to use only within the Underworld, but that is where its effects are most commonly felt.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "GTS 281"
    },
    {
        "Name": "Manifestation Site",
        "Origin": "",
        "Description": "",
        "Long Description": [
            "Most ghosts are only able to manifest where the influence of mortals and the atmosphere of the world are conducive to a belief — or even just a temporary fear — in the restless dead. Some ghosts find it easier to manifest in some locations rather than others. Typically, these are ghosts whose mortal lives were ended as a result of a such a location, such as the crushed specter that haunts the intersection where his car was smashed by a drunk driver or the airport where a fatal flight took off.",
            "A ghost with this Numen gains a bonus to its Power + Finesse roll to manifest within a select environment. This bonus is usually about half the ghost’s Power, to a maximum of +3. The location described by this Numen — e.g., the Sonoran Desert, Chichen Itza or “the mouth of the old silver mine” — must be very specific (not just any desert, for example) for all but the most powerful ghosts, such as La Llorona.",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "SoM o183"
    },
    {
        "Name": "Manipulate Earth",
        "Origin": "Naturae",
        "Description": "Manipulate present expressions of Earth",
        "Long Description": [
            "The dust of the earth becomes as malleable as clay in the werewolf’s hands. This Gift is useful for a variety of things, such as forming a protective earthen shelter or quickly concealing loved ones from enemies. The character touches the ground, and it seems to do her bidding.",
            "<b>Cost:</b> 1 Essence",
            "<b>Dice Pool:</b> Dexterity + Crafts + Cunning",
            "<b>Action:</b> Instant",
            "<b>Roll Results</b><br><b>Dramatic <b>Failure:</b></b> Earth-spirits recoil at the werewolf’s fumbling. Any spirits of earth or stone become more hostile. Social rolls made toward those spirits suffer a –2 penalty, as do Gift-activation rolls or rite-activation rolls made within 24 hours that involve such spirits.",
            "<b>Failure:</b> The Gift is unable to shape more than a few ounces of dirt.",
            "<b>Success:</b> The werewolf can shape a surface area of roughly 100 square feet or a volume of roughly 40 cubic feet. The Gift is ideal for creating a quick foxhole or small escape tunnel. This power can sculpt earth, but not stone, concrete or metal. Changes made are permanent.",
            "<b>Exceptional Success:</b> The werewolf can sculpt stone as well as earth, though not metal or man-made substances such as asphalt."
        ],
        "Pool": "",
        "Cost": "",
        "Book": "WtF 111"
    },
    {
        "Name": "Manipulate Element",
        "Origin": "Naturae, Ghostly",
        "Description": "Shape and move designated Element.",
        "Long Description": [
            "The creature can move, morph and shape the element under its purview. The element should have a fairly narrow definition (soil, concrete, steel, stone, plastic, glass, wood, etc.) The spirit can roughly shape a surface area of about 100 square feet or a volume of roughly 40 cubic feet. The Manipulate Earth Numen, for example, is ideal for creating a quick foxhole, a crude wall or small escape tunnel. The Numen cannot be used as a direct attack (use Blast). Elements unable to hold their shape (air, water) should not be chosen. The effects are permanent, though they are not magically held in shape. Using the example above, a tunnel may naturally collapse soon after it is formed. This Numen costs one point of Essence.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "BoS 143, BotD p127"
    },
    {
        "Name": "Manipulate Time",
        "Origin": "Greater Elpidos",
        "Description": "The quashmal reverses time for the target as far as it desires.",
        "Long Description": [
            "The qashmal can rewind time a few seconds, so that an event never happened to an individual. Spend 10 points of Pyros and rolls Power + Finesse. If the roll succeeds, the subject of the Numen feels time rewind and everything that happened to her — even injuries — reverse. Although the subject remembers what happened, no one else realizes, as the Elpidos fractures time and remakes it.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "PB 79"
    },
    {
        "Name": "Materialize",
        "Origin": "",
        "Description": "Make ephemeral form material. Functions as in Twilight but can physically interact.",
        "Long Description": [
            "This Numen allows a spirit to change its form from ephemera to matter, dropping it abruptly through the Gauntlet into the material world. The spirit’s physical form appears in the material world just as it did in the Shadow, and all its Numina and Influences function as normal. All rules for spirit traits in the spirit world apply equally to a Materialized spirit. Spend three points of Essence and roll the spirit’s Power + Finesse to allow the spirit to reshape itself into matter. The number of successes indicates the number of hours that the spirit can remain in the material world before reverting to ephemera. The spirit must then choose between remaining in the material world (and either anchoring itself or losing a point of Essence every hour) or slipping immediately back through the Gauntlet.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "BoS 143"
    },
    {
        "Name": "Material Vision",
        "Origin": "Naturae",
        "Description": "Can look through the Gauntlet to see the material world from the Shadow",
        "Long Description": [
            "A spirit with this Numen can briefly look through the Gauntlet into the material world. Roll the spirit’s Power + Finesse. The number of successes indicates the number of minutes the spirit can spend watching through the Gauntlet.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "BoS 143"
    },
    {
        "Name": "Mechanical Possession",
        "Origin": "",
        "Description": "Can control a machine from the Twilight",
        "Long Description": [
            "This Numen allows the Manifested spirit to take control of a machine or vehicle that it has made into a fetter. By spending one Essence point, the spirit may operate the machine for the duration of a scene — the spirit can turn the machine off or on and control any moving parts, though the spirit cannot alter electrical flow. A spirit using this Numen to operate a car, for instance, would have to physically manipulate the radio knob to switch stations or turn the ignition switch to start the car. The spirit may make Finesse rolls in lieu of Drive in order to operate a moving vehicle, including all driving, control and crash rolls.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "BoS 143, Pred p66, GTS 235"
    },
    {
        "Name": "Memory Flashes",
        "Origin": "",
        "Description": "",
        "Long Description": [
            "This Numen allows the Reflection to use the terrible, painful, gory memories of its vampire as a weapon. It projects them into its target’s mind, forcing her to re-live every horrific experience the vampire has been through. The target becomes overwhelmed by these flashes of memory and has to fight to focus on other thoughts or feelings. The Storyteller spends a point of Essence and rolls Power + Finesse – the target’s Composure + Blood Potency. The target suffers a -1 penalty to all actions for every success rolled for the rest of the scene. The Reflection can’t use this power on someone who has already been affected by it until the original effects have worn off. The Reflection can use this Numen on its own vampire.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "Mekh 116"
    },
    {
        "Name": "Mimic",
        "Origin": "",
        "Description": "",
        "Long Description": [
            "Similar to Phantasm (see p. 212 of the World of Darkness Rulebook), but much more specific, this Numen allows the ghost to take the form of specific people. Thus far, the ghost can only take the form of people who appear in the surface thoughts of the living, but if the ghost grows more powerful it might gain the ability to choose who it mimics. The ghost must first manifest to use this power, but it can activate Mimic in the same turn that the ghost manifests (see p. 210 of the World of Darkness Rulebook for rules on Manifestation). Spend one Essence and roll Power + Finesse. If the roll succeeds, the ghost takes on the physical appearance of whomever the people who witness it are expecting to see. This doesn’t give the ghost any insight as to who it appears to be, but the ghost usually doesn’t care.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "Asy 114"
    },
    {
        "Name": "Morphic Form",
        "Origin": "Naturae",
        "Description": "Can change shape, not to disguise, but to move fluidly",
        "Long Description": [
            "The spirit is able to change its shape, not to disguise its true form, but to allow itself to elude its attackers by squirming through a sewer grate, or give it some edge based on environment. Spirits already possess the ability to increase their Attributes, and therefore make themselves stronger, faster or more slippery. This Numen allows a spirit to change its shape, structure or means of locomotion in a wide fashion, sprouting wings or fins or even making itself larger or smaller. These changes last for a number of hours equal to the successes on a Power + Finesse roll. Changing a point of Size costs one point of Essence, and adding a new form of movement costs three points of Essence; cosmetic changes (color, skin texture, etc.) cost one point of Essence. It is possible that a spirit might be able to grant itself other abilities, but think twice about allowing it to duplicate other Numen. The Storyteller might grant extra dice toward certain rolls for adopting new appendages, but boosting an Attribute, again, is already an ability a spirit possesses. Depending on its sphere of influence, a spirit (perhaps an elemental of metal) might be able to make itself nonflammable or bulletproof — such changes should cost four Essence.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "BoS 143"
    },
    {
        "Name": "Mortal Mask",
        "Origin": "Naturae",
        "Description": "Materializes in physical world, but looks human.",
        "Long Description": [
            "The spirit is able to transport itself across the Gauntlet, but, unlike the Materialize Numen, the spirit appears human. This human “costume” is somewhat imperfect, and the spirit does not choose the guise in which it appears; the mortal form is as generic as possible. Spend four points of Essence and roll the spirit’s Power + Finesse. The number of successes indicates the number of hours the spirit may exist in the material world, appearing human. The human costume offers a number of tiny flaws that are not easily noticeable without concerted investigation; perhaps the spirits smiles all the time or makes small but unusual gestures. Normal witnesses may make a Wits + Composure roll minus a number of dice equal to the spirit’s Finesse. Success indicates that the person notices something “off” about the spirit. Mortals with the Unseen Sense (Spirits) Merit do not suffer the penalty and make the Wits + Composure roll as normal. Supernaturals do not suffer this penalty.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "BoS 143"
    },
    {
        "Name": "Mutagenic Blast",
        "Origin": "Lilithim",
        "Description": "The quashmal attacks a target, giving it either the pandoran transmutation Tentacles, or Hundred Hands.",
        "Long Description": [
            "With a searing blast of cold Transforming Fire, the qashmal can cause a Promethean, Pandoran, mortal or animal to suffer a mutation of some kind. Spend two Pyros and roll Power + Finesse, contested by the subject’s Resolve + Stamina + Azoth. On a success, the subject mutates. For a scene, the qashmal’s victim gets either the two-dot Pandoran Transmutation “Tentacles” (Promethean: The Created, p. 241) or the three-dot Pandoran Transmutation “Hundred Hands” (Promethean: The Created, p. 244). The victim can’t hide the mutation and suffers a –1 to all dice pools for the rest of the scene as she struggles to control the way that her body has changed. If she is a Promethean, her disfigurements also become visible to all.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "PB 80"
    },
    {
        "Name": "Nightfall",
        "Origin": "",
        "Description": "Disables all electric lighting, and prevents it from operating for a scene.",
        "Long Description": [
            "Humans and werewolves alike rely on the power of light for innumerable tasks. This Gift allows the user to extinguish all electric light (i.e., electric lamps, battery-powered flashlights, streetlights) in a specific area.",
            "<b>Cost:</b> 1 Willpower",
            "<b>Dice Pool:</b> Wits + Larceny + Cunning",
            "<b>Action:</b> Instant",
            "<b>Roll Results</b><br><b>Dramatic <b>Failure:</b></b> The failed Gift alerts local technological spirits. Any spirits in the area associated with technology become increasingly hostile toward the character for one lunar month.",
            "<b>Failure:</b> Nothing happens.",
            "<b>Success:</b> The character must target a specific area within unaided visual range; the Gift does not work on areas viewed remotely via binoculars, security systems or the like. Success extinguishes the light within a home of about 2,000 square feet, with each additional success doubling the size of the area. Three successes, for example, kill the lights on an entire floor of a large office building. This Gift does not simply turn the lights off — it prevents them from functioning at all. The effects last for one scene, or until the character chooses to end the Gift’s effects.",
            "<b>Exceptional Success:</b> The character gains selective control over the technological light sources in the area, and may select one source to still function if she chooses."
        ],
        "Pool": "",
        "Cost": "",
        "Book": "WtF 143"
    },
    {
        "Name": "Omen",
        "Origin": "",
        "Description": "",
        "Long Description": [
            "Orbs sometimes impart messages to humans regarding other supernatural beings. Roll Power + Finesse; with one or more successes, the target experiences a brief hallucination in which some string of nearby text — a street sign, a newspaper headline — is rearranged to form a message. If no text is available, the target will hear the message as a disembodied voice. The message will relate to a supernatural that’s nearby: IT WAITS BELOW; BEWARE THE ONE IN RED; THE DEAD WALK, etc. If no such monster is near, the message will concern to the mental state of the target or some nearby person: SHE LACKS CONVICTION; YOUR CONCERN BLINDS YOU.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "HtV 345"
    },
    {
        "Name": "Omen Gazing",
        "Origin": "",
        "Description": "Whilst in a trance, the spirit receives visions of the future.",
        "Long Description": [
            "With this Gift, the werewolf has developed an inner sight so powerful that it can actually catch glimpses of the future. The character enters a meditative trance, clearing her mind of everything but darkness in order to welcome the visions. She might receive warning of an impending attack, foretell the arrival of a potential ally or even watch a betrayal unfold before it happens. Viewing the future accurately is impossible, though. No vision is guaranteed to come true. Worse, visions gained are more often signs of ominous events than they are promises of good fortune. Whether this is because the Gift’s “eyesight” is through a dark lens, or simply a cold reflection of the hard truths of a werewolf’s existence, none can say.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "WtF 124"
    },
    {
        "Name": "Omen Trance",
        "Origin": "",
        "Description": "Gains potential warning and visions of the future.",
        "Long Description": [
            "With this Numen, the spirit enters a meditative trance for the purpose of gaining a potential warning, nothing more. This Numen requires 15 successes and the expenditure of one point of Essence; each roll represents one minute spent in the trance. The spirit is unaware of events surrounding it while it is in a trance. The spirit is, however, aware of anything that touches or affects its body directly. A spirit may not attempt Omen Trance more than once in any 24-hour period. A spirit may attempt the trance for another (at a dear cost), but the Essence cost is tripled and the successes needed are doubled. The spirit must also taste of the creature’s Essence or physical body.",
            "If successful, the spirit catches a glimpse of a potential event in its near future — anywhere from 24 hours to one week. The spirit might receive warning of an impending attack, foretell the arrival of a potential ally or even watch a betrayal unfold before it happens. Viewing the future accurately is impossible, though. No vision is guaranteed to come true. Worse, visions gained are more often signs of ominous events than they are promises of good fortune. They can be confusing and perhaps even lead to actions that cause a foretold tragedy to come true. Whether this is because the Numen’s “eyesight” is through a dark lens, or simply a cold reflection of the hard truths of the Shadow, none can say. The vision lasts for roughly a turn’s worth of viewing — enough time to watch enough of the action to make out the actors and the setting. The vision is usually clear enough to make out details, though the details might be misleading.",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "BoS 144"
    },
    {
        "Name": "One Step Behind",
        "Origin": "",
        "Description": "The ghost can make a living target their temporary anchor, but can invest a point of Corpus to make it permanent.",
        "Long Description": [
            "This Numen allows the ghost to bind a bit of itself to the target, creating a temporary living anchor. The ghost spends three Essence and rolls Power + Finesse versus the Resolve + Psyche of its target. If the ghost wins the contest, the target becomes a living anchor for the duration of the scene. The ghost may extend the effect of the Numen by spending a point of Essence at the end of the scene and for every hour that passes thereafter. Ghosts can make this effect permanent by investing a point of corpus into the bond. This permanently reduces the corpus of the ghost by one (and some Sin-Eaters claim this was how the first geists were born). Once formed, only an exorcism can sever the bond between a ghost and its target. Ghosts may only have one living fetter at a time.",
            "<b>Channeled:</b> The channeled version of this Numen requires the Sin-Eater to touch her target, necessitating a roll for unwilling targets (see the World of Darkness Rulebook, p. 157). With a successful activation, the Sin-Eater instinctively knows the exact location of the target for the remainder of the scene. The Sin-Eater can extend this effect for one hour by spending an additional point of Willpower before the end of the scene.",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "GTS 235, BotD p124"
    },
    {
        "Name": "Parthenogenesis",
        "Origin": "Pyros",
        "Description": "The quashmal creates a miraculous pregnancy, even when it is normally impossible (although the conception might not come to term without further numina)",
        "Long Description": [
            "The qashmal has the power to conceive a child with a human woman without any sexual contact ever having taken place. Spend a point of Pyros, and roll Power + Finesse. If the roll succeeds, the woman enters into normal pregnancy. The woman can be of any age, and does not have to be physically able to bear a child —– she can be too young or too old to bear a child, or be without the necessary generative organs (because of disease, for example). If the pregnancy is carried to term, the child who is born probably has some high expectations upon her. Perhaps the child grows up to have supernatural powers, but she doesn’t need to. The weight of expectations can be enough to make the child of such a miraculous pregnancy remarkable in many ways.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "PB 77"
    },
    {
        "Name": "Pathfinder",
        "Origin": "",
        "Description": "Gains knowledge of the quickest route to when it wants to go.",
        "Long Description": [
            "The spirit with this Numen draws forth knowledge of the quickest path to wherever it wants to go, be it the quickest way back to its den or the location of his foes’ weakest loci. The quickest and most efficient path isn’t always the safest, but so it goes. If successful, the spirit visualizes the closest and most efficient route to the location she wishes. The information is stored in its head as a precise set of directions, allowing it to spend minimal time checking for landmarks. This Numen does not reveal the presence of dangers or obstacles along the way, unless they are specific landmarks. (“Turn left at the open chemical vats.”) If the location in question is kept secret by its owner (such as a vampire’s haven), the roll is contested. Roll Resolve + Supernatural Advantage for the subject. If the place is shared by multiple people, roll the lowest Resolve among them. The Numen user must be in the physical presence of someone whose secret lair is discerned. If a subject ties or wins the roll, he cannot be subjected to this Numen again for 24 hours.",
            "This Numen cannot locate the path to a place that is magically veiled or that exists on another plane of existence, other than the plane that the spirit inhabits when it activates this Numen.",
            "The Numen’s effects last for a scene. If the spirit doesn’t reach her destination in that time, she must use the Numen again, or make a Power roll to attempt to remember the details.",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "BoS 144, BotD p127"
    },
    {
        "Name": "Perfect Lie",
        "Origin": "Infernal",
        "Description": "The target believes anything the demon says, as long as it isnt pure fantasy, or dosnt contradict something the person already knows.",
        "Long Description": [
            "When a demon uses this Numen successfully, its victim will believe anything it says, no matter how unlikely, as long as it isn’t utter fantasy (“You ride a unicorn to work”) or contradicted by anything the target knows to be true, such as telling someone he shot his wife, when he knows he didn’t. Spend 1 Essence and roll Power + Finesse + Infernal Rank – the target’s Composure (and a supernatural power trait such as Blood Potency, Primal Urge or Gnosis, if it applies). If the demon succeeds, the victim believes the lie for the scene.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "Inf 53"
    },
    {
        "Name": "Phantasm",
        "Origin": "",
        "Description": "Create an illusion to all senses.",
        "Long Description": [
            "The ghost has the power to create illusory images. Spend one Essence point and roll Power + Finesse. A negative modifier may be applied to the roll depending on the size and complexity of the illusion. Mimicking a person’s voice alone or creating a distinctive smell (like perfume) doesn’t incur any negative modifiers, but creating the illusion of a person might be subject to a -1 penalty. Creating the illusion of a specific person (down to patterns of speech and mannerisms) that a witness knows might call for a -2 penalty. Creating a complex illusion that seems to have physical substance (the witness is convinced that he can “touch” the illusion and it feels solid) incurs a -3 or more severe penalty. Small, subtle illusions are generally much more effective than large, overt ones. This power can work on only one victim at a time. Other mortals in the subject’s vicinity do not see what he does. When a subject witnesses an illusion, roll Wits + Composure (or the Storyteller may allow Composure to be replaced by Occult if your character is aware of ghostly activity). If the roll generates as many or more successes than were achieved in the phantasm roll, the victim recognizes that the image can’t be real. If the phantasm roll wins, the subject believes the illusion is genuine, but another Wits + Composure (or Occult) roll is made for him in each successive turn to attempt to see through the power. A ghost can maintain only one illusion at a time, and each illusion remains for the duration of the scene unless dispelled.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "WoD 212"
    },
    {
        "Name": "Pillar of Salt",
        "Origin": "Greater Lilithim",
        "Description": "The lilithim transforms a person immediately into dust and salt, ending their life. However, the target must be warned first, and it can only be used on those that ignore the warning.",
        "Long Description": [
            "The Lilithim can end a mortal’s life at a stroke, transforming his flesh with a word into nothing but salt and dust. Spend five Pyros and roll Power + Finesse, contested by the subject’s Resolve + Stamina + Azoth. On a success, the victim becomes a rough pillar of rock salt. A Promethean (or other supernatural being) remains this way for a number of hours equal to the qashmal’s Power. A mortal remains this way indefinitely, although there may be supernatural means of returning him to life.",
            "The Lilith can only use this Numen on a mortal if the mortal ignores a warning. A Lilith doesn’t have to say what the consequences of the warning are, but must inform the victim of something he must not do — don’t look back, don’t open the red door, don’t speak while in this room, don’t touch the altar. Here, for once, ignorance is an excuse. If the person who broke the rules didn’t know that there was an instruction, the qashmal cannot use this Numen.",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "PB 80"
    },
    {
        "Name": "Plague Crow",
        "Origin": "Lilithim",
        "Description": "The quashmal inflicts a disease upon the target.",
        "Long Description": [
            "Disease is the Lilithim’s plaything. A qashmal with this Numen can inflict disease upon an unwitting mortal (including mages) with a touch, a kiss or sometimes just a breath. Spend three Pyros and roll Power + Finesse, opposed by the victim’s Resolve + Stamina. On a success, the victim suffers from a potentially fatal disease. What the disease is, and whether it’s infectious is up to the Storyteller, but it’s always potentially fatal (see the World of Darkness Rulebook, p. 176). If the disease is not terminal and incurable, it should take at least 20 successes on an extended Stamina + Resolve roll to beat, with one roll allowed per week.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "PB 80"
    },
    {
        "Name": "Plague of the Dead",
        "Origin": "Spirit",
        "Description": "Creatures killed by a Ridden can be animated by the Spirit",
        "Long Description": [
            "This Numen only functions if the spirit is using Chain of the Dead, or Corpse Ride. Creatures killed by a Ridden Dead can be animated by the spirit. It costs two points of Essence to animate a corpse for roughly a day — see the write-up below for more details. (Those with World of Darkness: Antagonists can create their own zombies — this Numen grants five Creation points to craft a zombie. Greater spirits can pump more Essence into the effort, adding one creation point per extra point of Essence.)",
            "<b>Background:</b> Use these stats to represent zombies created by the Plague of the Dead Numen.These zombies seek to kill any living human in their presence; failing that, they wander about destroying any other life they can recognize. Some even attack mannequins in desperation.Tragically, zombies can often remember scraps of their life — enough to allow them to act with some intelligence, but also enough to torment them as their bodies and minds rot away utterly.",
            "<b>Description:</b> They see with eyes clouded with pus, they eat with tongues bloated with rot; these walking dead not only inspire horror from their frightful undead appearance, but they also decay at a staggering rate — within hours they begin swelling with necrotic gasses, oozing pus and attracting hordes of cadaverous insects.",
            "<b>Storytelling Hints:</b> These shambling dead, while amazingly strong, are not extremely dangerous as individuals for a group of humans.Yet in groups, they become an overwhelming tide of unlife. Even though they have little means to resist damage, they can absorb terrific amounts of damage and remain dangerous.These zombies do no suffer wound penalties and do not differentiate between bashing, lethal and aggravated damage.After exhausting their Health attribute, begin removing points of Physical Integrity.As this trait degrades, the zombie begins losing digits, feet and even limbs — which may make some actions impossible, or drop their Speed.At five points, the zombie has half of its limbs, and when the trait reaches 0, there’s nothing left. Zombies cannot heal their wounds.",
            "<b>Attributes:</b> Power 5, Finesse 1, Resistance 3<br><b>Willpower:</b> 0<br><b>Initiative:</b> 1<br><b>Defense:</b> 0<br><b>Speed:</b> 6<br><b>Size:</b> 5<br><b>Weapons/Attacks:</b><table border='1' style='margin: 15px 0;'><thead><tr><th style='padding: 5px;'>Type</th><th style='padding: 5px;'>Damage</th><th style='padding: 5px;'>Dice Pool</th></tr></thead><tbody><tr><td style='padding: 5px;'>Baseball Bat</td><td style='padding: 5px;'>2(b)</td><td style='padding: 5px;'>8</td></tr><tr><td style='padding: 5px;'>Bite</td><td style='padding: 5px;'>1 (L)</td><td style='padding: 5px;'>7</td></tr><tr><td style='padding: 5px;'>Fist</td><td style='padding: 5px;'>0 (B)</td><td style='padding: 5px;'>2</td></tr></tbody></table><br>Health: 5<br><b>Physical Integrity:</b> 10",
            "<b>Spirit Plague Weakness:</b> The death-aspected Essence that animates them also speeds the decomposition of their corpses. These zombies take a point of damage every three hours due to the necrotic effects of their animating energies.All zombies created via Plague of the Dead bear this weakness.",
            "<b>Residual Memories Weakness:</b> These poor creatures are driven to murder, yet still posses a few memories of their life. When presented with a loved one or other appropriate stimulus, they will stop attacking — or perhaps move away whimpering for three (Resistance) minutes.After this time, the same stimulus will not work again. No one is safe for long.",
            "<b>Limited Intelligence:</b> The zombie possesses enough intelligence to solve basic problems, such as how operate doorknobs, unlatch gates and use simple hand-to-hand weapons.",
            "<b>Quick Movement:</b> The zombie’s Speed equals Power + Finesse (rather than just its Finesse)",
            "<b>Vicious Bite:</b> The zombie inflicts lethal damage with its bite."
        ],
        "Pool": "",
        "Cost": "",
        "Book": "BoS 144"
    },
    {
        "Name": "Plant Growth",
        "Origin": "Naturae",
        "Description": "The spirit causes a plant to grow at a phenomenal rate.",
        "Long Description": [
            "The werewolf can cause any living plant to grow at a phenomenal rate, shaping the growth to her whim. Some Hunter in Darkness packs have thick thorn hedges surrounding their territorial borders, or live in literal tree houses.",
            "<b>Cost:</b> 1 Willpower",
            "<b>Dice Pool:</b> Wits + Survival + Honor",
            "<b>Action:</b> Instant",
            "Each success rolled increases the size of a plant or group of plants by a cubic yard, at a rate of one minute per cubic yard. The vegetation can grow in whatever shape desired. The effects of the growth are permanent, though the plants can be trimmed or destroyed as usual. One or two successes are required to create a simple shelter for an individual. Five successes can turn a sapling into a 20-foottall tree.",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "WtF 130"
    },
    {
        "Name": "Plasticity",
        "Origin": "",
        "Description": "",
        "Long Description": [
            "The ghost uses this Numen to mold hands, faces, and other body parts out of solid, material objects as though they were soft as clay. Spend one point of Essence and roll Power + Finesse. With success, the ghost creates a body part that seems to stretch out from a solid surface. A pair of arms might reach out from the wall, a face could push its way out of the ceiling or more disturbing pieces of anatomy might bubble up from the surface of a table. The ghost can manipulate its creations as though they were part of its corpus, making attacks (such attacks cause bashing damage) that use the ghost’s dice pool or just moving them around a room causing panic in onlookers. If a plasticized body part takes a single point of damage, the surface returns to its original appearance. This Numen persists for one scene or until the ghost has manifested and subsequently lost a number of creations equal to its corpus. Ghosts may only create and maintain one body part at a time.",
            "<b>Channeled:</b> Channeling this Numen requires the full concentration of the Sin-Eater, meaning he can take no other actions while it remains active. The character can create a total number of body parts equal to his Stamina. Use of this Numen requires line-of-sight to whatever material the character intends to manipulate.",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "GTS 235"
    },
    {
        "Name": "Possession",
        "Origin": "",
        "Description": "Extended control of a person, for a whole scene",
        "Long Description": [
            "The spirit can attempt to possess a living human being and control his or her body for a short time. Spend one Essence point and roll Power + Finesse in a contested roll versus the victim’s Resolve + Composure + Supernatural Tolerance. If the spirit wins, it gains control of the victim’s body for the duration of a single scene. Use the victim’s available traits (except Willpower points, which are equal to the spirit’s current Willpower points) and dice pools for any action the spirit wishes to take. If the mortal wins or ties the roll, the spirit fails its possession attempt. As long as the spirit has Essence points remaining, it can continue to make possession attempts against a target. If a possessed body is killed or knocked unconscious, the spirit is forced out and must possess another victim if the spirit still wishes to act. This is the Numen used by the Spirit-Thieves (p. 174). The most reliable way to break the bond between a spirit using the Possession Numina and its host is to force the host into contact with the spirit’s ban.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "WoD 212, BoS 145"
    },
    {
        "Name": "Pray for Rain",
        "Origin": "Elpidos",
        "Description": "Rain comes, and is a pleasant temperature and intensity for humans.",
        "Long Description": [
            "Rain comes, cool and refreshing, brought by the qashmal. Spend three points of Pyros and roll Power + Finesse. If the roll is successful, it begins to rain in an area of about a half-mile radius around the qashmal, no matter how improbable that might be. The rain is at a comfortable temperature for humans, no matter how hot or cold the surrounding area.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "PB 78"
    },
    {
        "Name": "Precision",
        "Origin": "",
        "Description": "The ghosts defence does not reduce with more attackers",
        "Long Description": [
            "Clockwork is always in complete control of its body and bases its decisions on complex calculations that give its actions an eerie semblance of prescience. Spend two points of Essence. For the remainder of the scene, Clockwork’s Defense is never reduced by multiple attackers and it may apply half its Defense (round down) against ranged attacks.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "BotD 144"
    },
    {
        "Name": "Proxy",
        "Origin": "",
        "Description": "",
        "Long Description": [
            "This power allows the ghost town to create “proxy” spirits. These beings are not real ghosts, exactly, but nor are they illusions like those created with Phantasm. The proxies contain a fraction of consciousness and manifest as one of the people who died at the location. The image mimics a person’s body and voice to a limited and imperfect degree. One of the town’s Essence is spent. (No roll is required.) The result is a proxy ghost with four dots to be distributed between Power and Finesse. The proxy’s Resistance is 4 (half that of the town, rounded up). A proxy ghost also has a Size of 5. You may add to any of these traits by spending one Essence per dot added. And you may spend two Essence to give a proxy any of the town’s own Numina. Remaining traits can be determined as indicated on p. 22. The entity created persists for a single scene.",
            "Proxy spirits are different from genuine ghosts in that they are just ephemeral simulacra of once-living mortals. They have no anchors. If capable of speech, they tend to communicate in stunted language, only half-comprehensible, and occasionally refer to themselves in the third person. (They also never claim to have names, only titles — a ghost town doesn’t think of people as having individual identity and hence cannot translate that information over to proxy spirits.)",
            "Harming proxy spirits is difficult. They can be banished through use of abjurations and exorcisms. They can also be harmed by blessed objects. The only other way to negatively affect a proxy is to harm or modify the anchor of the ghost town that created it — damaging such an anchor even slightly banishes all proxy spirits for a number of hours equal to (10 – the ghost town’s Resistance), with a minimum of one hour.",
            "When created, all proxy spirits count as “manifested.” This is the manner in which a ghost town may accommodate a lack of its own manifestation ability. (See p. 23 for rules on manifestation.)",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "GS 38"
    },
    {
        "Name": "Pyretic Chorale",
        "Origin": "Elpidos",
        "Description": "The quashmal splits into several figures and sings a message. they disappear at the end of the message.",
        "Long Description": [
            "Occasionally, the qashmallim must make their information openly available and difficult to ignore. With this Numen, a single Elpidos can appear to divide into several figures, all of whom sing in unison. Spend three points of Pyros and roll Power + Finesse. If the roll is successful, the qashmal appears to be literally dozens of individuals, who sing or speak in unison at tremendous volume. When the qashmal’s message is over, the extra figures vanish.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "PB 79"
    },
    {
        "Name": "Pyros Drain",
        "Origin": "Pyros",
        "Description": "The quashmal can steal pyros from a target.",
        "Long Description": [
            "Many qashmallim of both Choirs and both Orders have access to this Numen, which allows them to steal Pyros from any being that has it. Roll Power + Finesse in a contested roll against the victim’s Resolve + Composure. If the qashmal wins, it steals one Pyros point per success, which the qashmal can use to fuel its powers.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "PtC 252, PB p77"
    },
    {
        "Name": "Radioactive Blast",
        "Origin": "",
        "Description": "",
        "Long Description": [
            "The ghost spends a point of Willpower and rolls Power + Finesse minus the target’s Stamina. Each success inflicts one point of bashing damage. On an exceptional success, the damage is lethal.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "CoH"
    },
    {
        "Name": "Rage Armor",
        "Origin": "",
        "Description": "The spirit gains armor equal to every 2 suxx",
        "Long Description": [
            "The natural resilience and rapid regeneration that the Forsaken have inherited makes werewolves daunting foes. Using this Gift, however, makes Full Moons even more fearsome than their brothers and sisters. With a blood-curdling howl to Luna, the werewolf tempers his flesh with the fire of his Rage and renders himself nigh indestructible for a short time. When he does so, his eyes glow the deep amber of the harvest moon, and a faint distortion makes the air around him waver as his inner fire burns close to the surface.",
            "<b>Cost:</b> 1 Essence",
            "<b>Dice Pool:</b> Stamina + Survival + Honor",
            "<b>Action:</b> Instant",
            "<b>Roll Results</b><br><b>Dramatic <b>Failure:</b></b> The werewolf mistakenly believes that he’s well protected, which makes him careless. Not only does he fail to gain the Armor, he loses his Defense for the first turn of combat.",
            "<b>Failure:</b> The werewolf gains no Armor.",
            "<b>Success:</b> The werewolf gains a point of Armor for every two successes rolled, with remainders ignored. It protects against physical attacks and firearms equally, but not against silver. Attacks made with silver weapons or silver bullets ignore the effects of this Gift and still cause aggravated damage. The effect lasts for a number of turns equal to the character’s Primal Urge dots.",
            "<b>Exceptional Success:</b> No special benefit other than a high Armor rating."
        ],
        "Pool": "",
        "Cost": "",
        "Book": "WtF 117"
    },
    {
        "Name": "Rain of Frogs",
        "Origin": "Lilithim",
        "Description": "Organic material of one variety or another rains from the sky. All lilithim pandoran transmutations or numina for a day after the rain gain a +1 to activation",
        "Long Description": [
            "Chaotic and Fortean events create circumstances favorable to the propagation of Flux. With this Numen, a Lilith can cause frogs, fish, blood or some other organic material to rain from the sky. Spends four Pyros and roll Power + Finesse. The frogs, fish, blood or whatever are spontaneously generated, and may cause, at the Storyteller’s discretion, some danger to people caught outdoors in the rain. Naturally, science has no explanation for what happens and can find no origin for the animals or blood. If blood rains from the sky, on analysis the blood matches the blood of no known animal.",
            "For a day after the unnatural rain, all rolls made to activate Pandoran Transmutations or Numina used by Lilithim in the area of the storm receive a +1 modifier.",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "PB 80"
    },
    {
        "Name": "Raise Flux",
        "Origin": "Lilithim",
        "Description": "The flux rating of the area raises by 1.",
        "Long Description": [
            "With this Numen, a Lilith can infect the surrounding area with Flux. Spend five Pyros and roll Power + Finesse. On a success, the Flux Rating in the immediate area rises by 1.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "PB 80"
    },
    {
        "Name": "Rapture",
        "Origin": "",
        "Description": "Flood person with pleasurable visions and sensations",
        "Long Description": [
            "Many spirits favor subtle controls over their fleshy pawns, but some use this vile short-term method for greater control. With this Numen, the spirit can tap into the pleasure centers of a willing creature’s mind and soul, granting the creature’s ecstatic visions, immense pleasure and a sense of communion with the otherworld. In fact, this Numen is a low-level possession, a melding of ephemera and soul carefully steered by the spirit to elicit primal responses from the target. For one turn, the victim is completely incapacitated — perhaps babbling in the Spirit Tongue, dancing or even growling. For a number of hours after this effect (8 – Stamina), the victim feels charged and sure of her devotion to the spirit’s cause, receiving +2 on any roll when acting in accord with her ravisher’s desires. All other dice pools are at –2. Unfortunately, such intimate contact with an alien mind can cause damage to the target’s psyche. If the target fails a Resolve + Supernatural Tolerance roll, she gains a temporary derangement for a number of days equal to the spirit’s Power, or until she is no longer under the effect of this Numen, whichever is longer. The derangements that result are almost always ones that further bind the victim to spirit’s desires (fixations, compulsions, and so on.) Alternately, and depending upon circumstance, the Storyteller may rule that this act is effectively a Level 4 Sin. Furthermore, victims begin to build up a tolerance to the Numen, dropping the duration of the effect (halving the time for each rapture experienced in the same month). Each exposure to this Numen lowers the resistance to any of the spirit’s other powers, a cumulative –1, maximum –5; these penalties fade at a rate of one per day. This Numen costs two points of Essence and may only be used if the spirit is on this side of the Gauntlet and touching the target or with the Reaching Numen. ",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "BoS 145"
    },
    {
        "Name": "Reaching",
        "Origin": "Naturae, Infernal",
        "Description": "Can use certain Numina to effect the material world in conjunction with this.",
        "Long Description": [
            "This Numen allows a spirit to use its other Numina through the Gauntlet. Roll Power + Finesse, modified by the strength of the Gauntlet (p. 46) to successfully create a resonant conduit through the Gauntlet for the spirit to use its next Numen. Reaching lasts for the duration of the next scene and moves with the spirit. This conduit exists in Twilight in our reality, and though it cannot be directly targeted, creatures with the ability to perceive objects in Twilight may be able to spot it, though it is difficult (–4). Reaching costs one Essence.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "BoS 145, Inf p53"
    },
    {
        "Name": "Rebirth",
        "Origin": "Naturae",
        "Description": "While Riding a living target, kill and consume 3 targets over a week. The Third target then inhabits the body, which ages back to 18 years. The other two souls are then released.",
        "Long Description": [
            "This Numen is possessed only by conceptual spirits of choirs associated with reincarnation, or karma. Rebirth represents a process that, once begun, must be completed within one week (seven days), or else the benefits are lost. The spirit must first Claim a human body, either mortal or Awakened (a mage). The spirit must then kill and devour two more people within the next seven days. (If the Claimed victim was a mage, the other victims must also be a mage.) During this time, the spirit stores the souls of those it kills. Once it kills its third victim, it then restores one of those victims to life with renewed youth in a transformed version of the Claimed body: the body is biologically 18 years old, although it ages normally from then on. The other souls are then released, to go to their proper fates. If the spirit cannot complete its task of killing two more mages within a week after the first death, none of its victims are reborn. This Numen can only be used once upon a particular soul to rebirth its material body. Once this Numen has played out, the spirit is involuntarily subject to the effects of the Discorporation Numen. Roll Power + Resistance; if successful, the spirit discorporates and reforms elsewhere in the Shadow Realm (probably at a locus it is familiar with).",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "BoS 146"
    },
    {
        "Name": "Recharge Pyros",
        "Origin": "Pyros",
        "Description": "The quashmal can convert electricity into pyros.",
        "Long Description": [
            "The qashmal, when Materialized, can recharge its Pyros from electricity. The Dominion attaches itself to a source of electrical power. Spend one point of Pyros, and roll Power + Resistance. On a success, the qashmal gets the point of Pyros back, and gets another point of Pyros for every success rolled. However, every success also reduces the Structure of the electrical outlet or cable the qashmal has connected itself to by one. If the object’s Structure is reduced to zero or less, the qashmal is destroyed.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "PB 77"
    },
    {
        "Name": "Regenerate",
        "Origin": "",
        "Description": "Can spend Essence to gain Corpus/ Health",
        "Long Description": [
            "The spirit can use Essence to regenerate Corpus. There is no dice pool for this Numen. Once activated, the spirit automatically regenerates one level of damage per turn. It regenerates bashing damage first, then lethal. This Numen costs one Essence per turn. Aggravated damage must be healed normally.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "BoS 146"
    },
    {
        "Name": "Regeneration",
        "Origin": "Revenant",
        "Description": "Can spend Essence to gain Corpus/ Health",
        "Long Description": [
            "The Flesh Intruder can heal wounds to its host body by spending one Essence to heal two points of bashing damage or one point of lethal or aggravated damage. Whenever the Intruder does so, obscene holes open in its flesh, oozing healing pus.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "BoS 146, Ant p38"
    },
    {
        "Name": "Resurrection",
        "Origin": "Greater Elpidos",
        "Description": "The quashmal can raise a person from the dead, as long as they didn't die of old age. Supernaturals are rendered mortal by the process (albeit with the most logical minor template), save for Vampires and Prometheans. Prometheans remain Prometheans, and Vampires cannot be raised.",
        "Long Description": [
            "The qashmal can raise the dead. The Dominion stands by the corpse and commands the subject to awaken. Spend 10 Pyros and roll Power + Finesse, with a –1 penalty to the dice pool for every full day the subject has been dead. On a dramatic failure, the body animates, but it is a murderous, undead creature, possessed by an unclean spirit from a place that even the qashmallim fear to tread. On a success, the dead person lives again. All wounds and diseases are fully healed, and the subject is free to live out the span of her life. The qashmal can raise werewolves and mages from the dead as well, but they lose their supernatural powers, becoming ordinary humans, albeit wolf-blooded or Sleepwalkers, respectively. The qashmallim cannot raise vampires from the dead, because, even if their bodies are not piles of dust, they have died twice, an obstacle even a Greater qashmal cannot surmount. No qashmal can raise a person who has died from natural causes. They have lived out their destined lives, and in their case, the rule of Destiny cannot be gainsaid.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "PB 79"
    },
    {
        "Name": "Reveal Flaws",
        "Origin": "Astral",
        "Description": "",
        "Long Description": [
            "Spend two Essence and roll Power + Finesse contested by the target’s Resolve + Composure. For each success achieved by the Diagnostician, the target suffers a penalty of one die on future contested rolls against creatures from Alkahest. The target’s flaws are literally written onto her skin to await correction — words such as “narcissistic,” “debtor” or “poor genetics” appear on her forehead, arms and palms. The words can be washed off with ordinary water, but have a tendency to reappear during moments of self-doubt.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "AR 147"
    },
    {
        "Name": "Revelation",
        "Origin": "",
        "Description": "",
        "Long Description": [
            "This Numen allows a spirit to use information as a weapon, forcibly projecting it into the mind of its target. The target is overwhelmed by the information flooding his mind, and must fight to focus on other thoughts for the duration of the Numen’s effect. Spend a point of Essence and roll Power + Finesse, contested by the victim’s Resolve + Composure. If the spirit wins, the target suffers a penalty to all Mental dice pools (including further Resolve + Composure tests) equal to the number of successes by which the spirit won the contest. The effects last for the scene, and are not cumulative.If multiple spirits attempt to target a victim with this Numen, the victim will be affected only by the greatest effect; if one spirit induces a –1 penalty and another induces a -3 penalty, the victim is at -3 to Mental dice pools, not –4.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "Pred 66"
    },
    {
        "Name": "Rising of the Light, The",
        "Origin": "Greater Elpidos",
        "Description": "The quashmal creates sunlight over an area equal to a city block.",
        "Long Description": [
            "The qashmal can create light that is equivalent in every way to sunlight rise over an area the size of a city block. Spend 10 Pyros and roll Power + Finesse. On a success, the area is bathed in daylight. Creatures adversely affected by sunlight suffer effects as if the sun really had risen. This lasts for a scene.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "PB 79"
    },
    {
        "Name": "Savant",
        "Origin": "",
        "Description": "Add 3 to the dice pool of an already possessed Numina",
        "Long Description": [
            "This spirit is particularly skilled in the use of another Numen. Savant may be purchased for any other Numen that requires a roll, adding three dice to that pool. This Numen may be purchased more than once, but only for another Numen.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "BoS 146"
    },
    {
        "Name": "Scorn",
        "Origin": "",
        "Description": "If insulted by someone, target is afflicted with disease Odium, making the person revolting to others.",
        "Long Description": [
            "This spirit sickness is as the result of a spirit’s Numina. Many spirits are given over to byzantine bylaws and bizarre social trappings. But few entities like being insulted; those who feel that they have been scorned in some way may possess a Numen called Scorn. If they successfully use this Numen against a mortal, the result is the Odium. Woe to the human cursed with this soul’s infection.The Odium makes a person revolting to others. He suffers no physical transformation, or feel mentally or emotionally changed. But everybody runs the risk of reacting to him as if he’s wrong somehow. One person may believe he carries with him an acrid, sulfurous odor. Another may simply find him unrepentantly ugly, loathsome to behold. A third individual may be unable to explain the distaste, instead thinking, “I just don’t trust this guy.”",
            "Those meeting an afflicted individual must first make a Resolve + Composure roll, with a penalty equal to five minus the victim’s Composure roll (if the afflicted has a Composure of three dots, the penalty then equals –2 dice). Success means that the character feels the distaste, but is able to explain it away or look past it. Failure means that the character doesn’t want to deal with the afflicted. Any Social rolls then made on behalf of the victim are done at a –3 dice penalty except Intimidation rolls, which receive no penalty. Note that failure on a person’s Resolve + Composure roll can cause results beyond dice penalties: a group of teenagers may suddenly find the afflicted so vile that they decide to mob him and get in a few kicks. A woman may slap him for looking “down her shirt,” and a bartender may simply refuse him service. Consequences often go beyond the system effects.",
            "Animals remain unaffected by the Odium. Characters who are family members of or friends with the victim gain a +2 bonus to their Resolve + Composure roll to resist the loathsome effects.",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "BoS 82"
    },
    {
        "Name": "Seduction",
        "Origin": "",
        "Description": "",
        "Long Description": [
            "For every point of Essence spent (1-3 Essence), Driala can contribute up to two dice to its host’s Seduction dice pool.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "MP 90"
    },
    {
        "Name": "Seek",
        "Origin": "",
        "Description": "Can sense something related to the Spirit's purview",
        "Long Description": [
            "The spirit can svense an event or thing directly related to its sphere(s) of influence. For example, a spirit of death can sense a dying person and even gauge how long before the end, while a tree-spirit of the dogwood descant can home in on the nearest grove. Said spirits would not sense a skeleton or an apple orchard, however, because those things are not technically in their purview. The spirit rolls Finesse. Success gives the spirit a general impression of direction and distance to the target. Functional distance is approximately a radius of two miles; by spending an Essence point, the spirit may extend the radius by a factor of 10. If there is more than one influence in the radius, the spirit will understand that there is a plurality (though not the exact number) but will be drawn toward the closest.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "BoS 146, Pred p66"
    },
    {
        "Name": "Selective Manifestation",
        "Origin": "",
        "Description": "",
        "Long Description": [
            "The Reflection can choose who sees it when it manifests. It manifests in a mirror, screen or picture as normal, but only the people the Reflection wishes to perceive it can do so without effort. Anyone else trying to find it (perhaps trying to catch a glimpse of what frightened another person in the room so much) must make a Wits + Composure roll with a -2 penalty. The Reflection can never hide from its vampire, who can always see it without needing to make a roll.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "Mekh 115"
    },
    {
        "Name": "Sense of Encroachment",
        "Origin": "",
        "Description": "",
        "Long Description": [
            "The Beast of Bethlehem has complete awareness of its territory and can sense any encroachment upon it. When the Beast first materializes, it must walk the periphery of its intended territory and define the boundaries. After this moment, the Beast immediately sense any living creature that crosses the boundary. This means, however, that the Beast does not automatically sense the presence of the undead, giving, vampires and zombies a slight advantage. In order to sense an undead presence within its territory, the Beast requires, success on a roll of Resolve + Wits. A vampire using Cloak of Night (obfuscate 3) is invisible to the Beast.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "Ant 117"
    },
    {
        "Name": "Sense Prey",
        "Origin": "",
        "Description": "",
        "Long Description": [
            "The Flesh Intruder has a goal, and this usually involves a person, place or thing. The Intruder can track this target from any distance through a form of sympathetic magnetism. Roll Wits + Investigation for the Intruder to know exactly where the target is as long as the Intruder continues to concentrate. If it eases its concentration, the Intruder loses track of the target until the Intruder takes an action to roll again. While using this Numen, the Intruder is exposed — its flesh opens up in various spots over its body so that fleshy nodules can extrude and “sniff” out its prey. Nobody watching this display could mistake it for a normal human or animal.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "IEwtA 117"
    },
    {
        "Name": "Sense Weakness",
        "Origin": "Astral, Naturae",
        "Description": "",
        "Long Description": [
            "One of the clearest indicators of a person’s ingenuity is his ability to use his enemies’ weaknesses to his advantage. The Irralunim respect such efforts, and they offer this Gift to their chosen werewolves to make those efforts a little easier.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "AR 115, WtF p132"
    },
    {
        "Name": "Sever Virtue or Vice",
        "Origin": "Astral",
        "Description": "",
        "Long Description": [
            "This Numen allows a Disconnector to cut a person off from essential aspects of herself, along with the emotional resources those aspects provide. Roll Power + Finesse and spend two Essence, contested by the target’s Resolve + Composure. If the Disconnector succeeds, it prevents the target from regaining Willpower by fulfilling either her Virtue or Vice (Disconnector’s choice) in the future. The effect lasts for one week per success.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "AR 148"
    },
    {
        "Name": "Sleep Eater",
        "Origin": "",
        "Description": "Remove hour’s worth of sleep to victim",
        "Long Description": [
            "This insidious Numen allows a spirit to rob hours of sleep of its victims. Spend one point of Essence and roll Power + Finesse – the target’s Stamina + Supernatural Tolerance. Each success represents an hour’s worth of sleep lost. These can only be recovered through normal sleep. After the spirit eats six hours of the target’s sleep, the target begins suffering the effects of fatigue (see the World of Darkness Rulebook, p. 179) as if he had not slept in 24 hours. Each six successes beyond this means the target loses another day’s sleep, and he suffers a cumulative –1 die penalty to all dice pools and must make Stamina + Resolve rolls or fall asleep. A person may only lose a number of days worth of sleep equal to the lowest of his Stamina or Resolve before passing out.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "AR 148"
    },
    {
        "Name": "Silent Fog",
        "Origin": "Naturae",
        "Description": "",
        "Long Description": [
            "Though fierce fighters and savage predators, even werewolves recognize the need for stealth and guile.This Gift is a prime example of how werewolves operate strategically and with a mind toward hewing to the Oath’s prohibition against human discovery. With it, a werewolf may summon a thick blanket of fog to obscure an area, allowing a pack to move unseen in whatever form its members choose. This fog bank moves as the werewolf who summoned it wills it to, and it makes an excellent vehicle for ambush or a way of avoiding combat entirely.",
            "<b>Cost:</b> 1 Essence",
            "<b>Dice Pool:</b> Manipulation + Survival + Cunning",
            "<b>Action:</b> Instant",
            "<b>Roll Results</b><br><b>Dramatic <b>Failure:</b></b> The fog appears, but it obscures the vision of the summoner and his pack as much as anyone else.",
            "<b>Failure:</b> The weather does not change.",
            "<b>Success:</b> Over the course of a turn, the cloud-spirit summoned with this Gift congeals from the air, and a dense fog covers an area equal to the werewolf’s Primal Urge x 20 square yards. It may thereafter be directed to move in any direction at a rate of (Primal Urge x 10) yards per turn. While within the fog, a perception check at –2 is required for observers to spot someone more than one yard distant. Even if spotted, ranged attacks are treated as if those within the bank are substantially concealed (see “Concealment” on pp. 162-164 of the World of Darkness Rulebook). Silent Fog lasts for an entire scene or until the spirit is dismissed by the Forsaken who commanded it. ",
            "<b>Exceptional Success:</b> The fog is particularly thick, levying a –3 penalty to perception checks instead of –2."
        ],
        "Pool": "",
        "Cost": "",
        "Book": "WtF 146"
    },
    {
        "Name": "Silent Words",
        "Origin": "",
        "Description": "",
        "Long Description": [
            "At the cost of one Essence, the Fear speaks inside its target’s mind for one turn per success. No person beside the target senses the Fear’s words. It uses this power to communicate without drawing down the other fears’ wraths, directing astral travelers from hiding to safe places within the massive cathedral. Unwilling targets contest with Composure + Gnosis.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "AR 156"
    },
    {
        "Name": "Sin Feeder",
        "Origin": "",
        "Description": "The ghost can choose to regain essence instead of willpower from fulfilling its vice.",
        "Long Description": [
            "When the ghost engages in its Vice, it may choose to not regain Willpower. Roll Power + Finesse, instead. Each success translates to one point of regained Essence instead of Willpower. The ghost may only perform this Numen once per 24-hour period.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "GTS 281, BotD p123"
    },
    {
        "Name": "Sinuous Chains",
        "Origin": "",
        "Description": "May attack two foes at once without penalty",
        "Long Description": [
            "The Triptych’s chains allow it to strike at two foes at once, without any penalty. The chains can grapple using the Kerberos’ Power. Due to their tangling and insubstantial nature, the chains cannot be overpowered (see the World of Darkness Rulebook p. 157 for more information).",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "GTS 255"
    },
    {
        "Name": "Siphon",
        "Origin": "Revenant",
        "Description": "Spend 1 Willpower to steal Willpower or Health, gaining Essence",
        "Long Description": [
            "All intruders begin with this Numina, but human revenants are able to develop it. The revenant must touch the victim to activate the power. Spend one of the revenant’s Willpower points, and roll her Intelligence + Presence in a conteste roll against the target’s Resolve + Composure. If the intruder wins, every success converts one of the target’s Willpower into two Essence for the revenant. If the target runs out of temporary Willpower, the revenant then siphons Health (this damage is considered lethal). Vampires and other undead creature can lose Willpower to revenant with Siphon, but not Health. If a revenant targets a creature with an Essence trait (such as another revenant), Siphon drains Essence directly rather than Willpower. If the target runs out of Essence, the revenant drains Willpower and finally Health.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "Ant 38"
    },
    {
        "Name": "Smother",
        "Origin": "",
        "Description": "The ghost grapples the target, and for every success on this numina, the target loses a willpower.",
        "Long Description": [
            "Narasimha can strangle or crush mortal foes easily enough but strangling a ghost doesn’t do a whole lot of good. Smother allows Narasimha and Razil to sap the will of their victim and thus take a lot of the fight out of targets who aren’t so easily disposed of. He must first grapple the target and then roll Power + Finesse minus the target’s combined Resolve + Composure. The target loses a point of Willpower for every success. Once the target is sapped of Willpower, continued successes sap Corpus or Health in the form of bashing damage (and ultimately lethal as he persists)",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "BotD 178"
    },
    {
        "Name": "Snatch",
        "Origin": "",
        "Description": "Pull a target into a mirror, TV or picture",
        "Long Description": [
            "The Reflection reaches out from the mirror, TV screen or picture it has just manifested in and drags someone inside. The Storyteller spends three Essence and rolls the Reflection’s Power + Finesse – the target’s Resolve + Blood Potency. For every success the Storyteller rolls, the victim becomes trapped within the reflection (banging his fists noiselessly against the glass) or image (stuck in an attitude of terror) for one hour for every success rolled. The Reflection can communicate with an imprisoned victim (and in lieu of any other power to communicate, might use this as a way to talk), or choose to attack. The Reflection can use this power on its vampire. Should a mortal be killed within the mirror, their remains simply vanish; thus, Reflections cannot use this method to feed.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "Mekh 116"
    },
    {
        "Name": "Soothe Disquiet",
        "Origin": "Elpidos",
        "Description": "The quashmal lessens the effect of Disquiet.",
        "Long Description": [
            "The qashmal can lessen the level of Disquiet in an individual. Spend a point of Pyros, and roll Power + Finesse, reflexively contested against the subject’s Resolve + Composure. If the roll is successful, the level of Disquiet the subject feels toward one Promethean is reduced by one stage. This Numen doesn’t stop the human suffering from Disquiet again, should he spend more time in the presence of the Promethean.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "PB 79"
    },
    {
        "Name": "Soul Harvest",
        "Origin": "",
        "Description": "Take the Soul of a target, gaining practically all knowledge of them, and disallowing them from regaining willpower. This version also works on supernaturals that possess a soul, and the super requires the soul holder's consent before using a supernatural power.",
        "Long Description": [
            "This Numen is a more powerful version of Soul Snatch that also functions against supernaturals who possess a soul. As with that Numen, Soul Harvest functions just as the Claim Numen except that success on the spirit’s part means it grasps the victim’s soul instead of Riding its body. The victim must succeed upon a Stamina roll or fall unconscious. Even if conscious, the victim may not spend points of Willpower, expend points of a supernatural power trait or use any supernatural ability without the consent of the Harvester spirit. The victim cannot regain Willpower if its soul has been harvested. The spirit has full knowledge of its victim’s thoughts and actions, no matter its location. If the supernatural has an Essence trait, the being may use these points of Essence as its own. It may also choose to feed upon the victim’s soul at its leisure. Each hour the spirit does so, it gains two points of Essence per dot consumed — feeding first on its prey’s Willpower then its dots of Supernatural Advantage. Each hour that the spirit is feeding, the victim must again succeed upon a Stamina roll or fall unconscious due to the pain. When the spirit is finished feeding, the creature’s soul is destroyed.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "BoS 147"
    },
    {
        "Name": "Soul Snatch",
        "Origin": "",
        "Description": "Take the Soul of a target, gaining practically all knowledge of them, and disallowing them from regaining willpower.",
        "Long Description": [
            "This is a rare but terrifying Numen, allowing the spirit to steal the soul of a mortal. This acts just as the Claim Numen except that success on the spirit’s part means it grasps the victim’s soul instead of Riding its body. The spirit can then do with the soul what it will. Most spirits that have this Numen slowly devour the soul, gaining Essence equal to twice the victim’s Willpower dots. Certain highranking spirits have been known to have a version of this Numen that allows them to snatch the soul of a supernatural (if it possesses one).",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "BoS 147"
    },
    {
        "Name": "Speed",
        "Origin": "",
        "Description": "Speed is doubled for the scene, and can be tripled for an additional 2 Essence.",
        "Long Description": [
            "This Numen confers uncanny swiftness upon the spirit, allowing it to move at a much more rapid pace than usual. The spirit may spend two points of Essence to move at twice its normal Speed for the duration of the scene. If the spirit spends an additional two points of Essence (for a total of four), the spirit’s Speed triples for the duration of the scene. This Numen may affect the physical form of a Materialized spirit, but not a physical fetter.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "BoS 147, Pred p66"
    },
    {
        "Name": "Spirit Crown",
        "Origin": "Primal Wild",
        "Description": "control another Spirit for a Scene",
        "Long Description": [
            "This powerful Numen is possessed only by a rare few spirits native to the Primal Wild. By spending a point of Essence and successfully rolling Power + Finesse as an instant action against another spirit (which reflexively contests with Resistance), the Primal entity may exert control over that spirit for the remainder of the scene, dictating its actions as the controlling spirit wishes. Other Supernal spirits not native to the Primal Wild are immune to the use of this Numen, as are certain alien entities from outside of the Tapestry, but even Acamoth and Gulmoth can be bound through its use.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "Power+Finesse",
        "Cost": "1e",
        "Book": "Summ 222"
    },
    {
        "Name": "Spirit Minions",
        "Origin": "Spirit",
        "Description": "Numerous lesser spirits will defend and obey every whim of the spirit",
        "Long Description": [
            "The spirit has made compacts with minor spirits for aid in times of need — bonds much stronger than court or brood. These underling spirits will unfailingly come to help defend their master, though they will normally flee when their Corpus or Essence reaches one quarter of their maximum. Spirits with this Numen can only command the service of spirits substantially weaker than themselves. The number of spirits in service is directly related to their number of ranks below their leader. A spirit may have the fealty of one spirit that is one rank below them, but two spirits that are two ranks below them, and so on. These servitors cost time, and Essence to maintain; this is reflected by effectively lowering the maximums for the master spirit. Each spirit kept in fealty lowers the Willpower by one and lowers the maximum Essence of the commanding spirit by the total ranks of the spirits in its service. If a major war-spirit (Rank 4) spirit kept two lesser war-spirits (Rank 2) in fealty, the commanding spirit’s maximum Willpower would be reduced by 2 and maximum Essence by 4. Activating this Numen costs one point of Essence for each spirit summoned. The spirit makes a Finesse roll and subtracts the result from 5. This is the number of rounds until their servitors arrive, minimum of one. Servants always appear in the Shadow, though their master may call them from the material realm.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "BoS 147"
    },
    {
        "Name": "Spirit Prowess",
        "Origin": "Revenant",
        "Description": "Spend Essence to increase physical attributes for the scene on a 1-1 basis (cap of 5)",
        "Long Description": [
            "Up to five Essence points can be spent to increase the revenant’s Strength, Dexterity and/or Stamina on a one-for-one basis. The additional dots last for the scene, and may be raise an Attribute above 5. No more than five Essence points can be spent using Spirit Prowess during a scene, through the points may be reallocated during the scene by spending one point of Willpower.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "Ant 38"
    },
    {
        "Name": "Spirit Venom",
        "Origin": "",
        "Description": "cause a spiritually sourced poison, as well as corrupting a spiritual power source.",
        "Long Description": [
            "This Numen allows the spirit to inject its opponent with a form of spiritual venom after a successful blow or bite, causing damage and befouling its enemy’s own reserve of spiritual energy. After a successful strike in hand-to-hand combat, the spirit may spend one to three points of Essence to inject a supernatural venom into its foe. The venom inflicts an additional point of damage for every point of Essence spent. In addition, the victim must succeed at a Stamina roll, or lose one point of Essence for each point of Essence the spirit spent. This corrupting effect also works on other forms of supernatural energy, though to lesser extent. A target that doesn’t use Essence will lose only one point of his reservoir to the spirit-venom, no matter how much Essence the spirit spent.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "Bos 147, Pred p67"
    },
    {
        "Name": "Spiritual Vision",
        "Origin": "",
        "Description": "See into the material realm (Similar to Material Vision)",
        "Long Description": [
            "This Gift allows a spirit in the physical world, whether fettered or in Twilight, to peer into the spirit world for a short period of time. Roll the spirit’s Power + Finesse – Gauntlet modifier. The number of successes indicates the number of minutes the spirit can activate this ability. This Numen is particular to spirits that have spent a great deal of time in the physical world.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "BoS 147"
    },
    {
        "Name": "Stalwart",
        "Origin": "",
        "Description": "The entities defense is based on the resistance of the entity",
        "Long Description": [
            "The spirit’s concept is bound up with defense and determination, making it difficult to damage. Perhaps the spirit’s very nature encompasses the concepts of protection, resistance or guardianship. Nonetheless, its Defense trait is not based upon raw muscle or nimbleness; the spirit’s Defense is equal to its Resistance. This may be reflected by a thick hide or even armor.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "BoS 147"
    },
    {
        "Name": "Summon Soul",
        "Origin": "",
        "Description": "The entity can summon the soul of the dead, who start with little memory of before by slowly gain it back.",
        "Long Description": [
            "By rolling Power + Finesse, Polydegmon can call forth the soul of the deceased. This includes souls that have been dead for years but recently lost their anchor, were destroyed in the afterlife many years ago, or never stopped between death and the Autochthonous Depths. These souls have no memory at first but as time passes they will recall their previous life and return to their own habits and routines as best they’re able. Whether these souls are the genuine article or a simulacrum Polydegmon has the ability to create is up for debate. The returning memories could come from absorbed impressions of their loved ones until finally becoming a sort of idealized version of the person.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "BotD 185"
    },
    {
        "Name": "Supreme Possession",
        "Origin": "Infernal",
        "Description": "The demon and target become as one, and are one of the Possessed. This only works on mortals.",
        "Long Description": [
            "A demon with the Numen can join with an ordinary human being (that is, one without a supernatural template) to become one of the Possessed. See Chapter Three for systems. Supreme Possession alters both the demon and its victim, so there is no need to translate the demon’s current abilities. Instead, the victim’s soul (and the player’s choices) defines the demon from that point onward.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "Inf 53"
    },
    {
        "Name": "Swarm",
        "Origin": "",
        "Description": "Verminous swarm grants possessed host +3 defense and hampers enemy actions",
        "Long Description": [
            "Wastes of Civilization is accompanied by a swarm of rats, mice, cockroaches, lice and other pests and vermin (in both the physical and spiritual realm). These creatures swarm around their spirit master, granting +3 to the defense of the possessed target. While the swarm doesn’t attack outright, once per turn the swarm may target a member of the cell or their allies in an attempt to hamper her efforts. Roll four dice, and successes translate to minuses to any action performed by the target for that turn. Attacking the swarm directly may cause it to dissipate for a turn (thus removing the defense bonus or hampering penalty) but will do no damage or remove them from the fight.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "UtS 7"
    },
    {
        "Name": "Swarm Form",
        "Origin": "",
        "Description": "The entity breaks up into many many smaller entries with a swarm mind.",
        "Long Description": [
            "This Numen allows a spirit to break up its body into thousands of tiny parts — it might appear as a mass of whirling razor blades, a flock of starlings, school of piranha or a swarm of beetles. Treat the spirit’s Power as 1 for feats of Strength. The spirit’s Defense also drops to 0. The spirit’s speed is halved, but it may gain flight or be able to squeeze through small openings in this form. The spirit becomes immune to most melee and missile attacks, such as baseball bats and Uzis. Only weapons such as torches, flamethrowers or area effect attacks cause the creature damage in this form. The spirit damages other creatures by enveloping them. A creature caught within the swarm at the beginning of its turn takes damage automatically. Damage is determined by the intensity of the swarm. The swarm begins with a radius in yards equal to the Size of the spirit and does one bashing damage. Each time the radius halves (a standard action), the damage increases by one. Full-body armor provides half protection, less than full body affords no protection as the small creatures find their mark. This Numen costs two points of Essence and lasts for a scene. Swarm creatures can choose to do lethal damage, by sacrificing their constituent parts. All creatures caught within a swarm suffer –2 to Mental checks.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "BoS 148"
    },
    {
        "Name": "Symbolic Camouflage",
        "Origin": "Astral",
        "Description": "Camouflage self as a different symbol in the Astral realms",
        "Long Description": [
            "This Numen is available to astral entities; it isn’t common among Shadow spirits or ghosts. Symbolic Camouflage allows the spirit to disguise itself as something else, but can’t turn the spirit invisible or into something completely different from its true form. A Cathar’s Rosary can, for example, manifest itself as a necklace of the same stones that seem to adorn its body, a multicolored scarf or a haze of foul-smelling smoke, but it can’t just vanish or make itself look like anything that gives no hint of its true form.",
            "The spirit spends one point of Essence and rolls Power + Finesse. The result is the difficulty  of witnesses’ Wits + Investigation rolls to recognize the symbol’s significance for the scene. Add two successes to the difficulty if witnesses have never seen the spirit in its true form.",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "AR 106"
    },
    {
        "Name": "Teiresian Metamorphosis",
        "Origin": "Pyros",
        "Description": "The quashmal can change the gender of a target human (that is mortals, mages, psychics etc, but not Vampires, Prometheans, or Werewolves)",
        "Long Description": [
            "A qashmal with this Numen can change the gender of a living being (including a mage, but not a Promethean, vampire or werewolf). Spend 10 Pyros and roll Power + Finesse. If the mortal wishes to resist, his player can roll Resolve + Stamina. If the qashmal succeeds, the mortal changes sex, becoming as if he or she had been born belonging to the other gender. A qashmal could use this Numen to “heal” a transsexual, supplying those generative organs and making the changes that surgery could not fully perform. A qashmal can also use this Numen to join two humans together in one hermaphrodite being, a true rebis, wholly male and wholly female. In this case, roll once. Either individual or both get the option of contesting the qashmal’s roll. If either gets more successes than the qashmal, the Numen fails to work.",
            "This is a rare Numen, and, as with many others, its use might well be a qashmal’s only purpose on Earth. The qashmal might be the granting of a dearly held wish, a punishment or some strange means of altering history.",
            "<b>Creating a Rebis:</b> A rebis is a single being with a single mind, an harmonious synthesis of both bodies and souls. He/she remembers both lives equally, without conflict. Rebises are smarter, better looking and healthier than their component parts.",
            "The rebis takes both sets of Attributes and Skills, using the higher every time. If one of the components of the rebis is a mage, the rebis still has all his or her Gnosis and Arcana. If both components are mages, the rebis uses the higher of the partners’ Gnosis and Arcana dots. If two mages joined as a rebis are of different Paths, the rebis keeps both Paths (meaning that the mage might now have as many as four Ruling Arcana and no Inferior Arcana). Whether either or both of the component beings were Awakened, a rebis cannot belong to a Legacy. The rebis loses any Legacy Attainments either of his/her parts may have had.",
            "The rebis is a very different person to either being. The rebis’ player can choose to take either Virtue and Vice, or pick entirely new ones."
        ],
        "Pool": "",
        "Cost": "",
        "Book": "PB 78"
    },
    {
        "Name": "Telekinesis",
        "Origin": "",
        "Description": "The entity can move about small objects around at a distance.",
        "Long Description": [
            "The ghost can manipulate physical objects as though it had a pair of physical hands. It can pick up objects, throw them, open and close doors and windows, write messages — basically anything a mortal can do with his hands.",
            "Spend one Essence point and roll Power + Finesse. The number of successes rolled determines the ghost’s relative Strength when attempting to lift and/or move an object (see Chapter 2: Attributes, p. 47, for more details on lifting/moving objects). If the successes rolled are equal to the Strength needed to lift an object, the ghost can move it up to one yard. Each extra success allows the ghost to move the object an additional yard. If the ghost wishes to hurl an object at someone and enough successes are rolled to lift the object (and reach the target), the total number of telekinesis successes is rolled as a dice pool in an attack against the target. Alternately, the ghost can make a direct attack on a victim, using its raw power to inflict cuts, bruises and bites on the victim’s body. Treat this as a normal attack with a -3 modifier. The attack ignores the target’s Defense trait, any available cover and any armor worn (unless the armor is supernatural in nature).",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "WoD 212, SS p53, Pred p67"
    },
    {
        "Name": "Telepathy",
        "Origin": "",
        "Description": "The entity can send thoughts into someone's mind, as well as receive thoughts directed at them.",
        "Long Description": [
            "All spirits speak the Spirit Tongue, and with effort, can often manage to communicate with others, however imperfectly. Spirits with this Numen can reach out and link their minds with others, allowing instantaneous and reliable communication. The spirit rolls Power + Finesse. If resisted, subtract the target’s Resolve + Supernatural Advantage. This experience is never pleasant for a mortal — being that intimate with an alien mind is profoundly disturbing. For the next 24 hours, any rolls to avoid a derangement are made at –1 for each scene spent in contact with a spirit’s mind.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "BoS 148, Inn p209"
    },
    {
        "Name": "Tendrils",
        "Origin": "",
        "Description": "Extrude one tentacle per dot of Willpower possessed; each can attack separately or passively improve Defense by 1.",
        "Long Description": [
            "By spending one Essence, the Flesh Intruder can sprout fleshy tendrils from its torso, each terminating in a flat surface studded with many tiny, sharp teeth and a poison sac. These tendrils retract back into the torso at the end of the scene. The Intruder can sprout one tendril per dot of Willpower, and each can perform a separate attack per turn. Alternatively, instead of attacking, a tendril can be used to aid the Flesh Intruder’s defense, providing one point of armor against Brawl and Weaponry attacks (not Firearms) per tendril used in this manner.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "IEwtA 117"
    },
    {
        "Name": "Terrify",
        "Origin": "",
        "Description": "The manifestation of the entity becomes supernaturally terrifying.",
        "Long Description": [
            "The ghost has the power to strike terror in the hearts of mortals who witness its manifestation. Roll Power + Finesse in a contested roll against the Resolve + Composure of each mortal who witnesses the ghost’s manifestation firsthand. (If a crowd witnesses it, roll the highest Resolve + Composure in the crowd for the whole group.) If the ghost loses or ties, mortals in the area are unaffected and are immune to uses of this power for the remainder of the scene. Perhaps their subconscious minds won’t allow them to recognize the spirit, or they mistake the intended frightening image for something else such as a hallucination or trick of the light. Mortals who lose flee from the spirit and will not return to the haunted area for at least one day.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "WoD 212"
    },
    {
        "Name": "Terrifying Change",
        "Origin": "",
        "Description": "Bestow one or more major Derangements for a day.",
        "Long Description": [
            "The Lurker can look into an Awakened soul and seed doubt within, making the mage unable to cope with how far she’s left humanity behind. Spend two Essence and roll Power + Finesse contested by the target’s Resolve + Composure. For each success, the Lurker can bestow one severe derangement upon the target (with a maximum number equal to the target’s Gnosis). The derangements last for one day per success.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "AR 187"
    },
    {
        "Name": "Thieve",
        "Origin": "",
        "Description": "Take a physical, non-living object across the Gauntlet with the spirit.",
        "Long Description": [
            "Similar to the Abduct Numen (above), but in this case the spirit may take physical, non-living objects across the Gauntlet. The spirit must first either dwell on the material side of the Gauntlet (using Materialize or Gauntlet Breach) or at least have a conduit beyond the Shadow (using the reaching Numen). If this is established, the spirit can pull a small object through the Gauntlet and into the Shadow. The object may not have Size greater than the spirit’s own Power. Spend a single Essence and roll the spirit’s Power + Finesse – Gauntlet modifier. If the roll is successful, the object crosses over and becomes part of the Shadow temporarily. The object can last in the Shadow for a number of minutes equal to the spirit’s Finesse. After that, the item crosses back over the Gauntlet at the appropriate corresponding pin in the physical world (if the spirit drags the item 20 feet away, it appears 20 feet away in the material realm). The spirit can keep the object in the Shadow by spending another Essence point to extend its duration, by a minute. No roll is necessary to do this.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "BoS 148"
    },
    {
        "Name": "Threshold",
        "Origin": "",
        "Description": "The spirit creates a temporary portal through the Gauntlet.",
        "Long Description": [
            "This exceedingly rare Numen allows the spirit to create a temporary gateway through the Gauntlet. It is very difficult and costly Numen; normally, only greater spirits (Rank 3+) can muster the power to craft Thresholds of much utility. The portal’s look varies by the nature of the spirit; it might appear as a bank of fog, a door that did not exist a moment before or merely a dark garden path. Sometimes folk who walk widdershins around the old moss oak on nights of the full moon are unlucky enough to end up in the Shadow. Characters with Unseen Sense (Spirits) or other magical senses keyed to the Shadow should have an opportunity to recognize its true nature. The portal’s size is equal to the Size of the spirit, but this can be expanded by spending Essence on a one-to-one basis. This Numen costs a number of Essence equal to the strength of the Gauntlet. Expend the Essence roll Power + Finesse – Gauntlet Modifier. The entrance only lasts for a number of rounds equal to the successes generated, but while open, beings can pass freely through the portal. Portals are one-sided (two-dimensional) phenomena. If approached from the wrong side, those looking at them or even moving through the space they occupy cannot see or interact with them. Portals are doors, but not windows — you cannot accurately see where you are going until it is too late.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "BoS 148"
    },
    {
        "Name": "Thunderbolt",
        "Origin": "Naturae",
        "Description": "Inflict 5 points of Lethal damage, plus one per success beyond the first.",
        "Long Description": [
            "This Gift implores a mighty thunderbird to turn its gaze earthward and fix its flashing eyes on a select target. At the werewolf’s command, lightning strikes his foe, its power capable of killing most mortals and severely wounding even supernatural opponents.",
            "<b>Cost:</b> 1 Essence",
            "<b>Dice Pool:</b> Intelligence + Survival + Glory – Defense",
            "<b>Action:</b> Instant",
            "<b>Roll Results</b><br><b>Dramatic <b>Failure:</b></b> The bolt strikes a random target nearby, be it friend or foe.",
            "<b>Failure:</b> The werewolf’s call is ignored.",
            "<b>Success:</b> The bolt deals a base of five points of lethal damage, plus any extra successes from the activation roll after the first. The werewolf can nominate any target within his line of sight, as long as the victim is outdoors or standing near a window.",
            "<b>Exceptional Success:</b> The blast also deafens the target for two turns.",
            "Suggested Modifiers<br><table border='1' style='margin: 15px 0;'><thead><tr><th style='padding: 5px;'>Modifier</th><th style='padding: 5px;'>Situation</th></tr></thead><tbody><tr><td style='padding: 5px;'>+2</td><td style='padding: 5px;'>Rain or windy weather</td></tr><tr><td style='padding: 5px;'>+1</td><td style='padding: 5px;'>Cloudy day</td></tr><tr><td style='padding: 5px;'>–3</td><td style='padding: 5px;'>Cloudless sky</td></tr></tbody></table>"
        ],
        "Pool": "",
        "Cost": "",
        "Book": "WtF 147"
    },
    {
        "Name": "Tongue Tie",
        "Origin": "",
        "Description": "Target must roll Int + Resolve to express coherent thoughts.",
        "Long Description": [
            "Rods can inhibit a human’s ability to read, write or speak. Roll Power + Finesse against the target’s Resolve + Composure. Success indicates that for the rest of the scene, a successful Intelligence + Resolve roll is required for the target character to perform any action that involves speaking, writing or reading (one category only). Should that roll fail, the character can make repeated attempts, but each subsequent attempt takes one minute of torturous mental struggle. Should the Rod’s initial roll achieve an exceptional success, the effect of the Numen lasts for one day, while dramatic failure by the Rod leaves the target immune to this Numen for one day. Recipients of this effect describe feeling overwhelmed by a powerful concept they can’t articulate, so much so that it’s hard to focus on anything else. In one case documented by Network Zero, a Philadelphia man spent years trying to express the thoughts the Rods left in his brain by creating lettered tiles describing “the dead resurrected on Jupiter,” which he set directly into the asphalt of various Philly streets.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "HtV 345"
    },
    {
        "Name": "Transmogrify Victim",
        "Origin": "",
        "Description": "Can reshape the body of a target to whatever the entity like. When the numina end's the person returns to normal.",
        "Long Description": [
            "Through use of this Numen, a spirit that is in possession of a host reshapes its victim into a terrible monstrosity of human organs reshaped to perform roles unintended by nature. Spend one point of Essence and roll Power + Finesse against the host’s Stamina in a contested action. If the most successes are rolled for the spirit, the victim’s body is reshaped into a form that uses the spirit’s Power, Finesse and Resistance instead of any traits the victim has; this may grant a number of grotesque physical attacks. When the transformation ends (after one scene or if the spirit terminates the effect prematurely), the host resumes normal shape and awakens. If the transmogrified being is killed, the host is slain. Any damage suffered by the host is retained after the host resumes normal form. If a possessed body is killed or knocked unconscious, the spirit is forced out and must transform another victim if it still wishes to act.",
            "Attacks using a blessed object or magical nature against a spirit in possession of a transmogrified body damage the spirit’s Corpus instead of its physical host.",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "BoS 148, GS p68"
    },
    {
        "Name": "Trial",
        "Origin": "Supernal",
        "Description": "create a trial vignette in the target's mind",
        "Long Description": [
            "This Numen is unique to Supernal summonings and is only possessed by such entities for the purposes of testing the worthiness of the summoner by the standards of her Path’s Realm. The spirit spends a point of Essence and rolls Power + Finesse as a reflexive action to create the willworker’s Trial (which is typically a standardized, rather and personalized, scenario of some sort); this may take the form of an otherworldly vignette with which the mage must interact, a puzzle to solve, an ordeal to overcome, or any other form appropriate to the realm from which the entity descends. Often, mages subjected to Trials feel as though they are brought to the very border of a Path Realm, though the Trial exists within the soul of the individual, rather than manifesting externally.",
            "A mage is capable of refusing a Trial, though this almost always ends the Supernal summoning prematurely, as the spirit judges her unworthy of aid or guidance. Even if the willworker accepts and embarks upon the Trial, it can be quite easy to fail in many cases, though the Supernal spirit might determine a supplicant to be worthy if she strongly embodied the virtues of her Path, even in failure.",
            "See the Supernal entities of Chapter Two for numerous examples of the Trial Numen in use. Note that not all Supernal beings possess Trial, as not all require tests of the specific sorts created by this Numen.",
            "",
            ""
        ],
        "Pool": "Power+Finesse",
        "Cost": "1e",
        "Book": "Summ 222"
    },
    {
        "Name": "Trill",
        "Origin": "",
        "Description": "Paralyze animals",
        "Long Description": [
            "The chupacabra spends a point of Essence when closing in on any one creature defined as a median life form (Mage: The Awakening, p. 180). The creature contests the chupacabra with Resolve. If the chupacabra accrues more successes than the animal, then the animal remains placid and motionless until the chupacabra pounces; effectively, the cryptid gains the benefit of surprise on the first turn of its attack.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "Summ 30"
    },
    {
        "Name": "Twilight Chains",
        "Origin": "",
        "Description": "These chains cannot be broken save by damaging the users Corpus, slipping their bonds is at a -3, and all attempts to use supernatural powers whilst bound are at -5.",
        "Long Description": [
            "The manacles and chains used by Judges to bind lawbreakers are ephemeral objects that only become “real” in either the Underworld or in Twilight. In effect, the chains are part of the Corpus of the Judge and will only break if it does, though characters skilled in slipping bonds may still attempt to do so at a -3 penalty. The chains carried by Judges also contain some of the essence of Lowgate Prison, which imposes a -5 penalty on any attempt to use magic (or magical type effects like Manifestations, Disciplines, etc.) while bound.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "BotD 152"
    },
    {
        "Name": "Unapproachable",
        "Origin": "",
        "Description": "Characters face a -1 penalty to all rolls at 30 yards, -2 at at 20 and -3 at 10 or less",
        "Long Description": [
            "Characters face dice pool penalties on all actions of –1 at thirty yards, -2 at twenty yards and –3 at ten yards due to its blinding radiance.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "DoW 33"
    },
    {
        "Name": "Underworld Gate",
        "Origin": "Stygian, Underworld",
        "Description": "open a door to the Underworld for a Scene",
        "Long Description": [
            "This Numen is used only by some Supernal spirits of Stygia and those native to the Underworld, and potentially by a scant few Abyssal entities. The spirit spends a point of Essence and rolls Power + Finesse as an instant action, with success opening a doorway into the Underworld for the remainder of the scene. By spending an additional five points of Essence a day, however, the spirit may keep the Underworld Gate open for considerably longer. The Underworld Gate must be opened at the location of a doorway or other portal (the mouth of a cave, the shaft of a well, or a free-standing arch, for example) and may be freely used by any being on either side of the gate for as long as it remains open.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "Power+Finesse",
        "Cost": "1e",
        "Book": "Summ 223"
    },
    {
        "Name": "Unfetter",
        "Origin": "",
        "Description": "The spirit can unbind itself from a fetter or moor.",
        "Long Description": [
            "This Numen allows a moored or fettered spirit to unbind itself from its physical counterpart for a time. Spend a point of Essence and roll the spirit’s Finesse. The number of successes is the number of hours the spirit may stray from its mooring; if the spirit is not within its normal range of the mooring after that time, it discorporates.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "BoS 149"
    },
    {
        "Name": "Unfettered",
        "Origin": "",
        "Description": "May pass beyond Avernian Gates and regenerate Essence without a formal anchor",
        "Long Description": [
            "To enforce the Old Laws of the Underworld, Judges are granted more freedom of movement than other ghosts. A Judge may pass beyond the Avernian Gates and regenerate Essence at the rate of one per day even without a formal anchor.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "BotD 152"
    },
    {
        "Name": "Unspoken Communication",
        "Origin": "",
        "Description": "Telepathic communication; +3 Initiative and +1 on attacks when working as a unit",
        "Long Description": [
            "In the interests of greater communication, which leads to effective cooperation and glorious success, the Cahalunim grant Cahalith this Gift. With it, a Cahalith can keep packmates in constant contact, enabling them to act as one. ",
            "Packmates within line of sight of the Cahalith can be joined in instantaneous mental communication for the rest of the scene. Allies need not necessarily see each other, they simply need to be seen by the Gift’s user. Packmates can “speak” mind to mind and hear each other perfectly clearly regardless of any ambient noise. Any speaker can communicate with one particular packmate of his choice, or with all of them simultaneously.",
            "Connected characters gain a +3 bonus to Initiative as they’re better able to coordinate their efforts. Connected characters also gain a +1 bonus to attack and use Gifts against enemies of the group as victims reel while trying to contend with combined and well-times assaults.",
            "The Cahalith can terminate the effect of this Gift at any point before the end of the scene, but doing so is an all-or-nothing proposition. She cannot selectively drop one packmate and keep others connected. She can, however, include a new packmate in the connection after the Gift is activated with the expenditure of an additional Essence point. If a packmate is within sight when the power is activated, and then moves to where he cannot be seen by the Cahalith, the link of communication is not severed.",
            "People who aren’t direct members of the Gift user’s pack cannot be included in this mental link. The power cannot be used to communicate across the Gauntlet.",
            "<b>Cost:</b> 1 Essence",
            "<b>Dice Pool:</b> Intelligence + Socialize + Purity",
            "<b>Action:</b> Instant",
            "<b>Roll Results</b><br><b>Dramatic <b>Failure:</b></b> The awareness of packmates’ thoughts overwhelms the Cahalith and proves distracting. Her actions incur a –1 penalty for one turn per packmate included (not counting herself). She cannot invoke this Gift again until the penalty passes.",
            "<b>Failure:</b> None of the packmates receives any extra awareness. ",
            "<b>Success:</b> The packmates are connected mentally to each other and may “speak” mind to mind.",
            "<b>Exceptional Success:</b> Connected characters each regain a point of spent Willpower for sharing a powerful pack bond. The Gift user doesn’t gain this bonus. Only one Willpower point can be regained by a character per day by this means."
        ],
        "Pool": "",
        "Cost": "",
        "Book": "WtF 118"
    },
    {
        "Name": "Usurp Vice",
        "Origin": "Daimonic, Aether, Abyssal",
        "Description": "when anyone in range would gain Willpower through Vice, if successful, gain a point of Essence instead",
        "Long Description": [
            "Certain Daimonic Supernal spirits possess this Numen, as well as a handful from the Aether, and a number of spirits native to the Abyss. A handful of especially potent goetic demons also know this Numen, as do some Fallen World spirits aligned to disparate vices (or the concept of vice as a whole). Whenever a character within sensory range of the spirit would regain Willpower through the indulgence of her Vice, the spirit may reflexively roll Power + Finesse, reflexively contested by the target’s Resolve + Gnosis. If the spirit succeeds, the character does not recover a point of Willpower (though she is treated as though she did, meaning that subsequent actions that resonate with her Vice will not yield a point of Willpower); instead, the spirit gains a point of Essence.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "Power+Finesse vs Res+Gnosis",
        "Cost": "-",
        "Book": "Summ 223"
    },
    {
        "Name": "Utter Damnation",
        "Origin": "Infernal",
        "Description": "",
        "Long Description": [
            "This Numen gives a demon the power to destroy any nearby target whose Morality drops to 1. When this happens, make a contested roll between the demon’s roll, Power + Resistance + Infernal Rank versus the target’s Resolve + Composure, + a supernatural power trait such as Blood Potency, Primal Urge or Gnosis, if it applies. If the demon succeeds, the target dies instantly. He falls to the ground, rots away in a matter of seconds, or the demon drags him through a short-lived door to the Inferno. This costs no Essence, but the demon must immediately return to Hell.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "Inf 54"
    },
    {
        "Name": "Versatile Energies",
        "Origin": "Alien",
        "Description": "spend Corpus, Essence and Willpower interchangeably",
        "Long Description": [
            "Certain rare spirits from various alien realms possess this bizarre Numen, which enables them to spend points of Corpus, Essence, and Willpower interchangeably. It is possible that a handful of spirits from elsewhere (perhaps associated with adaptability, evolution, or other such concepts) might possess this Numen, as well, or a slightly more limited form of it (only enabling direct conversion between two of the three traits, for instance).",
            "",
            "",
            "",
            ""
        ],
        "Pool": "-",
        "Cost": "-",
        "Book": "Summ 223"
    },
    {
        "Name": "Vestment",
        "Origin": "Infernal",
        "Description": "",
        "Long Description": [
            "The demon can use a Vestment, just like one of the Possessed, provided it is within its Malapraxis’ Vice. A demon can acquire only Vestments with dots equal to its Infernal Rank.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "Inf 54"
    },
    {
        "Name": "Voice Message",
        "Origin": "",
        "Description": "",
        "Long Description": [
            "The Reflection can project its voice through a TV, telephone or radio, or on answering machine. The phone rings; the radio crackles and goes quiet; the answerphone suddenly shows up that it has a message without the telephone having made any sound. The Reflection starts to speak. The Storyteller spends one Essence and rolls Power + Finesse; each success allows one brief statement before the line goes silent or the radio program resumes.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "Mekh 116"
    },
    {
        "Name": "Wilds Sense",
        "Origin": "Naturae",
        "Description": "the spirit can automatically sense where other spirits are in its immediate vicinity.",
        "Long Description": [
            "Spirits can automatically attempt to sense where other spirits and locations are in their immediate vicinity. If they want to find loci or track down spirits miles distant, however, they must use this Numen, which allows them to sense the small resonant traces left by a spirit’s passage or emitted by a far-distant locus. Roll the spirit’s Finesse + Resistance, with more successes giving more accurate information. One success suggests a vague sense of direction, while five successes would give accurate directions, an idea of travel time and warnings of hazards en route.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "BoS 149"
    },
    {
        "Name": "Zombify",
        "Origin": "Revenant",
        "Description": "",
        "Long Description": [
            "By spending three Essence points and a Willpower point, the revenant can touch a corpse and create a zombie. The new undead have the Short-Lived Weakness (see p.28). Other traits should be assigned according to the abilities of the revenant.",
            "",
            "",
            "",
            ""
        ],
        "Pool": "",
        "Cost": "",
        "Book": "Ant 38"
    }
]


export { spiritNuminaData }