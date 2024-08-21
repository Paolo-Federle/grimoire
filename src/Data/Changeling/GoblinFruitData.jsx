const goblinFruitData = [
    {
        "Name": "Amaranthine",
        "Description": "Looks like a small, red eggplant.",
        "Effect": "Heals 1A, limited to once per scene.",
        "Book": "CTL 223"
    },
    {
        "Name": "Babel Gum",
        "Description": "Pink urban lichen that resembles chewed gum.",
        "Effect": "Understand all spoken languages, but forget how to read for one scene.",
        "Book": "WM 113"
    },
    {
        "Name": "Bloodapple",
        "Description": "Dark crimson apple splotched with deep reddish purple, cloyingly sweet and incredibly juicy.",
        "Effect": "Downgrades a point of aggravated damage to lethal (once per scene).",
        "Book": "NH-GF 127"
    },
    {
        "Name": "Bloodbane",
        "Description": "Pale yellow lichen.",
        "Effect": "Prevents blood from clotting: toxicity 3 as one dose, toxicity 6 at multiple doses per month.",
        "Book": "NH-GF 20"
    },
    {
        "Name": "Blushberries",
        "Description": "Pink fruits slightly larger than cherries.",
        "Effect": "Heals 1L or 2B.",
        "Book": "CTL 223"
    },
    {
        "Name": "Brumblebulb",
        "Description": "Small almost sour tasting onion. Grows underground with only a few leaves poking out.",
        "Effect": "Instant exit from the Hedge",
        "Book": "RoS 131"
    },
    {
        "Name": "Buglewort",
        "Description": "Mushroom that appears almost identical to Nightcap. Effects of both can stack.",
        "Effect": "+4 Initiative for the scene.",
        "Book": "CTL 224"
    },
    {
        "Name": "Chu Chu Culm",
        "Description": "Bamboo filled with red liquid.",
        "Effect": "Intoxication, +2 Social bonus, -2 Dexterity, Wits or Intelligence for one scene.",
        "Book": "WM 113"
    },
    {
        "Name": "Cocorange",
        "Description": "Hard seeds the size of a football, containing pulpy citrus flesh.",
        "Effect": "Intoxication equivalent to a shot of liquor",
        "Book": "GobM 21"
    },
    {
        "Name": "Coralscalp",
        "Description": "Fine, hairlike kelp.",
        "Effect": "Smoke for +1 to perception rolls and breaking points for a scene, followed by strong hallucinations.",
        "Book": "GobM 21"
    },
    {
        "Name": "Coupnettle",
        "Description": "Bitter and minty leaves, usually made into a tea.",
        "Effect": "Restores Willpower. Each serving after the first within 24 hours inflicts -1 Composure.",
        "Book": "CTL 223"
    },
    {
        "Name": "The Cousin's Trumpet",
        "Description": "Conical yellow jungle flower with no scent. Must be brewed into a tea.",
        "Effect": "Outside the Hedge, a hallucinogen that restores Willpower but inflicts a universal -3 penalty. Within the Hedge, +2 effective Wyrd for Hedge-shaping.",
        "Book": "WM 113"
    },
    {
        "Name": "Dactyl",
        "Description": "Oily fruits that resemble dates.",
        "Effect": "Roll Resolve + Stamina to hold down. Grants Social rolls 9-Again.",
        "Book": "GobM 21"
    },
    {
        "Name": "Dream-a-Drupe",
        "Description": "Slightly intoxicating, looks like a purple nectarine.",
        "Effect": "Healing fruit. 1L or 2B healed.",
        "Book": "CTL 223"
    },
    {
        "Name": "Ertwen",
        "Description": "Mealy seeds inside a pod, similar to peas.",
        "Effect": "Healing fruit. 1L or 2B healed.",
        "Book": "CTL 223"
    },
    {
        "Name": "Fear Gortach",
        "Description": "Highly addictive grass. Can affect mortals and supernaturals. Must succeed Wits + Composure to pull away, and reroll if you run into more Gortach in the next scene. Gluttons get a -3 on these rolls.",
        "Effect": "Makes consumer hungry and strips goblin fruit benefits, but you must roll Wits + Composure (-3 with the Gluttony Vice) to stop eating.",
        "Book": "CTL 223"
    },
    {
        "Name": "Fuguespores",
        "Description": "Brown spores from a fungus that grows on Hedge briars.",
        "Effect": "Toxicity 5.  Spores growing in the intestines cause dizziness and hallucinations.  Spores lodged in the brain cause fugue states, or in extreme cases coma or permanent brain damage.",
        "Book": "NH-GF 20"
    },
    {
        "Name": "Ghoul's Shroud",
        "Description": "Lacy gray moss.",
        "Effect": "Ignore any poison of toxicity 4 or lower.  Causes constant thirst and crying eyes while effective.",
        "Book": "NH-GF 127"
    },
    {
        "Name": "Headgourd",
        "Description": "Grows in Hedge farmlands in the shape of a scarecrow.",
        "Effect": "Smear innards on self for +1 to Defense and -2 to Social rolls for one hour.",
        "Book": "WM 112"
    },
    {
        "Name": "Hera Pear",
        "Description": "Particularly healthy pear tree guarded by powerful hobgoblins.",
        "Effect": "Completely cure a disease.",
        "Book": "RoS 131"
    },
    {
        "Name": "Hidefruit",
        "Description": "Tiny crimson berry about the size of a pomegranate seed. Very rare and bitter.",
        "Effect": "The True Fae must roll Wits + Composure -5 to find you, for your Wits + Resolve in minutes.",
        "Book": "AN 59"
    },
    {
        "Name": "Jarmyn Fruit",
        "Description": "Grows with Jarmyn Leaves. Forces sleep.",
        "Effect": "Extended actions in same scene lose penalties; sleep whole day after to maximum of 7 days.",
        "Book": "CTL 223"
    },
    {
        "Name": "Jarmyn Leaves",
        "Description": "Grows with Jarmyn Fruit. Forces sleep.",
        "Effect": "+3 to stay awake for extensive amount of time; sleep whole day after to maximum of 7 days.",
        "Book": "CTL 223"
    },
    {
        "Name": "The Judas Yew",
        "Description": "Grows in Hedge Deserts. Tree with red berries that grows out of walls in elevations.",
        "Effect": "Eating does 1L damage due to potent poison. Allows you to go 3 times the length without food or drink.",
        "Book": "WM 111"
    },
    {
        "Name": "Murmurleaf",
        "Description": "A blossom that curls upwards at the end of the leaf.",
        "Effect": "Healing fruit. 1L or 2B healed.",
        "Book": "CTL 223"
    },
    {
        "Name": "Myrsina",
        "Description": "Apple with beautiful white flesh and red skin, but smelling and tasting of death.",
        "Effect": "Causes deathlike sleep so deep that it ends all lifelong pledges as though the Changeling had actually died.",
        "Book": "tRBP 7"
    },
    {
        "Name": "Nightcap",
        "Description": "Mushroom that appears almost identical to Buglewort. Effects of both can stack.",
        "Effect": "Halves Speed until accumulates 4 successes on Stam + Res",
        "Book": "CTL 224"
    },
    {
        "Name": "Pedicle Velvet",
        "Description": "Lichen that grows on the horns of fierce Hobgoblins in Hedge tundras.",
        "Effect": "Heal 1L damage. Gain +1 Stamina for 6 hours. Next time you have intercourse, it will result in pregnancy.",
        "Book": "WM 114"
    },
    {
        "Name": "Pitt Moss",
        "Description": "Very rich, pungent moss used in soups. Effect only applies if eaten raw, about a salads worth, in the field.",
        "Effect": "Eaten raw, saps Willpower and blocks its use for a scene.",
        "Book": "CTL 224"
    },
    {
        "Name": "Serpent Gourd",
        "Description": "Long, narrow, shiny black gourd filled with stringy flesh, growing only in dangerous places.",
        "Effect": "Properly prepared, creates syrup that grants +1 to oneiromancy and oneiromachy rolls for up to a day.",
        "Book": "NH-GF 127"
    },
    {
        "Name": "Wineberry blush",
        "Description": "Tart, purple berries that ferment easily.",
        "Effect": "Once fermented, will remove a Clarity derangement if drunk within a day of gaining it.",
        "Book": "DitD 91"
    },
    {
        "Name": "Wyrmthumb",
        "Description": "Fleshy fig, black and filled with dizzyingly sweet tar sap. Contains milky grubs with black mandibles.",
        "Effect": "Restore Glamour and take +5 to escape any kind of bondage.",
        "Book": "RoS 131"
    },
    {
        "Name": "Oddments",
        "Description": "N/A",
        "Effect": "N/A",
        "Book": "N/A"
    },
    {
        "Name": "Gallowsroot",
        "Description": "Ropy vine shaped like a noose.",
        "Effect": "Acts as Strength 3 attacker with a garrote for 3 turns.",
        "Book": "CTL 224"
    },
    {
        "Name": "Hog Eye",
        "Description": "Grows in Hedge bogs and swamps. Looks like a reed with a knobby outgrowth.",
        "Effect": "Single-use +5 lockpick.",
        "Book": "WM 111"
    },
    {
        "Name": "Jennystones",
        "Description": "Foul smelling acorns.",
        "Effect": "-1 dice pool to everyone within 15 feet.",
        "Book": "CTL 224"
    },
    {
        "Name": "Promise Leaves",
        "Description": "Parchment-like leaves dispersed randomly among trees.",
        "Effect": "Crumple to lengthen Contract durations.",
        "Book": "CTL 224"
    },
    {
        "Name": "Scarthistle",
        "Description": "Milky thistle with night black flowers.",
        "Effect": "Thistle can be used to tattoo a Lost for a month. Lost can spend a Glamour to gain +1 on a chosen Social Skill (chosen when the tattoo is made). Can have one tattoo per dot of Wyrd at a time.",
        "Book": "RoS 132"
    },
    {
        "Name": "Slumberberries",
        "Description": "Sour, dark green berries in clumps of five or six.",
        "Effect": "Eaten raw, causes drowsiness.  Boiled into a tea, causes nightmares.",
        "Book": "NH-GF 20"
    },
    {
        "Name": "Stabapple",
        "Description": "Fruit with hard thorns.",
        "Effect": "Thorns can be used as 1L, Size 1, Durability 1 weapons.",
        "Book": "CTL 224"
    },
    {
        "Name": "Tovil's Ooze",
        "Description": "Molasses-like substance found in sinkholes in cold parts of the Hedge.",
        "Effect": "Smear on something to confer +2 Durability or Armor for a week. Deals 2 Structure damage or 1 lethal damage when peeled off.",
        "Book": "RoS 132"
    },
    {
        "Name": "Vermsap",
        "Description": "Oozes out of trees in Hedge Forests. Just a dollop on your skin summons masses of vermin that follow you until removed.",
        "Effect": "Vermin follows you around. -2 to Social rolls, -1 to Initiative and Defense.",
        "Book": "WM 112"
    },
    {
        "Name": "Walking Gertrude",
        "Description": "Slowly walking stalks of fibrous tissue, like a spider made of sugarcane.",
        "Effect": "Rubbed inside a shoe, residue halves wearer's Speed.",
        "Book": "RoS 132"
    },
    {
        "Name": "Widowroot",
        "Description": "Tangled stalks about the size and shape of a football.",
        "Effect": "Properly prepared, creates a toxin that causes those effected to lose 2 points of Willpower.",
        "Book": "NH-GF 127"
    },
    {
        "Name": "Hybrids",
        "Description": "N/A",
        "Effect": "N/A",
        "Book": "N/A"
    },
    {
        "Name": "Jennyapples",
        "Description": "Misshapen black-spotted apples. Hybrid of a Jennystone and an apple.",
        "Effect": "-3 to all rolls for a day if eaten. If skin is pierced acts like a Jennystone.",
        "Book": "RoS 130"
    },
    {
        "Name": "Nevernip",
        "Description": "Crossbreed of blushberries and fear gortach. Lush purple berries.",
        "Effect": "Heals like blushberries, but eater must roll Wits + Composure (-3 with the Gluttony Vice) to stop eating.",
        "Book": "RoS 130"
    },
    {
        "Name": "Somnus Pollen",
        "Description": "Undetectable goblin fruit infection.",
        "Effect": "Inflicts the drugging sting of a Fae Swarm when eaten.",
        "Book": "AN 127"
    },
    {
        "Name": "Trenchmint",
        "Description": "Hybrid of coupnettle and pitmoss. Has airy stems topped with curling clusters of violet leaves.",
        "Effect": "Eaten raw, saps Willpower and grants +3 to a chosen Mental Skill for a scene. Inflicts -1 Physical penalty afterward, or -2 with the Sloth Vice.",
        "Book": "RoS 130"
    }
]

export { goblinFruitData }