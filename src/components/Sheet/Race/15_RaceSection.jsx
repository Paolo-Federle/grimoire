import CategoryContainer from "../Common/17_CategoryContainer";
import { DotMarkers } from "../Common/40_DotMarkers";
import { useSheetData } from "../05_SheetDataContext";
import { updateValueAtPath } from "../sheetStateUtils";
import { raceSectionConfig } from "../raceOptions";
import { RaceEnergyTracker } from "../Energy/RaceEnergyTracker";
import RaceDotsGroup from "./25_RaceDotsGroup";
import RaceOptionList from "./27_RaceOptionList";
import MageDetailsSection from "./35_MageDetailsSection";

export default function RaceSection() {
  const { sheetData, setSheetData } = useSheetData();
  const selectedRace = sheetData.character.race.selected || "";
  const selectedConfig = raceSectionConfig[selectedRace];
  const energyStrengthLabel =
    sheetData.race_traits.race_specific_names[selectedRace]?.energy_strength;
  const energyPoolLabel =
    sheetData.race_traits.race_specific_names[selectedRace]?.energy_pool;
  const energyStrengthValue = sheetData.race_traits.energy_strength.value;

  if (!selectedRace) {
    return (
      <div className="w-full">
        <CategoryContainer section="RACE DETAILS">
          <div className="w-full rounded border border-dashed border-gray-300 p-4 text-center text-sm text-gray-600">
            Select a race on page 1 to configure race-specific traits and abilities.
          </div>
        </CategoryContainer>
      </div>
    );
  }

  if (selectedRace === "mortal") {
    return (
      <div className="w-full">
        <CategoryContainer section="RACE DETAILS">
          <div className="w-full rounded border border-dashed border-gray-300 p-4 text-center text-sm text-gray-600">
            Mortal characters do not currently have race-specific power lists in the sheet.
          </div>
        </CategoryContainer>
      </div>
    );
  }

  return (
    <div className="w-full space-y-4">
      {(energyStrengthLabel || energyPoolLabel || selectedConfig?.dotGroups?.length) && (
        <CategoryContainer section="RACE TRAITS">
          <div className="w-full space-y-4">
            {(energyPoolLabel || energyStrengthLabel) && (
              <div className="grid gap-4 lg:grid-cols-2">
                {energyPoolLabel ? (
                  <div className="rounded border border-gray-200 p-3">
                    <RaceEnergyTracker compact />
                  </div>
                ) : null}

                {energyStrengthLabel ? (
                  <div className="rounded border border-gray-200 p-3">
                    <h2 className="mb-3 text-sm font-bold uppercase tracking-wide">
                      {energyStrengthLabel}
                    </h2>
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-sm text-gray-600">Power trait</span>
                      <DotMarkers
                        min={1}
                        max={10}
                        value={energyStrengthValue}
                        modifier={0}
                        onChange={(newValue) =>
                          setSheetData((prev) =>
                            updateValueAtPath(
                              prev,
                              ["race_traits", "energy_strength", "value"],
                              newValue
                            )
                          )
                        }
                      />
                    </div>
                  </div>
                ) : null}
              </div>
            )}

            {selectedConfig?.dotGroups?.map((group) => (
              <RaceDotsGroup key={group.title} {...group} />
            ))}
          </div>
        </CategoryContainer>
      )}

      {!!selectedConfig?.lists?.length && (
        <CategoryContainer section="RACE ABILITIES">
          <div className="grid w-full gap-4 md:grid-cols-2">
            {selectedConfig.lists.map((list) => (
              <RaceOptionList key={list.title} {...list} />
            ))}
          </div>
        </CategoryContainer>
      )}

      {selectedRace === "mage" && <MageDetailsSection />}
    </div>
  );
}
