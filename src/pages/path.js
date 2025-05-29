// paths.js

import { allDiscipline } from '@/Data/Vampire/DisciplineData';
import { DevotionData } from '@/Data/Vampire/DevotionData';
import { spiritNuminaData } from '@/Data/Spirit/SpiritNuminaData';
import { derangementData } from '@/Data/DerangementsData';
import { allLocation } from '@/Data/LocationMeritData';
import { allUniMeritsData } from '@/Data/universalMeritsData';
import { allMageMeritsData } from '@/Data/Mage/mageMeritsData';
import { LegacyData } from '@/Data/Mage/LegacyData';
import { SpellsData } from '@/Data/Mage/Arcana/allArcana';
import { ArtifactsData } from '@/Data/Mage/artifactsData';
import { imbuedItemsData } from '@/Data/Mage/imbuedItemsData';
import { allContracts } from '@/Data/Changeling/ContractData';
import { allChangelingMeritsData } from '@/Data/Changeling/changelingMeritsData';
import { allToken } from '@/Data/Changeling/TokenData';
import { dreadPowersData } from '@/Data/Hunter/DreadPowerData';

const slug = (str) => str.replace(/\s+/g, '_');

const VAMPIRE_DISCIPLINE_DETAILS = allDiscipline.map(d => ({ slug: slug(d.Name), path: `/vampire/disciplines/${slug(d.Name)}`, data: d }));
const VAMPIRE_DEVOTION_DETAILS = DevotionData.map(d => ({ slug: slug(d.Name), path: `/vampire/devotions/${slug(d.Name)}`, data: d }));
const SPIRIT_NUMINA_DETAILS = spiritNuminaData.map(n => ({ slug: slug(n.Name), path: `/spirit/numina/${slug(n.Name)}`, data: n }));
const DERANGEMENT_DETAILS = derangementData.map(d => ({ slug: slug(d.Name), path: `/derangements/${slug(d.Name)}`, data: d }));
const LOCATION_DETAILS = allLocation.map(l => ({ slug: slug(l.Name), path: `/merits/locations/${slug(l.Name)}`, data: l }));
const UNIVERSAL_MERIT_DETAILS = allUniMeritsData.map(m => ({ slug: slug(m.Title), path: `/universal_merit/${slug(m.Title)}`, data: m }));
const MAGE_MERIT_DETAILS = allMageMeritsData.map(m => ({ slug: slug(m.Title), path: `/mage/merits/${slug(m.Title)}`, data: m }));
const MAGE_LEGACY_DETAILS = LegacyData.map(l => ({ slug: slug(l.Nome), path: `/mage/legacy/${slug(l.Nome)}`, data: l }));
const MAGE_SPELL_DETAILS = SpellsData.map(s => ({ slug: slug(s.Titolo), path: `/mage/spells/${slug(s.Titolo)}`, data: s }));
const MAGE_ARTIFACT_DETAILS = ArtifactsData.map(a => ({ slug: slug(a.Nome), path: `/mage/artifacts/${slug(a.Nome)}`, data: a }));
const MAGE_IMBUED_ITEM_DETAILS = imbuedItemsData.map(i => ({ slug: slug(i.Nome), path: `/mage/imbued_items/${slug(i.Nome)}`, data: i }));
const CHANGELING_CONTRACT_DETAILS = allContracts.map(c => ({ slug: slug(c.Name), path: `/changeling/contracts/${slug(c.Name)}`, data: c }));
const CHANGELING_MERIT_DETAILS = allChangelingMeritsData.map(m => ({ slug: slug(m.Name), path: `/changeling/merits/${slug(m.Name)}`, data: m }));
const CHANGELING_TOKEN_DETAILS = allToken.map(t => ({ slug: slug(t.Name), path: `/changeling/tokens/${slug(t.Name)}`, data: t }));
const HUNTER_DREAD_POWER_DETAILS = dreadPowersData.map(d => ({ slug: slug(d.Name), path: `/hunter/dread_powers/${slug(d.Name)}`, data: d }));

const MAGE_ARCANA = ['death', 'fate', 'force', 'life', 'matter', 'mind', 'prime', 'space', 'spirit', 'time'].map(name => ({ slug: name, path: `/mage/${name}`, data: name }));

export const PATHS = {
  HOME: '/',
  SHEET: '/sheet',
  BOOKS: '/books',
  SIZE: '/size',
  ITEMS: '/items',
  SKILLS: '/skills',
  TRAITS: '/traits',
  LEXYCON: '/lexycon',
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
    ARTIFACTS: MAGE_ARTIFACT_DETAILS,
    IMBUED_ITEMS: MAGE_IMBUED_ITEM_DETAILS,
    PATH: '/mage/path',
    ORDER: '/mage/order',
    GNOSIS: '/mage/gnosis',
    WISDOM: '/mage/wisdom',
    GRIMOIRES: '/mage/grimoires',
    ARCANA: MAGE_ARCANA,
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

