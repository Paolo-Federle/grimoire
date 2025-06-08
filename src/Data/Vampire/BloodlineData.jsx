const bloodlineData = [
    {
        "Name": "Sta-Au* : The Cruel and Wicked Ones",
        "Nickname": "Shades, the Twice-Dead",
        "Description": "A misguided Golconda cult that seeks their transcendence through death and oblivion.",
        "Disciplines": "Auspex, Obfuscate, Protean, Resilience.",
        "Additional Weakness": "Can never raise Humanity again upon activating the bloodline.",
        "Book": "AB 30"
    },
    {
        "Name": "Therion*",
        "Nickname": "Advocates (among others)",
        "Description": "Leaders and directors of Belial's Brood",
        "Disciplines": "Two Disciplines chosen from the previous clan, Obfuscate, Choronzon",
        "Additional Weakness": "Can no longer sire new childer",
        "Book": "BB 118"
    },
    {
        "Name": "Daeva",
        "Nickname": "N/A",
        "Description": "N/A",
        "Disciplines": "N/A",
        "Additional Weakness": "N/A",
        "Book": "N/A"
    },
    {
        "Name": "Amara Havana",
        "Nickname": "Guardians",
        "Description": "An Indian bloodline that believes it was created by the gods to protect the world from powerful demons, they are incredibly skilled militants.",
        "Disciplines": "Celerity, Majesty, Sakti Pata, Vigor",
        "Additional Weakness": "Leaves bloody foot and hand prints wherever they go; these may be suppressed for one scene with a Willpower point.",
        "Book": "AB 43"
    },
    {
        "Name": "Amrita Bhaga",
        "Nickname": "-",
        "Description": "Largely female bloodline that serves the Indian god of love and pleasure.",
        "Disciplines": "Mention Only",
        "Additional Weakness": "-",
        "Book": "AB 59"
    },
    {
        "Name": "Anvari",
        "Nickname": "Pushers",
        "Description": "Drug addicts who view such substances as a path to spiritual awakening, who can experience them only through consuming the blood of high mortals.",
        "Disciplines": "Celerity, Majesty, Nepenthe, Vigor",
        "Additional Weakness": "Gains only half the Vitae when feeding from victims who are not currently intoxicated.",
        "Book": "Hidden 20"
    },
    {
        "Name": "Asnâm, The",
        "Nickname": "Idols",
        "Description": "Believers in their divinity, this bloodline preaches that they may one day transcend to a higher plane and achieve godhood.",
        "Disciplines": "Celerity, Majesty, Ralab, Vigor",
        "Additional Weakness": "Twice per session, the storyteller may make a task appear more trivial than it actually is.",
        "Book": "Crone 165"
    },
    {
        "Name": "California Xiao",
        "Nickname": "The Sect (good standing), Apostates (rogues)",
        "Description": "The Xiao steal not only the blood but the emotions of their victims, desperately needing to feel again. The bulk of this bloodline are members of a cult in California, but a few rogues have gotten wise and fled.",
        "Disciplines": "Celerity, Kingjan, Majesty, Vigor",
        "Additional Weakness": "Sociopaths, they suffer a penalty to all Empathy, Expression, and Socialize checks. Being required to express compassion or remorse may trigger rage frenzy.",
        "Book": "Chosen 85"
    },
    {
        "Name": "Carnival, The",
        "Nickname": "Freaks",
        "Description": "A band of twisted and mutated Kindred, they spurn life amongst their fellows, instead choosing to parade before and horrify the public with their shows.",
        "Disciplines": "Celerity, Majesty, The Show, Vigor",
        "Additional Weakness": "Gains a choice of either the Nosferatu clan weakness, or having Speed reduced to one quarter of its standard value.",
        "Book": "Legendary 23"
    },
    {
        "Name": "Children of Judas",
        "Nickname": "Suicide Kings/Queens",
        "Description": "A sinister clan which greatly enjoys encouraging despair, self-destruction and suicide in Kindred and mortals alike.",
        "Disciplines": "Auspex, Despond, Majesty, Resilience",
        "Additional Weakness": "Loses a willpower point if they fail to explore the emotional pain of another being, though gains a willpower point if they do so.",
        "Book": "Legendary 38"
    },
    {
        "Name": "Duchagne",
        "Nickname": "Bacchanates",
        "Description": "Descendants of fickle and hedonistic nobility, who possess the ability to manipulate the emotions of others.",
        "Disciplines": "Celerity, Licencieux, Majesty, Vigor",
        "Additional Weakness": "Cannot engage in activities for extended periods of time without suffering penalties from disinterest.",
        "Book": "Chosen 36"
    },
    {
        "Name": "En",
        "Nickname": "Emperors",
        "Description": "Obsessed with power, this royally descended bloodline has a natural aptitude for rule and control.",
        "Disciplines": "Celerity, Dominate, Majesty, Vigor *Special: Gifts of the Alu",
        "Additional Weakness": "Untrained penalty for social skills is -3; no 10-Again on Empathy, Persuasion, or Socialize.",
        "Book": "AB 153"
    },
    {
        "Name": "Erzsébet",
        "Nickname": "Cavaliers, The Withered",
        "Description": "A bloodline which believes age to be a poison and corruptor of the Kindred. They seek to do and see everything under the sun, and to one day, all else in their lives completed, walk under it one final time.",
        "Disciplines": "Auspex, Celerity, Majesty, Vigor",
        "Additional Weakness": "For every decade since the Cavalier's last torpor of at least ten years, their body physically ages two years; inflicts mounting penalties as the ravages of age set in.",
        "Book": "Daeva 114"
    },
    {
        "Name": "Eupraxus",
        "Nickname": "The White Elephants",
        "Description": "Professed leaders at the top of the Invictus, living easy lives while distracting others from the crimes of other elders.",
        "Disciplines": "Celerity, Dominate, Majesty, Nightmare",
        "Additional Weakness": "Cannot seal a wound with a lick; bears the permanent wound from their Embrace that their sire could not seal",
        "Book": "Sinners 55"
    },
    {
        "Name": "Gulikan",
        "Nickname": "Perfumers, Bloodhonuds",
        "Description": "An odd bloodline which is obsessed with all things olfactory; their sense of smell is beyond compare, and they seek to indulge it all times.",
        "Disciplines": "Celerity, Majesty, Ortam, Vigor",
        "Additional Weakness": "Obsessed with the scent of one particular kind of mortal, once it is detected the Gulikan suffers a penalty to all rolls to do anything but consume it, and must spend willpower to eat anything else.",
        "Book": "Legendary 64"
    },
    {
        "Name": "Kallisti",
        "Nickname": "Ravagers",
        "Description": "Destroyers of friendships and delighters in the ending of alliances, this scorned bloodline has spite for all social constructs.",
        "Disciplines": "Celerity, Dominate, Majesty, Perfidy",
        "Additional Weakness": "Narcissism Derangement at Humanity 6+, which increases to Megalomania at Humanity 5-; their blood cannot form Vinculum.",
        "Book": "Invictus 162"
    },
    {
        "Name": "Kinnaree",
        "Nickname": "Fawn",
        "Description": "Secret demon defenders of Thailand, they see themselves as the bloody guardians of their countrie's spiritual future.",
        "Disciplines": "Celerity, Majesty, Vigor, Auspex",
        "Additional Weakness": "Riding the wave for anger frenzies becomes an additional Vice.",
        "Book": "AB 117"
    },
    {
        "Name": "Malintzin",
        "Nickname": "Malinchismas, Traitors",
        "Description": "A bloodline descended from the Aztecs who have supported the Spanish conquest.",
        "Disciplines": "Celerity, Dominate, Majesty, Vigor",
        "Additional Weakness": "Gains the Ventrue clan weakness; if the Traitor does not possess at least one in Herd, Retainer, or Fame, they must spend a Willpower in addition to Vitae to rise.",
        "Book": "SoM 101"
    },
    {
        "Name": "Maxtla",
        "Nickname": "-",
        "Description": "Aztec governor-priests",
        "Disciplines": "Mention Only",
        "Additional Weakness": "-",
        "Book": "SoM 79"
    },
    {
        "Name": "Mortifiers of the Flesh*",
        "Nickname": "Flagellants",
        "Description": "Tormented by the belief that the Curse is a divine punishment, each member of this unique bloodline (anyone of BP 4+ may join regardless of clan) inflicts horrific wounds upon themselves in atonement.",
        "Disciplines": "Clan Disciplines, Scourge]]",
        "Additional Weakness": "After feeding, must self-flagellate before Willpower may be spent. Failing a degeneration roll grants a penalty to all rolls until penance is paid.",
        "Book": "Lancea 170"
    },
    {
        "Name": "Murales",
        "Nickname": "-",
        "Description": "Aztec-styled communists and Diego Rivera wannabes who mystically coerce mortals through public art.",
        "Disciplines": "Mention Only",
        "Additional Weakness": "-",
        "Book": "SoM 79"
    },
    {
        "Name": "Naditu",
        "Nickname": "Hierodules, Whores",
        "Description": "Worshipers of beauty, they can be a great blessing to those they admire, but are dangerous to disappoint.",
        "Disciplines": "Auspex, Celerity, Majesty, Vigor",
        "Additional Weakness": "Must be bonded to another vampire of great beauty or power; when not bonded, suffers a significant penalty to Physical and Social rolls.",
        "Book": "WW downloads]"
    },
    {
        "Name": "Nelapsi",
        "Nickname": "Gluttons",
        "Description": "Legendary for their heinous appetite, that is none the less equally renowned for their cautious and manipulative feeding methods.",
        "Disciplines": "Celerity, Majesty, Nightmare, Vigor",
        "Additional Weakness": "Require an amount of Vitae equal to BP to rise every night, rather than the standard one (this amount is staggered over time if they possess Blood Seeps Slowly). The bloodline is not tolerated in most domains.",
        "Book": "Hidden 88"
    },
    {
        "Name": "Platina",
        "Nickname": "-",
        "Description": "A small bloodline of silver-barons, drawn from a single mortal family.",
        "Disciplines": "Mention Only",
        "Additional Weakness": "-",
        "Book": "SoM 79"
    },
    {
        "Name": "Septimi",
        "Nickname": "Passionate, Maidens, Roaches",
        "Description": "Champions who seek to lead humanity away from evil, they are altruistic to a fault.",
        "Disciplines": "Abjurism, Celerity, Majesty, Vigor",
        "Additional Weakness": "Failing to exercise one's Virtue results in a loss of Willpower.",
        "Book": "AB 89"
    },
    {
        "Name": "Spina",
        "Nickname": "Barbs",
        "Description": "Sharing membership with a sacred order, this bloodline is famous for its courtesy, politeness, and courage. They frequently take part in inquisitions to destroy any who seriously harm their members.",
        "Disciplines": "Celerity, Courtoisie, Majesty, Vigor",
        "Additional Weakness": "Suffer a penalty to resist anger frenzy triggered by insulting or rude behavior; gain a permanent Obsession derangement, for proving that courtesy is the saving grace of the Damned; must spend a Willpower point to act discourteously in any manner.",
        "Book": "Invictus 173"
    },
    {
        "Name": "Tianpàn Xiao",
        "Nickname": "Sirens",
        "Description": "Manipulators of emotions, this bloodline is wildly passionate, and seeks to use the passions of others against them.",
        "Disciplines": "Celerity, Majesty, Vigor, Xinyao",
        "Additional Weakness": "On reflexive composure resistance rolls, 10 again does not apply and 1s subtract successes. Particularly vulnerable to Manic Depression, Phobia, and Hysteria degeneration.",
        "Book": "Chosen 95"
    },
    {
        "Name": "Toreador",
        "Nickname": "Patrons",
        "Description": "Lovers and creators of art, descended from a legendary and proud Spanish nobleman.",
        "Disciplines": "Celerity, Dominate, Majesty, Vigor",
        "Additional Weakness": "When exposed to a particular style of art they become enraptured, able to turn attention elsewhere only with a Resolve roll or the expenditure of Willpower.",
        "Book": "VTR 246"
    },
    {
        "Name": "Zelani",
        "Nickname": "-",
        "Description": "A bloodline that aspires to lead the Carthian movement, they have strange powers over fate and destiny.",
        "Disciplines": "Celerity, Majesty, Serendipity, Vigor",
        "Additional Weakness": "Cannot enter a dwelling uninvited without taking aggravated damage.",
        "Book": "Carthians 166"
    },
    {
        "Name": "Gangrel",
        "Nickname": "N/A",
        "Description": "N/A",
        "Disciplines": "N/A",
        "Additional Weakness": "N/A",
        "Book": "N/A"
    },
    {
        "Name": "Abhi Dhvana",
        "Nickname": "-",
        "Description": "Young Indian bloodline descended from the priest caste after the destruction of an elder bloodline.",
        "Disciplines": "Mention Only",
        "Additional Weakness": "-",
        "Book": "AB 59"
    },
    {
        "Name": "Abhi Jina",
        "Nickname": "-",
        "Description": "Indian warrior priests.",
        "Disciplines": "Mention Only",
        "Additional Weakness": "-",
        "Book": "AB 59"
    },
    {
        "Name": "Anavashra",
        "Nickname": "-",
        "Description": "Ritualists from India",
        "Disciplines": "Mention Only",
        "Additional Weakness": "-",
        "Book": "VTR 107"
    },
    {
        "Name": "Annunaku",
        "Nickname": "Landlords",
        "Description": "This bloodline espouses supreme authority over their territory, often as benevolent dictators.",
        "Disciplines": "Animalism, Protean, Resilience, Tenure",
        "Additional Weakness": "Suffer penalties to all rolls whenever outside of their controlled dominion; these penalties can be partially alleviated by being in familiar places or with familiar people.",
        "Book": "Invictus 159"
    },
    {
        "Name": "Anubi",
        "Nickname": "-",
        "Description": "Egyptian cultists that maintain a dire feud with the Lancea Sanctum",
        "Disciplines": "Mention Only",
        "Additional Weakness": "-",
        "Book": "VTR 107"
    },
    {
        "Name": "Barjot",
        "Nickname": "Jelinenes",
        "Description": "A band of wandering hippies, for all intents and purposes.",
        "Disciplines": "Animalism, Celerity, Protean, Resilience",
        "Additional Weakness": "Suffer penalties from being out of contact with \"family\", and obsessively seeks to return.",
        "Book": "Carthians 156"
    },
    {
        "Name": "Bohagande",
        "Nickname": "Jonahs",
        "Description": "Infamous harbingers of bad luck and misfortune, the Bohagande are unwelcome wherever they go.",
        "Disciplines": "Animalism, Protean, Resilience, Sunnikuse",
        "Additional Weakness": "Aura stained dark black, like that of a serial diablerist.",
        "Book": "Hidden 38"
    },
    {
        "Name": "Bruja",
        "Nickname": "Rabble",
        "Description": "Bikers, gangers, and other thuggish and impulsive troublemakers",
        "Disciplines": "Animalism, Protean, Resilience, Vigor",
        "Additional Weakness": "Significant penalty to resist hunger frenzy",
        "Book": "VTR 235"
    },
    {
        "Name": "Bucolicos, Los",
        "Nickname": "-",
        "Description": "Violent Hounds drawn from fatally wounded gangsters from the international Los Bucolicos gang.",
        "Disciplines": "Mention Only",
        "Additional Weakness": "-",
        "Book": "SoM 81"
    },
    {
        "Name": "Carnon",
        "Nickname": "Pucks, Bucks, Horned Gods",
        "Description": "A modern bloodline, heralding from a deviant punk artist, was created as a mistake when he confused Wicca teachings with real occult knowledge. They are ill reputed, for as their humanity grows distant they take more and more the form of a beast.",
        "Disciplines": "Animalism, Nightmare, Protean, Resilience",
        "Additional Weakness": "Humanity treated as two lower for capping social interactions with mortals. As blood potence increases, additional penalties are applied to social interactions. Additionally, they never get 10-again for resisting frenzy, but get 9-again for rolling to ride the wave.",
        "Book": "Crone 168"
    },
    {
        "Name": "Chichimeca Muertes",
        "Nickname": "-",
        "Description": "Rare survivors of a northern Mexico nomadic people",
        "Disciplines": "Mention Only",
        "Additional Weakness": "-",
        "Book": "SoM 81"
    },
    {
        "Name": "Childer of the Morrigan",
        "Nickname": "Stormcrows, Morrigans",
        "Description": "Fierce warriors who historically have served as the military arm of the Circle of the Crone, but have in modern times fallen out of favor and respect.",
        "Disciplines": "Animalism, Protean, Resilience, Vigor",
        "Additional Weakness": "Permanent depression derangement; the above derangement can also be triggered by experiencing defeat in battle, revelation of wasted effort, or disfavor with the Circle.",
        "Book": "Crone 172"
    },
    {
        "Name": "Dead Wolves",
        "Nickname": "Bloody Wolves",
        "Description": "A bloodline born from a werewolf Embraced before the first change, it symbolizes the conflict between Uratha and the Kindred.",
        "Disciplines": "Animalism, Protean, Resilience, Sublunario",
        "Additional Weakness": "All damage from silver weapons inflicts an additional point of damage; during new and full moons must spend an extra Vitae to wake, as well as every few hours.",
        "Book": "SoM 102"
    },
    {
        "Name": "Empusae",
        "Nickname": "Daughters",
        "Description": "Daughters and zealots of an infamous and murderous sorceress of the Circle.",
        "Disciplines": "Auspex, Obfuscate, Protean, Resilience",
        "Additional Weakness": "Upon activating the bloodline, must exchange all dots in Animalism for Auspex; animals attempt to flee, or else fight the Daughter",
        "Book": "Sinners 127"
    },
    {
        "Name": "Hounds of Actaeon, The",
        "Nickname": "Hunters",
        "Description": "A bloodline which ritually hunts human prey, using all the modern tools of the trade.",
        "Disciplines": "Animalism, Obfuscate, Protean, Resilience",
        "Additional Weakness": "Severe penalty to resist hunger frenzy.",
        "Book": "Gangrel 111"
    },
    {
        "Name": "Larvae",
        "Nickname": "Brutes",
        "Description": "Criminal family that operates at the fringes of Rome, providing illegal services to those willing to pay for them.",
        "Disciplines": "Animalism, Celerity, Protean, Resilience",
        "Additional Weakness": "Once battle has begun, even if only a friendly spar, suffers a penalty to resist anger frenzy.",
        "Book": "RfRome 228"
    },
    {
        "Name": "Gens Libres, Les",
        "Nickname": "Freedmen",
        "Description": "Anarchists and rebels, each Embraced as a form of salvation from some form of bondage.",
        "Disciplines": "Animalism, Obfuscate, Resilience, Celerity",
        "Additional Weakness": "The blood of members of this bloodline cannot form the Vinculum.",
        "Book": "AB 69"
    },
    {
        "Name": "Mabry",
        "Nickname": "Trapdoor Spiders, Rock Snakes",
        "Description": "A bloodline which prefers its prey come to them, they are establishers of bars and inns in remote places, preying on travelers who happen in to the wrong place.",
        "Disciplines": "Animalism, Protean, Resilience, Vigor",
        "Additional Weakness": "When separated from others of the bloodline, suffers a penalty to all rolls, and a more severe one to Disciplines",
        "Book": "Gangrel 110"
    },
    {
        "Name": "Mara, The",
        "Nickname": "Lampreys",
        "Description": "Dwellers in water and wet places, this bloodline is deeply pious and worships a spirit of water.",
        "Disciplines": "Animalism, Obfuscate, Protean, Resilience",
        "Additional Weakness": "Gain no Vitae from feeding unless the Mara is completely submerged in water.",
        "Book": "Crone 180"
    },
    {
        "Name": "Matasuntha",
        "Nickname": "-",
        "Description": "Warriors descended from an ancient Hun warlord.",
        "Disciplines": "Mention Only",
        "Additional Weakness": "-",
        "Book": "VTR 107"
    },
    {
        "Name": "Moroi*",
        "Nickname": "Hunters",
        "Description": "Legendary night stalkers and murderers that are fierce servants of the Ordo Dracul.",
        "Disciplines": "Animalism, Obfuscate, Resilience, Vigor",
        "Additional Weakness": "Gangrel and Nosferatu gain the weakness of the other clan",
        "Book": "Ordo 159"
    },
    {
        "Name": "Mystikoi",
        "Nickname": "Illuminated, Bureaucrats",
        "Description": "Mystics who seek to reunify all of Creation with the divine, they modify their own forms in an attempt to mirror that of god... by succumbing to frenzy and the inner Beast.",
        "Disciplines": "Animalism, Protean, Resilience, Spiritus Sancti",
        "Additional Weakness": "May never spend Willpower to help resist a frenzy, or to resist a discipline that induces frenzy; Coil of the Beast has reduced effectiveness.",
        "Book": "AB 130"
    },
    {
        "Name": "Nepheshim",
        "Nickname": "Hungry Ones",
        "Description": "Wanderers and pilgrims, this bloodline reflects a subset of the Nepheshim faction of the Lancea Sanctum, and seeks to share their beliefs with all Kindred who will hear it.",
        "Disciplines": "Auspex, Nahdad, Protean, Resilience",
        "Additional Weakness": "Taking dots in City Status, Haven, Herd, Resources, or Retainer causes the loss of all Nahdad dots. Each night they awaken in a new territory, they must spend a willpower point.",
        "Book": "Lancea 160"
    },
    {
        "Name": "Oberlochs",
        "Nickname": "Brood",
        "Description": "Masters of rural areas, descendants of a mortal family cruelly embraced by a Gangrel long ago.",
        "Disciplines": "Animalism, Dominate, Protean, Resilience",
        "Additional Weakness": "Age normally, despite Embrace; take permanent penalties to Physical Attributes past a certain age.",
        "Book": "Hidden 96"
    },
    {
        "Name": "Shepherds",
        "Nickname": "Watchers, Herders",
        "Description": "Protectors of mankind from the Kindred, who believe that most of their kind have grown gluttonous and drink too much too often, risking the Masquerade.",
        "Disciplines": "Animalism, Obfuscate, Protean, Resilience",
        "Additional Weakness": "Natural time frame for potence to increase is a century; increased XP cost to raise blood potence; diablere is more difficult",
        "Book": "AB 36"
    },
    {
        "Name": "Taifa",
        "Nickname": "Moors, The Civilized",
        "Description": "Refined and sophisticated Gangrel from Islamic North Africa, who prize art, scholarship, and culture.",
        "Disciplines": "Animalism, Majesty, Protean, Resilience",
        "Additional Weakness": "When not in the company of other vampires, suffer a penalty to all actions.",
        "Book": "Chosen 75"
    },
    {
        "Name": "Tanner",
        "Nickname": "-",
        "Description": "A bloodline with a great appreciation for the Chav lifestyle.",
        "Disciplines": "Mention Only",
        "Additional Weakness": "-",
        "Book": "SoUK 17"
    },
    {
        "Name": "Vedma",
        "Nickname": "Warlocks",
        "Description": "Sorcerous and reclusive witches whose lineage dates back beyond memory.",
        "Disciplines": "Animalism, Protean, Resilience, Zagovny",
        "Additional Weakness": "Social penalty for all who knew the vampire before joining the bloodline; can never have more than two dots in Status or Resources; must have recently consumed animal blood to use Zagovny discipline.",
        "Book": "Ordo 169"
    },
    {
        "Name": "Mekhet",
        "Nickname": "N/A",
        "Description": "N/A",
        "Disciplines": "N/A",
        "Additional Weakness": "N/A",
        "Book": "N/A"
    },
    {
        "Name": "Agonistes",
        "Nickname": "Polemicists",
        "Description": "Scholars and historians, all experts on the lore of torpor and how to resist it's muddling of memory and dreams.",
        "Disciplines": "Auspex, Celerity, Dominate, Obfuscate",
        "Additional Weakness": "Humanity treated as one lower for determining torpor duration. After experiencing tragic or emotionally trying situations, must roll to resist compulsion to retreat to safety and enter torpor.",
        "Book": "Chosen 16"
    },
    {
        "Name": "Alucinor",
        "Nickname": "Sandmen",
        "Description": "A curious discipline which possesses the ability to dreamwalk, they are vulnerable to the twisted nightmares of other, but possess potentially prophetic wisdom.",
        "Disciplines": "Auspex, Celerity, Insomnium, Obfuscate",
        "Additional Weakness": "Does not regain willpower from rest; once per chapter, may experience a delusion that did not actually take place, which inflicts a penalty to all rolls for the rest of the scene. Occasionally also experiences bits of local dreams in waking life.",
        "Book": "Hidden 12"
    },
    {
        "Name": "Ananta Naga",
        "Nickname": "-",
        "Description": "Cunning and sorcerous martial artists from India",
        "Disciplines": "Mention Only",
        "Additional Weakness": "-",
        "Book": "AB 59"
    },
    {
        "Name": "Angustri",
        "Nickname": "Gypsies",
        "Description": "A bloodline founded by a former ghoul who is now Embraced, they maintain close ties with his ghoul family which shares the name.",
        "Disciplines": "Auspex, Celerity, Majesty, Obfuscate",
        "Additional Weakness": "Half vitae from any who are neither Mehket or Roma. Cannot embrace non-Roma.",
        "Book": "Ghouls 96"
    },
    {
        "Name": "Bak-Ra",
        "Nickname": "Servants of Ra, Childer of the Sun, Sun-Stroked",
        "Description": "Worshippers of the Egyptian god of the sun who fled the Roman conquest by entering into millenia-spanning torpor, those few members of this bloodline who have been reawakened have set to re-establishing their fanatical cult.",
        "Disciplines": "Auspex, Celerity, Majesty, Obfuscate",
        "Additional Weakness": "Require an extra Vitae to wake each night.",
        "Book": "AB 167"
    },
    {
        "Name": "Brothers of Ypres",
        "Nickname": "Jones, Trenchers",
        "Description": "A line of poisoners and masters of toxins, descended from world war combatants.",
        "Disciplines": "Asphyx, Auspex, Celerity, Obfuscate",
        "Additional Weakness": "May only feed from poisoned vessels.",
        "Book": "AB 22"
    },
    {
        "Name": "Család",
        "Nickname": "Stone Sires",
        "Description": "A bloodline confined to a scant few members in Hungary, they possess magical control over their dominions.",
        "Disciplines": "Auspex, Celerity, Lithopedia, Obfuscate",
        "Additional Weakness": "If forced to rest outside their haven, they suffer penalties the following night as if they'd been roused during the day.",
        "Book": "Sinners 118"
    },
    {
        "Name": "Cuiatl",
        "Nickname": "-",
        "Description": "Slippery brotherhood of poisoners",
        "Disciplines": "Mention Only",
        "Additional Weakness": "-",
        "Book": "SoM 83"
    },
    {
        "Name": "Hiranya Naga",
        "Nickname": "-",
        "Description": "Powerful and wise Indian blood sorcerers.",
        "Disciplines": "Mention Only",
        "Additional Weakness": "-",
        "Book": "AB 59"
    },
    {
        "Name": "Iltani",
        "Nickname": "Vipers",
        "Description": "Powered by anger, spite, and resentment, the wrathful and sorcererous Iltani bloodline distills these emotions into lethal poisons.",
        "Disciplines": "Animalism, Auspex, Celerity, Obfuscate",
        "Additional Weakness": "Whenever a Discipline roll is failed, Storyteller rolls one die. If the result is a 1, the Iltani must immediately roll to resist anger frenzy.",
        "Book": "AB 145"
    },
    {
        "Name": "Jade Skirts",
        "Nickname": "-",
        "Description": "Aztec funerary priestesses and rainmakers",
        "Disciplines": "Mention Only",
        "Additional Weakness": "-",
        "Book": "SoM 83"
    },
    {
        "Name": "Khaibit",
        "Nickname": "Asps (ancient), Servants (modern)",
        "Description": "Originally skilled spies and assassins for a Cult of Set in ancient Egypt, with the demise of that civilization this bloodline has struggled for meaning, uncertain of who to serve.",
        "Disciplines": "Auspex, Celerity, Obtenebration, Vigor",
        "Additional Weakness": "Suffers a penalty to avoid fear frenzy when confronted with light.",
        "Book": "Hidden 58"
    },
    {
        "Name": "Kuufukuji",
        "Nickname": "The Hungry",
        "Description": "Monastic hermits who seek mastery over the Beast and the need for blood.",
        "Disciplines": "Auspex, Celerity, Obfuscate, Shihai",
        "Additional Weakness": "The vampire may never be entirely fulfilled or they become weak. If the vampire ever has at least (Max Vitae - Blood Potency) Vitae, they may not use any Discipline.",
        "Book": "Legendary 78"
    },
    {
        "Name": "Libitinarius",
        "Nickname": "Morticians",
        "Description": "Born out of an mortal death cult experimenting with dark magic, this bloodline possess significant power over their torpid fellows.",
        "Disciplines": "Auspex, Dominate, Mortualia, Resilience",
        "Additional Weakness": "Penalty to all Humanity rolls during the day; Mortualia can actually be bought without the bloodline.",
        "Book": "Ordo 155"
    },
    {
        "Name": "Lynx",
        "Nickname": "Links",
        "Description": "Obsessed with 'networks' of all sorts, be they social connections or digital, this bloodline is renowned amongst the Invictus as purveyors of information.",
        "Disciplines": "Auspex, Celerity, Obfuscate, Web",
        "Additional Weakness": "Must choose a 'network' upon adopting this bloodline, attempts to seperate the Link from this network may induce fear or anger frenzy; relatives get an increased bonus to affect the Link through blood ties.",
        "Book": "Invictus 165"
    },
    {
        "Name": "Mnemosyne",
        "Nickname": "Keepers",
        "Description": "A bloodline with power over memory, they possess knowledge that is the envy of all Kindred -- knowledge which drives many Mnemosyne elders mad.",
        "Disciplines": "Auspex, Celerity, Meminisse, Obfuscate",
        "Additional Weakness": "Suffer a penalty to resist Blood Addiction; prone to mental derangements",
        "Book": "Mekhet 82"
    },
    {
        "Name": "Morbus",
        "Nickname": "Carriers, The Afflicted",
        "Description": "An ancient and infamous bloodline which can only feed on the sick and dying, a condition which they themselves may inflict with impunity.",
        "Disciplines": "Auspex, Cachexy, Celerity, Obfuscate",
        "Additional Weakness": "Cannot feed from victims who aren't ill; virtually impossible to gain Status outside of other Morbus.",
        "Book": "VTR 244; RfRome p233"
    },
    {
        "Name": "Norvegi",
        "Nickname": "Knives",
        "Description": "A scorned bloodline that lacks fangs, they none the less have the power to manipulate flesh, bone, and Vitae, warping it to their command.",
        "Disciplines": "Auspex, Bloodworking, Obfuscate, Vigor",
        "Additional Weakness": "No fangs; must feed without the Kiss; may never gain more than two dots in Status within a covenant",
        "Book": "Mekhet 84"
    },
    {
        "Name": "Osites",
        "Nickname": "Bone Monks",
        "Description": "A small and nearly extinct bloodline, they are fascinated by death, thinking it holds the key to enlightenment.",
        "Disciplines": "Auspex, Celerity, Memento Mori, Obfuscate",
        "Additional Weakness": "Must spend one Vitae to flow blood before blood healing can be used in a scene, and healing is less efficient. Two Vitae are required to wake each night,",
        "Book": "Lancea 173"
    },
    {
        "Name": "Players",
        "Nickname": "Wannabes, Posers, Lonely Ones",
        "Description": "Vampires who seek to be beautiful and untroubled like those in popular media, they are amongst the most reviled beings in the World of Darkness.",
        "Disciplines": "Auspex, Celerity, Majesty, Obfuscate",
        "Additional Weakness": "Increased chance of dramatic failure when using mental influence Disciplines; when a dramatic failure occurs, the intended victim can never be influenced via Discipline by the Player again.",
        "Book": "Legendary 116"
    },
    {
        "Name": "Qedeshah",
        "Nickname": "Hierodules",
        "Description": "An all-female bloodline, which views itself as sacred mothers of the Damned, who often seek to reproduce even against the will of the Prince.",
        "Disciplines": "Auspex, Celerity, Embrocation, Obfuscate",
        "Additional Weakness": "Do not receive benefit of the Kiss; attempts to Embrace men end in agony.",
        "Book": "Hidden 106"
    },
    {
        "Name": "Sangiovanni",
        "Nickname": "Necromancers, Necrophiles",
        "Description": "Members of the Sangiovanni family, which practices the reviled art of necromancy.",
        "Disciplines": "Auspex, Cattiveria, Celerity, Obfuscate",
        "Additional Weakness": "Humanity cap on social interactions with humans lowered by 2; begin to experience fascination with corpses that borders on the sexual.",
        "Book": "Chosen 65"
    },
    {
        "Name": "Sons of Khalil",
        "Nickname": "Judges",
        "Description": "Rare bloodline that operates as mysterious councilors and wise men for all Kindred.",
        "Disciplines": "Mention Only",
        "Additional Weakness": "-",
        "Book": "CotD:N.Orleans p51"
    },
    {
        "Name": "Tismanu",
        "Nickname": "Monks, Dracula's Abbots, or Dragon Monks",
        "Description": "Pious and contemplative, this bloodline is older than Dracula but faithful to the Ordo, offering its Eastern Orthodox beliefs and courtesy to their fellows.",
        "Disciplines": "Auspex, Celerity, Eupraxia, Majesty",
        "Additional Weakness": "Must have dots in personal haven at least equal to blood potency; sleeping outside this haven causes a cumulative and severe penalty to all rolls.",
        "Book": "Ordo 164"
    },
    {
        "Name": "Yoal",
        "Nickname": "-",
        "Description": "Ancient lineage of warlocks said to have power over shadows and snakes",
        "Disciplines": "Mention Only",
        "Additional Weakness": "-",
        "Book": "SoM 83"
    },
    {
        "Name": "Nosferatu",
        "Nickname": "N/A",
        "Description": "N/A",
        "Disciplines": "N/A",
        "Additional Weakness": "N/A",
        "Book": "N/A"
    },
    {
        "Name": "Acteius",
        "Nickname": "-",
        "Description": "-",
        "Disciplines": "Mention Only",
        "Additional Weakness": "-",
        "Book": "VTR 111"
    },
    {
        "Name": "Adroanzi",
        "Nickname": "Gardeners, Lacrimists",
        "Description": "Caretakers and gardeners of native Africa, this bloodline resents its condition, and holds deep spite for humanity and divinity alike for tasking them outside of heaven.",
        "Disciplines": "Nburu, Nightmare, Obfuscate, Vigor",
        "Additional Weakness": "Must spend a Willpower when feeding, or inflict double lethal damage.",
        "Book": "AB 106"
    },
    {
        "Name": "Azerkatil",
        "Nickname": "Dragonslayers",
        "Description": "Militant vampires created by blood sorcery, originally for the purpose of destroying Dracula, which has since gone astray.",
        "Disciplines": "Nightmare, Obfuscate, Suikast, Vigor",
        "Additional Weakness": "Humanity restricts social pools with vampires in addition to mortals; must burn two dots of willpower to sire a childe.",
        "Book": "Ordo 145"
    },
    {
        "Name": "Baddacelli",
        "Nickname": "Morlocks",
        "Description": "Blind predators who chiefly live underground, this bloodline has incredible control over their other senses, and their ability to manipulate sound.",
        "Disciplines": "Mimetismo, Nightmare, Obfuscate, Vigor",
        "Additional Weakness": "Permanently blinded upon bloodline activation.",
        "Book": "Chosen 26"
    },
    {
        "Name": "Burakumin",
        "Nickname": "Unclean",
        "Description": "A bloodline of Japanese origin, the Burakumin consist largely of former laborers and other traditionally oppressed folk, who have found power in the distant West.",
        "Disciplines": "Getsumei, Nightmare, Obfuscate, Vigor",
        "Additional Weakness": "Cannot spend Vitae to mimic life; double cost to purchase any Status merit.",
        "Book": "VTR 238"
    },
    {
        "Name": "Calacas",
        "Nickname": "Bones",
        "Description": "An unusual bloodline whose face is transmuted to bear skeletal features, and possess an unusual affinity with death, ghosts, and the underworld.",
        "Disciplines": "Auspex, Nightmare, Obfuscate, Vigor",
        "Additional Weakness": "Humanity caps all social rolls, not just those with mortals.",
        "Book": "SoM 99"
    },
    {
        "Name": "Caporetti",
        "Nickname": "Shivers",
        "Description": "Predators who stalked icy trenches during the great wars, vanishing prey as they pleased.",
        "Disciplines": "Celerity, Nightmare, Obfuscate, Vigor",
        "Additional Weakness": "Suffuses the vicinity with great cold; cannot spend Vitae to mimic life; penalty to Obsfucate to hide their nature",
        "Book": "AB pg18"
    },
    {
        "Name": "Cimitière",
        "Nickname": "-",
        "Description": "Unusual religious zealots of Nosferatu descent.",
        "Disciplines": "Auspex, Nightmare, Obfuscate, Vigor",
        "Additional Weakness": "Must spend two points of willpower to act against personal religious beliefs; must spend one point of willpower to not pursue an opportunity to do good works by the faith.",
        "Book": "CoTD: N. Orleans p59"
    },
    {
        "Name": "Cockscomb Society, The",
        "Nickname": "Gals, Gents",
        "Description": "Nosferatu who refuse to allow their vampirism to kill their humanity, humanity being things they equate with high society rather than spiritual qualities.",
        "Disciplines": "Majesty, Nightmare, Obfuscate, Vigor",
        "Additional Weakness": "May not regain Willpower from Virtue Fulfillment",
        "Book": "Nosferatu 106"
    },
    {
        "Name": "Galloi",
        "Nickname": "Pretties",
        "Description": "Bathers in their own blood who have overcome the inherent ugliness of their parent clan, they may remain beautiful so long as they continue the practice.",
        "Disciplines": "Majesty, Nightmare, Obfuscate, Taurobolium",
        "Additional Weakness": "Must bathe in blood regularly; otherwise, their unnatural beauty withers, and they resemble a walking corpse uglier than even the Nosferatu.",
        "Book": "Legendary 51"
    },
    {
        "Name": "Gethsemani",
        "Nickname": "Ecstatics",
        "Description": "This bloodline possesses numerous powers which seem to be truly divine in origin, but in modern times is finding increasing numbers of its members doubting their faith.",
        "Disciplines": "Nightmare, Obfuscate, Stigmatica, Vigor",
        "Additional Weakness": "Upon rising, a roll must be made to avoid self-inflicted loss of Vitae; they also suffer from general masochism.",
        "Book": "Hidden 48"
    },
    {
        "Name": "Heróinomana",
        "Nickname": "-",
        "Description": "Heroin-addicted Haunts.",
        "Disciplines": "Mention Only",
        "Additional Weakness": "-",
        "Book": "SoM 85"
    },
    {
        "Name": "Licinii*",
        "Nickname": "Pretenders",
        "Description": "A primarily Julii bloodline, known for its infirmity and weakness, who are outcasts from that clan due to their sordid and pathetic reputation.",
        "Disciplines": "Animalism, Dominate, Nightmare, Vigor",
        "Additional Weakness": "Gains the weaknesses of both clans Julii and Nosferatu.",
        "Book": "RfRome 231"
    },
    {
        "Name": "Lygos",
        "Nickname": "Creeps, Shades",
        "Description": "Obsessed with the darkness that hides their features, the Lygos worship the absence of light as if it were a divinity.",
        "Disciplines": "Auspex, Nightmare, Obfuscate, Vigor",
        "Additional Weakness": "Takes penalties in bright light.",
        "Book": "Nosferatu 107"
    },
    {
        "Name": "Mayarap",
        "Nickname": "Coiled Snakes",
        "Description": "Buddhists who seek to earn karma for themselves and all of the Kindred.",
        "Disciplines": "Bhumisparsa, Nightmare, Obfuscate, Resilience",
        "Additional Weakness": "Always suffers fear frenzy in the place of anger.",
        "Book": "AB 122"
    },
    {
        "Name": "Mezquinos",
        "Nickname": "-",
        "Description": "A family of faceless, hideous stalkers of the slums.",
        "Disciplines": "Mention Only",
        "Additional Weakness": "-",
        "Book": "SoM 85"
    },
    {
        "Name": "Moroi*",
        "Nickname": "Hunters",
        "Description": "Legendary night stalkers and murderers that are fierce servants of the Ordo Dracul.",
        "Disciplines": "Animalism, Obfuscate, Resilience, Vigor",
        "Additional Weakness": "Gangrel and Nosferatu gain the weakness of the other clan",
        "Book": "Ordo 159"
    },
    {
        "Name": "Morotrophians",
        "Nickname": "Monks, Abbots, Abbey Lubbers (insulting)",
        "Description": "Haunters of closed facilities such as asylums or prisoners, this cruel bloodline preys on the trapped, weak, and helpless.",
        "Disciplines": "Institutionalize, Nightmare, Obfuscate, Vigor",
        "Additional Weakness": "Take penalties to all rolls outside of their \"comfort zone\" of physically and socially confined places.",
        "Book": "Hidden 68"
    },
    {
        "Name": "Noctuku",
        "Nickname": "Bogeymen",
        "Description": "Cannibals and devourers of Kindred flesh, feared as urban legends throughout Kindred society.",
        "Disciplines": "Nightmare, Obfuscate, Phagia, Vigor",
        "Additional Weakness": "If they do not regularly consume flesh, the suffer mounting penalties on Mental and Social rolls and have difficulty resisting hunger frenzies.",
        "Book": "Chosen 46"
    },
    {
        "Name": "Nri-chaksha",
        "Nickname": "-",
        "Description": "Cruel and brilliant descendants of an Indian demon.",
        "Disciplines": "Mention Only",
        "Additional Weakness": "-",
        "Book": "AB 59"
    },
    {
        "Name": "Order of Sir Martin",
        "Nickname": "Leper Knights",
        "Description": "A diseased order of chivalrous and law-abiding Kindred, who have sworn fealty to the Invictus and serve as their secret police.",
        "Disciplines": "Nightmare, Obfuscate, Resilience, Vigor",
        "Additional Weakness": "After feeding, must roll Resolve+Stamina. On a failure, they vomit up an amount of Vitae equal to the lesser of the amount they just consumed or their blood potence.",
        "Book": "AB 137"
    },
    {
        "Name": "Pit-Haunts",
        "Nickname": "-",
        "Description": "Scattered flock of bone-eaters that haunt graveyards and other places of death.",
        "Disciplines": "Mention Only",
        "Additional Weakness": "-",
        "Book": "SoM 85"
    },
    {
        "Name": "Rakshasa",
        "Nickname": "Demons",
        "Description": "An ancient Indian bloodline of warrior merchants, they are well reputed for their furious temper and vast connections.",
        "Disciplines": "Nightmare, Obfuscate, Protean, Vigor",
        "Additional Weakness": "10 Again does not apply, and 1s remove successes from all hunger and anger frenzy rolls.",
        "Book": "Hidden 116"
    },
    {
        "Name": "Telamones",
        "Nickname": "Engineers",
        "Description": "Builders of tunnels and underground labyrinths, this bloodline is believed to be the descendants of Roman Camarilla slaves.",
        "Disciplines": "Animalism, Nightmare, Obfuscate, Vigor",
        "Additional Weakness": "In well lit areas, lose the 10 Again rule on Stealth checks, including Obfuscate.",
        "Book": "Sinners 94"
    },
    {
        "Name": "Usiri",
        "Nickname": "Warriors of the Dead, Sleepers",
        "Description": "Once servants of Osiris, this lineage has adapted well to modern times and they serve as purveyors of secrets.",
        "Disciplines": "Auspex, Hypnagogia, Nightmare, Obfuscate",
        "Additional Weakness": "Must spend a point of Willpower upon waking",
        "Book": "AB 162"
    },
    {
        "Name": "Yagnatia",
        "Nickname": "Boyars",
        "Description": "Proud and powerful Nosferatu, with great knowledge of social graces, who are descended of Russian nobility.",
        "Disciplines": "Dominate, Nightmare, Obfuscate, Vigor",
        "Additional Weakness": "Cannot Embrace without aid of a special ritual.",
        "Book": "Chosen 105"
    },
    {
        "Name": "Ventrue",
        "Nickname": "N/A",
        "Description": "N/A",
        "Disciplines": "N/A",
        "Additional Weakness": "N/A",
        "Book": "N/A"
    },
    {
        "Name": "Adrestoi",
        "Nickname": "Stalwarts, Children of Midas",
        "Description": "A bloodline obsessed with conquest and rule, even more so than other Kindred, they feel compelled to do so as the only way they feel alive.",
        "Disciplines": "Animalism, Dominate, Protean, Resilience",
        "Additional Weakness": "All Disciplines that normally require Willpower expenditures instead require an equal amount of Vitae.",
        "Book": "Ventrue 104"
    },
    {
        "Name": "Apollinaire",
        "Nickname": "Gatekeepers of Ghede",
        "Description": "Favored of the Haitian god of death, they possess the inherit ability to see ghosts, as well as a discipline that grants them great power over doors and passageways.",
        "Disciplines": "Animalism, Dominate, Resilience, Carrefour",
        "Additional Weakness": "Receives the One Eye flaw, and gets no experience for it.",
        "Book": "AB 63"
    },
    {
        "Name": "Aja Dhrsta",
        "Nickname": "-",
        "Description": "Ancient and powerful Indian bloodline that has become greatly diminished over time.",
        "Disciplines": "Mention Only",
        "Additional Weakness": "-",
        "Book": "AB 59"
    },
    {
        "Name": "Architects of the Monolith",
        "Nickname": "Masons",
        "Description": "Sorcerers who see the path to power is through controlling cityscapes, this bloodline has a unique bloodline capable of manipulating the landscape.",
        "Disciplines": "Auspex, Dominate, Gilded Cage, Resilience",
        "Additional Weakness": "Suffer from the Narcissism derangement; the first severe derangement gained is always Megalomania. Both derangement do not apply only to the Mason themself, but also glorify the line founder.",
        "Book": "Hidden 30"
    },
    {
        "Name": "Beni Murrahim",
        "Nickname": "-",
        "Description": "-",
        "Disciplines": "Mention Only",
        "Additional Weakness": "-",
        "Book": "VTR 113"
    },
    {
        "Name": "Bron",
        "Nickname": "Fisher Kings",
        "Description": "A fallen bloodline, who feels destined to rule but are cursed to be unable to do so, they continually seek out new territories in the hope of one day finding that will accept them.",
        "Disciplines": "Animalism, Crochan, Dominate, Resilience",
        "Additional Weakness": "Whenever taking action reflecting \"ownership\" or control of a domain, loses 10 again and 1s subtract successes to all rolls.",
        "Book": "Legendary 10"
    },
    {
        "Name": "Canda Bhanu",
        "Nickname": "Purifiers",
        "Description": "Indian bloodline that seeks to redeem mortals and Kindred alike for their sins.",
        "Disciplines": "Animalism, Auspex, Dominate, Resilience",
        "Additional Weakness": "Anyone affecting a Purifier with a Discipline gains blood-tie benefits.",
        "Book": "AB 53"
    },
    {
        "Name": "Cassians",
        "Nickname": "-",
        "Description": "Descendants of Cassius",
        "Disciplines": "Mention Only",
        "Additional Weakness": "-",
        "Book": "VTR 113"
    },
    {
        "Name": "Corajoso",
        "Nickname": "Telepaths",
        "Description": "Portuguese discipline, originally composed largely of a once-mortal family, that developed gifts of telepathy to facilitate their shared endeavors when the voyages of their country spread them far apart.",
        "Disciplines": "Animalism, Dominate, Linagem, Resilience",
        "Additional Weakness": "Loses 10-Again on non-discipline Resolve or Composure rolls when in the presence of two or more other Kindred; Resolve is treated as one lower for resisting powers.",
        "Book": "AB 99"
    },
    {
        "Name": "Deucalion",
        "Nickname": "Skinheads, the Unflawed",
        "Description": "Arrogant to the extreme, the Deucalion believe they are perfect beings who can do no wrong, and they look down with contempt at Kindred and mortals alike for their failings -- an area they possess great power over.",
        "Disciplines": "Animalism, Dominate, Impurity, Resilience",
        "Additional Weakness": "Cannot admit to wrongdoing; lose Willpower in circumstances where they have clearly done wrong.",
        "Book": "Carthians 160"
    },
    {
        "Name": "Dragolescu",
        "Nickname": "Restless or Pretenders",
        "Description": "A pariah bloodline with a particular interest in spirits and the soul.",
        "Disciplines": "Animalism, Dominate, Essentiaphagia, Resilience",
        "Additional Weakness": "Can only regain willpower through exercise of vice or virtue",
        "Book": "Ordo 150"
    },
    {
        "Name": "Geheim",
        "Nickname": "Dilettantes",
        "Description": "Hedonistic German aristocracy, with a penchant for pushing the limits of the Blood for all its worth.",
        "Disciplines": "Animalism, Blut Alchemie, Dominate, Resilience",
        "Additional Weakness": "Penalty to resist Vitae addiction; if they fail to feed for a night, does not gain Willpower from rest, and suffer a penalty to resist anger frenzy.",
        "Book": "AB 81"
    },
    {
        "Name": "Gorgons",
        "Nickname": "Medusas",
        "Description": "This bloodline traces its lineage back to Medusa (or so they say), an entity which they claim possessed divine blood. They possess a deep affinity for snakes and serpents.",
        "Disciplines": "Amphivena, Animalism, Dominate, Resilience",
        "Additional Weakness": "Permanent Power Fetish Obsession derangement (VTR 191), without contact with a serpent the Medusa suffers a significant penalty on all Discipline rolls and may not spend Vitae to augment physical attributes; as blood potence increases, they take on serpent-like physical features.",
        "Book": "Crone 176"
    },
    {
        "Name": "Icarians",
        "Nickname": "Dynasts or Holy Dynasts",
        "Description": "Followers of a legendary murdered archbishop, the Icarians see themselves as pious and noble lords who believe they are natural rulers over all.",
        "Disciplines": "Animalism, Constance, Dominate, Resilience",
        "Additional Weakness": "Gains only half max Willpower from exercising Virtue, and each night's rest recovers none at all.",
        "Book": "Lancea 167"
    },
    {
        "Name": "Cocas, Las",
        "Nickname": "-",
        "Description": "Vampiric drug lords whose blood has been altered by cocaine addiction.",
        "Disciplines": "Mention Only",
        "Additional Weakness": "-",
        "Book": "SoM 87"
    },
    {
        "Name": "Licini",
        "Nickname": "-",
        "Description": "-",
        "Disciplines": "Mention Only",
        "Additional Weakness": "-",
        "Book": "VTR 113"
    },
    {
        "Name": "Macellarius",
        "Nickname": "Gourmands, Gluttons",
        "Description": "An ill-reputed bloodline, known chiefly for its morbid obesity, they are believed to consume blood in great quantities, sometimes even devouring bodies to get their fill. They are none the less often as socially charming as their Ventrue brethren.",
        "Disciplines": "Animalism, Dominate, Gustus, Resilience",
        "Additional Weakness": "Gains large quantities of weight, getting more obese over time. On all dexterity rolls they lose 10 again and 1s subtract successes, and Speed is forever penalized.",
        "Book": "Legendary 90"
    },
    {
        "Name": "Malkovians",
        "Nickname": "Lunatics",
        "Description": "A Russian-descended bloodline that inflicts insightful madness on its bearers, feared and reviled by other Ventrue.",
        "Disciplines": "Auspex, Dominate, Obfuscate, Resilience",
        "Additional Weakness": "Gain a permanent Derangement, potentially worsened through the use of Dominate.",
        "Book": "VTR 241"
    },
    {
        "Name": "Malocusians",
        "Nickname": "Spiders",
        "Description": "Spiders are a bloodline intimately bound to their havens, gaining significant power inside of them via their Domus discipline.",
        "Disciplines": "Animalism, Domus, Majesty, Resilience",
        "Additional Weakness": "Must spend a Willpower point to leave their haven, and every few hours thereafter. Failure to pay these Willpower points results in penalties to Mental and Social rolls.",
        "Book": "Invictus 168"
    },
    {
        "Name": "Melissidae",
        "Nickname": "Queen Bees",
        "Description": "A bloodline which is largely quiet, after a late 19th century massacre. They are leaders over mortals who seek to create utopian societies, with themselves at the top.",
        "Disciplines": "Animalism (modified), Auspex, Dominate, Resilience",
        "Additional Weakness": "Suffers a mounting penalty whenever they are separated for any length of time from those they control, or at least other Melissid.",
        "Book": "Legendary 103"
    },
    {
        "Name": "Nahualli",
        "Nickname": "Jekylls",
        "Description": "A relatively modern bloodline which believes in synergy with the Beast, infamous for committing ritual murders (even on fellow Kindred) for this cause.",
        "Disciplines": "Auspex, Dominate, Resilience, Tezcatl",
        "Additional Weakness": "10 Again does not apply and 1s subtract successes to rolls to resist fear and hunger frenzy, as well as ride the wave. Cannot spend willpower to augment frenzy rolls.",
        "Book": "Hidden 78"
    },
    {
        "Name": "Rötgrafen",
        "Nickname": "Sea Kings",
        "Description": "Descendants of Nordic pirate raiders, who have not completely forgotten their roots.",
        "Disciplines": "Animalism, Dominate, Protean, Resilience",
        "Additional Weakness": "Take extra damage from fire, and when resisting fear frenzy caused by fire 10 again does not apply and 1s subtract successes.",
        "Book": "Chosen 56"
    },
    {
        "Name": "Sons of Cade",
        "Nickname": "-",
        "Description": "Descendants of an infamous and bloodthirsty Ventrue, who follow his might-makes-right philosophy.",
        "Disciplines": "Animalism, Dominate, Resilience, Vigor",
        "Additional Weakness": "Suffer a significant penalty to avoid anger frenzy.",
        "Book": "Sinners 49"
    },
    {
        "Name": "Sotoha",
        "Nickname": "Samurai, Outsiders",
        "Description": "A bloodline dedicated to the principles of the Samuri, chiefly loyalty. They swear allegiance to a master whom they serve faithfully and dutifully.",
        "Disciplines": "Animalism, Dominate, Kamen, Resilience",
        "Additional Weakness": "Frenzies do not naturally end early, lasting instead possibly several minutes; may not spend Willpower to end a frenzy without a successful Resolve+Composure roll",
        "Book": "Invictus 170"
    },
    {
        "Name": "Veracruz",
        "Nickname": "-",
        "Description": "Sanctified Bloodline that gains spiritual power by invoking the names of Saints",
        "Disciplines": "Mention Only",
        "Additional Weakness": "-",
        "Book": "SoM 87"
    },
    {
        "Name": "Julii",
        "Nickname": "N/A",
        "Description": "N/A",
        "Disciplines": "N/A",
        "Additional Weakness": "N/A",
        "Book": "N/A"
    },
    {
        "Name": "Licinii*",
        "Nickname": "Pretenders",
        "Description": "A primarily Julii bloodline, known for its infirmity and weakness, who are outcasts from that clan due to their sordid and pathetic reputation.",
        "Disciplines": "Animalism, Dominate, Nightmare, Vigor",
        "Additional Weakness": "Gains the weaknesses of both clans Julii and Nosferatu.",
        "Book": "RfRome 231"
    },
    {
        "Name": "Unknown",
        "Nickname": "N/A",
        "Description": "N/A",
        "Disciplines": "N/A",
        "Additional Weakness": "N/A",
        "Book": "N/A"
    },
    {
        "Name": "Moirai",
        "Nickname": "-",
        "Description": "Scholars and students of occult lore, whose memory is unaffected by the dreams of torpor and who can foresee the future.",
        "Disciplines": "Mention Only",
        "Additional Weakness": "-",
        "Book": "VTR 74"
    }
]


export {
    bloodlineData
}