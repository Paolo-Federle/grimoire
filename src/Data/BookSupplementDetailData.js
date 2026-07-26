const WIKI_BASE_URL = "https://whitewolf.fandom.com/wiki/";

function defineBook(pages, sourceSlug, chapterRows) {
  return {
    pages,
    sourceUrl: `${WIKI_BASE_URL}${sourceSlug}`,
    chapters: chapterRows.map(([title, summary]) => ({ title, summary })),
  };
}

function definePartialBook(pages, sourceSlug, chapterRows) {
  return {
    ...defineBook(pages, sourceSlug, chapterRows),
    chapterOverviewPartial: true,
  };
}

export const BOOK_SUPPLEMENT_DETAILS_BY_CODE = {
  Ant: defineBook(132, "World_of_Darkness%3A_Antagonists", [
    [
      "Chapter One: The Living Dead",
      "Presents several forms of walking dead, including zombies, revenants and other unnatural survivors.",
    ],
    [
      "Chapter Two: A Need for Vengeance",
      "Examines monster hunters, the experiences that drive them and the methods they use against supernatural threats.",
    ],
    [
      "Chapter Three: The Righteous and the Wicked",
      "Explores cults built around supernatural beings, from their formation and beliefs to the dangers they create.",
    ],
    [
      "Chapter Four: Fear Given Form",
      "Provides a flexible process for designing original monsters, followed by examples and story hooks.",
    ],
  ]),
  Arm: defineBook(216, "World_of_Darkness%3A_Armory", [
    [
      "Chapter One: Melee Weaponry",
      "Expands close-combat weapons, improvised tools and the rules used when violence becomes immediate and personal.",
    ],
    [
      "Chapter Two: Firearms and Ranged Weaponry",
      "Covers pistols, rifles and other ranged weapons, together with the tactics and complications of firearm use.",
    ],
    [
      "Chapter Three: Tactical and Heavy Weaponry",
      "Moves into explosives, heavy weapons and chemical, biological or nuclear hazards.",
    ],
    [
      "Chapter Four: Vehicles",
      "Develops vehicles and chases, from everyday transport to military hardware, as tools for action and horror.",
    ],
    [
      "Chapter Five: Equipment and Accessories",
      "Collects tactical, protective, surveillance and occult equipment, as well as security systems and traps.",
    ],
    [
      "Chapter Six: Weaponry and the World of Darkness",
      "Places weapons in their legal and criminal context, including regulation, access and black-market trade.",
    ],
    [
      "Appendix: Merits",
      "Adds equipment-oriented Merits and new Fighting Styles for characters trained to exploit the armory.",
    ],
  ]),
  CB: defineBook(217, "World_of_Darkness%3A_Changing_Breeds", [
    [
      "Chapter One: The Wild Heart",
      "Introduces the shared legends, instincts and supernatural nature of the changing breeds.",
    ],
    [
      "Chapter Two: Building the Perfect Beast",
      "Provides character-creation rules for ferals, including forms, Aspects and their alienating effect on witnesses.",
    ],
    [
      "Chapter Three: The Breeds Beneath Our Skins",
      "Surveys the principal werebeast families, with their folklore, characteristic traits and talents.",
    ],
    [
      "Chapter Four: Faces in the Smoke",
      "Offers ready-made werebeasts that can serve as player characters, allies or antagonists.",
    ],
  ]),
  Chi: defineBook(424, "World_of_Darkness%3A_Chicago", [
    [
      "Vampire, Chapter 1: State of the Union",
      "Introduces Chicago's Kindred history, supernatural geography and present political condition.",
    ],
    [
      "Vampire, Chapter 2: Chicago’s Damned",
      "Presents the city's vampire ensemble and the relationships that connect its members.",
    ],
    [
      "Vampire, Chapter 3: Hell Calling",
      "Supplies a Vampire story built around the people and conflicts established in the preceding chapters.",
    ],
    [
      "Werewolf, Chapter 1: The Jungle",
      "Describes the city and its history from the perspective of the local Uratha.",
    ],
    [
      "Werewolf, Chapter 2: Wolves of the City",
      "Introduces Chicago's packs, individual werewolves and their contested territories.",
    ],
    [
      "Werewolf, Chapter 3: Fires in the Winter",
      "Provides a Werewolf story rooted in Chicago's spiritual and territorial tensions.",
    ],
    [
      "Mage, Chapter 1: Second Age of the Second City",
      "Outlines Awakened history, important sites and mystical features of Chicago.",
    ],
    [
      "Mage, Chapter 2: Mages of the Second City",
      "Details the city's cabals, factions and notable Awakened residents.",
    ],
    [
      "Mage, Chapter 3: Unreal City",
      "Concludes with a Mage story that puts the local setting and its mysteries into play.",
    ],
  ]),
  GS: defineBook(128, "World_of_Darkness%3A_Ghost_Stories", [
    [
      "Chapter 1: Dust to Dust",
      "A forgotten town attempts to recover its former glory at the expense of those who live there.",
    ],
    [
      "Chapter 2: The Terrifying Tale of James Magnus",
      "A haunted legacy forces the characters to confront the damage left by a cruel and abusive man.",
    ],
    [
      "Chapter 3: No Way Out",
      "A story about despair and the bonds that can keep a desperate soul trapped after death.",
    ],
    [
      "Chapter 4: Roots and Branches",
      "A predatory tree and the murders surrounding it perpetuate a supernatural cycle of violence.",
    ],
    [
      "Chapter 5: Holy Ghost",
      "Explores faith, passion and mercy through a spirit that cannot bring itself to rest.",
    ],
  ]),
  Imm: defineBook(145, "World_of_Darkness%3A_Immortals", [
    [
      "Chapter One: Blood Bathers",
      "Examines occult rituals that preserve life by stealing it through blood and provides rules for creating their practitioners.",
    ],
    [
      "Chapter Two: Body Thieves",
      "Explores immortals who survive by transferring their minds into stolen bodies.",
    ],
    [
      "Chapter Three: The Purified",
      "Presents humans returned from death and bound to spirit, including options for using them as protagonists.",
    ],
    [
      "Chapter Four: Immortal Lives",
      "Collects rarer forms of immortality such as reincarnates, eternal guardians and hunters of other deathless beings.",
    ],
  ]),
  Inf: defineBook(188, "World_of_Darkness%3A_Inferno", [
    [
      "Chapter One: Demonology",
      "Defines demons as embodiments of Vice and organizes their different forms, motives and methods.",
    ],
    [
      "Chapter Two: Infernal Pacts",
      "Covers summoning, bargains with demons and artifacts empowered by infernal influence.",
    ],
    [
      "Chapter Three: The Possessed",
      "Details mortal hosts of demons and the supernatural Vestments that express their corruption.",
    ],
    [
      "Chapter Four: The Hosts of Hell",
      "Provides ready antagonists including demons, the Possessed, pact makers and mortals carrying demonic blood.",
    ],
  ]),
  SoM: defineBook(192, "Shadows_of_Mexico", [
    [
      "Chapter One: Overview",
      "Introduces Mexico's history, regions and supernatural landscape as foundations for a chronicle.",
    ],
    [
      "Chapter Two: Player’s Guide",
      "Offers character and setting options for mortal, Vampire, Werewolf and Mage stories shaped by Mexican culture.",
    ],
    [
      "Chapter Three: Storytelling",
      "Develops the setting's themes, mood and dangers, with guidance for presenting them at the table.",
    ],
    [
      "Chapter Four: Local Powers",
      "Collects factions, rulers, allies and antagonists that can drive stories across the country.",
    ],
  ]),
  SotUK: defineBook(192, "Shadows_of_the_UK", [
    [
      "Chapter One: The Lie of the Land",
      "Surveys the United Kingdom's past and present, including the supernatural forces active across its countries.",
    ],
    [
      "Chapter Two: Keys to the Kingdom",
      "Adapts the Forsaken to the British Isles with local tribes, lodges, Gifts and rites.",
    ],
    [
      "Chapter Three: The Isles by Moonlight",
      "Provides themes, moods and practical advice for stories set in the United Kingdom.",
    ],
    [
      "Chapter Four: Local Powers",
      "Presents influential regional characters who can act as allies, rivals or antagonists.",
    ],
  ]),
  Skin: defineBook(128, "Skinchangers", [
    [
      "Chapter One: Skinners and Thieves",
      "Presents people who sacrifice part of their humanity to take animal form, with rules for creating them.",
    ],
    [
      "Chapter Two: Beasts of Shadow",
      "Explores transformations granted, imposed or corrupted by spirits from the Shadow.",
    ],
    [
      "Chapter Three: Shifting Things",
      "Collects shapeshifting artifacts, diseases, curses and failed experiments.",
    ],
    [
      "Appendix: Animal Lore",
      "Summarizes real and folkloric animal traits as a source of new skinchanger concepts.",
    ],
  ]),

  AM: defineBook(176, "Ancient_Mysteries", [
    [
      "Chapter One: Piercing the Fog of Eternity",
      "Examines the Fog of Eternity, fragmented memories and ways to turn an elder's uncertain past into story material.",
    ],
    [
      "Chapter Two: Unstuck from Time",
      "Explores elders waking after centuries of torpor and provides options for creating and portraying them.",
    ],
    [
      "Chapter Three: Relics of the Past",
      "Offers historical vampires ready to use or adapt in a modern chronicle.",
    ],
    [
      "Chapter Four: Flash Points in History",
      "Visits ten historical eras and considers how their events shaped Kindred who survive into the present.",
    ],
  ]),
  BB: defineBook(160, "Belial's_Brood_(book)", [
    [
      "Chapter One: A History of Vice",
      "Presents the origins, beliefs and contradictory myths of the Forsworn through accounts from those who met them.",
    ],
    [
      "Chapter Two: The Devil You Know",
      "Describes the Brood's pursuits, coteries and relationships with other parts of Kindred society.",
    ],
    [
      "Chapter Three: Blood of Belial",
      "Explores Forsworn blood and the factions through which this fragmented covenant organizes itself.",
    ],
    [
      "Chapter Four: The Wages of Sin",
      "Introduces the Brood's Investments, Devotions and other supernatural rewards for pursuing Vice.",
    ],
    [
      "Appendix: The Adversary",
      "Provides Forsworn characters ranging from new initiates to leaders of the largest factions.",
    ],
  ]),
  Cote: defineBook(128, "Coteries_(book)", [
    [
      "Chapter One: Cosmopolitan Coteries",
      "Looks at mixed-covenant and single-clan groups whose members need a structure that crosses political boundaries.",
    ],
    [
      "Chapter Two: The Ordo Dracul",
      "Explores coteries formed around the Dragons' experiments, hierarchies and pursuit of transcendence.",
    ],
    [
      "Chapter Three: The Carthian Movement",
      "Examines groups shaped by political experimentation, shared causes and the Movement's changing ideals.",
    ],
    [
      "Chapter Four: The Circle of the Crone",
      "Presents spiritual coteries within the Circle and the rites or traditions that bind them.",
    ],
    [
      "Chapter Five: The Invictus",
      "Shows how coteries operate inside the covenant's formal, neo-feudal power structure.",
    ],
    [
      "Chapter Six: The Lancea Sanctum",
      "Covers Sanctified groups ranging from severe fundamentalists to more moderate spiritual communities.",
    ],
  ]),
  LS: defineBook(224, "Lancea_Sanctum_(book)", [
    [
      "Chapter One: The History of the Lancea Sanctum",
      "Traces the covenant's sacred history from its disputed beginnings through its expansion across the world.",
    ],
    [
      "Chapter Two: Unlife in the Lancea Sanctum",
      "Explores Sanctified doctrine, hierarchy, offices and religious practice.",
    ],
    [
      "Chapter Three: The Lancea Sanctum and the Danse Macabre",
      "Examines the roles and expectations placed on covenant members at different stages of the Requiem.",
    ],
    [
      "Chapter Four: Factions and Bloodlines",
      "Introduces prominent denominations and bloodlines and the tensions they create within the covenant.",
    ],
    [
      "Chapter Five: Disciplines and Rituals",
      "Expands Theban Sorcery and other supernatural practices associated with the Sanctified.",
    ],
    [
      "Appendix: Allies and Antagonists",
      "Supplies adaptable Sanctified characters for use as contacts, rivals and enemies.",
    ],
  ]),

  Blas: defineBook(144, "Blasphemies", [
    [
      "Chapter One: Heresies",
      "Presents alternate and forbidden interpretations of Father Wolf, Luna and the origin of the Uratha.",
    ],
    [
      "Chapter Two: Brotherhoods",
      "Explores human cults and the ways they can become entangled with werewolves and spirits.",
    ],
    [
      "Chapter Three: Hidden Lodges",
      "Introduces secret lodges and factions, some available to characters and others built as threats.",
    ],
    [
      "Chapter Four: The Bale Hounds",
      "Details traitorous Uratha who serve the Maeljin and undermine packs from within.",
    ],
  ]),
  BotW: defineBook(144, "Blood_of_the_Wolf", [
    [
      "Chapter One: Flesh and Blood (Physiology)",
      "Explores First Change, regeneration, shapeshifting, reproduction, diet and aging in Uratha bodies.",
    ],
    [
      "Chapter Two: Sheep's Clothing (Urban Life)",
      "Examines the difficult place werewolves occupy in human communities and cities.",
    ],
    [
      "Chapter Three: The Wild Hunt (Rural Life)",
      "Moves into wilderness survival, rural territories and the practical demands of the hunt.",
    ],
    [
      "Chapter Four: Wolf-Blooded",
      "Expands wolf-blooded people as relatives, allies and protagonists, with rules and story guidance.",
    ],
  ]),
  HG: defineBook(145, "Hunting_Ground%3A_The_Rockies", [
    [
      "Chapter One: Time and Place",
      "Introduces Denver and Colorado history and explains how new characters enter the local Uratha world.",
    ],
    [
      "Chapter Two: Tribes of the Moon",
      "Presents local packs, Forsaken characters and their relationships with newcomers.",
    ],
    [
      "Chapter Three: The Spine of the World",
      "Maps the region's Shadow and the major spirits that claim it.",
    ],
    [
      "Chapter Four: Prey",
      "Details regional enemies including the Pure, hostile spirits and the Hosts.",
    ],
    [
      "Chapter Five: Storytelling",
      "Provides themes, hooks and practical advice for turning the setting into an ongoing chronicle.",
    ],
  ]),
  LodgF: defineBook(144, "Lodges%3A_The_Faithful", [
    [
      "Chapter One: Foundations",
      "Explains why lodges form and how their members create, join and maintain these focused societies.",
    ],
    [
      "Chapter Two: Tribal Lodges",
      "Presents a broad collection of lodges tied to the five Tribes of the Moon.",
    ],
    [
      "Chapter Three: Other Paths",
      "Explores lodges that cross tribal lines or follow purposes outside the usual tribal traditions.",
    ],
  ]),
  Lore: defineBook(160, "Lore_of_the_Forsaken", [
    [
      "Chapter One: Lords of the Hidden World (Totems)",
      "Explores Luna, the Firstborn, the Maeljin and the powerful spirits that can become patrons or enemies.",
    ],
    [
      "Chapter Two: Pull of the Moon (Auspices)",
      "Develops each auspice, its social role and the different ways Uratha answer Luna's calling.",
    ],
    [
      "Chapter Three: Spirit Magic (Gifts and Rites)",
      "Examines how Gifts are discovered and bargained for, then expands rites and their place in werewolf culture.",
    ],
    [
      "Chapter Four: The Living World (Loci and Fetishes)",
      "Details loci, awakened objects and the creation and use of fetishes.",
    ],
  ]),
  Pred: defineBook(192, "Predators", [
    [
      "Chapter One: Denizens of Shadow",
      "Expands spirits as complex inhabitants of the Shadow, including their motives and construction.",
    ],
    [
      "Chapter Two: The Spirit-Ridden",
      "Presents humans possessed or claimed by spirits and rules for building these adversaries.",
    ],
    [
      "Chapter Three: The Swarms Within",
      "Details Azlu, Beshilu and other Hosts that infest the physical world.",
    ],
    [
      "Chapter Four: Horrors of an Ancient Age",
      "Introduces rare and ancient entities whose power reaches beyond ordinary spirits and Hosts.",
    ],
  ]),
  Pure: defineBook(192, "The_Pure", [
    [
      "Chapter One: A Pure Society",
      "Explains the customs, practices and shared concerns that bind the Pure Tribes.",
    ],
    [
      "Chapter Two: The Three Tribes",
      "Develops the Fire-Touched, Ivory Claws and Predator Kings through their laws, beliefs and cultures.",
    ],
    [
      "Chapter Three: Scourge and Brand",
      "Collects the Gifts, rites, totems and fetishes the Pure bring to their war.",
    ],
    [
      "Chapter Four: Storytelling the Pure",
      "Offers guidance for using Pure werewolves as nuanced antagonists and presents a sample setting.",
    ],
  ]),
  SotM: defineBook(224, "Signs_of_the_Moon", [
    [
      "Chapter I: Stalker",
      "Expands the Irraka with lodges, Merits, fetishes, rites and Gifts suited to scouts and hunters.",
    ],
    [
      "Chapter II: Spirit Master",
      "Develops the Ithaeur through spirit-focused lodges, rites, Gifts and example characters.",
    ],
    [
      "Chapter III: Walker Between",
      "Explores the Elodoth as judges and intermediaries, with new lodges, Gifts, rites and fetishes.",
    ],
    [
      "Chapter IV: Visionary",
      "Builds on the Cahalith role through visionary traditions, lodges, Gifts and story material.",
    ],
    [
      "Chapter V: Warrior",
      "Expands the Rahu through martial culture, pack examples and tools for the full-moon auspice.",
    ],
    [
      "Chapter VI: Faces and Phases",
      "Looks beyond the five common auspices and supplies additional lunar and chronicle options.",
    ],
  ]),
  Terr: defineBook(144, "Territories", [
    [
      "Chapter One: Drawing Borders",
      "Provides a toolkit for selecting, defining and mapping the territories that shape a Forsaken chronicle.",
    ],
    [
      "Chapter Two: Marring the Land",
      "Shows how actions, spirits and conflict change territory over the course of play.",
    ],
    [
      "Chapter Three: Lines in the Sand",
      "Presents five ready-made territories that can be used directly or adapted as examples.",
    ],
  ]),
  Tribes: defineBook(193, "Tribes_of_the_Moon_(book)", [
    [
      "Chapter One: Blood Talons, Suthar Anzuth",
      "Expands Blood Talon initiation, legends, lodges, rites, fetishes, Gifts and notable members.",
    ],
    [
      "Chapter Two: Bone Shadows, Hirfathra Hissu",
      "Develops Bone Shadow recruitment, spirit duties, lodges and supernatural tools.",
    ],
    [
      "Chapter Three: Hunters in Darkness, Meninna",
      "Explores the tribe's sacred hunts, lodges, rites and methods for protecting territory.",
    ],
    [
      "Chapter Four: Iron Masters, Farsil Luhal",
      "Presents the Iron Masters' adaptive culture, urban lodges and new rites and fetishes.",
    ],
    [
      "Chapter Five: Storm Lords, Iminir",
      "Details Storm Lord initiation, leadership traditions, lodges and tribal legends.",
    ],
  ]),
  WAtP: defineBook(224, "The_War_Against_the_Pure", [
    [
      "Chapter One: Dogs of War",
      "Provides tools for war chronicles, including planning, logistics, escalation and scenario structures.",
    ],
    [
      "Chapter Two: Historical Conflicts",
      "Uses wars from the past as settings and models for Forsaken conflicts.",
    ],
    [
      "Chapter Three: The Silver Crusade",
      "Presents a large-scale supernatural cause capable of uniting packs in a coordinated campaign.",
    ],
    [
      "Chapter Four: Wayward Sons",
      "Explores wars against other shapeshifters and offers a system for designing new changing breeds.",
    ],
  ]),

  AA: defineBook(225, "The_Adamantine_Arrow_(book)", [
    [
      "Chapter One: The Smoke from Distant Fires",
      "Traces the order's history through the conflicts that shaped its doctrines and institutions.",
    ],
    [
      "Chapter Two: Sown from the Dragon’s Talons",
      "Explains Arrow philosophy, oaths, martial practice and the rules that hold the order together.",
    ],
    [
      "Chapter Three: Among Warriors",
      "Explores initiation, internal culture, politics and relationships with other supernatural societies.",
    ],
    [
      "Chapter Four: Factions and Legacies",
      "Presents competing approaches within the order and Legacies that embody the Adamant Way.",
    ],
    [
      "Chapter Five: Magic",
      "Collects spells, tactics and artifacts shaped by the belief that existence is conflict.",
    ],
    [
      "Appendix: Allies and Antagonists",
      "Supplies Arrow characters ready to serve as comrades, teachers, rivals or enemies.",
    ],
  ]),
  AR: defineBook(193, "Astral_Realms", [
    [
      "Chapter One: Astral Magic",
      "Explains how the Arcana function on inward journeys and adds spells that support astral travel.",
    ],
    [
      "Chapter Two: Mapping the Impossible",
      "Guides travel through the Oneiros, Temenos and Anima Mundi and the wonders found in each.",
    ],
    [
      "Chapter Three: Denizens and Things",
      "Provides astral entities, artifacts and imagined objects for encounters and discoveries.",
    ],
    [
      "Chapter Four: Dreamquests",
      "Offers practical advice for constructing and integrating astral stories into a chronicle.",
    ],
    [
      "Chapter Five: Realms",
      "Presents six complete astral realms, each with its own inhabitants, dangers and revelations.",
    ],
  ]),
  Ban: defineBook(161, "Banishers_(book)", [
    [
      "Chapter One: The Purpose",
      "Examines broken Awakenings, recruitment and the different paths that turn mages into Banishers.",
    ],
    [
      "Chapter Two: Weapons",
      "Collects spells, artifacts and imbued items commonly used in the hunt against magic.",
    ],
    [
      "Chapter Three: Cults and Cabals",
      "Provides Banisher groups and an individual hunter ready to introduce into a chronicle.",
    ],
    [
      "Chapter Four: Wielding the Witch-Hammer",
      "Looks inside Banisher convictions and offers guidance for portraying them as people rather than anonymous enemies.",
    ],
  ]),
  BU: defineBook(152, "Boston_Unveiled", [
    [
      "Chapter One: Maps and Legends",
      "Traces Boston's mundane and Awakened history and establishes the city's important places.",
    ],
    [
      "Chapter Two: Cabals",
      "Presents the Pentacle cabals and the alliances and rivalries that shape local politics.",
    ],
    [
      "Chapter Three: Renegade Mages",
      "Introduces Seers, Banishers and other Awakened who stand outside the local orders.",
    ],
    [
      "Chapter Four: Off the Map",
      "Explores uncanny locations and threats found beyond the city's familiar streets.",
    ],
    [
      "Chapter Five: Beast of Burden",
      "Provides an introductory story centered on restoring the dead and navigating the consequences.",
    ],
  ]),
  FC: definePartialBook(137, "The_Free_Council_(book)", [
    [
      "Chapter Two: The Libertine Culture",
      "Describes Free Council organization, civic roles, positions and the status held by members within Libertine assemblies.",
    ],
    [
      "Chapter Three: Arcane Operating System",
      "Collects Libertine Legacies, techné, modern spells, enchanted equipment and magical phenomena.",
    ],
  ]),
  GotV: defineBook(224, "Guardians_of_the_Veil_(book)", [
    [
      "Chapter One: From the Reign of Atlantis",
      "Traces the Guardians from their Atlantean predecessors to their modern mission of protecting magic.",
    ],
    [
      "Chapter Two: Masque and Veil",
      "Reveals the order's doctrine, offices, levels of trust and identity-shaping Masques.",
    ],
    [
      "Chapter Three: Of Secrets and Spies",
      "Explores initiation, rank and the demanding bonds that form among the order's spies and judges.",
    ],
    [
      "Chapter Four: Factions and Legacies",
      "Presents internal movements and Legacies that express different approaches to secrecy and sacrifice.",
    ],
    [
      "Chapter Five: Magic",
      "Collects covert spells, magical methods and equipment for protecting the Veil.",
    ],
    [
      "Appendix: Allies and Antagonists",
      "Offers Guardian characters suited to roles ranging from hidden mentors to implacable investigators.",
    ],
  ]),
  IEwtA: definePartialBook(226, "Intruders%3A_Encounters_With_the_Abyss", [
    [
      "Chapter One: Otherworldly Dread",
      "Provides guidance for using the Abyss and its intruders as recurring sources of horror within a chronicle.",
    ],
  ]),
  KST: definePartialBook(162, "Keys_to_the_Supernal_Tarot", [
    [
      "Appendix: The Minor Arcana",
      "Completes the book's Tarot material with the four suits of Wands, Swords, Cups and Pentacles.",
    ],
  ]),
  "L:tS": definePartialBook(160, "Legacies%3A_The_Sublime", [
    [
      "Appendix: Shaping the Soul",
      "Offers advice for players and Storytellers who want to design original Legacies.",
    ],
  ]),
  MT: definePartialBook(159, "Magical_Traditions", [
    [
      "Chapter One: Supernal Correspondences",
      "Introduces magical traditions as cultural frameworks and provides the Merit used to represent membership in one.",
    ],
  ]),
  Myst: defineBook(240, "The_Mysterium_(book)", [
    [
      "Chapter One: A History of Wisdom",
      "Traces the order's development and its changing duty to preserve dangerous knowledge.",
    ],
    [
      "Chapter Two: Those Who Know",
      "Explains Mystagogue beliefs, practices and the care of Athenaea.",
    ],
    [
      "Chapter Three: The Ladder of Mysteries",
      "Details organization, initiation and advancement toward deeper communion with the order.",
    ],
    [
      "Chapter Four: Factions and Legacies",
      "Presents competing scholarly priorities and Legacies born from the pursuit of Mystery.",
    ],
    [
      "Chapter Five: Spells and Artifacts",
      "Collects magic, relics and research tools associated with the Mysterium.",
    ],
    [
      "Appendix: Allies and Atheists",
      "Supplies characters who embody the order's ideals, disputes and dangerous curiosities.",
    ],
  ]),
  "NH-TU": defineBook(161, "Night_Horrors%3A_The_Unbidden", [
    [
      "Part One: Mages",
      "Presents Awakened characters whose exposure to magic has made them especially dangerous or unstable.",
    ],
    [
      "Part Two: Characters and Creatures",
      "Collects beings altered by mages, magical contact or forces that only resemble the Awakened.",
    ],
  ]),
  RotE: defineBook(144, "Reign_of_the_Exarchs", [
    [
      "Chapter One: The Ring",
      "Begins a linked campaign in which the characters discover the first part of a divided royal artifact.",
    ],
    [
      "Chapter Two: The Robe",
      "Continues the search through a separate mystery whose reward is another piece of the regalia.",
    ],
    [
      "Chapter Three: The Scepter",
      "Escalates the campaign as rival forces converge on the third symbol of the dethroned queen.",
    ],
    [
      "Chapter Four: The Crown",
      "Brings the characters closer to completing the artifact and exposes the larger purpose behind it.",
    ],
    [
      "Chapter Five: The Throne",
      "Concludes the sequence with the Exarchs' servants and the consequences of assembling the regalia.",
    ],
  ]),
  "S&S": defineBook(160, "Sanctum_%26_Sigil", [
    [
      "Chapter One: The Polity",
      "Explores cabals, Consilia and the Lex Magica that organizes Awakened political life.",
    ],
    [
      "Chapter Two: Pride of Place",
      "Expands sanctums, Hallows, ley lines, Demesnes and the magical defenses that protect them.",
    ],
    [
      "Chapter Three: Pylons and Cults",
      "Looks inside Seer pylons and Banisher groups as distorted counterparts to Pentacle cabals.",
    ],
    [
      "Chapter Four: Storytelling",
      "Provides tools for political stories and sample organizations that draw cabals into conflict.",
    ],
  ]),
  SotRT: defineBook(128, "Secrets_of_the_Ruined_Temple", [
    [
      "Chapter One: Atlantean Apocrypha",
      "Presents many competing versions of Atlantis that can keep its truth uncertain in play.",
    ],
    [
      "Chapter Two: Beneath the Sediment",
      "Offers a toolkit for designing expeditions into lost temples and Atlantean ruins.",
    ],
    [
      "Chapter Three: Gatekeepers and Treasures",
      "Collects guardians, hazards and rewards suitable for supernatural archaeological sites.",
    ],
    [
      "Chapter Four: The Living Temple",
      "Moves an Atlantean expedition into the Astral Plane and turns the temple itself into a mystery.",
    ],
    [
      "Appendix: High Speech and Atlantean Runes",
      "Expands the words and glyphs mages use to focus and strengthen their magic.",
    ],
  ]),
  SotT: defineBook(225, "Seers_of_the_Throne_(book)", [
    [
      "Chapter One: A History of Loyalty",
      "Tells the Seers' self-serving and contradictory account of their history.",
    ],
    [
      "Chapter Two: Kings of the Lie",
      "Defines the Exarchs, Ministries and institutional foundation of the Iron Pyramid.",
    ],
    [
      "Chapter Three: Serving the Exarchs",
      "Explores the philosophy, ranks and daily culture of those who serve the Lie.",
    ],
    [
      "Chapter Four: Heads of the Hydra",
      "Maps factions and Legacies that divide the Seers even as they serve a common hierarchy.",
    ],
    [
      "Chapter Five: Gifts of the Exarchs",
      "Collects Seer spells, rituals and enchanted tools granted or inspired by their masters.",
    ],
    [
      "Appendix: Antagonists",
      "Provides ready-made Seers and the specialized servants of the great Ministries.",
    ],
  ]),
  Summ: defineBook(225, "Summoners", [
    [
      "Chapter One: From Distant Shores",
      "Covers beings summoned from the Shadow, Twilight, the Astral Realms, the Underworld and other parts of the Fallen World.",
    ],
    [
      "Chapter Two: From the Five Towers",
      "Explores Supernal entities that test mages and embody the mysteries of the Watchtowers.",
    ],
    [
      "Chapter Three: From the Endless Dark",
      "Details Acamoth, Gulmoth and the bargains and dangers associated with Abyssal summoning.",
    ],
    [
      "Chapter Four: From Stranger Spheres",
      "Presents entities that intrude from places outside the familiar cosmology.",
    ],
    [
      "Chapter Five: Otherworldly Compacts",
      "Provides systems for pacts, along with Merits, spells, artifacts and summoner Legacies.",
    ],
  ]),
  SL: defineBook(225, "The_Silver_Ladder_(book)", [
    [
      "Chapter One: Hand Over Hand (History)",
      "Traces the order's history and the lessons modern théarchs draw from its successes and failures.",
    ],
    [
      "Chapter Two: The Silver Dream (Culture)",
      "Explains Ladder philosophy, rules, titles, Proximi dynasties and the hidden Cryptopoly.",
    ],
    [
      "Chapter Three: An Enlightened Crusade (Society)",
      "Explores initiation, rank, Consilium leadership and relations with the wider supernatural world.",
    ],
    [
      "Chapter Four: Factions and Legacies",
      "Presents internal movements and Legacies built around different paths to enlightened authority.",
    ],
    [
      "Chapter Five: Magic",
      "Collects théarch spells, mudras, artifacts and tools for leadership and influence.",
    ],
    [
      "Appendix: Allies and Antagonists",
      "Offers Silver Ladder characters who can serve as contacts, mediators, political rivals or enemies.",
    ],
  ]),
  TotM: defineBook(192, "Tome_of_the_Mysteries", [
    [
      "Chapter One: The Way of Fire — Making Magic",
      "Explains how to design spells using Practices, Aspects and the logic of creative thaumaturgy.",
    ],
    [
      "Chapter Two: The Way of Air — Spell Lore",
      "Develops the sensory language and presentation of magic and introduces additional spell material.",
    ],
    [
      "Chapter Three: The Way of Water — Magic and Being",
      "Explores how culture, identity and the mage's condition shape magical practice.",
    ],
    [
      "Chapter Four: The Way of Earth — Magic Manifested",
      "Focuses on enchanting objects, alchemy and other ways of giving magic a lasting physical form.",
    ],
    [
      "Chapter Five: The Way of Void — Greater Secrets",
      "Approaches the most dangerous mysteries and the consequences of seeking knowledge beyond ordinary limits.",
    ],
  ]),
  TotW: defineBook(160, "Tome_of_the_Watchtowers", [
    [
      "Chapter One: Acanthus - Path of Thistle",
      "Expands the Acanthus with Path culture, magic and a new Legacy.",
    ],
    [
      "Chapter Two: Mastigos - Path of Scourging",
      "Develops the Mastigos through their confrontations with desire, inner demons and the Daimon.",
    ],
    [
      "Chapter Three: Moros - Path of Doom",
      "Explores the Moros relationship with death and matter and introduces the Bokor Legacy.",
    ],
    [
      "Chapter Four: Obrimos - Path of the Mighty",
      "Presents the Obrimos view of power and duty, together with the Ascended Adept Legacy.",
    ],
    [
      "Chapter Five: Thyrsus - Path of Ecstasy",
      "Expands the Thyrsus with shapechanging, spirit-world Merits and Path-focused material.",
    ],
  ]),
  IM: defineBook(82, "Imperial_Mysteries", [
    [
      "Chapter One: Threshold",
      "Introduces archmastery, Imperial Practices and the trials that begin the Golden Road.",
    ],
    [
      "Chapter Two: The Invisible Road",
      "Describes archmaster realms, alliances, the Pax Arcanum and the Ascension War.",
    ],
    [
      "Chapter Three: The Supernal Ensemble",
      "Provides people, factions and beings that put faces to the conflicts of archmasters.",
    ],
    [
      "Chapter Four: Ascension",
      "Explores the Final Key and the possibility of permanently transcending the Fallen World.",
    ],
    [
      "Appendix: Imperium",
      "Offers a framework for playing archmasters within the Supernal Realms.",
    ],
  ]),
  LHP: defineBook(95, "Left-Hand_Path", [
    [
      "Part One: Heretics and Apostates",
      "Examines oath-breakers who leave their orders and heretics who corrupt an order while still claiming membership.",
    ],
    [
      "Part Two: The Mad Ones",
      "Presents mages broken by Awakening or hubris and tools for portraying their fractured magic.",
    ],
  ]),
  MN: defineBook(78, "Mage_Noir", [
    [
      "Chapter One: The Party's Over",
      "Introduces 1940s America and the decade's major events from an Awakened perspective.",
    ],
    [
      "Chapter Two: The Power and the Glory",
      "Explores how noir-era culture shapes the attitudes and lives of mages.",
    ],
    [
      "Chapter Three: Nice Guys Finish Last",
      "Reframes Paths, orders and Awakening through the pressures of the period.",
    ],
    [
      "Chapter Four: Stories in the Naked City",
      "Provides themes, conflicts and structures for running noir Mage chronicles.",
    ],
    [
      "Chapter Five: The Weaver-West Papers",
      "Supplies a sample adventure designed to demonstrate the setting's mood.",
    ],
    [
      "Appendix: The Lamppost Cabal",
      "Presents a ready-made cabal shaped by the decade and suitable for the included story.",
    ],
  ]),

  SpSl: defineBook(239, "Spirit_Slayers", [
    [
      "Chapter One: The Untamed Storm",
      "Surveys werewolf and skinchanger lore through the records of hunters and adds hooks for using it.",
    ],
    [
      "Chapter Two: Sheep's Clothing",
      "Explains how established compacts and conspiracies understand werewolves and spirits and adds new groups.",
    ],
    [
      "Chapter Three: Silver Bullets",
      "Provides Tactics, Merits, equipment, Endowments and intelligence on shapeshifter and spirit powers.",
    ],
    [
      "Chapter Four: Moonstruck",
      "Offers campaign themes, more detail on werewolf society and material for Hunting Ground: Philadelphia.",
    ],
  ]),
};
