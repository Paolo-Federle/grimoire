import React, { useState, useEffect } from "react";
import { sheetData } from "../00_SheetData";
import { ModifierControl } from "../Common/40_ModifierControl";

const getMaxHealth = () => {
    return sheetData.attributes.physical.stamina.base + sheetData.attributes.physical.stamina.modifier + sheetData.derived_stats.size + sheetData.derived_stats.health_mod;
};

const initializeArray = (arr, length, defaultValue) => {
    return arr.slice(0, length).concat(Array(Math.max(0, length - arr.length)).fill(defaultValue));
};

export const HealthTracker = () => {
    const [healthMod, setHealthMod] = useState(sheetData.derived_stats.health_mod || 0);
    const maxHealth = getMaxHealth();
    const [damage, setDamage] = useState(initializeArray(sheetData.derived_stats.damage || [], maxHealth, "none"));
    const [resistantDamage, setResistantDamage] = useState(initializeArray(sheetData.derived_stats.resistant_damage || [], maxHealth, false));

    useEffect(() => {
        setDamage(prev => initializeArray(prev, maxHealth, "none"));
        setResistantDamage(prev => initializeArray(prev, maxHealth, false));
        sheetData.derived_stats.damage = damage;
        sheetData.derived_stats.resistant_damage = resistantDamage;
        sheetData.derived_stats.health_mod = healthMod;
    }, [maxHealth, healthMod]);

    const DAMAGE_ORDER = ["none", "bashing", "lethal", "aggravated"];

    const cycleDamage = (index) => {
        setDamage(prev => {
            const newDamage = [...prev];
            const currentLevelIndex = DAMAGE_ORDER.indexOf(prev[index]);
            const nextLevelIndex = (currentLevelIndex + 1) % DAMAGE_ORDER.length;
            const nextLevel = DAMAGE_ORDER[nextLevelIndex];

            // Update the clicked box
            newDamage[index] = nextLevel;

            // Cascade to the left: upgrade if lower
            for (let i = 0; i < index; i++) {
                const level = DAMAGE_ORDER.indexOf(newDamage[i]);
                if (level < nextLevelIndex) {
                    newDamage[i] = nextLevel;
                }
            }

            // Constrain to the right: downgrade if higher
            for (let i = index + 1; i < newDamage.length; i++) {
                const level = DAMAGE_ORDER.indexOf(newDamage[i]);
                if (level > nextLevelIndex) {
                    newDamage[i] = nextLevel;
                }
            }

            sheetData.derived_stats.damage = newDamage;
            return newDamage;
        });
    };


    const toggleResistantDamage = (index) => {
        setResistantDamage(prev => {
            const newResistantDamage = [...prev];
            newResistantDamage[index] = !newResistantDamage[index];
            sheetData.derived_stats.resistant_damage = newResistantDamage;
            return newResistantDamage;
        });
    };

    const handleHealthModChange = (value) => {
        setHealthMod(prev => prev + value);
    };

    return (
        <div className="w-full">
            <h1 className="text-l font-bold capitalize my-2 text-center">HEALTH</h1>
            <div className="flex justify-center items-center gap-4">
                <div className="grid grid-cols-5 gap-3">
                    {Array.from({ length: maxHealth }).map((_, i) => (
                        <div key={i} className="relative flex items-center">
                            <div className={`health-box relative flex h-[24px] w-[24px] cursor-pointer items-center justify-center rounded-lg border-2 transition-all duration-300 ${i >= maxHealth - healthMod ? 'border-green-400 hover:border-green-500 hover:text-green-500' : 'border-red-500/60 hover:border-red-500 hover:text-red-500'}`} onClick={() => cycleDamage(i)}>
                                <svg className={`duration-400 absolute h-[4px] w-[80%] rounded-full transition-opacity rotate-[-60deg] ${damage[i] !== "none" ? "opacity-100" : "opacity-0"}`} viewBox="0 0 100 1" preserveAspectRatio="none"><rect width="100" height="2" className="fill-current" /></svg>
                                <svg className={`duration-400 absolute h-[4px] w-[80%] rounded-full transition-opacity rotate-[60deg] ${damage[i] === "lethal" || damage[i] === "aggravated" ? "opacity-100" : "opacity-0"}`} viewBox="0 0 100 1" preserveAspectRatio="none"><rect width="100" height="2" className="fill-current" /></svg>
                                <svg className={`duration-400 absolute h-[4px] w-[80%] rounded-full transition-opacity ${damage[i] === "aggravated" ? "opacity-100" : "opacity-0"}`} viewBox="0 0 100 1" preserveAspectRatio="none"><rect width="100" height="2" className="fill-current" /></svg>
                            </div>
                            <div className="absolute bottom-5 left-6 h-2 w-2 rounded-full border border-solid border-gray-600 cursor-pointer transition-all duration-200" style={{ backgroundColor: resistantDamage[i] ? "black" : "transparent" }} onClick={() => toggleResistantDamage(i)}></div>
                        </div>
                    ))}
                </div>
                <ModifierControl modifier={healthMod} onChange={handleHealthModChange} />
            </div>
        </div>
    );
};
