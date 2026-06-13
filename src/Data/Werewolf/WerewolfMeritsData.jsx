export const WerewolfMeritsData = [
    {
        "Name": "Ancestral Vessel",
        "Rank": "(• to •••••) *pre: Lodge of Voices",
        "Description": "Allows the channeling of a specific ancestor spirit, granting skill bonuses or other wisdom.",
        "FullDescription": [""],
        "Requirements": "",
        "Book": "LodgF 104",
        "Effect": [
            {
                type: "paragraph",
                text: "The Lodge of Voices possesses secret rites allowing them to tap into the wisdom of the Ancestor-Shadow. This Merit does not allow a character to channel a specific ancestor. The accumulated knowledge of departed Uratha, however, allows a character with this Merit to accentuate his own experience with theirs."
            },
            {
                type: "paragraph",
                text: "A character with this Merit may attempt to channel the knowledge of an ancestor-spirit as a reflexive action. Spend one Essence and roll a number of dice equal to your character’s Ancestral Vessel dots. Each success allows you to add one die to the dice pool of a specific Skill. That Skill may change with each application of the Merit. The Storyteller has final say on what Skill may be augmented. Ancestral knowledge isn’t likely to be useful with the Drive or Computer Skills, for example, while it could be with Medicine, Crafts (using older materials), Intimidation, Brawl or even Firearms (especially with bows). A character can attempt to boost a Skill he does not possess, but lacking a good frame of reference for the knowledge he suddenly gains, the unskilled penalty still applies."
            },
            {
                type: "paragraph",
                text: {
                    text: "Example: Jon’s character runs afoul of an odd spirit. The Storyteller tells Jon to roll his character’s Intelligence (3) plus Occult (0) to identify it. Jon decides to use his character’s Ancestral Vessel Merit to channel some of the ancestors’ knowledge on spirits, and manages one success. His dice pool for the roll is now 4, but because the character has no dots in Occult, the unskilled penalty still applies (–3 for a Mental Skill). This means, though, that Jon has 1 die remaining the pool, whereas without the help from the ancestors he would be rolling only a chance die.",
                    italic: true
                }
            },
            {
                type: "paragraph",
                text: "Bonus dice last for the remainder of the scene. Ancestral Vessel can be invoked only once per game session, whether it succeeds or fails. If the effort fails, no other attempts can be made in that chapter."
            }
        ],
        "FullPrerequisites": "Lodge of Voices",
        "Drawback": [],
        "Notes": [],
    },
    {
        "Name": "Animal Magnetism",
        "Rank": "(•••)",
        "Description": "Reduces penalty from Primal Urge for purposes of seduction, but penalizes all social rolls with those not attracted to you",
        "FullDescription": [""],
        "Requirements": "",
        "Book": "Rage 105",
        "Effect": [
            {
                type: "paragraph",
                text: "Your character is a focal point for everyone in the room. Through a combination of pheromones and body language, she has an edge of danger that’s hard to resist. Her primal, powerful nature hides just under the surface, and when she wants to, she can let it out. Your character lowers the penalty from her Primal Urge by two when making a Presence or Manipulation roll to distract or seduce someone who would normally be attracted to her gender."
            }
        ],
        "FullPrerequisites": "",
        "Drawback": [
            {
                type: "paragraph",
                text: "Being the center of attention is not always a good thing. People who are attracted to you will keep flirting or trying to strike up conversations when you’re alone, and everyone who isn’t attracted to you will likely resent you. You suffer a –1 modifier to rolls made to deal with people who aren’t attracted to your gender."
            }
        ],
        "Notes": [],
    },
    {
        "Name": "Auspice Blessing",
        "Rank": "(•) *pre: One Auspice Affinity skill at •• (CO)",
        "Description": "When auspice moon is visible overhead, gain a bonus to a select affinity skill",
        "FullDescription": [""],
        "Requirements": "",
        "Book": "Rage 103",
        "Effect": [
            {
                type: "paragraph",
                text: [
                    "Whenever your character can see her auspice moon — or at least where it should be in the sky — she is filled with confidence in the role that Luna has given her. Irraka slip that little bit more silently when the new moon is out, and Elodoth argue that bit more eloquently when bathed in the light of the half-moon. You gain a +1 equipment bonus to one Auspice Skill when your auspice moon is in the sky. This Skill must be rated •• or higher. ",
                    { text: "Available at character creation only.", italic: true }
                ]
            }
        ],
        "FullPrerequisites": "One auspice Affinity Skill at ••",
        "Drawback": [
            {
                type: "paragraph",
                text: "The effects of this Merit only work when the sun is down, and your character can see where her moon would be in the sky (clouds don’t affect this Merit, but buildings do, for instance). If the character’s moon isn’t above the horizon after sundown, she must be able to see the sky directly above her."
            }
        ],
        "Notes": [],
    },
    {
        "Name": "Beginner's Luck",
        "Rank": "(••) Pre: Uratha, must be Irraka",
        "Description": "Only -1 for Untrained Mental Skills. Dramatic failure results in losing a point of Willpower.",
        "FullDescription": [""],
        "Requirements": "",
        "Book": "SotM 29",
        "Effect": [
            {
                type: "paragraph",
                text: "Some people just happen to be pretty decent at most anything they attempt. An Irraka with this Merit only suffers from a one-die penalty (rather than the normal three) when her player attempts a roll for a Mental Skill in which the character has no dots. Those blessed with this sort of universal adroitness often get flustered when they genuinely screw up; if a character with this Merit dramatically fails a Mental Skill roll, he loses a point of Willpower."
            }
        ],
        "FullPrerequisites": "",
        "Drawback": [],
        "Notes": [
            {
                type: "paragraph",
                text: "Normally, this Merit is only available at character creation, though a Storyteller may waive this requirement for a character just undergoing her First Change (particularly if she is chosen of the New Moon)."
            }
        ],
    },
    {
        "Name": "Chain Breaker",
        "Rank": "(••••) *pre: Lodge of Ashes",
        "Description": "Frees a spirit from a bound fetish.",
        "FullDescription": [""],
        "Requirements": "",
        "Book": "LodgF 36",
        "Effect": [
            {
                type: "paragraph",
                text: "The Unfettered know secret phrases in the First Tongue that free a spirit from bondage. A member of the lodge can utter these words and concentrate on a fetish to liberate the captive spirit therein. This cannot be done surreptitiously. Any werewolf in the area can sense the changes in the spiritscape caused by this phenomenon, and the phrase in the First Tongue causes the werewolf’s voice to rumble and growl like a hunting pack. The owner of the fetish feels the spirit within start to wriggle free, and can attempt to disrupt the process, beating the spirit into submission. This Merit cannot free spirits that wish to remain in their fetishes, or spirits for whom being liberated would violate a ban."
            },
            {
                type: "paragraph",
                text: "In order to free a spirit, the werewolf must be able to see the fetish. The player spends one point of Essence (this expenditure helps to get the spirit’s attention and provides some incentive for the spirit to fight its way out) and rolls Harmony in a contested roll against the fetish owner’s Resolve + Composure + Primal Urge."
            },
            {
                type: "heading",
                level: 3,
                text: "Roll Results"
            },
            {
                type: "line",
                label: "Dramatic Failure",
                text: "The spirit’s torment becomes painfully clear to the werewolf, but he is powerless to help. The werewolf must immediately check for Death Rage."
            },
            {
                type: "line",
                label: "Failure",
                text: "The spirit remains trapped in the fetish, and the only way to free the spirit is to destroy the object. This Merit will not work on this particular fetish."
            },
            {
                type: "line",
                label: "Success",
                text: [
                    "The spirit is free of the fetish. The owner of the fetish can choose to sacrifice a ",
                    { text: "dot", italic: true },
                    " (not point) of Willpower to keep the spirit trapped, but this usually results in the Unfettered taking the fetish away by force and breaking it."
                ]
            },
            {
                type: "line",
                label: "Exceptional Success",
                text: "The spirit is free of the fetish, and no amount of exertion on the part of the owner can keep it ensnared."
            },
            {
                type: "paragraph",
                text: "If the Unfettered ever falls below Harmony 8, this Merit becomes unavailable to her until she raises her Harmony back up to the required level."
            }
        ],
        "FullPrerequisites": "Lodge of Ashes, Harmony 8",
        "Drawback": [],
        "Notes": [],
    },
    {
        "Name": "Ephemeral Reckoning",
        "Rank": "(•• or ••••)",
        "Description": "Two dot version can sense the resonance of an area, four dot can sense the resonance of a source of Essence",
        "FullDescription": [""],
        "Requirements": "",
        "Book": "Rage 103",
        "Effect": [
            {
                type: "paragraph",
                text: "Whether through hours of study or an innate knack, your character has more insight than most into the Shadow. Something inside her picks up on spiritual resonance without her consciously noticing."
            },
            {
                type: "paragraph",
                text: "At the two-dot level, your character can make a reflexive Intelligence + Occult roll once per scene to determine the resonance of a given area. Dramatic failure indicates misleading information, failure offers nothing, success gives the main resonance of an area and an exceptional success shows the subtle layers of resonance before her."
            },
            {
                type: "paragraph",
                text: [
                    "At the four-dot level, she can make a similar reflexive roll to pick up on the resonance of a source of Essence that she has found. Only one roll of either kind can be made per scene, though with the four-dot version of this Merit she may try again if the first roll is a failure (see “Successive Attempts,” the ",
                    { text: "World of Darkness Rulebook", bold: true },
                    ", p. 132)."
                ]
            }
        ],
        "FullPrerequisites": "",
        "Drawback": [],
        "Notes": [],
    },
    {
        "Name": "Eyrie",
        "Rank": "(•••) Pre: Uratha",
        "Description": "+2 Perception within your territory. +1 to ranged attack pools within the territory",
        "FullDescription": [""],
        "Requirements": "",
        "Book": "Terr 47",
        "Effect": [
            {
                type: "paragraph",
                text: "You know the best lookout points and lines of sight within your pack’s territory. You receive +2 dice to all Perception pools while within your own territory, and if you attack a foe at range, you receive +1 die to your pool to do so."
            }
        ],
        "FullPrerequisites": "",
        "Drawback": [],
        "Notes": [
            {
                type: "paragraph",
                text: "This Merit can only be learned by a werewolf with a defined territory."
            }
        ],
    },
    {
        "Name": "Far-Runner's Intuition",
        "Rank": "(•••) Pre: Uratha, must be Irraka, Streetwise •• and Survival ••, shared Totem Merit at 10 or more dots",
        "Description": "May roll Wits + Streetwise or Wits + Survival to find a given packmate in the city or the wild, respectively, along with other details.",
        "FullDescription": [""],
        "Requirements": "",
        "Book": "SotM 30",
        "Effect": [
            {
                type: "paragraph",
                text: "In the course of her work, an Irraka is more likely to have to run apart from her pack than a werewolf of any other auspice. Some New Moons eventually develop an uncanny sense that enables them to home in on those with whom they share a pack totem, helping them to discern the precise direction and rough distance between themselves and those to whom they are bound. On a successful Wits + Streetwise (for urban environments) or Wits + Survival (for wilderness environments) roll, the Irraka knows which way she must run to find a given packmate and, in general terms (a few minutes, several hours, about three days, etc.), how far away from her he is."
            }
        ],
        "FullPrerequisites": "Uratha, must be Irraka, Streetwise •• and Survival ••, shared Totem Merit at 10 or more dots",
        "Drawback": [],
        "Notes": [],
    },
    {
        "Name": "Fetish",
        "Rank": "(• to •••••)",
        "Description": "An item containing a bound spirit which has a specific, useful benefit.",
        "FullDescription": [""],
        "Requirements": "",
        "Book": "WtF 79",
        "Effect": [
            {
                type: "paragraph",
                text: "Your character possesses a fetish, a tool or weapon empowered by a spirit bound within. Perhaps she inherited it from a relative, received it from another werewolf, crafted it herself as part of her initiation or took it from a fallen ally during the prelude. Whatever the reason, your character begins play with a fetish that is already attuned to her."
            },
            {
                type: "paragraph",
                text: "The fetish has a level equal to the dots in this Merit. One dot of Fetish is equal to three talens (small, minor fetishes; see p. 205), which may be multiple copies of the same talen. You may purchase multiple fetishes during character creation as long as the total dots in this Merit do not exceed five. You could put four dots into Fetish by assigning your character a Spirit Drum (one dot) and a Mask of Life (three dots), but your character could not begin play with a four-dot klaive and a Fireflash (two dots). Further fetishes can be acquired through roleplay as the chronicle progresses, but cannot be purchased by experience points."
            }
        ],
        "FullPrerequisites": "",
        "Drawback": [],
        "Notes": [
            {
                type: "paragraph",
                text: "Sample fetishes are provided in Chapter Three (pp. 204-209)."
            }
        ],
    },
    {
        "Name": "Local",
        "Rank": "(••) Pre: Uratha",
        "Description": "+1 to social rolls dealing with humans within the werewolf's territory. Humans living in the territory get +1 effective Willpower for Lunacy caused by the werewolf with this merit.",
        "FullDescription": [""],
        "Requirements": "",
        "Book": "Terr 47",
        "Effect": [
            {
                type: "paragraph",
                text: [
                    "You are so comfortable within your pack’s territory that you blend right in with local humans. They accept you as one of their own. You receive +1 die on all Social rolls when dealing with humans in your territory. Humans in your territory unconsciously suspect that there’s something strange about you, but know that you are one of them — humans in your territory receive +1 to their effective Willpower to resist Lunacy that ",
                    { text: "you", italic: true },
                    " cause. If you are seen alone in Urshul form in your territory, for instance, the Willpower 5 observer reacts as though he had Willpower 6. If you and your three packmates (who lack this Merit) all shapeshift within sight, the same guy would respond to you all with his base Willpower 5."
                ]
            }
        ],
        "FullPrerequisites": "",
        "Drawback": [],
        "Notes": [
            {
                type: "paragraph",
                text: "This Merit can only be learned by a werewolf with a defined territory."
            }
        ],
    },
    {
        "Name": "Mercy of Luna",
        "Rank": "(•••) Pre:Uratha, must be Irraka",
        "Description": "May spend a point of Willpower to reduce Primal Urge Social penalties by Cunning score to a max of 0.",
        "FullDescription": [""],
        "Requirements": "",
        "Book": "SotM 30",
        "Effect": [
            {
                type: "paragraph",
                text: [
                    "New Moons are often expected to interact with the herd for the good of the pack, though the feral power of a werewolf’s Primal Urge, seething just below the surface, can make dealings with humans — even the wolf-blooded — difficult, at best. Some Irraka, however, are gifted with a facility for temporarily clouding their more bestial natures, enabling them to assuage the fear that normal people quite rightly feel toward the Forsaken. By spending a point of Willpower as an instant action, the Irraka may reduce his Social Attribute/Skill penalty for Primal Urge (see ",
                    { text: "Werewolf: The Forsaken", bold: true },
                    ", p. 76) by one die per dot of Cunning Renown, to a minimum of a zero-die penalty, for the remainder of the current scene."
                ]
            }
        ],
        "FullPrerequisites": "Uratha, must be Irraka",
        "Drawback": [],
        "Notes": [],
    },
    {
        "Name": "Metabolic Control",
        "Rank": "(••) *pre: Stamina •••",
        "Description": "May suppress regeneration or other physical advantages of being a werewolf in order to hide",
        "FullDescription": [""],
        "Requirements": "",
        "Book": "Rage 105",
        "Effect": [
            {
                type: "paragraph",
                text: "Your character has more control over his body than most werewolves. This allows him to stop his body from regenerating, at least for long enough to set a wound. In addition, this Merit allows the werewolf to slow down other aspects of his physique. When normal people are out of breath, werewolves normally aren’t. When normal people are shocked by injury, werewolves normally aren’t. This Merit allows your character to appear no better than a normal human, slipping under the radar of anything that would hunt him. Camouflaging himself in this way takes a Stamina + Survival roll, with a success indicating that your character has suppressed his metabolism for one scene, or one day for an exceptional success."
            }
        ],
        "FullPrerequisites": "Stamina •••",
        "Drawback": [
            {
                type: "paragraph",
                text: "Preventing regeneration in a particularly stressful situation may require spending a Willpower point, at the Storyteller’s discretion."
            }
        ],
        "Notes": [],
    },
    {
        "Name": "Moon Centered",
        "Rank": "(••)",
        "Description": "During auspice moon gain a bonus to rolls to stay in war form, but suffer a penalty to Composure checks until the first such transformation is done in a lunar cycle.",
        "FullDescription": [""],
        "Requirements": "",
        "Book": "Rage 103",
        "Effect": [
            {
                type: "paragraph",
                text: "No matter your character’s auspice, the sight of the full moon fills him with a powerful rage that yearns to be unleashed. Mother Luna’s face fully revealed spurs him to release the rage within in the only way he knows. On nights of the full moon, your character adds one to his Stamina + Primal Urge when determining the number of turns spent in Gauru form only. This counts as the natural duration for the purposes of Gifts and other effects that alter the duration."
            }
        ],
        "FullPrerequisites": "",
        "Drawback": [
            {
                type: "paragraph",
                text: "Your character is on edge in the light of the full moon until he can release the rage within. All Composure rolls suffer a –1 penalty during the full moon until he can take Gauru form. Changing forms just once is enough to offset this penalty for the duration of the phase (usually three nights)."
            }
        ],
        "Notes": [],
    },
    {
        "Name": "Naturally Deceptive",
        "Rank": "(•••) Pre: Uratha, must be Irraka, Cunning ••••",
        "Description": "By spending a point of Willpower on Larceny, Stealth, or Subterfuge the Irraka may add their Cunning score instead of +3.",
        "FullDescription": [""],
        "Requirements": "",
        "Book": "SotM 30",
        "Effect": [
            {
                type: "paragraph",
                text: "For some New Moons, lying, cheating, and stealing are as easy as breathing. When spending a point of Willpower on one of her three auspice specialty Skills (Larceny, Stealth, or Subterfuge), the Irraka adds dice equal to her dots in the Cunning Renown, rather than the customary three dice."
            }
        ],
        "FullPrerequisites": "Uratha, must be Irraka, Cunning •••••",
        "Drawback": [],
        "Notes": [],
    },
    {
        "Name": "Nimble Defender",
        "Rank": "(••••) Pre: Uratha.",
        "Description": "+1 Defense within your territory. +1 to Athletics to move around your territory.",
        "FullDescription": [""],
        "Requirements": "",
        "Book": "Terr 47",
        "Effect": [
            {
                type: "paragraph",
                text: "You know the best spots from which to defend yourself in your pack’s territory. When in your pack’s territory, you receive +1 to your Defense score. In addition, you receive +1 die to Athletics rolls to move around within your territory (to keep your footing, climb or keep your balance, for instance — you know that Old Man Ratcliffe’s roof is slippery, but your foes do not)."
            }
        ],
        "FullPrerequisites": "",
        "Drawback": [],
        "Notes": [
            {
                type: "paragraph",
                text: "This Merit can only be learned by a werewolf with a defined territory."
            }
        ],
    },
    {
        "Name": "Pathfinder's Blessing",
        "Rank": "(••••) Pre: Uratha, must be Irraka",
        "Description": "The Irraka rolls 4 additional dice for Pathfinder's Sense instead of the normal 2.",
        "FullDescription": [""],
        "Requirements": "",
        "Book": "SotM 30",
        "Effect": [
            {
                type: "paragraph",
                text: [
                    "Irraka are frequently tasked with finding loci, troublesome spirits, and other phenomena native to the Shadow Realm. Some are particularly blessed by Luna in this respect, rolling ",
                    { text: "four", italic: true },
                    " bonus dice for Pathfinder’s Sense (see ",
                    { text: "Werewolf: The Forsaken", bold: true },
                    ", p. 83), rather than the normal two. Such a Stalker feels somewhat more at home in Shadow than in the material world and her player rolls one fewer die on all rolls for the character to cross through the Gauntlet when departing the Shadow."
                ]
            }
        ],
        "FullPrerequisites": "Uratha, must be Irraka",
        "Drawback": [],
        "Notes": [
            {
                type: "paragraph",
                text: "As with Beginner’s Luck, above, this Merit is usually available for character creation only, though a Storyteller may allow it to be purchased later, particularly in the case of a character that Changes over the course of a chronicle."
            }
        ],
    },
    {
        "Name": "Predator’s Gaze",
        "Rank": "(••) *pre: Presence ••, Intimidation ••",
        "Description": "Make people slightly uncomfortable, making them more inclined to do what you say or do anything to make you go away.",
        "FullDescription": [""],
        "Requirements": "",
        "Book": "Rage 103",
        "Effect": [
            {
                type: "paragraph",
                text: "Your character has a tendency to look at people as if they were prey animals. Her body language is domineering, and in conversation, her eyes focus on the throat or another weak spot. People want to get out of her presence, and while that can be annoying, it can also be very useful for getting things done quickly."
            },
            {
                type: "paragraph",
                text: "Your character gets a +1 bonus to all Presence or Manipulation rolls when convincing people to leave her alone or get things done quickly. A shopkeeper will serve her first, just to get her out of the store, and a street gang will suddenly decide that mugging her might not be the best plan they ever had."
            }
        ],
        "FullPrerequisites": "Presence •• and Intimidation ••",
        "Drawback": [
            {
                type: "paragraph",
                text: "Looking on people as prey doesn’t help with making friends and influencing people. People look askance at anyone who hangs around with you voluntarily, and you’ll likely be the first name in people’s heads whenever they hear of a violent crime in the area. After all, you sure look and act the type."
            }
        ],
        "Notes": [],
    },
    {
        "Name": "Prophet's Voice",
        "Rank": "(•••) *pre: Resolve ••",
        "Description": "Similar to Dream merit; can gain symbolic but prophetic visions once per story",
        "FullDescription": [""],
        "Requirements": "",
        "Book": "LodgF 79",
        "Effect": [
            {
                type: "paragraph",
                text: "Some people seem tuned in to the myriad possibilities that the future offers, and can predict with eerie accuracy what a given person’s destiny might entail. Humans have developed hundreds of different methods of seeing the future, but most agree — some people have the gift, others do not. Your character has the gift."
            },
            {
                type: "paragraph",
                text: [
                    "You might decide that your character has a focus for her prophecy or that it comes through dreams, hallucinations, momentary flashes of insight or even automatic writing. Whatever the case, once per story you may activate this Merit. Spend a Willpower point and the ",
                    { text: "Storyteller", italic: true },
                    " rolls your character’s Resolve + Occult. (Thus, you can never be sure whether or not the information you receive is helpful, harmful or merely interesting.)"
                ]
            },
            {
                type: "heading",
                level: 3,
                text: "Roll Results"
            },
            {
                type: "line",
                label: "Dramatic Failure",
                text: "The character completely misreads the omens and predicts a future that is not only dead wrong, but damaging to the querent if he follows her advice. If he survives, he might well return to seek revenge."
            },
            {
                type: "line",
                label: "Failure",
                text: "Your character sees nothing. Whether she admits her failure to the querent is her business."
            },
            {
                type: "line",
                label: "Success",
                text: "The character sees a vision involving the subject. The Storyteller should give you the details of this vision, but it will be heavily veiled in symbolism. If your character sees the subject of her vision being struck by lightning, that may mean that the subject is due for a run of extremely bad luck or for a burst of inspiration. You may roll Intelligence + Occult for a hint as to the meaning of the symbols; success on this roll means the Storyteller should clarify or help you to figure out the meaning of the vision."
            },
            {
                type: "line",
                label: "Exceptional Success",
                text: "Your character sees the future in stunning clarity. The vision is relevant, but usually very brief."
            },
            {
                type: "paragraph",
                text: "A vision might take years to come to pass, or become relevant within minutes. The character (and the player) has no way to know, nor does she have any control over what facet of the subject’s life the vision covers. Prophet’s Voice is an extremely fickle blessing, and, although the player has control over when to use it, the character only knows that sometimes what she sees comes to pass."
            },
            {
                type: "paragraph",
                text: [
                    "Prophet’s Voice can usually only be purchased at character creation, but members of the Lodge of Prophecy can develop this gift on their own. The process of doing so requires extended trips into the ",
                    { text: "Hisil", italic: true },
                    ", searching out conceptual spirits of time and foresight. Spirits such as this typically have no concept of past or present, meaning that they see Uratha as the children of Father Wolf, his successors and his murderers all at once. As such, a werewolf might be welcomed one moment and brutally attacked the next. Even so, the insight these spirits can provide into the arcane patterns of time and symbolism can, given practice, enable a werewolf to prophesize."
                ]
            }
        ],
        "FullPrerequisites": "Uratha or wolf-blooded, Resolve ••",
        "Drawback": [],
        "Notes": [],
    },
    {
        "Name": "Scout",
        "Rank": "(••)",
        "Description": "+1 perception and Stealth in another pack's territory, as long as you are not attacked or interfered with.",
        "FullDescription": [""],
        "Requirements": "",
        "Book": "Terr 48",
        "Effect": [
            {
                type: "paragraph",
                text: "You are exceptionally talented at scoping out an enemy’s territory, so long as you are not interfered with and don’t attack. You receive +1 die to Perception and Stealth dice pools in a rival werewolf’s territory."
            }
        ],
        "FullPrerequisites": "",
        "Drawback": [],
        "Notes": [],
    },
    {
        "Name": "Secret Paths",
        "Rank": "(••) Pre: Uratha",
        "Description": "+2 stealth within one's territory. A hiding place can be created in a turn which provides a further +2 and 1 point of cover.",
        "FullDescription": [""],
        "Requirements": "",
        "Book": "Terr 47",
        "Effect": [
            {
                type: "paragraph",
                text: "You know better than anyone else how to move around your own territory unobserved. You receive +2 dice to Stealth pools while in your pack’s territory. Moreover, if you have one turn to prepare, you can quickly rig up a good hiding place that gives an additional +2 dice to Stealth pools and one point of cover."
            }
        ],
        "FullPrerequisites": "",
        "Drawback": [],
        "Notes": [
            {
                type: "paragraph",
                text: "This Merit can only be learned by a werewolf with a defined territory."
            }
        ],
    },
    {
        "Name": "Short Cuts",
        "Rank": "(•) Pre: Uratha",
        "Description": "Werewolves with this merit can find alternate paths around obstacles in their territory without losing any time.",
        "FullDescription": [""],
        "Requirements": "",
        "Book": "Terr 47",
        "Effect": [
            {
                type: "paragraph",
                text: "You know the best, fastest routes through your pack’s territory, even if they involve going across rooftops or through basements. Once per session, if your path is blocked by an obstacle within your own territory, you can declare to the Storyteller that you know a shortcut that lets you bypass the obstacle without slowing you at all."
            }
        ],
        "FullPrerequisites": "",
        "Drawback": [],
        "Notes": [
            {
                type: "paragraph",
                text: "This Merit can only be learned by a werewolf with a defined territory."
            }
        ],
    },
    {
        "Name": "Staunch Defender",
        "Rank": "(•••) Pre: Uratha",
        "Description": "+1 to attack pools with claws and teeth against invaders of your territory. Drawback: -1 to Death Rage while defending your territory",
        "FullDescription": [""],
        "Requirements": "",
        "Book": "Terr 48",
        "Effect": [
            {
                type: "paragraph",
                text: [
                    "You are especially fierce when defending your pack’s territory. When in your pack’s territory and fighting an invader to that territory, receive a bonus die to all attack pools made with claws and teeth. This Merit does no good against any humans, other werewolves or other supernatural creatures that live within your pack’s territory, or spirits that belong there (or that you have summoned there). Your ferocity in defending your territory gives you –1 die to resist ",
                    { text: "Kuruth", italic: true },
                    " while doing so."
                ]
            }
        ],
        "FullPrerequisites": "",
        "Drawback": [],
        "Notes": [
            {
                type: "paragraph",
                text: "This Merit can only be learned by a werewolf with a defined territory."
            }
        ],
    },
    {
        "Name": "Strong Bloodline",
        "Rank": "(•) *pre: Ivory Claw",
        "Description": "Increases effective Purity renown for some social purposes.",
        "FullDescription": [""],
        "Requirements": "",
        "Book": "Pure 111",
        "Effect": [
            {
                type: "paragraph",
                text: "Power within the Ivory Claws passes hereditarily, rather than purely by Renown or challenges. An Ivory Claw with this Merit has many noteworthy ancestors and a clear claim to their lineage."
            },
            {
                type: "paragraph",
                text: "Strong Bloodline provides one point of conditional Purity Renown, for the following purposes:"
            },
            {
                type: "list",
                items: [
                    "Determination of leadership within the Ivory Claws tribe",
                    "Admission into Ivory Claws lodges",
                    "Adding Purity to Social dice pools when dealing with fellow Ivory Claws"
                ]
            }
        ],
        "FullPrerequisites": "Ivory Claw",
        "Drawback": [],
        "Notes": [],
    },
    {
        "Name": "Trained Senses",
        "Rank": "(••) Pre: Resolve •••",
        "Description": "May ignore up to two dice of penalties to perception rolls. By spending a point of Willpower the Werewolf may ignore a penalty of any size for a perception roll.",
        "FullDescription": [""],
        "Requirements": "",
        "Book": "SotM 30",
        "Effect": [
            {
                type: "paragraph",
                text: [
                    "Many Irraka act as the eyes and ears of their packs in tense situations. Some develop particularly discerning senses, able to filter out distractions and concentrate on only the details of significance. The player of a character with this Merit ignores up to two dice of penalties, from any source, on a Wits + Composure roll for perception. By spending a point of Willpower, the player may ignore a penalty of ",
                    { text: "any size", italic: true },
                    " for a perception roll, as the character grits his teeth and focuses in on only what he absolutely needs to see, hear, and otherwise sense."
                ]
            }
        ],
        "FullPrerequisites": "Resolve •••",
        "Drawback": [],
        "Notes": [],
    },
    {
        "Name": "Territorial Familiarity",
        "Rank": "(• to •••)",
        "Description": "+2 to Survival within region of territory. At one dot, this territory is a few city blocks. Three dots, it is several miles worth of territory. Werewolves get the full effect at 2 dots.",
        "FullDescription": [""],
        "Requirements": "",
        "Book": "BotW 99",
        "Effect": [
            {
                type: "paragraph",
                text: "Your character has spent a great deal of time in a specific area and has a preternatural familiarity with the area. He has a detailed map in his head, never loses his sense of direction, always knows how and where to find food in his “territory” and can evade unwanted attention there for an almost unlimited length of time. He adds a +2 to all Survival rolls made while in the chosen region."
            },
            {
                type: "paragraph",
                text: "One dot in this Merit means your character’s territory is the size of one or two city blocks. Three dots (or two for werewolves) expands the radius to several square miles."
            },
            {
                type: "paragraph",
                text: "Though this Merit is included in a chapter on life in the wilderness, it is of equal utility in urban settings. A bum who has been sleeping on the same street corner for years or a youth who knows exactly which yards to cut through near his house might have a one-dot version; a cop who’s been on the same beat for 20 years or an architect who designed every last piece of a sprawling mall over the last 10 years might have the Merit at three dots. When the region denoted by this Merit is altered significantly, the quality of Territorial Familiarity can be reduced (if possessed at three dots) or lost altogether (in either case). A teenager who returns from his scholarship at college to learn that the tenements where he grew up have been replaced by a strip mall would lose his Merit. A park ranger whose park was ravaged by a wildfire might have the Merit reduced or lost. In the latter case, the Merit might return as the forest recovered."
            },
            {
                type: "paragraph",
                text: "Werewolves, naturally territorial creatures, purchase the three-dot version of Territorial Familiarity at a reduced cost of two dots."
            }
        ],
        "FullPrerequisites": "",
        "Drawback": [],
        "Notes": [],
    },
    {
        "Name": "Vicious Attacker",
        "Rank": "(•••) Pre: Uratha",
        "Description": "+1 to attack pools against werewolves in their territory.",
        "FullDescription": [""],
        "Requirements": "",
        "Book": "Terr 48",
        "Effect": [
            {
                type: "paragraph",
                text: "You have no respect for other werewolves’ territory and see their territorial claims as a challenge to your own dominance. When invading another werewolf’s territory, you receive +1 die to attacks made with claws and teeth against that werewolf or his allies. This Merit does not provide you with any benefit against humans or supernatural entities that live in your opponent’s territory, unless they specifically take up arms to help those werewolves. (If the local police attack you because you appear to be a shotgun-toting maniac, you get no benefit from this Merit; if a werewolf’s spouse attacks you because you are fighting his wife, this Merit does apply.) This Merit provides you no benefit if you are fighting another werewolf in neutral ground or in territory he does not claim as his own."
            }
        ],
        "FullPrerequisites": "",
        "Drawback": [],
        "Notes": [],
    }
]
