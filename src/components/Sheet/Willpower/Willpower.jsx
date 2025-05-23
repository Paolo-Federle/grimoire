import React, { useState, useEffect } from "react";
import { ModifierControl } from "../Common/40_ModifierControl";
import { useSheetData } from "../05_SheetDataContext";

const initializeArray = (arr, length, defaultValue) => {
    return arr.slice(0, length).concat(Array(Math.max(0, length - arr.length)).fill(defaultValue));
};

export const WillpowerTracker = () => {
    const { sheetData, setSheetData } = useSheetData();

    const getMaxWillpower = () => {
        return sheetData.attributes.mental.resolve.base +
            sheetData.attributes.mental.resolve.modifier +
            sheetData.attributes.social.composure.base +
            sheetData.attributes.social.composure.modifier +
            sheetData.derived_stats.willpower_mod;
    };

    const [willpowerMod, setWillpowerMod] = useState(sheetData.derived_stats.willpower_mod || 0);
    const maxWillpower = getMaxWillpower();
    const [willpower, setWillpower] = useState(initializeArray(sheetData.derived_stats.willpower || [], maxWillpower, "filled"));

    useEffect(() => {
        setWillpower(prev => initializeArray(prev, maxWillpower, "filled"));

        setSheetData(prev => {
            const updated = { ...prev };
            updated.derived_stats.willpower = willpower;
            updated.derived_stats.willpower_mod = willpowerMod;
            return updated;
        });
    }, [maxWillpower, willpowerMod]);

    const WILLPOWER_ORDER = ["filled", "empty", "crossed"];

    const cycleWillpower = (index, reverse = false) => {
        setWillpower(prev => {
            const newWillpower = [...prev];

            const currentLevel = WILLPOWER_ORDER.indexOf(prev[index]);
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

            setSheetData(prev => {
                const updated = { ...prev };
                updated.derived_stats.willpower = newWillpower;
                return updated;
            });

            return newWillpower;
        });
    };

    const handleWillpowerModChange = (value) => {
        setWillpowerMod(prev => prev + value);
    };

    return (
        <div className="w-full">
            <h1 className="text-l font-bold capitalize my-2 text-center">WILLPOWER</h1>
            <div className="flex justify-center items-center gap-4">
                <div className="grid grid-cols-5 gap-2">
                    {Array.from({ length: maxWillpower }).map((_, i) => (
                        <div key={i} className="relative flex items-center">
                            <div
                                className={`willpower-box relative flex h-[22px] w-[24px] cursor-pointer items-center justify-center rounded-full border-2 transition-all duration-300 ${i >= maxWillpower - willpowerMod ? 'border-green-400' : 'border-blue-500'}`}
                                onMouseDown={(e) => {
                                    e.preventDefault();
                                    if (e.button === 2) cycleWillpower(i, true);
                                    else cycleWillpower(i, false);
                                }}
                                onContextMenu={(e) => e.preventDefault()}
                            >
                                <div className={`h-[22px] w-[22px] rounded-full transition-opacity ${i >= maxWillpower - willpowerMod ? (willpower[i] === "filled" ? "bg-green-400" : "bg-transparent") : (willpower[i] === "filled" ? "bg-blue-500" : "bg-transparent")}`} />
                                {willpower[i] === "crossed" && (
                                    <svg className={`absolute h-[28px] w-[28px] ${i >= maxWillpower - willpowerMod ? 'text-green-500' : 'text-blue-600'}`} viewBox="0 0 24 24">
                                        <line x1="3" y1="3" x2="21" y2="21" stroke="currentColor" strokeWidth="3" />
                                        <line x1="21" y1="3" x2="3" y2="21" stroke="currentColor" strokeWidth="3" />
                                    </svg>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                <ModifierControl modifier={willpowerMod} onChange={handleWillpowerModChange} />
            </div>
        </div>
    );
};
