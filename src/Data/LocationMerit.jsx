const securedLocationData = [
    {
        "Name": "Bastion",
        "Dots": "(• to •••••) {Size, Amenities, Battlements} (SH)",
        "Book": "SaD p108",
        "Description": "Changeling Motley Dream Fortress"
    },
    {
        "Name": "Den",
        "Dots": "(•••)",
        "Book": "Skin p21, ChB p96",
        "Description": "Skinthief or Changing Breed"
    },
    {
        "Name": "Haunt",
        "Dots": "(• to •••••) {Fluidity, Residue, Utility} (SH)",
        "Book": "GtSE p87",
        "Description": "Sin-Eater"
    },
    {
        "Name": "Haven",
        "Dots": "(• to •••••)",
        "Book": "VtR p100",
        "Description": "Vampire"
    },
    {
        "Name": "Hollow",
        "Dots": "(• to •••••) {Size, Amenities, Doors, Wards} (SH)",
        "Book": "CtL p94",
        "Description": "Changeling"
    },
    {
        "Name": "Lair",
        "Dots": "(• to •••) (SH)",
        "Book": "PtC p96",
        "Description": "Promethean"
    },
    {
        "Name": "Safehouse",
        "Dots": "(• to •••••) {Cache, Secrecy, Size, Traps}",
        "Book": "H:tV p71",
        "Description": "Hunter"
    },
    {
        "Name": "Sanctum",
        "Dots": "(• to •••••) {Security, Size} (SH)",
        "Book": "M:tA p86",
        "Description": "Mage"
    },
    {
        "Name": "Temple",
        "Dots": "(• to •••••)",
        "Book": "CoC p42",
        "Description": "Circle of the Crone"
    },
]

const universalFixturesData = [
    {
        "Name": "Archive",
        "Dots": "(• to •••••)",
        "Book": "RoS p87",
        "Description": "Every dot is single topic, cuts study time."
    },
    {
        "Name": "Sanctum Materials",
        "Dots": "(• to •••••)",
        "Book": "S&S p86",
        "Description": "increase strength of structure"
    },
    {
        "Name": "Portable",
        "Dots": "(•)",
        "Book": "Myst p141",
        "Description": "change location, personal only"
    },
    {
        "Name": "Geomantic Nexus",
        "Dots": "(• to •••••) Size and (• to •••) +1 attribute per dot",
        "Book": "Ordo p202",
        "Description": "Fung Shui"
    },
    {
        "Name": "Guardian Retainer",
        "Dots": "(• to •••••) (mult)",
        "Book": "S&S p85",
        "Description": "armed guard"
    },
    {
        "Name": "Library",
        "Dots": "(• to •••••) (SH)",
        "Book": "M:tA p85",
        "Description": "1/dot topics of research"
    },
    {
        "Name": "Security",
        "Dots": "(• to •••••)",
        "Book": "VtR p100, PtC p96, MtA p86",
        "Description": "+1 intiative against break-ins per dot."
    },
    {
        "Name": "Size",
        "Dots": "(• to •••••)",
        "Book": "VtR p100, PtC p96, MtA p86, CtL p95",
        "Description": "• - 1-2 rooms, •• - 3-4 rooms, ••• - 5-8 rooms, •••• - 9-15 rooms, ••••• - Countless rooms"
    }
]

const vampireLocationData = [
    {
        "Name": "Location",
        "Dots (*pre: Haven)": "(• to •••••)",
        "Book": "VtR p100",
        "Description": "+1 bonus to hunting per dot for owner and invitees."
    },
    {
        "Name": "Occultation",
        "Dots (*pre: Haven)": "(• to •••••) *pre: Haven Size ••• or less",
        "Book": "Mehket 119",
        "Description": "Penalizes attempts to find the Haven"
    },
    {
        "Name": "Temple Library",
        "Dots (*pre: Haven)": "(• to •••••) *pre: Temple",
        "Book": "CoC p42",
        "Description": ""
    }
]

const mageLocationData = [
    {
        "Name": "Alchemical Lab",
        "Dots (*pre: Sanctum)": "(• to •••••) (SH)",
        "Book": "TotM p146",
        "Description": "resources to produce Gross Matter"
    },
    {
        "Name": "Guardian Ghost",
        "Dots (*pre: Sanctum)": "(•• to •••••) (mult)",
        "Book": "S&S p85",
        "Description": "bound Ghost"
    },
    {
        "Name": "Guardian Spirit",
        "Dots (*pre: Sanctum)": "(•• to •••••) (mult)",
        "Book": "S&S p86",
        "Description": "bound Spirit"
    },
    {
        "Name": "Hallow",
        "Dots (*pre: Sanctum)": "(• to •••••) (SH)",
        "Book": "M:tA p83",
        "Description": "upwelling of Mana"
    },
    {
        "Name": "Sanctum Gauntlet",
        "Dots (*pre: Sanctum)": "(• to ••)",
        "Book": "S&S p86",
        "Description": "+/- 1/dot Gauntlet"
    },
    {
        "Name": "Scriptorium",
        "Dots (*pre: Sanctum)": "(•• to •••••) (SH)",
        "Book": "Myst p67",
        "Description": "reduce cost to learn Rotes"
    },
    {
        "Name": "Summoning Circle",
        "Dots (*pre: Sanctum)": "(• to •••)",
        "Book": "Summ p185",
        "Description": "attuned circle to particular realm"
    }
]

const changelingLocationData = [
    {
        "Name": "Amenities",
        "Dots (*pre: Hollow)": "(• to •••••)",
        "Book": "CtL p95",
        "Description": "How comfortable the Hollow is."
    },
    {
        "Name": "Doors",
        "Dots (*pre: Hollow)": "(• to •••••)",
        "Book": "CtL p95",
        "Description": "Add doors in Hedge and on Earth."
    },
    {
        "Name": "Hob Kin",
        "Dots (*pre: Hollow)": "(••)",
        "Book": "RoS p92",
        "Description": "Hobgoblins protect your Hollow."
    },
    {
        "Name": "Ritual Doorway",
        "Dots (*pre: Hollow)": "(•••) *pre: Doors •••••",
        "Book": "RoS p95",
        "Description": "Enter from anywhere on Earth. One way."
    },
    {
        "Name": "Wards",
        "Dots (*pre: Hollow)": "(• to •••••)",
        "Book": "CtL p95",
        "Description": "Ability to hide and fortify Hollow"
    },
    {
        "Name": "Workshop",
        "Dots (*pre: Hollow)": "(• to •••••) *pre: Size >= Workshop",
        "Book": "RoS p97",
        "Description": "Space and tools for various crafts, 1/dot"
    },
    {
        "Name": "Mobile Hollow",
        "Dots (*pre: Hollow)": "(• to •••••)",
        "Book": "SaD p92",
        "Description": "More dots = further and faster, more control"
    },
]

const changelingBastionsData = [
    {
        "Name": "Amenities",
        "Dots (*pre: Must belong to a Motley of 3 or more with specialty in Oneiromancy)": "(• to •••••)",
        "Book": "SaD p108",
        "Description": "How comfortable the Bastion is."
    },
    {
        "Name": "Battlements",
        "Dots (*pre: Must belong to a Motley of 3 or more with specialty in Oneiromancy)": "(• to •••••)",
        "Book": "CtL p. 198",
        "Description": "10 points of damage per •, ranged attacks allowed"
    }
]

const werewolfTerritoryData = [
    {
        "Name": "Ambush Site",
        "Dots": "(•)",
        "Book": "Territories 40",
        "Description": ""
    },
    {
        "Name": "Apartment Building",
        "Dots": "(•)",
        "Book": "Territories 27",
        "Description": ""
    },
    {
        "Name": "Arcane",
        "Dots": "(+•)",
        "Book": "Territories 40",
        "Description": ""
    },
    {
        "Name": "Artic",
        "Dots": "-",
        "Book": "Territories 46",
        "Description": ""
    },
    {
        "Name": "Barren",
        "Dots": "-",
        "Book": "Territories 37",
        "Description": ""
    },
    {
        "Name": "Big Box Store",
        "Dots": "(•)",
        "Book": "Territories 27",
        "Description": ""
    },
    {
        "Name": "Catalyst",
        "Dots": "(•)",
        "Book": "Territories 37",
        "Description": ""
    },
    {
        "Name": "Caverns/Tunnels",
        "Dots": "(•)",
        "Book": "Territories 19",
        "Description": ""
    },
    {
        "Name": "Cemetary",
        "Dots": "(•)",
        "Book": "Territories 33",
        "Description": ""
    },
    {
        "Name": "Church",
        "Dots": "(•)",
        "Book": "Territories 33",
        "Description": ""
    },
    {
        "Name": "Cliff/Ridge",
        "Dots": "(•)",
        "Book": "Territories 19",
        "Description": ""
    },
    {
        "Name": "Club or Bar",
        "Dots": "(••)",
        "Book": "Territories 28",
        "Description": ""
    },
    {
        "Name": "Contested",
        "Dots": "(-•)",
        "Book": "Territories 41",
        "Description": ""
    },
    {
        "Name": "Criminal District",
        "Dots": "(•)",
        "Book": "Territories 34",
        "Description": ""
    },
    {
        "Name": "Desert",
        "Dots": "(•)",
        "Book": "Territories 19",
        "Description": ""
    },
    {
        "Name": "Dry",
        "Dots": "-",
        "Book": "Territories 46",
        "Description": ""
    },
    {
        "Name": "Empty Building",
        "Dots": "(•)",
        "Book": "Territories 34",
        "Description": ""
    },
    {
        "Name": "Essence Current/Ley Line",
        "Dots": "(+•)",
        "Book": "Territories 41",
        "Description": ""
    },
    {
        "Name": "Fallow Prairie",
        "Dots": "(•)",
        "Book": "Territories 21",
        "Description": ""
    },
    {
        "Name": "Factory",
        "Dots": "(•)",
        "Book": "Territories 29",
        "Description": ""
    },
    {
        "Name": "Factory Farm",
        "Dots": "-",
        "Book": "Territories 21",
        "Description": ""
    },
    {
        "Name": "Farm",
        "Dots": "(• or ••)",
        "Book": "Territories 21",
        "Description": ""
    },
    {
        "Name": "Glade",
        "Dots": "(•••)",
        "Book": "Territories 38",
        "Description": ""
    },
    {
        "Name": "Haunted",
        "Dots": "(+•)",
        "Book": "Territories 42",
        "Description": ""
    },
    {
        "Name": "High",
        "Dots": "-",
        "Book": "Territories 46",
        "Description": ""
    },
    {
        "Name": "Highway",
        "Dots": "(•)",
        "Book": "Territories 34",
        "Description": ""
    },
    {
        "Name": "Houses/Housing",
        "Dots": "(•)",
        "Book": "Territories 29",
        "Description": ""
    },
    {
        "Name": "Hospital",
        "Dots": "(•••)",
        "Book": "Territories 35",
        "Description": ""
    },
    {
        "Name": "Landfill or Garbage Dump",
        "Dots": "(••)",
        "Book": "Territories 22",
        "Description": ""
    },
    {
        "Name": "Locus",
        "Dots": "(• to •••••)",
        "Book": "Territories 38",
        "Description": ""
    },
    {
        "Name": "Mall/Strip Mall",
        "Dots": "(•)",
        "Book": "Territories 29",
        "Description": ""
    },
    {
        "Name": "Media Center",
        "Dots": "(+•)",
        "Book": "Territories 42",
        "Description": ""
    },
    {
        "Name": "Military Base",
        "Dots": "(•••)",
        "Book": "Territories 35",
        "Description": ""
    },
    {
        "Name": "Mountain",
        "Dots": "(••)",
        "Book": "Territories 22",
        "Description": ""
    },
    {
        "Name": "Museum/Library",
        "Dots": "(•)",
        "Book": "Territories 30",
        "Description": ""
    },
    {
        "Name": "Neutral Ground",
        "Dots": "-",
        "Book": "Territories 43",
        "Description": ""
    },
    {
        "Name": "Notorious",
        "Dots": "-",
        "Book": "Territories 42",
        "Description": ""
    },
    {
        "Name": "Ocean/Sea/Great Lake",
        "Dots": "(•)",
        "Book": "Territories 23",
        "Description": ""
    },
    {
        "Name": "Office Building/Skyscraper",
        "Dots": "(•)",
        "Book": "Territories 30",
        "Description": ""
    },
    {
        "Name": "Park",
        "Dots": "(•)",
        "Book": "Territories 30",
        "Description": ""
    },
    {
        "Name": "Pond/Lake/Lakefront",
        "Dots": "(•)",
        "Book": "Territories 24",
        "Description": ""
    },
    {
        "Name": "Poor",
        "Dots": "(+•)",
        "Book": "Territories 44",
        "Description": ""
    },
    {
        "Name": "Pure",
        "Dots": "(-••)",
        "Book": "Territories 44",
        "Description": ""
    },
    {
        "Name": "Rich",
        "Dots": "(+•)",
        "Book": "Territories 45",
        "Description": ""
    },
    {
        "Name": "River/Riverside",
        "Dots": "(•)",
        "Book": "Territories 24",
        "Description": ""
    },
    {
        "Name": "Sanguine",
        "Dots": "(+•)",
        "Book": "Territories 45",
        "Description": ""
    },
    {
        "Name": "Shoal",
        "Dots": "-",
        "Book": "Territories 38",
        "Description": ""
    },
    {
        "Name": "Shop or Restaurant",
        "Dots": "(•)",
        "Book": "Territories 31",
        "Description": ""
    },
    {
        "Name": "Spring",
        "Dots": "(••)",
        "Book": "Territories 24",
        "Description": ""
    },
    {
        "Name": "Stadium or Arena",
        "Dots": "(•)",
        "Book": "Territories 31",
        "Description": ""
    },
    {
        "Name": "Stream",
        "Dots": "(•)",
        "Book": "Territories 25",
        "Description": ""
    },
    {
        "Name": "Swamp/Marsh/Wetland",
        "Dots": "(••)",
        "Book": "Territories 25",
        "Description": ""
    },
    {
        "Name": "Theater/Opera House",
        "Dots": "(•)",
        "Book": "Territories 33",
        "Description": ""
    },
    {
        "Name": "Tropical",
        "Dots": "-",
        "Book": "Territories 46",
        "Description": ""
    },
    {
        "Name": "University or Postsecondary School",
        "Dots": "(••)",
        "Book": "Territories 36",
        "Description": ""
    },
    {
        "Name": "Utilities",
        "Dots": "(•)",
        "Book": "Territories 36",
        "Description": ""
    },
    {
        "Name": "Verge",
        "Dots": "-",
        "Book": "Territories 39",
        "Description": ""
    },
    {
        "Name": "Virgin",
        "Dots": "(+••)",
        "Book": "Territories 45",
        "Description": ""
    },
    {
        "Name": "Wet",
        "Dots": "-",
        "Book": "Territories 46",
        "Description": ""
    },
    {
        "Name": "Window",
        "Dots": "(•)",
        "Book": "Territories 39",
        "Description": ""
    },
    {
        "Name": "Woods/Forest",
        "Dots": "(••)",
        "Book": "Territories 26",
        "Description": ""
    },
    {
        "Name": "Wound",
        "Dots": "-",
        "Book": "Territories 39",
        "Description": ""
    }
]

const baronyLocationData = [
    {
        "Name": "Cant Fluency",
        "Dots": "(·) *Pre: Politics · or Occult · or Streetwise ·",
        "Book": "DC p200",
        "Description": ""
    },
    {
        "Name": "Cant Savvy",
        "Dots": "(··) Pre: Intelligence ·· and Politics · or Occult · or Streetwise ·",
        "Book": "DC p200",
        "Description": ""
    },
    {
        "Name": "Connections",
        "Dots": "(· to ·····) Pre: Presence ·· and Politics ·· or Streetwise ···",
        "Book": "DC p200",
        "Description": ""
    },
    {
        "Name": "Domain",
        "Dots": "(· to ·····) Pre: Fealty Flaw",
        "Book": "DC p200",
        "Description": ""
    },
    {
        "Name": "Feeding Ground",
        "Dots": "(· to ·····) Pre: Fealty Flaw (for ···· and ····· only)",
        "Book": "DC p202",
        "Description": ""
    },
    {
        "Name": "Site",
        "Dots": "(· to ·····)",
        "Book": "DC p202",
        "Description": ""
    },
    {
        "Name": "Tenant",
        "Dots": "(· to ·····) Pre: Domain Size per merit, Fealty Flaw",
        "Book": "DC p202",
        "Description": ""
    },
    {
        "Name": "Vassal",
        "Dots": "(· to ·····) Pre: Domain Size per merit, Fealty Flaw",
        "Book": "DC p203",
        "Description": ""
    }
]

export {
    securedLocationData, universalFixturesData, vampireLocationData, mageLocationData, changelingLocationData,
    changelingBastionsData, werewolfTerritoryData, baronyLocationData
}