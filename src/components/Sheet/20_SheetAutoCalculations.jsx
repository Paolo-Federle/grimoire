import { useEffect } from "react";
import { useSheetData } from "./05_SheetDataContext";
import { updateValueAtPath } from "./sheetStateUtils";
import {
  getMageResourceStats,
  getVampireResourceStats,
} from "./sheetLookupData";

export default function SheetAutoCalculations() {
  const { sheetData, setSheetData } = useSheetData();

  const size = Number(sheetData.derived_stats.size) || 0;
  const strength =
    (sheetData.attributes.physical.strength.base || 0) +
    (sheetData.attributes.physical.strength.modifier || 0);
  const dexterity =
    (sheetData.attributes.physical.dexterity.base || 0) +
    (sheetData.attributes.physical.dexterity.modifier || 0);
  const wits =
    (sheetData.attributes.mental.wits.base || 0) +
    (sheetData.attributes.mental.wits.modifier || 0);
  const composure =
    (sheetData.attributes.social.composure.base || 0) +
    (sheetData.attributes.social.composure.modifier || 0);
  const selectedRace = sheetData.character.race.selected || "";
  const powerTrait = sheetData.race_traits.energy_strength.value;

  useEffect(() => {
    const nextSpeedBase = strength + dexterity + size;
    const nextDefenseBase = Math.min(dexterity, wits);
    const nextInitiativeBase = dexterity + composure;
    const mageResourceStats = getMageResourceStats(powerTrait);
    const vampireResourceStats = getVampireResourceStats(powerTrait);
    const nextResourceStats =
      selectedRace === "mage"
        ? mageResourceStats
        : selectedRace === "vampire"
          ? vampireResourceStats
          : null;
    const nextPerTurn = nextResourceStats?.perTurn ?? sheetData.race_traits.energy_pool.per_turn;
    const nextEnergyMax = nextResourceStats?.max ?? sheetData.race_traits.energy_pool.max;

    setSheetData((prev) => {
      const currentSpeedBase = prev.derived_stats.speed.base;
      const currentDefenseBase = prev.derived_stats.defense.base;
      const currentInitiativeBase = prev.derived_stats.initiative.base;
      const currentPerTurn = prev.race_traits.energy_pool.per_turn;
      const currentEnergyMax = prev.race_traits.energy_pool.max;
      const currentEnergyCurrent = prev.race_traits.energy_pool.current;

      if (
        currentSpeedBase === nextSpeedBase &&
        currentDefenseBase === nextDefenseBase &&
        currentInitiativeBase === nextInitiativeBase &&
        currentPerTurn === nextPerTurn &&
        currentEnergyMax === nextEnergyMax &&
        currentEnergyCurrent <= nextEnergyMax
      ) {
        return prev;
      }

      let updatedSheetData = prev;

      if (currentSpeedBase !== nextSpeedBase) {
        updatedSheetData = updateValueAtPath(
          updatedSheetData,
          ["derived_stats", "speed", "base"],
          nextSpeedBase
        );
      }

      if (currentDefenseBase !== nextDefenseBase) {
        updatedSheetData = updateValueAtPath(
          updatedSheetData,
          ["derived_stats", "defense", "base"],
          nextDefenseBase
        );
      }

      if (currentInitiativeBase !== nextInitiativeBase) {
        updatedSheetData = updateValueAtPath(
          updatedSheetData,
          ["derived_stats", "initiative", "base"],
          nextInitiativeBase
        );
      }

      if (currentPerTurn !== nextPerTurn) {
        updatedSheetData = updateValueAtPath(
          updatedSheetData,
          ["race_traits", "energy_pool", "per_turn"],
          nextPerTurn
        );
      }

      if (currentEnergyMax !== nextEnergyMax) {
        updatedSheetData = updateValueAtPath(
          updatedSheetData,
          ["race_traits", "energy_pool", "max"],
          nextEnergyMax
        );
      }

      if (currentEnergyCurrent > nextEnergyMax) {
        updatedSheetData = updateValueAtPath(
          updatedSheetData,
          ["race_traits", "energy_pool", "current"],
          nextEnergyMax
        );
      }

      return updatedSheetData;
    });
  }, [
    composure,
    dexterity,
    powerTrait,
    selectedRace,
    setSheetData,
    sheetData.race_traits.energy_pool.max,
    sheetData.race_traits.energy_pool.per_turn,
    size,
    strength,
    wits,
  ]);

  return null;
}
