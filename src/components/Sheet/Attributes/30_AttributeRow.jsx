import TitleDots from "../Common/35_TitleDots";
import { ModifierControl } from "../Common/40_ModifierControl";
import { useSheetData } from "../05_SheetDataContext";
import { updateValueAtPath } from "../sheetStateUtils";
import { getWerewolfForm, getSheetAttributeTotal, isWerewolfSheet } from "../sheetWerewolfForms";

export const AttributeRow = ({ name, category, max, min }) => {
  const { sheetData, setSheetData } = useSheetData();
  const { base: value, modifier } = sheetData.attributes[category][name];
  const werewolf = isWerewolfSheet(sheetData);
  const form = werewolf ? getWerewolfForm(sheetData) : null;
  const currentValue = getSheetAttributeTotal(sheetData, category, name);
  const label = name.charAt(0).toUpperCase() + name.slice(1);

  const handleChange = (newValue) => {
    setSheetData((prev) =>
      updateValueAtPath(prev, ["attributes", category, name, "base"], newValue)
    );
  };

  const handleModifierChange = (delta) => {
    setSheetData((prev) =>
      updateValueAtPath(
        prev,
        ["attributes", category, name, "modifier"],
        (currentValue = 0) => currentValue + delta
      )
    );
  };

  return (
    <div role="group" aria-label={`${label} attribute`} className="min-w-0">
      <TitleDots
        aligned
        name={name}
        min={min}
        max={werewolf ? Math.max(max, value, currentValue) : max}
        editableMax={max}
        dotsLabel={werewolf ? `${label}: ${currentValue} (${form.name})` : undefined}
        value={value}
        modifier={werewolf ? currentValue - value : modifier}
        onChange={handleChange}
        trailing={<ModifierControl compact modifier={modifier} onChange={handleModifierChange} />}
      />
    </div>
  );
};
