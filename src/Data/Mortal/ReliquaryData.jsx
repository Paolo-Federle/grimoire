const reliquaryData = [
    {
        "Name": "Antikythera Mechanism",
        "Effect": "Gear Tooth Prophecy",
        "Book": "Rel p42"
    },
    {
        "Name": "Baghdad Battery",
        "Effect": "Ancient Source of Energy, Ephemeral Revelation, Battery of Will, Exchange of Power",
        "Book": "Rel p44"
    },
    {
        "Name": "Book of Dead Names, The",
        "Effect": "Addictive, Entrap Entity, Eye-Opener",
        "Book": "Rel p47"
    },
    {
        "Name": "Bronze Wheel, The",
        "Effect": "Dream, Beacon, anything the storyteller decides",
        "Book": "Rel p49"
    },
    {
        "Name": "Chamfort Letters, The",
        "Effect": "-",
        "Book": "Rel p50"
    },
    {
        "Name": "Crystal Skull",
        "Effect": "Potent Success",
        "Book": "Rel p52"
    },
    {
        "Name": "Daniel's Slide Rule",
        "Effect": "Engineering Potent Success, Surprising Weapon",
        "Book": "Rel p54"
    },
    {
        "Name": "Dendera Lights",
        "Effect": "Spotlight on the Gods, Defend",
        "Book": "Rel p56"
    },
    {
        "Name": "Dendera Reliefs",
        "Effect": "Revelation",
        "Book": "Rel p57"
    },
    {
        "Name": "Frantic Flick Knife, The",
        "Effect": "Never Surprise, Gift of Swiftness, Protection Charm Grapple",
        "Book": "Rel p58"
    },
    {
        "Name": "Glass Mansion Blueprints",
        "Effect": "Pulse, Unnatural Travel",
        "Book": "Rel p60"
    },
    {
        "Name": "Honjo Masamune",
        "Effect": "Protection Charm, Insidious Curse",
        "Book": "Rel p63"
    },
    {
        "Name": "Ica Stones",
        "Effect": "Soul Inheritance",
        "Book": "Rel p64"
    },
    {
        "Name": "Lady of Salt, The",
        "Effect": "Reward Temptation, Addictive",
        "Book": "Rel p66"
    },
    {
        "Name": "Little Black Book, The",
        "Effect": "Hypnotic Effect",
        "Book": "Rel p67"
    },
    {
        "Name": "Mother of Vinegar",
        "Effect": "Protection Charm",
        "Book": "Rel p69"
    },
    {
        "Name": "Prayer to St. Benedict",
        "Effect": "Defend",
        "Book": "Rel p71"
    },
    {
        "Name": "Seal of Sekhmet",
        "Effect": "Gift of Vitality, Protection Charm Disease",
        "Book": "Rel p72"
    },
    {
        "Name": "Shakespeare's Lost Play",
        "Effect": "Resist Fire, Manufacture Verge",
        "Book": "Rel p74"
    },
    {
        "Name": "Terracotta Warrior",
        "Effect": "Bolster Territory, Smite",
        "Book": "Rel p76"
    },
    {
        "Name": "Turk, The",
        "Effect": "Investigatory Charm, Potent Success Politics",
        "Book": "Rel p78"
    },
    {
        "Name": "Writ of Safe Haven",
        "Effect": "Bolster Territory, Bulwark of Sanity",
        "Book": "Rel p79"
    }
]

const reliquaryPowersData = [
    {
        "Relic Powers": "Always Returns (••)",
        "Effect": "\"Random\" events conspire to return to owner",
        "Cost": "4 WP (bonding)",
        "Roll": "N/A",
        "Source": "Reliquary 87"
    },
    {
        "Relic Powers": "Battery of Will (•)",
        "Effect": "May spend 2 WP to store 1; max of 5",
        "Cost": "2 WP/1 stored",
        "Roll": "N/A",
        "Source": "Reliquary 88"
    },
    {
        "Relic Powers": "Bolster Territory (• to •••••)",
        "Effect": "+2 Defense, +3 Initiative, +4 Speed (+1 Armor on exceptional) as long as relic is static (up to one scene); may take additional lethal damage to extend benefits to others. The power covers a radius of ten yards per dot.",
        "Cost": "Blood from lethal wound",
        "Roll": "Wits + Survival",
        "Source": "Reliquary 88"
    },
    {
        "Relic Powers": "Bulwark of Sanity (••)",
        "Effect": "Immune to the effects of derangements; -3 to resist effects of derangements if relic is not on person",
        "Cost": "None",
        "Roll": "N/A",
        "Source": "Reliquary 89"
    },
    {
        "Relic Powers": "Buoyancy (• or •••)",
        "Effect": "• doubles distance one falls before taking particular damage (i.e. one bashing damage per six yards fallen, and the damage doesn’t turn lethal until the 60 yard mark).  ••• actually allows the user not to suffer any damage until the 60 yard mark, at which point he begins taking lethal damage at a rate of one point per 10 yards above the 60 yard mark (so, if he falls 100 yards, he would assume four points of lethal damage).",
        "Cost": "2 WP",
        "Roll": "N/A",
        "Source": "Reliquary 89"
    },
    {
        "Relic Powers": "Confer Equipment Bonus (• to •••••)",
        "Effect": "Adds its dots to the equipment bonus of target items of one type (chosen at creation) for one scene, or two scenes on an exceptional success.",
        "Cost": "2 WP",
        "Roll": "Wits + Crafts",
        "Source": "Reliquary 89"
    },
    {
        "Relic Powers": "Confer Equipment Penalty (• to •••••)",
        "Effect": "Imposes its dots as a penalty to pools to use target items of one type (chosen at creation) until the next sunrise or sundown, or twenty-four hours on an exceptional success.",
        "Cost": "1 WP",
        "Roll": "Manipulation + Crafts",
        "Source": "Reliquary 90"
    },
    {
        "Relic Powers": "Defend (• to •••••)",
        "Effect": "Imposes its dots as a penalty to all attacks against the wielder by creatures that don't follow Morality (see nWoD 91) within [wielder's Wits + Resolve] yards. May spend a Willpower dot to grant this protection to up to three others in range.",
        "Cost": "2 WP",
        "Roll": "N/A",
        "Source": "Reliquary 90"
    },
    {
        "Relic Powers": "Entrap Entity (••••)",
        "Effect": "May imprison ghosts OR spirits (chosen at creation); entrapped entities can communicate, but not act. Additional users beyond the first can contribute a Willpower point to improve the roll by one die.",
        "Cost": "2 WP",
        "Roll": "Wits + Occult vs Power + Resistance",
        "Source": "Reliquary 91"
    },
    {
        "Relic Powers": "Ephemeral Attack (•••)",
        "Effect": "Relic may be used as a weapon against enemies in Twilight with damage of 2(L) regardless of the relic's usual attack and damage properties. To activate this power, the relic must be smeared with blood or saliva.",
        "Cost": "1 WP",
        "Roll": "N/A",
        "Source": "Reliquary 91"
    },
    {
        "Relic Powers": "Ephemeral Revelation (•)",
        "Effect": "Reveals entities in Twilight for one scene, or until the next sunrise or sunset on an exceptional success.",
        "Cost": "1 WP",
        "Roll": "Wits + Occult",
        "Source": "Reliquary 91"
    },
    {
        "Relic Powers": "Exchange of Power (•••)",
        "Effect": "Adds to a given Attribute (chosen at creation) for one action at the expense of Health. The user may accept any amount of damage that will not kill them, but may not accept a mix of bashing and lethal.",
        "Cost": "1 Bashing for +1, 1 Lethal for +2.",
        "Roll": "N/A",
        "Source": "Reliquary 92"
    },
    {
        "Relic Powers": "Facade (•)",
        "Effect": "Relic may disguise itself as any other item of the same Size for one hour per dot of user's Resolve (two on an exceptional success). All attempts, magical or mundane, to scrutinize the object take a penalty equal to successes on the activation roll.",
        "Cost": "1 WP",
        "Roll": "Wits + Crafts",
        "Source": "Reliquary 92"
    },
    {
        "Relic Powers": "Feral Blessing (•••)",
        "Effect": "Use higher of Wits and Dex to determine Defense; +3 to Wits + Composure and Wits + Survival for perception, gain 2(L) natural attack. While active, Int and Manipulation are reduced to 1; must succeed on Resolve + Composure to deactivate willingly. The relic must be touching bare skin to function.",
        "Cost": "None",
        "Roll": "N/A",
        "Source": "Reliquary 93"
    },
    {
        "Relic Powers": "Fool's Gold (•)",
        "Effect": "Gain temporary Resources dots; anything bought with these dots decays after [user's Composure] hours.",
        "Cost": "1 WP",
        "Roll": "Resolve + Larceny",
        "Source": "Reliquary 93"
    },
    {
        "Relic Powers": "Forgettable (••)",
        "Effect": "May vanish completely from the attention of any observers; those with supernatural senses may roll to detect the user. Even blatantly unsubtle actions only reveal the user for four turns. Deactivating this power requires a Wits + Presence roll with a -1 per ten minutes the user has been invisible (to a maximum of -5). This roll receives +2 if the initial activation roll was an exceptional success. A dramatic failure means the user cannot try again for 8 hours. After a day under the effects of the power, the others begin to forget small details about his life and the user suffers a -2 penalty on rolls to remember anything; after a week, the user begins to forget his own life.",
        "Cost": "1 WP",
        "Roll": "Wits + Stealth",
        "Source": "Reliquary 94"
    },
    {
        "Relic Powers": "Gift of Swiftness (•••)",
        "Effect": "+2 Initiative, +1 Defense, triple Speed, -1 to all Physical rolls to do anything other than run. Lasts one scene.",
        "Cost": "2 WP",
        "Roll": "N/A",
        "Source": "Reliquary 95"
    },
    {
        "Relic Powers": "Gift of Vitality (•••)",
        "Effect": "May erode Physical attributes to heal damage; these dots return at one dot per 24 hours.",
        "Cost": "1 dot to heal all Bashing or one Lethal; 2 dots to heal one Aggravated",
        "Roll": "N/A",
        "Source": "Reliquary 97"
    },
    {
        "Relic Powers": "Giver of Breath (•)",
        "Effect": "May hold breath for one scene; each activation imposes a cumulative -1 to Physical rolls until the user gets a night's rest. The relic must be touching the user's chest to function.",
        "Cost": "N/A",
        "Roll": "N/A",
        "Source": "Reliquary 96"
    },
    {
        "Relic Powers": "Glimpse (•••)",
        "Effect": "Allows the user to read an area's past, divining the answers to specific questions. The user can scry back up to one year per success on the activation roll, and receives feedback from one sense (two on an exceptional success). Attempting to scry back too far results in a refund of the spent WP. Each vision lasts no more than one scene.",
        "Cost": "2 WP",
        "Roll": "Wits + Resolve",
        "Source": "Reliquary 96"
    },
    {
        "Relic Powers": "Hypnotic Effect (••)",
        "Effect": "Implant a hypnotic suggestion; this may be simple or complex, contingent upon events or on time, but can be only one discrete task, cannot take more than an hour to complete, and cannot be suicidal or impossible. On an exceptional success, future rolls to use this Power against the same target receive +1. A task that becomes dangerous entitles the victim to a Resolve + Composure roll to snap out of it.",
        "Cost": "1 WP",
        "Roll": "Manipulation + Expression vs Resolve + Composure",
        "Source": "Reliquary 97"
    },
    {
        "Relic Powers": "Intoxicating Aura (•••)",
        "Effect": "-1 to all Dex, Int or Wits rolls, +3 to Presence and Manipulation rolls for one scene. Applies to everyone within five yards per activation success, as well as the activator even if they leave the area. On an exceptional success, the activator may ignore the penalty to Dex, Int and Wits rolls.",
        "Cost": "2 WP",
        "Roll": "Presence + Expression",
        "Source": "Reliquary 97"
    },
    {
        "Relic Powers": "Investigatory Charm (•••)",
        "Effect": "When rolling Wits + Investigation or Wits + Composure, may either forgo the roll in favor of one automatic success or may take an exceptional success on 3 instead of 5 successes. This power does function for all Wits + Composure rolls, including off-the-cuff perception checks. Activating this power requires one turn of concentration, and it lasts for one scene. At the end of the scene, the character gains the Hard of Hearing, Poor Sight or Mute flaw until they get eight hours of sleep.",
        "Cost": "None",
        "Roll": "N/A",
        "Source": "Reliquary 98"
    },
    {
        "Relic Powers": "Knowledge Seeker (•)",
        "Effect": "Research rolls can be performed in 1/5th of the usual time.",
        "Cost": "1 WP",
        "Roll": "N/A",
        "Source": "Reliquary 98"
    },
    {
        "Relic Powers": "Luck Token (• to •••)",
        "Effect": "May activate once per session per dot to upgrade a dramatic failure to a regular failure, a failure to a minimum success, and a success to a minimum exceptional success. This cannot be used for extended rolls.",
        "Cost": "1 WP",
        "Roll": "N/A",
        "Source": "Reliquary 98"
    },
    {
        "Relic Powers": "Machine Bond (••••)",
        "Effect": "The user may project his consciousness into a machine, allowing him unfettered access to its memory. This lasts for one scene, and ending it early costs a Willpower point. If the object suffers Structure damage while the user's consciousness is in it, they suffer two lethal damage. Activating this Power causes the user to gain the Irrationality derangement for one scene, or upgrades it to Multiple Personalities for eight hours if the user already possessed it.",
        "Cost": "1 WP",
        "Roll": "Presence + Computer, extended (10-20 successes, one minute per roll)",
        "Source": "Reliquary 99"
    },
    {
        "Relic Powers": "Manufacture Verge (•••••)",
        "Effect": "Creates a permanent Verge; the user defines the conditions upon which it opens, but it will only do so for one hour per month. The item is consumed unless the user sacrifices a permanent dot from a Mental attribute.",
        "Cost": "None",
        "Roll": "Presence + Occult, extended (5-15 successes, one hour per roll)",
        "Source": "Reliquary 100"
    },
    {
        "Relic Powers": "Nature's Wrath (•••••)",
        "Effect": "Create intense, destructive weather conditions.",
        "Cost": "5 WP and the sacrifice of a beloved inorganic object",
        "Roll": "Presence + Expression, extended (10 successes, one minute per roll)",
        "Source": "Reliquary 101"
    },
    {
        "Relic Powers": "Never Surprised (•)",
        "Effect": "Automatically succeed Wits + Composure check to detect a surprise attack; may act normally and are not denied Defense. This Power activates itself when the check is failed, and does not require user permission. If the user cannot pay the cost, they take one point of bashing damage.",
        "Cost": "1 WP",
        "Roll": "N/A",
        "Source": "Reliquary 102"
    },
    {
        "Relic Powers": "Object Killer (•••)",
        "Effect": "The Relic ignores Durability; attacks with the Relic damage structure directly.",
        "Cost": "None",
        "Roll": "N/A",
        "Source": "Reliquary 103"
    },
    {
        "Relic Powers": "Potent Success (••• or •••••)",
        "Effect": "••• grants 9-again with its Skill (chosen at creation); ••••• grants 8-again. This lasts for one scene, and may not be used more than once in 24 hours.",
        "Cost": "2 WP, or 3 for Brawl, Weaponry or Firearms",
        "Roll": "N/A",
        "Source": "Reliquary 103"
    },
    {
        "Relic Powers": "Protection Charm (• to •••••)",
        "Effect": "Bashing Damage (•••): Immune to bashing for one turn per success.Deprivation (•): Immune to hunger and thirst for one day per success.Disease (••): Immune to all disease for one week per success, or suppress an already-contracted nonmagical disease for one day per success.Electrocution (••): Immune to damage from electricity.Fatigue (•): May go one day without sleep per success without penalty; at end of Power, must sleep 8 hours.Grapple (•••): All grappling attempts automatically fail for one turn per success.Lethal Damage (•••••): Immune to all normal bashing; all lethal is downgraded to bashing. One turn per success.Poisons/Toxins/Drugs (•••): Immune to all poisons, toxins and drugs for one hour per success.Stun/Knockout (•): Immune to stun and knockout effects for one turn per success.Temperature Extremes (•): Immune to the negative effects of weather and temperature extremes for one hour per success.An exceptional success on any of these activation rolls grants +1 Health while the charm is in effect.",
        "Cost": "1 WP",
        "Roll": "Wits + Survival",
        "Source": "Reliquary 103"
    },
    {
        "Relic Powers": "Pulse (• to •••••)",
        "Effect": "Electronic devices within five yards per one dot of this Power's rating are disabled for a number of turns equal to the user's Resolve + Composure score. On an exceptional success, the objects are damaged and will not function until they are repaired with a wits + Crafts roll.",
        "Cost": "2 WP",
        "Roll": "Resolve + Crafts",
        "Source": "Reliquary 104"
    },
    {
        "Relic Powers": "Resist Fire (• or •••)",
        "Effect": "One turn per success, or one scene on an exceptional success; • downgrades damage from fire one level, ••• prevents it entirely. Any Relic with this power is completely fireproof.",
        "Cost": "2 WP",
        "Roll": "Stamina + Survival",
        "Source": "Reliquary 104"
    },
    {
        "Relic Powers": "Revitalizing Aura (••••)",
        "Effect": "Times for natural healing halved.",
        "Cost": "One permanent physical Attribute dot or two Willpower dots",
        "Roll": "N/A",
        "Source": "Reliquary 105"
    },
    {
        "Relic Powers": "Reward Temptation (••)",
        "Effect": "May not regain Willpower from Virtue; -1 on Degeneration rolls; at end of any session where owner fulfilled Vice, their Willpower is completely refreshed, and any action that provokes a Degeneration check earns them 1 XP (2 on an exceptional success). Lasts one day per success.",
        "Cost": "None",
        "Roll": "Manipulation + Subterfuge",
        "Source": "Reliquary 105"
    },
    {
        "Relic Powers": "Sense Creature (••)",
        "Effect": "Any time a creature of a type chosen during Creation is within 100 yards, the Relic alerts its owner.",
        "Cost": "None",
        "Roll": "N/A",
        "Source": "Reliquary 105"
    },
    {
        "Relic Powers": "Skeleton Key (•• or •••)",
        "Effect": "•• can open any lock that requires fewer than 7 successes to pick; ••• can also shut down any security system that requires fewer than 7 successes to deactivate. The key also grants 9-again on Larceny rolls, and permits a Dex + Larceny roll to pick locks or disable security even if it is a wildly inappropriate tool for the job.",
        "Cost": "2 WP; 1 Willpower dot to activate within 24 hours of a prior activation",
        "Roll": "N/A or Dex + Larceny",
        "Source": "Reliquary 106"
    },
    {
        "Relic Powers": "Smite (•••••)",
        "Effect": "All within [Resolve + Composure] yards take lethal damage equal to the activation successes; objects take double damage, and Durability is ignored. The user takes no damage, but their possessions do. Until they can get 8 hours of sleep, they take a -3 to all Physical and Mental rolls (-2 with Iron Stamina at any level).",
        "Cost": "2 WP, and gain or upgrade Narcissism for seven days",
        "Roll": "Str + Presence",
        "Source": "Reliqary 106"
    },
    {
        "Relic Powers": "Social Lubrication (•)",
        "Effect": "User gets +1 to all Social rolls; all others get -1 to all social rolls. These are increased to +/- 2 on an exceptional success.",
        "Cost": "-1 to all Physical rolls while active",
        "Roll": "Resolve + Composure",
        "Source": "Reliquary 107"
    },
    {
        "Relic Powers": "Soul Inheritance (•••••)",
        "Effect": "Ignore all Unskilled penalties; may draw 2 Willpower a week for free, and may draw additional Willpower by taking one lethal damage per point; pick one category of Skill--activation successes translate into bonus dice for all skills in this category, to a maximum of +5",
        "Cost": "1 Willpower dot and one Attribute dot",
        "Roll": "Composure + Empathy",
        "Source": "Reliquary 108"
    },
    {
        "Relic Powers": "Spring-Heeled (•)",
        "Effect": "Doubles distances the user can jump.",
        "Cost": "1 WP",
        "Roll": "N/A",
        "Source": "Reliquary 109"
    },
    {
        "Relic Powers": "Steal Skill (•••• or •••••)",
        "Effect": "Steal one skill dot per success, up to five, with touch (••••) or line-of-sight (•••••). An exceptional success permits the theft of a Specialty, as well. No one victim can be targeted more than once per calendar year. The stolen dots persist for 24 hours, although expending three points of Willpower will extend that by an additional 24 hours. The stolen dots must all come from the same skill, and the victim must have dots in that skill for the user to steal them. These dots cannot raise any of the user's skills above their normal maxima.",
        "Cost": "3 WP",
        "Roll": "Presence + Larceny",
        "Source": "Reliquary 109"
    },
    {
        "Relic Powers": "Stop Time (•••••)",
        "Effect": "Time is stopped for a number of turns equal to activation successes, or until the user makes a Killing Blow.",
        "Cost": "3 WP, and gain Anxiety, Obsession-Compulsion or Schizophrenia for 12 hours; the derangement is then downgraded to its mild form, persisting another 12 hours",
        "Roll": "Int + Resolve",
        "Source": "Reliquary 109"
    },
    {
        "Relic Powers": "Swollen Might (•••)",
        "Effect": "Relic deals Lethal rather than Bashing damage; objects are treated as having one point of Durability less when attacked with the Relic. The Power lasts for one scene.",
        "Cost": "2 WP",
        "Roll": "N/A",
        "Source": "Reliquary 110"
    },
    {
        "Relic Powers": "Touch of Madness (••• or •••••)",
        "Effect": "Inflict a derangement of your choice by touch (•••) or within line-of-sight (•••••). The derangement lasts for one week, or one year if the user expends one Willpower dot.",
        "Cost": "2 WP for a mild derangement, 4 for a severe derangement",
        "Roll": "Manipulation + Empathy vs Resolve + Composure",
        "Source": "Reliquary 110"
    },
    {
        "Relic Powers": "Unbreakable (•••)",
        "Effect": "The Relic ignores all non-magical attacks.",
        "Cost": "None",
        "Roll": "N/A",
        "Source": "Reliquary 110"
    },
    {
        "Relic Powers": "Unnatural Travel (••••)",
        "Effect": "Allows for the creation of portals between two locations, though each location must be marked or contain one half of a Relic pair. This Power allows for travel across e.g. the Gauntlet.",
        "Cost": "2 WP, or 4 WP to travel between worlds",
        "Roll": "Wits + Manipulation",
        "Source": "Reliquary 111"
    },
    {
        "Relic Powers": "Voice of the Relic (• to •••••)",
        "Effect": "The Relic has dots in Mental Skills or Mental Merits equal to its dots in this Power. Mental merits have different rules for Relics:Common Sense - once per chapter, the Relic can roll four dice to warn a character who is about to do something foolishDanger Sense - the Relic has two dice to warn its master of ambushesEidetic Memory - the Relic has +2 to rolls to use its Skill dots to recall informationEncyclopedic Knowledge - the Relic has four dice to remember informationHolistic Awareness - the Relic can roll three dice to assist Medicine checksMeditative Mind - the Relic adds +1 to its owner's attempts to meditate",
        "Cost": "To bond with the Relic: a combination of lethal damage and WP equal to its dots in Voice of the Relic",
        "Roll": "N/A",
        "Source": "Reliquary 112"
    }
]

export { reliquaryData, reliquaryPowersData }