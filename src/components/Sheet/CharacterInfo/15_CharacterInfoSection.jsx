import { useState, useEffect } from "react";
import CategoryContainer from "../Common/17_CategoryContainer";
import { SelectInput } from "../Common/35_SelectInput";
import { TextInput } from "../Common/35_TextInput";
import { NumberInput } from "../Common/35_NumberInput";
import { useSheetData } from "../05_SheetDataContext";

export default function CharacterInfoSection() {
  const { sheetData, setSheetData } = useSheetData();
  const [character, setCharacter] = useState(sheetData.character);
  const [selectedRace, setSelectedRace] = useState(character.race.selected || "");

  useEffect(() => {
    setSheetData((prev) => ({ ...prev, character }));
  }, [character]);

  const handleChange = (key, value) => {
    setCharacter((prev) => ({ ...prev, [key]: value }));
  };

  const handleRaceChange = (value) => {
    setCharacter((prev) => ({
      ...prev,
      race: { ...prev.race, selected: value },
    }));
    setSelectedRace(value);
  };

  const handleRaceDetailChange = (key, value) => {
    setCharacter((prev) => ({
      ...prev,
      details: {
        ...prev.details,
        [selectedRace]: {
          ...prev.details[selectedRace],
          [key]: value,
        },
      },
    }));
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
          <SelectInput field={character.vice} label="Vice" />
          <SelectInput field={character.virtue} label="Virtue" />
        </div>

        {selectedRace && firstField && (
          <div className="w-1/3 space-y-4">
            <SelectInput
              label={firstField?.charAt(0).toUpperCase() + firstField?.slice(1)}
              field={character.details[selectedRace][firstField]}
            />
            <SelectInput
              label={secondField?.charAt(0).toUpperCase() + secondField?.slice(1)}
              field={character.details[selectedRace][secondField]}
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
