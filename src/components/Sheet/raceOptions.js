import { Paths } from "../../Data/Mage/PathData";
import { Orders } from "../../Data/Mage/OrderData";
import { LegacyData } from "../../Data/Mage/LegacyData";
import { Clans } from "../../Data/Vampire/ClanData";
import { Coventants } from "../../Data/Vampire/CovenantData";
import { allDiscipline } from "../../Data/Vampire/DisciplineData";
import { DevotionData } from "../../Data/Vampire/DevotionData";
import { bloodlineData } from "../../Data/Vampire/BloodlineData";
import { Courts } from "../../Data/Changeling/CourtData";
import { Seemings } from "../../Data/Changeling/SeemingsData";
import { kithData } from "../../Data/Changeling/KithData";
import { allContracts } from "../../Data/Changeling/ContractData";
import { LodgesData } from "../../Data/Werewolf/LodgeData";
import { giftData } from "../../Data/Werewolf/GiftData";
import { RitesData } from "../../Data/Werewolf/RitesData";
import { ProfessionsData } from "../../Data/Hunter/ProfessionsData";
import { CompactsData, ConspiraciesData } from "../../Data/Hunter/CompactConsipraciesData";
import { TactictsData } from "../../Data/Hunter/TactictsData";
import { ArchetypesData } from "../../Data/Geist/ArchetypesData";
import { ThresholdsData } from "../../Data/Geist/ThresholdsData";
import { KreweTraitsData } from "../../Data/Geist/KreweTraitsData";
import { DecreesData } from "../../Data/Mummy/DecreesData";
import { GuildsData } from "../../Data/Mummy/GuildsData";
import { JudgesData } from "../../Data/Mummy/JudgesData";
import { UtterancesData } from "../../Data/Mummy/UtterancesData";
import { LineagesData } from "../../Data/Promethean/LineagesData";
import { RefinementsData } from "../../Data/Promethean/RefinementsData";
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
  VitalityTransmutationsData,
  VulcanusTransmutationsData,
} from "../../Data/Promethean/TransmutationsData";
import {
  getChangelingContractDetailPath,
  getGeistKeyOptions,
  getGeistManifestationOptions,
  getHunterEndowmentGroupOptions,
  getHunterEndowmentOptions,
  getVampireDevotionDetailPath,
  getVampireDisciplineDetailPath,
} from "./sheetLookupData";

const normalizeOption = (value) => {
  if (typeof value !== "string") return "";
  return value.trim();
};

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
  uniqueOptions(items.map((item) => item?.[field]));

const buildOptions = (items, formatter) =>
  uniqueOptions(items.map((item) => formatter(item)));

const prometheanTransmutationSources = [
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
];

export const characterDetailOptions = {
  mage: {
    path: Paths,
    order: Orders,
    legacy: extractOptions(LegacyData, "Nome"),
  },
  vampire: {
    clan: Clans,
    covenant: Coventants,
    bloodline: extractOptions(bloodlineData, "Name"),
  },
  changeling: {
    seeming: Seemings,
    court: Courts,
    kith: extractOptions(kithData, "Kith"),
  },
  werewolf: {
    auspice: ["Rahu", "Cahalith", "Elodoth", "Ithaeur", "Irraka"],
    tribe: [
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
    ],
    lodge: extractOptions(LodgesData, "Name"),
  },
  hunter: {
    profession: extractOptions(ProfessionsData, "Name"),
    compact: extractOptions(CompactsData, "Compact"),
    conspiracy: extractOptions(ConspiraciesData, "Name"),
  },
  geist: {
    archetype: extractOptions(ArchetypesData, "Archetype"),
    threshold: extractOptions(ThresholdsData, "Thresholds"),
    krewe: "",
  },
  mummy: {
    decree: extractOptions(DecreesData, "Decree"),
    guild: extractOptions(GuildsData, "Guild"),
    judge: extractOptions(JudgesData, "Name"),
  },
  promethean: {
    lineage: extractOptions(LineagesData, "Name"),
    refinement: extractOptions(RefinementsData, "Name"),
    athanor: "",
  },
};

export const racePowerOptions = {
  vampire: {
    disciplines: uniqueOptions(allDiscipline.map((item) => item?.Discipline)),
    devotions: extractOptions(DevotionData, "Name"),
  },
  changeling: {
    contracts: extractOptions(allContracts, "Name"),
  },
  werewolf: {
    gifts: extractOptions(giftData, "Name"),
    rites: extractOptions(RitesData, "Name"),
  },
  hunter: {
    tactics: extractOptions(TactictsData, "Name"),
    endowments: getHunterEndowmentGroupOptions(),
  },
  geist: {
    manifestations: getGeistManifestationOptions(),
    kreweTraits: extractOptions(KreweTraitsData, "Name"),
  },
  mummy: {
    utterances: buildOptions(
      UtterancesData,
      (item) => `${item?.Name || ""} (${item?.Tier || ""})`
    ),
  },
  promethean: {
    transmutations: extractOptions(prometheanTransmutationSources.flat(), "Name"),
  },
};

export const raceSectionConfig = {
  mage: {
    dotGroups: [
      {
        title: "Arcana",
        path: ["race_powers", "mage", "arcana"],
        max: 5,
        min: 0,
      },
    ],
    lists: [],
  },
  vampire: {
    dotGroups: [],
    lists: [
      {
        title: "Disciplines",
        itemLabel: "Discipline",
        path: ["race_powers", "vampire", "disciplines"],
        options: racePowerOptions.vampire.disciplines,
        withDots: true,
        minDots: 1,
        maxDots: 5,
        getDetailPath: (item) => getVampireDisciplineDetailPath(item?.name),
      },
      {
        title: "Devotions",
        itemLabel: "Devotion",
        path: ["race_powers", "vampire", "devotions"],
        options: racePowerOptions.vampire.devotions,
        getDetailPath: (item) => getVampireDevotionDetailPath(item?.name),
      },
    ],
  },
  changeling: {
    dotGroups: [],
    lists: [
      {
        title: "Contracts",
        itemLabel: "Contract",
        path: ["race_powers", "changeling", "contracts"],
        options: racePowerOptions.changeling.contracts,
        getDetailPath: (item) => getChangelingContractDetailPath(item?.name),
      },
    ],
  },
  werewolf: {
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
        options: racePowerOptions.werewolf.gifts,
        withDots: true,
        minDots: 1,
        maxDots: 5,
      },
      {
        title: "Rites",
        itemLabel: "Rite",
        path: ["race_powers", "werewolf", "rites"],
        options: racePowerOptions.werewolf.rites,
      },
    ],
  },
  hunter: {
    dotGroups: [],
    lists: [
      {
        title: "Tactics",
        itemLabel: "Tactic",
        path: ["race_powers", "hunter", "tactics"],
        options: racePowerOptions.hunter.tactics,
      },
      {
        title: "Endowments",
        itemLabel: "Endowment Group",
        path: ["race_powers", "hunter", "endowments"],
        options: racePowerOptions.hunter.endowments,
        itemKey: "group",
        secondaryKey: "name",
        secondaryLabel: "Endowment",
        defaultItem: { group: "", name: "" },
        getSecondaryOptions: (item) => getHunterEndowmentOptions(item?.group),
        preventDuplicates: false,
      },
    ],
  },
  geist: {
    dotGroups: [],
    lists: [
      {
        title: "Manifestations",
        itemLabel: "Manifestation",
        path: ["race_powers", "geist", "manifestations"],
        options: racePowerOptions.geist.manifestations,
        withDots: true,
        minDots: 1,
        maxDots: 5,
        secondaryKey: "key",
        secondaryLabel: "Key",
        defaultItem: { name: "", key: "", dots: 1 },
        getSecondaryOptions: (item) => getGeistKeyOptions(item?.name),
        preventDuplicates: false,
      },
      {
        title: "Krewe Traits",
        itemLabel: "Krewe Trait",
        path: ["race_powers", "geist", "krewe_traits"],
        options: racePowerOptions.geist.kreweTraits,
      },
    ],
  },
  mummy: {
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
        options: racePowerOptions.mummy.utterances,
      },
    ],
  },
  promethean: {
    dotGroups: [],
    lists: [
      {
        title: "Transmutations",
        itemLabel: "Transmutation",
        path: ["race_powers", "promethean", "transmutations"],
        options: racePowerOptions.promethean.transmutations,
      },
    ],
  },
};
