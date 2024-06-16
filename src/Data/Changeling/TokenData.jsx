const trifleData = [
    {
        "Name": "Bilefruit",
        "Description": "A bitter fruit, that if consumed, suppresses the changeling's mien and seeming for eight hours.",
        "Book": "CTL 209"
    },
    {
        "Name": "Bottlevoice",
        "Description": "Found in Hedge Oceans. A corked bottle that takes effect when you breath in the miasma contained within. A mental skill you choose gets +3 for the rest of the scene",
        "Book": "WM 114"
    },
    {
        "Name": "Clayface",
        "Description": "A face made by the changeling out of clay. When worn, it will take 1 lethal or 3 bashing damage instead of the changeling before it shatters.",
        "Book": "RoS 154"
    },
    {
        "Name": "Dream Charm",
        "Description": "True Fae trying take a penalty to affect the dreams of a mortal using the charm. Very difficult to make, and can only protect one mortal at a time.",
        "Book": "AN 67"
    },
    {
        "Name": "Givertaker",
        "Description": "A bracelet or anklet made of faery bones that when donned, provides the wearer with an automatic exceptional success to the next instant or reflexive action, and a dramatic failure to the action after that.",
        "Book": "RoS 154"
    },
    {
        "Name": "Glimmerbraid",
        "Description": "A lock of hair from a True Fae or a figure in the Hedge, which grants a temporary illusion of the three-dot Fame merit.",
        "Book": "CTL 209"
    },
    {
        "Name": "Gravenails",
        "Description": "The fingernail of a corpse from the Hedge. When placed under a pillow, does 1 bashing to the sleeper upon waking and prevents willpower gain for 8 hours.",
        "Book": "RoS 145"
    },
    {
        "Name": "Hoarcotton",
        "Description": "Immune to fire for a number of turns equal to user's Wyrd",
        "Book": "RoS 145"
    },
    {
        "Name": "Hoarflakes",
        "Description": "Found in Hedge Mountains. A rock frozen for so long it takes the appearance of a snowflake. Gain Windwing Blessing for one hour. Must spend a point of Glamour.",
        "Book": "WM 114"
    },
    {
        "Name": "Spinnerthorn",
        "Description": "+2 dice to Wits + Crafts roll made to perform hedgespinning",
        "Book": "RoS 145"
    },
    {
        "Name": "Stingseed",
        "Description": "A small seed from the Edge, which if implanted in a bullet and watered, if used within the next scene inflicts a penalty on the victim to all actions until the damage partially heals.",
        "Book": "CTL 209"
    },
    {
        "Name": "Sweetblood",
        "Description": "The blood of a fae creatures sweetened with sugar, if consumed it grants 9-again on all Socialize rolls for one scene.",
        "Book": "CTL 209"
    },
    {
        "Name": "Thimbleblack",
        "Description": "A small thimble, in which a drop of blood is splashed and it is then placed under the user's tongue. May add Subterfuge to all Craft or Computer rolls for one scene.",
        "Book": "CTL 209"
    },
    {
        "Name": "Torchfly",
        "Description": "A dried, human-faced Hob fly. The shell can be broken and the goo within, when smeared over anything, illuminates that object in a 10-yard radius for a scene. Perception penalties due to darkness are negated, and perception penalties outside of the immediate area are reduced by 2. However, anyone in the area is easier to see, and any perception rolls to see the character are at +2.",
        "Book": "RoS 145"
    },
    {
        "Name": "Tumbleglass",
        "Description": "A small glass bauble, that if broken underfoot, allows the user to fall up to 100 yards once and suffer no damage.",
        "Book": "CTL 210"
    },
    {
        "Name": "Twistring",
        "Description": "+3 to secondary actor rolls during teamwork rolls involving your motley",
        "Book": "RoS 154"
    },
    {
        "Name": "Utterbarb",
        "Description": "A thorn from the hedge, which if used to scratch a victim, robs them of their voice for one scene.",
        "Book": "CTL 210"
    },
    {
        "Name": "Waspshot",
        "Description": "A shell casing filled with hedgewasp wings and sealed with wax. This bullet completely ignores penalties caused by concealment or cover, as the bullet goes straight through. Damages the gun, giving -1 to the gun for each waspshot fired until looked at by a gunsmith.",
        "Book": "RoS 154"
    },
    {
        "Name": "Welkinstick",
        "Description": "A branch taken from high up in the Hedge, which when snapped doubles the user's next jump roll.",
        "Book": "CTL 210"
    }
]

const tokenData = [
    {
        "Name": "Ace in the Hole",
        "Rating": "•",
        "Description": "A playing card, which if placed over a lock, inflicts a dice penalty to open it as well as removing 10 again from all attempts.",
        "Drawback": "Card papercuts you for 1B damage when activated.",
        "Catch": "Lose 10 again for the rest of the day.",
        "Book": "CTL 202"
    },
    {
        "Name": "The Bone Comb",
        "Rating": "•",
        "Description": "A comb from the hedge or Arcadia, which, when run through a users own hair for 100 strokes, allows the user to change their hair colour for a single scene. In addition, the user gains the 4 dot Striking Looks merit.",
        "Drawback": "After the scene, the user loses some of their hair's natural luster. For the rest of the day, social rolls take a -1 penalty",
        "Catch": "Gain the narcissism derangement. If the user already has narcissism, lose three dice from any Res+Comp roll made to resist the derangement.",
        "Book": "RoS 147"
    },
    {
        "Name": "Book of Tales",
        "Rating": "• to •••••",
        "Description": "An old book from the hedge. Prick finger and apply dot of blood to activate. Upon activation, open the book and read a tale that might be about the user. For the remainder of the story, the user receives one clue toward future events. Additionally, for each dot of this token, the user may reroll one failed roll during this story.",
        "Drawback": "Requires strength = to the level of the token to open and use.",
        "Catch": "Every time the player rolls for something, the ST rolls as well. On a 1, that roll becomes a dramatic failure. Effect stops after one dramatic failure.",
        "Book": "RoS 145"
    },
    {
        "Name": "The Cracked Mirror",
        "Rating": "•",
        "Description": "A dingy mirror, which can reveal and allow communication with the user's fetch, or potentially other impersonators.",
        "Drawback": "The Fetch becomes aware of the Changelings exact location.",
        "Catch": "Must cut face for 1L damage.",
        "Book": "CTL 202"
    },
    {
        "Name": "The Cursing Box",
        "Rating": "• to •••••",
        "Description": "A box that curses the area (100 yards per token dot) that causes food to spoil, animals/people to fall ill, life rots. Anyone that sleeps within the area suffers -1 to all actions the next day unless they sleep outside the effect.",
        "Drawback": "The changeling who activates the token suffers a vulnerability to iron (general, not cold) while the box is active, suffering an additional level of damage from any attack with iron.",
        "Catch": "The character severs the tip of their index finger and places it in the box for two lethal. If the box is dug up later, the character can reattach by spending willpower.",
        "Book": "RoS 146"
    },
    {
        "Name": "Driver’s Little Helper",
        "Rating": "•",
        "Description": "A token from a game of chance, this must be placed inside a car. The car then consumes no fuel, grants a small bonus to Drive, and cuts down on the time it takes to drive to any destination.",
        "Drawback": "After an hour, the car overheats and cannot be driven for 15 minutes (Unless you fix it with Wits + Crafts)",
        "Catch": "Must pour a pint of blood into gas tank or transmission for 1L (Mortals) or 1 vitae (Vampires)",
        "Book": "CTL 203"
    },
    {
        "Name": "Heavenly Stem",
        "Rating": "• to •••••",
        "Description": "A \"natural\" rapier made of wood and thorns. Activate the token to provide benefits for a scene dependent on the number of dots. Each dot can provide +1 Defence, Equipment bonus, Initiative or Speed. The weapon without activation is a 1(L) Rapier with no armour piercing.",
        "Drawback": "This token may only be activated before performing any attack. Additionally, it may only be activated once per game session.",
        "Catch": "The character pledges to the token, which eats their life at a rate of one lethal per turn the blade is in hand.",
        "Book": "RoS 154"
    },
    {
        "Name": "Hedgespun Rainment",
        "Rating": "• to •••",
        "Description": "Clothing crafted from materials from the Hedge. The one dot variant reflects clothing with no supernatural power (but is treated as a status symbol amongst the Lost and is universally beautiful), the dot variant may grant armor, and the three dot version grants powerful armor.",
        "Drawback": "Offers no protection against cold iron. Delicate garments might even be destroyed just from a touch.",
        "Catch": "On non-fey the garment is very uncomfortable and garners a -1 on some rolls.",
        "Book": "CTL 203"
    },
    {
        "Name": "The Jackdaw Trinket",
        "Rating": "•",
        "Description": "A necklace featuring the head of a hob carrion-bird, threaded through the eye-sockets. When activated, the user may make a Sleight of Hand Larceny roll, and all who could act as observers are distracted at that moment. The Wits+Comp or Wits+Larceny roll necessary for observers suffers a -3 penalty.",
        "Drawback": "If the sleight of hand roll fails, its always a dramatic failure",
        "Catch": "Gain the Vocalization derangement, or if the user already has that, the more severe Schizophrenia. Lasts until the user gets 8 hours of sleep.",
        "Book": "RoS 156"
    },
    {
        "Name": "Jeweled Hookah",
        "Rating": "• to •••••",
        "Description": "A hookah with the appearance of writhing snakes. Taking a hit from the Hookah negates all wound penalties and allows the user to regain a point of willpower. All users suffer a penalty of the dot rating to their pools for the next scene.",
        "Drawback": "The token may only be activated once per week. Suffer a biting headache for the next hour that penalises mental rolls by 1.",
        "Catch": "A character places their hand in the water jar and suffers a bite from the snakes. The character takes a bite with a toxicity rating of 3. Does not heal until 12 hours have passed.",
        "Book": "RoS 155"
    },
    {
        "Name": "The Murmuring Coin",
        "Rating": "•",
        "Description": "A coin from Faerie, which may be activated to increase the user's effective Resources merit by one dot during a transaction.",
        "Drawback": "The next day until you sleep, your vice becomes greed. If it was already greed, fulfilling your virtue will only net you half Willpower.",
        "Catch": "A friend or loved one will suffer money problems, losing one dot in Resources.",
        "Book": "CTL 204"
    },
    {
        "Name": "Visage of Glory",
        "Rating": "•",
        "Description": "A monstrous mask that grants protection from Hobgoblins. No Hobgoblin can attack the user physically unless the user attacks them first. Protects for one day only. Must be worn on the face.",
        "Drawback": "-2 to all social rolls while wearing the mask.",
        "Catch": "Affix the mask by using two thorns, causing 2B",
        "Book": "RoS 155"
    },
    {
        "Name": "Amber Demijohn",
        "Rating": "••",
        "Description": "A fat amber bottle, which the changeling can beg for protection. The changeling takes two turns to turn into smoke which wisps inside the bottle, and another two turns to turn back into a size 1 version of themselves inside the bottle. The changeling is not immune to harm, but the bottle is resistant. It is Size 2 and, when active, Durability 5 and a total Structure of 7. In addition, it heals for one point of structure per minute. Piercing specialties on weapons are negated. Nothing, not even explosives, bypass the durability. Any rolls to find the changeling are at a -3 penalty.",
        "Drawback": "The changeling may only leave the bottle after an hour has passed, at which point the user is expelled forcefully.",
        "Catch": "The user may never leave the bottle, and it must be destroyed to grant exit.",
        "Book": "RoS 147"
    },
    {
        "Name": "Homespinner’s Needle",
        "Rating": "••",
        "Description": "A simple sewing needle, which when hidden in a room and activated, grants a bonus to Presence or Manipulation rolls to all those present. Grants an increased bonus to the owner.",
        "Drawback": "Everyone who benefited from the needle takes -1 for all social rolls in the next scene. Owner takes -2.",
        "Catch": "The user of the needle must recite a rhyme and stab them self with the needle.",
        "Book": "CTL 204"
    },
    {
        "Name": "Hollow Heart",
        "Rating": "••",
        "Description": "A contain the size of a bowling ball. A changeling may chose to put glamor into the bag instead of his pool when harvesting emotions. Up to 20 points of Glamour.",
        "Drawback": "While carried, the the bag will upgrade one bashing damage to one lethal damage per round.",
        "Catch": "The changeling becomes aloof. Social penalty.",
        "Book": "SaD 36"
    },
    {
        "Name": "The Hungry Arrow",
        "Rating": "•• or ••••",
        "Description": "Holding the arrowhead in their palm upgrades damage. •• upgrades Bashing to Lethal, •••• upgrades Lethal to Aggravated. The effect lasts one turn.",
        "Drawback": "Only affects the damage of the weapon held in that hand. Activation incurs a point of bashing damage.",
        "Catch": "Feel the sting of the arrowhead and halve initiative for the rest of the scene (rounded down).",
        "Book": "RoS 148"
    },
    {
        "Name": "Lantern of Ill Omen",
        "Rating": "••",
        "Description": "A magical lantern, which may be attuned to a specific subject through the expenditure of a willpower dot. When activated, the lantern will glow when the attuned subject is near.",
        "Drawback": "When it glows for long enough, it goes out and the hair and fireflys must be replaced.",
        "Catch": "Orbs of light dance in your eyes for a full hour after lantern goes out.",
        "Book": "CTL 204"
    },
    {
        "Name": "Periwig of Orators",
        "Rating": "••",
        "Description": "After a successful Oratory roll, everyone within earshot regains 1 willpower. Once per day use.",
        "Drawback": "User is harried with hedge-nits. -1 to all non-social rolls while wearing the wig.",
        "Catch": "Act as if under the effect of marijuana.",
        "Book": "RoS 156"
    },
    {
        "Name": "Ribbon of Nevermiss",
        "Rating": "••",
        "Description": "A ribbon that is to be tied around the barrel of a gun, which doubles the effective range bands of the weapon.",
        "Drawback": "After three shots the gun is rendered useless, and the ribbon cannot be used on it anymore.",
        "Catch": "Yank a tooth out or fate will do it for you.",
        "Book": "CTL 205"
    },
    {
        "Name": "Ashlight",
        "Rating": "•••",
        "Description": "Plastic flashlight with a lump of coal within. Shining the token on a True Fae blinds them, and they suffer defense and perception penalties.",
        "Drawback": "Grows very warm, dealing 1B damage and forcing roll to maintain grip. Cannot be used on the Lost or Hobgoblins.",
        "Catch": "Anyone searching for owner is granted +3 perception to discover the character.",
        "Book": "AN 75"
    },
    {
        "Name": "Baby Cat’s Eyes",
        "Rating": "•••",
        "Description": "A porcelain doll with one good eye, when activated the user may see through the doll's eyes for twelve hours. Afterwards it must rest for 48 hours.",
        "Drawback": "-2 to perception until 6 hours of sleep fix it.",
        "Catch": "Suffer from suspicion or paranoia until the 12 hours are up.",
        "Book": "CTL 205"
    },
    {
        "Name": "Dead Man’s Boots",
        "Rating": "•••",
        "Description": "Filthy boots taken from the feet of a corpse in the Hedge, they may be triggered to double the user's Stealth score, until the wearer runs out of Willpower or chooses to end the effect.",
        "Drawback": "Drinks one point of willpower an hour.",
        "Catch": "Drinks one point of bashing health an hour.",
        "Book": "CTL 205"
    },
    {
        "Name": "Deadman's Mask",
        "Rating": "•••",
        "Description": "A changelings plaster death mask. When worn, the changelings Seeming and Kith changes to that of the deceased's. When taken off, it cannot be activated for time worn x 5.",
        "Drawback": "Kith and Seeming Blessings do not return for a week. Changeling is less fey then usual, suspicious to the Lost.",
        "Catch": "The changeling allows the mask to decide how long it wants to stay on your face.",
        "Book": "SaD 55"
    },
    {
        "Name": "The Glimpsing Mirror",
        "Rating": "•••",
        "Description": "The user asks the mirror one question about a persons attributes or skills. The person must have looked in the mirror while it is active and the user must know the persons first name. Stays active for an hour.",
        "Drawback": "Costs willpower to use. 1WP for a skill question, 2WP for an attribute question. One question per person.",
        "Catch": "Tell the mirror one of your deepest darkest secrets. The next person to look in the mirror learns that secret and to whom it belongs.",
        "Book": "RoS 148"
    },
    {
        "Name": "Hedgespun Wardrobe",
        "Rating": "•••",
        "Description": "A wardrobe, which when closed, locked and activated may produce a new Hedgespun outfit to specifications.",
        "Drawback": "Dissolves the next sunrise.",
        "Catch": "Must moisten the lock with blood, wound will cause -1 to all composure rolls when clothes are worn.",
        "Book": "CTL 206"
    },
    {
        "Name": "Hoarfrost Spine",
        "Rating": "•••",
        "Description": "A thorn from a frozen place in the Hedge, when worn as jewelry and activated this token grants a defense bonus against Brawl attacks, and doubles Defense versus grapples.",
        "Drawback": "Fire damage becomes aggravated for the next 24 hours. Vampires and such take +1 extra fire damage.",
        "Catch": "For 24 hours, all athletics rolls take -3",
        "Book": "CTL 206"
    },
    {
        "Name": "Minister Viburnum’s Clepsydra",
        "Rating": "•••",
        "Description": "When activated, silences all voices in the room except for those who have a hand resting upon the very top of the token. Lasts for a scene. In addition, any speaker touching the top of the token gets +1 to expression rolls. Affected characters can spend 1WP to speak for 3 turns. Only muffles speech etc.",
        "Drawback": "Activator becomes over-sensitive to sound, and suffers -2 to perception.",
        "Catch": "Fill the token with blood instead of water",
        "Book": "RoS 156"
    },
    {
        "Name": "Biting Crotesquerie",
        "Rating": "••••",
        "Description": "A horrific idol made from mismatched parts, which may be activated and thereby animated. The bite of this creature causes potent hallucinations which inflicts many penalties.",
        "Drawback": "Electronic blackout within 50 yards for one hour.",
        "Catch": "Spend willpower point and spit on it. Token crumbles after it's activated.",
        "Book": "CTL 206"
    },
    {
        "Name": "Bleakmoor Black Pony",
        "Rating": "••••",
        "Description": "A statue of a pony made from hedgestuff. Upon activation, becomes alive for one hour, and more time can be added at a rate of 1 hour per glamour spent. Suffers speed penalties based on weight carried. No more than two adults at a time. No roll required to ride unless circumstances dictate it.",
        "Drawback": "Pony is GRUMPY. Getting too close to the ponies mouth can result in up to 2B of bite damage.",
        "Catch": "Groom the pony - Brush its mane, clean it generally, pick things from its teeth) for one hour. During this time, the user must tell the pony of a terrible nightmare that they once had, in detail.",
        "Book": "RoS 157"
    },
    {
        "Name": "Blood Poppet",
        "Rating": "••••",
        "Description": "A creepy doll found in the hedge. Can be used to form a sympathetic connection with a users fetch by winding three of the fetches hairs around the dolls head. When activated, the doll becomes a voodoo doll for a scene. Spend 1WP to cause 2B and a -1 penalty (up to -3) to all physical rolls to the fetch. No distance limit.",
        "Drawback": "After torturing their fetch, the user feels empty inside. Prevents willpower gain for the next 48 hours after use. Oh, and if the fetch gets a hold of the doll...",
        "Catch": "Wet the dolls head with some fresh fetch-blood from the users fetch.",
        "Book": "RoS 149"
    },
    {
        "Name": "Bug Cudgel",
        "Rating": "••••",
        "Description": "A blunt instrument, which if activated and used to inflict a blow, curses the target. An hour after the impact, the site swells up and bursts forth with many insects, inflicting intense dice penalties (not to mention trauma)",
        "Drawback": "Nightmares about bugs, penalty for rolls for first hour awake.",
        "Catch": "Develop Phobia (Specifically entomophobia)",
        "Book": "CTL 207"
    },
    {
        "Name": "The Curious Paw",
        "Rating": "••••",
        "Description": "The claw of some kind of mutated creature from within the Hedge, activation grants the changeling and his motley 9-again on all rolls except those relating to Glamour or Contracts for a scene.",
        "Drawback": "Begin to feel tired and sick after effect wears off.",
        "Catch": "A memory is taken as payment, something small but important.",
        "Book": "CTL 207"
    },
    {
        "Name": "Promise Stone",
        "Rating": "••••",
        "Description": "A stone with runs. Can have a pledge invested into it, and have another party enter the pledge at any time with a ritual. All pledges sworn this way is considered a vow.",
        "Drawback": "Using this token costs a dot of willpower (Can be bought back with 8 XP). Much more, see book.",
        "Catch": "Can be activated without Wyrd (Able to have 3 vows). Must pay cost, then tear out tongue and throw it into a fire, dealing 2L.",
        "Book": "AN 22"
    },
    {
        "Name": "Blood Pennon",
        "Rating": "•••••",
        "Description": "A short, swallow-tailed banner. When activated and waved, the changeling and his motley gain significant combat bonuses. Their Defense is double, they gain a bonus to Initiative, and they can ignore any wound penalties. They may also make all-out attacks with a bonus.",
        "Drawback": "Enemies are called to your location.",
        "Catch": "You are left exhausted for the rest of the day, easy pickings for the Gentry if they show up from the drawback.",
        "Book": "CTL 208"
    },
    {
        "Name": "Dawnspear",
        "Rating": "•••••",
        "Description": "Old spear with a glow in the shape of a lance. When active, becomes a +4L weapon that deals aggravated damage to the True Fae, grants +4 Initiative, doubles Defense and Speed, and retains undoubled Defense for all-out attacks.",
        "Drawback": "Unforeseen consequences.",
        "Catch": "Permanent life changes for each wielding.",
        "Book": "SaD 55"
    },
    {
        "Name": "The Jerusalem Mile",
        "Rating": "•••••",
        "Description": "It's a rug, about 9' by 12'. A dusty frayed rug, with a blocky maze design stitched into it. Those who walk through the 'maze' to the end are transported to a spot in the hedge where they have been before.",
        "Drawback": "The rug is one-way.",
        "Catch": "The user can choose not to choose a location, which dumps them ANYWHERE.",
        "Book": "RoS 149"
    },
    {
        "Name": "The Keeper’s Quirt",
        "Rating": "•••••",
        "Description": "A two-ended riding crop, which summons a wave of repressed negative memories when it strikes flesh. For humans, this can be anything, for Changelings, it's generally their durance. When used in combat, it can be especially debilitating. Those hit no longer apply defense to incoming attacks, and lose -3 to speed and initiative til the end of the scene. Does +1B, requires Strength+Weaponry to wield. Can only be used on another character once.",
        "Drawback": "Transmits small jolts of pleasure upon use. Hurting others with it becomes addictive after its third use. When addicted, user must succeed on a Res+Comp roll to NOT use the Quirt when available.",
        "Catch": "Use on a family member or motley-mate within an 8 hour period before activation.",
        "Book": "RoS 158"
    },
    {
        "Name": "Squall Knife",
        "Rating": "•••••",
        "Description": "A knife placed under the cradle of a human child in Faerie. When used to inflict damage, if the victim screams or shouts, the wielder may heal lethal or bashing damage.",
        "Drawback": "You hear screaming children, and suffer from Melancholia or Depression for 12 hours.",
        "Catch": "-3 to all social rolls for 24 hours.",
        "Book": "CTL 208"
    }
]

const privileTokenData = [
    {
        "Name": "Ampoule of Life",
        "Description": "Upon receiving would-be-fatal wounds, drinking the blood downgrades all of the character's Lethal or Aggravated damage to bashing. Only works on wounds or poisoning, but not illness.",
        "Drawback": "Lose all willpower points.",
        "Catch": "Lose two permanent health dots.",
        "Book": "RoS 151"
    },
    {
        "Name": "The Auroch’s Horn",
        "Description": "Can be used by any changeling in a freehold. When used, summons the user's Keeper to their side for one battle.",
        "Drawback": "The keeper gains +3 on all Physical tests against the user. Keeper always knows where any changeling belonging to the freehold is, Keeper can stay in the mundane world indefinitely. Seven children will be abducted that night.",
        "Catch": "Blowing the horn performs all the effects. Cannot be destroyed or given away.",
        "Book": "RoS 151"
    },
    {
        "Name": "Black Nickel",
        "Description": "Borrow up to five skill dots from another changeling or Fae for a full week. Limited to the maximum skills that the target has.",
        "Drawback": "Token is rendered inert after borrowing five total skill dots.",
        "Catch": "Target gains bonus skill dice for any contract used against the user equal to number of dots borrowed. Benefit lasts for a full year.",
        "Book": "RoS 152"
    },
    {
        "Name": "Blank Check",
        "Description": "Allows the user to add the resources score of the person who gave them the token to their own for a single purchase.",
        "Drawback": "Cannot access any of their own money for an entire week.",
        "Catch": "The user becomes pliable to social advances by the person who gave them the cheque. The giver gains +2 Socialise whenever interacting, capped at +5. This effect is permanent.",
        "Book": "RoS 152"
    },
    {
        "Name": "Finger Locket",
        "Description": "Target gains life equal to Wyrd x 5 Years at the point when the token was given.",
        "Drawback": "Permanently loses the finger used in creation of this token.",
        "Catch": "Target no longer regains willpower from rest. The changeling that created it gains it instead.",
        "Book": "RoS 152"
    },
    {
        "Name": "Ink-in-Irons",
        "Description": "A Tattoo shared by a pair of characters that ensures mutually assured destruction. The pair cannot wound the other without wounding themselves - any damage inflicted is mirrored.",
        "Drawback": "Automatically lose a dot in Clarity if the other of the pair dies.",
        "Catch": "The effect can be escaped by the pair agreeing to, spending a willpower dot and suffering a point of aggravated damage with an obvious burn mark.",
        "Book": "RoS 153"
    },
    {
        "Name": "Scobury-Clovill Box Camera",
        "Description": "Taking a photo of someone with the camera causes them to be dragged to Arcadia for a year and a day. This happens within the next seven days.",
        "Drawback": "Use of this token is a Clarity sin at any level.",
        "Catch": "Destroying a True Fae before the target gets abducted will prevent them from being abducted.",
        "Book": "RoS 153"
    },
    {
        "Name": "Privilege Name",
        "Description": "Rating",
        "Drawback": "Entitlement",
        "Catch": "Description",
        "Book": "Drawback"
    },
    {
        "Name": "Bronze Spearhead",
        "Description": "—",
        "Drawback": "Bronze Beylik",
        "Catch": "The head of a bronze spear. When used, add Wyrd to Intimidation rolls.",
        "Book": "For the scene and one after, -2 on Socialize, Animal Ken and Expression."
    },
    {
        "Name": "The Grand Cross of St. George",
        "Description": "—",
        "Drawback": "Knighthood of the Dragonslayer",
        "Catch": "A cross made of Hedgestuff. Pressing it against someone with Morality 5 or below incurs lethal damage.",
        "Book": "If used on someone with a morality of 6 or above the Knight takes penalties as penance."
    },
    {
        "Name": "Aspersorium",
        "Description": "••",
        "Drawback": "Bishopric of Blackbirds",
        "Catch": "Small pail or cup. Used to bless water, which is then sprinkled on a persons forehead. The blessed have mild derangement disappear and severe is downgraded for one scene. Gains +1 perception until sleep.",
        "Book": "Bishop takes -1 to Perception, cumulative with extra blessings. Restored with 4 hours of sleep."
    },
    {
        "Name": "Black Apple Pendant",
        "Description": "••",
        "Drawback": "Legates of the Black Apple",
        "Catch": "A silver pendant in the shape of an apple; cannot be removed. Adds Composure to Defense for one scene, as long as the wielder does not attack. Usable once per day.",
        "Book": "If the wielder does attack, he or she suffers -2 to Intelligence, Wits, Dexterity and Defense for the remainder of the scene."
    },
    {
        "Name": "Sprung Door",
        "Description": "••",
        "Drawback": "Bodhisattvas of the Broken Cage",
        "Catch": "A broken door of some form; +3 to rolls to convince the target to break social mores, habits or try new things. Increases to +5 if paired with Cupid's Eye.",
        "Book": "-2 to all Presence and Manipulation rolls against Bodhisattvas, regardless of whether the token has been used or is even present."
    },
    {
        "Name": "Waxen Violet",
        "Description": "••",
        "Drawback": "Magistrates of the Wax Mask",
        "Catch": "A small purple flower, available to all Magistrates of the Wax Mask, can be activated to emit a scent that causes those nearby to sense the wearer as humble and trustworthy.",
        "Book": "Affects the Magistrate as well, leaving him very sleepy after 2 hours unless he spends willpower (One WP for one turn of awakeness.)"
    },
    {
        "Name": "Bugbear’s Mask",
        "Description": "•••",
        "Drawback": "Scarecrow Ministry",
        "Catch": "Appearing as a cheap Halloween mask, frequently worn by the Scarecrows of the Ministry. When activated the user must meet eye-to-eye with a victim, and they receive the Phobia derangement with the mask-bearer as the subject.",
        "Book": "Suffer from Narcissism or Megalomania for the rest of the day."
    },
    {
        "Name": "Courier's Winged Sash",
        "Description": "•••",
        "Drawback": "Guild of the Sacred Journey",
        "Catch": "A royal-blue sash with a winged silver badge; when activated, gives the user an intuitive sense of the location of anyone they've been hired to deliver a message or package to, as long as they're somewhere accessible (not e.g. Arcadia or the Shadow Realm) and the client identified the recipient precisely.",
        "Book": "Until the package/message is delivered or 2 Willpower are spent, -1 to all actions not related to delivering the package/message."
    },
    {
        "Name": "The Diviner's Instrument",
        "Description": "•••",
        "Drawback": "College of Worms",
        "Catch": "Any sort of divining tool unique to the Diviner. When the instrument is used, within an amount of time called \"Insight\" (Clarity = Hours), the Diviner is granted a bonus equal to his Wyrd.",
        "Book": "During Insight time, -1 to Perception. Token can only be activated once per game session."
    },
    {
        "Name": "The False Face of Truth",
        "Description": "•••",
        "Drawback": "Duchy of Truth and Loss",
        "Catch": "A small badge or pin with a porcelain doll's face; anyone touching a lock of hair or drop of blood to it knows if the blood/hair came from a fetch, a Changeling or a mortal.",
        "Book": "The token cannot be reused until it has been fed 1B worth of blood."
    },
    {
        "Name": "Gildwheel",
        "Description": "•••",
        "Drawback": "Guild of Goldspinners",
        "Catch": "A wheel that can spin straw into gold, producing one Resource dot's worth per day up to a maximum of the user's Power Stat; the owner of a Gildwheel cannot spend its gold.",
        "Book": "Unless the Resource dots involved came from a pledge, the gold turns to dross within one day of being spent or used in any transaction."
    },
    {
        "Name": "The Gilded Torc",
        "Description": "••••",
        "Drawback": "Charmed Circle",
        "Catch": "A necklace that is worn tightly around the neck. Allows the transfer of skills to or from the user while the target is kissing their hand. All dots in that skill are transferred for the day. A character with 5 dots transfers all five, no more, no less.",
        "Book": "Suffer three points of bashing damage when taking a skill from the target as the Torc chokes the user."
    }
]

export { trifleData, tokenData, privileTokenData }