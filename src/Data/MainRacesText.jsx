const pages = [
    {
        title: "Mage: the Awakening",
        descrizione: "In Mage: the Awakening, you play as one of the Wise, sorcerers drawing upon higher Truth to change the Fallen World.",
        originsandOrganizations: [
            {
                text: "Mages are called to a given Path, and may join an Order that has similar goals. Additionally, a Mage may join a Legacy in the pursuit of perfecting their soul.",
                links: [
                    { text: "Path", url: "/mage/path" },
                    { text: "Order", url: "/mage/order" },
                    { text: "Legacy", url: "/mage/legacy" },
                ]
            }
        ],
        technicalities: [
            {
                text: "The Wise posses a Power Stat trait called Gnosis, and a Morality trait called Wisdom.",
                links: [
                    { text: "Gnosis", url: "/mage/gnosis" },
                    { text: "Wisdom", url: "/mage/wisdom" }
                ]
            }
        ],
        abilities: [
            {
                text: "The Wise can influence the world around them through Spells crafted by their knowledge of the ten Arcana. Additionally, these can sometimes be internalized in the form of Attainments that are unaffected by mortal disbelief.",
                links: [
                    { text: "Spells", url: "/mage/spells" },
                    { text: "Attainments", url: "/mage/attainments" }
                ]
            },
            {
                text: "Mages often find or craft mystic items, including Artifacts, Imbued Items and Grimoires.",
                links: [
                    { text: "Artifacts", url: "/mage/artifacts" },
                    { text: "Imbued Items", url: "/mage/imbued_items" },
                    { text: "Grimoires", url: "/mage/grimoires" }
                ]
            },
            {
                text: "Civilized conflict among the Wise is resolved through the Duel Arcane, a direct conflict of magical will.",
                links: [
                    { text: "Duel Arcane", url: "/mage/duel_arcane" }
                ]
            }
        ],
        advantages: [
            {
                text: "Mages have access to several unique Merits beyond mortal scope, including specific Locations and Combat Styles.",
                links: [
                    { text: "Merits", url: "/mage/merits" },
                    { text: "Locations", url: "/mage/location" },
                    { text: "Combat Styles", url: "/mage/merits/combatStyle" }
                ]
            }
        ]
    },
    {
        title: "Vampire: the Requiem",
        descrizione: [
            {
                text: "In Vampire: the Requiem, you play one of the undead, relentlessly hunting for the essence of mortality to sustain yourself.",
                links: []
            }
        ],
        originsandOrganizations: [
            {
                text: "Vampires are reborn as members of a Clan, and may further belong to or join a Bloodline. Vampires often join a Covenant based on their philosophy toward the Long Night.",
                links: [
                    { text: "Clan", url: "/vampire/clan" },
                    { text: "Bloodline", url: "/vampire/bloodline" }
                ]
            }
        ],
        technicalities: [
            {
                text: "Kindred posses a Power Stat trait called Blood Potency, and a Morality trait called Humanity.",
                links: [
                    { text: "Blood Potency", url: "/vampire/blood_potency" },
                    { text: "Humanity", url: "/vampire/humanity" }
                ]
            }
        ],
        abilities: [
            {
                text: "The Kindred practice Disciplines by manipulating their Vitae, and can combine them into advanced techniques called Devotions.",
                links: [
                    { text: "Disciplines", url: "/vampire/disciplines" },
                    { text: "Devotions", url: "/vampire/devotions" }
                ]
            }
        ],
        advantages: [
            {
                text: "Vampires have access to several unique Merits beyond mortal scope, including specific Locations and Combat Styles.",
                links: [
                    { text: "Merits", url: "/vampire/merits" },
                    { text: "Locations", url: "/vampire/location" },
                    { text: "Combat Styles", url: "/vampire/merits/combatStyle" },
                ]
            },
            {
                text: "The Kindred can also create Ghouls to act as their pawns.",
                links: [
                    { text: "Ghouls", url: "/vampire/ghouls" }
                ]
            }
        ]
    }
];

export default pages;