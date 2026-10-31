import { PATHS } from '../path';

function normalizeTerm(name) {
  return name
    .replace(/\([^)]*\)/g, '')
    .replace(/,\s*the\s*$/i, '')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
}

// Use verified pages and aliases within each game line. A matching name alone
// can refer to a different concept (for example, the Rage Gift or the Wound Gift).
const linkGroups = {
  'Mage the Awakening': [
    [PATHS.MAGE.ARCANA, ['Arcanum', 'Arcana']],
    [PATHS.MAGE.DEATH, ['Death']],
    [PATHS.MAGE.FATE, ['Fate']],
    [PATHS.MAGE.FORCE, ['Forces']],
    [PATHS.MAGE.LIFE, ['Life']],
    [PATHS.MAGE.MATTER, ['Matter']],
    [PATHS.MAGE.MIND, ['Mind']],
    [PATHS.MAGE.PRIME, ['Prime']],
    [PATHS.MAGE.SPACE, ['Space']],
    [PATHS.MAGE.SPIRIT, ['Spirit']],
    [PATHS.MAGE.TIME, ['Time']],
    [PATHS.MAGE.GNOSIS, ['Gnosis']],
    [PATHS.MAGE.MANA, ['Mana', 'tass']],
    [PATHS.MAGE.WISDOM, ['Wisdom']],
    [PATHS.MAGE.LEGACY, ['Legacy']],
    [PATHS.MAGE.PATH, ['Path']],
    [`${PATHS.MAGE.PATH}/acanthus`, ['Acanthus']],
    [`${PATHS.MAGE.PATH}/mastigos`, ['Mastigos']],
    [`${PATHS.MAGE.PATH}/moros`, ['Moros']],
    [`${PATHS.MAGE.PATH}/obrimos`, ['Obrimos']],
    [`${PATHS.MAGE.PATH}/thyrsus`, ['Thyrsus']],
    [PATHS.MAGE.ORDER, ['order']],
    [`${PATHS.MAGE.ORDER}/adamantine_arrow`, ['Adamantine Arrow']],
    [`${PATHS.MAGE.ORDER}/council_of_free_assemblies`, ['Free Council', 'Council of Free Assemblies']],
    [`${PATHS.MAGE.ORDER}/guardians_of_the_veil`, [
      'Guardians of the Veil', 'Eye of the Dragon', 'Visus Draconis', 'Law of the Mask', 'Masque, the',
    ]],
    [`${PATHS.MAGE.ORDER}/mysterium`, ['Mysterium', 'Censor', 'Curator', 'mystagogue']],
    [`${PATHS.MAGE.ORDER}/silver_ladder`, ['Silver Ladder']],
    [`${PATHS.LOCATIONS_BASE}/hallow`, ['Hallow']],
    [`${PATHS.LOCATIONS_BASE}/sanctum`, ['sanctum']],
    [`${PATHS.MAGE.MERITS}/familiar`, ['familiar']],
    [`${PATHS.MAGE.MERITS}/high_speech`, ['High Speech']],
    [`${PATHS.MAGE.MERITS}/daimon`, ['daimon']],
    [`${PATHS.MAGE.MERITS}/athenaeum`, ['Athenaeum']],
    [`${PATHS.MAGE.MERITS}/thrall`, ['thrall']],
    [`${PATHS.MAGE.ARCANA}/ward`, ['ward']],
  ],
  'Changeling the Lost': [
    [PATHS.ENERGY_POOLS, ['Glamour']],
    [PATHS.CHANGELING.BASE, ['changeling', 'Lost']],
    [PATHS.CHANGELING.CONTRACTS, ['Contract', 'Goblin Contract']],
    [PATHS.CHANGELING.COURT, ['Court, Great Court', 'Autumn Court', 'Spring Court', 'Summer Court', 'Winter Court']],
    [PATHS.CHANGELING.ENTITLEMENTS, ['entitlement']],
    [PATHS.CHANGELING.GOBLIN_FRUITS, ['goblin fruit']],
    [PATHS.CHANGELING.KITHS, ['kith']],
    [PATHS.CHANGELING.SEEMINGS, ['seeming']],
    [PATHS.CHANGELING.PLEDGES, ['pledge']],
    [PATHS.CHANGELING.TOKENS, ['token']],
    [PATHS.CHANGELING.WYRD, ['Wyrd']],
    [`${PATHS.LOCATIONS_BASE}/hollow`, ['Hollow']],
  ],
  'Vampire the Requiem': [
    [PATHS.ENERGY_POOLS, ['Vitae']],
    [PATHS.VAMPIRE.BASE, ['Kindred', 'Damned', 'Requiem']],
    [PATHS.VAMPIRE.BLOODLINE, ['bloodline']],
    [PATHS.VAMPIRE.CLANS, ['clan', 'Daeva', 'Gangrel', 'Mekhet', 'Nosferatu', 'Ventrue']],
    [PATHS.VAMPIRE.COVENANTS, [
      'covenant', 'Acolytes', 'Belial’s Brood', 'Carthian', 'Circle of the Crone',
      'Dragons', 'First Estate', 'Invictus', 'Lancea Sanctum', 'Ordo Dracul', 'Sanctified',
    ]],
    [PATHS.VAMPIRE.DISCIPLINES, ['Disciplines']],
    [PATHS.VAMPIRE.GHOUL_FAMILIES, ['ghoul']],
    [`${PATHS.LOCATIONS_BASE}/domain`, ['domain']],
    [`${PATHS.LOCATIONS_BASE}/haven`, ['haven']],
    [`${PATHS.LOCATIONS_BASE}/haunted`, ['haunted']],
    [`${PATHS.VAMPIRE.DISCIPLINES}/coils_of_the_dragon`, ['Coils of the Dragon']],
    [`${PATHS.VAMPIRE.DISCIPLINES}/crac`, ['Crúac']],
    [`${PATHS.VAMPIRE.DISCIPLINES}/theban_sorcery`, ['Theban Sorcery']],
    [`${PATHS.VAMPIRE.MERITS}/regnant`, ['regnant']],
  ],
  'Werewolf the Forsaken': [
    [PATHS.ENERGY_POOLS, ['Essence']],
    [PATHS.WEREWOLF.BASE, ['Uratha', 'Forsaken']],
    [PATHS.WEREWOLF.AUSPICES, ['auspice', 'Cahalith', 'Elodoth', 'Irraka', 'Ithaeur', 'Rahu']],
    [PATHS.WEREWOLF.TRIBES, [
      'tribe', 'Tribes of the Moon', 'Pure Tribes', 'Blood Talons', 'Bone Shadows',
      'Hunters in Darkness', 'Iron Masters', 'Storm Lords', 'Ghost Wolf',
    ]],
    [PATHS.WEREWOLF.FETISHES, ['fetish', 'klaive']],
    [PATHS.WEREWOLF.GIFTS, ['Gift']],
    [PATHS.WEREWOLF.LODGES, ['lodge']],
    [`${PATHS.LOCATIONS_BASE}/locus`, ['locus']],
    [`${PATHS.LOCATIONS_BASE}/wound`, ['Wound']],
  ],
  'Geist the Sin-Eaters': [
    [PATHS.ENERGY_POOLS, ['plasm']],
    [PATHS.GEIST.BASE, ['Sin-Eater', 'Bound']],
    [PATHS.GEIST.CEREMONIES, ['ceremony']],
    [PATHS.GEIST.KEYS_AND_HAUNTS, ['Key']],
    [`${PATHS.LOCATIONS_BASE}/haunt`, ['Haunt']],
    [PATHS.GEIST.KREWE_TRAITS, ['krewe']],
    [PATHS.GEIST.MANIFESTATION, ['Manifestation']],
    [PATHS.GEIST.MEMENTOS, ['memento', 'Charm', 'deathmask', 'fetter', 'memorabilia', 'vanitas']],
    [PATHS.GEIST.PSYCHE, ['Psyche']],
    [PATHS.GEIST.SYNERGY, ['Synergy']],
  ],
  'Promethean the Created': [
    [PATHS.ENERGY_POOLS, ['Pyros']],
    [PATHS.PROMETHEAN.BASE, ['Promethean']],
    [PATHS.PROMETHEAN.AZOTH, ['Azoth']],
    [PATHS.PROMETHEAN.BESTOWMENTS, ['Bestowment']],
    [PATHS.PROMETHEAN.LINEAGE, [
      'Lineage', 'Frankenstein', 'Galatea', 'Golem', 'Muse', 'Nepri', 'Osiris',
      'Riven', 'Tammuz', 'Ulgan', 'Wretched',
    ]],
    [PATHS.PROMETHEAN.REFINEMENTS, [
      'Refinement', 'Aurum', 'Centimani', 'Cuprum', 'Ferrum', 'Furies', 'Mercurius',
      'Mimics', 'Ophidians', 'Pariahs', 'Stannum', 'Titan',
    ]],
    [PATHS.PROMETHEAN.MOCKERIES, ['Mockery', 'Ishtari', 'Render', 'Silent', 'Torch-Born']],
    [PATHS.PROMETHEAN.TRANSMUTATIONS, [
      'Transmutation', 'Alchemicus', 'Corporeum', 'Deception', 'Disquietism',
      'Electrification', 'Mesmerism', 'Metamorphosis', 'Vitality', 'Vulcanus',
    ]],
    [`${PATHS.PROMETHEAN.MERITS}/elpis`, ['Elpis']],
  ],
  'Mummy the Curse': [
    [PATHS.ENERGY_POOLS, ['Pillar']],
    [PATHS.MUMMY.BASE, ['Arisen', 'Deathless']],
    [PATHS.MUMMY.AFFINITIES, ['Affinity']],
    [PATHS.MUMMY.DECREE, ['decree']],
    [PATHS.MUMMY.GUILD, ['guild', 'Maa-Kep', 'Mesen-Nebu', 'Sesha-Hebsu', 'Su-Menent', 'Tef-Aabhi']],
    [PATHS.MUMMY.JUDGE, ['Judges of Duat']],
    [PATHS.MUMMY.RELICS, ['relic', 'vestige']],
    [PATHS.MUMMY.SEKHEM, ['Sekhem']],
    [PATHS.MUMMY.UTTERANCES, ['Utterance']],
    [`${PATHS.MUMMY.MERITS}/cult`, ['cult']],
  ],
};

const linksBySection = Object.fromEntries(
  Object.entries(linkGroups).map(([section, groups]) => [
    section,
    new Map(groups.flatMap(([path, names]) => names.map((name) => [normalizeTerm(name), path]))),
  ])
);

export function getLexyconPath(section, entry) {
  const term = normalizeTerm(entry.Name);

  // The other Mage entry named Spirit describes an entity, not the Arcanum.
  if (section === 'Mage the Awakening' && term === 'spirit' && entry.Book !== 'MTA') {
    return null;
  }

  return linksBySection[section]?.get(term) ?? null;
}
