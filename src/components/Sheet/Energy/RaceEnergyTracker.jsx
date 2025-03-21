import React, { useState, useEffect } from "react";
import { sheetData } from "../00_SheetData";

const initializeDots = (length, filledCount) => {
    return Array.from({ length }, (_, i) => i < filledCount);
};

const getEnergyColor = (race) => {
    const raceColors = {
        mage: "bg-cyan-500 border-cyan-500",
        vampire: "bg-rose-600 border-rose-600",
        werewolf: "bg-violet-500 border-violet-500",
        changeling: "bg-pink-500 border-pink-500",
        geist: "bg-gray-500 border-gray-500",
        mummy: "bg-yellow-500 border-yellow-500",
        promethean: "bg-yellow-500 border-yellow-500"
    };
    return raceColors[race] || "bg-blue-500 border-blue-500";
};

export const RaceEnergyTracker = () => {
    const selectedRace = sheetData.character.race.selected;
    const energyPoolName = sheetData.race_traits.race_specific_names[selectedRace]?.energy_pool;
    const maxEnergy = sheetData.race_traits.energy_pool.max;
    const [energyPool, setEnergyPool] = useState(initializeDots(maxEnergy, sheetData.race_traits.energy_pool.current));
    const energyColor = getEnergyColor(selectedRace);

    useEffect(() => {
        setEnergyPool(initializeDots(maxEnergy, sheetData.race_traits.energy_pool.current));
        sheetData.race_traits.energy_pool.current = energyPool.filter(dot => dot).length;
    }, [maxEnergy]);

    const setEnergyLevel = (index) => {
        setEnergyPool(prev => {
            const newEnergyPool = prev.map((_, i) => i <= index);
            sheetData.race_traits.energy_pool.current = newEnergyPool.filter(dot => dot).length;
            return newEnergyPool;
        });
    };

    return (
        <div className={`w-full ${energyPoolName ? "visible" : "invisible"}`}>
            {energyPoolName && (
                <>
                    <h1 className="text-l font-bold capitalize my-2 text-center">{energyPoolName}</h1>
                    <div className="flex justify-center items-center gap-4">
                        <div className="grid grid-cols-10 gap-2">
                            {energyPool.map((filled, i) => (
                                <div key={i} className="relative flex items-center">
                                    <div
                                        className={`energy-box flex h-[24px] w-[24px] cursor-pointer items-center justify-center rounded-md border-2 transition-all duration-300 ${filled ? energyColor : "border-gray-400 bg-transparent"}`}
                                        onClick={() => setEnergyLevel(i)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <p className="text-center mt-2">Per Turn: {sheetData.race_traits.energy_pool.per_turn}</p>
                </>
            )}
        </div>
    );
};
