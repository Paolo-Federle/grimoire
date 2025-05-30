// paths.js
import { allDiscipline } from '../Data/Vampire/DisciplineData';
import { DevotionData } from '../Data/Vampire/DevotionData';
import { spiritNuminaData } from '../Data/Spirit/SpiritNuminaData';
import { derangementData } from '../Data/DerangementsData';
import { allLocation } from '../Data/LocationMeritData';
import { allUniMeritsData } from '../Data/universalMeritsData';
import { allMageMeritsData } from '../Data/Mage/mageMeritsData';
import { LegacyData } from '../Data/Mage/LegacyData';
import { SpellsData } from '../Data/Mage/Arcana/allArcana';
import { artifactData } from '../Data/Mage/artifactsData';
import { imbuedItemsData } from '../Data/Mage/imbuedItemsData';
import { allContracts } from '../Data/Changeling/ContractData';
import { allChangelingMeritsData } from '../Data/Changeling/changelingMeritsData';
import { allToken } from '../Data/Changeling/TokenData';
import { dreadPowersData } from '../Data/Hunter/DreadPowerData';

const slug = (str) => {
    if (typeof str !== 'string') return null;
    return str
      .toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // rimuove accenti
      .replace(/\s+/g, '_')     // spazi → underscore
      .replace(/[^\w]/g, '');   // rimuove tutto tranne lettere, numeri, underscore
  };
  
  
  console.log(artifactData)

const VAMPIRE_DISCIPLINE_DETAILS = Object.fromEntries(allDiscipline.map(d => [slug(d.Name), `/vampire/disciplines/${slug(d.Name)}`]));
const VAMPIRE_DEVOTION_DETAILS = Object.fromEntries(DevotionData.map(d => [slug(d.Name), `/vampire/devotions/${slug(d.Name)}`]));
const SPIRIT_NUMINA_DETAILS = Object.fromEntries(spiritNuminaData.map(n => [slug(n.Name), `/spirit/numina/${slug(n.Name)}`]));
const DERANGEMENT_DETAILS = Object.fromEntries(derangementData.map(d => [slug(d.Name), `/derangements/${slug(d.Name)}`]));
const LOCATION_DETAILS = Object.fromEntries(allLocation.map(l => [slug(l.Name), `/merits/locations/${slug(l.Name)}`]));
const UNIVERSAL_MERIT_DETAILS = Object.fromEntries(allUniMeritsData.map(m => [slug(m.Title), `/universal_merit/${slug(m.Title)}`]));
const MAGE_MERIT_DETAILS = Object.fromEntries(allMageMeritsData.map(m => [slug(m.Title), `/mage/merits/${slug(m.Title)}`]));
const MAGE_LEGACY_DETAILS = Object.fromEntries(LegacyData.map(l => [slug(l.Nome), `/mage/legacy/${slug(l.Nome)}`]));
const MAGE_SPELL_DETAILS = Object.fromEntries(SpellsData.map(s => [slug(s.Titolo), `/mage/spells/${slug(s.Titolo)}`]));
// const MAGE_ARTIFACT_DETAILS = Object.fromEntries(artifactData.map(a => [slug(a.Nome), `/mage/artifacts/${slug(a.Nome)}`]));
const MAGE_IMBUED_ITEM_DETAILS = Object.fromEntries(imbuedItemsData.map(i => [slug(i.Nome), `/mage/imbued_items/${slug(i.Nome)}`]));
const CHANGELING_CONTRACT_DETAILS = Object.fromEntries(allContracts.map(c => [slug(c.Name), `/changeling/contracts/${slug(c.Name)}`]));
const CHANGELING_MERIT_DETAILS = Object.fromEntries(allChangelingMeritsData.map(m => [slug(m.Name), `/changeling/merits/${slug(m.Name)}`]));
const CHANGELING_TOKEN_DETAILS = Object.fromEntries(allToken.map(t => [slug(t.Name), `/changeling/tokens/${slug(t.Name)}`]));
const HUNTER_DREAD_POWER_DETAILS = Object.fromEntries(dreadPowersData.map(d => [slug(d.Name), `/hunter/dread_powers/${slug(d.Name)}`]));
const MAGE_ARCANA = Object.fromEntries(['death', 'fate', 'force', 'life', 'matter', 'mind', 'prime', 'space', 'spirit', 'time'].map(name => [slug(name), `/mage/${name}`]));


console.log('VAMPIRE_DISCIPLINE_DETAILS', VAMPIRE_DISCIPLINE_DETAILS)
// console.log('animalism',VAMPIRE_DISCIPLINE_DETAILS["animalism"]);

export const PATHS = {
    HOME: '/',
    SHEET: '/sheet',
    BOOKS: '/books',
    SIZE: '/size',
    ITEMS: '/items',
    SKILLS: '/skills',
    SHEET: '/sheet',
    TRAITS: '/traits',
    LEXYCON: '/lexycon',
    SETTINGS: '/settings',
    UNIVERSAL_MERITS_BASE: '/universal_merits',
    DERANGEMENTS_BASE: '/derangements',
    LOCATIONS_BASE: '/merits/location',

    VAMPIRE: {
        BASE: '/vampire',
        DISCIPLINES: '/vampire/disciplines',
        DISCIPLINE_DETAIL: (slug) => `/vampire/disciplines/${slug}`,
        DISCIPLINE_DETAILS: VAMPIRE_DISCIPLINE_DETAILS,
        DEVOTIONS: '/vampire/devotions',
        DEVOTION_DETAIL: (slug) => `/vampire/devotions/${slug}`,
        DEVOTION_DETAILS: VAMPIRE_DEVOTION_DETAILS,
        MERITS: '/vampire/merits',
        CLANS: '/vampire/clans',
        COVENANTS: '/vampire/covenants',
        BLOODLINE: '/vampire/bloodline',
        BLOOD_POTENCY: '/vampire/blood_potency',
        GHOUL_FAMILIES: '/vampire/ghoul_families',
        HUMANITY: '/vampire/humanity',
    },

    SPIRIT: {
        NUMINA: '/spirit/numina',
        NUMINA_DETAIL: (slug) => `/spirit/numina/${slug}`,
        NUMINA_DETAILS: SPIRIT_NUMINA_DETAILS,
    },
    DERANGEMENTS: DERANGEMENT_DETAILS,
    LOCATIONS: LOCATION_DETAILS,
    UNIVERSAL_MERITS: UNIVERSAL_MERIT_DETAILS,

    MAGE: {
        BASE: '/mage',
        MERITS: MAGE_MERIT_DETAILS,
        LEGACIES: MAGE_LEGACY_DETAILS,
        SPELLS: MAGE_SPELL_DETAILS,
        // ARTIFACTS: MAGE_ARTIFACT_DETAILS,
        IMBUED_ITEMS: MAGE_IMBUED_ITEM_DETAILS,
        PATH: '/mage/path',
        ORDER: '/mage/order',
        GNOSIS: '/mage/gnosis',
        WISDOM: '/mage/wisdom',
        GRIMOIRES: '/mage/grimoires',
        ARCANA: MAGE_ARCANA,
    },
    WEREWOLF: {
        BASE: 'werewolf',
    },

    CHANGELING: {
        BASE: '/changeling',
        CONTRACTS: CHANGELING_CONTRACT_DETAILS,
        MERITS: CHANGELING_MERIT_DETAILS,
        TOKENS: CHANGELING_TOKEN_DETAILS,
        KITHS: '/changeling/kiths',
        COURT: '/changeling/court',
        ENTITLEMENTS: '/changeling/entitlement',
        WYRD: '/changeling/wyrd',
        OATHS: '/changeling/oaths',
        CLARITY: '/changeling/clarity',
        GOBLIN_FRUITS: '/changeling/goblin_fruits',
        TOKEN_RULES: '/changeling/token_rules',
    },

    HUNTER: {
        BASE: '/hunter',
        DREAD_POWERS: HUNTER_DREAD_POWER_DETAILS,
        ENDOWMENTS: '/hunter/endowments',
        TACTICS: '/hunter/tactics',
        MERITS: '/hunter/merits',
    },

    MORTAL: {
        BASE: '/mortal',
        MORALITY: '/mortal/morality',
        VIRTUE_VICE: '/mortal/virtue_vice',
        MERITS: '/mortal/merits',
        ARMOR: '/mortal/armor',
        RELIQUARY: '/mortal/reliquary',
        TOOLS: '/mortal/tools',
        VEHICLES: '/mortal/vehicles',
        WEAPONS: '/mortal/weapons',
    },

    PROMETHEAN: {
        BASE: '/promethean',
        TRANSMUTATIONS: '/promethean/transmutations',
        MERITS: '/promethean/merits',
    },

    GEIST: {
        BASE: '/geist',
        KEYS_AND_HAUNTS: '/geist/keys_and_haunts',
        CEREMONIES: '/geist/ceremonies',
        MERITS: '/geist/merits',
        MEMENTOS: '/geist/mementos',
    },

    MUMMY: {
        BASE: '/mummy',
        AFFINITIES: '/mummy/affinities',
        UTTERANCES: '/mummy/utterances',
        MERITS: '/mummy/merits',
        RELICS: '/mummy/relics',
    },
};

