import { Vices } from "../../Data/Mortal/VirtueViceData"
import { Virtues } from "../../Data/Mortal/VirtueViceData"
import { Paths } from "../../Data/Mage/PathData"
import { Orders } from "../../Data/Mage/OrderData"
import { Clans } from "../../Data/Vampire/ClanData"
import { Coventants } from "../../Data/Vampire/CovenantData"
import { Courts } from "../../Data/Changeling/CourtData"
import { Seemings } from "../../Data/Changeling/SeemingsData"

export const sheetData = {
    "character": {
        "name": "",
        "age": 0,
        "concept": "",
        "virtue": { "selected": "", "choices": Virtues },
        "vice": { "selected": "", "choices": Vices },
        "race": { "selected": "", "choices": ["mortal", "mage", "vampire", "changeling", "werewolf", "hunter", "geist", "mummy", "promethean"] },
        "background": "",
        "details": {
            "mage": {
                "path": { "selected": "", "choices": Paths },
                "order": { "selected": "", "choices": Orders },
                "legacy": ""
            },
            "vampire": {
                "clan": { "selected": "", "choices": Clans },
                "covenant": { "selected": "", "choices": Coventants },
                "bloodline": "",
            },
            "changeling": {
                "court": { "selected": "", "choices": Courts },
                "seeming": { "selected": "", "choices": Seemings },
                "kith": ""
            },
            "werewolf": {
                "auspice": { "selected": "", "choices": ["Rahu", "Cahalith", "Elodoth", "Ithaeur", "Irraka"] },
                "tribe": { "selected": "", "choices": ["Blood Talons", "Bone Shadows", "Hunters in Darkness", "Iron Masters", "Storm Lords", "Ghost Wolves", "Fire-Touched", "Ivory Claws", "Predator Kings", "Bale Hounds", "Doirons", "Pickerings", "Rios", "Rosewood Clan", "Village of Fountainhill", "Baal-Hadad", "Balam-Colop", "Brineborn", "Colony", "Distant Ones", "Unclean"] },
                "conspiracy": ""
            },
            "hunter": {
                "profession": "",
                "compact": "",
                "compact": ""
            },
            "geist": {
                "archetype": { "selected": "", "choices": ["Advocate", "Bonepicker", "Celebrant", "Gatekeeper", "Mourner", "Necromancer", "Pilgrim", "Reaper"] },
                "threshold": { "selected": "", "choices": ["Torn", "Silent", "Stricken", "Prey", "Forgotten" ] },
                "krewe": ""
            },
            "mummy": {
                "decree": { "selected": "", "choices": ["Lion-Headed", "Falcon-Headed", "Bull-Headed", "Serpent-Headed", "Jackal-Headed" ] },
                "guild": { "selected": "", "choices": ["Maa-Kep	", "Mesen-Nebu", "Sesha-Hebsu", "Su-Menent", "Tef-Aabhi", "Akhem-Urtu"] },
                "judge": ""
            },
            "promethean": {
                "lineage": { "selected": "", "choices": ["Frankenstein", "Galatea", "Osiris", "Tammuz", "Ulgan", "Unfleshed", "Zeka", "Hollow", "Aes", "Argentum", "Aurum", "Centimani", "Cobalus", "Cuprum", "Ferrum", "Mercurius", "Plumbum", "Stannum", "Carcinomas", "Dust Devils", "Gremlins", "Ishtari", "Renders", "Sebek", "The Silent", "Torch-Born" ] },
                "refinement": "",
                "athanor": ""
            }
        }
    },
    "attributes": {
        "mental": {
            "intelligence": { "base": 1, "modifier": 0 },
            "wits": { "base": 1, "modifier": 0 },
            "resolve": { "base": 1, "modifier": 0 },
        },
        "physical": {
            "strength": { "base": 1, "modifier": 0 },
            "dexterity": { "base": 1, "modifier": 0 },
            "stamina": { "base": 1, "modifier": 0 },

        },
        "social": {
            "presence": { "base": 1, "modifier": 0 },
            "manipulation": { "base": 1, "modifier": 0 },
            "composure": { "base": 1, "modifier": 0 }
        }
    },
    "skills": {
        "mental": {
            "academics": { "base": 0, "modifier": 0, "specialties": [] },
            "computer": { "base": 0, "modifier": 0, "specialties": [] },
            "crafts": { "base": 0, "modifier": 0, "specialties": [] },
            "investigation": { "base": 0, "modifier": 0, "specialties": [] },
            "medicine": { "base": 0, "modifier": 0, "specialties": [] },
            "occult": { "base": 0, "modifier": 0, "specialties": [] },
            "politics": { "base": 0, "modifier": 0, "specialties": [] },
            "science": { "base": 0, "modifier": 0, "specialties": [] }
        },
        "physical": {
            "athletics": { "base": 0, "modifier": 0, "specialties": [] },
            "brawl": { "base": 0, "modifier": 0, "specialties": [] },
            "drive": { "base": 0, "modifier": 0, "specialties": [] },
            "firearms": { "base": 0, "modifier": 0, "specialties": [] },
            "larceny": { "base": 0, "modifier": 0, "specialties": [] },
            "stealth": { "base": 0, "modifier": 0, "specialties": [] },
            "survival": { "base": 0, "modifier": 0, "specialties": [] },
            "weaponry": { "base": 0, "modifier": 0, "specialties": [] }
        },
        "social": {
            "animal ken": { "base": 0, "modifier": 0, "specialties": [] },
            "empathy": { "base": 0, "modifier": 0, "specialties": [] },
            "expression": { "base": 0, "modifier": 0, "specialties": [] },
            "intimidation": { "base": 0, "modifier": 0, "specialties": [] },
            "persuasion": { "base": 0, "modifier": 0, "specialties": [] },
            "socialize": { "base": 0, "modifier": 0, "specialties": [] },
            "streetwise": { "base": 0, "modifier": 0, "specialties": [] },
            "subterfuge": { "base": 0, "modifier": 0, "specialties": [] }
        }
    },
    "race_powers": {
        "mage": {
            "arcana": {
                "death": 0,
                "fate": 0,
                "forces": 0,
                "life": 0,
                "matter": 0,
                "mind": 0,
                "prime": 0,
                "spirit": 0,
                "space": 0,
                "time": 0
            }
        },
        "vampire": {
            "disciplines": {},
            "devotions": {},
            "rituals": {}
        },
        "changeling": {
            "contracts": {},
            "pledges": {}
        },
        "werewolf": {
            "gifts": {},
            "rites": {},
            "renown": {
                "purity": 0,
                "glory": 0,
                "honor": 0,
                "wisdom": 0,
                "cunning": 0,
            }
        },
        "hunter": {
            "tactics": {},
            "endowments": {}
        },
        "geist": {
            "manifestations": {},
            "keys": []
        },
        "mummy": {
            "utterances": {},
            "pillars": {
                "ab": 0,
                "ba": 0,
                "ka": 0,
                "ren": 0,
                "sheut": 0
            }
        },
        "promethean": {
            "transmutations": [],
        }
    },
    "race_traits": {
        "energy_pool": {
            "current": 0,
            "max": 0,
            "per_turn": 0
        },
        "energy_strength": {
            "value": 0
        },
        "race_specific_names": {
            "mage": {
                "energy_pool": "Mana",
                "energy_strength": "Gnosis"
            },
            "vampire": {
                "energy_pool": "Vitae",
                "energy_strength": "Blood Potency"
            },
            "werewolf": {
                "energy_pool": "Essence",
                "energy_strength": "Primal Urge"
            },
            "changeling": {
                "energy_pool": "Glamour",
                "energy_strength": "Wyrd"
            },
            "geist": {
                "energy_pool": "Plasm",
                "energy_strength": "Synergy"
            },
            "mummy": {
                "energy_strength": "Sekhem"
            },
            "promethean": {
                "energy_pool": "Pyros",
                "energy_strength": "Azoth"
            }
        }
    },
    "morality": {
        "score": 1,
        "derangements": {
            "10": "",
            "9": "",
            "8": "",
            "7": "",
            "6": "",
            "5": "",
            "4": "",
            "3": "",
            "2": "",
            "1": ""
        },
        "mage": "wisdom",
        "vampire": "humanity",
        "changeling": "clarity",
        "werewolf": "harmony",
        "hunter": "integrity",
        "geist": "synergy",
        "mummy": "memory",
        "promethean": "humanity"
    },
    "derived_stats": {
        "health_max": 0,
        "health_current": 0,
        "health_mod": 0,
        "willpower_max": 0,
        "willpower_current": 0,
        "willpower_mod": 0,
        "armor": {},
        "speed": 0,
        "defense": 0,
        "initiative": 0,
        "size": 0
    },
    "races_details": {
        "mage": {
            "active_spells": [{
                "name": "",
                "potency": "",
                "description": ""

            }],
            "spells_onself": [{
                "name": "",
                "potency": "",
                "description": ""
            }],
            "nimbus": "",
            "rotes": [{
                "arcana": "",
                "level": "",
                "name": "",
                "dice_pool": "",
                "book": "",
            }]
        }
    },
    "merits": [{
        "name": "",
        "dots": 1
    }],
    "flaws": [],
    "weapon_attacks": [
        {
            "name": "",
            "dice": "",
            "range": "",
            "special": ""
        }
    ],
    "equipment": [{
        "name": "",
        "durability": 0,
        "structure": 0,
        "size": "",
        "cost": 0,
        "worn": false,
    }],
    "experience": {
        "total": 0,
        "extra_total": 0,
        "spent": 0,
        "extra_spent": 0,
        "unspent": 0,
        "extra_unspent": 0,
        "gained": [{
            "quantity": 0,
            "extra_quantity": 0,
            "description": 0
        }],
        "spent": [{
            "quantity": 0,
            "extra_quantity": 0,
            "description": 0
        }],

    },
    "notes": ""
}


