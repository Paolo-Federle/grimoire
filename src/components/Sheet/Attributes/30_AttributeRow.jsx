import { useState, useEffect } from "react";
import TitleDots from "../Common/35_TitleDots";
import { ModifierControl } from "../Common/40_ModifierControl";
import { useSheetData } from "../05_SheetDataContext";

export const AttributeRow = ({ name, category, max, min }) => {
  const { sheetData, setSheetData } = useSheetData();
  const [value, setValue] = useState(sheetData.attributes[category][name].base);
  const [modifier, setModifier] = useState(sheetData.attributes[category][name].modifier);

  useEffect(() => {
    setSheetData((prev) => {
      const updated = { ...prev };
      updated.attributes[category][name].base = value;
      return updated;
    });
  }, [value]);

  useEffect(() => {
    setSheetData((prev) => {
      const updated = { ...prev };
      updated.attributes[category][name].modifier = modifier;
      return updated;
    });
  }, [modifier]);

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
