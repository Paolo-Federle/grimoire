import { describe, expect, it } from "vitest";
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
import { pledgeData } from "../Data/Changeling/PledgesData";
import { allMageMeritsData } from "../Data/Mage/mageMeritsData";
import { artifactData } from "../Data/Mage/artifactsData";
import { imbuedItemsData } from "../Data/Mage/imbuedItemsData";
import { LegacyIndexData } from "../Data/Mage/LegacyIndexData";
import { SpellsData } from "../Data/Mage/Arcana/allArcana";
import { oggettiParanormali } from "../Data/OggettiParanormali";
import { slugify } from "../utils";

const migratedDatasets = [
  WoDBookData,
  VampireBookData,
  WerewolfBookData,
  MageBookData,
  PrometheanBookData,
  ChangelingBookData,
  HunterBookData,
  GeistBookData,
  MummyBookData,
  ModulesBooksData,
  pledgeData,
  allMageMeritsData,
  artifactData,
  imbuedItemsData,
  LegacyIndexData,
  SpellsData,
  oggettiParanormali,
];

describe("canonical dataset identity keys", () => {
  it("uses Name instead of Title, Nome, or Titolo", () => {
    const rows = migratedDatasets.flat();

    expect(rows.length).toBeGreaterThan(0);
    rows.forEach((row) => {
      expect(row).toHaveProperty("Name");
      expect(row).not.toHaveProperty("Title");
      expect(row).not.toHaveProperty("Nome");
      expect(row).not.toHaveProperty("Titolo");
    });
  });

  it("uses unique, route-safe IDs for every Legacy", () => {
    const ids = LegacyIndexData.map(({ Id }) => Id);

    expect(LegacyIndexData).toHaveLength(94);
    expect(new Set(ids).size).toBe(ids.length);
    ids.forEach((id) => {
      expect(id).toMatch(/^[a-z0-9]+(?:_[a-z0-9]+)*$/);
    });
  });

  it("preserves existing Legacy slugs and disambiguates the second Scelesti variant", () => {
    const slugCounts = LegacyIndexData.reduce((counts, legacy) => {
      const slug = slugify(legacy.Name);
      counts[slug] = (counts[slug] || 0) + 1;
      return counts;
    }, {});

    LegacyIndexData
      .filter((legacy) => slugCounts[slugify(legacy.Name)] === 1)
      .forEach((legacy) => {
        expect(legacy.Id).toBe(slugify(legacy.Name));
      });

    const variants = LegacyIndexData.filter(
      ({ Name }) => Name === "Scelesti (variant)"
    );

    expect(variants).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ Id: "scelesti_variant", Book: "KST" }),
        expect.objectContaining({
          Id: "scelesti_variant_nh_tu",
          Book: "NH-TU",
        }),
      ])
    );
  });
});
