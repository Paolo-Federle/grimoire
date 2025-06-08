const amuletData = [
    {
        "Name": "The Tefket Stele",
        "Rating": "•",
        "Cost": "--",
        "Power": "+1 Occult, +1 more for Ancient Egyptian Occult, and fluency in Ancient Egyptian, for 24 hours",
        "Curse": "-2 Streetwise and Socialize for 24 hours (Maa-Kep are immune)",
        "Book": "MTC 217"
    },
    {
        "Name": "The Olympic Frog",
        "Rating": "••",
        "Cost": "○ (●, any)",
        "Power": "+1 Dexterity. Optional: 8-again Dexterity. Lasts 1 Scene.",
        "Curse": "Activation cost (Maa-Kep are immune)",
        "Book": "MTC 218"
    },
    {
        "Name": "The Sundered Seal",
        "Rating": "•••",
        "Cost": "--",
        "Power": "Seals all the locks on an object it touches. Built into a Tomb, it gives +3 Peril (max 5) and the Radiant Endowment (Ka).",
        "Curse": "If the bearer sees someone they believe is a thief, roll a chance die to avoid attacking (Maa-Kep roll 1 die instead).",
        "Book": "MTC 218"
    },
    {
        "Name": "The Amundsley Pebble",
        "Rating": "••••",
        "Cost": "--",
        "Power": "gain Ambidexterous, Brawling Dodge, Fast Reflexes (2), Quick Draw, and Weaponry Dodge, ignoring prereqs. Lasts while held and 12 hours (one Chapter) after",
        "Curse": "Can't benefit from Meditation (mummies can still recharge Pillars); Can't gain Willpower from sleep or indulging Vice. (Maa-Kep may gain Willpower from sleep)",
        "Book": "MTC 219"
    },
    {
        "Name": "The Seal of the Vigilant Scorpion",
        "Rating": "••••",
        "Cost": "human sacrifice",
        "Power": "When charged with human sacrifice, it \"gains\" 1 Relic dot, which may be drained without damaging the relic (but still provokes Descent). Can only be drained of 1 dot, and only after paying the cost",
        "Curse": "Drains 1 Willpower from every mortal within .72 miles, every 5 days. (Maa-Kep may spend any 1 Pillar point to prevent this)",
        "Book": "GotD 101"
    },
    {
        "Name": "The Diamond Chisel of Tausret-Who-Binds-the-Gaze-of-Men",
        "Rating": "•••••",
        "Cost": "--, --, (○)",
        "Power": "Resolve + Composure + Tolerance vs Presence + Manipulation. Shallow: read surface thoughts; target must spend 1 Willpower to force a roll. Moderate: roll, no cost; learn Vice, Virtue, Morality rating, values, personality, and derangements; victim loses 1 Willpower. Profound: roll, spend 1 Willpower: learn everything about their mind, and +2 to Social rolls toward them; victim lose 1 Willpower and can't act for the scene; Memory 5+ Sin.",
        "Curse": "Victim and user both suffer mental trauma. Shallow: -1 Resolve and Composure for 24 hours or until 6 meditation successes. Moderate: as above and -1 Intelligence and Presence for 48 hours (or 10 successes). Profound: -1 all Mental and Social attributes indefinitely (or 20 successes). (Maa-Kep are immmune; only their victims suffer)",
        "Book": "GotD 99"
    },
    {
        "Name": "The Jackal's Hunger",
        "Rating": "•••••",
        "Cost": "(●)",
        "Power": "Win any even battle. Negate uneven factors, such as: outnumbered 2-1, barely trained troops, positional disadvantage, lack of food or medicine, poor tactical intel. In smaller conflict, everyone gets +1 to all Skill rolls if following your orders. For 1 Pillar (any) give +2 to any such roll (even your own), once per action.",
        "Curse": "Pay 1 Willpower Dot per week, or indulge the Jackal's depraved bloodlust. (Maa-Kep spend 1 Willpower point to resist)",
        "Book": "MTC 219"
    },
    {
        "Name": "The Lapis Chisel of Khyan the Unsurpassed",
        "Rating": "•••••",
        "Cost": "--",
        "Power": "While a target is displaying a talent based on knowledge or training, copy their Skill rating, Specialty, or up to 5 dots in Merits",
        "Curse": "-1 to the Power Attribute of the same category, until the user leaves the target's presence, changes copied talents, or gives away the relic",
        "Book": "GotD 100"
    }
]

const effigyData = [
    {
        "Name": "The White Ibis",
        "Rating": "•",
        "Cost": "● Ren",
        "Power": "Up to 6 may benefit each activation. 1 person pays the cost for the group, but each must roll Intelligence + Occult. Each user gets the highest rating in the same 1 Mental Skill as the highest in the group, and take 9-again to that Skill. Tef-Aabhi gain 8-again. Last 1 Scene. Must recharge 1 hour in starlight",
        "Curse": "After the blessing expires, it costs 1 Willpower to use that Skill again within 24 hours; pay only one. (Tef-Aabhi are immune)",
        "Book": "MTC 220"
    },
    {
        "Name": "Nolan's Lamborghini",
        "Rating": "••",
        "Cost": "● Ba",
        "Power": "Intelligence + Drive/Occult - Resolve + Drive. Control an occupied car for 1 turn; may activate successively without cost until the roll Fails",
        "Curse": "Any hostile ghosts nearby will target the user; child ghosts gain 9-again on attacks. (Tef-Aabhi's enemies don't get 9-again)",
        "Book": "MTC 221"
    },
    {
        "Name": "The Wooden Pharaoh",
        "Rating": "•••",
        "Cost": "(●/+1 Ab or Ren)",
        "Power": "Gain Inspiring Merit, and 9-again Intimidation, Persuasion, and Socialize. Toward a superior, may spend up to 4 Pillar points to gain +1/point to a supernatural power or Social roll; Tef-Aabhi gain an extra +1 to this free",
        "Curse": "if user fails an Intimidation, Persuasion, or Socialize roll, suffer -1 to Social resistance for 24 hours. If points were spent, increase the penalty by the number of points. (Tef-Aabhi reduce penalties by 1)",
        "Book": "MTC 221"
    },
    {
        "Name": "The Blasphemous Depiction",
        "Rating": "••••",
        "Cost": "--",
        "Power": "Place a ghost inside a corpse to resurrect it. The creature can't heal Agg, is only knocked out by Lethal, and can't die from starvation, thirst, age, or illness. Other results are up to ST",
        "Curse": "anyone who sees the relic permanently gains Schizophrenia and Irrationality. (Tef-Aabhi only gain Vocalization)",
        "Book": "MTC 222"
    },
    {
        "Name": "The Mirror of Brass Ivy",
        "Rating": "•••••",
        "Cost": "-- (● Sheut)",
        "Power": "Can target anyone seen in the reflection with powers as if line of sight. May spend 1 Sheut; Intelligence + Presence vs Resolve + Composure to drain 1 Willpower dot per net success from a reflected target; mummies also get +1 Sekhem per net success, others get Willpower points. After using, neither party can use for a week.",
        "Curse": "the user rolls 1 die: 1 = -1 Memory/Sekhem gains; 2-7 = -1 Memory; 8-9 = roll for degeneration with 2 dice; 10 = no effect. (Tef-Aabhi are not immune)",
        "Book": "MTC 223"
    }
]

const RegiumData = [
    {
        "Name": "Pyropus",
        "Rating": "• to •••••",
        "Cost": "-- (●/day any)",
        "Power": "Gold-Bronze-Blood Magic tools. +1/rating to equipment bonus, weapon rating, or general armor. Spend 1 Pillar per day to add rating to Health: marked first; each Agg reduces its permanent rating",
        "Curse": "the first time per Scene the user suffers 1L or Agg, relic deals 1L/turn for [relic dot] turns. (Mesen-Nebu only suffer 1L/day)",
        "Book": "MTC 224"
    },
    {
        "Name": "Minor Djed",
        "Rating": "••",
        "Cost": "●/hour any",
        "Power": "Makes an immobile object solid to Twilight creatures. Moving or hitting relic with supernatural aggravated damage ends the effect",
        "Curse": "warps ghosts near it into inhuman monsters. Roll 2 dice then 1 die after first hour, then day, then week, then month, then every year. If both rolls fail, +1 attribute and an inhuman trait; +1 Numen after every 4 occurrences",
        "Book": "MTC 224"
    },
    {
        "Name": "The Masr Grail",
        "Rating": "•••",
        "Cost": "-- (●/person any)",
        "Power": "Removes any toxins poured into it; heals all Bashing when drank from and restores 1 Willpower per Chapter. Share cup with others to develop a sympathetic bond for 1 Pillar per person for 24 hours: sense location and emotional state, target with powers as if line of sight",
        "Curse": "bond goes both ways; last to drink keeps the bond indefinitely (Mesen-Nebu may cut all bonds)",
        "Book": "MTC 225"
    },
    {
        "Name": "Acherusian Wine",
        "Rating": "••••",
        "Cost": "-- (● any)",
        "Power": "regain up to 4 points in a single Pillar; loses magic when all are drained. Spend 1 Pillar to gain 4 Skill dots for the Scene",
        "Curse": "Any who drink it carry the magic in their blood, and may be sacrificed to make a new draught; drinkers count as the relic for Kepher and draining",
        "Book": "MTC 226"
    },
    {
        "Name": "The Eye of Wepauwet",
        "Rating": "•••••",
        "Cost": "●(+●) any",
        "Power": "Gain 10 dots in the Retainer Merit, to improve existing Retainers or enslave people with. Presence + Socialize + Sekhem - Resolve + Tolerance to force target to be your Retainer for the scene, assigning any number gained dots to them. Double cost for them to act without regard to safety or morality",
        "Curse": "Unless given violent orders, the Retainers gain Irrationality except resort to violence when triggered (Mesen-Nebu's Retainers won't target them)",
        "Book": "MTC 227"
    }
]

const textData = [
    {
        "Name": "The Guruwari Record",
        "Rating": "•",
        "Cost": "○",
        "Power": "Wits + OCcult. Perceive beings in Twilight at one location for the scene",
        "Curse": "all Twilight beings within 100 yards notice the spot (20 yards when used by Sesha-Hebsu)",
        "Book": "MTC 228"
    },
    {
        "Name": "The Scroll of the Forgotten",
        "Rating": "••",
        "Cost": "--",
        "Power": "Wits + Stealth (Sesha-Hebsu get +2) to be forgotten by people after interacting",
        "Curse": "whenever user spends Willpower, suffer severe Fugue for one scene (Sesha-Hebsu are immune)",
        "Book": "MTC 228"
    },
    {
        "Name": "The Liao Sutra",
        "Rating": "•••",
        "Cost": "○○",
        "Power": "reader rolls Presence + Expression to gain +3 Presence, Manipulation, and Occult for the scene. All listeners suffer -1 Dexterity, Wits, and Intelligence while its being read.",
        "Curse": "Lose a Skill dot; can't be repurchased until a new user suffers the curse. (Sesha-Hebsu gain dots back next Descent)",
        "Book": "MTC 229"
    },
    {
        "Name": "The Book of Sailing the Sea of Stars",
        "Rating": "••••",
        "Cost": "(○+)",
        "Power": "Read for 1 hour under starlight to teleport anywhere on Earth - will manifest once starlight is visible there. Roll Intelligence + Occult to bring 1 companion per success; may add more by spending Willpower 1-to-1",
        "Curse": "Any who see the book suffer -1 Social toward the owner, and must spend 1 Willpower or will try to take it. Owner must roll Resolve + Composure once per week or suffer -1 Social (Sesha-Hebsu are immune)",
        "Book": "MTC 230"
    },
    {
        "Name": "The Lost Brush of the First Scribe",
        "Rating": "•••••",
        "Cost": "-- (○○ +1L)",
        "Power": "Read and write in any mortal language. Pay cost to write the True Name of a target",
        "Curse": "Those who pay to activate gain 2 permanent Derangements (Sesha-Hebsu only gain 1)",
        "Book": "MTC 230"
    }
]

const uterData = [
    {
        "Name": "The Firewalker's Trumpet",
        "Rating": "•",
        "Cost": "○ (+●)",
        "Power": "Stamina + Survival to downgrade fire damage one step for 1 turn per success; mummies pay extra cost",
        "Curse": "-2 to Skill checks for 24 hours (Su-Menent only suffer -1)",
        "Book": "MTC 232"
    },
    {
        "Name": "The Keening Box of Karl Von Becker",
        "Rating": "••",
        "Cost": "●",
        "Power": "Gain 3 dots in Skills for the scene",
        "Curse": "owner ages at twice normal rate; mummies roll for Descent each Chapter they activate it (Su-Menent are immune)",
        "Book": "MTC 232"
    },
    {
        "Name": "The Lion's Jaw",
        "Rating": "•••",
        "Cost": "--",
        "Power": "After dealing 1L to a target, know their location if within 1 mile, +3 tracking if further. After tracking a marked target for a week or more, attacks with relic deal Agg",
        "Curse": "-1 to all rolls per day unless carrying it (ends after 1 week). -2 to Social while carrying. (Su-Menent are immune)",
        "Book": "MTC 232"
    },
    {
        "Name": "The Pale Brood",
        "Rating": "••••",
        "Cost": "4L",
        "Power": "name a target to visit horros upon them. Effects are up to ST, but usually imposes Derangements or Flaws",
        "Curse": "activation cost (Su-Menent are immune)",
        "Book": "MTC 233"
    },
    {
        "Name": "The Heart of Heb-Hemertet",
        "Rating": "•••••",
        "Cost": "--",
        "Power": "Gain Danger Sense, Holistic Awareness, Meditative Mind, and 8-again to Occult",
        "Curse": "Can't buy new Skill dots or Specialties (Su-Menent cannot learn new Specialties)",
        "Book": "MTC 234"
    }
]

const sebaData = [
    {
        "Name": "Assumptions of Authority",
        "Rating": "•",
        "Cost": "--",
        "Power": "Mortals innately assume the bearer is an authority; most \"fast talking\" actions automatically succeed",
        "Curse": "Once per Story, the power fails at a critical moment; and once per Story it will cause a \"fast talking\" action the bearer didn't intend",
        "Book": "LotD 5"
    },
    {
        "Name": "The Prophet's Kiss",
        "Rating": "•",
        "Cost": "--",
        "Power": "Presence + Occult - Resolve + Tolerance to inflict the seba's Derangement on a target for 1 week per success. Indefinite with True Name",
        "Curse": "bearer always has the Derangement (Akhem-Urtu are immune)",
        "Book": "Dec 109"
    },
    {
        "Name": "Seeker Oft Sought",
        "Rating": "•",
        "Cost": "--",
        "Power": "+3 to all kepher rolls to find seba",
        "Curse": "anyone else seeking seba gain +3 to find the bearer's",
        "Book": "LotD 5"
    },
    {
        "Name": "Soul-Defiling Whisper",
        "Rating": "•",
        "Cost": "--",
        "Power": "the bearer may benefit from the seba's Vice as a second Vice",
        "Curse": "once per Chapter, compels the bearer to act on its Vice with no benefit",
        "Book": "LotD 5"
    },
    {
        "Name": "Subtlety Before Glory",
        "Rating": "•",
        "Cost": "--",
        "Power": "no limit to learned Affinities",
        "Curse": "may only learn [Memory + Ren] Utterance (Akhem-Urtu are not immune)",
        "Book": "LotD 5"
    },
    {
        "Name": "Thief of Words",
        "Rating": "•",
        "Cost": "○/● any",
        "Power": "Manipulation + Occult vs Resolve + Composure to steal one of the target's seba, chosen by Fate",
        "Curse": "the bearer is marked as a thief to other seba-seekers, who may try to steal from him in the same way (Akhem-Urtu are not immune)",
        "Book": "Dec 109"
    },
    {
        "Name": "What Once Was Just",
        "Rating": "•",
        "Cost": "--",
        "Power": "the bearer may benefit from the seba's Temakh Virtue as a second Virtue",
        "Curse": "bearer only gains 1 Willpower for fulfilling their own Virtue",
        "Book": "LotD 5"
    },
    {
        "Name": "All-Tongue's Folly",
        "Rating": "••",
        "Cost": "--",
        "Power": "the bearer can learn any mortal language he's exposed to. All Academics roll have -1 Target Number (except kepher)",
        "Curse": "Once per Scene, a failed Academics roll becomes a Dramatic Failure",
        "Book": "Dec 109"
    },
    {
        "Name": "Annointed of the Unseen Ankh",
        "Rating": "••",
        "Cost": "sacrifices the relic",
        "Power": "when killed, return to life and heal 1/2 Agg; mummies do not lose Sekhem or experience death cycle. As a Keshina, this happens once per Descent",
        "Curse": "lose 1 Morality dot when this happens",
        "Book": "LotD 5"
    },
    {
        "Name": "The Coward's Path",
        "Rating": "••",
        "Cost": "○○",
        "Power": "Once per Chapter, rewrite the last hour with different choices",
        "Curse": "Once per Story, Fate shifts the bearer to another timeline to steal an accomplishment",
        "Book": "Dec 110"
    },
    {
        "Name": "Divinity's Horrid Halo",
        "Rating": "••",
        "Cost": "(○)",
        "Power": "Unease Sekhem is calculated as [Memory - Sekhem/Intimidation -3] and lasts for weeks equal to Sekhem or Intimidation. May spend 1 Willpower to inflict Terror in any circumstance Unease would apply, until sunrise.",
        "Curse": "the power is a curse, as it drives the bearer into isolation (Akhem-Urtu are not immune)",
        "Book": "LotD 6"
    },
    {
        "Name": "Feast of Undreamt Wonders",
        "Rating": "••",
        "Cost": "destroy a great work of art",
        "Power": "Regain 2 Willpower and 1 Ren",
        "Curse": "whenever the bearer makes a great art, 50% chance it will be interrupted or destroyed within a year",
        "Book": "LotD 6"
    },
    {
        "Name": "Inscrutable Fate Provides",
        "Rating": "••",
        "Cost": "--",
        "Power": "buy new Social Merits with even the flimsiest justification",
        "Curse": "either an existing enemy also benefits from its power, or gain a new enemy",
        "Book": "LotD 6"
    },
    {
        "Name": "Untouched and Broken",
        "Rating": "••",
        "Cost": "--",
        "Power": "detect outright lies innately, and gain +3 to resist supernatural powers (unless they user your name)",
        "Curse": "any degeneration check has +1 Target Number",
        "Book": "Dec 109"
    },
    {
        "Name": "The Burning Crown",
        "Rating": "•••",
        "Cost": "--",
        "Power": "Mummies gain +6 dots to Cult; others gain +5 to the Deceived Cultist Merit with faith placed in Fate",
        "Curse": "Once per Story, a dangerous enemy will find you, seeking the seba",
        "Book": "Dec 110"
    },
    {
        "Name": "By Name Undying",
        "Rating": "•••",
        "Cost": "○",
        "Power": "Resurrect a recent human corpse into an undead servant",
        "Curse": "while the zombie exists, lose every other Willpower regained",
        "Book": "LotD 6"
    },
    {
        "Name": "By Providence Made Whole",
        "Rating": "•••",
        "Cost": "--",
        "Power": "Speak the True Name of a target to heal all afflictions. Roll 1 die with a Target Number equal to how many times this is activated to do so.",
        "Curse": "On a failed roll, aggravated their conditions such that they die within minutes",
        "Book": "Dec 110"
    },
    {
        "Name": "Cheating the Soul's Decay",
        "Rating": "•••",
        "Cost": "--",
        "Power": "sins that overlap with the Morality list no longer cause degeneration",
        "Curse": "roll for Morality sins as normal, but a mortal loved one loses the dot instead (Akhem-Urtu are not immune)",
        "Book": "LotD 7"
    },
    {
        "Name": "Fate's Right Hand",
        "Rating": "•••",
        "Cost": "--",
        "Power": "Any action which further's Fate's plan reduces its Target Number by 1, as does any roll to create art",
        "Curse": "Once per Chapter, a non-magic action counter to Fate's plan becomes a Dramatic Failure. The mummy can sense this and may choose to abandon the action, but doing so does not count as the curse applying for the session.",
        "Book": "LotD 7"
    },
    {
        "Name": "Unlidding the Inner Eye",
        "Rating": "•••",
        "Cost": "--",
        "Power": "The bearer may see beings in Twilight, and directly perceive magic (as if using the Godsight Affinity). Reflexively activated; lasts until sunrise and can't end early",
        "Curse": "blind to mundane reality while active",
        "Book": "LotD 7"
    },
    {
        "Name": "Glories Most Terrible",
        "Rating": "••••",
        "Cost": "--",
        "Power": "When a non-mummy binds this seba, immediately regain all Willpower dots spent to bind seba; only needs to spend Willpower points in the future. Once per Story, be given a kepher vision to find an unknown seba. Mummies may sacrifice it to gain +4 Sekhem and restore all Pillars",
        "Curse": "Once per Story, a rival seeking seba is granted a vision of the bearer's relics",
        "Book": "LotD 7"
    },
    {
        "Name": "Life Without Meaning",
        "Rating": "••••",
        "Cost": "--",
        "Power": "the bearer is immediately forgotten by any character after their interaction ends. Only a Sadikh/Fasad is immune to forgetting their own master. Characters may roll Wits + Composure -5 to retain their memories.",
        "Curse": "Lose all Social Merits reflecting relationships to others, except Cults. The power does not extend to Kepher rolls to find this seba even once bound; such rolls gain +5 and reduce the Target Number by 2 (Akhem-Urtu are not immune)",
        "Book": "LotD 7"
    },
    {
        "Name": "Sanctuary of Providence",
        "Rating": "••••",
        "Cost": "○",
        "Power": "Create a hidden Tomb with Geometry 5, Peril 5, Obscure, and Enigmas 5 applied to everyone except the owner.",
        "Curse": "the mummy must spend 1 full night in the tomb each week, or lose 1 Sekhem. (Akhem-Urtu are not immune)",
        "Book": "LotD 8"
    },
    {
        "Name": "Shade Hunter's Leash",
        "Rating": "••••",
        "Cost": "○",
        "Power": "summon a monstrous ghost to hunt a named victim. Only one may be summoned at a time.",
        "Curse": "while the Unshade exists, the bearer cannot spent Willpower to enhance a dice pool",
        "Book": "LotD8"
    },
    {
        "Name": "Blessed Believer's Army",
        "Rating": "•••••",
        "Cost": "--",
        "Power": "All Cult members gained the Deceived Cultist merit at 5 dots",
        "Curse": "Each day, the bearer loses 1 dot from a Social Merit reflecting a relationship to other characters",
        "Book": "LotD 9"
    },
    {
        "Name": "Heart of Re",
        "Rating": "•••••",
        "Cost": "must sacrifice it to activate",
        "Power": "when bound, the bearer must immediately chose to release it with no effect, or sacrifice it to unleash a wave of Sekhem throughout the world, causing all mummies to awaken to a new Descent or restart their current one at Sekhem 10; the Descent schedule and rolls are treated as if their Sekhem is 5 dots lower (minimum of 1)",
        "Curse": "This also affects Shuankhsen and mummies who've achieved Apotheosis",
        "Book": "LotD 9"
    },
    {
        "Name": "One Blessed Life",
        "Rating": "•••••",
        "Cost": "--",
        "Power": "While bound, the bearer becomes mortal - reverting to the prime of life, then aging normally. All seba unbind; Keshina go dormant. When they die, from any cause, the seba is sacrificed to resurrect them with full health, regaining their Template in the same condition as when it was first bound",
        "Curse": "an individual may only ever bind this seba once",
        "Book": "LotD 10"
    },
    {
        "Name": "Uplifted Soul's Grimoire",
        "Rating": "•••••",
        "Cost": "--",
        "Power": "This seba contains 3 Utterances which the bearer may use, and may use Willpower to activate instead of Pillar points. Non-mummies use their Morality equivalent in place of Memory, and are considered to have 1 dot in any Trait they don't possess",
        "Curse": "Once per Story, Fate unleashes one of the Utterance tiers, choosing any targets or effects which can be controlled. This is timed to be either the most inconvenient or cause the most tragedy. For this, the bearer is considered to have Sekhem 10, but it otherwise uses their Traits; they do not have to pay any costs.",
        "Book": "LotD 10"
    }
]

const vestigeData = [
    {
        "Name": "The Drowned Carburetor",
        "Rating": "•",
        "Description": "a car, loved by its owner enough to fracture his marriage; sent to a lake in an effort to earn it back, but dragged the owner with it.",
        "Virtue/Vice": "Justice / Greed",
        "Curse": "--",
        "Book": "MTC 235"
    },
    {
        "Name": "The Tin Crown",
        "Rating": "••",
        "Description": "A Christmas crown, a copy of one cherished by the father, hand made for a son, kept in pride and worry until he returns from war.",
        "Virtue/Vice": "Fortitude / Pride",
        "Curse": "--",
        "Book": "MTC 236"
    },
    {
        "Name": "The Warped Key",
        "Rating": "•••",
        "Description": "A metal key, warped when an abandonned house burnt down, but still able to turn the lock which had trapped the fire's two victims",
        "Virtue/Vice": "Faith / Wrath",
        "Curse": "--",
        "Book": "MTC 236"
    },
    {
        "Name": "The Lonely doll",
        "Rating": "••••",
        "Description": "A children's doll from the 1920s, kept and maintained by a family for 60 years, then donated to a cancer ward",
        "Virtue/Vice": "Hope / Envy",
        "Curse": "--",
        "Book": "MTC 236"
    },
    {
        "Name": "The Head of Akmul-Rei",
        "Rating": "•••••",
        "Description": "The seven-foot statue of a head, carved in Irem, claimed to whisper prophecies",
        "Virtue/Vice": "Faith / Lust",
        "Curse": "--",
        "Book": "MTC 237"
    }
]

export { amuletData, effigyData, RegiumData, textData, uterData, sebaData, vestigeData }