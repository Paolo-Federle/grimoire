import { useState, useRef } from "react";
import { sheetData } from "../00_SheetData";
import { DotMarkers } from "../Common/40_DotMarkers"
import { CustomDrawer } from "../Common/40_CustomDrawer"
import TitleDots from "../Common/35_TitleDots";

export const SkillsRow = ({ name, category, max, min }) => {
  const [value, setValue] = useState(sheetData.skills[category][name].base);
  const [modifier, setModifier] = useState(sheetData.skills[category][name].modifier);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const rowRef = useRef(null);


  const handleChange = (newValue) => {
    sheetData.skills[category][name].base = newValue;
    setValue(newValue);
  };

  const handleModifierChange = (newModifier) => {
    sheetData.skills[category][name].modifier = newModifier;
    setModifier(newModifier);
  };

  return (
    <div ref={rowRef} className="relative flex items-center justify-between w-full">
      <TitleDots
        name={name}
        min={min}
        max={max}
        value={value}
        modifier={modifier}
        onChange={handleChange}
        onOpenDrawer={() => setDrawerOpen(true)}
      />
      <CustomDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} rowRef={rowRef}>
        <span className="text-sm font-bold">Mod:</span>
        <input
          type="number"
          value={modifier}
          onChange={(e) => handleModifierChange(parseInt(e.target.value, 10) || 0)}
          className="w-16 p-1 border rounded text-center"
        />
      </CustomDrawer>
    </div>
  );
};