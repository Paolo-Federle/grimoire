const skillsMentalData = [
    {
        "Name": "Academics",
        "Description": "General understanding of higher education, Arts and Humanities.",
        "Used by": "College Graduates, Executives, Lawyers, Librarians, Scholars, Students",
        "Specialties": "20th Century History, Accounting, Ancient History, Anthropology, Arcane History, Archaeology, Architecture, Art, Art History, Battle Tactics, Behavioural Psychology, Bibliophile, Business, Catholic Dogma, Celtic Mythology, Christian Philosophy, Church History, Cinema, Civil Rights, Classical Age Astronomy, Classics, Coaching, Criminology, Early Childhood Education, Economics, Editing, English, Environmental Studies, Erotica, Etiquette, European History, Facts, Finance, Folklore, French History, Funeral Rites, Hindu, History, History of Astronomy, History of Atlantis, History of Mathematics, Invented Languages, Journalism, Judaism, Latin and Greek Literature, Law, Liberal Arts, Library Science, Linguistics, Literature, Local Folklore, Local History, Logic, Machiavelli, Mathematics, Military History, Music History, Native American History, Norse Heathenism, Occult History, Old Books, Philosophy, Poetry, Poli Sci Major, Police Procedures, Political Science, PR, Psychology, Random Facts, Rare Books, Religion, Religious Studies, Reptiles, Republican Latin Literature, Research, Rizzetti Artifacts, Serial Killers, Sociology, Strategy and Tactics, Suicide, Symbolic Logic, Taoism, Teaching, Testament of Longinus, Theban Sorcery, Theology, Trivia, TSKSR, Uratha History, War History, Weird",
        "Common rolls": "Researching (Intelligence + Academics, Extended)",
        "Book": "WoD 55"
    },
    {
        "Name": "Computer",
        "Description": "Training and knowledge of using computers. At •••, the player can make his own programs. Only applies to software.",
        "Used by": "Businesspeople, Professors, Programmers, Students, Sysadmins",
        "Specialties": "Advanced Programming, Altering Records, Bypass Security, Chat Rooms, Cracking, Cryptography, Data Retrieval, Design, Digital Film, Firewalls, Fraud, Graphic Modelling, Graphics, Hacking, Internet, Internet Investigation, Internet Security, Music, Networks, Online Gaming, Programming, Running Scams, Search Engines, Speed-Coding, Spread Sheets, Surveillance, SysAdmin, Virtual Simulation, Virus Negation, Windows",
        "Common rolls": "Hacking (Intelligence + Computer vs. Intelligence + Computer, Extended)",
        "Book": "WoD 56"
    },
    {
        "Name": "Crafts",
        "Description": "Capability to create art, constructions and following directions. Basically useless without proper tools.",
        "Used by": "Contractors, Mechanics, Plumbers, Sculptors, Welders",
        "Specialties": "Aircraft, Alchemy, Architecture, Armorsmith, Automobiles, Automotive Repair, Baking, Bat-Making, Beadwork, Bike Repair, Blacksmithing, Blueprints, Boats, Bomb Making, Bone Carving, Bonecrafting, Booby Traps, Book-Binding, Brewery, Bricklaying, Calligraphy, Car Repair, Carpentry, Clay, Clockwork, Clothing, Clothing Design, Computer, Constructions, Contraptions, Cookery, Cooking, Curing Food, DIY, Dolls, Dressmaking, Electric, Electronic Devices, Electronics, embalming arts, Engines, Explosives, Fashion, Fetishes, Fibre Arts, Film Composition, Film Editing, Fire, Fletcher, Forging, Furniture, Gadgets, Gardening, Guitar Repair, Guns and Ammo, Gunsmithing, Hedgespun, Hidden Devices, Home Repair, Hopi Pottery, Horticulture, Housecleaning, Incendiaries, Jewelry, Jury-Rigging, Knifesmithing, Knitting, Knot-Working, Leather, Leatherworking, Making Candy, Mechanical Engineering, Memory crafting, Metalwork, Needlepoint, Needlework, Nestmaking, Painting, Painting Figurines, Paper-Folding, Planetary Mobiles, Pledge, Plumbing, Pottery, Practical Masonry, Primitive Shelters, Religious Carvings, Repair, Repair Item, Sculpting, Self-Repair, Sewing, Shipwright, Simple Machines, Skinning and Boning, Smiting, Sound Engineer, Spinning, Stone cutting, Tailoring, Tanning, Tattoo Artist, Tattoos, Taxidermy, Tokens, Traps, Vehicles, Weapon Maintenance, Weaponscraft, Weaponsmith, Weaving, Web Page Design, Webs and Traps, Whittling, Wire Sculpture, Woodburning, Woodcarving, Woodworking",
        "Common rolls": "Create Art (Intelligence + Crafts, Extended), Repair Item (Dexterity + Crafts, Extended)",
        "Book": "WoD 57"
    },
    {
        "Name": "Investigation",
        "Description": "Ability to find clues and solve puzzles",
        "Used by": "Criminals, Doctors, Forensic Examiners, Police Officers, Scientists, Scholars, Soldiers",
        "Specialties": "Academic Research, Ambush Locations, Artifacts, Artifacts, Autopsy, Autopsy Diagnoses, Background Checks, Ballistics, Battle Scenes, Body Language, Book Collecting, Corporate Dealings, Counter-forensics, Crime Scenes, Cryptography, Darkness, Deaths, Deductive Reasoning, Digging Dirt, Dirty Secrets, Dream Interpretation, Dreams, Equations, Eye for Detail, Financial Research, Find Ingredients, Finding Data, Finding Gaps, Finding Threats, Forsaken, Fortean Phenomena, Fugitives, Gathering Blackmail Material, Identify Antagonists, Inquisitor-Style, Interviews, Intuitive, Investigate Identity, Journalism, Legal Connections, Legal Matters, Legal Research, Library, Listening, Little Details, Locating People, Locations, Malleus Maleficarum activity, Microfiche, Mysteries, Mystical, News, Obfuscating Crime Scenes, Online, Paper Trails, Paranoia, Paranormal, People’s Dirty Secrets, Police Procedures, Prey Mentality, Primary Sources, Profiling, Puzzles, Real Estate History, Recognize Evidence, Red Tape, Remote spyware, Research, Researching Data, Riddles, Rumours, Scents, Scientific Experiments, Searching, Sentry, Shadow Realm, Small Details, Smell of Blood, Solving Enigmas, Spiritual, Statistics, Subtle, Supernatural Crimes, Supernatural Influence, Surveillance, Taste, Tunnels, Undercover Work, Unusual Occurrences, Uratha Spoor, Vetting, Wrecking Crime Scenes",
        "Common rolls": "Examining a Crime Scene (Wits + Investigation, Extended), Solve Enigmas (Intelligence + Investigation, Instant or Extended)",
        "Book": "WoD 59"
    },
    {
        "Name": "Medicine",
        "Description": "Training and expertise in human physiology and how to treat injuries.",
        "Used by": "Medical Students, Paramedics, Physicians, Psychologists, Surgeons",
        "Specialties": "Anatomy, Amputation, Back Injuries, Basic Anatomy, Battlefield, Bleeding, Blood Loss, Broken Bones, Burns, Cancer Treatments, Casing, Childbirth, Diagnostics, Diet, Diseases, Dissection, Drugs, Emergency Care, Fads, Field, Field Dressing, Field Medicine, First Aid, Gerontology, Goblin Fruits, Hallucinogens, Hematology, Herbal, Herbal Remedies, Hospice Care, Intoxicants, Midwife, Natural Healing, Natural Remedies, Neuroanatomy, Nineteenth-Century Surgery, Patching Up, Pathology, Pharmaceuticals, Physical Therapy, Poisoning, Poultices and Bindings, Psychiatric, Psychology, Psychopharmacology, Reproductive Science, Sedation, Sports Injury, Stitches, Street Drugs, Surgery, Toxins, Treating Lacerations, Veterinary, Vivisection, Weight Loss",
        "Common rolls": "Healing Wounds (Dexterity or Intelligence + Medicine, Extended)",
        "Book": "WoD 61"
    },
    {
        "Name": "Occult",
        "Description": "Understanding of the supernatural and lore.",
        "Used by": "Anthropologists, Authors, Neo-pagans, Occult Scholars, Parapsychologists",
        "Specialties": "Absinthe Drinking Ritual, Acamoth, Afterlife, Alchemy, Aliens, Ancient Magics, Ancient Texts, Angelic Phenomena, Angelology, Angels, Appalachian Hoodoo, Arcane History, Artificial Spirits, Asian Beliefs, Atlantean, Atlantis, Awakened Society, Aztec, Aztec ritualism, Bans, Carny Tales, Celtic Paganism, Celtic Tradition, Changelings, Chinese Lore, Christian Mysticism, Christianity and its Heresies, Coil Theory, Conspiracies, Creation Myths, Cryptozoology, Cults, Cultural Beliefs, Cultural Legends, Curses, Death, Debunking, Demon Lore, Demonology, Diabolism, Divination, Doomsday Omens, Eastern European Paganism, Egyptian Theology, Elemental Spirits, Elementals, Esoteric Hinduism, Fae, Faerie Lore, Fairy Tales, Fetches, Fetishes, Gematria, Gentry, Ghosts, Gifts, Gnostic Christianity, Goblin Fruits, Goetia, Greco-Roman, Healing, Hosts, Human-Mimics, Jewish Mysticism, Kabbalah, Kindred “Biology”, Lefthanded Legacies, Lex Magica, Ley Lines, Lithuanian Paganism, Local Folktales, Local Shadow, Local Spirit Bans, Local Wounds, London’s Shadow, Lunar Choirs, Lunes, Lycanthropy, Magath, Mages, Magic, Manichaean, Martial Arts Esoterica, Middle Eastern Legends, Monsters, Mysterium, Mystery Cults, Mystic Architecture, Mystic Words, Mystical Alphabets, Nature Spirits, Nautical Phenomena, Necromancy, Numerology, Obscene Truths, Omens and Portents, Pain Spirits, Paradox, Planetary Courts, Pledge Loopholes, Pledge-lore, Pop Satanism, Possession, Prophecy, Resonance, Resurrection, Ridden, Ritual Magic, Rituals, Sacred Geometry, Sacrifices, Santería, Satanism, Sea, Secret Societies, Shamanic, Spanish Legend, Spells, Spirit Choirs, Spirit Histories, Spirit Lore, Supernal Artifacts, Supernal Realms, Superstitions, Symbolism, Symbology, Tantra, Tarot, The Blood, The Crone, The Hedge, The Hisil, The Maeljin, The Shadow, Theosophy, Tibetan, Traditional Fables, Trash Spirits, True Fae, UFO-logy, Undead, Uratha, Urban Legends, Urban Spirits, Vampires, Vampirism, Voodoo, Werewolf Legends, Witchcraft, Written Histories",
        "Common rolls": "-",
        "Book": "WoD 62"
    },
    {
        "Name": "Politics",
        "Description": "Familiarity with the political process and bureaucratic voodoo.",
        "Used by": "Bureaucrats, Civil Servants, Journalists, Lawyers, Lobbyists, Politicians",
        "Specialties": "Academia, Anarchy, Anshega, Arcadian, Awakened Trials, Behind the Scenes, Bribery, Bureaucracy, Changeling Courts, Changeling Society, Chicago, Church of England, Circle of the Crone, City Bureaucracy, City Hall, Cliques, Consilium, Corporate, Court, Dirty Tricks, Domain management, Economic, Elections, Family, Far-Right Rhetoric, Federal, Feud, Forsaken, Forsaken and Pure Relations, Freehold of Miami, Gangs, Gangs of the South Side, Global, Group Formation, High Society, Hippie, Hollywood, Imperial Politics, International Kindred, Invictus, Iron Masters, Ivory Claws, Kindred, Local, Lodge, Mages, Mercenary, Miami, Moots, Negotiation, Networking, New Orleans, Non-Profit, Office, Organized Crime, Personal Rivalries, Pharmacology, Planning, PR, Provincial and Diocesan Politics, Pure, Racial, Religious influences, Sanctified, Scandals, Seneschal, Senex, Sexual, Social, Socialism, Spirits, State, Trade, Tribal, Understanding Social Strata, Union, Uratha, Uratha Packs, Vampires, Zoning Boards",
        "Common rolls": "-",
        "Book": "WoD 62"
    },
    {
        "Name": "Science",
        "Description": "Understanding of physical and natural sciences. Helps with making the most with resources at hand.",
        "Used by": "Engineers, Scientists, Students, Teachers, Technicians",
        "Specialties": "Anatomy, Anthropology, Architecture, Astronomy, Astrophysics, Bats, Biochemistry, Biology, Botany, Chemical Reactions, Chemistry, Civil Engineering, Computer Theory, Dream Study, Ecology, Engineering, Explosives, Forensics, Fringe, Genetics, Geology, Geometry, Kitchen Chemistry, Mechanical Engineering, Metallurgy, Meteorology, Military, Non-Euclidean Geometry, Optics, Organic Chemistry, Paleontology, Pharmaceuticals, Phrenology, Physics, Poisons, Probability, Psychology, Quantum Physics, Sedatives and Tranquilizers, Structural Engineering, Theoretical Mathematics, Toxicology, Toxins, Zoology",
        "Common rolls": "-",
        "Book": "WoD 63"
    }
]

const skillsPhysicalData = [
    {
        "Name": "Athletics",
        "Description": "Broad category of physical training.",
        "Used by": "Professional Athletes, Police Officers, Soldiers, Survivalists, Physical Trainers",
        "Specialties": "Acrobatics, Back Exercises, Baseball, Bow, Cardiovascular, Chases, Climbing, Contortionist, Cricket, Cycling, Dancing, Dig, Endurance, Equestrian, Feats of Strength, Fending Off Advances, Flee, Flight, Graceful, Gymnastics, Hauling, Hedge-climbing, Hiking, Ice Skating, Juggling, Jumping, Kayaking, Leaping, Lifting, Long Distance Running, Lope, Manual Dexterity, Parkour, Pursuit, Racquetball, Repetitive Exercises, Rugby, Scrambling, Sex, Skydiving, Sprinting, Swimming, Tai Chi, Team Sports, Tennis, The Beautiful Game, Throwing, Thrown Objects, Thrown Pilum, Tumbling, Weight Lifting, Weight Training, Winter Sports",
        "Common rolls": "Climbing (Strength + Athletics, Instant or Extended), Foot Chase (Stamina + Athletics vs. Stamina + Athletics, Extended), Jumping (Strength + Athletics, Instant), Throwing (Dexterity + Athletics, Instant)",
        "Book": "WoD 64"
    },
    {
        "Name": "Brawl",
        "Description": "Various forms of unarmed fighting.",
        "Used by": "Bikers, Boers, Gangsters, Police Officers, Soldiers",
        "Specialties": "All-Out Attack, Army Fighting, Bar-rooms, Beak, Bear Hug, Big Rig, Bind, Bite, Blind-Fighting, Blocking, Boxing, Cat Scratch, Cheap Shot, Choke Holds, Choking, Claws, Cling, Crush, Dalu, Defensive, Dirty Tricks, Disabling Limbs, Donnybrooks, Elbow Strike, Escape Grapple, Eye Gouges, Fangs, Fisticuffs, Gauru, Gnashing Teeth, Grappling, Headbutts, Holds, In the Ring, Incapacitation, Judo, Karate, Kicks, Kindred Physiology, Knockdown, Kung Fu, Lashing Out, Life and Death Fights, Mandible Bite, Overpowering, Protecting Loved Ones, Pugilism, Punches, Punishing Blows, Raking Claws, Savate, Self-Defence, Shove, Showy kicks, Spirits, Stony Fists, Strangling, Streetfighting, Strikes, Striking from Behind, Subdue, Subduing, Submission holds, Tae Kwon Do, Tail, Talons, Thorny Limbs, Throating, Throws, Tooth and Nail, Unarmed Against Weapons, Urshul, Wrestling",
        "Common rolls": "-",
        "Book": "WoD 68"
    },
    {
        "Name": "Drive",
        "Description": "Ability to do stunts in a vehicle. Note that this only applies to dangerous situations; Possessing no dots does not necessarily mean that you are incapable of driving.",
        "Used by": "Car Thieves, Couriers, Delivery Drivers, Emergency Respondesr, Police Officers, Racecar Drivers",
        "Specialties": "18-wheelers, At Speed, Big Cars, Box Truck, Buses and Trucks, Chases, Cycling, Defensive, Ferrari, Getaway Car, Harleys, High-Performance Cars, Horse Riding, Jeeps, Motorcycles, Off Road, Pilot, Pursuit, Sail, Shaking Tails, Small Aircraft, Small Watercraft, Speed Boats, Speeding, Sports Cars, Stunts, Tailing, Trucks, Urban Traffic, Van",
        "Common rolls": "Vehicle Pursuit (Dexterity + Drive + vehicle Handling vs. Dexterity + Drive + vehicle Handling, Extended), Vehicle Trailing (Wits + Drive + vehicle Handling (Tail) vs. Wits + Composure (Subject), contested)",
        "Book": "WoD 69"
    },
    {
        "Name": "Firearms",
        "Description": "Ability to identify, operate and maintain guns.",
        "Used by": "Criminals, Gun Dealers, Hunters, Police officers, Soldiers, Survivalists",
        "Specialties": "Auto-fire, Automatic Weapons, Bow, Close Range, Drive-By, Flamethrower, Head Shots, Longbow, Military Issue, Paintball, Pistol, Revolver, Rifle, Sawed-off Shotguns, Scattergun, Semi-Automatics, Shotguns, SMGs, Sniper Riffle, Sniping, Steamgun, Target Shooting, Trick Shots, Two guns, Video Games",
        "Common rolls": "-",
        "Book": "WoD 72"
    },
    {
        "Name": "Larceny",
        "Description": "Broad range of criminal activities and actions performed in secret.",
        "Used by": "Burglars, Commandos, Government Agents, Private Eyes",
        "Specialties": "Acquiring Food, Alarm Systems, Arson, Automotive, Break-Ins, Breaking and Entering, Breaking Codes, Burglary, Case the Joint, Cheating, Con Artist, Concealing Stolen Goods, Escape, Forgery, Forging Documents, Fraud, Gaining Entry, Hot wiring, Jimmying Locks, Lock Picking, Locks, Palming Objects, Pickpocketing, Plain Sight, Planned Jobs, Pocket, Safe-cracking, Security Systems, Shoplifting, Sleight of Hand, Stealing Cars",
        "Common rolls": "Bypass Security Systems (Dexterity + Larceny, Extended), Lockpicking (Dexterity + Larceny, Extended), Sleight of Hand (Dexterity + Larceny Vs. Wits + Composure or Wits + Larceny, Contested)",
        "Book": "WoD 74"
    },
    {
        "Name": "Stealth",
        "Description": "Ability to move quietly or to avoid notice. Using concealment is Dexterity + Stealth, using a crowd is Wits + Stealth. Storyteller may make this roll for you.",
        "Used by": "Criminals, Hunters, Police Officers, Private Investigators",
        "Specialties": "Alleys, Ambushes, Avoiding Pursuit, Back Alleys, Barefoot, Blending with the Crowd, Broad Daylight, Camouflage, Catching People by Surprise, City, Concealment, Crowds, Darkness, Doors, Easily Overlooked, Eavesdrop, Eavesdropping, Fair Escape, Get Away, Going to Ground, Hiding, Hiding in Plain Sight, High Up, Hishu, Hunting, In the Subways, Indoors, Libraries, Lurking, Lying Low, Motionless, moving in damaged Buildings, Moving in Darkness, Moving in Moonlight, Moving in the Hedge, Moving in Woods, Moving Quietly, Owl Form, Plain Sight, Quick Exits, Quiet and Still, Remaining Inconspicuous, Remaining Still, Remaining Unnoticed, Security, Shadow, Shadowing, Silent Entry, Silent Observer, Skulking, Slithering, Sneak, Snow, Spying, Stalking, Stalking Werewolves, Surprise Entrances, Urban Environments, Urban Shadowing, Urban Stalking, Walk Softly, Walking Quietly, Wilderness",
        "Common rolls": "Shadowing (Wits + Stealth (Shadow) vs. Wits + Composure (Subject), Contested)",
        "Book": "WoD 76"
    },
    {
        "Name": "Survival",
        "Description": "Experience or training when living off the land. Finding shelter, food, etc. Does not apply towards animals.",
        "Used by": "Explorers, Hunters, Soldiers, Survivalists",
        "Specialties": "Camping, Cities, City Rooftops, Cold Weather, Cooking, Desert, Exposure, Fasting, Find Water, Finding Shelter, Fishing, Foraging, Foreign Cultures, Forests, Goblin Markets, Hedge, Hunting, Jungle, Knots, Long Journeys Across USA, Mesas, Meteorology, Mountaineering, Mountains, Navigation, Nocturnal, Open Plains, Scent, Scrounging, Shapeshifting, Shelter, Shoreline, Skinning, Sleeping Rough, Slums, Solo Journeys, Spirit Wilds, Streets, Tracking, Trapping, Urban, Walking, Water, Wilderness, Wilderness Endurance, Wilderness Travels, Winter, Woodland, Woods",
        "Common rolls": "Foraging (Wits + Survival, Extended)",
        "Book": "WoD 77"
    },
    {
        "Name": "Weaponry",
        "Description": "Finesse when using a melee weapon in combat.",
        "Used by": "Bikers, Criminals, Martial Artists, Police Officers, Soldiers",
        "Specialties": "Ambush, Axes, Axes and Hatchets, Baseball Bat, Baton, Bayonet, Big Knives, Blades, Bludgeons, Blunt, Blunt Instruments, Broadsword, Chain, Clubs, Cooking Implements, Dagger, Fencing, Fetish, Fire Axe, Flick-Knife, Gaff Hook, Guns as clubs, Hammer, Hatchets, Heavy Blades, Homemade Weapons, Hooks, Household Objects, Improvised Weapons, Katana, Katar, Kitchen Implements, Klaive Sword, Knives, Kukri, Lobotomy Picks, Machete, Maul, Multiple Opponents, Nightstick, Objects on Hand, Ornamental, Pilum, Pole Arms, Rapier, Reenactment, Scalpels, Scourge, Sickle, Small Pointed Objects, Spanner, Spears, Staff, Stage Combat, Staking, Sting, Straight Razor, Surgical Blades, Swords, Thrown Knives, Torture Implements, Trees, Trident, Whip",
        "Common rolls": "-",
        "Book": "WoD 78"
    }
]

const skillsSocialData = [{
    "Name": "Animal Ken",
    "Description": "Ability to read, anticipate and understand an animals signals and behaviours.",
    "Used by": "Animal Rescue Workers, Hunters, Long Time Pet Owners, Park Rangers, Ranchers, Trainers, Veterinarians",
    "Specialties": "Animal Needs, Arachnids, Bats, Bears, Befriending, Big Dogs, Birds, Birds of Prey, Calming the Wild, Canine Behaviour, Canines, Carnivores, Cats, Companion, Deer, Dogs, Fellow Predators, Game, Hedge Beasts, Herd Animals, Horses, Imminent Attack, Livestock, Overcoming Hostility, Predators, Rats, Reptiles, Snakes, Specific Kind of Animal, Spiders, Strays, Street Dogs, Training, Urban Predators, Vermin, Wolves",
    "Common rolls": "Animal Training (Composure + Animal Ken (Trainer) vs. Staminal + Resolve (Animal), extended)",
    "Book": "WoD 78"
},
{
    "Name": "Empathy",
    "Description": "Ability to read the emotions of other people and capacity to understand their perspectives. Hiding emotions and motives is Wits + Subterfuge.",
    "Used by": "Counsellors, Diplomats, Entertainers, Profilers, Psychiatrics, Police Officers",
    "Specialties": "Addiction, Anger, Anger, Audiences, Body Language, Boyfriends, Cold Read, Comfort, Cultural, Direct, Draw People Out, Dreams, Emotion, Exploiting Weakness, False Security, Family, Fanatical cultists, Fears, First Impressions, Fortune-Telling, Ghoul, Good Listener, Greed, Grief, Group Dynamics, Guilt, Her flock, Human, Kids, Lies, Listening, Lust, Mind Games, Motives, Needs, Nuzusul, Opposite Sex, Pack, Packmates, People-Watching, Personalities, Playing off Expectations, Putting People at Ease, Read Intention, Read Room, Read Victim, Relationships, Runaways, Sense Hostility, Sense Weakness, Sensing Fear, Shoulder to Cry On, Suffering, Sympathetic, Troubles, Ulterior Motives, Vices, Victims, Werewolves",
    "Common rolls": "-",
    "Book": "WoD 79"
},
{
    "Name": "Expression",
    "Description": "Training or experience in the art of communication, both to entertain and inform.",
    "Used by": "Actors, Ballet Dancers, Journalists, Musicians, Poets, Rock stars, Writers",
    "Specialties": "Academic Style, Acting, Animal Sounds, Articulate, Astronomy Presentations, Barks and Growls, Blog Articles, Calligraphy, Choir, Circus Ringleader, Classical Dance, Correspondence, Cursing, Cute, Dance, DJ, Drama, Drawing, Drums, Eloquence, Eulogies, Exposes, Extemporaneous Predictions, Extemporaneous Speech, Faith, Fire-Spinning, Flute, Fortune-Telling, Guitar, Half-Time Pep Talk, Hawking Goods, Homilies, Howls, Humorous, Impersonation, Inspired Ranting, Instruction, Internet Scree, Jokes, Keyboard, Lectures, Legalese, Lure, Lyre, Mad Ditties, Manners, Meetings, Memoirs, Memos, Military History, Mime, Ministry, Music, Musical Instrument, Nasty Diatribes, Newspaper Articles, Online, Oratory, Painting, Panegyric, Patriotic Zeal, Philosophical Debate, Piano, Plays, Poetic Compliments, Poetry, Preaching, Proselytize, Public Speaking, Pulpit, Quick Thinking, Rant, Reasoned Argument, Religious Ritual, Riddles, Rituals, Rousing Speeches, Saga, Sarcasm, Sax, Sermons, Showmanship, Singer-Songwriter, Singing, Song, Soothsaying, Speech Writing, Speeches, Spoken, Stage Magic, Storytelling, Tale-spinner, Theatrics, Trial Arguments, Whispered Speeches, Writing, Written, Written Communications",
    "Common rolls": "",
    "Book": "WoD 80"
},
{
    "Name": "Intimidation",
    "Description": "Use of fear to extort information.",
    "Used by": "Bodyguards, Bouncers, Gangsters, Executives, Police Officers, Soldiers",
    "Specialties": "Against Infractions, Authority, Badgering, Bellowing Roar, Bizarre Behaviour, Blackmail, Blatant Threats, Bluff, Bluster, Body Horror, Brainwashing, Brutal, Bullying, Causing Guilt, Civil Threats, Cold Glare, Cold Logic, Cold, glittering gaze, Crazy, Crazy-Looking, Creative Threats, Creepy, Cruel, Demonic Wrath, Disapproving, Discouraging Attention, Eerie Yowl, Extortion, Face-Offs, Faking Authority, Feral, Fire and Brimstone, Freak Show, Give It to You Straight, Glower, Horrifying, Hungry, Hungry Grin, Icy Glare, Implacable, In Your Face, Insinuation, Instill Paranoia, Intense, Interrogation, Jabs and Swipes, Larvae, Legalese, Loud, Madness, Matronly Authority, Money, Monstrous, Of Witnesses, Off-Hand Threats, Physical Threats, Physically Imposing, Prophecy, Quiet Authority, Rank and Privilege, Rational, Relentless, Rhetoric, Righteous Vengeance, Scary Friends, Scary Smile, Seething Rage, Shouting, Shrieks, Silent Treatment, Snake-Eyes, Snarls, Social Status, Spaz, Spirits, Stare-Downs, Steely, Strangers, Strong Arm Tactics, Subtle Bullying, Terrifying Reputation, The Faithful, Threatening Presence, Threatening Silence, Threatening Spirits, Threatening Voice, Torture, Tough, Towering, Ugly Threats, Unconscious Menace, Unnerving Stare, Veiled Barbs, Veiled Threats, Verbal, Violence, Warning Growl, Weight of Numbers, While Fighting, With Weapon, Wordless, Zealous",
    "Common rolls": "Interrogation (Wits + Intimidation (Interrogator) Vs. Stamina + Resolve (Subject), extended)",
    "Book": "WoD 80"
},
{
    "Name": "Persuasion",
    "Description": "Art of inspiring or changing minds with logic or charm.",
    "Used by": "Con Artists, Executives, Generals, Lawyers, Politicians, Salesmen, Sexual Predators",
    "Specialties": "A Deal You Can’t Refuse, Actions, Agitprop, Appear on the Level, Asking for Help, Avoid Violent Altercations, Backroom deals, Blunt, Body Language, Brainwashing, Bringing About Reconciliation, Calming, Carthians, Cause Doubt, Charming, Childlike, Children, Closing Statements, Closing the Deal, Command, Compelling, Con, Confession, Convert, Convincing Logic, Customers, Deal-Making, Debate, Delusions of Grandeur, Diplomacy, Disarming, Double-Talk, Dragon Politicians, Dragons, Earnest, Emotional Appeals, Emotional Blackmail, Enchanting, Entreat, Evangelism, Familiar Face, Fast-Talking, Fatherly, Fund Raising, Gentle, Getting Laid, Getting Trust, Good cop, Guile, Haggle, Harmless, Honest, Honey-Tongue, Hypnotic, Indoctrination, Ingratiating, Inspirational Speeches, Inspiring, Inspiring Troops, Kind, Kind Words, Kindly Old Lady, Leadership, Logical, Lupines, Money, Motivational Speeches, Negotiations, Neighbourly, Over a Drink, Overt Threats, Patient, Peer Pressure, Pep Talks, Pity, Playing on Sympathy, Preaching, Pusher Jive, Quick Cons, Reassuring, Rhetoric, Rugged Charm, Sales, Sales Pitches, Seduction, Sell Ice to Eskimo, Selling Self, Silver-Tongued, Sleazy Seduction, Smooth Charm, Smoothing Ruffled Feathers, Smoothtalking, Spirit Dealings, Spirits, Stubborn, Temptation, The Faithful, Understanding Motives, Vulnerable, Wheedling, Whiny Voice, Winsome",
    "Common rolls": "Cutting a Deal (Manipulation + Persuation Vs. Manipulation + Persuation, Extended and Contested), Fast-Talk (Manipulation + Persuation (Talker) vs. Composure + Empathy or Subterfuge (Subject), contested), Oratory (Presence + Persuasion vs. highest Resolve + Composure of audience, contested), Seduction (Presence + Persuasion or Manipulation + Persuasion (seducer) vs. Wits + Composure (Subject), contested and/or extended)",
    "Book": "WoD 83"
},
{
    "Name": "Socialize",
    "Description": "Interaction while maintaining dignity. For use in more formal scenarios.",
    "Used by": "Diplomats, Entertainers, Executives, Politicians, Salesmen",
    "Specialties": "Approachable, Art Society, Awakened Gatherings, Bar Hopping, Baseball Fans, Begging, Black Tie Affairs, Book Dealers, Boozing, Bringing Out the Best, Carousing, Casinos, Chat Rooms, Chatty, Christian Gatherings, Club Scene, Clubbing, Cocktail Hour, Cocktail Parties, Common Troops, Corporate, Dinner Parties, Dinner Party Conversation, Disarming Humour, Dress Balls, Drink All Comers Under the Table, Elysium, Etiquette, European High Society, Everybody’s Friend, Family, Fashion, Formal Events, Forsaken Gatherings, Frat Parties, Fraternize, Fund-Raising, Galas, Group Rituals, Heavy Drinking, Host, Informal Gatherings, Interviews, Kindred Parties, Life of the Party, Local Pubs, Loose Lips, Lower Class, Making Friends, Meat Markets, Mingle, Night Clubs, Orgies, Parties, Play Dumb, Ply with Substances, Polite, Schmooze, Sexual Techniques, Small Gatherings, State Dinners, Teenagers, Telling Stories, Uncovering Secrets, Upper Class, Uratha, When Drinking",
    "Common rolls": "Carousing (Manipulation + Socialize (Carouser) vs. Composure + Empathy (Subject), extended and contested)",
    "Book": "WoD 85"
},
{
    "Name": "Streetwise",
    "Description": "Understanding of street culture, and ability to gather information and supplies through illicit channels.",
    "Used by": "Criminals, Gangsters, Homeless People, Private Investigators, Police Offficers",
    "Specialties": "Asian Neighbourhoods, Avoiding Police, Bad Part of Town, Barrio, Black Market, Blending In, Blues Scene, Body Dumps, Buying Stolen Goods, Card Games, Chinatown, Chop Shops, Cicero (Suburb), City Secrets, Contraband, Conversational Evasion, Cover-Ups, Drug Culture, Drug Gangs, Drugs, Fencing, Finding Food and Shelter, Gangland, Gangs, Gay Nightclub Scene, Geography, Goblin Markets, Gossip, Goth Scene, Hiding Places, High School, Highway Culture, Homeless Shelters, Illegal Gatherings, Illicit Goods, Kindred Activity, Liberals, Little Havana, Mafia Contacts, Muscle Jobs, Near the River, Nightlife, Old Neighbourhood, Ports, Protected Area, Rumour Mill, Rumours, S&M Culture, San Diego, Scoring Drugs, Secret Routes, Shady Deals, Slave Dealing, South Side, Stolen Goods, Territories, Trouble, Trouble Spots, Undercover Operations, Underground Parties, Vampires",
    "Common rolls": "Working the Black Market (Manipulation + Streetwise, Extended)",
    "Book": "WoD 86"
},
{
    "Name": "Subterfuge",
    "Description": "Art of deception.",
    "Used by": "Actors, Con Artists, Grifters, Lawyer, Politicians, Teenagers",
    "Specialties": "Act Big, Acting Normal, Alter Ego, Bald Lie, Be Whoever They Want You To Be, Blaming Others, Boast, Bureaucratic Expediency, Careful Omission, Con Jobs, Conceal Motives, Concealing Emotions, Covering His Tracks, Covering Up, Cryptic Speech, Cunning, Deadpan, Detect BS, Disguise, Easily Underestimated, Evasive, Excuses, Faking Illness, False Friendship, False Identity, False Sincerity, Feign Alliance, Feign Weakness, Feigned Sympathy, Feints, Finding Loopholes, Getting Lies Straight, Glib, Half-Truths, Hidden Agenda, Hidden Power, Hiding Emotions, Hiding Fear, Hiding Thoughts, Impress, Improvised Deception, Inexpressive Features, Innocent Face, Innuendos, Internet, Leading Questions, Legal, Lies You Want to Believe, Little White Lies, Lure, Lying, Lying by Omission, Lyrical, Manipulative, Masking Strength, Mean-Little-Girl Tricks, Misdirection, Not Getting Caught, Omissions, Outright Lies, Pack Dynamics, Planetarium Politics, Playing Dead, Playing Innocent, Playing to Expectations, Poker Face, Presumed Innocence, Promises, Red Herrings, Religious obfuscation, Secrets, Seem trustworthy, Seeming Innocent, Spontaneous Deception, Spotting Lies, Stonewalling, Subversive, Suggestion, Twisted Logic, Under Duress, Unspoken Desires",
    "Common rolls": "Disguise (Wits + Suberfuge (Impersonator) vs. Wits + Subterfuge (Subject), contested)",
    "Book": "WoD 87"
}]

const skillsAlternateData = [
    {
        "Name": "Enigmas",
        "Description": "",
        "Used by": "",
        "Specialties": "Bureaucracies, Codes, Conspiracies, Research, Social Networks",
        "Common rolls": "",
        "Book": ""
    },
    {
        "Name": "Religion",
        "Description": "Knowledge of various Roman mythology and familiarity with rituals. Replaces Science or Computers where applicable.",
        "Used by": "Artists, Augurs, Devoted Pagans, Philosophers, Scholoers",
        "Specialties": "Omens, Pantheon (Roman, Egyptian, Parthian), Rituals",
        "Common rolls": "-",
        "Book": "RfR 106"
    },
    {
        "Name": "Warfare",
        "Description": "Understanding of tactical maneuvers, ability to plan for battles and read the flow of events during conflict. Ability to gain objectives with minimal losses. Replaces Science or Computers where applicable.",
        "Used by": "Military Officers, Mercenaries, Experience Criminals, Nomadic Tribesmen",
        "Specialties": "Ambushes, Fields of Fire, Troop Movements, Supply Lines, Terrain",
        "Common rolls": "-",
        "Book": "RfR 107"
    },
    {
        "Name": "Archery",
        "Description": "Ability to identify, operate and maintain bows and crossbows. Replaces Drive or Firearms where applicable.",
        "Used by": "Criminals, Mercenaries, Hunters, Soldiers",
        "Specialties": "Bow, Crossbow, Long Shot, Trick Shot",
        "Common rolls": "-",
        "Book": "RfR 107"
    },
    {
        "Name": "Ride",
        "Description": "Ability to do control a mount in dangerous situations; Possessing no dots does not necessarily mean that you are incapable of riding horses or camels or what have you. Replaces Drive or Firearms where applicable.",
        "Used by": "Noblemen, Soldiers, Nomads, Mercenaries, Farmers",
        "Specialties": "Dangerous Conditions, Pursuit, Maintaining Speed, Stunts",
        "Common rolls": "-",
        "Book": "RfR 108"
    },
    {
        "Name": "Sail",
        "Description": "",
        "Used by": "",
        "Specialties": "Navigation, Ship Identification, Repairs, Oared Vessels",
        "Common rolls": "",
        "Book": "",
    },
    {
        "Name": "Study",
        "Description": "General understanding of school subjects. Replaces Academics where applicable.",
        "Used by": "Children of Professors, Nerds, Teachers Pets, Kids who hang out at libraries, Students",
        "Specialties": "Art, Biology, Chemistry, English, Experimentation, Geology, History, Physics, Research",
        "Common rolls": "Research (Intelligence + Study, extended), Schoolwork (Intelligence + Study, Extended)",
        "Book": "Inn 55"
    }
]

export { skillsMentalData, skillsPhysicalData, skillsSocialData, skillsAlternateData }