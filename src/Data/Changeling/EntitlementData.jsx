const entitlementData = [
    {
        "Name": "Bishopric of Blackbirds",
        "Description": "Wandering fellowship, often regarded as a mixed omen, who seek to aid all other changelings, in exchange for favors.",
        "Requirements": "Wyrd ••; Empathy ••",
        "Privileges": "May purchase Aspersorium token",
        "Page": "CtL 290"
    },
    {
        "Name": "College of Worms",
        "Description": "Diviners who seek to study Fate and its signs where ever they may be found.",
        "Requirements": "Wyrd •••; Investigation ••; Occult ••",
        "Privileges": "Awarded The Diviner's Instrument token",
        "Page": "CtL 293"
    },
    {
        "Name": "Duchy of the Icebound Heart",
        "Description": "Drawing from the ranks of the brokenhearted, these manipulators who seek to break the hearts of everyone that they can, to use and exploit them and be victims themselves no longer.",
        "Requirements": "Wyrd ••; Persuasion ••; Subterfuge ••; Mantle(Winter) •",
        "Privileges": "Gains significant social bonuses when interacting with those they have broken, until the victim loves again",
        "Page": "CtL 297"
    },
    {
        "Name": "Magistrates of Wax",
        "Description": "Self-styled organizers of Changeling society.",
        "Requirements": "Wyrd •••",
        "Privileges": "May purchase the Waxen Violet token",
        "Page": "CtL 300"
    },
    {
        "Name": "Margravate of the Brim",
        "Description": "Guardians of all Changelings, who spurn the courts and operate outside of them, but none the less do everything they can to protect the Freehold.",
        "Requirements": "Wyrd ••; Clarity >4; No Mantle",
        "Privileges": "Gain several minor bonuses when within the bordermarch territory that they guard.",
        "Page": "CtL 303"
    },
    {
        "Name": "Sacred Band of the Golden Standard",
        "Description": "Vain in the extreme, this band of warriors serves the freehold diligently for the praise and glamor it brings.",
        "Requirements": "Wyrd ••; Presence •••",
        "Privileges": "May spend a glamour to add any physical attribute's dots to a presence roll.",
        "Page": "CtL 306"
    },
    {
        "Name": "Satrapy of Pearls",
        "Description": "Hedonistic merchants who all things, even abstract concepts, as being potentially for sale. They frequently take a fancy to random items that they will exchange anything to obtain.",
        "Requirements": "Wyrd •••; Persuasion ••; Mantle(Spring) ••",
        "Privileges": "Gain a specialty in a social skill.",
        "Page": "CtL 310"
    },
    {
        "Name": "Scarecrow Ministry",
        "Description": "Inflicters of horror upon mortals, frequently the stuff of urban legends, in order to warn them away from dangerous places and actions.",
        "Requirements": "Wyrd •••; Manipulation •••; Mantle(Autumn) ••",
        "Privileges": "Awarded the Bugbear's Mask token",
        "Page": "CtL 313"
    },
    {
        "Name": "The Tolltaker Knighthood",
        "Description": "Bloody and merciless mercenaries, who will none the less never accept a task that they consider unjust.",
        "Requirements": "Wyrd ••; Mantle(Summer) •; Brawl, Firearms or Melee ••",
        "Privileges": "Bounty victims suffer half defense and reduced Initiative against the Knights",
        "Page": "CtL 317"
    },
    {
        "Name": "The Phantom Tong",
        "Description": "A criminal organization with a secret membership, working under the pretense that the chaos they cause keeps the Courts honest.",
        "Requirements": "Wyrd •• , Larceny •••",
        "Privileges": "Free specialty in Larceny or Streetwise, and Contacts/Allies relating to criminal world purchased at x1 dots.",
        "Page": "WM 143"
    },
    {
        "Name": "The Bronze Beylik",
        "Description": "Kingmakers who are supposedly cursed never to be rulers themselves. They seek to select a rule that is best for the freehold, or become the secret power behind the throne.",
        "Requirements": "Wyrd 3, Politics 3, Clarity 6 or higher",
        "Privileges": "Gain access to the Bronze Spearhead",
        "Page": "WM 146"
    },
    {
        "Name": "The Knighthood of the Dragonslayer",
        "Description": "Policers of Lost society, who see it as their task to root out corruption and purge it by any means necessary, infamously including torture.",
        "Requirements": "Wyrd 2, Wits + Composure of at least 6, Intimidation 2",
        "Privileges": "Gain access to the Grand Cross of Saint George.",
        "Page": "WM 149"
    },
    {
        "Name": "Bodhisattvas of the Broken Cage",
        "Description": "Social reformers that encourage individuals to break free from social mores and the rut of habit.",
        "Requirements": "Wyrd 2, Wits 3, Fleeting Spring 1, Mantle(Spring) 1",
        "Privileges": "Gain access to the Sprung Door token.",
        "Page": "LoS 43"
    },
    {
        "Name": "The Hound Tribunal",
        "Description": "In the latter days of Summer, the secret police of Summer come out, and 'deal' with anyone who seems to have obstructed or turned traitor against the Summer Monarch.",
        "Requirements": "Wyrd 2, Subterfuge 2, Stealth 2, Martial skill at 3, Mantle(Summer) 2",
        "Privileges": "+2 to subterfuge rolls when lying about themselves. Also taught the Turncoats Assurance pledge.",
        "Page": "LoS 63"
    },
    {
        "Name": "Magi of the Gilded Thorn",
        "Description": "Wandering hermits that seek to understand the power and treasures of the Hedge.",
        "Requirements": "Wyrd 2, Occult 2, Survival 3, Mantle(Autumn) 2",
        "Privileges": "No -1 to degeneration when in Hedge, can go hours=Wyrd before losing Glamour to the Thorns",
        "Page": "LoS 83"
    },
    {
        "Name": "Knighthood of the Utmost Silence",
        "Description": "Knights that help Changelings leave situations by stealth and guile, be it evading the eyes of the Gentry, or getting out of jail quietly and setting up a new name.",
        "Requirements": "Wyrd 3, Stealth 2, Subterfuge 2, Weaponry 1, Mantle(Winter) 1",
        "Privileges": "Gain power Shadowkiss. Kisses recipient and spends Glamour, imposes -3 penalty to anyone wanting to discover information about the recipient, ends after a day unless another Glamour is spent.",
        "Page": "LoS 102"
    },
    {
        "Name": "The Ancient and Accepted Order of Bridgemasons",
        "Description": "Known chiefly for the art of Wyrdbuilding. Group of builders with secret signs to guard their art.",
        "Requirements": "Wyrd 3, Crafts 3 + Specialty: Construction, Mantle (Autumn) 1, Elemental or Ogre",
        "Privileges": "Wyrdbuilding: can construct a building for 1 Glamour per hour per 20 size points. Building must touch bare stone or soil. Complex buildings need an Int+Crft. This can also be used to destroy other buildings at the same rate. Mortals cannot witness or know how the building was constructed or the task fails or begins to crumble at the rate it was built.",
        "Page": "LoS 110"
    },
    {
        "Name": "The Barony of the Lesser Ones",
        "Description": "Investigators and diplomats to hobgoblins, judges and enforcers of relations between Changelings and hobgoblins.",
        "Requirements": "Wyrd 3, Intimidation 3, Persuasion 3 (or 2 Intim and 2 Pers if possess Gentrified Bearing or Hob Kin merits)",
        "Privileges": "+2 to all Intimidation and Persuasion made against hobgoblins or other Hedge denizens, +1 defense against these, and +1 bonus to navigate the Hedge.",
        "Page": "LoS 113"
    },
    {
        "Name": "Court of the Solstice",
        "Description": "Highly varied title venerating or at least seeing the merit in the between places of the world. Generally looked on poorly by the traditional courts.",
        "Requirements": "Wyrd 3, Mantle 0",
        "Privileges": "Concider Desperation the title's native emotion and so harvest additional glamour from it. It is also the emotion for Bedlam.",
        "Page": "LoS 117"
    },
    {
        "Name": "The Duchy of Truth and Loss",
        "Description": "Fetchhunters and killers, but doing so discreetly so it seems the person vanished.",
        "Requirements": "Wyrd 2, Resolve 3, Investigation 3, Mantle(Winter) 1",
        "Privileges": "Gains a free 2-dot Hedgespun rainment armour, and the token False Face of Truth.",
        "Page": "LoS 121"
    },
    {
        "Name": "The Eternal Echoes",
        "Description": "Historians and witnesses to the dangers and heroes the Lost.",
        "Requirements": "Wyrd 3, Eidetic Memory, Intelligence 3",
        "Privileges": "Perfected Memory: Willpower and Glamour causes the rest of the scene to be perfectly remembered in all detail and replayable. This cannot be altered or stolen by mundane or supernatural means. +5 to resist coercion to get recorded memories. Can only remember 10xWyrd scenes. Memory Transferal:Ritual dream with skin-to-skin contact where the Lord may give a memory to another Echo.",
        "Page": "LoS 125"
    },
    {
        "Name": "The Guild of Goldspinners",
        "Description": "Creators of gold and wealth. Enforcers of bargains.",
        "Requirements": "Wyrd 2, Crafts 2 + Specialties: Textiles and Smithing, Mantle(Spring) 1",
        "Privileges": "Access to the Gildwheel toke, and access to the Gildwheel Pledges.",
        "Page": "LoS 130"
    },
    {
        "Name": "Guild of the Sacred Journey",
        "Description": "Couriers and messengers, typically for inter-freehold contact, but can be used personally too. Inter-freehold deliveries are free, and the Courier cannot investigate the package.",
        "Requirements": "Wyrd 2, Drive 2, Expression 2, Streetwise 2, minimum Clarity 5, Fairest only",
        "Privileges": "gain access to the Courier's Winged Sash token.",
        "Page": "LoS 134"
    },
    {
        "Name": "Knights of the Knowledge of the Tongue",
        "Description": "Gourmands always experimenting with new foods and ingredients. Usually outlandish.",
        "Requirements": "Wyrd 3, Crafts 3 or Crafts 2 + Specialty: Cooking",
        "Privileges": "+3 to any roll to track down a Goblin Fruit, Hob Goblin, or other element in the hedge, as long as it pertains to a dish hoped to prepare. outside of a dish, there is a +1 to find Goblin Fruits",
        "Page": "LoS 138"
    },
    {
        "Name": "Legacy of the Black Apple",
        "Description": "Negotiators with the True Fae. Pledgemasters and careful diplomats.",
        "Requirements": "Wyrd 5, Clarity 6 or higher, one of the following Social Skills at four dots: Empathy, Persuasion, Socialize, Subterfuge",
        "Privileges": "Have at least 1 minute per wyrd of talk time with a Keeper before they attack. Non Supernatural Manipulation rolls are exceptional success on 3 success instead of 5. Gain access to the Black Apple Pendant token.",
        "Page": "LoS 142"
    },
    {
        "Name": "The Lord Sages of the Unknown Reaches",
        "Description": "Scholars and researchers of other supernatural phenomena.",
        "Requirements": "Wyrd 2, Occult 3, at least two Occult specialties",
        "Privileges": "+1 to Socialize and Persuasion rolls with one type of supernatural creature. Can purchase Allies or Contacts with any supernatural being. May purchase Enhanced Items (Mage) Imbude Item (Mage) Library (Mage) Fetishes (Werewolf) merits.",
        "Page": "LoS 147"
    },
    {
        "Name": "The Lost Pantheon",
        "Description": "Changelings that believe themselves gods.",
        "Requirements": "Wyrd 6, Mantle (Any) 4, Clarity No higher than 6",
        "Privileges": "Perception Minuses for low clarity are reversed, becoming bonuses. These bonuses are also added to her Wyrd to determine longevity. Can Harvest Glamour from worshipers by revealing true form. Always considered 'court' harvest, even if courtless. +2 to all rolls to attack, defy, or otherwise engage in aggression or resistance against the Gentry and their Minions",
        "Page": "LoS 151"
    },
    {
        "Name": "The Order of Oneirophysics",
        "Description": "Mystics and healers that focus on the real of dreams and their power.",
        "Requirements": "Wyrd 2, Medicine 2, Empathy 1 Special",
        "Privileges": "Spend 1 Glamour to enter a Lucid Dream even without being in a hedge or hollow. When doing this may enter any dreams of someone in skin to skin contact. May use Dream healing, based on Rank",
        "Page": "LoS 155"
    },
    {
        "Name": "The Charmed Circle",
        "Description": "Eldrich order that consists of real rulers; those with the confidence and personal power to truly lead.",
        "Requirements": "Wyrd 7, Persuasion 4, Willpower 7, Mantle 5",
        "Privileges": "5 merit dots to be spent on social merits. Once per story may touch a target and verbally declare Friend or Foe. Friends get +1 to all non social rolls. Gains 2 Willpower on waking, and +3 to social rolls involving the freehold (except the Sovereign) Foes have -1 to all social rolls, loose one willpower on waking and a -3 to all social rolls involving the freehold (The Sovereign is still excluded). Gains access too the Gilded Torc Token",
        "Page": "ER 40"
    },
    {
        "Name": "Knights of the Widow’s Walk",
        "Description": "Spies that can change their face. Generally not known about.",
        "Requirements": "Wyrd 6, Subterfuge 4, Mantle 2 or less",
        "Privileges": "May shift their Mien within her Seeming to appear as another kith when receiving an assignment. May do so again before new assignment at the cost of one Willpower dot. Cannot appear as someone else. Can Smell lies without a roll. May regain one glamour a day from a successful lie. Gains a free specialty in subterfuge.",
        "Page": "ER 44"
    },
    {
        "Name": "The Parliament of Victors",
        "Description": "Champions and slayers. Victors that have to keep winning.",
        "Requirements": "Wyrd 6, One combat-related Skill (Brawl, Firearms, Weaponry) at 4, Presence 4",
        "Privileges": "Privileges can be lost if the Champion fails a task or challenge. All Physical rolls are considered exceptional on 4 success instead of 5. Gains Striking Look at 4. +1 to Persuasion rolls if she already possess the merit. Once per chapter may spend glamour to add her Wyrd score to a single combat roll. The attack is dramatic and showy.",
        "Page": "ER 48"
    },
    {
        "Name": "The Office of the Vizieral Counsel",
        "Description": "Mad wizards that use the order to keep their insanity in check. Impartial magical advisers to all courts.",
        "Requirements": "Wyrd 7, At least 12 dots in various Contracts, Politics 3, Occult 3",
        "Privileges": "The Vizier does not Age as long as she is part of the order. +5 dice when making a roll to resist activating a derangement. +1 to Clarity rolls made to resist gaining a new derangement. She can ignore all Major Frailties (Minor's still apply) Leaving the order causes an immediate loss of a Clarity dot. When purchasing a Contract that will further help her duties for the king or queen, it then costs new dots x2 for that clause.",
        "Page": "ER 52"
    },
    {
        "Name": "The Family of Silent Nights",
        "Description": "Dreamtrappers. They watch dreams for intrusion by the true fae, and can bind almost any oneiropomp in the physical world.",
        "Requirements": "Wyrd 4, Contract of Dreams 2, Empathy 2",
        "Privileges": "Can craft a Dream Prison - Same as crafting a new dream, but instead is a hole where a dream will fall. Can specify what kind of dream.",
        "Page": "DD 145"
    },
    {
        "Name": "The Hedge Wardens",
        "Description": "Nobles that seek to tame the local hedge, slay dangers from the Hedge, and keep the Trods open so that the Lost can escape Arcadia.",
        "Requirements": "Wyrd 3, Investigation 2, Occult 2",
        "Privileges": "When ever tainted by magic that allows her Wyrd as a penalty to its roll or to roll Wyrd as part of her resistance, her wyrd is 1 higher for that purpose.",
        "Page": "DD 149"
    },
    {
        "Name": "The Squires of the Broken Bough",
        "Description": "A nomadic order that moves soldiers to where they are most needed. They fight off whatever danger a freehold faces before moving on to the next distant threat. All have nearly lost everything to the threat and so this task consumes them.",
        "Requirements": "Wyrd 2, Resolve 3; Any of Brawl, Firearms, or Weaponry 2",
        "Privileges": "Gains access to the Broken Blade Token",
        "Page": "DD 153"
    },
    {
        "Name": "The Twilight Gleaners",
        "Description": "Devotees to fate. Often come into conflict with the College of Worms. Worms seek to understand fate, Gleaners seek to simply enact fates will.",
        "Requirements": "Wyrd 3, Empathy 2, Occult 2",
        "Privileges": "Spend 1 glamour and discover if an action is fated to succeed of rail. Successful fate gives a +1 to any roll for directly furthering the plan, and -1 to anyone attempting to hinder it. If the plan is destined to fail, bonuses are reversed.",
        "Page": "DD 156"
    },
    {
        "Name": "The Adjudicators of the Wheel",
        "Description": "Judges of fate who tsk themselves with making sure that the worthy get success, and the unworthy fail.",
        "Requirements": "Wyrd 3, Contracts of the Hearth 2, Investigation 3",
        "Privileges": "May activate Fortunes Wheel when using the Contracts of Hearth. +1 Glamour to store the contract activation opposite of the one enacted, and may use it against a second person.",
        "Page": "SD 142"
    },
    {
        "Name": "The Legion of the Iron Wall",
        "Description": "Tacticians and guardians of the freeholds worldwide. They monitor threats to freeholds and mobilize to defend them.",
        "Requirements": "Wyrd 4, Persuasion 3, Brawl, Firearms or Weaponry 4",
        "Privileges": "Can swear the Freehold's Defender Oath. May train followers who can purchase certain traits even even if they don't have the experience for it yet.",
        "Page": "SD 146"
    },
    {
        "Name": "The Order of the Hallowed Garden",
        "Description": "Architects of urban renewal and change. Designers of 'gardens' where people can rest and keep the community peaceful.",
        "Requirements": "Wyrd 3, Politics 3, Socialize 3",
        "Privileges": "Declares an area equal to Wyrdx200 yards or less or Wyrdx1000 population or less their territory. People not aligned to the principles of the region will want to leave. +1 to people furthering the goals within the region.",
        "Page": "SD 150"
    },
    {
        "Name": "The Pilgrims of the Endless Road",
        "Description": "Journeymen who desire to improve themselves to unattainable perfection. Envied or disdained by others usually.",
        "Requirements": "Wyrd 3, Resolve 3, No Attribute at 1.",
        "Privileges": "May choose a 2nd Kith Blessing (which must be from a different seeming) May exceed Dual Kith rules (allowing a 3rd Kith)",
        "Page": "SD 154"
    }
]

export { entitlementData }