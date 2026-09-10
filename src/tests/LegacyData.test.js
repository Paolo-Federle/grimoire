import { describe, expect, it } from "vitest";
import { loadLegacyDetailById } from "../Data/Mage/LegacyDetailLoader";
import { LegacyIndexData } from "../Data/Mage/LegacyIndexData";

function collectStrings(value, output = []) {
  if (typeof value === "string") {
    output.push(value);
    return output;
  }

  if (Array.isArray(value)) {
    value.forEach((item) => collectStrings(item, output));
    return output;
  }

  if (value && typeof value === "object") {
    Object.values(value).forEach((item) => collectStrings(item, output));
  }

  return output;
}

async function loadAllDetails() {
  return Promise.all(
    LegacyIndexData.map(({ Id }) => loadLegacyDetailById(Id))
  );
}

describe("Legacy detail data", () => {
  it("keeps the lightweight index and consolidated dataset in one-to-one correspondence", async () => {
    const { LegacyData, LegacyDetails } = await import(
      "../Data/Mage/LegacyData"
    );
    const details = await loadAllDetails();

    expect(LegacyData).toHaveLength(LegacyIndexData.length);
    expect(Object.keys(LegacyDetails)).toHaveLength(LegacyIndexData.length);
    expect(Object.keys(LegacyDetails)).toEqual(
      LegacyIndexData.map(({ Id }) => Id)
    );
    expect(details).toHaveLength(LegacyIndexData.length);
    details.forEach((detail, index) => {
      expect(detail).not.toBeNull();
      expect(detail.Id).toBe(LegacyIndexData[index].Id);
      expect(detail.Name).toBe(LegacyIndexData[index].Name);
      expect(detail.Book).toBe(LegacyIndexData[index].Book);
    });
  });

  it("loads both Scelesti variants through distinct stable IDs", async () => {
    const [kstVariant, nhTuVariant] = await Promise.all([
      loadLegacyDetailById("scelesti_variant"),
      loadLegacyDetailById("scelesti_variant_nh_tu"),
    ]);

    expect(kstVariant.Book).toBe("KST");
    expect(kstVariant.firstAttainmentName).toBe("Inevitable Ending");
    expect(nhTuVariant.Book).toBe("NH-TU");
    expect(nhTuVariant.firstAttainmentName).toBe("The Stains of Sin");
  });

  it("returns null for an unknown Legacy ID", async () => {
    await expect(loadLegacyDetailById("missing_legacy")).resolves.toBeNull();
  });

  it("contains the complete Thread Cutters success table from the source", async () => {
    const threadCutters = await loadLegacyDetailById("thread_cutters");
    const successTable = threadCutters.firstAttainmentDescription.find(
      (block) => block.type === "table"
    );

    expect(successTable.headers).toEqual(["Successes", "Result"]);
    expect(successTable.rows.map(([successes]) => successes)).toEqual([
      "1",
      "2",
      "3",
      "4",
      "5",
    ]);
    expect(successTable.rows).toHaveLength(5);
    expect(successTable.rows[0][1]).toContain(
      "Basic success tells the mage the conditions"
    );
    expect(successTable.rows[4][1]).toContain(
      "she understands the “moral calculus”"
    );
  });

  it("contains no residual structural HTML or known OCR joins", async () => {
    const strings = collectStrings(await loadAllDetails());
    const combined = strings.join("\n");

    expect(combined).not.toMatch(/<[^>]+>/);
    expect(combined).not.toMatch(/\b[\p{L}]{2,}-\s+[\p{L}]{2,}\b/u);
    expect(combined).not.toMatch(/[a-z’”]\.[A-Z]/);
    expect(combined).not.toMatch(/\s+[,;:!?)]/);
    expect(combined).not.toMatch(/\b[\p{L}]+\/\s+[\p{L}]+\b/u);
    expect(combined).not.toMatch(
      /\b(?:aethestics|allnight|avantgarde|Badgesis|bluecollar|couldpotentially|corspe|defendas|doppleganger|Ebudeainitiated|elecrodes|fifive|flatout|genegineered|heroessuch|Hieraticrobes|illmanned|inpiration|interconnectiveness|itemswith|longsundered|lowgrade|membersoftheLegacycanproject|mindaltered|nearlunatics|one-forone|outmost|perfectlynatural|peoplewatching|plantbased|predatortype|rarified|referto|Resurrectionsts|selfimprovement|simplyand|socalled|supernaturallyenforced|Timebased|wellmade|Wichever|workingclass)\b/i
    );
    expect(combined).not.toMatch(
      /\b(?:arrange an Middlegame|at the a cost|If the all Dhyanis|is note and interpreted|little or not trace|means of doing do|they incapable of sustaining)\b/
    );
    expect(combined).not.toMatch(
      /\b(?:a mere hindrances|consume one her own|he still find|more than little else|the action he’s currently view|the Cultists of the Doomsday Clock plans|the very of corporeal existence)\b/
    );
    expect(combined).not.toContain("as much as part of the occult");
  });

  it("preserves meaningful headings extracted from legacy HTML", async () => {
    const tamersOfFire = await loadLegacyDetailById("tamers_of_fire");

    expect(tamersOfFire.historySocietyCulture).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          type: "heading",
          level: 3,
          text: "Flaws and Characters",
        }),
      ])
    );
  });
});
