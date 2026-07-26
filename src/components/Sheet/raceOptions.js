import { PATHS } from "../../pages/path";
import { slugify } from "../../utils";

export const RACE_CHOICES = [
  "mortal",
  "mage",
  "vampire",
  "changeling",
  "werewolf",
  "hunter",
  "geist",
  "mummy",
  "promethean",
];

export const EMPTY_RACE_CATALOG = Object.freeze({
  characterDetails: Object.freeze({}),
  sectionConfig: Object.freeze({ dotGroups: [], lists: [] }),
});

const catalogPromises = new Map();

const normalizeOption = (value) =>
  typeof value === "string" ? value.trim() : "";

const uniqueOptions = (values) => {
  const seen = new Set();

  return values.reduce((result, value) => {
    const normalizedValue = normalizeOption(value);

    if (!normalizedValue || normalizedValue === "N/A" || seen.has(normalizedValue)) {
      return result;
    }

    seen.add(normalizedValue);
    result.push(normalizedValue);
    return result;
  }, []);
};

const extractOptions = (items, field) =>
  uniqueOptions((items || []).map((item) => item?.[field]));

const buildOptions = (items, formatter) =>
  uniqueOptions((items || []).map((item) => formatter(item)));

const detailPath = (basePath, name) =>
  name ? `${basePath}/${slugify(name)}` : null;

const mageDots = {
  dotGroups: [
    {
      title: "Arcana",
      path: ["race_powers", "mage", "arcana"],
      max: 5,
      min: 0,
    },
  ],
  lists: [],
};

const werewolfAuspices = ["Rahu", "Cahalith", "Elodoth", "Ithaeur", "Irraka"];
const werewolfTribes = [
  "Blood Talons",
  "Bone Shadows",
  "Hunters in Darkness",
  "Iron Masters",
  "Storm Lords",
  "Ghost Wolves",
  "Fire-Touched",
  "Ivory Claws",
  "Predator Kings",
  "Bale Hounds",
  "Doirons",
  "Pickerings",
  "Rios",
  "Rosewood Clan",
  "Village of Fountainhill",
  "Baal-Hadad",
  "Balam-Colop",
  "Brineborn",
  "Colony",
  "Distant Ones",
  "Unclean",
];

async function loadMageCatalog() {
  const [{ Paths }, { Orders }, { LegacyData }] = await Promise.all([
    import("../../Data/Mage/PathData"),
    import("../../Data/Mage/OrderData"),
    import("../../Data/Mage/LegacyData"),
  ]);

  return {
    characterDetails: {
      path: Paths,
      order: Orders,
      legacy: extractOptions(LegacyData, "Name"),
    },
    sectionConfig: mageDots,
  };
}

async function loadVampireCatalog() {
  const [{ Clans }, { Coventants }, { bloodlineData }, { allDiscipline }, { DevotionData }] =
    await Promise.all([
      import("../../Data/Vampire/ClanData"),
      import("../../Data/Vampire/CovenantData"),
      import("../../Data/Vampire/BloodlineData"),
      import("../../Data/Vampire/DisciplineData"),
      import("../../Data/Vampire/DevotionData"),
    ]);

  return {
    characterDetails: {
      clan: Clans,
      covenant: Coventants,
      bloodline: extractOptions(bloodlineData, "Name"),
    },
    sectionConfig: {
      dotGroups: [],
      lists: [
        {
          title: "Disciplines",
          itemLabel: "Discipline",
          path: ["race_powers", "vampire", "disciplines"],
          options: uniqueOptions(allDiscipline.map((item) => item?.Discipline)),
          withDots: true,
          minDots: 1,
          maxDots: 5,
          getDetailPath: (item) =>
            detailPath(PATHS.VAMPIRE.DISCIPLINES, item?.name),
        },
        {
          title: "Devotions",
          itemLabel: "Devotion",
          path: ["race_powers", "vampire", "devotions"],
          options: extractOptions(DevotionData, "Name"),
          getDetailPath: (item) => detailPath(PATHS.VAMPIRE.DEVOTIONS, item?.name),
        },
      ],
    },
  };
}

async function loadChangelingCatalog() {
  const [{ Courts }, { Seemings }, { kithData }, { allContracts }] = await Promise.all([
    import("../../Data/Changeling/CourtData"),
    import("../../Data/Changeling/SeemingsData"),
    import("../../Data/Changeling/KithData"),
    import("../../Data/Changeling/ContractData"),
  ]);

  return {
    characterDetails: {
      seeming: Seemings,
      court: Courts,
      kith: extractOptions(kithData, "Kith"),
    },
    sectionConfig: {
      dotGroups: [],
      lists: [
        {
          title: "Contracts",
          itemLabel: "Contract",
          path: ["race_powers", "changeling", "contracts"],
          options: extractOptions(allContracts, "Name"),
          getDetailPath: (item) =>
            detailPath(PATHS.CHANGELING.CONTRACTS, item?.name),
        },
      ],
    },
  };
}

async function loadWerewolfCatalog() {
  const [{ LodgesData }, { giftData }, { RitesData }] = await Promise.all([
    import("../../Data/Werewolf/LodgeData"),
    import("../../Data/Werewolf/GiftData"),
    import("../../Data/Werewolf/RitesData"),
  ]);

  return {
    characterDetails: {
      auspice: werewolfAuspices,
      tribe: werewolfTribes,
      lodge: extractOptions(LodgesData, "Name"),
    },
    sectionConfig: {
      dotGroups: [
        {
          title: "Renown",
          path: ["race_powers", "werewolf", "renown"],
          max: 5,
          min: 0,
        },
      ],
      lists: [
        {
          title: "Gifts",
          itemLabel: "Gift",
          path: ["race_powers", "werewolf", "gifts"],
          options: extractOptions(giftData, "Name"),
          withDots: true,
          minDots: 1,
          maxDots: 5,
        },
        {
          title: "Rites",
          itemLabel: "Rite",
          path: ["race_powers", "werewolf", "rites"],
          options: extractOptions(RitesData, "Name"),
        },
      ],
    },
  };
}

const hunterIgnoredFields = new Set([
  "Rating",
  "Description",
  "Book",
  "Cost",
  "Dice Pool",
  "Cost (Xt = X thimbles of blood)",
  "Compact or Conspiracy",
]);

const getHunterEndowmentName = (item) =>
  Object.entries(item || {}).find(
    ([key, value]) =>
      !hunterIgnoredFields.has(key) && typeof value === "string" && value.trim()
  )?.[1] || "";

async function loadHunterCatalog() {
  const [
    { ProfessionsData },
    { CompactsData, ConspiraciesData },
    { TactictsData },
    endowmentData,
  ] = await Promise.all([
    import("../../Data/Hunter/ProfessionsData"),
    import("../../Data/Hunter/CompactConsipraciesData"),
    import("../../Data/Hunter/TactictsData"),
    import("../../Data/Hunter/EndowmentData"),
  ]);

  const groups = [
    ["Advanced Armory", endowmentData.advancedArmoryData],
    ["Benediction", endowmentData.benedictionData],
    ["Castigation", endowmentData.castigationData],
    ["Elixir", endowmentData.elixirData],
    ["Relic", endowmentData.relicData],
    ["Rites du Cheval", endowmentData.ritesDuChevalData],
    ["Thaumatechnology", endowmentData.thaumatechnologyData],
    [
      "Teleinformatics",
      endowmentData.teleinformaticsData.flatMap((item) => item.Ranks || []),
    ],
    [
      "Goetic Gospel",
      endowmentData.goeticGospelData.flatMap((item) => item.Ranks || []),
    ],
    ["Rites of Denial", endowmentData.ritesOfDenialData],
    ["Other Endowments", endowmentData.otherEndowmentData],
  ];
  const endowmentsByGroup = Object.fromEntries(
    groups.map(([name, items]) => [
      name,
      uniqueOptions((items || []).map(getHunterEndowmentName)),
    ])
  );

  return {
    characterDetails: {
      profession: extractOptions(ProfessionsData, "Name"),
      compact: extractOptions(CompactsData, "Compact"),
      conspiracy: extractOptions(ConspiraciesData, "Name"),
    },
    sectionConfig: {
      dotGroups: [],
      lists: [
        {
          title: "Tactics",
          itemLabel: "Tactic",
          path: ["race_powers", "hunter", "tactics"],
          options: extractOptions(TactictsData, "Name"),
        },
        {
          title: "Endowments",
          itemLabel: "Endowment Group",
          path: ["race_powers", "hunter", "endowments"],
          options: groups.map(([name]) => name),
          itemKey: "group",
          secondaryKey: "name",
          secondaryLabel: "Endowment",
          defaultItem: { group: "", name: "" },
          getSecondaryOptions: (item) => endowmentsByGroup[item?.group] || [],
          preventDuplicates: false,
        },
      ],
    },
  };
}

async function loadGeistCatalog() {
  const [
    { ArchetypesData },
    { ThresholdsData },
    { KreweTraitsData },
    { ManifestationsData, ManifestationsKeysData },
  ] = await Promise.all([
    import("../../Data/Geist/ArchetypesData"),
    import("../../Data/Geist/ThresholdsData"),
    import("../../Data/Geist/KreweTraitsData"),
    import("../../Data/Geist/ManifestationData"),
  ]);

  const manifestations = extractOptions(ManifestationsData, "Name");
  const keysByManifestation = Object.fromEntries(
    manifestations.map((manifestation) => [
      manifestation,
      uniqueOptions(
        ManifestationsKeysData.filter(
          (item) => item?.Manifestation === manifestation
        ).map((item) => item?.Key)
      ),
    ])
  );

  return {
    characterDetails: {
      archetype: extractOptions(ArchetypesData, "Archetype"),
      threshold: extractOptions(ThresholdsData, "Thresholds"),
      krewe: "",
    },
    sectionConfig: {
      dotGroups: [],
      lists: [
        {
          title: "Manifestations",
          itemLabel: "Manifestation",
          path: ["race_powers", "geist", "manifestations"],
          options: manifestations,
          withDots: true,
          minDots: 1,
          maxDots: 5,
          secondaryKey: "key",
          secondaryLabel: "Key",
          defaultItem: { name: "", key: "", dots: 1 },
          getSecondaryOptions: (item) => keysByManifestation[item?.name] || [],
          preventDuplicates: false,
        },
        {
          title: "Krewe Traits",
          itemLabel: "Krewe Trait",
          path: ["race_powers", "geist", "krewe_traits"],
          options: extractOptions(KreweTraitsData, "Name"),
        },
      ],
    },
  };
}

async function loadMummyCatalog() {
  const [{ DecreesData }, { GuildsData }, { JudgesData }, { UtterancesFlatData }] =
    await Promise.all([
      import("../../Data/Mummy/DecreesData"),
      import("../../Data/Mummy/GuildsData"),
      import("../../Data/Mummy/JudgesData"),
      import("../../Data/Mummy/UtterancesData"),
    ]);

  return {
    characterDetails: {
      decree: extractOptions(DecreesData, "Decree"),
      guild: extractOptions(GuildsData, "Guild"),
      judge: extractOptions(JudgesData, "Name"),
    },
    sectionConfig: {
      dotGroups: [
        {
          title: "Pillars",
          path: ["race_powers", "mummy", "pillars"],
          max: 5,
          min: 0,
        },
      ],
      lists: [
        {
          title: "Utterances",
          itemLabel: "Utterance",
          path: ["race_powers", "mummy", "utterances"],
          options: buildOptions(
            UtterancesFlatData,
            (item) => `${item?.Name || ""} (${item?.Tier || ""})`
          ),
        },
      ],
    },
  };
}

async function loadPrometheanCatalog() {
  const [{ LineagesData }, { RefinementsData }, transmutationsModule] = await Promise.all([
    import("../../Data/Promethean/LineagesData"),
    import("../../Data/Promethean/RefinementsData"),
    import("../../Data/Promethean/TransmutationsData"),
  ]);
  const transmutations = Object.entries(transmutationsModule)
    .filter(([key, value]) => key.endsWith("TransmutationsData") && Array.isArray(value))
    .flatMap(([, value]) => value);

  return {
    characterDetails: {
      lineage: extractOptions(LineagesData, "Name"),
      refinement: extractOptions(RefinementsData, "Name"),
      athanor: "",
    },
    sectionConfig: {
      dotGroups: [],
      lists: [
        {
          title: "Transmutations",
          itemLabel: "Transmutation",
          path: ["race_powers", "promethean", "transmutations"],
          options: extractOptions(transmutations, "Name"),
        },
      ],
    },
  };
}

const catalogLoaders = {
  mage: loadMageCatalog,
  vampire: loadVampireCatalog,
  changeling: loadChangelingCatalog,
  werewolf: loadWerewolfCatalog,
  hunter: loadHunterCatalog,
  geist: loadGeistCatalog,
  mummy: loadMummyCatalog,
  promethean: loadPrometheanCatalog,
};

export function loadRaceCatalog(race) {
  const loader = catalogLoaders[race];

  if (!loader) {
    return Promise.resolve(EMPTY_RACE_CATALOG);
  }

  if (!catalogPromises.has(race)) {
    catalogPromises.set(
      race,
      loader().catch((error) => {
        catalogPromises.delete(race);
        throw error;
      })
    );
  }

  return catalogPromises.get(race);
}
