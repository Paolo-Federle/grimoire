const bluntWeaponData = [
    {
        "Type": "Blunt",
        "Name": "Brass Knuckles/ Sap Gloves",
        "Damage": "1B",
        "Size": "1P",
        "Durability": "3",
        "Cost": "•",
        "Description": "Uses Brawl instead of Weaponry",
        "Book": "WoD 170, Arm 36"
    },
    {
        "Type": "Blunt",
        "Name": "Club (Wooden)",
        "Damage": "2B",
        "Size": "2",
        "Durability": "",
        "Cost": "-",
        "Description": "",
        "Book": "WoD 170"
    },
    {
        "Type": "Blunt",
        "Name": "Escrima Sticks",
        "Damage": "-1B/1-B",
        "Size": "2S",
        "Durability": "1/2",
        "Cost": "•",
        "Description": "Damage varies by type",
        "Book": "Arm 30"
    },
    {
        "Type": "Blunt",
        "Name": "Iron Fan",
        "Damage": "0B",
        "Size": "1S",
        "Durability": "3",
        "Cost": "•",
        "Description": "+1 Defense with Weaponry Dodge",
        "Book": "Arm 36"
    },
    {
        "Type": "Blunt",
        "Name": "Mace (Metal)",
        "Damage": "3B",
        "Size": "2L",
        "Durability": "3",
        "Cost": "••",
        "Description": "",
        "Book": "WoD 170, Arm 30"
    },
    {
        "Type": "Blunt",
        "Name": "Maul",
        "Damage": "4B",
        "Size": "3N",
        "Durability": "3",
        "Cost": "••",
        "Description": "Two-Handed",
        "Book": "Arm 30"
    },
    {
        "Type": "Blunt",
        "Name": "Morningstar",
        "Damage": "3L",
        "Size": "3N",
        "Durability": "3",
        "Cost": "••",
        "Description": "",
        "Book": "Arm 30"
    },
    {
        "Type": "Blunt",
        "Name": "Nightstick (TMFA)",
        "Damage": "2B",
        "Size": "2J",
        "Durability": "2",
        "Cost": "•",
        "Description": "+1 defense",
        "Book": "Arm 30"
    },
    {
        "Type": "Blunt",
        "Name": "Nunchaku",
        "Damage": "1B",
        "Size": "1S",
        "Durability": "3",
        "Cost": "•",
        "Description": "-1 without Dex 3",
        "Book": "Arm 31"
    },
    {
        "Type": "Blunt",
        "Name": "Quarterstaff",
        "Damage": "2B",
        "Size": "4N",
        "Durability": "1",
        "Cost": "•",
        "Description": "+1 defense, two-handed",
        "Book": "Arm 32"
    },
    {
        "Type": "Blunt",
        "Name": "Sap",
        "Damage": "1B",
        "Size": "1",
        "Durability": "3",
        "Cost": "•",
        "Description": "Knockout (Wod p168) / Stun (Stamina)",
        "Book": "WoD 170"
    },
    {
        "Type": "Blunt",
        "Name": "Shakuhachi Flute",
        "Damage": "0B",
        "Size": "1S",
        "Durability": "3",
        "Cost": "•",
        "Description": "+1 to some Wits+Expression",
        "Book": "Arm 30"
    },
    {
        "Type": "Blunt",
        "Name": "Sledgehammer",
        "Damage": "2B",
        "Size": "3N",
        "Durability": "2",
        "Cost": "•",
        "Description": "9-Again",
        "Book": "Arm 41"
    },
    {
        "Type": "Blunt",
        "Name": "Telescopic Baton",
        "Damage": "3B",
        "Size": "2J",
        "Durability": "3",
        "Cost": "•",
        "Description": "Collapses to size 1S",
        "Book": "Arm 30"
    },
    {
        "Type": "Blunt",
        "Name": "War Hammer",
        "Damage": "5B/4L",
        "Size": "4N",
        "Durability": "3",
        "Cost": "••",
        "Description": "Armor Piercing 1 (Lethal only), -3 if used to attack in next turn",
        "Book": "Arm 33"
    },
    {
        "Type": "Blunt",
        "Name": "Wooden Club",
        "Damage": "2B",
        "Size": "2J",
        "Durability": "1",
        "Cost": "-",
        "Description": "",
        "Book": "Arm 30"
    }
]

const kniveWeaponData = [
    {
        "Type": "Knives",
        "Name": "Bowie Knife",
        "Damage": "2L",
        "Size": "1J",
        "Durability": "4",
        "Cost": "•",
        "Description": "+1 to some Crafts rolls",
        "Book": "Arm 24"
    },
    {
        "Type": "Knives",
        "Name": "Combat Knife",
        "Damage": "1L",
        "Size": "1J",
        "Durability": "3",
        "Cost": "•",
        "Description": "",
        "Book": "Arm 24"
    },
    {
        "Type": "Knives",
        "Name": "Qatar Punch Dagger",
        "Damage": "2L",
        "Size": "1J",
        "Durability": "3",
        "Cost": "••",
        "Description": "Uses Brawl instead of Weaponry",
        "Book": "Arm 24"
    },
    {
        "Type": "Knives",
        "Name": "Keris",
        "Damage": "2L",
        "Size": "2K",
        "Durability": "3",
        "Cost": "••",
        "Description": "Without specialty, does 1L instead",
        "Book": "Arm 24"
    },
    {
        "Type": "Knives",
        "Name": "Khukri",
        "Damage": "2L",
        "Size": "2J",
        "Durability": "3",
        "Cost": "••",
        "Description": "9-Again on targeted attacks",
        "Book": "Arm 24"
    },
    {
        "Type": "Knives",
        "Name": "Kitchen Knife",
        "Damage": "1L",
        "Size": "L",
        "Durability": "1",
        "Cost": "•",
        "Description": "Improvised Weapon; Max damage 2",
        "Book": "HtV 249"
    },
    {
        "Type": "Knives",
        "Name": "Knife",
        "Damage": "1L",
        "Size": "1",
        "Durability": "",
        "Cost": "•",
        "Description": "",
        "Book": "WoD 170"
    },
    {
        "Type": "Knives",
        "Name": "Main Gauche",
        "Damage": "1L",
        "Size": "1S",
        "Durability": "3",
        "Cost": "•",
        "Description": "Defense +1 if used with another weapon",
        "Book": "Arm 24"
    },
    {
        "Type": "Knives",
        "Name": "Pocket Knife",
        "Damage": "-1L",
        "Size": "1P",
        "Durability": "2",
        "Cost": "•",
        "Description": "Fragile 3, +1 to some Crafts rolls",
        "Book": "Arm 24"
    },
    {
        "Type": "Knives",
        "Name": "Rondel Dagger",
        "Damage": "1L",
        "Size": "1S",
        "Durability": "3",
        "Cost": "••",
        "Description": "Armor Piercing 1, +2 on surprise attacks",
        "Book": "Arm 24"
    },
    {
        "Type": "Knives",
        "Name": "Switchblade",
        "Damage": "0L",
        "Size": "1P",
        "Durability": "3",
        "Cost": "•",
        "Description": "",
        "Book": "Arm 24"
    }
]

const swordWeaponData = [
    {
        "Type": "Swords",
        "Name": "Bastard Sword",
        "Damage": "3/4L",
        "Size": "3N",
        "Durability": "3",
        "Cost": "••",
        "Description": "One/Two Handed, Strength 4/3",
        "Book": "Arm 27"
    },
    {
        "Type": "Swords",
        "Name": "Curved Sword",
        "Damage": "3L",
        "Size": "3N",
        "Durability": "3",
        "Cost": "••",
        "Description": "+1 when in a position of height",
        "Book": "Arm 27"
    },
    {
        "Type": "Swords",
        "Name": "Fencing Sword",
        "Damage": "1L",
        "Size": "2L",
        "Durability": "3",
        "Cost": "•",
        "Description": "Armor Piercing 1",
        "Book": "Arm 27"
    },
    {
        "Type": "Swords",
        "Name": "Fish-Spine Sword",
        "Damage": "1L",
        "Size": "2L",
        "Durability": "1",
        "Cost": "-",
        "Description": "9-Again",
        "Book": "Arm 27"
    },
    {
        "Type": "Swords",
        "Name": "Gladius",
        "Damage": "2L",
        "Size": "2S",
        "Durability": "3",
        "Cost": "••",
        "Description": "",
        "Book": "Arm 27"
    },
    {
        "Type": "Swords",
        "Name": "Greatsword",
        "Damage": "4L",
        "Size": "3N",
        "Durability": "3",
        "Cost": "•••",
        "Description": "Two-Handed",
        "Book": "Arm 27"
    },
    {
        "Type": "Swords",
        "Name": "Halberd",
        "Damage": "4L",
        "Size": "4N",
        "Durability": "3",
        "Cost": "•••",
        "Description": "+1 defense, min Strength 3, two-handed",
        "Book": "Arm 32"
    },
    {
        "Type": "Swords",
        "Name": "Katana",
        "Damage": "3L",
        "Size": "2L",
        "Durability": "4",
        "Cost": "•••",
        "Description": "Increased Durability",
        "Book": "Arm 27"
    },
    {
        "Type": "Swords",
        "Name": "Longsword",
        "Damage": "3L",
        "Size": "2L",
        "Durability": "3",
        "Cost": "••",
        "Description": "",
        "Book": "Arm 27"
    },
    {
        "Type": "Swords",
        "Name": "Machete",
        "Damage": "2L",
        "Size": "2J",
        "Durability": "3",
        "Cost": "•",
        "Description": "",
        "Book": "Arm 27"
    },
    {
        "Type": "Swords",
        "Name": "Rapier",
        "Damage": "2L",
        "Size": "2L",
        "Durability": "3",
        "Cost": "••",
        "Description": "Armor Piercing 1",
        "Book": "Arm 27"
    },
    {
        "Type": "Swords",
        "Name": "Sword",
        "Damage": "3L",
        "Size": "2",
        "Durability": "",
        "Cost": "••",
        "Description": "",
        "Book": "Arm 27"
    },
    {
        "Type": "Swords",
        "Name": "Swordcane",
        "Damage": "2B/L",
        "Size": "2L",
        "Durability": "3",
        "Cost": "••",
        "Description": "While sheathed does bashing",
        "Book": "Arm 27"
    },
    {
        "Type": "Swords",
        "Name": "Wakizashi",
        "Damage": "2L",
        "Size": "2S",
        "Durability": "4",
        "Cost": "•••",
        "Description": "",
        "Book": "Arm 27"
    },
    {
        "Type": "Swords",
        "Name": "Zweihander",
        "Damage": "4L",
        "Size": "4N",
        "Durability": "3",
        "Cost": "•••",
        "Description": "9-Again",
        "Book": "Arm 27"
    }
]

const axeWeaponData = [
    {
        "Type": "Axes",
        "Name": "Axe (Small)",
        "Damage": "2L",
        "Size": "1",
        "Durability": "",
        "Cost": "•",
        "Description": "",
        "Book": "Arm 27"
    },
    {
        "Type": "Axes",
        "Name": "Axe (Large)",
        "Damage": "3L",
        "Size": "3",
        "Durability": "",
        "Cost": "••",
        "Description": "Two-Handed, 9-Again",
        "Book": "Arm 27"
    },
    {
        "Type": "Axes",
        "Name": "Battle-Axe",
        "Damage": "3L",
        "Size": "3N",
        "Durability": "3",
        "Cost": "••",
        "Description": "",
        "Book": "Arm 33"
    },
    {
        "Type": "Axes",
        "Name": "Crash Axe",
        "Damage": "2L",
        "Size": "2L",
        "Durability": "4",
        "Cost": "•",
        "Description": "",
        "Book": "Arm 33"
    },
    {
        "Type": "Axes",
        "Name": "Fire-Axe",
        "Damage": "3L",
        "Size": "3N",
        "Durability": "2",
        "Cost": "•",
        "Description": "Two-Handed",
        "Book": "Arm 33"
    },
    {
        "Type": "Axes",
        "Name": "Greataxe",
        "Damage": "5L",
        "Size": "4",
        "Durability": "",
        "Cost": "•••",
        "Description": "Two-Handed, 9-Again",
        "Book": "Arm 27"
    },
    {
        "Type": "Axes",
        "Name": "Hatchet",
        "Damage": "1L",
        "Size": "1S",
        "Durability": "2",
        "Cost": "•",
        "Description": "",
        "Book": "Arm 33"
    },
    {
        "Type": "Axes",
        "Name": "Ice Axe",
        "Damage": "2L",
        "Size": "2J",
        "Durability": "1",
        "Cost": "•",
        "Description": "Armor Piercing 1",
        "Book": "Arm 33"
    },
    {
        "Type": "Axes",
        "Name": "War Axe",
        "Damage": "5L",
        "Size": "4N",
        "Durability": "3",
        "Cost": "•••",
        "Description": "",
        "Book": "Arm 33"
    }
]

const polearmWeaponData = [
    {
        "Type": "Polearms",
        "Name": "Bayonet",
        "Damage": "2L",
        "Size": "1S",
        "Durability": "3",
        "Cost": "•",
        "Description": "Does only 1L if unmounted",
        "Book": "Arm 24"
    },
    {
        "Type": "Polearms",
        "Name": "Naginata",
        "Damage": "3L",
        "Size": "4N",
        "Durability": "2",
        "Cost": "•••",
        "Description": "+1 defense, two-handed",
        "Book": "Arm 32"
    },
    {
        "Type": "Polearms",
        "Name": "Scythe",
        "Damage": "2L",
        "Size": "4N",
        "Durability": "2",
        "Cost": "•",
        "Description": "+1 defense",
        "Book": "Arm 41"
    },
    {
        "Type": "Polearms",
        "Name": "Spear",
        "Damage": "3L",
        "Size": "4N",
        "Durability": "2",
        "Cost": "•",
        "Description": "Two-Handed, Defense +1 against unarmed foes",
        "Book": "Arm 32"
    },
    {
        "Type": "Polearms",
        "Name": "Trident",
        "Damage": "4L",
        "Size": "4N",
        "Durability": "3",
        "Cost": "••",
        "Description": "+1 defense, two-handed",
        "Book": "Arm 32"
    }
]

const chainWeaponData = [
    {
        "Type": "Chain",
        "Name": "Chain (Basic)",
        "Damage": "1B",
        "Size": "1S",
        "Durability": "3",
        "Cost": "-",
        "Description": "Sometimes improvised",
        "Book": "Arm 31"
    },
    {
        "Type": "Chain",
        "Name": "Flail",
        "Damage": "3B/L",
        "Size": "3N",
        "Durability": "3",
        "Cost": "••",
        "Description": "Lethal if spiked, -1 without Dex 3, ignore shields",
        "Book": "Arm 30"
    },
    {
        "Type": "Chain",
        "Name": "Kusari Gama",
        "Damage": "2B/L",
        "Size": "2N",
        "Durability": "3",
        "Cost": "••",
        "Description": "-2 without Fighting Style: Chain Weapons",
        "Book": "Arm 31"
    },
    {
        "Type": "Chain",
        "Name": "Kyoketso Shogi",
        "Damage": "1B/L",
        "Size": "3N",
        "Durability": "2",
        "Cost": "••",
        "Description": "-2 without Fighting Style: Chain Weapons",
        "Book": "Arm 31"
    },
    {
        "Type": "Chain",
        "Name": "Manriki Gusari",
        "Damage": "2B",
        "Size": "2L",
        "Durability": "3",
        "Cost": "•",
        "Description": "-2 without Fighting Style: Chain Weapons",
        "Book": "Arm 31"
    },
    {
        "Type": "Chain",
        "Name": "Poi",
        "Damage": "0B",
        "Size": "1S",
        "Durability": "3",
        "Cost": "-",
        "Description": "+1 defense, trip attack, two-handed",
        "Book": "Arm 31"
    }
]

const improvisedWeaponData = [
    {
        "Type": "Improvised melee",
        "Name": "Chainsaw",
        "Damage": "-2L",
        "Size": "3N",
        "Durability": "3",
        "Cost": "•",
        "Description": "8-Again, +1 Defense",
        "Book": "Arm 39, Slash 156"
    },
    {
        "Type": "Improvised melee",
        "Name": "Chainsaw (High End)",
        "Damage": "-1L",
        "Size": "4",
        "Durability": "",
        "Cost": "••••",
        "Description": "8-Again, +1 Defense",
        "Book": "Arm 39"
    },
    {
        "Type": "Improvised melee",
        "Name": "Keys",
        "Damage": "-1L/1B",
        "Size": "0",
        "Durability": "1",
        "Cost": "•",
        "Description": "",
        "Book": "Slash 156"
    },
    {
        "Type": "Improvised melee",
        "Name": "Stake",
        "Damage": "1L",
        "Size": "1S",
        "Durability": "1",
        "Cost": "-",
        "Description": "",
        "Book": "Arm 27, Errata"
    },
    {
        "Type": "Improvised melee",
        "Name": "Straight Razor",
        "Damage": "0L",
        "Size": "0",
        "Durability": "1",
        "Cost": "•",
        "Description": "With a killing blow, victim gains one Lethal per minute. If victim at full Lethal, 2 Agg per minute",
        "Book": "Slash 157"
    }
]

const miscellaneousWeaponData = [
    {
        "Type": "Miscellaneous melee",
        "Name": "Bagh-Nakh",
        "Damage": "1L",
        "Size": "1P",
        "Durability": "3",
        "Cost": "•",
        "Description": "Uses Brawl instead of Weaponry",
        "Book": "Arm 36"
    },
    {
        "Type": "Miscellaneous melee",
        "Name": "Broken Bottle",
        "Damage": "",
        "Size": "",
        "Durability": "",
        "Cost": "",
        "Description": "",
        "Book": "HtV 249"
    },
    {
        "Type": "Miscellaneous melee",
        "Name": "Catch Pole",
        "Damage": "0B",
        "Size": "3N",
        "Durability": "2",
        "Cost": "•",
        "Description": "Can be used to Grapple opponents with Weaponry instead of Brawl",
        "Book": "Arm 36"
    },
    {
        "Type": "Miscellaneous melee",
        "Name": "Fakir's Horns",
        "Damage": "-1L",
        "Size": "3N",
        "Durability": "3",
        "Cost": "•",
        "Description": "+1 Defense, +2 Defense with Weaponry Dodge",
        "Book": "Arm 36"
    },
    {
        "Type": "Miscellaneous melee",
        "Name": "Nail Gun",
        "Damage": "0L",
        "Size": "2J",
        "Durability": "3",
        "Cost": "•",
        "Description": "Strength+Firearms, if successful 1 automatic Lethal",
        "Book": "Arm 40"
    },
    {
        "Type": "Miscellaneous melee",
        "Name": "Strangle Wire",
        "Damage": "2L",
        "Size": "1P",
        "Durability": "2",
        "Cost": "",
        "Description": "Grapple, then apply wire (Strength+Weaponry-3, no Defense)",
        "Book": "Arm 36, Reload 58"
    },
    {
        "Type": "Miscellaneous melee",
        "Name": "Stun Gun",
        "Damage": "0",
        "Size": "1P",
        "Durability": "3",
        "Cost": "•",
        "Description": "Dexterity+Weaponry, successes on attack count as penalties against next roll, target goes unconscious if cumulative penalty exceeds size",
        "Book": "Arm 36"
    },
    {
        "Type": "Miscellaneous melee",
        "Name": "Whip",
        "Damage": "1B/0L",
        "Size": "2J",
        "Durability": "1",
        "Cost": "•",
        "Description": "Dex+Weapon, -3 To disarm opponent",
        "Book": "Arm 36"
    }
]

const foundRiggedWeaponsData = [
    {
        "Type": "Found and Rigged",
        "Name": "Board With a Nail in It",
        "Damage": "1(B and L)",
        "Size": "2/L",
        "Durability": "1",
        "Cost": "n/a",
        "Description": "Half damage is lethal (round down, minimum 1)",
        "Book": "Arm 43"
    },
    {
        "Type": "Found and Rigged",
        "Name": "Bottle",
        "Damage": "0(B/L)",
        "Size": "1/P",
        "Durability": "1",
        "Cost": "n/a",
        "Description": "Fragile 2",
        "Book": "Arm 43"
    },
    {
        "Type": "Found and Rigged",
        "Name": "Homemade Sap",
        "Damage": "0(B)",
        "Size": "variable",
        "Durability": "1",
        "Cost": "n/a",
        "Description": "Stun (Stamina), fragile 2",
        "Book": "Arm 43"
    },
    {
        "Type": "Found and Rigged",
        "Name": "Power Cord",
        "Damage": "1(B)",
        "Size": "1/P",
        "Durability": "1",
        "Cost": "n/a",
        "Description": "",
        "Book": "Arm 43"
    },
    {
        "Type": "Found and Rigged",
        "Name": "Razor Blade",
        "Damage": "-2(L)",
        "Size": "1/P",
        "Durability": "2",
        "Cost": "n/a",
        "Description": "Damage 0(L) in a grapple, drop on a failure",
        "Book": "Arm 43"
    },
    {
        "Type": "Found and Rigged",
        "Name": "Rock",
        "Damage": "0(B)",
        "Size": "1/P",
        "Durability": "2",
        "Cost": "n/a",
        "Description": "Drop on a failure",
        "Book": "Arm 43"
    },
    {
        "Type": "Found and Rigged",
        "Name": "Shard of Glass",
        "Damage": "-1(L)",
        "Size": "1/J",
        "Durability": "1",
        "Cost": "n/a",
        "Description": "Inflicts 1 lethal on user, fragile 2",
        "Book": "Arm 43"
    },
    {
        "Type": "Found and Rigged",
        "Name": "Shiv",
        "Damage": "0(L)",
        "Size": "1/P",
        "Durability": "1",
        "Cost": "n/a",
        "Description": "",
        "Book": "Arm 43"
    },
    {
        "Type": "Found and Rigged",
        "Name": "Straightened Wire Hanger",
        "Damage": "-1(B)",
        "Size": "2/J",
        "Durability": "1",
        "Cost": "n/a",
        "Description": "1 lethal damage on exceptional success, painful",
        "Book": "Arm 43"
    }
]

const revolverWeaponData = [
    {
        "Type": "Revolvers",
        "Name": "Revolver, Light",
        "Damage": "2L",
        "Ranges": "20/40/80",
        "Clip": "6",
        "Strength": "2",
        "Size": "1",
        "Cost": "••",
        "Description": "",
        "Book": "WoD 170"
    },
    {
        "Type": "Revolvers",
        "Name": "Revolver, Heavy",
        "Damage": "3L",
        "Ranges": "35/70/140",
        "Clip": "6",
        "Strength": "3",
        "Size": "1",
        "Cost": "••",
        "Description": "",
        "Book": "WoD 170"
    },
    {
        "Type": "Revolvers",
        "Name": ".22LR",
        "Damage": "1L",
        "Ranges": "5/10/20",
        "Clip": "6",
        "Strength": "0",
        "Size": "1P",
        "Cost": "•",
        "Description": "",
        "Book": "Arm 62"
    },
    {
        "Type": "Revolvers",
        "Name": ".38 Special",
        "Damage": "2L",
        "Ranges": "20/40/80",
        "Clip": "6",
        "Strength": "1",
        "Size": "1S",
        "Cost": "••",
        "Description": "",
        "Book": "Arm 62"
    },
    {
        "Type": "Revolvers",
        "Name": ".357 Magnum",
        "Damage": "3L",
        "Ranges": "30/60/120",
        "Clip": "6",
        "Strength": "2",
        "Size": "1S",
        "Cost": "••",
        "Description": "",
        "Book": "Arm 62"
    },
    {
        "Type": "Revolvers",
        "Name": ".44 Magnum",
        "Damage": "3L",
        "Ranges": "35/70/140",
        "Clip": "6",
        "Strength": "3",
        "Size": "2J",
        "Cost": "•••",
        "Description": "9-Again",
        "Book": "Arm 62"
    }
]

const autoloadersWeaponData = [
    {
        "Type": "Autoloaders",
        "Name": "Pistol, Light",
        "Damage": "2L",
        "Ranges": "20/40/80",
        "Clip": "17+1",
        "Strength": "2",
        "Size": "1",
        "Cost": "•••",
        "Description": "",
        "Book": "WoD 170"
    },
    {
        "Type": "Autoloaders",
        "Name": "Pistol, Heavy",
        "Damage": "3L",
        "Ranges": "30/60/120",
        "Clip": "7+1",
        "Strength": "3",
        "Size": "1",
        "Cost": "•••",
        "Description": "",
        "Book": "WoD 170"
    },
    {
        "Type": "Autoloaders",
        "Name": "Glock 22",
        "Damage": "2L",
        "Ranges": "20/40/80",
        "Clip": "10+1",
        "Strength": "2",
        "Size": "1",
        "Cost": "••",
        "Description": "",
        "Book": "HtV 247"
    },
    {
        "Type": "Autoloaders",
        "Name": "Glock 26",
        "Damage": "2L",
        "Ranges": "10/20/40",
        "Clip": "10+1",
        "Strength": "2",
        "Size": "1",
        "Cost": "••",
        "Description": "",
        "Book": "HtV 247"
    },
    {
        "Type": "Autoloaders",
        "Name": "Holdout",
        "Damage": "1L",
        "Ranges": "5/10/20",
        "Clip": "6+1",
        "Strength": "1",
        "Size": "1P",
        "Cost": "•",
        "Description": "",
        "Book": "Arm 67"
    },
    {
        "Type": "Autoloaders",
        "Name": "9mm Luger",
        "Damage": "2L",
        "Ranges": "20/40/80",
        "Clip": "15+1",
        "Strength": "2",
        "Size": "1S",
        "Cost": "••",
        "Description": "",
        "Book": "Arm 67"
    },
    {
        "Type": "Autoloaders",
        "Name": ".40 S&W",
        "Damage": "2L",
        "Ranges": "25/50/100",
        "Clip": "12+1",
        "Strength": "2",
        "Size": "1S",
        "Cost": "••",
        "Description": "9-Again",
        "Book": "Arm 67"
    },
    {
        "Type": "Autoloaders",
        "Name": ".45 ACP",
        "Damage": "3L",
        "Ranges": "30/60/120",
        "Clip": "8+1",
        "Strength": "2",
        "Size": "1S",
        "Cost": "••",
        "Description": "",
        "Book": "Arm 67"
    },
    {
        "Type": "Autoloaders",
        "Name": "Desert Eagle",
        "Damage": "4L",
        "Ranges": "50/100/200",
        "Clip": "7+1",
        "Strength": "3",
        "Size": "1L",
        "Cost": "••••",
        "Description": "",
        "Book": "HtV 247"
    }
]

const rifleData = [
    {
        "Type": "Rifles",
        "Name": "Rifle",
        "Damage": "5L",
        "Ranges": "200/400/800",
        "Clip": "5+1",
        "Strength": "2",
        "Size": "3",
        "Cost": "••",
        "Description": "Two-Handed",
        "Book": "WoD 170"
    },
    {
        "Type": "Rifles",
        "Name": "Plinking Rifle",
        "Damage": "1L",
        "Ranges": "30/60/120",
        "Clip": "5+1",
        "Strength": "1",
        "Size": "2N",
        "Cost": "•",
        "Description": "",
        "Book": "Arm 74"
    },
    {
        "Type": "Rifles",
        "Name": "Target Rifle",
        "Damage": "4L",
        "Ranges": "150/300/600",
        "Clip": "5+1",
        "Strength": "2",
        "Size": "3",
        "Cost": "••",
        "Description": "",
        "Book": "Arm 74"
    },
    {
        "Type": "Rifles",
        "Name": "Hunting Rifle",
        "Damage": "4L",
        "Ranges": "200/400/800",
        "Clip": "4+1",
        "Strength": "2",
        "Size": "3",
        "Cost": "•••",
        "Description": "9-Again",
        "Book": "Arm 74"
    },
    {
        "Type": "Rifles",
        "Name": "Sniper Rifle",
        "Damage": "4L",
        "Ranges": "250/500/1000",
        "Clip": "10+1",
        "Strength": "2",
        "Size": "3",
        "Cost": "••••",
        "Description": "9-Again",
        "Book": "Arm 74"
    },
    {
        "Type": "Rifles",
        "Name": "Big-Game Rifle",
        "Damage": "5L",
        "Ranges": "250/500/1000",
        "Clip": "3+1",
        "Strength": "3",
        "Size": "3",
        "Cost": "••••",
        "Description": "STR Req is 5 if not properly braced and causes recoil",
        "Book": "Arm 74"
    },
    {
        "Type": "Rifles",
        "Name": "Anti-Material Rifle",
        "Damage": "5L",
        "Ranges": "300/600/1200",
        "Clip": "5+1",
        "Strength": "3",
        "Size": "4",
        "Cost": "•••••",
        "Description": "Causes recoil if not properly braced, 8-Again, Armor Piercing 6",
        "Book": "Arm 74"
    },
    {
        "Type": "Rifles",
        "Name": "Weatherby Mk. 5",
        "Damage": "5L",
        "Ranges": "250/500/1000",
        "Clip": "2+1",
        "Strength": "3",
        "Size": "3",
        "Cost": "••••",
        "Description": "",
        "Book": "HtV 247"
    },
    {
        "Type": "Rifles",
        "Name": "M1 Garand",
        "Damage": "4L",
        "Ranges": "225/450/900",
        "Clip": "8+1",
        "Strength": "3",
        "Size": "3",
        "Cost": "•••",
        "Description": "9-Again",
        "Book": "HtV 247"
    },
    {
        "Type": "Rifles",
        "Name": "KAC SR-25",
        "Damage": "4",
        "Ranges": "125/250/500",
        "Clip": "20+1",
        "Strength": "2",
        "Size": "3",
        "Cost": "••••",
        "Description": "9-Again",
        "Book": "HtV 247"
    }
]

const submachineGunData = [
    {
        "Type": "Submachine Guns",
        "Name": "SMG, Small",
        "Damage": "2L",
        "Ranges": "25/50/100",
        "Clip": "30+1",
        "Strength": "2",
        "Size": "1",
        "Cost": "•••",
        "Description": "Autofire",
        "Book": "WoD 170"
    },
    {
        "Type": "Submachine Guns",
        "Name": "SMG, Large",
        "Damage": "3L",
        "Ranges": "50/100/200",
        "Clip": "30+1",
        "Strength": "3",
        "Size": "2",
        "Cost": "•••",
        "Description": "Two-Handed, Autofire",
        "Book": "WoD 170"
    },
    {
        "Type": "Submachine Guns",
        "Name": "9mm Luger",
        "Damage": "2L",
        "Ranges": "30/60/120",
        "Clip": "32+1",
        "Strength": "2 (2/3/4)",
        "Size": "2L",
        "Cost": "•••",
        "Description": "",
        "Book": "Arm 70"
    },
    {
        "Type": "Submachine Guns",
        "Name": "9mm Luger (Machine Pistol)",
        "Damage": "2L",
        "Ranges": "20/40/80",
        "Clip": "20+1",
        "Strength": "2 (3/4/5)",
        "Size": "1J",
        "Cost": "•••",
        "Description": "",
        "Book": "Arm 70"
    },
    {
        "Type": "Submachine Guns",
        "Name": ".45 ACP",
        "Damage": "3L",
        "Ranges": "30/60/120",
        "Clip": "30+1",
        "Strength": "2 (2/3/4)",
        "Size": "2N",
        "Cost": "•••",
        "Description": "",
        "Book": "Arm 70"
    }
]

const assaultRifleData = [
    {
        "Type": "Assault Rifles",
        "Name": "Assault Rifle",
        "Damage": "4L",
        "Ranges": "150/300/600",
        "Clip": "42+1",
        "Strength": "3",
        "Size": "3",
        "Cost": "•••",
        "Description": "Two-Handed, Autofire",
        "Book": "WoD 170"
    },
    {
        "Type": "Assault Rifles",
        "Name": "5.56mm AR",
        "Damage": "4L",
        "Ranges": "150/300/600",
        "Clip": "30+1",
        "Strength": "2 (2/3/4)",
        "Size": "3",
        "Cost": "•••",
        "Description": "",
        "Book": "Arm 75"
    },
    {
        "Type": "Assault Rifles",
        "Name": "5.56mm Bullpup AR",
        "Damage": "4L",
        "Ranges": "150/300/600",
        "Clip": "30+1",
        "Strength": "2 (2/3/4)",
        "Size": "2L",
        "Cost": "••••",
        "Description": "",
        "Book": "Arm 75"
    },
    {
        "Type": "Assault Rifles",
        "Name": "7.62mm AR",
        "Damage": "4L",
        "Ranges": "200/400/800",
        "Clip": "20+1",
        "Strength": "3 (3/4/5)",
        "Size": "3",
        "Cost": "•••",
        "Description": "9-Again",
        "Book": "Arm 75"
    }
]

const shotgunsData = [
    {
        "Type": "Shotgun",
        "Name": "Shotgun",
        "Damage": "4L",
        "Ranges": "20/40/80",
        "Clip": "5+1",
        "Strength": "3",
        "Size": "2",
        "Cost": "••",
        "Description": "Two-Handed, 9-again",
        "Book": "WoD 170"
    },
    {
        "Type": "Shotgun",
        "Name": "Break-Action",
        "Damage": "4L",
        "Ranges": "20/40/80",
        "Clip": "2",
        "Strength": "3",
        "Size": "3",
        "Cost": "•",
        "Description": "9-Again",
        "Book": "Arm 78"
    },
    {
        "Type": "Shotgun",
        "Name": "Lever-Action",
        "Damage": "4L",
        "Ranges": "20/40/80",
        "Clip": "2+1",
        "Strength": "3",
        "Size": "3",
        "Cost": "••",
        "Description": "9-again",
        "Book": "Arm 78"
    },
    {
        "Type": "Shotgun",
        "Name": "Pump-Action",
        "Damage": "4L",
        "Ranges": "20/40/80",
        "Clip": "8+1",
        "Strength": "3",
        "Size": "3",
        "Cost": "••",
        "Description": "9-Again",
        "Book": "Arm 78"
    },
    {
        "Type": "Shotgun",
        "Name": "Semi-Automatic",
        "Damage": "4L",
        "Ranges": "20/40/80",
        "Clip": "5+1",
        "Strength": "3",
        "Size": "3",
        "Cost": "•••",
        "Description": "9-Again",
        "Book": "Arm 78"
    },
    {
        "Type": "Shotgun",
        "Name": "Sawed-Off",
        "Damage": "4L",
        "Ranges": "15/30/65",
        "Clip": "5+1",
        "Strength": "3",
        "Size": "2",
        "Cost": "••",
        "Description": "9-Again",
        "Book": "HtV 247"
    }
]

const machineGunData = [
    {
        "Type": "Machine Guns",
        "Name": "SAW",
        "Damage": "4L",
        "Ranges": "175/350/700",
        "Clip": "200",
        "Strength": "(3/4/5)",
        "Size": "3",
        "Cost": "•••••",
        "Description": "",
        "Book": "Arm 79"
    },
    {
        "Type": "Machine Guns",
        "Name": "GPMG",
        "Damage": "4L",
        "Ranges": "250/500/1000",
        "Clip": "100",
        "Strength": "(4/4/5)",
        "Size": "4",
        "Cost": "•••••",
        "Description": "9-again",
        "Book": "Arm 79"
    },
    {
        "Type": "Machine Guns",
        "Name": "HMG",
        "Damage": "5L",
        "Ranges": "300/600/1200",
        "Clip": "50",
        "Strength": "(3/3/4)",
        "Size": "5",
        "Cost": "•••••",
        "Description": "8-again",
        "Book": "Arm 79"
    }
]

const archaicFirearmData = [
    {
        "Type": "Archaic Firearms",
        "Name": "Hand Cannon",
        "Damage": "-2 (8 again)",
        "Ranges": "40/80/160",
        "Clip": "1",
        "Strength": "4",
        "Size": "5",
        "Cost": "••••",
        "Weapon Type": "Hand Cannon",
        "Book": "Arm 81"
    },
    {
        "Type": "Archaic Firearms",
        "Name": "Pistol",
        "Damage": "-1 (8 again)",
        "Ranges": "10/20/40",
        "Clip": "1",
        "Strength": "2",
        "Size": "2/L",
        "Cost": "•••",
        "Weapon Type": "Matchlocks",
        "Book": "Arm 81"
    },
    {
        "Type": "Archaic Firearms",
        "Name": "Musket",
        "Damage": "0 (8 again)",
        "Ranges": "40/80/160",
        "Clip": "1",
        "Strength": "3",
        "Size": "4",
        "Cost": "••••",
        "Weapon Type": "Matchlocks",
        "Book": "Arm 81"
    },
    {
        "Type": "Archaic Firearms",
        "Name": "Pistol, single",
        "Damage": "1",
        "Ranges": "15/30/60",
        "Clip": "1",
        "Strength": "2",
        "Size": "2/j",
        "Cost": "•••",
        "Weapon Type": "Flintlocks",
        "Book": "Arm 81"
    },
    {
        "Type": "Archaic Firearms",
        "Name": "Pistol, double",
        "Damage": "1",
        "Ranges": "15/30/60",
        "Clip": "2",
        "Strength": "2",
        "Size": "2/L",
        "Cost": "•••",
        "Weapon Type": "Flintlocks",
        "Book": "Arm 81"
    },
    {
        "Type": "Archaic Firearms",
        "Name": "Pistol, pepperbox",
        "Damage": "0 (8 again)",
        "Ranges": "10/20/40",
        "Clip": "9",
        "Strength": "2",
        "Size": "2/N",
        "Cost": "••••",
        "Weapon Type": "Flintlocks",
        "Book": "Arm 81"
    },
    {
        "Type": "Archaic Firearms",
        "Name": "Musket",
        "Damage": "2 (8 again)",
        "Ranges": "30/60/120",
        "Clip": "1",
        "Strength": "3",
        "Size": "4",
        "Cost": "••",
        "Weapon Type": "Flintlocks",
        "Book": "Arm 81"
    },
    {
        "Type": "Archaic Firearms",
        "Name": "Musket, double",
        "Damage": "2 (8 again)",
        "Ranges": "30/60/120",
        "Clip": "2",
        "Strength": "3",
        "Size": "4",
        "Cost": "•••",
        "Weapon Type": "Flintlocks",
        "Book": "Arm 81"
    },
    {
        "Type": "Archaic Firearms",
        "Name": "Rifle",
        "Damage": "3",
        "Ranges": "50/100/200",
        "Clip": "1",
        "Strength": "3",
        "Size": "4",
        "Cost": "••",
        "Weapon Type": "Flintlocks",
        "Book": "Arm 81"
    },
    {
        "Type": "Archaic Firearms",
        "Name": "Rifle, double",
        "Damage": "3",
        "Ranges": "50/100/200",
        "Clip": "2",
        "Strength": "3",
        "Size": "4",
        "Cost": "•••",
        "Weapon Type": "Flintlocks",
        "Book": "Arm 81"
    },
    {
        "Type": "Archaic Firearms",
        "Name": "Revolver, light",
        "Damage": "2",
        "Ranges": "15/30/60",
        "Clip": "9",
        "Strength": "2",
        "Size": "2/J",
        "Cost": "•••",
        "Weapon Type": "Percussion Cap Firearms",
        "Book": "Arm 81"
    },
    {
        "Type": "Archaic Firearms",
        "Name": "Revolver, heavy",
        "Damage": "3",
        "Ranges": "25/50/100",
        "Clip": "6",
        "Strength": "2",
        "Size": "2/L",
        "Cost": "•••",
        "Weapon Type": "Percussion Cap Firearms",
        "Book": "Arm 81"
    },
    {
        "Type": "Archaic Firearms",
        "Name": "Rifle, light",
        "Damage": "3",
        "Ranges": "125/250/500",
        "Clip": "1",
        "Strength": "3",
        "Size": "3",
        "Cost": "•••",
        "Weapon Type": "Percussion Cap Firearms",
        "Book": "Arm 81"
    },
    {
        "Type": "Archaic Firearms",
        "Name": "Rifle, heavy",
        "Damage": "4",
        "Ranges": "200/400/800",
        "Clip": "1",
        "Strength": "3",
        "Size": "3",
        "Cost": "•••",
        "Weapon Type": "Percussion Cap Firearms",
        "Book": "Arm 81"
    },
    {
        "Type": "Archaic Firearms",
        "Name": "Rifle, elephant gun",
        "Damage": "5",
        "Ranges": "250/500/1000",
        "Clip": "2",
        "Strength": "4",
        "Size": "4",
        "Cost": "••••",
        "Weapon Type": "Percussion Cap Firearms",
        "Book": "Arm 81"
    },
]

const miscellaneousRangedData = [
    {
        "Type": "Miscellaneous ranged",
        "Name": "Atlatl",
        "Damage": "4L",
        "Ranges": "Thrown*5",
        "Clip": "1",
        "Strength": "2",
        "Size": "3",
        "Cost": "•••",
        "Description": "",
        "Book": "Arm 91"
    },
    {
        "Type": "Miscellaneous ranged",
        "Name": "Ballistic Knife",
        "Damage": "1L",
        "Ranges": "2/5/10",
        "Clip": "1",
        "Strength": "1",
        "Size": "1J",
        "Cost": "••",
        "Description": "9-Again",
        "Book": "Arm 91"
    },
    {
        "Type": "Miscellaneous ranged",
        "Name": "BB Gun, pistol",
        "Damage": "0B",
        "Ranges": "5/10/20",
        "Clip": "50",
        "Strength": "1",
        "Size": "1S",
        "Cost": "•",
        "Description": "Cannot deal more than 1B or reduce target to fewer health than Size",
        "Book": "Arm 91"
    },
    {
        "Type": "Miscellaneous ranged",
        "Name": "BB Gun, Rifle",
        "Damage": "0B",
        "Ranges": "10/20/40",
        "Clip": "300",
        "Strength": "1",
        "Size": "2L",
        "Cost": "•",
        "Description": "Cannot deal more than 1B or reduce target to fewer health than Size",
        "Book": "Arm 91"
    },
    {
        "Type": "Miscellaneous ranged",
        "Name": "Blowgun",
        "Damage": "0L",
        "Ranges": "",
        "Clip": "1",
        "Strength": "1",
        "Size": "2N",
        "Cost": "•",
        "Description": "Rolls Dex+Ath, Range equal to 2*(Size+Stamina+Athletics)",
        "Book": "Arm 90"
    },
    {
        "Type": "Miscellaneous ranged",
        "Name": "Bow",
        "Damage": "Strength",
        "Ranges": "",
        "Clip": "1",
        "Strength": "",
        "Size": "",
        "Cost": "•",
        "Description": "Rolls Dex+Ath, Two-Handed, Range equal to 3*(Strength+Size+Athletics), Strength penalties are doubled",
        "Book": "Arm 90"
    },
    {
        "Type": "Miscellaneous ranged",
        "Name": "Bow, Compound",
        "Damage": "Strength+2",
        "Ranges": "",
        "Clip": "",
        "Strength": "",
        "Size": "",
        "Cost": "••",
        "Description": "Two-Handed, Rolls Dex+Ath, Range equal to 4*(Strength+Size+Athletics)",
        "Book": "Arm 90"
    },
    {
        "Type": "Miscellaneous ranged",
        "Name": "Crossbow",
        "Damage": "3L",
        "Ranges": "40/80/160",
        "Clip": "1",
        "Strength": "3",
        "Size": "3",
        "Cost": "•••",
        "Description": "Two-Handed, slow to reload, Armor Piercing 2",
        "Book": "WoD 170"
    },
    {
        "Type": "Miscellaneous ranged",
        "Name": "Crossbow",
        "Damage": "3L",
        "Ranges": "40/80/160",
        "Clip": "1",
        "Strength": "2",
        "Size": "3",
        "Cost": "•••",
        "Description": "Two-Handed, can use Athletics or Firearms, requires 2*min. Str turns to reload, AP 2",
        "Book": "Arm 90"
    },
    {
        "Type": "Miscellaneous ranged",
        "Name": "Crossbow, Hand",
        "Damage": "1L",
        "Ranges": "15/30/60",
        "Clip": "1",
        "Strength": "1",
        "Size": "2N",
        "Cost": "••",
        "Description": "Can use Athletics or Firearms, Requires 2*min. Str turns to reload, AP 1",
        "Book": "Arm 90"
    },
    {
        "Type": "Miscellaneous ranged",
        "Name": "Crossbow, arbalest",
        "Damage": "4L",
        "Ranges": "75/150/300",
        "Clip": "1",
        "Strength": "4",
        "Size": "4",
        "Cost": "••••",
        "Description": "Can use Athletics or Firearms, Requires 2*min. Str turns to reload, AP 1",
        "Book": "Arm 90"
    },
    {
        "Type": "Miscellaneous ranged",
        "Name": "Dart Gun, Pistol",
        "Damage": "0",
        "Ranges": "10/20/40",
        "Clip": "1",
        "Strength": "1",
        "Size": "2L",
        "Cost": "••",
        "Description": "Only deals 1L to targets Size 2 or less, otherwise, no damage",
        "Book": "Arm 91"
    },
    {
        "Type": "Miscellaneous ranged",
        "Name": "Dart Gun, rifle",
        "Damage": "1",
        "Ranges": "25/50/100",
        "Clip": "1",
        "Strength": "1",
        "Size": "3",
        "Cost": "•••",
        "Description": "Only deals 1L to targets Size 2 or less, otherwise no damage",
        "Book": "Arm 91"
    },
    {
        "Type": "Miscellaneous ranged",
        "Name": "Fire Extinguisher",
        "Damage": "-2",
        "Ranges": "1/2/3",
        "Clip": "5",
        "Strength": "1",
        "Size": "2/N",
        "Cost": "•",
        "Description": "",
        "Book": "Arm 91"
    },
    {
        "Type": "Miscellaneous ranged",
        "Name": "Fire Hose",
        "Damage": "2B",
        "Ranges": "10/20/30",
        "Clip": "*",
        "Strength": "4",
        "Size": "4",
        "Cost": "N/A",
        "Description": "",
        "Book": "Arm 91"
    },
    {
        "Type": "Miscellaneous ranged",
        "Name": "Flare Gun",
        "Damage": "-1L",
        "Ranges": "20/40/80",
        "Clip": "1",
        "Strength": "1",
        "Size": "1S",
        "Cost": "•",
        "Description": "Maximum of 4 damage",
        "Book": "Arm 91"
    },
    {
        "Type": "Miscellaneous ranged",
        "Name": "Hairspray Flamethrower",
        "Damage": "-1L",
        "Ranges": "1*",
        "Clip": "10",
        "Strength": "1",
        "Size": "1/S",
        "Cost": "N/A",
        "Description": "",
        "Book": "Arm 91"
    },
    {
        "Type": "Miscellaneous ranged",
        "Name": "Paintball pistol",
        "Damage": "0B",
        "Ranges": "15/30/60",
        "Clip": "20",
        "Strength": "1",
        "Size": "2/J",
        "Cost": "•",
        "Description": "",
        "Book": "Arm 91"
    },
    {
        "Type": "Miscellaneous ranged",
        "Name": "Paintball rifle",
        "Damage": "1B",
        "Ranges": "30/60/120",
        "Clip": "120",
        "Strength": "1",
        "Size": "2/N",
        "Cost": "••",
        "Description": "",
        "Book": "Arm 91"
    },
    {
        "Type": "Miscellaneous ranged",
        "Name": "Ranged stun gun",
        "Damage": "-1",
        "Ranges": "1/3/7",
        "Clip": "1",
        "Strength": "1",
        "Size": "1/S",
        "Cost": "••",
        "Description": "",
        "Book": "Arm 91"
    },
    {
        "Type": "Miscellaneous ranged",
        "Name": "Sling",
        "Damage": "2L",
        "Ranges": "Thrown*3",
        "Clip": "1",
        "Strength": "2",
        "Size": "0P",
        "Cost": "",
        "Description": "Rolls Dex+Ath",
        "Book": "Arm 90"
    },
    {
        "Type": "Miscellaneous ranged",
        "Name": "Sling, Stave",
        "Damage": "3L",
        "Ranges": "Thrown*5",
        "Clip": "1",
        "Strength": "2",
        "Size": "4",
        "Cost": "",
        "Description": "Two-Handed, rolls Dex+Ath",
        "Book": "Arm 90"
    },
    {
        "Type": "Miscellaneous ranged",
        "Name": "Ranged Stun Gun",
        "Damage": "-1",
        "Ranges": "1/3/7",
        "Clip": "1",
        "Strength": "1",
        "Size": "1S",
        "Cost": "••",
        "Description": "Deals 1B regardless of successes, until removed stun gun attacks can still be made",
        "Book": "Arm 93"
    },
    {
        "Type": "Miscellaneous ranged",
        "Name": "Slingshot",
        "Damage": "0B",
        "Ranges": "5/10/20",
        "Clip": "1",
        "Strength": "1",
        "Size": "1S",
        "Cost": "•",
        "Description": "Cannot deal more than 1B, Rolls Athletics",
        "Book": "Arm 93"
    },
    {
        "Type": "Miscellaneous ranged",
        "Name": "Spear Gun",
        "Damage": "3L",
        "Ranges": "15/30/60",
        "Clip": "1",
        "Strength": "2",
        "Size": "2L",
        "Cost": "••",
        "Description": "Two turns to reload, range only applies underwater",
        "Book": "Arm 93"
    }
]

const thrownWeaponData = [
    {
        "Type": "Thrown Weapons",
        "Name": "Dart",
        "Damage": "-1L",
        "Ranges": "Aero",
        "Clip": "",
        "Strength": "1",
        "Size": "1P",
        "Cost": "•",
        "Description": "10s not re-rolled",
        "Book": "Arm 89"
    },
    {
        "Type": "Thrown Weapons",
        "Name": "Hatchet",
        "Damage": "1L",
        "Ranges": "Thrown",
        "Clip": "",
        "Strength": "2",
        "Size": "1J",
        "Cost": "•",
        "Description": "Can deal Bashing instead",
        "Book": "Arm 89"
    },
    {
        "Type": "Thrown Weapons",
        "Name": "Javelin, Combat",
        "Damage": "3L",
        "Ranges": "Aero",
        "Clip": "",
        "Strength": "2",
        "Size": "2N",
        "Cost": "••",
        "Description": "",
        "Book": "Arm 89"
    },
    {
        "Type": "Thrown Weapons",
        "Name": "Javelin, Competition",
        "Damage": "2L",
        "Ranges": "Thrown*4",
        "Clip": "",
        "Strength": "2",
        "Size": "2N",
        "Cost": "••",
        "Description": "",
        "Book": "Arm 89"
    },
    {
        "Type": "Thrown Weapons",
        "Name": "Knife",
        "Damage": "1L",
        "Ranges": "Aero",
        "Clip": "",
        "Strength": "2",
        "Size": "1P",
        "Cost": "•",
        "Description": "",
        "Book": "Arm 89"
    },
    {
        "Type": "Thrown Weapons",
        "Name": "Shuriken",
        "Damage": "-1L",
        "Ranges": "Aero",
        "Clip": "",
        "Strength": "1",
        "Size": "1P",
        "Cost": "•",
        "Description": "10s not re-rolled",
        "Book": "Arm 89"
    }
]

const mountedWeaponsData = [
    {
        "Type": "Mounted",
        "Name": "M158 Launcher",
        "Damage": "-2L+10",
        "Ranges": "125/250/500",
        "Clip": "7",
        "Strength": "-",
        "Size": "",
        "Cost": "",
        "Description": "Blast Area/Force 3, Knockdown, Armor Piercing 12",
        "Book": "Reload 35"
    },
    {
        "Type": "Mounted",
        "Name": "Minigun",
        "Damage": "5L / 6L",
        "Ranges": "250/500/1000",
        "Clip": "750",
        "Strength": "-",
        "Size": "",
        "Cost": "",
        "Description": "Autofire, Armor Piercing 6, 9-Again, multi-barrel does 6L",
        "Book": "Reload 35"
    },
    {
        "Type": "Mounted",
        "Name": "M134 \"Minigun\"",
        "Damage": "4L+2",
        "Ranges": "150/300/600",
        "Clip": "100",
        "Strength": "4",
        "Size": "5",
        "Cost": "",
        "Description": "Can only be fired in long bursts; 8-Again, fires 50+5 dice",
        "Book": "ArmErr 4"
    }
]

const arrowsData = [
    {
        "Type": "Arrows",
        "Name": "Bodkin",
        "Damage Modifier": "",
        "Range Modifier": "Increase by half again",
        "Amount": "12",
        "Cost": "•••",
        "Description": "Armor Piercing 4",
        "Book": "Arm 90"
    },
    {
        "Type": "Arrows",
        "Name": "Broadhead",
        "Damage Modifier": "",
        "Range Modifier": "",
        "Amount": "",
        "Cost": "•",
        "Description": "Armor Piercing 2 and +1 against no or soft armor, otherwise -2",
        "Book": "Arm 90"
    }
]

const bulletsData = [
    {
        "Type": "Bullets",
        "Name": "Armor Piercing (2L or less Handgun)",
        "Damage Modifier": "",
        "Range Modifier": "",
        "Amount": "50",
        "Cost": "••",
        "Description": "Armor Piercing 1",
        "Book": "Arm 82"
    },
    {
        "Type": "Bullets",
        "Name": "Armor Piercing (2L w/ 9-again or more Handgun)",
        "Damage Modifier": "",
        "Range Modifier": "",
        "Amount": "50",
        "Cost": "••",
        "Description": "Armor Piercing 2",
        "Book": "Arm 82"
    },
    {
        "Type": "Bullets",
        "Name": "Armor Piercing (4 or less Rifle)",
        "Damage Modifier": "",
        "Range Modifier": "",
        "Amount": "20",
        "Cost": "••",
        "Description": "Armor Piercing 2",
        "Book": "Arm 82"
    },
    {
        "Type": "Bullets",
        "Name": "Armor Piercing (4L w/ 9-again or more Rifle)",
        "Damage Modifier": "",
        "Range Modifier": "",
        "Amount": "20",
        "Cost": "••",
        "Description": "Armor Piercing 3",
        "Book": "Arm 82"
    },
    {
        "Type": "Bullets",
        "Name": "Buckshot (Shotgun)",
        "Damage Modifier": "",
        "Range Modifier": "",
        "Amount": "25",
        "Cost": "•",
        "Description": "+1 against 0 Durability or Armor at short range, range penalties reduced by half, anyone in physical contact w/ target suffers half damage, all targets double durability or armor",
        "Book": "Arm 86"
    },
    {
        "Type": "Bullets",
        "Name": "Birdshot (Shotgun)",
        "Damage Modifier": "-1",
        "Range Modifier": "-0/-half/-half",
        "Amount": "25",
        "Cost": "•",
        "Description": "anyone in physical contact w/ target suffers half damage, all targets triple Durability or Armor",
        "Book": "Arm 86"
    },
    {
        "Type": "Bullets",
        "Name": "Cold Iron",
        "Damage Modifier": "",
        "Range Modifier": "",
        "Amount": "",
        "Cost": "",
        "Description": "Normal bullet acts as an Armor Piercing bullet, hollowpoint acts as a normal bullet",
        "Book": "Arm 88"
    },
    {
        "Type": "Bullets",
        "Name": "Flamethrower (Shotgun)",
        "Damage Modifier": "+3",
        "Range Modifier": "",
        "Amount": "3",
        "Cost": "•",
        "Description": "Autofire base damage 0, maximum 4 damage",
        "Book": "Arm 86"
    },
    {
        "Type": "Bullets",
        "Name": "Flare (Shotgun)",
        "Damage Modifier": "Becomes -1",
        "Range Modifier": "-half/-half/-half",
        "Amount": "3",
        "Cost": "•",
        "Description": "Maximum 4 damage",
        "Book": "Arm 87"
    },
    {
        "Type": "Bullets",
        "Name": "Frangible (Handgun or Rifle)",
        "Damage Modifier": "",
        "Range Modifier": "",
        "Amount": "20",
        "Cost": "••",
        "Description": "+1 against 0 Durability or Armor",
        "Book": "Arm 83"
    },
    {
        "Type": "Bullets",
        "Name": "Gold",
        "Damage Modifier": "-1",
        "Range Modifier": "",
        "Amount": "",
        "Cost": "",
        "Description": "All ranges reduced by three-quarters of normal",
        "Book": "Arm 88"
    },
    {
        "Type": "Bullets",
        "Name": "Hollowpoint (Handgun or Rifle)",
        "Damage Modifier": "",
        "Range Modifier": "-0/-3/-5",
        "Amount": "20",
        "Cost": "•",
        "Description": "+1 against 0 Durability or Armor, -2 otherwise",
        "Book": "Arm 83"
    },
    {
        "Type": "Bullets",
        "Name": "Riot Control (Handgun or Rifle)",
        "Damage Modifier": "",
        "Range Modifier": "",
        "Amount": "20",
        "Cost": "••",
        "Description": "Deals Bashing instead of Lethal",
        "Book": "Arm 84"
    },
    {
        "Type": "Bullets",
        "Name": "Riot Control (Shotgun)",
        "Damage Modifier": "",
        "Range Modifier": "",
        "Amount": "25",
        "Cost": "•",
        "Description": "Deals Bashing instead of Lethal",
        "Book": "Arm 88"
    },
    {
        "Type": "Bullets",
        "Name": "Silver",
        "Damage Modifier": "-1",
        "Range Modifier": "",
        "Amount": "",
        "Cost": "",
        "Description": "",
        "Book": "Arm 89"
    }
]

const shotgunSpecificsData = [
    {
        "Type": "Shotgun Gauge",
        "Name": ".410",
        "Damage": "2L",
        "Range Modifier": "-10/-20/-30",
        "Capacity Modifier": "+2",
        "Strength Modifier": "-1",
        "Description": "9-Again",
        "Book": "Arm 77"
    },
    {
        "Type": "Shotgun Gauge",
        "Name": "28",
        "Damage": "2L",
        "Range Modifier": "-10/-20/-30",
        "Capacity Modifier": "+2",
        "Strength Modifier": "-1",
        "Description": "9-Again",
        "Book": "Arm 77"
    },
    {
        "Type": "Shotgun Gauge",
        "Name": "20",
        "Damage": "3L",
        "Range Modifier": "-5/-10/-15",
        "Capacity Modifier": "+1",
        "Strength Modifier": "-1",
        "Description": "9-Again",
        "Book": "Arm 77"
    },
    {
        "Type": "Shotgun Gauge",
        "Name": "16",
        "Damage": "4L",
        "Range Modifier": "+0/+0/+0",
        "Capacity Modifier": "+0",
        "Strength Modifier": "+0",
        "Description": "",
        "Book": "Arm 77"
    },
    {
        "Type": "Shotgun Gauge",
        "Name": "10",
        "Damage": "5L",
        "Range Modifier": "+5/+10/+15",
        "Capacity Modifier": "-1",
        "Strength Modifier": "+1",
        "Description": "",
        "Book": "Arm 77"
    }
]

const standardExplosivesData = [
    {
        "Type": "Explosives",
        "Name": "Incendiary",
        "Throwing Mod": "-1",
        "Blast Radius": "2",
        "Damage": "2",
        "Size": "1",
        "Cost": "-",
        "Description": "Ignites fire",
        "Book": "WoD 179"
    },
    {
        "Type": "Explosives",
        "Name": "Concussion",
        "Throwing Mod": "+2",
        "Blast Radius": "3",
        "Damage": "4",
        "Size": "1",
        "Cost": "•••",
        "Description": "Delivers bashing damage and knockdown",
        "Book": "WoD 179"
    },
    {
        "Type": "Explosives",
        "Name": "Shredding",
        "Throwing Mod": "+2",
        "Blast Radius": "3",
        "Damage": "4",
        "Size": "1",
        "Cost": "•••",
        "Description": "",
        "Book": "WoD 179"
    },
    {
        "Type": "Explosives",
        "Name": "Single Destructive",
        "Throwing Mod": "+1",
        "Blast Radius": "4",
        "Damage": "4+",
        "Size": "1",
        "Cost": "•••",
        "Description": "",
        "Book": "WoD 179"
    },
    {
        "Type": "Explosives",
        "Name": "High Explosive",
        "Throwing Mod": "n/a",
        "Blast Radius": "20+",
        "Damage": "6+",
        "Size": "1-3",
        "Cost": "••••",
        "Description": "Timed explosive",
        "Book": "WoD 179"
    }
]

const explosiveData = [
    {
        "Type": "Explosives",
        "Name": "Nitroglycerin, 1 oz.",
        "Damage": "N/A",
        "Blast Area": "5",
        "Force": "2(L)",
        "Size": "1/P",
        "Cost": "••",
        "Description": "9-again, Knockdown",
        "Weapon Type": "Explosives",
        "Book": "Arm 115"
    },
    {
        "Type": "Explosives",
        "Name": "Dynamite, 1 stick",
        "Damage": "N/A",
        "Blast Area": "10",
        "Force": "2(L)",
        "Size": "1/J",
        "Cost": "•",
        "Description": "Knockdown",
        "Weapon Type": "Explosives",
        "Book": "Arm 115"
    },
    {
        "Type": "Explosives",
        "Name": "TNT, 1 stick",
        "Damage": "N/A",
        "Blast Area": "10",
        "Force": "3(L)",
        "Size": "1/J",
        "Cost": "••",
        "Description": "Knockdown",
        "Weapon Type": "Explosives",
        "Book": "Arm 115"
    },
    {
        "Type": "Explosives",
        "Name": "C-4, 1.25 lb. block",
        "Damage": "N/A",
        "Blast Area": "10",
        "Force": "4(L)",
        "Size": "1/J",
        "Cost": "••",
        "Description": "9-again, Knockdown",
        "Weapon Type": "Explosives",
        "Book": "Arm 115"
    },
    {
        "Type": "Explosives",
        "Name": "C-4, .5 lb. sheet",
        "Damage": "N/A",
        "Blast Area": "5",
        "Force": "2(L)",
        "Size": "1/P",
        "Cost": "••",
        "Description": "Knockdown",
        "Weapon Type": "Explosives",
        "Book": "Arm 115"
    },
    {
        "Type": "Explosives",
        "Name": "ANFO, 1 gal.",
        "Damage": "N/A",
        "Blast Area": "5",
        "Force": "2(L)",
        "Size": "3/N",
        "Cost": "•",
        "Description": "8-again, fire damage, Knockdown",
        "Weapon Type": "Explosives",
        "Book": "Arm 115"
    },
    {
        "Type": "Explosives",
        "Name": "Semtex, 1 lb.",
        "Damage": "N/A",
        "Blast Area": "10",
        "Force": "4(L)",
        "Size": "1/J",
        "Cost": "••",
        "Description": "Knockdown",
        "Weapon Type": "Explosives",
        "Book": "Arm 115"
    },
    {
        "Type": "Explosives",
        "Name": "Gunpowder, 1 lb.",
        "Damage": "N/A",
        "Blast Area": "2",
        "Force": "2(L)",
        "Size": "1/J",
        "Cost": "•",
        "Description": "",
        "Weapon Type": "Explosives",
        "Book": "Arm 115"
    },
    {
        "Type": "Explosives",
        "Name": "Flash Powder, 1 lb.",
        "Damage": "N/A",
        "Blast Area": "1",
        "Force": "1(B)",
        "Size": "1/J",
        "Cost": "•",
        "Description": "9-again",
        "Weapon Type": "Explosives",
        "Book": "Arm 115"
    },
    {
        "Type": "Explosives",
        "Name": "Det Cord, 10’",
        "Damage": "N/A",
        "Blast Area": "3",
        "Force": "2(L)",
        "Size": "2/J",
        "Cost": "••",
        "Description": "9-again",
        "Weapon Type": "Explosives",
        "Book": "Arm 115"
    },
    {
        "Type": "Explosives",
        "Name": "Blasting Cap, non-electric",
        "Damage": "-3(L)+1",
        "Blast Area": "0",
        "Force": "1",
        "Size": "1/P",
        "Cost": "••",
        "Description": "8-again",
        "Weapon Type": "Explosives",
        "Book": "Arm 115"
    },
    {
        "Type": "Explosives",
        "Name": "Blasting Cap, electric",
        "Damage": "-3(L)+1",
        "Blast Area": "0",
        "Force": "1",
        "Size": "1/P",
        "Cost": "•",
        "Description": "8-again",
        "Weapon Type": "Explosives",
        "Book": "Arm 115"
    },
    {
        "Type": "Explosives",
        "Name": "Radio Receiver w/ blasting cap",
        "Damage": "-3(L)+1",
        "Blast Area": "0",
        "Force": "1",
        "Size": "1/P",
        "Cost": "••",
        "Description": "9-again",
        "Weapon Type": "Explosives",
        "Book": "Arm 115"
    },
    {
        "Type": "Explosives",
        "Name": "Countdown Detonator",
        "Damage": "-4(L)+1",
        "Blast Area": "0",
        "Force": "1",
        "Size": "1/P",
        "Cost": "•••",
        "Description": "",
        "Weapon Type": "Explosives",
        "Book": "Arm 115"
    },
    {
        "Type": "Explosives",
        "Name": "Satchel Charge",
        "Damage": "1(L)+6",
        "Blast Area": "20",
        "Force": "6",
        "Size": "2/L",
        "Cost": "N/A",
        "Description": "8-again, knockdown",
        "Weapon Type": "Explosive devices",
        "Book": "Arm 115"
    },
    {
        "Type": "Explosives",
        "Name": "Cratering Charge, 40 lbs.",
        "Damage": "N/A",
        "Blast Area": "15",
        "Force": "8(L)",
        "Size": "3/N",
        "Cost": "N/A",
        "Description": "8-again, knockdown",
        "Weapon Type": "Explosive devices",
        "Book": "Arm 115"
    },
    {
        "Type": "Explosives",
        "Name": "Shaped Charge, 15 lbs.",
        "Damage": "N/A",
        "Blast Area": "5",
        "Force": "7(L)",
        "Size": "3/N",
        "Cost": "N/A",
        "Description": "8-again, knockdown, AP 3",
        "Weapon Type": "Explosive devices",
        "Book": "Arm 115"
    },
    {
        "Type": "Explosives",
        "Name": "Breeching Charge, .25 lb.",
        "Damage": "N/A",
        "Blast Area": "1",
        "Force": "2(L)",
        "Size": "1/P",
        "Cost": "N/A",
        "Description": "AP 2",
        "Weapon Type": "Explosive devices",
        "Book": "Arm 115"
    },
    {
        "Type": "Explosives",
        "Name": "Fougasse",
        "Damage": "N/A",
        "Blast Area": "25",
        "Force": "3(L)",
        "Size": "3/N",
        "Cost": "••",
        "Description": "8-again, Fire damage, Knockdown",
        "Weapon Type": "Explosive devices",
        "Book": "Arm 115"
    },
    {
        "Type": "Explosives",
        "Name": "Firecracker, tiny",
        "Damage": "-3(B)+2",
        "Blast Area": "0",
        "Force": "2",
        "Size": "1/P",
        "Cost": "•",
        "Description": "",
        "Weapon Type": "Fireworks",
        "Book": "Arm 115"
    },
    {
        "Type": "Explosives",
        "Name": "Firecracker, M-1000",
        "Damage": "-1(L)+2",
        "Blast Area": "2",
        "Force": "2",
        "Size": "1/P",
        "Cost": "•",
        "Description": "Knockdown",
        "Weapon Type": "Fireworks",
        "Book": "Arm 115"
    },
    {
        "Type": "Explosives",
        "Name": "Bottle Rocket",
        "Damage": "N/A",
        "Blast Area": "0",
        "Force": "2(B)",
        "Size": "1/S",
        "Cost": "•",
        "Description": "Knockdown",
        "Weapon Type": "Fireworks",
        "Book": "Arm 115"
    },
    {
        "Type": "Explosives",
        "Name": "Roman Candle",
        "Damage": "N/A",
        "Blast Area": "0",
        "Force": "1(L)",
        "Size": "1/J",
        "Cost": "•",
        "Description": "",
        "Weapon Type": "Fireworks",
        "Book": "Arm 115"
    },
    {
        "Type": "Explosives",
        "Name": "Time-Delay Fuse",
        "Damage": "N/A",
        "Blast Area": "-",
        "Force": "-",
        "Size": "1/S",
        "Cost": "••",
        "Description": "",
        "Weapon Type": "Accessories",
        "Book": "Arm 115"
    },
    {
        "Type": "Explosives",
        "Name": "Blasting Machine",
        "Damage": "N/A",
        "Blast Area": "-",
        "Force": "-",
        "Size": "2/L",
        "Cost": "•••",
        "Description": "",
        "Weapon Type": "Accessories",
        "Book": "Arm 115"
    },
    {
        "Type": "Explosives",
        "Name": "Radio Detonator, short range",
        "Damage": "N/A",
        "Blast Area": "-",
        "Force": "-",
        "Size": "2/J",
        "Cost": "••",
        "Description": "",
        "Weapon Type": "Accessories",
        "Book": "Arm 115"
    },
    {
        "Type": "Explosives",
        "Name": "Radio Detonator, long range",
        "Damage": "N/A",
        "Blast Area": "-",
        "Force": "-",
        "Size": "3/N",
        "Cost": "•••",
        "Description": "",
        "Weapon Type": "Accessories",
        "Book": "Arm 115"
    }
]

const grenadesData = [
    {
        "Type": "Grenades",
        "Name": "Frag, Standard",
        "Damage": "2L+3",
        "Blast Area": "10",
        "Force": "3",
        "Size": "1S",
        "Cost": "-",
        "Description": "Knockdown",
        "Book": "Arm 104"
    },
    {
        "Type": "Grenades",
        "Name": "Frag, Heavy",
        "Damage": "0L+3",
        "Blast Area": "5",
        "Force": "3",
        "Size": "1J",
        "Cost": "-",
        "Description": "9-again, knockdown",
        "Book": "Arm 104"
    },
    {
        "Type": "Grenades",
        "Name": "Frag, Stick",
        "Damage": "3L+2",
        "Blast Area": "10",
        "Force": "2",
        "Size": "1J",
        "Cost": "-",
        "Description": "Knockdown",
        "Book": "Arm 104"
    },
    {
        "Type": "Grenades",
        "Name": "Pipe Bomb",
        "Damage": "0L+2",
        "Blast Area": "5",
        "Force": "2",
        "Size": "2J",
        "Cost": "•",
        "Description": "Not Aerodynamic",
        "Book": "Arm 104"
    },
    {
        "Type": "Grenades",
        "Name": "Stun",
        "Damage": "1B+2",
        "Blast Area": "5",
        "Force": "2",
        "Size": "1S",
        "Cost": "••",
        "Description": "Knockdown, Stun",
        "Book": "Arm 104"
    },
    {
        "Type": "Grenades",
        "Name": "Thermite",
        "Damage": "-2L+4",
        "Blast Area": "5",
        "Force": "4",
        "Size": "1J",
        "Cost": "-",
        "Description": "Armor Piercing 8, creates a 4L fire",
        "Book": "Arm 104"
    },
    {
        "Type": "Grenades",
        "Name": "White Phosphorous",
        "Damage": "-2L+4",
        "Blast Area": "5",
        "Force": "4",
        "Size": "1J",
        "Cost": "-",
        "Description": "Armor Piercing 3, creates a 4L fire and provides substantial concealment",
        "Book": "Arm 104"
    },
    {
        "Type": "Grenades",
        "Name": "Molotov Cocktail",
        "Damage": "-1L+2",
        "Blast Area": "3",
        "Force": "2",
        "Size": "2L",
        "Cost": "•",
        "Description": "Not aerodynamic, creates a fire",
        "Book": "Arm 105"
    },
    {
        "Type": "Grenades",
        "Name": "Smoke",
        "Damage": "-1",
        "Blast Area": "10",
        "Force": "-",
        "Size": "1J",
        "Cost": "••",
        "Description": "Provides substantial concealment",
        "Book": "Arm 105"
    },
    {
        "Type": "Grenades",
        "Name": "Tear Gas",
        "Damage": "-1",
        "Blast Area": "10",
        "Force": "-",
        "Size": "1J",
        "Cost": "••",
        "Description": "Provides substantial concealment, creates tear gas",
        "Book": "Arm 105"
    }
]

const grenadeLauncherData = [
    {
        Type: "Grenade Launchers",
        Name: "Rifle adapter",
        Ranges: "75/150/300",
        Capacity: "1",
        Strength: "+1",
        Size: "-",
        Cost: "•••",
        Book: "Arm 105"
    },
    {
        Type: "Grenade Launchers",
        Name: "Stand-Alone Launcher",
        Ranges: "75/150/300",
        Capacity: "1",
        Strength: "3",
        Size: "3",
        Cost: "••••",
        Book: "Arm 105"
    },
    {
        Type: "Grenade Launchers",
        Name: "Under-barrel launcher",
        Ranges: "75/150/300",
        Capacity: "1",
        Strength: "2",
        Size: "2/N",
        Cost: "N/A",
        Book: "Arm 105"
    },
    {
        Type: "Grenade Launchers",
        Name: "Grenade machine gun",
        Ranges: "400/800/1600",
        Capacity: "50",
        Strength: "-(3/3/4)",
        Size: "4",
        Cost: "N/A",
        Book: "Arm 105"
    }
]

const grenadeAmmunitionData = [
    {
        Type: "Grenade Ammunition",
        Name: "HE",
        "Blast Area": "10",
        Force: "4(L)",
        Size: "1/S",
        Cost: "N/A",
        Description: "Knockdown",
        Book: "Arm 105"
    },
    {
        Type: "Grenade Ammunition",
        Name: "HEDP",
        "Blast Area": "10",
        Force: "3(L)",
        Size: "1/S",
        Cost: "N/A",
        Description: "Knockdown, AP 4",
        Book: "Arm 105"
    },
    {
        Type: "Grenade Ammunition",
        Name: "Stun",
        "Blast Area": "5",
        Force: "3(B)",
        Size: "1/S",
        Cost: "••",
        Description: "Knockdown, Stun",
        Book: "Arm 105"
    },
    {
        Type: "Grenade Ammunition",
        Name: "WP",
        "Blast Area": "10",
        Force: "4(L)",
        Size: "1/S",
        Cost: "N/A",
        Description: "AP 8, Fire damage, Concealment",
        Book: "Arm 105"
    },
    {
        Type: "Grenade Ammunition",
        Name: "Smoke",
        "Blast Area": "10",
        Force: "-",
        Size: "1/S",
        Cost: "••",
        Description: "Concealment",
        Book: "Arm 105"
    },
    {
        Type: "Grenade Ammunition",
        Name: "Tear gas",
        "Blast Area": "10",
        Force: "-",
        Size: "1/S",
        Cost: "••",
        Description: "Concealment, Tear Gas",
        Book: "Arm 105"
    },
    {
        Type: "Grenade Ammunition",
        Name: "Illumination",
        "Blast Area": "500",
        Force: "-",
        Size: "1/S",
        Cost: "N/A",
        Description: "Illumination",
        Book: "Arm 105"
    },
    {
        Type: "Grenade Ammunition",
        Name: "Baton",
        "Blast Area": "-",
        Force: "5(B)",
        Size: "1/S",
        Cost: "••",
        Description: "Knockdown, Stun, no explosion",
        Book: "Arm 105"
    },
    {
        Type: "Grenade Ammunition",
        Name: "Buckshot",
        "Blast Area": "10",
        Force: "4(L)",
        Size: "1/S",
        Cost: "N/A",
        Description: "Knockdown, directional",
        Book: "Arm 105"
    }
]

const artilleryShellData = [
    {
        "Type": "Artillery",
        "Name": "High explosive (HE)",
        "Blast area": "10",
        "Force": "4",
        "Size": "3",
        "Description": "9-Again, Knockdown",
        "Weapon Type": "51mm Mortar Shells",
        "Book": "Arm 106"
    },
    {
        "Type": "Artillery",
        "Name": "Illumination",
        "Blast area": "1000",
        "Force": "-",
        "Size": "3",
        "Description": "No secondary blast area, Illuminate",
        "Weapon Type": "51mm Mortar Shells",
        "Book": "Arm 106"
    },
    {
        "Type": "Artillery",
        "Name": "Smoke",
        "Blast area": "10",
        "Force": "-",
        "Size": "3",
        "Description": "No secondary blast area, Concealment",
        "Weapon Type": "51mm Mortar Shells",
        "Book": "Arm 106"
    },
    {
        "Type": "Artillery",
        "Name": "High Explosive (HE)",
        "Blast area": "10",
        "Force": "4",
        "Size": "3",
        "Description": "8-again, Knockdown",
        "Weapon Type": "60mm Mortar Shells",
        "Book": "Arm 106"
    },
    {
        "Type": "Artillery",
        "Name": "Illumination",
        "Blast area": "1000",
        "Force": "-",
        "Size": "3",
        "Description": "No secondary blast area, Illuminate",
        "Weapon Type": "60mm Mortar Shells",
        "Book": "Arm 106"
    },
    {
        "Type": "Artillery",
        "Name": "Smoke",
        "Blast area": "15",
        "Force": "-",
        "Size": "3",
        "Description": "No secondary blast area, Concealment",
        "Weapon Type": "60mm Mortar Shells",
        "Book": "Arm 106"
    },
    {
        "Type": "Artillery",
        "Name": "High Explosive (HE)",
        "Blast area": "15",
        "Force": "5",
        "Size": "3",
        "Description": "9-again, Knockdown",
        "Weapon Type": "105mm Artillery Shells",
        "Book": "Arm 106"
    },
    {
        "Type": "Artillery",
        "Name": "Fragmentary",
        "Blast area": "15",
        "Force": "5",
        "Size": "3",
        "Description": "8-again, Knockdown",
        "Weapon Type": "105mm Artillery Shells",
        "Book": "Arm 106"
    },
    {
        "Type": "Artillery",
        "Name": "HERA",
        "Blast area": "15",
        "Force": "5",
        "Size": "3",
        "Description": "9-again, Knockdown",
        "Weapon Type": "105mm Artillery Shells",
        "Book": "Arm 106"
    },
    {
        "Type": "Artillery",
        "Name": "Illumination",
        "Blast area": "1500",
        "Force": "-",
        "Size": "3",
        "Description": "No secondary blast area, Illuminate",
        "Weapon Type": "105mm Artillery Shells",
        "Book": "Arm 106"
    },
    {
        "Type": "Artillery",
        "Name": "Smoke",
        "Blast area": "20",
        "Force": "-",
        "Size": "3",
        "Description": "No secondary blast area, Concealment",
        "Weapon Type": "105mm Artillery Shells",
        "Book": "Arm 106"
    },
    {
        "Type": "Artillery",
        "Name": "HE",
        "Blast area": "20",
        "Force": "6",
        "Size": "3",
        "Description": "8-again, Knockdown",
        "Weapon Type": "122mm Artillery Shells",
        "Book": "Arm 106"
    },
    {
        "Type": "Artillery",
        "Name": "HEAT-FS",
        "Blast area": "10",
        "Force": "6",
        "Size": "3",
        "Description": "8-again, Knockdown, AP 4",
        "Weapon Type": "122mm Artillery Shells",
        "Book": "Arm 106"
    },
    {
        "Type": "Artillery",
        "Name": "Incendiary",
        "Blast area": "15",
        "Force": "4",
        "Size": "3",
        "Description": "Fire damage, Concealment",
        "Weapon Type": "122mm Artillery Shells",
        "Book": "Arm 106"
    },
    {
        "Type": "Artillery",
        "Name": "Illumination",
        "Blast area": "1500",
        "Force": "-",
        "Size": "3",
        "Description": "No secondary blast area, Illuminate",
        "Weapon Type": "122mm Artillery Shells",
        "Book": "Arm 106"
    },
    {
        "Type": "Artillery",
        "Name": "Smoke",
        "Blast area": "25",
        "Force": "-",
        "Size": "3",
        "Description": "No secondary blast area, Concealment",
        "Weapon Type": "122mm Artillery Shells",
        "Book": "Arm 106"
    },
    {
        "Type": "Artillery",
        "Name": "3'' Solid Shot",
        "Blast area": "5",
        "Force": "3",
        "Size": "3",
        "Description": "Knockdown",
        "Weapon Type": "122mm Artillery Shells",
        "Book": "Arm 106"
    }
]

const rocketMissileData = [
    {
        "Type": "Rocket & Missile Launchers",
        "Name": "Anti-Tank, HE",
        "Damage": "-1(L)+5",
        "Blast area": "10",
        "Force": "5",
        "Ranges": "500/1000/2000",
        "Strength": "3",
        "Size": "3",
        "Description": "9-Again, Knockdown",
        "Weapon Type": "Rocket Launchers",
        "Book": "Arm 108"
    },
    {
        "Type": "Rocket & Missile Launchers",
        "Name": "Anti-Tank, HEAT",
        "Damage": "-1(L)+10",
        "Blast area": "5",
        "Force": "3",
        "Ranges": "500/1000/2000",
        "Strength": "3",
        "Size": "3",
        "Description": "9-Again, Knockdown",
        "Weapon Type": "Rocket Launchers",
        "Book": "Arm 108"
    },
    {
        "Type": "Rocket & Missile Launchers",
        "Name": "Disposable, Light HEAT",
        "Damage": "-3(L)+8",
        "Blast area": "3",
        "Force": "3",
        "Ranges": "125/250/500",
        "Strength": "3",
        "Size": "2/N",
        "Description": "Knockdown, AP 14",
        "Weapon Type": "Rocket Launchers",
        "Book": "Arm 108"
    },
    {
        "Type": "Rocket & Missile Launchers",
        "Name": "Disposable, Heavy HE",
        "Damage": "-2(L)+5",
        "Blast area": "5",
        "Force": "4",
        "Ranges": "250/500/1000",
        "Strength": "3",
        "Size": "2/N",
        "Description": "9-again, Knockdown",
        "Weapon Type": "Rocket Launchers",
        "Book": "Arm 108"
    },
    {
        "Type": "Rocket & Missile Launchers",
        "Name": "Disposable, Heavy HEAT",
        "Damage": "-2(L)+14",
        "Blast area": "5",
        "Force": "4",
        "Ranges": "250/500/1000",
        "Strength": "3",
        "Size": "2/N",
        "Description": "Knockdown, AP 20",
        "Weapon Type": "Rocket Launchers",
        "Book": "Arm 108"
    },
    {
        "Type": "Rocket & Missile Launchers",
        "Name": "SAM",
        "Damage": "2(L)+10",
        "Blast area": "15",
        "Force": "3",
        "Ranges": "2000/4000/8000",
        "Strength": "3",
        "Size": "4",
        "Description": "Knockdown",
        "Weapon Type": "Missile Launchers",
        "Book": "Arm 108"
    },
    {
        "Type": "Rocket & Missile Launchers",
        "Name": "ATGM",
        "Damage": "0(L)+20",
        "Blast area": "5",
        "Force": "5",
        "Ranges": "500/1000/2000",
        "Strength": "3",
        "Size": "4",
        "Description": "Knockdown, AP 30",
        "Weapon Type": "Missile Launchers",
        "Book": "Arm 108"
    }
]

const militaryVehicleArmamentData = [
    {
        "Type": "Military Vehicle Armament",
        "Name": "Light",
        "Damage": "2(L)+2",
        "Blast area": "-",
        "Force": "-",
        "Ranges": "600/1200/2400",
        "Capacity": "400",
        "Description": "AP 8, Tracer",
        "Weapon Type": "Automatic Cannon",
        "Book": "Arm 108"
    },
    {
        "Type": "Military Vehicle Armament",
        "Name": "High-Speed",
        "Damage": "1(L)+2",
        "Blast area": "-",
        "Force": "-",
        "Ranges": "800/1600/3200",
        "Capacity": "300",
        "Description": "Tracer",
        "Weapon Type": "Automatic Cannon",
        "Book": "Arm 108"
    },
    {
        "Type": "Military Vehicle Armament",
        "Name": "Heavy",
        "Damage": "2(L)+2",
        "Blast area": "-",
        "Force": "-",
        "Ranges": "500/1000/2000",
        "Capacity": "200",
        "Description": "AP 18, Tracer",
        "Weapon Type": "Automatic Cannon",
        "Book": "Arm 108"
    },
    {
        "Type": "Military Vehicle Armament",
        "Name": "Sabot",
        "Damage": "3(L)+25",
        "Blast area": "-",
        "Force": "-",
        "Ranges": "1200/2400/4800",
        "Capacity": "1",
        "Description": "8 again, AP 40",
        "Weapon Type": "Tank Gun",
        "Book": "Arm 108"
    },
    {
        "Type": "Military Vehicle Armament",
        "Name": "HEAT",
        "Damage": "3(L)+5",
        "Blast area": "4",
        "Force": "5",
        "Ranges": "1000/2000/4000",
        "Capacity": "1",
        "Description": "AP 30",
        "Weapon Type": "Tank Gun",
        "Book": "Arm 108"
    },
    {
        "Type": "Military Vehicle Armament",
        "Name": "Short-range",
        "Damage": "2(L)+3",
        "Blast area": "10",
        "Force": "3",
        "Ranges": "5000/10000/20000",
        "Capacity": "1",
        "Description": "",
        "Weapon Type": "Air-to-Air Missile",
        "Book": "Arm 108"
    },
    {
        "Type": "Military Vehicle Armament",
        "Name": "Long-range",
        "Damage": "2(L)+4",
        "Blast area": "15",
        "Force": "3",
        "Ranges": "9000/18000/36000",
        "Capacity": "1",
        "Description": "",
        "Weapon Type": "Air-to-Air Missile",
        "Book": "Arm 108"
    }
]

const landMinesData = [
    {
        "Type": "Land Mines",
        "Name": "Generic AP Mine, tiny",
        "Blast area": "3",
        "Force": "2(L)",
        "Size": "1",
        "Cost": "N/A",
        "Description": "Stun",
        "Weapon Type": "Anti-Personnel",
        "Book": "Arm 118"
    },
    {
        "Type": "Land Mines",
        "Name": "Generic AP Mine",
        "Blast area": "6",
        "Force": "3(L)",
        "Size": "2",
        "Cost": "N/A",
        "Description": "Stun",
        "Weapon Type": "Anti-Personnel",
        "Book": "Arm 118"
    },
    {
        "Type": "Land Mines",
        "Name": "M14 'Toe Popper'",
        "Blast area": "3",
        "Force": "2(L)",
        "Size": "1",
        "Cost": "N/A",
        "Description": "Stun, 9-again",
        "Weapon Type": "Anti-Personnel",
        "Book": "Arm 118"
    },
    {
        "Type": "Land Mines",
        "Name": "M16 'Bouncing Betty'",
        "Blast area": "12",
        "Force": "4",
        "Size": "2",
        "Cost": "N/A",
        "Description": "Knockdown",
        "Weapon Type": "Anti-Personnel",
        "Book": "Arm 118"
    },
    {
        "Type": "Land Mines",
        "Name": "M18 Claymore",
        "Blast area": "10, directional",
        "Force": "4(L)",
        "Size": "2",
        "Cost": "N/A",
        "Description": "9-again, Knockdown",
        "Weapon Type": "Anti-Personnel",
        "Book": "Arm 118"
    },
    {
        "Type": "Land Mines",
        "Name": "Generic AT Mine",
        "Blast area": "5",
        "Force": "5",
        "Size": "3",
        "Cost": "N/A",
        "Description": "Knockdown, AP 20",
        "Weapon Type": "Anti-Armor",
        "Book": "Arm 118"
    },
    {
        "Type": "Land Mines",
        "Name": "Anti-Tempering Device, box of",
        "Blast area": "12",
        "Force": "0",
        "Size": "1",
        "Cost": "1",
        "Description": "",
        "Weapon Type": "Anti-Armor",
        "Book": "Arm 118"
    }
]

const toxinsData = [
    {
        "Name": "Ammonia",
        "Application": "Inhalation",
        "Toxicity Rating": "3",
        "Weapon Type": "Toxin",
        "Book": "WoD 181"
    },
    {
        "Name": "Bleach",
        "Application": "Ingestion",
        "Toxicity Rating": "4",
        "Weapon Type": "Toxin",
        "Book": "WoD 181"
    },
    {
        "Name": "Cyanide",
        "Application": "Ingestion, Inhalation",
        "Toxicity Rating": "7",
        "Weapon Type": "Toxin",
        "Book": "WoD 181"
    },
    {
        "Name": "Drug/Alcohol Abuse",
        "Application": "Ingestion, Inhalation, Injection",
        "Toxicity Rating": "3-7",
        "Weapon Type": "Toxin",
        "Book": "WoD 181"
    },
    {
        "Name": "Salmonella",
        "Application": "Ingestion",
        "Toxicity Rating": "2",
        "Weapon Type": "Toxin",
        "Book": "WoD 181"
    },
    {
        "Name": "Venom",
        "Application": "Injection, Ingestion",
        "Toxicity Rating": "3-8",
        "Weapon Type": "Toxin",
        "Book": "WoD 181"
    },
    {
        "Name": "Anthrax",
        "Application": "Inhalation, Ingestion, Injection",
        "Toxicity": "4",
        "Weapon Type": "Biological Weapon",
        "Book": "Arm 122"
    },
    {
        "Name": "Ricin",
        "Application": "Inhalation, Ingestion, Injection",
        "Toxicity": "8",
        "Weapon Type": "Biological Weapon",
        "Book": "Arm 123"
    },
    {
        "Name": "Mustard",
        "Application": "Inhalation",
        "Toxicity": "4",
        "Weapon Type": "Biological Weapon",
        "Book": "Arm 123"
    },
    {
        "Name": "Hydrogen Cyanide",
        "Application": "Inhalation, Ingestion",
        "Toxicity": "6",
        "Weapon Type": "Biological Weapon",
        "Book": "Arm 124"
    },
    {
        "Name": "Phosgene",
        "Application": "Ingestion",
        "Toxicity": "5",
        "Weapon Type": "Biological Weapon",
        "Book": "Arm 124"
    },
    {
        "Name": "Sarin",
        "Application": "Ingestion",
        "Toxicity": "8",
        "Weapon Type": "Biological Weapon",
        "Book": "Arm 124"
    },
    {
        "Name": "VX",
        "Application": "Inhalation, Ingestion, Injection",
        "Toxicity": "8",
        "Weapon Type": "Biological Weapon",
        "Book": "Arm 124"
    },
    {
        "Name": "Rat Poison",
        "Application": "Ingestion",
        "Toxicity": "2",
        "Weapon Type": "Biological Weapon",
        "Book": "Arm 124"
    },
    {
        "Name": "Rat Poison",
        "Application": "Ingestion",
        "Toxicity": "2",
        "Weapon Type": "Biological Weapon",
        "Book": "Arm 125"
    },
    {
        "Name": "Bug Bomb",
        "Application": "Inhalation, Ingestion",
        "Toxicity": "1+",
        "Weapon Type": "Biological Weapon",
        "Book": "Arm 125"
    },
    {
        "Name": "Kolokol-1",
        "Application": "Inhalation",
        "Toxicity": "8",
        "Weapon Type": "Non-Lethal Chemical Agents",
        "Book": "Arm 125"
    },
    {
        "Name": "BZ",
        "Application": "",
        "Toxicity": "4",
        "Weapon Type": "Non-Lethal Chemical Agents",
        "Book": "Arm 125"
    },
    {
        "Name": "Tear Gas",
        "Application": "",
        "Toxicity": "3-2",
        "Weapon Type": "Non-Lethal Chemical Agents",
        "Book": "Arm 125"
    }
]

const biologicalWeaponsData = [

]

const meleeWeaponData = [...bluntWeaponData, ...kniveWeaponData, ...swordWeaponData, ...axeWeaponData, ...polearmWeaponData,
...chainWeaponData, ...improvisedWeaponData, ...miscellaneousWeaponData, ...foundRiggedWeaponsData]

const rangedWeaponData = [...revolverWeaponData,
...autoloadersWeaponData, ...rifleData, ...submachineGunData, ...assaultRifleData, ...shotgunsData,
...machineGunData, ...archaicFirearmData, ...miscellaneousRangedData, ...thrownWeaponData, ...mountedWeaponsData]

export {
    bluntWeaponData, kniveWeaponData, swordWeaponData, axeWeaponData, polearmWeaponData,
    chainWeaponData, improvisedWeaponData, miscellaneousWeaponData, foundRiggedWeaponsData, revolverWeaponData,
    autoloadersWeaponData, rifleData, submachineGunData, assaultRifleData, shotgunsData,
    machineGunData, archaicFirearmData, miscellaneousRangedData, thrownWeaponData, mountedWeaponsData, arrowsData,
    bulletsData, shotgunSpecificsData, standardExplosivesData, explosiveData, grenadesData, grenadeLauncherData,
    grenadeAmmunitionData, artilleryShellData, rocketMissileData, militaryVehicleArmamentData, toxinsData, landMinesData,
    meleeWeaponData, rangedWeaponData
}

