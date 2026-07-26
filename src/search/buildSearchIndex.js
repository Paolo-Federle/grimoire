import { PATHS } from "../pages/path";
import { slugify } from "../utils";
import { getBookPath } from "../books/bookNavigation";

import { allLocation } from "../Data/LocationMeritData";
import { allUniMeritsData } from "../Data/universalMeritsData";
import { derangementData } from "../Data/DerangementsData";
import { allDiscipline } from "../Data/Vampire/DisciplineData";
import { DevotionData } from "../Data/Vampire/DevotionData";
import { vampireMeritsData } from "../Data/Vampire/VampireMeritsData";
import { giftDetailData } from "../Data/Werewolf/GiftData";
import { RitesData } from "../Data/Werewolf/RitesData";
import { fetishData } from "../Data/Werewolf/FetishData";
import { TalensData } from "../Data/Werewolf/TalensData";
import { WerewolfMeritsData } from "../Data/Werewolf/WerewolfMeritsData";
import { allMageMeritsData } from "../Data/Mage/mageMeritsData";
import { LegacyData } from "../Data/Mage/LegacyData";
import { SpellsData } from "../Data/Mage/Arcana/allArcana";
import { artifactData } from "../Data/Mage/artifactsData";
import { imbuedItemsData } from "../Data/Mage/imbuedItemsData";
import { allContracts } from "../Data/Changeling/ContractData";
import { allChangelingMeritsData } from "../Data/Changeling/changelingMeritsData";
import { goblinFruitData } from "../Data/Changeling/GoblinFruitData";
import { allToken } from "../Data/Changeling/TokenData";
import { dreadPowersData } from "../Data/Hunter/DreadPowerData";
import { endowmentDetailData } from "../Data/Hunter/EndowmentData";
import { TactictsData, TactictsOverviewData } from "../Data/Hunter/TactictsData";
import { hunterMeritsDetailData } from "../Data/Hunter/HunterMeritsData";
import {
  GuildUtterancesData,
  IronBullUtterancesData,
  MaatUtterancesData,
  SpiritUtterancesData,
  UtterancesData,
  WheelUtterancesData,
} from "../Data/Mummy/UtterancesData";
import {
  RegiumData,
  amuletData,
  effigyData,
  sebaData,
  textData,
  uterData,
  vestigeData,
} from "../Data/Mummy/RelicsData";
import { PrometheanMeritsData } from "../Data/Promethean/PrometheanMeritsData";
import {
  AlchemicusTransmutationsData,
  BeneficeTransmutationsData,
  ConsortiumTransmutationsData,
  ContaminationTransmutationsData,
  CorporeumTransmutationsData,
  DeceptionTransmutationsData,
  DisquietismTransmutationsData,
  ElectrificationTransmutationsData,
  IrradiationTransmutationsData,
  MesmerismTransmutationsData,
  MetamorphosisTransmutationsData,
  SaturninusTransmutationsData,
  SensoriumTransmutationsData,
  SpiritusTransmutationsData,
  TransmutationsOverviewData,
  VitalityTransmutationsData,
  VulcanusTransmutationsData,
} from "../Data/Promethean/TransmutationsData";
import { GeistMeritsData } from "../Data/Geist/GeistMeritsData";
import { CeremoniesData, CeremoniesOverviewData } from "../Data/Geist/CeremoniesData";
import {
  CharmData,
  DeathMaskData,
  FetterData,
  MemorabiliaData,
  VanitasData,
} from "../Data/Geist/MementosData";
import { ManifestationsKeysData } from "../Data/Geist/ManifestationData";
import {
  AbominableMeritsData,
  AbominablePowersData,
  AbominableRitesData,
  AbominableRitesOverview,
} from "../Data/Others/AbominableTraitsData";
import { AspectsData, FavorsData } from "../Data/Others/AspectsFavorsData";
import { PsychicMeritsData } from "../Data/Mortal/Lesser templates/PsychicMeritsData";
import { ThaumaturgyMeritsData } from "../Data/Mortal/Lesser templates/ThaumaturgyData";
import { reliquaryData, reliquaryPowersData } from "../Data/Mortal/ReliquaryData";
import { spiritNuminaData } from "../Data/Spirit/SpiritNuminaData";
import {
  ChangelingBookData,
  GeistBookData,
  HunterBookData,
  MageBookData,
  ModulesBooksData,
  MummyBookData,
  PrometheanBookData,
  VampireBookData,
  WerewolfBookData,
  WoDBookData,
} from "../Data/BookData";

const summaryFields = [
  "Description",
  "Descrizione",
  "Summary",
  "DescrizioneBreve",
  "ShortDescription",
  "Effect",
  "Effetto",
  "LongDescription",
  "Content",
];

function flattenText(value) {
  if (value === null || value === undefined) return "";
  if (typeof value === "string" || typeof value === "number") return String(value);
  if (Array.isArray(value)) return value.map(flattenText).filter(Boolean).join(" ");
  if (typeof value === "object") {
    return [
      value.text,
      value.content,
      value.label,
      value.title,
      value.items,
    ]
      .map(flattenText)
      .filter(Boolean)
      .join(" ");
  }
  return "";
}

function compactText(value, maxLength = 240) {
  const text = flattenText(value).replace(/\s+/g, " ").trim();
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength - 1).trimEnd()}…`;
}

function getSummary(item) {
  for (const field of summaryFields) {
    const text = compactText(item?.[field]);
    if (text) return text;
  }
  return "";
}

function getMeta(item) {
  const values = [
    item?.Arcana,
    item?.Discipline,
    item?.Class,
    item?.Category,
    item?.Rank && item.Rank !== "N/A" ? `Rank ${item.Rank}` : "",
    item?.Rating ? `Rating ${item.Rating}` : "",
    item?.Cost ? `Cost ${item.Cost}` : "",
  ];

  return [...new Set(values.filter(Boolean).map(String))].join(" · ");
}

function buildDuplicateCounts(items, getName = (item) => item?.Name) {
  return items.reduce((counts, item) => {
    const name = String(getName(item) || "");
    counts[name] = (counts[name] || 0) + 1;
    return counts;
  }, {});
}

function getFetishPath(item) {
  const counts = buildDuplicateCounts(fetishData);
  const name = item?.Name || "";
  const routeName = counts[name] > 1
    ? `${name} ${item?.Rank || ""} ${item?.Book || ""}`
    : name;
  return `${PATHS.WEREWOLF.FETISHES}/${slugify(routeName)}`;
}

function getPrometheanMeritTitle(item) {
  const counts = buildDuplicateCounts(PrometheanMeritsData);
  const name = item?.Name || "";
  if (counts[name] <= 1) return name;
  const bookCode = String(item?.Book || "").trim().split(/\s+/)[0];
  return bookCode ? `${name} (${bookCode})` : name;
}

const transmutationItems = [
  TransmutationsOverviewData,
  AlchemicusTransmutationsData,
  BeneficeTransmutationsData,
  ConsortiumTransmutationsData,
  ContaminationTransmutationsData,
  CorporeumTransmutationsData,
  DeceptionTransmutationsData,
  DisquietismTransmutationsData,
  ElectrificationTransmutationsData,
  IrradiationTransmutationsData,
  MesmerismTransmutationsData,
  MetamorphosisTransmutationsData,
  SaturninusTransmutationsData,
  SensoriumTransmutationsData,
  SpiritusTransmutationsData,
  VitalityTransmutationsData,
  VulcanusTransmutationsData,
].flat().filter(Boolean);

const transmutationNameCounts = buildDuplicateCounts(transmutationItems);

function getTransmutationPath(item) {
  const name = item?.Name || "";
  const routeName = transmutationNameCounts[name] > 1
    ? `${name} ${item?.Class || ""} ${item?.Book || ""}`
    : name;
  return `${PATHS.PROMETHEAN.TRANSMUTATIONS}/${slugify(routeName)}`;
}

const searchSources = [
  { id: "locations", gameLine: "general", type: "Location", items: allLocation, basePath: PATHS.LOCATIONS_BASE },
  { id: "universal-merits", gameLine: "general", type: "Merit", items: allUniMeritsData, basePath: PATHS.UNIVERSAL_MERITS },
  {
    id: "derangements",
    gameLine: "general",
    type: "Derangement",
    items: derangementData,
    path: (item, index) => `${PATHS.DERANGEMENTS}/${slugify(`${item?.Name || "unknown"}-${index}`)}`,
  },
  { id: "vampire-disciplines", gameLine: "vampire", type: "Discipline", items: allDiscipline, basePath: PATHS.VAMPIRE.DISCIPLINES },
  { id: "vampire-devotions", gameLine: "vampire", type: "Devotion", items: DevotionData, basePath: PATHS.VAMPIRE.DEVOTIONS },
  { id: "vampire-merits", gameLine: "vampire", type: "Merit", items: vampireMeritsData, basePath: PATHS.VAMPIRE.MERITS },
  { id: "werewolf-gifts", gameLine: "werewolf", type: "Gift", items: giftDetailData, basePath: PATHS.WEREWOLF.GIFTS },
  { id: "werewolf-rites", gameLine: "werewolf", type: "Rite", items: RitesData, basePath: PATHS.WEREWOLF.RITES },
  { id: "werewolf-fetishes", gameLine: "werewolf", type: "Fetish", items: fetishData, path: getFetishPath },
  { id: "werewolf-talens", gameLine: "werewolf", type: "Talen", items: TalensData, basePath: PATHS.WEREWOLF.TALENS },
  { id: "werewolf-merits", gameLine: "werewolf", type: "Merit", items: WerewolfMeritsData, basePath: PATHS.WEREWOLF.MERITS },
  { id: "mage-merits", gameLine: "mage", type: "Merit", items: allMageMeritsData, basePath: PATHS.MAGE.MERITS },
  { id: "mage-legacies", gameLine: "mage", type: "Legacy", items: LegacyData, basePath: PATHS.MAGE.LEGACY },
  { id: "mage-spells", gameLine: "mage", type: "Spell", items: SpellsData, basePath: PATHS.MAGE.SPELLS },
  { id: "mage-artifacts", gameLine: "mage", type: "Artifact", items: artifactData, basePath: PATHS.MAGE.ARTIFACTS },
  { id: "mage-imbued-items", gameLine: "mage", type: "Imbued Item", items: imbuedItemsData, basePath: PATHS.MAGE.IMBUED_ITEMS },
  { id: "changeling-contracts", gameLine: "changeling", type: "Contract", items: allContracts, basePath: PATHS.CHANGELING.CONTRACTS },
  { id: "changeling-merits", gameLine: "changeling", type: "Merit", items: allChangelingMeritsData, basePath: PATHS.CHANGELING.MERITS },
  { id: "changeling-fruits", gameLine: "changeling", type: "Goblin Fruit", items: goblinFruitData, basePath: PATHS.CHANGELING.GOBLIN_FRUITS },
  { id: "changeling-tokens", gameLine: "changeling", type: "Token", items: allToken, basePath: PATHS.CHANGELING.TOKENS },
  { id: "hunter-dread-powers", gameLine: "hunter", type: "Dread Power", items: dreadPowersData, basePath: PATHS.HUNTER.DREAD_POWERS },
  { id: "hunter-endowments", gameLine: "hunter", type: "Endowment", items: endowmentDetailData, basePath: PATHS.HUNTER.ENDOWMENTS },
  { id: "hunter-tactics", gameLine: "hunter", type: "Tactic", items: [TactictsOverviewData, ...TactictsData], basePath: PATHS.HUNTER.TACTICS },
  { id: "hunter-merits", gameLine: "hunter", type: "Merit", items: hunterMeritsDetailData, basePath: PATHS.HUNTER.MERITS },
  {
    id: "mummy-utterances",
    gameLine: "mummy",
    type: "Utterance",
    items: [
      ...UtterancesData,
      ...GuildUtterancesData,
      ...SpiritUtterancesData,
      ...IronBullUtterancesData,
      ...MaatUtterancesData,
      ...WheelUtterancesData,
    ],
    basePath: PATHS.MUMMY.UTTERANCES,
  },
  {
    id: "mummy-relics",
    gameLine: "mummy",
    type: "Relic",
    items: [...amuletData, ...effigyData, ...RegiumData, ...textData, ...uterData, ...sebaData, ...vestigeData],
    basePath: PATHS.MUMMY.RELICS,
  },
  {
    id: "promethean-merits",
    gameLine: "promethean",
    type: "Merit",
    items: PrometheanMeritsData,
    title: getPrometheanMeritTitle,
    path: (item) => `${PATHS.PROMETHEAN.MERITS}/${slugify(getPrometheanMeritTitle(item))}`,
  },
  { id: "promethean-transmutations", gameLine: "promethean", type: "Transmutation", items: transmutationItems, path: getTransmutationPath },
  { id: "geist-merits", gameLine: "geist", type: "Merit", items: GeistMeritsData, basePath: PATHS.GEIST.MERITS },
  { id: "geist-ceremonies", gameLine: "geist", type: "Ceremony", items: [CeremoniesOverviewData, ...CeremoniesData], basePath: PATHS.GEIST.CEREMONIES },
  {
    id: "geist-mementos",
    gameLine: "geist",
    type: "Memento",
    items: [...CharmData, ...VanitasData, ...FetterData, ...DeathMaskData, ...MemorabiliaData],
    basePath: PATHS.GEIST.MEMENTOS,
  },
  {
    id: "geist-manifestations",
    gameLine: "geist",
    type: "Manifestation",
    items: ManifestationsKeysData,
    title: (item) => `${item?.Manifestation || ""} — ${item?.Key || ""}`,
    path: (item) => `${PATHS.GEIST.MANIFESTATION}/${slugify(`${item?.Manifestation || ""} ${item?.Key || ""}`)}`,
  },
  {
    id: "abominable-traits",
    gameLine: "other",
    type: "Abominable Trait",
    items: [AbominableRitesOverview, ...AbominableMeritsData, ...AbominableRitesData, ...AbominablePowersData],
    basePath: PATHS.OTHERS.ABOMINABLE,
  },
  { id: "aspects-favors", gameLine: "other", type: "Aspect or Favor", items: [...AspectsData, ...FavorsData], basePath: PATHS.OTHERS.ASPECTS_FAVORRS },
  { id: "psychic-merits", gameLine: "mortal", type: "Psychic Merit", items: PsychicMeritsData, basePath: PATHS.MORTAL.PSYCHIC_POWERS },
  { id: "thaumaturgy", gameLine: "mortal", type: "Thaumaturgy", items: ThaumaturgyMeritsData, basePath: PATHS.MORTAL.THAUMATURGY },
  { id: "reliquary", gameLine: "mortal", type: "Reliquary Item", items: reliquaryData, basePath: PATHS.MORTAL.RELIQUARY },
  {
    id: "reliquary-powers",
    gameLine: "mortal",
    type: "Relic Power",
    items: reliquaryPowersData,
    title: (item) => item?.["Relic Powers"],
    path: (item) => `${PATHS.MORTAL.RELIQUARY}/${slugify(item?.["Relic Powers"] || "")}`,
  },
  { id: "spirit-numina", gameLine: "other", type: "Numen", items: spiritNuminaData, basePath: PATHS.SPIRIT.NUMINA },
];

const bookSources = [
  ["general", WoDBookData],
  ["vampire", VampireBookData],
  ["werewolf", WerewolfBookData],
  ["mage", MageBookData],
  ["promethean", PrometheanBookData],
  ["changeling", ChangelingBookData],
  ["hunter", HunterBookData],
  ["geist", GeistBookData],
  ["mummy", MummyBookData],
];

const searchableGameLines = new Set([
  "mortal",
  "vampire",
  "werewolf",
  "mage",
  "promethean",
  "changeling",
  "hunter",
  "geist",
  "mummy",
]);

function collectPathValues(value) {
  if (typeof value === "string") return value.startsWith("/") ? [value] : [];
  if (!value || typeof value !== "object") return [];
  return Object.values(value).flatMap(collectPathValues);
}

function getPageTitle(path) {
  const segment = path.split("/").filter(Boolean).at(-1) || "Home";
  return segment
    .split("_")
    .filter(Boolean)
    .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
    .join(" ");
}

function getPageGameLine(path) {
  const firstSegment = path.split("/").filter(Boolean)[0] || "general";
  return searchableGameLines.has(firstSegment) ? firstSegment : "general";
}

function makeEntry(source, item, index) {
  const title = compactText(source.title ? source.title(item, index) : item?.Name, 140);
  if (!title) return null;

  const path = source.path
    ? source.path(item, index)
    : `${source.basePath}/${slugify(title)}`;

  if (!path) return null;

  return {
    id: `${source.id}-${index}`,
    title,
    summary: getSummary(item),
    gameLine: source.gameLine,
    type: source.type,
    book: compactText(item?.Book || item?.Source || item?.Manual, 100),
    meta: getMeta(item),
    path,
  };
}

export function buildSearchIndex() {
  const entries = searchSources.flatMap((source) =>
    source.items.map((item, index) => makeEntry(source, item, index)).filter(Boolean)
  );

  [...new Set(collectPathValues(PATHS))]
    .filter(
      (path) =>
        path !== PATHS.HOME &&
        path !== PATHS.SEARCH &&
        path !== PATHS.SHEET_LEGACY_EDITOR &&
        !path.includes(":")
    )
    .forEach((path, index) => {
      const parent = path.split("/").filter(Boolean).slice(0, -1).join(" ");
      entries.push({
        id: `page-${index}`,
        title: getPageTitle(path),
        summary: "",
        gameLine: getPageGameLine(path),
        type: "Wiki Page",
        book: "",
        meta: parent,
        path,
      });
    });

  for (const [gameLine, books] of bookSources) {
    books.forEach((book, index) => {
      entries.push({
        id: `book-${gameLine}-${index}`,
        title: compactText(book?.Name, 140),
        summary: compactText(book?.Description),
        gameLine,
        type: "Book",
        book: compactText(book?.["Code Name"], 100),
        meta: compactText(book?.Type, 100),
        path: getBookPath(book),
      });
    });
  }

  ModulesBooksData.forEach((book, index) => {
    entries.push({
      id: `book-module-${index}`,
      title: compactText(book?.Name, 140),
      summary: compactText(book?.Description),
      gameLine: "general",
      type: "Book",
      book: compactText(book?.["Code Name"], 100),
      meta: compactText(book?.["Game Line"], 100),
      path: PATHS.BOOKS,
    });
  });

  const byPath = new Map();
  entries.filter((entry) => entry.title && entry.path).forEach((entry) => {
    const key = entry.type === "Book"
      ? `${entry.type}|${entry.gameLine}|${entry.title}|${entry.book}`
      : entry.path;
    const current = byPath.get(key);

    if (!current || (!current.summary && entry.summary)) {
      byPath.set(key, entry);
    }
  });

  return [...byPath.values()].map((entry, index) => ({
    ...entry,
    id: `search-${index}`,
  }));
}
