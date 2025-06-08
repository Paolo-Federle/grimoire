const clanData = [
    {
        "Name": "Daeva",
        "Nickname": "Succubi",
        "Disciplines": "Celerity, Majesty, Vigor",
        "Bonus Trait": "Dexterity or Manipulation",
        "Clan Disciplines": "Celerity, Majesty, Vigor",
        "Weakness": "Lose 2 Willpower points when passing up a chance to indulge Vice.",
        "Book": "VTR 104"
    },
    {
        "Name": "Gangrel",
        "Nickname": "Savages",
        "Disciplines": "Animalism, Protean, Resilience",
        "Bonus Trait": "Composure or Stamina",
        "Clan Disciplines": "Animalism, Protean, Resilience",
        "Weakness": "No 10-again and 1s penalize on Intelligence or Wits rolls",
        "Book": "VTR 106"
    },
    {
        "Name": "Mekhet",
        "Nickname": "Shadows",
        "Disciplines": "Auspex, Celerity, Obfuscate",
        "Bonus Trait": "Intelligence or Wits",
        "Clan Disciplines": "Auspex, Celerity, Obfuscate",
        "Weakness": "+1 damage from sunlight and fire",
        "Book": "VTR 108"
    },
    {
        "Name": "Nosferatu",
        "Nickname": "Haunts",
        "Disciplines": "Nightmare, Obfuscate, Vigor",
        "Bonus Trait": "Composure or Strength",
        "Clan Disciplines": "Nightmare, Obfuscate, Vigor",
        "Weakness": "No 10-again and 1s penalize on Presence or Manipulation rolls",
        "Book": "VTR 110"
    },
    {
        "Name": "Ventrue",
        "Nickname": "Lords",
        "Disciplines": "Animalism, Dominate, Resilience",
        "Bonus Trait": "Presence or Resolve",
        "Clan Disciplines": "Animalism, Dominate, Resilience",
        "Weakness": "–2 on rolls to avoid gaining a Derangement after Degeneration",
        "Book": "VTR 112"
    },
    {
        "Name": "Restricted",
        "Nickname": "N/A",
        "Disciplines": "N/A",
        "Bonus Trait": "N/A",
        "Clan Disciplines": "N/A",
        "Weakness": "N/A",
        "Book": "N/A"
    },
    {
        "Name": "Akhud",
        "Nickname": "",
        "Disciplines": "Celerity, Praestantia, Obfuscate",
        "Bonus Trait": "Strength or Wits",
        "Clan Disciplines": "Celerity, Praestantia, Obfuscate",
        "Weakness": "Can't harm or betray another Ahranite and hear whispers of Shaddad",
        "Book": "VII 32"
    },
    {
        "Name": "House Petrovnavich",
        "Nickname": "",
        "Disciplines": "Auspex, Dominate, Vigor",
        "Bonus Trait": "Intelligence or Wits",
        "Clan Disciplines": "Auspex, Dominate, Vigor",
        "Weakness": "No 10-again on specific Presence, Manipulation or Persuasion rolls, Social penalty when without status merit",
        "Book": "VII 86"
    },
    {
        "Name": "House Semeonovic",
        "Nickname": "",
        "Disciplines": "Auspex, Majesty, Resilience",
        "Bonus Trait": "Presence or Resolve",
        "Clan Disciplines": "Auspex, Majesty, Resilience",
        "Weakness": "Must spend Willpower to enter places consecrated in the name of God or Allah",
        "Book": "VII 89"
    },
    {
        "Name": "House Alexander",
        "Nickname": "",
        "Disciplines": "Nightmare, Protean, Vigor",
        "Bonus Trait": "Manipulation or Stamina",
        "Clan Disciplines": "Nightmare, Protean, Vigor",
        "Weakness": "Lose 2 Willpower points when passing up a chance to indulge Vice and automatic derangements when Humanity is below 5 and 3",
        "Book": "VII 92"
    },
    {
        "Name": "House Grigorovich",
        "Nickname": "",
        "Disciplines": "Celerity, Obfuscate, Protean",
        "Bonus Trait": "Composure or Wits",
        "Clan Disciplines": "Celerity, Obfuscate, Protean",
        "Weakness": "Can't possess Heaven or City status merits, loses willpower when sleeps for too long on the same place",
        "Book": "VII 95"
    },
    {
        "Name": "House Irinavici",
        "Nickname": "",
        "Disciplines": "Auspex, Majesty, Nightmare",
        "Bonus Trait": "Intelligence or Manipulation",
        "Clan Disciplines": "Auspex, Majesty, Nightmare",
        "Weakness": "Must gain benefit or vicotry in every scene or lose willpower, if fails a roll when using Willpower then can't use it for the rest of the scene",
        "Book": "VII 98"
    },
    {
        "Name": "House Marisovich",
        "Nickname": "",
        "Disciplines": "Auspex, Dominate, Obfuscate",
        "Bonus Trait": "Composure or Resolve",
        "Clan Disciplines": "Auspex, Dominate, Obfuscate",
        "Weakness": "Must spend willpower to avoid investigating supernatural encounters and his occult dot decrease his maximum humanity score",
        "Book": "VII 101"
    },
    {
        "Name": "Historical",
        "Nickname": "N/A",
        "Disciplines": "N/A",
        "Bonus Trait": "N/A",
        "Clan Disciplines": "N/A",
        "Weakness": "N/A",
        "Book": "N/A"
    },
    {
        "Name": "Julii",
        "Nickname": "Founders",
        "Disciplines": "Animalism, Dominate, Resilience",
        "Bonus Trait": "Presence or Resolve",
        "Clan Disciplines": "",
        "Weakness": "–2 on Degeneration rolls",
        "Book": "RfRome 92"
    }
]

export { clanData };

export const Clans = clanData
    .filter(item => item["Nickname"] !== "N/A")
    .map(item => item["Name"]);