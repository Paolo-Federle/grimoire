const courtData = [
    {
        "Court Name": "Seasonal Courts of the Americas",
        "Page Number": "N/A",
        "Court Emotion": "",
        "Mantle Effects": "",
        "Crown Blessing": "",
        "Blessing Effect": ""
    },
    {
        "Court Name": "Spring Court",
        "Page Number": "CtL 47, LoS 28",
        "Court Emotion": "Desire",
        "Mantle Effects": "•+ +1 Socialization•••+ Allies and Contacts cost 1/2.••••• Can reroll dice pool when meeting someone for the first time.",
        "Crown Blessing": "Blessing of the Green",
        "Blessing Effect": "Crown spends a willpower point, grants ability to self or other to add Mantle on Glamour harvest roll. Usage per session = Mantle dots."
    },
    {
        "Court Name": "Summer Court",
        "Page Number": "CtL 50, LoS 47",
        "Court Emotion": "Wrath",
        "Mantle Effects": "• Spending Willpower on strength roll grants 4 dice instead of 3.••• +1 Armor••••• +1 Health",
        "Crown Blessing": "Challenge of the Black Spear",
        "Blessing Effect": "When Crown is fighting 1 vs. 1, spend Glamour to increase Initiative by Mantle. Immune to surprised by ambushes or trickery. More then one combantant and Initiative drops to +1. Usage per session = Mantle Dots, once per foe."
    },
    {
        "Court Name": "Autumn Court",
        "Page Number": "CtL 54, LoS 66",
        "Court Emotion": "Fear",
        "Mantle Effects": "• +2 on Contracts that use Occult.••• +1 Empathy and Investigation vs. Gentry or Arcadia.••••• Can reroll Occult that deals with magic (Not Contracts or Pledges.)",
        "Crown Blessing": "Harvest of Whispers",
        "Blessing Effect": "Once per session, Crown discusses new news that he learned with ST. He's awarded with 2 special Glamour per revelation that can only be used for specific actions. Can store more of this glamour then Wyrd allows, but it attracts attention. These glamour fade at the end of the session."
    },
    {
        "Court Name": "Winter Court",
        "Page Number": "CtL 58, LoS 86",
        "Court Emotion": "Sorrow",
        "Mantle Effects": "• -1 Wits + Composure/Skill when not specifically looking for character.••• +1 to Subterfuge.••••• As •, but -3 penalty.",
        "Crown Blessing": "Feast of Ashes",
        "Blessing Effect": "Once per session, Crown converts Glamour to Willpower = Mantle. Willpower can be more then maximum, but is lost at the end of the session. For the rest of the scene, add Mantle to willpower rating."
    },
    {
        "Court Name": "Faraway CourtsSeasonal Variants",
        "Page Number": "N/A",
        "Court Emotion": "N/A",
        "Mantle Effects": "N/A",
        "Crown Blessing": "N/A",
        "Blessing Effect": "N/A"
    },
    {
        "Court Name": "Growing Season",
        "Page Number": "WM 120",
        "Court Emotion": "Lust",
        "Mantle Effects": "See Spring Court",
        "Crown Blessing": "Blessing of the Green",
        "Blessing Effect": "See Spring Court"
    },
    {
        "Court Name": "Tornado Season",
        "Page Number": "WM 120",
        "Court Emotion": "Madness",
        "Mantle Effects": "See Spring Court",
        "Crown Blessing": "Blessing of the Green",
        "Blessing Effect": "See Spring Court"
    },
    {
        "Court Name": "Dry Season",
        "Page Number": "WM 120",
        "Court Emotion": "Rage",
        "Mantle Effects": "See Summer Court",
        "Crown Blessing": "Challenge of the Black Spear",
        "Blessing Effect": "See Summer Court"
    },
    {
        "Court Name": "Monsoon Season",
        "Page Number": "WM 120",
        "Court Emotion": "Sanguine",
        "Mantle Effects": "See Summer Court",
        "Crown Blessing": "Challenge of the Black Spear",
        "Blessing Effect": "See Summer Court"
    },
    {
        "Court Name": "Dead Season",
        "Page Number": "WM 120",
        "Court Emotion": "Despair",
        "Mantle Effects": "See Winter Court",
        "Crown Blessing": "Feast of Ashes",
        "Blessing Effect": "See Winter Court"
    },
    {
        "Court Name": "Directional Courts of Asia",
        "Page Number": "N/A",
        "Court Emotion": "N/A",
        "Mantle Effects": "N/A",
        "Crown Blessing": "N/A",
        "Blessing Effect": "N/A"
    },
    {
        "Court Name": "North Court",
        "Page Number": "WM 122",
        "Court Emotion": "Suffering",
        "Mantle Effects": "• Ignore penalties from fatigue and deprivation (Death is still possible)••• Ignore 1 from wound penalties••••• Once per scene use Resolve as armor score. Does not stack.",
        "Crown Blessing": "",
        "Blessing Effect": ""
    },
    {
        "Court Name": "East Court",
        "Page Number": "WM 125",
        "Court Emotion": "Envy",
        "Mantle Effects": "•+ +1 to all social rolls•••+ +1 on Subterfuge when sparking envy or making a deal.••••• Once per day, add dots in Resources to any social roll.",
        "Crown Blessing": "",
        "Blessing Effect": ""
    },
    {
        "Court Name": "South Court",
        "Page Number": "WM 129",
        "Court Emotion": "Ecstasy",
        "Mantle Effects": "•+ Free specialty in Empathy•••+ Increasing Empathy and Expression costs half.••••• Free Inspiring or •••• dot Striking Looks Merits. If already possessed, +3 to use Inspiring.",
        "Crown Blessing": "",
        "Blessing Effect": ""
    },
    {
        "Court Name": "West Court",
        "Page Number": "WM 131",
        "Court Emotion": "Honor",
        "Mantle Effects": "•+ Weapon carried gains +1 durability.•••+ +1 Initiative.••••• Choose higher of Wits or Dexterity for determining Defense. Can defend against multiple attacks.",
        "Crown Blessing": "",
        "Blessing Effect": ""
    },
    {
        "Court Name": "Diurnal Courts of Eastern Europe",
        "Page Number": "N/A",
        "Court Emotion": "N/A",
        "Mantle Effects": "N/A",
        "Crown Blessing": "N/A",
        "Blessing Effect": "N/A"
    },
    {
        "Court Name": "Sun Court",
        "Page Number": "WM 137",
        "Court Emotion": "Shame",
        "Mantle Effects": "• +1 to Perception rolls••• +1 to Defense••••• +1 to Degeneration and Derangement Rolls",
        "Crown Blessing": "",
        "Blessing Effect": ""
    },
    {
        "Court Name": "Moon Court",
        "Page Number": "WM 140",
        "Court Emotion": "Disgust",
        "Mantle Effects": "• Larceny involving manual theft gains +2••• Spending willpower grants 4 extra dice instead of 3 for Intimation rolls.••••• Gain 2 Willpower when indulging Vice.",
        "Crown Blessing": "",
        "Blessing Effect": ""
    },
    {
        "Court Name": "Auroral Courts",
        "Page Number": "N/A",
        "Court Emotion": "N/A",
        "Mantle Effects": "N/A",
        "Crown Blessing": "N/A",
        "Blessing Effect": "N/A"
    },
    {
        "Court Name": "Dawn Court",
        "Page Number": "SaD 133",
        "Court Emotion": "Hope",
        "Mantle Effects": "•+ Inspiring Merit for free. If already owned, can be used twice a day.•••+ When focusing, add +3 to instant action with your STs okay.••••• Regain all Glamour when creating significant changes.",
        "Crown Blessing": "",
        "Blessing Effect": ""
    },
    {
        "Court Name": "Dusk Court",
        "Page Number": "DitD 136",
        "Court Emotion": "Futility",
        "Mantle Effects": "•+ +1 bonus die when making Heroic Efforts•••+ Iron Stamina, Iron Stomach, Natural Immunity, Quick Healer and Toxin Resistance cost half XP.••••• 1/day, reroll a failed Resolve, Composure or Stamina-based test. Must keep the second result.",
        "Crown Blessing": "",
        "Blessing Effect": ""
    }
]

export { courtData }

export const Courts = courtData
    .filter(item => item["Page Number"] !== "N/A")
    .map(item => item["Court Name"]);