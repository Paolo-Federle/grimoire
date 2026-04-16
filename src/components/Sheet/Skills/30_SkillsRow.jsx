import { useState, useEffect } from "react";
import TitleDots from "../Common/35_TitleDots";
import { ModifierControl } from "../Common/40_ModifierControl";
import { useSheetData } from "../05_SheetDataContext";
import { updateValueAtPath } from "../sheetStateUtils";

export const SkillsRow = ({ name, category, max, min }) => {
  const { sheetData, setSheetData } = useSheetData();
  const [value, setValue] = useState(sheetData.skills[category][name].base);
  const [modifier, setModifier] = useState(sheetData.skills[category][name].modifier);

  useEffect(() => {
    setSheetData((prev) =>
      updateValueAtPath(prev, ["skills", category, name, "base"], value)
    );
  }, [category, name, setSheetData, value]);

  useEffect(() => {
    setSheetData((prev) =>
      updateValueAtPath(prev, ["skills", category, name, "modifier"], modifier)
    );
  }, [category, modifier, name, setSheetData]);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const handleModifierChange = (delta) => {
    setModifier((prev) => prev + delta);
  };

  return (
    <div className="flex items-center gap-3">
      <TitleDots
        name={name}
        min={min}
        max={max}
        value={value}
        modifier={modifier}
        onChange={handleChange}
      />
      <ModifierControl modifier={modifier} onChange={handleModifierChange} />
    </div>
  );
};
