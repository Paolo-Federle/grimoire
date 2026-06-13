const advancedArmoryOverviewData = {
    "Name": "Advanced Armory",
    "Content": [
        {
            "type": "paragraph",
            "text": "The elite agents of Task Force: VALKYRIE don’t trust their lives to bizarre magical rites, weird relics, or freakish biological modification. As befits the best of the best of the United States Armed Forces, Task Force: VALKYRIE relies on cutting-edge technology and advanced warfare systems to eliminate its targets and keep humanity safe from the monsters. From bullets that rip through ghosts as easily as human flesh to rifles that spit lightning, the Advanced Armory of VALKYRIE agents gives them an edge over the creatures they hunt."
        },
        {
            "type": "paragraph",
            "text": "Task Force: VALKYRIE takes its operational security very seriously. On recruitment, all agents are implanted with a small RFID chip, usually secured in the meat of the hip or shoulder. All Advanced Armory devices, unless specifically noted otherwise, have a receiver programmed to recognize the frequency of this RFID at close range. If the signal is not detected, the device hard-locks and will not function. While this keeps VALKYRIE’s weapons from falling into the hands of rogue hunters or, worse yet, the enemy, it can also lead to tragic losses. One strike team in Canada was completely wiped out when the coven of witches it tracked down cast a spell that disrupted electronic communications. The team’s weapons, no"
        },
        {
            "type": "heading",
            "level": 2,
            "text": "ORDNANCE REQUISITION"
        },
        {
            "type": "paragraph",
            "text": [
                "Task Force: VALKYRIE is a small agency, and its equipment is highly unique. Most military units or departments supply their agents with needed equipment. Here, though, TFV’s budget isn’t robust and the gear is rare. What the player buys, the character has; the agency’s hunters need to be self-reliant in this regard. That said, as an ",
                {
                    "text": "optional rule",
                    "italic": true
                },
                " at the end of a story, a VALKYRIE agent can 'trade in' one piece of Advanced Armory back to the agency. Doing so gets him half the experience points that would be spent on the item (the Bleeder, below, is a two-dot Merit and would necessitate 6 total experience points to purchase, so trading it in earns the hunter 3 in return that could then be spent on other Advanced Armory items)."
            ]
        }
    ]
}

const advancedArmoryData = [
    {
        "Name": "The Bleeder",
        "Rating": "••",
        "Description": "+3 ranged weapon induces the hemorrhage of supernaturally charged blood instead of damage, or with modifications, other forms of supernatural energies.",
        "Book": "HTV 152",
        "Content": [
            {
                "type": "paragraph",
                "text": "Resembling nothing so much as a jackhammer with a small satellite dish in place of the drill bit, the Bleeder is one of Task Force: VALKYRIE’s newest developments. The Bleeder is the latest in what VALKYRIE’s scientists refer to as “crowd-safe” weaponry, designed to target and eliminate supernatural threats, specifically vampires and their servants, while presenting little threat to potential victims or bystanders. Only recently moved out of the laboratory, the Bleeder has begun field-testing with a number of field ops teams around the globe."
            },
            {
                "type": "paragraph",
                "text": "The Bleeder fires a focused microburst of energy in a tightly constrained beam. Through processes not fully understood even by the scientists who discovered them, this energy reacts violently with the quasi-biological functions of the vampire’s blood, with the net result that it evacuates the creature’s body, usually in a violent manner. Laboratory tests have recorded results ranging from a minor leakage of the tear ducts to vomiting. In some test cases, the blood actually shot out of the subject’s pores in a fine red mist. While not entirely eliminated, the weapon presents a minimal threat level to humans and natural animals, as they lack the critical metabiology of vampire blood."
            }
        ],
        "Function": [
            {
                "type": "paragraph",
                "text": "The Bleeder is treated as a ranged weapon, subject to all the normal rules for ranged combat. Attacking with the Bleeder is a Dexterity + Firearms attack, with a +3 bonus to represent the weapon’s damage."
            }
        ],
        "RollResults": [
            {
                "type": "line",
                "label": "Dramatic Failure",
                "text": "The Bleeder overloads and critical components are thrown out of precise alignment. The wielder takes one point of bashing damage from the electrical surge, and the device is rendered inoperable until it is recalibrated. Recalibration requires five successes on an extended Intelligence + Science roll, with each roll representing a minute of work."
            },
            {
                "type": "line",
                "label": "Failure",
                "text": "As with an ordinary ranged attack, the target suffers no damage or ill effect."
            },
            {
                "type": "line",
                "label": "Success",
                "text": "Instead of inflicting damage to the target’s Health, the “Bleeder” causes a vampire, ghoul, or any creature that consumes and stores blood in its own body to lose one Willpower (or the equivalent) per success rolled. This Willpower physically leaves the creature’s body in rivulets or sprays of blood, with velocity and force increasing with successes. If more successes are rolled than the target has remaining blood in its system, extra successes roll over into lethal damage."
            },
            {
                "type": "line",
                "label": "Exceptional Success",
                "text": "Not only does the target lose a large amount of stored blood, but it also suffers lethal damage equal to one half the number of successes rolled due to the violence with which the blood leaves its body. Blood vessels literally explode; skin and muscle are torn by the force of the exsanguination."
            }
        ],
        "Special": [
            {
                "type": "paragraph",
                "text": "The “Bleeder” does not have quite the same explosive interaction with non-vampiric blood, but the energy it pours out can cause premature breakdown of blood cells or the restriction of blood vessels. Against creatures without a stored pool of blood, the weapon inflicts intense headaches and malaise: successes on an attack roll are taken not as damage, but as penalties to the target’s actions, to a maximum of -5 dice. The penalty lasts for five turns and is often accompanied by a nosebleed."
            }
        ]
    },
    {
        "Name": "Equalizer Grenade",
        "Rating": "•••",
        "Description": "Renewable. Flash grenade strobes light to neurally inhibit creatures' ability to shapeshift.",
        "Book": "HTV 153",
        "Content": [
            {
                "type": "paragraph",
                "text": "The old phrase “monsters in human skin” has its element of truth, but there are things out there in the dark that hide behind only the thinnest veneer of humanity. Sometimes, when a Task Force: VALKYRIE strike team storms some unholy nightmare’s den, what looks like a few hillbillies and drifters turns into a wall of fur and muscle and savage sharp teeth. The Equalizer grenade helps to level the playing field."
            },
            {
                "type": "paragraph",
                "text": "Studies performed on captured monsters of various classifications have revealed a commonality amongst many: when a living creature changes its shape, no matter the method behind it, a surge of erratic brain activity buried deep in the sensory cortex immediately precedes the change. VALKYRIE scientists have speculated that this is the brain trying to process the sensory overload of radical body morphism, but the truth is countless vivisections have been unable to give any conclusive answers. Nevertheless, VALKYRIE munitions experts were able to engineer the equalizer grenade from the test data."
            }
        ],
        "Function": [
            {
                "type": "paragraph",
                "text": "Operating on the same principles that cause certain patterns of brightly flashing lights to induce epileptic seizures, the equalizer grenade pulses in a pattern that causes focused microseizures in that portion of the brain that seems to govern shapeshifting. The grenade is harmless to humans, and in fact to anything not attempting to alter its form, but the microseizures flood neural channels with “white noise” that effectively blocks shapeshifting."
            },
            {
                "type": "paragraph",
                "text": "Throwing an equalizer grenade is a Dexterity + Athletics roll (see The World of Darkness Rulebook, p. 67). The grenade has a “Damage” of 4, but instead of inflicting Health damage, any living creature within five yards of the grenade whose Size is less than the total “damage” is unable to change its shape for five turns and must return to its natural shape. Remember that to calculate a grenade’s damage, you roll a number of dice equal to the Damage, in this case 4, and add the successes to the base Damage rating (see The World of Darkness Rulebook, p. 178)."
            }
        ],
        "RollResults": [],
        "Special": [
            {
                "type": "paragraph",
                "text": "The Equalizer Grenade Merit is Renewable; once per story per instance of the Merit a hunter possesses, Task Force: VALKYRIE will resupply him with an Equalizer Grenade. If he can produce concrete intelligence that a particular quarry he’s pursuing is a shapeshifter and he has already used his resupply for the current story, he may roll Wits + Politics to cut through the red tape and acquire another. Success means he receives the resupply within the week; an exceptional success gets him the grenade in one day. This emergency resupply can only be used once per story."
            },
            {
                "type": "paragraph",
                "text": "Equalizer grenades work against any living creature, regardless of the means by which it shapeshifts. A werewolf’s innate shapeshifting, a witch’s skin-changing spell, or a possessed woman’s flesh warped by the demon that controls her are equally susceptible. Vampires and other undead that are not animated by anything even vaguely resembling biology are resistant to the grenade’s effects. Treat an undead creature’s Size as two points higher when calculating the effect of an Equalizer grenade. An equalizer grenade can only be used once; the intensity of light required to trigger the microseizures slags the electronics and turns the battery into a useless lump."
            }
        ]
    },
    {
        "Name": "Etheric Goggles",
        "Rating": "•• or ••••",
        "Description": "Specially treated night-vision goggles can perceive Twilight phenomena, and with four dots, trails left in their wake.",
        "Book": "HTV 151",
        "Content": [
            {
                "type": "paragraph",
                "text": "Ghosts, demons, and witches all have the ability to pass unseen by mortal senses. Even vampires, according to some stories, have the ability to send their minds out of their cold, dead bodies and explore the world in secret. With etheric goggles, Task Force: VALKYRIE can bring the fight to them."
            },
            {
                "type": "paragraph",
                "text": "Etheric goggles operate on the same principle as the etheric tracker (see p. 155), utilizing chemically treated lenses to detect entities in Twilight. Until recently, they were standard kit for field agents, but since a rash of psychosis among agents who used them extensively in the early 2000s, top brass has restricted their use."
            }
        ],
        "Function": [
            {
                "type": "paragraph",
                "text": "Etheric goggles look like slightly bulkier, more complicated versions of the night-vision goggles employed by the United States Armed Forces. In fact, etheric goggles serve as perfectly functional night-vision goggles, allowing the wearer to see perfectly — albeit in monochrome — in pitch darkness (see the World of Darkness Rulebook, p. 140). Their primary use comes into play when the hunter flips a pair of oddly purplish lenses down over the infrared light source on the goggles’ brow, allowing the wearer to see objects in Twilight as clearly as if they were manifested physically. The process required to treat the lenses to render Twilight visible creates weird distortions of the physical world. While the hunter is using the goggles to see Twilight objects, he suffers a -2 penalty to Perception checks made to notice anything in the physical world."
            },
            {
                "type": "paragraph",
                "text": "For four dots, a VALKYRIE agent may requisition a more advanced model that can pick up trace etheric disturbances left behind by incorporeal creatures after they pass. These traces appear as a softly luminescent purple cloud that trails behind a spirit or ghost, enabling it to be tracked. The trail fades after 10 minutes per point of Power the spirit entity possesses. (In the case of beings that use the full nine Attribute spread, such as a Twilight-walking witch, use the highest of Strength, Intelligence or Presence.)"
            },
            {
                "type": "paragraph",
                "text": "Etheric goggles have a battery life of six hours as a night vision device, or three hours when used to see Twilight objects."
            }
        ],
        "RollResults": [],
        "Special": []
    },
    {
        "Name": "Etheric Rounds",
        "Rating": "• to •••••",
        "Description": "Renewable. Shots strike ghosts, spirits and other incorporeal beings, but suffer -1 to strike the corporeal.",
        "Book": "HTV 150",
        "Content": [
            {
                "type": "paragraph",
                "text": "Produced in top-secret, experimental laboratories around the country, these bullets have been bombarded with a cocktail of exotic, high-energy particles that infuse peculiar pseudo-physical properties into the lead. Etheric Rounds are delivered to field operatives in clear, plastic magazines (Task Force: VALKYRIE manufactures versions in every caliber and magazine style currently on the market) and emit a faint blue light from their tips. When fired, this light becomes as bright as a tracer round, making concealment all but impossible. The bullet is actually consumed by this light, which converts the metal into a pseudo-etheric state that VALKYRIE scientists believe to be a heretofore undiscovered “fifth state” of matter."
            }
        ],
        "Function": [
            {
                "type": "paragraph",
                "text": "Etheric Rounds allow the hunter to inflict normal firearm damage against manifested ghosts, spirits and other incorporeal entities. They don’t count as blessed items (see The World of Darkness Rulebook, p. 214), and thus inflict lethal rather than aggravated damage. Etheric Rounds can be used against corporeal targets as well, but the attack suffers a -1 penalty, as the pseudo-etheric harmonics are less disruptive to living tissue."
            }
        ],
        "RollResults": [],
        "Special": [
            {
                "type": "paragraph",
                "text": "The Etheric Rounds Merit is Renewable; for each dot the character has in this Merit, Task Force: VALKYRIE supplies him with one clip of Etheric Rounds for a specific weapon type (e.g. MP-5, Glock 19) every session."
            },
            {
                "type": "paragraph",
                "text": "A character may purchase multiple instances of Etheric Rounds, each specifying a different weapon. For example, an assault team leader might have Etheric Rounds (AR-15) ••• and Etheric Rounds (P90) ••; every session, he has three magazines’ worth of etheric ammo for his AR-15 and two magazines for his P90."
            },
            {
                "type": "paragraph",
                "text": "Etheric Rounds, unlike most Advanced Armory Merits, can be used by anyone, even if they lack a Task Force: VALKYRIE RFID chip."
            },
            {
                type: "heading",
                level: 2,
                text: "SIN-EATERS AND ETHERIC ROUNDS"
            },
            {
                type: "paragraph",
                text: "Got Geist? Want to know what Etheric Rounds (pp. 150-151, Hunter: The Vigil) do to Sin-Eaters? Because a geist literally merges with the Sin-Eater, this means that these Advanced Armory bullets do full and normal damage to the Sin-Eater’s living tissue. It also disrupts the Sin-Eater’s Synergy; if the Sin-Eater is forced to make a Synergy degeneration roll within 24 hours of having been shot by an Etheric Round, she suffers -1 to that roll."
            }
        ]
    },
    {
        "Name": "Etheric Tracker",
        "Rating": "••••",
        "Description": "Fires a semitangible tracking pellet which embeds in a corporeal or noncorporeal target. Tracks pellets within half a mile for up to 24 hours.",
        "Book": "HTV 155",
        "Content": [
            {
                "type": "paragraph",
                "text": "Monsters, whatever their stripe, tend to be elusive. Whether it’s a vampire’s ability to cloud men’s minds, a witch’s teleportation spell, or a werewolf’s really damn disconcerting way of just disappearing sometimes, if Task Force: VALKYRIE can’t find it, they can’t very well tag it or kill it. The etheric tracker is one step toward nullifying that advantage. By marking a target with a small “tag” that has been bombarded with exotic, high-energy particles similar to those underlying the creation of etheric rounds, Task Force: VALKYRIE can track its quarry even through realms beyond mortal ken."
            }
        ],
        "Function": [
            {
                "type": "paragraph",
                "text": "The etheric tracker consists of two parts: the main unit is roughly the size and shape of a large pistol (Size 1), which uses precisely aligned electromagnets to fire a tracking pellet at considerable velocity, embedding it below the target’s skin. The pellets themselves are roughly the size of a grain of sand, and are small enough that the target must roll Wits + Composure to notice the impact. Even if it is noticed, the sensation is comparable to the bite of a small insect. A handheld scanner, the second part of the tracker, picks up the pseudo-etheric radiation given off by the pellet and displays a location on an LCD screen. Earlier models only showed approximate distance and direction; current field models integrate a GPS locator and street maps of the area, allowing the team to pinpoint the precise location of its quarry."
            },
            {
                "type": "paragraph",
                "text": "Since the tracker actually follows the etheric signature of the pellet and not a radio frequency or other, more earthly signatures, it can follow creatures even when they slip into an invisible, intangible state. Likewise, the pellet’s pseudo-etheric nature allows it to anchor in the resonant structure of a manifested ghost or spirit as well as the flesh of a corporeal entity. The current model cannot track a target that fully departs this plane of existence, but Task Force: VALKYRIE researchers are hard at work on cracking that puzzle as well. An etheric tracker has an effective range of only half a mile, but this range is not hampered by buildings or other obstructions. A single pellet can be tracked for 24 hours before its etheric resonance fades."
            }
        ],
        "RollResults": [],
        "Special": [
            {
                "type": "paragraph",
                "text": "An Etheric Tracker comes with a full magazine of pellets, which resembles a magazine for a semiautomatic pistol filled with blue sand. The sheer number of pellets means the Etheric Tracker’s ammunition is effectively unlimited. Should an agent lose his supply of etheric pellets, a call to his home office and a successful Wits + Politics roll can get him a replacement within one week, provided he can get to a population center or military base. An exceptional success sees the pellets delivered within one day."
            }
        ]
    },
    {
        "Name": "Frequency Pulse Emitter",
        "Rating": "••",
        "Description": "Renewable. High-frequency sonic grenade provokes a Stamina + Composure -3 roll for beings with heightened animal senses, or -5 for beings in full animal form, to resist being stunned.",
        "Book": "SpSl 145",
        "Content": [
            {
                type: "paragraph",
                text: "Canines can hear noises pitched in ultra-high frequencies that humans cannot. The scientists who designed the devices for TF:V created Frequency Pulse Emitters working with the same general principles applied to werewolves. A Frequency Pulse Emitter (sometimes called Dog Whistles by TF:V soldiers) is a modified flashbang grenade that emits an eardrum rupturing pulse of sound that can only be heard by canines and werewolves."
            }
        ],
        "Function": [
            {
                type: "paragraph",
                text: "A Frequency Pulse Emitter is used like any other grenade. The operator primes the grenade and tosses it towards the enemy with a Dexterity + Athletics roll (see the World of Darkness Rulebook, p. 67 for throwing rules). Frequency Pulse Emitter grenades have what is called a short fuse, meaning the grenade will go off within a few seconds of being primed. This gives an enemy little chance to pick up the grenade and throw it back at its former owner. Any werewolf within 10 yards of the Dog Whistle when it “explodes” must succeed at a Stamina + Composure roll at a -3 penalty or be stunned (see the World of Darkness Rulebook, p. 167). The penalty to resist being stunned is increased to -5 if the werewolf is in either wolf or near-wolf form. A Frequency Pulse Emitter has no effect on humans unless the character has increased their normal range of hearing in some manner. It may work on any creature (vampire, witch, etc.) assuming an animal-form or using heightened senses."
            }
        ],
        "RollResults": [],
        "Special": [],
        "Durability": 2,
        "Size": 1,
        "Structure": 3,
        "Acceleration": "",
        "Safe Speed": "",
        "Maximum Speed": "",
        "Handling": "",
        "Type": "",
        "Damage": "",
        "Ranges": "",
        "Capacity": "",
        "Weapon Size": "",
        "ItemSpecial": ""
    },
    {
        "Name": "Gatekeeper Device",
        "Rating": "•••",
        "Description": "Full bodysuit can be activated with Willpower to transition between the material realm and the Shadow or Underworld, with a twelve-hour cooldown.",
        "Book": "C&C 82",
        "Content": [
            {
                type: "paragraph",
                text: "It’s actually not a device: it’s a thin-skinned black bodysuit lined with tiny white filaments—and, because it’s been designed by Project FORT, the suit is also marked with a number of stitched-in occult, spiritual, and scientific symbols. It covers everything: even the hunter’s face. The hunter sees via dark goggles sewn into the bodysuit mask."
            },
            {
                type: "paragraph",
                text: "At present, only five suits of this type even exist. FORT does not have the resources or materials to make more."
            }
        ],
        "Function": [
            {
                type: "paragraph",
                text: "Wearing the suit allows one to enter alternate realms (at this moment, that remains restricted to either the Shadow or the Underworld). Doing so is an act of will—the hunter must expend a point of Willpower, which charges the suit via biofeedback."
            },
            {
                type: "paragraph",
                text: "At that moment, the hunter will cross over. If she’s at an Avernian Gate (where the membrane between the world of the living and the Underworld is thin), she will cross over into the Underworld. If she is anywhere else, she crosses over into the Shadow."
            },
            {
                type: "paragraph",
                text: "The suit has some notable drawbacks. First is that the suit can only be used once every 12 hours. Exiting the Shadow or the Underworld generally means waiting out the downtime between uses, unless alternate means of exit are discovered. Second, the suit causes a few unpleasant physical side effects:"
            },
            {
                type: "list",
                items: [
                    "Itching. The itching is somewhat maddening, and causes a persistent -1 penalty to all rolls. This penalty can removed for a scene by expending a Willpower point.",
                    "Vertigo. This only occurs when the character is near a threatening edge (be it a set of steps or the precipice of a cliff). If the character is near such an edge, she must succeed on a Wits + Dexterity roll lest she fall off that edge.",
                    "Pallor. The character turns deeply pale, her veins showing through the flesh. This lasts for a full week after using the suit; it has no direct effects, but could cause Social penalties in certain situations (Storyteller-determined)."
                ]
            }
        ],
        "RollResults": [],
        "Special": [],
        "Durability": "",
        "Size": "",
        "Structure": "",
        "Acceleration": "",
        "Safe Speed": "",
        "Maximum Speed": "",
        "Handling": "",
        "Type": "",
        "Damage": "",
        "Ranges": "",
        "Capacity": "",
        "Weapon Size": "",
        "ItemSpecial": ""
    },
    {
        "Name": "Gungnir System",
        "Rating": "••• to •••••",
        "Description": "The Gungnir Multi-Function Targeting System, integrated into a submachine gun (•••) or assault rifle (••••), provides thermal and night vision, mitigates range penalties, and highlights extranormal entities (which for an extra dot includes Twilight beings).",
        "Book": "HTV 154",
        "Content": [
            {
                type: "paragraph",
                text: "The Gungnir System, named for Odin’s never-missing spear, is the boon and the curse of many Task Force: VALKYRIE field teams. Integrated directly into the latest generation of standard armament (the three-dot version described here includes an integrated submachine gun; a four-dot version comes with an assault rifle), the Gungnir System is VALKYRIE top brass’ new initiative for the future of the agency, in one fell swoop improving target identification and all but eliminating collateral damage."
            },
            {
                type: "paragraph",
                text: "The truth, according to cynical agents who have field-tested the device, is that target identification and guy who’s about to kill me identification aren’t necessarily the same thing, and the only way the Gungnir System is going to prevent collateral damage is by ensuring that bystanders are only accidentally killed by the bad guys."
            }
        ],
        "Function": [
            {
                type: "paragraph",
                text: "The integrated scope built into a weapon outfitted with the Gungnir System is a marvelous thing. A combination night vision scope, thermal imager, and Kirlian camera, it allows a soldier to engage targets in pitch blackness and easily distinguishes most monsters from humans: vampires, of course, are well below human body temperature, while werewolves and their ilk run hot as a byproduct of their increased metabolism. Witches, psychics and the possessed demonstrate an unusual Kirlian aura that identifies them as extra-normal. For an additional Merit dot, the scope can even have etheric goggle functionality built into it, allowing the agent to target ghosts and spirits. An LED overlay tags any known supernatural entity with its Task Force: VALKYRIE designation."
            },
            {
                type: "paragraph",
                text: "In addition to its target identification features, the scope is a top-of-the-line sighting system. Penalties for medium-range fire are negated entirely, and long-range penalties are halved. The hunter also ignores any penalty for fighting blind when using the Gungnir System."
            },
            {
                type: "paragraph",
                text: "The scope is tied directly into a fire control computer programmed to recognize the unique signatures (thermal, etheric, or Kirlian) of every supernatural creature of which Task Force: VALKYRIE has records. If the gun is pointed at a target that does not fit any target profile, the safety is automatically engaged and the gun will not fire."
            },
            {
                type: "paragraph",
                text: "In theory, this means that it is impossible for a VALKYRIE soldier to accidentally shoot a bystander during an engagement. In practice, it means that the weapon tends to refuse to fire at a monster’s mortal servants, cultists, slashers and even the odd inanimate object. A cell operating under the cover of the Gulf War was wiped out by a nest of ghûls because the desert sun baked the stone walls of the creatures’ lair to a temperature close to 98.6, causing the computers to assume the hunters were surrounded by human onlookers and refuse to fire."
            }
        ],
        "RollResults": [],
        "Special": [
            {
                type: "paragraph",
                text: "The majority of agents issued a Gungnir System weapon quickly learn of a field modification that strips out the safety controls while leaving the scope and target recognition software intact. This hack requires an extended Dexterity + Computers roll, with each roll representing an hour’s worth of careful soldering and rewiring. The hunter must achieve 10 successes to complete the modification. Task Force: VALKYRIE comes down hard on agents discovered to have modified their weapons in this manner, with court martial the least severe reprimand."
            }
        ],
        "Durability": "",
        "Size": "",
        "Structure": "",
        "Acceleration": "",
        "Safe Speed": "",
        "Maximum Speed": "",
        "Handling": "",
        "Type": "",
        "Damage": "",
        "Ranges": "",
        "Capacity": "",
        "Weapon Size": "",
        "ItemSpecial": ""
    },
    {
        "Name": "Hod Rounds",
        "Rating": "•",
        "Description": "Renewable. Splintering mistletoe bullets impose a -2 penalty to fire, but deal half their damage to vampires as lethal and suffer no additional penalty to aim a staking shot.",
        "Book": "NS 135",
        "Content": [
            {
                type: "paragraph",
                text: "When wooden bullets were found on Axis soldiers in WWII, they begat a number of military urban myths: poisonous splinters, shredding limbs, all sorts of nasty intel without visual confirmation. Facts are, wooden bullets were used most often as tracers for grenade launchers or as training bullets fired in desperation. Horror stories left over from WWII have created bugbear-like gremlins and foo-fighters out of a largely ineffectual ballistic. VALKYRIE, however, knows that gremlins and foo-fighters are all too real, and they’ve fought too many bugbears."
            },
            {
                type: "paragraph",
                text: "The development of wooden rounds to deal with vampires was a no-brainer and versions have been field-tested and improved upon since the early 1900’s—well before WWII. The bullets are made of compressed fibers formed around a soft center of fresh mistletoe. The soft center heats up upon firing and builds up pressure within the hollow of the bullet, shredding on impact."
            },
            {
                type: "paragraph",
                text: "Technically, the bullets are cheap to manufacture, but VALKYRIE doesn’t use them with any frequency (and they’re so alarmingly low-tech that some claim use of Hod Rounds to be “embarrassing”). As such, it’s impossible to get more than what one dot allows, which is two full clips. A special request form can be filed if an agent feels he might need more than that for a raid or similarly large scale strike, but many hunters question where such requisition forms even go. A Task Force: VALKYRIE RFID chip is not needed to fire Hod Rounds."
            },
            {
                type: "heading",
                level: 2,
                text: "DON’T ASK QUESTIONS"
            },
            {
                type: "paragraph",
                text: "VALKYRIE agents often frown on low-tech, decidedly unadvanced Advanced Armory solutions like Hod Rounds. Having a handful of tarnished wooden bullets dropped into your palm doesn’t have the same potent resonance as being handed a rifle that fires uranium flechettes, right? Yes, Hod Rounds serve some utility and smart agents can see that. But that doesn’t stop agents from asking, why the mistletoe, exactly? Can’t you just make a Hod Round out of any type of wood?"
            },
            {
                type: "paragraph",
                text: "The real answer is no, you can’t. Mistletoe felled Balder. In Virgil, you find mistletoe associated with death, the underworld and supernatural might. It’s also been bound up with supposed miracle cures. Wood from other trees doesn’t seem to work. Mythological significance goes the extra mile, here."
            },
            {
                type: "paragraph",
                text: "Of course, VALKYRIE requisition agents won’t tell you that. Any agent asking such loaded questions will meet with the fairly standard response: “Don’t ask questions.”"
            }
        ],
        "Function": [
            {
                type: "paragraph",
                text: "Use of Hod Rounds in a weapon reduces its efficiency in most cases—any Dexterity + Firearms rolls made to use a weapon loaded with these wooden bullets suffers a -2 penalty. However, when used against vampires, Hod Rounds have two notable bonuses. The first is that due to the bullet shredding into splinters on impact, half of the damage done (round down) to a vampire can be converted to lethal upon impact. Also, if a hunter wishes to make an aimed shot to “stake” a vampire with Hod Rounds he suffers no penalty for the aimed shot as the bullet shreds (outside the -2 penalty noted above), improving the hunter’s chances of a splinter finding the heart. For more on staking rules see World of Darkness Rulebook pp. 165-166."
            }
        ],
        "RollResults": [],
        "Special": [],
        "Durability": "",
        "Size": "",
        "Structure": "",
        "Acceleration": "",
        "Safe Speed": "",
        "Maximum Speed": "",
        "Handling": "",
        "Type": "",
        "Damage": "",
        "Ranges": "",
        "Capacity": "",
        "Weapon Size": "",
        "ItemSpecial": ""
    },
    {
        "Name": "Huginn Visor",
        "Rating": "•• or •••",
        "Description": "Treated sunglasses (••) or contacts (•••) which impair sighted perception by -2, but impose a similar penalty to mind-altering powers that require eye contact.",
        "Book": "NS 136",
        "Content": [
            {
                type: "paragraph",
                text: "Vampires seem to have no end of abilities to sway the minds and will of mankind at their disposal. There is one drawback, however, and that is a seeming need for eye contact—the window of the soul, so to speak—on the part of the vampire. That’s where the Huginn Visor comes in, made of a dark, reflective glass that makes such contact nearly impossible. Civilian issue sunglasses prove ineffective against the powers of the enemy, so much so that an agent would not trust his cell’s integrity to simply wearing dark sunglasses. Doubly so considering the kinds of sensitive information Task Force: VALKYRIE agents are privy to. The solution lies in just the right combination of polarization and treatment with strange “chemicals.” Field agents used to joke the stuff comes from the wings Top Brass pulled off of faeries. They aren’t far off."
            },
            {
                type: "paragraph",
                text: "The primary style of Huginn visor is innocuous enough to be worn in the field, and lends weight to the image of the prototypical Man in Black. Little do civilians know just how important those dark glasses can be."
            },
            {
                type: "paragraph",
                text: "The two-dot version is the sunglasses. A three-dot version actually represents a contact lens variant. This variant is stealthier, not to mention with a swift swipe a vampire can knock a pair of glasses off a hunter’s head. However, the lenses are slightly less efficient (see below)."
            }
        ],
        "Function": [
            {
                type: "paragraph",
                text: "If a monster’s mind-altering Dread Powers (such as Fury, or Sleep) necessitate eye contact, the creature suffers a -3 penalty when used against an agent equipped with the two-dot sunglasses variant, and -2 dice if the agent is equipped with the three-dot contact lens variant. Note that both versions of the Huginn Visor can damage an agent’s ability to see in poorly-lit areas—in such places, the wearer suffers -2 to all sight-based Perception rolls."
            }
        ],
        "RollResults": [],
        "Special": [],
        "Durability": "",
        "Size": "",
        "Structure": "",
        "Acceleration": "",
        "Safe Speed": "",
        "Maximum Speed": "",
        "Handling": "",
        "Type": "",
        "Damage": "",
        "Ranges": "",
        "Capacity": "",
        "Weapon Size": "",
        "ItemSpecial": ""
    },
    {
        "Name": "ICE: Interstices Calculation Expedient",
        "Rating": "•",
        "Description": "The Interstices Calculation Expedient detects traces of dimensional interstices open in the last 24 hours, for half a mile.",
        "Book": "C&C 82",
        "Content": [
            {
                type: "paragraph",
                text: "VALKYRIE has long posited the existence of interstitial terrain (see below for more information), but hasn’t been able to prove it—yes, some agents have experienced it, but the subjective experiences of individual hunters cannot be used as proof for anything."
            },
            {
                type: "paragraph",
                text: "Now, they have a device that tracks and records instances of interstitial terrain. The device is portable, though not easily concealable (the screen itself is about as big as an iPhone or GPS device, but the housing for the tracker necessitates a backpack that weighs about 30 lbs)."
            }
        ],
        "Function": [
            {
                type: "paragraph",
                text: "No roll is necessary to calculate the location of nearby interstices. It only tracks a half-mile radius, and only identifies instances of interstitial terrain that have appeared in an area within the last 24 hours. It identifies signature etheric traces, noting the residue. The screen features a GPS device, and the terrain is noted on the map via a blinking red pulse."
            }
        ],
        "RollResults": [],
        "Special": [],
        "Durability": "",
        "Size": "",
        "Structure": "",
        "Acceleration": "",
        "Safe Speed": "",
        "Maximum Speed": "",
        "Handling": "",
        "Type": "",
        "Damage": "",
        "Ranges": "",
        "Capacity": "",
        "Weapon Size": "",
        "ItemSpecial": ""
    },
    {
        "Name": "Logehamarr Personal Flamethrower",
        "Rating": "•••••",
        "Description": "A ranged heavy weapon anti-personnel flamethrower, resolved as a +0L long burst which inflicts a 4L gasoline burn on organic material. The Logehamarr's green flame immediately provokes vampires to flee.",
        "Book": "NS 136",
        "Content": [
            {
                type: "paragraph",
                text: "Fire is a great equalizer. It burns structures. It sears flesh. And some creatures, like nocturnal haemophages, are particularly susceptible to the element, possessed of an aversion that is both physical and supernatural. Said plainly, it burns them something unmerciful. All of this goes into making the Logehamarr Personal Flamethrower the ultimate offensive expression of Task Force: VALKYRIE."
            },
            {
                type: "paragraph",
                text: "Flamethrowers are not a modern creation. The 5th century Byzantine army would pump “Greek fire” through brass tubes at enemy forces. Modern-day flamethrowers are more advanced but still function the same way. They have three components: the fuel reserve, the gun housing and the ignition system. The fuel reserve contains a fuel mixture that produces almost the same effects attributed to the “Greek fire” used centuries ago. The fuel reserve also holds a pressure tank that pushes the fuel through the system. The gun housing controls the rate at which the fuel flows. The ignition system is at the end of the spray nozzle and ignites the fuel as it leaves the weapon. By strictest definition, flamethrowers do not shoot fire; they shoot liquid set aflame. This liquid can even be bounced off walls, so it can reach unseen areas. The Logehamarr Personal Flamethrower would appear to operate on the same principal as a traditional flamethrower, but the result is far different—especially when you consider the strange, green-hued flame that jets from the weapon’s tip."
            }
        ],
        "Function": [
            {
                type: "paragraph",
                text: "Traditionally, flamethrowers are used to attack fortifications and bunkers. The Logehamarr Personal Flamethrower has been modified with the design of being more effective as an antipersonnel weapon. The Logehamarr Personal Flamethrower attack is resolved via a Dexterity + Firearms attack as a long burst of autofire with base Damage 0: the user gains a +3 bonus to his attack roll, and may attack multiple targets if he’s willing to suffer the required penalties (see the World of Darkness Rulebook, p. 160). Characters without a Heavy Weapons Specialty in Firearms take a -2 penalty to this roll. The burst of fuel emitted by a flamethrower is the size of a bonfire for the purposes of damage (Damage 2), and burns with the intensity of a gasoline fire when against mortal and other supernatural targets (+2 Damage bonus). Any character struck by a flamethrower attack is automatically set alight, and on the following and subsequent turns, he’ll continue to take as much damage as he took from the initial attack per turn until extinguished (see p. 180, World of Darkness Rulebook). The flame affects vampires a bit differently—it does aggravated damage to vampires, as does any exposure to fire, but even the sight of the strange green flame is enough to launch a vampire into an immediate fear frenzy. If the vampire can see the fire, then the vampire automatically enters a fear frenzy, and desperately tries to escape the scene. (See “Frenzy,” p. 163.)"
            }
        ],
        "RollResults": [],
        "Special": [],
        "Durability": "int",
        "Size": "",
        "Structure": "",
        "Acceleration": "",
        "Safe Speed": "",
        "Maximum Speed": "",
        "Handling": "",
        "Type": "flamethrower",
        "Damage": "0",
        "Ranges": "10/20/40",
        "Capacity": "5",
        "Weapon Size": "4",
        "ItemSpecial": "Strength 3"
    },
    {
        "Name": "Mjolnir Cannon",
        "Rating": "•••• or •••••",
        "Description": "+0 heavy rifle electrocutes on a successful attack for 6B, 8B, or 4L damage at Range 100. With five dots, a vehicle-mounted cannon can also be set to deal 10B or 5L damage, at Range 300 and with a longer-lasting battery.",
        "Book": "HTV 156",
        "Content": [
            {
                type: "paragraph",
                text: "When facing off against the unnamed horrors of the night, Task Force: VALKYRIE agents find it comforting to know they are armed with such stalwarts of high technology as “ray guns.” The Mjolnir Cannon may not be quite on par with Hollywood’s offerings, but it packs a wallop that can put down rioting humans and fanged monstrosities with equal ease. This weapon, which resembles an exceptionally bulky assault rifle (Size 3), operates by firing an intense, high-frequency laser beam that ionizes the air, creating a channel of extremely conductive plasma. The gun then sends an electrical charge into this channel, and the ionized air carries the charge to its target and delivers a long-range, high-impact shock."
            }
        ],
        "Function": [
            {
                type: "paragraph",
                text: "The Mjolnir Cannon operates like a normal firearm, with a few exceptions, as described below."
            },
            {
                type: "line",
                label: "Dice Pool",
                text: "Dexterity + Firearms."
            }
        ],
        "RollResults": [
            {
                type: "line",
                label: "Dramatic Failure",
                text: "The gun backfires, delivering its full charge to the wielder instead of the target."
            },
            {
                type: "line",
                label: "Failure",
                text: "The beam misses its target and inflicts no damage."
            },
            {
                type: "line",
                label: "Success",
                text: "The Mjolnir Cannon inflicts bashing damage from electricity on its target. As long as a single success is rolled, the target takes the full damage from the weapon. The man-portable version of the Mjolnir Cannon can be set to one of three settings, inflicting either 6 or 8 points of bashing damage, or 4 points of lethal damage."
            },
            {
                type: "line",
                label: "Exceptional Success",
                text: "In addition to taking bashing damage, the target loses its next turn."
            }
        ],
        "Special": [
            {
                type: "paragraph",
                text: "A Mjolnir Cannon has a battery rated for 16 shots before depletion. The more damaging settings consume more power; inflicting 6 bashing counts as 2 shots, and 8 bashing damage or 4 lethal costs 4 shots."
            },
            {
                type: "paragraph",
                text: "The Mjolnir Cannon has a range of 100/200/400."
            },
            {
                type: "paragraph",
                text: "A larger, vehicle-mounted version of the Mjolnir Cannon also exists, costing 5 Merit dots. The vehicle-mounted cannon is seldom issued to urban strike teams, due to its lack of concealment, but in rural areas or regions already gripped by war, it can provide vital tactical support. The vehicle-mounted version works just like its smaller cousin, with the following exceptions: the weapon has two additional settings, inflicting 10 bashing or 5 lethal damage, respectively. The range of the vehicle-mounted cannon is 300/600/1,200, and its battery holds the capacity for 50 shots. The 10 bashing setting counts as 8 shots, while 5 lethal counts as 16."
            },
            {
                type: "paragraph",
                text: "The Mjolnir Cannon is essentially man-made lightning; while that makes it a potent tool on the battlefield, it can interact dangerously when actual lightning is brought into the mix. The plasma channel created by the cannon attracts lightning; whenever the weapon is used in a thunderstorm, treat any failed attack roll as a dramatic failure to represent an errant bolt finding the plasma channel and following it back to the hapless hunter."
            }
        ],
        "Durability": "",
        "Size": "",
        "Structure": "",
        "Acceleration": "",
        "Safe Speed": "",
        "Maximum Speed": "",
        "Handling": "",
        "Type": "",
        "Damage": "6B/8B/4L",
        "Ranges": "100/200/400",
        "Capacity": "16",
        "Weapon Size": "3",
        "ItemSpecial": ""
    },
    {
        "Name": "Munin Serum",
        "Rating": "••••",
        "Description": "Renewable. Six hours' worth of an injectible amnestic that suppresses stretches of recent memory, contesting 7 dice against the subject's Stamina + Composure.",
        "Book": "HTV 155",
        "Content": [
            {
                type: "paragraph",
                text: "No matter how black the black ops or how covert the covert strike team, on occasion, witnesses to Task Force: VALKYRIE operations survive the initial fracas. Sometimes it’s a bystander in the wrong place at the wrong time, sometimes it’s the newly freed victim of a possessing entity or the liberated thrall of a warlock. Sometimes, those witnesses start to ask awkward questions. Since secrecy is one of the organization’s paramount directives, the silence of these witnesses must be guaranteed. In the old days, that meant a couple of ounces of lead in the back of the head; nowadays, VALKYRIE operatives prefer to use less messy alternatives."
            },
            {
                type: "paragraph",
                text: "Munin serum — or, as it’s more colloquially known, “memory cleanser” or “Brain-O” — is a cocktail of narcotics, psychedelics and memory-inhibitor drugs that can completely suppress the last six hours of a subject’s memory. Extensive application of the drug can lead to addiction, illness and even death. New VALKYRIE recruits are frightened with campfire tales of agents who injected themselves with Munin serum to forget the horrific things they’d seen, only to end up wasted, cancer-ravaged addicts desperately jonesing for a taste of the high they can never quite remember."
            }
        ],
        "Function": [
            {
                type: "paragraph",
                text: "Munin serum must be administered by injection directly into the spinal column just below the cervical vertebrae. The process is excruciatingly painful and subjects are usually sedated before being treated. If an agent wishes to administer Munin serum to an aware and unwilling target, he must first successfully grapple his target. Once the target is held securely, he must succeed on a Strength + Medicine “attack” at a -2 penalty (the actual penalty is -3 for targeting the victim’s head, but Task Force: VALKYRIE distributes Munin serum in large, sturdy hypodermics that count as +1 weapons)."
            },
            {
                type: "paragraph",
                text: "As long as the hunter scores at least one success on this attack, he may dose the target. Each dose affects one hour of the subject’s memory; a single syringe of the serum contains six doses. (Each instance of the Munin Syndrome Merit buys the hunter one syringe.) When the serum is injected, the subject’s player rolls Stamina + Composure in a contested action against a dice pool of 7, representing the serum’s potency. If the subject rolls more successes, she is left woozy and disoriented, as though she had taken a potent (-3) hallucinogen (see The World of Darkness Rulebook, p. 176). If the serum rolls more successes, the character’s memory is wiped out for an amount of time corresponding to the number of doses injected. Only one resistance roll is made, no matter how many doses are injected. The subject experiences the memory loss as a similar sensation to an alcohol-induced blackout. Some refer to it as “lost time.”"
            }
        ],
        "RollResults": [],
        "Special": [
            {
                type: "paragraph",
                text: "If an individual is subject to a number of doses of Munin serum greater than her Stamina within a week or less, the toxic side effects of the drug build up to critical levels and the subject is treated as though she had ingested a poison with a Toxicity of 7 (World of Darkness Rulebook, p. 180)."
            },
            {
                type: "paragraph",
                text: "If a subject is given more doses of Munin serum than her Stamina over the course of a month without triggering the overdose described above, she must succeed on a Stamina + Resolve roll or develop the Addiction Flaw focused on the serum."
            },
            {
                type: "paragraph",
                text: "The Munin Serum Merit is Renewable; once per story per instance of the Merit a hunter possesses, Task Force: VALKYRIE will resupply him with a syringe of Munin Serum."
            }
        ],
        "Durability": "",
        "Size": "",
        "Structure": "",
        "Acceleration": "",
        "Safe Speed": "",
        "Maximum Speed": "",
        "Handling": "",
        "Type": "",
        "Damage": "",
        "Ranges": "",
        "Capacity": "",
        "Weapon Size": "",
        "ItemSpecial": ""
    },
    {
        "Name": "Odin Reticle",
        "Rating": "•••",
        "Description": "Requires Huginn Visor ••. LCD overlay affixed to the Huginn Visor grants +3 to perceive monsters through stealth and evasive powers.",
        "Book": "NS 136",
        "Prerequisite": "Huginn Visor (••)",
        "Content": [
            {
                type: "paragraph",
                text: "The Huginn Visor (two-dot sunglasses variant only) can be outfitted with a small LCD attachment called an Odin Reticle. This little display overlays one eye and its purpose is to pierce the supernatural stealth possessed by vampiric and other ENEs. Intel suggests vampires are not capable of achieving true invisibility; rather they cloud the minds of pedestrians to overlook them. Just in case, R&D didn’t take any chances. Applying the Odin Reticle over one eye, an agent becomes capable of piercing any ENEs’ attempts to evade detection through a variety of techniques. The ENE will appear apparent in the eyepiece by way of a process called Resonant Afterimage Processing (RAP)."
            },
            {
                type: "paragraph",
                text: "Despite early successes, only a limited amount of Odin Reticle prototypes were made. Agents interested in field testing equipment should contact their superior officers for more information."
            }
        ],
        "Function": [
            {
                type: "paragraph",
                text: "The Odin Reticle snaps in place and remains largely concealed by the Huginn Visor. A thin cord runs back to the power source and processor that rests in the ear, no larger than a standard issue earpiece. Hunters equipped with an Odin Reticle gain a bonus of +3 on any dice roll attempting to detect vampiric and other ENEs using stealth- and evasion-based Dread Powers (such as Lurker in Darkness)."
            }
        ],
        "RollResults": [],
        "Special": [],
        "Durability": "",
        "Size": "",
        "Structure": "",
        "Acceleration": "",
        "Safe Speed": "",
        "Maximum Speed": "",
        "Handling": "",
        "Type": "",
        "Damage": "",
        "Ranges": "",
        "Capacity": "",
        "Weapon Size": "",
        "ItemSpecial": ""
    },
    {
        "Name": "Screamer Pistol",
        "Rating": "•••",
        "Description": "Low-frequency +3 sonic pistol disorients instead of dealing damage, preventing the target from focusing supernatural power for (target's Composure - successes + 1) turns.",
        "Book": "WF 125",
        "Content": [
            {
                type: "paragraph",
                text: "A witch who can’t concentrate can’t work magic. Quantifying and diverting etheric energy is hard, and fucking with someone’s head is much easier. The screamer pistol generates a beam of ultra-low frequency sound. At a distance, the low-frequency sound leads to hallucinations and altered states of consciousness as the vibrations interfere with the target’s inner ear. Up close the effects are more impressive, wrecking the target’s ability to concentrate. In some extreme cases, the vibrations hit the resonant frequency of the human bowel, causing it to empty — sometimes called the “brown note.” No mage can keep the mental image of a spell ready through that."
            },
            {
                type: "paragraph",
                text: "The pistol doesn’t just work on mages. (While it affects higher brain functions, it’s still pretty useless against werewolves — something in the sounds causes them to go frothing mad, like dogs hearing a certain pitch.) Anything with a sense of balance and coherent thought processes gets the full blast at range, but only living creatures with human bodies suffer the most extreme effects."
            }
        ],
        "Function": [
            {
                type: "paragraph",
                text: "A Screamer Pistol is a ranged weapon, subject to all normal rules for ranged combat. Attacking with the Screamer Pistol is a Dexterity + Firearms roll with a +3 modifier to represent the weapon’s equipment bonus. As a focused beam of sound, the pistol doesn’t deal damage."
            }
        ],
        "RollResults": [
            {
                type: "line",
                label: "Dramatic Failure",
                text: "The Screamer Pistol unleashes a burst of low-frequency sound without any focus. Anyone within five feet, including the wielder, suffers the effects of a success. Fixing the focusing apparatus needs five successes on an extended Intelligence + Crafts roll, with each roll representing one minute of work."
            },
            {
                type: "line",
                label: "Failure",
                text: "The beam misses the intended target, causing no ill effects."
            },
            {
                type: "line",
                label: "Success",
                text: "The target suffers strange hallucinations, and cannot concentrate for at least one turn. Compare the number of successes rolled to the target’s Composure. Each success above the victim’s Composure is one turn above the first in which the target cannot focus enough to use any supernatural powers. (If the successes are equal to or less than the target’s Composure, the victim still suffers that requisite one turn without powers.)"
            },
            {
                type: "line",
                label: "Exceptional Success",
                text: "In addition to any other effects, the target voids his bowels. The target suffers a -3 penalty to all Social rolls for the remainder of the scene."
            }
        ],
        "Special": [
            {
                type: "paragraph",
                text: "A Screamer Pistol has no effect on creatures that don’t have higher cognitive functions. Werewolves fly into a frenzy against the wielder when targeted due to their enhanced hearing."
            }
        ],
        "Durability": "",
        "Size": "",
        "Structure": "",
        "Acceleration": "",
        "Safe Speed": "",
        "Maximum Speed": "",
        "Handling": "",
        "Type": "",
        "Damage": "",
        "Ranges": "",
        "Capacity": "",
        "Weapon Size": "",
        "ItemSpecial": ""
    },
    {
        "Name": "Tranq Rounds",
        "Rating": "• to •••••",
        "Description": "Renewable. Shots deal one point of lethal damage and a stacking -1 penalty. A target at a high penalty must spend Willpower to remain conscious.",
        "Book": "Slash 160",
        "Content": [
            {
                type: "paragraph",
                text: "Tranquilizer bullets are at the cutting-edge of ballistics technology. Ten years from now, they could be available in gun shops, but until the rounds can be mass produced, VALKYRIE keeps a close track on them. Each bullet is made of the same frangible polymer used in Glaser rounds, but containing a gel-suspension of tranquilizers that are quickly absorbed through the skin and into the body."
            }
        ],
        "Function": [
            {
                type: "paragraph",
                text: "Tranq Rounds do little appreciable damage. Against objects, they are useless. Against living targets, a successful roll deals only one point of lethal damage, no matter how many successes were scored on the attack. Every hit also delivers a potent tranquilizer that gives the target a -1 penalty to all rolls. Once the target’s penalties from the tranquilizer are equal to his Stamina, he must spend a point of Willpower or lose consciousness. If he remains active, each further hit with a Tranq Round requires another Willpower expenditure. The negative modifier wears off after 10 minutes, but a target rendered unconscious remains in that state for at least half an hour."
            }
        ],
        "RollResults": [],
        "Special": [
            {
                type: "paragraph",
                text: "The Tranq Rounds Merit is Renewable; for each dot the character has in this Merit, Task Force: VALKYRIE supplies him with one clip of Tranq Rounds for a specific weapon type (e.g. MP-5, Glock 19) every session."
            },
            {
                type: "paragraph",
                text: "A character may purchase multiple instances of Tranq Rounds, each specifying a different weapon. For example, an assault team leader might have Tranq Rounds (AR-15) ••• and Tranq Rounds (P90) ••; every session, he has three magazines worth of tranquilizer ammo for his AR-15 and two magazines for his P90."
            },
            {
                type: "paragraph",
                text: "Tranq Rounds, unlike most Advanced Armory Merits, can be used by anyone, even if they lack a Task Force: VALKYRIE RFID chip."
            }
        ],
        "Durability": "",
        "Size": "",
        "Structure": "",
        "Acceleration": "",
        "Safe Speed": "",
        "Maximum Speed": "",
        "Handling": "",
        "Type": "",
        "Damage": "",
        "Ranges": "",
        "Capacity": "",
        "Weapon Size": "",
        "ItemSpecial": ""
    },
    {
        "Name": "Urban Response Vehicle",
        "Rating": "•••••",
        "Description": "Armored vehicle disguised as a van, armed with a mounted +5L heavy machinegun, and powered by an electric generator. Cell members may pool Merit dots for the URV and enhance it by purchasing integrated Etheric Rounds, Etheric Goggle windows, a mounted Bleeder, an Equalizer Grenade Launcher, the Gungnir System, or a mounted Mjolnir Cannon.",
        "Book": "SpSl 145",
        "Content": [
            {
                type: "paragraph",
                text: "Though it’s difficult to drive an armored car through town and not draw attention, the fact is that some jobs and locations require a more forceful and timely response than others. Recently put into limited production, the Urban Response Vehicle (URV) provides Task Force: VALKYRIE members with light armored vehicle capability disguised as a standard full-sized van. As the name implies, the URV was designed for covert urban operations and would require some serious overhauling for use off-road."
            }
        ],
        "Function": [
            {
                type: "paragraph",
                text: "Every TF:V member of a cell may contribute towards the Merit cost of the URV in the same way a cell would cooperate to construct a Safe House (see Hunter: The Vigil, p. 70)."
            },
            {
                type: "paragraph",
                text: "Standard features of the URV include onboard computer and GPS, bullet-proof glass, RFID locks (the normal locks are dummies), military winch, run-flat tires (each blown tire only imposes a -1 penalty to Drive rolls and a 10% speed penalty), and police cruiser type search lights. It is equipped with air conditioning and internal oxygen supply (the URV can quickly be rigged to operate as air-tight), an overcharged engine, and enough juice from a mini-generator to power all of the features and any add-ons. The vehicle sports concealed armor plating that makes the URV nearly invulnerable to small arms fire and was designed to transport one driver, three passengers and one gunner."
            },
            {
                type: "paragraph",
                text: "The standard package also comes with a “pop-up” .50 caliber machine gun. To operate, the gunner seats himself in the gunner chair, pushes a button, the roof of the vehicle slides open and the .50 cal is elevated via hydraulic lift to a height even with the top of the URV. The machine gun uses both a swivel mount and pedals to achieve an 180 degree field of fire, which requires additional training (any gunner that fires the .50 cal, or replacement weapons, without a Heavy Weapons specialty for Firearms suffers the untrained penalty). The .50 cal comes with a casing catcher as standard. If purchased as an option, the pintle-mounted Bleeder (see below) unfolds from the front passenger side roof and unlocks a hatch that allows a standing passenger to operate the weapon. The .50 cal has the following statistics."
            },
            {
                type: "paragraph",
                text: "In addition to the onboard features, an URV can be further enhanced for field work by investing in up to a maximum of 10 Merit dots worth of options. The following items from the Advanced Armory Endowment are available as options for the URV: Etheric Rounds (replaces standard .50 cal ammunition), Etheric Windows (functions exactly like Etheric Goggles, may be toggled on and off by voice command), pintle-mounted Bleeder (operated by passenger), Equalizer Grenade Launcher (co-axial mount on the .50 cal), Gungnir System (may be added to any weapon), vehicle-mounted Mjolnir Cannon (replaces standard .50 cal machine gun)."
            },
            {
                type: "line",
                label: "Example",
                text: "A cell wishes to add a Mjolnir Cannon and Etheric Windows to the URV. The total Merit cost would be 12 (five for the URV, five for the Mjolnir Cannon and two for the Etheric Windows)."
            },
            {
                type: "line",
                label: "Drawback",
                text: "Even with a casing catcher to gather up spent shells, firing a .50 cal machine gun downtown is apt to attract some attention. The machine gun is included as an “oh shit” weapon to help cover retreats and take down serious opposition when unwanted attention is preferable to the continued existence of a large and scary monster."
            }
        ],
        "RollResults": [],
        "Special": [],
        "Durability": 8,
        "Size": 16,
        "Structure": 24,
        "Acceleration": 15,
        "Safe Speed": "110 (75 mph)",
        "Maximum Speed": "176 (120 mph)",
        "Handling": "1",
        "Type": "HMG",
        "Damage": "5 (8 again)",
        "Ranges": "300/600/1200",
        "Capacity": "50",
        "Weapon Size": "5",
        "ItemSpecial": "Autofire"
    },
    {
        "Name": "VDSB",
        "Rating": "•••",
        "Description": "The Victim-Detonated Sun Bomb can be armed and concealed with Wits + Crafts. When triggered, it discharges a stunning flash which scatters monsters who flee sunlight.",
        "Book": "HTV 154",
        "Content": [
            {
                type: "paragraph",
                text: "Ever since Murnau’s Nosferatu, the knowledge that vampires are destroyed by the light of the sun has entered the pop culture lexicon, along with wooden stakes, crosses and garlic (never mind that, as far as Task Force: VALKYRIE has been able to determine, two of those are complete nonsense). While VALKYRIE’s scientists have not yet found the key component of sunlight that causes such deleterious effects on the bloodsuckers, they have developed the next best thing."
            }
        ],
        "Function": [
            {
                type: "paragraph",
                text: "The VDSB (Victim-Detonated Sun Bomb) is an explosive device that is rigged to trigger via an infrared sensor and thermal imager; when an object with a core temperature of less than 94°F breaks the infrared beam, the device is triggered. Instead of an explosion, the VDSB (which looks like a generic satchel charge but contains far more complex innards) uses a combination of full-spectrum phosphorescent lights and focusing mirrors to create a blinding flash that is, from an electromagnetic standpoint, identical to sunlight. While the light doesn’t actually harm vampires, it can cause a surge of panic that overwhelms their rational mind and leads them to make tactical errors."
            },
            {
                type: "paragraph",
                text: "Arming the device is simple enough, necessitating success on an instant Wits + Crafts roll. However, unless operating in total darkness, the VDSB must also be concealed, necessitating six successes on an extended Wits + Crafts roll, with each roll representing 10 minutes’ worth of work. Disarming the bomb is more time-consuming, requiring six successes on a Wits + Crafts roll, with each roll representing one minute of work. Disarming the bomb is more difficult, requiring six successes on a Wits + Crafts roll, with each roll representing one minute of work. Once the tampering process starts, though, the disarmer only has four minutes, or four rolls, in which to disarm the device. Once that time ticks down, the device detonates if it hasn’t been neutralized."
            },
            {
                type: "paragraph",
                text: "Against humans and monsters not afraid of sunlight, the VDSB is treated as an ordinary explosive. It has a “Damage” of 4, but damage is only rolled to determine whether or not the target is Stunned. Remember that to calculate an explosive’s damage, you roll a number of dice equal to the Damage, in this case 4, and add the successes to the base Damage rating (see The World of Darkness Rulebook, p. 178). Blind characters and creatures without eyes are unaffected."
            },
            {
                type: "paragraph",
                text: "When a vampire or other creature vulnerable to bright light is caught within the area of a VDSB, the effects are far more pronounced. The vampire’s player must immediately make an extended Resolve + Composure roll, with each roll representing one turn. Each turn in which the vampire’s player rolls at least one success, he maintains his composure for one further turn. If at any time the vampire fails to gain any successes on a roll, he flies into a frenzy of fear in which his only objective is to flee from the source of the light. He will attack anyone who gets in his way, but otherwise just tries to get away. If the vampire accumulates five successes on the extended roll, he shakes off the flight instinct and can act normally."
            }
        ],
        "RollResults": [],
        "Special": [
            {
                type: "paragraph",
                text: "A VDSB can only be used once before it must be refitted; the intensity of the flash burns out the light sources in a single use. Unlike the Equalizer grenade, a VDSB can be refitted in the field with a minimum of fuss. Refitting a Sig mine requires full spectrum lights available from most science-novelty or pet stores for a Resource cost of • and 15 successes on an extended Intelligence + Craft roll. Each roll represents 20 minutes of work."
            }
        ],
        "Durability": "",
        "Size": "",
        "Structure": "",
        "Acceleration": "",
        "Safe Speed": "",
        "Maximum Speed": "",
        "Handling": "",
        "Type": "",
        "Damage": "4",
        "Ranges": "",
        "Capacity": "",
        "Weapon Size": "",
        "ItemSpecial": ""
    },
    {
        "Name": "Witch Buster",
        "Rating": "•",
        "Description": "Device uses a lithium battery to radiate energies that register to paranormal senses.",
        "Book": "HTV 151",
        "Content": [
            {
                type: "paragraph",
                text: "Many of the creatures Task Force: VALKYRIE hunts display an unusual degree of sensitivity to psychic phenomena. Witches seem to be the most adept at this sort of thing, displaying an uncanny knack for poking their noses into supernatural affairs that should be invisible to mere mortals. As witches are also among the most difficult antagonists to identify, VALKYRIE scientists developed a sort of psychic booby trap to identify potential hostiles. Official rules of engagement state that the “witch buster” is to be used to flush out known quarry that has gone to ground, but field teams often engage in a game variously referred to as “wizard baiting” or “fishing for Potters,” in which a witch buster is set up in a public but discreet location and anyone who drops by to have a look is tagged and monitored. Ever since a Glaswegian cell went a little off the reservation back in ’98 and just started killing everyone that poked around the witch buster, this tactic is expressly forbidden by VALKYRIE doctrine."
            }
        ],
        "Function": [
            {
                type: "paragraph",
                text: "The witch buster is roughly the size and shape of a hockey puck, with a sticky adhesive backing that allows it to be mounted on walls or ceilings. Powered by an ordinary lithium-ion battery, the kind that can be purchased at any cell phone store, the witch buster slowly but persistently leaks a small amount of etheric energy — theoretically, not enough to be harmful (although quite a few field agents swear otherwise), but enough to register on a witch’s psychic radar. In game terms, the witch buster triggers a witch’s Unseen Sense Merit (see The World of Darkness Rulebook, p. 109)."
            },
            {
                type: "paragraph",
                text: "Because their Unseen Sense Merit registers any type of supernatural disturbance, mages are the most likely to perceive a witch buster, but any character with an Unseen Sense Merit relating to ghosts, spirits, or Twilight phenomena will sense a witch buster. Supernatural powers or spells that sense disturbances in Twilight or detect ghosts or spirits will also register the witch buster as an odd, not-immediately-explicable twinge."
            },
            {
                type: "paragraph",
                text: "A witch buster has eight hours of battery life before it must be recharged. Three successes on an extended Intelligence + Crafts roll, with each roll representing 10 minutes of work, allows a hunter to tap into a building’s electrical wiring and hook the witch buster in, allowing it to operate as long as the building has power."
            }
        ],
        "RollResults": [],
        "Special": [],
        "Durability": "",
        "Size": "",
        "Structure": "",
        "Acceleration": "",
        "Safe Speed": "",
        "Maximum Speed": "",
        "Handling": "",
        "Type": "",
        "Damage": "",
        "Ranges": "",
        "Capacity": "",
        "Weapon Size": "",
        "ItemSpecial": ""
    }
]

const benedictionOverviewData = {
    "Name": "Benediction",
    "Content": [
        {
            "type": "paragraph",
            "text": "Drawn from ancient Catholic rites that predate the Council of Nicea and from secret invocations encoded into the New Testament, Benedictions give the witch-hunters of the Malleus Maleficarum the righteous might to strike down the servants of Satan that lurk in the darkness. By invoking the name of the One True God and His Son Jesus Christ, and by pleading for the intercession of the saints, the Malleus Maleficarum can call down fire from heaven, steel their hearts against the terrors of the night and draw the poison of demonic possession from the souls of the righteous."
        },
        {
            "type": "paragraph",
            "text": "Benediction rituals have no levels associated with them; as long as a character has at least one dot of Benediction, he may, theoretically, learn any and all rituals by investing the time and experience points. At character creation, he learns one ritual per dot of the Benediction Merit."
        },
        {
            "type": "paragraph",
            "text": "New Benediction rites may be purchased at a cost of five experience points per ritual. It takes one week to acquire a new Benediction, and the rite can only be gained through intense teaching and prayer."
        },
        {
            "type": "paragraph",
            "text": "The activation of Benedictions varies from ritual to ritual, but all have the following common modifiers:"
        },
        {
            "type": "table",
            "title": "Suggested Modifiers",
            "headers": ["Modifier", "Situation"],
            "rows": [
                ["-3", "Ritualist’s Morality is 3 or less"],
                ["-1", "Ritual incorporates no overt shows of faith"],
                ["+1", "Ritualist is an ordained priest, monk or nun"],
                ["+1", "Ritualist’s Morality is 8 or higher"],
                ["+2", "Ritual incorporates the sacraments"],
                ["+5", "Ritual is performed on the appropriate saint’s feast day (see individual Benedictions)"]
            ]
        },
        {
            "type": "heading",
            "level": 2,
            "text": "“MORTAL?”"
        },
        {
            "type": "paragraph",
            "text": [
                "The term ",
                {
                    "text": "mortal",
                    "italic": true
                },
                " means anything that looks like a human, acts like a human and can die like a human. For purposes of this game, all hunters, no matter how strangely they are made, are considered “mortal.” So are most witches, cultists and slashers. Demons, fairies, Reanimated, vampires and werewolves are not considered “mortal” for purposes of determining system effects."
            ]
        }
    ]
}

const benedictionData = [
    {
        "Name": "The Apostles' Teachings",
        "Cost": "—",
        "Dice Pool": "Composure + Benediction",
        "Description": "Instead of recovering Willpower from your Virtue, distribute your Resolve + Composure in Willpower among mortal allies.",
        "Book": "HTV 157",
        "Content": [
            {
                "type": "paragraph",
                "text": "According to the Bible, Jesus told his Apostles to go forth and spread the word of the faith, teaching not by forced conversion or sermonizing, but by example: the Apostles, much like hunters, cured the sick, drove out demons and ministered to the people. Today, the Malleus Maleficarum holds to those same teachings. By invoking the favor of the Twelve Apostles, a hunter may inspire others through her own good works, showing the spiritual rewards of virtue and rightness."
            }
        ],
        "fullCost": "None.",
        "Action": "Reflexive.",
        "fullDicePool": "Composure + Benediction.",
        "Effect": [
            {
                "type": "paragraph",
                "text": "This Benediction is invoked as a reflexive action when the hunter regains Willpower by fulfilling her Virtue. She does not have to use this Benediction if she does not wish to, but she may only use it if she has not already regained Willpower by fulfilling her Virtue (or used this Benediction) during the current chapter."
            }
        ],
        "RollResults": [
            {
                "type": "line",
                "label": "Dramatic Failure",
                "text": "The hunter gains no benefit from fulfilling her Virtue. She regains no Willpower and cannot bestow Willpower on others."
            },
            {
                "type": "line",
                "label": "Failure",
                "text": "The hunter regains Willpower for fulfilling her Virtue but cannot bestow those points on others."
            },
            {
                "type": "line",
                "label": "Success",
                "text": "Instead of regaining Willpower herself when she fulfills her Virtue, the hunter gains a pool of Willpower points equal to her maximum Willpower, which she may allocate to any mortal characters in line of sight. She may give as many points as she likes to one character, or may spread the points out to many characters, but she cannot take any points for herself and she cannot increase a character’s current Willpower total beyond its maximum."
            },
            {
                "type": "line",
                "label": "Exceptional Success",
                "text": "As a success, but the hunter may allocate points to herself and may increase a character’s Willpower point total beyond its maximum. This extra Willpower point vanishes at the end of the scene if unspent."
            }
        ],
        "Potential Modifiers": [
            {
                "type": "table",
                "title": "Suggested Modifiers",
                "headers": ["Modifier", "Situation"],
                "rows": [
                    ["+1", "Character’s Virtue is Faith"],
                    ["+5", "Benediction is performed on June 29th (feast day of St. Peter and St. Paul)"]
                ]
            }
        ],
    },
    {
        "Name": "Armor of St. Martin",
        "Cost": "○",
        "Dice Pool": "Stamina + Benediction",
        "Description": "Apply Benediction as Armor for a scene.",
        "Book": "HTV 158",
        "Content": [
            {
                "type": "paragraph",
                "text": "In the constant battle against the minions of Satan, the Malleus Maleficarum must stand ever ready. Since the modern world frowns upon the wearing of riot vests by the general population, many hunters offer their prayers to St. Martin of Tours, the patron saint of soldiers, to watch over them and protect them. Uttered before going into battle, the prayer of the Armor of St. Martin has saved many hunters’ lives."
            }
        ],
        "fullCost": "1 Willpower.",
        "Action": "Instant.",
        "fullDicePool": "Stamina + Benediction.",
        "Effect": [
            {
                "type": "paragraph",
                "text": "The Armor of St. Martin lasts for one scene."
            }
        ],
        "RollResults": [
            {
                "type": "line",
                "label": "Dramatic Failure",
                "text": "The hunter’s prayers are not sufficiently sincere; not only does he not receive St. Martin’s protection, but he also suffers a -1 penalty to his Defense for the rest of the scene."
            },
            {
                "type": "line",
                "label": "Failure",
                "text": "The hunter does not gain the benefit of St. Martin’s blessing."
            },
            {
                "type": "line",
                "label": "Success",
                "text": "The hunter gains an Armor rating equal to his Benediction dots. This armor does not stack with mundane armor or other forms of supernatural armor, nor does it reduce the hunter’s Defense. The Armor of St. Martin does not protect against attacks that naturally inflict aggravated damage."
            },
            {
                "type": "line",
                "label": "Exceptional Success",
                "text": "The hunter may spend a Willpower point to downgrade the damage from a lethal wound to bashing. This effect only downgrades the base damage from the attack; it has no effect on damage that wraps around from a full Health chart."
            }
        ],
        "Potential Modifiers": [
            {
                "type": "table",
                "headers": ["Modifier", "Situation"],
                "rows": [
                    ["+1", "The hunter is fighting to defend helpless innocents"],
                    ["+5", "The Benediction is performed on November 11th (feast day of St. Martin of Tours)"]
                ]
            }
        ],
    },
    {
        "Name": "The Binding of St. Amabilis",
        "Cost": "○",
        "Dice Pool": "Presence + Benediction",
        "Description": "While you sing praises, werewolves who listen cannot benefit from supernatural healing.",
        "Book": "SpSl 147",
        "Content": [
            {
                "type": "paragraph",
                "text": "Amabilis of Riom served as a cantor at the church of St. Mary at Clermont. Revered as the patron saint against (among other things) demonic possession and wild beasts, his image is that of a bishop listening to an angel playing music. The brethren of the Malleus Maleficarum have found the invocation of the saint’s name works to weaken the demonic possession purportedly responsible for werewolves."
            }
        ],
        "fullCost": "1 Willpower",
        "Action": "Instant",
        "fullDicePool": "Presence + Benediction",
        "Effect": [
            {
                "type": "paragraph",
                "text": "By spending a point of Willpower and invoking the name of St. Amabilis, the hunter seeks to limit the superior regenerative properties of werewolves by binding the demons that possess them through the power of holy song. When working this Benediction, the hunter sings a wordless song of celestial praise that affects any werewolf that can hear it. The song is beautiful regardless of the normal capabilities of the singer and fills the hearts of his friends with peace. The hunter only needs to succeed on the instant roll once, but must keep up the singing. While he is concentrating on singing, the hunter may not attack, may only move at half his normal Speed, and his Defense is halved (round down). Any distractions that might cause a lapse in concentration (a werewolf biting him, for example) require the hunter to succeed at a Resolve + Composure roll to maintain concentration."
            }
        ],
        "RollResults": [
            {
                "type": "line",
                "label": "Dramatic Failure",
                "text": "The invocation is uttered without sufficient belief and the Benediction fails. This leads to a minor lapse in faith and all Benediction rolls suffer a -2 penalty until the hunter is able to receive the balm of confession."
            },
            {
                "type": "line",
                "label": "Failure",
                "text": "The binding fails."
            },
            {
                "type": "line",
                "label": "Success",
                "text": "For as long as the hunter concentrates, any werewolves that can hear the song lose their unnatural regenerative abilities and heal no faster than regular humans. While the music continues, werewolves may not heal themselves or each other by any means."
            },
            {
                "type": "line",
                "label": "Exceptional Success",
                "text": "The above effects continue for 24 hours even after the hunter stops concentrating."
            }
        ],
        "Potential Modifiers": [
            {
                "type": "table",
                "headers": ["Modifier", "Situation"],
                "rows": [
                    ["-3", "Performed in a noisy area"],
                    ["+5", "Performed on All Saint’s Day (November 1)"],
                    ["+2", "Performed on holy ground"]
                ]
            }
        ],
    },
    {
        "Name": "Blessed Protection of St. Agrippina",
        "Cost": "○",
        "Dice Pool": "Resolve + Benediction",
        "Description": "Bless a physically demarcated area as an extended action to ward against supernatural beings. Such beings within the area subtract your Benediction from their effective Power Attributes, and without Presence cannot enter.",
        "Book": "HTV 159",
        "Content": [
            {
                "type": "paragraph",
                "text": "Those strong in the faith can expel demons from the bodies of the possessed and even force them to depart from a place, but even the righteous warriors of God must have their secret counsels, and it does no good to banish Satan’s spawn if they have already overheard your battle plans. By calling upon the blessings of the virgin martyr St. Agrippina, a hunter may create a safe space into which the creatures of the night cannot enter. Most cells of Malleus Maleficarum hunters have at least one member who knows this Benediction, and whose sacred duty it is to ensure that the group’s headquarters remains protected."
            },
            {
                "type": "heading",
                "level": 3,
                "text": "“MORTAL?”"
            },
            {
                "type": "paragraph",
                "text": "The term mortal means anything that looks like a human, acts like a human and can die like a human. For purposes of this game, all hunters, no matter how strangely they are made, are considered “mortal.” So are most witches, cultists and slashers. Demons, fairies, Reanimated, vampires and werewolves are not considered “mortal” for purposes of determining system effects."
            }
        ],
        "fullCost": "1 Willpower.",
        "Action": "Extended; each roll represents one minute of chanting and prayer. The Benediction may be “rushed,” reducing the time per roll to one turn at the cost of incurring a -1 penalty on the roll. The hunter must roll a number of successes equal to the number of square yards the blessing’s protection encompasses.",
        "fullDicePool": "Resolve + Benediction.",
        "Effect": [
            {
                "type": "paragraph",
                "text": "The Blessed Protection of St. Agrippina can be a general blessing that protects against all monsters, or it may be custom-tailored to affect only a single unholy blasphemy, but at greater potency. When creating a ward against a specific creature, the hunter does not need to know the name of the entity — an obvious designation, such as “the vampire who killed Maria Buchenwald” or “the demon that tempted me with wealth and power” is a sufficiently accurate description. Specific blessings protect against only that particular being, though. They have no effect on any other monster."
            },
            {
                "type": "paragraph",
                "text": "Each blessing must be tied to some sort of physical marker, such as a fence or a line of holy water sprinkled across the floor. If anyone or anything disturbs or makes an opening in this physical marker, the blessing instantly ceases to function. A character cannot bless an area that is more than 21 yards on a side; he can protect a small house and most of its yard, a large house or most of a warehouse, but not an entire office building or city block. The Blessed Protection of St. Agrippina is generally stationary; the only way to move the effect is to move the entire structure the blessing protects. Thus, it is possible to ward a house or even a car, but not an individual person (wards must affect an area, and most people don’t move the ground under their feet when they walk)."
            },
            {
                "type": "paragraph",
                "text": "The blessing has a Strength rating equal to its creator’s Benediction rating (or Benediction +1 for a blessing against one particular creature) that measures its ability to keep out Satan’s spawn. This score is subtracted from the Presence (or Power, for a ghost or spirit) of any affected monster that seeks to enter the area. If the entity’s Presence or Power would be reduced to zero, it cannot enter the blessed area. Otherwise, the creature can enter, but all of its Power Attributes (Strength, Intelligence and Presence) are reduced by the Strength of the blessing for the entire time the entity remains in the area. If any of these Attributes is reduced to 0, the monster cannot use any actions that rely on that Attribute. Monsters outside the blessed area that attempt to use supernatural powers to affect anyone or anything inside the blessed area are still subject to the blessing’s Strength. Monsters within the blessed area at the time of its casting (such as a vampire within its haven during the day) will endeavor to flee at any cost; inability to flee causes the monster to suffer the effects as noted above."
            },
            {
                "type": "paragraph",
                "text": "The Blessed Protection of St. Agrippina lasts for one full day if it is performed to ward off all supernatural entities, or for a week if its blessing works against a single creature. Multiple Blessed Protections of St. Agrippina do not stack; however, it is possible to lay a blessing against one particular entity and one against all monsters over the same area, or several separate blessings against different specific creatures. For example, a Malleus Maleficarum cell actively engaged in hunting down a particular cabal of witches might well maintain a separate ward against each member of the cabal, in addition to a general ward against all monsters, around its headquarters. An individual hunter may only have a single protection active at a time, thus, the example above requires the cooperation of the entire cell."
            },
            {
                "type": "paragraph",
                "text": "Although a monster may convince a mortal to remove or damage the physical markers that keep a blessing in place, such entities are completely incapable of affecting these physical markers directly, even if they could normally move or destroy them. A spirit affected by a Blessed Protection of St. Agrippina cannot make the area into an anchor while the protection is in place. A ward does not undo the connection between an entity and its anchor if the rite is performed on such an object, however. The spirit or ghost’s Power is still reduced by the blessing, but it remains in proximity to its anchor. Such a being whose Power is reduced to zero is forced into a sort of hibernation while the blessing is active, becoming dormant and inaccessible."
            }
        ],
        "RollResults": [
            {
                "type": "line",
                "label": "Dramatic Failure",
                "text": "An improperly performed ritual either draws spirits and ghosts to the location or grants such beings a temporary +1 to their Power when they are in the area."
            },
            {
                "type": "line",
                "label": "Failure",
                "text": "No progress is made toward blessing the area."
            },
            {
                "type": "line",
                "label": "Success",
                "text": "The character makes progress toward blessing the area with St. Agrippina’s protection."
            },
            {
                "type": "line",
                "label": "Exceptional Success",
                "text": "Not only is significant progress made toward completing the blessing, but the protected area’s Strength also gains a +1 bonus (Benediction + 1 for a general blessing, Benediction +2 for a blessing against a specific monster)."
            }
        ],
        "Potential Modifiers": [
            {
                "type": "table",
                "title": "Suggested Modifiers",
                "headers": ["Modifier", "Situation"],
                "rows": [
                    ["-1", "The area being blessed is devoted to some profane purpose (such as a strip club or crack house)"],
                    ["+1", "The area being blessed is consecrated ground"],
                    ["+5", "Benediction performed on June 23rd (Feast Day of St. Agrippina)"]
                ]
            }
        ],
    },
    {
        "Name": "The Boon of Lazarus",
        "Cost": "※",
        "Dice Pool": "None",
        "Description": "Lose a dot of Willpower to resurrect a recently dead mortal, who suffers a major derangement.",
        "Book": "HTV 160",
        "Content": [
            {
                "type": "paragraph",
                "text": "The greatest miracle Christ performed was the raising of Lazarus from his tomb after four days, showing himself to be the king of all life. By invoking the Apostolic right to raise the dead in Christ’s name, a righteous hunter can restore life to those who have recently died."
            }
        ],
        "fullCost": "1 Willpower dot.",
        "Action": "Instant.",
        "fullDicePool": "None.",
        "Effect": [
            {
                "type": "paragraph",
                "text": "No roll is required to activate this Benediction; the hunter merely touches the body of a fallen ally and commands him in the name of Christ to rise again. The hunter may only revive a character who has been dead a number of minutes equal to his Benediction rating. This Benediction has no effect on supernatural beings, and it cannot restore the undead to life. This resurrection restores all lost Health, returning the character to full Health, but the ritual cannot reattach missing body parts, and thus cannot be used on a body that has been decapitated or chopped in half; there must be enough of the target intact to maintain life."
            },
            {
                "type": "paragraph",
                "text": "The sheer spiritual effort of invoking this miracle costs a dot of Willpower; even then, the resurrection is imperfect. Those who are brought back return just a little bit...off. Any character who is resurrected by this Benediction automatically gains a major derangement. The Malleus Maleficarum attributes this to the shock of witnessing the Kingdom of God, but dark rumors spread of characters who have been subject to this Benediction repeatedly going completely mad. Some don’t see the Kingdom of God; they see the fiery Pit. Some kill themselves for good. Others become slashers — or, if the stories are to be believed, something even worse."
            }
        ],
        "RollResults": [],
        "Potential Modifiers": [],
    },
    {
        "Name": "The Casting Out of Witches",
        "Cost": "○",
        "Dice Pool": "Presence + Benediction",
        "Description": "Pray as an extended action to compel monsters to suffer mounting penalties or flee the vicinity for an hour.",
        "Book": "C&C 76",
        "Content": [
            {
                "type": "paragraph",
                "text": "The legend goes that St. Patrick cast the snakes out of Ireland, but Ireland never had snakes to begin with. What he did was cast out the Pelagian heresy, a heresy that rejected “original sin”—a heresy supposedly driven by a secret cabal of Gnostic mages."
            },
            {
                "type": "paragraph",
                "text": "This Benediction attempts to recreate—on a smaller level—the “casting out” of heresies. In this case, it’s used to cast out witches and mages, primarily, though it has effects on other monsters, as well."
            }
        ],
        "fullCost": "1 Willpower",
        "Action": "Extended (each roll is equivalent to ten minutes’ worth of prayer; the target number of successes is equal to five times the hunter’s own Benediction score).",
        "fullDicePool": "Presence + Benediction",
        "Effect": [],
        "RollResults": [
            {
                "type": "line",
                "label": "Dramatic Failure",
                "text": "The hunter’s voice is seared by damning flame; he loses his voice for the next 24 hours."
            },
            {
                "type": "line",
                "label": "Failure",
                "text": "The chanted prayer fails to conjure any meaningful effect."
            },
            {
                "type": "line",
                "label": "Success",
                "text": "Those monsters within a given range of effect (according to the hunter’s Benediction score, as below) are compelled to flee. They may fight to stay, but in doing so must take a cumulative -1 penalty per minute (maximum -5 dice). Witches are more deeply affected, and must spend a Willpower point to even consider remaining in the area of effect. The monsters will go out of their way to flee the radius of effect, even going so far as to incur minor (bashing) damage to do so. The power manifests to the targets as a sickly, greasy, impure feeling—waves of nausea, dizziness, headaches. (The Storyteller may require a Wits + Composure roll to even realize that they’re being supernaturally compelled before allowing the monster a chance to counter it with a Willpower point and/or a penalty.)"
            },
            {
                "type": "table",
                "headers": ["Benediction Score", "Area of Effect"],
                "rows": [
                    ["•", "50 yards"],
                    ["••", "100 yards"],
                    ["•••", "500 yards"],
                    ["••••", "1 mile"],
                    ["•••••", "10 miles"]
                ]
            },
            {
                "type": "paragraph",
                "text": "This only takes effect once the hunter has completed the prayer ritual (i.e. received the proper number of successes). Once in effect, it lasts for one hour."
            },
            {
                "type": "line",
                "label": "Exceptional Success",
                "text": "As above, but the duration is doubled (two hours)."
            }
        ],
        "Potential Modifiers": [
        ],
    },
    {
        "Name": "Epipodian Safeguard",
        "Cost": "○",
        "Dice Pool": "None",
        "Description": "Add Benediction as a bonus to resist mind control for a scene.",
        "Book": "HTV 159",
        "Content": [
            {
                "type": "paragraph",
                "text": "Satan’s servants are as subtle as they are powerful. Many are capable of warping a hunter’s mind, forcing her to betray her friends and allies. By invoking St. Epipodius, patron saint of the betrayed, a member of the Malleus Maleficarum can safeguard herself against such blasphemous arts. Through the power of faith, her soul remains pure and loyal."
            }
        ],
        "fullCost": "1 Willpower.",
        "Action": "Instant.",
        "fullDicePool": "None.",
        "Effect": [
            {
                "type": "paragraph",
                "text": "By spending a point of Willpower and uttering a prayer to St. Epipodius, the hunter gains a preternatural resistance to mental domination, be it by spell or possession or a more mysterious force. For the rest of the scene, she adds her Benediction rating to any Resistance Attribute rolled to contest any supernatural power that seeks to control her mind. This resistance does not apply against powers that merely affect her mind (such as a witch’s ability to conjure illusions or a demons ability to invoke terror), only those that would control her actions (such as demonic possession or a vampire’s dread gaze)."
            }
        ],
        "RollResults": [],
        "Potential Modifiers": [],
    },
    {
        "Name": "Fiacre's Staff",
        "Cost": "○",
        "Dice Pool": "Stamina + Benediction",
        "Description": "Bless an improvised weapon as a vampiric stake, removing its penalty and applying successes as a weapon bonus against the undead. Women perform a variant rite called the Benediction of the Rose.",
        "Book": "NS 138",
        "Content": [
            {
                "type": "paragraph",
                "text": "Saint Fiacre could reportedly turn fallow earth with the end of his staff and have it come to life as if tilled and gardened by a skilled hand. Other eyewitness accounts say he commanded boulders to move out of his way and off the grounds of his garden. This gift has since been refined into a weapon. The folklore of a wooden shaft through the heart forcing the damned to slumber or fall to dust finds root because vampires are a rejection of the natural order and God’s will. The touch of life is so accursed to them that contact with same is a terrible burden. The Staff of Saint Fiacre as a Benediction takes this aversion further to a degree that the abomination is rejected by all of God’s unspoiled creation."
            },
            {
                "type": "paragraph",
                "text": "Historically, Saint Fiacre banned women from his parish. Accordingly, access to this Benediction has long been forbidden among female members of the Malleus Maleficarum. While some within the Church still resist the more enlightened times of the modern world, women are no longer forbidden from achieving Status within this conspiracy. In an effort of compromise, there exists a version of this rite refined by the Brides of Christ and other female parishioners aligned with the Shadow Congregation. This version is known as the Benediction of the Rose after Saint Rose of Lima, whose dedication to Christ (as well as her love of tilled earth) was reportedly profound and unrivaled. The effects are the same and any and all changes are cosmetic at most."
            }
        ],
        "fullCost": "1 Willpower",
        "Action": "Instant",
        "fullDicePool": "Stamina + Benediction",
        "Effect": [
            {
                "type": "paragraph",
                "text": "Any object or material blessed with this Benediction may be used to cause harm to vampires and specifically can be used to pierce the heart with the same rules and effects as a wooden stake. Objects that work best include unforged iron, unalloyed metals, unprocessed wood, plant life and un-quarried stone. Those items are not quite as common as they were in the old days, and modern practitioners find cut stone and mildly refined materials to still be effective, if less so. An old fashioned fire poker, a marble urn, or pewter cane might suffer a penalty to the blessing but still effective. (Items made to serve as weapons to begin with cannot be blessed by this Benediction.). The item must still be sharp and sturdy enough to perform the act of staking or being used as a weapon. Blessing the object necessitates praying over it while using it to disturb any form of earth, even if the dirt is found in a window box or sandbag. It is, of course, altogether preferable to stay as true to the image of Father Fiacre or Sister Rose overturning God’s own soil."
            }
        ],
        "RollResults": [
            {
                "type": "line",
                "label": "Dramatic Failure",
                "text": "The Benediction backfires and the user find herself rejected by the very objects she intended on using. She takes one point of lethal damage as the item creates an intense heat the user cannot bear to handle."
            },
            {
                "type": "line",
                "label": "Failure",
                "text": "The invocation falls upon deaf ears and the selected object gains no benefits."
            },
            {
                "type": "line",
                "label": "Success",
                "text": "Items blessed by this Benediction ignore penalties for being used as improvised weapons and, in addition, gain a bonus on attacks against vampires or other forms of undead. The bonus is equal to successes gained on the Benediction roll (maximum of +5). This lasts for the remainder of the scene."
            },
            {
                "type": "line",
                "label": "Exceptional Success",
                "text": "As above; as a rather strange addition, lethal wounds caused by the blessed item often sprout flowers—roses, most commonly—only a few turns after the damage has been done."
            }
        ],
        "Potential Modifiers": [
            {
                "type": "table",
                "title": "Suggested Modifiers",
                "headers": ["Modifier", "Situation"],
                "rows": [
                    ["+5", "Fiacre’s Staff is performed on August 30 (Feast Day of Saint Fiacre)"],
                    ["+5", "Benediction of the Rose is performed on August 23 (Feast Day of Saint Rose of Lima)"],
                    ["-2", "Item is made of processed material"]
                ]
            }
        ],
    },
    {
        "Name": "Fortitude of St. George",
        "Cost": "—",
        "Dice Pool": "Composure + Benediction",
        "Description": "Gain bonus Stamina for a scene and go safely without food or sleep for (Benediction) days, after which you must sleep for 12 hours.",
        "Book": "HTV 160",
        "Content": [
            {
                "type": "paragraph",
                "text": "Best known for his slaying of the dragon in the city of Silene, St. George was also a Christian martyr slain by the Roman Emperor Diocletian. He endured tremendous torments and suffering, and the stoicism with which he bore it convinced the Empress Alexandra to convert to Christianity as well. The hunters of the Malleus Maleficarum venerate St. George as one of the first of their order in spirit, if not in formal membership, and they pray to him for the courage and strength to endure the torments of their own struggles with the Dragon. Hunters invoking this ritual sometimes report feeling a presence hanging over them, watching and silently judging. Tradition holds this to be the gaze of St. George, but some have described the presence as vaguely...other."
            }
        ],
        "fullCost": "None.",
        "Action": "Instant.",
        "fullDicePool": "Composure + Benediction.",
        "Effect": [],
        "RollResults": [
            {
                "type": "line",
                "label": "Dramatic Failure",
                "text": "The hunter’s prayers go unheeded. The spiritual shock of such a blow to her faith causes her to lose one Willpower. If she has no Willpower points left, she suffers a -1 to all dice pools for the rest of the scene."
            },
            {
                "type": "line",
                "label": "Failure",
                "text": "The hunter’s prayers fail to balm her soul."
            },
            {
                "type": "line",
                "label": "Success",
                "text": "St. George answers the hunter’s prayers, filling her with zeal and inner strength. She gains a dot of Stamina (which increases her Health trait by one, as well). This dot remains for one scene. She can also go a number of days equal to her Benediction score without eating or sleeping, though she still must supply her body with water. During this time, she suffers no ill effects at the hands of fatigue or deprivation. At the end of this period, she will fall into a deep 12-hour slumber from which she sleeps like the dead and cannot be awakened. A character cannot benefit from the Fortitude of St. George more than once per 24 hours."
            },
            {
                "type": "line",
                "label": "Exceptional Success",
                "text": "The hunter gains one additional dot of Stamina, even if that would take her above five dots."
            }
        ],
        "Potential Modifiers": [
            {
                "type": "table",
                "title": "Suggested Modifiers",
                "headers": ["Modifier", "Situation"],
                "rows": [
                    ["+5", "Benediction is performed on April 23rd (feast day of St. George)"]
                ]
            }
        ],
    },
    {
        "Name": "The Hands of St. Luke",
        "Cost": "○",
        "Dice Pool": "Intelligence + Benediction",
        "Description": "Lay hands upon the injured as an extended action, healing a point of bashing damage with one success or lethal damage with two.",
        "Book": "HTV 160",
        "Content": [
            {
                "type": "paragraph",
                "text": "Grievous wounds are all too common in the hunt, and often the injured warrior cannot be taken to a hospital. The soldier-priests of the Hammer of Witches know that the power of faith to heal the wounded is a greater tool than the scalpels and drugs of the modern doctor, and so they call on St. Luke the Evangelist to restore life and vigor."
            }
        ],
        "fullCost": "1 Willpower.",
        "Action": "Extended; each roll represents one minute of prayer and laying-on of hands.",
        "fullDicePool": "Intelligence + Benediction.",
        "Effect": [
            {
                "type": "paragraph",
                "text": "Successes rolled on the extended action go toward healing the characters. One success is required to heal a point of bashing damage, while two successes are required to heal a lethal wound. The healer need not declare a target number in advance, but the character may only make a number of rolls equal to his Morality."
            },
            {
                "type": "paragraph",
                "text": "In order to use this Benediction, the healer must lay at least one hand on the injured party. Skin-to-skin contact is necessary. If physical contact is broken, all accumulated successes are lost and the character must begin again. A character may not use this ritual upon himself."
            }
        ],
        "RollResults": [
            {
                "type": "line",
                "label": "Dramatic Failure",
                "text": "The injured character’s wounds are visited upon the healer in the form of stigmata. The healer suffers one point of lethal damage as blood erupts from his palms, feet, side and brow."
            },
            {
                "type": "line",
                "label": "Failure",
                "text": "No progress is made toward healing the injured character."
            },
            {
                "type": "line",
                "label": "Success",
                "text": "The injured character’s wounds begin to close through the power of God."
            },
            {
                "type": "line",
                "label": "Exceptional Success",
                "text": "In addition to tremendous progress being made, the Benediction downgrades one aggravated wound to lethal."
            }
        ],
        "Potential Modifiers": [
            {
                "type": "table",
                "headers": ["Modifier", "Situation"],
                "rows": [
                    ["+1", "The injured character’s Virtue is Faith"],
                    ["+5", "Benediction is performed on October 18th (feast day of St. Luke)"]
                ]
            }
        ],
    },
    {
        "Name": "La Langue des Saints",
        "Cost": "○",
        "Dice Pool": "Composure + Benedictionvs Resolve + Subterfuge",
        "Description": "Force a monster to honestly answer one question per threshold success.",
        "Book": "NS 138",
        "Content": [
            {
                "type": "paragraph",
                "text": "Vampires are quite familiar with the art of lies. Their every interaction with the living world is one grand deceit, a profound masquerade where behind every mask waits another mask. However, no lie escapes God’s sight and behind every lie is the dark seed of guilt. By invoking Saint Francis de Sales, hunters of the Malleus Maleficarum have found a way to ensure that seed grows into a tangle of catharsis among the lowly and the wretched."
            },
            {
                "type": "paragraph",
                "text": "A great peacemaker, converter and diplomat, Saint Francis has become a patron of confessors. By calling upon his name, the hunter can command the truth of vampires or similar abominations. Saint Francis himself guides the tongue of the foul target and all who are near can be sure the next answer it provides will be without deceit."
            }
        ],
        "fullCost": "1 Willpower",
        "Action": "Instant and contested",
        "fullDicePool": "Composure + Benediction versus target’s Resolve + Subterfuge",
        "Effect": [
            {
                "type": "paragraph",
                "text": "By spending a turn in prayer, the practitioner points and commands his target to speak true before God. The vampire must answer the hunter as truthfully as possible. Questioners should be careful to word their queries wisely. The undead are as accomplished at lying as the Devil himself."
            }
        ],
        "RollResults": [
            {
                "type": "line",
                "label": "Dramatic Failure",
                "text": "The Benediction backfires. Saint Francis has found deceit in the heart of the practitioner and taken offense to her demand for truth. She can tell no lies for 24 hours."
            },
            {
                "type": "line",
                "label": "Failure",
                "text": "No effect; the vile creature may continue to twist the truth as it pleases. The practitioner may try again at an increased cost of 2 Willpower."
            },
            {
                "type": "line",
                "label": "Success",
                "text": "The vampire is compelled to answer a number of questions equal to the number of successes the hunter gained over the target. Only the hunter may speak the questions, for only the hunter is possessed of Saint Francis’ Benediction. Also, note that “truth” is a bit flexible—if the vampire believes that he did not kill his last victim (even though reality says otherwise), then the vampire will answer according to what he genuinely believes. Truth is relative to the speaker."
            },
            {
                "type": "line",
                "label": "Exceptional Success",
                "text": "As above, but now the creature also gains a mild derangement as if it has just lost a point of its Morality. Overwhelming guilt assails the monster. Storytellers should note that this could provide an inroad toward rehabilitation of the creature, should the hunter decide to attempt it. The creature may endeavor to reclaim some of its lost Morality if urged to do so."
            }
        ],
        "Potential Modifiers": [
            {
                "type": "table",
                "title": "Suggested Modifiers",
                "headers": ["Modifier", "Situation"],
                "rows": [
                    ["+5", "Benediction performed on January 24 (Feast Day of Saint Francis of Sales)"],
                    ["+2", "Target is Catholic"],
                    ["+1", "Practitioner is canonized"],
                    ["-1", "Target is not a vampire"],
                    ["-2", "Target’s Morality is 7 or above"]
                ]
            }
        ],
    },
    {
        "Name": "Loyola's Fire",
        "Cost": "○",
        "Dice Pool": "Resolve + Benediction",
        "Description": "Cast a holy light which compels the undead to panic and flee, losing Willpower while illuminated.",
        "Book": "NS 140",
        "Content": [
            {
                "type": "paragraph",
                "text": "This Benediction—allowing one to never be far from God’s light—is named and credited to the Saint best known for bringing the light of the Church to dark places. Ignatius of Loyola, founder of the Society of Jesus (better known in modern nights as Jesuits), was a knight before coming to the cloth and often found himself in dark places in need of shelter, warmth, and light."
            },
            {
                "type": "paragraph",
                "text": "By invoking the name of Saint Ignatius, the hunter may imbue an object with his blessing and cast a holy light through the darkness. This light illuminates all as if through a crack in Heaven. Its glory is such that the undead cannot suffer to be in its presence."
            },
            {
                "type": "heading",
                "level": 3,
                "text": "They Are Dead, Yet They Walk"
            },
            {
                "type": "paragraph",
                "text": "It’s up to you: are vampires the same thing as the shambling dead, the rough-hewn Reanimated (i.e. Prometheans), ghosts, and anything else that makes use of a defunct corpse or a restless spirit? Technically, no, they’re not the same. But in terms of game mechanics, you might rule that any Endowment that fucks specifically with vampires can be used to affect those other types of “walking dead,” too. Some of the Endowments here make specific mention of this, but others don’t. It’s your call, as Storyteller, as to how large a tent these Endowments represent. Can all such unliving abominations crowd beneath it?"
            }
        ],
        "fullCost": "1 Willpower",
        "Action": "Instant",
        "fullDicePool": "Resolve + Benediction",
        "Effect": [
            {
                "type": "paragraph",
                "text": "This prayer is uttered over a cross or similar holy object. It is possible to perform the Benediction with the power of the practitioner’s faith alone, but at a penalty. The primary purpose of this Benediction brings a very real illumination to the surrounding area that the unnatural dead cannot abide. Despite the obvious utility of this “secondary” feature of the Benediction, it remains technically a side effect. Practitioners calling on Ignatius without need of his light will find it significantly more difficult than those followers truly wandering in the dark."
            }
        ],
        "RollResults": [
            {
                "type": "line",
                "label": "Dramatic Failure",
                "text": "No light radiates outward, but the one performing the Benediction becomes apparent to any and all supernatural fiends within yards equal to three times the practitioner’s Benediction score. It’s as if the hunter is standing in the open on a clear day; this carries through walls or other obstructions."
            },
            {
                "type": "line",
                "label": "Failure",
                "text": "Loyola’s light is not made manifest."
            },
            {
                "type": "line",
                "label": "Success",
                "text": "A light is cast from the object (or the performer’s hand if no object was available) in a radius equal to three times successes gained in yards. Vampires must succeed upon a Resolve + Composure roll or suffer from a frenzy of fear (p. 163). Ghosts, zombies, and other undead react similarly to the light even if they otherwise do not suffer from frenzy. Any creature thus affected will do whatever it can to escape the light—often fleeing until it tires. For every turn spent in the light, the creature loses one point of Willpower (for vampires, this may appear as the blood drying within their bodies—flesh grows tight, even desiccated)."
            },
            {
                "type": "line",
                "label": "Exceptional Success",
                "text": "As above. In addition, those caught within the light suffer a point of lethal damage."
            }
        ],
        "Potential Modifiers": [
            {
                "type": "table",
                "title": "Suggested Modifiers",
                "headers": ["Modifier", "Situation"],
                "rows": [
                    ["+5", "July 31 (Feast Day of Saint Ignatius of Loyola)"],
                    ["+2", "Blessed object (i.e. sacred reliquary)"],
                    ["+1", "Religious or other appropriate object (i.e. normal Bible)"],
                    ["+1", "Pitch black"],
                    ["-1", "No object"],
                    ["-2", "The area is lit"],
                    ["-3", "Profane object (i.e. pornographic magazine)"]
                ]
            }
        ],
    },
    {
        "Name": "Mantle of Orleans",
        "Cost": "○○",
        "Dice Pool": "Manipulation + Benediction",
        "Description": "While you continue to pray this scene, cellmates gain a +1 bonus to combat rolls and Defense, and a +3 bonus to Initiative and Speed.",
        "Book": "NS 141",
        "Content": [
            {
                "type": "paragraph",
                "text": "This Benediction is associated with Jeanne D’Arc, the young French woman famously besieged by visions of Heaven. Unable to ignore the Lord’s call to arms, she waged a military campaign that helped save France near the end of the One Hundred Year War. Wrongly condemned for heresy by the politicians of the time, Saint Jeanne has posthumously been cleared of all charges, and beatified and canonized in short order. She serves as an inspiration to women in the church and all who bear arms in the name of God. It is no surprise that the Malleus Maleficarum have come to hold her in such high regard when it comes time to raise the standard of war. Specifically, this Benediction invokes her glorious success under Heaven in lifting the siege of Orleans in only nine days. This prayer blesses the practitioner’s brothers in arms as they battle unholy forces. The companions of the practitioner receive a blessing that guides their blows and turns aside their enemies’ attacks in turn. In the course of the prayer, the hunter invokes Margaret of Antioch, Catherine of Alexandria and Michael the Archangel to aid in battle as they once graced Saint Jeanne."
            }
        ],
        "fullCost": "2 Willpower",
        "Action": "Instant",
        "fullDicePool": "Manipulation + Benediction",
        "Effect": [
            {
                "type": "paragraph",
                "text": "She must remain in prayer for every turn she wishes to continue issuing the blessing. For every turn the practitioner remains in prayer, members of her cell gain bonuses to all combat rolls and attributes (i.e. Defense, Initiative). This doesn’t necessitate rolling or expending Willpower every turn, only the act of prayer itself. If interrupted (she is otherwise stopped from speaking or is attacked, for instance), the Benediction ends. She may not attempt to use this Benediction again until 24 hours have passed."
            }
        ],
        "RollResults": [
            {
                "type": "line",
                "label": "Dramatic Failure",
                "text": "The practitioner and her cell are besieged by visions of the Archangel Michael standing in Holy Judgment. The cell suffers a -1 penalty to all combat related rolls and -3 to their Initiative for the remainder of the scene. The Benediction is over and the practitioner may not continue the prayer or try again for one full turn of the moon (28 days)."
            },
            {
                "type": "line",
                "label": "Failure",
                "text": "The invoker’s prayer fails to be heard and the cell gains no benefit or blessing."
            },
            {
                "type": "line",
                "label": "Success",
                "text": "The Benediction is successful and other members of the cell gain the following benefits: +1 to Defense, +1 to all combat-related rolls, +3 to Initiative, and +3 to Speed. These bonuses last for as long as the hunter prays (maximum one full scene). Note that the hunter using this Benediction does not gain these benefits, and may do nothing except pray if she hopes to keep up the blessing. Those in the cell gaining these benefits must be within 50 yards of the praying hunter."
            },
            {
                "type": "line",
                "label": "Exceptional Success",
                "text": "As above, but the cell now gains +2 to combat-related rolls."
            }
        ],
        "Potential Modifiers": [
            {
                "type": "table",
                "title": "Suggested Modifiers",
                "headers": ["Modifier", "Situation"],
                "rows": [
                    ["+5", "May 30 (Feast Day of Saint Jeanne D’Arc)"],
                    ["+2", "Holding a blessed item (a sacred banner, a sanctified sword)"],
                    ["-2", "Distractions (loud noise, trembling ground, the combat is going on inches from the hunter’s face)"]
                ]
            }
        ],
    },
    {
        "Name": "The Miracle of Gadarene",
        "Cost": "—",
        "Dice Pool": "None",
        "Description": "Cast an exorcised spirit into an animal as a symbolic rebuke, bound helpless while the animal lives.",
        "Book": "SpSl 147",
        "Content": [
            {
                "type": "paragraph",
                "text": "Even many non-Christians know the story of Jesus and the Gadarene demon. While traveling through the region of Gadarene, Jesus came across a man that was possessed by demons. Christ compelled the demons to speak their names and the demons replied that their name was Legion. Jesus then forced the demons out of the man and into a herd of swine, which then threw themselves off a cliff."
            }
        ],
        "fullCost": "None",
        "Action": "",
        "fullDicePool": "",
        "Effect": [
            {
                "type": "paragraph",
                "text": "Mechanically, Cast into Swine works in the same way as “Vade Retro Santana” (see Hunter: The Vigil, p. 162) except that the focus of this Benediction is on the exorcism and consequent binding of spirits. To perform Cast into Swine, the hunter must have a general idea of the nature of the spirit he is working against. The hunter then procures an animal that is either metaphorically or literally the opposite of that nature. In the case of violent spirits, the hunter could choose a dove, which is traditionally a symbol of peace. The exorcism is performed as usual with the animal close at hand. When the spirit is driven from the body of the possessed, it is forced into the body of the animal and bound there. The opposing nature of the animal keeps the bound spirit in check and denies the spirit the ability to direct the actions of the animal. Members of the Malleus Maleficarum place the animal in seclusion until they can decide on a more permanent solution. If the animal dies, as a result of natural causes or violence, the spirit is freed."
            }
        ],
        "RollResults": [],
        "Potential Modifiers": [],
    },
    {
        "Name": "The Preservation of the Chastity of St. Agnes of Rome",
        "Cost": "○(2A)",
        "Dice Pool": "Resolve + Benediction",
        "Description": "While you possess only one undamaged Health point, manifest Benediction as Armor for the scene. Suffer aggravated damage to expel the armor, dealing it as aggravated damage all around you.",
        "Book": "C&C 75",
        "Content": [
            {
                "type": "paragraph",
                "text": "St. Agnes stood in such defiance of monstrous violation that she became impervious to harm for a time. The hunter who calls upon this Benediction gains similar benefit."
            }
        ],
        "fullCost": "1 Willpower",
        "Action": "Instant and reflexive",
        "fullDicePool": "Resolve + Benediction",
        "Effect": [],
        "RollResults": [
            {
                "type": "line",
                "label": "Dramatic Failure",
                "text": "The character suffers one point of lethal damage—a wound opens on the hunter’s throat and gouts blood."
            },
            {
                "type": "line",
                "label": "Failure",
                "text": "The Benediction fails."
            },
            {
                "type": "line",
                "label": "Success",
                "text": "When the hunter’s Health track has only one box unfilled (even if the rest is filled with bashing), she can trigger this Benediction reflexively on success. The hunter’s hair, clothing, or nearby debris instantly form armor—the hair hardens, the clothes whirl about, and so forth. This armor is equal to the hunter’s dots in Benediction. It protects even against aggravated damage. The armor lasts for one full scene, does not limit Defense or Speed. In addition, the hunter may expend the armor to gain a dramatic effect: she takes two points of aggravated damage in a lambent burst of light (it burns off her hair and sears her flesh). This light affects all those within 10 yards of the light, and it does a number of aggravated damage to those affected equal to the hunter’s points in the Benediction Endowment."
            },
            {
                "type": "line",
                "label": "Exceptional Success",
                "text": "The hunter gains an additional dot of Armor. This does not affect the “damage-dealing” effect, however."
            }
        ],
        "Potential Modifiers": [],
    },
    {
        "Name": "Revelationes Coelestes",
        "Cost": "○",
        "Dice Pool": "Resolve + Benediction",
        "Description": "Witches spontaneously bleed, suffering a -2 penalty for the scene.",
        "Book": "WF 125",
        "Content": [
            {
                "type": "paragraph",
                "text": "The Malleus Maleficarum puts forth that magic, like tainted blood, is a “pollution.” Historically (and bound to the misogyny of the early order), the menstrual blood of a woman was seen as corrupt in this way, tainted with vile energies. St Birgitta of Sweden would not let her nuns ever touch altar cloths with their bare hands for this reason. It was through her “celestial revelations” (which gives the name of this Benediction) that the conspiracy conjured this prayer, which attempts to highlight the “pollution” of witches through an expression of unwilling blood-letting."
            }
        ],
        "fullCost": "1 Willpower",
        "Action": "Instant",
        "fullDicePool": "Resolve + Benediction",
        "Effect": [],
        "RollResults": [
            {
                "type": "line",
                "label": "Dramatic Failure",
                "text": "The hunter suffers intense sinus pain and a nose or mouth bleed. The sinus pain incurs no wounds, but for the remainder of the scene he suffers -3 dice to all rolls."
            },
            {
                "type": "line",
                "label": "Failure",
                "text": "The prayer falls on deaf ears."
            },
            {
                "type": "line",
                "label": "Success",
                "text": "Any witches within a radius equal to five times the hunter’s Benediction score in yards suddenly bleed — one may bleed from the nose, another from the mouth or eyes, while a female witch might have her menses early. This causes them no wounds, but any witch affected suffers -2 dice to all rolls for the remainder of the scene."
            },
            {
                "type": "line",
                "label": "Exceptional Success",
                "text": "As with success, but the penalty to the witches is now -4 dice."
            }
        ],
        "Potential Modifiers": [
            {
                "type": "table",
                "title": "Suggested Modifiers",
                "headers": ["Modifier", "Situation"],
                "rows": [
                    ["+5", "The Benediction is performed on July 23, St Birgitta’s feast day"],
                    ["-2", "The hunter performing the Benediction is already bleeding"]
                ]
            }
        ],
    },
    {
        "Name": "Sanctification of the Blessed Virgin",
        "Cost": "○(※)",
        "Dice Pool": "Morality + Benediction",
        "Description": "Pray as an extended action to render something a blessed item for a scene, or lose a Willpower dot to bless it permanently.",
        "Book": "HTV 161",
        "Content": [
            {
                "type": "paragraph",
                "text": "The enemies of the faith are manifold, and while some may be fought with sword and gun and purifying flame, some exist against whom earthly weapons are no avail. Ghosts, demonic spirits and other insubstantial terrors cannot be fought by force of arms, but rather by the strength of faith. Truly devout hunters can invoke the name of the Blessed Virgin Mary, infusing ordinary objects with the divine power of faith."
            }
        ],
        "fullCost": "1 Willpower (see below).",
        "Action": "Extended; each roll represents one turn of prayer.",
        "fullDicePool": "Morality + Benediction.",
        "Effect": [
            {
                "type": "paragraph",
                "text": "This rite allows the hunter to create a blessed item (The World of Darkness Rulebook, p. 214). Before beginning the ritual, the hunter must decide on the dot rating he wishes to bestow on the blessed item he creates. Each dot requires three successes to create, and the maximum number of rolls is capped by the hunter’s Morality. If the hunter fails, he does not pay the Willpower cost except on a dramatic failure."
            },
            {
                "type": "paragraph",
                "text": "Creating a blessed item with this rite costs a point of Willpower. The item remains blessed for the remainder of the scene. If the hunter desires, he may spend a Willpower dot to infuse the item with God’s blessing permanently."
            }
        ],
        "RollResults": [
            {
                "type": "line",
                "label": "Dramatic Failure",
                "text": "The object to be sanctified is shattered by the wrath of God, and the hunter loses any Willpower cost associated with the ritual."
            },
            {
                "type": "line",
                "label": "Failure",
                "text": "No progress is made toward completing the ritual."
            },
            {
                "type": "line",
                "label": "Success",
                "text": "Progress is made toward completing the ritual."
            },
            {
                "type": "line",
                "label": "Exceptional Success",
                "text": "In addition to major progress being made, the rating of the blessed item created by this ritual is increased by one dot."
            }
        ],
        "Potential Modifiers": [
            {
                "type": "table",
                "title": "Suggested Modifiers",
                "headers": ["Modifier", "Situation"],
                "rows": [
                    ["-2", "The item being blessed is profane or blasphemous (a porn magazine, an image of Jesus sprayed with horse urine)."],
                    ["-1", "The item being blessed is one of no particular religious significance (e.g., a baseball bat or comic book)."],
                    ["+0", "The item being blessed is one of religious significance (a Bible, rosary, etc.)."],
                    ["+2", "The blessed item is an actual relic of a saint, such as a bone or vial of blood."],
                    ["+5", "Benediction is enacted on May 24th (Feast Day of Mary, Help of Christians)."]
                ]
            }
        ],
    },
    {
        "Name": "Scutum Sancte Trinitatis",
        "Cost": "○○○",
        "Dice Pool": "Resolve + Benediction",
        "Description": "Take no non-aggravated damage for a turn per success, except from fire, disease, drugs, or poison.",
        "Book": "BD 7",
        "Content": [
            {
                "type": "paragraph",
                "text": "This Benediction invokes the “Shield of the Trinity,” or the Scutum Sancte Trinitatis. This Benediction is used by the righteous soldier of God to protect himself against all mortal damage that might end his crusade against the Devil’s army. It is, at present, a Benediction found among the Athanasians. Technically, it’s possible for any hunter in the Malleus Maleficarum to manifest and learn this Benediction, but the Athanasians make every effort to quietly recruit, exile or destroy those hunters that show the potential for it."
            }
        ],
        "fullCost": "3 Willpower",
        "Action": "Instant",
        "fullDicePool": "Resolve + Benediction",
        "Effect": [
            {
                "type": "paragraph",
                "text": "To use this, the hunter must mark himself with the symbol of the Shield of the Trinity, a symbol marked by four nodes (linked by six lines)."
            }
        ],
        "RollResults": [
            {
                "type": "line",
                "label": "Dramatic Failure",
                "text": "The symbol burns, searing the soldier’s flesh with one point of aggravated damage."
            },
            {
                "type": "line",
                "label": "Failure",
                "text": "God will not provide the defense necessary. Surely, He has His reasons?"
            },
            {
                "type": "line",
                "label": "Success",
                "text": "For each success gained on the roll, the hunter has one turn where he takes no damage from most bashing or lethal sources. However, the hunter still takes damage from fire, disease, drugs, and poison. In addition, aggravated damage still accumulates as normal."
            },
            {
                "type": "line",
                "label": "Exceptional Success",
                "text": "Successes gained are their own reward (see Success, above)."
            }
        ],
        "Potential Modifiers": [],
    },
    {
        "Name": "The Shepherd's Blessing",
        "Cost": "○(○)",
        "Dice Pool": "Wits + Benediction",
        "Description": "Murmur prayers to avoid mortal notice yourself, or for two Willpower, your Benediction in allies. Supernatural beings and hostiles may contest Wits + Composure vs Wits + Stealth + Benediction to break the effect.",
        "Book": "HTV 161",
        "Content": [
            {
                "type": "paragraph",
                "text": "A good shepherd knows how to watch over his flock without disturbing it. Even the scent of a wolf can panic the sheep, and so the shepherd must move among the herd without being noticed. So, too, must the hunter keep his activities shrouded from the awareness of the people he protects, and even those who would aspire to protect him."
            }
        ],
        "fullCost": "1 Willpower.",
        "Action": "Reflexive.",
        "fullDicePool": "Wits + Benediction (but see below).",
        "Effect": [
            {
                "type": "paragraph",
                "text": "The effects of this Benediction are automatic. As long as the hunter continuously murmurs prayers under his breath (meaning he cannot otherwise speak) and takes no hostile actions, ordinary mortals simply do not see him. Even suspicious but non-threatening acts, like hot-wiring a car or picking a lock on a door, do not break the effect. Supernatural creatures and mortals actively looking for trouble (such as a patrolling cop or a private guard) may make a Wits + Composure roll contested by the hunter’s Wits + Stealth + Benediction. This roll is reflexive for both parties. If the hunter rolls more successes, he remains undetected. If the observer rolls more successes, he pierces the veil and the effect is ended for all characters in the vicinity."
            },
            {
                "type": "paragraph",
                "text": "The hunter may spend a second point of Willpower at any time to expand the effect to include a number of willing allies up to his Benediction rating. These allies must be mortal."
            }
        ],
        "RollResults": [
            {
                "type": "line",
                "label": "Dramatic Failure",
                "text": "Not only does the hunter fail to conceal himself, but he actively draws attention to his presence. People automatically notice him and try to engage him in conversation even when he tries to be unobtrusive, and even if he tries to hide, those looking for him get a +1 bonus on their rolls."
            },
            {
                "type": "line",
                "label": "Failure",
                "text": "The hunter is unable to mask his presence from those looking for him."
            },
            {
                "type": "line",
                "label": "Success",
                "text": "The eyes of ordinary mortals slide right off the hunter; people unconsciously acknowledge his presence but refuse to actually notice him, even if he’s armed to the teeth and engaged in an act of burglary. Any overtly hostile act, such as firing a gun or shouting a threat, breaks the illusion instantly, as does speaking anything other than prayer."
            },
            {
                "type": "line",
                "label": "Exceptional Success",
                "text": "As a success, but if the hunter attacks an enemy while still under the effects of this Benediction, the effect does not end until after the attack (meaning the target loses his Defense)."
            }
        ],
        "Potential Modifiers": [
            {
                "type": "table",
                "title": "Suggested Modifiers",
                "headers": ["Modifier", "Situation"],
                "rows": [
                    ["+5", "Benediction is performed on October 24th (feast day of St. Raphael, patron saint of shepherds)."]
                ]
            }
        ],
    },
    {
        "Name": "Song of Daniel",
        "Cost": "○/○○",
        "Dice Pool": "Charisma + Benediction - Resolve",
        "Description": "Calm wildlife, or for two Willpower other creatures, with a hymn, adding successes as a Social bonus and suppressing supernatural frenzies.",
        "Book": "NS 139",
        "Content": [
            {
                "type": "paragraph",
                "text": "Lambs lying among lions—that is the promise of God’s Paradise and the power behind this Benediction. History is full of accounts and images of the Saints walking among wild beasts unharmed. Perhaps the most well known is that of Daniel in the lion’s den where playing a simple song caused the beasts to lie down, refusing to harm him. Blaise, Vitus, and many others have used some form of this hymn throughout history and it survives into these modern nights. Vampires and other creatures are sometimes said to have the soul of a beast lurking inside them, and this Benediction aims to soothe that savage spirit."
            },
            {
                "type": "paragraph",
                "text": "It is highly doubtful this Benediction is the same song Daniel used; this hymn is no less effective, however. Hunters of the Malleus Maleficarum over the centuries have used it not only to calm animals in their presence but have also discovered that it can quite literally soothe the savage beast within vampires, werewolves and other raging beasts."
            }
        ],
        "fullCost": "1 Willpower against animals; 2 Willpower against creatures",
        "Action": "Instant",
        "fullDicePool": "Charisma + Benediction - the highest Resolve score of potentially-affected creatures",
        "Effect": [
            {
                "type": "paragraph",
                "text": "When sung, the Song of Daniel spreads an air of calm over the wildlife surrounding the practitioner. This may be used to approach a specific creature, or let her move through nature without disturbing the local fauna and draw unwanted attention to herself. Beyond that, this Benediction may be used against vampires or other creatures suffering frenzy or similar states (see p. 163) to bring clarity back to their mind and a small peace to their soul."
            }
        ],
        "RollResults": [
            {
                "type": "line",
                "label": "Dramatic Failure",
                "text": "The target is enraged instead. Area animals view the invoker as a threat and respond with an immediate fight response. Smaller creatures, like rodents, are likely to break off and flee in short order, but larger creatures and predators will need to be repelled. Vampires or other similarly enraged creatures targeted with this Benediction are not calmed and the hunter becomes the sole focus of their supernatural rage."
            },
            {
                "type": "line",
                "label": "Failure",
                "text": "The Benediction has no effect and animals will behave and respond normally to the hunter’s presence. Monsters remain in frenzy and will need to be turned away through other methods."
            },
            {
                "type": "line",
                "label": "Success",
                "text": "The hymn takes hold of the heart of the beasts. Animals in the area are calmed and will let the hunter pass without thought of fight or flight. Vampires or other out-of-control creatures will find themselves subdued by a supernatural peace overcoming them (see “Frenzy,” p. 163). In addition, the hunter gains bonus dice (equal to successes) on any Animal Ken rolls (for animals) or Social rolls (involving cowed monsters). This Benediction’s area of effect is equal to twice the hunter’s Benediction score in yards. It lasts for one full scene."
            },
            {
                "type": "line",
                "label": "Exceptional Success",
                "text": "For the remainder of the scene, any animals or creatures must expend one point of Willpower per turn of attack unless they are defending themselves."
            }
        ],
        "Potential Modifiers": [
            {
                "type": "table",
                "title": "Suggested Modifiers",
                "headers": ["Modifier", "Situation"],
                "rows": [
                    ["+5", "Song of Daniel performed on February 3 (Feast Day of Blaise)"],
                    ["+1", "Vampire in frenzy of fear"],
                    ["-1", "The animal is a predator/ target is a werewolf"],
                    ["-3", "Vampire in fight frenzy"]
                ]
            }
        ],
    },
    {
        "Name": "St. Agathius' Call",
        "Cost": "○",
        "Dice Pool": "Presence + Benediction",
        "Description": "Assailants with Morality ≤6 must spend Willpower to strike anyone but you for the scene.",
        "Book": "Slash 161",
        "Content": [
            {
                "type": "paragraph",
                "text": "Saint Agathius of Byzantium is one of the Fourteen Holy Helpers, or Auxiliary Saints, and among their number is the patron of soldiers. Scourged and beheaded after terrible torture for refusing to renounce his faith, a hunter knowing Saint Agathius’ Benediction can draw upon a measure of that saint’s resolve. The hunter empowers himself in the martyr’s role, drawing the attention and ire of an attacker so that his companions may live unmolested."
            }
        ],
        "fullCost": "1 Willpower",
        "Action": "Instant",
        "fullDicePool": "Presence + Benediction",
        "Effect": [
            {
                "type": "paragraph",
                "text": "Saint Agathius’ Call lasts for one scene."
            }
        ],
        "RollResults": [
            {
                "type": "line",
                "label": "Dramatic Failure",
                "text": "The hunter prays, but answers are not forthcoming. He suffers a -1 to all dice pools for the rest of the scene."
            },
            {
                "type": "line",
                "label": "Failure",
                "text": "The hunter does not gain the benefit of Saint Agathius’ blessing."
            },
            {
                "type": "line",
                "label": "Success",
                "text": "The hunter shines as if lit from within. Those wishing to attack the character’s cell see the hunter as the perfect choice, the only possible one to attack. Anyone with Morality (or equivalent trait) 6 or below who wishes to attack a member of the cell must spend a point of Willpower in order to attack anyone other than the hunter using this Benediction. If the attacker wanted to strike at the hunter anyway, this power has no further effect."
            },
            {
                "type": "line",
                "label": "Exceptional Success",
                "text": "Though they strike at him, the hunter is protected by his higher calling. The hunter’s Defense is increased by 1 until this effect ends."
            }
        ],
        "Potential Modifiers": [
            {
                "type": "table",
                "title": "Suggested Modifiers",
                "headers": ["Modifier", "Situation"],
                "rows": [
                    ["+1", "The hunter is a Soldier by Profession."],
                    ["+1", "The hunter possesses the Giant Merit."],
                    ["+2", "The hunter has the highest Strength of his cell"],
                    ["+5", "The Benediction is performed on May 8 (feast day of Saint Agathius of Byzantium)"]
                ]
            }
        ],
    },
    {
        "Name": "True Sight of St. Abel",
        "Cost": "○",
        "Dice Pool": "Intelligence + Benediction",
        "Description": "Recipients of this blessing may roll Resolve with an allocated bonus to perceive Twilight and to see monsters for what they are without Lunacy or Disbelief for a scene.",
        "Book": "HTV 162",
        "Content": [
            {
                "type": "paragraph",
                "text": "The servants of Satan take many guises and hide behind veils of shadow and deception. Vampires’ images blur and shift, hiding their depredations from the eyes of the modern world. Witnesses to the ravages of werewolves and to the foul blasphemies of witches are afflicted with the demons of madness and soon forget what they saw. By calling upon St. Abel, the patron saint of the blind, the Malleus Maleficarum pierces the protections the Devil gives his servants and grants the hunters the gift of true sight."
            }
        ],
        "fullCost": "1 Willpower.",
        "Action": "Extended; each roll represents one turn of prayer and supplication.",
        "fullDicePool": "Intelligence + Benediction.",
        "Effect": [
            {
                "type": "paragraph",
                "text": "Successes on the extended action must be allocated amongst all the recipients of the ritual’s blessing. The number of blessed must be determined at the outset of the action, but the hunter need not specify the exact target number of successes. He may make a total number of rolls equal to his Morality, and must assign one success minimum to each intended target."
            },
            {
                "type": "paragraph",
                "text": "For the remainder of the scene, the players of all those blessed may roll Resolve + (successes allocated). Success indicates that the hunters can see monsters for what they are if he sees a vampire, he knows it is one of the spiteful dead. If he sees a werewolf, even in its human state, he senses the feral and protean nature of the thing."
            },
            {
                "type": "paragraph",
                "text": "In addition, any normal monstrous masking effects fail (a vampire’s reflection or image appears crystal clear, the sight of a werewolf inspires no terror or amnesia, and the vulgar magic of a warlock is plain to his eyes). The effects do function even on recorded media; a hunter benefiting from the True Sight of St. Abel will see a vampire’s image clearly, even if that image is on a three-week-old video recording."
            },
            {
                "type": "paragraph",
                "text": "Finally, any creatures (ghosts, demons, spirits) existing in the non-corporeal state of Twilight become visible as gauzy shadows."
            },
            {
                "type": "paragraph",
                "text": "That said, this ritual provides no benefit against active powers of deception or stealth (such as the Lurker in Darkness Dread Power), only those innate traits that protect the monsters from discovery."
            },
            {
                "type": "paragraph",
                "text": "Example: Brother Justin has invoked the blessing of St. Abel in preparation for battle with a pair of shapeshifting hellhounds. The beasts are expecting his coming, and as he bursts into their lair, one has already taken the form of a hulking wolf the size of a horse. Brother Justin rolls his Resolve + 3 (the number of successes allocated to the Benediction) and rolls two successes. He is untouched by the moon-madness that comes from seeing such a demon in its true form, and moves to attack. Unfortunately, he has no idea the beast’s fellow has employed one of its demonic powers to render it hidden to mortal eyes, and is coming up behind him with a knife…"
            }
        ],
        "RollResults": [
            {
                "type": "line",
                "label": "Dramatic Failure",
                "text": "The hunter fails to entreat the saint with humility and righteousness in his heart; every character who would have received the benefits of the ritual is instead struck blind for the remainder of the scene (The World of Darkness Rulebook, p. 166)."
            },
            {
                "type": "line",
                "label": "Failure",
                "text": "No progress is made toward calling down the Benediction."
            },
            {
                "type": "line",
                "label": "Success",
                "text": "The hunter makes progress toward invoking the saint’s power."
            },
            {
                "type": "line",
                "label": "Exceptional Success",
                "text": "Extraordinary progress is made."
            },
            {
                "type": "heading",
                "level": 3,
                "text": "TRUE SIGHT AND OTHER WORLD OF DARKNESS GAMES"
            },
            {
                "type": "paragraph",
                "text": "For those who have access to the more in-depth rules for monsters found in Vampire: The Masquerade, Werewolf: The Forsaken, Mage: The Awakening, and other World of Darkness game lines, the True Sight of St. Abel pierces the vampiric Masquerade, werewolves’ Lunacy, and the Quiescence Curse of the mages."
            }
        ],
        "Potential Modifiers": [
            {
                "type": "table",
                "title": "Suggested Modifiers",
                "headers": ["Modifier", "Situation"],
                "rows": [
                    ["+5", "Benediction invoked on August 5th."]
                ]
            }
        ],
    },
    {
        "Name": "Vade Retro Satana",
        "Cost": "—",
        "Dice Pool": "Resolve + Composure + Benediction",
        "Description": "An enhanced ritual of abjuration and exorcism.",
        "Book": "HTV 162",
        "Content": [
            {
                "type": "paragraph",
                "text": "The rites of exorcism exist in many forms across many of the world’s religions. The Catholic Church continues to train exorcists in the art, though they try to keep that fact quiet. The current form favored by the Church is detailed in the Roman Ritual and made famous by films like The Exorcist. The Malleus Maleficarum uses that form of the rite, but generally prefers this archaic, medieval formula attributed to St. Benedict. It claims that the rite has a greater power than that of the Roman Ritual, and in any case, it resonates with the order’s preference for the trappings of the medieval Church."
            }
        ],
        "fullCost": "None",
        "Action": "Extended and contested; each roll represents five minutes of repeating the Vade Retro Satana; or contested (see below).",
        "fullDicePool": "Resolve + Composure + Benediction.",
        "Effect": [
            {
                "type": "paragraph",
                "text": "This Benediction serves the Malleus Maleficarum in the same way that the abjuration and exorcism actions (The World of Darkness Rulebook, pp. 213–214) serve other hunters. All the rules for those actions apply to the use of this Benediction, which may be a contested action (if used as an abjuration) or a contested and extended action (if used as an exorcism). In effect, knowledge of this Benediction enables the hunter to add his Benediction rating as a bonus to his abjuration and exorcism dice pools."
            },
            {
                "type": "heading",
                "level": 3,
                "text": "THE VADE RETRO SATANA"
            },
            {
                "type": "paragraph",
                "text": "The text of the Vade Retro Satana, in Latin, is:"
            },
            {
                "type": "paragraph",
                "text": "Crux sancta sit mihi lux\nNon draco sit mihi dux\nVade retro satana\nNunquam suade mihi vana\nSunt mala quae libas\nIpse venena bibas"
            },
            {
                "type": "paragraph",
                "text": "The prayer roughly translates to:"
            },
            {
                "type": "paragraph",
                "text": "May the Holy Cross be my light\nLet not the dragon lead me\nStep back, Satan\nNever tempt me with vain things\nWhat you offer me is evil\nDrink the poison yourself"
            }
        ],
        "RollResults": [],
        "Potential Modifiers": [
            {
                "type": "table",
                "title": "Suggested Modifiers",
                "headers": ["Modifier", "Situation"],
                "rows": [
                    ["+5", "Benediction is invoked on July 11th (feast day of St. Benedict)."]
                ]
            }
        ],
    },
    {
        "Name": "Wrathful Sword of St. Michael the Archangel",
        "Cost": "○○",
        "Dice Pool": "Strength + Benediction",
        "Description": "Channel divine light through a weapon, which becomes a blessed item and deals up to the rite's successes in aggravated damage to the supernatural.",
        "Book": "HTV 163",
        "Content": [
            {
                "type": "paragraph",
                "text": "St. Michael, the general of the Heavenly Host, did personal battle against Lucifer in the last days of the War in Heaven. It was by Michael’s hand that the Morningstar’s power was broken, and he was thrown down from the celestial city into the bowels of Hell. By praying to the mighty warrior angel, a hunter can imbue an earthly weapon with the divine power to smite the devils that haunt humankind. Few earthly implements can channel the divine power for long, but for as long as it lasts, a weapon sanctified by Michael is the most potent weapon in a hunter’s arsenal."
            }
        ],
        "fullCost": "2 Willpower.",
        "Action": "Instant (however, the Willpower cost must be paid over two consecutive turns).",
        "fullDicePool": "Strength + Benediction.",
        "Effect": [
            {
                "type": "paragraph",
                "text": "Despite the name, this Benediction need not be used to bless a sword. Any melee weapon, even an improvised one, may be blessed with the power of St. Michael. The effects of this Benediction last for one scene, or until the weapon has been used to inflict a number of points of aggravated damage equal to the number of successes rolled on the activation roll. Once the weapon has inflicted that amount of aggravated damage, it shatters, overcome by the divine power poured into it. If the scene ends before the weapon has inflicted its maximum aggravated damage, the effect ends and the weapon is not broken. The hunter who imbues the weapon needn’t be the hunter who uses it to incur damage."
            }
        ],
        "RollResults": [
            {
                "type": "line",
                "label": "Dramatic Failure",
                "text": "The weapon is unable to channel the divine wrath and shatters immediately."
            },
            {
                "type": "line",
                "label": "Failure",
                "text": "The weapon is not imbued with the power of the archangel."
            },
            {
                "type": "line",
                "label": "Success",
                "text": "The weapon blazes with the pure white light of Heaven. When wielded against supernatural creatures, the weapon inflicts aggravated damage. The weapon can inflict a total amount of aggravated damage equal to the number of successes rolled. In addition, it counts as a blessed item with dot rating equal to the successes rolled."
            },
            {
                "type": "line",
                "label": "Exceptional Success",
                "text": "No additional effect beyond inflicting a large amount of aggravated damage."
            }
        ],
        "Potential Modifiers": [
            {
                "type": "table",
                "title": "Suggested Modifiers",
                "headers": ["Modifier", "Situation"],
                "rows": [
                    ["+5", "Benediction performed on September 29th (Michaelmas)"]
                ]
            }
        ],
    }
]

const castigationOverviewData = {
    "Name": "Castigation",
    "Content": [
        {
            "type": "paragraph",
            "text": "Gifted by the blood of their infernal ancestor, the hunters of the Lucifuge call upon the very powers of darkness they struggle against to make the world safe for humanity. Though the rites of Castigation are powerful, many Lucifuge fear to use them too freely, lest the seductive power of Hell ensnare their souls."
        },
        {
            "type": "paragraph",
            "text": "Hunters of the Lucifuge are right to fear, as the dark “blessing” of their forefather’s power can taint even the strongest soul. Whenever a Lucifuge rolls an exceptional success on the activation roll for a Castigation rite, he must roll his current Morality. If he fails, he gains a derangement associated with his current Morality rating, exactly as though he had gained a derangement thanks to Morality degeneration. If he already has a mild derangement associated with his current Morality, it becomes severe instead. If he has a severe derangement, his derangement is triggered but he suffers no further effect. The Storyteller and player should work together to choose this derangement; narcissism, suspicion and irrationality (along with their severe counterparts) are especially common."
        },
        {
            "type": "paragraph",
            "text": [
                {
                    "text": "Example:",
                    "bold": true,
                    "italic": true
                },
                {
                    "text": " Example: Luther, a Lucifuge with a Morality of 5, rolls an exceptional success on a Castigation roll. He rolls five dice and gets no successes. Since he has no derangement associated with Morality 5, he gains the mild derangement, Narcissism. Should he raise his Morality above 5, this derangement goes away, as described on p. 93 of the World of Darkness Rulebook.",
                    "italic": true
                }
            ]
        },
        {
            "type": "paragraph",
            "text": "Castigation rites have no associated dot cost; for each dot of the Castigation Merit the Lucifuge possesses, he knows one of the following rites. A character may only ever know a maximum of five of these rites at a time, but there are rituals that can allow him to “reassign” the rituals he can use (see the Castigation Merit on p. 67)."
        }
    ]

}

const castigationData = [
    {
        "Name": "Abaddon’s Call",
        "Cost": "○, 2B/roll",
        "Dice Pool": "Resolve + Medicine",
        "Description": "Raise a corpse as an undead servant for (Castigation) hours. Spend a Willpower dot to raise indefinitely.",
        "Book": "NS 142",
        "Content": [
            {
                "type": "heading",
                "text": "Exanimator’s Call",
                "level": 1
            },
            {
                "type": "paragraph",
                "text": [
                    "Hunters the world over tell tales of encountering undead creatures that aren’t vampires: lurching zombies, hungry ghosts, vengeful revenants, etc. Many who take up the Vigil are forced to wonder from whence such creatures come. What wills an otherwise unexceptional corpse to get up and start shambling around? Sometimes it’s the work of witches, sometimes possessing spirits, and sometimes it’s the power of the Lucifuge. This Castigation allows the hunter to command a corpse to rise and come to the aid of its new master for a short duration—though rumors abound of ways to make the effects permanent."
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    "The use of this power is incredibly vulgar and not publicly tolerated by the Lucifuge, but this is largely a conspiracy of iconoclasts and outcasts, so rules don’t always apply."
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    "The force that animates the corpse is not necessarily that of the previous tenant. Popular wisdom would suggest a demon inhabits the body but it could possibly be a compelled spirit or simply the user’s own unconscious that dictates the actions of the body."
                ]
            }
        ],
        "fullCost": "1 Willpower, X points of bashing damage (see below)",
        "Action": "Extended (number of successes required equals two times the number of days the corpse has been dead, to a maximum of 20 days; each roll is equal to fifteen minutes, and during each roll the hunter suffers two points of bashing damage as he is wracked with aches and seizures).",
        "fullDicePool": "Resolve + Medicine",
        "RollResults": [
            {
                "label": "Dramatic Failure",
                "text": "The body animates as if by a normal success in all ways, except it will focus its attention solely on ending the one who called it to life, attacking ceaselessly until it is felled."
            },
            {
                "label": "Failure",
                "text": "The hunter takes the wounds, but nothing occurs: the Castigation doesn’t elicit even a twitch from the body."
            },
            {
                "label": "Success",
                "text": "The use of this Endowment wracks the user’s body with pain as she exerts her will over death itself. The raised body is in all ways a shambling simpleton and is only good for following simple instructions (“Go get me that book from the second floor,” is fine, but “Drive my car northbound on Route 22” will be met with gaping confusion). If called to fight it will do so in the most brutish and straightforward manner possible. Every attack will be an “all-out attack” (see the World of Darkness Rulebook, p. 157); it cannot use weapons or tools; it does not roll for Initiative (automatically going last); and it will pursue its target with no regard for its own safety or that of the practitioner and her cellmates. If the creature sustains more damage of any type than it has Health levels it returns to its inanimate state (a lot worse for wear, but hey, it was already dead) and cannot be used for this infernal purpose again. It only rises for one hour of time per the hunter’s dots in Castigation, but with the cost of one permanent Willpower dot, the creature will remain shambling about for as long as it is able. As above, it doesn’t heal damage and retains any wounds (even those from, say, accidentally tumbling down a set of steps) for the remainder of its potentially-short unlife."
            },
            {
                "label": "Exceptional Success",
                "text": "As above, but the creature doubles its Defense and Speed scores (see sidebar for traits)."
            }
        ],
        "Notes": [
            {
                "type": "heading",
                "text": "Suggested Modifiers",
                "level": 2
            },
            {
                "type": "table",
                "headers": ["Modifier", "Condition"],
                "rows": [
                    ["+2", "Recently dead (within an hour)"],
                    ["-2", "Dead longer than a year"]
                ]
            }
        ],
    },
    {
        "Name": "Abyssal Bondage",
        "Cost": "○, 1L/1A",
        "Dice Pool": "Stamina + Resolve",
        "Description": "Mark a witch with blood from a vein to redirect their next spell, or from an artery to send it completely out of control.",
        "Book": "WF 126",
        "Content": [
            {
                "type": "paragraph",
                "text": [
                    "Hell is a place of fire and brimstone, but it contains multitudes. Part of it is the Great Pit, the well that scours souls from existence. Some ancient tomes equate this Pit with the metaphysical Abyss, the Formless Land, or the Void. Nobody knows the truth, but they do know that witches are scared shitless of anything summoned forth from this Abyss. The witch’s shadow intensifies into a pool of inky blackness, and tendrils of Abyssal energies snake into her soul, consuming the magical energy within."
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    "The hunter cannot contain the energy of the Void within her — if she tried, she’d be lucky to end up in Hell. Instead she uses herself as a conduit, pouring the energy into a handful of her own blood. The blood must be freshly drawn at the time of the ritual. The touch of the Formless Land still chills her to the bone, reminding her of what awaits if the First of the Fallen finds her wanting. When the hunter splashes her Abyssal blood over a witch, the energies react with the arcane power that a witch calls forth, warping it beyond her control. The entities that wait in the Void lust after the life-force of pure arterial blood. It’s more costly for the hunter to draw it out, but the effects can be nothing short of astounding."
                ]
            }
        ],
        "fullCost": "1 Willpower and one point of lethal or aggravated damage (see below)",
        "Action": "Extended (15 successes required, each roll represents 10 minutes)",
        "fullDicePool": "Stamina + Resolve",
        "RollResults": [
            {
                "label": "Dramatic Failure",
                "text": "The Lucifuge is wracked by the energies of the Void as they feast upon her soul and devour her. She suffers one point of lethal damage over and above whatever injury she took for the rite to work, and loses two points of Willpower in addition to the cost of this rite."
            },
            {
                "label": "Failure",
                "text": "The hunter fails to make contact with the Formless Land. Perhaps that’s for the best."
            },
            {
                "label": "Success",
                "text": "The hunter infuses an amount of her blood with the energy of the Abyss, using herself as a channel. She must still strike the witch in question with her blood, which is a Dexterity + Athletics roll minus the target’s Defense. Each use of this ritual empowers enough blood for one attempt only, and the blood remains empowered until the next sunrise. If the hunter took lethal damage when preparing this rite, the witch’s next spell has strange effects. The spell affects a random target chosen from all possible viable targets in range — if the spell targets the witch’s human ally, then all humans in the range of the spell are possible targets, including the hunters and the witch. If the casting roll succeeds, the new target takes the effects of the spell as normal. If the casting roll fails, the new target suffers the opposite effects: a fireball cleanses its target of wounds; a sensory spell strikes the target blind. If the hunter powered this rite with aggravated damage, then not only are the specifics of the magic altered, but the form itself twists out of control. The Storyteller should come up with a new spell from the same Mystery as the intended one, though not constrained by the witch’s rating in that Mystery. The new spell affects everyone in a radius of 20 yards per dot of the witch’s Gnosis."
            },
            {
                "label": "Exceptional Success",
                "text": "The dark powers of the Abyss smile upon the hunter, refunding the point of Willpower and making sure they know of the hunter’s existence."
            }
        ],
        "Notes": [],
    },
    {
        "Name": "Calling Forth the Pit",
        "Cost": "2L",
        "Dice Pool": "Presence + Resolvevs Resistance",
        "Description": "Summon or banish a demon.",
        "Book": "HTV 164",
        "Content": [
            {
                "type": "paragraph",
                "text": [
                    "According to the Lucifuge’s infernal lore, when Lucifer was cast into Hell, it was an empty, endless void. Only by the light of the Morningstar’s will was it transformed into a kingdom suitable for his demonic followers. The very act of willing the unholy city into being, however, bound up its existence with Lucifer’s. The First of the Fallen is a part of Hell now, and it is a part of him. His mortal descendants carry a bit of that connection in their blood, and through application of the proper ritual acts, a Lucifuge may draw a portion of Hell to himself, commanding the pit to either disgorge one of its demonic denizens into the earthly realm or to swallow up one of its children and drag it back to Hell."
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    "The Lucifuge may attempt to summon a random demon or a specific entity whose name he knows. If he knows the name of a demon he tries to banish, he receives a +2 bonus to his dice pool. A named demon can even be summoned from elsewhere in the material world."
                ]
            }
        ],
        "fullCost": "The Lucifuge must perform a blood sacrifice that inflicts 2 points of lethal damage. This damage may be inflicted on himself or on another intelligent being.",
        "Action": "Extended (10 successes; each roll requires a minute in time) to summon a demon, extended and contested to banish one. The first competitor to accumulate the required successes wins",
        "fullDicePool": "Presence + Resolve versus the subject’s Resistance.",
        "RollResults": [
            {
                "label": "Dramatic Failure",
                "text": "The ritual or resistance fails outright and all accumulated successes are lost. If the attempt was a summoning ritual, the Lucifuge may try again; if the Lucifuge rolls a dramatic failure on a banishment roll, he cannot try to banish that demon again for one month. If the demon fails dramatically on a banishment resistance roll, it is immediately banished to the netherworld from whence it came."
            },
            {
                "label": "Failure",
                "text": "No successes are accumulated at this stage of the contest."
            },
            {
                "label": "Success",
                "text": "Successes are accumulated toward the total required. If the total reaches 10+ successes for the Lucifuge on a summoning ritual, a demon manifests in the physical world at a point specified by the hunter. The hunter has no control over the summoned demon unless he knows the Mandate of Hell Castigation ritual. If the hunter reaches 10+ successes first on a banishment ritual, the demon is swallowed up by the yawning black gulf of Hell and immediately banished from the mortal world. If the demon acquires 10+ successes first, it is not banished and is immune to further attempts for 24 hours."
            },
            {
                "label": "Exceptional Success",
                "text": "Tremendous progress is made or resistance is shown. Upon an exceptional success, the entity may not return to the mortal world for one month."
            }
        ],
        "Notes": [],
    },
    {
        "Name": "Coils of Iniquity",
        "Cost": "※",
        "Dice Pool": "(10 - Morality) + Empathy",
        "Description": "Anoint yourself with sinner's blood. Apply successes as a Social bonus with those sharing the sinner's Vice for a day.",
        "Book": "C&C 69",
        "Content": [
            {
                "type": "paragraph",
                "text": [
                    "Some within the Lucifuge coyly refer to this as the “vice grip,” as it serves to give the Lucifuge some advantage over those whose predilections and sins are of a specific… flavor."
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    "More specifically, it grants the Devil’s agent the ability to more easily manipulate those whose Vice is the same as the one chosen by the hunter using this ritual. The hunter enacts the ritual in the morning just as the sun rises, anointing herself with three drops of sinner’s blood (one drop on her tongue, one in each eye). The Vice caught in the victim’s blood (like a mosquito in amber) infuses the hunter with an attunement to that Vice, offering her a bonus toward all those who possess that same Vice over the next 24 hour period. If this Castigation ritual is not performed during the hours surrounding dawn (between 5:00 AM and 7:00 AM), it automatically fails."
                ]
            }
        ],
        "fullCost": "Three drops of blood (human or, at least, from a sentient creature), as described above. The Vice belonging to the one-time bearer of that blood is what matters most.",
        "Action": "Instant",
        "fullDicePool": "(10 – Morality) + Empathy",
        "RollResults": [
            {
                "label": "Dramatic Failure",
                "text": "The Lucifuge grows distant from the Vice in question rather than gaining proximity. She suffers a -3 penalty on any action performed against a character possessing that Vice."
            },
            {
                "label": "Failure",
                "text": "The sympathy between the hunter and the Vice in those drops of blood fails to manifest."
            },
            {
                "label": "Success",
                "text": "For every success gained on the roll, the hunter gains bonus dice on all Social rolls performed against characters possessing the chosen Vice (i.e. the Vice of the individual from whom the three drops of blood were taken). If the Vice trapped in those three drops of blood was Gluttony, and the hunter gains three successes, then she would gain a +3 bonus on all Social rolls involving Gluttonous characters."
            },
            {
                "label": "Exceptional Success",
                "text": "Beyond the bonus of added successes, the Lucifuge also gains a point of Willpower from the heady rush of sinful sympathy."
            }
        ],
        "Notes": [],
    },
    {
        "Name": "Familiar",
        "Cost": "—",
        "Dice Pool": "None",
        "Description": "A demonic servant in animal or Twilight form.",
        "Book": "HTV 165",
        "Content": [
            {
                "type": "paragraph",
                "text": [
                    "Descendants of Lucifer often attract tiny, lesser demons to themselves, willingly or unwillingly. These imps and familiars are drawn to the infernal spark in the blood of a Lucifuge, and are compelled by the divine right of Lucifer’s blood to serve and obey. Some do so willingly, so slavish in their devotion to their earthly masters that they are willing to oppose the edicts of Hell. Others serve reluctantly, disgusted to see the seed of the Morningstar debase itself as a servant of humanity but nevertheless bound by their master’s blood. Still others are insidious, pretending to give loyal service while seeking every opportunity to seduce their “masters” into the open service of evil."
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    "A familiar comes in one of two forms, Twilight or embodied. The Lucifuge chooses which type he will have when he learns this rite; the only way to change the type of a character’s familiar is to unlearn the Familiar ritual and then relearn it later. At the player’s choice, this might represent the dismissal of one servant and the summoning of another, or the swap might represent an elaborate ritual to clothe a Twilight familiar in flesh (or release an embodied one from its fleshy prison). The altered familiar might have similar Traits in its new form, but it might just as easily be radically different in form and powers, with only the personality and memories remaining the same. A character may only have one familiar at a time."
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    "A Twilight familiar is a spiritual entity with no proper physical body of its own. A Twilight familiar is also known as a “fetch.” Twilight familiars can temporarily manifest like ghosts (see “Manifestations,” p. 210 in The World of Darkness Rulebook), but their ephemeral bodies are otherwise invisible and intangible to the physical world. A Twilight familiar must manifest or use Dread Powers to affect anything in the physical world — except for its master, whom it can touch at will (its master can also see and speak with the familiar freely, even if he cannot see or hear into Twilight). A Twilight familiar often leaves behind a subtle sign of its presence, even when it is not manifested. A whiff of brimstone might waft from its location, or its shadow might briefly flicker in the corner of an observer’s eye. Twilight familiars can take any form imaginable: most are small, impish creatures that resemble classical devils or mythological monsters, but they can be as large as man-sized. A Twilight familiar often represents its master’s Vice: a Wrathful hunter might have a familiar built like a bull, all spines and blood-drenched fangs, while a Lustful character might be served in a more personal capacity by a sultry, fiery-eyed succubus or incubus."
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    "An embodied familiar has a physical body and takes the form of an earthly creature. Many of the legendary stories of witches with cunning animal companions — cats, rats, bats — are actually references to embodied familiars. An embodied familiar often has eyes that gleam an unusual color when they catch the light or that display a peculiar intelligence. Many times, the creature’s markings in some way reflect its master’s appearance. A Lucifuge with an ugly scar across his cheek might attract a catlike creature with an odd stripe of a contrasting color on its jaw. This sometimes leads to the misconception that a Lucifuge can physically transform into an animal. Remember also that an embodied familiar is a demon in animal form, not a true animal; many embodied familiars have one or two unnatural traits, like paws with a sickening resemblance to human hands or a vocalization that comes close to being actual speech. If an embodied familiar is slain, its infernal spirit usually discorporates and returns to the Hell from whence it came. Sometimes, though, it latches onto its master and feeds off his memories, drinking deep of the hunter’s soul to sustain itself in ethereal form. In game terms, a Lucifuge’s player may, upon the destruction of his embodied familiar, choose to immediately spend two experience points as a reflexive action to preserve the demon as a Twilight familiar. Effectively, the Lucifuge sacrifices these experience points to swap out his Familiar ritual without going through the usual extended Resolve + Occult roll. The Storyteller designs the demon’s traits, with the player’s participation. Each familiar begins play with at least one dot in each Attribute, with extra dots as listed in the sidebars. Twilight familiar Traits follow the same rules as those for ghosts, as described on page 208 of The World of Darkness Rulebook, except as noted in the Twilight Familiar Traits sidebar. Embodied familiars are treated as normal animals, except as described in the Embodied Familiar Traits sidebar."
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    "The master and familiar have an empathic connection; each can automatically feel the emotions of the other. (Magical effects that damage or manipulate the familiar through an emotional attack don’t damage or manipulate the master.) The familiar can always understand its master, no matter what language the master speaks, and vice versa."
                ]
            }
        ],
        "fullCost": "",
        "Action": "",
        "fullDicePool": "",
        "RollResults": [],
        "Notes": [
            {
                "type": "heading",
                "text": "Twilight Familiar Traits",
                "level": 2
            },
            {
                "type": "line",
                "label": "Attributes",
                "text": "3/3/2 (allocate dots in any order among Power, Finesse and Resistance)"
            },
            {
                "type": "line",
                "label": "Willpower",
                "text": "Equal to Power + Resistance"
            },
            {
                "type": "line",
                "label": "Essence",
                "text": "10 (10 max); the demon regains one point of spent Essence per day spent in its master’s presence. A familiar can also regain spent Essence by witnessing (or causing) acts related to its Vice."
            },
            {
                "type": "line",
                "label": "Initiative",
                "text": "Equal to Finesse + Resistance"
            },
            {
                "type": "line",
                "label": "Defense",
                "text": "Equal to highest of Power and Finesse"
            },
            {
                "type": "line",
                "label": "Speed",
                "text": "Equal to Power + Finesse + 5"
            },
            {
                "type": "line",
                "label": "Virtue",
                "text": "Choose Virtue"
            },
            {
                "type": "line",
                "label": "Vice",
                "text": "Any. Most familiars share their master’s Vice, but not all. A familiar regains all spent Willpower by fulfilling its Vice once per chapter, just as a mortal does for fulfilling her Virtue."
            },
            {
                "type": "line",
                "label": "Morality",
                "text": "Familiars have no Morality score."
            },
            {
                "type": "line",
                "label": "Size",
                "text": "5 or less"
            },
            {
                "type": "line",
                "label": "Corpus",
                "text": "Equal to Resistance + Size"
            },
            {
                "type": "line",
                "label": "Born of Sin",
                "text": "The Twilight familiar is a base creature, born of sin and capable of calling that sin out in others. The familiar can manipulate the presence of its Vice, enhancing or manipulating its manifestation in a creature, mortal or otherwise. The target need not have the same Vice as the demon; he must merely be experiencing the emotion. A character whose Vice is Pride can still feel lust for a beautiful woman, or envy of a neighbor’s new car, for example. The demon cannot create a Vice where none exists."
            },
            {
                "type": "paragraph",
                "text": [
                    {
                        "text": "Enhancing a Vice",
                        "bold": true
                    },
                    ", making an individual feel the emotion more strongly, requires the expenditure of one point of Essence and a contested roll of Power + Finesse versus the target’s Resolve or Composure, whichever is higher. The familiar can produce a moderate shift with a success; mild attraction might become infatuation, or infatuation might become full-blown obsession in the case of Lust, but mild attraction cannot be turned into full-blown obsession directly. An exceptional success, however, allows the demon to fan even the tiniest spark of Vice into an inferno. The changes last for one minute per success. The demon cannot enhance the same Vice in the same target more than once per scene."
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    {
                        "text": "Manipulating a Vice",
                        "bold": true
                    },
                    ", changing its target, requires the expenditure of two points of Essence and a contested roll of Power + Finesse versus the target’s Resolve or Composure, whichever is higher. Success allows the demon to slightly alter the target of a character’s emotion. For example, a character feeling slothful toward his work might have that laziness redirected toward laziness regarding investigating those weird sounds in the basement, or a man proud of his status as a player might instead be made to focus that pride on his ass-kicking prowess — which might cause problems if he’s never been in a fight in his life."
                ]
            },
            {
                "type": "line",
                "label": "Dread Powers",
                "text": "Assign three dots among Dread Powers."
            },
            {
                "type": "line",
                "label": "Ban",
                "text": "The familiar has one Ban, chosen by the Storyteller. (See “The Demon’s Ban,” p. 284.)"
            },
            {
                "type": "line",
                "label": "Anchor",
                "text": "The demon’s master is considered to be its anchor to the material world, although there is no limit to how far a familiar can travel from its master. See “Anchors” on p. 209 of the World of Darkness Rulebook."
            },
            {
                "type": "paragraph",
                "text": [
                    "When a familiar manifests, use the following modifiers:"
                ]
            },
            {
                "type": "table",
                "headers": ["Location", "Modifier"],
                "rows": [
                    ["Profane or blasphemous site (desecrated church, massacre location)", "+3"],
                    ["Place associated with the demon’s Vice", "+2"],
                    ["Occult location (ley line nexus, pagan temple, etc.)", "+1"],
                    ["Within line of sight of a holy symbol (cross, Star of David, statue of Buddha)", "-1"],
                    ["Within line of sight of a church, synagogue, temple, etc.", "-2"],
                    ["Holy ground", "-3"]
                ]
            },
            {
                "type": "heading",
                "text": "Embodied Familiar Traits",
                "level": 2
            },
            {
                "type": "line",
                "label": "Attributes",
                "text": "5/4/3 (divide among Mental, Physical and Social)"
            },
            {
                "type": "line",
                "label": "Skills",
                "text": "9/6/3 (divide among Mental, Physical and Social); the familiar receives a free dot in Brawl, Larceny, or Stealth"
            },
            {
                "type": "line",
                "label": "Willpower",
                "text": "Equal to Resolve + Composure"
            },
            {
                "type": "line",
                "label": "Essence",
                "text": "10 (10 max)"
            },
            {
                "type": "line",
                "label": "Initiative",
                "text": "Equal to Dexterity + Composure"
            },
            {
                "type": "line",
                "label": "Defense",
                "text": "Equal to lowest of Dexterity and Wits"
            },
            {
                "type": "line",
                "label": "Speed",
                "text": "Strength + Dexterity + \"species factor\" (based on its animal type)"
            },
            {
                "type": "line",
                "label": "Virtue",
                "text": "Choose Virtue"
            },
            {
                "type": "line",
                "label": "Vice",
                "text": "Any. Most familiars share their master’s Vice, but not all. A familiar regains all spent Willpower by fulfilling its Vice once per chapter, just as a mortal does for fulfilling her Virtue."
            },
            {
                "type": "line",
                "label": "Morality",
                "text": "Familiars have no Morality score."
            },
            {
                "type": "line",
                "label": "Size",
                "text": "5 or less (based on its animal type)"
            },
            {
                "type": "line",
                "label": "Health",
                "text": "Equal to Stamina + Size"
            },
            {
                "type": "line",
                "label": "Dread Powers",
                "text": "Assign four dots among Dread Powers."
            },
            {
                "type": "line",
                "label": "Ban",
                "text": "The familiar has one Ban, chosen by the Storyteller. (See “The Demon’s Ban,” p. 284.)"
            },
            {
                "type": "line",
                "label": "Innocuous",
                "text": "Embodied familiars are very good at not being noticed by others. Anyone but its bonded master suffers a -2 penalty on perception rolls to notice the familiar, unless it does something to draw attention to itself."
            },
            {
                "type": "line",
                "label": "Through the Eyes",
                "text": "By spending a point of Willpower, the master of an embodied familiar can shift his perceptions to the familiar. He sees what the familiar sees, hears what it hears, and so on. He is oblivious to his own surroundings while viewing through his familiar, but still possesses tactile sensation (thus he is aware of any damage or physical sensation to his own body). Ending this viewing is a reflexive action and requires no roll."
            }
        ],
    },
    {
        "Name": "Familiar Betrayal",
        "Cost": "2L, ○/day",
        "Dice Pool": "Presence + Resolvevs Resistance",
        "Description": "Summon a werewolf's spirit familiar by name and bind its service for six days.",
        "Book": "SpSl 148",
        "Content": [
            {
                "type": "paragraph",
                "text": [
                    "Many werewolf packs follow a tradition of binding a spirit to the pack as a whole. This familiar spirit can aid the creatures by lending them some of its strength, as a liaison to other spirits and as a spy or guardian. The Children of the Seventh Generation are well versed in the aspects of familiar relationships and use that knowledge to force pack familiars to turn against their masters."
                ]
            }
        ],
        "fullCost": "1 Willpower each day in addition to other costs (see below)",
        "Action": "",
        "fullDicePool": "",
        "RollResults": [],
        "Notes": [
            {
                "type": "line",
                "label": "Effect",
                "text": "Mechanically, Familiar Betrayal works in the exact same way as the summoning aspect of “Calling Forth the Pit” (see Hunter: The Vigil, p. 164), with the exception that the hunter must know the name of the pack familiar he is attempting to summon. Hunters could learn the true name of the familiar by questioning other spirits in the area, by overhearing the pack talk about the spirit, or by tricking the familiar into revealing it to them. If the hunter succeeds in summoning the spirit she may immediately bind that spirit to serve her as a temporary familiar (characters may only have one familiar at a time) as per the “Familiar” Castigation. For the next six days the spirit is bound to follow the wishes of the hunter to the letter, even if it means turning against the spirit’s former masters. To maintain her hold over the spirit, the hunter must reinforce the binding each evening at sunset by spending one Willpower. Unless the familiar does something to betray its new allegiance, the werewolf pack remains ignorant of the betrayal."
            }
        ],
    },
    {
        "Name": "Family Vestment",
        "Cost": "○(1L+)",
        "Dice Pool": "Strength + Stamina",
        "Description": "Physically manifest a chosen demonic trait, such as wings or claws, for a scene or longer. Suffer derangement for a day thereafter.",
        "Book": "C&C 69",
        "Content": [
            {
                "type": "paragraph",
                "text": [
                    "Every Lucifuge hunter’s bloodline contains some germ of the infernal; some chromosomal pair or twist of DNA bears a whiff of sulfur, a throwback to whatever elder beast seduced or forced its way into the family so many eons ago."
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    "For the most part, this reveals itself in subtle ways—the agelessness of the hunter, the ability to command demons with but a salacious whisper, the power to see the stains of sin that mark a man’s soul."
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    "Some, though, see the true lineage of their family brood in unexpected—and ultimately more overt—ways. Just as parents might pass to their children green eyes, a receding hairline, or an increased risk for prostate cancer, the Lucifuge may find that the infernal spark within has passed down strange physical augmentations known as Vestments."
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    "The Vestment isn’t ever-present; a lashing tail or hooked claws don’t exist until the hunter ritually calls upon them, drawing them out of his damaged genetics and to his flesh."
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    "The player may buy this ritual multiple times (remember, though, he can only possess as many rituals as he has dots in Castigation), with each instance offering one new Vestment from this list:"
                ]
            },
            {
                "type": "list",
                "items": [
                    [
                        {
                            "text": "The Devil’s Wings",
                            "bold": true
                        },
                        ": The hunter grows wings. They might appear as bloodstained angel wings, ragged bat wings, or something more bizarre (gold leaf with shifting veins of copper). The character’s clothing must accommodate the wings, or the transformation will tear the clothing and cause the hunter two points of bashing damage. The character gains actual flight capabilities, but since he’s not a demon, it’s imperfect: he can stay aloft for a number of turns equal to his Strength dots + dots possessed in the Castigation Endowment. The character flies at a Speed of twice his normal Speed score. Tricky maneuvers may require a Dexterity + Athletics roll to perform (as the Storyteller’s discretion)."
                    ],
                    [
                        {
                            "text": "Dread Attack",
                            "bold": true
                        },
                        ": The Lucifuge manifests some physical change that allows him to do lethal damage on Brawl rolls (instead of the usual bashing). This could include ichorous black claws, a mouth of hooked teeth, a lashing tail or rough, scaly flesh."
                    ],
                    [
                        {
                            "text": "Dread Gaze",
                            "bold": true
                        },
                        ": The hunter’s eyes manifest a strange and unnatural color, perhaps even appearing reptilian or feline. Choose one Social Skill that Dread Gaze modifies; any time the hunter calls upon this Vestment, he gains a bonus to rolls involving that Skill equal to dots possessed in the Castigation Endowment."
                    ],
                    [
                        {
                            "text": "Hellflesh",
                            "bold": true
                        },
                        ": The hunter’s body in some way accommodates greater Health or flesh-bound armor (choose which at the time of purchasing this Vestment). The hunter’s flesh might bloat and swell or she might gain leathery skin or a layer of gristly muscle. She gains dots added to her Health or to her Armor (+1/+1) per dot possessed in the Castigation Endowment."
                    ],
                    [
                        {
                            "text": "Physical Endowment",
                            "bold": true
                        },
                        ": Choose one Physical Skill at the time of purchasing this ritual; the physical modification provides a bonus to that Skill (when the modification is drawn to the flesh) equal to the character’s dots in the Castigation Endowment. The modification should be appropriate to the Skill it modifies—modifying Larceny might cause the character’s fingers to grow into something resembling multi-joint spider legs (for picking locks and pocket), while modifying Stealth might stain the character’s skin inky black. The only Skill that cannot be modified is Drive. Firearms could be modified with a change to one’s eyes, while Weaponry might cause the weapon-wielding arm to become more fluid in its movement due to length or additional joints."
                    ],
                    [
                        {
                            "text": "Vestment Of Your Own Design",
                            "bold": true
                        },
                        ": Players and Storytellers are encouraged to work together to come up with their own unique Vestments that might modify Defense, Speed, or mimic certain Merits."
                    ]
                ]
            }
        ],
        "fullCost": "1 Willpower point, and when the Vestment finally goes away, the character gains a mild derangement for the subsequent 24-hour period. Calling upon one’s demonic nature is rarely a comfortable feeling, and often leaves characters feeling less than human.",
        "Action": "Instant",
        "fullDicePool": "Strength + Stamina",
        "RollResults": [
            {
                "label": "Dramatic Failure",
                "text": "The character’s human nature and physiology prevails—sure, that sounds like a good thing, and in some ways, it is. But it doesn’t feel good; bones compress, bruises appear, and blood trickles from every orifice. The character suffers three points of bashing damage."
            },
            {
                "label": "Failure",
                "text": "The Vestment does not manifest."
            },
            {
                "label": "Success",
                "text": "The character manifests the Vestment, which lasts for one full scene. The character can extend it beyond the scene by willfully assuming one point of lethal damage to resist the change back to her wholly human form. Each point of damage taken in this way extends the duration by one additional scene."
            },
            {
                "label": "Exceptional Success",
                "text": "The character wears the flesh well. This allows the character to extend the duration by spending points of Willpower (one point per one scene) instead of suffering lethal damage."
            }
        ],
        "Notes": [],
    },
    {
        "Name": "Gaze of the Penitent",
        "Cost": "○",
        "Dice Pool": "Wits + Empathyvs Resolve",
        "Description": "Meet a subject's gaze to penalize their actions by (10 - Morality) for a turn per success.",
        "Book": "HTV 167",
        "Content": [
            {
                "type": "paragraph",
                "text": [
                    "Hell is a place of fire and torment, but also, according to many philosophies, a place where the evil is scourged from the soul so that it might pass on to the next world. The torments of the Pit are not punishment, but an encouragement to repentance. Tortures are tailored to the soul’s particular sins to remind the damned of what brought them there in the first place. Whether any soul actually escapes the iron walls of Pandemonium is a matter of philosophical debate, but Lucifuge who know this ritual are capable of drawing on that same affinity for the sins of an individual and laying them bare, wracking mortal man and unholy monster alike with the pain and guilt of past transgressions."
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    "The Gaze of the Penitent ritual requires eye contact; if the target moves about or actively avoids making eye contact, or if he wears dark glasses, the activation roll suffers a -1 penalty. The Lucifuge must also possess a bit of blood, hair, or similar substance from the target. This corporal requirement is waived if the Lucifuge has witnessed the target committing one of the seven deadly sins in the last 24 hours."
                ]
            }
        ],
        "fullCost": "1 Willpower.",
        "Action": "Contested.",
        "fullDicePool": "Wits + Empathy vs. Resolve.",
        "RollResults": [
            {
                "label": "Dramatic Failure",
                "text": "The hunter’s power is reflected back on herself. She suffers a penalty to all dice pools equal to (10 - her Morality) for the rest of the scene. She may spend a Willpower point to negate this penalty for a turn."
            },
            {
                "label": "Failure",
                "text": "The ritual fails to take effect."
            },
            {
                "label": "Success",
                "text": "The target of the ritual is wracked with guilt and the imagined torments of Hell that will be visited upon him for his sins. He suffers a penalty to all dice pools equal to (10 - his Morality) for a number of turns equal to the successes rolled on the activation roll. He may spend a Willpower point to negate this penalty for a turn and act normally."
            },
            {
                "label": "Exceptional Success",
                "text": "The guilt and pain last for an entire scene."
            }
        ],
        "Notes": [],
    },
    {
        "Name": "Guilt’s Bloody Trail",
        "Cost": "○",
        "Dice Pool": "Intelligence + Investigationvs Wits + Subterfuge",
        "Description": "Track a corpse's murderer by occult stigmata for a scene.",
        "Book": "Slash 161",
        "Content": [
            {
                "type": "paragraph",
                "text": [
                    "The torments of Hell scourge all traces of sin from the souls of men. That much is true. Hell knows and sees all sins, even those that man chooses to ignore. A member of the Lucifuge can tap into this universal library of guilt and sin, bringing a sign of Hell’s impending judgment to a killer. The hunter must be present at the scene of a murder, with the body still in residence. He smears the deceased’s blood on his tongue and concentrates. After a few seconds, he begins to feel a pull towards the killer. At the same time, the killer develops stigmata — wounds on the palms or wrists that bleed freely and do not heal. Medical examination shows no cause for the wounds, but enough fresh blood wells up through them to soak through the thickest bandage. The killer isn’t losing his own vital fluids; instead, the blood that drips from his hands is that of his victim. Any forensics test will bear that out — the blood is identical to that in the victim’s body at the time of death."
                ]
            }
        ],
        "fullCost": "1 Willpower",
        "Action": "Contested; resistance is reflexive.",
        "fullDicePool": "Intelligence + Investigation vs. Wits + Subterfuge",
        "RollResults": [
            {
                "label": "Dramatic Failure",
                "text": "The hunter may taste the blood of someone other than the victim, or Hell’s archivists may just be in a capricious mood. Whatever the case, he receives all the effects of a success but directed against a person innocent of the murder."
            },
            {
                "label": "Failure",
                "text": "The hunter gains no information as to the killer’s location."
            },
            {
                "label": "Success",
                "text": "The killer’s hands or wrists start bleeding, slowly but steadily. After a couple of minutes, blood will drip from his fingers if the wounds remain unbound. Even if bound, the blood eventually soaks through the bandages. While the killer bleeds, the hunter knows a vague direction and distance — a rough idea that’s only accurate to about 500 yards and one of the eight compass points. The stigmata and associated direction sense last until the end of the scene."
            },
            {
                "label": "Exceptional Success",
                "text": "The blood flows over the killer’s hands, reminding him of his crime and stirring feelings of guilt and shame possibly long thought forgotten. This so unnerves the killer that he must make a degeneration roll as though he had committed a sin with Morality Threshold 2. This roll must still be made if the killer has changed his moral code to the point that murder is no longer a sin (see The Code, Hunter: The Vigil pg. 325)."
            }
        ],
        "Notes": [],
    },
    {
        "Name": "Hellfire",
        "Cost": "○(1A)",
        "Dice Pool": "Dexterity + Intelligence - Defense",
        "Description": "Hurl a bolt of unnatural fire, causing lethal or aggravated damage.",
        "Book": "HTV 168",
        "Content": [
            {
                "type": "paragraph",
                "text": [
                    "Hell has been associated with fire and brimstone, especially in Western culture, for hundreds, if not thousands, of years. Lucifer himself is called the Morningstar, which has implications of fiery radiance. The Lucifuge is at home with heat and flame, and through the power of their infernal parentage, some learn to control and conjure these hellish flames to scourge their enemies."
                ]
            }
        ],
        "fullCost": "1 Willpower or 1 Willpower and one point of aggravated damage (see below).",
        "Action": "Instant.",
        "fullDicePool": "Dexterity + Intelligence – target’s Defense.",
        "RollResults": [
            {
                "label": "Dramatic Failure",
                "text": "The Lucifuge conjures up hellish flames from the Abyss, but is unable to control them. She suffers three points of lethal damage, as though she has stepped into a bonfire with the intensity of a torch."
            },
            {
                "label": "Failure",
                "text": "The hunter fails to summon forth the fires of the Pit."
            },
            {
                "label": "Success",
                "text": "The Lucifuge conjures a bolt of unnatural, hellish fire that consumes her target. The Hellfire might look like ordinary flames, or it might be an unusual color or produce a sound like the roar of a wounded beast. The fire originates from the hunter, but may manifest in any fashion — some Lucifuge project fire from their hands or eyes; others breathe flame like a dragon. The fire inflicts one point of lethal damage, unless the target naturally suffers aggravated damage from fire (like a vampire). By reaching deeper into her infernal soul, a Lucifuge may conjure searing, white-hot Hellfire that inflicts aggravated damage, but this fire is too hot for any mortal to contain entirely. The Lucifuge herself suffers one point of aggravated damage as the flames wreathe her body."
            },
            {
                "label": "Exceptional Success",
                "text": "No additional effect beyond tremendous damage."
            }
        ],
        "Notes": [],
    },
    {
        "Name": "Infernal Visions",
        "Cost": "—",
        "Dice Pool": "Wits + Composure",
        "Description": "Gain harrowing insight into a topic once per session.",
        "Book": "HTV 168",
        "Content": [
            {
                "type": "paragraph",
                "text": [
                    "Hell has been associated with fire and brimstone, especially in Western culture, for hundreds, if not thousands, of years. Lucifer himself is called the Morningstar, which has implications of fiery radiance. The Lucifuge is at home with heat and flame, and through the power of their infernal parentage, some learn to control and conjure these hellish flames to scourge their enemies."
                ]
            }
        ],
        "fullCost": "1 Willpower or 1 Willpower and one point of aggravated damage (see below).",
        "Action": "Instant.",
        "fullDicePool": "Dexterity + Intelligence – target’s Defense.",
        "RollResults": [
            {
                "label": "Dramatic Failure",
                "text": "The Lucifuge conjures up hellish flames from the Abyss, but is unable to control them. She suffers three points of lethal damage, as though she has stepped into a bonfire with the intensity of a torch."
            },
            {
                "label": "Failure",
                "text": "The hunter fails to summon forth the fires of the Pit."
            },
            {
                "label": "Success",
                "text": "The Lucifuge conjures a bolt of unnatural, hellish fire that consumes her target. The Hellfire might look like ordinary flames, or it might be an unusual color or produce a sound like the roar of a wounded beast. The fire originates from the hunter, but may manifest in any fashion — some Lucifuge project fire from their hands or eyes; others breathe flame like a dragon. The fire inflicts one point of lethal damage, unless the target naturally suffers aggravated damage from fire (like a vampire). By reaching deeper into her infernal soul, a Lucifuge may conjure searing, white-hot Hellfire that inflicts aggravated damage, but this fire is too hot for any mortal to contain entirely. The Lucifuge herself suffers one point of aggravated damage as the flames wreathe her body."
            },
            {
                "label": "Exceptional Success",
                "text": "No additional effect beyond tremendous damage."
            }
        ],
        "Notes": [],
    },
    {
        "Name": "Mandate of Hell",
        "Cost": "(○)",
        "Dice Pool": "Presence + Composurevs Resistance",
        "Description": "Issue a demon a simple command instantly, or a detailed command as an extended action.",
        "Book": "HTV 169",
        "Content": [
            {
                "type": "paragraph",
                "text": [
                    "No matter how diluted, the blood of a Lucifuge contains a tiny spark of the blood royal of Hell. By dint of their ancestry, members of the Lucifuge have the ability to master demons and bend the legions of Hell to their will. Some manifest this bond by possessing a familiar spirit, others learn to summon or banish demonic entities, but still others draw upon their infernal sovereignty to dominate lesser demons and bend them to their will. The merest glance and a harsh word of command forces demonic beings to obey their mortal masters."
                ]
            }
        ],
        "fullCost": "None or 1 Willpower (see below).",
        "Action": "Contested or extended and contested (see below).",
        "fullDicePool": "Presence + Composure vs. subject’s Resistance.",
        "RollResults": [
            {
                "label": "Dramatic Failure",
                "text": "The command fails and the subject is immune to all further commands from the Lucifuge for 24 hours."
            },
            {
                "label": "Failure",
                "text": "A simple command fails to take effect, or no progress is made toward a more complex command."
            },
            {
                "label": "Success",
                "text": "The demon is compelled to obey a simple command for one turn, or progress is made toward giving the demon a complex command."
            },
            {
                "label": "Exceptional Success",
                "text": "A simple command is obeyed for a full minute, or exceptional progress is made toward a complex command."
            }
        ],
        "Notes": [
            {
                "type": "paragraph",
                "text": [
                    "The Mandate of Hell can be used in two ways: a short, simple, one- or two-word command (“Bow down,” “Kill him!”) is an instant contested action. More complex orders can also be given, but this requires that the demon be stationary (either willingly or bound in the Shackles of Pandemonium) and requires an extended action. The Lucifuge must spend 1 Willpower to enact a complex order."
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    "The number of successes required is equal to three per “step” of the complete command. For example, the command “Go to the corner of 7th and Maple, kill the man you find there, and afterwards, return to Hell and do not return” requires 12 successes, because it is a four-step command. The demon’s contested roll, on the other hand, must reach a total number of successes equal to (15 - the Lucifuge’s Morality). Each contested roll represents one turn in this scenario."
                ]
            }
        ],
    },
    {
        "Name": "Mark of Lucifuge",
        "Cost": "○/○○, 1L",
        "Dice Pool": "None",
        "Description": "Transfer a permanent brand onto a vampire or other monster. Lucifuge, Malleus, Cainites, and the inhuman recognize the monster's nature by the brand.",
        "Book": "NS 143",
        "Content": [
            {
                "type": "paragraph",
                "text": [
                    "The mythological Mark of Cain made it so all who looked upon the first murderer would know him. Thus were the wages of sin when angels roamed the earth. A lesser form of this mark is known to the Lucifuge. By laying a hand on the bare skin of a vampire, the Lucifuge brands its flesh with the merest stroke of that original mark. True to legend, once the vampire is marked, nothing can be done to rid itself of it. The char will not wash off long after the wound has healed; its burning cannot be carved out with a blade, nor can its flickering light be covered by any amount of clothing."
                ]
            }
        ],
        "fullCost": "1 or 2 Willpower (see below), 1 point of lethal damage",
        "Action": "Instant",
        "fullDicePool": "None",
        "RollResults": [],
        "Notes": [
            {
                "type": "paragraph",
                "text": [
                    "The hunter spends her Willpower and takes one point of lethal damage as she draws the mark across her palm (it appears like a second-degree burn). In many cases, the hunter may first need to succeed on a touch attack or have a cellmate grapple the creature."
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    "Branding causes one point of aggravated damage to the target. From now on, any and all Lucifuge to encounter the marked individual will recognize it and its unholy nature even across a crowded room. What’s interesting, though, is who else can see the mark."
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    "Other creatures can see the mark. Humans—meaning, most other hunters—cannot. Doubly strange is that hunters of both the Cainite Heresy and the Malleus Maleficarum can see the brand, and in fact the Cainites claim it as a mark quite familiar to them (they often leave the mark at the scenes of their hunts)."
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    "This ritual works on other creatures besides vampires, but doing so necessitates spending 2 Willpower points instead of the 1 necessary to “brand” a vampire."
                ]
            }
        ],
    },
    {
        "Name": "Mark of the Beast",
        "Cost": "○○, 1L",
        "Dice Pool": "Resolve + Intimidation",
        "Description": "Take the shape of a demon temporarily, gaining +1 Size, +2 Armor, and (Castigation) bonus Physical Attribute dots. While in demon form, you may heal by spending Willpower and incapacitate mortals in terror.",
        "Book": "SpSl 148",
        "Content": [
            {
                "type": "paragraph",
                "text": [
                    "Though formidable, the strength of a werewolf is nothing when compared with that of true demons of the pit. As their lord and ruler, the strength of Lucifer eclipses that of even the mightiest of his legion and his children can call upon that unholy strength. The process isn’t pleasant. To call up the strength of hell requires the Children of the Seventh Generation to take on the guise of their demonic ancestor in a painful transformation."
                ]
            }
        ],
        "fullCost": "2 Willpower; 1 point of lethal damage",
        "Action": "Instant",
        "fullDicePool": "Resolve + Intimidation",
        "RollResults": [
            {
                "label": "Dramatic Failure",
                "text": "The hunter fails to transform but still suffers the aftereffects of a transformation."
            },
            {
                "label": "Failure",
                "text": "The transformation fails."
            },
            {
                "label": "Success",
                "text": "The hunter successfully transforms."
            },
            {
                "label": "Exceptional Success",
                "text": "As above and the turns spent in demonic form don’t count against the maximum number of turns for the day (the character is still limited to the number of turns she can maintain the transformation for that scene, however)."
            }
        ],
        "Notes": [
            {
                "type": "line",
                "label": "Effect",
                "text": "The child of Lucifer calls upon her demonic heritage and takes the form of a demon. The transformation takes one turn and the hunter twists and writhes in agony as her body changes, resulting in one point of lethal damage. No two members of the Lucifuge share the exact same features after the transformation. One member might take the form of a fallen angel with ripped and tattered wings, weeping tears of blood that mar otherwise perfect features, while the form of another member might echo the bestial nature of her sire complete with burning red eyes, claws, and fangs. The demonic visage remains consistent each time the hunter activates the Castigation, leading some of the Lucifuge to wonder if the demonic version isn’t their soul’s “true” form."
            },
            {
                "type": "paragraph",
                "text": [
                    "While transformed, the hunter gains a pool of points equal to her Castigation score that she may use to increase any Physical Attribute in any combination she desires. A hunter with four dots in Castigation could, for example, raise her Strength by two and her Stamina by two, or instead raise her Dexterity by two, her Strength by one and her Stamina by one. This effect ignores the usual Attribute maximum for mortal characters. The character’s Size is also increased by one (remember to recalculate secondary Attributes such as Speed and Health based on the new form). The hunter may heal wounds of any type by spending one Willpower (one Willpower spent heals one wound) and she gains an Armor rating of two. The presence of the demonic form can inspire fear and terror in those who witness it (even other hunters) similar to the effects of Lunacy. The flesh of a mortal can only maintain the form of a demon for a limited time and is physically, mentally, and spiritually exhausting. The hunter can only remain in her demonic form for a number of turns equal to her Stamina + Castigation each day, though she may voluntarily end the transformation at any time (turns may be divided over multiple uses)."
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    "Any wounds suffered by the character that exceed her normal Health after she returns to mortal form are not carried over to her human body. Instead, the twisted nature of the demonic form inflicts the wounds on the very next person (or thing) the hunter sees before lapsing into unconsciousness (the presence of extra wounds indicates that the normal Health track of the hunter has already been filled). Any damage caused by the hunter while in demonic form is considered lethal damage, regardless of source, unless the hunter does something to change his damage to aggravated (using silver against werewolves, for example)."
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    "After the hunter reverts to her normal form she suffers from a wave of exhaustion that hinders her ability to act or even think clearly. Until the hunter sleeps for a full eight hours, any action taken by the character is penalized -3 dice. Potentially more dangerous is the spiritual exhaustion. Calling on her demon form is recognition of the dark side of her nature and her pool to resist degeneration is reduced by one for the next 24 hours."
                ]
            },
            {
                "type": "line",
                "label": "Potential Modifiers",
                "text": "Mark of the Beast is used within six minutes of 3 A.M. (+3)."
            }
        ],
    },
    {
        "Name": "Prima Dictum",
        "Cost": "○○, 2L",
        "Dice Pool": "Resolve + Occult + Castigationvs Resolve + Potency",
        "Description": "Mark a vampire (or learn variants for other monsters) with your blood and curse its Physical actions by your successes for a scene.",
        "Book": "NS 142",
        "Content": [
            {
                "type": "paragraph",
                "text": [
                    "Blood is the animating force behind the vampire’s impossible life. Some suggest it’s blood that keeps vampires somewhat human—as a human element, the blood perhaps keeps them from turning into the mindless dead, shambling toward an open patch of sunlight. It could be said that blood is also the power of the Lucifuge. Through the veins of every member in their twisted family tree flows the distilled power of the Prince of Darkness. Such infernal genetics—at times—come with a certain amount of privilege. Some family members have discovered the ability to deny vampires access to that which they rely on most—the very fuel that keeps them going in their cold mockery of life-blood. Generally, hunters who know the dark syllables of Prima Dictum do not like to linger long on the how’s and why’s of what it does, for fear that its origins contain madness for the castigator."
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    "By drawing his own blood, the hunter utters a curse that burbles up from the depth of Hell. She brings the supernatural authority of her bloodline to bear, denying the vampire access to their precious animating fluids. It’s unlikely that full rigor mortis steps in, but the creature’s limbs start to tighten—the mystical transubstantiation of blood into will begins to fail on a fundamental level."
                ]
            }
        ],
        "fullCost": "2 Willpower and 1 point of lethal damage (this damage must draw blood, and the blood must splash the vampire; this may necessitate success on a touch attack, first)",
        "Action": "Instant and contested",
        "fullDicePool": "Resolve + Occult + Castigation versus target’s Resolve + Potency",
        "RollResults": [
            {
                "label": "Dramatic Failure",
                "text": "In drawing the blood and uttering the attendant guttural curse, the hunter evokes quite a different response, sending the vampire into frenzy (p. 163) with herself as the primary focus of said frenzy."
            },
            {
                "label": "Failure",
                "text": "The Willpower is spent and the damage is taken, but curse doesn’t come and the vampire is unaffected."
            },
            {
                "label": "Success",
                "text": "The hunter wins the contest. The vampire’s body stiffens; it becomes difficult for the creature to move. The vampire suffers a penalty to all Physical rolls—the modifier is equal to successes gained over the creature. In addition, any rolls made on behalf of the vampire to use Dread Powers are penalized by -1 die. This penalty lasts for the remainder of the scene."
            },
            {
                "label": "Exceptional Success",
                "text": "As above, except now the vampire may not utilize any Dread Powers that necessitate an expenditure of Willpower (i.e. the creature’s own blood)."
            }
        ],
        "Notes": [
            {
                "type": "heading",
                "text": "Giving the Devil His Due",
                "level": 2
            },
            {
                "type": "paragraph",
                "text": [
                    "Players of Lucifuge hunters may purchase versions of this power that hinder the movements of other creatures, but he must purchase this ritual once per type of creature. So if the hunter wanted to hold sway over vampires and ghosts, the player would purchase Prima Dictum (vampires) and Prima Dictum (ghosts)."
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    "The power works the same, but it’s not necessarily the blood that “rebels” within the creature’s body. A ghost finds it Corpus turns turgid, inconsistent. A werewolf discover that her bestial musculature spasms and defies her will. A demon’s body reacts to the world as if it does not belong here (think of the possessed girl’s herky-jerky movements in The Exorcist). And so forth."
                ]
            }
        ],
    },
    {
        "Name": "Sense of the Unrighteous",
        "Cost": "—",
        "Dice Pool": "10 - Morality",
        "Description": "Detect sins hanging on people and places, as well as monsters without Morality.",
        "Book": "HTV 170",
        "Content": [
            {
                "type": "paragraph",
                "text": [
                    "Wickedness and sin are everywhere in the World of Darkness. More immediately, wickedness and sin are in the Lucifuge’s nature, no matter how they try to deny it. Rather than seal away that aspect of themselves, some Lucifuge choose to acknowledge it and embrace it as a tool. Sin calls to sin, as the saying goes, and by meditating on his own wicked nature, a Lucifuge can develop a sense for the sins of others."
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    "Individual hunters experience this sense in different ways. Some feel the taint of wickedness as an overpowering, nauseating stench; others see chains of sin winding around the unrighteous and dragging them down to Hell. Still others taste a foulness on their tongues or feel a throbbing pain behind their eyes or hear the screams of the damned surround them."
                ]
            }
        ],
        "fullCost": "None.",
        "Action": "Extended; each roll represents one minute of meditation on one’s own wickedness.",
        "fullDicePool": "10 - Morality",
        "RollResults": [
            {
                "label": "Dramatic Failure",
                "text": "The hunter is overwhelmed by his own sins; he loses all accumulated successes and must spend a Willpower point every turn in which he takes an action other than retching and cowering from his own nature."
            },
            {
                "label": "Failure",
                "text": "No progress is made toward reaching out to sense the unrighteous."
            },
            {
                "label": "Success",
                "text": "The Lucifuge makes a metaphysical connection between his own base nature and the wickedness of the world. He can sense the presence of sin in creatures and even locations within two yards per success. Characters with a Morality (or equivalent Advantage) of 7 or higher do not register to the character’s sense. Characters with a 5 or 6 Morality register as a mild sensation — a faint odor, ghostly image, and so on. Characters with a 3 or 4 Morality register as a moderate sensation — sounds about at conversational volume, a painful but not crippling headache, and so on. Characters with a 1 or 2 Morality register with extremely strong sensations: clear, realistic hallucinations, the smell of a slaughterhouse, and so on. Characters with a Morality of 0, or unnatural creatures entirely lacking a Morality Trait, register as overpowering sensations: a blinding headache, terrifyingly real hallucinations, and the like. The Lucifuge suffers a -1 penalty to all actions for the remainder of the scene after witnessing such shocking depravity. The Lucifuge can also sense the lingering presence of a sin committed in an area. A sin against Morality 4 registers as a minor sensation, sins against Morality 3 register as moderate sensation, sins against Morality 2 as severe sensations, and sins against Morality 1 as overwhelming sensations. The imprint of a Morality 4 sin can linger for a few days, Morality 3 sins linger for several months, Morality 2 sins for one to six years, and Morality 1 sins can linger indefinitely. Sins against Morality 5 or higher are not severe enough to linger beyond their commission. The hunter knows the source of the sins he senses (the person in question or the precise location and approximate time where a past sin occurred), but not the nature of the sin itself."
            },
            {
                "label": "Exceptional Success",
                "text": "If the player rolls five or more successes on a single roll, the hunter gains a general sense of an individual’s most severe sin or the nature of a lingering past sin."
            }
        ],
        "Notes": [
            {
                "type": "paragraph",
                "text": [
                    {
                        "text": "Example: ",
                        "bold": true,
                        "italic": true
                    },
                    {
                        "text": "Herr von Murnau, a Lucifuge hunter with a 5 Morality, uses Sense of the Unrighteous while sitting in the audience of a play that has been connected to some strange disappearances. On his first roll, he scores three successes, allowing him to sense wickedness within six yards of his seat. Most of the audience consists of average people with a Morality of 7, and do not register to his senses. One man in the next row, though, gives off a mild sense of sin; the smell of burned asphalt mingled with sulfur. Von Murnau continues to expand his senses, rolling four more successes on his next roll. Now he can sense 14 yards, enough to reach the stage and sense the severe wickedness of the lead actor — the man flickers in his sight, sometimes appearing normal, sometimes drenched in blood and smiling blandly. Hoping to gain some further clues to go on, von Murnau rolls again, this time getting an exceptional success. Not only do his senses now reach backstage, allowing him to feel the lingering presence of a severe sin that occurred three months ago — he feels an oppressive weight bearing down on him, and hears the echoes of a woman’s scream — but he also now has a general sense of the nature of those sins. He knows that the man in front of him once stole a car, the lead actor has murdered casually, and three months ago, an actress was raped in her dressing room.",
                        "italic": true
                    }
                ]
            }
        ],
    },
    {
        "Name": "Shackles of Pandemonium",
        "Cost": "1L",
        "Dice Pool": "Presence + Intimidationvs Resistance",
        "Description": "Anoint a ritual circle to bind a demon, naming a means by which it may escape.",
        "Book": "HTV 170",
        "RollResults": [
            {
                "label": "Dramatic Failure",
                "text": "The binding circle is broken, and the demon gains an extra point of Resistance for the duration of the scene."
            },
            {
                "label": "Failure",
                "text": "An equal number or the most successes are rolled for the demon. The binding circle is broken, and the spirit may escape."
            },
            {
                "label": "Success",
                "text": "The most successes are rolled for the Lucifuge. The demon is successfully bound and cannot break free except under a few circumstances:",
                "items": [
                    "If the ritualist who binds the demon releases it with the phrase, “I release you” or something similar.",
                    "If the binding circle is broken by an outside force. The bound demon cannot break the circle itself.",
                    "The Lucifuge must designate one other way that the demon can be freed, and she must express this method to at least two other entities within an hour of the demon’s binding. One of those two may be the demon, but it doesn’t have to be. If the condition is a task the demon must perform, it must be a task that can be performed within the binding circle. For example, the demon could be ordered to answer three questions truthfully if it wishes to be freed, but not to kill someone in another city."
                ]
            },
            {
                "label": "Exceptional Success",
                "text": "The most successes — five or more — are rolled for the Lucifuge. When the demon is freed by any means, it is immediately returned to the netherworld from whence it came; it cannot linger to, for example, inflict revenge on the hunter."
            }
        ],
    },
    {
        "Name": "Tongue of Babel",
        "Cost": "—",
        "Dice Pool": "None",
        "Description": "Understand and be understood by all spoken human language.",
        "Book": "HTV 171",
        "Content": [
            {
                "type": "paragraph",
                "text": "Once, the stories say, all humanity was united in a single language; any man could speak freely with any other, no matter how foreign. But when humankind came together to build a tower that would reach Heaven, God threw down that tower and cursed humankind to speak a multitude of tongues that divided them into nations and peoples and tribes and prevented such unity from recurring. The Lucifuge holds that the whole thing was Lucifer’s idea, one of the Fallen One’s more overt attempts to reopen the War in Heaven. Whether that’s true or not, the Lucifuge has carefully collected the scattered remnants of that lost primordial tongue, and through the power of its members’ semi-divine blood, they can learn to speak it."
            }
        ],
        "fullCost": "None",
        "Action": "None",
        "fullDicePool": "None",
        "RollResults": [],
        "Notes": [
            {
                "type": "paragraph",
                "text": "As long as the Lucifuge knows this ritual, he can speak and understand every human language on earth. He actually speaks the words in the ancient tongue of the tower-builders, but a vestige of racial memory coupled with his angelic blood causes listeners to hear him speaking a language they understand. Even if he addresses multiple people with no common language, each understands him clearly, and he understands them. This ritual gives the hunter no facility with secret codes or encryptions, nor does it allow him to understand the written form of any language he cannot already read. The words must be spoken by someone who understands them, not just read out phonetically. For example, a character who doesn’t speak Spanish cannot use this ritual to read a note written in Spanish, nor could he sound it out himself and gain understanding. He could, however, have a Spanish-speaker read it aloud and understand it that way. Finally, this ritual does not allow him to translate mystical languages, such as the tongue of spirits or the magical tongue witches sometimes use to enhance their magic."
            }
        ],
    },
    {
        "Name": "Unholy Escapologist",
        "Cost": "○",
        "Dice Pool": "Dexterity + Composure",
        "Description": "Be released from any physical bonds.",
        "Book": "CoH 165",
        "Content": [
            {
                "type": "paragraph",
                "text": "The Chevalier Thélème’s fearsome reputation has, in the past, largely hinged upon the fact that no one has ever really been able to hold him. That’s partly because of his uncanny skill in picking locks, but it’s also because his terrible heritage has given him the ability to slip any bond, to walk out of any locked prison cell. He touches a lock that confines him and concentrates for a moment... and it clicks open. He relaxes in the ropes that tie him down and closes his eyes... and they loosen."
            }
        ],
        "fullCost": "1 Willpower",
        "Action": "Instant",
        "fullDicePool": "Dexterity + Composure",
        "RollResults": [
            {
                "type": "line",
                "label": "Dramatic Failure",
                "text": "The hunter not only fails to escape his bonds, but finds that he cannot attempt to use this power again until he has been freed. The point of Willpower used to activate this power is lost."
            },
            {
                "type": "line",
                "label": "Failure",
                "text": "The character does not escape from his confinement. The point of Willpower used to activate this power is lost. The character may attempt to use this power again."
            },
            {
                "type": "line",
                "label": "Success",
                "text": "Ropes confining the character loosen, and locks click open (although locks close themselves again a few seconds after the character has escaped)."
            },
            {
                "type": "line",
                "label": "Exceptional Success",
                "text": "The character does not only escape his confinement, but does not need to pay the point of Willpower to do so."
            }
        ],
        "Notes": [
            {
                "type": "paragraph",
                "text": "The power only works on physical locks (including locked doors) and bindings that confine the character. It’s no use to a character for gaining entry into a place, or for freeing anyone other than himself (but if someone else shares his cell, they can of course walk out when the door opens, if they wish)."
            },
            {
                "type": "paragraph",
                "text": "Other members of the Lucifuge can learn this Castigation Endowment at the Storyteller’s discretion."
            }
        ],
    }
]

const elixirOverviewData = {
    "Name": "Elixir",
    "Content": [
        {
            "type": "paragraph",
            "text": "The mystery cultists of the Ascending Ones draw their power not from modern science or from the inexplicable mysteries of the occult, but from the ancient and revered practice of alchemy. By breathing in exotic incense, imbibing potions with bizarre hallucinatory effects, and even injecting potent narcotics into their veins, they unlock the higher powers of the human mind and body in order to make war on the creatures of the night."
        },
        {
            "type": "paragraph",
            "text": [
                "All Elixirs utilize the same dice pool of Stamina + Elixir to activate successfully. Most Elixirs, by themselves, are extraordinarily virulent poisons. It takes physical fortitude (represented by Stamina) and the enlightened will that comes from the training of an Ascending One (represented by dots in the Elixir Merit) to transform the poison into the mind-elevating Elixir that gives a hunter power. Dramatic failures usually affect the character as though she had been poisoned (see ",
                {
                    "text": "The World of Darkness Rulebook",
                    "bold": true
                },
                ", p. 181), while failures usually function like a dose of some form of drug (see ",
                {
                    "text": "The World of Darkness Rulebook",
                    "bold": true
                },
                ", p. 176)."
            ]
        },
        {
            "type": "paragraph",
            "text": [
                "In order to use an Elixir safely, an Ascending One must possess the Elixir Merit at the same dot rating or higher as the Elixir she wishes to use. A character may attempt to use an Elixir with a higher rating than she possesses, but she suffers a -2 penalty on the activation roll per difference in the ratings. A character with ",
                {
                    "text": "no",
                    "italic": true
                },
                " dots in Elixir may attempt to gain the benefits of an Elixir, but in addition to suffering the -2 penalty per dot difference, any failed activation is treated as a dramatic failure, even if the dice pool was not reduced to a chance die."
            ]
        },
        {
            "type": "paragraph",
            "text": [
                "A character begins play with a number of Elixirs whose total dot ratings equal her Elixir dots, plus her dots in Status (Ascending Ones). She may choose to purchase several low-level Elixirs or a few higher-level ones, but may not begin play with any Elixirs whose rating exceeds her Elixir Merit. All Elixirs are single-use items only. New Elixirs may be purchased at a cost of one experience point per dot rating; Practical Experience may be spent toward this purpose. It takes one day per dot rating to acquire a new Elixir, either by undergoing elaborate rituals of purification in order to receive the Elixirs from a superior or to brew them in an alchemical laboratory. An Ascending One ",
                {
                    "text": "may",
                    "italic": true
                },
                " purchase Elixirs whose dot rating is higher than her Elixir dots, but the experience cost and time are doubled for any dots in excess of her Elixir rating."
            ]
        },
        {
            "type": "paragraph",
            "text": "The Ascending One also begins each new story with a number of Elixirs whose total dot ratings equal her Elixir dots."
        },
        {
            "type": "paragraph",
            "text": [
                {
                    "text": "Example:",
                    "bold": true,
                    "italic": true
                },
                {
                    "text": " Alia is a beginning character with Elixir 3 and Status (Ascending Ones) 2. She begins play with five dots’ worth of Elixirs; she chooses two Crocodile Tears, an Eye of Ra and a Bennu-Bird Feather. Later in the chronicle, having used up her Eye of Ra and finding herself in need of offensive power, she decides to brew a replacement Eye of Ra and a Dragon’s Breath. The Eye of Ra takes one day to brew and costs one experience point; the Dragon’s Breath (rated at •••••) costs five experience points (three for the first three dots of its rating, two for the fourth because it exceeds Alia’s Elixir Merit) and takes five days to brew.",
                    "italic": true
                }
            ]
        }
    ]
}

const elixirData = [
    {
        "Name": "A Glimpse of After",
        "Rating": "•••",
        "Description": "Ignores wound penalties and only needs to roll for consciousness when rightmost Health is Lethal",
        "Book": "HTV 174",
        "Content": [
            {
                "type": "paragraph",
                "text": [
                    "According to medieval historians, initiates into the order of the ",
                    {
                        "text": "Hashshashin",
                        "italic": true
                    },
                    " assassins would be drugged with a slow-acting poison such that they felt as though they were dying. When they were given the antidote, they awoke to find themselves in a beautiful garden, feasted and succored by lovely virgins and greeted by the grand master of the order. They were told they were in Paradise, but they would be sent back to Earth to serve the order as faithful soldiers. If they ever wanted to return to the garden, they would serve loyally and carry out the goals of the order without question. Bolstered by the thought of awaiting Paradise, these assassins fought with a fanatic zeal that gave them the ability to fight far beyond the endurance of ordinary men. While the ",
                    {
                        "text": "Hashshashin",
                        "italic": true
                    },
                    " were not a creation of the Ascending Ones, the conspiracy did sometimes convert members of the opiate-addled assassins, and with them, this Elixir."
                ]
            },
            {
                "type": "paragraph",
                "text": "The clear, slightly cinnamon-flavored Elixir called A Glimpse of After fills the imbiber’s mind with visions of the heavenly afterlife that awaits him after death (each hunter is likely to experience his own unique glimpse of beyond — one may see a garden, another a meadow, and another an endless-yet-comforting void). These visions drive away the pain of injury and fatigue, turning the Ascending One into a nigh-unstoppable dynamo."
            }
        ],
        "Action": "Instant",
        "RollResults": [
            {
                "type": "line",
                "label": "Dramatic Failure",
                "text": "The hunter is affected by a Toxicity 4 lethal poison. He may resist this poison by rolling Stamina + Resolve as a contested action versus the poison’s Toxicity."
            },
            {
                "type": "line",
                "label": "Failure",
                "text": "The hunter receives no benefit and is affected as though he had taken a moderate (-2 to all dice pools and traits) dose of heroin."
            },
            {
                "type": "line",
                "label": "Success",
                "text": [
                    "The Ascending One is filled with a rapturous vision of Heaven that drives away the earthly distraction of torment and death. For the rest of the scene, he ignores all wound penalties. In addition, he automatically stays up and conscious if his rightmost Health box is marked with a bashing wound, and may make a reflexive Stamina roll each turn to stay up if his rightmost Health box is marked with a lethal wound (see ",
                    {
                        "text": "The World of Darkness Rulebook",
                        "bold": true
                    },
                    ", p. 173). He does continue to suffer blood loss if his last Health box is marked with a lethal wound.",
                    {
                        "type": "lineBreak"
                    },
                    "When the scene ends, the effects of this Elixir wear off and the character immediately suffers all his wound penalties and any effects of having his rightmost Health box filled."
                ]
            },
            {
                "type": "line",
                "label": "Exceptional Success",
                "text": "In addition to the above effects, the Ascending One suffers only half damage from bashing attacks for the duration of the Elixir’s effect (determine damage from the attack normally, then halve the number of successes, rounding up)."
            }
        ],
        "Notes": [],
    },
    {
        "Name": "Agora Salve",
        "Rating": "•••",
        "Description": "Add Elixir to Social rolls",
        "Book": "C&C p55",
        "Content": [
            {
                "type": "paragraph",
                "text": [
                    "Those who engage in ",
                    {
                        "text": "Sulha",
                        "italic": true
                    },
                    ", or diplomacy and peacemaking with the monsters, sometimes need a little edge when it comes to speaking. The Agora Salve can be that edge. (",
                    {
                        "text": "Agora",
                        "italic": true
                    },
                    " infers “public places,” and also refers to a “place of assembly” in classic Greece.)"
                ]
            },
            {
                "type": "paragraph",
                "text": "By mixing dried vampire’s blood with gold flake and the hunter’s own blood, it creates a gooey unguent that can be used to coat the hunter’s tongue and affect his words."
            }
        ],
        "Action": "Instant",
        "RollResults": [
            {
                "label": "Dramatic Failure",
                "text": "The character goes mute and his tongue feels fat and useless in the mouth, like a dead slug. The effect lasts until he can sleep for eight hours."
            },
            {
                "label": "Failure",
                "text": "The character feels profoundly fatigued, and must make Wits + Stamina rolls to stay awake every minute (reflexive). This lasts for one scene."
            },
            {
                "label": "Success",
                "text": [
                    "The hunter speaks, and when he does, his words are slow, monotonous, and calming. He gains a bonus equal to his dots in the Elixir Endowment to all Social rolls, and during this time, he may not be attacked by ",
                    {
                        "text": "anybody",
                        "italic": true
                    },
                    " (monster or human) unless he attacks them first. This lasts for a number of minutes equal to successes gained on this roll."
                ]
            },
            {
                "label": "Exceptional Success",
                "text": "As above, and the hunter regains a point of Willpower."
            }
        ],
        "Notes": [],
    },
    {
        "Name": "Amun's Water",
        "Rating": "••••",
        "Description": "Become invisible",
        "Book": "HTV 176",
        "Content": [
            {
                "type": "paragraph",
                "text": "The monsters the Ascending Ones face are at home among the shadows, lurking unseen in the night. To face them and uncover their wickedness, a hunter must sometimes go unseen as well, passing beyond sight and entering the very den of the lions. By quaffing this potion, an Ascended One veils herself from sight, becoming truly invisible. (Amun, a sun god, was often associated with the sun when it was hidden from view — in other words, at night.)"
            },
            {
                "type": "paragraph",
                "text": "Amun’s Water is a deep blue liquid the consistency of ink, brewed from deadly nightshade and the venom of an adder. It has a cloying, sweet taste, like over-sugared coffee, and as it goes down, it feels like swallowing liquid nitrogen."
            }
        ],
        "Action": "Instant",
        "RollResults": [
            {
                "label": "Dramatic Failure",
                "text": "The character is afflicted by a Toxicity 3 lethal poison. This poison may be resisted with a contested Stamina + Resolve roll subtracting the poison’s Toxicity."
            },
            {
                "label": "Failure",
                "text": "The hunter is affected as though she had taken a potent (-3 to all dice pools and traits) dose of hallucinogen."
            },
            {
                "label": "Success",
                "text": "The Ascended One fades from sight and becomes invisible. This is no mere psychic trick; the character is literally completely invisible. Even cameras, infrared tripwires, and the like fail to register her presence. Similarly, witnesses simply see her apparently vanish into thin air. Any hostile action, such as attacking or brandishing a weapon, immediately breaks the invisibility."
            },
            {
                "label": "Exceptional Success",
                "text": "Any supernatural ability that pierces invisibility suffers a -2 to its activation roll to detect the character."
            }
        ],
        "Notes": [
            {
                "type": "paragraph",
                "text": "The effects of Amun’s Water last for one scene."
            }
        ],
    },
    {
        "Name": "Balm of Chronos",
        "Rating": "••••",
        "Description": "Doubles Initiative modifier and Defense score. If used in a non-combat situation, gains a +3  to extended rolls.",
        "Book": "SpSl 149",
        "Content": [
            {
                "type": "paragraph",
                "text": "The empire of ancient Egypt traded and warred with other Mediterranean powers and the Egyptians’ exposure to other cultures led to exchanges of religious and philosophical ideas. From the Greeks, the Egyptians learned about the god Chronos, who was revered by the Greeks as the personification of time. The Egyptians noticed similarities between the stories of Chronos and that of their own god P’tah (both gods featured in creation myths) and discussed the possibility that both gods were aspects of each other."
            },
            {
                "type": "paragraph",
                "text": "When the Ascending Ones began their alchemical studies, they sought out the power of Chronos to use time in their favor. The Balm of Chronos looks like a thick paste, white in color, and smells slightly of oleander. The Balm is activated by rubbing it into the skin like a lotion."
            }
        ],
        "Action": "Instant",
        "RollResults": [
            {
                "label": "Dramatic Failure",
                "text": "The Ascending One is affected by a Toxicity 4 lethal poison, which may be resisted by a contested roll of Resolve + Stamina versus the poison’s Toxicity."
            },
            {
                "label": "Failure",
                "text": "The hunter receives no benefit and is affected as though he had taken a moderate (-2 to all dice pools and traits) dose of heroin."
            },
            {
                "label": "Success",
                "text": "The Ascending One enters a trance-like state in which his perception of passing time is slowed. For the rest of the scene, the hunter doubles his Initiative modifier and Defense score. If used in a non-combat situation, the hunter gains a +3 bonus to extended rolls as a result of his enhanced concentration."
            },
            {
                "label": "Exceptional Success",
                "text": "As above and the hunter has the option of acting at any point in the Initiative order he chooses or, in non-combat situations, gains a +1 equipment bonus to all actions."
            }
        ],
        "Notes": [
            {
                "type": "line",
                "label": "Drawback",
                "text": "If the Balm of Chronos is used a number of times in one day greater than the hunter’s Stamina, the hunter suffers the effects of a Dramatic Failure regardless of roll."
            }
        ],
    },
    {
        "Name": "Bennu-Bird Feather",
        "Rating": "•••",
        "Description": "Heal 2B or 1L per success with most severe healed first",
        "Book": "HTV 174",
        "Content": [
            {
                "type": "paragraph",
                "text": [
                    "Supposedly plucked from the tail of the ",
                    {
                        "text": "Bennu",
                        "italic": true
                    },
                    "-bird, the Egyptian phoenix associated with Ra, this feather is ground up, along with medicinal herbs and potent opiates, into a thick, gooey paste capable of accelerating the healing process tremendously."
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    {
                        "text": "Bennu",
                        "italic": true
                    },
                    "-Bird Feather must be smeared over a wound to have any effect, whether an open gash or a mere bruise. The unguent smells strongly of cardamom and willowbark, with an acrid, medicinal tang."
                ]
            }
        ],
        "Action": "Instant",
        "RollResults": [
            {
                "label": "Dramatic Failure",
                "text": "The hunter is afflicted by a Toxicity 2 lethal poison. This poison may be resisted with a contested Stamina + Resolve roll subtracting the poison’s Toxicity."
            },
            {
                "label": "Failure",
                "text": "The hunter is treated as though he has ingested a moderate (-2 to all dice pools and traits) dose of heroin."
            },
            {
                "label": "Success",
                "text": "Every success on the activation roll heals two points of bashing damage or one point of lethal damage. The character has no control over this healing; more severe injuries are automatically healed first."
            },
            {
                "label": "Exceptional Success",
                "text": "In addition to the immediate healing, the Ascending One heals naturally at double the normal rate (one bashing wound per eight minutes, one lethal wound per day, and one aggravated wound per four days). If the hunter has the Quick Healer Merit, he heals wounds in one third the normal time (one bashing wound per five minutes, one lethal wound per 16 hours, and one aggravated wound per three days)."
            }
        ],
        "Notes": [
            {
                "type": "heading",
                "level": 2,
                "text": "THE PHOENIX OR BENNU-BIRD"
            },
            {
                "type": "paragraph",
                "text": [
                    "Is the ",
                    {
                        "text": "Bennu",
                        "italic": true
                    },
                    "-bird real? In making one such Elixir, how does one find a phoenix from which to pluck a feather? It can be the focus of an entire story, of course, locating the ashen nest of just such a bird (where a single feather may lie in the cinders) or finding an actual ",
                    {
                        "text": "Bennu",
                        "italic": true
                    },
                    "-bird."
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    "Alternatively, it might be a feather plucked from the Goliath Heron, a rare Red Sea heron thought to be the model for the ",
                    {
                        "text": "Bennu",
                        "italic": true
                    },
                    "-bird in mythology. Neither feather is easy to procure. It’s your call, as Storyteller, what the truth is."
                ]
            }
        ],
    },
    {
        "Name": "Blood of the Cobra",
        "Rating": "•••••",
        "Description": "+1 Strength and Dexterity per success rolled and blood becomes poisonous.",
        "Book": "HTV 178",
        "Content": [
            {
                "type": "paragraph",
                "text": "The serpent has a long and colorful history of mythic symbolism. In various cultures, it has symbolized good and evil, life and death, wisdom and deceit. In the mythology of the Ascending Ones, vampires are frequently linked to serpentine imagery, and Ascending Ones who specialize in destroying vampires are often called Serpent Chasers."
            },
            {
                "type": "paragraph",
                "text": "The Blood of the Cobra is an exotic compound of cobra venom, hashish and a variety of other alchemical reagents brewed into a devastatingly toxic Elixir. It must be injected directly into the vein to have an effect; most hunters use their inner arms for quick access during battle."
            }
        ],
        "Action": "Instant",
        "RollResults": [
            {
                "label": "Dramatic Failure",
                "text": "The Ascending One is affected by a Toxicity 5 lethal poison, which may be resisted by a contested roll of Resolve + Stamina versus the poison’s Toxicity."
            },
            {
                "label": "Failure",
                "text": "The hunter is treated as though she had taken a potent (-3 to all Social rolls, no bonus to Strength or Stamina) dose of cocaine."
            },
            {
                "label": "Success",
                "text": "For every success rolled on the activation, the Ascending One gains a +1 bonus to her Strength and Dexterity. These bonuses likewise increase Traits derived from these two Attributes. In addition, the character’s blood becomes a highly toxic poison that affects vampires and mortals alike. Any creature attempting to feed on the Ascending One’s blood suffers one automatic point of lethal damage per point of damage inflicted by blood loss. The Attribute bonuses last for the remainder of the scene; the character’s blood remains toxic for 24 hours."
            },
            {
                "label": "Exceptional Success",
                "text": "No additional effect beyond an extraordinary increase to Strength and Dexterity."
            }
        ],
        "Notes": [],
    },
    {
        "Name": "Breath of the Dragon",
        "Rating": "••••",
        "Description": "Hunter breathes out a Toxicity 4 poison at close combat range",
        "Book": "HTV 175",
        "Content": [
            {
                "type": "paragraph",
                "text": "In the old legends, before the fire-breathing cliché got started, it was said that the breath of a dragon was a deadly poisonous fume. This Elixir, already toxic by nature, is inhaled and distilled by the Ascending One’s will into a terrible airborne contagion."
            },
            {
                "type": "paragraph",
                "text": "Breath of the Dragon is a fine, crystalline powder of silvery hue. Because it must be inhaled to take effect, many Ascending Ones either smoke it or carry a dose in a modified form of asthma inhaler."
            }
        ],
        "Action": "Instant",
        "RollResults": [
            {
                "label": "Dramatic Failure",
                "text": "The character is afflicted by a Toxicity 4 lethal poison. This poison may be resisted with a contested Stamina + Resolve roll subtracting the poison’s Toxicity."
            },
            {
                "label": "Failure",
                "text": "The hunter is affected as though he had taken a potent (-3 to all Social rolls, no bonus to Strength or Stamina) dose of cocaine."
            },
            {
                "label": "Success",
                "text": "The hunter expels a small cloud of Toxicity 4 lethal poison from his mouth. The cloud is large enough to catch one victim within close combat range (about two yards). This poison may be resisted with a Stamina + Resolve roll subtracting the poison’s Toxicity."
            },
            {
                "label": "Exceptional Success",
                "text": "The Ascending One distills the Breath of the Dragon into an especially potent form. Add his Elixir rating to the poison’s Toxicity."
            }
        ],
        "Notes": [],
    },
    {
        "Name": "Breath of Ma'at",
        "Rating": "••",
        "Description": "Reroll a Morality check",
        "Book": "HTV 173",
        "Content": [
            {
                "type": "paragraph",
                "text": "Hunters must, in the course of their duties, undertake actions that righteous men would consider sinful. These acts weigh heavily upon the soul; even the Ascending Ones can be overwhelmed by sin. But Ma’at, the goddess of truth and divine justice, knows that the hunter’s cause is virtuous and that all may be forgiven. By meditating on the soothing incense of the Breath of Ma’at, an Ascending One may find a kind of peace in the rightness of his cause."
            },
            {
                "type": "paragraph",
                "text": [
                    "As with many of the Elixirs employed by the Ascending Ones, some hard-liners reject the Dynastic interpretation of this Elixir. They call it the Mercy of Allah, and replace the silent meditation with ",
                    {
                        "text": "Salah",
                        "italic": true
                    },
                    " prayers, claiming it is Allah the Most Merciful who grants forgiveness."
                ]
            }
        ],
        "Action": "Extended; each roll represents one hour of fasting and meditation or prayer.",
        "RollResults": [
            {
                "label": "Dramatic Failure",
                "text": "The hunter automatically gains a mild derangement, or upgrades an existing mild derangement to a severe one. The hunter’s player and the Storyteller should work together to choose an appropriate derangement."
            },
            {
                "label": "Failure",
                "text": "No progress is made toward alleviating the burden of sin on the character’s soul. Should the character fail to achieve the required number of successes within the maximum number of rolls, he is affected as though he had consumed three alcoholic beverages in excess of his Stamina."
            },
            {
                "label": "Success",
                "text": "The Ascending One proceeds toward letting go of his sin."
            },
            {
                "label": "Exceptional Success",
                "text": "In addition to extraordinary progress being made toward regaining perspective, the Ascending One gains a +1 bonus on his next roll to avoid degeneration."
            }
        ],
        "Notes": [
            {
                "type": "paragraph",
                "text": "This Elixir may only be employed within 24 hours of the Ascending One losing a point of Morality, and the character may only benefit from this Elixir once per story. The character must acquire a number of successes equal to (10 - the Morality level of his most recent sin). These successes must be accumulated in a number of rolls equal to less than the character’s Morality, or the Elixir fails to take effect."
            },
            {
                "type": "paragraph",
                "text": "Should the Ascending One acquire the requisite successes, he may re-roll the degeneration roll that caused him to lose his Morality. If he succeeds, he gains the lost Morality point back as though it had never been lost. This Elixir has no effect if the character has raised his Morality through another means, such as experience points. Derangements gained from the now-lost point also diminish."
            },
            {
                "type": "paragraph",
                "text": [
                    {
                        "text": "Example: ",
                        "bold": true,
                        "italic": true
                    },
                    {
                        "text": "Hassan, an Ascending One, burned down an apartment building to kill a vampire that nested there. Unfortunately, an elderly man was trapped on the upper floor and burned to death in the ensuing blaze. The Storyteller rules that this was an impassioned crime, similar to manslaughter, a Morality 4 sin. Hassan’s player rolls three dice but gets no successes, dropping his Morality from 6 to 5. He likewise fails his check to avoid gaining a derangement, and gains a mild phobia of fire. Later that night, he prepares the Breath of Ma’at to help him realize that the woman was an unfortunate but unavoidable casualty of a righteous war. Hassan’s Stamina is 2 and he has 3 dots in Elixir, for a total dice pool of five; since his most recent sin was a Morality 4 sin, he must accumulate six successes (10 minus 4) in five or fewer rolls. His first roll comes up 4, 8, 2, 6, 9 for two successes. His second roll is a lucky one, netting him three more successes. His third and fourth rolls net no successes, but he slides in under the wire with one success on his fifth and final roll. He may now re-roll his degeneration check of three dice. This time he gets one success, and his Morality increases from 5 back to 6 as though he had never lost the point. He likewise loses the fire phobia, just as if he had never lost the Morality in the first place.",
                        "italic": true
                    }
                ]
            }
        ],
    },
    {
        "Name": "Crocodile Tears",
        "Rating": "•",
        "Description": "Appear nearly dead",
        "Book": "HTV 172",
        "Content": [
            {
                "type": "paragraph",
                "text": "According to old folklore, crocodiles weep to lure in prey. Feigning helplessness and vulnerability, they present themselves as tempting targets and, when animal or man draws near to investigate, they strike. The Ascending Ones learn from this story that sometimes a false show of weakness is a more potent weapon than a true show of strength."
            },
            {
                "type": "paragraph",
                "text": "Crocodile tears are a thick, almost jellylike liquid with a strong taste of lemons and almond. A character must drink them to receive the effect. Upon drinking the Tears, the Ascended One grows pale and shaky, with skin tightening to give an emaciated appearance consistent with grave illness."
            }
        ],
        "Action": "Instant",
        "RollResults": [
            {
                "label": "Dramatic Failure",
                "text": "The Ascending One is treated as though she had ingested a Toxicity 2 poison. This poison may be resisted with a contested Stamina + Resolve roll subtracting the poison’s Toxicity."
            },
            {
                "label": "Failure",
                "text": "The character is affected as if she had taken a mild (-1 to appropriate dice pools and traits) dose of marijuana."
            },
            {
                "label": "Success",
                "text": "The Ascending One appears, for all intents and purposes, as though she is at death’s door, about to keel over from exhaustion or disease. A medical examination will reveal the ruse, but a visual inspection requires a Wits + Medicine roll contested by the hunter’s Manipulation + Subterfuge + Elixir. Supernatural abilities that gauge a character’s strength or weakness likewise register the hunter as nearly dead if the Ascending One wins a contested, reflexive Manipulation + Subterfuge + Elixir roll against the dice pool of the power.\n\nThe hunter does suffer a -1 to all dice pools — those tremors are real enough — but she may spend a Willpower point as a reflexive action to instantly purge the effect of the Elixir and negate the penalty. Unless the character purges the effect early, the Crocodile Tears wear off in one scene."
            },
            {
                "label": "Exceptional Success",
                "text": "The character does not suffer the -1 penalty to her dice pools; the illusion of deathly illness is perfect without actually impairing the character."
            }
        ],
        "Notes": [
            {
                "type": "paragraph",
                "text": "The successful use of Crocodile Tears does not compel an enemy to act in any particular manner, but many monsters (and even many ordinary humans) prefer to take on a much weaker opponent if they can. Crocodile Tears are a useful aid to setting up an ambush, not a guaranteed lure."
            }
        ],
    },
    {
        "Name": "Elixir of the Fiery Heart",
        "Rating": "••",
        "Description": "Resist fear effects equal to Elixir",
        "Book": "HTV 174",
        "Content": [
            {
                "type": "paragraph",
                "text": "Many of the beasts the Ascending Ones hunt are terrifying in their own right. It takes great courage to face down a deranged slasher in his darkened murder playground, or to stand toe to toe with a ravening beast the size of a car. But quite apart from natural fear, some creatures have the ability to fill the soul with abject, supernatural terror. Even the strongest heart can quail before such mystical onslaught, which is why the Ascending Ones carry this potent Elixir to steel their spirits against the terrors of the night."
            },
            {
                "type": "paragraph",
                "text": "Elixir of the Fiery Heart is a thin, yellowish liquid with a smoky taste. It burns the throat as it goes down, like a potent liquor, but instead of fuzzy-headed drunkenness, it imparts a kind of clinical disconnect from any sense of self-preservation. While the effect renders a hunter fearless, it also makes her prone to rash action."
            }
        ],
        "Action": "Instant",
        "RollResults": [
            {
                "label": "Dramatic Failure",
                "text": "The Ascending one is afflicted by a Toxicity 4 bashing poison. This poison may be resisted with a contested Stamina + Resolve roll subtracting the poison’s Toxicity."
            },
            {
                "label": "Failure",
                "text": "The hunter is affected as though she had consumed two drinks of alcohol in excess of her Stamina."
            },
            {
                "label": "Success",
                "text": "For the rest of the scene, any attempt to induce fear in the hunter (including mundane Intimidation or supernatural powers of fright) subtracts her Elixir rating from the dice pool. If the power is already resisted by one of her Traits, her Elixir rating is added to that Trait to determine the total resistance."
            },
            {
                "label": "Exceptional Success",
                "text": "In addition to receiving the benefits of a success against supernatural fear effects, the Ascending One is entirely immune to mundane, non-magical fear. Attempts to intimidate her or spook her that lack supernatural force simply fail."
            }
        ],
        "Notes": [],
    },
    {
        "Name": "Eye of Ra",
        "Rating": "•",
        "Description": "Gain a bonus to Perception equal to Elixir",
        "Book": "HTV 173",
        "Content": [
            {
                "type": "paragraph",
                "text": "The sun-god Ra sees all that transpires beneath his fiery gaze. By anointing themselves with sacred oils, the Ascending Ones gain a measure of this divine perception for themselves. While they cannot truly gain insight into everything under the sun, they can enhance their own perceptive abilities and sharpen their senses toward what is hidden."
            },
            {
                "type": "paragraph",
                "text": [
                    "Eye of Ra is sandalwood oil infused with sacred herbs and plants thought to aid in the sharpening of the senses. It also contains ",
                    {
                        "text": "kohl",
                        "italic": true
                    },
                    ", the cosmetic traditionally used by the Egyptians to darken their eyelids, which contains several toxic compounds. Traditionally, the oil is applied by dabbing it around the eye in the shape of the sacred symbol of the eye of Ra (also called the eye of Horus). Ascending Ones who embrace Islam over the faith of the pharaohs refer to the oil as “Eye of Jibril,” and simply anoint themselves on the eyelids without drawing the eye of Ra."
                ]
            }
        ],
        "Action": "Instant",
        "RollResults": [
            {
                "label": "Dramatic Failure",
                "text": "The Ascending One is afflicted with a Toxicity 4 bashing poison. This poison may be resisted with a contested Stamina + Resolve roll subtracting the poison’s Toxicity."
            },
            {
                "label": "Failure",
                "text": "The hunter is affected as though she had consumed a mild (-1) dose of heroin."
            },
            {
                "label": "Success",
                "text": "The character gains a bonus to Perception rolls (either general Wits + Composure or Wits + a specific Skill) equal to her Elixir rating. The bonus lasts for one scene."
            },
            {
                "label": "Exceptional Success",
                "text": "In addition to the Perception bonus, if the Ascending One passes within two yards of a supernatural creature, she may roll a reflexive Wits + Occult roll (not including the bonus from the Eye of Ra) contested by the monster’s Resolve + Composure to recognize it as unnatural. She does not gain any insight into what sort of creature it might be, only that it is not human."
            }
        ],
        "Notes": [],
    },
    {
        "Name": "Hunting Sight of the Asp",
        "Rating": "•",
        "Description": "See things in the thermal spectrum",
        "Book": "NS 144",
        "Content": [
            {
                "type": "paragraph",
                "text": "Vampires might be the loudest offender, but many things go bump in the night. Much of the Vigil rightly takes place in the dark, and for some hunters the tell-tale flashlights and bulky night-vision equipment isn’t always the most effective hunting tool. This potent concoction of cobra’s venom, fish liver oil, and strong opiate alkaloid (usually filling up a small, nondescript bottle of over-the-counter eyedrops) works upon the hunter’s eye to, as one hunter puts it, “open the eyes behind the eyes.”"
            },
            {
                "type": "paragraph",
                "text": "The infrared spectrum comes alive to the Ascending Ones, separating the world into hot and cold and removing all other distractions. There is only life and unlife, rodents and serpents, predator and prey. Hunters who have taken this draught tend to hold their eyes open a little too wide and act just a little alien, but their ability to hunt in complete darkness or identify the one vampire in the crowded night club is unparalleled."
            }
        ],
        "Action": "",
        "RollResults": [
            {
                "label": "Dramatic Failure",
                "text": [
                    "The imbiber is struck blind for 24 hours and acts as if taking a dose of poison of Toxicity 3 (see the ",
                    {
                        "text": "World of Darkness Rulebook",
                        "bold": true
                    },
                    ", p. 180)."
                ]
            },
            {
                "label": "Failure",
                "text": [
                    "The hunter suffers as if having taken a mild hallucinogen (-1 to all dice pools and traits) (",
                    {
                        "text": "World of Darkness Rulebook",
                        "bold": true
                    },
                    ", p. 177)."
                ]
            },
            {
                "label": "Success",
                "text": [
                    "The hunter now sees in the thermal spectrum enabling her to more or less see in the dark becoming particularly adept at detecting the heat radiated by living things. The hunter gains the following benefits for the remainder of the scene:",
                    {
                        "type": "lineBreak"
                    },
                    "• Even if a target is attempting to hide, the hunter gains +3 on any Perception rolls made to find a target attempting to hide nearby (heat radiating from a body behind a curtain, for instance).",
                    {
                        "type": "lineBreak"
                    },
                    "• This draught is also quite useful for determining if a person is undead simply by noticing the dramatic pitch in body heat. The hunter gains +5 to any roll used to determine if a body is masquerading as alive. Alternately, werewolves (and some demons, particularly those fresh from whatever Hell realm they come from) “run hotter” than humans—the hunter gains only +3 on the roll to discern the nature of such creatures with Hunting Sight of the Asp, however.",
                    {
                        "type": "lineBreak"
                    },
                    "• This Elixir can be used to help determine emotional states. The imbiber gains +1 on Empathy rolls.",
                    {
                        "type": "lineBreak"
                    },
                    "• Perception rolls regarding inanimate objects—especially those that feature little or no temperature variation from their surroundings—suffer a -2 penalty while the Hunting Sight of the Asp is active. (Think of trying to locate a set of car keys with mystical infrared sight.)"
                ]
            },
            {
                "label": "Exceptional Success",
                "text": "As above, but the hunter only suffers a -1 penalty when making Perception rolls regarding inanimate objects."
            }
        ],
        "Notes": [
            {
                "type": "line",
                "label": "Suggested Modifiers",
                "text": "-2 Ambient temperature greater than 98 degrees Fahrenheit (37 degrees Celsius)."
            }
        ],
    },
    {
        "Name": "Incense of the Next World",
        "Rating": "••••",
        "Description": "Astral project into Twilight",
        "Book": "HTV 176",
        "Content": [
            {
                "type": "paragraph",
                "text": "The Ascending Ones know from the secret lore of ancient Egyptian priests that this world is not the only one. The mortal world is an island in a vast sea of other realms, and by performing the proper rites and inhaling the proper incense, an Ascending One can leave his physical body behind and let his soul journey out into the Twilight state of ghosts and spirits."
            },
            {
                "type": "paragraph",
                "text": "The Incense of the Next World has a strong, almost primal musk, like sweat and sex and animal skins from the dawn of humanity. It gives off a deep blue smoke whose whorls seem to suggest ancient hieroglyphs and arcane symbols."
            }
        ],
        "Action": "Extended; each roll represents 10 minutes of prayer, chanting and breathing in incense. The Ascending One may roll a maximum number of times equal to his Stamina + Elixir.",
        "RollResults": [
            {
                "label": "Dramatic Failure",
                "text": "The character slips into a deep coma and cannot awaken until he earns five successes on an extended Stamina + Resolve roll. Each roll represents one day of trying to wake."
            },
            {
                "label": "Failure",
                "text": "No progress is made toward attaining the ecstatic state that allows spiritual travel. Should the Ascending One fail to accumulate the required successes before the roll limit runs out, he is affected as though he had consumed a potent (-3 to all dice pools and traits) hallucinogen."
            },
            {
                "label": "Success",
                "text": "Progress is made toward leaving the body behind."
            },
            {
                "label": "Exceptional Success",
                "text": "No additional effect beyond the large number of successes."
            }
        ],
        "Notes": [
            {
                "type": "paragraph",
                "text": "Incense of the Next World allows a hunter to completely free his consciousness from his physical form and travel mentally to distant locations while leaving his body behind. It requires 10 successes to separate the soul from the body; the Ascending One must breathe in the incense for the entirety of the extended action."
            },
            {
                "type": "paragraph",
                "text": "Once separated, the character can move around freely, but he is intangible and invisible, existing in the state called Twilight. He can be perceived through any appropriate means (such as an Endowment that allows a character to perceive Twilight beings). Other astral projectors or other beings that exist in Twilight can perceive him normally."
            },
            {
                "type": "paragraph",
                "text": [
                    "Returning to his body requires an instant action and a successful Wits + Composure roll. There is theoretically no limit to how long the character may remain in this astrally projected state, but the normal rules for deprivation apply (",
                    {
                        "text": "The World of Darkness Rulebook",
                        "bold": true
                    },
                    ", p. 175). If the hunter’s physical body is tampered with while he is “gone,” he may sense the intrusion with a successful Intelligence + Composure roll. The character always feels actual pain inflicted on his physical body, and may react as he sees fit. However, an astral projector’s physical body may be subjected to a killing blow if the body is left unprotected (see ",
                    {
                        "text": "The World of Darkness Rulebook",
                        "bold": true
                    },
                    ", p. 168)."
                ]
            }
        ],
    },
    {
        "Name": "Justice of Ma'at",
        "Rating": "••",
        "Description": "Bonus to Investigation equal to Elixir and +1 to Degeneration rolls",
        "Book": "Slash 162",
        "Content": [
            {
                "type": "paragraph",
                "text": "While the incense called the Breath of Ma’at soothes a hunter’s soul when the righteousness of his Vigil is called into question, justice is more than a salve for the soul. Ma’at is the goddess of truth as well as justice, something worth its weight in gold in a murder trial. Inhaling this Elixir makes a hunter burn with the need for truth, his mind alive with possibilities and his soul burning with the need for justice."
            },
            {
                "type": "paragraph",
                "text": "The Justice of Ma’at is a blend of four drops of a child’s blood, the powdered bone of a hanged man, and cocaine. Combined into a very fine red powder, the Ascending Ones either inhale the compound or rub it into the gums. While under the effects, the hunter feels possessed by an otherworldly force, whether it is the Just Will of Allah or the goddess Ma’at. She must find the truth — though whether she uses it towards justice or revenge is a very personal thing."
            }
        ],
        "Action": "Instant",
        "RollResults": [
            {
                "label": "Dramatic Failure",
                "text": "The Ascending One is afflicted by a Toxicity 4 bashing poison. This poison can be resisted with a contested Stamina + Resolve roll against the poison’s Toxicity."
            },
            {
                "label": "Failure",
                "text": "The hunter receives no bonus from the Elixir, and is affected as though he had taken a mild (-1 to Social rolls, no bonus to Strength or Stamina) dose of cocaine."
            },
            {
                "label": "Success",
                "text": "For the rest of the scene, the hunter burns with a need for the truth. He receives a bonus to all Investigation rolls equal to his Elixir rating. If the hunter commits a sin against Morality in her quest for the truth, she gains an additional die on rolls to avoid degeneration."
            },
            {
                "label": "Exceptional Success",
                "text": "In addition to receiving the benefits of a success, the hunter is able to mete out justice with the mandate of heaven. He ignores all wound penalties while under the influence of this Elixir."
            }
        ],
        "Notes": [],
    },
    {
        "Name": "Mesmeric Vapors",
        "Rating": "•••••",
        "Description": "Breathe out a mind controlling smoke",
        "Book": "HTV 178",
        "Content": [
            {
                "type": "paragraph",
                "text": "Society has always warned of the dangers of drugs. Whether strong drink, hashish, or pure Colombian coke, the manner in which they can alter perceptions has been feared and cautioned against as far back as history has recorded. Religions have railed against them, and governments have tried to find ways to use them against their enemies. But where CIA-programmed LSD sleeper agents are largely relegated to the realms of conspiracy theory web sites, the Ascending Ones have perfected an alchemical compound so intoxicating it can literally reduce a hapless victim to little more than a puppet."
            },
            {
                "type": "paragraph",
                "text": "Mesmeric Vapors, in their un-smoked form, resemble loose tobacco of the type used in hand-rolled cigarettes. The scent is subtly sweeter, and often seems to hint at different aromas to different individuals. Because of the nature of its use, Mesmeric Vapors are rarely used as incense; instead they are smoked like a pipe or a cigarette. The smoke given off by this compound is a pale golden color, and it hangs with an unnatural heaviness in the air, remaining still even in a moderate breeze."
            }
        ],
        "Action": "Contested (but see below); Stamina + Elixir versus subject’s Stamina + Resolve",
        "RollResults": [
            {
                "label": "Dramatic Failure",
                "text": "The character is afflicted by a Toxicity 4 lethal poison. This poison may be resisted with a contested Stamina + Resolve roll subtracting the poison’s Toxicity. Anyone else who breathes in the smoke is similarly affected."
            },
            {
                "label": "Failure",
                "text": "The hunter is affected as though he had taken a potent (-3 to all dice pools and traits) dose of opium. Anyone else who breathes in the smoke is similarly affected."
            },
            {
                "label": "Success",
                "text": [
                    "The Ascending One breathes in the smoke of the Mesmeric Vapor and converts its toxins into a deeply psychotropic drug. In order to have an effect, this smoke must be inhaled by another character. Ascending Ones are taught specific breathing exercises to control and focus the smoke as they exhale; the hunter may designate any one character within close-combat range as the target of the smoke. If the target is aware of the smoke, she may try to hold her breath by making a reflexive Stamina roll. Success means she gets a lungful of clean air before the smoke can affect her; failure means she is affected normally.",
                    {
                        "type": "lineBreak"
                    },
                    "The affected character must make a reflexive Stamina + Resolve roll, contesting the activation roll, to resist the smoke’s effects. If the victim is in combat, or otherwise in an agitated or threatened state, she receives a +3 bonus on this roll. A drugged character becomes calm, sedate and relaxed, as though she has taken a dose of opium (",
                    {
                        "text": "World of Darkness Rulebook",
                        "bold": true
                    },
                    ", p. 177). More importantly, she enters an extremely suggestible state, in which she may be given complex instructions to be carried out right away or at some triggering stimulus. This drugged state lasts for 10 minutes.",
                    {
                        "type": "lineBreak"
                    },
                    "Programming a subject with a command is an extended and contested action of the Ascending One’s Manipulation + Persuasion versus the subject’s Resolve + Composure. Each roll represents one minute of careful, hypnotic instruction. The number of successes required is equal to three per “step” of the complete command. A triggering action or stimulus counts as a step. For example, the command “When a man says to you, ‘Do you have the time?’, call the police and tell them you’ve witnessed a murder on Fleet St., then hang up immediately” requires 12 successes, because it is a four-step command: the conditional trigger (“when a man says to you, ‘Do you have the time?’”), and three actions (“call the police,” “tell them you witnessed a murder,” and “hang up immediately”). Dangerous actions double the number of successes necessary per action (six successes instead of three). The subject may also be ordered to forget the encounter with the Ascending One, or to forget any actions undertaken while entranced. Either adds five successes to the required total.",
                    {
                        "type": "lineBreak"
                    },
                    "If the command is to be triggered by a later action, the subject returns to normal when the command is fully implemented; the druglike effects vanish and the character remains her normal self. When the command is triggered (whether immediately or by a later trigger), the druglike state resumes. The victim will ignore or respond only as much as necessary to anything not related to her task (questions are ignored outright or answered with a single word, work and family are put aside and not told why, etc.) and generally behaves like she’s stoned. Once the command is carried out, the effects end immediately.",
                    {
                        "type": "lineBreak"
                    },
                    "The psychic compulsion is only effective as long as the drug holds the victim in her hypnotic state. When the 10 minutes are up, the subject snaps out of it and all successes are lost; a partial command does not take hold at all. As long as the subject is still in the trance state, another dose of Mesmeric Vapor can be applied, but this gives the subject another chance to break free of the effect with a contested Stamina + Resolve roll. As long as the hypnotic state remains uninterrupted, the Ascending One doesn’t lose any successes; he may even go and take other actions and then return to the programming action."
                ]
            },
            {
                "label": "Exceptional Success",
                "text": "The subject is placed in an exceptionally deep suggestive state. Programming the subject requires only 30 seconds per roll instead of one minute."
            }
        ],
        "Notes": [],
    },
    {
        "Name": "Mind-Talking Drug",
        "Rating": "•••",
        "Description": "Mentally converse or scan the surface thoughts of another",
        "Book": "HTV 175",
        "Content": [
            {
                "type": "paragraph",
                "text": "Communication is a vital component of success for any hunter cell. Without the ability to maintain communication during an assault, no plan can survive contact with the enemy. Other groups rely on sophisticated radios or complex systems of hand signals, but the Ascending Ones simply brew up a vat of this mind-expanding psychotropic and inject it into the base of their neck. Once he fights his way through the hallucinations, the Ascending One finds he has the ability to read the surface thoughts of others and even to project his own thoughts into their minds."
            },
            {
                "type": "paragraph",
                "text": "The Mind-Talking Drug is a virulent shade of yellow, with subtle veins of a slightly darker color swirled throughout the liquid. Since it must be injected, it is usually carried in a large, sturdy syringe."
            }
        ],
        "Action": "Extended; five successes required; each roll represents one minute of struggling with hallucinations.",
        "RollResults": [
            {
                "label": "Dramatic Failure",
                "text": "The character is afflicted by a Toxicity 3 lethal poison. This poison may be resisted with a contested Stamina + Resolve roll subtracting the poison’s Toxicity."
            },
            {
                "label": "Failure",
                "text": "The hunter makes no progress toward sifting through the hallucinations to find the truth. If he is unable to earn five successes in a number of rolls equal to his Stamina + Elixir, he is affected as though he had taken a potent (-3 to all dice pools and traits) dose of hallucinogen."
            },
            {
                "label": "Success",
                "text": "For the rest of the scene, the Ascending One may, as a reflexive action, hold a two-way mental conversation with another character within his line of sight or scan the surface thoughts of another. Holding a two-way conversation requires a Presence + Composure roll, with one roll required of both characters for every turn’s worth of conversation. If the character being conversed with is also under the effect of the Mind-Talking Drug, conversations are automatic, with no roll required.\n\nScanning the surface thoughts of another character likewise requires a Presence + Composure roll, contested by the target’s Resolve + Composure if the target is unwilling. Even if the target has also taken Mind-Talking Drug, the roll is required for reading surface thoughts."
            },
            {
                "label": "Exceptional Success",
                "text": "In addition to communication and surface-thought reading, the Ascending One can probe deeper into a subject’s mind to uncover buried thoughts. This requires an extended and contested roll of Presence + Composure vs. Resolve + Composure, with the number of successes determined by the “depth” of the information. Surface thoughts passing through the target’s mind require one success, something the character thinks about in passing on a daily basis (where her kids go to school) requires three, something thought about infrequently (where he went on vacation as a child) requires five, while deeply buried secrets (the name of the man she had an affair with) require 10 or more. Each roll represents one turn of psychic probing."
            }
        ],
        "Notes": [
            {
                "type": "paragraph",
                "text": "The effects of the Mind-Talking Drug last for one scene."
            }
        ],
    },
    {
        "Name": "Nehebkau Tears",
        "Rating": "•••••",
        "Description": "Temporarily become a Vampire",
        "Book": "NS 145",
        "Content": [
            {
                "type": "paragraph",
                "text": "Legend tells of an Ascending One whose wife and family was taken as slaves by a clutch of vampires. Unable to bear this fate but also unable to get close to their stronghold, the hunter went to Nehebkau, Guardian of the Underworld and begged him for help in freeing his family. The god acknowledged there might be a way to approach them in the skins of their own kind, but to do so would close Duat (the underworld) forever to him. The man did not care, he said, he only wanted his family freed and the darkness could take his soul if that was the cost. Nehebkau was moved by the man so willing to sacrifice himself. The god cried two tears, catching them in a canopic jar, and instructed the man that if he wished to save his family, then he must drink the mixture as the sun set. Drinking the tears would allow him to move among his enemy for one night. At the end of the night, he would die but his soul would be lost forever without Ma’at’s judgment or the mercy of Duat. The man agreed and drank the foul poison at sundown the following day and felt himself die."
            },
            {
                "type": "paragraph",
                "text": "True to Nehebkau’s word, instead of moving onto the scales of Ma’at, the man was immediately able to open his eyes and walk how the sunless dead walked. He went to their stronghold unassailed. He found his family and found only envy in their warm embrace against his skin, but he knew this was the cost of their safety. He led them to freedom and said a cold goodbye as the sun peeked over the mountains. Choking and retching, the man fell to his knees feeling his life violently tearing out of him. Yet he fought with all his will, all the purity of spirit which moved the god. The man reached down his own throat, grabbing the darkness that he had so willingly swallowed and tore it lose, vomiting forth a single fat scarab onto the sand along with his blood and bile. The scarab regarded him and with Nehebkau’s voice told the man that his purity and will would allow him to endure the morning sun. As the sun edged over the mountains, so did the man’s heart beat again and again. Only then, as he breathed out the last of graveyard air from his lungs did the man weep for joy for the return of his family."
            },
            {
                "type": "paragraph",
                "text": "The Ascending One who is willing to take her chances with this rarely-used draught better have a good reason and peace within her god’s eyes before trying. There aren’t many calls for the Tears of Nehebkau, but there have been in the past. Almost every part of this potion is deadly or unclean. Particularly religious members of the Ascending One say those that partake in this Elixir will find Paradise forever closed to them. With a steeped brew of pig blood, quicksilver (mercury), natron (soda salt), and formaldehyde, an Ascending One can cheat death in a manner nearly identical to vampirism. If mixed correctly and with proper faith and strength of purpose the process is reversible at the end of one night’s time when the imbiber completely but painfully returns to life’s embrace. She will know it succeeded when she coughs up the bloody scarab."
            },
            {
                "type": "paragraph",
                "text": "The hunter uses this terrible potion to not just simulate, but in all ways join the ranks of the undead for the night. The player and Storyteller should work together to translate the hunter as they would a newly-created vampire for the duration of this effect using the rules as they appear within this book."
            }
        ],
        "Action": "",
        "RollResults": [
            {
                "label": "Dramatic Failure",
                "text": "The hunter effectively blinds Nehebkau and succeeds in transforming into a vampire as per a normal success. At the end of the night, however, they find Ra’s door is closed to them. They are forevermore outside of Nehebkau’s (or whomever their god might be) purview and have effectively become a vampire. The Storyteller and player should work together to design a vampire using the rules found earlier in this book."
            },
            {
                "label": "Failure",
                "text": "The imbiber suffers as if taking a potent (and potentially fatal) dose of heroin (all dice pools suffer -3 for a full 8 hours). Because the dose is potentially damaging or lethal, the Elixir also counts as a Toxicity 3 poison."
            },
            {
                "label": "Success",
                "text": [
                    "From sundown to sun-up the hunter effectively becomes a member of the undead per the rules found earlier in this book. This act against the natural world costs either five Willpower points or one permanent Willpower ",
                    {
                        "text": "dot",
                        "italic": true
                    },
                    " at the end of the evening as the hunter undergoes the slow struggle back to life. Note that during this time, the character works according to the rules for vampires in this book (or in ",
                    {
                        "text": "Vampire: The Requiem",
                        "bold": true
                    },
                    "). He cannot risk Willpower. He cannot utilize his Endowments. He is similarly out of sync with his cell—he can still be a part of Tactics, but suffers -2 dice to do so. He may need to feed (drinking one blood equates to Willpower, at a rate of one point gained per one point of lethal damage incurred), and is subject to all the advantages and disadvantages of existing in a vampiric state."
                ]
            },
            {
                "label": "Exceptional Success",
                "text": "As above, but the vampire fills up his Willpower pool upon turning—as a result, he may not need to feed during his (hopefully) one long night of undead existence."
            }
        ],
        "Notes": [],
    },
    {
        "Name": "Red Resin",
        "Rating": "•",
        "Description": "See monsters with morality 7 or lower",
        "Book": "C&C p55",
        "Content": [
            {
                "type": "paragraph",
                "text": [
                    "The monsters hide. Most look like humans. Many look like shadows or, worse, are invisible. With this thick, toxic resin—comprising the dark sap of the ",
                    {
                        "text": "dracaena",
                        "italic": true
                    },
                    " tree or rattan palm coupled with the toxic mercurial ore ",
                    {
                        "text": "cinnabar",
                        "italic": true
                    },
                    "—the hunter can survey the room and identify the monsters on sight."
                ]
            },
            {
                "type": "paragraph",
                "text": "The resin is a greasy clump of vermillion powder. It can be placed between the gum and lip, but usually, a hunter smokes it in a pipe or rolled in a cigarette. The smoke is slightly toxic to those nearby—anyone within five yards breathing in the acrid smoke finds their eyes watering and suffers slight dizziness, taking a -1 penalty to all rolls for the remainder of the scene."
            }
        ],
        "Action": "Instant",
        "RollResults": [
            {
                "label": "Dramatic Failure",
                "text": "The character goes blind for a number of turns equal to ten minus his Elixir score."
            },
            {
                "label": "Failure",
                "text": "The character feels giddy and dizzy for the remainder of the scene, suffering a -1 to all Mental and Social rolls."
            },
            {
                "label": "Success",
                "text": "The hunter can see all the monsters within sight—they are outlined by a tinge of red light that only the hunter can see. Even entities hidden in Twilight are exposed. It does not identify the nature of these creatures, however—only their monstrousness. One exception exists: if a monster has a Morality (or equivalent score) of 8 or higher, the Red Resin fails to note them. This ability lasts for one scene."
            },
            {
                "label": "Exceptional Success",
                "text": "The hunter can also tell what kind of monster it is."
            }
        ],
        "Notes": [],
    },
    {
        "Name": "The Tallyman's Eyes",
        "Rating": "•••",
        "Description": "Identify any magic user in sight",
        "Book": "WF 127",
        "Content": [
            {
                "type": "paragraph",
                "text": "The Ascending Ones hunt many creatures. Some are obvious nightmares, with twisted flesh around their damned souls. Others wear the cloak of human form and never breach it. Slashers, witches, and stranger things look entirely human to an autopsy, never mind human sight. The Tallyman’s Eyes shows that lie for what it is, unveiling the hidden essence of a witch and laying it plain in the hunter’s sight. She can see the alien marks on a monster’s soul that others can’t. It won’t highlight a serial killer, but it will bring light to people who traffic in eldritch powers. Her eyes are the eyes of Ma’at when weighing her target’s heart against a feather, and she knows how the scales will fall."
            },
            {
                "type": "paragraph",
                "text": "The Tallyman’s Eyes is a complex combination of dimethyl triptamine (DMT), alchemical reagents, and the vitreous humor from a human eye. The ingredients must be blended into a thin liquid that appears to glow softly with a green light. Most Ascending Ones place three drops into each eye to see the true weight of a human soul, but a small number inject the Elixir into their own pupils. Though this is a scary prospect the first few times a hunter tries it, the effects of the drug last far longer. The injected form doesn’t wash out, though, and can lead to problems with the hunter’s sight when she’s not affected by the Elixir."
            }
        ],
        "Action": "Instant",
        "RollResults": [
            {
                "label": "Dramatic Failure",
                "text": "The hunter is affected by a Toxicity 4 bashing poison. If injected into the eye, this is instead a Toxicity 4 lethal poison. He may resist this poison by rolling Stamina + Resolve as a contested action versus the poison’s Toxicity."
            },
            {
                "label": "Failure",
                "text": "The hunter receives no benefit from the Elixir, and is affected as though he had taken a mild (-1 to all dice pools and traits) dose of a hallucinogen."
            },
            {
                "label": "Success",
                "text": "The Ascending One can identify the traces of otherworldly energies around a human soul. He can make a reflexive Wits + Occult roll to identify any magic-user (any character who possesses the Gnosis or Gifted Merit) in sight. He must be able to see the witch normally, but the cloud of magic around her is unmistakable. In addition, the character receives a three-dice bonus to resist mind-altering effects from someone he knows to be a mage. The effects normally last for a number of minutes equal to the character’s Resolve. If he injected the Elixir into his eye (which necessitates success on a Resolve + Medicine roll), the effects instead last for a full scene."
            },
            {
                "label": "Exceptional Success",
                "text": "In addition to the effects of a success, the hunter can identify places imbued with magical energy. This is a Wits + Occult roll at a -2 modifier."
            }
        ],
        "Notes": [],
    },
    {
        "Name": "Thoth’s Whisper",
        "Rating": "•••••",
        "Description": "Inhale a ghost for a verity of bonuses, including entering the Underworld",
        "Book": "C&C p55",
        "Content": [
            {
                "type": "paragraph",
                "text": "Thoth—one of the gods believed to have inspired Hermes Trismegistus—was a psychopomp, a shuttler of souls from the world of the living to the afterlife. This Elixir, in a way, helps the hunter to facilitate that transfer, giving her the chance to “inhale” a ghost into the temple of her flesh so that the ghost may be “borrowed and used.”"
            },
            {
                "type": "paragraph",
                "text": "The very process of doing so is frightening to most—the mixture required is a potent concoction of homemade gunpowder, crystallized snake venom, and potassium chloride salt (used in lethal injections). The hunter ignites this, and quickly inhales the resultant flame into his lungs. As he does so, the hunter is likely to hear a chorus of babbling whispers from beyond the pale."
            }
        ],
        "Action": "Instant",
        "RollResults": [
            {
                "label": "Dramatic Failure",
                "text": "The character burns his esophagus. He takes five points of lethal damage."
            },
            {
                "label": "Failure",
                "text": "The character enters a death-like trance for the remainder of the scene whereupon he experiences intense hallucinations and visions. The hunter cannot move without expending a Willpower point—and even that only earns her one turn of movement and wakefulness."
            },
            {
                "label": "Success",
                "text": [
                    "The hunter is primed to “inhale” a ghost. The next manifested ghost the hunter meets can be drawn into her body with naught but a whispered entreaty to do so (the wording of the whisper is up to the hunter). No roll is necessary beyond the one made to process this potent Elixir.",
                    {
                        "type": "lineBreak"
                    },
                    "The ghost is drawn into the character’s lungs and lurks there for 24 hours. During this time, the hunter gains a handful of benefits:",
                    {
                        "type": "lineBreak"
                    },
                    "• The hunter gains use of one of the ghost’s Numina. The roll to use the Numina is Wits + Resolve.",
                    {
                        "type": "lineBreak"
                    },
                    "• The hunter knows all there is to know about the ghost—at least, as far as the ghost can remember. Whatever the ghost knows, the hunter now knows.",
                    {
                        "type": "lineBreak"
                    },
                    "• The hunter may enter the Underworld freely at any Avernian Gate (i.e. a subterranean gateway into the Great Below).",
                    {
                        "type": "lineBreak"
                    },
                    "• By spending a Willpower point, the hunter may manifest any Skills that the ghost possesses but that the hunter himself does not possess. This lasts for one scene, and the only drawback is that the hunter suffers a -1 penalty to any rolls using this new ghost-bound Skill.",
                    {
                        "type": "lineBreak"
                    },
                    "After 24 hours, the ghost is expelled from the body (and may never be drawn into the hunter’s flesh again). The hunter can keep the ghost in his body, however, beyond that time frame—however, choosing to do so earns him one point of aggravated damage. His body is wracked with pain and internal bleeding as the ghost is trapped for another 12 hours. Each 12 hour period after this guarantees the hunter another point of aggravated damage."
                ]
            },
            {
                "label": "Exceptional Success",
                "text": "As above, but the hunter can lay claim to two of the ghost’s Numina for his own use, now."
            }
        ],
        "Notes": [],
    },
    {
        "Name": "Vapors of Mercury",
        "Rating": "••",
        "Description": "The blood of the hunter transmutes into a silver substance that burns like acid if touched by a werewolf.",
        "Book": "SpSl 149",
        "Content": [
            {
                "type": "paragraph",
                "text": "The element mercury is also known as quicksilver. Extremely toxic, quicksilver poisoning can result from simple skin contact with the element or by inhaling the fumes. The alchemists of the Ascending Ones combine quicksilver with other esoteric ingredients to brew the Vapors of Mercury. The Elixir is inhaled by breathing in the vapors from a censor or, more commonly, from a modified asthma inhaler."
            }
        ],
        "Action": "Instant",
        "RollResults": [
            {
                "label": "Dramatic Failure",
                "text": "The hunter fails to process the toxins carried by the vapor and is afflicted with a Toxicity 4 lethal poison. This poison may be resisted with a contested Stamina + Resolve roll against the poison’s Toxicity."
            },
            {
                "label": "Failure",
                "text": "The hunter is affected as though she had taken a moderate (-2 to all dice pools and traits) dose of hallucinogen."
            },
            {
                "label": "Success",
                "text": "The hunter manages to process the Vapors of Mercury and benefits from its effects for the rest of the scene. The Elixir transmutes the blood of the hunter into a watery silver substance that burns like acid if touched by a werewolf. Each time the hunter suffers a wound that causes at least one point of lethal damage, any werewolf within one yard of the hunter takes an equal amount of lethal damage from the silvery blood spatter. Wounds caused by the spatter are considered aggravated for the purposes of healing for werewolves."
            },
            {
                "label": "Exceptional Success",
                "text": "As above, but the werewolf suffers an additional one point of lethal damage per instance of toxic blood spatter."
            }
        ],
        "Notes": [],
    }
]

const relicOverviewData = {
    "Name": "Relic",
    "Content": [
        {
            "type": "paragraph",
            "text": [
                "The Aegis Kai Doru has collected many trinkets and odd relics over the centuries. Some are mere oddments — little trifles for the amusement of kings and children. In a storehouse in Naples, an impossibly intricate clockwork man can play chess against a living opponent. In the sewers under Manhattan, a rough-hewn statue stolen from a college campus silently salutes whenever a virgin passes by. Others possess power so terrible that the group can only seal them away and guard against the day some fool unleashes them on a hapless world. Deep beneath the Russian taiga, in a cave that in every geological sense shouldn’t be there, three men stand guard over a crude stone altar that pulses like a living human heart. The guards have to be men — no one likes to even talk about what happened the last time a woman entered that cavern. There’s a church in Morocco that isn’t on any of the maps or in any of the tourist guides, and if you go there without an invitation, the last thing you’ll see before you feel the knife slide into your back is a mummified head on a cushion resting on the altar, and before it all goes black, you’ll swear to God the thing ",
                {
                    "text": "looked",
                    "italic": true
                },
                " at you."
            ]
        },
        {
            "type": "paragraph",
            "text": "Straddling the line between the curios and the sanity-rending artifacts of a long-dead age are the Relics gifted to Aegis Kai Doru agents in the field. As much status symbol as tool or weapon, these Relics are embodiments of the trust shown to promising field operatives. To be given a Relic is a singular honor, and the shame of losing one or allowing it to fall into the hands of others is as grievous as deliberate betrayal. Members of the Aegis Kai Doru have killed themselves rather than face their peers after losing a Relic to another hunter or, worse yet, a witch. The organization itself hunts those who steal “its” artifacts with a relentless determination, sometimes spending millions of dollars and years of its hunters’ lives to track down thieves. Recovery is always the primary objective, but no one in the Aegis Kai Doru raises much of a fuss if the Relic thieves end up dead."
        }
    ]
}

const relicData = [
    {
        "Name": "Aegis Talisman",
        "Rating": "•••••",
        "Cost": "(○)",
        "Dice Pool": "—",
        "Description": "3 Armor against physical and magical attack and for 1 Willpower, strike fear into an opponent",
        "Book": "HTV 183",
        "Content": [
            {
                type: "paragraph",
                text: [
                    "According to Greek myth, the Aegis was the shield of Zeus himself, an indestructible goatskin buckler onto which the head of Medusa was mounted. The Relic bearing its name is a silver amulet the size of a man’s spread hand, with the likeness of a Gorgon’s face embossed in the center and a ring of tassels like snakes around the rim. It provides protection against both physical and mystical assault and can, if invoked with the proper force of will, temporarily paralyze an enemy with abject terror. Aegis medallions are rare, and are only given to the highest-ranking field operatives of the Aegis Kai Doru."
                ]
            }
        ],
        "fullCost": "None or 1 Willpower.",
        "Action": "instant action",
        "RollResults": [
            {
                type: "paragraph",
                text: [
                    "If she succeeds, that enemy is paralyzed with fear for a number of turns equal to the difference in the number of successes rolled. A paralyzed opponent loses his Defense, but is not considered “completely dormant” and cannot be struck a killing blow."
                ]
            }
        ],
        "Benefit": [
            {
                type: "paragraph",
                text: [
                    "A character holding or wearing an Aegis Talisman next to her skin receives three points of armor against both physical and magical attack. This armor does not stack with other sources, be they natural, mundane, or supernatural in origin. In addition, by brandishing the Aegis Talisman and spending a point of Willpower, she may make a contested Presence + Intimidate roll with a +2 equipment bonus versus an enemy’s Resolve + Composure as an instant action (resistance is reflexive)."
                ]
            }
        ],
        "Notes": []
    },
    {
        "Name": "Barnabas-in-Amber",
        "Rating": "•••",
        "Cost": "—",
        "Dice Pool": "—",
        "Description": "A severed head relic that detects other Relics.",
        "Book": "C&C 50",
        "Content": [
            {
                type: "paragraph",
                text: [
                    "Fact: the Aegis Kai Doru have a thing for severed heads. They believe that the severed head contains the soul and wisdom of the body, and that death does not necessarily end the wisdom contained within. Yes, it is a locked door—but locks can be opened."
                ]
            },
            {
                type: "paragraph",
                text: [
                    "Fact: the Aegis Kai Doru sometimes keep the severed heads of their most prominent (usually Status •••••) hunters. Some of them end up as Relics. Some of them end up on shelves, catalogued in case they become Relics."
                ]
            },
            {
                type: "paragraph",
                text: [
                    "This severed head is of a prominent hunter from the pre-Revolution United States, an “Injun-hunter” named Barnabas Tuttle. Tuttle, a hunter for the Aegis Kai Doru, was a violent man, but he was no brute—rather, he was quite learned, and eventually developed a very keen sense for uncovering and understanding the ancient Relics of the native peoples (even if he did have to slaughter them to get a hold of such artifacts)."
                ]
            },
            {
                type: "paragraph",
                text: [
                    "Barnabas was killed in the hunt, and scalped in the process. His fellow hunters sought to contain the wisdom that might dare flee his hacked cranium, and so they stitched the scalp back on, cut off his head, and preserved the head with a lacquer made of tar, honey, and herbs."
                ]
            }
        ],
        "fullCost": "None directly, but any hunter who wields the head when it starts moaning will hear those moans in his sleep for eight straight nights—and, during those nights, he will not get a good night’s sleep (meaning no Willpower point gained upon waking).",
        "Action": "",
        "RollResults": [],
        "Benefit": [
            {
                type: "paragraph",
                text: [
                    "The Relic detects other Relics. Once the head gets within a mile of a Relic, it starts to moan softly. The closer it gets, the louder the moaning becomes. If it gets near (within 100 yards) of a very powerful Relics (four or five dots), the teeth start clacking together and the eyes start to roll."
                ]
            }
        ],
        "Notes": []
    },
    {
        "Name": "The Beauty Jar",
        "Rating": "•••••",
        "Cost": "○○",
        "Dice Pool": "—",
        "Description": "The hunter gains the following benefits:  Fame Merit at three dots, Striking Looks Merit at four dots and removal of the Unskilled penalty when it comes to Social rolls. The hunter can end the benefits by kissing someone.",
        "Book": "C&C 50",
        "Content": [
            {
                type: "paragraph",
                text: [
                    "Jayne Mansfield, buxom film starlet of the 50s and 60s, died in a horrible car crash when she was 34 years old. The car she was in hit a truck that itself was swerving to get out of the way of another truck spewing mosquito fogger. The story that says Mansfield was decapitated is supposedly a myth—but that the story is a myth is itself a myth, to cover up the fact that the head was stolen. Not by the Aegis Kai Doru, no—apparently by some mad doctor hoping to use her beautiful head in a Reanimated ritual as part of some undead bride. The Aegis Kai Doru did step in, however, and claim the head."
                ]
            },
            {
                type: "paragraph",
                text: [
                    "The head currently sits in a very large jar filled with brine. The face is ridiculously well-preserved, though the blonde hair is rotten and looks more like seaweed than anything else."
                ]
            }
        ],
        "fullCost": "2 Willpower, and the character will suffer a -5 penalty to all Drive rolls made while under the influence of the Beauty Jar’s power.",
        "Action": "",
        "RollResults": [],
        "Benefit": [
            {
                type: "paragraph",
                text: [
                    "To access the power afforded by this Relic, the hunter must drink one cup of the brine from the jar (don’t worry—it mystically produces more over the course of a few days). After doing so, the hunter gains the following benefits:"
                ]
            },
            {
                type: "list",
                items: [
                    [
                        "The Fame Merit at three dots."
                    ],
                    [
                        "The Striking Looks Merit at four dots."
                    ],
                    [
                        "A removal of the Unskilled penalty when it comes to Social rolls"
                    ]
                ]
            },
            {
                type: "paragraph",
                text: [
                    "The hunter’s body becomes intensely attractive to others. Curves and muscles are accentuated; blemishes and marks fade. This benefit is semi-permanent, until the hunter kisses someone (below)."
                ]
            },
            {
                type: "paragraph",
                text: [
                    "The hunter has one more benefit out of this, if you can call it that—she can end the effect (this is actually the only way to end it) by kissing someone. The kiss is profoundly foul. It tastes of bug repellent, decay, and brine. This poisons the relationship with that individual—both the hunter and that person share a -5 Social penalty with one another for the next month. It ends the Beauty Jar’s effects."
                ]
            }
        ],
        "Notes": []
    },
    {
        "Name": "Blood of Pope Joan",
        "Rating": "••",
        "Cost": "—",
        "Dice Pool": "—",
        "Description": "Level 1 Blessed item and gives Werewolves -2 against anyone carrying the Relic",
        "Book": "HTV 180",
        "Content": [
            {
                type: "paragraph",
                text: [
                    "Religious relics have long occupied a significant place in the minds of the faithful. From the bones of saints to splinters of the True Cross, artifacts of the faith have inspired pilgrimages, the construction of shrines and even the occasional holy war. Most relics are in the hands of various religious organizations, especially the Catholic Church, but down through the centuries, the Aegis Kai Doru has acquired several religious relics possessed of supernatural powers."
                ]
            },
            {
                type: "paragraph",
                text: [
                    "The Blood of Pope Joan reputedly comes from the only woman ever to hold the Papal office. According to legend, Pope Joan disguised herself as a man and served as Pope for two years in the late 11th century before her ruse was discovered and she was dragged through the street and stoned. Aegis Kai Doru scholars variously claim that this blood was gathered by Vatican occultists during her menses or that it was collected from the place of her execution. A darker twist on the legend states that Pope Joan was revealed as a woman when she became pregnant and gave birth to a son, and that the blood comes from this papal infant."
                ]
            }
        ],
        "fullCost": "",
        "Action": "",
        "RollResults": [],
        "Benefit": [
            {
                type: "paragraph",
                text: [
                    "The Blood of Pope Joan counts as a level-one blessed item (see The World of Darkness Rulebook, p. 214). In addition, werewolves suffer a -2 penalty to all rolls made against a hunter carrying this Relic. The Blood of Pope Joan’s mystical ties to the moon (which lends credence to the theory that the Relic is the female pope’s menstrual blood) repels the supernatural element of a werewolf’s being in much the same way that the like poles of two magnets repel each other."
                ]
            }
        ],
        "Notes": []
    },
    {
        "Name": "Box of the Treaty Elm",
        "Rating": "••••",
        "Cost": "○ ○, ※",
        "Dice Pool": "Resolve + Empathy",
        "Description": "Any oath spoken over the box is completely binding,if a group betrays the oath everyone  immediately lose all Willpower and suffer a -2 penalty to all dice rolls against the opposing group",
        "Book": "SpSl 210",
        "Content": [
            {
                type: "paragraph",
                text: [
                    "Records of the box’s whereabouts have been lost over time. It is widely believed a representative of either the hunters or wolfmen present at the treaty were assigned as steward of the box as a token of good faith. Accounts vary as to even which faction was left in charge and what became of it thereafter. Individuals on either side blame the other for knowing the box’s whereabouts or having lost it. Regardless, one thing most agree on: the box still exists somewhere within the city limits. Many desire to find and use it to return peace to the City of Brotherly Love; and still others who would want to destroy it."
                ]
            }
        ],
        "fullCost": "2 Willpower from all participating parties, and one physical token",
        "Action": "Instant",
        "RollResults": [
            {
                type: "line",
                label: "Dramatic Failure",
                text: [
                    "All participants and represented factions immediately lose all Willpower. Furthermore, the offering items disappear. The participants may attempt to swear to the same treaty by waiting one full turn of the moon (28 days) and repaying the full activation cost."
                ]
            },
            {
                type: "line",
                label: "Failure",
                text: [
                    "The Willpower is spent, but the items remain within the box and nothing happens."
                ]
            },
            {
                type: "line",
                label: "Success",
                text: [
                    "The offerings disappear without a trace and the oath is made binding to the participating representatives and the groups they speak for. Anyone claiming membership to one of the represented bodies are responsible for the oath’s upkeep. If a faction betrays any part of the treaty everyone within their ranks immediately lose all Willpower and suffer a -2 penalty to all dice rolls against or defending against the opposing faction (provided that faction remained true to the letter of the oath). In addition, oathbreakers gain a severe derangement (Storyteller’s choice)."
                ]
            },
            {
                type: "line",
                label: "Exceptional Success",
                text: [
                    "As a success above and the oathbreakers immediately suffer two aggravated damage upon committing the offense."
                ]
            }
        ],
        "Benefit": [
            {
                type: "paragraph",
                text: [
                    {
                        text: "Function: ",
                        bold: true
                    },
                    "This Relic makes any oath spoken over it completely binding. All parties who wish to participate in the compact choose a representative. The chosen individuals contribute their Willpower for the activation cost and supply the necessary token representing their faction. The token should be an item of some sacrifice or importance to the respective side of the agreement and able to fit inside the box (approximately one foot by six inches and six inches deep). If an appropriate item can’t be procured, one should be carved or crafted by the representative."
                ]
            },
            {
                type: "paragraph",
                text: [
                    "Each represented faction agrees on the letter of the pact and its conditions then each representative puts their selected token within the box, closes it and hands it to the next participant who follows suit. Once all the offerings are placed within, each side puts their hands on the box, and swears aloud to the oath. The Storyteller or relevant players make their rolls and add together the results of all the rolls to determine success below."
                ]
            }
        ],
        "Notes": [
            {
                type: "line",
                label: "Roll",
                text: [
                    "Resolve + Empathy (combine participants’ results)"
                ]
            },
            {
                type: "heading",
                text: [
                    "Suggested Modifiers:"
                ],
                level: 3
            },
            {
                type: "table",
                headers: [
                    "Modifier",
                    "Condition"
                ],
                rows: [
                    [
                        "+2",
                        "Offering is of deep personal significance."
                    ],
                    [
                        "+1",
                        "Offering is emblematic of the organization (badge, seal, or heirloom)."
                    ],
                    [
                        "+1",
                        "Offering was crafted by the participant."
                    ],
                    [
                        "-2",
                        "Offering is profane."
                    ],
                    [
                        "-3",
                        "Representative is in any way insincere."
                    ]
                ]
            }
        ]
    },
    {
        "Name": "Centurion's Gladdius",
        "Rating": "••••",
        "Cost": "○ or 1L",
        "Dice Pool": "—",
        "Description": "Normally a 1B melee weapon. If Willpower is spent, the weapon removes any magical properties of a struck object. Alternatively, if 1L is spent, the weapon becomes a 2L weapon.",
        "Book": "WF 127",
        "Content": [
            {
                type: "paragraph",
                text: [
                    "Some of the Relics held in the hidden vaults of the Aegis Kai Doru were originally enchanted by witches. Others are religious in purpose, and some are stranger still. The Centurion’s Gladius is one of these latter things. Only four have been found so far. Each is an old Roman sword, buried in an unmarked grave along with its owner. While buried in the ground, strange patterns formed on the corroded blades, runes that seem to writhe and twist under the gaze of anyone who inspects it. While no two swords have the same markings, they have the same properties."
                ]
            },
            {
                type: "paragraph",
                text: [
                    "A Centurion’s Gladius is the weapon of a leader, the king of items. That’s more than a hollow boast — an enchanted item struck with the blade is reduced to its mundane form. Though it’s power isn’t permanent, it gives the wielder a fighting chance against witches that prefer to work their magic through tools — or to hunt down a member of the Aegis Kai Doru gone rogue."
                ]
            }
        ],
        "fullCost": "1 Willpower or 1 point of lethal damage",
        "Action": "",
        "RollResults": [
            {
                type: "line",
                label: "Success",
                text: [
                    "Any magical properties of the item simply stop functioning for the rest of the scene. The item struck is rendered entirely inert and mundane in all ways until its magic returns."
                ]
            },
            {
                type: "line",
                label: "Exceptional Success",
                text: [
                    "The item is mundane for a whole day."
                ]
            }
        ],
        "Benefit": [
            {
                type: "paragraph",
                text: [
                    "Despite its apparent fragility, a Centurion’s Gladius is surprisingly hardy. Nobody has ever managed to shatter one, and magic directed against it simply fails. It’s something else, something alien to the arcane energies wielded by mages. A hunter can use that power to his advantage when confronted with a magical item. His player spends a point of Willpower and rolls Dexterity + Weaponry (if the item is wielded by a person, subtract the wielder’s Defense and assume the targeted attack incurs another -2 dice). This ability can only be used once per day."
                ]
            },
            {
                type: "paragraph",
                text: [
                    "Each Centurion’s Gladius is a corroded, weak example of a Roman sword, with a blade around two-and-a-half feet long. Though it cannot be broken, it’s of little use in combat — treat it as a 1(B) weapon. When the wielder wipes fresh blood across the runes on the blade (incurring one point of lethal damage), it becomes as sharp and well-balanced as it was in life, making it a potent weapon. After activation, treat it as a 2(L) melee weapon for one scene. The wielder of the Centurion’s Gladius can only use one of its powers each day."
                ]
            }
        ],
        "Notes": []
    },
    {
        "Name": "Dead Man's Face",
        "Rating": "•••••",
        "Cost": "○",
        "Dice Pool": "—",
        "Description": "Reanimate the head of a dead person",
        "Book": "HTV 184",
        "Content": [
            {
                type: "paragraph",
                text: [
                    "This gruesome Relic appears to be a mask made of the expertly flayed and cured skin of a human face. It’s difficult to determine the face’s gender or even race, as it was long ago reduced to a dried-up, brownish-tan mass. When placed over the face of a recently deceased corpse, the Dead Man’s Face momentarily forces some semblance of life back into the cadaver. It’s far from a true resurrection of the dead, and it doesn’t seem to be calling the ghost back to its mortal coil, but Aegis Kai Doru agents have learned to appreciate the information this Relic can provide without questioning its source too closely."
                ]
            }
        ],
        "fullCost": "1 Willpower; in addition, the hunter gains an Obsession derangement focused on death and the dead. This derangement lasts for one week.",
        "Action": "extended action",
        "RollResults": [],
        "Benefit": [
            {
                type: "paragraph",
                text: [
                    "The Dead Man’s Face must be placed over the face of a corpse that has been dead no more than 12 hours. The hunter must spend a point of Willpower and roll Presence + Resolve as an extended action as he utters a prayer to Hades, invoking the wisdom of death to seek the light of truth. This prayer requires one success per hour the corpse has been dead, with each roll representing 10 minutes of chanting. (An exceptionally long extended action may actually increase the number of successes required.)"
                ]
            },
            {
                type: "paragraph",
                text: [
                    "Once the requisite number of successes is acquired, the Dead Man’s Face stretches or shrinks to mold itself like a second skin to the corpse’s features. The corpse’s eyes snap open, and it returns, however briefly, to a semblance of life. The corpse can speak and move its head, but the rest of it remains inert and dead. (Rumors suggest that the Aegis Kai Doru possesses similar relics that can animate a hand, or even the entire body.) This “resurrection” lasts for one minute per point of Stamina the corpse possessed while alive. As a rule of thumb, assume the corpse can answer one reasonably complex question (e.g. “What did you see before you died?”) per minute."
                ]
            }
        ],
        "Notes": []
    },
    {
        "Name": "Doru Talisman",
        "Rating": "•••••",
        "Cost": "○",
        "Dice Pool": "—",
        "Description": "Acts as a 3L Melee weapon against opponents in a 10 yard radius",
        "Book": "HTV 184",
        "Content": [
            {
                type: "paragraph",
                text: [
                    "Like the Aegis Talisman, the Doru Talisman is one of the great symbols of the Aegis Kai Doru. These rare and powerful Relics are more than just powerful tools of the Hunt; they are symbols of status and prestige within the organization itself. Few field operatives are ever given this Relic, and the number that earns both an Aegis and a Doru Talisman can be counted on two hands."
                ]
            },
            {
                type: "paragraph",
                text: [
                    "A Doru Talisman is an intricately detailed representation in pure silver of a doru, or a Greek Hoplite’s spear. It is approximately four inches long, with a small hole bored through the back spike so it may be hung on a chain. In dim light, the spearhead sometimes shines red, as though reflecting the blood of an ancient battlefield."
                ]
            }
        ],
        "fullCost": "1 Willpower.",
        "Action": "",
        "RollResults": [],
        "Benefit": [
            {
                type: "paragraph",
                text: [
                    "Despite its diminutive size, a Doru Talisman is a potent weapon. By gripping the talisman in the hand in much the same manner as a full-sized spear, the Doru Talisman may be used as a 3(L) melee weapon, with which the wielder can attack any opponent within 10 yards of himself. He simply mimes a thrust with the spear (making a normal Weaponry attack), and though the talisman may never actually touch its victim, bloody wounds like those inflicted by an actual spear appear on the victim’s body."
                ]
            }
        ],
        "Notes": []
    },
    {
        "Name": "Eye of Hubris",
        "Rating": "••",
        "Cost": "—",
        "Dice Pool": "—",
        "Description": "Activation on obvious magical power get -2",
        "Book": "HTV 180",
        "Content": [
            {
                type: "paragraph",
                text: [
                    "This quartz crystal is the size of a tennis ball and the shape of a human eyeball. Strange colors swirl within its depths, suggesting the iris and pupil of some strange, ancient being. The Eye has no active effect that the Aegis Kai Doru has discovered, but its mere presence seems to infuriate witches as it causes their spells to go awry more frequently."
                ]
            }
        ],
        "fullCost": "None, but activating the Eye of Hubris causes the hunter to go blind in one eye for the rest of the scene, temporarily gaining the One Eye Flaw (see the World of Darkness Rulebook, p. 219). The hunter does not gain extra experience from this Flaw.",
        "Action": "Instant",
        "RollResults": [],
        "Benefit": [
            {
                type: "paragraph",
                text: [
                    "The Eye of Hubris causes magic to misfire in its vicinity. Any time a monster uses a power that is obviously magical (such as a fireball or turning into a wolf), he suffers a -2 penalty on the activation roll. Powers with no roll are unaffected. The Eye of Hubris’ effects last for one scene."
                ]
            }
        ],
        "Notes": [
            {
                type: "line",
                label: "Dice Pool",
                text: [
                    "None"
                ]
            }
        ]
    },
    {
        "Name": "Heart of Stone",
        "Rating": "••••",
        "Cost": "—",
        "Dice Pool": "—",
        "Description": "When hooked up to an electrical charge, it becomes an object of obsession",
        "Book": "HTV 181",
        "Content": [
            {
                type: "paragraph",
                text: [
                    "This lumpy, glassy rock is about the size of a large man’s fist. By itself, it’s harmless and completely inert — just an oddly shaped paperweight. The Heart’s true nature only becomes apparent when it’s hooked up to a sizable source of electricity, like a car battery or the electrical wiring in a house. Once you get enough current running over it, it revivifies into a living, beating heart. It takes a few days to really go to work, but once it does, it can make the victim’s life a living hell. First, people just start to want the thing the heart’s hooked up to. A man’s BMW gets more admiring glances as he rolls down the street, the realtor finds there aren’t enough hours in the day to schedule viewings of that new house on the market. After a while, though, things start to get rough. People still look longingly at the car, or the house, or whatever, but it’s tinged with an ugly greed. Tempers grow short, and some monsters become prone to flying into berserker rages. After a while, the Heart of Stone starts to attract...things. Aegis Kai Doru calls them erinyes, after the Greek Furies, and they seem to be drawn unerringly to those who have been in prolonged contact with the Heart."
                ]
            }
        ],
        "fullCost": "None, but the hunter suffers from the Fixation derangement focused on recovering the Heart as long as it is active and not in his possession.",
        "Action": "",
        "RollResults": [],
        "Benefit": [
            {
                type: "paragraph",
                text: [
                    "Hooking the Heart of Stone up to an electrical power source requires a Wits + Craft roll. Since the Heart takes some time to really get to work, it’s usually employed as a hidden booby trap, couched away in the bowels of a car’s engine or hidden down near the bilge of a luxury yacht. As the stone gives way to fleshy life, the heart pumps its weird, captivating energy throughout the structure or vehicle it’s connected to. This results in a sequence of escalating effects:"
                ]
            },
            {
                type: "list",
                items: [
                    [
                        "For the first 24 hours of the Heart’s activation, nothing bad happens. In fact, the owner of the device to which the Heart is connected enjoys a +1 bonus on all Social rolls against individuals aware of his ownership. Vampires, werewolves and other monsters prone to fits of rage suffer a -1 penalty on rolls to resist their fury if the Heart’s owner is the instigator. This penalty increases by -1 per day, to a maximum of -5."
                    ],
                    [
                        "On the second day, the bonus disappears and is replaced with a -1 penalty, as people become jealous of the owner or begin to irrationally suspect him of being up to no good. This penalty increases by -1 per day, to a maximum of -5."
                    ],
                    [
                        "Once the penalty has reached its maximum level by the sixth day, people begin to act on their jealousies and suspicions. Even ordinarily law-abiding citizens might try to carjack the victim, or break into his home just to experience the place. Neighborhood “watch groups” spontaneously come together to do something about “that car that’s always driving around watching the kids on the playground” or “the crack house over on 19th.”"
                    ],
                    [
                        "On the seventh day, the monsters start to arrive. Even the Aegis Kai Doru doesn’t know exactly where they come from, but these creatures dubbed erinyes start skulking out of the shadows on the seventh day. They seem to be unable to identify the Heart itself as the thing that called them, but they have an unerring ability to locate those who have spent the most time in the close vicinity of the Heart — usually the victim and his family. Erinyes vary widely in appearance, but usually resemble squat gargoyles or bizarre mythical chimeras. One Aegis Kai Doru cell in San Francisco reported that its Heart of Stone drew tiny humanoid figures composed of various mismatched bits of taxidermied animals, each dressed in a different period costume. Erinyes have the following stats:"
                    ]
                ]
            },
            {
                type: "line",
                label: "Mental Attributes",
                text: [
                    "Intelligence 0, Wits 1, Resolve 1"
                ]
            },
            {
                type: "line",
                label: "Physical Attributes",
                text: [
                    "Strength 3, Dexterity 2, Stamina 2"
                ]
            },
            {
                type: "line",
                label: "Social Attributes",
                text: [
                    "Presence 1, Manipulation 0, Composure 2"
                ]
            },
            {
                type: "line",
                label: "Physical Skills",
                text: [
                    "Athletics 1, Brawl 4, Stealth (Stalking) 1, Survival 2"
                ]
            },
            {
                type: "line",
                label: "Willpower",
                text: [
                    "3"
                ]
            },
            {
                type: "line",
                label: "Initiative",
                text: [
                    "6"
                ]
            },
            {
                type: "line",
                label: "Defense",
                text: [
                    "2"
                ]
            },
            {
                type: "line",
                label: "Speed",
                text: [
                    "15"
                ]
            },
            {
                type: "line",
                label: "Health",
                text: [
                    "8"
                ]
            },
            {
                type: "line",
                label: "Size",
                text: [
                    "4"
                ]
            },
            {
                type: "table",
                title: "Weapons/Attacks",
                headers: [
                    "Type",
                    "Dam",
                    "Range",
                    "Dice Pool",
                    "Special"
                ],
                rows: [
                    [
                        "Bite",
                        "(B)",
                        "-",
                        "7",
                        "-"
                    ],
                    [
                        "Claws",
                        "1(L)",
                        "-",
                        "8",
                        "-"
                    ]
                ]
            },
            {
                type: "line",
                label: "Armor",
                text: [
                    "1"
                ]
            },
            {
                type: "paragraph",
                text: [
                    "The creatures (and all penalties associated with the Heart) disappear immediately if the Heart is cut off from its electrical current. Sometimes the erinyes leave behind little stone or wood bodies. These are promptly collected by the Aegis Kai Doru and may become Relics in their own right."
                ]
            }
        ],
        "Notes": [
            {
                type: "heading",
                text: [
                    "THE HEART OF STONE AND THE CREATED"
                ],
                level: 3
            },
            {
                type: "paragraph",
                text: [
                    "Players who own Promethean: The Created have no doubt noticed the similarities between the effects of the Heart of Stone and certain properties of Promethean existence. Whether or not the Heart of Stone is, in fact, the calcified heart of one of the Created is left up to the Storyteller; it is possible to integrate that game’s elements into Hunter: the Vigil. The penalties incurred by the Heart of Stone can be replaced with the four stages of Disquiet as described on page 167 of Promethean: the Created. The erinyes can use the statistics and special powers of the Pandorans described in Promethean or its supplement, Pandora’s Book."
                ]
            },
            {
                type: "paragraph",
                text: [
                    "This level of integration is entirely optional; if you don’t have Promethean or don’t want to feature it in your Hunter game, the rules presented herein are perfectly serviceable."
                ]
            }
        ]
    },
    {
        "Name": "Hex Sign",
        "Rating": "• to •••••",
        "Cost": "○",
        "Dice Pool": "Resolve + Occult",
        "Description": "Affix symbols to a location that provide a variety of effects",
        "Book": "WF 191",
        "Content": [
            {
                type: "paragraph",
                text: [
                    "A hex sign’s cost is equal to one dot per symbol (and associated power) it includes, to a maximum of 5. Where noted as permissible, if more than one symbol of a particular kind is included, its effects are cumulative, but so is the cost. Thus a hex sign with a heart, a star, and three tulips would be 5 dots and (when activated) bestow +1 dice bonus to all Presence rolls, + 1 to resist disease, toxins and supernaturally accelerated aging and +3 bonus dice to resist supernatural attacks (making a cumulative +4 against supernatural aging, which counts as both itself and a supernatural attack.)"
                ]
            },
            {
                type: "paragraph",
                text: [
                    "Regardless of their supernatural potential, hex signs have no power while mobile. They must be affixed in place on a horizontal or vertical surface before being activated. Their power will automatically end if the relic is moved, although it can be reactivated once the sign is once again placed in an affixed location. The hex sign’s power is an area of effect that is of inverse proportion to the power of the hex. All individuals within the given area receive the benefit of an activated hex sign’s effects."
                ]
            },
            {
                type: "table",
                headers: [
                    "Potency",
                    "Area"
                ],
                rows: [
                    [
                        "•",
                        "100 square yard area, including all buildings within that area"
                    ],
                    [
                        "••",
                        "50 square yard area, including all buildings within that area"
                    ],
                    [
                        "•••",
                        "100 square foot area, including all buildings within that area"
                    ],
                    [
                        "••••",
                        "The building within which the hex sign is affixed (or a maximum of 2000 square feet, whichever is smaller)."
                    ],
                    [
                        "•••••",
                        "Only the room within which the hex sign is affixed (or a maximum of 400 square feet, whichever is smaller)."
                    ]
                ]
            }
        ],
        "fullCost": "1 Willpower",
        "Action": "",
        "RollResults": [
            {
                type: "line",
                label: "Dramatic Failure",
                text: [
                    "Activation does not occur and the hex sign cannot be activated until an entire lunar month has passed."
                ]
            },
            {
                type: "line",
                label: "Failure",
                text: [
                    "Activation does not occur and the hex sign cannot be activated for the remainder of the scene. (Further attempts result in automatic dramatic failure.)"
                ]
            },
            {
                type: "line",
                label: "Success",
                text: [
                    "The hex sign is activated and remains so for the remainder of the scene, bestowing whatever benefits are appropriate for the symbols shown on it."
                ]
            },
            {
                type: "line",
                label: "Exceptional Success",
                text: [
                    "The hex sign is activated and remains so for the next 24 hours."
                ]
            }
        ],
        "Benefit": [
            {
                type: "paragraph",
                text: [
                    "Some of the symbols utilized (and the benefits to those in the area of an activated hex sign that features them) include:"
                ]
            },
            {
                type: "line",
                label: "Distelfink",
                text: [
                    "A mythological bird akin to a meadowlark, said to bring happiness. (+2 bonus dice in all Morality, Degeneration and Derangement rolls.) Limit: 2"
                ]
            },
            {
                type: "line",
                label: "Double Headed Eagle",
                text: [
                    "This two-headed bird represents strength and courage. (Spending Willpower grants 4 bonus dice, rather than 3, to permissible challenges, or 3 to Stamina, Resolve, Composure or Defense to resist mental or social/emotional pressures or to make concentrated effort to avoid being harmed per p. 95 of the World of Darkness Rulebook.) Limit: 1"
                ]
            },
            {
                type: "line",
                label: "Hearts",
                text: [
                    "To attract and maintain love. (+1 bonus to all Presence rolls.) Limit: 3"
                ]
            },
            {
                type: "line",
                label: "Oak Leaf",
                text: [
                    "Oak represents strength of body, mind and character. (+1 bonus to all Strength, Intelligence and Presence rolls.) Limit: 1"
                ]
            },
            {
                type: "line",
                label: "Tulips",
                text: [
                    "Hex sign tulips are normally shown with a stylized arrangement of three petals representing the three-fold aspect of God. As such, tulips are used to maintain faith and protect against witches. (+1 bonus dice to any attempt to resist supernatural attack, whether physical, mental or social.) Limit: 3"
                ]
            },
            {
                type: "line",
                label: "Outer Ring – Black",
                text: [
                    "A solid black ring around the exterior of a hex sign represents unity. (+1 cumulative dice bonus for any rolls involving teamwork; see p. 134 of the World of Darkness Rulebook for teamwork rules.)"
                ]
            },
            {
                type: "line",
                label: "Outer Ring – Brown",
                text: [
                    "A solid brown ring around the exterior of a hex sign represents the cycle of life and can be used to bring longevity or avert disease. (+3 die bonus to all attempts to resist disease, toxins, or supernaturally-accelerated aging.) Limit: 1"
                ]
            },
            {
                type: "line",
                label: "Outer Ring – Waves",
                text: [
                    "A border of waves or scallops around the outside of a hex sign represents smooth sailing. (+1 to Manipulation rolls.) Limit: 1"
                ]
            },
            {
                type: "line",
                label: "Rosette – 6 petal",
                text: [
                    "A simple six-petal flower represents good fortune during particularly challenging times. (Dramatic failures reduce to failure while within area of influence of this activated hex sign.) Limit: 1"
                ]
            },
            {
                type: "line",
                label: "Rosette –12 petal",
                text: [
                    "A 12-petal rosette (also called a Daddy Hex) represents an entire year of good fortune. (1 reroll of any dramatic failure or failure. Second roll must be used.) Limit: 1"
                ]
            },
            {
                type: "line",
                label: "Stars",
                text: [
                    "Eight-pointed stars represent skill and knowledge. (+2 dice bonus on rolls in any one of the following focus areas: Academics, Crafts, Investigation, Medicine, Occult, Survival, Animal Ken, Empathy or Expression (ST chooses focus for hex, which then does not change) Limit: 4 (must all be different focus areas.)"
                ]
            },
            {
                type: "line",
                label: "Wheat",
                text: [
                    "Stalks or sheaves of wheat represent an abundance or material prosperity. (For the next lunar month, a character’s Resources act as if they are one dot higher than they actually are.) Limit: 2"
                ]
            }
        ],
        "Notes": [
            {
                type: "paragraph",
                text: [
                    "Note: Permanently-affixed hex signs operate with a 100 square yard area, regardless of their potency. This only applies to signs where the hex has been directly painted upon a structure, wall or upon the ground."
                ]
            },
            {
                type: "line",
                label: "Dice Roll",
                text: [
                    "Resolve + Occult"
                ]
            }
        ]
    },
    {
        "Name": "Icarine Servitor",
        "Rating": "•••",
        "Cost": "—",
        "Dice Pool": "—",
        "Description": "Living wax servant",
        "Book": "HTV 180",
        "Content": [
            {
                type: "paragraph",
                text: [
                    "At first blush, this appears to be nothing more than a crude mannequin made of wax, about the size of a doll, with rudimentary wings made of thin sticks tied with string. Should a character anoint the figure with a dab of honey and stick a feather into its waxen head, the figure comes to a kind of gruesome life. Although extremely susceptible to heat, the Icarine Servitor can serve as a useful spy or even assassin."
                ]
            }
        ],
        "fullCost": "",
        "Action": "",
        "RollResults": [],
        "Benefit": [
            {
                type: "paragraph",
                text: [
                    "When activated, the Icarine Servitor becomes a tiny, living creature with the following statistics:"
                ]
            },
            {
                type: "line",
                label: "Attributes",
                text: [
                    "Intelligence 1, Wits 2, Resolve 2, Strength 1, Dexterity 4, Stamina 2, Presence 0, Manipulation 0, Composure 1"
                ]
            },
            {
                type: "line",
                label: "Skills",
                text: [
                    "Athletics 2, Stealth 4, Weaponry 1"
                ]
            },
            {
                type: "line",
                label: "Willpower",
                text: [
                    "N/A"
                ]
            },
            {
                type: "line",
                label: "Initiative",
                text: [
                    "5"
                ]
            },
            {
                type: "line",
                label: "Defense",
                text: [
                    "4"
                ]
            },
            {
                type: "line",
                label: "Speed",
                text: [
                    "6 (Species factor 1), fly 15 (Species factor 10)"
                ]
            },
            {
                type: "line",
                label: "Size",
                text: [
                    "2"
                ]
            },
            {
                type: "line",
                label: "Health",
                text: [
                    "4"
                ]
            },
            {
                type: "paragraph",
                text: [
                    "The servitor has a rudimentary intelligence that allows it to follow moderately complicated instructions. Although it cannot communicate per se, it is capable of recognizing any person, place or thing its activator recognizes on sight, and it can “report” anything it sees by means of a similar quasi-visual link. The servitor has no real combat abilities to speak of, but it can slip poison into a drink or cut a car’s brake line if provided with the proper tools. The Icarine Servitor is especially vulnerable to fire, and any source of flame, no matter how small, inflicts aggravated damage. A servitor destroyed by fire melts into a puddle of useless waxy goo and a tangle of twigs and strings; it cannot be animated again. If a servitor is destroyed by a more mundane source of damage, such as being chopped up or crushed, it can be repaired with ten successes on an extended Dexterity + Craft roll. Each roll represents 15 minutes."
                ]
            },
            {
                type: "paragraph",
                text: [
                    "An Icarine Servitor remains active until the next dawn or sunset, whichever comes first. Unless given explicit instructions otherwise, the servitor will try to return to its owner before the duration expires. The servitor’s owner may spend one Willpower point as a reflexive action to extend the servitor’s animation until the following dawn or sunset, but doing so causes the creature’s behavior to become increasingly erratic. One Aegis Kai Doru hunter, thinking to use the servitor as a round-the-clock bodyguard, kept it active for a week straight. On the seventh night, he died — “gas leak,” the authorities called it."
                ]
            }
        ],
        "Notes": []
    },
    {
        "Name": "Idol of Gevandan",
        "Rating": "••••",
        "Cost": "※",
        "Dice Pool": "—",
        "Description": "When active, it makes all werewolves be determined to take possession of the idol, even from each other",
        "Book": "SpSl 150",
        "Content": [
            {
                type: "paragraph",
                text: [
                    "Between 1764 and 1767, a large wolf that was named the Beast of Gévaudan terrorized the small cities and hamlets of south-central France. Supposedly responsible for over 300 attacks that resulted in estimated casualties of around 50 wounded and 120 dead, the wolf eluded capture or death by hunters dispatched by King Louis XV and was finally put down by a local with silver bullets. The beast was said to measure four feet tall at the shoulder and witnesses claimed it could leap 30 feet. Aegis Kai Doru hunters tell a slightly different version of the story. They claim the Beast of Gévaudan was the last remaining member of a werewolf pack that hunted in the area. The Guardians of the Labyrinth say they helped a French local hunt the Beast to its lair and provided him with the silver bullets used to slay it. After the Beast was dead, the hunters searched its lair and found a crude stone idol of a great wolf, which had been placed in a niche and surrounded with the heads of the Beast’s victims, like grotesque offerings. Aegis Kai Doru took possession of the idol and paid the local to never discuss either the idol or their involvement in the incident."
                ]
            }
        ],
        "fullCost": "The user must splash werewolf blood on the Idol of Gévaudan to activate the Relic",
        "Action": "",
        "RollResults": [
            {
                type: "line",
                label: "Success",
                text: [
                    "The werewolf manages to fight the call and can behave normally."
                ]
            },
            {
                type: "line",
                label: "Failure",
                text: [
                    "The werewolf will stop at nothing to take possession of the Idol for itself and only for itself, even fighting other pack members for control of the Relic."
                ]
            }
        ],
        "Benefit": [
            {
                type: "paragraph",
                text: [
                    "Figuring out exactly how to use the Idol of Gévaudan proved something of a quandary for Aegis Kai Doru. Testing proved that simply showing the Idol to a werewolf provoked no response and it wasn’t until one of their “test subjects” was wounded in a struggle and accidentally spattered some blood on the Icon did the hunters figure out how to activate it. When active, the Idol becomes warm to the touch and calls to any werewolf that views it to take ownership of the Relic. This call stirs the animal instincts of a werewolf and the monsters will literally fight to the death to claim the Idol. Whenever a werewolf sees the Idol while it is active they must roll Resolve + Composure with a -4 penalty."
                ]
            },
            {
                type: "paragraph",
                text: [
                    "The Idol remains active until the next full moon after it tastes the blood of a werewolf. If a werewolf manages to take possession of the thing, the Idol remains active an additional month for each head offered to it as tribute by the werewolf."
                ]
            },
            {
                type: "paragraph",
                text: [
                    "In addition to the other effects, a werewolf that succumbs to the call of the Idol is locked into near-wolf form for as long as the Idol remains active. Aegis Kai Doru hunters that have used the Relic say the best way to employ the thing is to activate it then toss it into the middle of a werewolf pack. The monsters will kill each other to claim ownership of the Idol and the remaining survivor can then be dispatched. Not the type to take chances, the Guardians of the Labyrinth have tagged this one-of-a-kind Relic with a tiny GPS locator that will allow them to find it even if a werewolf manages to escape with the Idol."
                ]
            }
        ],
        "Notes": []
    },
    {
        "Name": "Kirkestede’s Lenses",
        "Rating": "•",
        "Cost": "—",
        "Dice Pool": "—",
        "Description": "Gain bonuses to research.",
        "Book": "HTV 307",
        "Content": [
            {
                type: "paragraph",
                text: [
                    "Looking more like a pair of monocles attached together with a hinge that bridges the nose, Kirkestede’s Lenses is an example of the integration of early technology in eyewear with supernatural enhancement. Credited to Henry of Kirkestede, a 14th-century English librarian, the bronze and quartz glasses do nothing to aid the wearer’s ocular ability (in fact, they obscure it slightly beyond reading distance). They do, however, aid dramatically in a researcher’s duties."
                ]
            }
        ],
        "fullCost": "",
        "Action": "",
        "RollResults": [],
        "Benefit": [
            {
                type: "paragraph",
                text: [
                    "Anyone donning the glasses and spending a point of Willpower in concentration gains +2 on all research related rolls for that scene. Likewise, their reading (and comprehension) speed is doubled for the scene, effectively halving the time period required for any extended research action. (See “Research,” pp. 55–56 of the World of Darkness Rulebook). And finally, any challenges to memorize material read during a scene where the glasses are worn and activated are made at a +2 bonus. (See “Memorizing and Remembering,” pp. 44–45 of the World of Darkness Rulebook.)"
                ]
            }
        ],
        "Notes": [
            {
                type: "paragraph",
                text: [
                    "Unfortunately for aspiring scholars, using the Lenses has drawbacks as well. A character wearing the glasses, whether activated or not, is at a -2 penalty for all actions requiring sight at anything other than close reading distance. As well, he is at a -4 penalty to reflexive rolls against being surprised."
                ]
            }
        ]
    },
    {
        "Name": "The Oath Stone",
        "Rating": "•••",
        "Cost": "1L",
        "Dice Pool": "—",
        "Description": "Swear upon the stone in order to gain benefits to hunting Relics and combatting both werewolves and mages",
        "Book": "C&C 51",
        "Content": [
            {
                type: "paragraph",
                text: [
                    "To take an oath is to take on a responsibility—and the ancient Greeks and Romans would sometimes invoke oaths and vows upon a stone at one of Zeus’ temples. That stone was large; this one is not, and is actually only a small fragment of one of the primary “Iuppiter Lapis” stones found in the temple on Rome’s Capitoline Hill. It fits in one’s hand (Size 1). The stone has a small double-headed axe (sagaris/labrys) etched into it: a symbol representing one of Zeus’ lightning bolts."
                ]
            }
        ],
        "fullCost": "1 point of lethal damage from both the target hunter and the hunter governing the oath-taking ceremony, with the blood spilled upon the stone",
        "Action": "",
        "RollResults": [],
        "Benefit": [
            {
                type: "paragraph",
                text: [
                    "Those who have sworn upon the stone gain benefits when pursuing Relics, or attacking mages and werewolves. Any roll made in effort to pursue a Relic gains a +1 bonus. Any roll made in effort to cause physical harm to a mage or a werewolf gains +3 dice (a reasonable bonus, but it pales in comparison to a shapechanger’s raking claws and snapping jaws). At the Storyteller’s discretion, a vow on the Oath Stone might also be necessary for the hunter to use Relics at all—it “unlocks” their magic."
                ]
            }
        ],
        "Notes": []
    },
    {
        "Name": "Ohtas",
        "Rating": "•••",
        "Cost": "○",
        "Dice Pool": "Resolve + Occult",
        "Description": "Any Vigil related action is at +1 If benefiting Lenape tribe, then add additional +2.",
        "Book": "WF 187",
        "Content": [
            {
                type: "paragraph",
                text: [
                    "Ohtas are occasionally found in archeological digs in the Philadelphia area and many natural history museums in the area have at least one ohtas in their collection. Few, however, realize the relics are still potentially powerful."
                ]
            },
            {
                type: "paragraph",
                text: [
                    "While the details of ohtas appearances vary depending on the exact period, tribe and creator, most are between six and 10 inches tall, carved of local wood (predominantly oak, beech, birch or sugar maple) and depicting a simple human figure clothed in Lenape traditional wear. Most are faceless; some actually look like faceless angels (which may give hunters of the Knights of Saint George pause)."
                ]
            }
        ],
        "fullCost": "1 Willpower",
        "Action": "",
        "RollResults": [
            {
                type: "line",
                label: "Dramatic Failure",
                text: [
                    "The individual attempting to activate the ohtas instead angers the Relic and incurs a reversal of the intended effect. All actions attempted in the next scene are rolled at a -2 dice penalty."
                ]
            },
            {
                type: "line",
                label: "Failure",
                text: [
                    "There is no effect, and the expended Willpower is lost."
                ]
            },
            {
                type: "line",
                label: "Success",
                text: [
                    "The activating individual is blessed with the ohtas’ favor. Any action related to the Vigil that is attempted in the next scene is rolled at a +1 die bonus. As well, if the action directly benefits a member(s) or descendent(s) of the Lenape tribe, the roll is made at an additional +2 die bonus (for a cumulative +3 bonus). Further activations cannot increase these bonuses."
                ]
            },
            {
                type: "line",
                label: "Exceptional Success",
                text: [
                    "The ohtas’ favor is strong. Bonuses remain with the activating individual for the next 12 hours."
                ]
            }
        ],
        "Benefit": [],
        "Notes": [
            {
                type: "line",
                label: "Dice Pool",
                text: [
                    "Resolve + Occult"
                ]
            },
            {
                type: "line",
                label: "Drawback",
                text: [
                    "Any action taken against a member or descendent of the Lenape tribe while in possession of an ohtas (either literally carrying one or owning it — even if the doll is not carried on their person) is made at a -4 dice penalty."
                ]
            },
            {
                type: "heading",
                text: [
                    "Suggested Modifiers"
                ],
                level: 3
            },
            {
                type: "table",
                headers: [
                    "Modifier",
                    "Situation"
                ],
                rows: [
                    [
                        "+2",
                        "Activator is a member or descendent of the Lenape tribe"
                    ],
                    [
                        "+2",
                        "Activator speaks a prayer of genuine respect and honor to the ohtas immediately before activating it."
                    ],
                    [
                        "+2",
                        "Activator spends at least one turn dancing with the doll before activating it"
                    ],
                    [
                        "-4",
                        "Activator currently has ill intentions towards the Lenape in general, or a member or descendent of the tribe in specific."
                    ],
                    [
                        "-1",
                        "Activation is being attempted outside the Delaware Valley region"
                    ],
                    [
                        "-1",
                        "The ohtas has been successfully activated within the last lunar month (cumulative with each successful activation within the month)."
                    ]
                ]
            }
        ]
    },
    {
        "Name": "One-Eyed Kings",
        "Rating": "•",
        "Cost": "—",
        "Dice Pool": "—",
        "Description": "Paired coins that allow one to see what is in the vicinity of the other.",
        "Book": "HTV 179",
        "Content": [
            {
                type: "paragraph",
                text: [
                    "These ancient, verdigris-covered copper coins are so worn as to be nearly indistinguishable from simple metal discs. Only a faint relief on one side can still be made out: the image of a king, in a style that vaguely suggests both the Grecian and the Babylonian. This king is missing an eye, though whether that is an intentional part of the carving or the wear of countless centuries is impossible to determine. One-Eyed Kings always come in a pair: one coin with the king missing his left eye, one with the king missing his right. The organization possesses hundreds of these coin pairs, all demonstrating the same mystical properties. Attempts to date the metal have provided wildly differing results, with ages ranging from 9,000 years to just under two centuries."
                ]
            }
        ],
        "fullCost": "1 Willpower.",
        "Action": "",
        "RollResults": [],
        "Benefit": [
            {
                type: "paragraph",
                text: [
                    "When the coin missing its left eye is walked over the knuckles of the right hand and then pressed over the left eye, it grants its user the ability to see whatever is happening in the vicinity of the other coin. His vantage point is roughly as though he were standing adjacent to the coin’s location; if the coin is in a wizard’s pocket, for example, the hunter sees things as though he were standing next to the wizard. The view cannot be changed, and subsequent uses of the One-Eyed King show the same angle and position until the coin missing its right eye is moved."
                ]
            },
            {
                type: "paragraph",
                text: [
                    "The hunter cannot hear, smell, touch or taste anything in the vicinity of the other coin. The clairvoyant connection only works one way. If the hunter tries to use the coin missing its right eye to see the location of the coin missing its left eye, he instead sees a brief, terrifying glimpse of a vast gulf of pure, black nothingness, inside which things that are not things gibber and wail for his soul. The shock causes him to lose a Willpower point immediately, and unless he succeeds on a Resolve + Composure roll, he gains a temporary derangement that lasts until the next day. The Storyteller and player should work together to determine the nature of the derangement."
                ]
            },
            {
                type: "paragraph",
                text: [
                    "If the hunter places either of the One-Eyed King coins on his eyelid and spends a Willpower point before going to sleep, he will find its match on his other eyelid when he wakes up."
                ]
            }
        ],
        "Notes": []
    },
    {
        "Name": "Phylactery of Commius",
        "Rating": "•••••",
        "Cost": "※",
        "Dice Pool": "—",
        "Description": "Bind a spirit to the Phylactery in order to gain a number of benefits",
        "Book": "SpSl 150",
        "Content": [
            {
                type: "paragraph",
                text: [
                    "The Gaulish Atrebates (a tribe that lived in what is today northern France) were beaten into submission somewhere around the year 57 BC just as the Legions under the command of Julius Caesar expanded the reach of Rome to the north. Julius Caesar appointed a man named Commius (a Gaul) to act as the new king of the tribe. Commius acted the part of loyal ally to Julius Caesar until 53 BC when, after hearing rumors that Commius was conspiring against Rome, Titus Labienus (Caesar’s second in command) set an ambush to assassinate Commius. Though sorely wounded, Commius escaped the ambush and fled to Britain where he took up arms against the Romans. By dint of personal bravery and political acumen, he managed to set himself up as king of the Atrebates in Britain in 30 BC and coins were minted bearing his image until 20 BC."
                ]
            },
            {
                type: "paragraph",
                text: [
                    "The commonly accepted theory is that there were two kings named Commius, father and son, one who ruled in Gaul and the other in Britain. Commius was thought to have been elderly when he first assumed the throne in 53 BC and for him to have survived both his wounds and the passing of the years would have been extraordinary for the time period. The Aegis Kai Doru has a different theory. It claims both kings were one and the same and that Commius managed to survive as long as he did directly as a result of his ownership of a magical phylactery."
                ]
            }
        ],
        "fullCost": "1 dot of Willpower when first acquired to attune the Relic to its new owner.",
        "Action": "",
        "RollResults": [],
        "Benefit": [
            {
                type: "paragraph",
                text: [
                    "In the time of Julius Caesar, a phylactery was a small box that contained magical texts and sacred herbs that was supposed to protect its owner from harm. The Phylactery of Commius is just small enough to fit into a coat pocket and has no obvious mechanism for opening. The Aegis Kai Doru members go out of their way to make sure no one tampers with whatever contents the box might hold and they are instructed to deal firmly with anyone that attempts to open it."
                ]
            },
            {
                type: "paragraph",
                text: [
                    "By itself, the phylactery is just an old stone box with some interesting carvings. To gain the full benefits of ownership, the user must bind a spirit to the Relic. Binding a spirit to the phylactery can be tricky. No spirit will willingly allow itself to be bound to the thing (spirits instinctively understand the effects of such a binding) so the owner must summon a spirit into the material realm to bind it. This task can be accomplished though use of the “Effigy” Tactic (see p. 132), or whatever other means are available to the owner. Once a spirit has been drawn into the material realm, the owner must thrice name the spirit (its true name) and touch the phylactery to the spirit’s materialized form. The owner then completes the ritual by daubing a bit of his blood on the box."
                ]
            },
            {
                type: "paragraph",
                text: [
                    "Once the binding is complete, the spirit is drawn into and contained inside the phylactery. From that point forward, as long as the phylactery is within two yards of the owner, he gains the following benefits."
                ]
            },
            {
                type: "list",
                items: [
                    [
                        "The owner ages at half the normal rate and is immune to disease or poison."
                    ],
                    [
                        "Any wounds suffered by the owner are first subtracted from the Health of the bound spirit. If the spirit is slain as a result of this damage, a new spirit must be bound to the box.."
                    ],
                    [
                        "The owner gains the ability to speak the language of spirits."
                    ]
                ]
            }
        ],
        "Notes": [
            {
                type: "line",
                label: "Drawback",
                text: [
                    "If the spirit is ever freed from the phylactery or the phylactery is destroyed, the owner of the Relic suffers a spiritual backlash and takes three points of aggravated damage. Unless the bound spirit was destroyed along with the phylactery, it will likely seek some kind of retribution against the person who imprisoned it."
                ]
            }
        ]
    },
    {
        "Name": "Prometheus’ Blood",
        "Rating": "•••••",
        "Cost": "—",
        "Dice Pool": "—",
        "Description": "When placed in the abdomen of a living person making the person it's placed inside immune to disease, poison, and infection. Once per turn, user can spend 1 Willpower to downgrade all lethal damage to bashing damage",
        "Book": "CoH15 1",
        "Content": [
            {
                type: "paragraph",
                text: [
                    "The Doctors’ Relic is a silver disk about six inches in diameter and two inches thick; the exact number of “drops” of Prometheus’ Blood in existence is unknown, but the Doctors have at least a handful of them. Legend claim that they are drops of the mythical Prometheus’ blood, baked in the sun on the mountain of his imprisonment."
                ]
            }
        ],
        "fullCost": "None.",
        "Action": "",
        "RollResults": [],
        "Benefit": [
            {
                type: "paragraph",
                text: [
                    "The first is a form of regeneration. When the Relic is placed flat against the abdomen of a living person, it slides through flesh with ease and leaves no trace of its passing. Once inside the body, the Blood begins to go to work, altering the living flesh, organs and blood of the person. Any character with Prometheus’ Blood inside her is immune to disease, poison and infection as long as the Relic remains inside her (though she can age normally). Additionally, once per scene, the character can spend a point of Willpower as an instant action to downgrade all of her lethal wounds to bashing damage. Removal of the Relic from a body results in instant death."
                ]
            },
            {
                type: "paragraph",
                text: [
                    "The second is the ability to grow clones. When the Blood is placed in a solution containing enough DNA and the proper ritual is performed, the Relic will use its regenerative powers to restore a full body from the genetic material. This regrowth process takes several weeks and can be stopped by removing the Relic from the biological matter."
                ]
            },
            {
                type: "paragraph",
                text: [
                    "Finally, the Blood causes all organs and bodily fluids to remain in stasis when its host body is killed. This allows organs to be transplanted as if they were from a fresh cadaver, regardless of how long the individual has been dead."
                ]
            }
        ],
        "Notes": []
    },
    {
        "Name": "Ringsel",
        "Rating": "•••",
        "Cost": "○ +",
        "Dice Pool": "—",
        "Description": "Heal at a rate of 1 Willpower for 1 Bashing and 2 Willpower for 1 Lethal or negate a degeneration for 1 Willpower instead.",
        "Book": "HTV 181",
        "Content": [
            {
                type: "paragraph",
                text: [
                    "When a truly enlightened Buddhist master dies and the body is cremated, small, pearl-like stones are sometimes found among the ashes. Tibetan Buddhism considers these Ringsel to be the physical embodiment of the master’s wisdom, knowledge and enlightenment. Most are placed in shrines, where pilgrims can visit them and venerate the memories of the masters who left them behind, but the Aegis Kai Doru have “acquired” a number of these sacred relics. Ringsel are said to have mystical properties, granting peace and wisdom to those who behold them, and even healing injuries when touched. The occultists of the Aegis Kai Doru are more interested in these mystical abilities than in the spiritual significance of Ringsel, and have been known to steal Ringsel left after prominent masters pass on."
                ]
            }
        ],
        "fullCost": "1 Willpower.",
        "Action": "",
        "RollResults": [],
        "Benefit": [
            {
                type: "paragraph",
                text: [
                    "By meditating over a Ringsel, a character may draw upon her inner reserves of strength to heal her body. Entering a meditative state requires four successes on a Wits + Composure roll, as described on page 51 of The World of Darkness Rulebook. Once the character has achieved this meditative state, she may spend Willpower to heal her wounds: one Willpower point heals one point of bashing damage, while two Willpower points heals a point of lethal damage. As usual, the character may only spend one Willpower per turn. While there is no limit to how much healing a character can receive from a Ringsel (with the exception of how many Willpower points she has), she may only use this healing gift once per day."
                ]
            },
            {
                type: "paragraph",
                text: [
                    "In addition, if the owner of a Ringsel suffers a degeneration of her Morality, she may spend a point of Willpower to have the Ringsel absorb the sin and negate the degeneration, exactly as though she had passed the degeneration roll. Spiritual contact with such base thoughts destroys the Ringsel, turning it a foul bluish-black and cracking it in two."
                ]
            }
        ],
        "Notes": []
    },
    {
        "Name": "Scale of Scylla",
        "Rating": "••",
        "Cost": "○, 1L",
        "Dice Pool": "—",
        "Description": "Become invisible to Vampires",
        "Book": "NS 146",
        "Content": [
            {
                type: "paragraph",
                text: [
                    "Greek mythology has many monsters of legend within its rich and colorful mythology. Several behaved similarly to the modern vrykolakas (i.e. vampires). One figure, commonly associated with vampiric folklore is the poor, cursed Lamia, Queen of Libya, who like so many queens caught the eye of Zeus and the ire of his wife. Hera drove Lamia mad and killed her children save one, whom she made into a monster of the sea. She then drove the Queen of Libya further into darkness as a breath-stealing, baby-killing madwoman. This portion of her story often gets her associated with the likes of the Mesopotamian Lilitu as a mother of monsters (lamiae and vrykolakas). Whatever the poor queen’s true fate, several half-moon plates recovered near the Straits of Messina have become a part of her family’s tragic legacy."
                ]
            },
            {
                type: "paragraph",
                text: [
                    "This flat plate-like Relic is larger than most adults’ hands and is reportedly a scale from Scylla, the sea monster and Lamia’s only surviving child. Use of these Relics enables the user to pass unseen among the Lamiae (widely interpreted and more practically speaking, vampires)."
                ]
            }
        ],
        "fullCost": "1 Willpower and blood incurring one point of lethal damage (from any source)",
        "Action": "",
        "RollResults": [],
        "Benefit": [
            {
                type: "paragraph",
                text: [
                    "Activation of the Scale of Scylla involves drawing blood and polishing the scale with it. Note, this isn’t necessarily the blood of the one activating it, but one lethal point of damage must be taken (or given) as part of the cost. Once activated, the Scale makes any who touch it invisible to the sight of vampires. It is possible other creatures may be similarly blinded if mythology is to be believed, however, mortal servants of the creatures have proven unaffected by the Scale of Scylla."
                ]
            },
            {
                type: "paragraph",
                text: [
                    "When applied, the blood soaks into the Scale of Scylla’s surface, leaving behind an unnatural sheen. The user will have no other indication that the Relic has worked until she walks straight up to a vampire without arousing even the slightest suspicion. The hunter—and any others who touch the scale—simply disappear to their senses, heightened or otherwise. A vampire actively searching for the hunter can make a Wits + Investigation roll, subtracting a penalty equal to the hunter’s Stealth score."
                ]
            },
            {
                type: "paragraph",
                text: [
                    "While this invisibility is fairly potent, the hunter must still be careful not to disturb her surroundings outside of anything on her person. If she draws attention to herself, any vampires in the area gain bonuses toward searching out the disappeared hunter. Causing a candlestick to wobble back and forth might earn the vampire a +1 from his suspicion, whereas running bodily into the monster might add +5 to the creature’s pool."
                ]
            }
        ],
        "Notes": []
    },
    {
        "Name": "Skeleton Key",
        "Rating": "•",
        "Cost": "○",
        "Dice Pool": "—",
        "Description": "Unlock a lock that requires a key",
        "Book": "HTV 180",
        "Content": [
            {
                type: "paragraph",
                text: [
                    "It’s said that no lock, no matter how sturdy, can keep out Death. Bar yourself behind doors and wards and mystical barriers all you like, but Death has a key for all of them. The Skeleton Key Relic might not literally be Death’s enchanted key, but it does give hunters an uncanny ability to bypass obstacles in their path."
                ]
            },
            {
                type: "paragraph",
                text: [
                    "The Skeleton Key is a small, silver key in an archaic style, tarnished from long use. The teeth are grooved in such a way as to suggest human dentition, and the bow is an intricately detailed model of a human skull with tiny flecks of sapphire in the eye sockets. The key is always cold to the touch, even if carried in the hand or worn next to the skin for hours."
                ]
            }
        ],
        "fullCost": "1 Willpower.",
        "Action": "",
        "RollResults": [
            {
                type: "line",
                label: "Dramatic Failure",
                text: [
                    "The door opens, but instead of whatever should be behind the door, it opens onto someplace...else. It might be a distant (and dangerous) location on Earth, or it might be a bizarre, twisted reflection of the hunter’s surroundings or a vast, seemingly endless maze of tangled brambles."
                ]
            },
            {
                type: "line",
                label: "Failure",
                text: [
                    "The magical ward remains in place."
                ]
            },
            {
                type: "line",
                label: "Success",
                text: [
                    "The door unlocks. The creator of the mystical ward automatically knows the door has been breached."
                ]
            },
            {
                type: "line",
                label: "Exceptional Success",
                text: [
                    "As a normal success, but the ward’s creator does not know the ward has been broken."
                ]
            }
        ],
        "Benefit": [
            {
                type: "paragraph",
                text: [
                    "The Skeleton Key fits any lock that uses an actual key, regardless of the type or design. It does not work on card locks, code locks, or any other form of security device. When a character inserts the key into a lock and turns it, he may spend a point of Willpower to unlock the door automatically. If he leaves the Skeleton Key in the lock until the door is closed again, the door automatically re-locks itself with no sign of having been opened. Even tamper-detection methods (such as a piece of tape run across the door and its jamb) are reset. This Relic only unlocks a door; it cannot remove a bar or wedge securing the door, nor does it allow a door that has been blocked, such as with a piece of furniture, to be unlocked."
                ]
            },
            {
                type: "paragraph",
                text: [
                    "The Skeleton Key can also open doors that have been sealed or warded with supernatural power. In addition to paying the normal Willpower point cost, the key’s owner must roll Intelligence + Presence, with a penalty equal to the number of successes the caster of the magical ward earned on the power’s activation roll (see below for roll results)."
                ]
            }
        ],
        "Notes": [
            {
                type: "line",
                label: "Dice Pool",
                text: [
                    "Intelligence + Presence"
                ]
            }
        ]
    },
    {
        "Name": "Stone Man's Staff",
        "Rating": "•••",
        "Cost": "○",
        "Dice Pool": "—",
        "Description": "+2 bonus to attack. Travel to any visible point.",
        "Book": "Spearfinger 7",
        "Content": [
            {
                type: "paragraph",
                text: [
                    "The six-foot stone shaft the Stone Man carries is both a weapon and a means of transit. He can launch the staff’s end suddenly at foes to batter or impale them. To travel, he simply points the staff at some landmark in view and the staff extends to touch the landmark, even if it’s miles away. The end he holds then shrinks and pulls him toward the far tip."
                ]
            }
        ],
        "fullCost": "None for the Stone Man. Activation of the travel power costs 1 Willpower for anyone else.",
        "Action": "",
        "RollResults": [],
        "Benefit": [
            {
                type: "paragraph",
                text: [
                    "When making an attack with the staff, the Stone Man may cause it to elongate suddenly while lashing out. This grants a +2 bonus to the attack dice pool."
                ]
            },
            {
                type: "paragraph",
                text: [
                    "The Stone Man can also travel from point to point by indicating a visible destination, elongating the staff, then pulling himself along behind it as it shrinks to the destination point. This travel takes one action to activate and moves at the speed of sound. It is also a clearly supernatural function, which could cause problems if used by a hunter."
                ]
            },
            {
                type: "paragraph",
                text: [
                    "If the Stone Man’s staff is stolen, it loses its powers at the next new moon. The Stone Man can fashion a new staff for himself after the old one is broken or disenchanted."
                ]
            }
        ],
        "Notes": []
    },
    {
        "Name": "Mask of Terror",
        "Rating": "•••",
        "Cost": "1L",
        "Dice Pool": "—",
        "Description": "Inspire supernatural fear in one person",
        "Book": "Slash 163",
        "Content": [
            {
                type: "paragraph",
                text: [
                    "Some killers hide their faces from the world. Whether his face is disfigured by terrible scars or he hides behind a hockey mask, the slasher’s victims don’t ever see their killer in any recognizable way. These Relics are either made from the mask, if the slasher uses such a thing, or the dried skin of a dead slasher’s face, flayed off in one piece. This Relic requires the whole face (or mask) — scars acquired in combat are fine, but the shape of the face (and the holes where the eyes would be) must be intact. Whatever the form, a hunter who wears the Mask of Terror must wear it against his skin. The mask attaches to the hunter’s flesh, usually the chest. It burrows in to the point where mere hands cannot remove it. Anyone cutting the mask off will bring chunks of the hunter’s skin with it — and leave a nasty scar, to boot."
                ]
            },
            {
                type: "paragraph",
                text: [
                    "The Mask of Terror gives the hunter the ability to inspire the same fear that the slasher’s victims felt. The victim sees the second face’s eyes glow red for just a second, and has to fight to stave off a cloying fear that latches on to her soul and refuses to let go."
                ]
            }
        ],
        "fullCost": "1 point of lethal damage",
        "Action": "",
        "RollResults": [],
        "Benefit": [
            {
                type: "paragraph",
                text: [
                    "The hunter must spend a point of Willpower to attach a Mask of Terror to his bare skin. Though the hunter can remove it at any time, anyone else attempting to will inflict damage as if the mask were a part of the hunter’s body."
                ]
            },
            {
                type: "paragraph",
                text: [
                    "The hunter can inspire true fear in one person he looks upon. The Mask of Terror consumes part of his flesh to activate this effect, hence the listed Cost. The hunter rolls Presence + Intimidation - target’s Composure. Any success inspires a terror response in his target, who either remains rooted to the spot with fear or runs for her life, but cannot approach the hunter and cannot take any actions that don’t involve getting the hell out of the immediate vicinity. The victim remains terrified for one turn per success rolled. Victims who are immune to normal fear still suffer this effect, but supernatural resistance helps as normal."
                ]
            }
        ],
        "Notes": []
    },
    {
        "Name": "Ulun'suti the Blazing Diamond",
        "Rating": "••••",
        "Cost": "○",
        "Dice Pool": "Dexterity + Occult",
        "Description": "Once per story, reroll one task. Three times per story, add +1 to any task. Conjure flame.",
        "Book": "Spearfinger 7",
        "Content": [
            {
                type: "paragraph",
                text: [
                    "According to Cherokee legend, the Ulu’n’suti is a magical stone from the forehead of an Uktena, a monstrous serpent sent to kill the sun. Supposedly, only one such stone was ever knocked from the forehead of an Uktena. The hunter who acquired the stone hid it in a deerskin bag in a deep cave high in the mountains near a waterfall. The stone itself is an orb small enough to hide in one’s fist, translucent except for a blood-red streak that bisects it."
                ]
            }
        ],
        "fullCost": "None, but the Ulu’n’suti must be bathed in the blood of an animal once per week. Otherwise, it must be put to sleep (in which case it becomes nonfunctional until fed again) or it flares into a new Uktena, which kills the owner and flies away. The Uktena attacks “like a blazing star;” whether it can be killed or whether it simply annihilates its former owner is left to the needs of your chronicle.",
        "Action": "",
        "RollResults": [],
        "Benefit": [
            {
                type: "paragraph",
                text: [
                    "When the Ulu’n’suti is bathed in animal blood, it grants its owner the power of prophecy and good fortune. Once per story, the owner of the Ulu’n’suti may call upon its power of prophecy to foresee an outcome. The player may activate this power after making a dice roll in order to reroll the task, as prophecy had previously warned the character of the outcome. Three times per story, the owner may gain a +1 equipment bonus on any task."
                ]
            },
            {
                type: "paragraph",
                text: [
                    "It also contains the power of fire, as befits the flaming Uktena from whence it came. The Ulu’n’suti requires the blood of a deer or larger animal (and a human certainly qualifies) at least twice per year. If it receives this offering, the owner can conjure flame by spending a point of Willpower. This unnatural fire can be used to make attacks that inflict aggravated damage at a range of up to 50 feet, using Dexterity + Occult for an attack pool."
                ]
            }
        ],
        "Notes": []
    },
    {
        "Name": "Watchful Keris",
        "Rating": "•••",
        "Cost": "—",
        "Dice Pool": "—",
        "Description": "2L knife with +1 Initiative and can make a reflexive roll to avoid being surprised in combat",
        "Book": "HTV 181",
        "Content": [
            {
                type: "paragraph",
                text: [
                    "According to the occult lore of Indonesia and much of Southeast Asia, the keris dagger, also called the keris, is as much a living entity as a weapon. Each individual blade is reputed to have a soul for good or for ill, and stories abound of weapons leaping from their sheaths to slay hidden enemies of their owners, or to turn on their own dishonorable masters. The Watchful Keris, while not belonging to the same class as the famed Taming Sari keris, which made its wielder indestructible, is nonetheless a useful tool."
                ]
            },
            {
                type: "paragraph",
                text: [
                    "The weapon itself is a wavy-bladed knife, about a foot long, with inlaid gold and jade depictions of a watchful serpent on the blade. The curved, pistol-style grip and the weapon’s sheath are both carved from the fossilized tooth of a mammoth, cut to reveal the dentine patterns within the tooth. The grip is worn smooth from long use, but rests comfortably in the hand, almost as though it is eager to be used. The owner of a Watchful Keris often finds himself resting a hand on the weapon or absently stroking the sheath. Occasionally the knife seems to shudder, almost in anticipation."
                ]
            }
        ],
        "fullCost": "",
        "Action": "",
        "RollResults": [],
        "Benefit": [
            {
                type: "paragraph",
                text: [
                    "The Watchful Keris is a 2(L) knife. As long as its owner wears it, he receives a +1 bonus on his Initiative Trait. In addition, whenever the owner is surprised in combat (see The World of Darkness Rulebook, p. 151), he takes an action in the first turn of combat, even if he failed his Wits + Composure roll to avoid being surprised. This action must be an attack with the Watchful Keris. The hunter may move up to his Speed before making this attack. If the weapon was sheathed, he finds it inexplicably in his hand, as though it leapt there of its own accord. If, for some reason, the character does not wish to attack with the Watchful Keris (perhaps he doesn’t want to immediately escalate to violence, or he is surprised by the presence of an innocent civilian at the scene of a monster attack), he must make a Wits + Composure roll or spend a Willpower point. If he restrains his urge to strike, he does not get the benefit of acting in the first turn after being surprised. (Note that being surprised still negates the application of the character’s Defense for that initial turn, regardless of how swiftly the Keris springs to hand.)"
                ]
            }
        ],
        "Notes": []
    },
    {
        "Name": "Witch-Candle",
        "Rating": "••••",
        "Cost": "1L",
        "Dice Pool": "—",
        "Description": "Summon gargoyles",
        "Book": "HTV 183",
        "Content": [
            {
                type: "paragraph",
                text: [
                    "The name of this Relic is something of a misnomer; it isn’t an actual candle, but rather a battered old pewter candlestick whose metal is carved with various gargoyle reliefs. By itself, the Witch-Candle has no inherent mystical properties (it can be used as a 1(B) improvised weapon, but that’s about it). Placing a candle on the stick and anointing it with blood before lighting it primes the bizarre magic within it, but apart from the flickering shadows making the carvings appear to move in a disturbingly lifelike manner, there’s still no immediate effect, until sorcery is performed in the vicinity of the Relic."
                ]
            },
            {
                type: "paragraph",
                text: [
                    "The Witch-Candle feeds on magic, especially of the variety performed by witches. When a sorcerer casts a spell anywhere within the radius illuminated by the candle (generally within the same room), the gargoyle figures come to hideous life and slither off, leaving behind a plain, unadorned candlestick. The candle-gargoyles are drawn to the caster of the spell that animated them, and attack unceasingly until they or the mage are destroyed."
                ]
            }
        ],
        "fullCost": "The hunter must bleed onto the candle before lighting it, suffering a point of lethal damage.",
        "Action": "",
        "RollResults": [],
        "Benefit": [
            {
                type: "paragraph",
                text: [
                    "When a witch casts a spell within the light of the candle, take note of the number of successes rolled. For every success, the Witch-Candle spawns a single gargoyle (to a maximum of four), which remains animated for a number of turns equal to the successes rolled. If additional spells are cast within the candlelight while the gargoyles are already animated, whether by the same mage or by another mage, add the total number of successes rolled together to determine the number of turns the gargoyles remain animated. Likewise, additional successes continue to animate additional gargoyles (again to a maximum of four). If there are multiple Witch-Candles in the same vicinity, all the successes are applied to each Relic."
                ]
            },
            {
                type: "paragraph",
                text: [
                    "If the candle is put out, the gargoyles immediately slither back to their candlestick and lose their animation. If a gargoyle is destroyed, it melts into a puddle of foul-smelling ooze that quickly evaporates, leaving nothing but a black discoloration on the ground. Destroyed gargoyles reappear as carvings on the candlestick one day after they are destroyed."
                ]
            },
            {
                type: "paragraph",
                text: [
                    "The gargoyles have the following stats when first animated:"
                ]
            },
            {
                type: "line",
                label: "Attributes",
                text: [
                    "Intelligence 0, Wits 3, Resolve 2, Strength 2, Dexterity 1, Stamina 2, Presence 0, Manipulation 0, Composure 2"
                ]
            },
            {
                type: "line",
                label: "Skills",
                text: [
                    "Athletics 2, Brawl 3, Stealth 3"
                ]
            },
            {
                type: "line",
                label: "Willpower",
                text: [
                    "4"
                ]
            },
            {
                type: "line",
                label: "Initiative",
                text: [
                    "5"
                ]
            },
            {
                type: "line",
                label: "Defense",
                text: [
                    "1"
                ]
            },
            {
                type: "line",
                label: "Speed",
                text: [
                    "8 (Species factor 5)"
                ]
            },
            {
                type: "line",
                label: "Size",
                text: [
                    "3"
                ]
            },
            {
                type: "line",
                label: "Health",
                text: [
                    "5"
                ]
            },
            {
                type: "table",
                title: "Weapons/Attacks",
                headers: [
                    "Type",
                    "Dam",
                    "Range",
                    "Dice Pool",
                    "Special"
                ],
                rows: [
                    [
                        "Bite",
                        "(B)",
                        "-",
                        "5",
                        "-"
                    ]
                ]
            },
            {
                type: "paragraph",
                text: [
                    "For every five total successes on spell-casting rolls within the candle’s light, the gargoyles gain one of the following benefits. The Relic’s owner chooses which bonus to grant; all the gargoyles get the same bonus."
                ]
            },
            {
                type: "list",
                items: [
                    [
                        "+1 to Strength, Dexterity, and Stamina. This bonus may be granted more than once."
                    ],
                    [
                        "Two additional Health boxes. This bonus may be granted more than once."
                    ],
                    [
                        "One point of Armor. This bonus may be granted more than once."
                    ],
                    [
                        "A 1(L) claw attack."
                    ]
                ]
            },
            {
                type: "paragraph",
                text: [
                    "The supernatural powers of other monsters can likewise empower the Witch-Candle, but at a reduced efficiency. Halve the number of successes for any non-mage power for purposes of determining the Relic’s abilities."
                ]
            }
        ],
        "Notes": [
            {
                type: "paragraph",
                text: [
                    {
                        text: "Example: ",
                        bold: true
                    },
                    "Elias Stark, an Aegis Kai Doru hunter, has lured a coven of three witches and a vampire into an ambush. He has set up a Witch-Candle to do the dirty work for him. On the first turn of combat, two of the witches cast defensive spells on themselves, earning two successes and three successes, respectively. The vampire attempts to cow Elias with a supernatural display of its frightful nature, rolling four successes (halved to two for the candle’s purposes). The third attempts to blast Elias with a lightning bolt, rolling two successes. That makes for a total of nine spell-casting successes; all four gargoyles spring to life for nine turns, and they each gain an additional benefit because more than five total successes have been rolled. Elias’ player chooses to give them a 1(L) claw attack. The gargoyles attack the monsters, who, on the next turn, try to destroy the gargoyles. Between the four of them, they roll eight successes to activate their powers (still halving the vampire’s successes). All four gargoyles gain another eight turns of animation, and two more bonuses, since the total number of spell-casting successes is now 17. Elias’ player gives them an additional point of Strength, Dexterity and Stamina and two more Health boxes. Things aren’t looking good for the witches."
                ]
            }
        ]
    },
    {
        "Name": "Worm Pipe",
        "Rating": "•••••",
        "Cost": "1L, ※",
        "Dice Pool": "—",
        "Description": "Resurrect a corpse",
        "Book": "NS 146",
        "Content": [
            {
                type: "paragraph",
                text: [
                    "This peculiar article was only recently acquired by the Aegis Kai Doru. This long wooden pipe, carved with what appear to be worms or serpents spiraling its length, was long-believed to only be the subject of Native American Prairie legend until the very real thing turned up in a pumpkin patch. Once positively identified, it sent a ripple through the ranks. It is a dangerous item to have in one’s possession and carries great temptation. The legend tells of a hunter who lost his wife in childbirth and went on a long journey to the land of the unliving Worms. He hoped to reclaim her life, for now her son was without a mother. Once there, he begged for them to give him back his wife. They agreed, and gave him a small pipe that they said could return her to life—but she would be changed, for a part of her would always remain with the Worms."
                ]
            },
            {
                type: "paragraph",
                text: [
                    "At present, this purportedly unique Relic lays hidden behind a series of locked doors in some Aegis Kai Doru cache: they believe it is a power man was not meant to wield, the ability to return life to the fallen. Some antiquarians within the Guardians (chief amongst them, a man named Grellich) believe that this artifact belongs to the vampires, that it is perhaps something they created to curse living man with the taint of death. Some say that Grellich revived a fallen cellmate with the Worm Pipe, but upon seeing what the man had become, ended the man’s life once more."
                ]
            },
            {
                type: "paragraph",
                text: [
                    "Of course, it’s only a matter of time before another Guardian has strong enough cause to seek the Worm Pipe, with or without permission. There also remains the lingering possibility that it is not as unique as the Aegis Kai Doru have been led to believe and there might be other, similar devices that a Guardian could seek."
                ]
            }
        ],
        "fullCost": "1 point of lethal damage; all of the user’s Willpower points (regardless of how many he has in his pool, he must exhaust them)",
        "Action": "",
        "RollResults": [],
        "Benefit": [
            {
                type: "paragraph",
                text: [
                    "The hunter must burn tobacco in the pipe, but the tobacco needs to be drizzled with her own blood. She inhales, filling her mouth with a sickening sweet smoke—she may blow this smoke into the mouth of a corpse dead for no less than one week to bring it back to life. The corpse lurches forth, sucking in a deep breath—it’s said that the resurrected may vomit up a gut full of worms, roaches, even rotted stomach lining. The resurrected individual returns with a Health track full of bashing damage, as all serious wounds and rot mend and appear as a series of intense, dark bruises across the body. The resurrected is normal for the most part, but suffers from the following disadvantages from now on:"
                ]
            },
            {
                type: "list",
                items: [
                    [
                        "The resurrected gains one of the following mild derangements (Storyteller’s choice): Phobia, Fixation, or Irrationality. This derangement can be resisted as normal, but can never be “cured.”"
                    ],
                    [
                        "The resurrected is “reborn” with one less Morality than when he perished."
                    ],
                    [
                        "The resurrected returns with no Willpower points in his pool."
                    ],
                    [
                        "The resurrected is overly susceptible to vampiric Dread Powers. Any mind-altering or mind-controlling Dread Power (such as Alter Memory, Control Emotion, Ecstasy, Impress, etc.) that the vampire uses upon the resurrected gain +3 dice."
                    ],
                    [
                        "The resurrected has a harder time when locked in combat with a vampire. He may experience flashes of fear or feel burdened with lust; extreme emotions and brief hallucinations distract her. When in combat with a vampire, the resurrected character’s Defense is one less, and any attacks he makes against a vampire suffers -2 dice."
                    ]
                ]
            },
            {
                type: "paragraph",
                text: [
                    "The resurrected does gain two benefits, however:"
                ]
            },
            {
                type: "list",
                items: [
                    [
                        "The resurrected now gains +2 to any Social rolls involving vampires."
                    ],
                    [
                        "The resurrected now gains the Unseen Sense Merit in regards to vampires, ghosts, the Reanimated, and other unliving entities."
                    ]
                ]
            }
        ],
        "Notes": []
    }
]

const ritesDuChevalOverviewData = {
    "Name": "Rites Du Cheval",
    "Content": [
        {
            "type": "paragraph",
            "text": [
                "The hunters of Les Mystères invite spirits into their bodies to combat the common enemy of both hunter and spirit: werewolves. Unlike other forms of possession, the hunter retains control of his own body and senses while the spirit rides his form. It is for this reason that Les Mystères refer to the blessings of the spirits as being “ridden” rather than being possessed. Learning to control the ",
                {
                    "text": "Rites du Cheval",
                    "italic": true
                },
                " requires training and discipline. The hunter must learn how to summon and appease the spirits that ride him so the merging of body and spirit is a partnership, rather than a full-blown possession. Each spirit demands a different type of offering or gift to appease them and part of the training of Les Mystères involves memorizing which kind of appeasement works best for different spirits."
            ]
        },
        {
            "type": "paragraph",
            "text": "Even though Les Mystères is a fairly open confederation, the members don’t share their knowledge with just anyone. After a hunter has been accepted he must still prove himself worthy and capable of the training he hopes to receive. Because the conspiracy is so spread out, a member that wishes to learn all of what Les Mystères has to offer must be willing to travel to train with different mentors and it is in this manner that the conspiracy as a whole comes to know the hunter. Rites with a dot rating of four or better are likely to require a hunter to travel well outside his territory to learn. A Les Mystères hunter can only learn rites with a dot rating equal or less than his Status in the conspiracy. So, for example, a hunter with Status •• only has access to one or two dot rites. Members of Les Mystères may purchase rites within their range of access at the cost of two experience points per rite."
        },
        {
            "type": "paragraph",
            "text": "Because of their intimate relationship with the spirits, the members of Les Mystères bear an ephemeral mark that discourages uninvited spirits from attempting to possess them. Only spirits with a Rank higher than the Status rating of a member can attempt an unwilling possession, and even then the spirit suffers a -3 penalty to do so. While a hunter is ridden he shares some of the perceptions of the spirit sharing his body. Sensory feedback from sight, smell, touch, taste and hearing is altered by the nature of the spirit. When possessed by a spirit of death, the hunter might see signs of decay all around him, smell the sickly-sweet aroma of rot, hear the wails of mourners, and anything he eats or drinks tastes of ashes. The sensation of touch is affected in a different way. Spirits are eager to experience the tactile sensations of the material realm and when they ride a hunter they hijack the sense of touch. The hunter retains enough feeling to operate normally, but the sensations seem far away and ghost-like. A ridden hunter suffers no wound penalties, giving rise to the stories about Les Mystères members that can eat glass or burning embers with no apparent discomfort. This lack of sensation does have a negative aspect. While a hunter is ridden all Perception rolls not obviously related to the nature of the possessing spirit (sensing fire or heat while being ridden by a fire spirit, for example) suffer a -1 penalty."
        },
        {
            "type": "heading",
            "level": 2,
            "text": "Appeasements"
        },
        {
            "type": "paragraph",
            "text": [
                "Very few spirits are altruistic in nature. Even when they provide hunters with assistance to battle the shared enemy of both spirits and Les Mystères (i.e. werewolves), they expect to receive more than just heartfelt thanks and a pat on the back. While some might argue that possessing a fleshy body is a reward in and of itself, the spirits don’t see it ",
                {
                    "text": "that way",
                    "italic": true
                },
                ". They want more and so the hunters of Les Mystères offer up appeasements. An appeasement can take a variety of shapes, depending on the nature and power of the spirit being invoked. Minor spirits are usually happy with simple recognition and a minor material token of thanks. More powerful spirits demand greater sacrifices and greater displays of recognition. Included in each rite are a number of possible appeasements tailored to fit the power of the spirits invoked for that rite. Players and Storytellers are encouraged to devise new appeasements based on the examples given."
            ]
        },
        {
            "type": "heading",
            "level": 2,
            "text": "WHO DO VOODOO?"
        },
        {
            "type": "paragraph",
            "text": [
                "Although many of the rites listed have obvious voodoo ties, the membership of Les Mystères is worldwide. A hunter from Thailand and a hunter from Haiti might have different names for a rite that produces the same effect. Similarly, though ",
                {
                    "text": "Rites du Cheval",
                    "italic": true
                },
                " is the most commonly used title to describe the collective occult knowledge of the conspiracy, members from other parts of the world may refer to it by a different name."
            ]
        }
    ]
}

const ritesDuChevalData = [
    {
        "Name": "Clinging Leech",
        "Rating": "••••",
        "Cost": "○",
        "Description": "Sap health from a target for oneself. Grapple and Wits + Larceny Vs Resolve + Stamina, 1(L) for every success",
        "Book": "SpSl 157",
        "Content": [
            {
                "type": "paragraph",
                "text": [
                    "Leech spirits are just one example of the type of spirits that hunger for the blood or life energies of the living. Most humans might consider that kind of hunger evil, but Les Mystères knows it is just the nature of the spirit. The hunger is no more evil than the desire of a pain spirit to cause agony or the need of a spirit of joy to inspire happiness. While the type of spirit targeted by this rite rides the hunter he has a ravenous appetite and suffers acute hunger pangs that can’t be silenced no matter how much food he devours."
                ]
            }
        ],
        "PossibleAppeasements": [
            "Eating a large amount of anything, spilling his own blood on the ground (causing one point of lethal damage), the sacrifice of a chicken or other small animal."
        ],
        "fullCost": "1 Willpower",
        "Action": "Instant",
        "RollResults": [
            {
                "type": "line",
                "label": "Dramatic Failure",
                "text": "The spirits decide the hunter isn’t hungry enough to join, so they inflict hunger on her. The hunger is strong enough to be distracting and she suffers a -1 penalty to all actions until she is able to sate her hunger."
            },
            {
                "type": "line",
                "label": "Failure",
                "text": "The spirits fail to respond."
            },
            {
                "type": "line",
                "label": "Success",
                "text": "The spirit agrees to ride the hunter. For the remainder of the scene whenever she succeeds in grappling an opponent, she can steal Health from that opponent once each turn as a reflexive action. The hunter rolls Wits + Larceny versus the target’s Resolve + Stamina. For each success on the roll, the theft inflicts one point of lethal damage which the hunter can use to heal her own wounds (lethal or bashing damage only, bashing damage heals first). Additionally, the hunter clings like a leech to the body of her target. For the purposes of maintaining the grapple only, count the Strength of the hunter as twice its normal value."
            },
            {
                "type": "line",
                "label": "Exceptional Success",
                "text": "As above, except the Strength of the hunter is considered three times its normal value for the purposes of maintaining the grapple."
            }
        ],
        "Notes": [
            {
                "type": "line",
                "label": "Drawback",
                "text": "After the initial scene, the spirit inside the hunter refuses to exit her body or assist her further until she has gorged herself to near sickness on food and drink."
            }
        ],
    },
    {
        "Name": "Deny the Moon",
        "Rating": "•••••",
        "Cost": "—",
        "Description": "Negate the use of Dominions by werewolves.",
        "Book": "SpSl 159",
        "Content": [
            {
                "type": "paragraph",
                "text": [
                    "Werewolves bear marks of favor on their bodies from the great moon-spirit in the form of shimmering silver tattoos. Why the moon would choose to honor werewolves in this way is a mystery to Les Mystères, though other spirits have hinted that the creatures might be her “offspring.” The moon-spirit herself wields a great deal of influence and power among other spirits, but there exist a few spirits that are willing to oppose her and can, for a short time, hide werewolves from her sight. Hunters call upon these spirits to join with them to negate the power of the gifts the moon gives werewolves. While ridden by these spirits, a hunter feels strangely dispassionate and may not regain Willpower by fulfilling a Virtue or exploiting a Vice."
                ]
            }
        ],
        "PossibleAppeasements": [
            "Breaking a bow that was used to hunt, sacrificing a dog or wolf, mixing molten silver into mud."
        ],
        "fullCost": "None",
        "Action": "Extended",
        "RollResults": [
            {
                "type": "line",
                "label": "Dramatic Failure",
                "text": "The moon-spirit overhears the hunter’s pleas and decides to interfere with the rite. Any accumulated successes are lost and the moon-spirit whispers the name of the hunter to the leader of the nearest werewolf pack."
            },
            {
                "type": "line",
                "label": "Failure",
                "text": "The spirits fail to respond."
            },
            {
                "type": "line",
                "label": "Success",
                "text": "The hunter makes progress towards his goal. The target number of the extended roll is five with each roll being equal to 10 minutes. In addition to the appeasement, while the rite is underway the hunter must beat drums covered in black velvet and pour rum on a fire. Once the spirit has joined with the hunter, it remains in his body for two hours. While ridden, whenever a hunter witnesses a werewolf using a Dominance he sees one of the creature’s tattoos sparkle with a silvery glow. The hunter can reach out and temporarily erase the tattoo, negating the effects of that Dominion and denying the werewolf the use of the Dominance for the remainder of the scene. Touching a werewolf requires the hunter succeed at a Dexterity + Brawl roll (the Defense of the target applies, any Armor does not)."
            },
            {
                "type": "line",
                "label": "Exceptional Success",
                "text": "No additional benefit beyond the number of successes gained."
            }
        ],
        "Notes": [],
    },
    {
        "Name": "Elemental Rebuke",
        "Rating": "••",
        "Cost": "○",
        "Description": "Attack target with an elemental (fire, water, etc) effect. Resolve + Occult + Les Mystères Status Vs Resolve + Stamina 1L for every success",
        "Book": "SpSl 155",
        "Content": [
            {
                "type": "paragraph",
                "text": [
                    "This rite specifically targets spirits of elemental forces such as wind, lightning and fire. The spirit enters the body of the hunter and channels its energy to influence and damage the bodies of his enemies. The physical effects of damage caused vary with the nature of the elemental spirit: spirits of wind suck the breath from the lungs of a target, causing a sort of rapid internal depressurization; and spirits of lightning overload the electronic impulses of the brain causing strokes and seizures."
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    "Minor spirits quickly expend their energy with such overt displays of power and the flesh of a mortal has difficulty containing more powerful elemental spirits. As a result, rather than a continual ride, spirits either burn out helping the hunter or they bob in and out of the hunter’s body to avoid causing him permanent harm. The sensation of spirits moving in and out of his body in quick succession is somewhat distracting to the hunter and he suffers a -1 penalty to Perception checks for the turn immediately following use of the rite."
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    "A hunter need only pay the Willpower and appeasement costs of this rite once per scene."
                ]
            }
        ],
        "PossibleAppeasements": [
            "Doing a shot of 100-proof liquor, eating a bit of the spirit’s element, enumerating the magnificent qualities of the element in a loud voice."
        ],
        "fullCost": "1 Willpower",
        "Action": "Instant",
        "RollResults": [
            {
                "type": "line",
                "label": "Dramatic Failure",
                "text": "The spirits are disdainful of the hunter’s cries for aid and give him an unpleasant taste of their element that causes one point of bashing damage."
            },
            {
                "type": "line",
                "label": "Failure",
                "text": "The spirits fail to respond."
            },
            {
                "type": "line",
                "label": "Success",
                "text": "The spirits give of their element willingly to the hunter. The ridden can target any single enemy within 10 yards with the power of elemental force. This is a contested action that pits the hunter’s Resolve + Occult + Les Mystères Status (greater Status brings with it the knowledge required to summon more powerful spirits) versus the target’s Resolve + Stamina. The target suffers one point of lethal damage for every success gained beyond the victim’s roll."
            },
            {
                "type": "line",
                "label": "Exceptional Success",
                "text": "In addition to the above, the pain caused by elemental forces ravaging the body of the target cause him to be stunned for one turn."
            }
        ],
        "Notes": [],
    },
    {
        "Name": "Ephemeral Disguise",
        "Rating": "•",
        "Cost": "—",
        "Description": "Spirit hides the caster with an unremarkable visage. (Mod. to Stealth rolls) Dramatic Failure:Glow in red -5, Succes: +3, Exceptional Success: +3 no evidence in security systems or video.",
        "Book": "SpSl 155",
        "Content": [
            {
                "type": "paragraph",
                "text": [
                    "Even when manifested, many spirits can easily hide from the eyes of men or can take on a familiar form to lull suspicion. The hunter asks the spirits to share this power with him to hide him from his enemies sight or allow him to walk undetected in their midst. While ridden with this intention, the hunter feels an odd loss of identity as though he were just another face in the crowd."
                ]
            }
        ],
        "PossibleAppeasements": [
            "A bite of food that is particularly pungent or sour, dousing a flame in water, an offering of a faceless doll."
        ],
        "fullCost": "None",
        "Action": "Instant",
        "RollResults": [
            {
                "type": "line",
                "label": "Dramatic Failure",
                "text": "The hunter somehow insults the spirit and rather than helping them to hide or pass unnoticed, the spirit causes the hunter to emit a soft red glow. The glow imposes a -5 penalty to all Stealth rolls for the remainder of the scene."
            },
            {
                "type": "line",
                "label": "Failure",
                "text": "The spirits fail to respond."
            },
            {
                "type": "line",
                "label": "Success",
                "text": "The spirit responds favorably and guides the steps of the hunter or gives the hunter an unremarkable visage. The ridden gains a +3 bonus to all Stealth rolls for the remainder of the scene."
            },
            {
                "type": "line",
                "label": "Exceptional Success",
                "text": "In addition to the above effects, the spirit reaches out and muddles the senses of cameras and other security devices. Security systems refuse to register the presence of the hunter and cameras record their image as a blur."
            }
        ],
        "Notes": [],
    },
    {
        "Name": "The Hands of Raphael",
        "Rating": "•••",
        "Cost": "○ + Damage",
        "Description": "Heal sickness, and mend wounds in others.",
        "Book": "SpSl 156",
        "Content": [
            {
                "type": "paragraph",
                "text": [
                    "According to the beliefs of Vodoun practitioners, the houngan and mambo pray to the Loa to intercede on their behalf rather than the one true God because they believe God has more important things to do. In a similar fashion, this rite calls on the spirit of Raphael rather than the angel himself to heal the wounded and cure the sick. When a member of Les Mystères is ridden by the spirit of Raphael, their face takes on an angelic countenance that makes even the ugliest hunter seem beautiful. After the spirit leaves them, hunters that served as host for the spirit claim to remember a feeling of warmth that flowed through them as they performed the miracle of healing. Werewolves and demons can’t abide the sight of a hunter being ridden by Raphael and target that hunter first in a fight."
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    "The Inuit believe that humans have multiple souls and sickness is caused by soul theft, either by evil spirits or rival tribes. By communing with their tribal totems, the shaman can retrieve the portion of the soul that was stolen and restore health to their patient. Appeasement might require chanting in the shamanic tongue and certain bans on their behavior during the healing, such as not speaking certain words or referring to specific items by name."
                ]
            }
        ],
        "PossibleAppeasements": [
            "Continual recitation of the Lord’s Prayer throughout the healing, consuming the gallbladder of a fish, facing east and tossing an offering of gold or an emerald into a natural body of water."
        ],
        "fullCost": "1 Willpower",
        "Action": "Extended",
        "RollResults": [
            {
                "type": "line",
                "label": "Dramatic Failure",
                "text": "Raphael decides a further test of faith is in order. The rite works, but any wounds healed or diseases cured are transmitted to the healer."
            },
            {
                "type": "line",
                "label": "Failure",
                "text": "The spirits fail to respond. No progress is made towards the target number."
            },
            {
                "type": "line",
                "label": "Success",
                "text": "The hunter makes progress towards his goal. The target number of the extended roll is 10, with each roll equal to five minutes. In addition to the required appeasement, the hunter must remain sequestered and in prayer during the time spent calling to Raphael. Once the spirit of Raphael takes up residence in the body of the hunter, it remains for seven hours. While the hunter is ridden by Raphael, she can perform the following miracles:\n• Cure the Sick: The hunter can cure his patient of any sickness. Curing the sick is an extended Wits + Medicine roll with each roll equal to 15 minutes. Minor maladies such as colds or flu’s have a target number of 5, while more serious and life threatening illnesses such as cancer or Ebola have a target number of 15. Regardless of symptoms, any disease that is supernatural in origin has a target number of 20 to cure.\n• Heal the Wounded: The hunter can mend the wounds of his patient. Mending wounds is an extended Wits + Medicine roll with each roll equal to 10 minutes. Bashing damage is healed at a 1:1 ratio of wounds to successes, lethal damage is healed at a 1:2 ratio, and aggravated damage is healed at a 1:4 ratio."
            },
            {
                "type": "line",
                "label": "Exceptional Success",
                "text": "No additional benefit is gained beyond the number of successes accumulated towards the target number."
            }
        ],
        "Notes": [
            {
                "type": "line",
                "label": "Drawback",
                "text": "The shaman of the Native American tribes were frequently described as “wounded healers” because they accepted the burdens of pain and suffering as the cost of working their magic. Wounded healer is an apt description in the case of this Rite. Wounds spontaneously appear on the body of the hunter when healing the sick. Each roll of the extended action inflicts a point of damage to the hunter, the type of which is based on the severity of the illness being cured. Minor maladies cause bashing damage (colds, flu’s), more serious and life-threatening illnesses (cancer, HIV) inflict lethal damage and illnesses with a supernatural origin inflict aggravated damage. Wounds taken from curing the sick are immune to extraordinary forms of healing and may only be healed by the normal passing of time. Note that it is quite possible for a hunter to die from accumulated wounds while trying to cure the sickness of another. A hunter can voluntarily end the extended action of curing the sick at any time rather than kill himself. If the extended action is voluntarily ended before the target number of success is reached, all successes accumulated towards curing the illness are lost and the spirit of Raphael departs from the hunter."
            }
        ],
    },
    {
        "Name": "Light as a Feather",
        "Rating": "••",
        "Cost": "—",
        "Description": "Increase jumping ability, and protection from falling damage. +5 for Jumping rolls, Only 1(B) for falling.",
        "Book": "SpSl 156",
        "Content": [
            {
                "type": "paragraph",
                "text": [
                    "The hunter calls on the spirits of air, wind, birds and other flying creatures to join with him. Although true flight is beyond the power of the spirits to grant, the body of the hunter becomes nearly weightless allowing him to jump further and fall from great heights without serious injury. Enemies of the hunter also find it hard to land a solid blow, their attacks simply pushing the hunter back rather than tearing into his flesh. While he is ridden by these spirits, the hunter feels incredibly happy, giddy even, and can’t restrain the booming laughter that wells up inside him. Onlookers will probably find the sight of a man cackling as he drops 30 floors before running away uninjured more than a little disturbing."
                ]
            }
        ],
        "PossibleAppeasements": [
            "Wild dancing, offering the blood of a bird or other creature capable of flight, a (literal) leap of faith off a building at least two stories high."
        ],
        "fullCost": "None",
        "Action": "Instant",
        "RollResults": [
            {
                "type": "line",
                "label": "Dramatic Failure",
                "text": "The spirits decide man wasn’t meant to fly and impose vertigo on the hunter. For the rest of the scene, the hunter suffers a -1 penalty to his Defense and to any action involving a Physical Skill."
            },
            {
                "type": "line",
                "label": "Failure",
                "text": "The spirits fail to respond."
            },
            {
                "type": "line",
                "label": "Success",
                "text": "The spirit grants the hunter its buoyancy and revels in the sensation of physical weightlessness with him. The hunter gains the following effects for the remainder of the scene:\n• A +5 bonus to any jumping roll.\n• The hunter only suffers one point of bashing damage from falling, no matter how far he fell."
            },
            {
                "type": "line",
                "label": "Exceptional Success",
                "text": "In addition to the above effects, the hunter can move his full Speed as a reflexive action once per turn."
            }
        ],
        "Notes": [],
    },
    {
        "Name": "Skin of the Loa",
        "Rating": "•",
        "Cost": "—",
        "Description": "Spirit grants temporary Armor. Dramatic Failure: Def. -2, Succes: Melee armor +2, Exceptional Success: Armor +2..",
        "Book": "SpSl 155",
        "Content": [
            {
                "type": "paragraph",
                "text": [
                    "One of the first lessons Les Mystères teaches its initiates is how to protect their bodies from harm. The hunter invites a minor spirit to share her body and encourages it to partially manifest in their flesh. The spirit hardens the skin of its host to better withstand the biting teeth and slashing claws of werewolves. The skin color of the ridden changes as a side effect of this merging of body and spirit, turning her flesh a shade associated with the spirit. Spirits of earth turn the skin dark brown, spirits of water tint the skin greenish-blue, a minor spirit of pain might color flesh the pale white of clenched knuckles and so on."
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    "A Korean mudang might perform a slightly altered version of a Gangneung Danogut (a ritual to protect against attack from wild animals) to ward off attacks from werewolves or other enemies by calling on the spirit of a mountain god with an appeasement of song and dance."
                ]
            }
        ],
        "PossibleAppeasements": [
            "A snatch of song that compliments the spirit, the hunter slaps or pinches her own skin, drumming."
        ],
        "fullCost": "None",
        "Action": "Instant",
        "RollResults": [
            {
                "type": "line",
                "label": "Dramatic Failure",
                "text": "The spirit is angered by the feeble attempts of the hunter to impress it. The rite fails and the spirit curses the hunter with clumsiness. The hunter has her Defense reduced by two for the remainder of the scene."
            },
            {
                "type": "line",
                "label": "Failure",
                "text": "The spirits fail to respond."
            },
            {
                "type": "line",
                "label": "Success",
                "text": "The spirit hears the call of the hunter and works to protect her from harm. The hunter gains an Armor rating of 2 that protects her from close combat attacks only for the remainder of the scene."
            },
            {
                "type": "line",
                "label": "Exceptional Success",
                "text": "The spirit is truly impressed and puts forth a greater than normal effort. The spiritual Armor protects against both melee and ranged attacks for the remainder of the scene."
            }
        ],
        "Notes": [],
    },
    {
        "Name": "Spiritual Guidance",
        "Rating": "•••",
        "Cost": "○",
        "Description": "Gain expertise in a field and Rote Action.",
        "Book": "SpSl 157",
        "Content": [
            {
                "type": "paragraph",
                "text": [
                    "It might be an exaggeration to say that the spirit world is populated by enough spirits to mirror everything humans know, feel, think, see, or do. It might be an exaggeration, but not much of one. The spirit world is a busy place. The hunters of Les Mystères certainly believe this and they call on specific spirits to assist them with the job at hand. A spirit of war can guide their weapons, a spirit of information can assist research, or a spirit of automobiles can help with difficult or dangerous driving. To invoke a spirit in this way is to become an instant expert in one field. While a hunter is ridden for this rite, she becomes a bit obsessive about her new field of expertise, mirroring the nature of the spirit within her. As a result of this obsession, the hunter suffers a -1 penalty to any roll not directly related to the nature of the spirit within her."
                ]
            }
        ],
        "PossibleAppeasements": [
            "Painting representations of the activity on her body in white, offering up a symbolic representation of the activity, singing or making music of some kind about the activity."
        ],
        "fullCost": "1 Willpower",
        "Action": "Extended (10 successes necessary; each roll is equal to one minute.)",
        "RollResults": [
            {
                "type": "line",
                "label": "Dramatic Failure",
                "text": "The spirits find the nature of the task unworthy of them and curse the hunter with incompetence. Any accumulated successes are lost and the hunter suffers the unskilled penalty for whatever Skill they had hoped to enhance for 24 hours."
            },
            {
                "type": "line",
                "label": "Failure",
                "text": "The spirits fail to respond. No progress is made towards the target number."
            },
            {
                "type": "line",
                "label": "Success",
                "text": "The hunter makes progress towards his goal. Once the spirit joins the host it remains in the hunter’s body for 24 hours. (The hunter can forcibly expel the spirit before then by spending another Willpower point and succeeding on a Wits + Intimidation roll.) One Skill of the hunter’s choice gains the rote action quality (see the World of Darkness Rulebook, p. 134)."
            },
            {
                "type": "paragraph",
                "text": [
                    {
                        "text": "Example: Mary calls upon a hound spirit before the cell goes out and attempts to physically track a werewolf pack back to their lair. She gains the rote action quality for Survival and the spirit remains with her until 24 hours has passed or her cell finds the werewolves’ lair.",
                        "italic": true
                    }
                ]
            },
            {
                "type": "line",
                "label": "Exceptional Success",
                "text": "As above and the hunter manages to maintain her composure and doesn’t suffer the obsessive -1 penalty to other actions."
            }
        ],
        "Notes": [],
    },
    {
        "Name": "Voodo Doll",
        "Rating": "••••",
        "Cost": "○",
        "Description": "Use a small doll to affect a target in positive or negative ways.",
        "Book": "SpSl 158",
        "Content": [
            {
                "type": "paragraph",
                "text": [
                    "A staple of horror tales and B-movies for years, the voodoo doll is easily the most recognizable piece of paraphernalia associated with the practice of Vodou. Voodoo dolls can be constructed from almost any material and are commonly made from wax or corn husks. Actual sewn voodoo dolls (also known as poppets) aren’t as common as is widely believed. Creating a voodoo doll requires an extended Dexterity + Crafts roll with a target number of 10. Each roll is equal to five minutes."
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    "Rather than construct a voodoo doll, the ",
                    {
                        "text": "sangomas",
                        "italic": true
                    },
                    " of West Africa might use a monkey’s paw to inflict good or bad juju on their targets after offering up the specially prepared and bleached bones of an animal as an appeasement."
                ]
            }
        ],
        "PossibleAppeasements": [
            "Burning an effigy of the target, the hunter drives pins into his own body matching the pin locations of the doll (one point of bashing damage), wearing clothes owned by the target."
        ],
        "fullCost": "1 Willpower",
        "Action": "Instant",
        "RollResults": [
            {
                "type": "line",
                "label": "Dramatic Failure",
                "text": "The spirits are displeased with the voodoo doll and shatter it causing five dice of bashing damage to anyone within one yard. This destroys the doll."
            },
            {
                "type": "line",
                "label": "Success",
                "text": "Voodoo dolls work through a sympathetic connection to the intended target by adding blood, hair or nail clippings from the target to the doll. If the hunter knows the target personally or knows the target’s true name, simply tacking a picture of the target’s face over that of the doll is enough to gain a sympathetic connection. Once the sympathetic connection has been made, the hunter calls on a spirit to inhabit both his body and the voodoo doll. If the voodoo doll is used to reinforce positive aspects of the target’s personality, the hunter will call on spirits of love, happiness, or positive energy. If the doll is used to reinforce negative aspects of the target’s character or to harm the target, the hunter will call upon spirits of anger, pain, or negative energy."
            },
            {
                "type": "paragraph",
                "text": [
                    "Once a spirit has entered the doll, the hunter determines the amount of torment or positive reinforcement the target is to be subjected to, based on the number and location of the pins pushed into the doll. A single pin placed in the extremities (hands, feet) causes minor effects. Multiple pins placed in all the extremities as well as the head cause greater effects and the most potent effects result from placing a single pin in the heart of the doll. When the hunter has finished placing pins in the doll, the spirit is freed from the doll and speeds towards the target to administer the blessing or curse (the hunter spends a point of Willpower). Hunters may not choose themselves as the target of a voodoo doll."
                ]
            },
            {
                "type": "list",
                "items": [
                    [
                        "Pin Placement: Single pin in an extremity. ",
                        {
                            "text": "Blessing:",
                            "italic": true
                        },
                        " A +1 bonus to all (choose one) Physical, Mental or Social Skills for three hours. ",
                        {
                            "text": "Curse:",
                            "italic": true
                        },
                        " A -1 penalty to all (choose one) Physical, Mental or Social Skills for three hours or a single point of bashing damage."
                    ],
                    [
                        "Pin Placement: Multiple pins in extremities plus a pin in the head. ",
                        {
                            "text": "Blessing:",
                            "italic": true
                        },
                        " The target gains the 8-again quality (re-roll 8s, 9s and 10s) on any one endeavor chosen by the hunter. ",
                        {
                            "text": "Curse:",
                            "italic": true
                        },
                        " The target may only count rolls of 9 or 10 as successes on any one endeavor chosen by the target or a single point of lethal damage."
                    ],
                    [
                        "Pin Placement: Single pin in the heart. ",
                        {
                            "text": "Blessing:",
                            "italic": true
                        },
                        " The target gains benefits of both the above blessings and regains either a point of Willpower or heals a single wound. ",
                        {
                            "text": "Curse:",
                            "italic": true
                        },
                        " The target is subjected to both the above curses and loses a point of Willpower or a single point of aggravated damage."
                    ]
                ]
            },
            {
                "type": "line",
                "label": "Exceptional Success",
                "text": "In addition to the above effects, the Willpower cost is refunded."
            }
        ],
        "Notes": [
            {
                "type": "line",
                "label": "Drawback",
                "text": [
                    "The Storyteller should keep track of the number of times a character uses a voodoo doll to cast curses. Once per chapter, the Storyteller can impose a penalty equal to the number of curses on a single roll made by the character. The character ",
                    {
                        "text": "may not",
                        "italic": true
                    },
                    " choose not to roll if the penalties reduce this roll to a chance die. Karma is a bitch. Regardless of whether the roll fails or succeeds, this returns the tally of curses cast to zero."
                ]
            }
        ],
    },
    {
        "Name": "Wearing the Baron's Hat",
        "Rating": "•••••",
        "Cost": "○",
        "Description": "Gain amazing combat abilities and temporary health. +3 to Defense, +5 To Initiative and +5 health.",
        "Book": "SpSl 160",
        "Content": [
            {
                "type": "paragraph",
                "text": [
                    "Baron Samedi is a Loa of death usually depicted wearing a black top hat and suit along with dark glasses. It is said he stands at the crossroads between life and death and points the souls of the departed toward the afterlife. Baron Samedi is generally considered to be a smooth and sophisticated spirit with a wicked sense of humor and an earthy sensuality, but, like all Loa, when his wrath is raised he becomes terrible to behold: the bringer of death rather than spiritual guide. It is this aspect of the Loa that hunters call upon to join them in their hunts when the time comes to battle their werewolf foes. Unlike many of the other rites that require longer to perform, Baron Samedi can be called upon at a moment’s notice. Death is never very far away. While a hunter is ridden by Baron Samedi he cannot help but to behave in a rude and darkly cynical manner, which levies a -3 penalty on all Social rolls."
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    "Instead of calling on the Baron, a Nganasan (the indigenous people of Siberia) shaman might draw upon the strength of a polar bear after imitating the sounds the bears make, shuffling around in a bear-like manner, and consuming seal blubber."
                ]
            }
        ],
        "PossibleAppeasements": [
            "Burning a box of expensive cigars, drinking a bottle of rum, disinterring a skull."
        ],
        "fullCost": "1 Willpower",
        "Action": "Instant",
        "RollResults": [
            {
                "type": "line",
                "label": "Dramatic Failure",
                "text": "Baron Samedi decides the hunter should make love rather than war. For the next six hours, any roll made to inflict damage suffers a -2 penalty. Conversely, any roll made in an effort to get laid gains a +5 bonus."
            },
            {
                "type": "line",
                "label": "Failure",
                "text": "The spirits fail to respond."
            },
            {
                "type": "line",
                "label": "Success",
                "text": "Baron Samedi merges with the hunter, enhancing his combat capabilities. For the remainder of the scene the hunter gains +3 to his Defense, +5 to his Initiative and five temporary points of Health (subtract damage taken from temporary Health first). Additionally, the attacks of the hunter bear the touch of death and any attack roll gains the Advanced Action quality (see the World of Darkness Rulebook, p. 135)."
            },
            {
                "type": "line",
                "label": "Exceptional Success",
                "text": "As well as the above effects, all rolls made during combat gain the 9-again quality (re-roll 9s and 10s)."
            }
        ],
        "Notes": [
            {
                "type": "line",
                "label": "Drawback",
                "text": "Baron Samedi is a busy man and can get irritated by frequent interruptions to his business. Each successive use of this rite in a 12-hour period suffers a cumulative -2 penalty."
            }
        ],
    }
]

const thaumatechnologyOverviewData = {
    "Name": "Thaumatechnology",
    "Content": [
        {
            "type": "paragraph",
            "text": [
                "In the cold, sterile labs of the Cheiron Group, men are made into monsters for the greater good of humanity. Other hunter organizations might carry bizarre mystical artifacts or learn blasphemous rites of arcane power, but the Cheiron Group’s agents actually ",
                {
                    "text": "take parts of monsters and put them inside their own bodies",
                    "italic": true
                },
                ". Thaumatechnology Endowments are the most invasive category of Endowments, and while TCG’s field recovery teams might appreciate the little edges these biomedical horrors give them, few are entirely comfortable with the concept of grafting bits of unnatural creatures to their own flesh."
            ]
        },
        {
            "type": "paragraph",
            "text": "While Thaumatechnology Merits resemble Advanced Armory or Relic in that each item is represented as an individual Merit with a specific dot cost, a hunter cannot just pick up a Thaumatechnology item and start using it. Thaumatechnology implants require a lengthy and fairly invasive surgical procedure to install or remove from the character’s body."
        },
        {
            "type": "heading",
            "level": 2,
            "text": "Thaumatechnological Surgery"
        },
        {
            "type": "line",
            "label": "Dice Pool",
            "text": "Dexterity + Medicine + equipment; if the surgeon does not have a Thaumatechnology Specialty in Medicine, he suffers a -3 penalty."
        },
        {
            "type": "line",
            "label": "Action",
            "text": "Extended. Three successes per Merit dot are required to install or remove a Thaumatechnology implant, each roll representing one hour of surgery."
        },
        {
            "type": "paragraph",
            "text": [
                "Installing most Thaumatechnology implants requires invasive, painful surgery. For every two rolls the surgeon’s player makes, the patient suffers one point of lethal damage. If the surgeon doesn’t care how much damage he does in removing a Thaumatechnological implant, the time per roll can be cut down to half an hour, but the patient suffers a point of lethal damage for ",
                {
                    "text": "every",
                    "italic": true
                },
                " roll. Implanting a Thaumatechnology device requires care and precision, and cannot be rushed in this manner."
            ]
        },
        {
            "type": "paragraph",
            "text": "A Thaumatechnology implant can be recovered from a dead patient provided it is extracted within six hours of the patient’s death. Since cadavers don’t care much about suffering extra lethal damage, it only takes a half hour per roll to remove a Thaumatechnology implant from a dead body."
        },
        {
            "type": "heading",
            "level": 3,
            "text": "Roll Results"
        },
        {
            "type": "line",
            "label": "Dramatic Failure",
            "text": "The procedure goes disastrously awry. Not only is the Thaumatechnology implant destroyed, but the patient also suffers one point of aggravated damage per Merit dot cost of the implant being installed."
        },
        {
            "type": "line",
            "label": "Failure",
            "text": "No progress is made toward implanting the Thaumatechnology."
        },
        {
            "type": "line",
            "label": "Success",
            "text": "You progress toward the goal of implanting the Thaumatechnology."
        },
        {
            "type": "line",
            "label": "Exceptional Success",
            "text": "Not only do you make significant progress toward completing the procedure, but also the next time during the surgery when the patient would suffer a lethal wound, he takes no damage."
        },
        {
            "type": "line",
            "label": "Suggested Equipment",
            "text": "Set of surgeon’s tools (scalpels, retractors, clamps) (+1), field surgical kit (+1), military surgical kit (+2), access to surgical facilities (+3)"
        },
        {
            "type": "line",
            "label": "Possible Penalties",
            "text": "Lack of tools (-1 to -4), bad weather (-2), distraction from noise (-1) to imminent danger (-4)"
        },
        {
            "type": "line",
            "label": "Special",
            "text": "These rules are meant to be used when characters wish to recover or implant Thaumatechnology “in the field,” as it were. If a hunter acquires new Thaumatechnology implants by spending experience points, assume that those implants are installed by the Cheiron Group’s specialists in fully stocked medical facilities. All surgical procedures, and recovery from wounds suffered during surgical procedures, occur during “down time.”"
        },
        {
            "type": "heading",
            "level": 2,
            "text": "THE HARVEST MARKET"
        },
        {
            "type": "paragraph",
            "text": "A thriving black market exists for monstrous “spare parts,” and some hunters unaffiliated with Cheiron work that market, selling rare specimens or limbs to TCG for big bucks. It’s also a good way to get noticed by Cheiron, which has its…pluses and minuses. More information on the Harvest Market can be found on p. 202, in the Research and Development section."
        }
    ]
}

const thaumatechnologyData = [
    {
        "Name": "Agonizer",
        "Rating": "••••",
        "Description": "Parasitic bug that feeds off of magic",
        "Book": "WF 128",
        "Content": [
            {
                "type": "paragraph",
                "text": [
                    "Witches power their magic with energies from worlds beyond our own, and warlocks marshal powers that no sane man can fully comprehend. They’re not the only ones in tune with otherworldly power. Sometimes, magic isn’t the only thing to cross between worlds. Impressive magical acts occasionally bring unearthly creatures into being. While the range of creatures that crawl between the cracks of the world is vast, Cheiron agents recovered a number of unearthly creatures that feast on magical power. They’ve found enough that R&D believe they have to come from somewhere, but nobody’s quite sure where. Some appear very similar, suggesting that they’re not created ",
                    {
                        "text": "ex nihilo",
                        "italic": true
                    },
                    " but are instead fauna of some alien Realm. One such beast turns humans into thaumovores — magic-eaters. On its own the creature is no bigger than a cockroach, but it soon chooses a human host and burrows in through the base of the throat. Working through the host’s body, it soon attaches itself to its target’s brain. Once it’s there, the bug spins new nerve fibers out through the host’s body. These fibers act as an antenna, picking up on ambient magical fields and sucking them dry. The host starts acting odd, researching weird places and occult sites at the bug’s insistence. Even then, parasites that Cheiron don’t recover die out. There isn’t much magical energy just lying around."
                ]
            },
            {
                "type": "paragraph",
                "text": "The Cheiron Group aren’t monsters. They don’t expect their field operatives to give up any part of their brain in the name of killing witches. That would be wrong. The biotech guys came up with a better idea. They trim the nerve-antennas and attach them to four half-inch metal spikes, then implant the bug on the outside of the hunter’s right arm. Each spike lies flat just under the hunter’s right palm. Flexing her wrist just so makes the spikes spring out. When they do, the area of palm between them turns the color of old blood."
            },
            {
                "type": "paragraph",
                "text": "A hunter has to keep her Agonizer happy. She can walk through an area suffused with magical energy, and the residual nerve-antenna might pick up enough magic to sate the bug. More often, she has to stick the spikes into a witch’s skin. The Agonizer then eats the magic out of her victim’s soul, crippling the victim with pain as it does so. If she doesn’t keep her Agonizer happy, the hunter knows just how her victims feel."
            }
        ],
        "Benefit": [
            {
                "type": "paragraph",
                "text": "The Agonizer eats magic. There’s no other way to put it. It can either draw magic out of areas steeped in magic, which usually keeps it happy for a week, or it must feed on the Source stored within a witch. Attacking with the Agonizer requires the hunter to touch her target: Dexterity + Brawl - target’s Defense. The bug doesn’t deal damage normally. Instead, every success on the attack roll drains one point of Source. If the target doesn’t have enough Source, extra successes are lost. For every point of Source consumed, the target suffers a -1 penalty due to crippling pain (to a maximum of -5). This penalty lasts until the end of the scene. If used on a target that does not have any reserves of Source, the Agonizer has no effect."
            }
        ],
        "Action": "",
        "fullCost": "",
        "DicePool": "Dexterity + Brawl - target’s Defense",
        "RollResults": [
            {
                "type": "line",
                "label": "Success",
                "text": "Every success on the attack roll drains one point of Source."
            },
            {
                "type": "line",
                "label": "Extra successes",
                "text": "If the target doesn’t have enough Source, extra successes are lost."
            },
            {
                "type": "line",
                "label": "Source consumed",
                "text": "For every point of Source consumed, the target suffers a -1 penalty due to crippling pain (to a maximum of -5). This penalty lasts until the end of the scene."
            },
            {
                "type": "line",
                "label": "No Source",
                "text": "If used on a target that does not have any reserves of Source, the Agonizer has no effect."
            }
        ],
        "Notes": [
            {
                "type": "paragraph",
                "text": [
                    {
                        "text": "Special:",
                        "bold": true
                    },
                    " The Agonizer must consume one point of Source per week, either from a witch or from a magical area. The hunter suffers a cumulative -1 penalty on all rolls ",
                    {
                        "text": "per day",
                        "italic": true
                    },
                    " once the week is over (to a maximum of -5). Feeding the Agonizer instantly removes this penalty."
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    {
                        "text": "Example:",
                        "bold": true,
                        "italic": true
                    },
                    " ",
                    {
                        "text": "Oscar’s had a bad week. His Agonizer ran dry on Monday, and by Wednesday night he’s in intense pain. Fortunately, his cell has got a lead on a witch. The others distract her while Jack plunges his barbed palm into her back. He gets lucky, rolling two successes even with his -3 modifier. The witch loses her two points of Source, and suffers a -2 modifier on all rolls until the end of the scene. Oscar stops suffering the -3 modifier immediately.",
                        "italic": true
                    }
                ]
            }
        ],
    },
    {
        "Name": "Anger Patch",
        "Rating": "•",
        "Description": "Detect vampires at a cost of -1 to Social rolls against them",
        "Book": "HTV 185",
        "Content": [
            {
                "type": "paragraph",
                "text": [
                    "The Anger Patch is a small patch of a dead man’s skin grafted to the base of the neck. One inch square, precisely measured, the patch is wired with twice the number of nerve endings that area of the body usually has. It’s hooked directly into the bloodstream, too, and it feeds from your blood all day and all night and it does one thing in return: it ",
                    {
                        "text": "hates",
                        "italic": true
                    },
                    ". The Anger Patch isn’t just a square of a dead man’s skin, it’s a square of a ",
                    {
                        "text": "vampire’s",
                        "italic": true
                    },
                    " skin. Vampires, as Cheiron scientists have observed, exhibit an instinctual territorial aggression on a scale unprecedented in nature, and with a little biomedical tinkering, the boys in the back room have figured out how to harness that."
                ]
            }
        ],
        "Benefit": [
            {
                "type": "paragraph",
                "text": "The Anger Patch acts as a kind of automatic vampire detector. Whenever a character with an Anger Patch becomes aware of a vampire, the patch writhes and twitches irritably, as though the muscles under the skin are experiencing a muscle spasm. The character does not need to be aware the person he’s seen is a vampire — just catching a glimpse of a pale figure across the club is sufficient — but the Anger Patch, by virtue of being grafted into the central nervous system, makes the character instinctively aware of who the vampire is (or who the vampires are). The sensation lasts about a turn, just long enough to make it hard to miss."
            },
            {
                "type": "paragraph",
                "text": "There are two catches to relying on the Anger Patch: first, the Patch only works for a given user once for each vampire. Subsequent meetings don’t trigger the visceral reaction from the patch; Cheiron scientists haven’t been able to get the sensitivity of the neural connections to the point where the secondary reactions are detectable to a human host. Second, the character suffers a -1 penalty on all Social rolls against vampires. Bloodsuckers just can’t stand him, even if they can’t quite figure out why."
            },
            {
                "type": "paragraph",
                "text": [
                    "Although the vampiric version presented here is the most common Anger Patch, Cheiron Group agents often hear rumors of similar devices capable of detecting werewolves, zombies, or even stranger beings. If such Thaumatechnology does exist, it functions identically to the vampire-detecting version, just focused on a different type of creature. And if such Thaumatechnology exists, assume that detecting a monster type different from vampires costs an additional two dots for the Merit. How such devices are made — and ",
                    {
                        "text": "what",
                        "italic": true
                    },
                    " they’re made of — probably doesn’t bear thinking about."
                ]
            }
        ],
        "Action": "",
        "fullCost": "",
        "DicePool": "",
        "RollResults": [],
        "Notes": [],
    },
    {
        "Name": "Banality Worm",
        "Rating": "•••••",
        "Description": "Add Resolve to resist supernatural effects. -1 on Degeneration rolls",
        "Book": "HTV 189",
        "Content": [
            {
                "type": "paragraph",
                "text": [
                    "There are dimensions beyond this world that we perceive with our limited five senses. The Cheiron Group knows this, even if it doesn’t entirely understand the how and why of such places. Sometimes, though, ",
                    {
                        "text": "things",
                        "italic": true
                    },
                    " leak through from those other worlds, and Cheiron agents find them. The resulting experiments are very...enlightening."
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    "The Banality Worm is one such creature, crawled through a rift in the wall between this world and another. As near as anyone can tell, the realm this pale, greasy little creature came from is the very antithesis of this one, a realm of pure, absolute nothing. And in this world, it ",
                    {
                        "text": "hates",
                        "italic": true
                    },
                    " the supernatural even more than the most fanatic of hunters. Hatred of magic seems to be embedded into its very being; sorceries of all sorts tend to dissolve when directed at the Worm. It didn’t take long to realize that if you stitch the Banality Worm into someone’s chest cavity, magic directed at the host would unravel, too."
                ]
            },
            {
                "type": "paragraph",
                "text": "A Banality Worm is implanted in an extremely risky procedure directly under the host’s heart. Once implanted, the creature nestles up to the warm, pulsating organ and suckles on it, feeding off the host’s blood supply. Every so often, it curls around the heart and squeezes."
            }
        ],
        "Benefit": [
            {
                "type": "paragraph",
                "text": [
                    "The host of a Banality Worm gains an extraordinary resistance to supernatural effects. Any time a supernatural effect targets him (including the Relic, Benediction and Castigation Endowments), the effect’s originator subtracts the host’s Resolve from her dice pool. If the power is already resisted by Resolve, she subtracts ",
                    {
                        "text": "double",
                        "italic": true
                    },
                    " the host’s Resolve."
                ]
            }
        ],
        "Action": "",
        "fullCost": "",
        "DicePool": "",
        "RollResults": [],
        "Notes": [
            {
                "type": "paragraph",
                "text": [
                    {
                        "text": "Special:",
                        "bold": true
                    },
                    " Something about having a cold, alien parasite from a realm of pure nihilism cozied up to his heart skews the host’s moral perceptions a bit. Whenever he makes a degeneration roll, the host rolls one less die."
                ]
            }
        ],
    },
    {
        "Name": "Berserker Splice",
        "Rating": "•••",
        "Description": "Under stress, gain 2 points to Strength, plus 1 point per every point of Lethal damage taken, and gains Iron Stamina temporarily.",
        "Book": "SpSl 152",
        "Content": [
            {
                "type": "paragraph",
                "text": [
                    "No one that has had a close encounter with a werewolf can help but remember the primal fury exhibited by the creatures. Wounds that would be fatal to a human simply serve to enrage a werewolf and that anger gives them strength. The scientists of the Cheiron Group have studied both the human-looking remains of werewolves and have performed dissections on still-living specimens (a trickier proposition) searching for, among other things, a physiological reason for a werewolf’s rage. When their data was compiled, the scientists noticed that every one of the werewolves studied had an enlarged ",
                    {
                        "text": "medulla oblongata",
                        "italic": true
                    },
                    ". Believing they had found the answer to the riddle, the scientists performed a transplant on a willing (hey, no one made him sign the waiver) Cheiron field agent, replacing his human ",
                    {
                        "text": "medulla oblongata",
                        "italic": true
                    },
                    " with one taken from a werewolf. The results were spectacular, if messy. Upon awakening after the surgery, the agent attacked anyone he could get his hands on, killing 11 Cheiron employees with his bare fists and teeth before he was subdued. Tapes of the incident suggested that the subject exhibited increased strength and fortitude. Later examinations of the body revealed the subject had been shot nine times before he collapsed."
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    "Despite the mishap, the scientists in charge of the program were eager to continue with their project and with comparatively minor losses to the company (only around 50 employees were killed all told) eventually perfected a stable transplant procedure. Instead of a direct transplant, the scientists carved off small sections of a werewolf’s ",
                    {
                        "text": "medulla oblongata",
                        "italic": true
                    },
                    " and spliced them directly into the sensory and motor areas of a subject’s cerebral cortex. When stimulated by adrenaline produced during the fight-or-flight instinct, the splices became active and pumped additional chemicals into the body that increased natural strength and physical resiliency. The program was declared a success by the head office and instructions on the procedure were disseminated throughout the company and its subsidiaries."
                ]
            }
        ],
        "Benefit": [
            {
                "type": "paragraph",
                "text": "Whenever the hunter is in a dangerous situation, the adrenaline produced by the stress activates the Berserker Splice. For the remainder of the scene, a hunter with the implant gains two Strength plus an additional +1 Strength for every point of lethal damage taken (this ignores normal human Attribute limits) and gains the Iron Stamina ••• Merit whether he meets the prerequisites or not. (The advantages during a fight are obvious, but in flight situations remember that the Speed of the character is also increased by the boost in Strength.)"
            }
        ],
        "Action": "",
        "fullCost": "",
        "DicePool": "Resolve + Composure",
        "RollResults": [
            {
                "type": "line",
                "label": "Failure",
                "text": "The hunter flies into a killing rage or cowardly retreat (player’s choice)."
            },
            {
                "type": "line",
                "label": "Fight response",
                "text": "The hunter is unable to tell friend from foe while in the rage and will attack the closest target if the player chooses a “fight” response."
            },
            {
                "type": "line",
                "label": "Berserker rage",
                "text": "The berserker rage lasts for a number of turns equal the Stamina rating of the hunter, after which the splice shuts down and the hunter collapses from exhaustion."
            },
            {
                "type": "line",
                "label": "Exhaustion",
                "text": "Count the hunter as stunned for a number of turns equal to those spent in the rage."
            }
        ],
        "Notes": [
            {
                "type": "paragraph",
                "text": [
                    {
                        "text": "Drawback:",
                        "bold": true
                    },
                    " Other than suffering from a ravenous hunger after the implant is activated, agents with a Berserker Splice also have a tendency to, well, go ",
                    {
                        "text": "berserk",
                        "italic": true
                    },
                    ". While the Splice is active, each time the agent takes two or more points of lethal damage from a single attack he must succeed at a Resolve + Composure roll or fly into a killing rage or cowardly retreat (player’s choice). The hunter is unable to tell friend from foe while in the rage and will attack the closest target if the player chooses a “fight” response. The berserker rage lasts for a number of turns equal the Stamina rating of the hunter, after which the splice shuts down and the hunter collapses from exhaustion (count the hunter as stunned for a number of turns equal to those spent in the rage). Cells that have prior warning about this possible “side effect” can plan accordingly for this eventuality by attempting to stay out of the line of sight of a hunter with the implant during combat."
                ]
            }
        ],
    },
    {
        "Name": "Biliary Tree of the Cynocephali",
        "Rating": "•••",
        "Description": "Any Toxin entering body starts out at -5 Toxicity. +2 to Resist Disease.",
        "Book": "BbBB 25",
        "Content": [
            {
                "type": "paragraph",
                "text": "This entire bile system (canals, ducts, liver) replaces the hunter's own biliary tree. While Cheiron would have one believe that such a system can be taken only from the notorious (and extinct) dog-headed cynocephali, it actually works the same if surgically extracted from any therianthrope (werewolf, werecat and the like). Particularly dark rumors suggest that such a system can be extracted from powerful Ascending Ones as well, but surely that's just rumor...."
            }
        ],
        "Benefit": [
            {
                "type": "paragraph",
                "text": "A character with this implant parses toxins alarmingly well. Assume that any toxin that enters the hunter's body is considered to have a Toxicity of -5 (which renders most poisons inert). In addition, the liver's ability to create new tissue helps weaken some diseases, as well. The hunter gains +2 to any roll to resist disease."
            }
        ],
        "Action": "",
        "fullCost": "",
        "DicePool": "",
        "RollResults": [],
        "Notes": [
            {
                "type": "paragraph",
                "text": [
                    {
                        "text": "Special:",
                        "bold": true
                    },
                    " Any time this Endowment must process a new toxin or disease, the hunter's flesh shows prominent jaundice for the next 12 hours. In addition, unless the hunter takes a twice-daily pill (which Cheiron does not provide under their medical plan, and it necessitates Resources ••• to purchase), then the character takes a point of lethal damage upon waking due to the intense upsurge of searing bile that blasts up the hunter's esophagus."
                ]
            }
        ],
    },
    {
        "Name": "Cortical Adaptation",
        "Rating": "•••",
        "Description": "After spending a point of Willpower, the Hunter gets +3 to Investigation and Empathy in regards to Slasher murders and purchase Slasher merits",
        "Book": "Slash 164",
        "Content": [
            {
                "type": "paragraph",
                "text": "Some slashers are driven to kill because of a condition that affects their brain. In at least three recorded cases, tertiary syphilis destroyed the moral center of the subject’s brain and caused powerful delusions that drove the individual to kill. In other cases, large tumors destroy the subject’s impulse control and punch great holes in her ability to make moral judgments. Cheiron’s R&D harvests alien parts of these tumors and implants the resultant lesions on the surface of a hunter’s brain."
            },
            {
                "type": "paragraph",
                "text": "Every hunter reacts differently to having part of a cancerous (and murderous) growth attached to their brain during extensive and invasive surgery. In effect, the hunter can “switch on” a part of her personality that makes her think in the same way as a slasher, giving her an unparalleled insight into the thoughts of a serial killer. Her thoughts resonate with others of her new kind; she can use her understanding to read the scene of a murder in ways that no profiler or investigator can manage. She’s got an intuitive understanding of murder, and it shows."
            },
            {
                "type": "paragraph",
                "text": "The real magic behind this Endowment is an inhibitor chip that sits between the lesion and the hunter’s brain. The chip does more than let the hunter switch a new mode of thought on and off: even when emulating a slasher’s mind, the hunter remains in control. It’s more than a little unsettling for the hunter, seeing herself thinking in alien ways that suddenly seem so tempting. The chip helps her retain control. Reports that the inhibitor chip dissolves after three years of swimming in cerebral fluid are so far unconfirmed — few hunters have lasted that long with the implant in place."
            }
        ],
        "Benefit": [
            {
                "type": "paragraph",
                "text": "By spending a point of Willpower, the hunter can think in the same way as a slasher. She gains a three-dice bonus on Investigation or Empathy rolls regarding slasher murders. When “in the zone,” she understands things as a serial killer does, and her impulse control and moral centers are affected. The implant remains active until the end of the scene."
            },
            {
                "type": "paragraph",
                "text": "A hunter with this implant must choose a ripper Undertaking for his slasher-self (see Building the Perfect Killer, pg. 87). She chooses two of that Undertaking’s Skills. She gains one new Specialty in one of these Undertaking Skills, and may increase these Skills at a rate of (new dots x2) rather than (new dots x 3). Finally, she may purchase Merits that are normally restricted to slasher characters (see below). The character must meet all the other prerequisites as normal."
            },
            {
                "type": "paragraph",
                "text": "The hunter can only use her slasher Merits and her additional Specialty when under the influence of the Cortical Adaptation, though she can increase her Undertaking Skills at the discounted rate at any time."
            }
        ],
        "Action": "",
        "fullCost": "1 Willpower",
        "DicePool": "",
        "RollResults": [],
        "Notes": [
            {
                "type": "paragraph",
                "text": [
                    {
                        "text": "Special:",
                        "bold": true
                    },
                    " Using this implant generates a strong sense of disassociation — the hunter watches her own thought processes, things that she knows she is thinking, and doesn’t recognize them at all. The hunter suffers a -1 penalty to all rolls made to resist Morality degeneration. If the Cortical Adaption is removed, this effect does not remain. It’s also worth mentioning that hunters with this implant suffer a high rate of malignant cancers throughout the body... though, Cheiron doesn’t share this data with its employees, of course."
                ]
            }
        ],
    },
    {
        "Name": "Devil's Eye",
        "Rating": "••",
        "Description": "See emotional auras of individuals",
        "Book": "HTV 186",
        "Content": [
            {
                "type": "paragraph",
                "text": "It’s amazing the things they can do with the human eye. Corneal transplants can repair traumatic damage to the surface of the eye, neurosurgeons can connect cameras directly into the optic nerve, and laser surgery can give you perfect 20/20 vision — and the Cheiron Group can give you the eyes of a demon that see the deepest secrets of a man’s soul. Transplantation of the entire eyeball is a new field for Cheiron doctors, and Devil’s Eyes are one of the early prototypes. Before the implantation, Devil’s Eyes resemble golden, multifaceted orbs, like oversized insect eyes. Once they’ve been implanted and hooked up to a person’s optic nerves, they shift their pigmentation and structure, becoming indistinguishable from the patient’s natural eyes. No matter how bad the character’s eyes were originally, Devil’s Eyes give him perfect 20/20 vision."
            },
            {
                "type": "paragraph",
                "text": "Devil’s Eyes aren’t really “eyes” in any biological sense; while they are the sensory organs of the creature they come from, they don’t really perceive the world the way a human’s eyes do. To allow a person to see through the Devil’s Eyes, a tiny computerized interface chip must be implanted between the optic nerve and the Eye themselves. The interface processes the visual information out of the image perceived by the Eyes, filtering out extraneous data beyond the human visual range. The result of this post-processing gives the hunter’s vision a flat, artificial look, as though the whole world were a badly retouched photograph."
            }
        ],
        "Benefit": [
            {
                "type": "paragraph",
                "text": "By squeezing her eyes shut and rolling them in a particular way behind the lids, a character with Devil’s Eyes can temporarily disengage the interface chip and receive the full, unfiltered spectrum the Eyes perceive. When active, the Eyes allow the character to perceive the emotional auras surrounding other individuals. These auras provide insight into the character’s emotional state, and can even reveal supernatural influences. The Devil’s Eyes revert to their natural appearance while active."
            }
        ],
        "Action": "Instant",
        "fullCost": "",
        "DicePool": "Wits + Empathy",
        "RollResults": [
            {
                "type": "line",
                "label": "Dramatic Failure",
                "text": [
                    "The massive rush of information overwhelms the hunter. For the rest of the scene, she cannot turn the Eyes off and is treated as though she had ingested a potent (-3 to traits) dose of hallucinogens (see ",
                    {
                        "text": "The World of Darkness Rulebook",
                        "bold": true
                    },
                    ", p. 177)."
                ]
            },
            {
                "type": "line",
                "label": "Failure",
                "text": "The hunter is unable to make sense of the swirling aura of colors around another character."
            },
            {
                "type": "line",
                "label": "Success",
                "text": "For every success rolled, the hunter can clearly discern one aura color of one individual in her line of sight. She may allocate her successes however she likes; she might spend all of them on getting a detailed perception of a single individual’s state of mind, or she might try a quick read on several characters. She discerns emotions in order of descending intensity. Aura signifiers that encompass the entire aura (that is, signifiers that are not just individual colors) are perceived automatically with at least one success. See the Aura Signifiers sidebar on p. 186 for a list of aura colors and their associations."
            },
            {
                "type": "line",
                "label": "Exceptional Success",
                "text": "As ordinary success, but the total number of successes rolled is applied to all characters in line of sight."
            }
        ],
        "Notes": [
            {
                "type": "paragraph",
                "text": [
                    {
                        "text": "Example:",
                        "bold": true,
                        "italic": true
                    },
                    " ",
                    {
                        "text": "Angeline, infiltrating a cult ceremony in the Philadelphia sewers, activates her Devil’s Eyes to get a sense of the congregation’s state of mind. She rolls four successes and allocates two of them to the priest performing the ritual, with the remaining two allocated to the two cultists closest to her. The Storyteller informs her that the high priest’s aura is a muted, hypnotic swirl of bright green and violet, while the two nearest cultists have gold auras. The two successes for the high priest show her his obsession and excitement, while the one each for the two cultists reveals their confusion. In addition, she automatically recognizes the high priest’s psychotic nature — and, interestingly, the fact that he’s under supernatural control.",
                        "italic": true
                    }
                ]
            },
            {
                "type": "table",
                "title": "AURA SIGNIFIERS",
                "headers": ["Condition", "Color"],
                "rows": [
                    ["Afraid", "Orange"],
                    ["Aggressive", "Purple"],
                    ["Angry", "Bright Red"],
                    ["Bitter", "Brown"],
                    ["Calm", "Light Blue"],
                    ["Compassionate", "Pink"],
                    ["Conservative", "Lavender"],
                    ["Depressed", "Gray"],
                    ["Desirous/Lustful", "Deep Red"],
                    ["Distrustful", "Light Green"],
                    ["Envious", "Dark Green"],
                    ["Excited", "Violet"],
                    ["Generous", "Rose"],
                    ["Happy", "Vermilion"],
                    ["Hateful", "Black"],
                    ["Idealistic", "Yellow"],
                    ["Innocent", "White"],
                    ["Love-struck", "Bright Blue"],
                    ["Obsessed", "Bright Green"],
                    ["Sad", "Silver"],
                    ["Spiritual", "Gold"],
                    ["Suspicious", "Dark Blue"],
                    ["Confused", "Mottled, shifting colors"],
                    ["Daydreaming", "Sharp, flickering colors"],
                    ["Supernaturally Controlled", "Weak, muted aura"],
                    ["Psychotic", "Hypnotic, swirling colors"],
                    ["Supernatural Being", "A vague, indescribable \"wrongness\" to the [unclear]"]
                ]
            }
        ],
    },
    {
        "Name": "Ectocrine Gland",
        "Rating": "••",
        "Description": "See and communicate with non-manifested Twilight entities (ghosts and spirits). While active, -2 to \"real-world\" Perception tests, and hunter is easier to possess by entities.",
        "Book": "SpSl 151",
        "Content": [
            {
                "type": "paragraph",
                "text": "When a materialized spirit is forced back into the spirit world or killed, it sometimes leaves behind a gooey, semi-material fluid that is referred to as ectoplasm (the same substance sometimes left behind by ghosts). Even though ectoplasm dissipates quickly in the material realm and is near impossible to gather samples of, the Cheiron Group has managed to conduct some experiments with the stuff. The experiment that eventually led to the creation of the Ectocrine Gland featured a quick-thinking field agent and a syringe. After defeating a materialized spirit that had somehow escaped containment and was wreaking havoc in a graveyard, the agent scooped up some of the ectoplasm left by the spirit. Noticing that the ectoplasm was dissipating and not wanting to miss an opportunity to experiment with the substance, the agent poked some of it into a syringe and injected himself. Subsequent to his release from the mental ward, the agent reported that after the injection he had been able to see non-corporeal ghosts and spirits (those existing in the state of Twilight)."
            },
            {
                "type": "paragraph",
                "text": "Not long after the results of that experiment had been filed, a different team of scientists sent a report to the Cheiron head office that claimed they had detected trace amounts of ectoplasm in the blood stream of a girl who had been the victim of possession. Seeking a way to verify these new claims, Cheiron ran a battery of tests on a kidnapped spiritualist. They discovered that the spiritualist also had trace amounts of ectoplasm in his blood and, more exciting than that, his body seemed to manufacture the stuff. Following further months of experimentation along with trial and error, Cheiron discovered a way to manufacture a gland that would release ectoplasm into the bodies of their agents. The result? The Ectocrine Gland."
            }
        ],
        "Benefit": [
            {
                "type": "paragraph",
                "text": "By concentrating, the hunter can activate the Ectocrine Gland. This allows him to see into Twilight and communicate (though not physically interact) with non-manifested entities. This effect lasts for one scene and the gland can produce enough ectoplasm to be used a number of times each day equal to the Stamina of the hunter. The things that dwell in Twilight aren’t forced to communicate with the hunter and the gland doesn’t bestow the ability to understand any languages beyond those already spoken by the hunter."
            }
        ],
        "Action": "",
        "fullCost": "",
        "DicePool": "",
        "RollResults": [],
        "Notes": [
            {
                "type": "paragraph",
                "text": [
                    {
                        "text": "Drawback:",
                        "bold": true
                    },
                    " While the hunter gazes into Twilight it can be difficult to concentrate on events going on around him. The concentration required to separate what is “real” from what is Twilight results in a -2 penalty to all Perception rolls. Additionally, the presence of ectoplasm in his bloodstream also makes the hunter an easier target for possession. For an hour after the Ectocrine Gland is activated, the hunter is penalized -2 dice to resist possession."
                ]
            }
        ],
    },
    {
        "Name": "Evil Eye",
        "Rating": "•••",
        "Description": "Replace an eye and suffer the One Eye flaw. Additionally receive -2 to all Social rolls when the eye is exposed. Gain any one of these Dread Powers: Confuse, Fury, Sleep, Hypnotize or Terrify",
        "Book": "NS 148",
        "Content": [
            {
                "type": "paragraph",
                "text": "The eyes are the windows to the soul, so says the proverb. Field agents who have seen what vampires can do to a man just by looking him in the eye believe those words wholeheartedly. The mavericks of the Cheiron Group thought to prove the expression beyond reasonable doubt, however. Any fool with a scalpel can pluck the eye from someone’s head, but to lock the soul inside the eye beforehand? Well, that’s why they get paid the big bucks."
            },
            {
                "type": "paragraph",
                "text": "For whatever reason, the method used to extract the eye while maintaining the inherent abilities of the creature causes the awful discoloration and unsightliness. They say it’s because the twisted soul of the creature becomes trapped inside. The surgeons of the Cheiron Group are still investigating ways to make a more... fashionable version, but so far, efforts have failed."
            },
            {
                "type": "paragraph",
                "text": "These sightless milky eyes are able to replicate a vampire’s ability to sway the minds of others to a limited degree. Unfortunately, true to name it has proven difficult to look at conversationally, and is most often politely covered by an eye patch. When needed, the field agent simply flips up the eye patch to reveal to her opponents her awful ocular addition."
            }
        ],
        "Benefit": [
            {
                "type": "paragraph",
                "text": [
                    "The hunter has replaced one of her eyes with a bloated and milky abomination; appropriately, she suffers from the One Eye Flaw (",
                    {
                        "text": "World of Darkness Rulebook",
                        "bold": true
                    },
                    " p 219) and -2 to any Social rolls where the eye is exposed. She may choose one of the following Dread Powers at one dot: Confuse, Fury, Hypnotize, Sleep or Terrify (all found pp. 276-283 in ",
                    {
                        "text": "Hunter: The Vigil",
                        "bold": true
                    },
                    ")."
                ]
            }
        ],
        "Action": "",
        "fullCost": "",
        "DicePool": "",
        "RollResults": [],
        "Notes": [
            {
                "type": "paragraph",
                "text": [
                    {
                        "text": "Special:",
                        "bold": true
                    },
                    " The character may purchase additional dots of the Dread Power chosen, to a maximum of three dots. The cost is new dots x 8 in experience points. Additional powers cannot be chosen (unless the character chooses to lose the second eye, which would render her totally blind)."
                ]
            }
        ],
    },
    {
        "Name": "Hand of Glory",
        "Rating": "•••••",
        "Description": "Mesmerize and immobilize anyone in line of sight.",
        "Book": "HTV 190",
        "Content": [
            {
                "type": "paragraph",
                "text": "Limb transplant technology has come a long way in the last 40 years. It used to be the best you could hope for was a plastic model, like a mannequin’s hand. Nowadays, provided you’re willing to go on a cocktail of immunosuppressants for the rest of your life, they can actually hack the hand off a cadaver and attach it to you almost as good as new. The Cheiron Group has been at the forefront of limb-replacement research for two decades, and with the aid of Thaumatechnology had recorded successes five years before mainstream medical technology."
            },
            {
                "type": "paragraph",
                "text": "Then the boys in the back room got hold of a peculiar little relic a field team brought back from a raid on a demon-worshiping cult in southern France: a pickled human hand, severed at the wrist, with each finger a tiny candle. When the candle was lit, anyone who saw its light was transfixed, unable to move or speak. In one of those serendipitous moments that make the world go round, the scientists of the Cheiron Group saw a way to kill two birds with one proverbial stone."
            },
            {
                "type": "paragraph",
                "text": [
                    "A Hand of Glory must be affixed to the stump of a human being’s arm. Occult tradition dictates that it must be a ",
                    {
                        "text": "left",
                        "italic": true
                    },
                    " hand specifically, but Cheiron Group surgeons have had equal success in transplanting either hand. What is important is that the hand come from a hanged man or woman and be at least partially pickled in a solution of bizarre alchemical reagents. By all rights, it should be impossible to graft such thoroughly necrotized flesh onto a living being without massive infection and death, but something in the nature of the Thaumatechnology allows the grafted limb to function normally. It’s always a few degrees cooler than the rest of the body, and the skin is perpetually wrinkled as though it has soaked in a bath, but it is otherwise indistinguishable from a normal hand."
                ]
            }
        ],
        "Benefit": [
            {
                "type": "paragraph",
                "text": "Apart from restoring the use of an amputated hand, the Hand of Glory bestows upon its owner the mesmeric power of the folkloric corpse-candle. The hunter must light the ends of the Hand’s fingers (he takes no damage from this, and the fire doesn’t consume his flesh) to activate it. The resultant flames are preternaturally steady and unwavering, and cannot be put out save by being doused in milk. Anyone who sees the flames of the Hand of Glory risks being rendered immobile and insensate as long as the flames remain visible. While the candles burn, the character suffers a -2 penalty to any rolls related to manual dexterity using that hand. The flames are too small to inflict damage or be used as a weapon, but they can ignite flammable objects like paper or fabric."
            }
        ],
        "Action": "Contested",
        "fullCost": "",
        "DicePool": "Presence + Composure vs. Resolve. The Hand’s owner rolls once and compares his result to the result of all witnesses. Each time a new group of witnesses sees the Hand, the owner rolls once and compares his result to all of the witnesses’.",
        "RollResults": [
            {
                "type": "line",
                "label": "Dramatic Failure",
                "text": "The Hand of Glory’s power is turned on its owner. He is mesmerized (see “Success” for details) until someone forcibly breaks his line of sight to the Hand."
            },
            {
                "type": "line",
                "label": "Failure",
                "text": "Any character in line of sight who earns more successes on the contested action is unaffected by the Hand of Glory."
            },
            {
                "type": "line",
                "label": "Success",
                "text": "Any character (including the hunter’s allies) in line of sight who rolls fewer successes than the hunter is rendered immobile and can do nothing save stare, transfixed, at the Hand of Glory. The hunter may move, speak, or take actions freely without breaking the spell, as long as the flames are kept in the victim’s line of sight. Remember that the victim is completely immobile and cannot turn to follow the Hand of Glory. In order to be affected, the victim must see the flames themselves, not just the light from them. If the victim is attacked, or threatened with attack, the spell is immediately broken."
            },
            {
                "type": "paragraph",
                "text": "A victim normally only rolls against an individual Hand of Glory once per scene. If the initial resistance roll succeeds, or if the spell is broken, that character is immune to the Hand’s effects for the remainder of the scene. The Hand’s owner may spend a point of Willpower to affect a given character more than once in the same scene (one Willpower is required per successive attempt per person)."
            },
            {
                "type": "paragraph",
                "text": "Mesmerized characters have no memory of events that transpire in their presence while mesmerized. They do recall the character with the Hand of Glory being the last thing they saw before blacking out. The Hand’s owner may spend Willpower to erase even this trace of his presence: for every affected character he wishes to forget having seen him, he may spend a point of Willpower when the effect is broken to wipe his presence from their minds. Provided he leaves their line of sight immediately, they will retain no recollection of him at all. This is an exception to the rule that a character may only spend one Willpower per turn."
            },
            {
                "type": "paragraph",
                "text": "Photographs or video recordings do not convey the Hand’s effects to viewers, but live video feeds such as security cameras do."
            },
            {
                "type": "line",
                "label": "Exceptional Success",
                "text": "As a success, but all affected characters automatically forget the hunter without need for Willpower expenditure."
            }
        ],
        "Notes": [],
    },
    {
        "Name": "Lover's Lips",
        "Rating": "••",
        "Description": "Receive 9-Again on Social rolls against characters who ingest the liquid from the implant",
        "Book": "HTV 187",
        "Content": [
            {
                "type": "paragraph",
                "text": [
                    "This implant isn’t literally a pair of lips and, in fact, the Cheiron Group’s official designation for it is “Eros’ Caress.” The truth is less poetic: “Lover’s Lips” are actually manufactured sacs, resembling nothing so much as a snake’s venom sacs. They’re made from the latest in synthetic skin technology, with just a little something extra harvested from what passes for a vampire’s circulatory system. The whole thing is filled with a few cc’s of blood — not necessarily the implantee’s — then implanted under the jaw, right alongside the salivary gland. When the hunter massages just behind his jaw and below his ears, the blood, partially transformed by the vampiric tissue, squirts into his mouth. It tastes vile, but when someone else gets a taste of it, usually through a kiss, they suddenly become ",
                    {
                        "text": "very",
                        "italic": true
                    },
                    " fond of the hunter."
                ]
            }
        ],
        "Benefit": [
            {
                "type": "paragraph",
                "text": [
                    "When another character tastes the blood secreted by this implant, it induces a mild euphoric effect, as though she has taken a hit of morphine (",
                    {
                        "text": "The World of Darkness Rulebook",
                        "bold": true
                    },
                    ", p. 177). This euphoric state lasts only for a scene, not the (8 minus Stamina) hours of a real morphine hit. She becomes well disposed toward the implanted character, who gains the benefit of the 9-again rule on Social rolls against her for the next scene."
                ]
            },
            {
                "type": "paragraph",
                "text": "If a single individual tastes blood from the same character’s implant more than once in a single month, she becomes mildly addicted to the taste of the blood. In addition, her affection for him deepens; he gains a +1 bonus on all Social rolls against the victim as long as she has tasted his blood within the past month. This bonus is in addition to the 9-again benefit that lasts for a scene after each taste."
            },
            {
                "type": "paragraph",
                "text": "An Eros’ Caress implant can only hold enough blood for a single “dose” at a time. In order to use the implant again, the hunter must refill it by injecting a small amount of blood directly into the implant. The blood can be human (either the hunter’s or someone else’s) or animal, but a successful injection requires a Dexterity + Medicine roll to hit the implant."
            }
        ],
        "Action": "",
        "fullCost": "",
        "DicePool": "",
        "RollResults": [],
        "Notes": [],
    },
    {
        "Name": "Optic Thorn",
        "Rating": "•••",
        "Description": "allows user to see \"supernaturally augmented\" hunters",
        "Book": "C&C 62",
        "Content": [
            {
                "type": "paragraph",
                "text": [
                    "This implant—which pierces the optic nerve of the left eye, and only the left eye (",
                    {
                        "text": "sinister",
                        "italic": true
                    },
                    " is from ",
                    {
                        "text": "sinestra",
                        "italic": true
                    },
                    ", or Latin for “left”)—isn’t a thorn at all. It’s a tiny bone spur sculpted to look very much like a thorn. Those who have this implant generally don’t know where it comes from. If they ask or get an MRI/X-Ray, they’ll see or be told that this “thorn” was pulled from the photosynthetic flesh of a floral- or fungal-based “reality deviant” (in other words: a fae creature)."
                ]
            },
            {
                "type": "paragraph",
                "text": "Patently not true. The truth is, it’s a bone chip from another hunter. Specifically, a hunter of the Lucifuge. For the most part, the higher-ups in the Field Projects Division don’t differentiate Lucifuge hunters from demons or the demon-possessed; yes, they seem committed to carrying the Vigil, but they’re clearly supernatural, and that supernature is carried through the physical blood. If their blood is monstrous, then so is the rest of their bodies. That makes them harvest targets."
            },
            {
                "type": "paragraph",
                "text": "The bone chip is taken from around the eye socket of the Lucifuge—chipped away with a chisel, perhaps, with enough material taken so that one or several thorns can be “whittled” down from the sample. It doesn’t require the hunter be killed, of course. Bone damage, however, is not pleasant, nor does it heal easily."
            }
        ],
        "Benefit": [
            {
                "type": "paragraph",
                "text": [
                    "The FPD agent is now capable of seeing other ",
                    {
                        "text": "supernaturally-augmented",
                        "italic": true
                    },
                    " hunters for what they are. This requires no roll and is considered “always on.” This allows the Cheiron hunter to automatically see hunters of the Lucifuge and the Malleus Maleficarum. In addition, they can see hunters currently using an active Relic (Aegis Kai Doru) or those who have imbibed or ingested an Elixir (Ascending Ones). This does not help the hunter to differentiate between them—it only identifies them as a supernaturally-augmented hunter. It also fails to help the agent identify members of VALKYRIE, or any hunter of the AKD or Ascending Ones not currently using a Relic or Elixir."
                ]
            }
        ],
        "Action": "",
        "fullCost": "",
        "DicePool": "",
        "RollResults": [],
        "Notes": [],
    },
    {
        "Name": "Personal Defense Swarm",
        "Rating": "•••",
        "Description": "Charge the body with a swarm of tiny creatures that attack based on the Hunter's emotions",
        "Book": "HTV 187",
        "Content": [
            {
                "type": "paragraph",
                "text": "The Cheiron Group’s scientists still aren’t entirely sure how to explain the function of this implant, and the very nature of where it comes from remains top secret. Rumor has it that a team in Bucharest (or maybe Prague, or Vienna, or somewhere else) found some weird little monster that turned into an ugly little metal statue as soon as they caught it. They say the boys in the back room figured out what made it fall inert, and how to revive it. Then they melted it down into little ball bearings, coated the pieces with hypoallergenic aluminum, and jabbed them into hunters’ arms."
            },
            {
                "type": "paragraph",
                "text": "The tiny metal spheres are embedded in the subcutaneous tissue of the forearm. A small valve, similar to the one some dialysis patients use, is implanted near the base of the palm."
            },
            {
                "type": "paragraph",
                "text": "After the hunter comes out of recovery, he’s given a small, black satchel that contains five syringes of an extremely diluted solution of a substance rumored to be wrung from the organs of unnaturally animated corpses. Whatever that substance is, those little ball bearings feed on it. For lack of a better word, they hatch. When the hunter opens that valve in his wrist, a swarm of tiny, angry insects come boiling out and attack whatever the hunter’s mad at. The bugs look like little yellow jackets — except for the fact that each one has the exact same human face."
            }
        ],
        "Benefit": [
            {
                "type": "paragraph",
                "text": "Activating requires only a drop from the prodigious syringe, and it takes a while for the hunter to run dry. Assume each syringe is good for five activations (for a total of 25 activations per satchel). Cheiron will resupply syringes, but it can take up to two weeks (less for those with Status 3 or more in the conspiracy)."
            },
            {
                "type": "paragraph",
                "text": "The swarm of insect-creatures spawned by this implant has a rudimentary connection to their host’s neurological systems. While they cannot be communicated with or controlled directly, they recognize their host’s feelings of anger and hostility, and will attack targets that trigger those emotions. (It’s best to be careful with this. One story making the Cheiron rounds tells of a hunter who found out his partner was having an affair with his wife. Their cell faced off against some shambling thing made of tatters and rags and grief given form, and our cuckolded lover let loose his PDS — which promptly killed the hell out of his cheating partner while the monster mopped up the rest of the cell.) The swarm only retains this connection while it is inert and implanted in the host; thus, it’s wisest to wait until a fight begins to activate this Endowment. The swarm attacks creatures in order of the intensity of the aggression they provoke in the host, and focuses its attack on one enemy at a time until its target is dead or driven off. The swarm never strays more than 10 yards from its host."
            },
            {
                "type": "paragraph",
                "text": "The swarm has a radius of four yards (see the sidebar on this page) and inflicts bashing damage. It moves at a Speed of 10. The swarm remains active for 10 turns, then immediately returns to its host and squeezes back into the valve before falling inert again. If the swarm is unable to return to its host, it returns to its inert state and falls to the ground. Provided at least three quarters of the ball bearings can be recovered, they can be re-implanted with no roll (simply plug the bearings back into the shunt)."
            },
            {
                "type": "paragraph",
                "text": "Should the swarm take damage sufficient to reduce it to less than one yard in radius, the remaining insects flee back to their host. Cheiron Group doctors insist that once the swarm goes inert, it falls completely lifeless, but that doesn’t explain the fact that the things can repopulate themselves. It takes one full day of remaining inert (i.e., the hunter does not activate this Merit) to increase a depleted swarm’s size by one yard radius. The swarm can be activated at less than full size, if desired."
            }
        ],
        "Action": "",
        "fullCost": "1 drop from the prodigious syringe",
        "DicePool": "",
        "RollResults": [],
        "Notes": [
            {
                "type": "heading",
                "text": "SWARMS",
                "level": 3
            },
            {
                "type": "paragraph",
                "text": "Animals of Size 1 or 2 are generally best represented in swarms, flocks and other groupings of the animals, as they are most effective in such groupings. This includes not just insects, but also most birds and smaller creatures such as rats."
            },
            {
                "type": "paragraph",
                "text": "Swarms are measured by their size in yards radius. A swarm generally inflicts one die of bashing damage to anyone within its radius. A swarm can inflict more damage by condensing. Every time the swarm condenses to cover half its full area, it inflicts one additional die of damage per turn."
            },
            {
                "type": "paragraph",
                "text": "Therefore, a swarm of eight yards in radius inflicts 2 bashing damage per turn if it constricts down to a four-yard radius, 3 bashing if it halves that again to a two-yard radius, and 4 bashing damage per turn it if condenses itself down to a one-yard radius. Though condensing doesn’t usually happen all that often in nature (save in the case of creatures such as killer bees), it is an easy enough thing for most supernatural powers that command animals to bid them to do so."
            }
        ],
    },
    {
        "Name": "Plasmic Caul",
        "Rating": "••••",
        "Description": "see ghosts in Twilight, gain +1 to any roll involved with them, and spend one Willpower for a \"secondary\" effect.",
        "Book": "C&C 64",
        "Content": [
            {
                "type": "paragraph",
                "text": [
                    "Some ghosts are… different. Cheiron has yet to identify exactly ",
                    {
                        "text": "why",
                        "italic": true
                    },
                    " they’re different, but what they do know is that they tend to be: a) more powerful; b) without a human identity (while possessing an identity that is more archetypal than anything); and c) able to forge some kind of symbiotic bond with a human."
                ]
            },
            {
                "type": "paragraph",
                "text": "Cheiron also recognizes that these things can be “killed,” in a manner of speaking, and destroying them seems to leave behind a physical artifact—some displacement of matter, perhaps, or some object manifestation of ectoplasmic residue. The artifact might be a sliver of wood, an ivory horn, a bezoar stone, even a set of gold teeth. Many even have faces (or parts of faces) imprinted into them, as if pushing through from “the other side.”"
            },
            {
                "type": "paragraph",
                "text": "The fine doctors of the Field Projects Division have learned how to break these objects apart and implant a “seed” of the original object into the thalamus of one of their Thaumatechnology-endowed hunters. In theory, it should be a huge benefit for Cheiron employees. In theory…"
            }
        ],
        "Benefit": [
            {
                "type": "paragraph",
                "text": [
                    "This is all a little ",
                    {
                        "text": "new",
                        "italic": true
                    },
                    " to the doctors. The problem is, they don’t really know what the final end result of the implantation process will be. Two things are certain: one, it offers the hunter the ability to see ghosts that are concealed in the state of Twilight, and two, it grants them +1 dice on any roll made regarding a ghost (communication, exorcism, attack, etc.)."
                ]
            },
            {
                "type": "paragraph",
                "text": "Beyond that, the results are… unpredictable. The hunter gains a secondary effect by spending a point of Willpower (and the effect lasts for the remainder of one scene). An ectoplasmic caul forms over the hunter’s face, and the caul reacts to the world in specific ways, manifesting specific effects."
            },
            {
                "type": "paragraph",
                "text": "Players should choose one effect below from the following list (though, if the Endowment is installed during the story, the player is encouraged to allow the Storyteller to determine the ability, instead):"
            },
            {
                "type": "line",
                "label": "Blood",
                "text": "Those within ten feet of the hunter suffer stigmata bleeding (hands, side, forehead). This causes either one point of Willpower loss to all of them, or two points of bashing damage (the player chooses)."
            },
            {
                "type": "line",
                "label": "Dirt",
                "text": "The caul leaks runny mud and clods of clay that smell of the grave. In one turn, it covers the hunter’s body for the most part—and offers two dots of armor against incoming bashing and lethal attacks."
            },
            {
                "type": "line",
                "label": "Emotion",
                "text": "Whatever the hunter is feeling at that moment, so is everybody else near to him (within 50 feet). They possess the exact same emotion. They gain +3 Empathy on all rolls made on one another."
            },
            {
                "type": "line",
                "label": "Fire",
                "text": "The hunter is protected from all fire damage for the remainder of the scene."
            },
            {
                "type": "line",
                "label": "Howl",
                "text": "The caul is capable of emitting a screeching primal howl—the hunter must roll Strength + Presence. Successes gained on the roll equal a penalty to Perception for all who hear the howl (excepting the hunter herself). In addition, it does one point of bashing damage to them, as well."
            },
            {
                "type": "line",
                "label": "Hush",
                "text": "A zone of silence surrounds the hunter in a space equal to a radius of five feet around her. Any Stealth rolls based on sound within this space gain +5 dice, as do any attempts to surprise within this zone."
            },
            {
                "type": "line",
                "label": "Sight",
                "text": "The hunter is capable of seeing things in ways nobody else likely will; any success on a sight-based Perception roll is considered an exceptional success."
            },
            {
                "type": "line",
                "label": "Static",
                "text": "The hunter emits a static discharge from the caul. Any electronic objects within five feet of his face cease to work for 24 hours."
            },
            {
                "type": "line",
                "label": "Water",
                "text": "The hunter can hold his breath underwater for one full scene."
            },
            {
                "type": "line",
                "label": "Wind",
                "text": "A sharp, cold, inconsistent wind whips around the hunter, carrying with it all manner of debris. It adds two to the hunter’s Defense for the scene."
            }
        ],
        "Action": "",
        "fullCost": "1 Willpower",
        "DicePool": "",
        "RollResults": [],
        "Notes": [],
    },
    {
        "Name": "Quick-Step",
        "Rating": "•••",
        "Description": "+3 Speed, 9-Again on Athletic checks involving running or moving quickly, and retains Defense against Firearms while running",
        "Book": "HTV 188",
        "Content": [
            {
                "type": "paragraph",
                "text": "The Cheiron Group expects nothing less than success from its field agents. The Group’s continued research success relies on monsters being brought in alive (well, intact, at any rate) for study and harvest. But science is a pragmatic study, and the Cheiron board of directors knows that sometimes you just have to get the hell away and live to fight again. To that end, they developed the Quick-Step. Half-manufactured, half-grown from the ligaments of swiftly running monsters (werewolves, some vampires, certain demonic entities), Quick-Steps give even an ordinary man the ability to shatter Olympic records. It might even be enough to let him get away from the things in the shadows."
            }
        ],
        "Benefit": [
            {
                "type": "paragraph",
                "text": "A character with a Quick-Step implant gets a +3 bonus to his Speed. This bonus stacks with the bonus from Fleet of Foot, if applicable. In addition, the hunter gains the benefit of the 9-again rule on any Athletics rolls related to moving quickly, such as foot chases. Finally, if the character runs (moving double his Speed in a single turn), he may retain his Defense against firearms attacks."
            }
        ],
        "Action": "",
        "fullCost": "",
        "DicePool": "",
        "RollResults": [],
        "Notes": [
            {
                "type": "paragraph",
                "text": [
                    {
                        "text": "Special:",
                        "bold": true
                    },
                    " Using the Quick-Step quickly fatigues the character. Every turn in which he uses the 9-again benefit on Athletics rolls or moves more than his Speed counts as three hours without rest (see ",
                    {
                        "text": "The World of Darkness Rulebook",
                        "bold": true
                    },
                    ", p. 179). Apply this fatigue at the end of the current scene, and only roll Stamina + Resolve to stay awake once. For example, if a hunter has been awake for 12 hours, then engages in a six-turn foot chase during which he gains the 9-again rule on Stamina + Athletics rolls, he is treated as though he has been awake for 30 hours. He must roll Stamina + Resolve at a -1 penalty or immediately fall asleep, and he suffers a -1 penalty to all dice pools until he sleeps for nine hours."
                ]
            },
            {
                "type": "paragraph",
                "text": "The character may choose not to gain the 9-again rule on his actions if he wishes to avoid the fatigue."
            }
        ],
    },
    {
        "Name": "Twitcher",
        "Rating": "••••",
        "Description": "Use higher of Wits or Dexterity for Defense and lower of Wits or Dexterity for surprise attacks",
        "Book": "HTV 189",
        "Content": [
            {
                "type": "paragraph",
                "text": [
                    "It looks harmless enough — like a little stick bug made out of wires and protein sacs filled with a pink goo. It wriggles a little bit when disturbed, even before it’s implanted. When they stick it in the base of your spine, it curls around your spinal column and nests there, pumping pure nervous energy into you. When your life is in danger, it twitches, massaging your spinal cord and ramping your reflexes up to a terrifying degree. That’s ",
                    {
                        "text": "almost",
                        "italic": true
                    },
                    " worth the nightmares, and the crushing sense of paranoia that comes along with them."
                ]
            }
        ],
        "Benefit": [
            {
                "type": "paragraph",
                "text": [
                    "A character with a Twitcher implant uses the ",
                    {
                        "text": "higher",
                        "italic": true
                    },
                    " of his Wits or Dexterity to determine his Defense, instead of the lower of the two. When surprised, or attacked by an unseen foe, the hunter uses the lower of his Dexterity or Wits as Defense, even though a normal person would be denied Defense completely. The Twitcher has no effect on Firearms attacks except at point blank range."
                ]
            }
        ],
        "Action": "",
        "fullCost": "",
        "DicePool": "",
        "RollResults": [],
        "Notes": [
            {
                "type": "paragraph",
                "text": [
                    {
                        "text": "Special:",
                        "bold": true
                    },
                    " Each night when a character with a Twitcher implant goes to sleep, he must roll Resolve + Composure versus the implant’s dot rating (4 dice). If the character earns more successes, he sleeps peacefully and regains a point of Willpower as normal. If the implant gets more successes, his sleep is wracked with nightmares of being endlessly hunted, always a hair’s breadth away from death. These nightmares prevent the hunter from regaining a point of Willpower from restful sleep."
                ]
            },
            {
                "type": "paragraph",
                "text": "In addition, any time the character is surprised in combat, he must succeed on a Morality roll or develop a temporary Suspicion derangement that lasts for the rest of the scene. If the character already has this derangement, it temporarily becomes a Phobia instead."
            }
        ],
    },
    {
        "Name": "Regenerative Nodule",
        "Rating": "••••",
        "Description": "Must also spend a Willpower to activate. Heal Lethal and Bashing damage at the speed of a Werewolf.",
        "Book": "HTV 189",
        "Content": [
            {
                "type": "paragraph",
                "text": "As good as the Cheiron Group’s doctors are, they aren’t even close to the recuperative abilities of some of the monsters they track down. Werewolves in particular are obscenely fast healers — so fast, in fact, that sometimes their bodies overcompensate and form little cysts that Cheiron Group medics have termed “regenerative nodules.” As far as the wolves know, they’re harmless, but Cheiron got hold of a few through some very questionable means, and now the boys in the back room have figured out how to harness the things’ potential and turn it loose on the human body."
            },
            {
                "type": "paragraph",
                "text": "A Regenerative Nodule looks like a rubbery lump of scar tissue the size of a golf ball. Before they put it in you, Cheiron scientists put a little plastic shunt into the core of the nodule — a tricky proposition since the incision heals over almost instantly. When it’s sewn into the lining of your gut, it’s almost invisible, even though you can still feel the lump. Give that lump a press, and the shunt puckers open and dumps into your system pure…well, whatever the hell makes werewolves heal so fast."
            }
        ],
        "Benefit": [
            {
                "type": "paragraph",
                "text": "In addition to pressing on the lump of the implant, the character must spend a Willpower point to activate the Nodule. Once activated, the nodule heals the character’s injuries at a terrifying rate: one point of bashing damage heals every turn, while one lethal wound disappears every 15 minutes. This healing is reflexive, and the accelerated healing rate lasts until all bashing and lethal wounds have been healed. Once the character’s Health boxes are entirely free of bashing or lethal wounds, the Regenerative Nodule is completely spent. It falls inert and cannot be activated again for one week."
            },
            {
                "type": "paragraph",
                "text": "The Regenerative Nodule has no affect on aggravated damage."
            }
        ],
        "Action": "",
        "fullCost": "1 Willpower",
        "DicePool": "",
        "RollResults": [],
        "Notes": [
            {
                "type": "paragraph",
                "text": [
                    {
                        "text": "Special:",
                        "bold": true
                    },
                    " Werewolves draw the energy to heal themselves from some as-yet-unknown metaphysical source. Ordinary people, lacking such a source, must fuel the regeneration with their own bodies. Every point of bashing damage the Nodule heals counts as one day without food. Every lethal wound healed counts as one day without food ",
                    {
                        "text": "or",
                        "italic": true
                    },
                    " water (see ",
                    {
                        "text": "The World of Darkness Rulebook",
                        "bold": true
                    },
                    ", pp. 175–176). If the character suffers damage from this deprivation, the Regenerative Nodule does not (and ",
                    {
                        "text": "cannot",
                        "italic": true
                    },
                    ") heal it, and still shuts down after all wounds ",
                    {
                        "text": "not",
                        "italic": true
                    },
                    " inflicted by deprivation are healed. Many hunters, while healing, eat voraciously to try to stave off damage from deprivation. Doing so necessitates the hunter gorge on food and liquid ",
                    {
                        "text": "constantly",
                        "italic": true
                    },
                    " (doing nothing else during the healing time) and without interruption."
                ]
            }
        ],
    },
    {
        "Name": "Voice of the Banshee",
        "Rating": "• or •••",
        "Description": "At the cost of 1WP, make a bashing attack with Stamina+Expression against all creatures with enhanced hearing that also disrupts their concentration. The upgraded version also afflicts those affected with the Depression or Melancholia derangement",
        "Book": "NS 148",
        "Content": [
            {
                "type": "paragraph",
                "text": "Mythology is full of wailing creatures whose voices either lure or unnerve any who hear it (think of the Sirens or Bean Sidhes). Often these creatures are beautiful from afar, but dreadful to approach and they often portend death. These terrible creatures may well be rare off-shoots of the vampire genealogic tree as they’ve been witnessed preying on desire, breath, or age. When a field agent came across one of these mysterious wailing women of legend—washing what looked to be a Cheiron Group issue field jacket in the Thames—she was quick to tranq it for the fat bonus she knew she could earn. Shame she was struck by a bus only two days after telling the story to the man who came by to pick up the carcass and deliver the check. The Cheiron Group successfully extracted the vocal chords from a rare few of these specimens and found use for them in the field."
            }
        ],
        "Benefit": [
            {
                "type": "paragraph",
                "text": "The stringy tendons of the vocal chords allow the recipient to make a high-pitched keen just outside the range of human hearing. She emits a sub-aural wave of sound that will agitate animals and deafen anyone using supernaturally enhanced senses."
            }
        ],
        "Action": "Instant",
        "fullCost": "1 Willpower",
        "DicePool": "Stamina + Expression",
        "RollResults": [
            {
                "type": "line",
                "label": "Dramatic Failure",
                "text": "The hunter strains herself trying to swallow her tongue and force the sound from her throat. She suffers two points of bashing damage and spends the turn hoarsely retching. Her voice is reduced to a whisper for approximately 24 hours."
            },
            {
                "type": "line",
                "label": "Failure",
                "text": "The hunter can’t muster the will necessary to emit such sound."
            },
            {
                "type": "line",
                "label": "Success",
                "text": [
                    "The hunter successfully emits a shrill keening wail. Animals, vampires and other creatures with heightened senses cannot concentrate for the racket, suffering a penalty to all actions for as many turns as the hunter has breath (the hunter can continue uninterrupted for as many turns as she has dots in Stamina or end the effect prematurely if she so chooses). In addition, those affected suffer bashing damage equal to the number of successes gained to active the Endowment. Normal humans are generally untouched by the effects of this implant. If the hunter possesses the three-dot version, those affected as above also suffer the effects of the Depression or Melancholia derangements (p. 97, ",
                    {
                        "text": "World of Darkness Rulebook",
                        "bold": true
                    },
                    ") for the remainder of the scene."
                ]
            },
            {
                "type": "line",
                "label": "Exceptional Success",
                "text": "The wail is so damaging that all objects within ten yards of the hunter suffer one point of Structure damage."
            }
        ],
        "Notes": [
            {
                "type": "table",
                "title": "Suggested Modifiers",
                "headers": [
                    "Modifier",
                    "Situation"
                ],
                "rows": [
                    [
                        "+1",
                        "Area is totally silent"
                    ],
                    [
                        "-2",
                        "Loud place like factory or dance club"
                    ]
                ]
            }
        ],
    },
    {
        "Name": "Weapon of Last Resort",
        "Rating": "• or •••",
        "Description": "Gain either Lethal Brawl attacks or a 1L bite attack. Upgraded version receives both",
        "Book": "HTV 186",
        "Content": [
            {
                "type": "paragraph",
                "text": "One of the basic survival tips any hunter will give you is “never go unarmed.” Thanks to an advanced study of vampiric dentition and the natural weaponry of a variety of monsters, the Cheiron Group has been able to extend this maxim to any of its agents. Whether it’s an implant of weird, razor-sharp fingertips of some unearthly metal or jagged fangs ripped from the maw of a gibbering servitor demon, a Weapon of Last Resort can save an agent’s life or deflect investigation of a mysterious death (“She was just ripped apart, like a bear got her or something.”) As an added benefit, the natural weapons of this Endowment are easily concealable and can be taken into restricted areas."
            }
        ],
        "Benefit": [
            {
                "type": "paragraph",
                "text": "The hunter gains either a claw attack that allows her to make Brawl attacks that inflict lethal damage, or a bite attack that inflicts 1(L). If the character opts for the bite attack, he must successfully grapple first. For two dots, he gains both attacks."
            }
        ],
        "Action": "",
        "fullCost": "",
        "DicePool": "",
        "RollResults": [],
        "Notes": [
            {
                "type": "paragraph",
                "text": [
                    {
                        "text": "Special:",
                        "bold": true
                    },
                    " Characters trying to detect a Weapon of Last Resort that is not actively being used may make a Wits + Composure roll at a -4 penalty. If the inspecting character has reason to suspect the hunter might have biological modifications of this sort (for example, he’s seen this Endowment before or has crossed paths with vampires or the like), the penalty drops to -2."
                ]
            }
        ],
    }
]

const teleinformaticsOverviewData = {
    "Name": "Teleinformatics",
    "Book": "Slash 166",
    "Content": [
        {
            "type": "line",
            "label": "Prerequisite",
            "text": "Status (VASCU)"
        },
        {
            "type": "paragraph",
            "text": "Agents of the Vanguard Serial Crimes Unit augment their investigative abilities with strange powers of the mind — the end result of the mysterious Wintergreen Process. The process doesn’t just awaken the latent abilities in the human mind, it actively alters the brain. Agents go through hallucinations and alien visitations as their powers awaken, all of which allude to the Process modifying them. Most put the experience to the back of their minds. Each new power comes after a supplemental therapy, another dose of bizarre mind-altering chemicals. Only agents who investigate VASCU itself know anything about the truth behind Teleinformatic powers: that they’re an extension of their brains’ ability to process information."
        },
        {
            "type": "paragraph",
            "text": "VASCU doesn’t categorize Teleinformatic powers in the same way as a psychic investigator might. The unit doesn’t care whether a particular power is telekinetic or telepathic in nature. Being a department of the FBI, the unit cares about how the powers fit into the general realm of investigation. They divide an agent’s abilities depending on which area of fieldwork the power enables. Interview abilities may read a subject’s mind or force him to answer questions he doesn’t want to answer. Investigation powers allow the hunter to work a crime scene in seconds. Research abilities give the hunter background information to help build his case."
        },
        {
            "type": "paragraph",
            "text": "Unlike most Endowment Merits, but similar to the Safehouse Merit, Teleinformatics abilities are broken into three spheres of abilities: Interview, Investigation, and Research. When purchasing a new dot in the Merit, a character gains one power of that rating or below from any sphere. A character purchasing a four-dot power must already have one power from the same sphere. A character purchasing a five-dot power must possess at least two powers from the same sphere. Note that a character can pick any power that augments his investigation style when he gains the new dot, the player doesn’t have to plan his powers in advance."
        },
        {
            "type": "paragraph",
            "text": [
                {
                    "text": "Example:",
                    "bold": true,
                    "italic": true
                },
                {
                    "text": " Special Agent Hosell has three dots in Teleinformatics. He’s able to use Just One More Thing, Polygraph, and Speed of Thought. His player buys the fourth dot of Teleinformatics, and casts his eye over the possibilities. He could pick another power rated at three or fewer dots, but none really fit his concept. He can select Postcognition or The Talon, but he’s not got any Research powers and so Tag is out of the running. If he picks Postcognition he could later choose his fifth dot power from either Tactical Coordination or Hall of Mirrors, but if he selects The Talon then his only possible five-dot power will be Tactical Coordination.",
                    "italic": true
                }
            ]
        },
        {
            "type": "paragraph",
            "text": "Most Teleinformatics powers require agents to take damage in order to use them. Bashing damage comes in the form of migraines or nosebleeds as the agent’s body tries to keep up with her brain’s demands. Lethal damage is more severe: the agent hemorrhages from her eyes and ears as she forces her body beyond its limits. Aggravated damage signifies lesions on the brain that require delicate surgery to fix. An agent can spend one point of Willpower to downgrade that damage, but only if the power doesn’t already require a Willpower expenditure. Aggravated damage becomes lethal, and lethal becomes bashing. Bashing damage cannot be downgraded in this fashion."
        },
        {
            "type": "heading",
            "level": 2,
            "text": "NATURAL PSYCHICS"
        },
        {
            "type": "paragraph",
            "text": "Second Sight offers Merits for characters who discover natural psychic abilities. Teleinformatics, being artificially induced, don’t have the same source and don’t share the same systems. But what about VASCU agents who have psychic abilities before they join the unit?"
        },
        {
            "type": "paragraph",
            "text": "As a Storyteller, you’ve got a few options. VASCU’s psychic latency tests might look for indicators that real psychic talents hide. If this is the case, no psychic could end up in Vanguard. If Vanguard doesn’t have that level of understanding, the Wintergreen Process might alter the brain enough to “lock out” a natural psychic’s powers - though she might come out the other side with more power than other agents. And there’s always the possibility, though it’s an outside bet, that the agent keeps his inborn powers alongside his Teleinformatic abilities."
        },
        {
            "type": "paragraph",
            "text": "If you do opt to remove a character’s psychic Merits, talk with the player. Some will be fine with losing the Merit dots that they’ve invested. Others will understandably want something in return. Give the character half the experience points required to purchase her psychic Merits anew."
        }
    ]

}

const teleinformaticsData = [
    {
        "Name": "Interview",
        "Description": "Interrogation and social-reading techniques that help an agent ask the right question, test sincerity, or coordinate minds.",
        "Book": "Slash 166",
        "Content": [
            {
                "type": "paragraph",
                "text": "Teleinformatic abilities that boost an agent’s interviewing skills are what most people think of as psychic powers. Rather than boosting an agent’s own abilities, these powers can read the information from other people’s minds. The highest echelons bridge the barrier between mind and matter to get a suspect to spill his guts. Though she picks up the mental echoes of other people’s minds, affecting those minds is significantly harder, broad attacks wielded without finesse. Unlike psychics in books or on television, she cannot guide or sway a person’s thoughts. She makes up for that with sheer mental force, directing crushing emotional pressure against her suspects."
            }
        ],
        "Ranks": [
            {
                "Name": "Just One More Thing",
                "Rank": "•",
                "Cost": "1B",
                "Dice Pool": "Teleinformatics+Subterfuge",
                "Description": "Discover just the right question to ask the suspect",
                "Book": "Slash 166",
                "Content": [
                    {
                        type: "paragraph",
                        text: "There’s always one question that a suspect doesn’t want anyone to ask. An interview is a stressful time, and that question bubbles up to the surface of the suspect’s thoughts. If the agent concentrates, he can listen out for a phrase in his mind’s ear, along with an empathic twinge of guilt. When he hears it, he knows just what to ask."
                    }
                ],
                "fullCost": "1 point of bashing damage",
                "Action": "Instant",
                "DicePool": "Teleinformatics + Subterfuge",
                "RollResults": [
                    {
                        label: "Dramatic Failure",
                        text: "The agent hears something along with a pang of guilt, but he’s not hearing it from the suspect. The Storyteller should give her two or three words relating to a guilty secret of another character in the same area. Further rolls to interview the suspect suffer a -2 modifier."
                    },
                    {
                        label: "Failure",
                        text: "The agent doesn’t hear anything useful."
                    },
                    {
                        label: "Success",
                        text: "The agent hears two or three words, but it’s up to him to work them into a question. The Storyteller should furnish the character with a two or three word prompt. Any roll involving questioning the suspect on that subject gets an additional +2 bonus."
                    },
                    {
                        label: "Exceptional Success",
                        text: "The agent hits just the right question. The bonus increases to +3."
                    }
                ],
                "Notes": [],
            },
            {
                "Name": "Polygraph",
                "Rank": "••",
                "Cost": "○, 1B",
                "Dice Pool": "Teleinformatics+Persuasion vs. Stamina+Resolve",
                "Description": "Gain a bonus to all interrogation rolls equal to successes and double the bonus on Empathy and Subterfuge rolls meant to sniff out a lie",
                "Book": "Slash 167",
                "Content": [
                    {
                        type: "paragraph",
                        text: "Sometimes, asking the right question isn’t enough. By tuning in to the same frequency as her suspect, an agent can read the emotions straight from the surface of his target’s mind. While it’s hard to direct an interview based just on the subject’s emotional state, listening out for specific instances of guilt and shame when asking questions or stating how the agent believes things happened is a damn fine way to detect a witness’s lies."
                    },
                    {
                        type: "paragraph",
                        text: "This power is used to enhance an Interrogation task (see the World of Darkness Rulebook, p. 81). The agent using this power enhances his ability as the interrogator."
                    }
                ],
                "fullCost": "1 Willpower + 1 point of bashing damage",
                "Action": "Contested; resistance is reflexive",
                "DicePool": "Teleinformatics + Persuasion vs. target’s Stamina + Resolve",
                "RollResults": [
                    {
                        label: "Dramatic Failure",
                        text: "The agent misreads his subject, seeing guilt when none is really present. He suffers a -1 modifier on his first roll, a -2 on his second, and so on until the interrogation is over."
                    },
                    {
                        label: "Failure",
                        text: "The agent doesn’t tune in to his subject’s emotions."
                    },
                    {
                        label: "Success",
                        text: "The agent senses spikes of guilt, fear, and shame — or deceit, or even pride. Whatever he senses, he knows how it relates to the questions he asked. The character gains a bonus to all Interrogation rolls equal to the successes gained over the subject. This bonus lasts for the rest of the scene. This bonus is doubled on any Subterfuge or Empathy rolls meant to sniff out a lie."
                    },
                    {
                        label: "Exceptional Success",
                        text: "The psychic interrogation provides a paroxysm of pleasure: the character regains the spent Willpower."
                    }
                ],
                "Notes": [],
            },
            {
                "Name": "Synchronization",
                "Rank": "•••",
                "Cost": "○, 1L",
                "Dice Pool": "Teleinformatics+Empathy-subject’s Resolve",
                "Description": "Copy the subject's mind",
                "Book": "Slash 167",
                "Content": [
                    {
                        type: "paragraph",
                        text: "VASCU psychics go beyond just reading emotions and snippets of thought. The agency maintains a number of empaths, people who can read a subject’s mind so thoroughly that they share the subject’s thoughts and memories. In effect, the agent makes a copy of the subject’s mind within his own. It’s a dangerous process, but the easiest way to get answers from dangerous slashers — including “Why did you kill them?” and “Where are the missing children?”"
                    },
                    {
                        type: "paragraph",
                        text: "Due to the effects of a dramatic failure, the Storyteller should make the roll for this power."
                    }
                ],
                "fullCost": "1 Willpower + 1 point of lethal damage",
                "Action": "Instant",
                "DicePool": "Teleinformatics + Empathy minus subject’s Resolve",
                "RollResults": [
                    {
                        label: "Dramatic Failure",
                        text: "The agent gets in synch with her suspect’s mind, but a part of her target lurks within her mind even after the contact is over, biding its time until it takes control of the agent. The agent maintains contact initially as if she had rolled three successes. Every day over the course of the following week after the contact is made, the Storyteller should roll the target’s Presence + Resolve in an extended action. Once the Storyteller rolls more successes than the agent’s Resolve + Composure, the target’s mind takes control of the agent’s body for one day per dot of the target’s Willpower. When the target is in control, the player has two options. She may relinquish control of her character to the Storyteller for the duration, so as to remain ignorant of whatever her character has done. Alternately, the Storyteller and player may work together so that the player can portray the “possessed” agent."
                    },
                    {
                        label: "Failure",
                        text: "The agent can’t get synchronized with the subject’s mind."
                    },
                    {
                        label: "Success",
                        text: "The agent copies the subject’s mind. Each success gives the agent enough time to answer one question posed by herself or another character. The Storyteller should provide the answer, along with enough context for the answer to make sense. In between questions, the agent experiences life as the subject does. She suffers the same negative modifiers as the suspect, as well as any derangements that the suspect possesses. The “copy” of the slasher’s persona exists for a number of hours equal to the slasher’s Resolve score. During this time, the character may experience certain elements of the slasher’s persona, even down to physical maladies (if the slasher has an atrophied left arm, the agent’s own arm may grow rigid and useless — not atrophied, but physically without much use during that time)."
                    },
                    {
                        label: "Exceptional Success",
                        text: "In addition to the effects of a success, the agent can attempt to record one Skill that the subject possesses. His player “trades in” a number of successes on his roll equal to the rating of the Skill he wants to borrow. The “borrowed” Skill lasts for a number of hours equal to the slasher’s Resolve score; if the agent doesn’t have any dots in that Skill herself then her rolls using it do not benefit from 10-again."
                    }
                ],
                "Notes": [],
            },
            {
                "Name": "The Talon",
                "Rank": "••••",
                "Cost": "1L",
                "Dice Pool": "Teleinformatics+Intimidation-Composure",
                "Description": "Each success gives the target a -1 on all Mental and Social rolls",
                "Book": "Slash 167",
                "Content": [
                    {
                        type: "paragraph",
                        text: "Focusing her power, the agent disrupts her target’s thoughts. She focuses on a point or talon slowly pressing into her victim’s head. It seeks out sources of guilt and shame, flaring those emotions without any stimulus. The attack scares its target, making him more liable to tell the truth when the agent asks a question."
                    }
                ],
                "fullCost": "1 point of lethal damage",
                "Action": "Instant",
                "DicePool": "Teleinformatics + Intimidation minus subject’s Composure",
                "RollResults": [
                    {
                        label: "Dramatic Failure",
                        text: "The talon rebounds from the target’s mind and embeds itself in the agent’s mind. Her rolls suffer a -2 modifier for the remainder of the scene."
                    },
                    {
                        label: "Failure",
                        text: "The agent can’t focus clearly enough to manifest this power."
                    },
                    {
                        label: "Success",
                        text: "The point of pressure works its way through the target’s mind. Each success on the activation roll inflicts a -1 penalty on any Mental or Social rolls that the target makes (to a maximum of -5). This penalty lasts until the end of the scene. If the agent makes a show of using this power in an interrogation, she gains two bonus dice on related rolls."
                    },
                    {
                        label: "Exceptional Success",
                        text: "The talon pricks the subject’s pain centers on its way through his brain. In addition to the effects of a success, the target takes two points of bashing damage."
                    }
                ],
                "Notes": [],
            },
            {
                "Name": "Tactical Co-Ordination",
                "Rank": "•••••",
                "Cost": "○, 1L",
                "Dice Pool": "Teleinformatics+Brawl- # of other agents",
                "Description": "Link minds with others and all members get bonuses on Skills for each member with a higher rating",
                "Book": "Slash 168",
                "Content": [
                    {
                        type: "paragraph",
                        text: "Some VASCU agents develop incredible telepathic abilities. By developing a working duplicate of their teammates’ minds, this allows them to predict what their allies will do. She can use this duplicated mind model to communicate with her teammates. Some agents liken the effect to rumors of “twins’ telepathy,” though nobody’s yet demonstrated that effect to anyone’s satisfaction. These agents are too useful for VASCU to leave behind. Rumor has is that one such agent had his brain transferred to a life-support system because his cell was too used to their instantaneous communication."
                    },
                    {
                        type: "paragraph",
                        text: "The dice pool to activate this power is reduced by one per character that the agent wishes to network, excluding herself."
                    }
                ],
                "fullCost": "1 Willpower + 1 point of lethal damage",
                "Action": "Instant",
                "DicePool": "Teleinformatics + Brawl -1 per other agent",
                "RollResults": [
                    {
                        label: "Dramatic Failure",
                        text: "The agent’s mental models intermix, sending the wrong signals to the wrong minds. Every agent that would have been linked suffers a -2 modifier to all rolls from psychic static until the end of the scene."
                    },
                    {
                        label: "Failure",
                        text: "The agent cannot link her allies’ minds."
                    },
                    {
                        label: "Success",
                        text: "While the agent focuses, her team benefits from her network. Members can communicate instantly and silently as a reflexive action. Like using radios, all members of the mind-link can hear anything that another linked mind “says.” In addition, the team can share their Skills. Any time an agent needs to make a roll, she gains a +1 bonus for every member of the link who possesses the same Skill at a higher rating. The link works in a radius of 50 yards per dot of Willpower centered on the agent using this power, and lasts for five minutes per success or until the agent loses consciousness. The level of concentration required to maintain the link means the agent cannot apply her Defense on the turn that she activates this power."
                    },
                    {
                        label: "Example",
                        text: "Agents Partridge, Quire, and Rooney are participating in a mental link. Partridge is cornered by a slasher. As he’s not a full agent, Partridge isn’t used to his own gun — he’s only got one dot of Firearms. Fortunately, Quire spends his time off at the range (Firearms 2) and Rooney’s been through full Special Agent training (also Firearms 2). Partridge makes his roll with a two-dice bonus."
                    },
                    {
                        label: "Exceptional Success",
                        text: "The agents’ minds link together smoothly. The psychic doesn’t lose her Defense when activating the power, and the link remains up for the duration rolled even if the agent is unconscious — as long as she’s still alive."
                    }
                ],
                "Notes": [],
            }
        ]
    },
    {
        "Name": "Investigation",
        "Description": "Crime-scene and situational analysis techniques that extract meaning from objects, places and possible outcomes.",
        "Book": "Slash 169",
        "Content": [
            {
                "type": "paragraph",
                "text": "Investigatory abilities heighten an agent’s ability to read a crime scene — or any location — and understand what happened there. All Investigation powers rely on pure information processing rather than actually sending an agent’s senses through time. As such, while she may pick up on hints and evidence that she’s not consciously recognized, if there’s absolutely no evidence of something occurring at a scene then she will not know that it happened. Note that this limitation is rare — modern forensic science demonstrates that it’s nearly impossible to destroy all evidence without leaving a trace."
            }
        ],
        "Ranks": [
            {
                "Name": "Psychometry",
                "Rank": "•",
                "Cost": "1B",
                "Dice Pool": "Teleinformatics+Crafts",
                "Description": "Understand an object",
                "Book": "Slash 169",
                "Content": [
                    {
                        type: "paragraph",
                        text: "By holding an object in his hand, an agent can understand both its form and its function. He can tell the specific brand of a condom, knows if a briefcase has a hidden compartment, and instinctively understands when someone last fired a gun. His ability doesn’t limit itself to man-made objects — while dipping his finger in a pool of blood won’t give him the victim’s name, he knows her blood type, and will instinctively know if he ever encounters it again. Likewise, he can match fingerprints between two objects through this power, rather than waiting for a crime-lab. Using this power requires an agent to make skin contact with the object, potentially destroying any fingerprints and polluting DNA evidence. He suffers a -1 penalty for every point of Size that the object has above 2."
                    }
                ],
                "fullCost": "1 point of bashing damage",
                "Action": "Instant",
                "DicePool": "Teleinformatics + Crafts",
                "RollResults": [
                    {
                        label: "Dramatic Failure",
                        text: "The agent wipes all psychic traces from the item. He doesn’t read anything from the item and cannot use this power on it again."
                    },
                    {
                        label: "Failure",
                        text: "The agent gets nothing from the object."
                    },
                    {
                        label: "Success",
                        text: "The agent understands what the object is and when it was last used for its intended purpose. The Storyteller should furnish any relevant details, which may provide a +2 bonus to later Investigation rolls. If he uses this power on two objects carrying the same person’s fingerprints, he knows that they were used by the same person — but not who that person was. He can’t just shake the guy’s hand to confirm his suspicion."
                    },
                    {
                        label: "Exceptional Success",
                        text: "The agent’s instinctively understands the object. If he comes across another of the same type — blood from the same person, a used condom of the same brand — while using any other Teleinformatics power, he automatically knows that the two items are related."
                    }
                ],
                "Notes": [],
            },
            {
                "Name": "Scene Read",
                "Rank": "••",
                "Cost": "1B",
                "Dice Pool": "Teleinformatics+Investigation",
                "Description": "Normal investigation of a scene at instant speed",
                "Book": "Slash 169",
                "Content": [
                    {
                        type: "paragraph",
                        text: "Sometimes, VASCU doesn’t have time for forensic examiners to comb every inch of a scene. When a serial killer snatches a girl, every second is a second he could use to butcher her and the agent needs clues fast. A psychic with this ability unleashes her stress on the scene, mentally browbeating it like she would a suspect who didn’t talk."
                    },
                    {
                        type: "paragraph",
                        text: "Using this power replaces the standard roll for examining a crime scene (World of Darkness Rulebook, p. 59) with an Instant action."
                    }
                ],
                "fullCost": "1 point of bashing damage",
                "Action": "Instant",
                "DicePool": "Teleinformatics + Investigation",
                "RollResults": [
                    {
                        label: "Dramatic Failure",
                        text: "The agent studies the scene, but jumps to the wrong conclusion before she hears everything."
                    },
                    {
                        label: "Failure",
                        text: "The agent gets nothing from the area. She’ll have to comb the scene manually and hope she’s still got time."
                    },
                    {
                        label: "Success",
                        text: "Though the agent only appears to glance around the scene, she has a basic idea of what’s going on. The Storyteller should give her the same information as if she had rolled half the necessary successes to examine a crime scene. She cannot use this power twice on the same scene."
                    },
                    {
                        label: "Exceptional Success",
                        text: "While this power doesn’t replace forensic analysis, the agent knows everything that the scene has to tell her. The Storyteller should give her all available information."
                    }
                ],
                "Notes": [],
            },
            {
                "Name": "Speed Of Thought",
                "Rank": "•••",
                "Cost": "2L",
                "Dice Pool": "Teleinformatics+Athletics",
                "Description": "Add Teleinformatics to Initiative, use higher of Wits or Dexterity for Defense and apply Defense to Firearms for turns equal to successes to a maximum of 5",
                "Book": "Slash 170",
                "Content": [
                    {
                        type: "paragraph",
                        text: "Though the agent’s body is as slow as ever, his mind works at inhuman speeds. He’s hyper-aware of everything, from the way the loose floorboard behind his left foot stops before it’s fully bent — indicating something underneath it — to the tensing of a slasher’s tendon right before he pulls the trigger. Other people who see him dodge bullets or instinctively uncover a serial killer’s storehouse of bodies may wonder if he’s precognitive, but the hunter’s just working the scene as fast as his mind allows."
                    }
                ],
                "fullCost": "2 points of lethal damage",
                "Action": "Instant",
                "DicePool": "Teleinformatics + Athletics",
                "RollResults": [
                    {
                        label: "Dramatic Failure",
                        text: "The agent’s enhanced senses overwhelm him for a second. He cannot take any action on this turn, and his Defense is halved against incoming attacks."
                    },
                    {
                        label: "Failure",
                        text: "Despite his enhanced reaction time, the agent just can’t process everything coming at him fast enough to make a difference."
                    },
                    {
                        label: "Success",
                        text: "Starting with the next turn, the agent adds his Teleinformatics dots to his Initiative. He may also use the higher of his Dexterity or Wits as his Defense. As a final bonus, he can apply his increased Defense against firearms attacks. This effect lasts for one turn per success (maximum 5), and can only be used once per day."
                    },
                    {
                        label: "Exceptional Success",
                        text: "The character overrides his body’s limits. Increase his Speed by his Teleinformatics dots for the duration of the effect."
                    }
                ],
                "Notes": [],
            },
            {
                "Name": "Postcognition",
                "Rank": "••••",
                "Cost": "○, 1L",
                "Dice Pool": "Teleinformatics+Science",
                "Description": "Mentally reconstruct the scene of the crime",
                "Book": "Slash 171",
                "Content": [
                    {
                        type: "paragraph",
                        text: "It doesn’t matter how well you describe a crime scene or reconstruct what happened, it’s not the same as witnessing the crime. Without seeing what happened, an agent possesses only knowledge without understanding. With this power, she creates a model of the crime that’s as real to her as it was to the people there. She’s there, able to “play back” the crucial five minutes about which she has most evidence, in order to see what really happened."
                    },
                    {
                        type: "paragraph",
                        text: "The agent must be present at the scene or at a faithful reconstruction to use this ability. The Storyteller should make the final roll for this power."
                    }
                ],
                "fullCost": "1 Willpower + 1 point of lethal damage",
                "Action": "Instant",
                "DicePool": "Teleinformatics + Science",
                "RollResults": [
                    {
                        label: "Dramatic Failure",
                        text: "The agent synthesizes the information presented and comes up with something wildly off-base. The Storyteller should allow the player to ask between one and three questions to which she should supply erroneous or misleading answers."
                    },
                    {
                        label: "Failure",
                        text: "The agent just can’t fit the pieces together. She’s wasted her time."
                    },
                    {
                        label: "Success",
                        text: "The agent reconstructs what actually happened, which runs back and forwards before her eyes. The player may ask the Storyteller one question per success rolled, which he must answer (within reason). Additionally, further Investigation rolls regarding anything in the vision gain a +2 bonus until the end of the day."
                    },
                    {
                        label: "Exceptional Success",
                        text: "In addition to extra questions, the character notices something that sheds new light on her investigation. The Storyteller should tell her (unprompted) a significant detail or clue about which the player did not ask."
                    }
                ],
                "Notes": [],
            },
            {
                "Name": "Hall Of Mirrors",
                "Rank": "•••••",
                "Cost": "1A",
                "Dice Pool": "Teleinformatics+Occult",
                "Description": "See all possible futures and gain insight on the best course of action.",
                "Book": "Slash 172",
                "Content": [
                    {
                        type: "paragraph",
                        text: "The logical progression from investigating what did happen is investigating what might happen. The agent withdraws into herself, shutting out the outside world until she arrives in the Hall of Mirrors. The Hall is an alien chamber studded with portals that shine like mirrors covered in a thin film of oil. Staring into one, an agent sees the future. Not what will definitely happen, but the most likely course of events based on everything that the agent knows, hopes, and fears. The visions never show more than a week into the future."
                    },
                    {
                        type: "paragraph",
                        text: "VASCU claims that the Hall of Mirrors isn’t a real place. According to the top brass, the Hall is a shared hallucination, an artifact of the human mind trying to extrapolate every possible causal link and derive the most probable overall outcome. The explanation doesn’t hold water with agents who have been to the Hall. If it was a shared hallucination, how come every agent who has been to the Hall describes it exactly alike, down to the strange geometric pattern on the floor and minute imperfections in each mirror? Some even claim to have seen other agents in the Hall at the same time — even though they were half-a-world apart."
                    },
                    {
                        type: "paragraph",
                        text: "The Storyteller should make the final roll for this power."
                    }
                ],
                "fullCost": "1 point of aggravated damage",
                "Action": "Instant",
                "DicePool": "Teleinformatics + Occult",
                "RollResults": [
                    {
                        label: "Dramatic Failure",
                        text: "The agent sees a strange future that doesn’t sit right with her. The Storyteller can declare that one of the agent’s actions in the next 24 hours is a dramatic failure before the player rolls the dice."
                    },
                    {
                        label: "Failure",
                        text: "The agent makes it to the Hall of Mirrors, but none of the viewing portals show anything but inky blackness."
                    },
                    {
                        label: "Success",
                        text: "The agent finds portals that show possible futures, and can see how they pan out over the next few days and how they relate to her. Unlike other means of telling the future, this power doesn’t hide the future behind metaphor, but it’s very much the edited highlights — like the preview of next week’s episode at the end of a TV drama. The player can “spend” her successes on this roll in two ways: first, she can re-roll one action, keeping whichever roll she chooses; and secondly she may ask the Storyteller one yes/no question relating to her immediate situation, which he must answer. Any unspent successes are lost after 24 hours."
                    },
                    {
                        label: "Exceptional Success",
                        text: "The agent notices something affecting a cellmate in one of the visions. She may spend a success to allow another player to re-roll a single action. That player chooses which roll to keep."
                    }
                ],
                "Notes": [],
            }
        ]
    },
    {
        "Name": "Research",
        "Description": "Information-gathering techniques that let an agent find, process and exploit records, networks and specialized knowledge.",
        "Book": "Slash 173",
        "Content": [
            {
                "type": "paragraph",
                "text": "VASCU agents who awaken research-based powers access information from a wide range of sources, even when the agent’s miles from cellphone coverage. Whether the agent’s capable of running a background check without touching a computer or following a target using a hundred eyes, he can see whatever he needs. A statistically significant number of agents who undergo the Wintergreen Process awaken research-based powers, as Wintergreen’s original research was into ESP and accessing sources of information. Those scientists Vanguard has tasked with improving the process have noted the trend, but lack Dr. Wintergreen’s insights into the human brain."
            }
        ],
        "Ranks": [
            {
                "Name": "Network",
                "Rank": "•",
                "Cost": "1B",
                "Dice Pool": "Teleinformatics + Academics",
                "Description": "Know the right place to look",
                "Book": "Slash 173",
                "Content": [
                    {
                        type: "paragraph",
                        text: "Agents who can’t find what they need make pretty poor researchers. If they possess this power, they know where to start looking. An agent concentrates hard on what she wants to find — the power only works on inanimate objects, and she has to be specific — and she knows where it is. While it’s useful for showing up the agent who forgets his car keys, the power has broader applications: an agent with this power picks up clues from the surrounding area as well as her memory. If she’s in a library, archive, or some other place where information is stored according to some kind of pattern, she knows precisely which shelf to go to, even if she’s never been in that building before."
                    }
                ],
                "fullCost": "1 point of bashing damage",
                "Action": "Instant",
                "DicePool": "Teleinformatics + Academics",
                "RollResults": [
                    {
                        label: "Dramatic Failure",
                        text: "The agent misinterprets the clues, sending her on a wild goose chase. Sometimes she wastes her time or the power points her to places that she’d rather not be."
                    },
                    {
                        label: "Failure",
                        text: "The agent gets no clues as to what she’s looking for."
                    },
                    {
                        label: "Success",
                        text: "The agent knows where she needs to look. If she’s outside, or in the wrong building, she knows which building to look in, out to a quarter-mile radius. If she’s in the right building, she knows what room to look in. If she’s in the same room, she narrows her search down to a 10-yard radius. On the off-chance that she’s looking for something reasonably common, like a specific brand of cigarette or a specific make of gun in a firing range, she knows the location of the closest instance of that item."
                    },
                    {
                        label: "Exceptional Success",
                        text: "The character knows just where to look. If she’s outside, she knows which room in which building. If she’s in the same building, she knows to a 10-yard radius. If she’s in the same room, she knows precisely where her target is."
                    }
                ],
                "Notes": [],
            },
            {
                "Name": "Deep Background",
                "Rank": "••",
                "Cost": "1B per roll",
                "Dice Pool": "Teleinformatics + Computer",
                "Description": "Find documents relating to a suspect at 3 successes per document",
                "Book": "Slash 173",
                "Content": [
                    {
                        type: "paragraph",
                        text: "Even with computers, background checks take time. Often, the first that a VASCU agent learns about projecting her senses involves speeding up the process. Working from a single piece of information — a photograph, a name, address, or license plate, for example — she can trace back, digging up everything from criminal records to bank details, credit reports, phone records, even down to individual school report cards. As long as the agent has an Internet connection, she can find whatever she needs."
                    },
                    {
                        type: "paragraph",
                        text: "The number of successes required depends on the nature of information the agent wants to get. For convenience, the five most likely sources of information are abstracted as follows: criminal record (covers crimes committed, records of arrest, and presence on sex offenders register), credit file (indicating the amount of credit the subject has, along with the extent and nature of any loans), phone records (all calls made from one phone line), bank records (details of transactions, including ATM withdrawals with location), and medical records (details of all visits to doctors and all treatment). Each source requires three successes on the roll, so requesting the suspect’s credit file and bank records would require six successes. Each document covers the last month unless the agent specifies otherwise. If an agent wants some other information — educational records, or child protection records — it adds another three successes to the total required. Rushing through distinctly different systems stresses an agent’s mind, and the more time she spends engaged in background checks, the more damage she suffers."
                    }
                ],
                "fullCost": "1 point of bashing damage per roll",
                "Action": "Extended (3-15 successes; each roll represents 30 seconds)",
                "DicePool": "Teleinformatics + Computer",
                "RollResults": [
                    {
                        label: "Dramatic Failure",
                        text: "The agent follows a bad link, ending up with the wrong information — not that she knows it at the time."
                    },
                    {
                        label: "Failure",
                        text: "The agent probes the records, but can’t find what she’s looking for yet."
                    },
                    {
                        label: "Success",
                        text: "The agent recovers the records she’s after. The Storyteller should furnish her with any pertinent information based on the records she searched for. Further Investigation rolls against her target gain 9-again."
                    },
                    {
                        label: "Exceptional Success",
                        text: "Searching through the records turns something up that the agent wasn’t looking for, but is even more helpful. The Storyteller should include an extra source of information that the character didn’t request but that contains something pertinent to the investigation."
                    }
                ],
                "Notes": [
                    {
                        type: "table",
                        title: "Suggested Modifiers",
                        headers: ["Modifier", "Situation"],
                        rows: [
                            ["0", "Agent has subject’s unique ID — social security number, passport, etc."],
                            ["-1", "Agent has subject’s name, address, and photograph, but nothing unique."],
                            ["-2", "Agent has some ID, but is missing at least one piece."],
                            ["-2", "Subject used a false name."],
                            ["-3", "Agent only has name, address, or license plate."],
                            ["-4", "Subject used a false identity with its own unique ID."]
                        ]
                    }
                ],
            },
            {
                "Name": "Bookworm",
                "Rank": "•••",
                "Cost": "○, 1L",
                "Dice Pool": "—",
                "Description": "Automatically succeed at any Academics or Occult based research action",
                "Book": "Slash 174",
                "Content": [
                    {
                        type: "paragraph",
                        text: "The agent has synchronized her mind with the vast amount of information available across the world. She no longer needs to spend hours reading through books and case notes in order to research her target. Instead, all she has to do is focus, and the information comes to her unbidden. She has an instinctive understanding of just about everything that’s available to the public, just waiting behind her eyes for her to call upon it. Even restricted information is open to her, as long as she has some token of her authority — her FBI badge, for example."
                    },
                    {
                        type: "paragraph",
                        text: "The agent automatically succeeds at any Academics or Occult based research action (World of Darkness Rulebook, p. 55). She gains a normal success on the action with no roll required. This power takes 30 seconds if the agent has some means close to hand that would help her carry out the research normally — simply being in a library or holding a laptop computer is sufficient. If the agent has no means of making a Research roll, or is accessing non-public information, her automatic success takes two minutes. The agent loses her Defense for the duration of this power."
                    }
                ],
                "fullCost": "1 Willpower + 1 point of lethal damage",
                "Action": "",
                "DicePool": "",
                "RollResults": [],
                "Notes": [],
            },
            {
                "Name": "Tag",
                "Rank": "••••",
                "Cost": "1L (○)",
                "Dice Pool": "Teleinformatics + Streetwise",
                "Description": "Follow a target through cameras. For an additional Willpower, the Hunter can use this ability through animals",
                "Book": "Slash 174",
                "Content": [
                    {
                        type: "paragraph",
                        text: "The agent can send her mind through any kind of network in order to follow a suspect. This power isn’t the classic form of remote viewing — the agent co-opts anything with a lens to act as her eyes, from a store’s CCTV to an ATM camera to the dashboard camera in a cop car. With concentration, she can even use the eyes of animals to help her out — while cats and rats are fair game, higher animals are too complex. Though she may borrow their senses, the communication is strictly one-way — the agent can’t exert any control over the animal."
                    },
                    {
                        type: "paragraph",
                        text: "Most agents use this power from a “backup” position, remaining in a safe location and tailing the target. The target’s actions can be useful for building a psychological profile or for getting access to the target’s records — using Deep Background on a target that an agent has followed with Tag receives a two-dice bonus."
                    }
                ],
                "fullCost": "1 point of lethal damage, optionally 1 Willpower",
                "Action": "Instant",
                "DicePool": "Teleinformatics + Streetwise",
                "RollResults": [
                    {
                        label: "Dramatic Failure",
                        text: "The agent follows someone who looks like the target, rather than the target. Any Investigation rolls made against the target suffer a -2 modifier."
                    },
                    {
                        label: "Failure",
                        text: "Despite her best efforts, the agent loses her target."
                    },
                    {
                        label: "Success",
                        text: "Using cameras as her eyes, the agent can follow her target without ever being observed. She has to remain within 500 yards per dot of Teleinformatics, but the agent doesn’t need any obvious connection to the target. Each success allows her to follow her target for five minutes. Spending a point of Willpower allows the agent to see through animals as well as machines. This is mostly beneficial in rural areas without CCTV and every other person carrying a camera-phone. All rolls made by the agent’s cell to track the suspect, or to create a psychological profile or run a background check, gain a +2 bonus. The agent must concentrate on this power. She can talk, but does not apply her Defense against incoming attacks. Taking a Reflexive action, or receiving damage, requires the agent to succeed in a Resolve + Composure roll. If the agent fails, the power ends prematurely."
                    },
                    {
                        label: "Exceptional Success",
                        text: "The agent gets a good look at his suspect throughout the chase. If his cell confronts the subject while this power is active, they automatically gain surprise."
                    }
                ],
                "Notes": [],
            },
            {
                "Name": "Omnicompetence",
                "Rank": "•••••",
                "Cost": "1L or 1A",
                "Dice Pool": "Teleinformatics + Larceny",
                "Description": "Temporarily increase one skill to 5 dots or all skills in a category to 3 dots",
                "Book": "Slash 175",
                "Content": [
                    {
                        type: "paragraph",
                        text: "An agent with this ability can use the sum total of information in the world for more than just background reading. Tactical manuals and weapon specifications give her an understanding of how to shoot any firearm she can get her hands on. The combined occult lore of everyone from Enki of Sumeria to Aleister Crowley is there when she needs it. She can instantly research any field that she requires, learning in seconds what normally takes years of practice and dedication. Using this power, an agent can become an expert in one field, or become the jack of all trades that her cell needs to catch a particularly vicious killer."
                    },
                    {
                        type: "paragraph",
                        text: "When activating this power, the player must choose whether he wants to increase just one Skill, or one group of Skills (Mental, Physical, or Social). Increasing one Skill costs one point of lethal damage — though the agent must possess that skill in the first place. Increasing a group of Skills takes one point of aggravated damage. This ability can only be used once per scene."
                    }
                ],
                "fullCost": "1 point of lethal or aggravated damage",
                "Action": "Instant",
                "DicePool": "Teleinformatics + Larceny",
                "RollResults": [
                    {
                        label: "Dramatic Failure",
                        text: "The character is overwhelmed with the sheer volume of information available. All uses of Skills in the same category (even if the agent only wanted to increase one Skill) suffer the penalty for untrained use."
                    },
                    {
                        label: "Failure",
                        text: "The agent can’t focus enough to increase his Skills."
                    },
                    {
                        label: "Success",
                        text: "The agent reaches out to the world’s supply of information, absorbing and integrating everything that’s available. If the agent chose to increase one Skill, he temporarily increases his rating in that Skill to five dots until the end of the scene. If the agent chose to increase a group of Skills, he raises each Skill in that group to three dots for the rest of the scene. If he already possessed three dots or more in a given Skill, that Skill is unaffected. Each Skill increased by this ability loses 10-again. The effects of this power last for a scene."
                    },
                    {
                        label: "Example",
                        text: "Agent Turner faces a bestial slasher who acts more animal than human. Attempting to counter that, he opts to boost his Physical Skills with Omnicompetence. He takes a point of aggravated damage and rolls a success. Looking down his Physical Skills, he has Brawl 3, Drive 4, and Stealth 3. Those Skills are unaffected. He rolls all his other Physical Skills as if he has three dots in them, though he doesn’t re-roll 10s when using those Skills."
                    },
                    {
                        label: "Exceptional Success",
                        text: "The hunter retains some of the knowledge granted by this power even after it ends. The player may immediately increase any one Skill affected by this power with experience points. Note that this result doesn’t grant extra experience points, just a chance to spend them in the middle of a story."
                    }
                ],
                "Notes": [],
            }
        ]
    }
]

const goeticGospelOverviewData = {
    "Name": "Goetic Gospel",
    "Content": [
        {
            "type": "paragraph",
            "text": "Couched in Christian iconography to ease new recruits into the bizarre faith of the order, the Goetic Gospels of the Knights of Saint George are nevertheless a key text in the dragonslayers’ religion. To those who have attained the First Revelation, it is a forgotten teaching of Jesus Christ, in which he gives his Apostles the power not only to cast devils out of others, but also to “cast out the devils from thine own soul, and turn them to the vexation of thy enemies.” To those Knights who attain the higher Revelations, the Goetic Gospels are a many-layered mystery, containing increasingly complex ciphers that provide secret knowledge on the ancient gods of the Knights of Saint George. All recognize it as a powerful tool in a witch-hunter’s arsenal, and every active member of the order is expected to study the disciplines found within."
        },
        {
            "type": "paragraph",
            "text": "Unlike most Endowment Merits, but similar to the Safehouse Merit, the Goetic Gospels Endowment is broken up into distinct categories, each of which must have individual dots assigned to it. The three categories of Goetic Gospels represent the three Goetic Gospels themselves and the hidden secrets of witch-hunting to be found within: the Gospel of Agares, which teaches the Knight the ways of disrupting and destroying magical effects (such as destroying a warding barrier, countering a witch’s spell or unraveling the spell that creates a mystical abomination); the Gospel of Amon, which teaches the hunter to vex witches directly by tormenting them with demons and magnifying the witches’ own flaws; and the Gospel of Beleth, which teaches the dragonslayer to poison the magical energy from which witches draw their power. The Gospels themselves are holy texts, named for demons because each tells how Christ can allow a man to vanquish that demon’s hold on his soul."
        },
        {
            "type": "paragraph",
            "text": "Each of the three Gospels is rated from one to five dots, each with a different power associated with it. A Knight of Saint George may never have more than five total dots in Goetic Gospels without going mad. If a player buys his character more than five dots, each dot above the fifth incurs a severe derangement (of the Storyteller’s choosing). Thus, some choose to focus on a single Gospel, mastering its tenets completely, while others prefer to spread out and learn the basics of all three. Some go for broke and accept the madness that comes with power."
        },
        {
            "type": "paragraph",
            "text": "Whenever a Goetic Gospel’s power calls for a character’s “Goetic Gospels” dots, use the total dot rating he possesses, not the dots assigned to the specific Gospel. Likewise, experience point costs for Goetic Gospels are based on the total number of Merit dots the hunter possesses. Buying the fourth dot of Goetic Gospels costs eight experience points, whether that dot is the fourth dot of a single Gospel or the first dot of a new one."
        },
        {
            "type": "paragraph",
            "text": [
                {
                    "text": "Example:",
                    "bold": true,
                    "italic": true
                },
                {
                    "text": " Sir Thomas has four dots in Goetic Gospels, with two assigned to the Gospel of Agares and one each to the Gospel of Amon and the Gospel of Beleth. When he uses the one-dot power of the Gospel of Beleth, What’s Mine Is Mine, the activation roll calls for his Presence + Goetic Gospels. He adds four dice to his dice pool for his Goetic Gospels rating, even though he only has one dot assigned to the Gospel of Beleth.",
                    "italic": true
                }
            ]
        },
        {
            "type": "paragraph",
            "text": [
                {
                    "text": "Later, he decides to buy the fifth dot of Goetic Gospels and advance his knowledge of the Gospel of Beleth to two dots. This still costs 10 experience points, since he already has four total dots in the Merit.",
                    "italic": true
                }
            ]
        },
        {
            "type": "paragraph",
            "text": "A Knight may reassign his dots through a period of meditation, prayer, and mortification of the flesh at any time. To do this, the Knight must spend one full night (from dusk till dawn) in seclusion, preferably in one of the order’s cloisters or at least an Anglican church, meditating on the Revelations and scouring his flesh with a “discipline.” The hunter must accept one point of lethal damage per dot of Goetic Gospels he wishes to reassign to another category."
        },
        {
            "type": "heading",
            "level": 2,
            "text": "MEDITATIVE STATE"
        },
        {
            "type": "paragraph",
            "text": [
                "To use many of the powers of the Goetic Gospels, the hunter must be in a meditative state. The Meditation action is described on p. 51 of the ",
                {
                    "text": "World of Darkness Rulebook",
                    "bold": true
                },
                "; to be in a “meditative state” means the character has achieved four successes on the meditation action within the current scene. If a hunter suffers a wound in one of his last three Health boxes, fails a degeneration roll, or expends all of his Willpower, he loses the meditative state and must regain it by earning four successes on a new meditation action."
            ]
        },
        {
            "type": "paragraph",
            "text": "With the exception of total Willpower expenditure, the conditions that cause a hunter to lose his meditative state don’t prohibit him from re-attaining it. A Knight of Saint George can meditate, for example, even with a wound in his third-rightmost Health box; if he suffers another wound in one of the next two rightmost Health boxes, he again loses his meditative state. A hunter cannot attain a meditative state for the purposes of Goetic Gospels if he has no Willpower remaining. A meditative state lasts until the end of the scene."
        },
        {
            "type": "paragraph",
            "text": "A Goetic Gospel “meditative state” is not precisely the same sort of meditation commonly practiced by New Age enthusiasts or mystics seeking union with divinity. A Knight’s meditative state is one of synchronicity with the darkness both within and without, a feeling of perfect emptiness which clings to the hunter like a shroud. He feels no pain or joy while in this state, only a complete and utter absence. It takes a significant stimulus, such as grievous bodily harm or the crushing guilt of degeneration, to shatter the emptiness of the meditative state."
        }
    ],
    "Book": "WF 130"
}

const goeticGospelData = [
    {
        "Name": "The Gospel of Agares",
        "Description": "A Goetic Gospel focused on resisting, redirecting and punishing hostile magic.",
        "Book": "WF 130",
        "Content": [
            {
                "type": "paragraph",
                "text": "Many witch-hunters consider this Gospel to be the most “important” to their work from a practical standpoint, as it deals directly with the witch’s most potent weapon: her Dragon-gifted sorcery."
            }
        ],
        "Ranks": [
            {
                "Name": "Lie of the Heart",
                "Rank": "•",
                "Cost": "○",
                "Dice Pool": "Wits + Goetic Gospels",
                "Description": "Ignore spells that affect anyone in a give area",
                "Book": "WF 130",
                "Content": [
                    {
                        type: "paragraph",
                        text: "Witches are cunning creatures, and they often booby-trap their lairs with defensive spells and magic alarms to warn them of intruders. A hunter must be able to avoid those pitfalls, and by focusing on his own sins of dishonesty, he can invoke a demon of falsehood from his own soul, whose lies shield him from a witch’s active spells."
                    }
                ],
                "fullCost": "1 Willpower",
                "Action": "Instant",
                "DicePool": "Wits + Goetic Gospels",
                "RollResults": [
                    {
                        label: "Dramatic Failure",
                        text: "The hunter actually begins to believe the whispered falsehoods of the demon, which befuddles his mind. For the rest of the scene, he gains a single minor Derangement of the Storyteller’s choice."
                    },
                    {
                        label: "Failure",
                        text: "The hunter is unable to manifest the Lie of the Heart and thus cloak himself from magic."
                    },
                    {
                        label: "Success",
                        text: "The demon of deceit manifests from the hunter’s soul and whispers its lies to the world. The demon “tricks” active spells into not recognizing the hunter’s presence; any time the Knight would be affected by a spell that affects anyone in a given area (for example, trying to step through a warded door or into the area of a spell that curses any within its effect), compare that spell’s dot rating to the Knight’s Goetic Gospels rating. If the hunter’s Endowment rating is higher, the hunter does not suffer the effect."
                    },
                    {
                        label: "Exceptional Success",
                        text: "As above, but treat the hunter’s Goetic Gospels rating as one dot higher when comparing it to spell levels."
                    }
                ],
                "Notes": [
                    "This power does not actually counter or dispel the magic, it merely causes the hunter not to register to the spell. It likewise has no effect on spells cast directly on the Knight; only spells that would affect anyone in the spell’s area of effect.",
                    "To use the Lie of the Heart, the Knight must be in a meditative state. The effect lasts until the end of the scene."
                ],
            },
            {
                "Name": "Crocodile Armor",
                "Rank": "••",
                "Cost": "○",
                "Dice Pool": "Stamina + Goetic Gospels",
                "Description": "Gain armor against spells or enchanted weapons equal to Goetic Gospels rating",
                "Book": "WF 130",
                "Content": [
                    {
                        type: "paragraph",
                        text: "According to the Goetic Gospels, the god-king Agares appears as an old man riding on a crocodile, carrying a goshawk on his fist. By meditating upon the crocodile as a symbol of his own sloth, the Knight calls forth a minor demon which can deflect the magic a witch hurls at him."
                    }
                ],
                "fullCost": "1 Willpower",
                "Action": "Instant",
                "DicePool": "Stamina + Goetic Gospels",
                "RollResults": [
                    {
                        label: "Dramatic Failure",
                        text: "The Knight actually renders it easier for a witch to target him with magic. For the rest of the scene, any spell that directly targets the hunter gains the 9-again rule."
                    },
                    {
                        label: "Failure",
                        text: "The dragonslayer is unable to summon the crocodile-demon to protect him."
                    },
                    {
                        label: "Success",
                        text: "The crocodile demon manifests itself to protect the hunter; for the duration of the scene, he gains a number of points of Armor equal to his dots in the Goetic Gospels Endowment. This armor only functions against spells or attacks made with enchanted weapons."
                    },
                    {
                        label: "Exceptional Success",
                        text: "The Knight’s power is so strong and sure that the armor persists until the end of the scene even if he loses his meditative state."
                    }
                ],
                "Notes": [],
            },
            {
                "Name": "Agares' Goshawk",
                "Rank": "•••",
                "Cost": "○",
                "Dice Pool": "Manipulation + Goetic Gospels vs. spell die pool",
                "Description": "Dispell a spell",
                "Book": "WF 130",
                "Content": [
                    {
                        type: "paragraph",
                        text: "By meditating upon his own wrath, the Knight conjures forth an ephemeral demon in the form of a goshawk that picks away at the threads of an existing spell, such as a mystic ward that prevents entry or a spell that imbues a weapon with preternatural strength, slowly but surely unraveling it."
                    }
                ],
                "fullCost": "1 Willpower",
                "Action": "Extended and contested; each roll represents five minutes of meditation on one’s Goetic techniques. The hunter must score more successes than the witch scored on the initial casting of the spell.",
                "DicePool": "Manipulation + Goetic Gospels versus the spellcasting dice pool that cast the target spell",
                "RollResults": [
                    {
                        label: "Dramatic Failure",
                        text: "The hunter’s Goetic knowledge is insufficient to overcome the power of the witch’s dragon-gifted magic. The unraveling attempt fails, and the goshawk-demon is banished back to the hunter’s psyche, ending the duration of the power. Any successes accumulated are lost."
                    },
                    {
                        label: "Failure",
                        text: "No successes are accumulated toward unraveling the spell."
                    },
                    {
                        label: "Success",
                        text: "The hunter makes progress toward the destruction of the magic. When his total successes exceed those scored on the initial casting roll, the spell is destroyed and its effects end immediately. The witch who cast the spell knows the spell is no longer active, but does not gain any knowledge of how or why."
                    },
                    {
                        label: "Exceptional Success",
                        text: "As above, but the witch who cast the spell remains unaware of the spell’s destruction."
                    }
                ],
                "Notes": [
                    "To use this power, the hunter must be in a meditative state (see the sidebar on p. 129 and the World of Darkness Rulebook, p. 51)."
                ],
            },
            {
                "Name": "Envy's Barb",
                "Rank": "••••",
                "Cost": "○(1L)",
                "Dice Pool": "Presence + Goetic Gospels",
                "Description": "Counter a spell. The Hunter can take any amount of Bashing to receive +2 on the roll for each point of Bashing spent. Optionally, the Hunter can spend a Lethal damage and deal Lethal damage to the spell caster equal to additional successes made on the Goetic Gospel roll",
                "Book": "WF 131",
                "Content": [
                    {
                        type: "paragraph",
                        text: "Though most would never admit it, many Knights of Saint George secretly envy the power witches possess. By channeling that envy into the manifestation of a Goetic demon, a vicious, barbed little creature that hates everything its creator doesn’t have, the hunter can undermine a witch’s power, countering a spell as it is cast. The demonic spirit recognizes the impending spell as the source of the hunter’s envy and latches onto it, feeding on the energy of that emotion like a hungry tick."
                    }
                ],
                "fullCost": "1 Willpower, optionally 1+ points of bashing damage and 1 point of lethal damage",
                "Action": "Instant and contested; successes are compared to the successes of the spellcasting witch.",
                "DicePool": "Presence + Goetic Gospels, but for each point of bashing damage taken at the time of activation, the Knight gains +2 to this roll",
                "RollResults": [
                    {
                        label: "Dramatic Failure",
                        text: "The hunter’s envy latches onto his own heart instead of the spell. The hunter suffers one point of lethal damage."
                    },
                    {
                        label: "Failure",
                        text: "More successes are rolled for the witch than for the hunter. The spell takes effect, though any successes on the hunter’s roll are subtracted from the total number of successes earned on the spellcasting roll."
                    },
                    {
                        label: "Success",
                        text: "The hunter’s player rolls more successes to activate this power than the witch’s player rolled to cast her spell. The spell is countered, completely nullified. Any side effects of casting the spell, such as Paradox, still occur. If the hunter so desires, he may augment this power by engaging in the practice of mortification of the flesh. Traditionally this is done with a small scourge called a “discipline,” but in the field any means of inflicting harm upon oneself will do. This enhancement costs the hunter one point of lethal damage (automatically inflicted as part of the activation), but the witch also suffers one point of lethal damage per success on the hunter’s activation roll beyond what was needed to counter the spell. (Mortification is also how the hunter incurs bashing damage to his own body at the time of activation to give him bonus dice to the Gospel’s roll.)"
                    },
                    {
                        label: "Exceptional Success",
                        text: "No additional effect beyond countering an extremely powerful spell."
                    }
                ],
                "Notes": [
                    "To use this power, the hunter must be in a meditative state (see the sidebar on p. 129 and the World of Darkness Rulebook, p. 51). If the optional point of lethal damage would be sufficient to break the Knight’s meditative state, this power still takes effect before the meditative state is broken.",
                    "A Knight of Saint George may use this power even when it is not his turn in the Initiative count. He may not, however, use it if he has already acted this turn, and preemptively using the power costs him his action for the turn. He must know that a spell is being cast on him and must be able to see the caster, but he need not know the nature of the spell."
                ],
            },
            {
                "Name": "Flagellant's Denial",
                "Rank": "•••••",
                "Cost": "○ (spent per activation), 1-5L (spent once for a scene)",
                "Dice Pool": "Resolve + Goetic Gospels",
                "Description": "Negate all spells in a 5 yard radius of the Hunter at a level equal to or lower than the amount of Lethal damage taken",
                "Book": "WF 131",
                "Content": [
                    {
                        type: "paragraph",
                        text: "Mortification of the flesh is a powerful ritual to the Knights of Saint George. It provides them with a source of pride in their own righteousness, reminding them that their devotion is so much more than other men’s. By channeling that pride through the act of mortification, the hunter conjures up a mighty demon of pride, an avatar of the demon-king Agares himself which is greater than the pride of any mere witch. By breaking the magician’s hubris, the hunter denies her most potent weapons: her spells."
                    }
                ],
                "fullCost": "1 Willpower per turn and 1-5 points of lethal damage (see below)",
                "Action": "Extended. Each roll represents one turn of self-flagellation",
                "DicePool": "Resolve + Goetic Gospels",
                "RollResults": [
                    {
                        label: "Dramatic Failure",
                        text: "The hunter suffers a moment of crippling self-doubt as his Goetic demon masters him. The effects of this power end immediately, and the hunter loses all unspent Willpower points."
                    },
                    {
                        label: "Failure",
                        text: "The hunter fails to bolster his own pride sufficiently to deny more potent magic, but he may try again next turn."
                    },
                    {
                        label: "Success",
                        text: "The hunter is able to channel his own pride into a tangible force that denies magic within his presence."
                    },
                    {
                        label: "Exceptional Success",
                        text: "The hunter increases the maximum dot rating of a hindered spell by one, without paying an additional cost in lethal damage (see below)."
                    }
                ],
                "Notes": [
                    "Flagellant’s Denial works differently than most other extended actions, in that you aren’t aiming for a specified number of successes to complete the action. In effect, it’s more like a series of instant actions strung together to accomplish an effect.",
                    "To use Flagellant’s Denial, the hunter’s player must inflict one point of lethal damage on himself (this is an automatic part of the activation action) and roll the power’s dice pool. If he succeeds, any one-dot spell simply ceases to function near the hunter. Spells cannot be cast, the effects of active spells are suppressed, and so on. This effect persists within a radius of 5 yards around the hunter. The spells are not actually countered or dispelled; they simply refuse to function in the Knight’s presence. Once the Knight leaves the area, any suppressed spell effect is restored.",
                    "The Knight may attempt to increase the level of spell he can suppress once per turn. To do so, he inflicts one further point of lethal damage on himself and rolls Resolve + Goetic Gospels. If he succeeds, spells of one or two dots are suppressed. He may only inflict one point of damage and increase the suppressed spell’s dot rating once per turn. The Knight may stop mortifying his flesh at any time, but once he does so, he must spend another Willpower point if he wishes to resume.",
                    "Flagellant’s Denial lasts for one scene.",
                    {
                        label: "Example",
                        text: "Sir Thomas and his cell face a coven of witches in an old mansion on the outskirts of Philadelphia. Thomas possesses five dots of Goetic Gospels now, all focused on the Gospel of Agares. During his first turn, he invokes the Gospel and begins to strike himself with a cat-o’-nine-tails, inflicting one point of lethal damage on himself. His player rolls two successes on the activation roll; any witch with a Gnosis of 4 or less cannot cast one-dot spells, and any one-dot spells already cast are suppressed. As his cell-mates distract the witches, Thomas attempts to increase the potency of the effect on his second turn. His player rolls two successes on the activation roll and scourges himself for another point of lethal damage; now any spell of two dots or less is suppressed. During the third turn, one of the witches goes after Thomas with a fire axe. Knowing he’s likely to take significant damage, Thomas elects to Dodge the attack rather than continue flagellating himself. Since Thomas has stopped actively invoking the Gospel, when his fourth turn comes around his player will have to spend another Willpower point to resume the process of the Flagellant’s Denial."
                    }
                ],
            }
        ]
    },
    {
        "Name": "The Gospel of Amon",
        "Description": "A Goetic Gospel that turns vice, instability and stolen mysteries against a target.",
        "Book": "WF 132",
        "Content": [
            {
                "type": "paragraph",
                "text": "Witches are vile, debased creatures, beset by demons of their own. This makes them easy prey for the mysteries of the Goetic Gospels, and Amon, Marquis of Hell, teaches the Knight to exploit the foibles of his foes to gain an advantage in battle."
            },
            {
                "type": "paragraph",
                "text": "While the Gospel itself, and the doctrine of the order, state that the following powers are used to weaken and vex witches, they actually (with the exception of the five dot power, Demon Prince of Nothing) work equally well against anyone, supernatural or mortal."
            }
        ],
        "Ranks": [
            {
                "Name": "Stolen Vice",
                "Rank": "•",
                "Cost": "○ (2B)",
                "Dice Pool": "Manipulation + Goetic Gospels vs. Resolve+Gnosis",
                "Description": "Whenever the target would indulge his or her vice, she receives no Willpower. If 2B is spent, the Hunter receives it instead.",
                "Book": "WF 132",
                "Content": [
                    {
                        type: "paragraph",
                        text: "The most basic knowledge of the Gospel of Amon allows a Knight to call forth a tiny demon of one of his own sins and send it forth to bedevil the mind of a witch, robbing her of the guilty pleasure she receives from her own wickedness."
                    }
                ],
                "fullCost": "1 Willpower, 2 points of bashing damage (optional)",
                "Action": "Contested",
                "DicePool": "Manipulation + Goetic Gospels versus Resolve + Gnosis",
                "RollResults": [
                    {
                        label: "Dramatic Failure",
                        text: "The demon turns on its creator; the next time the hunter regains Willpower from fulfilling his Vice, he recovers no Willpower."
                    },
                    {
                        label: "Failure",
                        text: "The demon is unable to take hold upon the witch."
                    },
                    {
                        label: "Success",
                        text: "The demon latches onto the witch’s soul and waits until she attempts to indulge her Vice. The demon steals the energy of that emotional rush, denying the witch the Willpower she would have gained. If the Knight chooses to augment the power by mortifying his own flesh and accepting two points of bashing damage, he receives the Willpower point instead. This cannot raise him above his normal maximum."
                    },
                    {
                        label: "Exceptional Success",
                        text: "When the witch attempts to fulfill her Vice, not only does she fail to regain a point of Willpower, she loses one Willpower as well."
                    }
                ],
                "Notes": [
                    "This power lasts for 24 hours."
                ],
            },
            {
                "Name": "Maddening Whispers",
                "Rank": "••",
                "Cost": "○ (1L)",
                "Dice Pool": "Composure + Goetic Gospels",
                "Description": "Inflict a mild derangement on a target. If 1L is spent, inflict a severe derangement instead.",
                "Book": "WF 133",
                "Content": [
                    {
                        type: "paragraph",
                        text: "From sin comes madness, says the Gospel of Amon. By calling forth a demon from the depths of his own wickedness and setting it upon his enemy, a Knight of Saint George can send madness into the mind of a witch, cursing her with strange compulsions and irrational thoughts."
                    }
                ],
                "fullCost": "1 Willpower, 1 point of lethal damage (optional)",
                "Action": "Extended (number of successes equals target’s Morality, each roll represents 10 minutes of meditation)",
                "DicePool": "Composure + Goetic Gospels",
                "RollResults": [
                    {
                        label: "Dramatic Failure",
                        text: "The hunter fails to master his demon and is afflicted by the very derangement he sought to inflict upon his victim."
                    },
                    {
                        label: "Failure",
                        text: "The Knight makes no progress toward conjuring forth his demon."
                    },
                    {
                        label: "Success",
                        text: "The Knight manifests a demon composed of his own wickedness and base urges. Once he has accumulated a number of successes equal to the target’s Morality or equivalent trait (Humanity, Harmony, Wisdom, etc.), the demon goes forth and attaches itself to the witch like a psychic parasite, whispering maddening thoughts into her mind. The witch’s player rolls her current Morality rating; if she fails, she gains one mild derangement of the Knight’s choice. If she succeeds, she resists the derangement. This works exactly like the potential derangement that accompanies Morality loss. If the Knight chooses to augment the power by mortifying his own flesh and accepting one point of lethal damage, the derangement inflicted is a severe one instead. The derangement (mild or severe) lasts for 24 hours."
                    },
                    {
                        label: "Exceptional Success",
                        text: "The derangement lasts for a full week."
                    }
                ],
                "Notes": [
                    "The Knight need not be able to see his target to invoke this power, but he must have a photograph, video, or other accurate likeness of the victim to work with.",
                    "The Knight chooses both the derangement itself and the specific form it takes. For example, a hunter who curses a victim with a phobia might choose to give her a phobia of spiders or of heights.",
                    "To use this power, the hunter must be in a meditative state (see the sidebar on p.129 and the World of Darkness Rulebook, p. 51)."
                ],
            },
            {
                "Name": "Magpie Mysteries",
                "Rank": "•••",
                "Cost": "○ (1L)",
                "Dice Pool": "Dexterity + Goetic Gospels vs. Composure+Gnosis",
                "Description": "Steal the ability to use spells from a given Mystery from the target and deny the target use. If 1L is spent, the target is denied use of two Mysteries",
                "Book": "WF 133",
                "Content": [
                    {
                        type: "paragraph",
                        text: "According to folklore, the magpie is a covetous, greedy bird that snatches up anything that might catch its eye. By channeling his own greed into the creation of a Goetic demon, the Knight is able to send forth a spiritual servitor to steal a witch’s power from her."
                    }
                ],
                "fullCost": "1 Willpower, 1 point of lethal damage (optional)",
                "Action": "Contested",
                "DicePool": "Dexterity + Goetic Gospels versus Composure + Gnosis",
                "RollResults": [
                    {
                        label: "Dramatic Failure",
                        text: "The Knight loses his struggle with the demon-thief, and loses a point of Willpower to the struggle."
                    },
                    {
                        label: "Failure",
                        text: "The mage resists the hunter’s attempt to steal her magic and the power has no effect."
                    },
                    {
                        label: "Success",
                        text: "The hunter’s Goetic servitor overcomes the witch’s defenses. For the rest of the scene, the witch loses the ability to cast any spell from one Mystery to which she has access (excepting the Mystery of Lore). The Knight may choose which Mystery to steal, but he must know in advance that the witch is capable of invoking that Mystery to use this power. Any spells from that Mystery the witch has already cast remain active, but she cannot modify or release the spells. If the Knight chooses to augment the power by mortifying his own flesh and accepting one point of lethal damage, the witch loses access to two Mysteries."
                    },
                    {
                        label: "Exceptional Success",
                        text: "As above, but the Mystery remains “stolen” for a full day."
                    }
                ],
                "Notes": [],
            },
            {
                "Name": "Viscous Cycle",
                "Rank": "••••",
                "Cost": "○ (1L)",
                "Dice Pool": "Presence + Goetic Gospels",
                "Description": "Make the target make a degeneration roll equal to the most severe sin they have committed. If they fail, the receive -3 on all rolls and cannot regain WP from their Virtue for the rest of the scene. If 1L is spent, the degeneration roll is made as though it were one level worse.",
                "Book": "WF 133",
                "Content": [
                    {
                        type: "paragraph",
                        text: "Sin calls to sin, and guilt can have a long and powerful memory. This application of the Gospel of Amon allows the Knight to call forth a demonic representation of his own sin and set it upon a witch, forcing her to relive her most shameful deeds."
                    }
                ],
                "fullCost": "1 Willpower, 1 point of lethal damage (optional)",
                "Action": "Extended (number of successes equals target’s Morality, each roll represents 10 minutes of meditation)",
                "DicePool": "Presence + Goetic Gospels",
                "RollResults": [
                    {
                        label: "Dramatic Failure",
                        text: "The Goetic demon conjured by this power turns on its creator. The hunter must immediately make a degeneration check at the same level as the most severe sin he has ever committed."
                    },
                    {
                        label: "Failure",
                        text: "The Knight of Saint George fails to make any progress."
                    },
                    {
                        label: "Success",
                        text: "The Knight creates a demonic being of pure wickedness and sets it on his target. The victim must make a degeneration roll at the same level as the most severe sin she has committed in her life. If she fails, she suffers a -3 penalty on all rolls and cannot regain Willpower by fulfilling her Virtue for the rest of the scene. If the Knight chooses to augment the power by mortifying his own flesh and accepting one point of lethal damage, the degeneration roll is made as though for a sin one level worse than the target’s actual worst sin."
                    },
                    {
                        label: "Exceptional Success",
                        text: "The power lasts for 24 hours."
                    }
                ],
                "Notes": [
                    "The Knight need not be able to see his target to invoke this power, but he must have a photograph, video, or other accurate likeness of the victim to work with.",
                    "To use this power, the hunter must be in a meditative state (see the sidebar on p. 129 and the World of Darkness Rulebook, p. 51)."
                ],
            },
            {
                "Name": "Demon King of Nothing",
                "Rank": "•••••",
                "Cost": "○, 1L (1L)",
                "Dice Pool": "Stamina + Goetic Gospels vs. Resolve +Gnosis",
                "Description": "All spells the target rolls are Vulgar. If an additional 1L is spent, all spells also receive a -1 Vulgarity modifier",
                "Book": "WF 134",
                "Content": [
                    {
                        type: "paragraph",
                        text: "The most potent and esoteric teaching of the Gospel of Amon, this power requires the Knight to mortify his flesh while meditating upon a kernel of pure nothingness deep within his soul. The Knight draws this nothingness out, and from it conjures a being the Gospel calls the “Demon King of Nothing.” This demon attaches itself to the target witch, infecting her soul and corrupting her magic."
                    }
                ],
                "fullCost": "1 Willpower and 1 point of lethal damage, 1 additional point of lethal damage (optional)",
                "Action": "Contested",
                "DicePool": "Stamina + Goetic Gospels versus Resolve + Gnosis",
                "RollResults": [
                    {
                        label: "Dramatic Failure",
                        text: "The Knight is unable to maintain his focus, and the invocation collapses around him. The mental effort of the calling drains him of all his remaining Willpower."
                    },
                    {
                        label: "Failure",
                        text: "The hunter fails to overcome the witch’s defenses, and the power fails to take effect."
                    },
                    {
                        label: "Success",
                        text: "The hunter earns more successes than the witch, and the Demon King of Nothing takes root in the witch’s soul. For the duration of the scene, any spell she casts invokes Paradox, not just vulgar spells and spells that suffer a dramatic failure. Even if the witch’s Gnosis is less than 5, she suffers Paradox on all her spells (see “Paradox,” p. 138). Should the hunter choose to augment the power by further mortifying his own flesh and accepting one additional point of lethal damage, all spells additionally suffer a -1 Vulgarity Modifier."
                    },
                    {
                        label: "Exceptional Success",
                        text: "The effect lasts for 24 hours."
                    }
                ],
                "Notes": [
                    "The hunter must be able to see his target to use this power; a photograph or video will not do.",
                    "To use this power, the hunter must be in a meditative state (see the sidebar on p. 129 and the World of Darkness Rulebook, p. 51)."
                ],
            }
        ]
    },
    {
        "Name": "The Gospel of Beleth",
        "Description": "A Goetic Gospel that attacks a target's access to Source and turns stored power into harm.",
        "Book": "WF 134",
        "Content": [
            {
                "type": "paragraph",
                "text": "The Gospel of Beleth was discovered by the Knights of Saint George 45 years ago beneath a forgotten wing of an ancient temple in the Middle East. Its teachings are not yet fully understood by the order, but the Knights have deciphered three of the hidden Goetic teachings within its text, and scholarly dragonslayers suspect there are yet more to be uncovered."
            }
        ],
        "Ranks": [
            {
                "Name": "Glutenous Devourer",
                "Rank": "•",
                "Cost": "○ (1L)",
                "Dice Pool": "Wits + Goetic Gospels - Subject's Resolve",
                "Description": "Prevent the target from generating or receiving Source. The target also loses Source equal to successes rolled. If 1L is spent, the target loses 1 Willpower each time they try to generate Source",
                "Book": "WF 134",
                "Content": [
                    {
                        type: "paragraph",
                        text: "Gluttony is often an underrated sin in this day and age, but the Knights of Saint George understand its demonic influence and how it may be turned to righteous use. By meditating on the concept of gluttony and invoking the principles of the Goetic Gospels, the Knight conjures forth a ravenous imp that lives only to consume, and its food of choice is Source."
                    }
                ],
                "fullCost": "1 Willpower, 1 point of lethal damage (optional)",
                "Action": "Instant",
                "DicePool": "Wits + Goetic Gospels; subtract target’s Resolve",
                "RollResults": [
                    {
                        label: "Dramatic Failure",
                        text: "The imp gluts itself on its creator, consuming one point of Willpower."
                    },
                    {
                        label: "Failure",
                        text: "The Gluttonous Devourer fails to take form."
                    },
                    {
                        label: "Success",
                        text: "The spirit coalesces and battens itself onto the target witch, where it remains for up to 24 hours. As long as it remains attached to its victim, the spirit prevents the witch from generating or receiving Source. The Devourer consumes one point of Source per success rolled on the activation of this power, at which point it vanishes. Should the hunter choose to augment this power by mortifying his own flesh and accepting one point of lethal damage, the witch finds even the act of attempting to generate Source physically and mentally exhausting; she loses one point of Willpower each time she attempts to generate Source."
                    },
                    {
                        label: "Exceptional Success",
                        text: "In addition to being able to consume a prodigious amount of Source, the imp remains attached to its victim for one day per dot the Knight has in the Goetic Gospels Merit."
                    }
                ],
                "Notes": [
                    "The hunter must be able to see his target to use this power; a photograph or video will not do."
                ],
            },
            {
                "Name": "Servitor of Sloth",
                "Rank": "••",
                "Cost": "○ (1L)",
                "Dice Pool": "Intelligence +Goetic Gospels vs. Resolve+ Gnosis",
                "Description": "Whenever the target would use a point of Source, they must also spend a point of Willpower. If 1L was spent, the target must also succeed on a Resolve+Composure roll to spend Source.",
                "Book": "WF 134",
                "Content": [
                    {
                        type: "paragraph",
                        text: "Sloth, like Gluttony, is often an overlooked Vice. It lacks the sexiness of Lust or Wrath, or the glamorous connotations of Envy, but in the hands of a Knight of Saint George, it remains a potent weapon. By channeling a demon of Sloth and setting it upon a witch, a Knight can force her to exert tremendous effort just to expend her energies and cast a spell."
                    }
                ],
                "fullCost": "1 Willpower, 1 point of lethal damage (optional)",
                "Action": "Contested",
                "DicePool": "Intelligence + Goetic Gospels versus Resolve + Gnosis",
                "RollResults": [
                    {
                        label: "Dramatic Failure",
                        text: "The hunter is overcome by his own sloth; for the rest of the scene he must spend an additional point of Willpower to activate any Endowment. If he cannot spend this Willpower in the same turn as the Endowment or Tactic (for example, if the ability itself costs Willpower), he must spend it in the turn immediately prior."
                    },
                    {
                        label: "Failure",
                        text: "The Servitor of Sloth dissipates and has no effect."
                    },
                    {
                        label: "Success",
                        text: "The Servitor of Sloth burrows into the witch’s soul, infecting the source of her power with a supernatural lethargy and general malaise. For the rest of the scene, whenever the witch spends a point of Source, she must also spend a point of Willpower. If she cannot spend this Willpower in the same turn as the Source (for example, if the spell she casts also costs Willpower), she must spend it in the turn immediately prior. Should the hunter choose to augment this power by mortifying his own flesh and accepting one point of lethal damage, the witch must succeed on a roll of Resolve + Composure as a reflexive action to be able to spend Source. This roll comes before the Willpower expenditure."
                    },
                    {
                        label: "Exceptional Success",
                        text: "As above, but the effect lasts 24 hours."
                    }
                ],
                "Notes": [
                    "The hunter must be able to see his target to use this power; a photograph or video will not do.",
                    "To use this power, the hunter must be in a meditative state (see the sidebar on p. 129 and the World of Darkness Rulebook, p. 51)."
                ],
            },
            {
                "Name": "Poison Baubles",
                "Rank": "•••",
                "Cost": "○, 1L",
                "Dice Pool": "Presence + Goetic Gospels vs. Stamina + Gnosis",
                "Description": "The target receives Lethal damage equal to the amount of Source the target is storing up to the Hunter's Goetic Gospels rating.",
                "Book": "WF 135",
                "Content": [
                    {
                        type: "paragraph",
                        text: "Most witches aren’t content to merely gather Source when they require it; they harvest it and store it diffused throughout their flesh and blood. Most describe it as a pleasantly warm sensation — like having just drunk a glass of fine brandy. Through an intense period of mortification designed to foster a white-hot wrath, the Knights of Saint George can send forth a demon from the depths of their mind to poison the Source a witch stores within herself, inflicting savage pain upon the victim."
                    }
                ],
                "fullCost": "1 Willpower and 1 point of lethal damage",
                "Action": "Contested",
                "DicePool": "Presence + Goetic Gospels versus Stamina + Gnosis",
                "RollResults": [
                    {
                        label: "Dramatic Failure",
                        text: "The hunter’s wrath backfires and turns on him. He suffers one point of lethal damage per point of remaining Willpower."
                    },
                    {
                        label: "Failure",
                        text: "The witch receives more successes than the hunter, and the power fails to take effect."
                    },
                    {
                        label: "Success",
                        text: "The hunter receives more successes, and the demon of wrath seizes the Source that circulates through the witch’s body, turning it to a deadly poison. The witch suffers one point of lethal damage per point of Source she is currently storing, to a maximum amount of damage equal to the hunter’s dots in Goetic Gospels."
                    },
                    {
                        label: "Exceptional Success",
                        text: "In addition to suffering damage, the witch loses one point of Source per dot the Knight possesses in the Goetic Gospels Merit."
                    }
                ],
                "Notes": [
                    "This power may only be used on a given target once per scene. The hunter must be able to see his target.",
                    "To use this power, the hunter must be in a meditative state (see the sidebar on p. 129 and the World of Darkness Rulebook, p. 51)."
                ],
            }
        ]
    }
]

const ritesOfDenialOverviewData = {
    "Name": "Rites of Denial",
    "Content": [
        {
            "type": "line",
            "label": "Prerequisite",
            "text": "Status (Cainite Heresy) •"
        },
        {
            "type": "paragraph",
            "text": "This is the truth of the Cainites’ magic: they do not understand it. Sometime, a very long time ago, they were granted insight into a kind of ritualized magic (and some writings intimate that early Cainites stole such rituals from the vampires themselves), and Cainites still have access to and knowledge of these rites today. They even learn new rites. But they do not understand them, and frankly? They don’t care to."
        },
        {
            "type": "paragraph",
            "text": "To be clear, being a zealot of the Cainite Heresy is not about asking questions. It is not about deep understanding. The reality is plain: vampires exist. They are a persistent, septic infection. This menace must be destroyed at any cost, no questions asked. Cainites are encouraged to use whatever weapons are available to them, and the Rites of Denial represent one such weapon. Rites of Denial are just another tool in the arsenal, next to a lead pipe or a rough-hewn stake. Not much to grasp about a stake or a pipe, is there? Not much to grasp about the Rites of Denial, either, at least according to the Cainites."
        },
        {
            "type": "heading",
            "level": 2,
            "text": "Bloody Equations"
        },
        {
            "type": "paragraph",
            "text": [
                "Cainite rituals take a fairly simple form, but one that’s odd enough that it probably ",
                {
                    "text": "should",
                    "italic": true
                },
                " merit question, even though it doesn’t. Every Cainite carries around a small glass phial of blood taken from other Cainites, enough to fill the small vessel. Most hang the phial around the neck or even the wrist, though some choose to protect the phials more stridently (even going so far to keep the glass phial in a small metal lockbox that can sit in one’s coat pocket or glove-box)."
            ]
        },
        {
            "type": "paragraph",
            "text": "Every Rite of Denial demands use of this blood—it might be smeared on a lead pipe, drawn upon a wall (usually in the form of the Cainites’ own sigil), or upended into the mouth so it can be spat out. No Cainite magic fails to make use of the collected blood."
        },
        {
            "type": "paragraph",
            "text": "But it’s rarely just that. No, usually the strange rituals demand other actions be taken, too—a line of cakey sea salt drawn across a doorway, a bulb of garlic crushed beneath a bootheel, or a splinter of wood shimmied into the skin of the palm."
        },
        {
            "type": "paragraph",
            "text": "Think of it like an equation. In a simple equation, A + B = C, and the Rites of Denial are very much like that. Use the blood in just such a way, perform the other actions demanded with the reagents demanded, and a result occurs. No faith is necessary (though one must certainly concentrate and commit to the action, but Cainites are nothing if not committed). No prayer, no entreaties to distant powers. Some religious Cainites might evoke such additional details when casting one of the Rites of Denial, but it’s by no means necessary. A plus B equals C. It’s that simple."
        },
        {
            "type": "heading",
            "level": 2,
            "text": "Straight from the Source(s)"
        },
        {
            "type": "paragraph",
            "text": [
                "Cainites do not learn the Rites of Denial from other Cainites. They don’t gain them through meditation or starvation or prolonged prayer. No, one’s access to the Rites of Denial comes from the Sources, those mysterious missives that arrive in one’s mailbox, slide under one’s door, or ping one’s email inbox. When they (excuse us, ",
                {
                    "text": "They",
                    "italic": true
                },
                ", capital-T) want a Cainite to learn a new ritual, they get the message to her. The message tells her exactly what to do: “Hammer a bloody nail into the creature’s footprint to prevent his escape.” It’s elegantly straightforward. To most, it would be disturbing, and certainly some Cainites find it so. But, again, most grow to view it in an alarmingly pragmatic way: it’s the same as if one’s mysterious patron left a loaded handgun in the mailbox or a gift-wrapped hawthorn stake. It’s a weapon. It’d be foolish not to pick it up and use it on the creatures of the night. Wouldn’t it?"
            ]
        },
        {
            "type": "heading",
            "level": 2,
            "text": "Casting Rites of Denial"
        },
        {
            "type": "paragraph",
            "text": "Calling upon a Rite of Denial is, as noted, a direct affair. Do as the ritual demands, and it should succeed provided the Cainite is devoted enough to see its result manifest. Unless otherwise stated, casting Rites of Denial goes accordingly:"
        },
        {
            "type": "line",
            "label": "Cost",
            "text": "1 Willpower and some measure of blood (see each Rite for more information)"
        },
        {
            "type": "line",
            "label": "Dice Pool",
            "text": "Resolve + Occult"
        },
        {
            "type": "line",
            "label": "Action",
            "text": "Instant or Extended (see each rite)"
        },
        {
            "type": "paragraph",
            "text": "Note that each rite demands certain actions to be taken, and one of those actions involves expending the phial-bound blood of other Cainites. Each phial of the Cainites is the same: a small glass bottle with a cork fitted in the top. A Cainite receives this phial not from others in the conspiracy, but from the Sources themselves—often in an unmarked brown box left upon the doorstep or inside one’s car. (Lose the bottle, and one shall be resent within the week in a similar package.)"
        },
        {
            "type": "paragraph",
            "text": "Each phial must contain the blood of five Cainites (the character counts as one of the five)—and each must contribute approximately one thimble’s full of the red stuff, which fills the bottle. Each Rite of Denial necessitates expending some of that blood, and this is noted in cost as how many “thimbles” of blood must be used. If the Cainite does not have the requisite amount of blood, the rite cannot be performed. The Cainite must replenish the blood into the phial, fresh from other Cainites (likely those in his cell)—oddly, storing blood anywhere but this glass phial (say, carrying around a blood bag full of the mixture) doesn’t help with the casting of the rites. Cainites who try to use false blood—be it the blood of non-Cainites or blood that has been stored anywhere but her phial—automatically suffer a dramatic failure when casting the rite. If the cell is home to a number of Cainites, they can share phials."
        },
        {
            "type": "paragraph",
            "text": "Can non-Cainite hunters cast Rites of Denial? Technically, no, because they don’t have the phial, and they don’t have the blood of Cainites, and the Sources haven’t explained the rituals to her. That being said, a Storyteller might rule that if a character were able to get past these notable hurdles (steal a phial, steal the blood, force a Cainite to explain the casting of one such ritual), it might be possible for a non-Cainite to learn the Rites of Denial. Of course, doing so earns that individual great enmity from those hunters of the conspiracy."
        },
        {
            "type": "heading",
            "level": 2,
            "text": "Learning and Buying"
        },
        {
            "type": "paragraph",
            "text": [
                "The way a Cainite learns Rites of Denial is curious, because technically it means the Cainite is not herself in control of when she gains a new rite. Of course, the ",
                {
                    "text": "player",
                    "italic": true
                },
                " still is—when the player is ready to purchase a new Rite of Denial, she may. The character then receives the knowledge from the Sources."
            ]
        },
        {
            "type": "paragraph",
            "text": "A character may theoretically know as many Rites of Denial as she cares to—it’s not limited by Status or even by points purchased in the Endowment. Each Rite of Denial costs five experience points to learn, though the first one’s free when the character purchases the first dot (only) of this Endowment. (Alternately, if a character starts play with this Endowment, he can take one ritual per dot purchased in the Endowment.)"
        },
        {
            "type": "paragraph",
            "text": "The Rites of Denial available for purchase are found below."
        },
        {
            "type": "heading",
            "level": 2,
            "text": "Vigilant in Ignorance"
        },
        {
            "type": "paragraph",
            "text": "The Cainites willfully dismiss investigation into the Rites of Denial. We’re not dismissing it, and it’s likely that players’ characters won’t dismiss it, either. But the hunters of this conspiracy do, just as they willfully ignore many things about their group. They receive mysterious messages. They ask a strange question. They don’t look deeper than that. Looking deeper isn’t encouraged. Those who look for answers find themselves brainwashed, programmed, or water-boarded into keeping their eyes pressed firmly shut on these issues. Those who keep up the poking and prodding are left outside the conspiracy—forever."
        },
        {
            "type": "paragraph",
            "text": "It’s appropriate, then, that these Rites of Denial involve more than just denying vampires access to their supernatural ways. It’s also about Cainites denying their own origins, their own hypocritical ways, their tangle of secrets that drag behind them."
        },
        {
            "type": "heading",
            "level": 2,
            "text": "Only Vampires?"
        },
        {
            "type": "paragraph",
            "text": [
                "Do the Rites of Denial only work upon vampires? Technically, no. Actually, they work on any unliving creature—a shuffling zombie, a Reanimated ",
                {
                    "text": "tabula rasa",
                    "italic": true
                },
                ", even a manifested ghost. They ",
                {
                    "text": "also",
                    "italic": true
                },
                " work on any creature bound to or formed from vampire’s blood, which means that the thralls and addicts indebted to a bloodsucker can feel the pain brought on by the Rites of Denial."
            ]
        },
        {
            "type": "paragraph",
            "text": "But what about, say, werewolves? Changelings? Witches? Nope. However, maybe you’re a gracious Storyteller and you want to tell a story about a pack of rampant crow-faced monsters wreaking havoc on a small town, and some of the players are playing Cainites. If you choose to allow the Rites of Denial to operate upon such blatantly non-vampiric creatures, please do so. But an additional cost should be incurred: each Rite of Denial now demands three Willpower be spent instead of the normal one."
        }
    ],
    "Book": "149"
}

const ritesOfDenialData = [
    {
        "Name": "Aggravate",
        "Cost (Xt = X thimbles of blood)": "○, 2t",
        "Description": "Weapon now deals Lethal damage and gains a bonus equal to dots in Rites of Denial. The bonus only applies to Vampires, minions of Vampires and unliving creatures.",
        "Book": "NS 151",
        "Content": [
            {
                "type": "paragraph",
                "text": [
                    "The word comes down from the Sources: drizzle some of the phial blood upon a weapon held in one’s hand."
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    "Use one’s forefinger to swirl the blood into a rough approximation of the Cainite sign. The instrument now feels heavier. More powerful. The Cainite’s hand hums, and he hears the rush of blood in his ears. This can only be cast upon hand-held weapons whose use is dictated by the Weaponry Skill (no firearms, for instance)."
                ]
            }
        ],
        "fullCost": "1 Willpower, 2 thimbles of blood",
        "Action": "Instant",
        "RollResults": [
            {
                "type": "heading",
                "text": [
                    "Roll Results"
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    {
                        "text": "Dramatic Failure:",
                        "bold": true
                    },
                    " The weapon in hand suffers immediate Structure damage equal to the Cainite’s dots in this Endowment."
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    {
                        "text": "Failure:",
                        "bold": true
                    },
                    " The weapon feels empowered, but gains no bonus, otherwise."
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    {
                        "text": "Success:",
                        "bold": true
                    },
                    " The weapon seems to vibrate in the Cainite’s hand. It feels stronger. For the remainder of the scene, the weapon now gains a bonus equal to the Cainite’s dots in Rites of Denial. In addition, even if the weapon would previously have done only bashing (a lead pipe, for instance), it now does lethal damage. However, this weapon’s bonus only applies to attacks"
                ]
            }
        ]
    },
    {
        "Name": "Befoul",
        "Cost (Xt = X thimbles of blood)": "○, 4t",
        "Description": "If a Vampire sleeps in the targeted location, they receive 1L per hour slept there and cannot spend Blood for any purpose",
        "Book": "NS 151",
        "Content": [
            {
                "type": "paragraph",
                "text": [
                    "This Rite of Denial represents a cruel trick, but what do the Cainites care? Their only goal is to see vampires eradicated from the earth, and if this ritual helps to accomplish that by even a tiny margin, then kudos all around. By sprinkling the phial’s blood, a bag of salt and a handful of dead leaves in and around a location, the Cainite has “fouled the nest” (or as some say, “salted the earth”) in regards to the vampire. The Cainite symbol must also be marked on every wall, also in blood. The vampire may not slumber in such a place. The vampire may not use Dread Powers in such a place. The vampire can’t spend Willpower (blood) in such a place. The locale is cursed, made toxic to the creature."
                ]
            }
        ],
        "fullCost": "1 Willpower, 4 thimbles of blood",
        "Action": "Extended (the larger the area to be “spoiled,” the more successes are necessary—a small apartment needs five successes, a warehouse would demand 15 successes, and a sprawling estate would necessitate 25 successes; each roll is equal to ten minutes)",
        "RollResults": [
            {
                "type": "heading",
                "text": [
                    "Roll Results"
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    {
                        "text": "Dramatic Failure:",
                        "bold": true
                    },
                    " The Cainite traps himself in the location. He finds himself unable to leave: doors will not yield to him, nor will windows. This lasts for one hour."
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    {
                        "text": "Failure:",
                        "bold": true
                    },
                    " The rite does not take hold."
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    {
                        "text": "Success:",
                        "bold": true
                    },
                    " The nest is fouled, the earth salted. This lasts for one night per dot possessed in this Endowment. The vampire cannot slumber here during this time—if the vampire does fall asleep here (in other words, the sun rises and the vampire unwittingly tumbles into daysleep), he takes one point of lethal damage per hour spent. The vampire may not activate any Dread Powers while within this place, nor can it spend Willpower (blood) for any purpose (healing, for instance)."
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    {
                        "text": "Exceptional Success:",
                        "bold": true
                    },
                    " As above, and now the vampire suffers -1 to Initiative while within the befouled location."
                ]
            }
        ]
    },
    {
        "Name": "Behold",
        "Cost (Xt = X thimbles of blood)": "○, 1t",
        "Description": "All non-hidden Vampires within sight are revealed for what they are",
        "Book": "NS 152",
        "Content": [
            {
                "type": "paragraph",
                "text": [
                    "The Cainite dabs the phial blood upon his skin, drawing the symbol of the conspiracy upon his forehead—it signals revelation. It signals war. With this Rite of Denial, the blood-hungry monsters are revealed."
                ]
            }
        ],
        "fullCost": "1 Willpower, 1 thimble of blood",
        "Action": "Instant",
        "RollResults": [
            {
                "type": "heading",
                "text": [
                    "Roll Results"
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    {
                        "text": "Dramatic Failure:",
                        "bold": true
                    },
                    " The Cainite suffers a migraine behind her eyes—all Perception rolls suffer a penalty equal to the dots possessed in this Endowment."
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    {
                        "text": "Failure:",
                        "bold": true
                    },
                    " The sigil upon the head grants the Cainite nothing."
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    {
                        "text": "Success:",
                        "bold": true
                    },
                    " All vampires within sight are revealed as what they are, only moreso—they appear truly vile, with gaping maws full of teeth and hands tipped with crooked talons. This doesn’t count towards those vampires who are hiding using the Stealth Skill or other Dread Powers—however, it does grant the Cainite a measure of aid when trying to spot such hidden creatures. The Cainite can add her dots in this Endowment to any rolls made to pierce natural or supernatural Stealth."
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    {
                        "text": "Exceptional Success:",
                        "bold": true
                    },
                    " As above, but the Cainite regains the spent point of Willpower. His sight and power is confirmed and it fills him with certainty of purpose."
                ]
            }
        ],

    },
    {
        "Name": "Deny",
        "Cost (Xt = X thimbles of blood)": "○, 2t",
        "Description": "Create a barrier that blocks the access of Vampires",
        "Book": "NS 152",
        "Content": [
            {
                "type": "paragraph",
                "text": [
                    "A line of sea salt left upon the threshold of a door—and coupled with a drizzling of phial’s blood—can prevent a vampire from entering through that doorway. The vampire simply is unable to conjure the will necessary to bring his body through the door (or window or other portal). The Cainite may invite a vampire through, however—at which point the chosen creature may enter freely."
                ]
            }
        ],
        "fullCost": "1 Willpower, 2 thimbles of blood",
        "Action": "Instant",
        "RollResults": [
            {
                "type": "heading",
                "text": [
                    "Roll Results"
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    {
                        "text": "Dramatic Failure:",
                        "bold": true
                    },
                    " The ritual fails. The remaining blood in the Cainite’s phial suddenly boils over; it’s all gone and cannot be reclaimed."
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    {
                        "text": "Failure:",
                        "bold": true
                    },
                    " The line of salt and the trickle of blood fail to provide the barrier that the Cainite desires."
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    {
                        "text": "Success:",
                        "bold": true
                    },
                    " The doorway is protected for one hour per dot the caster possesses in this Endowment. No vampire can cross that line of salt and blood. If someone attempts to throw the vampire through the door, the creature rebounds off of it, failing to pass—and, in addition, suffers one point of bashing damage in the process. Some Dread Powers will work across the barrier, however—if the vampire can still see the eyes of someone on the other side, for instance, he could attempt a Dread Power like Terrify."
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    {
                        "text": "Exceptional Success:",
                        "bold": true
                    },
                    " As above, but when the vampire encounters the barrier, he loses one point of Willpower (i.e. stolen blood)."
                ]
            }
        ],

    },
    {
        "Name": "Evade",
        "Cost (Xt = X thimbles of blood)": "○, 1t",
        "Description": "Gain Speed bonus equal to Endowment dots.",
        "Book": "NS 153",
        "Content": [
            {
                "type": "paragraph",
                "text": [
                    "The creatures of the night can be swift—so it behooves a Cainite to be fast, or even better, faster. The Cainite smears a line of blood on the ground with her thumb, and then steps over it. If her Sources were right, then she may gain preternatural swiftness when dealing with the bloodsucking fiends."
                ]
            }
        ],
        "fullCost": "1 Willpower, 1 thimble",
        "Action": "Instant",
        "RollResults": [
            {
                "type": "heading",
                "text": [
                    "Roll Results"
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    {
                        "text": "Dramatic Failure:",
                        "bold": true
                    },
                    " The hunter fails to gain any benefit. In addition, her legs seize with terrible cramps for the remainder of the scene. Her Speed is halved, and any rolls necessitating use of her legs (such as an Athletics roll for jumping) suffer -3 dice."
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    {
                        "text": "Failure:",
                        "bold": true
                    },
                    " The Cainite gains no such swiftness."
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    {
                        "text": "Success:",
                        "bold": true
                    },
                    " For the next hour, the Cainite gains a bonus to her Speed whenever involved in chasing down or being chased by a vampire (Foot Chase mechanics are likely to be involved, though not necessarily). This bonus is equal to twice the character’s dots in the Endowment."
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    {
                        "text": "Exceptional Success:",
                        "bold": true
                    },
                    " As above, and the hunter also gains +1 to Initiative when in combat with a vampire."
                ]
            }
        ],
    },
    {
        "Name": "Invoke",
        "Cost (Xt = X thimbles of blood)": "○, 3t",
        "Description": "Create an apotrope that repels Vampires and deals 1 Aggravated damage if it touches them.",
        "Book": "NS 153",
        "Content": [
            {
                "type": "paragraph",
                "text": [
                    "Most vampires find the traditional apotropaics nothing more than a trivial annoyance: garlic does not repel them, holy water fails to sear the undead flesh, and silver is nothing more than shiny metal. With this Rite of Denial, the Cainite can confirm the truth behind the stories and force such apotropes to work for a time. The Cainite must choose one traditional apotropaic—it can be a common one such as the garlic noted above, or something more uncommon in folklore such as poppy seeds or a bundle of wild roses. The Cainite must hold some of the phial blood in his mouth and then spit it over the folkloric apotrope. For a time, the object will repel—and even harm—vampires."
                ]
            }
        ],
        "fullCost": "1 Willpower, 3 thimbles of blood",
        "Action": "Extended (a number of successes are needed equal to 10 minus the character’s dots in this Endowment; each roll is equivalent to one turn’s worth of spitting or drooling blood upon the apotrope)",
        "RollResults": [
            {
                "type": "heading",
                "text": [
                    "Roll Results"
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    {
                        "text": "Dramatic Failure:",
                        "bold": true
                    },
                    " The mouthful of blood brings on a terrible bout of nausea. The character suffers -2 to all rolls until she is able to achieve eight hours of uninterrupted sleep."
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    {
                        "text": "Failure:",
                        "bold": true
                    },
                    " The apotrope fails to affect the vampire."
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    {
                        "text": "Success:",
                        "bold": true
                    },
                    " For the remainder of the night—until dawn—the apotrope works to repel vampires. Vampires may not come within 10 yards of the apotrope without succeeding first on a Resolve + Composure roll, and this roll is penalized by the Cainite’s dots in this Endowment. In addition, if the apotrope can be held to the flesh of the vampire, it does the creature harm: one point of aggravated damage per turn of exposure. Note that doing so likely to inspire the vampire to immediately enter frenzy (p. 163)."
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    {
                        "text": "Exceptional Success:",
                        "bold": true
                    },
                    " As above, but the range is extended to 20 yards."
                ]
            }
        ],
    },
    {
        "Name": "Mark",
        "Cost (Xt = X thimbles of blood)": "○, 2t",
        "Description": "Gain bonus die equal to endowment to stake or decapitate a Vampire",
        "Book": "NS 153",
        "Content": [
            {
                "type": "paragraph",
                "text": [
                    "The coppery taste of blood and coins in the mouth can, for some unknown reason, give the Cainite a sense of potent focus. Using this Rite of Denial demands that the Cainite let a coin soak in phial’s blood for up to one hour. Then, the Cainite must hold the coin ",
                    {
                        "text": "and the blood",
                        "italic": true
                    },
                    " in his mouth. His hand and eyes work with sudden determination and concentration when attempting to waylay a monstrous vampire."
                ]
            }
        ],
        "fullCost": "1 Willpower, 2 thimbles of blood",
        "Action": "Instant (though note that the coin must soak for one hour before casting)",
        "RollResults": [
            {
                "type": "heading",
                "text": [
                    "Roll Results"
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    {
                        "text": "Dramatic Failure:",
                        "bold": true
                    },
                    " The character swallows the coin and the blood. It burns on the way down, confirmation of her worthlessness. The character suffers one point of lethal damage. In addition, talking is difficult until the wound heals, incurring a -1 penalty to those Social rolls necessitating speech."
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    {
                        "text": "Failure:",
                        "bold": true
                    },
                    " The bloody coin fails to provide the focus necessary."
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    {
                        "text": "Success:",
                        "bold": true
                    },
                    " The character gains a number of bonus dice equal to her dots in this Endowment. These bonus dice apply only to rolls meant to stake a vampire or ",
                    {
                        "text": "decapitate",
                        "italic": true
                    },
                    " a vampire. The penalty for target rolls still applies, of course, but ideally the bonus dice will lessen or entirely obviate those negative modifiers. The effect lasts for one scene, or until the hunter fails to hold the mouthful of blood and coin (whichever comes first). If, for instance, the hunter is struck in combat, the Storyteller may demand a roll (Resolve + Composure) to determine if the hunter can keep the blood and coin in his mouth without ejecting or accidentally swallowing. The effects end if the blood and coin leave the mouth."
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    {
                        "text": "Exceptional Success:",
                        "bold": true
                    },
                    " As above, and in addition, the hunter gains +1 to Initiative."
                ]
            }
        ],
    },
    {
        "Name": "Obligate",
        "Cost (Xt = X thimbles of blood)": "○, 2t",
        "Description": "Fix a Vampire to the ground.",
        "Book": "NS 154",
        "Content": [
            {
                "type": "paragraph",
                "text": [
                    "If a vampire leaves any kind of footprint—be it in mud, on a carpet, or outlined in dirt on a cement floor—then the Cainite can endeavor to fix the vampire to that spot. A rusted nail must be made slick with blood from the phial. When the nail is placed within the borders of the footprint, the vampire—wherever he may be at the time—is held in place, or “obligated to remain,” as some Cainites put it. This must be cast within one hour of the footprint being left behind. If the Cainite attempts to use this ritual after an hour has passed, the attempt automatically results in a dramatic failure."
                ]
            }
        ],
        "fullCost": "1 Willpower, 2 thimbles of blood",
        "Action": "Extended (the blood must be rubbed into the rusted nail; this roll necessitates a number of successes equal to the vampire’s Speed score, and each roll equals one turn’s worth of time)",
        "RollResults": [
            {
                "type": "heading",
                "text": [
                    "Roll Results"
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    {
                        "text": "Dramatic Failure:",
                        "bold": true
                    },
                    " The nail burns the hand of the Cainite, and the hunter suffers a point of bashing damage as a result. In addition, the vampire gains +2 to his Speed for the remainder of the night."
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    {
                        "text": "Failure:",
                        "bold": true
                    },
                    " The nail sits within the frame of the footprint... and that’s all."
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    {
                        "text": "Success:",
                        "bold": true
                    },
                    " The hunter achieves the necessary successes. Wherever the vampire is at the time the Rite of Denial takes hold, its one foot becomes fixed to the ground for ten minutes per dot possessed in this Endowment. The vampire can unmoor his foot by succeeding on a Resolve + Composure roll and spending a point of Willpower, but after doing so the foot still feels numb, as if the animating Blood of the fiend fails to circulate to that limb. The result is the same once the time of “obligation” is complete (numb foot). As a result, even if the vampire frees himself for the remainder of the night, he operates at half of his Speed (round down)."
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    {
                        "text": "Exceptional Success:",
                        "bold": true
                    },
                    " As above, but the vampire cannot unmoor his foot. He is frozen in place wherever he is for the duration. After that time, as noted, his Speed is halved for the remainder of the night."
                ]
            }
        ],

    },
    {
        "Name": "Pilfer",
        "Cost (Xt = X thimbles of blood)": "○ ,3t",
        "Description": "Know a secret a Vampire doesn't want known",
        "Book": "NS 154",
        "Content": [
            {
                "type": "paragraph",
                "text": [
                    "Vampires are creatures of many secrets—lost truths and stolen knowledge lie within the lockbox of the vampire’s mind. This Rite of Denial offers the Cainite a chance to extract one such secret from the seemingly impenetrable memory of the fiendish bloodsucker. Performing this rite demands that the Cainite put several drops of the phial’s blood into her own ears before asking this question of the vampire: “What do you know?”"
                ]
            }
        ],
        "fullCost": "1 Willpower, 3 thimbles of blood",
        "Action": "Instant and contested (vampire rolls Resolve + Potency)",
        "RollResults": [
            {
                "type": "heading",
                "text": [
                    "Roll Results"
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    {
                        "text": "Dramatic Failure:",
                        "bold": true
                    },
                    " The Cainite suddenly speaks one of her own secrets aloud."
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    {
                        "text": "Failure:",
                        "bold": true
                    },
                    " The vampire’s secrets are safe. For now."
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    {
                        "text": "Success:",
                        "bold": true
                    },
                    " The vampire needn’t speak aloud, but one of his secrets suddenly is made manifest within the Cainite’s own mind. This secret is something the vampire doesn’t want ",
                    {
                        "text": "anyone",
                        "italic": true
                    },
                    "—particularly the Cainite—to know. It can only be used successfully once upon a given vampire. All subsequent attempts on that vampire incur a dramatic failure."
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    {
                        "text": "Exceptional Success:",
                        "bold": true
                    },
                    " As above, and in addition, the Cainite pilfers one of the vampire’s Willpower points. The vampire loses it. The Cainite gains it."
                ]
            }
        ],

    },
    {
        "Name": "Prohibit",
        "Cost (Xt = X thimbles of blood)": "○, 2t",
        "Description": "Another person's blood offer no nourishment to Vampires and when drunk, deals damage to the Vampire equal to the caster's Endowment dots",
        "Book": "NS 154",
        "Content": [
            {
                "type": "paragraph",
                "text": [
                    "The Cainite drizzles some of the phial’s blood on each wrist of one she hopes to protect—then smears each into a forbidding ‘x’ upon the tender skin. She must ask the target a question, the question: “Who is Cain?” After which, the blood within the target grows colder, as if a saline rush runs suddenly through the veins. Vampires will find no sustenance from that blood, now, and in fact it will do the creature harm."
                ]
            }
        ],
        "fullCost": "1 Willpower, 2 thimbles of blood",
        "Action": "Instant",
        "RollResults": [
            {
                "type": "heading",
                "text": [
                    "Roll Results"
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    {
                        "text": "Dramatic Failure:",
                        "bold": true
                    },
                    " The blood starts to burn upon the target’s wrists, causing the individual one point of lethal damage. Even after the damage heals, scars remain forever."
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    {
                        "text": "Failure:",
                        "bold": true
                    },
                    " The phial’s blood fails to offer any kind of protection."
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    {
                        "text": "Success:",
                        "bold": true
                    },
                    " The target—or, at least, her blood—is protected. A vampire who attempts to drink from the victim finds that the blood offers no sustenance. In addition, even a single taste of the blood causes the vampire great anguish: the vampire takes a number of lethal points of damage equal to the caster’s dots in this Endowment. This damage occurs only once—the vampire can continue drinking from that vessel without additional suffering, but the blood still offers zero value to the consuming creature. Note that the caster cannot use this Rite of Denial on herself. This protection lasts until the next sun-up or sundown, whichever comes first."
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    {
                        "text": "Exceptional Success:",
                        "bold": true
                    },
                    " As above, but the protection lasts for a full 24 hours."
                ]
            }
        ],
    },
    {
        "Name": "Question",
        "Cost (Xt = X thimbles of blood)": "○, 5t",
        "Description": "Give a Vampire a Severe Derangement",
        "Book": "NS  155",
        "Content": [
            {
                "type": "paragraph",
                "text": [
                    "The question is everything. Who is Cain? They don’t know the answer. They don’t know why it must be asked—but it ",
                    {
                        "text": "must be asked",
                        "italic": true
                    },
                    ". Those who know this ritual can poison the mind of a vampire with the question as easily as a vampire can poison the mind of an unwitting mortal. The Cainite must paint her tongue and teeth with the blood one hour before she hopes to ask the question of a monster. She must also chew a sprig or leaf of mint."
                ]
            }
        ],
        "fullCost": "1 Willpower, 5 thimbles of blood",
        "Action": "Reflexive",
        "RollResults": [
            {
                "type": "heading",
                "text": [
                    "Roll Results"
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    {
                        "text": "Dramatic Failure:",
                        "bold": true
                    },
                    " The character cannot ask the question: it sticks in her throat, and she suddenly feels woefully unworthy. She gains a mild derangement of the Storyteller’s choosing."
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    {
                        "text": "Failure:",
                        "bold": true
                    },
                    " The question bears no metaphysical weight."
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    {
                        "text": "Success:",
                        "bold": true
                    },
                    " The question reaches the vampire’s ears. The creature cannot stand the question. It worms into her ear and mind like a chewing maggot. It drives her mad—literally. She gains a severe derangement of the player’s choosing (the ",
                    {
                        "text": "character",
                        "italic": true
                    },
                    " does not choose; note the distinction), and suffers under this derangement for one month per dot the Cainite possesses in this Endowment."
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    {
                        "text": "Exceptional Success:",
                        "bold": true
                    },
                    " As above, but the vampire suffers -1 to any Resolve + Composure rolls made to resist that derangement during those months."
                ]
            }
        ],
    },
    {
        "Name": "Reflect",
        "Cost (Xt = X thimbles of blood)": "○, 1t",
        "Description": "Powers against the Hunter that would require eye contact get a penalty equal to the Hunter's Endowment dots.",
        "Book": "NS 156",
        "Content": [
            {
                "type": "paragraph",
                "text": [
                    "The evil eye—a stylized blue oculus—is thought to ward off evil. For the Cainite, it can. The Cainite whispers the question, “Who is Cain?” and draws the evil eye over one of her own eyes in blood withdrawn from the phial. Before the blood dries, she must fleck it with kohl (ground galena), mascara, coal dust, or some other kind of black dirt or makeup. For a time, she is protected against some of the Dread Powers of the vampire."
                ]
            }
        ],
        "fullCost": "1 Willpower, 1 thimble",
        "Action": "Extended (character needs a number of successes equal to 10 minus her Resolve score; each roll equals one minute’s worth of application)",
        "RollResults": [
            {
                "type": "heading",
                "text": [
                    "Roll Results"
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    {
                        "text": "Dramatic Failure:",
                        "bold": true
                    },
                    " The blood drips into the eye, burning it. For the next hour, the character suffers as if possessing the One Eye Flaw (p. 219, ",
                    {
                        "text": "World of Darkness Rulebook",
                        "bold": true
                    },
                    ")."
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    {
                        "text": "Failure:",
                        "bold": true
                    },
                    " The evil eye affords her no defense against the dark arts."
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    {
                        "text": "Success:",
                        "bold": true
                    },
                    " Any vampire that tries to use a Dread Power upon the hunter that necessitates eye contact will find her efforts soundly rebuffed. The vampire suffers a penalty to the Dread Power roll equal to the character’s dots in this Endowment. In addition, if the vampire fails the Dread Power roll, then the vampire actually suffers its effects instead of the hunter. (If the vampire were to use Hypnotism—found on p. 279 of ",
                    {
                        "text": "Hunter: The Vigil",
                        "bold": true
                    },
                    "—upon the hunter and failed, then the vampire would perform whatever suggested action it sought to implant within the hunter’s mind.) This Rite of Denial works upon the following Dread Powers (even if they don’t specifically state requiring eye contact): Alter Memory, Ecstasy, Fury, Hypnotism, Sleep and Terrify. The Storyteller may allow this to work on other Dread Powers, however. This ritual’s protection lasts for one hour."
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    {
                        "text": "Exceptional Success:",
                        "bold": true
                    },
                    " The hunter is also afforded a +1 to all Perception rolls for one hour."
                ]
            }
        ],
    },
    {
        "Name": "Unmask",
        "Cost (Xt = X thimbles of blood)": "○, 1t",
        "Description": "Make a Vampire illuminate brightly and appear in all media and mirrors",
        "Book": "NS 156",
        "Content": [
            {
                "type": "paragraph",
                "text": [
                    "Vampires are hard to track in this modern world because of the inability of media and reflective surfaces to capture their images (think of the photographic blur or the distortion of the vampire’s visage in the mirror). Also, vampires have tricks to force their human prey to overlook the more glaring and obvious signs that they are walking corpses. With this Denial, a Cainite daubs blood from the phial onto his own eyelids. The first vampire the Cainite looks upon is suddenly revealed to the world: the creature shows up perfectly in media and in mirrors (so perfectly, in fact, the creature stands out). In addition—and to some Cainites, more importantly—those nearby the vampire suddenly suffer an inexplicable fear of the creature, unconsciously recognizing it as a walking corpse. They do not instantly panic, but most humans (with Willpower of 5 or below) will hurry away with a steady step."
                ]
            }
        ],
        "fullCost": "1 Willpower, 1 thimble of blood",
        "Action": "Instant",
        "RollResults": [
            {
                "type": "heading",
                "text": [
                    "Roll Results"
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    {
                        "text": "Dramatic Failure:",
                        "bold": true
                    },
                    " The creature gains a measure of strength. It now gains +2 to any Stealth rolls it makes over the next scene."
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    {
                        "text": "Failure:",
                        "bold": true
                    },
                    " The blood on the eyelids dries and flakes off immediately; the effect is not made manifest."
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    {
                        "text": "Success:",
                        "bold": true
                    },
                    " As above. The vampire now shows up brightly and blatantly in all media and in mirrors. In addition, any humans within sight of the creature will try to escape the scene (most will do so surreptitiously). Those at or beneath Willpower 5 must spend a point of Willpower to remain nearby. Those of Willpower 6 or higher needn’t spend any points, but must succeed on a Resolve + Composure roll to remain in sight of the vampire. The Cainite casting this Rite of Denial is unaffected by it, but other hunters are affected as normal humans. The vampire has a difficult time hiding from sight—any attempts at Stealth (including those fueled by Dread Powers) suffer a penalty equal to the Cainite’s dots in this Endowment."
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    {
                        "text": "Exceptional Success:",
                        "bold": true
                    },
                    " As above, but attempts at Stealth ",
                    {
                        "text": "require",
                        "italic": true
                    },
                    " the vampire to expend one point of Willpower (on top of any costs necessitated by, say, Dread Powers). The penalty to Stealth also remains."
                ]
            }
        ],
    }
]

const otherEndowmentData = [
    {
        "Name": "The All-Seeing Eye (• to •••••)",
        "Description": "Gain access to one private information stream per dot in the Endowment",
        "Compact or Conspiracy": "Network Zero",
        "Book": "C&C 32",
        "Content": [
            {
                "type": "paragraph",
                "text": [
                    {
                        "text": "Effect:",
                        "bold": true
                    },
                    " Network Zero is best-served by the technology that they use to capture the supernatural, and this Merit speaks toward that purpose."
                ]
            },
            {
                "type": "paragraph",
                "text": "For every dot purchased in this Merit, the hunter gains access to one normally-private stream of information, within reason (Storyteller’s discretion applies). The hunter might be able to access local ATM cameras, stop light cameras, the CCTV system at a local company, the RFID tracking map of the same company, etc. Each dot is representative of one such “stream” of information."
            },
            {
                "type": "paragraph",
                "text": "Accessing that stream generally requires no roll, though it does likely require that the hunter be near a computer, or at least a capable device (phones with higher-end operating systems and browsers). A roll is only necessary when the hunter is using a locked computer or accessing a truly private information stream."
            },
            {
                "type": "paragraph",
                "text": "Each dot can only apply to connected systems. If the hunter chooses “ATM cameras,” that dot only applies toward ATM cameras of a certain bank or machine brand—Bank of America’s ATM feeds don’t connect with Wachovia’s machines, and so two dots would be necessary to have access to both."
            },
            {
                "type": "paragraph",
                "text": "Some restrictions do apply: the hunter cannot access supernaturally-held systems, for instance. If a series of vampire havens are guarded by CCTV, the hunter cannot gain easy access to those with this Merit. (Though the hunter may eventually be able to hack into those feeds, that would be the provenance of an extended roll, not this Merit.)"
            },
            {
                "type": "paragraph",
                "text": [
                    {
                        "text": "Drawback:",
                        "bold": true
                    },
                    " Every time the hunter connects to an information stream represented by this Endowment, the Storyteller should roll a die in private. If that die comes up a ‘1,’ then the hunter is caught. The hunter loses access to that information stream (gaining half the experience points back used to buy that dot), and is now on the radar for having hacked that system."
                ]
            }
        ]
    },
    {
        "Name": "Bacchanal (• to •••••)",
        "Description": "Multiplying the points in this endowment times two, the Hunter is allowed to: purchase dots as a Social bonus towards Ashwood Abbey members only (Max +5); Ensure a guest with the Fame Merit can attend the event (Points spend equal points in the Fame Merit); The hunter gains a Social bonus with a specific group until the end of the story (Max +5); A Social bonus with a specific supernatural group until the end of the story (Max +5); Tactics gain a three dice bonus per points spent for secondary actors.",
        "Compact or Conspiracy": "Ashwood Abbey",
        "Book": "C&C 14",
        "Content": [
            {
                "type": "paragraph",
                "text": [
                    {
                        "text": "Effect:",
                        "bold": true
                    },
                    " They don’t all refer to it as the Bacchanal—certainly some Abbey hunters gleefully embrace the ",
                    {
                        "text": "faux-pagan",
                        "italic": true
                    },
                    " trappings of Saturnalian revelry, but most don’t. They might call it a party, salon, soiree, celebration, fête, festival, or even orgy. Some engage in restrained revelry (formalwear, golf claps, ice sculptures), while others check their restraint at the door and wade into the fray with naught but harlequin masks, Taser weapons and tumescent flesh."
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    "The advantage is the same regardless of the trappings, however. The Abbey hunters possess more than just money—they possess privilege, which can be spent in ways that money cannot. The Bacchanal is one such way, and the hunter with this Endowment can, once per story, hold a ",
                    {
                        "text": "Grand Guignol",
                        "italic": true
                    },
                    " party that buys her a number of small advantages. No roll is required to hold the party. Such is the pleasure of privilege; mere possession of this Endowment gives the hunter sway over high society."
                ]
            },
            {
                "type": "paragraph",
                "text": "The number of guests that come to such a party is roughly equal to 20 times the dots possessed in this Endowment (three dots would then equal an approximate maximum of 60 attendees if the hunter desires it)."
            },
            {
                "type": "paragraph",
                "text": "The real advantage, though, is what the hunter can buy during and after the event. Before the player initiates the Bacchanal, double the dots in this Endowment: this is now a pool of points that can be spent on specific advantages (these advantages must be spent and secured before the event begins). The advantages that can be bought are as follows:"
            },
            {
                "type": "list",
                "items": [
                    [
                        {
                            "text": "Abbey Influence:",
                            "bold": true
                        },
                        " By throwing a legendary affair, the Abbey hunter can purchase a Social bonus that can be used on other Abbey members. Each point spent confers a +1 bonus (max +5). This lasts for the remainder of the story."
                    ],
                    [
                        {
                            "text": "Famous Guests:",
                            "bold": true
                        },
                        " Points can be spent to ensure the attendance of specific guests that possess the Fame Merit. The number of dots the guest has in the Fame Merit is the cost in points necessary to sway them to show."
                    ],
                    [
                        {
                            "text": "Sphere of Influence:",
                            "bold": true
                        },
                        " Choose a personal or professional sphere (politicians, advertising, supermodels, etc.). The Abbey hunter gains a Social bonus with that group equal to points spent (max +5); the bonus lasts until the end of the story. Note, too, that the Storyteller can deny this advantage over groups he thinks are unlikely to show to the party (blue-collar plumbers’ union, the homeless and so forth)."
                    ],
                    [
                        {
                            "text": "Supernatural Sway:",
                            "bold": true
                        },
                        " The hunter can purchase a bonus with a specific supernatural group—how this is “earned” should be reflected somewhat through roleplaying. Example: by torturing an infamous shapeshifter, the hunter buys influence among the vampire community that the shapeshifter long tormented. Or, by simply inviting a hedonist faction of witches, the hunter gains a bonus with that particular faction. The bonus purchased costs one point, and provides a +1 Social bonus (max +5). Bonus lasts for the remainder of the story."
                    ],
                    [
                        {
                            "text": "Tactical Advantage:",
                            "bold": true
                        },
                        " Tactics performed by an Abbey cell at the event can gain tactical advantage, because they’ve set up the advantage beforehand (removable table legs as stakes, or furniture arranged to make prey’s movement difficult). The hunter can buy up to three bonus dice (one per point spent) that is gained for all secondary actors. The primary actor gains only the bonus afforded by those successes on the secondary rolls, however."
                    ]
                ]
            }
        ]
    },
    {
        "Name": "I'm Doing Science (• to •••••)",
        "Description": "At the beginning of a hunt related scene, roll Intelligence + Investigation + I'm Doing Science, successes can be used to gain bonuses to tracking a monster that left behind evidence, learn one critical fact about the monster, or gain a bonus to their next attack against the monster",
        "Compact or Conspiracy": "Null Mysteriis",
        "Book": "C&C 37",
        "Content": [
            {
                "type": "paragraph",
                "text": [
                    {
                        "text": "Effect:",
                        "bold": true
                    },
                    " This Endowment is less social than the other Compact Endowments, in that it’s built more off the hunter’s approach and equipment than it is off of the hunter’s social bonds within the organization."
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    "This Merit assumes that a Null Mysteriis hunter is equipped to carry the Vigil with an investigative, scientific (or pseudo-scientific) bent. It does not provide ",
                    {
                        "text": "specific",
                        "italic": true
                    },
                    " equipment, but rather assumes that the hunter has access to certain equipment and specialized approaches, and the better he knows how to utilize these, the more use he can bring to the hunt. It might mean he’s using a handful of Rationalist gear (pH strips, evidence baggies, microscopes) or less scientifically rigorous equipment (Kirlian cameras, energy meters, divining rods). Either way, dots in this Endowment translate into effectiveness on the hunt, useable in a variety of ways."
                ]
            },
            {
                "type": "paragraph",
                "text": "At the beginning of a hunt-related scene, the player of the hunter with this Endowment should roll that hunter’s Intelligence + Investigation + I’m Doing Science dice pool. This is an instant roll mechanically, but takes more than one turn to perform—it takes five minutes of examination and exploration."
            },
            {
                "type": "paragraph",
                "text": "Success can be used in one of the following ways once the five minutes are up:"
            },
            {
                "type": "list",
                "items": [
                    "The hunter can use what he learned to track a monster that left behind evidence at the scene (blood, etheric vapors, hair samples, etc.). The hunter gains a bonus equal to dots in this Endowment on any roll made to track the monster’s movements. The hunter gains this bonus for a number of hours equal to successes gained.",
                    [
                        "The hunter learns one critical fact about the monster—a fact that can only be discovered with some measure of scientific examination. The hunter might be able to discern the blood type or other hints about a vampire’s last meal, but not how the vampire ",
                        {
                            "text": "feels",
                            "italic": true
                        },
                        " about it. The hunter might discern that the tuft of hair caught in the old floorboards ",
                        {
                            "text": "isn’t",
                            "italic": true
                        },
                        " actually wolf hair, but, curiously, the hair of a coyote."
                    ],
                    "The hunter gains a number of successes that can be added as bonus dice to the next attack on a monster—she can use this bonus herself, or gift it to a hunter in her cell. She might see that a footprint indicates the werewolf is favoring his left leg, or that the witch’s magic is clearly born through her palms and fingerprints."
                ]
            },
            {
                "type": "paragraph",
                "text": "This Endowment can only be used once per day."
            }
        ]
    },
    {
        "Name": "Monster Media (• to •••••)",
        "Description": "Update a number of devices equal to dots in the Endowment to be able to identify monsters in their true, exposed form",
        "Compact or Conspiracy": "Network Zero",
        "Book": "C&C 33",
        "Content": [
            {
                "type": "paragraph",
                "text": "It’ll be one through five dots (• to •••••) for ease of use (and because we don’t have the space to do a brand new Endowment)."
            },
            {
                "type": "paragraph",
                "text": [
                    "Each dot purchased in Monster Media allows a Network Zero hunter to upgrade ",
                    {
                        "text": "one",
                        "italic": true
                    },
                    " piece of technology (likely a recording device of some means) so that it becomes capable of capturing and identifying a monster in its true, exposed form on the accordant form of media."
                ]
            },
            {
                "type": "paragraph",
                "text": "Let’s say Casimir Bell is a hunter in the Network Zero conspiracy. His player purchases three dots in Monster Media on his behalf."
            },
            {
                "type": "paragraph",
                "text": "He decides to take two of those dots and apply them to his cell phone."
            },
            {
                "type": "paragraph",
                "text": "Bell’s player decides that these two dots should be geared toward visually recording two types of monster on the phone’s still and video camera: ghosts, and werewolves."
            },
            {
                "type": "paragraph",
                "text": "The Storyteller wants Bell’s player to have some investment here, so he allows him to describe how those creatures appear on the cell screen. Ghosts come up as diaphanous spirits, hazy and indistinct yet present just the same. Werewolves come up looking like normal humans, but with bright yellow eyes."
            },
            {
                "type": "paragraph",
                "text": "Bell’s player also decides that he has a small handheld recording device: a tiny microphone that he can pin to his shirt like a button. He allows his third dot to go toward this item, and he lets it pick up the voices of ghosts, transmitted right to his ear. So, if ghosts in Twilight are speaking in a voice that isn’t audible to the living human ear, Casimir can hear it."
            }
        ]
    },
    {
        "Name": "The Prayer (• to •••••)",
        "Description": "If you prayed before going to sleep you get Prayer Points equal to your dots in the Endowment that can be spent to recover Willpower, transfer willpower points to others, ignore wound penalties for a turn, or resist mental domination for a turn",
        "Compact or Conspiracy": "The Long Nights",
        "Book": "C&C 19",
        "Content": [
            {
                "type": "paragraph",
                "text": [
                    {
                        "text": "Effect:",
                        "bold": true
                    },
                    " This isn’t a supernatural Endowment, though it may certainly seem to be. The hunters of the Long Night are driven by a very deep, very potent faith. This faith, as manifested in prayer, gives them a great deal of confidence and unity even (and perhaps especially) in the darkest hour."
                ]
            },
            {
                "type": "paragraph",
                "text": "At the dawn of each day, provided the hunter prayed before sleep, a Long Night hunter with the Prayer Endowment begins with a pool equal to the dots purchased in this Merit. We’ll call these “Prayer Points.”"
            },
            {
                "type": "paragraph",
                "text": "The hunter can spend these points throughout the day in a number of ways:"
            },
            {
                "type": "list",
                "items": [
                    "The hunter can “cash in” Prayer Points for Willpower points (reflexive).",
                    "The hunter can gift Willpower to other hunters in his cell, provided those hunters have dots in this Endowment. A transfer of one Willpower point costs one of his Prayer Points (reflexive). Note that the Prayer Points do not become Willpower points (as the above benefit) — the cost is for the transfer, not the transformation. It transfers already existing Willpower.",
                    "The hunter may cash in a Prayer Point to ignore wound penalties for one turn.",
                    "The hunter may spend a Prayer Point to resist mental domination for one turn—he can add his dots in this Endowment to any rolls or pools used to resist supernatural mental domination."
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    "The hunter regains his Prayer Points pool the next day ",
                    {
                        "text": "only",
                        "italic": true
                    },
                    " if he prays the night before, just prior to sleeping. He must pray for one full hour, uninterrupted."
                ]
            }
        ]
    },
    {
        "Name": "Rite of Hecate (• to •••••)",
        "Description": "If you successfully fill the rightmost health box of the target with Lethal damage and complete the ritual, gain Gnosis dots equivalent to the target up to a maximum of you Rite of Hecate rating and gain access to half of the Mysteries they have access to.",
        "Compact or Conspiracy": "The Promethean Brotherhood",
        "Book": "WF 97",
        "Content": [
            {
                "type": "paragraph",
                "text": "The Promethean Brotherhood is a compact on the verge of becoming a full-blown conspiracy. It has the global membership, and under Alexander Hite the group becomes more organized every day; it even has an Endowment of sorts, although it remains unreliable at this point. Sooner or later, though, they’re going to crack the code and figure out what they’re doing wrong, and the Rite of Hecate will work as reliably as any other Endowment. If you want to explore this evolution in your game, here is a suggestion for how the mechanics of such an Endowment might work:"
            },
            {
                "type": "heading",
                "level": 2,
                "text": "Rite of Hecate (•-•••••)"
            },
            {
                "type": "paragraph",
                "text": "You have been trained in the performance of the Rite of Hecate, an ancient human sacrifice that allows you to steal the Gnosis and magic powers of a witch."
            },
            {
                "type": "line",
                "label": "Action",
                "text": "Extended (3 successes per point of victim’s Gnosis Merit required, each roll represents 10 minutes of chanting, prayer, and ritual preparation)"
            },
            {
                "type": "line",
                "label": "Dice Pool",
                "text": "Academics + Rite of Hecate"
            },
            {
                "type": "heading",
                "level": 3,
                "text": "Roll Result:"
            },
            {
                "type": "line",
                "label": "Dramatic Failure",
                "text": [
                    "The Rite of Hecate fails immediately, you suffer one point of lethal damage per point of Gnosis your intended victim possesses, ",
                    {
                        "text": "plus",
                        "italic": true
                    },
                    " one point of lethal damage per roll you had made prior to the dramatic failure. For example, if you suffer a dramatic failure on your third roll during the sacrifice of a witch with a Gnosis of 3, you suffer six points of lethal damage."
                ]
            },
            {
                "type": "line",
                "label": "Failure",
                "text": "You fail to make progress toward completion of the rite. If you fail to acquire the requisite number of successes in a number of rolls equal to your dice pool, the Rite fails and you suffer one point of bashing damage per point of Gnosis the victim possesses."
            },
            {
                "type": "line",
                "label": "Success",
                "text": "Progress is made toward the successful completion of the Rite of Hecate. Once you have completed the Rite, you must fill your victim’s rightmost Health box with a lethal wound in a single blow (the weapon used does not matter). If you fail to do so, the Rite fails and you suffer damage as described under the effects of failure. The witch must be physically present for the entirety of the Rite; most Fire-Stealers sedate and securely bind witches before beginning the Rite. Whether the victim is drugged or not, human sacrifice for the purposes of gaining occult power is a Morality 2 sin, akin to serial murder."
            },
            {
                "type": "paragraph",
                "text": [
                    "If you successfully perform the sacrifice, you temporarily gain the Gnosis Merit at the same rating as your victim, up to a maximum of your dots in the Rite of Hecate. You gain access to ",
                    {
                        "text": "half",
                        "italic": true
                    },
                    " of the Mysteries a witch with an equivalent Gnosis would possess, and all of them must be chosen from those the sacrificial victim possessed. If you acquire a Gnosis of 5, you gain the Unseen Sense Merit for free and are afflicted by the bane of Paradox. For more information, see Gutter Magic, p. 135."
                ]
            },
            {
                "type": "paragraph",
                "text": [
                    "The effects of the Rite of Hecate last for one day per point of Gnosis the victim possessed (",
                    {
                        "text": "not",
                        "italic": true
                    },
                    " the Gnosis rating you actually acquire from the Rite). Multiple invocations of the Rite of Hecate do not stack; if you perform the Rite again while still under its effect, the Rite is treated as a dramatic failure as soon as you either earn enough successes to complete it or fail to complete the rite in a number of rolls equal to your dice pool."
                ]
            },
            {
                "type": "line",
                "label": "Exceptional Success",
                "text": "As above, but the Rite’s effects persist for one week per point of the victim’s Gnosis."
            },
            {
                "type": "paragraph",
                "text": "The preceding rules represent the Rite of Hecate in a hypothetical, fully-understood state. If you wish to use these mechanics to represent the Rite in its current, flawed state, assume that the imperfect knowledge possessed by the Promethean Brotherhood imposes a flat penalty of -2 to all rolls. (To illustrate the advances made in deciphering the Rite, during Jacob Hite’s time the penalty was -5). The Storyteller may wish to roll the dice for the Rite in secret, so players do not know whether they have succeeded or failed until they strike the killing blow."
            }
        ]
    },
    {
        "Name": "Unearthed Secrets (• to •••••)",
        "Description": "At the beginning of each story, gain a number of secrets about the monsters that will be experienced, this Endowment also acts as an occult version of Contacts.",
        "Compact or Conspiracy": "The Loyalists of Thule",
        "Book": "C&C 26",
        "Content": [
            {
                "type": "paragraph",
                "text": [
                    {
                        "text": "Effect:",
                        "bold": true
                    },
                    " The Indebted have a very loose but very potent network of information-sharing. This isn’t a group that suffers from a lot of infighting or paranoia; they share information, and they share it broadly. The more information one is willing to share in return, the higher he places himself on the chain of unearthed secrets."
                ]
            },
            {
                "type": "paragraph",
                "text": "A hunter with this Endowment gains a benefit at the beginning of a story. He can, for free, gain a number of important “secrets” about the monsters (or about other hunters, where appropriate) equal to the dots possessed in this Merit."
            },
            {
                "type": "paragraph",
                "text": "This is a great place for the Storyteller to seed new plot points and information, as well as for the Loyalist to learn information that is useful to previous stories."
            },
            {
                "type": "paragraph",
                "text": [
                    "This Endowment also has a side benefit that can be used throughout a story, as well—it is, in effect, an “Occult Contacts” Merit. It works just like the Contacts Merit in the ",
                    {
                        "text": "World of Darkness Rulebook",
                        "bold": true
                    },
                    " (pp 114-115), except each dot is geared toward character types with occult specialties: “New Age store owners,” “Diviners” or “Vampire experts.”"
                ]
            }
        ]
    },
    {
        "Name": "Your Friends and Neighbors (• to •••••)",
        "Description": "At the start of each game session, the hunter can gain one of the following benefits, a Safehouse with dots equal to dots in the Endowment, gain a social bonus to one local resident, treat the Endowment as the Allies merit, or add dots in the Endowment as a bonus to a drive roll",
        "Compact or Conspiracy": "The Union",
        "Book": "C&C 44",
        "Content": [
            {
                "type": "paragraph",
                "text": [
                    {
                        "text": "Effect:",
                        "bold": true
                    },
                    " The Union’s weapons aren’t the guns or baseball bats or car batteries. The weapons of the Union are right there in the neighborhood. A hunter who knows his neighborhood and knows its inhabitants is a hunter armed for war against the monsters. This Endowment ensures that to be true."
                ]
            },
            {
                "type": "paragraph",
                "text": "At the start of a game session, a hunter with this Endowment can choose one benefit for himself and his cell that will last the game session (though he can certainly carry it from session to session where appropriate):"
            },
            {
                "type": "list",
                "items": [
                    [
                        "He can have a temporary Safehouse (pp. 70-71, ",
                        {
                            "text": "Hunter: The Vigil",
                            "bold": true
                        },
                        ") equal to the dots in this Endowment. He can split them however he wants across the Safehouse sub-Merits (Cache, Secrecy, Size, Traps). This might be a neighbor’s house, a business closed for remodeling or an old warehouse."
                    ],
                    "He can have a Social bonus (equal to dots in this Endowment) with one local resident. He wants to use this bonus, though, he’d better be prepared to help that resident out in some way. Failure to do so means that not only can he not gain this benefit with that resident again, but it also means that dots in this Endowment become a Social penalty with that person until reparations are made.",
                    "He can choose to have the dots in this Endowment become the Allies Merit for the game session, devoted to some aspect of local life (volunteer fire dept, PTA, guardian angels, local cops, local store owners, etc.).",
                    "He can take the dots in this Endowment as a bonus to any Drive rolls made in this neighborhood (he knows how to time the lights, he knows all the shortcuts, he knows where the cops sit, etc.)."
                ]
            }
        ]
    }
]

const endowmentDetailContentFields = [
    "Content",
    "Function",
    "Effect",
    "Benefit",
    "RollResults",
    "Notes",
    "Potential Modifiers",
    "PossibleAppeasements",
    "Special",
]

const hasEndowmentDetailContent = (item) =>
    endowmentDetailContentFields.some((field) =>
        Array.isArray(item?.[field]) && item[field].some(Boolean)
    )

const addEndowmentDetailMeta = (item, category, parentName) => ({
    ...item,
    Category: category,
    ParentName: parentName,
})

const flattenEndowmentDetailItems = (items, category) => items.flatMap((item) => [
    ...(hasEndowmentDetailContent(item) ? [addEndowmentDetailMeta(item, category)] : []),
    ...(Array.isArray(item.Ranks)
        ? item.Ranks
            .filter(hasEndowmentDetailContent)
            .map((rank) => addEndowmentDetailMeta(rank, category, item.Name))
        : []),
])

const endowmentDetailData = [
    advancedArmoryOverviewData,
    ...flattenEndowmentDetailItems(advancedArmoryData, "Advanced Armory"),
    benedictionOverviewData,
    ...flattenEndowmentDetailItems(benedictionData, "Benediction"),
    castigationOverviewData,
    ...flattenEndowmentDetailItems(castigationData, "Castigation"),
    elixirOverviewData,
    ...flattenEndowmentDetailItems(elixirData, "Elixir"),
    relicOverviewData,
    ...flattenEndowmentDetailItems(relicData, "Relic"),
    ritesDuChevalOverviewData,
    ...flattenEndowmentDetailItems(ritesDuChevalData, "Rites du Cheval"),
    thaumatechnologyOverviewData,
    ...flattenEndowmentDetailItems(thaumatechnologyData, "Thaumatechnology"),
    teleinformaticsOverviewData,
    ...flattenEndowmentDetailItems(teleinformaticsData, "Teleinformatics"),
    goeticGospelOverviewData,
    ...flattenEndowmentDetailItems(goeticGospelData, "Goetic Gospel"),
    ritesOfDenialOverviewData,
    ...flattenEndowmentDetailItems(ritesOfDenialData, "Rites of Denial"),
    ...flattenEndowmentDetailItems(otherEndowmentData, "Other Endowments"),
]

export {
    advancedArmoryData, benedictionData, castigationData,
    elixirData, relicData, ritesDuChevalData,
    thaumatechnologyData, teleinformaticsOverviewData, teleinformaticsData,
    goeticGospelOverviewData, goeticGospelData,
    ritesOfDenialOverviewData, ritesOfDenialData, otherEndowmentData, endowmentDetailData
}
