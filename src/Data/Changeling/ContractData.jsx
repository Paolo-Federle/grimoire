const universalContractData = [
    {
        "Contract": "Contracts of the Board",
        "Rank": "N/A",
        "Cost": "N/A",
        "Dice Pool": "N/A",
        "Catch": "N/A",
        "Description": "N/A",
        "Book": "N/A"
    },
    {
        "Contract": "The Honest Eye",
        "Rank": "•",
        "Cost": "●",
        "Dice Pool": "Wits + Wyrd vs Composure + Tolerance",
        "Catch": "Against someone you've caught cheating without this clause",
        "Description": "Know whether someone is cheating at a formal competition",
        "Book": "SaD 46"
    },
    {
        "Contract": "Knowing the Competition",
        "Rank": "••",
        "Cost": "●",
        "Dice Pool": "Intelligence + Wyrd",
        "Catch": "Use in a rematch",
        "Description": "+4 to your next roll to oppose someone you've competed against in something",
        "Book": "SaD 47"
    },
    {
        "Contract": "The Living Game",
        "Rank": "•••",
        "Cost": "●●●",
        "Dice Pool": "Occult + Wyrd",
        "Catch": "Play a game analogous to the conflict",
        "Description": "Predict tactical developments in a conflict by playing a game against yourself",
        "Book": "SaD 47"
    },
    {
        "Contract": "The Game Master's Table",
        "Rank": "••••",
        "Cost": "●●●● (○)",
        "Dice Pool": "Manipulation + Wyrd",
        "Catch": "Prepare custom pieces representing each player",
        "Description": "Tactically coordinate a conflict by playing a game against yourself",
        "Book": "SaD 48"
    },
    {
        "Contract": "The Cheater's Gambit",
        "Rank": "•••••",
        "Cost": "●●●●○",
        "Dice Pool": "Manipulation + Wyrd vs Composure + Tolerance",
        "Catch": "Through a game you've played against someone who's died recently",
        "Description": "Cheat an entire side of a conflict out of fate, inflicting -4 briefly",
        "Book": "SaD 48"
    },
    {
        "Contract": "Contracts of Dream",
        "Rank": "N/A",
        "Cost": "N/A",
        "Dice Pool": "N/A",
        "Catch": "N/A",
        "Description": "N/A",
        "Book": "N/A"
    },
    {
        "Contract": "Pathfinder",
        "Rank": "•",
        "Cost": "●",
        "Dice Pool": "Intelligence + Wyrd",
        "Catch": "Pluck a Thorn within the day",
        "Description": "Intuit features in the local Hedge",
        "Book": "CTL 124"
    },
    {
        "Contract": "Forging the Dream",
        "Rank": "••",
        "Cost": "●",
        "Dice Pool": "Wits + Wyrd",
        "Catch": "Touch hands to your temple and the dreamer's",
        "Description": "Control the contents of a sleeper's dream",
        "Book": "CTL 125"
    },
    {
        "Contract": "Phantasmal Bastion",
        "Rank": "•••",
        "Cost": "●",
        "Dice Pool": "None",
        "Catch": "A token gifted from a loved one or enemy",
        "Description": "Gain Wyrd as a bonus to oneiromachic attack or defense",
        "Book": "CTL 126"
    },
    {
        "Contract": "Cobblethought",
        "Rank": "••••",
        "Cost": "●",
        "Dice Pool": "Intelligence + Wyrd",
        "Catch": "Thread from the dreamer's bedclothes",
        "Description": "Draw a single item or phenomenon out of a dream briefly",
        "Book": "CTL 126"
    },
    {
        "Contract": "Dreamsteps",
        "Rank": "•••••",
        "Cost": "●",
        "Dice Pool": "Intelligence + Wyrd",
        "Catch": "Leave a handcrafted item behind in dreams",
        "Description": "Enter a sleeper's dreams to exit through another's elsewhere",
        "Book": "CTL 127"
    },
    {
        "Contract": "Contracts of Hearth",
        "Rank": "N/A",
        "Cost": "N/A",
        "Dice Pool": "N/A",
        "Catch": "N/A",
        "Description": "N/A",
        "Book": "N/A"
    },
    {
        "Contract": "Fickle Fate",
        "Rank": "•",
        "Cost": "●",
        "Dice Pool": "None",
        "Catch": "Must not recur against a victim for an hour",
        "Description": "Curse an action for -2",
        "Book": "CTL 128"
    },
    {
        "Contract": "Favored Fate",
        "Rank": "••",
        "Cost": "●",
        "Dice Pool": "None",
        "Catch": "Must not bless a similar type of action until next dawn or dusk",
        "Description": "Bless an action for +4",
        "Book": "CTL 128"
    },
    {
        "Contract": "Beneficent Fate",
        "Rank": "•••",
        "Cost": "●",
        "Dice Pool": "None",
        "Catch": "Must not recur upon a recipient for a day",
        "Description": "Bless an action with guaranteed minimal success",
        "Book": "CTL 128"
    },
    {
        "Contract": "Fortuna’s Cornucopia",
        "Rank": "••••",
        "Cost": "●",
        "Dice Pool": "None",
        "Catch": "Must not recur upon a recipient for a day",
        "Description": "Bless an action with 8-Again",
        "Book": "CTL 129"
    },
    {
        "Contract": "Triumphal Fate",
        "Rank": "•••••",
        "Cost": "●○",
        "Dice Pool": "None",
        "Catch": "Must not recur upon a recipient for a year and a day",
        "Description": "Bless an action with guaranteed exceptional success",
        "Book": "CTL 129"
    },
    {
        "Contract": "Contracts of Hearth",
        "Rank": "N/A",
        "Cost": "N/A",
        "Dice Pool": "N/A",
        "Catch": "N/A",
        "Description": "N/A",
        "Book": "N/A"
    },
    {
        "Contract": "Restoration of Dawn Beauty",
        "Rank": "•",
        "Cost": "●",
        "Dice Pool": "Crafts + Wyrd",
        "Catch": "Family property from before the Durance",
        "Description": "Restore an object to fresh novelty",
        "Book": "RoS 102"
    },
    {
        "Contract": "Frozen Moment",
        "Rank": "••",
        "Cost": "●●",
        "Dice Pool": "Wits + Wyrd",
        "Catch": "Sunrise or sunset",
        "Description": "Freeze an object outside time for a scene",
        "Book": "RoS 103"
    },
    {
        "Contract": "Thief of Days",
        "Rank": "•••",
        "Cost": "●●",
        "Dice Pool": "Investigation + Wyrd",
        "Catch": "Know a dead owner's name",
        "Description": "Damage an object with the weathering of age",
        "Book": "RoS 103"
    },
    {
        "Contract": "Flickering Hours",
        "Rank": "••••",
        "Cost": "●●○",
        "Dice Pool": "Wits + Wyrd",
        "Catch": "Smash a timepiece",
        "Description": "Alter the time differential between the Hedge and mortal world",
        "Book": "RoS 103"
    },
    {
        "Contract": "Leaping Toward Nightfall",
        "Rank": "•••••",
        "Cost": "●●●●○",
        "Dice Pool": "Investigation + Wyrd vs Composure + Tolerance",
        "Catch": "Subject touches a Hedge gate",
        "Description": "Propel a subject into the near future",
        "Book": "RoS 104"
    },
    {
        "Contract": "Contracts of Lucidity",
        "Rank": "N/A",
        "Cost": "N/A",
        "Dice Pool": "N/A",
        "Catch": "N/A",
        "Description": "N/A",
        "Book": "N/A"
    },
    {
        "Contract": "Read Lucidity",
        "Rank": "•",
        "Cost": "●",
        "Dice Pool": "Intelligence + Wyrd",
        "Catch": "Touch the subject",
        "Description": "Intuit a subject's Clarity. Suffer a breaking point at Clarity 9.",
        "Book": "DitD 69"
    },
    {
        "Contract": "Temporary Sanity",
        "Rank": "••",
        "Cost": "●●",
        "Dice Pool": "Occult + Wyrd",
        "Catch": "Stand on one foot, eyes shut, for a minute",
        "Description": "Briefly increase Clarity. Suffer a breaking point at Clarity 8.",
        "Book": "DitD 69"
    },
    {
        "Contract": "Gift of Lucidity",
        "Rank": "•••",
        "Cost": "●/Clarity, ○",
        "Dice Pool": "Presence + Clarity + Wyrd - Resolve + Composure",
        "Catch": "Subject lost Clarity in the last half of the day",
        "Description": "Lend up to three dots of Clarity. Suffer a breaking point at Clarity 6.",
        "Book": "DitD 70"
    },
    {
        "Contract": "Armored Clarity",
        "Rank": "••••",
        "Cost": "●●●",
        "Dice Pool": "Resolve + Clarity",
        "Catch": "Spend the hour with more regular humans than fae",
        "Description": "Make only one breaking point roll for the next scene, plus another at Clarity 4.",
        "Book": "DitD 70"
    },
    {
        "Contract": "Thief of Reason",
        "Rank": "•••••",
        "Cost": "●●●○",
        "Dice Pool": "Presence + Intimidation + Wyrd - Willpower + Tolerance",
        "Catch": "Subject expressed doubts of sanity within the hour",
        "Description": "Temporarily penalize Clarity, Initiative and Defense, and provoke a derangement roll. Suffer a breaking point at Clarity 2.",
        "Book": "DitD 71"
    },
    {
        "Contract": "Contracts of Mirror",
        "Rank": "N/A",
        "Cost": "N/A",
        "Dice Pool": "N/A",
        "Catch": "N/A",
        "Description": "N/A",
        "Book": "N/A"
    },
    {
        "Contract": "Riddle-Kith",
        "Rank": "•",
        "Cost": "●",
        "Dice Pool": "Manipulation + Wyrd",
        "Catch": "As that of a changeling you've dined with this week",
        "Description": "Take the appearance of another seeming or kith,",
        "Book": "CTL 129"
    },
    {
        "Contract": "Skinmask",
        "Rank": "••",
        "Cost": "●",
        "Dice Pool": "Stamina + Wyrd",
        "Catch": "One of the subject's possessions",
        "Description": "Disguise one bodily feature as that of another.",
        "Book": "CTL 130"
    },
    {
        "Contract": "Transfigure the Flesh",
        "Rank": "•••",
        "Cost": "●",
        "Dice Pool": "Stamina + Wyrd",
        "Catch": "Stolen garmant that doesn't fit you",
        "Description": "Change Size.",
        "Book": "CTL 131"
    },
    {
        "Contract": "Oddbody",
        "Rank": "••••",
        "Cost": "●",
        "Dice Pool": "Strength + Wyrd",
        "Catch": "Eat a caterpillar's cocoon",
        "Description": "Manifest an unnatural bodily feature, which may provide a bonus or act as a natural weapon or armor.",
        "Book": "CTL 131"
    },
    {
        "Contract": "Chrysalis",
        "Rank": "•••••",
        "Cost": "●",
        "Dice Pool": "Strength + Wyrd",
        "Catch": "Specially commission an object as model",
        "Description": "Transform into a mechanically simple inanimate object.",
        "Book": "CTL 131"
    },
    {
        "Contract": "Contracts of the Moon",
        "Rank": "N/A",
        "Cost": "N/A",
        "Dice Pool": "N/A",
        "Catch": "N/A",
        "Description": "N/A",
        "Book": "N/A"
    },
    {
        "Contract": "Lunatic’s Knowing Glance",
        "Rank": "•",
        "Cost": "●",
        "Dice Pool": "Wits + Wyrd",
        "Catch": "Masquerade as a medical professional",
        "Description": "Assess derangements at a glance",
        "Book": "RoS 105"
    },
    {
        "Contract": "Maddening Eye",
        "Rank": "••",
        "Cost": "●●",
        "Dice Pool": "Manipulation + Wyrd - Composure",
        "Catch": "Suffer a derangement, or after first use in a scene",
        "Description": "Temporarily aggravate or multiply derangements.",
        "Book": "RoS 106"
    },
    {
        "Contract": "Touch of Bedlam",
        "Rank": "•••",
        "Cost": "●●",
        "Dice Pool": "Presence + Wyrd vs Composure + Tolerance",
        "Catch": "Victim broke an oath sworn to you",
        "Description": "Temporarily inflict a chosen severe derangement.",
        "Book": "RoS 106"
    },
    {
        "Contract": "The Madness of Crowds",
        "Rank": "••••",
        "Cost": "●●●○",
        "Dice Pool": "Expression + Wyrd",
        "Catch": "Performing for an audience",
        "Description": "Temporarily inflict a chosen derangement on a group",
        "Book": "RoS 107"
    },
    {
        "Contract": "Lurking Insanity",
        "Rank": "•••••",
        "Cost": "●●●○",
        "Dice Pool": "Subterfuge + Wyrd",
        "Catch": "Victim has betrayed family.",
        "Description": "Embed a chosen temporary derangement into a victim, waiting for a chosen trigger event.",
        "Book": "RoS 107"
    },
    {
        "Contract": "Contracts of Omen",
        "Rank": "N/A",
        "Cost": "N/A",
        "Dice Pool": "N/A",
        "Catch": "N/A",
        "Description": "N/A",
        "Book": "N/A"
    },
    {
        "Contract": "Vision of Strife",
        "Rank": "•",
        "Cost": "●",
        "Dice Pool": "Empathy + Wyrd",
        "Catch": "Subject discusses their past",
        "Description": "See someone's worst memory.",
        "Book": "RoS 108"
    },
    {
        "Contract": "Glimpse of Fortune’s Favor",
        "Rank": "••",
        "Cost": "●/●●",
        "Dice Pool": "Wits + Wyrd",
        "Catch": "On games of skill",
        "Description": "Roll an action twice and choose the result through premonition.",
        "Book": "RoS 109"
    },
    {
        "Contract": "Reading the Portents",
        "Rank": "•••",
        "Cost": "●●",
        "Dice Pool": "Wits + Wyrd",
        "Catch": "On a minor",
        "Description": "Predict the most seriously charged event waiting in the subject's likely near future.",
        "Book": "RoS 109"
    },
    {
        "Contract": "Vision of Disaster",
        "Rank": "••••",
        "Cost": "●●●●○",
        "Dice Pool": "Wits + Wyrd",
        "Catch": "Betrayed by a trusted ally",
        "Description": "Play out a turn as a premonition.",
        "Book": "RoS 109"
    },
    {
        "Contract": "Tying the Knots of Fate",
        "Rank": "•••••",
        "Cost": "●●●○○",
        "Dice Pool": "Presence + Wyrd",
        "Catch": "Blessing a mortal minor",
        "Description": "Weave a likely fate into a character's near future.",
        "Book": "RoS 110"
    },
    {
        "Contract": "Contracts of Smoke",
        "Rank": "N/A",
        "Cost": "N/A",
        "Dice Pool": "N/A",
        "Catch": "N/A",
        "Description": "N/A",
        "Book": "N/A"
    },
    {
        "Contract": "The Wrong Foot",
        "Rank": "•",
        "Cost": "●",
        "Dice Pool": "None",
        "Catch": "Lick thumb and smudge a mirror",
        "Description": "Leave some other mark of your presence instead of human traces.",
        "Book": "CTL 132"
    },
    {
        "Contract": "Nevertread",
        "Rank": "••",
        "Cost": "●",
        "Dice Pool": "Intelligence + Wyrd",
        "Catch": "Spent an hour barefoot today",
        "Description": "Pass without trace.",
        "Book": "CTL 132"
    },
    {
        "Contract": "Shadowpatch",
        "Rank": "•••",
        "Cost": "●",
        "Dice Pool": "Wits + Wyrd",
        "Catch": "Spent an hour out of sunlight today",
        "Description": "Conjure dampening shadows for +3 Stealth.",
        "Book": "CTL 133"
    },
    {
        "Contract": "Murkblur",
        "Rank": "••••",
        "Cost": "●",
        "Dice Pool": "Intelligence + Wyrd vs Resolve + Tolerance",
        "Catch": "Swallow an animal's eye",
        "Description": "Temporarily blind a subject.",
        "Book": "CTL 133"
    },
    {
        "Contract": "Smoke-Stepping",
        "Rank": "••••",
        "Cost": "●●",
        "Dice Pool": "Intelligence + Wyrd",
        "Catch": "As the sun rises or sets, or on cloudy days",
        "Description": "Travel instantly through thick smoke or fog.",
        "Book": "VL 23"
    },
    {
        "Contract": "Light-Shy",
        "Rank": "•••••",
        "Cost": "●○",
        "Dice Pool": "Intelligence + Wyrd",
        "Catch": "After telling someone important to you a serious lie that day",
        "Description": "Brief invisibility.",
        "Book": "CTL 133"
    },
    {
        "Contract": "Contracts of Thorns and Brambles",
        "Rank": "N/A",
        "Cost": "N/A",
        "Dice Pool": "N/A",
        "Catch": "N/A",
        "Description": "N/A",
        "Book": "N/A"
    },
    {
        "Contract": "Bite of the Wooden Fang",
        "Rank": "•",
        "Cost": "●",
        "Dice Pool": "Dexterity + Wyrd",
        "Catch": "Using a whip",
        "Description": "Enhance bashing weapons hewn from plant materials.",
        "Book": "SaD 49"
    },
    {
        "Contract": "Leechweed",
        "Rank": "••",
        "Cost": "●●",
        "Dice Pool": "Occult + Wyrd",
        "Catch": "Against your Keeper or their agents",
        "Description": "Enchant thorns to drain Glamour.",
        "Book": "SaD 50"
    },
    {
        "Contract": "Briarpath",
        "Rank": "•••",
        "Cost": "●●",
        "Dice Pool": "Wits + Wyrd",
        "Catch": "Scatter Hedge thorns behind you",
        "Description": "Grows treacherous terrain of brambles in your wake.",
        "Book": "SaD 51"
    },
    {
        "Contract": "Shield of Thorns",
        "Rank": "••••",
        "Cost": "●●●",
        "Dice Pool": "Manipulation + Wyrd",
        "Catch": "Watered by your blood",
        "Description": "Conjure a field of deadly briars.",
        "Book": "SaD 51"
    },
    {
        "Contract": "Hedgewall",
        "Rank": "•••••",
        "Cost": "●●●●(○)",
        "Dice Pool": "Presence + Wyrd",
        "Catch": "After transplanting a bush in place",
        "Description": "Erects temporary walls like those of a hedge maze.",
        "Book": "SaD 52"
    }
]

const seemingContractData = [
    {
        "Contract": "Beastly Contracts",
        "Rank": "N/A",
        "Cost": "N/A",
        "Dice Pool": "N/A",
        "Catch": "N/A",
        "Description": "N/A",
        "Book": "N/A"
    },
    {
        "Contract": "Contracts of the Den",
        "Rank": "N/A",
        "Cost": "N/A",
        "Dice Pool": "N/A",
        "Catch": "N/A",
        "Description": "N/A",
        "Book": "N/A"
    },
    {
        "Contract": "Trespasser’s Spoor",
        "Rank": "•",
        "Cost": "●",
        "Dice Pool": "None",
        "Catch": "Scribe your name at the entrance in chalk and blood",
        "Description": "Mark territory to enhance perception rolls while dwelling there.",
        "Book": "WM 19"
    },
    {
        "Contract": "Trapdoor Spider’s Trick",
        "Rank": "••",
        "Cost": "●",
        "Dice Pool": "Wits + Wyrd",
        "Catch": "Keep a spider in your mouth",
        "Description": "Hide the presence of an entrance or exit.",
        "Book": "WM 19"
    },
    {
        "Contract": "Cuckoo’s Ruse",
        "Rank": "•••",
        "Cost": "●●",
        "Dice Pool": "Manipulation + Wyrd (vs Hollow Wards)",
        "Catch": "Invite the resident to your own home",
        "Description": "Fool security measures into welcoming you.",
        "Book": "WM 19"
    },
    {
        "Contract": "Blessing of the Burrow",
        "Rank": "••••",
        "Cost": "●●",
        "Dice Pool": "Survival + Wyrd",
        "Catch": "Nude",
        "Description": "Carve a burrow out of the earth.",
        "Book": "WM 20"
    },
    {
        "Contract": "Collapsing the Entrance",
        "Rank": "•••••",
        "Cost": "●●●○",
        "Dice Pool": "Strength + Wyrd",
        "Catch": "Your own property",
        "Description": "Bring the roof down from within the threshold.",
        "Book": "WM 20"
    },
    {
        "Contract": "Contracts of Fang and Talon",
        "Rank": "N/A",
        "Cost": "N/A",
        "Dice Pool": "N/A",
        "Catch": "N/A",
        "Description": "N/A",
        "Book": "N/A"
    },
    {
        "Contract": "Tongues of Birds and Words of Wolves",
        "Rank": "•",
        "Cost": "●",
        "Dice Pool": "Animal Ken + Wyrd",
        "Catch": "Name the animals",
        "Description": "Speak with animals of your chosen breeds.",
        "Book": "CTL 142"
    },
    {
        "Contract": "Beast’s Keen Senses",
        "Rank": "••",
        "Cost": "●●",
        "Dice Pool": "Wits + Wyrd",
        "Catch": "In contact with the chosen animal",
        "Description": "+2 perception bonus and either a sense characteristic to the chosen animal or an additional +2.",
        "Book": "CTL 142"
    },
    {
        "Contract": "Pipes of the Beastcaller",
        "Rank": "•••",
        "Cost": "●●",
        "Dice Pool": "Animal Ken + Wyrd",
        "Catch": "To guard your home",
        "Description": "Command animals of the chosen breeds.",
        "Book": "CTL 143"
    },
    {
        "Contract": "Tread of the Swift Hooves",
        "Rank": "••••",
        "Cost": "●●",
        "Dice Pool": "Dexterity + Wyrd",
        "Catch": "In contact with the chosen animal",
        "Description": "Move like the chosen animal for a scene.",
        "Book": "CTL 143"
    },
    {
        "Contract": "Cloak of the Bear’s Massive Form",
        "Rank": "•••••",
        "Cost": "●●●●",
        "Dice Pool": "Manipulation + Wyrd",
        "Catch": "In contact with the chosen animal in its habitat",
        "Description": "Take the form of the chosen animal, with all associated benefits.",
        "Book": "CTL 143"
    },
    {
        "Contract": "Contracts of the Wild",
        "Rank": "N/A",
        "Cost": "N/A",
        "Dice Pool": "N/A",
        "Catch": "N/A",
        "Description": "N/A",
        "Book": "N/A"
    },
    {
        "Contract": "Wildwalker",
        "Rank": "•",
        "Cost": "●",
        "Dice Pool": "Persuasion + Wyrd",
        "Catch": "After sleeping outdoors",
        "Description": "Ignore penalties from environmental conditions for a scene.",
        "Book": "RoS 111"
    },
    {
        "Contract": "Nature’s Curse",
        "Rank": "••",
        "Cost": "●",
        "Dice Pool": "Intimidation + Wyrd",
        "Catch": "Target has a gun",
        "Description": "Up to double existing environmental penalties against a target.",
        "Book": "RoS 111"
    },
    {
        "Contract": "Viridian Embrace",
        "Rank": "•••",
        "Cost": "●●",
        "Dice Pool": "Expression + Wyrd",
        "Catch": "To aid a mortal",
        "Description": "Gain environmental bonuses to move, hide and perceive.",
        "Book": "RoS 112"
    },
    {
        "Contract": "Calling Wind and Weather",
        "Rank": "••••",
        "Cost": "●●●",
        "Dice Pool": "Presence + Wyrd",
        "Catch": "On behalf of a dozen mortals",
        "Description": "Conjure weather native to a clime.",
        "Book": "RoS 112"
    },
    {
        "Contract": "Calling Nature’s Wrath",
        "Rank": "•••••",
        "Cost": "●●●○",
        "Dice Pool": "Survival + Wyrd",
        "Catch": "On family land",
        "Description": "The natural environment attacks for 50 yards around, excluding allies.",
        "Book": "RoS 113"
    },
    {
        "Contract": "Darkling Contracts",
        "Rank": "N/A",
        "Cost": "N/A",
        "Dice Pool": "N/A",
        "Catch": "N/A",
        "Description": "N/A",
        "Book": "N/A"
    },
    {
        "Contract": "Contracts of Darkness",
        "Rank": "N/A",
        "Cost": "N/A",
        "Dice Pool": "N/A",
        "Catch": "N/A",
        "Description": "N/A",
        "Book": "N/A"
    },
    {
        "Contract": "Creeping Dread",
        "Rank": "•",
        "Cost": "●/●●○",
        "Dice Pool": "Manipulation + Wyrd - Resolve",
        "Catch": "Against intruders in your home",
        "Description": "Render one or multiple targets susceptible to fear or intimidation.",
        "Book": "CTL 136"
    },
    {
        "Contract": "Night’s Subtle Distractions",
        "Rank": "••",
        "Cost": "●",
        "Dice Pool": "Stealth + Wyrd",
        "Catch": "Out in the night",
        "Description": "Double environmental penalties to perception.",
        "Book": "CTL 136"
    },
    {
        "Contract": "Balm of Unwakeable Slumber",
        "Rank": "•••",
        "Cost": "●",
        "Dice Pool": "Manipulation + Wyrd vs Resolve + Tolerance",
        "Catch": "Against someone in their own bed at night",
        "Description": "Prevent a sleeping target from being woken by disturbances.",
        "Book": "CTL 137"
    },
    {
        "Contract": "Boon of the Scuttling Spider",
        "Rank": "••••",
        "Cost": "●●●",
        "Dice Pool": "Athletics + Wyrd",
        "Catch": "Across outdoor walls at night",
        "Description": "Move across solid surfaces in defiance of gravity.",
        "Book": "CTL 137"
    },
    {
        "Contract": "Touch of Paralyzing Shudder",
        "Rank": "•••••",
        "Cost": "●●○",
        "Dice Pool": "Presence + Wyrd vs Resolve + Tolerance",
        "Catch": "Isolate and unnerve target",
        "Description": "Inflict spasms of fear that half motor control traits and pools.",
        "Book": "CTL 138"
    },
    {
        "Contract": "Contracts of Shade and Spirit",
        "Rank": "N/A",
        "Cost": "N/A",
        "Dice Pool": "N/A",
        "Catch": "N/A",
        "Description": "N/A",
        "Book": "N/A"
    },
    {
        "Contract": "Ghostly Presence",
        "Rank": "•",
        "Cost": "●",
        "Dice Pool": "Presence + Wyrd",
        "Catch": "Gravewight, or knew the ghost in life",
        "Description": "Commune with ghosts in Twilight",
        "Book": "WM 26"
    },
    {
        "Contract": "Dread Companion",
        "Rank": "••",
        "Cost": "●",
        "Dice Pool": "Manipulation + Wyrd",
        "Catch": "Press drops of your blood to witnesses' foreheads",
        "Description": "Allow a ghost to manifest tangibly to one sense.",
        "Book": "WM 26"
    },
    {
        "Contract": "Haunting Intercession",
        "Rank": "•••",
        "Cost": "●",
        "Dice Pool": "Manipulation + Wyrd",
        "Catch": "Prepare a \"dead supper\" with unused silverware",
        "Description": "Materialize a ghost for a scene.",
        "Book": "WM 26"
    },
    {
        "Contract": "Waking the Dead",
        "Rank": "••••",
        "Cost": "●●",
        "Dice Pool": "Strength + Wyrd",
        "Catch": "Blood offering",
        "Description": "Ask questions of the sleeping dead.",
        "Book": "WM 27"
    },
    {
        "Contract": "Opening the Black Gate",
        "Rank": "•••••",
        "Cost": "●●○",
        "Dice Pool": "Stamina + Wyrd",
        "Catch": "At midnight in a mausoleum, invoking laws of hospitality",
        "Description": "Open a gate to the Underworld.",
        "Book": "WM 27"
    },
    {
        "Contract": "Elemental Contracts",
        "Rank": "N/A",
        "Cost": "N/A",
        "Dice Pool": "N/A",
        "Catch": "N/A",
        "Description": "N/A",
        "Book": "N/A"
    },
    {
        "Contract": "Contracts of Communion",
        "Rank": "N/A",
        "Cost": "N/A",
        "Dice Pool": "N/A",
        "Catch": "N/A",
        "Description": "N/A",
        "Book": "N/A"
    },
    {
        "Contract": "Sense Element",
        "Rank": "•",
        "Cost": "●",
        "Dice Pool": "Wits + Wyrd",
        "Catch": "Meditation",
        "Description": "Intuit the forms of the chosen element within (10 × Wyrd) yards.",
        "Book": "WM 32"
    },
    {
        "Contract": "Primordial Voice",
        "Rank": "••",
        "Cost": "●",
        "Dice Pool": "Socialize + Wyrd",
        "Catch": "Courteous offering to the element",
        "Description": "Ask the chosen element about the past few days.",
        "Book": "WM 32"
    },
    {
        "Contract": "Distant Connection",
        "Rank": "•••",
        "Cost": "●●(○)",
        "Dice Pool": "Persuasion + Wyrd",
        "Catch": "Through intimately familiar instances of the element",
        "Description": "Project senses at a distance through the chosen element. For Willpower, briefly direct the element.",
        "Book": "WM 33"
    },
    {
        "Contract": "Elemental Servitor",
        "Rank": "••••",
        "Cost": "●●●",
        "Dice Pool": "Persuasion + Wyrd",
        "Catch": "Laborious offering to the element",
        "Description": "Animate the chosen element as a semi-intelligent spirit-like ally for a scene.",
        "Book": "WM 33"
    },
    {
        "Contract": "Elemental Ally",
        "Rank": "•••••",
        "Cost": "●●●○",
        "Dice Pool": "Presence + Wyrd",
        "Catch": "Negotiate payment to compensate the element",
        "Description": "Grant sapience to the chosen element around you for a week, during which it may manifest like an Elemental Servitor for one scene.",
        "Book": "WM 34"
    },
    {
        "Contract": "Contracts of Elements",
        "Rank": "N/A",
        "Cost": "N/A",
        "Dice Pool": "N/A",
        "Catch": "N/A",
        "Description": "N/A",
        "Book": "N/A"
    },
    {
        "Contract": "Cloak of the Elements",
        "Rank": "•",
        "Cost": "●●",
        "Dice Pool": "None",
        "Catch": "Wearing a symbol of the element",
        "Description": "Protection from passive harm by the chosen element for a scene. Reduce elemental damage by your Wyrd, except when fashioned into a weapon.",
        "Book": "CTL 138"
    },
    {
        "Contract": "Armor of the Element’s Fury",
        "Rank": "••",
        "Cost": "●●",
        "Dice Pool": "Dexterity + Wyrd",
        "Catch": "In significant contact with the element",
        "Description": "Conjure an elemental aura for a scene. Confers 1 Armor and half Wyrd in lethal contact damage.",
        "Book": "CTL 139"
    },
    {
        "Contract": "Control Elements",
        "Rank": "•••",
        "Cost": "●●●",
        "Dice Pool": "Manipulation + Wyrd",
        "Catch": "Where the element dominates",
        "Description": "Reshape or manipulate an amount of the chosen element around you.",
        "Book": "CTL 139"
    },
    {
        "Contract": "Calling the Element",
        "Rank": "••••",
        "Cost": "●●●●",
        "Dice Pool": "Wits + Wyrd",
        "Catch": "As a performance or display",
        "Description": "Summon or beckon manifestations of the element for a scene.",
        "Book": "CTL 140"
    },
    {
        "Contract": "Become the Primal Foundation",
        "Rank": "•••••",
        "Cost": "●●●●",
        "Dice Pool": "Manipulation + Wyrd",
        "Catch": "Commune with a manifestation of the element.",
        "Description": "Transform into the chosen element, either hardy and solid or swift and malleable.",
        "Book": "CTL 140"
    },
    {
        "Contract": "Contracts of the Wild",
        "Rank": "N/A",
        "Cost": "N/A",
        "Dice Pool": "N/A",
        "Catch": "N/A",
        "Description": "N/A",
        "Book": "N/A"
    },
    {
        "Contract": "Wildwalker",
        "Rank": "•",
        "Cost": "●",
        "Dice Pool": "Persuasion + Wyrd",
        "Catch": "After sleeping outdoors",
        "Description": "Ignore penalties from environmental conditions for a scene.",
        "Book": "RoS 111"
    },
    {
        "Contract": "Nature’s Curse",
        "Rank": "••",
        "Cost": "●",
        "Dice Pool": "Intimidation + Wyrd",
        "Catch": "Target has a gun",
        "Description": "Up to double existing environmental penalties against a target.",
        "Book": "RoS 111"
    },
    {
        "Contract": "Viridian Embrace",
        "Rank": "•••",
        "Cost": "●●",
        "Dice Pool": "Expression + Wyrd",
        "Catch": "To aid a mortal",
        "Description": "Gain environmental bonuses to move, hide and perceive.",
        "Book": "RoS 112"
    },
    {
        "Contract": "Calling Wind and Weather",
        "Rank": "••••",
        "Cost": "●●●",
        "Dice Pool": "Presence + Wyrd",
        "Catch": "On behalf of a dozen mortals",
        "Description": "Conjure weather native to a clime.",
        "Book": "RoS 112"
    },
    {
        "Contract": "Calling Nature’s Wrath",
        "Rank": "•••••",
        "Cost": "●●●○",
        "Dice Pool": "Survival + Wyrd",
        "Catch": "On family land",
        "Description": "The natural environment attacks for 50 yards around, excluding allies.",
        "Book": "RoS 113"
    },
    {
        "Contract": "Fairest Contracts",
        "Rank": "N/A",
        "Cost": "N/A",
        "Dice Pool": "N/A",
        "Catch": "N/A",
        "Description": "N/A",
        "Book": "N/A"
    },
    {
        "Contract": "Contracts of Reflection",
        "Rank": "N/A",
        "Cost": "N/A",
        "Dice Pool": "N/A",
        "Catch": "N/A",
        "Description": "N/A",
        "Book": "N/A"
    },
    {
        "Contract": "Reflections of the Past",
        "Rank": "•",
        "Cost": "●",
        "Dice Pool": "Wits + Wyrd",
        "Catch": "On a loved one's mirror",
        "Description": "Observe what has appeared in a reflective surface for the last week.",
        "Book": "ER 34"
    },
    {
        "Contract": "Glimpse of a Distant Mirror",
        "Rank": "••",
        "Cost": "●",
        "Dice Pool": "Composure + Wyrd",
        "Catch": "Into a sworn enemy's mirror",
        "Description": "Use one reflective surface to look through another which has reflected your image within the week.",
        "Book": "ER 35"
    },
    {
        "Contract": "Reflection’s Grasp",
        "Rank": "•••",
        "Cost": "●●",
        "Dice Pool": "Dexterity + Wyrd",
        "Catch": "Through the mirror you most see yourself in",
        "Description": "Reach into one reflective surface and through another you have touched.",
        "Book": "ER 36"
    },
    {
        "Contract": "Mirror Walk",
        "Rank": "••••",
        "Cost": "●●●",
        "Dice Pool": "Athletics + Wyrd",
        "Catch": "Out a mirror reflecting a blood relative",
        "Description": "Step into one reflective surface and out another you have touched.",
        "Book": "ER 37"
    },
    {
        "Contract": "Stealing the Solid Reflection",
        "Rank": "•••••",
        "Cost": "●●●○",
        "Dice Pool": "Larceny + Wyrd",
        "Catch": "The reflected object's owner owes you a debt",
        "Description": "Draw a reflection out of a mirrored surface for one scene.",
        "Book": "ER 38"
    },
    {
        "Contract": "Contracts of Separation",
        "Rank": "N/A",
        "Cost": "N/A",
        "Dice Pool": "N/A",
        "Catch": "N/A",
        "Description": "N/A",
        "Book": "N/A"
    },
    {
        "Contract": "Tread Lightly",
        "Rank": "•",
        "Cost": "●",
        "Dice Pool": "Dexterity + Wyrd",
        "Catch": "Protecting nice shoes from getting dirty",
        "Description": "Walk weightlessly across surfaces for a scene. Reduce falling damage to bashing.",
        "Book": "WM 40"
    },
    {
        "Contract": "Evasion of Shackles",
        "Rank": "••",
        "Cost": "●",
        "Dice Pool": "Larceny + Wyrd",
        "Catch": "Imprisoned for an offense you didn't commit",
        "Description": "Slip bondage or imprisonment.",
        "Book": "WM 40"
    },
    {
        "Contract": "Breaching Barriers",
        "Rank": "•••",
        "Cost": "●",
        "Dice Pool": "Presence + Wyrd",
        "Catch": "Imprisoned by a changeling",
        "Description": "Pass through a sealed portal.",
        "Book": "WM 40"
    },
    {
        "Contract": "Elegant Protection",
        "Rank": "••••",
        "Cost": "●●",
        "Dice Pool": "Dexterity + Wyrd",
        "Catch": "Unarmed, without aggressing",
        "Description": "Bonus Defense equal to Wyrd, even against firearms or while unconscious. Move gracefully while Dodging.",
        "Book": "WM 41"
    },
    {
        "Contract": "Phantom Glory",
        "Rank": "•••••",
        "Cost": "●●○",
        "Dice Pool": "Persuasion + Wyrd",
        "Catch": "Unarmed and unarmored",
        "Description": "Enter Twilight.",
        "Book": "WM 41"
    },
    {
        "Contract": "Contracts of Vainglory",
        "Rank": "N/A",
        "Cost": "N/A",
        "Dice Pool": "N/A",
        "Catch": "N/A",
        "Description": "N/A",
        "Book": "N/A"
    },
    {
        "Contract": "Mask of Superiority",
        "Rank": "•",
        "Cost": "●●",
        "Dice Pool": "Intimidation + Wyrd - Resolve",
        "Catch": "As a socialite or shallow celebrity.",
        "Description": "Appear to be a figure of authority or fame for a scene.",
        "Book": "CTL 146"
    },
    {
        "Contract": "Songs of Distant Arcadia",
        "Rank": "••",
        "Cost": "●●",
        "Dice Pool": "Expression + Wyrd",
        "Catch": "Entertaining a powerful audience",
        "Description": "Add Wyrd as bonus dice to Expression and Persuasion for a scene.",
        "Book": "CTL 147"
    },
    {
        "Contract": "Splendor of the Envoy’s Protection",
        "Rank": "•••",
        "Cost": "●●●",
        "Dice Pool": "Presence + Wyrd",
        "Catch": "At a formal soirée",
        "Description": "Safely lower the Mask for a scene, gaining a +2 Striking Looks bonus. So long as you make no shows of aggression, characters must be supernatural beings and roll Resolve + Composure to assault you. In Victorian society, replace one bonus die with two temporary dots of Status.",
        "Book": "CTL 147, VL 23"
    },
    {
        "Contract": "Mantle of Terrible Beauty",
        "Rank": "••••",
        "Cost": "●●○",
        "Dice Pool": "Intimidation + Wyrd vs Composure + Tolerance",
        "Catch": "Fighting a formal trial by combat",
        "Description": "Safely lower the Mask for a scene. Failed contestants flee or cower and cannot invest effort with Willpower, and those who succeed suffer -2 to attack you.",
        "Book": "CTL 147"
    },
    {
        "Contract": "Words of Memories Never Lived",
        "Rank": "•••••",
        "Cost": "●●●○",
        "Dice Pool": "Expression + Wyrd vs Composure + Tolerance",
        "Catch": "Stories you believe to be fact",
        "Description": "Illustrate an emotionally charged story to introduce it to the audience as false memories in which they were involved.",
        "Book": "CTL 148"
    },
    {
        "Contract": "Ogreish Contracts",
        "Rank": "N/A",
        "Cost": "N/A",
        "Dice Pool": "N/A",
        "Catch": "N/A",
        "Description": "N/A",
        "Book": "N/A"
    },
    {
        "Contract": "Contracts of Oath and Punishment",
        "Rank": "N/A",
        "Cost": "N/A",
        "Dice Pool": "N/A",
        "Catch": "N/A",
        "Description": "N/A",
        "Book": "N/A"
    },
    {
        "Contract": "Pursuer’s Seven-League Leap",
        "Rank": "•",
        "Cost": "●",
        "Dice Pool": "Athletics + Wyrd",
        "Catch": "Pursuing an oathbreaker",
        "Description": "Leap 15 feet per success, or half vertically.",
        "Book": "WM 47"
    },
    {
        "Contract": "Sense Tainted Vows",
        "Rank": "••",
        "Cost": "●",
        "Dice Pool": "Wits + Wyrd vs Composure + Tolerance",
        "Catch": "Pledgesworn with the subject",
        "Description": "Sense the greatest vow broken within a year and a day",
        "Book": "WM 47"
    },
    {
        "Contract": "Inexorable Pursuer",
        "Rank": "•••",
        "Cost": "●",
        "Dice Pool": "Resolve + Wyrd",
        "Catch": "Resisted manipulation within the day",
        "Description": "+2 to resist the manipulation of Clarity or courtly emotions.",
        "Book": "WM 47"
    },
    {
        "Contract": "Relentless Pursuit",
        "Rank": "••••",
        "Cost": "●●",
        "Dice Pool": "Stamina + Wyrd",
        "Catch": "Pursue without resting",
        "Description": "Sense the distance and direction to a subject for a day or night.",
        "Book": "WM 47"
    },
    {
        "Contract": "Cruel Vengeance",
        "Rank": "•••••",
        "Cost": "●●",
        "Dice Pool": "Presence + Wyrd vs Manipulation + Tolerance",
        "Catch": "Fellow freehold member",
        "Description": "Use an accusation of broken oaths to upgrade attack damage, reduce the oathbreaker's Defense, and penalize shows of resistance.",
        "Book": "WM 48"
    },
    {
        "Contract": "Contracts of Stone",
        "Rank": "N/A",
        "Cost": "N/A",
        "Dice Pool": "N/A",
        "Catch": "N/A",
        "Description": "N/A",
        "Book": "N/A"
    },
    {
        "Contract": "Might of the Terrible Brute",
        "Rank": "•",
        "Cost": "●",
        "Dice Pool": "Strength + Wyrd",
        "Catch": "Outnumbered and unarmed",
        "Description": "Temporarily boost Strength.",
        "Book": "CTL 144"
    },
    {
        "Contract": "Ogre’s Rending Grasp",
        "Rank": "••",
        "Cost": "●●",
        "Dice Pool": "Strength + Wyrd",
        "Catch": "Smashing through barriers",
        "Description": "Sap an object's Durability.",
        "Book": "CTL 144"
    },
    {
        "Contract": "Display Grandiose Might",
        "Rank": "•••",
        "Cost": "●●",
        "Dice Pool": "Athletics + Wyrd",
        "Catch": "Just to impress or entertain",
        "Description": "Boost Strength for a scene while refraining from combat.",
        "Book": "CTL 145"
    },
    {
        "Contract": "Gluttonous Feast of Health",
        "Rank": "••••",
        "Cost": "●●●",
        "Dice Pool": "Stamina + Wyrd",
        "Catch": "Offered a feast by a stranger",
        "Description": "Reduce lethal damage to bashing or aggravated to lethal by gorging yourself for an hour.",
        "Book": "CTL 145"
    },
    {
        "Contract": "Red Rage of Terrible Vengeance",
        "Rank": "•••••",
        "Cost": "●●●○",
        "Dice Pool": "Resolve + Wyrd",
        "Catch": "Avenging a loved one",
        "Description": "Enter a bold battle-rage which boosts Strength, Stamina, Initiative, and Armor for the duration.",
        "Book": "CTL 146"
    },
    {
        "Contract": "Wizened Contracts",
        "Rank": "N/A",
        "Cost": "N/A",
        "Dice Pool": "N/A",
        "Catch": "N/A",
        "Description": "N/A",
        "Book": "N/A"
    },
    {
        "Contract": "Contracts of Animation",
        "Rank": "N/A",
        "Cost": "N/A",
        "Dice Pool": "N/A",
        "Catch": "N/A",
        "Description": "N/A",
        "Book": "N/A"
    },
    {
        "Contract": "Knowing Touch",
        "Rank": "•",
        "Cost": "●",
        "Dice Pool": "Crafts + Wyrd",
        "Catch": "Owner bids you examine",
        "Description": "Learn an object's shape and construction, gaining bonuses to repair or damage it.",
        "Book": "WM 52"
    },
    {
        "Contract": "Instant Expertise",
        "Rank": "••",
        "Cost": "●",
        "Dice Pool": "Wits + Wyrd",
        "Catch": "Converse with the tool for ten minutes",
        "Description": "Learn how to use a tool, gaining a temporary Skill specialty bonus.",
        "Book": "WM 52"
    },
    {
        "Contract": "Inanimate Communion",
        "Rank": "•••",
        "Cost": "●",
        "Dice Pool": "Empathy + Wyrd",
        "Catch": "In disuse for a year",
        "Description": "Share memories of an object's uses and users.",
        "Book": "WM 53"
    },
    {
        "Contract": "Animate Device",
        "Rank": "••••",
        "Cost": "●●",
        "Dice Pool": "Manipulation + Wyrd",
        "Catch": "Possessed and used regularly for a month",
        "Description": "Command an object to act on its own.",
        "Book": "WM 53"
    },
    {
        "Contract": "Command the Inanimate",
        "Rank": "•••••",
        "Cost": "●●○",
        "Dice Pool": "Presence + Wyrd",
        "Catch": "A stranger or enemy's neglected belongings",
        "Description": "Animate an object and command its behavior for a scene.",
        "Book": "WM 54"
    },
    {
        "Contract": "Contracts of Artifice",
        "Rank": "N/A",
        "Cost": "N/A",
        "Dice Pool": "N/A",
        "Catch": "N/A",
        "Description": "N/A",
        "Book": "N/A"
    },
    {
        "Contract": "Brief Glamour of Repair",
        "Rank": "•",
        "Cost": "●",
        "Dice Pool": "Crafts + Wyrd",
        "Catch": "Items you neither own nor use",
        "Description": "Repair a device for a day, using minute scraps, in half the normal time.",
        "Book": "CTL 134"
    },
    {
        "Contract": "Touch of the Workman’s Wrath",
        "Rank": "••",
        "Cost": "●●",
        "Dice Pool": "Larceny + Wyrd",
        "Catch": "Belongs to someone who has tried to cheat you",
        "Description": "Hex a device by touch, making it require constant maintenance.",
        "Book": "CTL 134"
    },
    {
        "Contract": "Blessing of Perfection",
        "Rank": "•••",
        "Cost": "●●●",
        "Dice Pool": "Wits + Wyrd",
        "Catch": "Returning a favor, upon another's possession",
        "Description": "Tinker to smooth operations, adding Wyrd as an equipment bonus to a device or tinkering task for a scene.",
        "Book": "CTL 135"
    },
    {
        "Contract": "Unmaker’s Destructive Gaze",
        "Rank": "••••",
        "Cost": "●●",
        "Dice Pool": "Presence + Wyrd",
        "Catch": "Study or handle the object",
        "Description": "Jam, halt, or incapacitate a device with a glare.",
        "Book": "CTL 135"
    },
    {
        "Contract": "Tatterdemalion’s Workshop",
        "Rank": "•••••",
        "Cost": "●●●●(○)",
        "Dice Pool": "Crafts + Wyrd",
        "Catch": "In your own workshop, with your own tools",
        "Description": "Craft sophisticated works by jury-rigging inappropriate components, which fall apart after a scene, or with Willpower, until sunrise. In the Victorian era, may produce anachronistic wonders.",
        "Book": "CTL 135, VL 23"
    },
    {
        "Contract": "Contracts of the Forge",
        "Rank": "N/A",
        "Cost": "N/A",
        "Dice Pool": "N/A",
        "Catch": "N/A",
        "Description": "N/A",
        "Book": "N/A"
    },
    {
        "Contract": "Rewriting the Image",
        "Rank": "•",
        "Cost": "●",
        "Dice Pool": "Expression + Wyrd",
        "Catch": "Replacing with your own likeness",
        "Description": "Alter the details of a two-dimensional likeness.",
        "Book": "RoS 99"
    },
    {
        "Contract": "Trivial Reworking",
        "Rank": "••",
        "Cost": "●●",
        "Dice Pool": "Crafts + Wyrd",
        "Catch": "Turning a stolen item against its owner",
        "Description": "Remold a small object into a similar form for a scene.",
        "Book": "RoS 100"
    },
    {
        "Contract": "Discreet Conjuration",
        "Rank": "•••",
        "Cost": "●●○",
        "Dice Pool": "Manipulation + Wyrd",
        "Catch": "As payment to an enemy",
        "Description": "Draw a small, practical counterfeit out of any pocket.",
        "Book": "RoS 100"
    },
    {
        "Contract": "Hidden Reality",
        "Rank": "••••",
        "Cost": "●●●○",
        "Dice Pool": "Wits + Wyrd",
        "Catch": "To escape confinement",
        "Description": "Temporarily alter your surroundings in a plausible way.",
        "Book": "RoS 101"
    },
    {
        "Contract": "Paths of Desire",
        "Rank": "•••••",
        "Cost": "●●●○○",
        "Dice Pool": "Academics + Wyrd",
        "Catch": "Bury your blood in the destination's soil",
        "Description": "Open a Hedge gateway to anywhere in the Hedge you have been before.",
        "Book": "RoS 102"
    }
]

const courtContractData = [
    {
        "Rank": "Spring Court Contracts",
        "Name": "N/A",
        "Description": "N/A",
        "Catch": "N/A",
        "Court Goodwill Requirement if not a member": "N/A",
        "Cost": "N/A",
        "Dice Pool": ""
    },
    {
        "Rank": "Contracts of Eternal Spring",
        "Name": "N/A",
        "Description": "N/A",
        "Catch": "N/A",
        "Court Goodwill Requirement if not a member": "N/A",
        "Cost": "N/A",
        "Dice Pool": "Lost 151"
    },
    {
        "Rank": "•",
        "Name": "Gift of Warm Breath",
        "Description": "Rejuvenates a target, alleviating suffering from fatigue and deprivation, and healing bashing damage.",
        "Catch": "The subject of the clause has freely offered the changeling some form of sustenance since the last sunrise.",
        "Court Goodwill Requirement if not a member": "Waived",
        "Cost": "●",
        "Dice Pool": "Mantle + Resolve + Survival"
    },
    {
        "Rank": "••",
        "Name": "New Lover’s Kiss",
        "Description": "Conjure rain, no matter current cloud conditions, potentially up to even a deluge.",
        "Catch": "A mortal human has commented, within the character's hearing and within the past hour, that it looks like rain.",
        "Court Goodwill Requirement if not a member": "●●●",
        "Cost": "●",
        "Dice Pool": "Mantle + Intelligence + Survival"
    },
    {
        "Rank": "•••",
        "Name": "Warmth of the Blood",
        "Description": "Downgrade a subject's lethal wounds to bashing, or heal bashing wounds entirely.",
        "Catch": "The target has honestly professed a heartfelt and deep love, romantic or familial, for the changeling.",
        "Court Goodwill Requirement if not a member": "●●●●",
        "Cost": "●○",
        "Dice Pool": "Mantle + Wits + Medicine"
    },
    {
        "Rank": "••••",
        "Name": "Yesterday’s Birth",
        "Description": "Age a target by a full season, leaving it as if it were now the height of Spring; requires additional Glamour and a willpower dot to apply to humans.",
        "Catch": "The character spills two drops of blood on the target object and cups it in her hands.",
        "Court Goodwill Requirement if not a member": "●●●●●",
        "Cost": "●(●●○)",
        "Dice Pool": "Wyrd + Medicine"
    },
    {
        "Rank": "•••••",
        "Name": "Mother of All Deaths",
        "Description": "Animates the plant life in an area and have it fight on the changeling's behalf.",
        "Catch": "A man bled to death on this soil within the past year.",
        "Court Goodwill Requirement if not a member": "-",
        "Cost": "●●●○",
        "Dice Pool": "Mantle + Presence + Empathy"
    },
    {
        "Rank": "Contracts of Fleeting Spring",
        "Name": "N/A",
        "Description": "N/A",
        "Catch": "N/A",
        "Court Goodwill Requirement if not a member": "Court Goodwill (Spring)",
        "Cost": "N/A",
        "Dice Pool": "Lost 149"
    },
    {
        "Rank": "•",
        "Name": "Cupid’s Eye",
        "Description": "Learn one of the subject's desires",
        "Catch": "Used on someone who has kissed the Changeling in the past 24 hours, or who desires the Changeling",
        "Court Goodwill Requirement if not a member": "Waived",
        "Cost": "●",
        "Dice Pool": "Wyrd + Wits vs Powerstat + Composure"
    },
    {
        "Rank": "••",
        "Name": "Growth of the Ivy",
        "Description": "Change one of the subject's desires",
        "Catch": "Using the contract to resolve a Pledge. Must spend a Willpower point when using on a Supernatural",
        "Court Goodwill Requirement if not a member": "●●●",
        "Cost": "●●(○)",
        "Dice Pool": "Mantle + Manipulation + Persuasion - Subject's Resolve"
    },
    {
        "Rank": "•••",
        "Name": "Wyrd-Faced Stranger",
        "Description": "Become someone who the target desire/expect to see",
        "Catch": "The changeling has offered food to the target and it was accepted, or the other way around.",
        "Court Goodwill Requirement if not a member": "●●●●",
        "Cost": "●●",
        "Dice Pool": "Mantle + Presence + Subterfuge vs Powerstat + Composure"
    },
    {
        "Rank": "••••",
        "Name": "Pandora’s Gift",
        "Description": "Temporarily produce an object the subject desires",
        "Catch": "Used on someone who gave the Changeling a no strings attached gift in the past week",
        "Court Goodwill Requirement if not a member": "●●●●●",
        "Cost": "●●",
        "Dice Pool": "Mantle + Wits + Craft"
    },
    {
        "Rank": "•••••",
        "Name": "Waking the Inner Faerie",
        "Description": "Alter a subject's desire and force them to pursue it above all else.",
        "Catch": "The subject freely told the Changeling his desires.",
        "Court Goodwill Requirement if not a member": "-",
        "Cost": "●●●○",
        "Dice Pool": "Mantle + Intelligence + Expression vs Powerstat + Composure"
    },
    {
        "Rank": "Contracts of Verdant Spring",
        "Name": "N/A",
        "Description": "N/A",
        "Catch": "N/A",
        "Court Goodwill Requirement if not a member": "Court Goodwill (Spring)",
        "Cost": "N/A",
        "Dice Pool": "Lords of Summer 39"
    },
    {
        "Rank": "•",
        "Name": "Font of Inspiration",
        "Description": "Each success is a +1 to Crafts or Expression rolls",
        "Catch": "Invests his own literal blood sweat or tears into the creation",
        "Court Goodwill Requirement if not a member": "Waived",
        "Cost": "●",
        "Dice Pool": "Mantle + Wits + Empathy - Subject's Resolve (If subject is opposed)"
    },
    {
        "Rank": "••",
        "Name": "The Ineffable Gift",
        "Description": "Gains a +3 bonus in social challenges. Drawback of being less effective with multiple uses.",
        "Catch": "Speaks out loud about something she is passionate about",
        "Court Goodwill Requirement if not a member": "●●●",
        "Cost": "●",
        "Dice Pool": "Mantle + Presence + Manipulation vs Resolve + Composure"
    },
    {
        "Rank": "•••",
        "Name": "Impassioned Blow",
        "Description": "+4 Bonus to attack pool, but the opponent gets a +2 bonus as well.",
        "Catch": "Target has insulted or assaulted by word or deed the changeling in the last hour",
        "Court Goodwill Requirement if not a member": "●●●●",
        "Cost": "●",
        "Dice Pool": "Mantle + Resolve + Brawl / Firearms / Weaponry"
    },
    {
        "Rank": "••••",
        "Name": "Spur the Crowd",
        "Description": "Sway a crowd in a certain emotional direction",
        "Catch": "No one in the crowd knows the user is a changeling",
        "Court Goodwill Requirement if not a member": "●●●●●",
        "Cost": "●",
        "Dice Pool": "Mantle + Wyrd + Presence (Extended and Contested)"
    },
    {
        "Rank": "•••••",
        "Name": "Verdant, Roiling Heart",
        "Description": "Renew Willpower pool as if fulfilling Virtue, drawback of all social actions being tainted by her virtue or vice and a -2 to all social rolls",
        "Catch": "Takes an action directly related to virtue or vice",
        "Court Goodwill Requirement if not a member": "-",
        "Cost": "●",
        "Dice Pool": "Mantle + Composure + Empathy"
    },
    {
        "Rank": "Summer Court Contracts",
        "Name": "N/A",
        "Description": "N/A",
        "Catch": "N/A",
        "Court Goodwill Requirement if not a member": "N/A",
        "Cost": "N/A",
        "Dice Pool": ""
    },
    {
        "Rank": "Contracts of Eternal Summer",
        "Name": "N/A",
        "Description": "N/A",
        "Catch": "N/A",
        "Court Goodwill Requirement if not a member": "Court Goodwill (Summer)",
        "Cost": "N/A",
        "Dice Pool": "Lost 155"
    },
    {
        "Rank": "•",
        "Name": "Son of the Hearth",
        "Description": "Remain at a comfortable temperature, no matter what the outside circumstances are.",
        "Catch": "Spit on a fading ember or spark",
        "Court Goodwill Requirement if not a member": "Waived",
        "Cost": "●(○)",
        "Dice Pool": "Wyrd + Survival"
    },
    {
        "Rank": "••",
        "Name": "Ulf’s Heart",
        "Description": "Produce light in radius pf 200 yards for one scene; extend its presence to one hour by spending 1 more Glamour.",
        "Catch": "Within 5 minutes of midnight",
        "Court Goodwill Requirement if not a member": "●●●",
        "Cost": "●(●)",
        "Dice Pool": "Mantle + Strength + Occult"
    },
    {
        "Rank": "•••",
        "Name": "Noonday Grasp",
        "Description": "Gain +1 Strength with one success, and another +1 with every three successes after that.",
        "Catch": "Eats a chunk of naturally formed ice",
        "Court Goodwill Requirement if not a member": "●●●●",
        "Cost": "●●",
        "Dice Pool": "Mantle + Stamina + Brawl"
    },
    {
        "Rank": "••••",
        "Name": "Solstice Revelation",
        "Description": "Let loose a bright light that reveals all hidden individuals and challenges supernatural cloaking.",
        "Catch": "Within five minuets of noon",
        "Court Goodwill Requirement if not a member": "●●●●●",
        "Cost": "●●●",
        "Dice Pool": "Mantle + Presence + Occult"
    },
    {
        "Rank": "•••••",
        "Name": "The Lord’s Dread Gaze",
        "Description": "Unleashing a beam of focused sunlight that does Lethal (Aggravated with Willpower)",
        "Catch": "The target is wearing or touching gold",
        "Court Goodwill Requirement if not a member": "-",
        "Cost": "●●●(○)",
        "Dice Pool": "Mantle + Dexterity + Athletics - Subject's Defense"
    },
    {
        "Rank": "Contracts of Fleeting Summer",
        "Name": "N/A",
        "Description": "N/A",
        "Catch": "N/A",
        "Court Goodwill Requirement if not a member": "Court Goodwill (Summer)",
        "Cost": "N/A",
        "Dice Pool": "Lost 153"
    },
    {
        "Rank": "•",
        "Name": "Baleful Sense",
        "Description": "Sense the greatest nearby source of wrath.",
        "Catch": "Character is angry when he invokes this clause.",
        "Court Goodwill Requirement if not a member": "Waived",
        "Cost": "●",
        "Dice Pool": "Wyrd + Wits"
    },
    {
        "Rank": "••",
        "Name": "Goblin’s Malignance",
        "Description": "Redirect the focus of a subject's wrath.",
        "Catch": "The current victim of the subject's wrath owes the character a favor, or the subject has red hair.",
        "Court Goodwill Requirement if not a member": "●●●",
        "Cost": "●",
        "Dice Pool": "Mantle + Manipulation + Persuasion vs Powerstat + Composure"
    },
    {
        "Rank": "•••",
        "Name": "Friendless Tongue",
        "Description": "Stir a person to fury with harmless words.",
        "Catch": "The clause's target wears a ring on the left hand.",
        "Court Goodwill Requirement if not a member": "●●●●",
        "Cost": "●●",
        "Dice Pool": "Mantle + Manipulation + Subterfuge vs Powerstat + Composure"
    },
    {
        "Rank": "••••",
        "Name": "Sundown Eyes",
        "Description": "Quell all conflict in an area temporarily.",
        "Catch": "The character is suffering wound penalties and has taken at least two points of lethal damage.",
        "Court Goodwill Requirement if not a member": "●●●●●",
        "Cost": "●●●",
        "Dice Pool": "Mantle + Presence + Socialize - Subject's Composure"
    },
    {
        "Rank": "•••••",
        "Name": "The Flames of Summer",
        "Description": "Enter an unstoppable fury; gain +2 to Physical rolls and ignore all wound penalties.",
        "Catch": "The sun is within five minutes of its zenith, and the character has called out a formal challenge to an opponent.",
        "Court Goodwill Requirement if not a member": "-",
        "Cost": "●●○",
        "Dice Pool": "Mantle + Stamina + Animal Ken"
    },
    {
        "Rank": "Contracts of Punishing Summer",
        "Name": "N/A",
        "Description": "N/A",
        "Catch": "N/A",
        "Court Goodwill Requirement if not a member": "Court Goodwill (Summer)",
        "Cost": "N/A",
        "Dice Pool": "Lords of Summer 59"
    },
    {
        "Rank": "•",
        "Name": "Smoldergrip",
        "Description": "Makes an object unbearably hot to the touch.",
        "Catch": "The Changeling sports a real sunburn",
        "Court Goodwill Requirement if not a member": "None",
        "Cost": "●",
        "Dice Pool": "Strength + Wits - Objects Size"
    },
    {
        "Rank": "••",
        "Name": "Battle Bright",
        "Description": "Creates a blinding beacon that distracts all attackers.",
        "Catch": "The Changeling is holding a real, burning torch.",
        "Court Goodwill Requirement if not a member": "●●●",
        "Cost": "●●",
        "Dice Pool": "Wyrd + Presence vs Highest Wits + Composure within sight."
    },
    {
        "Rank": "•••",
        "Name": "Crown of Clashing Fire",
        "Description": "Summons up a ring of flaming thorns that forces a target into one-on-one combat.",
        "Catch": "The Changeling has one or more scars from the last battle with this foe.",
        "Court Goodwill Requirement if not a member": "●●●●",
        "Cost": "●●○",
        "Dice Pool": "Wyrd + Resolve - Subject's Stamina"
    },
    {
        "Rank": "••••",
        "Name": "Baleful Stroke of Summer Sun",
        "Description": "Inflicts a sun stroke on the target, resulting in either mounting mechanical penalties or aggravated damage (target's choice).",
        "Catch": "The Changeling strikes with a metal weapon he forged, has to hit with substantial metal part.",
        "Court Goodwill Requirement if not a member": "●●●●●",
        "Cost": "●●●",
        "Dice Pool": "Wyrd + Stamina vs Stamina + Composure. This is after an attack."
    },
    {
        "Rank": "•••••",
        "Name": "Scorched Earth",
        "Description": "Turns the area into a blighted waste land that inflicts penalties on all combatants.",
        "Catch": "The Changeling meditates under a Summer Court flag or pendant she helped make.",
        "Court Goodwill Requirement if not a member": "N/A",
        "Cost": "●●●●●",
        "Dice Pool": "Wyrd + Strength"
    },
    {
        "Rank": "Autumn Court Contracts",
        "Name": "N/A",
        "Description": "N/A",
        "Catch": "N/A",
        "Court Goodwill Requirement if not a member": "N/A",
        "Cost": "N/A",
        "Dice Pool": ""
    },
    {
        "Rank": "Contracts of Eternal Autumn",
        "Name": "N/A",
        "Description": "N/A",
        "Catch": "N/A",
        "Court Goodwill Requirement if not a member": "Court Goodwill (Autumn)",
        "Cost": "N/A",
        "Dice Pool": "Lost 159"
    },
    {
        "Rank": "•",
        "Name": "Last Breath Isaac",
        "Description": "Ripen a portion of a plant",
        "Catch": "The plant or tree is unclaimed or the Changeling has permission to harvest from it.",
        "Court Goodwill Requirement if not a member": "Waived",
        "Cost": "●",
        "Dice Pool": "Wyrd + Manipulation"
    },
    {
        "Rank": "••",
        "Name": "Withering Glare",
        "Description": "Wither a plant to Winter or age an animal.",
        "Catch": "The plant has the Changelings name or moniker carved into it or written on a tag.",
        "Court Goodwill Requirement if not a member": "●●●",
        "Cost": "●",
        "Dice Pool": "Mantle + Presence + Science"
    },
    {
        "Rank": "•••",
        "Name": "Brother to the Ague",
        "Description": "Damage a foe through dehydration.",
        "Catch": "The character can name two diseases that the subject has suffered or is suffering, and one that the subject fears.",
        "Court Goodwill Requirement if not a member": "●●●●",
        "Cost": "●●",
        "Dice Pool": "Mantle + Dexterity + Medicine"
    },
    {
        "Rank": "••••",
        "Name": "Riding the Falling Leaves",
        "Description": "Transform into a cloud of autumn leaves",
        "Catch": "The character catches a naturally falling leaf at the moment of the clause's activation.",
        "Court Goodwill Requirement if not a member": "●●●●●",
        "Cost": "●●",
        "Dice Pool": "Mantle + Dexterity + Survival"
    },
    {
        "Rank": "•••••",
        "Name": "Tears of Autumn",
        "Description": "Bring about a hailstorm",
        "Catch": "The character holds a key encased in ice that finishes thawing at the start of the ritual.",
        "Court Goodwill Requirement if not a member": "-",
        "Cost": "●●●",
        "Dice Pool": "Mantle + Manipulation + Occult"
    },
    {
        "Rank": "Contracts of Fleeting Autumn",
        "Name": "N/A",
        "Description": "N/A",
        "Catch": "N/A",
        "Court Goodwill Requirement if not a member": "Court Goodwill (Autumn)",
        "Cost": "N/A",
        "Dice Pool": "Lost 156"
    },
    {
        "Rank": "•",
        "Name": "Witches’ Intuition",
        "Description": "Learn one of the subject's fears",
        "Catch": "Subject does not know the Changelings name",
        "Court Goodwill Requirement if not a member": "Waived",
        "Cost": "●",
        "Dice Pool": "Wyrd + Wits - Composure"
    },
    {
        "Rank": "••",
        "Name": "Tale of the Baba Yaga",
        "Description": "Invoke fear of intended object in subjects for 1 turn per success.",
        "Catch": "The unnatural fear the character evokes is based upon a myth, urban legend or actual threat with which all subjects of the Contract are familiar.",
        "Court Goodwill Requirement if not a member": "●●●",
        "Cost": "●",
        "Dice Pool": "Mantle + Manipulation + Intimidation"
    },
    {
        "Rank": "•••",
        "Name": "Heart of the Antlion",
        "Description": "Immune to mundane attempts at fear and resistant to supernatural fear.",
        "Catch": "The character consumes a spider or other vermin that has literally been scared to death.",
        "Court Goodwill Requirement if not a member": "●●●●",
        "Cost": "●",
        "Dice Pool": "Mantle + Resolve + Investigation"
    },
    {
        "Rank": "••••",
        "Name": "Scent of the Harvest",
        "Description": "Heart of the Antlion for friends.",
        "Catch": "Two of the subjects greatest fears are each other.",
        "Court Goodwill Requirement if not a member": "●●●●●",
        "Cost": "●●",
        "Dice Pool": "Mantle + Presence + Expression, Extended"
    },
    {
        "Rank": "•••••",
        "Name": "Mien of the Baba Yaga",
        "Description": "Become the subjects fear. Scare them badly enough to actually deal damage",
        "Catch": "One of the subjects greatest fears is actually the character.",
        "Court Goodwill Requirement if not a member": "-",
        "Cost": "●●●○",
        "Dice Pool": "Mantle + Wits + Empathy"
    },
    {
        "Rank": "Contracts of Spellbound Autumn",
        "Name": "N/A",
        "Description": "N/A",
        "Catch": "N/A",
        "Court Goodwill Requirement if not a member": "Court Goodwill (Autumn)",
        "Cost": "N/A",
        "Dice Pool": "Lords of Summer 79"
    },
    {
        "Rank": "•",
        "Name": "Warlock’s Gaze",
        "Description": "Detect the presence of the supernatural, even deliberately obscured. AoE: Yards = to Wyrd",
        "Catch": "Physical contact with non-allied supernatural being other than another changeling.",
        "Court Goodwill Requirement if not a member": "Waived",
        "Cost": "●●",
        "Dice Pool": "Wyrd + Occult (vs. Powerstat + Compusure if target supernaturally concealed)"
    },
    {
        "Rank": "••",
        "Name": "Barrow-Whisper",
        "Description": "Hears and is heard by ghosts.",
        "Catch": "Ghost in the area wants to communicate.",
        "Court Goodwill Requirement if not a member": "●●●",
        "Cost": "●",
        "Dice Pool": "Wyrd + Expression"
    },
    {
        "Rank": "•••",
        "Name": "Smith’s Wisdom",
        "Description": "Learn abilities and purpose of item of power (token or else).",
        "Catch": "The character has stolen the item from a friend (without permission) or been freely given the item by an enemy.",
        "Court Goodwill Requirement if not a member": "●●●●",
        "Cost": "●●●",
        "Dice Pool": "Mantle + Intelligence + Occult"
    },
    {
        "Rank": "••••",
        "Name": "Arcadian Commandment",
        "Description": "Power to speak with authority of True Fae to hobgoblins and other Gentry minions, even to those incapable of speech.",
        "Catch": "Character knowingly comes unarmed and unarmored to the presence of entity to be commanded.",
        "Court Goodwill Requirement if not a member": "●●●●●",
        "Cost": "●●●○",
        "Dice Pool": "Wyrd + Presence vs Powerstat + Resolve"
    },
    {
        "Rank": "•••••",
        "Name": "Oathbreaker’s Honesty",
        "Description": "Violate the pledge without falling under its Sanctions.",
        "Catch": "Begged to enact this clause by someone who will knowingly come to disaster on account of his betrayal.",
        "Court Goodwill Requirement if not a member": "-",
        "Cost": "●●●●●○",
        "Dice Pool": "Wyrd + Resolve (extended)"
    },
    {
        "Rank": "Winter Court Contracts",
        "Name": "N/A",
        "Description": "N/A",
        "Catch": "N/A",
        "Court Goodwill Requirement if not a member": "N/A",
        "Cost": "N/A",
        "Dice Pool": ""
    },
    {
        "Rank": "Contracts of Eternal Winter",
        "Name": "N/A",
        "Description": "N/A",
        "Catch": "N/A",
        "Court Goodwill Requirement if not a member": "Court Goodwill (Winter)",
        "Cost": "N/A",
        "Dice Pool": "Lost 162"
    },
    {
        "Rank": "•",
        "Name": "Jack’s Breath",
        "Description": "Cools a room, potentially by a significant margin.",
        "Catch": "The character hears someone shiver or tastes someones sweat.",
        "Court Goodwill Requirement if not a member": "Waived",
        "Cost": "●",
        "Dice Pool": "Wyrd + Survival"
    },
    {
        "Rank": "••",
        "Name": "Touch of Winter",
        "Description": "Freeze the surface of a body of water, potentially affecting quite a large area.",
        "Catch": "The character first spells out a name or idea he hates with liquid on a dry surface",
        "Court Goodwill Requirement if not a member": "●●●",
        "Cost": "●",
        "Dice Pool": "Mantle + Intelligence + Science"
    },
    {
        "Rank": "•••",
        "Name": "Riding the Devil’s Jawbone",
        "Description": "Inflicts an area with intense cold, causing penalties to all within.",
        "Catch": "There is a bell ringing within 20 feet of the character.",
        "Court Goodwill Requirement if not a member": "●●●●",
        "Cost": "●●",
        "Dice Pool": "Mantle + Dexterity + Stealth"
    },
    {
        "Rank": "••••",
        "Name": "Fallen from the Timbers",
        "Description": "Blasts a target with cold and ice, inflicting lethal damage and penalizing all of their actions.",
        "Catch": "The contracts target is wearing silver jewelry that has a religious meaning to her.",
        "Court Goodwill Requirement if not a member": "●●●●●",
        "Cost": "●●●",
        "Dice Pool": "Mantle + Dexterity + Athletics - Subject's Defense"
    },
    {
        "Rank": "•••••",
        "Name": "Witch’s Paradise",
        "Description": "Summons a lasting snowstorm over an area.",
        "Catch": "The moon is in the sky and the character can hear a wolf howling.",
        "Court Goodwill Requirement if not a member": "-",
        "Cost": "●●●○",
        "Dice Pool": "Mantle + Presence + Occult"
    },
    {
        "Rank": "Contracts of Fleeting Winter",
        "Name": "N/A",
        "Description": "N/A",
        "Catch": "N/A",
        "Court Goodwill Requirement if not a member": "Court Goodwill (Winter)",
        "Cost": "N/A",
        "Dice Pool": "Lost 160"
    },
    {
        "Rank": "•",
        "Name": "The Dragon Knows",
        "Description": "Determine the source of sorrow someone is experiencing.",
        "Catch": "The character looks into the subjects eyes for a moment.",
        "Court Goodwill Requirement if not a member": "Waived",
        "Cost": "●",
        "Dice Pool": "Wyrd + Empathy - Subject's Composure"
    },
    {
        "Rank": "••",
        "Name": "Slipknot Dreams",
        "Description": "Forces a subject to temporarily let go of their sorrow.",
        "Catch": "The subject has accepted something from the character in the past 24 hours.",
        "Court Goodwill Requirement if not a member": "●●●",
        "Cost": "●",
        "Dice Pool": "Mantle + Manipulation + Subterfuge - Subject's Resolve"
    },
    {
        "Rank": "•••",
        "Name": "Faces in the Water",
        "Description": "Fills a subject with sorrow over a painful memory, inflicting social penalties.",
        "Catch": "The subject is carrying a photograph or some other image of an older relative or ancestor on her person.",
        "Court Goodwill Requirement if not a member": "●●●●",
        "Cost": "●",
        "Dice Pool": "Mantle + Intelligence + Investigation - Subject's Composure"
    },
    {
        "Rank": "••••",
        "Name": "Fallow Fields, Empty Harvest",
        "Description": "Eliminates a subject's ability to feel positive emotions for a time, suffering social penalties and an inability to regain Willpower via virtues or vices.",
        "Catch": "The character has made the subject happy (or happier) within the last 10 minutes.",
        "Court Goodwill Requirement if not a member": "●●●●●",
        "Cost": "●●",
        "Dice Pool": "Mantle + Manipulation + Intimidation vs Powerstat + Composure"
    },
    {
        "Rank": "•••••",
        "Name": "Every Sorrow a Jewel",
        "Description": "Paralyzes a subject with grief, rendering them briefly unable to take any actions.",
        "Catch": "The subject has tasted one of the changelings tears.",
        "Court Goodwill Requirement if not a member": "-",
        "Cost": "●●●○",
        "Dice Pool": "Mantle + Manipulation + Persuasion vs Powerstat + Composure"
    },
    {
        "Rank": "Contracts of the Sorrow-Frozen Heart",
        "Name": "N/A",
        "Description": "N/A",
        "Catch": "N/A",
        "Court Goodwill Requirement if not a member": "Court Goodwill (Winter)",
        "Cost": "N/A",
        "Dice Pool": "Lords of Summer 99"
    },
    {
        "Rank": "•",
        "Name": "A Mere Vessel for Loss",
        "Description": "Reduce the Effects of pain and discomfort by success",
        "Catch": "Pierces skin with a thin needle",
        "Court Goodwill Requirement if not a member": "Waived",
        "Cost": "●",
        "Dice Pool": "Mantle + Resolve + Occult"
    },
    {
        "Rank": "••",
        "Name": "Fear is Nothing",
        "Description": "Reduces dice pool of supernatural fear effects by Wyrd",
        "Catch": "Empties his hands and leaves them open at his side",
        "Court Goodwill Requirement if not a member": "●●●",
        "Cost": "●",
        "Dice Pool": "Mantle + Composure + Expression"
    },
    {
        "Rank": "•••",
        "Name": "Grief is Stronger than Death",
        "Description": "Damage from an attack is ignored for a round, to be applied next round",
        "Catch": "Contemptuously tosses a chunk of cold iron on the ground.",
        "Court Goodwill Requirement if not a member": "●●●●",
        "Cost": "●●",
        "Dice Pool": "Mantle + Resolve + Survival"
    },
    {
        "Rank": "••••",
        "Name": "Remorseless Strike",
        "Description": "Next Brawl or weaponry attack target suffers additional bonus damage equal to Wyrd",
        "Catch": "Slashes himself with a sharp instrument and takes 1 lethal",
        "Court Goodwill Requirement if not a member": "●●●●●",
        "Cost": "●●",
        "Dice Pool": "Mantle + Resolve + Brawl"
    },
    {
        "Rank": "•••••",
        "Name": "A Cold Hand on the Heart",
        "Description": "Bestow previous clauses on others as well.",
        "Catch": "Clutches target with one hand and anoints with ashes of a suicide victim or victim of a crime of passion.",
        "Court Goodwill Requirement if not a member": "-",
        "Cost": "●●●○",
        "Dice Pool": "Mantle + Composure + Expression"
    },
    {
        "Rank": "Directional Court Contracts",
        "Name": "N/A",
        "Description": "N/A",
        "Catch": "N/A",
        "Court Goodwill Requirement if not a member": "N/A",
        "Cost": "N/A",
        "Dice Pool": ""
    },
    {
        "Rank": "Contracts of the Four Directions",
        "Name": "N/A",
        "Description": "N/A",
        "Catch": "N/A",
        "Court Goodwill Requirement if not a member": "Court Goodwill (Directional)",
        "Cost": "N/A",
        "Dice Pool": "Winter Masques 134"
    },
    {
        "Rank": "•",
        "Name": "Mindfinder",
        "Description": "Know the direction to any target",
        "Catch": "Changeling has a lock of hair from the target.",
        "Court Goodwill Requirement if not a member": "None",
        "Cost": "●",
        "Dice Pool": "Wyrd + Survival - Subject's Wits"
    },
    {
        "Rank": "••",
        "Name": "Finding the Flow",
        "Description": "Ignore environmental penalties",
        "Catch": "The character successfully meditated for one full uninterrupted hour within the last 24 hours.",
        "Court Goodwill Requirement if not a member": "●●●",
        "Cost": "●",
        "Dice Pool": "Wyrd + Wits"
    },
    {
        "Rank": "•••",
        "Name": "Inequity of the Center",
        "Description": "Confuses a target, causing them to take many wrong turns, effectively penalizing speed",
        "Catch": "The changeling succeeds in touching a magnet to the target's bare skin.",
        "Court Goodwill Requirement if not a member": "●●●●",
        "Cost": "●",
        "Dice Pool": "Wyrd + Manipulation vs Powerstat + Survival"
    },
    {
        "Rank": "••••",
        "Name": "The Hundred Steps",
        "Description": "Powerful blessing upon an area to protect it from intruders",
        "Catch": "The character has two working compasses somewhere on his body",
        "Court Goodwill Requirement if not a member": "●●●●●",
        "Cost": "●●○",
        "Dice Pool": "Wyrd + Resolve"
    },
    {
        "Rank": "•••••",
        "Name": "Harmony of Portals",
        "Description": "Walk between two doors, potentially separated by several miles",
        "Catch": "The character possesses the key to both doors.",
        "Court Goodwill Requirement if not a member": "N/A",
        "Cost": "●●",
        "Dice Pool": "Wyrd + Stamina"
    },
    {
        "Rank": "Auroral Court Contracts",
        "Name": "N/A",
        "Description": "N/A",
        "Catch": "N/A",
        "Court Goodwill Requirement if not a member": "N/A",
        "Cost": "N/A",
        "Dice Pool": ""
    },
    {
        "Rank": "Contracts of Potential (Dawn)",
        "Name": "N/A",
        "Description": "N/A",
        "Catch": "N/A",
        "Court Goodwill Requirement if not a member": "Court Goodwill (Dawn)",
        "Cost": "N/A",
        "Dice Pool": "Swords at Dawn 138"
    },
    {
        "Rank": "•",
        "Name": "Light the Path",
        "Description": "Learn of the motivation of an action or statement",
        "Catch": "Previously caught the target in a lie.",
        "Court Goodwill Requirement if not a member": "None",
        "Cost": "●",
        "Dice Pool": "Wits + Wyrd vs Powerstat + Composure"
    },
    {
        "Rank": "••",
        "Name": "Read the Web",
        "Description": "Determine the nature of a relationship between two people through a translucent strand that connects.",
        "Catch": "The Changeling shares a Pledge with the target",
        "Court Goodwill Requirement if not a member": "●●●",
        "Cost": "●●",
        "Dice Pool": "Intelligence + Wyrd - Subject's Composure"
    },
    {
        "Rank": "•••",
        "Name": "Martyr's Will",
        "Description": "Increase extra dice when spending Willpower. Drawback of target being unable to regain willpower for the next 24 hours.",
        "Catch": "Deliberately shed a few drops of blood",
        "Court Goodwill Requirement if not a member": "●●●●",
        "Cost": "●●●",
        "Dice Pool": "Wyrd + Resolve"
    },
    {
        "Rank": "••••",
        "Name": "Shift the Foundation",
        "Description": "Temporarily change the targets Virtue or Vice.",
        "Catch": "Changeling and Subject are conversing about Virtue or Vice targeted as the result of the Contract.",
        "Court Goodwill Requirement if not a member": "●●●●●",
        "Cost": "●●●",
        "Dice Pool": "Dusk Court Mantle +\n                Manipulation + Expression vs Composure + Subterfuge"
    },
    {
        "Rank": "•••••",
        "Name": "Tenacity of Hope",
        "Description": "Massive benefits towards a goal, such as 8-again, etc. Drawback: If goal is not reached within time period, suffer penalties until goal or equal time is met.",
        "Catch": "Target is using this Contract for a selfless Purpose.",
        "Court Goodwill Requirement if not a member": "N/A",
        "Cost": "●●●○",
        "Dice Pool": "Wyrd + Resolve"
    },
    {
        "Rank": "Contracts of Entropy",
        "Name": "N/A",
        "Description": "N/A",
        "Catch": "N/A",
        "Court Goodwill Requirement if not a member": "N/A",
        "Cost": "N/A",
        "Dice Pool": "N/A"
    },
    {
        "Rank": "(Dusk)",
        "Name": "N/A",
        "Description": "N/A",
        "Catch": "N/A",
        "Court Goodwill Requirement if not a member": "Court Goodwill (Dusk)",
        "Cost": "Cost",
        "Dice Pool": "Dancers in the Dusk 141"
    },
    {
        "Rank": "•",
        "Name": "Babel's Curse",
        "Description": "Prevent another from communicating",
        "Catch": "Write target's name or common nickname on a piece of paper then tear it to pieces",
        "Court Goodwill Requirement if not a member": "None",
        "Cost": "●",
        "Dice Pool": "Intelligence + Expression + Mantle (Dusk) - Resolve"
    },
    {
        "Rank": "••",
        "Name": "Sense the Impending Doom",
        "Description": "Detect dangerous situations, react to danger faster",
        "Catch": "Consume at least a serving of caffeinated beverage within the last hour.",
        "Court Goodwill Requirement if not a member": "●●●",
        "Cost": "●",
        "Dice Pool": "Wits + Occult + Mantle (Dusk)"
    },
    {
        "Rank": "•••",
        "Name": "Gift of the Skald",
        "Description": "Target(s) gain a bonus to Resolve checks",
        "Catch": "Invoker is a member of Dusk and spends at least 5 minutes proselytizing on the Dusk philosophy.",
        "Court Goodwill Requirement if not a member": "●●●●",
        "Cost": "● per target + ○",
        "Dice Pool": "Presence + Persuasion + Mantle (Dusk) (vs target's Resolve + Wyrd if they WANT to resist)"
    },
    {
        "Rank": "••••",
        "Name": "Hero's Stand",
        "Description": "Challenge a target to gain a bonus to Brawl/Weaponry, they take Composure penalty if flee",
        "Catch": "Issue challenge while standing in a marked space <5' square.",
        "Court Goodwill Requirement if not a member": "●●●●●",
        "Cost": "●○",
        "Dice Pool": "Resolve + Brawl or Weaponry + Mantle (Dusk) vs Composure + Wyrd"
    },
    {
        "Rank": "•••••",
        "Name": "The Centre Cannot Stand",
        "Description": "Nullify a target's Contract",
        "Catch": "The Changeling knows and has used the target Contract in the last 24 hours.",
        "Court Goodwill Requirement if not a member": "N/A",
        "Cost": "●●",
        "Dice Pool": "Intelligence + Occult + Mantle (Dusk) - level of Contract"
    }
]

const goblinContractData = [
    {
        "Rank": "Contracts of Goblin Fortune",
        "Clause Name": "N/A",
        "Benefit": "N/A",
        "Drawback": "N/A",
        "Catch": "N/A",
        "Cost": "N/A",
        "Dice Pool": "N/A",
        "Book": "Rites of Spring 117"
    },
    {
        "Rank": "•",
        "Clause Name": "Fortune’s Favor",
        "Benefit": "Change a single roll into a rote or a chance roll",
        "Drawback": "Expensive cost to invoke. Must spend a willpower dot.",
        "Catch": "Used to protect a close friend from harm",
        "Cost": "●",
        "Dice Pool": "Wyrd + Manipulation",
        "Book": "RoS 117"
    },
    {
        "Rank": "••",
        "Clause Name": "Fortune’s Swift Blessing",
        "Benefit": "Change a chance roll into a normal roll or a normal roll into an exceptional success",
        "Drawback": "Expensive cost to invoke. Must spend a willpower dot.",
        "Catch": "Used when striking a blow against a mortal enemy",
        "Cost": "●●",
        "Dice Pool": "Wyrd + Wits",
        "Book": "RoS 117"
    },
    {
        "Rank": "•••",
        "Clause Name": "Fortune’s Bane",
        "Benefit": "Exceptional success become normal successes, normal successes become failures and chance rolls dramatically fail at 7 or lower until the next sunrise or sunset",
        "Drawback": "Expensive cost to invoke. Must spend a willpower dot.",
        "Catch": "Target publicly lied about the user to turn public or official opinion against the user",
        "Cost": "●●",
        "Dice Pool": "Wyrd + Subterfuge vs. Powerstat + Resolve",
        "Book": "RoS 118"
    },
    {
        "Rank": "••••",
        "Clause Name": "Distracting the Hounds",
        "Benefit": "Escape from any pursuit or confrontation",
        "Drawback": "Expensive cost to invoke. Must spend a willpower dot.",
        "Catch": "User is being pursued by Hobgoblins",
        "Cost": "●●●",
        "Dice Pool": "Wyrd + Stealth - Subject's Powerstat",
        "Book": "RoS 118"
    },
    {
        "Rank": "•••••",
        "Clause Name": "Recalling the Lost",
        "Benefit": "Rescue anyone abducted by the Fae",
        "Drawback": "Expensive cost to invoke. Must spend 2 willpower dots.",
        "Catch": "Used to recall a child younger than seven",
        "Cost": "●●●●",
        "Dice Pool": "Wyrd + Occult",
        "Book": "RoS 119"
    },
    {
        "Rank": "Contracts of Goblin Transformation",
        "Clause Name": "N/A",
        "Benefit": "N/A",
        "Drawback": "N/A",
        "Catch": "N/A",
        "Cost": "N/A",
        "Dice Pool": "N/A",
        "Book": "Rites of Spring 120"
    },
    {
        "Rank": "•",
        "Clause Name": "Healing Sacrifice",
        "Benefit": "Heals any and all wounds or diseases",
        "Drawback": "Expensive cost to invoke. Must spend a willpower dot.",
        "Catch": "Used to heal or cure a blood relative",
        "Cost": "●",
        "Dice Pool": "Wyrd + Medicine",
        "Book": "RoS 120"
    },
    {
        "Rank": "••",
        "Clause Name": "Seven-Year Gift",
        "Benefit": "Target does not age for the next seven years",
        "Drawback": "Expensive cost to invoke. Must spend a willpower dot.",
        "Catch": "Target is a blood relative within three generations",
        "Cost": "●●",
        "Dice Pool": "Wyrd + Stamina",
        "Book": "RoS 121"
    },
    {
        "Rank": "•••",
        "Clause Name": "Trading Beauty for Love",
        "Benefit": "Makes a human feel more positively towards the Changeling",
        "Drawback": "Expensive cost to invoke. Changeling permanently loses the color of his eyes and his beauty, becoming bland and colorless (Though never ugly) or downgrading Striking Looks merit.",
        "Catch": "Target must be fed an item of food the user prepared",
        "Cost": "●●●",
        "Dice Pool": "Wyrd + Manipulation -Subject's Composure",
        "Book": "RoS 121"
    },
    {
        "Rank": "••••",
        "Clause Name": "Changing Minds",
        "Benefit": "Change a target's opinion on something",
        "Drawback": "Expensive cost to invoke. Must spend a resolve dot.",
        "Catch": "Causes someone to believe an abstract ideal",
        "Cost": "●●●●○○",
        "Dice Pool": "Wyrd + Persuasion - Subject's Powerstat + Resolve",
        "Book": "RoS 122"
    },
    {
        "Rank": "•••••",
        "Clause Name": "The Fatal Transformation",
        "Benefit": "Kill the target",
        "Drawback": "Expensive cost to invoke. Must spend a stamina dot.",
        "Catch": "Target has slain one of the user's blood relatives",
        "Cost": "●●●○",
        "Dice Pool": "Wyrd + Intimidation vs. Powerstat + Stamina",
        "Book": "RoS 123"
    },
    {
        "Rank": "Goblin Contracts of the Wyrd",
        "Clause Name": "N/A",
        "Benefit": "N/A",
        "Drawback": "N/A",
        "Catch": "N/A",
        "Cost": "N/A",
        "Dice Pool": "N/A",
        "Book": "Dancers in the Dusk 65"
    },
    {
        "Rank": "•",
        "Clause Name": "Mantle Mask",
        "Benefit": "Temporarily disguise your Mantle as another Court's",
        "Drawback": "Signs of use remain for twice as long as the disguised mantle.",
        "Catch": "The decorates her skin with a sign appropriate to the Court she is disguising herself as.",
        "Cost": "●",
        "Dice Pool": "Wyrd + Occult",
        "Book": "DiD 65"
    },
    {
        "Rank": "••",
        "Clause Name": "Daunting Force",
        "Benefit": "The Changeling becomes intimidating to the subject",
        "Drawback": "All Glamour costs are increased by one for 24 hours.",
        "Catch": "Brandishing a drawn weapon.",
        "Cost": "●●",
        "Dice Pool": "Wyrd + Presence - Composure",
        "Book": "DiD 66"
    },
    {
        "Rank": "•••",
        "Clause Name": "Nothing Hidden",
        "Benefit": "While the Contract is active, the Changeling may roll to notice supernaturally concealed things.",
        "Drawback": "Significant negative Perception modifiers to the following scene.",
        "Catch": "Burn the feather of a keen sighted bird and rub the ashes on your eyelid.",
        "Cost": "●●",
        "Dice Pool": "Wyrd + Occult",
        "Book": "DiD 66"
    },
    {
        "Rank": "••••",
        "Clause Name": "Wyrd Eye",
        "Benefit": "Automatically become aware of any Contracts nearby. Ignore low Clarity modifiers to noticing Wyrd related phenomena and gain a bonus to Kenning",
        "Drawback": "All Perception for things unrelated to the Wyrd is penalized.",
        "Catch": "Breaks a pair of prescription glasses.",
        "Cost": "●●",
        "Dice Pool": "Wyrd + Occult",
        "Book": "DiD 67"
    },
    {
        "Rank": "•••••",
        "Clause Name": "The Fatal Clause",
        "Benefit": "Block a Contract as it is being activated.",
        "Drawback": "Pay the cost of the Clause you are attempting to block.",
        "Catch": "The Changeling has been a target of a Contract cast by the subject in the past 24 hours.",
        "Cost": "●●○",
        "Dice Pool": "Wyrd + Occult - Subject's Wyrd",
        "Book": "DiD 68"
    }
]

const unclassifiedGoblinContractData = [
    {
        "Name": "•",
        "Benefit": "Contracts",
        "Drawback": "N/A",
        "Catch": "N/A",
        "Cost": "N/A",
        "Dice Pool": "N/A",
        "Book": "N/A"
    },
    {
        "Name": "Shooter’s Bargain",
        "Benefit": "Blesses the next three shots fired from a weapon to mitigate penalties when attacking.",
        "Drawback": "One of the three shots is automatically reduced to a chance die.",
        "Catch": "In a fight scheduled beforehand.",
        "Cost": "●",
        "Dice Pool": "Wyrd + Dexterity",
        "Book": "CtL 164"
    },
    {
        "Name": "Sight of Truth and Lies",
        "Benefit": "Gain the ability to instantly tell if a person is lying.",
        "Drawback": "If the user lies while the contract is active, however, they lose any ability to tell truth from lies, believing all but the most blatant fabrications.",
        "Catch": "Used at an official occasion",
        "Cost": "●",
        "Dice Pool": "Wyrd + Subterfuge",
        "Book": "RoS 114"
    },
    {
        "Name": "Trading Luck for Fate",
        "Benefit": "Gain a sudden simple insight into the immediate future.",
        "Drawback": "This is done in return for a minor turn of bad luck.",
        "Catch": "Using the contract to win at gambling.",
        "Cost": "●",
        "Dice Pool": "Wyrd + Wits",
        "Book": "CtL 164"
    },
    {
        "Name": "••",
        "Benefit": "Contracts",
        "Drawback": "N/A",
        "Catch": "N/A",
        "Cost": "N/A",
        "Dice Pool": "N/A",
        "Book": "N/A"
    },
    {
        "Name": "Calling the Guardian",
        "Benefit": "Summon an invisible guardian that strikes back the instant you're attacked.",
        "Drawback": "The guardian can not distinguish between a blow that would actually do harm or a playful shove.",
        "Catch": "Currently suffering at least one lethal or aggravated damage from a hand-to-hand attack",
        "Cost": "●●",
        "Dice Pool": "Wyrd + Dexterity",
        "Book": "Rites of Spring 114"
    },
    {
        "Name": "Dream Rendering",
        "Benefit": "Upgrade a Token, permitting it to be used in dreams.",
        "Drawback": "Make a clarity roll at 5 dice when you next sleep, regardless of your current Clarity.",
        "Catch": "Used while naked.",
        "Cost": "●",
        "Dice Pool": "Wyrd + Wits",
        "Book": "SaD 109"
    },
    {
        "Name": "Diviner’s Madness",
        "Benefit": "Gains a brief glimmer into the past or future of a person, place, or thing.",
        "Drawback": "Causes temporary insanity.",
        "Catch": "Divining the past or future of someone the changeling is in love with.",
        "Cost": "●",
        "Dice Pool": "Wyrd + Wits",
        "Book": "Lost 165"
    },
    {
        "Name": "Fair Entrance",
        "Benefit": "Opens a door, no matter how it is barred.",
        "Drawback": "Causes one of the changeling's doors to be similarly opened for another some time soon.",
        "Catch": "Opening the door to someone who confessed his hatred towards the Changeling.",
        "Cost": "●",
        "Dice Pool": "Wyrd + Larceny",
        "Book": "Lost 165"
    },
    {
        "Name": "Fool’s Gold",
        "Benefit": "Guises an object to look like something else, potentially appearing quite valuable.",
        "Drawback": "This illusion lasts only for a time though, and when it expires the deceived parties automatically know who was responsible for the deception.",
        "Catch": "Clause is used to deceive someone who's lied to the Changeling in the last 24 hours.",
        "Cost": "●",
        "Dice Pool": "Wyrd + Manipulation",
        "Book": "Lost 166"
    },
    {
        "Name": "Sandman's Bargain",
        "Benefit": "Makes a dream immune to disruption by Oneiropomps",
        "Drawback": "The user can takes real Lethal damage when hurt inside the dream.",
        "Catch": "Used after staying awake for 24 hours",
        "Cost": "●",
        "Dice Pool": "Wyrd + Resolve",
        "Book": "SaD 110"
    },
    {
        "Name": "•••",
        "Benefit": "Contracts",
        "Drawback": "N/A",
        "Catch": "N/A",
        "Cost": "N/A",
        "Dice Pool": "N/A",
        "Book": "N/A"
    },
    {
        "Name": "The Blessing of Forgetfulness",
        "Benefit": "Allows the user to erase any one memory from the target's mind.",
        "Drawback": "Curses the user to suffer a dramatic failure on the next Subterfuge roll to get someone to believe a necessary lie.",
        "Catch": "Used to make the target forget about an event in which the user betrayed the target",
        "Cost": "●●○",
        "Dice Pool": "Wyrd + Manipulation - Subject's Composure",
        "Book": "RoS 115"
    },
    {
        "Name": "Burden of Life",
        "Benefit": "Removes damage starting at Agg by 2 for each success. Must be done within turns the damage was done by equal to user's wyrd.",
        "Drawback": "If you heal target for 4 or more damage, the user takes all damage the target would take in the next day instead.",
        "Catch": "Target was injured while saving the Character from harm.",
        "Cost": "●●",
        "Dice Pool": "Wyrd + Empathy",
        "Book": "CtL 166"
    },
    {
        "Name": "Delayed Harm",
        "Benefit": "The user avoids damage from one attack.",
        "Drawback": "The next attack they suffer doing lethal or aggravated damage does the previously avoided damage as a bonus.",
        "Catch": "Character is unarmed or otherwise unable to defend herself.",
        "Cost": "●●",
        "Dice Pool": "Wyrd + Dexterity",
        "Book": "CtL 167"
    },
    {
        "Name": "Goblin Midwife",
        "Benefit": "Grant a temporary increase in fertility to your target",
        "Drawback": "Curse of antipathy on you and a minor fae curse on the target's offspring",
        "Catch": "the target has broken your heart",
        "Cost": "●●○",
        "Dice Pool": "Wyrd + Empathy",
        "Book": "GobM p25"
    },
    {
        "Name": "Hospitality's Hold",
        "Benefit": "Gain bonus (equal to glamour spent) maintaining hospitality in a location, mark violators",
        "Drawback": "Take a similar penalty on all actions not related to maintaining hospitality, except against violators",
        "Catch": "Own or be primary resident of location",
        "Cost": "● to ●●●●●",
        "Dice Pool": "Willpower + Wyrd",
        "Book": "GotU p29"
    },
    {
        "Name": "Mirror Mirror",
        "Benefit": "The Changeling spies on another through a mirror,",
        "Drawback": "The target will see the Changeling when she next looks into a mirror.",
        "Catch": "The changeling breaks the mirror.",
        "Cost": "●○",
        "Dice Pool": "Wyrd + Resolve",
        "Book": "SaD 53"
    },
    {
        "Name": "••••",
        "Benefit": "Contracts",
        "Drawback": "N/A",
        "Catch": "N/A",
        "Cost": "N/A",
        "Dice Pool": "N/A",
        "Book": "N/A"
    },
    {
        "Name": "Goblin Oath",
        "Benefit": "The changeling can bind another character to an oath. The party taking the oath has difficulty breaking this oath, and if she does, disaster will strike her down.",
        "Drawback": "The changeling must also swear an oath to the subject and suffers similar penalties if he breaks his oath — but the nature of the Goblin Oath is such that both parties may suffer if only one is unfaithful.",
        "Catch": "Used when making a treaty of alliance or non-aggression",
        "Cost": "●●○",
        "Dice Pool": "Wyrd + Intimidation",
        "Book": "RoS 115"
    },
    {
        "Name": "Good and Bad Luck",
        "Benefit": "Accurately guess the outcome of an event that would be difficult to predict.",
        "Drawback": "Suffer a bout of bad lack afterwords.",
        "Catch": "Used to best a rival or enemy.",
        "Cost": "●●",
        "Dice Pool": "Wyrd + Wits",
        "Book": "CtL 167"
    },
    {
        "Name": "Call the Hunt",
        "Benefit": "Calls a Wild Hunt from out of the Hedge.",
        "Drawback": "Haha oh man what were you thinking? No seriously, nice going dumb ass! You deserve this.",
        "Catch": "Character is in the Hedge",
        "Cost": "●○",
        "Dice Pool": "Wyrd + Presence",
        "Book": "CtL 167"
    },
    {
        "Name": "Riot",
        "Benefit": "The crowd becomes a violent, enraged mob. They target an obvious source of anger first, or are randomly violent with no target.",
        "Drawback": "Many people in the area vividly remember the changeling and that they are responsible for the riot.",
        "Catch": "The changeling addresses the crowd and urges them to violence immediately before use. Most of the crowd must hear the changeling.",
        "Cost": "●●○",
        "Dice Pool": "Wyrd + Presence",
        "Book": "VL 23"
    },
    {
        "Name": "Royal Oil",
        "Benefit": "Target is covered in magical, highly flammable oil.",
        "Drawback": "Changeling is marked with a fiery crown showing he was the one that activated the contract.",
        "Catch": "Drink a tablespoon of castor oil and suffer from stomach cramps.",
        "Cost": "●●",
        "Dice Pool": "Wyrd + Dexterity",
        "Book": "SaD 54"
    },
    {
        "Name": "•••••",
        "Benefit": "Contracts",
        "Drawback": "N/A",
        "Catch": "N/A",
        "Cost": "N/A",
        "Dice Pool": "N/A",
        "Book": "N/A"
    },
    {
        "Name": "Blood-Binding",
        "Benefit": "Drains a target splashed with blood of all Glamour",
        "Drawback": "The user is drained of all Glamour as well.",
        "Catch": "Used against someone who murdered a blood relative. (Glamour expenditure is not negated)",
        "Cost": "○(All Glamour)",
        "Dice Pool": "Wyrd + Presence",
        "Book": "RoS 116"
    },
    {
        "Name": "Goblin Ward",
        "Benefit": "Draw a magical mark; Any changeling not attuned to it and steps near it will suffer from hallucinations and confusion. When the ward is activated it will affect everyone nearby, even those attuned. High Clarity Changelings must roll for loss.",
        "Drawback": "The creator cannot use his Seeming Blessing for as long as the ward continues to exist.",
        "Catch": "The ward is painted with the blood of a murdered enemy.",
        "Cost": "●●○",
        "Dice Pool": "Wyrd + Occult",
        "Book": "SaD 54"
    },
    {
        "Name": "Lost and Found",
        "Benefit": "Escapes from captivity or pursuit, seemingly by chance, but always automatically.",
        "Drawback": "Another enemy is made aware of the escapee's new location.",
        "Catch": "Escaping someone who knew the changeling personally for over a year.",
        "Cost": "●●○",
        "Dice Pool": "Wyrd + Presence",
        "Book": "CtL 168"
    },
    {
        "Name": "Mad Trespass",
        "Benefit": "Use a dream to spy on a Keeper",
        "Drawback": "The keeper spied on knows where to find you until the following dawn.",
        "Catch": "Given a gift by the keeper or it's servants.",
        "Cost": "●○",
        "Dice Pool": "Wyrd + Composure",
        "Book": "SaD 110"
    },
    {
        "Name": "Sabotage",
        "Benefit": "Damage or disable a factory or equivalent full of machinery.",
        "Drawback": "The changeling suffers a roll of their total Wyrd in bashing damage.",
        "Catch": "The user has been employed at some point to work on machines that they are targeting.",
        "Cost": "●●●○",
        "Dice Pool": "Wyrd + Crafts",
        "Book": "VL 24"
    },
    {
        "Name": "Sleepwalker",
        "Benefit": "Devour a dream for a verity of potent benefits",
        "Drawback": "-3 to perception while the contract is active. The user cannot sleep and halves all traits until they can sleep.",
        "Catch": "Devours a child's dream",
        "Cost": "●○",
        "Dice Pool": "Wyrd + Wits",
        "Book": "SaD 111"
    }
]

export {
    universalContractData, seemingContractData, courtContractData,
    goblinContractData, unclassifiedGoblinContractData
}

