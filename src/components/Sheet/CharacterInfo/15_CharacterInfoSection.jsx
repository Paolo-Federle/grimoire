import CategoryContainer from "../Common/17_CategoryContainer";
import { SelectInput } from "../Common/35_SelectInput";
import { TextInput } from "../Common/35_TextInput";
import { NumberInput } from "../Common/35_NumberInput";
import { useSheetData } from "../05_SheetDataContext";
import { useSheetCatalog } from "../07_SheetCatalogContext";
import { updateValueAtPath } from "../sheetStateUtils";
import { RACE_CHOICES } from "../raceOptions";
import { Vices, Virtues } from "../../../Data/Mortal/VirtueViceData";

const toLabel = (value) =>
  String(value)
    .replace(/_/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

export default function CharacterInfoSection() {
  const { sheetData, setSheetData } = useSheetData();
  const { catalog, isLoading, error } = useSheetCatalog();
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
  const raceFields = Object.entries(raceDetails);


  return (
    <div className="w-full">
      <CategoryContainer section="CHARACTER INFO">
        <div className="w-1/3 space-y-4">
          <TextInput value={character.name} label="Name" onChange={(val) => handleChange("name", val)} />
          <NumberInput value={character.age} label="Age" onChange={(val) => handleChange("age", val)} />
          <TextInput value={character.concept} label="Concept" onChange={(val) => handleChange("concept", val)} />
        </div>

        <div className="w-1/3 space-y-4">
          <SelectInput
            field={character.race}
            options={RACE_CHOICES}
            label="Race"
            onChange={handleRaceChange}
          />
          <SelectInput
            field={character.vice}
            options={Vices}
            label="Vice"
            onChange={(value) => handleChange("vice", { ...character.vice, selected: value })}
          />
          <SelectInput
            field={character.virtue}
            options={Virtues}
            label="Virtue"
            onChange={(value) => handleChange("virtue", { ...character.virtue, selected: value })}
          />
        </div>

        {selectedRace && raceFields.length > 0 && (
          <div className="w-1/3 space-y-4">
            {raceFields.map(([fieldKey, fieldValue]) => {
              if (fieldValue && typeof fieldValue === "object" && "selected" in fieldValue) {
                return (
                  <SelectInput
                    key={fieldKey}
                    label={toLabel(fieldKey)}
                    field={fieldValue}
                    options={catalog.characterDetails[fieldKey] || []}
                    onChange={(value) => handleRaceDetailChange(fieldKey, value)}
                  />
                );
              }

              if (typeof fieldValue === "number") {
                return (
                  <NumberInput
                    key={fieldKey}
                    label={toLabel(fieldKey)}
                    value={fieldValue}
                    onChange={(value) => handleRaceDetailChange(fieldKey, value)}
                  />
                );
              }

              return (
                <TextInput
                  key={fieldKey}
                  label={toLabel(fieldKey)}
                  value={fieldValue}
                  onChange={(value) => handleRaceDetailChange(fieldKey, value)}
                />
              );
            })}
            {isLoading ? (
              <div className="text-xs text-gray-500">Loading race options...</div>
            ) : null}
            {error ? (
              <div className="text-xs text-red-700">Race options could not be loaded.</div>
            ) : null}
          </div>
        )}
      </CategoryContainer>
    </div>
  );
}
