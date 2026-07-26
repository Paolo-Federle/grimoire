import TitleDots from "../Common/35_TitleDots";
import { ModifierControl } from "../Common/40_ModifierControl";
import { useSheetData } from "../05_SheetDataContext";
import { updateValueAtPath } from "../sheetStateUtils";

export const SkillsRow = ({ name, category, max, min }) => {
  const { sheetData, setSheetData } = useSheetData();
  const { base: value, modifier } = sheetData.skills[category][name];

  const handleChange = (newValue) => {
    setSheetData((prev) =>
      updateValueAtPath(prev, ["skills", category, name, "base"], newValue)
    );
  };

  const handleModifierChange = (delta) => {
    setSheetData((prev) =>
      updateValueAtPath(
        prev,
        ["skills", category, name, "modifier"],
        (currentValue = 0) => currentValue + delta
      )
    );
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
