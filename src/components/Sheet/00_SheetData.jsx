import { Vices } from "../../Data/Mortal/VirtueViceData"
import { Virtues } from "../../Data/Mortal/VirtueViceData"
import { characterDetailOptions } from "./raceOptions"

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
                "path": { "selected": "", "choices": characterDetailOptions.mage.path },
                "order": { "selected": "", "choices": characterDetailOptions.mage.order },
                "legacy": { "selected": "", "choices": characterDetailOptions.mage.legacy }
            },
            "vampire": {
                "clan": { "selected": "", "choices": characterDetailOptions.vampire.clan },
                "covenant": { "selected": "", "choices": characterDetailOptions.vampire.covenant },
                "bloodline": { "selected": "", "choices": characterDetailOptions.vampire.bloodline },
            },
            "changeling": {
                "seeming": { "selected": "", "choices": characterDetailOptions.changeling.seeming },
                "court": { "selected": "", "choices": characterDetailOptions.changeling.court },
                "kith": { "selected": "", "choices": characterDetailOptions.changeling.kith }
            },
            "werewolf": {
                "auspice": { "selected": "", "choices": characterDetailOptions.werewolf.auspice },
                "tribe": { "selected": "", "choices": characterDetailOptions.werewolf.tribe },
                "lodge": { "selected": "", "choices": characterDetailOptions.werewolf.lodge }
            },
            "hunter": {
                "profession": { "selected": "", "choices": characterDetailOptions.hunter.profession },
                "compact": { "selected": "", "choices": characterDetailOptions.hunter.compact },
                "conspiracy": { "selected": "", "choices": characterDetailOptions.hunter.conspiracy }
            },
            "geist": {
                "archetype": { "selected": "", "choices": characterDetailOptions.geist.archetype },
                "threshold": { "selected": "", "choices": characterDetailOptions.geist.threshold },
                "krewe": ""
            },
            "mummy": {
                "decree": { "selected": "", "choices": characterDetailOptions.mummy.decree },
                "guild": { "selected": "", "choices": characterDetailOptions.mummy.guild },
                "judge": { "selected": "", "choices": characterDetailOptions.mummy.judge }
            },
            "promethean": {
                "lineage": { "selected": "", "choices": characterDetailOptions.promethean.lineage },
                "refinement": { "selected": "", "choices": characterDetailOptions.promethean.refinement },
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
            "disciplines": [{ "name": "", "dots": 1 }],
            "devotions": [{ "name": "" }],
            "rituals": [{ "name": "" }]
        },
        "changeling": {
            "contracts": [{ "name": "" }],
            "pledges": [{ "name": "" }]
        },
        "werewolf": {
            "gifts": [{ "name": "", "dots": 1 }],
            "rites": [{ "name": "" }],
            "renown": {
                "purity": 0,
                "glory": 0,
                "honor": 0,
                "wisdom": 0,
                "cunning": 0,
            }
        },
        "hunter": {
            "tactics": [{ "name": "" }],
            "endowments": [{ "group": "", "name": "" }]
        },
        "geist": {
            "manifestations": [{ "name": "", "key": "", "dots": 1 }],
            "krewe_traits": [{ "name": "" }],
            "keys": []
        },
        "mummy": {
            "utterances": [{ "name": "" }],
            "pillars": {
                "ab": 0,
                "ba": 0,
                "ka": 0,
                "ren": 0,
                "sheut": 0
            }
        },
        "promethean": {
            "transmutations": [{ "name": "" }],
        }
    },
    "race_traits": {
        "energy_pool": {
            "current": 10,
            "max": 10,
            "per_turn": 1
        },
        "energy_strength": {
            "value": 1
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
        "score": 7,
        "derangements": {
            "10": [],
            "9": [],
            "8": [],
            "7": [],
            "6": [],
            "5": [],
            "4": [],
            "3": [],
            "2": [],
            "1": []
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
        "health": 0,
        "health_mod": 0,
        "damage": ["none"],
        "resistant_damage": [],
        "willpower_max": 0,
        "willpower_current": 0,
        "willpower_mod": 0,
        "armor": "",
        "speed": {
            "base": 0,
            "modifier": 0
        },
        "defense": {
            "base": 1,
            "modifier": 0
        },
        "initiative": {
            "base": 0,
            "modifier": 0
        },
        "size": 5
    },
    "race_details": {
        "mage": {
            "active_spells": [{
                "arcana": "",
                "level": 1,
                "name": "",
                "potency": "",
                "dice_pool": "",
                "book": ""
            }],
            "spells_onself": [{
                "arcana": "",
                "level": 1,
                "name": "",
                "potency": "",
                "dice_pool": "",
                "book": ""
            }],
            "rotes": [{
                "arcana": "",
                "level": 1,
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
        "spent_total": 0,
        "unspent_total": 0,
        "extra_unspent": 0,
        "gained": [{
            "quantity": 0,
            "extra_quantity": 0,
            "description": ""
        }],
        "spent": [{
            "quantity": 0,
            "extra_quantity": 0,
            "description": "",
        }],

    },
    "notes": ""
}
