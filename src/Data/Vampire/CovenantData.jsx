const covenantData = [
    {
        "Name": "Carthian Movement",
        "Description": "The Carthian Movement applies mortal solutions to immortal problems with modern and experimental government.",
        "Advantage": "Merit discount",
        "Book": "VTR 46-48"
    },
    {
        "Name": "Circle of the Crone",
        "Description": "The Circle of the Crone venerates female divinity, painful change, and the old ways remixed for the modern world.",
        "Advantage": "Crúac",
        "Book": "VTR 49-52"
    },
    {
        "Name": "Invictus",
        "Description": "The Invictus safeguards the Masquerade with hierarchy and tradition.",
        "Advantage": "Merit discount",
        "Book": "VTR 53-56"
    },
    {
        "Name": "Lancea et Sanctum",
        "Description": "The Lancea et Sanctum preaches a dark faith as both wolves and shepherds.",
        "Advantage": "Theban Sorcery",
        "Book": "VTR 57-61"
    },
    {
        "Name": "Ordo Dracul",
        "Description": "The Ordo Dracul struggles to transcend the Curse through eldritch alchemies and rites.",
        "Advantage": "Coils of the Dragon",
        "Book": "VTR 62-66"
    },
    {
        "Name": "Antagonistic",
        "Description": "N/A",
        "Advantage": "N/A",
        "Book": "N/A"
    },
    {
        "Name": "Belial's Brood",
        "Description": "Belial's Brood identify with the Beast and feed its will with bloody crimes.",
        "Advantage": "Investments",
        "Book": "VTR 70, BB"
    },
    {
        "Name": "VII",
        "Description": "Clan Akhud, bound by blood to their clanmates and to a demon in their blood calling for the destruction of the Kindred.",
        "Advantage": "Ahranite Sorcery",
        "Book": "VII 26-67"
    },
    {
        "Name": "VII",
        "Description": "Haunted descendants of a Slavic ghoul-king, burning for vengeance upon the Kindred.",
        "Advantage": "Specters",
        "Book": "VII 70-117"
    },
    {
        "Name": "VII",
        "Description": "Puppets of a self-propagating sleeper organization, subverted by psychic surgery to cleanse the Damned.",
        "Advantage": "Psychogenics",
        "Book": "VII 120-165"
    },
    {
        "Name": "UnName",
        "Description": "Description",
        "Advantage": "Advantage",
        "Book": "Book"
    },
    {
        "Name": "Brethren of the Hundred Faces",
        "Description": "The Face Brethren shed the foolishness of the Beast by installing and cooperating with the personalities of elder Brethren.",
        "Advantage": "Pilot",
        "Book": "DM 81-86"
    },
    {
        "Name": "Brides of Dracula",
        "Description": "A Kindred biker club which raises hell as it travels domains.",
        "Advantage": "Devotions",
        "Book": "DM 87-91"
    },
    {
        "Name": "Children of the Thorns",
        "Description": "Vampires whose blood has been changed by the touch of the otherworldly Bloody Mary, who resides on the other side of the mirror.",
        "Advantage": "Mirror Travel",
        "Book": "DM 92-97"
    },
    {
        "Name": "Harbingers",
        "Description": "The Harbingers study how to manipulate the energies of death to escape the weight of torpor.",
        "Advantage": "Thanatology",
        "Book": "DM 98-104"
    },
    {
        "Name": "Holy Engineers",
        "Description": "The God Talkers receive prophetic communications by what they believe is the will of the Angel of Death.",
        "Advantage": "Radio Sickness",
        "Book": "DM 105-110"
    },
    {
        "Name": "Nemites",
        "Description": "The Priesthood of Nemi are a love-bombing cult who believe Majesty, Dominate, and the Vinculum imbue truer and more meaningful bonds than natural emotions do.",
        "Advantage": "Merit discount",
        "Book": "DM 111-116"
    },
    {
        "Name": "Order Of Sin-Eaters",
        "Description": "A group that removes the sins of others.",
        "Advantage": "Hamartiaphage",
        "Book": "Myth 56-58 59-60"
    },
    {
        "Name": "Society of the Accord",
        "Description": "A counterculture covenant that seeks a cooperative balance between Man and Beast within.",
        "Advantage": "Treaties of Negotiation",
        "Book": "DM 117-121"
    },
    {
        "Name": "Sun-Walking Knights",
        "Description": "A covenant of vessels, ghouls and vampires seeking a constructive balance of power through mutual offerings.",
        "Advantage": "Washing the Shadow",
        "Book": "DM 122-125"
    },
    {
        "Name": "Broken",
        "Description": "N/A",
        "Advantage": "AdvaN/Antage",
        "Book": "N/A"
    },
    {
        "Name": "Cult of Augurs",
        "Description": "The Camarilla's Wing of Prophets, who supplicate the gods and advise through prophecy.",
        "Advantage": "Veneficia",
        "Book": "RfR 80-83"
    },
    {
        "Name": "Legio Mortuum",
        "Description": "The Camarilla's Legion, who police Necropolis and battle its enemies.",
        "Advantage": "Merit discount",
        "Book": "RfR 76-79"
    },
    {
        "Name": "Peregrine Collegia",
        "Description": "The Camarilla's Wing of Strangers, who trade services outside the halls of power.",
        "Advantage": "Merit discount",
        "Book": "RfR 84-87"
    },
    {
        "Name": "Senex",
        "Description": "The Camarilla's Wing of Ancients, its elite legislative body.",
        "Advantage": "Merit discount",
        "Book": "RfR 71-75"
    },
    {
        "Name": "Alternate",
        "Description": "N/A",
        "Advantage": "N/A",
        "Book": "N/A"
    },
    {
        "Name": "Namewealth",
        "Description": "The Carthians at a greater scale, steeped in mad social engineering plans to serve the needs of the Blood.",
        "Advantage": "Status benefits",
        "Book": "DM 65-67"
    },
    {
        "Name": "Covenant",
        "Description": "The Sanctified at a greater scale, an armageddon cult with its own Beast of Revelation.",
        "Advantage": "Theban Sorcery",
        "Book": "DM 68-70"
    },
    {
        "Name": "Devil's Eye",
        "Description": "The Dragons at a greater scale, a secret inner circle which experiments on other vampires under Dracula's supervision.",
        "Advantage": "Coils of the Devil",
        "Book": "DM 71-73"
    },
    {
        "Name": "Mother's Army",
        "Description": "The Acolytes at a greater scale, who channel the will of the Crone and seek to awaken her inhuman children.",
        "Advantage": "Crúac",
        "Book": "DM 74-76"
    },
    {
        "Name": "Prima Invicta",
        "Description": "The Invictus at a greater scale, backstabbing mortal and vampire alike to seize every rein of power.",
        "Advantage": "Status benefits",
        "Book": "DM 77-80"
    }
]

export { covenantData }


export const Coventants = covenantData
    .filter(item => item["Description"] !== "N/A")
    .map(item => item["Name"]);