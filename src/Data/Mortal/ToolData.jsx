const genericToolsData = [
    {
        Name: "Battering Ram",
        Durability: "3",
        Size: "3 or 5",
        Structure: "6 or 8",
        Cost: "2 or 3",
        Description: "Knocks down doors",
        Book: "HtV 229"
    },
    {
        Name: "Body Bag",
        Durability: "2",
        Size: "5",
        Structure: "7",
        Cost: "2",
        Description: "Carries bodies, and is waterproof and airtight",
        Book: "HtV 229"
    },
    {
        Name: "Cell Phone",
        Durability: "1",
        Size: "0",
        Structure: "1",
        Cost: "1",
        Description: "Basic cell phone",
        Book: "HtV 237"
    },
    {
        Name: "Crime-Scene Kit",
        Durability: "2",
        Size: "3",
        Structure: "2",
        Cost: "2-3",
        Description: "Investigative equipment",
        Book: "HtV 239"
    },
    {
        Name: "Cryptography",
        Durability: "",
        Size: "",
        Structure: "",
        Cost: "2-5",
        Description: "Computer code writing programs",
        Book: "HtV 239"
    },
    {
        Name: "Desktop Computers",
        Durability: "2",
        Size: "3",
        Structure: "2",
        Cost: "2-4",
        Description: "Home computer",
        Book: "HtV 237"
    },
    {
        Name: "Digital Recorder",
        Durability: "1",
        Size: "1",
        Structure: "2",
        Cost: "1 to 2",
        Description: "Records sounds with no moving parts",
        Book: "HtV 229"
    },
    {
        Name: "Divination Tools",
        Durability: "2",
        Size: "1",
        Structure: "2",
        Cost: "1 to 3",
        Description: "Quality occult tools",
        Book: "HtV 240"
    },
    {
        Name: "Duct Tape",
        Durability: "1",
        Size: "1",
        Structure: "2",
        Cost: "1",
        Description: "Make repairs, or restrain a prisoner",
        Book: "HtV 229"
    },
    {
        Name: "Earplugs",
        Durability: "1",
        Size: "0",
        Structure: "1",
        Cost: "1",
        Description: "Defense against audio compulsion and Domination",
        Book: "HtV 230"
    },
    {
        Name: "Electromagnetic Field Detector",
        Durability: "1",
        Size: "1",
        Structure: "2",
        Cost: "1",
        Description: "Detects electromagnetic fields",
        Book: "HtV 230"
    },
    {
        Name: "Electronic Sound Amplifier",
        Durability: "1",
        Size: "2",
        Structure: "3",
        Cost: "2",
        Description: "Noise amplifying microphone, 50 ft range",
        Book: "HtV 230"
    },
    {
        Name: "EMT Shears",
        Durability: "3",
        Size: "1",
        Structure: "4",
        Cost: "1",
        Description: "Ignore 1st durability point of object being cut",
        Book: "HtV 231"
    },
    {
        Name: "Energy Meters",
        Durability: "2",
        Size: "2",
        Structure: "1",
        Cost: "2",
        Description: "Measures energy output",
        Book: "HtV 240"
    },
    {
        Name: "Fangbuster",
        Durability: "Armor 1-3",
        Size: "Strength 1",
        Structure: "Defense 0",
        Cost: "1-3",
        Description: "Protective collar",
        Book: "HtV 231"
    },
    {
        Name: "Flash Paper",
        Durability: "0",
        Size: "1",
        Structure: "1",
        Cost: "1",
        Description: "Highly combustible paper",
        Book: "HtV 231"
    },
    {
        Name: "Flashlight Baton",
        Durability: "1",
        Size: "1",
        Structure: "2",
        Cost: "1",
        Description: "Flashlight and 2(B) weapon",
        Book: "HtV 231"
    },
    {
        Name: "Dirtbag",
        Durability: "1",
        Size: "4",
        Structure: "5",
        Cost: "3",
        Description: "Reduces manifestation modifier by 1 for ghosts",
        Book: "HtV 231"
    },
    {
        Name: "Glowsticks",
        Durability: "1",
        Size: "1",
        Structure: "2",
        Cost: "1",
        Description: "Chemical illumination",
        Book: "HtV 232"
    },
    {
        Name: "Headset Communication System",
        Durability: "1",
        Size: "2",
        Structure: "3",
        Cost: "2-3",
        Description: "Voice activated Walkie-Talkies",
        Book: "HtV 232"
    },
    {
        Name: "Inspection Mirror Kit",
        Durability: "1",
        Size: "1-2",
        Structure: "2-3",
        Cost: "1",
        Description: "Helps look around corners",
        Book: "HtV 233"
    },
    {
        Name: "Kirlian Camera",
        Durability: "1",
        Size: "2",
        Structure: "2",
        Cost: "2",
        Description: "Photographs auras",
        Book: "HtV 240"
    },
    {
        Name: "Ladder, Caving",
        Durability: "3",
        Size: "7",
        Structure: "10",
        Cost: "1",
        Description: "Cable and aluminum rope ladder",
        Book: "HtV 233"
    },
    {
        Name: "Ladder, Multi-",
        Durability: "2",
        Size: "6 or 4(folded)",
        Structure: "8",
        Cost: "2",
        Description: "Multi-jointed ladder",
        Book: "	HtV p233"
    },
    {
        Name: "Luminol",
        Durability: "1",
        Size: "1",
        Structure: "2",
        Cost: "1",
        Description: "Reacts with blood, glowing to show presence",
        Book: "HtV 229"
    },
    {
        Name: "Motion Detector",
        Durability: "1",
        Size: "1",
        Structure: "2",
        Cost: "	1 to 3",
        Description: "Detects motion within range",
        Book: "HtV 233"
    },
    {
        Name: "Motion Detector",
        Durability: "1",
        Size: "1",
        Structure: "2",
        Cost: "1 to 3",
        Description: "Detects motion within range",
        Book: "	HtV p233"
    },
    {
        Name: "Multi-tool",
        Durability: "2-3",
        Size: "1",
        Structure: "3-4",
        Cost: "1",
        Description: "Pocket knife with multiple attachments",
        Book: "HtV 233"
    },
    {
        Name: "Portable Computers",
        Durability: "2",
        Size: "1-2",
        Structure: "2",
        Cost: "2-4",
        Description: "Laptop computers",
        Book: "HtV 237"
    },
    {
        Name: "Rear-View Glasses",
        Durability: "1",
        Size: "1",
        Structure: "2",
        Cost: "1",
        Description: "Glasses with mirrors to look behind you",
        Book: "HtV 233"
    },
    {
        Name: "Rescue Whistle",
        Durability: "1",
        Size: "1",
        Structure: "2",
        Cost: "1",
        Description: "Loud signal whistle",
        Book: "HtV 234"
    },
    {
        Name: "Slick",
        Durability: "n/a",
        Size: "n/a",
        Structure: "n/a",
        Cost: "2",
        Description: "Creates frictionless surface 36 sq. ft",
        Book: "HtV 234"
    },
    {
        Name: "Smartphone",
        Durability: "1",
        Size: "1",
        Structure: "2",
        Cost: "2",
        Description: "Cell phone with internet",
        Book: "HtV 237"
    },
    {
        Name: "Stink Tag",
        Durability: "n/a",
        Size: "n/a",
        Structure: "n/a",
        Cost: "3",
        Description: "Noxious liquid used to track enemies",
        Book: "HtV 234"
    },
    {
        Name: "Thermal Imaging Camera",
        Durability: "1",
        Size: "1",
        Structure: "2",
        Cost: "3",
        Description: "Thermographic camcorder",
        Book: "HtV 235"
    },
    {
        Name: "Thermal Scanner",
        Durability: "1",
        Size: "1",
        Structure: "2",
        Cost: "2",
        Description: "Non-recording thermographic camera",
        Book: "HtV 235"
    },
    {
        Name: "Talcum Powder",
        Durability: "1",
        Size: "1",
        Structure: "2",
        Cost: "1",
        Description: "Tracks footprints of invisible creatures",
        Book: "HtV 235"
    },
    {
        Name: "Ultraviolet Ink and Portable UV Lamp",
        Durability: "1",
        Size: "1",
        Structure: "2",
        Cost: "1",
        Description: "Create and read hidden messages",
        Book: "HtV 235"
    },
    {
        Name: "Weatherproof Matches",
        Durability: "1",
        Size: "0",
        Structure: "1",
        Cost: "1",
        Description: "Wind and waterproof matches",
        Book: "HtV 235"
    },
    {
        Name: "Wheel Immobilizer",
        Durability: "3",
        Size: "3",
        Structure: "6",
        Cost: "2",
        Description: "Tire boot to immobilize a vehicle",
        Book: "HtV 235"
    },
    {
        Name: "White Noise Generator",
        Durability: "1",
        Size: "1-2",
        Structure: "2-3",
        Cost: "1 to 2",
        Description: "Makes it hard to eavesdrop",
        Book: "HtV 236"
    },
    {
        Name: "Window Punch",
        Durability: "2",
        Size: "1",
        Structure: "3",
        Cost: "1",
        Description: "Ignores 1 point of glass durability",
        Book: "	HtV p236"
    }    
]

const weaponToolsData = [
    {
        Name: "Belt Sander",
        Damage: "-2(L)",
        Size: "2/N",
        Durability: "3",
        Cost: "••",
        Notes: "Two-Handed",
        Book: "Arm 39"
    },
    {
        Name: "Belt Blowtorch",
        Damage: "-1(L) fire",
        Size: "2/S",
        Durability: "2",
        Cost: "•••",
        Notes: "",
        Book: "Arm 39"
    },
    {
        Name: "Chainsaw",
        Damage: "-2(L) 8 again",
        Size: "3/N",
        Durability: "3",
        Cost: "•",
        Notes: "+1 Defense, Two-Handed",
        Book: "Arm 39"
    },
    {
        Name: "Claw Hammer",
        Damage: "1(B)/0(L)",
        Size: "1/S",
        Durability: "3",
        Cost: "•",
        Notes: "Damage varies by side used",
        Book: "Arm 39"
    },
    {
        Name: "Fishing Gaff",
        Damage: "-1(L)",
        Size: "3/N",
        Durability: "2",
        Cost: "•",
        Notes: "",
        Book: "Arm 39"
    },
    {
        Name: "Flare",
        Damage: "-2(L) fire",
        Size: "1/S",
        Durability: "1",
        Cost: "•",
        Notes: "Maximum damage 4",
        Book: "Arm 39"
    },
    {
        Name: "Nail Gun",
        Damage: "0(L)",
        Size: "2/J",
        Durability: "3",
        Cost: "•",
        Notes: "Strength + Firearms, 1 extra success",
        Book: "Arm 39"
    },
    {
        Name: "Post-Hole Digger",
        Damage: "1(L)",
        Size: "4/N",
        Durability: "2",
        Cost: "•",
        Notes: "Two-Handed",
        Book: "Arm 39"
    },
    {
        Name: "Power Drill",
        Damage: "0(L)",
        Size: "2/J",
        Durability: "3",
        Cost: "•",
        Notes: "",
        Book: "Arm 39"
    },
    {
        Name: "Screwdriver",
        Damage: "0(L)",
        Size: "1/S",
        Durability: "3",
        Cost: "•",
        Notes: "Armor Piercing 1",
        Book: "Arm 39"
    },
    {
        Name: "Scythe",
        Damage: "2(L)",
        Size: "4/N",
        Durability: "2",
        Cost: "•",
        Notes: "+1 Defense",
        Book: "Arm 39"
    },
    {
        Name: "Shovel",
        Damage: "1(B)",
        Size: "3/N",
        Durability: "2",
        Cost: "•",
        Notes: "Full lethal damage on exceptional success",
        Book: "Arm 39"
    },
    {
        Name: "Sledgehammer",
        Damage: "2(B) 9 again",
        Size: "3/N",
        Durability: "2",
        Cost: "•",
        Notes: "Two-Handed",
        Book: "Arm 39"
    },
]

const animalTrainingEquipData = [
    {
        Name: "Clicker",
        Durability: "1",
        Size: "1",
        Structure: "2",
        Cost: "1",
        Description: "Auditory training aid",
        Book: "HtV 241"
    },
    {
        Name: "Leash",
        Durability: "2",
        Size: "1",
        Structure: "3",
        Cost: "1",
        Description: "Its a leash...",
        Book: "HtV 241"
    },
    {
        Name: "Harness",
        Durability: "2",
        Size: "2",
        Structure: "4",
        Cost: "2",
        Description: "Straps around animals torso",
        Book: "HtV 241"
    },
    {
        Name: "Reinforcement",
        Durability: "",
        Size: "",
        Structure: "",
        Cost: "1",
        Description: "Treats",
        Book: "HtV 241"
    },
    {
        Name: "Whip",
        Durability: "3",
        Size: "2",
        Structure: "1",
        Cost: "1",
        Description: "Training whip",
        Book: ""
    }
]

const fakeBadegesAndIdsData = [
    {
        Name: "Passable Forgery",
        Durability: "",
        Size: "",
        Structure: "",
        Cost: "1",
        Description: "Fake ID",
        Book: "HtV 242"
    },
    {
        Name: "Civilian Identification",
        Durability: "",
        Size: "",
        Structure: "",
        Cost: "2",
        Description: "Civil Authority ID",
        Book: "HtV 242"
    },
    {
        Name: "Press Pass",
        Durability: "",
        Size: "",
        Structure: "",
        Cost: "3",
        Description: "Press ID",
        Book: "HtV 242"
    },
    {
        Name: "Police Badge",
        Durability: "",
        Size: "",
        Structure: "",
        Cost: "3",
        Description: "Fake (or real) Badge",
        Book: "HtV 242"
    }
    
]

const drugsData = [
    {
        Name: "Truth Serum",
        Durability: "",
        Size: "",
        Structure: "",
        Cost: "2",
        Description: "Makes subject more suggestible",
        Book: "HtV 243"
    },
    {
        Name: "Street Narcotics",
        Durability: "",
        Size: "",
        Structure: "",
        Cost: "1 to 2",
        Description: "Drugs",
        Book: "HtV 243"
    },
    
]

const polygraphAndLieDetectData = [
    {
        Name: "Web-Based Analysis",
        Durability: "",
        Size: "",
        Structure: "",
        Cost: "1",
        Description: "Measures voice modulation on the phone",
        Book: "HtV 243"
    },
    {
        Name: "Analog Polygraph",
        Durability: "1",
        Size: "3",
        Structure: "4",
        Cost: "3",
        Description: "Needle and paper lie detector",
        Book: "HtV 244"
    },
    {
        Name: "Digital Polygraph",
        Durability: "2",
        Size: "2",
        Structure: "4",
        Cost: "2",
        Description: "	Digital lie detector",
        Book: "HtV 244"
    },
    {
        Name: "Functional MRI",
        Durability: "5",
        Size: "7",
        Structure: "12",
        Cost: "5",
        Description: "MRI machine that takes video instead of pictures",
        Book: "HtV 244"
    }
]

const disguisesData = [
    {
        Name: "Identity Box",
        Durability: "1",
        Size: "2",
        Structure: "3",
        Cost: "3",
        Description: "Box with items for a specific disguise",
        Book: "HtV 246"
    },
    {
        Name: "Professional Makeup Kit",
        Durability: "1",
        Size: "2",
        Structure: "3",
        Cost: "3",
        Description: "SFX disguise kit",
        Book: "HtV 246"
    }
]

export {
    genericToolsData,
    weaponToolsData,
    animalTrainingEquipData,
    fakeBadegesAndIdsData,
    drugsData,
    polygraphAndLieDetectData,
    disguisesData
}