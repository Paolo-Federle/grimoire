export const PrometheanMeritsData = [
    {
        "Name": "Acid Stomach",
        "Cost": "•",
        "Prerequisites": "",
        "Description": "digest any ingested substance, instead of purely organic",
        "Book": "SA 55",
        "Effect": [
            {
                type: "paragraph",
                text: [
                    "A Promethean’s “Superlative Constitution” already guarantees that she can eat nearly any kind of organic matter, from filet mignon to a car-crushed raccoon. With this Merit, the Promethean can eat most ",
                    { text: "inorganic", italic: true },
                    " matter, too. Whether the “food” is a roll of quarters, a handful of sand or a broken bottle, if the Promethean can get it into his mouth and down his throat, then it counts as food."
                ]
            }
        ],
        "FullPrerequisites": "",
        "Drawback": [
            {
                type: "paragraph",
                text: "This Merit doesn’t give any bonuses to chewing. The object has to be small enough to fit in her mouth and for peristalsis to carry the item down her throat. The Storyteller may also deem that an object’s composition does damage to the mouth and throat. Glass shards or jagged metal, for instance, could hurt the Promethean. Still, this Merit grants some resistance to this punishment; any damage sustained from eating non-organic material is limited to one point of bashing damage."
            }
        ],
        "Notes": [],
    },
    {
        "Name": "Azothic Object",
        "Cost": "• to •••••",
        "Prerequisites": "",
        "Description": "own a Pyros-infused object",
        "Book": "SA 55",
        "Effect": [
            {
                type: "paragraph",
                text: "The generative act would, upon initial examination, have one effect: the flare of Azoth within a once-dead body. This moment, in which a Promethean awakens “on the slab,” can have residual effect upon the monster’s immediate surroundings, too. That initial blaze of Radiance within can lash out, like a sun-flare or an arc of electricity, and imbue an object in the room with unique properties. A crude and rusted straight-razor may suddenly gleam with a newly-sharpened edge. A brittle antique bottle that once held a draught of bitter vinegar and antimony may suddenly become nearly unbreakable. A Stradivarius violin may call to the Promethean, and when he wields it, it sings and keens with eerie beauty."
            },
            {
                type: "paragraph",
                text: "This object, whatever it may be, is attuned to the Promethean. Equipment bonuses, if any, apply only to the character; a flicker of his Azoth waits within that item. If another tries to use it, be that person Promethean or mortal, the object’s bonus not only does not apply, but the user suffers a –2 penalty."
            },
            {
                type: "paragraph",
                text: "The Merit’s cost depends on the Azothic Object’s unique properties:"
            },
            {
                type: "table",
                headers: ["Property", "Merit Cost"],
                rows: [
                    ["Increased Durability", "1 dot per +2 Durability"],
                    ["Increased Structure", "1 dot per +2 Structure"],
                    ["Increased equipment bonus", "1 dot per +1 die modifier*"],
                    ["9 again", "5 dots"]
                ]
            },
            {
                type: "paragraph",
                text: "*The Azothic Object’s equipment bonus cannot be more than double the item’s normal equipment bonus."
            },
            {
                type: "paragraph",
                text: [
                    { text: "Example: ", bold: true },
                    {
                        text: "Vox Vulgus’ creator broke into the sewers beneath Philadelphia to give her perfect body life. When the spark of Azoth blazed within, the Divine Flare lashed out and touched the creator’s set of lock picks. At character creation, Vox’s player gives her four dots in this Merit. The lock picks would normally add +2 dice to appropriate Larceny rolls, but with the flare of Azoth, the picks improve dramatically. The player spends two of the four points on the equipment bonus, granting the lock picks an additional +2 bonus (for a total of a +4 equipment bonus). She also spends two dots on Durability, granting the picks +4 Durability, thus making them inordinately resilient to damage.",
                        italic: true
                    }
                ]
            }
        ],
        "FullPrerequisites": "",
        "Drawback": [
            {
                type: "paragraph",
                text: [
                    "The Azothic Object is supernaturally tied to the Promethean character who takes this Merit. If the character loses the object, her player must make a Resolve + Composure roll every time she sleeps. Failure on that roll means she suffers nightmares about the object, and for 12 hours upon waking, suffers a –1 penalty on all rolls. (A dramatic failure incurs a –2 penalty.) This ends once the object is found. If the object is ever ",
                    { text: "destroyed", italic: true },
                    ", the character’s Azoth flares up within her and burns her from the inside. At the moment the object is destroyed, the character suffers lethal damage equal to the dots spent originally in this Merit."
                ]
            }
        ],
        "Notes": [],
    },
    {
        "Name": "Companion",
        "Cost": "••• or ••••",
        "Prerequisites": "Ephemeral Flesh bestowment",
        "Description": "Spirit companion follows and aids you",
        "Book": "SA 55",
        "Effect": [
            {
                type: "paragraph",
                text: "Whether he wants it or not, the Promethean has a bond with a spirit that aids him and supports him. The ectoplasmic humour within the Promethean attracts the spirit. Like calls to like. The kind of spirit that would follow something as grotesque as a Promethean is not always the kind of spirit that a Promethean would have following him. Many are revolting or demonic in appearance and behavior, a small imp that does its master’s bidding, but cannot be commanded to leave. At rest, it sits invisibly on its master’s shoulder and whispers obscenities, lies and unpleasant truths into his ear."
            },
            {
                type: "paragraph",
                text: "The companion being is either in Twilight, invisible and immaterial, or it is embodied. A companion in Twilight has no body. An embodied companion possesses the body of an animal or bird in the material world. The spirit doesn’t suffer from Disquiet, even in the form of an animal or bird."
            },
            {
                type: "paragraph",
                text: [
                    "It costs three dots to buy a Twilight spirit as a companion. A Twilight spirit can manifest like a ghost (see “Manifestations,” the ",
                    { text: "World of Darkness Rulebook", bold: true },
                    ", p. 210), but only the Promethean whom the spirit follows can see it or talk to it. The Promethean can always see the spirit. It’s like a (hideous and sometimes unwelcome) imaginary friend for the Promethean."
                ]
            },
            {
                type: "paragraph",
                text: "Embodied companions cost four dots. The animal an embodied companion possesses is ordinary, but as the spirit enters the creature, seizes its brain and takes control of its body, the creature takes on a distinctly unhealthy look. A dog becomes yellow-toothed, mangy and flea-bitten. A rat grows to enormous size and develops an evil glint in its eye. A cat gains scars and weals in its fur. A crow’s feathers become matted and stinking."
            },
            {
                type: "paragraph",
                text: "The spirit can embody itself in any animal up to the size of a large dog. Whatever the animal is, the Promethean can understand anything the companion says to him in this form. To everyone else, the companion’s talk just sounds like animal noises."
            },
            {
                type: "paragraph",
                text: [
                    "A companion is a Rank 1 spirit (see ",
                    { text: "Promethean: The Created", bold: true },
                    ", p. 255), whether it is immaterial or embodied. The Storyteller and the Promethean’s player should work together to design the spirit’s Traits. A companion begins play with at least one dot in each Attribute, with extra dots as listed below. See ",
                    { text: "Promethean: The Created", bold: true },
                    ", pp. 255–256 for the rules that govern spirit Traits."
                ]
            },
            {
                type: "heading",
                level: 2,
                text: "Twilight Companion Traits"
            },
            {
                type: "line",
                label: "Attributes",
                text: "3/3/2 (allocate dots in any order among Power, Finesse and Resistance)"
            },
            {
                type: "line",
                label: "Willpower",
                text: "Equal to Power + Resistance"
            },
            {
                type: "line",
                label: "Essence",
                text: "10 (10 max)"
            },
            {
                type: "line",
                label: "Initiative",
                text: "Equal to Finesse + Resistance"
            },
            {
                type: "line",
                label: "Defense",
                text: "Equal to highest of Power and Finesse"
            },
            {
                type: "line",
                label: "Speed",
                text: "Equal to Power + Finesse + “species factor” (usually 5)"
            },
            {
                type: "line",
                label: "Size",
                text: "3 or less"
            },
            {
                type: "line",
                label: "Corpus",
                text: "Equal to Resistance + Size"
            },
            {
                type: "line",
                label: "Influences",
                text: "2 dots (choose one)"
            },
            {
                type: "line",
                label: "Numina",
                text: [
                    "Choose one Numen. These can be picked from the following Ghost Numina: Ghost Sign, Ghost Speech, Magnetic Disruption, Phantasm or Telekinesis (see the ",
                    { text: "World of Darkness Rulebook", bold: true },
                    ", p. 211)."
                ]
            },
            {
                type: "paragraph",
                text: "When a companion manifests, use the following modifiers:"
            },
            {
                type: "table",
                headers: ["Location", "Modifier"],
                rows: [
                    ["Its master’s lair", "+2"],
                    ["Wasteland", "+1 for each level of the Wasteland effect"],
                    ["In front of people suffering from Disquiet", "+1 for each level of Disquiet"]
                ]
            },
            {
                type: "paragraph",
                text: "Although the companion obeys its master without hesitation, the companion finds its powers are easier to use if Disquiet or Flux have affected the area around the Promethean. The companion, if left to its own devices, tries to convince its master to stay in one place and interact with humans, allowing Disquiet to build up and the Wasteland to spread."
            },
            {
                type: "heading",
                level: 2,
                text: "Embodied Companion Traits"
            },
            {
                type: "line",
                label: "Attributes",
                text: "4/4/3"
            },
            {
                type: "line",
                label: "Skills",
                text: "8/5/3"
            },
            {
                type: "line",
                label: "Willpower",
                text: "Equal to Resolve + Composure"
            },
            {
                type: "line",
                label: "Essence",
                text: "10 (10 max)"
            },
            {
                type: "line",
                label: "Initiative",
                text: "Equal to Dexterity + Composure"
            },
            {
                type: "line",
                label: "Defense",
                text: "Equal to highest of Dexterity and Wits"
            },
            {
                type: "line",
                label: "Speed",
                text: "Strength + Dexterity + “species factor” (based on its animal type)"
            },
            {
                type: "line",
                label: "Size",
                text: "4 or less (based on its animal type)"
            },
            {
                type: "line",
                label: "Health",
                text: "Equal to Stamina + Size"
            },
            {
                type: "line",
                label: "Influence",
                text: "2 dots (choose one)"
            },
            {
                type: "line",
                label: "Numina",
                text: "Choose one of the same Ghost Numina available to Twilight companions."
            },
            {
                type: "paragraph",
                text: "A companion can travel as far as it wants away from its master, although its master (or rather, the ectoplasmic humour within its master) is its anchor in the material world. No matter how far away the companion wanders, it knows when its master needs it."
            },
            {
                type: "paragraph",
                text: "The companion loses one Essence per day, and needs to feed on Essence to survive. The companion gains one Essence per day from being close to something it reflects (so a spirit born of trees gains a single point every day it stays near trees, and a spirit that reflects violence gains a single point by being close to a place where violence regularly happens, such as a street in a particularly bad neighborhood, or a boxing ring or the house of a man who beats his wife)."
            },
            {
                type: "paragraph",
                text: "Once a day, the companion can draw Essence from an appropriate source. Roll Power + Finesse. This roll is modified by the same modifiers that affect manifestations. The companion gets one Essence for every success."
            },
            {
                type: "paragraph",
                text: "A Promethean can also spend Pyros to give the companion Essence, channeling the Divine Fire through his ectoplasmic humour. Each point of Pyros the Promethean spends gives the companion one Essence."
            },
            {
                type: "paragraph",
                text: "If the companion loses all of its Essence, the companion falls into slumber. A Twilight companion vanishes, absorbed into the Promethean’s ectoplasmic humour until the Promethean awakens it by spending a point of Pyros."
            },
            {
                type: "paragraph",
                text: "On the other hand, the Promethean can spend his companion’s Essence points as Pyros, using his companion’s Essence to draw the Divine Fire back down through his humours."
            },
            {
                type: "paragraph",
                text: [
                    { text: "Improvement: ", bold: true },
                    "A Promethean’s player can improve his companion’s Traits by spending some of his character’s experience points on the companion. It costs the same number of experience points to raise a companion’s Traits as it does a Promethean’s. Power, Finesse and Resistance are Attributes, and cost (new dots x 5) experience points to raise."
                ]
            }
        ],
        "FullPrerequisites": "Ephemeral Flesh Bestowment",
        "Drawback": [],
        "Notes": [],
    },
    {
        "Name": "Device",
        "Cost": "•• to •••••",
        "Prerequisites": "Unfleshed",
        "Description": "internal mechanism",
        "Book": "SN 59",
        "Effect": [
            {
                type: "paragraph",
                text: "The Device Merit covers any number of built-in devices and capabilities that one of the Unfleshed may possess. This is a useful catch-all category to reflect anything from built-in communications devices to the ability to interface with computers to integral weaponry. This Merit should be purchased for each such device. These devices should simply be normal equipment installed in the Unfleshed — truly advanced technologies such as lasers, wall-crawling systems and so on should be purchased as Bestowments and Transmutations."
            },
            {
                type: "paragraph",
                text: "This Merit may only be purchased at character creation — once the Divine Fire has taken hold, the only changes it permits are those that make the Unfleshed more human. When the Unfleshed deploys or uses this Device, it causes the Unfleshed’s disfigurements to be revealed, as though it were using Pyros. When the Unfleshed draws on its technological heritage in this fashion, the Pyros cannot hide the Unfleshed’s true nature."
            },
            {
                type: "list",
                items: [
                    [
                        { text: "Headware Communications: ", italic: true },
                        "This Device grants the Unfleshed to use some form of mechanical communications naturally. Some examples include cell phone (••, ••• for satellite-based communication), GPS (••) or high-powered radio (•••, •••• for satellite-based communication)."
                    ],
                    [
                        { text: "Concealed Weapon: ", italic: true },
                        "The design of the Unfleshed includes a concealed blade or raised striking surface that can be deployed for purposes of violence or utility. The weapon’s damage depends on the rating of the Device. The weapon inflicts the rating of the Device in bashing damage, or the rating of the Device –1 in lethal damage. These generally mimic normal weapons (compare with those on p. 170 of the ",
                        { text: "World of Darkness Rulebook", bold: true },
                        "). At the Storyteller’s option, for a cost of one dot more, these weapons may use some kind of special effect (such as Knockout, or 9 again) if they are based on a weapon that possesses that trait."
                    ],
                    [
                        { text: "Internal Projectile Weapon: ", italic: true },
                        "The Unfleshed has a built-in firearm. It used the same traits as a normal firearm, including the necessity for ammunition. The type of weapon depends on the rating of the Device: Light Revolver or Pistol (••); Heavy Revolver or Pistol, Small SMG (•••); Large SMG, Rifle or Shotgun (••••); Assault Rifle (•••••). Strength requirements for using such weapons are reduced by one. The Unfleshed always possesses a port that can allow it to eject spent shells and load new ones. For a +1 to the cost of the weapon, the design of the firearm is such that it can store 100 rounds; otherwise the weapon stores its normal complement of ammo."
                    ],
                    [
                        { text: "Computer Interface: ", italic: true },
                        "This device grants the ability to interface with a computer, working much more quickly than a normal computer user might. This reduces the time on Computer based rolls by half, and grants a +1 to Computer rolls at ••, and a +1/dot thereafter. This also grants its bonus to making Research rolls (see the ",
                        { text: "World of Darkness Rulebook", bold: true },
                        ", p. 55), assuming there is a computer available during that research."
                    ],
                    [
                        { text: "Tools: ", italic: true },
                        "This grants the Unfleshed the ability to use a Skill that requires tools. Each Device applies to the use of a different Skill, and grants a +1 equipment bonus at ••, with a +1 bonus per dot thereafter. Examples include a set of lock picks (Larceny), basic electronics toolkit (Computer) or a built-in med kit (Medicine)."
                    ]
                ]
            }
        ],
        "FullPrerequisites": "Unfleshed",
        "Drawback": [],
        "Notes": [],
    },
    {
        "Name": "Elpis",
        "Cost": "• to •••••",
        "Prerequisites": "",
        "Description": "gain insight into Milestones",
        "Book": "PTC 95",
        "Effect": [
            {
                type: "paragraph",
                text: "The Promethean relies on Hope, the final force released from Pandora’s Box, to get him through his Pilgrimage. This aspect of the Divine Fire that calls out to Prometheans, urging them toward Mortality, is called Elpis. Promethean philosophers equate it with a guiding force, a sort of teleological principle calling from the future, drawing the Promethean down the proper paths to the New Dawn. With this Merit, the Promethean can tap into this guiding force and gain clues through dreams and visions that might aid his Pilgrimage."
            },
            {
                type: "paragraph",
                text: "Once per game session, the character can use his Elpis ability to gain a supernatural insight concerning a question or topic relevant to his Pilgrimage. Activating this ability requires at least one hour spent in sleep, a trance or another activity that focuses exclusively on accessing an altered state of consciousness. The Storyteller then rolls the character’s Wits + Composure in secret. The results are:"
            },
            {
                type: "line",
                label: "Dramatic Failure",
                text: "A nightmare. The Created can interpret it any way he wants, but it probably leads to more trouble than solutions."
            },
            {
                type: "line",
                label: "Failure",
                text: "Meaningless images."
            },
            {
                type: "line",
                label: "Success",
                text: "One or more clues (one per Elpis dot) that might help him to achieve a Pilgrimage milestone, although they must be interpreted."
            },
            {
                type: "line",
                label: "Exceptional Success",
                text: "One or more clues (one per Elpis dot), and a suggestion about their interpretation provided by the Storyteller."
            },
            {
                type: "paragraph",
                text: [
                    "The information is usually conveyed in brief visions of people, places or things that are somehow important to one of the character’s milestones, as determined by the Storyteller. (See “",
                    { text: "Summa Perfectionis", italic: true },
                    ": The Pilgrimage” on p. 190.) The exact role the subjects of these visions will play remains unclear, though. The Promethean might see a rare, medieval book behind glass. After some research, he learns it is in a museum in Chicago. He travels there and breaks into the museum at night, trying to steal the book, only to be confronted by a Promethean who makes his lair there. The Storyteller knows that this Promethean is the key to the milestone, not the book; the book merely led the character to this encounter. But will the character realize this?"
                ]
            },
            {
                type: "paragraph",
                text: "Elpis is not a means of gaining an exact roadmap to Mortality. It’s a tool for the Storyteller to help drive events of the story, especially if the character is lagging behind on his Pilgrimage."
            }
        ],
        "FullPrerequisites": "",
        "Drawback": [],
        "Notes": [],
    },
    {
        "Name": "Famous Face",
        "Cost": "• to •••",
        "Prerequisites": "",
        "Description": "influence those your corpse used to know",
        "Book": "SA 56",
        "Effect": [
            {
                type: "paragraph",
                text: "The Promethean’s body (or at least the face) used to belong to someone well-known. Prometheans are often ignorant of the nuances of human culture, and don’t often take into account who owned the bodies they use to create their progeny. The Promethean gains a +1 die pool bonus on Persuasion and Intimidation rolls when dealing with people who knew who the dead person was. Reminded of a famous (or infamous) figure, they feel an involuntary shiver, especially since a Promethean who has no idea who his body once belonged to acts as if there’s nothing weird. Meeting a dead idol (or a dead serial killer) can be a creepy experience, although most people will rationalize the meeting: “Man, didn’t she look like that supermodel chick who killed herself a couple months ago?”"
            }
        ],
        "FullPrerequisites": "",
        "Drawback": [
            {
                type: "paragraph",
                text: [
                    "Elvis is dead. No one used Elvis’ body to make a Promethean (the same goes for Kurt Cobain, Marion Monroe and Princess Di). Still, stories about Elvis turning up in supermarkets and out-of-the ways diners have circulated for years. The supermarket tabloids lap up Elvis sightings, and a report could have an out-of-the-way area crawling with hack journalists. Although a Promethean with a familiar face might find it easier to scare people, all it needs is for someone ",
                    { text: "not", italic: true },
                    " to be sensible and rational when he meets the Promethean, and decide that yes, she really ",
                    { text: "was", italic: true },
                    " a dead celebrity."
                ]
            }
        ],
        "Notes": [],
    },
    {
        "Name": "Fresh Corpse",
        "Cost": "•• (CO)",
        "Prerequisites": "",
        "Description": "ignore untrained physical penalties",
        "Book": "SA 58",
        "Effect": [
            {
                type: "paragraph",
                text: [
                    "The cadaver(s) used in the generative act were particularly fresh. The transfer of Azoth to the vessel happened within an hour after all parts perished. Thus, the body is capable of a level of physicality that other Prometheans may not be able to achieve. While perhaps not precisely skilled, the character with this Merit can ignore the –1 unskilled penalty associated with a lack of Physical Skills. ",
                    { text: "Available at character creation only.", italic: true }
                ]
            }
        ],
        "FullPrerequisites": "",
        "Drawback": [],
        "Notes": [],
    },
    {
        "Name": "Good Brain",
        "Cost": "••• (CO)",
        "Prerequisites": "",
        "Description": "ignore untrained mental penalties",
        "Book": "SA 58",
        "Effect": [
            {
                type: "paragraph",
                text: [
                    "The brain housed in the Promethean’s body is above average. It may have come from a particularly smart person, or may instead be affected positively by a strange physical anomaly (a tumor, or perhaps a uniquely damaged corpus callosum). Therefore, the character is capable of a level of mental ability that other Prometheans may not be able to achieve. While perhaps not precisely skilled, a character with this Merit can ignore the –3 unskilled penalty associated with a lack of Mental Skills. ",
                    { text: "Available at character creation only.", italic: true }
                ]
            }
        ],
        "FullPrerequisites": "",
        "Drawback": [],
        "Notes": [],
    },
    {
        "Name": "Hideous Anyway",
        "Cost": "••",
        "Prerequisites": "",
        "Description": "improves intimidation, but damages other social rolls",
        "Book": "SA 58",
        "Effect": [
            {
                type: "paragraph",
                text: "During certain moments, others can glimpse your character’s true grotesqueness, but the fact is . . . he’s ugly anyway. The flesh used to give your character life is in some way hideous. He may be deformed, disfigured or outright awful-looking. Intimidation rolls are made with the 9 again rule in place; that unsightly countenance ensures the potency of your character’s threats."
            }
        ],
        "FullPrerequisites": "",
        "Drawback": [
            {
                type: "paragraph",
                text: "The 10 again rule does not apply to Persuasion rolls. Galateids may not take this Merit."
            }
        ],
        "Notes": [],
    },
    {
        "Name": "Incorruptible",
        "Cost": "••••",
        "Prerequisites": "Composure •••",
        "Description": "bonus on humanity rolls when activating Pandoran transmutations",
        "Book": "PB 49",
        "Effect": [
            {
                type: "paragraph",
                text: "While Centimani are immune to the debilitating effects of learning and using Pandoran Transmutations, Prometheans on other Refinements are not, and neither are former Centimani. While the power of Flux is strong, individuals with the Incorruptible Merit are more resistant to the dehumanizing taint of Flux than others."
            },
            {
                type: "paragraph",
                text: [
                    "Incorruptible grants a +2 on the degeneration roll to resist the loss of Humanity due to learning or using Pandoran Transmutations, as well as on the roll for derangement afterwards, should the degeneration roll fail. This bonus does ",
                    { text: "not", italic: true },
                    " apply to any other degeneration rolls, only those related to using Pandoran Transmutations."
                ]
            },
            {
                type: "paragraph",
                text: "Permanent Pandoran Transmutations that result in an automatic loss of Humanity are unaffected by this Merit."
            }
        ],
        "FullPrerequisites": "Composure •••",
        "Drawback": [],
        "Notes": [],
    },
    {
        "Name": "Pilgrim",
        "Cost": "••",
        "Prerequisites": "experienced the Revelation",
        "Description": "when telling the story of your Pilgrimage, gain Willpower",
        "Book": "MO 53",
        "Effect": [
            {
                type: "paragraph",
                text: "When you gain the opportunity to tell the story that has had such an effect on your Pilgrimage, you gain a point of Willpower. Should one of the Prometheans you tell this or any Seer legend to experience the Revelation, you regain all your Willpower. Finally, if you succeed in gaining inspiration at a Shrine, you gain one more Vitriol than normal from the experience."
            }
        ],
        "FullPrerequisites": "Promethean; must have experienced (but not necessarily yet completed) the Revelation",
        "Drawback": [],
        "Notes": [
            {
                type: "paragraph",
                text: "Those Prometheans who have experienced part of the Seer’s Pilgrimage are often its most ardent adherents, possessed of a nearly missionary fervor to tell the stories of the Seer. They are also quite focused on learning more about the Seer — though this focus is most often on the Cycle associated with their Refinement."
            }
        ],
    },
    {
        "Name": "Pilgrim",
        "Cost": "••••",
        "Prerequisites": "Elpis ••, Humanity 6",
        "Description": "Gain more Vitriol from Milestones",
        "Book": "SA 58",
        "Effect": [
            {
                type: "paragraph",
                text: "The character has a kind of destiny. He can feel it in his Azoth, in the way that it stirs his humours within the crucible of his dead body. The Divine Fire within seems to drive him more purposefully than it does others. This feeling may exist within from the moment he is created, or may dawn slowly over time like a slowly stoked flame."
            },
            {
                type: "paragraph",
                text: "The result is that, whenever the character completes a milestone, he gains one more Vitriol for the act than normal."
            }
        ],
        "FullPrerequisites": "Elpis ••, Humanity 6",
        "Drawback": [
            {
                type: "paragraph",
                text: [
                    "The character must maintain a Humanity 6 or above to keep this Merit. If his Humanity drops below that, the Merit is lost and can only be regained when the character’s Humanity becomes 6 again. ",
                    { text: "A character may not possess both the Pilgrim and Shepherd Merits at the same time.", italic: true }
                ]
            }
        ],
        "Notes": [],
    },
    {
        "Name": "Repute",
        "Cost": "• to •••",
        "Prerequisites": "",
        "Description": "Status amongst Prometheans",
        "Book": "PTC 97",
        "Effect": [
            {
                type: "paragraph",
                text: "Prometheans hear many stories from other Prometheans on the road, and many of these stories concerns the exploits of others of their kind. A Promethean with this Merit has had some of his exploits told to others. These legends don’t even have to be true, but they are popular enough to be told and retold to Prometheans on their Pilgrimages around the country or even the world."
            },
            {
                type: "paragraph",
                text: [
                    "When other Prometheans encounter the reputed Promethean, their players roll Intelligence + the Promethean’s Repute dots to see if they recognize him. Once someone recognizes him, the Promethean can add +1 per Repute dot to any Socialize roll made to influence or befriend those who know his legend. He can also use those who recognize him as temporary allies, as if they were bought through the Allies Merit (p. 114, ",
                    { text: "World of Darkness Rulebook", bold: true },
                    "). They are worth one dot each — capable of rendering minor favors — and can be used this way only once per person (i.e., one minor favor per person), unless the Promethean spends experience points to codify his relationship with them into the Allies Merit."
                ]
            },
            {
                type: "paragraph",
                text: "With one dot in this Merit, the Promethean is mildly famous among his own kind. They won’t recognize him on sight (based on his description in the legends), but they might come to realize who he is once they’ve spent more than a few turns with him. With two dots, the Promethean might be recognizable on sight, and with three dots, his renown positively colors the Measure, the initial opinion other Created make of him."
            }
        ],
        "FullPrerequisites": "",
        "Drawback": [
            {
                type: "paragraph",
                text: "Prometheans who recognize the renowned character and from whom he has asked a favor, might seek to enlist his aid. This is usually due to his obvious ability to accomplish the task requested, based on the legends told about him. If he refuses too many of these requests, he might lose Repute dots as word gets around of his selfishness."
            }
        ],
        "Notes": [],
    },
    {
        "Name": "Residual Memory",
        "Cost": "• to •••••",
        "Prerequisites": "",
        "Description": "have clearer memories of your past life",
        "Book": "PTC 97",
        "Effect": [
            {
                type: "paragraph",
                text: "The Azoth does not always wash clean every remnant of dross in the body it sparks to life. Some Prometheans experience faint memories of their bodies’ former inhabitants, stored in the flesh. A Frankenstein’s hand might sometimes seem to have a will of its own, during which times the Wretched remembers experiences that belong to the hand’s former owner. An Ulgan might remember events that occurred to his body before it was rent by spirits and used to spark artificial life."
            },
            {
                type: "paragraph",
                text: "Each dot represents one distinct Skill the residual memory retains from the body’s former life (chosen when the player chooses this Merit). A player whose character has Residual Memory 3 might choose to devote it to Academics, Firearms and Streetwise, if the player feels the body’s former inhabitant knew those Skills to a decent degree. The player could even devote his Residual Memory to Skills for which he has no training (although the character still suffers the penalty for untrained Skill use)."
            },
            {
                type: "paragraph",
                text: "For each chapter in a story, the character has a pool of “memory dice” equal to twice the number he has in this Merit. For instance, a character with two dots of Residual Memory has four dice in his memory pool."
            },
            {
                type: "paragraph",
                text: "Each time he uses one of these memory dice, he can add it to any one dice pool related to the Skills his residual memories retain. The memories of the body’s former self are asserted, providing the Promethean with abilities he himself might not have but which he won’t remember after having used them."
            },
            {
                type: "paragraph",
                text: "He can use these memory dice all in one dice roll, or split them up between different dice rolls. Either way, once they’ve been used, they’re gone until the next chapter or game session. For example, the character with Residual Memory 3 (giving him six dice) might choose to add two dice to an Academics roll and then four to a Streetwise roll. The next game session, he might apply all six dice to a single Firearms roll. The bonus can apply to mundane use of these Skills, but not to Transmutation rolls. (The body’s former inhabitant knew nothing of Transmutations.)"
            }
        ],
        "FullPrerequisites": "Promethean",
        "Drawback": [
            {
                type: "paragraph",
                text: "Whenever the character has spent all of his available memory dice for a chapter, he might also remember one of the former inhabitant’s derangements. The player chooses one mild derangement when he purchases this Merit. On the turn following the use of the final memory die, the player rolls the Promethean’s Humanity. If he succeeds, there is no effect. If he fails, the derangement becomes active for the scene."
            }
        ],
        "Notes": [],
    },
    {
        "Name": "Shabti",
        "Cost": "•••",
        "Prerequisites": "Revivification bestowment",
        "Description": "Pyros-infused statue companion",
        "Book": "SA 58",
        "Effect": [
            {
                type: "paragraph",
                text: "The Promethean — most likely an Osiran — owns a “Shabti,” a small, fairly intelligent creature that follows his commands and guards him when he rests. It takes the form of a little unformed man, maybe a foot tall, made of clay or of some kind of ceramic. It might be the color of blue faience, or brightly painted, like an Egyptian tomb ornament."
            },
            {
                type: "paragraph",
                text: "The Shabti has been animated with the same Azoth that created the Promethean, channeled through his conceptual journey to the land of the dead. The Shabti has an empathic link with its master. No matter how far away the Shabti is from its master, it knows what the Promethean is feeling. The Shabti can say a few words, and can repeat perfectly things it has heard said, even if it doesn’t understand what it has heard. It has grasping hands, and can, if its master wishes, bear small objects or use weapons. A less scrupulous Promethean could use his Shabti as an assassin, able to enter an enemy’s home through small cracks, and strangling him in his sleep."
            },
            {
                type: "paragraph",
                text: "The Promethean can spend one Pyros to be able to see through the Shabti’s eyes for a scene. While sharing the creature’s perceptions, the character can’t perform any other action, but is aware of what’s going on around him and can choose to abandon looking through the Shabti’s eyes."
            },
            {
                type: "paragraph",
                text: "A Shabti, being made of inanimate material, doesn’t heal naturally, but its master can heal any wounds the Shabti has taken using Pyros. One Pyros heals one point of aggravated damage, or two points of lethal or bashing damage."
            },
            {
                type: "paragraph",
                text: "If the Shabti dies, the Promethean loses the Merit, although he can use the Revivification Bestowment to resurrect the Shabti in the same way that he could resurrect another Promethean."
            },
            {
                type: "paragraph",
                text: "Making a new Shabti involves a great deal of effort, as the Promethean spends days crafting a new Shabti figure out of faience, metal or clay, contemplating its shape and design, and infusing it with tiny amounts of Azoth (in game terms, he’s just spending the 12 experience points necessary to buy the Merit over again)."
            },
            {
                type: "paragraph",
                text: "The player and the Storyteller should work together to create the Shabti’s Traits, using the following as a guide."
            },
            {
                type: "heading",
                level: 2,
                text: "Shabti Traits"
            },
            {
                type: "line",
                label: "Attributes",
                text: "4/3/3"
            },
            {
                type: "line",
                label: "Skills",
                text: "6/5/3"
            },
            {
                type: "line",
                label: "Willpower",
                text: "Equal to Resolve + Composure"
            },
            {
                type: "line",
                label: "Initiative",
                text: "Equal to Dexterity + Composure"
            },
            {
                type: "line",
                label: "Defense",
                text: "Equal to lower of Dexterity and Wits"
            },
            {
                type: "line",
                label: "Speed",
                text: "Strength + Dexterity + species factor 2"
            },
            {
                type: "line",
                label: "Size",
                text: "1"
            },
            {
                type: "line",
                label: "Health",
                text: "Equal to Stamina + Size"
            },
            {
                type: "paragraph",
                text: [
                    { text: "Improvement: ", bold: true },
                    "A Promethean’s player can improve his Shabti’s Traits by spending some of his character’s experience points on the Shabti. It costs the same number of experience points to raise a Shabti’s traits as it does a Promethean’s."
                ]
            }
        ],
        "FullPrerequisites": "Revivification Bestowment",
        "Drawback": [],
        "Notes": [],
    },
    {
        "Name": "Shepherd",
        "Cost": "••••",
        "Prerequisites": "Elpis •, Repute ••, Humanity 6",
        "Description": "Help others gain Vitriol from Milestones",
        "Book": "SA 59",
        "Effect": [
            {
                type: "paragraph",
                text: "The character’s very presence is a stable guiding hand. His throng recognizes it, though perhaps not consciously. The character may appear wise and particularly astute when it comes to helping others along the Pilgrimage, but he may appear as confused as the rest. Something within him, however — a yearning, transformative part of his Azoth — helps urge others along. Your character is likely to offer more help than other Created when it comes to the throng seeking out the completion of new milestones. He may not always be right, but he’s always on point and concerned with the shift from half-souled creature to human being. This generally means the character is less concerned with his own Pilgrimage, however. It is possible that a Shepherd character chooses to forego the New Dawn, staying in Saturnine Night and acting as a bodhisattva for other Prometheans."
            },
            {
                type: "paragraph",
                text: [
                    "As a result, whenever a Promethean completes a milestone using the Shepherd’s advice or aid, that character gains one more Vitriol than is normal. Note that this does not apply to the character who ",
                    { text: "possesses", italic: true },
                    " this Merit. The Shepherd must help the character with the milestone in some way — guiding him into the situation, assisting in the fight, helping to choose the body for a new Promethean."
                ]
            }
        ],
        "FullPrerequisites": "Elpis •, Repute ••, Humanity 6",
        "Drawback": [
            {
                type: "paragraph",
                text: [
                    "The character must maintain a Humanity 6 or above to keep this Merit. If his Humanity drops below that, the Merit is lost and can only be regained if repurchased when the character’s Humanity raises above 6. ",
                    { text: "A character may not possess both the Pilgrim and Shepherd Merits at the same time.", italic: true }
                ]
            }
        ],
        "Notes": [],
    },
    {
        "Name": "Unpalatable Aura",
        "Cost": "••",
        "Prerequisites": "",
        "Description": "Pandorans attack other Prometheans for food first",
        "Book": "PTC 98",
        "Effect": [
            {
                type: "paragraph",
                text: "Pandorans instinctively do not like the tenor of the Promethean’s Azothic radiance. While its effect on them is the same — it awakens them from Dormancy — they’d prefer to choose a different target from which to gain their Pyros sustenance. If given a choice, such as if there are more Prometheans present than the one with this Merit, they will most likely attack the other Prometheans first. If the Promethean with this Merit is the only food source available, this Merit will not prevent them from attacking, but it does give subtract two from the result of their Initiative rolls when first determining initiative ranks in an encounter with the Promethean."
            }
        ],
        "FullPrerequisites": "Promethean",
        "Drawback": [],
        "Notes": [],
    },
    {
        "Name": "Weatherproof",
        "Cost": "• (CO)",
        "Prerequisites": "",
        "Description": "never be affected by environmental conditions",
        "Book": "SA 59",
        "Effect": [
            {
                type: "paragraph",
                text: "Although Prometheans don’t really age and can go almost indefinitely with only bugs, roots and tree bark for food, most still feel the cold and the heat. Most still have to keep warm."
            },
            {
                type: "paragraph",
                text: [
                    "A Promethean with this Merit doesn’t feel the cold or heat at all. Extremes of temperature cause no penalties. A plunge into arctic seawater and a mid-August afternoon walk in Death Valley are all the same to the Promethean. The Promethean suffers no penalties from extremes of cold and heat. Penalties that don’t depend on the Promethean being directly affected by the weather (such as from poor visibility, for example) still affect the Promethean. ",
                    { text: "Available at character creation only.", italic: true }
                ]
            }
        ],
        "FullPrerequisites": "",
        "Drawback": [],
        "Notes": [],
    }
]

export const PrometheanRestrictedSocialMeritsOverviewData = {
    "Name": "Restricted Social Merits",
    "Description": "There are some Merits available to mortals that a Promethean simply cannot purchase, or must purchase with restrictions."
}

export const PrometheanRestrictedSocialMeritsData = [
    {
        "Name": "Fame",
        "Description": "Prometheans cannot be famous among mortals. They too soon become infamous instead, thanks to Disquiet. To represent fame among Prometheans, characters can purchase the Repute Merit."
    },
    {
        "Name": "Mentor",
        "Description": "Usually another Promethean. If this character is a mortal, the Promethean needs to be more careful than usual about calling upon or visiting his mentor too frequently, lest Disquiet taint the relationship."
    },
    {
        "Name": "Retainer",
        "Description": "A Promethean cannot purchase this Merit. No mortal can work for him without eventually succumbing to Disquiet."
    },
    {
        "Name": "Status",
        "Description": "A Promethean’s ability to obtain Status within mortal institutions is severely curtailed by Disquiet. The Storyteller should disallow purchase of this Merit unless the player has a particularly compelling excuse for why his character has it. Even then, his Status must be limited to no more than one dot."
    },
    {
        "Name": "Striking Looks",
        "Description": "While Prometheans can purchase this Merit, its effects work only on mortals who are not suffering from Disquiet or who are in only the first or second stages. Once a mortal’s Disquiet progresses to stage three or higher, it just doesn’t matter how astonishing the Promethean looks. (The Galatean Mesmerizing Appearance Bestowment is still effective, though.)"
    }
]
