import React, { useEffect } from "react";
import { ModifierControl } from "../Common/40_ModifierControl";
import CategoryContainer from "../Common/17_CategoryContainer";
import { useSheetData } from "../05_SheetDataContext";
import { updateValueAtPath } from "../sheetStateUtils";
import { getActiveWerewolfStats, getWerewolfFormStats } from "../sheetWerewolfForms";

const initializeArray = (arr, length, defaultValue) => {
    return arr.slice(0, length).concat(Array(Math.max(0, length - arr.length)).fill(defaultValue));
};

export const HealthTracker = () => {
    const { sheetData, setSheetData } = useSheetData();
    const healthMod = sheetData.derived_stats.health_mod || 0;
    const formStats = getActiveWerewolfStats(sheetData);

    const getMaxHealth = () => {
        return sheetData.attributes.physical.stamina.base +
            sheetData.attributes.physical.stamina.modifier +
            sheetData.derived_stats.size +
            healthMod;
    };

    const maxHealth = formStats?.health ?? Math.max(0, getMaxHealth());
    const formHealthBonus = formStats ? formStats.health - getWerewolfFormStats(sheetData, "hishu").health : 0;
    // Shrinking Health must never silently discard a recorded wound or a
    // resistant-damage mark. Keep overflow visible for the player to resolve.
    const lastMarkedBox = Math.max(
        (sheetData.derived_stats.damage || []).reduce((last, wound, index) => wound !== "none" ? index : last, -1),
        (sheetData.derived_stats.resistant_damage || []).reduce((last, marked, index) => marked ? index : last, -1)
    );
    const trackLength = Math.max(maxHealth, lastMarkedBox + 1);
    const damage = initializeArray(sheetData.derived_stats.damage || [], trackLength, "none");
    const resistantDamage = initializeArray(
        sheetData.derived_stats.resistant_damage || [],
        trackLength,
        false
    );

    useEffect(() => {
        setSheetData((prev) => {
            const currentDamage = prev.derived_stats.damage || [];
            const currentResistantDamage = prev.derived_stats.resistant_damage || [];
            if (currentDamage.length === trackLength && currentResistantDamage.length === trackLength) {
                return prev;
            }

            let updatedSheetData = updateValueAtPath(
                prev,
                ["derived_stats", "damage"],
                initializeArray(currentDamage, trackLength, "none")
            );
            updatedSheetData = updateValueAtPath(
                updatedSheetData,
                ["derived_stats", "resistant_damage"],
                initializeArray(currentResistantDamage, trackLength, false)
            );
            return updatedSheetData;
        });
    }, [trackLength, setSheetData]);

    const DAMAGE_ORDER = ["none", "bashing", "lethal", "aggravated"];

    const cycleDamage = (index) => {
        setSheetData((prev) => updateValueAtPath(prev, ["derived_stats", "damage"], (items = []) => {
            const newDamage = initializeArray(items, trackLength, "none");
            const currentLevelIndex = DAMAGE_ORDER.indexOf(newDamage[index]);
            const nextLevelIndex = (currentLevelIndex + 1) % DAMAGE_ORDER.length;
            const nextLevel = DAMAGE_ORDER[nextLevelIndex];

            newDamage[index] = nextLevel;

            for (let i = 0; i < index; i++) {
                const level = DAMAGE_ORDER.indexOf(newDamage[i]);
                if (level < nextLevelIndex) {
                    newDamage[i] = nextLevel;
                }
            }

            for (let i = index + 1; i < newDamage.length; i++) {
                const level = DAMAGE_ORDER.indexOf(newDamage[i]);
                if (level > nextLevelIndex) {
                    newDamage[i] = nextLevel;
                }
            }

            return newDamage;
        }));
    };

    const toggleResistantDamage = (index) => {
        setSheetData((prev) => updateValueAtPath(
            prev,
            ["derived_stats", "resistant_damage"],
            (items = []) => {
            const newResistantDamage = initializeArray(items, trackLength, false);
            newResistantDamage[index] = !newResistantDamage[index];

            return newResistantDamage;
        }));
    };

    const handleHealthModChange = (value) => {
        setSheetData((prev) => updateValueAtPath(
            prev,
            ["derived_stats", "health_mod"],
            (currentValue = 0) => currentValue + value
        ));
    };

    return (
        <CategoryContainer section="HEALTH" paddingOverride="w-full p-4 sm:p-5" fillHeight>
          <div className="flex w-full min-w-0 flex-col gap-3">
            {formHealthBonus > 0 && <span className="self-start rounded-full bg-indigo-50 px-2 py-0.5 text-xs font-medium text-indigo-700">Form +{formHealthBonus}</span>}
                <div className="grid grid-cols-[repeat(5,2rem)] gap-x-3 gap-y-2">
                    {Array.from({ length: trackLength }).map((_, i) => (
                        <div key={i} className="flex flex-col items-center gap-1">
                            <button
                                type="button"
                                aria-label={`${i >= maxHealth ? "Overflow damage" : "Health"} box ${i + 1}: ${damage[i]}`}
                                title={`Box ${i + 1}: ${damage[i]}`}
                                className={`health-box relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg border-2 text-rose-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 ${i >= maxHealth ? "bg-amber-50" : damage[i] !== "none" ? "bg-rose-50" : "bg-white"} ${i >= maxHealth
                                    ? "border-amber-500 bg-amber-50 text-amber-800"
                                    : i >= maxHealth - formHealthBonus
                                    ? "border-indigo-500 hover:border-indigo-600"
                                    : i >= maxHealth - formHealthBonus - healthMod
                                    ? "border-green-400 hover:border-green-500 hover:text-green-500"
                                    : "border-red-500/60 hover:border-red-500 hover:text-red-500"
                                    }`}
                                onClick={() => cycleDamage(i)}
                            >
                                <svg className={`absolute h-[4px] w-[80%] rotate-[-60deg] rounded-full ${damage[i] !== "none" ? "opacity-100" : "opacity-0"}`} viewBox="0 0 100 1" preserveAspectRatio="none"><rect width="100" height="2" className="fill-current" /></svg>
                                <svg className={`absolute h-[4px] w-[80%] rotate-[60deg] rounded-full ${damage[i] === "lethal" || damage[i] === "aggravated" ? "opacity-100" : "opacity-0"}`} viewBox="0 0 100 1" preserveAspectRatio="none"><rect width="100" height="2" className="fill-current" /></svg>
                                <svg className={`absolute h-[4px] w-[80%] rounded-full ${damage[i] === "aggravated" ? "opacity-100" : "opacity-0"}`} viewBox="0 0 100 1" preserveAspectRatio="none"><rect width="100" height="2" className="fill-current" /></svg>
                            </button>
                            <button
                                type="button"
                                aria-label={`Resistant damage box ${i + 1}`}
                                aria-pressed={resistantDamage[i]}
                                title="Toggle resistant damage"
                                className="flex h-4 w-6 items-center justify-center rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400"
                                onClick={() => toggleResistantDamage(i)}
                            ><span className={`h-2 w-2 rounded-full border border-gray-500 ${resistantDamage[i] ? "bg-gray-700" : "bg-white"}`} /></button>
                        </div>
                    ))}
                </div>
            <div className="mt-auto flex min-h-12 items-center justify-between gap-3 border-t border-gray-100 pt-3">
              <span className="text-xs text-gray-500">Health modifier</span>
              <ModifierControl modifier={healthMod} onChange={handleHealthModChange} />
            </div>
            {trackLength > maxHealth && <p role="status" className="m-0 rounded bg-amber-50 p-2 text-xs text-amber-900">{trackLength - maxHealth} {trackLength - maxHealth === 1 ? "box" : "boxes"} beyond current Health.</p>}
          </div>
        </CategoryContainer>
    );
};
