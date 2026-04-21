import { PATHS } from "../../pages/path";
import { slugify } from "../../utils";
import { GnosisData } from "../../Data/Mage/GnosisData";
import { bloodPotencyData } from "../../Data/Vampire/BloodPotencyData";
import { SpellsData } from "../../Data/Mage/Arcana/allArcana";
import { allUniMeritsData } from "../../Data/universalMeritsData";
import { allMageMeritsData } from "../../Data/Mage/mageMeritsData";
import { vampireMeritsData } from "../../Data/Vampire/VampireMeritsData";
import { derangementData } from "../../Data/DerangementsData";
import { allDiscipline } from "../../Data/Vampire/DisciplineData";
import { DevotionData } from "../../Data/Vampire/DevotionData";
import { allContracts } from "../../Data/Changeling/ContractData";
import {
  advancedArmoryData,
  benedictionData,
  castigationData,
  dreamscapeData,
  elixirData,
  relicData,
  ritesDuChevalData,
  seitokukenData,
  thaumatechnologyData,
  teleinformaticsInterviewData,
  teleinformaticsInvestigationData,
  teleinformaticsResearchData,
  gospelOfAgaresData,
  gospelOfAmonData,
  gospelOfBelethData,
  ritesOfDenialData,
  otherEndowmentData,
} from "../../Data/Hunter/EndowmentData";
import { ManifestationsData, ManifestationsKeysData } from "../../Data/Geist/ManifestationData";

const parseResourceValues = (value) => {
  const [max = "0", perTurn = "0"] = String(value).split("/");

  return {
    max: max === "Health" ? "Health" : Number(max),
    perTurn: Number(perTurn),
  };
};

const normalizeArcanaName = (value) =>
  String(value || "")
    .replace(/[^\w\s]/g, "")
    .trim()
    .toLowerCase();

const extractSpellLevel = (arcanaValue) => {
  const bulletMatch = String(arcanaValue || "").match(/(?:•|â€¢|Ã¢â‚¬Â¢)/g);
  return bulletMatch?.length || 0;
};

const cleanHtmlText = (value) =>
  String(value || "")
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();

const gnosisLookup = Object.fromEntries(
  GnosisData.map((row) => [
    Number(row.Gnosis),
    parseResourceValues(row["Max Mana/Per turn"]),
  ])
);

const bloodPotencyLookup = Object.fromEntries(
  bloodPotencyData.map((row) => [
    Number(row["Blood Potency"]),
    parseResourceValues(row["Max vitae/Max vitae per turn"]),
  ])
);

const normalizedSpells = SpellsData.map((spell) => ({
  ...spell,
  arcanaName: normalizeArcanaName(spell.Arcana),
  level: extractSpellLevel(spell.Arcana),
  dicePool: cleanHtmlText(spell.RoteDice || ""),
  detailPath: spell?.Titolo ? `${PATHS.MAGE.SPELLS}/${slugify(spell.Titolo)}` : null,
}));

const normalizedDerangements = derangementData
  .filter((item) => item?.Name)
  .map((item, index) => ({
    ...item,
    id: `derangement-${index}`,
    label: item?.Severity ? `${item.Name} (${item.Severity})` : item.Name,
    detailPath: `${PATHS.DERANGEMENTS}/${slugify(`${item.Name}-${index}`)}`,
  }));

const vampireDisciplineLookup = Object.fromEntries(
  allDiscipline
    .filter((item) => item?.Discipline)
    .map((item) => [
      item.Discipline,
      `${PATHS.VAMPIRE.DISCIPLINES}/${slugify(item.Discipline)}`,
    ])
);

const vampireDevotionLookup = Object.fromEntries(
  DevotionData
    .filter((item) => item?.Name)
    .map((item) => [item.Name, `${PATHS.VAMPIRE.DEVOTIONS}/${slugify(item.Name)}`])
);

const changelingContractLookup = Object.fromEntries(
  allContracts
    .filter((item) => item?.Name)
    .map((item) => [item.Name, `${PATHS.CHANGELING.CONTRACTS}/${slugify(item.Name)}`])
);

const hunterEndowmentGroups = [
  { name: "Advanced Armory", items: advancedArmoryData },
  { name: "Benediction", items: benedictionData },
  { name: "Castigation", items: castigationData },
  { name: "Dreamscape", items: dreamscapeData },
  { name: "Elixir", items: elixirData },
  { name: "Relic", items: relicData },
  { name: "Rites du Cheval", items: ritesDuChevalData },
  { name: "Seitokuken", items: seitokukenData },
  { name: "Thaumatechnology", items: thaumatechnologyData },
  {
    name: "Teleinformatics",
    items: [
      ...teleinformaticsInterviewData,
      ...teleinformaticsInvestigationData,
      ...teleinformaticsResearchData,
    ],
  },
  {
    name: "Goetic Gospel",
    items: [...gospelOfAgaresData, ...gospelOfAmonData, ...gospelOfBelethData],
  },
  { name: "Rites of Denial", items: ritesOfDenialData },
  { name: "Other Endowments", items: otherEndowmentData },
];

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

const hunterEndowmentLookup = Object.fromEntries(
  hunterEndowmentGroups.map((group) => [
    group.name,
    uniqueByName(
      group.items.map((item) => ({
        name: getHunterEndowmentName(item),
      }))
    ).map((item) => item.name),
  ])
);

const geistManifestationLookup = uniqueByName(
  ManifestationsData.map((item) => ({
    name: item?.Name,
  }))
).map((item) => item.name);

const geistKeyLookup = Object.fromEntries(
  geistManifestationLookup.map((manifestation) => [
    manifestation,
    uniqueByName(
      ManifestationsKeysData.filter((item) => item?.Manifestation === manifestation).map(
        (item) => ({
          name: item?.Key,
        })
      )
    ).map((item) => item.name),
  ])
);

function buildMeritEntries(items, config) {
  return items
    .filter((item) => item?.[config.key])
    .map((item) => {
    const meritName = item?.[config.key];

    return {
      name: meritName,
      link: config.path ? `${config.path}/${slugify(meritName)}` : null,
      source: config.source,
    };
    });
}

function uniqueByName(items) {
  const seen = new Set();

  return items.filter((item) => {
    const normalizedName = String(item?.name || "").trim().toLowerCase();

    if (!normalizedName || seen.has(normalizedName)) {
      return false;
    }

    seen.add(normalizedName);
    return true;
  });
}

const meritLookupsByRace = {
  default: uniqueByName(
    buildMeritEntries(allUniMeritsData, {
      key: "Name",
      path: PATHS.UNIVERSAL_MERITS,
      source: "universal",
    })
  ),
  mage: uniqueByName([
    ...buildMeritEntries(allUniMeritsData, {
      key: "Name",
      path: PATHS.UNIVERSAL_MERITS,
      source: "universal",
    }),
    ...buildMeritEntries(allMageMeritsData, {
      key: "Title",
      path: PATHS.MAGE.MERITS,
      source: "mage",
    }),
  ]),
  vampire: uniqueByName([
    ...buildMeritEntries(allUniMeritsData, {
      key: "Name",
      path: PATHS.UNIVERSAL_MERITS,
      source: "universal",
    }),
    ...buildMeritEntries(vampireMeritsData, {
      key: "Name",
      path: null,
      source: "vampire",
    }),
  ]),
};

export function getMageResourceStats(gnosis) {
  return gnosisLookup[Number(gnosis)] || gnosisLookup[1];
}

export function getVampireResourceStats(bloodPotency) {
  return bloodPotencyLookup[Number(bloodPotency)] || bloodPotencyLookup[1];
}

export function getSpellOptionsForArcanaLevel(arcana, level) {
  const normalizedArcana = normalizeArcanaName(arcana);
  const numericLevel = Number(level) || 0;

  return normalizedSpells
    .filter(
      (spell) => spell.arcanaName === normalizedArcana && spell.level === numericLevel
    )
    .map((spell) => spell.Titolo);
}

export function getSpellByTitle(arcana, level, title) {
  const normalizedArcana = normalizeArcanaName(arcana);
  const numericLevel = Number(level) || 0;

  return normalizedSpells.find(
    (spell) =>
      spell.arcanaName === normalizedArcana &&
      spell.level === numericLevel &&
      spell.Titolo === title
  );
}

export function getSpellDetailPath(title) {
  const matchedSpell = normalizedSpells.find((spell) => spell.Titolo === title);
  return matchedSpell?.detailPath || null;
}

export function getDerangementOptions() {
  return normalizedDerangements.map((item) => ({
    value: item.id,
    label: item.label,
  }));
}

export function getDerangementDetailPath(derangementId) {
  return normalizedDerangements.find((item) => item.id === derangementId)?.detailPath || null;
}

export function findDerangementOptionIdByName(name) {
  const normalizedName = String(name || "").trim().toLowerCase();

  return (
    normalizedDerangements.find(
      (item) => String(item?.Name || "").trim().toLowerCase() === normalizedName
    )?.id || ""
  );
}

export function getVampireDisciplineDetailPath(name) {
  return vampireDisciplineLookup[name] || null;
}

export function getVampireDevotionDetailPath(name) {
  return vampireDevotionLookup[name] || null;
}

export function getChangelingContractDetailPath(name) {
  return changelingContractLookup[name] || null;
}

export function getMeritOptionsForRace(race) {
  const meritEntries = meritLookupsByRace[race] || meritLookupsByRace.default;

  return meritEntries.map((entry) => entry.name);
}

export function getMeritDetailPath(race, meritName) {
  const meritEntries = meritLookupsByRace[race] || meritLookupsByRace.default;
  return meritEntries.find((entry) => entry.name === meritName)?.link || null;
}

export function getHunterEndowmentGroupOptions() {
  return hunterEndowmentGroups.map((group) => group.name);
}

export function getHunterEndowmentOptions(group) {
  return hunterEndowmentLookup[group] || [];
}

export function getGeistManifestationOptions() {
  return geistManifestationLookup;
}

export function getGeistKeyOptions(manifestation) {
  return geistKeyLookup[manifestation] || [];
}
