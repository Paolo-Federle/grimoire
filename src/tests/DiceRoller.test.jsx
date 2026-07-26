import { describe, expect, it } from "vitest";
import { sheetData } from "../components/Sheet/00_SheetData";
import {
  buildSheetTraits,
  rollDicePool,
} from "../components/Sheet/Dice/DiceRoller";

const randomSequence = (...dice) => {
  let index = 0;
  return () => ((dice[index++] || 1) - 1) / 10;
};

describe("World of Darkness 1E dice roller", () => {
  it("counts successes and applies 10-again", () => {
    const result = rollDicePool(3, 10, false, randomSequence(8, 10, 4, 9));

    expect(result.dice).toEqual([8, 10, 4, 9]);
    expect(result.successes).toBe(3);
    expect(result.chance).toBe(false);
  });

  it("marks a one on a chance die as a dramatic failure", () => {
    const result = rollDicePool(0, 10, false, randomSequence(1));

    expect(result.successes).toBe(0);
    expect(result.chance).toBe(true);
    expect(result.dramaticFailure).toBe(true);
  });

  it("rerolls initial failed dice for a rote action", () => {
    const result = rollDicePool(2, 10, true, randomSequence(2, 8, 9));

    expect(result.dice).toEqual([2, 8, 9]);
    expect(result.successes).toBe(2);
  });

  it("exposes mundane, supernatural and advantage traits from the sheet", () => {
    const mage = {
      ...sheetData,
      character: {
        ...sheetData.character,
        race: { selected: "mage" },
      },
      race_traits: {
        ...sheetData.race_traits,
        energy_strength: { value: 3 },
      },
      race_powers: {
        ...sheetData.race_powers,
        mage: {
          arcana: {
            ...sheetData.race_powers.mage.arcana,
            forces: 4,
          },
        },
      },
    };

    const traits = buildSheetTraits(mage);

    expect(traits.find((trait) => trait.id === "attributes.mental.intelligence")?.value).toBe(1);
    expect(traits.find((trait) => trait.id === "race.power")).toMatchObject({
      label: "Gnosis",
      value: 3,
    });
    expect(traits.find((trait) => trait.id === "arcana.forces")?.value).toBe(4);
    expect(
      traits.filter((trait) => trait.value !== 0).some((trait) => trait.id === "arcana.spirit")
    ).toBe(false);
    expect(traits.find((trait) => trait.id === "morality.score")?.label).toBe("Wisdom");
  });

  it("only exposes supernatural traits belonging to the selected race", () => {
    const werewolf = {
      ...sheetData,
      character: {
        ...sheetData.character,
        race: { selected: "werewolf" },
      },
    };

    const traits = buildSheetTraits(werewolf);

    expect(traits.some((trait) => trait.id.startsWith("renown."))).toBe(true);
    expect(traits.some((trait) => trait.id.startsWith("arcana."))).toBe(false);
    expect(traits.some((trait) => trait.id.startsWith("pillars."))).toBe(false);
  });
});
