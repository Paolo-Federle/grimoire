import TitleDots from "../Common/35_TitleDots";
import { ModifierControl } from "../Common/40_ModifierControl";
import { useSheetData } from "../05_SheetDataContext";
import { updateValueAtPath } from "../sheetStateUtils";
import SkillSpecialties from "./35_SkillSpecialties";

export const SkillsRow = ({ name, category, max, min }) => {
  const { sheetData, setSheetData } = useSheetData();
  const { base: value, modifier, specialties = [] } = sheetData.skills[category][name];

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

  const handleSpecialtiesChange = (updater) => {
    setSheetData((prev) =>
      updateValueAtPath(
        prev,
        ["skills", category, name, "specialties"],
        (currentValue) =>
          updater(Array.isArray(currentValue) ? currentValue : [])
      )
    );
  };

  return (
    <div className="min-w-0 py-0.5">
      <div className="flex min-w-0 items-center gap-2">
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
      <SkillSpecialties
        skillName={name}
        specialties={specialties}
        onChange={handleSpecialtiesChange}
      />
    </div>
  );
};
