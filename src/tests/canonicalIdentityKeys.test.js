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
import { LegacyData } from "../Data/Mage/LegacyData";
import { SpellsData } from "../Data/Mage/Arcana/allArcana";
import { oggettiParanormali } from "../Data/OggettiParanormali";

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
  LegacyData,
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
});
