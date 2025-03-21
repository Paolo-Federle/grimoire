import { useState } from "react";
import { sheetData } from "../00_SheetData";
import TitleDots from "../Common/35_TitleDots";
import { ModifierControl } from "../Common/40_ModifierControl";

export const AttributeRow = ({ name, category, max, min }) => {
  const [value, setValue] = useState(sheetData.attributes[category][name].base);
  const [modifier, setModifier] = useState(sheetData.attributes[category][name].modifier);

  const handleChange = (newValue) => {
    sheetData.attributes[category][name].base = newValue;
    setValue(newValue);
  };

  const handleModifierChange = (delta) => {
    const newModifier = modifier + delta;
    sheetData.attributes[category][name].modifier = newModifier;
    setModifier(newModifier);
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