const armorData = [
    {
        Armor: "Bomb Suit",
        General: 3,
        Firearms: 6,
        Strength: 3,
        Defense: -3,
        Speed: -3,
        Cost: "•••••",
        Description: "Once explosion is absorbed, drops to 2/3",
        Book: "Armory 175"
    },
    {
        Armor: "Bulletproof Vest",
        General: 2,
        Firearms: 3,
        Strength: 1,
        Defense: -1,
        Speed: 0,
        Cost: "•••",
        Description: "Bulletproof",
        Book: "Armory 175"
    },
    {
        Armor: "Bulletproof Vest Accessories",
        General: 1,
        Firearms: 2,
        Strength: 1,
        Defense: 0,
        Speed: 0,
        Cost: "••",
        Description: "Covers a spot not armored by Vest; only applies against called shots against covered area",
        Book: "Armory 175"
    },
    {
        Armor: "Chainmail",
        General: 2,
        Firearms: 1,
        Strength: 3,
        Defense: -2,
        Speed: -2,
        Cost: "••",
        Description: "",
        Book: "WoD 170"
    },
    {
        Armor: "Chainmail (vanity)",
        General: 1,
        Firearms: 1,
        Strength: 3,
        Defense: -1,
        Speed: -1,
        Cost: "••",
        Description: "",
        Book: "Armory 176"
    },
    {
        Armor: "Flak Jacket",
        General: 2,
        Firearms: 3,
        Strength: 1,
        Defense: -1,
        Speed: 0,
        Cost: "••",
        Description: "Bulletproof; updated by Armory to 'Bulletproof Vest'",
        Book: "WoD 170"
    },
    {
        Armor: "Flak Jacket (Armory variant)",
        General: 1,
        Firearms: 2,
        Strength: 1,
        Defense: -1,
        Speed: 0,
        Cost: "•",
        Description: "Quasi-bulletproof",
        Book: "Armory 177"
    },
    {
        Armor: "Full Riot Gear",
        General: 3,
        Firearms: 4,
        Strength: 2,
        Defense: -2,
        Speed: -1,
        Cost: "•••",
        Description: "Bulletproof",
        Book: "WoD 170"
    },
    {
        Armor: "Full Riot Gear+",
        General: 3,
        Firearms: 4,
        Strength: 2,
        Defense: -2,
        Speed: -1,
        Cost: "••••",
        Description: "Bulletproof; immune to Armor Piercing",
        Book: "Armory 177"
    },
    {
        Armor: "Kevlar Jacket (Thin)",
        General: 1,
        Firearms: 2,
        Strength: 1,
        Defense: 0,
        Speed: 0,
        Cost: "•",
        Description: "Bulletproof",
        Book: "WoD 170"
    },
    {
        Armor: "Leather (Hardened)",
        General: 1,
        Firearms: 0,
        Strength: 2,
        Defense: -1,
        Speed: -1,
        Cost: "•",
        Description: "",
        Book: "WoD 170"
    },
    {
        Armor: "Leather Armor",
        General: 1,
        Firearms: 0,
        Strength: 2,
        Defense: -1,
        Speed: 0,
        Cost: "•",
        Description: "",
        Book: "WoD 170"
    },
    {
        Armor: "Leather Armor (Hardened)",
        General: 2,
        Firearms: 0,
        Strength: 2,
        Defense: -1,
        Speed: 0,
        Cost: "",
        Description: "",
        Book: "Armory 177"
    },
    {
        Armor: "Lorica Segmentata",
        General: 2,
        Firearms: 2,
        Strength: 3,
        Defense: -2,
        Speed: -2,
        Cost: "••••",
        Description: "",
        Book: "Armory 177"
    },
    {
        Armor: "Plate Armor",
        General: 3,
        Firearms: 2,
        Strength: 4,
        Defense: -2,
        Speed: -2,
        Cost: "••••",
        Description: "Penalties increased if not custom fitted",
        Book: "WoD 170"
    },
    {
        Armor: "Reinforced Clothing",
        General: 1,
        Firearms: 0,
        Strength: 1,
        Defense: 0,
        Speed: 0,
        Cost: "-",
        Description: "Reinforced clothing or thick leather jacket",
        Book: "WoD 170"
    },
    {
        Armor: "Sports Equipment",
        General: 2,
        Firearms: 0,
        Strength: 2,
        Defense: -1,
        Speed: -1,
        Cost: "•",
        Description: "",
        Book: "Armory 177"
    }
]

const shieldData = [
    {
        Shield: "Ballistic Armor Wall",
        Defense: "-",
        Strength: "-",
        Cost: "••••",
        Description: "Cover (Durability 5, Size 7, Structure 12)",
        Book: "Armory 179"
    },
    {
        Shield: "Ballistic Shield",
        Defense: "+2",
        Strength: "3",
        Cost: "•••",
        Description: "Adds significant penalty to hit with ranged weapons; armor-piercing ranged weapons penetrate without problem",
        Book: "Armory 178"
    },
    {
        Shield: "Improvised Shield",
        Defense: "+1",
        Strength: "Variable",
        Cost: "Variable",
        Description: "",
        Book: "Armory 179"
    },
    {
        Shield: "Medieval Shield",
        Defense: "+2",
        Strength: "3",
        Cost: "••",
        Description: "",
        Book: "Armory 179"
    },
    {
        Shield: "Riot Shield",
        Defense: "+2",
        Strength: "2",
        Cost: "••",
        Description: "Add full defense against thrown attacks",
        Book: "Armory 179"
    },
    {
        Shield: "Riot Shield (electrified)",
        Defense: "+2",
        Strength: "2",
        Cost: "•••",
        Description: "	Add full defense against ranged attacks; stun anyone touched by the shield",
        Book: "Armory 179"
    },
    
]

export { armorData, shieldData }