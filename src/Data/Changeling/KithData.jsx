const BeastsData = [
    {
        "Kith": "Broadback",
        "Description": "Beasts of Burden",
        "Blessing": "Stoic Forbearance",
        "Book": "Spend Glamour for +2 to all Stamina rolls for the scene."
    },
    {
        "Kith": "Chimera",
        "Description": "Amalgamation",
        "Blessing": "Goblins Tongue",
        "Book": "Spend Glamour, +3 on social rolls with Hobgoblins until end of scene."
    },
    {
        "Kith": "Cleareyes",
        "Description": "Keen Senses",
        "Blessing": "Primal Senses",
        "Book": "+2 to perception rolls. Spend Glamour to heighten senses."
    },
    {
        "Kith": "Coldscale",
        "Description": "Cold-blooded",
        "Blessing": "Reptilian Blood",
        "Book": "+1 to Composure when resisting emotional manipulation, +2 to Stamina when resisting poisons"
    },
    {
        "Kith": "Coyote (American)",
        "Description": "Trickster",
        "Blessing": "The Trickster's Truth",
        "Book": "Spending Willpower on a Pers or Sub roll grants +5. If vice is Gluttony, Greed or Lust, Manipulation cost is New Dots x 4"
    },
    {
        "Kith": "Hunterheart",
        "Description": "Predators/Hunters",
        "Blessing": "Tooth and Claw",
        "Book": "Lethal unarmed damage"
    },
    {
        "Kith": "Nix (Germanic)",
        "Description": "River Maiden",
        "Blessing": "Consumptive Voice",
        "Book": "Once per day, after spending a point of glamour; anyone hearing her voice cuts social rolls by half of Nix's Wyrd. Continues until end of scene."
    },
    {
        "Kith": "Riddleseeker",
        "Description": "Wise/Cunning Animals of Legend",
        "Blessing": "Inquisitive Instinct",
        "Book": "Spend Glamour, for one scene, +2 to all Wits rolls except Perception (Wits + Composure). Free Investigation Specialty \"Riddles\"."
    },
    {
        "Kith": "Roteater",
        "Description": "Carrion Eaters",
        "Blessing": "Scavengers Nature",
        "Book": "+2 to resist poison/disease, +3 if injested, 9 again perception when scrounging for items."
    },
    {
        "Kith": "Runnerswift",
        "Description": "Fast",
        "Blessing": "Runs Like the Wind",
        "Book": "+2 Speed"
    },
    {
        "Kith": "Skitterskulk",
        "Description": "Creepy Crawlies",
        "Blessing": "Impossible Counterpoise",
        "Book": "Triple Defense when Dodging"
    },
    {
        "Kith": "Steepscrambler",
        "Description": "Climbers",
        "Blessing": "Gifted Climber",
        "Book": "+3 to Climbing"
    },
    {
        "Kith": "Swimmerskin",
        "Description": "Swimmers",
        "Blessing": "Natural Swimmer",
        "Book": "Can swim at full speed and hold breath underwater as though Stamina 7"
    },
    {
        "Kith": "Truefriend",
        "Description": "Loyal Pets",
        "Blessing": "Companion's Boon",
        "Book": "Spend Glamour to grant an ally get +3 on a roll. You're mah bro, bro."
    },
    {
        "Kith": "Venombite",
        "Description": "Poisonous",
        "Blessing": "Poisonous Bite",
        "Book": "Once per scene, one can spend Glamour to make a poisonous Brawling attack that deals no damage. It delivers a poison with toxicity equal to the changeling's Wyrd. Target cannot avoid resulting damage from poison normal Stam + Resolve roll."
    },
    {
        "Kith": "Windwing",
        "Description": "Flyers",
        "Blessing": "Gift of the Sky",
        "Book": "Reduced falling damage. Spend Glamour to glide one minute per Wyrd dot."
    }
]

const DarklingsData = [
    {
        "Kith": "Antiquarian",
        "Description": "Collectors of Forbidden Secrets",
        "Blessing": "Keys to Knowledge",
        "Book": "9-Again on Academics and Investigation rolls. Can spend Glamour to temporarily use Encyclopedic Knowledge for one question (If they already have it, they gain +3 to their roll)"
    },
    {
        "Kith": "Gravewight",
        "Description": "Affinity with the Dead",
        "Blessing": "Charnel Sight",
        "Book": "Spend a Glamour to make user able see ghosts until end of scene."
    },
    {
        "Kith": "Illes (Icelandic)",
        "Description": "Trolls",
        "Blessing": "Shadow Beauty",
        "Book": "Once a day, spend a Glamour to gain Striking Looks •••• for one hour. Gain +2 social when dealing with opposite sex."
    },
    {
        "Kith": "Leechfinger",
        "Description": "Fae Vampire",
        "Blessing": "Sap the Vital Spark",
        "Book": "Spend Glamour to heal self while damaging the opponent. Deals one lethal to target, and heals either a bashing or a lethal, or downgrades an Agg damage to lethal. Usable once per scene per dot of Wyrd."
    },
    {
        "Kith": "Lurkers",
        "Description": "Thieves and Pickpockets",
        "Blessing": "Larcenous Fingers",
        "Book": "9-Again on Larceny rolls, with no penalty for poor equipment. Spend Glamour to gain a +2 to Larceny rolls. 8-Again on Stealth rolls."
    },
    {
        "Kith": "Lurkglider",
        "Description": "Winged Monsters",
        "Blessing": "Gargoyle's Grace",
        "Book": "Spend Glamour to fall 100 yards without taking damage, +2 to for balancing on ledges."
    },
    {
        "Kith": "Mirrorskin",
        "Description": "Doppelganger and Identity Thief",
        "Blessing": "The Mercurial Visage",
        "Book": "+3 to disguise rolls"
    },
    {
        "Kith": "Moonborn",
        "Description": "Madness",
        "Blessing": "Lunatic's Kiss",
        "Book": "Once every 24 hours, roll Int + Wyrd vs. Res + Wyrd. Both of you gain the same derangement for a day, but the victim gets a worse version of it. Ends at sunrise for Supernaturals, lasts for a month for humans."
    },
    {
        "Kith": "Nightsinger",
        "Description": "Music",
        "Blessing": "Haunting Nocturne",
        "Book": "Spend Glamour, roll Perform + Wyrd vs Comp + Wyrd. Listeners gets -2 to Resolve, Empathy, Subterfuge until end of scene. Gains free Expression Specialty in a music form."
    },
    {
        "Kith": "Palewraith",
        "Description": "Forgotten",
        "Blessing": "Light's Aversion",
        "Book": "Spend Glamour, +1 to defense in shadows (Applies to firearms as well)."
    },
    {
        "Kith": "Pishacha (Hindu)",
        "Description": "Demons",
        "Blessing": "Taste of Madness",
        "Book": "Spend Glamour, and lick opponent. Opponent gains mild derangement (or upgrades to major) for one week of the Changeling's choice. Can only be used once per week."
    },
    {
        "Kith": "Razorhand",
        "Description": "Promise of Nighttime Violence",
        "Blessing": "Ripper's Gift",
        "Book": "Spend Glamour, hand becomes a knife (1L). Gain Melee Specialty Knives."
    },
    {
        "Kith": "Skogsra (Swedish)",
        "Description": "Wood Trolls",
        "Blessing": "Keepers of the Feral Heart",
        "Book": "Spend Glamour and look into bird or mammal's eyes. It becomes a loyal pet until next sunrise or sundown."
    },
    {
        "Kith": "Tunnelgrub",
        "Description": "The Monster Under Your Bed",
        "Blessing": "Slither and Squirm",
        "Book": "Can spend 1 Glamour to wriggle free of restraints or squeeze through tight spaces they normally would be too large to get through. Roll a Dex + Athletics for restraints, and an extended roll for things like tunnels."
    },
    {
        "Kith": "Whisperwisp",
        "Description": "Spies, Watching and Listening",
        "Blessing": "Turncoat's Tongue",

        "Book": "9-Again on Empathy and Subterfuge on conversation/gather info. Spend Glamour to whisper a message within earshot."
    }
]

const ElementalsData = [
    {
        "Kith": "Airtouched",
        "Description": "Air/Clouds/Wind",
        "Blessing": "Velocity of the Zephyr",
        "Book": "Can spend Glamour to add Wyrd to Speed or Initiative for the scene. Usable once per scene."
    },
    {
        "Kith": "Apsaras (Hindu)",
        "Description": "Beautiful Fog Nymphs",
        "Blessing": "Enthralling Mist",
        "Book": "Spend Glamour, change a target's vice to \"Lust\". Add Wyrd to manipulation against effected individuals. This effect lasts 24 hours."
    },
    {
        "Kith": "Ask-wee-da-eed (American)",
        "Description": "Will-o-the-Wisp",
        "Blessing": "Taste of Ill Luck",
        "Book": "Spend Glamour, force a successful reroll at -1. Usable once per day. Also, +1 effect to all Contracts of the Hearth. (Those contracts that offer a bonus get an an additional +1, those contracts that offer a negative remove an extra 1)"
    },
    {
        "Kith": "Blightbent",
        "Description": "Living glob of Pollution",
        "Blessing": "Caustic Caress",
        "Book": "Once per day, spend a Glamour, breathe pollution. Roll Dex + Wyrd - targets stamina. Target takes one lethal per success unless they can defend. +3 to resist man-made poisons."
    },
    {
        "Kith": "Di-cang (Buddhism)",
        "Description": "Humanoid Jewel",
        "Blessing": "Peace of Suffering",
        "Book": "Spend a Glamour, everyone within 10 yards suffers no wound penalties until end of scene. Purchase Larceny at half cost."
    },
    {
        "Kith": "Earthbones",
        "Description": "Earth/Mud/Sand/Stone",
        "Blessing": "Terrestrial Might",
        "Book": "Can spend Glamour to increase non-combat Strength rolls at 1-to-1 basis"
    },
    {
        "Kith": "Fireheart",
        "Description": "Fire/Lightning/Heat",
        "Blessing": "Flickering Acumen",
        "Book": "Can spend Glamour to increase Wits rolls at 1-to-1 basis"
    },
    {
        "Kith": "Levinquick",
        "Description": "Electricity/Lighting",
        "Blessing": "Fireflaught's Vigor",
        "Book": "Spend a Glamour, +2 to speed and initiative. Lasts for a turn per Wyrd."
    },
    {
        "Kith": "Manikin",
        "Description": "Dolls/Mechanical Men",
        "Blessing": "Artificer's Enchantment",
        "Book": "Can learn Contracts of Artifice at 5x per dot, and make untrained Crafts rolls at only -1 dice"
    },
    {
        "Kith": "Metalflesh",
        "Description": "Statues made of Metal",
        "Blessing": "Forge's Endurance",
        "Book": "Once per day, spend a Glamour to get +1 to Stamina, Resolve, Composure for scene."
    },
    {
        "Kith": "Sandharrowed",
        "Description": "Sand/Deserts",
        "Blessing": "Enveloping Sands",
        "Book": "+2 on grapples and escaping grapples."
    },
    {
        "Kith": "Snowskin",
        "Description": "Snow/Ice",
        "Blessing": "The Voice of Ice",
        "Book": "9-Again on Intimidation and Subterfuge rolls and can spend Glamour to reroll a failed Intimidation roll"
    },
    {
        "Kith": "Waterborn",
        "Description": "Water/Lakes/Ponds",
        "Blessing": "The Gift of Water",
        "Book": "Can spend a Glamour to breathe underwater and Swim at 2x Speed. Cannot breathe air until effect is over or Glamour is spent to deactivate"
    },
    {
        "Kith": "Woodblood",
        "Description": "Plants/Fungi/Wood",
        "Blessing": "Fade into the Foliage",
        "Book": "9-Again on Stealth and Survival rolls. Can spend a Glamour to hide in a normally unhideable area with decent foliage"
    }
]

const FairestData = [
    {
        "Kith": "Bright Ones",
        "Description": "Transformed by Light/Fire/Ice",
        "Blessing": "Goblin Illumination",
        "Book": "Can illuminate an area at will. By spending a Glamour, can make the light blinding; anyone targetting the Bright One gets a -2"
    },
    {
        "Kith": "Dancer",
        "Description": "Dancers, Assassins and Artists",
        "Blessing": "Fae Grace",
        "Book": "9-Again on Socialize or Expression rolls involving agility and +1 to Dodge"
    },
    {
        "Kith": "Draconic",
        "Description": "Graceful Warriors/Beastblooded",
        "Blessing": "Dragon's Talon",
        "Book": "Spend Glamour, reroll a Brawl attack, once per scene. +1 to Brawl rolls"
    },
    {
        "Kith": "Flamesiren",
        "Description": "Entrancement of the Flame",
        "Blessing": "Burning Hypnotism",
        "Book": "Once per scene, spend a Glamour, everyone looking must roll Res + Comp, or suffer -2 to all actions until scene or effect ends."
    },
    {
        "Kith": "Flowering",
        "Description": "Personification of a Sweet Flower",
        "Blessing": "Seductive Fragrance",
        "Book": "9-Again on Persuasion, Socialize and Subterfuge"
    },
    {
        "Kith": "Gandharva (Hindu)",
        "Description": "Pretty Messenger",
        "Blessing": "Heavenly Articulation",
        "Book": "Spend a Glamour, Expression or Persuasion rolls become an exceptional success at 3 successes instead of 5 for one scene."
    },
    {
        "Kith": "Larcenist",
        "Description": "Charmers and Thieves",
        "Blessing": "Thievery's Grace",
        "Book": "9-Again on Larceny and Socialize rolls involving Agility. +1 to dodge when dodging attacks."
    },
    {
        "Kith": "Minstrel",
        "Description": "Performer",
        "Blessing": "Perfect Pitch",
        "Book": "Spend a Glamour to reroll any failed dice on Expression roll. Harvesting Glamour from audience gains 8-Again."
    },
    {
        "Kith": "Muse",
        "Description": "Artistic Inspiration",
        "Blessing": "The Tyranny of Ideas",
        "Book": "Can spend a Glamour to give a Human +2 to an Expression, Persuasion, Socialize or Subterfuge roll. This can stack."
    },
    {
        "Kith": "Playmate",
        "Description": "Taken to be the Fae's Best Friend",
        "Blessing": "Circle of Friends",
        "Book": "When Playmate is primary actor in a teamwork roll, add +2. If secondary, you may forgo roll to give primary 9-again."
    },
    {
        "Kith": "Polychromatic",
        "Description": "Rainbowchild/Emotional Epileptic",
        "Blessing": "Prismatic Heart",
        "Book": "Reflexively spend a Glamour, +2 to resist emotional manipulation for scene. All empathy vs. Polychromatic suffers -1."
    },
    {
        "Kith": "Romancer",
        "Description": "Masters of Twisting Truths",
        "Blessing": "Narcissus's Blessing",
        "Book": "Subtle changes in everyone's eyes making each viewer see the Romancer with visual traits they find attractive. This causes a -3 to describe Romancer, which also applies to their clothes. Even cameras, both video and digital are affected by blessing."
    },
    {
        "Kith": "Shadowsoul",
        "Description": "Beauty of the Night",
        "Blessing": "Unnatural Chill",
        "Book": "Bonus to Intimidate = Wyrd, 9 again subterfuge. Contracts of Darkness are affinity."
    },
    {
        "Kith": "Succubus (Hebrew)",
        "Description": "Demons of Temptation and Sex",
        "Blessing": "Vice to Vice",
        "Book": "If target and Succubus have same vice, +1 to all social rolls. If both have Lust, +2. Two free dots of Striking Looks."
    },
    {
        "Kith": "Telluric",
        "Description": "Stars",
        "Blessing": "Music of the Spheres",
        "Book": "Always know what time it is, +3 on situations that require precise timing. Free Astronomy for Academics, Astrology for Occult."
    },
    {
        "Kith": "Treasured",
        "Description": "Treasured Item",

        "Blessing": "Alabaster Fortitude",
        "Book": "Once per scene, spend a Glamour to retake one Stamina, Resolve or Composure roll (Not for derangement rolls.)"
    },
    {
        "Kith": "Weisse Frau (German)",
        "Description": "Kind, Sad Pale Matrons",
        "Blessing": "Kiss of Life",
        "Book": "Usable once per game session, Spend a Glamour and kiss a target Target gains +2 armor. If target is younger then 13, +3. Does not stack with other armor."
    }
]

const OgresData = [
    {
        "Kith": "Bloodbrute",
        "Description": "Gladiator",
        "Blessing": "Improvised Mayhem",
        "Book": "Spend Glamour, turn something into any weapon from the Melee Weapons Chart (WoD Core p170). No -1 Improvised Weapon penalty for the Bloodbrute."
    },
    {
        "Kith": "Corpsegrinder",
        "Description": "Cannibals",
        "Blessing": "Sepulchral Hunger",
        "Book": "An enemy at half health grants +1 to the Ogre's attack rolls. Gain a +1 when fighting undead (Zombies, vampires)"
    },
    {
        "Kith": "Cyclopean",
        "Description": "Trackers with Acute Senses",
        "Blessing": "Smell the Blood",
        "Book": "8-Again on Wits based Perception rolls. Fi Fi Fo Fum indeed."
    },
    {
        "Kith": "Daitya (Hindu)",
        "Description": "Reptilian Giants/Godslayers",
        "Blessing": "Cutting Might",
        "Book": "Spend a Glamour, ignore durability do damage to structure for one attack. Free Weaponry Specialty at creation."
    },
    {
        "Kith": "Farwalker",
        "Description": "Cryptids and Urban Legends",
        "Blessing": "The Elusive Gift",
        "Book": "9-Again on Stealth or Survival rolls and can spend a Glamour to reroll a Stealth or Survival roll"
    },
    {
        "Kith": "Gargantuan",
        "Description": "Giants that Magically Grow",
        "Blessing": "Spurious Stature",
        "Book": "Once a day, spend a Glamour, add Wyrd to Size. When returning to normal size, take 1 lethal damage."
    },
    {
        "Kith": "Gristlegrinder",
        "Description": "Monstrous Eaters",
        "Blessing": "Terrible Teeth",
        "Book": "Can use a 2L bite attack when in a grapple"
    },
    {
        "Kith": "Oni (Japanese)",
        "Description": "Soul Consuming Demons",
        "Blessing": "Mouthful of Sin",
        "Book": "Spend a Glamour, bite attack once per session. Heal 1 lethal or 2 bashing for every damage dealt. Must be done on Morality 6 or less. Usable once per game session."
    },
    {
        "Kith": "Render",
        "Description": "Living Siege Engines",
        "Blessing": "Sundering Talons",
        "Book": "When attacking w/ bare hands, ignore 3 durability in objects."
    },
    {
        "Kith": "Stonebones",
        "Description": "Heavy Defenses",
        "Blessing": "Obdurate Skin",
        "Book": "As an instant action, once a day, spend a Glamour, gain Armor equal to Wyrd. While activated, all Dex rolls suffer -1. Defense gets a negative of 1 if Wyrd is 3, of 2 if Wyrd is 5, and so on. Does not stack with normal armor. Lasts until end of scene."
    },
    {
        "Kith": "Troll (Nordic)",
        "Description": "Ambushers/Cunning Riddlers",
        "Blessing": "Unyielding Voice",
        "Book": "Spend a Glamour, add Strength to any Manipulation rolls."
    },
    {
        "Kith": "Water-dweller",
        "Description": "Lake Monsters",
        "Blessing": "Lie Under the Waves",
        "Book": "Can hold breath as though Stamina 7 and no penalty to sight based perception rolls underwater"
    },
    {
        "Kith": "Witchtooth",
        "Description": "Crones and Warlocks",
        "Blessing": "Black Hex",
        "Book": "Spend a Glamour for +1 occult. +1 to activate Contracts that curse."
    }
]

const WizenedData = [
    {
        "Kith": "Artist",
        "Description": "Artists",
        "Blessing": "Impeccable Craftsmanship",
        "Book": "8-Again on Crafts rolls and can spend 1 Glamour to reroll failed dice on a Crafts roll"
    },
    {
        "Kith": "Author",
        "Description": "Writers",
        "Blessing": "Polyglot's Riddle",
        "Book": "8-Again on Expression when writing. Wits + Academics to understand written text in any mortal language."
    },
    {
        "Kith": "Brewer",
        "Description": "Makers of Alcohol",
        "Blessing": "The Inebriating Elixir",
        "Book": "+4 dice to resist poisons/intoxication; spend Glamour, magically make a drink alcoholic"
    },
    {
        "Kith": "Chatelaine",
        "Description": "Butlers",
        "Blessing": "Perfect Protocol",
        "Book": "9-Again on Social rolls that deal with manners or etiquette and can spend a Glamour to get +2 to Manipulation and Presence die pools"
    },
    {
        "Kith": "Chirurgeon",
        "Description": "Doctors",
        "Blessing": "The Analeptic Charm",
        "Book": "9-Again on Medicine rolls, doesn't suffer equipment penalties on Medicine rolls"
    },
    {
        "Kith": "Drudge",
        "Description": "Slaves/Servants",
        "Blessing": "Unseen Labor",
        "Book": "Spend a Glamour, complete a simple task (that takes 5 or fewer successes to accomplish) at time / (Wyrd + 1). Cannot be watched while doing it. 9-Again on Stealth rolls."
    },
    {
        "Kith": "Fatemaker",
        "Description": "Talecraft Specialist",
        "Blessing": "Turn of the Tale",
        "Book": "Add 2 Glamour to a Talecrafting roll to avoid Cruel Twists of Fate (does not protect against dramatic failure on the roll)"
    },
    {
        "Kith": "Gameplayer",
        "Description": "Gamemasters/Strategists",
        "Blessing": "Grandmaster's Stratagem",
        "Book": "Spend a Glamour, win mental based board games. +3 to gamble in games that require both mental skill and luck."
    },
    {
        "Kith": "Gremlin (English)",
        "Description": "Sabotage",
        "Blessing": "Gremlinizing Touch",
        "Book": "Once per day, spend a Glamour and touch a device (weapons included) to negate equipment bonus."
    },
    {
        "Kith": "Inventors",
        "Description": "Artificers",
        "Blessing": "Inventive Genius",
        "Book": "8-Again on Crafts and Science rolls involving mechanisms and devices. Spend Glamour to add Wyrd score in dice to such a roll."
    },
    {
        "Kith": "Miner",
        "Description": "Underground",
        "Blessing": "Tappingspeak",
        "Book": "Spend a Glamour, send a coded message through vibrations in the ground. Range is 1 mile per Wyrd. Coded message is understood by it's intended recipient."
    },
    {
        "Kith": "Oracle",
        "Description": "Prophets",
        "Blessing": "Panomancy",
        "Book": "Can tell the future as though they had the Common Sense Merit"
    },
    {
        "Kith": "Pamarindo (Italian)",
        "Description": "Cannibals/Chefs/Butchers",
        "Blessing": "Gourmand's Grotesquerie",
        "Book": "Spend a Glamour, touch raw meat (Minimum one pound, Pamarindo can feed people equal to Wyrd score which nourishes for 24 hours (eater doesn't have to eat). Gain Free Iron Stomach Merit (WoD p112)."
    },
    {
        "Kith": "Smith",
        "Description": "Metalworkers",
        "Blessing": "Steel Mastery",
        "Book": "Spend Glamour, improve a tool"
    },
    {
        "Kith": "Soldier",
        "Description": "Combatants/Sentries",
        "Blessing": "Blade Lore",
        "Book": "Has a Weaponry specialty with Bladed weapons"
    },
    {
        "Kith": "Thusser (Norway)",
        "Description": "Parties/Dancers/Hypnotism",
        "Blessing": "Fiddler's Delight",
        "Book": "Spend a Glamour, pick a target: A successful expression roll involving singing or playing instrument makes target unable to act as long as performance continues or target must defend themselves from danger."
    },
    {
        "Kith": "Woodwalker",
        "Description": "Protectors of the Land/Gardeners",
        "Blessing": "Wildcraft",
        "Book": "8-Again to Survival rolls and can survive by eating any plant"
    }
]

export { BeastsData, DarklingsData, ElementalsData, FairestData, OgresData, WizenedData }