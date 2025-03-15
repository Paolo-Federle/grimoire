import { useState, useEffect } from "react";
import CategoryContainer from "../Common/17_CategoryContainer";
import { sheetData } from "../00_SheetData";
import { SelectInput } from "../Common/35_SelectInput";
import { TextInput } from "../Common/35_TextInput";
import { NumberInput } from "../Common/35_NumberInput";

export default function CharacterInfoSection() {
  // State for the entire character object
  const [character, setCharacter] = useState(sheetData.character);
  const [selectedRace, setSelectedRace] = useState(character.race.selected || "");

  // Sync state with sheetData
  useEffect(() => {
    sheetData.character = character;
    console.log('firstField', character?.details?.[selectedRace]?.[firstField]?.choices)
    
  }, [character]);

  // Handler to update any character property
  const handleChange = (key, value) => {
    setCharacter((prev) => {
      const updated = { ...prev, [key]: value };
      sheetData.character = updated;
      return updated;
    });
  };

  // Updates the selected race and resets race-specific details
  const handleRaceChange = (value) => {
    setCharacter((prev) => {
      const updated = {
        ...prev,
        race: { ...prev.race, selected: value },
      };
      sheetData.character = updated;
      return updated;
    });

    // Ensure UI updates with the correct race details
    setSelectedRace(value);
  };

  // Handler for updating race-specific attributes
  const handleRaceDetailChange = (key, value) => {
    setCharacter((prev) => {
      const updated = {
        ...prev,
        details: {
          ...prev.details,
          [selectedRace]: {
            ...prev.details[selectedRace],
            [key]: value,
          },
        },
      };
      sheetData.character = updated;
      return updated;
    });
  };


  // Get the three race-specific keys dynamically from sheetData
  const raceDetails = sheetData.character.details[selectedRace] || {};
  const [firstField, secondField, thirdField] = Object.keys(raceDetails).slice(0, 3); // Always gets the first three fields

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

        {/* Explicit Race-Specific Details */}
        {selectedRace && firstField && (
          <div className="w-1/3 space-y-4">
            {firstField && (
              <SelectInput
                label={firstField?.charAt(0).toUpperCase() + firstField?.slice(1)}
                field={character?.details?.[selectedRace]?.[firstField] || ""}
              />
            )}
            {secondField && (
              <SelectInput
                label={secondField?.charAt(0).toUpperCase() + secondField?.slice(1)}
                field={character?.details?.[selectedRace]?.[secondField] || ""}
              />
            )}
            {thirdField && (
            <TextInput
              label={thirdField?.charAt(0).toUpperCase() + thirdField?.slice(1)}
              value={character?.details?.[selectedRace]?.[thirdField] || ""}
              onChange={(val) => handleRaceDetailChange(thirdField, val)}
            />
          )}
          </div>
        )}

      </CategoryContainer>
    </div>
  );
}
