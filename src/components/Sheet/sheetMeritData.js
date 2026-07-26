import { PATHS } from "../../pages/path";
import { slugify } from "../../utils";

const catalogPromises = new Map();

function buildEntries(items, key, path) {
  return (items || [])
    .filter((item) => item?.[key])
    .map((item) => ({
      name: item[key],
      link: path ? `${path}/${slugify(item[key])}` : null,
    }));
}

function uniqueByName(items) {
  const seen = new Set();

  return items.filter((item) => {
    const name = String(item?.name || "").trim().toLowerCase();
    if (!name || seen.has(name)) return false;
    seen.add(name);
    return true;
  });
}

async function buildMeritCatalog(race) {
  const { allUniMeritsData } = await import("../../Data/universalMeritsData");
  const entries = buildEntries(allUniMeritsData, "Name", PATHS.UNIVERSAL_MERITS);

  if (race === "mage") {
    const { allMageMeritsData } = await import("../../Data/Mage/mageMeritsData");
    entries.push(...buildEntries(allMageMeritsData, "Name", PATHS.MAGE.MERITS));
  } else if (race === "vampire") {
    const { vampireMeritsData } = await import("../../Data/Vampire/VampireMeritsData");
    entries.push(...buildEntries(vampireMeritsData, "Name", null));
  }

  const uniqueEntries = uniqueByName(entries);
  return {
    options: uniqueEntries.map((entry) => entry.name),
    paths: new Map(uniqueEntries.map((entry) => [entry.name, entry.link])),
  };
}

export function loadMeritCatalog(race) {
  const key = race === "mage" || race === "vampire" ? race : "default";

  if (!catalogPromises.has(key)) {
    catalogPromises.set(
      key,
      buildMeritCatalog(key).catch((error) => {
        catalogPromises.delete(key);
        throw error;
      })
    );
  }

  return catalogPromises.get(key);
}
