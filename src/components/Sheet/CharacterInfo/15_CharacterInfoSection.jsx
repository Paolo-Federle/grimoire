import CategoryContainer from "../Common/17_CategoryContainer";
import { SelectInput } from "../Common/35_SelectInput";
import { TextInput } from "../Common/35_TextInput";
import { NumberInput } from "../Common/35_NumberInput";
import { useSheetData } from "../05_SheetDataContext";
import { updateValueAtPath } from "../sheetStateUtils";

export default function CharacterInfoSection() {
  const { sheetData, setSheetData } = useSheetData();
  const character = sheetData.character;
  const selectedRace = character.race.selected || "";

  const handleChange = (key, value) => {
    setSheetData((prev) => updateValueAtPath(prev, ["character", key], value));
  };

  const handleRaceChange = (value) => {
    setSheetData((prev) =>
      updateValueAtPath(prev, ["character", "race", "selected"], value)
    );
  };

  const handleRaceDetailChange = (key, value) => {
    const currentField = character.details[selectedRace]?.[key];
    const path = ["character", "details", selectedRace, key];

    setSheetData((prev) =>
      currentField && typeof currentField === "object" && "selected" in currentField
        ? updateValueAtPath(prev, [...path, "selected"], value)
        : updateValueAtPath(prev, path, value)
    );
  };

  const raceDetails = character.details[selectedRace] || {};
  const [firstField, secondField, thirdField] = Object.keys(raceDetails).slice(0, 3);


  return (
    <div className="w-full">
      <CategoryContainer section="CHARACTER INFO">
        <div className="w-1/3 space-y-4">
          <TextInput value={character.name} label="Name" onChange={(val) => handleChange("name", val)} />
          <NumberInput value={character.age} label="Age" onChange={(val) => handleChange("age", val)} />
          <TextInput value={character.concept} label="Concept" onChange={(val) => handleChange("concept", val)} />
        </div>

        <div className="w-1/3 space-y-4">
          <SelectInput field={character.race} label="Race" onChange={handleRaceChange} />
          <SelectInput
            field={character.vice}
            label="Vice"
            onChange={(value) => handleChange("vice", { ...character.vice, selected: value })}
          />
          <SelectInput
            field={character.virtue}
            label="Virtue"
            onChange={(value) => handleChange("virtue", { ...character.virtue, selected: value })}
          />
        </div>

        {selectedRace && firstField && (
          <div className="w-1/3 space-y-4">
            <SelectInput
              label={firstField?.charAt(0).toUpperCase() + firstField?.slice(1)}
              field={character.details[selectedRace][firstField]}
              onChange={(value) => handleRaceDetailChange(firstField, value)}
            />
            <SelectInput
              label={secondField?.charAt(0).toUpperCase() + secondField?.slice(1)}
              field={character.details[selectedRace][secondField]}
              onChange={(value) => handleRaceDetailChange(secondField, value)}
            />
            <TextInput
              label={thirdField?.charAt(0).toUpperCase() + thirdField?.slice(1)}
              value={character.details[selectedRace][thirdField]}
              onChange={(val) => handleRaceDetailChange(thirdField, val)}
            />
          </div>
        )}
      </CategoryContainer>
    </div>
  );
}
