const genericToolsData = [
    {
        Name: "Battering Ram",
        Durability: "3",
        Size: "3 or 5",
        Structure: "6 or 8",
        Cost: "2 or 3",
        Description: "Knocks down doors",
        Page: "HtV p229"
    },
    {
        Name: "Body Bag",
        Durability: "2",
        Size: "5",
        Structure: "7",
        Cost: "2",
        Description: "Carries bodies, and is waterproof and airtight",
        Page: "HtV p229"
    },
    {
        Name: "Cell Phone",
        Durability: "1",
        Size: "0",
        Structure: "1",
        Cost: "1",
        Description: "Basic cell phone",
        Page: "HtV p237"
    },
    {
        Name: "Crime-Scene Kit",
        Durability: "2",
        Size: "3",
        Structure: "2",
        Cost: "2-3",
        Description: "Investigative equipment",
        Page: "HtV p239"
    },
    {
        Name: "Cryptography",
        Durability: "",
        Size: "",
        Structure: "",
        Cost: "2-5",
        Description: "Computer code writing programs",
        Page: "HtV p239"
    },
    {
        Name: "Desktop Computers",
        Durability: "2",
        Size: "3",
        Structure: "2",
        Cost: "2-4",
        Description: "Home computer",
        Page: "HtV p237"
    },
    {
        Name: "Digital Recorder",
        Durability: "1",
        Size: "1",
        Structure: "2",
        Cost: "1 to 2",
        Description: "Records sounds with no moving parts",
        Page: "HtV p229"
    },
    {
        Name: "Divination Tools",
        Durability: "2",
        Size: "1",
        Structure: "2",
        Cost: "1 to 3",
        Description: "Quality occult tools",
        Page: "HtV p240"
    },
    {
        Name: "Duct Tape",
        Durability: "1",
        Size: "1",
        Structure: "2",
        Cost: "1",
        Description: "Make repairs, or restrain a prisoner",
        Page: "HtV p229"
    },
    {
        Name: "Earplugs",
        Durability: "1",
        Size: "0",
        Structure: "1",
        Cost: "1",
        Description: "Defense against audio compulsion and Domination",
        Page: "HtV p230"
    },
    {
        Name: "Electromagnetic Field Detector",
        Durability: "1",
        Size: "1",
        Structure: "2",
        Cost: "1",
        Description: "Detects electromagnetic fields",
        Page: "HtV p230"
    },
    {
        Name: "Electronic Sound Amplifier",
        Durability: "1",
        Size: "2",
        Structure: "3",
        Cost: "2",
        Description: "Noise amplifying microphone, 50 ft range",
        Page: "HtV p230"
    },
    {
        Name: "EMT Shears",
        Durability: "3",
        Size: "1",
        Structure: "4",
        Cost: "1",
        Description: "Ignore 1st durability point of object being cut",
        Page: "HtV p231"
    },
    {
        Name: "Energy Meters",
        Durability: "2",
        Size: "2",
        Structure: "1",
        Cost: "2",
        Description: "Measures energy output",
        Page: "HtV p240"
    },
    {
        Name: "Fangbuster",
        Durability: "Armor 1-3",
        Size: "Strength 1",
        Structure: "Defense 0",
        Cost: "1-3",
        Description: "Protective collar",
        Page: "HtV p231"
    },
    {
        Name: "Flash Paper",
        Durability: "0",
        Size: "1",
        Structure: "1",
        Cost: "1",
        Description: "Highly combustible paper",
        Page: "HtV p231"
    },
    {
        Name: "Flashlight Baton",
        Durability: "1",
        Size: "1",
        Structure: "2",
        Cost: "1",
        Description: "Flashlight and 2(B) weapon",
        Page: "HtV p231"
    },
    {
        Name: "Dirtbag",
        Durability: "1",
        Size: "4",
        Structure: "5",
        Cost: "3",
        Description: "Reduces manifestation modifier by 1 for ghosts",
        Page: "HtV p231"
    },
    {
        Name: "Glowsticks",
        Durability: "1",
        Size: "1",
        Structure: "2",
        Cost: "1",
        Description: "Chemical illumination",
        Page: "HtV p232"
    },
    {
        Name: "Headset Communication System",
        Durability: "1",
        Size: "2",
        Structure: "3",
        Cost: "2-3",
        Description: "Voice activated Walkie-Talkies",
        Page: "HtV p232"
    },
    {
        Name: "Inspection Mirror Kit",
        Durability: "1",
        Size: "1-2",
        Structure: "2-3",
        Cost: "1",
        Description: "Helps look around corners",
        Page: "HtV p233"
    },
    {
        Name: "Kirlian Camera",
        Durability: "1",
        Size: "2",
        Structure: "2",
        Cost: "2",
        Description: "Photographs auras",
        Page: "HtV p240"
    },
    {
        Name: "Ladder, Caving",
        Durability: "3",
        Size: "7",
        Structure: "10",
        Cost: "1",
        Description: "Cable and aluminum rope ladder",
        Page: "HtV p233"
    },
    {
        Name: "Ladder, Multi-",
        Durability: "2",
        Size: "6 or 4(folded)",
        Structure: "8",
        Cost: "2",
        Description: "Multi-jointed ladder",
        Page: "	HtV p233"
    },
    {
        Name: "Luminol",
        Durability: "1",
        Size: "1",
        Structure: "2",
        Cost: "1",
        Description: "Reacts with blood, glowing to show presence",
        Page: "HtV p229"
    },
    {
        Name: "Motion Detector",
        Durability: "1",
        Size: "1",
        Structure: "2",
        Cost: "	1 to 3",
        Description: "Detects motion within range",
        Page: "HtV p233"
    },
    {
        Name: "Motion Detector",
        Durability: "1",
        Size: "1",
        Structure: "2",
        Cost: "1 to 3",
        Description: "Detects motion within range",
        Page: "	HtV p233"
    },
    {
        Name: "Multi-tool",
        Durability: "2-3",
        Size: "1",
        Structure: "3-4",
        Cost: "1",
        Description: "Pocket knife with multiple attachments",
        Page: "HtV p233"
    },
    {
        Name: "Portable Computers",
        Durability: "2",
        Size: "1-2",
        Structure: "2",
        Cost: "2-4",
        Description: "Laptop computers",
        Page: "HtV p237"
    },
    {
        Name: "Rear-View Glasses",
        Durability: "1",
        Size: "1",
        Structure: "2",
        Cost: "1",
        Description: "Glasses with mirrors to look behind you",
        Page: "HtV p233"
    },
    {
        Name: "Rescue Whistle",
        Durability: "1",
        Size: "1",
        Structure: "2",
        Cost: "1",
        Description: "Loud signal whistle",
        Page: "HtV p234"
    },
    {
        Name: "Slick",
        Durability: "n/a",
        Size: "n/a",
        Structure: "n/a",
        Cost: "2",
        Description: "Creates frictionless surface 36 sq. ft",
        Page: "HtV p234"
    },
    {
        Name: "Smartphone",
        Durability: "1",
        Size: "1",
        Structure: "2",
        Cost: "2",
        Description: "Cell phone with internet",
        Page: "HtV p237"
    },
    {
        Name: "Stink Tag",
        Durability: "n/a",
        Size: "n/a",
        Structure: "n/a",
        Cost: "3",
        Description: "Noxious liquid used to track enemies",
        Page: "HtV p234"
    },
    {
        Name: "Thermal Imaging Camera",
        Durability: "1",
        Size: "1",
        Structure: "2",
        Cost: "3",
        Description: "Thermographic camcorder",
        Page: "HtV p235"
    },
    {
        Name: "Thermal Scanner",
        Durability: "1",
        Size: "1",
        Structure: "2",
        Cost: "2",
        Description: "Non-recording thermographic camera",
        Page: "HtV p235"
    },
    {
        Name: "Talcum Powder",
        Durability: "1",
        Size: "1",
        Structure: "2",
        Cost: "1",
        Description: "Tracks footprints of invisible creatures",
        Page: "HtV p235"
    },
    {
        Name: "Ultraviolet Ink and Portable UV Lamp",
        Durability: "1",
        Size: "1",
        Structure: "2",
        Cost: "1",
        Description: "Create and read hidden messages",
        Page: "HtV p235"
    },
    {
        Name: "Weatherproof Matches",
        Durability: "1",
        Size: "0",
        Structure: "1",
        Cost: "1",
        Description: "Wind and waterproof matches",
        Page: "HtV p235"
    },
    {
        Name: "Wheel Immobilizer",
        Durability: "3",
        Size: "3",
        Structure: "6",
        Cost: "2",
        Description: "Tire boot to immobilize a vehicle",
        Page: "HtV p235"
    },
    {
        Name: "White Noise Generator",
        Durability: "1",
        Size: "1-2",
        Structure: "2-3",
        Cost: "1 to 2",
        Description: "Makes it hard to eavesdrop",
        Page: "HtV p236"
    },
    {
        Name: "Window Punch",
        Durability: "2",
        Size: "1",
        Structure: "3",
        Cost: "1",
        Description: "Ignores 1 point of glass durability",
        Page: "	HtV p236"
    }    
]

const animalTrainingEquipData = [
    {
        Name: "Clicker",
        Durability: "1",
        Size: "1",
        Structure: "2",
        Cost: "1",
        Description: "Auditory training aid",
        Page: "HtV p241"
    },
    {
        Name: "Leash",
        Durability: "2",
        Size: "1",
        Structure: "3",
        Cost: "1",
        Description: "Its a leash...",
        Page: "HtV p241"
    },
    {
        Name: "Harness",
        Durability: "2",
        Size: "2",
        Structure: "4",
        Cost: "2",
        Description: "Straps around animals torso",
        Page: "HtV p241"
    },
    {
        Name: "Reinforcement",
        Durability: "",
        Size: "",
        Structure: "",
        Cost: "1",
        Description: "Treats",
        Page: "HtV p241"
    },
    {
        Name: "Whip",
        Durability: "3",
        Size: "2",
        Structure: "1",
        Cost: "1",
        Description: "Training whip",
        Page: ""
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
        Page: "HtV p242"
    },
    {
        Name: "Civilian Identification",
        Durability: "",
        Size: "",
        Structure: "",
        Cost: "2",
        Description: "Civil Authority ID",
        Page: "HtV p242"
    },
    {
        Name: "Press Pass",
        Durability: "",
        Size: "",
        Structure: "",
        Cost: "3",
        Description: "Press ID",
        Page: "HtV p242"
    },
    {
        Name: "Police Badge",
        Durability: "",
        Size: "",
        Structure: "",
        Cost: "3",
        Description: "Fake (or real) Badge",
        Page: "HtV p242"
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
        Page: "HtV p243"
    },
    {
        Name: "Street Narcotics",
        Durability: "",
        Size: "",
        Structure: "",
        Cost: "1 to 2",
        Description: "Drugs",
        Page: "HtV p243"
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
        Page: "HtV p243"
    },
    {
        Name: "Analog Polygraph",
        Durability: "1",
        Size: "3",
        Structure: "4",
        Cost: "3",
        Description: "Needle and paper lie detector",
        Page: "HtV p244"
    },
    {
        Name: "Digital Polygraph",
        Durability: "2",
        Size: "2",
        Structure: "4",
        Cost: "2",
        Description: "	Digital lie detector",
        Page: "HtV p244"
    },
    {
        Name: "Functional MRI",
        Durability: "5",
        Size: "7",
        Structure: "12",
        Cost: "5",
        Description: "MRI machine that takes video instead of pictures",
        Page: "HtV p244"
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
        Page: "HtV p246"
    },
    {
        Name: "Professional Makeup Kit",
        Durability: "1",
        Size: "2",
        Structure: "3",
        Cost: "3",
        Description: "SFX disguise kit",
        Page: "HtV p246"
    }
]

export {
    genericToolsData,
    animalTrainingEquipData,
    fakeBadegesAndIdsData,
    drugsData,
    polygraphAndLieDetectData,
    disguisesData
}