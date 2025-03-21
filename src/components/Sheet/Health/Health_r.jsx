import React, { useState, useEffect } from "react";
import { sheetData } from "../00_SheetData";

// Ensure damage exists in sheetData
if (!sheetData.derived_stats.damage) {
    sheetData.derived_stats.damage = Array(sheetData.derived_stats.size + sheetData.attributes.physical.stamina.base + sheetData.attributes.physical.stamina.modifier).fill("none");
}
if (!sheetData.derived_stats.resistant_damage) {
    sheetData.derived_stats.resistant_damage = Array(sheetData.derived_stats.size + sheetData.attributes.physical.stamina.base + sheetData.attributes.physical.stamina.modifier).fill(false);
}

export const HealthTracker = () => {
    const stamina = sheetData.attributes.physical.stamina.base + sheetData.attributes.physical.stamina.modifier;
    const size = sheetData.derived_stats.size;
    const maxHealth = stamina + size;

    const [damage, setDamage] = useState([...sheetData.derived_stats.damage]);
    const [resistantDamage, setResistantDamage] = useState([...sheetData.derived_stats.resistant_damage]);

    useEffect(() => {
        // Adjust damage and resistant_damage arrays while preserving existing values
        setDamage(prevDamage => {
            const trimmedDamage = prevDamage.slice(0, maxHealth);
            const newDamage = trimmedDamage.concat(
                Array(Math.max(0, maxHealth - trimmedDamage.length)).fill("none")
            );
            sheetData.derived_stats.damage = newDamage;
            return newDamage;
        });
        setResistantDamage(prevResistantDamage => {
            const trimmedResistantDamage = prevResistantDamage.slice(0, maxHealth);
            const newResistantDamage = trimmedResistantDamage.concat(
                Array(Math.max(0, maxHealth - trimmedResistantDamage.length)).fill(false)
            );
            sheetData.derived_stats.resistant_damage = newResistantDamage;
            return newResistantDamage;
        });
    }, [maxHealth]);

    const cycleDamage = (index) => {
        setDamage(prevDamage => {
            const newDamage = [...prevDamage];
            const currentState = newDamage[index];
            
            if (currentState === "none") {
                newDamage[index] = "bashing";
            } else if (currentState === "bashing") {
                newDamage[index] = "lethal";
            } else if (currentState === "lethal") {
                newDamage[index] = "aggravated";
            } else {
                newDamage[index] = "none";
            }
            sheetData.derived_stats.damage = newDamage;
            return newDamage;
        });
    };

    const toggleResistandDamage = (index) => {
        setResistantDamage(prevResistantDamage => {
            const newResistantDamage = [...prevResistantDamage];
            newResistantDamage[index] = !newResistantDamage[index];
            sheetData.derived_stats.resistant_damage = newResistantDamage;
            return newResistantDamage;
        });
    };

    return (
        <div className="health-container flex flex-col items-center justify-center gap-4">
            <h3 className="text-xs uppercase">Health</h3>
            <div className="grid grid-cols-5 gap-4">
                {Array.from({ length: maxHealth }).map((_, i) => {
                    let className = "health-box relative flex h-[2rem] w-[2rem] cursor-pointer items-center justify-center rounded-lg border-2 border-solid border-red-500/60 transition-all duration-300 hover:border-red-500 hover:text-red-500";
                    let resistantClass = resistantDamage[i] ? "text-red-500 font-bold" : "text-gray-600";
                    
                    return (
                        <div key={i} className="relative flex items-center">
                            <div className={className} onClick={() => cycleDamage(i)}>
                                <svg className={`duration-400 absolute h-[4px] w-[80%] rounded-full transition-opacity rotate-[-60deg] ${damage[i] !== "none" ? "opacity-100" : "opacity-0"}`} viewBox="0 0 100 1" preserveAspectRatio="none"><rect x="0" y="0" width="100" height="2" className="fill-current"></rect></svg>
                                <svg className={`duration-400 absolute h-[4px] w-[80%] rounded-full transition-opacity rotate-[60deg] ${damage[i] === "lethal" || damage[i] === "aggravated" ? "opacity-100" : "opacity-0"}`} viewBox="0 0 100 1" preserveAspectRatio="none"><rect x="0" y="0" width="100" height="2" className="fill-current"></rect></svg>
                                <svg className={`duration-400 absolute h-[4px] w-[80%] rounded-full transition-opacity ${damage[i] === "aggravated" ? "opacity-100" : "opacity-0"}`} viewBox="0 0 100 1" preserveAspectRatio="none"><rect x="0" y="0" width="100" height="2" className="fill-current"></rect></svg>
                            </div>
                            <span className={`absolute bottom-3 left-8 text-s cursor-pointer transition-colors ${resistantClass}`} onClick={() => toggleResistandDamage(i)}>R</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
