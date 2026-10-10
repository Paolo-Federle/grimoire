import React, { useEffect } from "react";
import { ModifierControl } from "../Common/40_ModifierControl";
import CategoryContainer from "../Common/17_CategoryContainer";
import { useSheetData } from "../05_SheetDataContext";
import { updateValueAtPath } from "../sheetStateUtils";

const initializeArray = (arr, length, defaultValue) => {
    return arr.slice(0, length).concat(Array(Math.max(0, length - arr.length)).fill(defaultValue));
};

export const WillpowerTracker = () => {
    const { sheetData, setSheetData } = useSheetData();
    const willpowerMod = sheetData.derived_stats.willpower_mod || 0;

    const getMaxWillpower = () => {
        return sheetData.attributes.mental.resolve.base +
            sheetData.attributes.mental.resolve.modifier +
            sheetData.attributes.social.composure.base +
            sheetData.attributes.social.composure.modifier +
            willpowerMod;
    };

    const maxWillpower = Math.max(0, getMaxWillpower());
    const willpower = initializeArray(
        sheetData.derived_stats.willpower || [],
        maxWillpower,
        "filled"
    );

    useEffect(() => {
        setSheetData((prev) => {
            const currentWillpower = prev.derived_stats.willpower || [];
            if (currentWillpower.length === maxWillpower) {
                return prev;
            }

            return updateValueAtPath(
                prev,
                ["derived_stats", "willpower"],
                initializeArray(currentWillpower, maxWillpower, "filled")
            );
        });
    }, [maxWillpower, setSheetData]);

    const WILLPOWER_ORDER = ["filled", "empty", "crossed"];

    const cycleWillpower = (index, reverse = false) => {
        setSheetData((prev) => updateValueAtPath(
            prev,
            ["derived_stats", "willpower"],
            (items = []) => {
            const newWillpower = initializeArray(items, maxWillpower, "filled");

            const currentLevel = WILLPOWER_ORDER.indexOf(newWillpower[index]);
            const nextLevel = reverse
                ? (currentLevel - 1 + WILLPOWER_ORDER.length) % WILLPOWER_ORDER.length
                : (currentLevel + 1) % WILLPOWER_ORDER.length;

            const newValue = WILLPOWER_ORDER[nextLevel];
            newWillpower[index] = newValue;

            for (let i = index + 1; i < newWillpower.length; i++) {
                const level = WILLPOWER_ORDER.indexOf(newWillpower[i]);
                if (level < nextLevel) {
                    newWillpower[i] = newValue;
                }
            }

            for (let i = 0; i < index; i++) {
                const level = WILLPOWER_ORDER.indexOf(newWillpower[i]);
                if (level > nextLevel) {
                    newWillpower[i] = newValue;
                }
            }

            return newWillpower;
        }));
    };

    const handleWillpowerModChange = (value) => {
        setSheetData((prev) => updateValueAtPath(
            prev,
            ["derived_stats", "willpower_mod"],
            (currentValue = 0) => currentValue + value
        ));
    };

    return (
        <CategoryContainer section="WILLPOWER" paddingOverride="w-full p-4 sm:p-5" fillHeight>
            <div className="flex w-full min-w-0 flex-col gap-3">
                <div className="grid grid-cols-[repeat(5,2rem)] gap-3">
                    {Array.from({ length: maxWillpower }).map((_, i) => (
                        <div key={i} className="relative flex items-center">
                            <button
                                type="button"
                                aria-label={`Willpower box ${i + 1}: ${willpower[i]}`}
                                title={`Point ${i + 1}: ${willpower[i]}`}
                                className={`willpower-box relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ${i >= maxWillpower - willpowerMod ? 'border-green-400' : 'border-blue-500'}`}
                                onClick={() => cycleWillpower(i)}
                                onContextMenu={(e) => { e.preventDefault(); cycleWillpower(i, true); }}
                            >
                                <span className={`absolute inset-0 rounded-full ${i >= maxWillpower - willpowerMod ? (willpower[i] === "filled" ? "bg-green-400" : "bg-transparent") : (willpower[i] === "filled" ? "bg-blue-500" : "bg-transparent")}`} />
                                {willpower[i] === "crossed" && (
                                    <svg className={`absolute h-[28px] w-[28px] ${i >= maxWillpower - willpowerMod ? 'text-green-500' : 'text-blue-600'}`} viewBox="0 0 24 24">
                                        <line x1="3" y1="3" x2="21" y2="21" stroke="currentColor" strokeWidth="3" />
                                        <line x1="21" y1="3" x2="3" y2="21" stroke="currentColor" strokeWidth="3" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    ))}
                </div>
                <div className="mt-auto flex min-h-12 items-center justify-between gap-3 border-t border-gray-100 pt-3">
                    <span className="text-xs text-gray-500">Willpower modifier</span>
                    <ModifierControl modifier={willpowerMod} onChange={handleWillpowerModChange} />
                </div>
            </div>
        </CategoryContainer>
    );
};
