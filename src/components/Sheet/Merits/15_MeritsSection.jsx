import CategoryContainer from "../Common/17_CategoryContainer";
import { DotMarkers } from "../Common/40_DotMarkers";
import CompactDetailLink from "../Common/18_CompactDetailLink";
import { SelectInput } from "../Common/35_SelectInput";
import { useSheetData } from "../05_SheetDataContext";
import { getMeritDetailPath, getMeritOptionsForRace } from "../sheetLookupData";
import { updateValueAtPath } from "../sheetStateUtils";

export default function MeritsSection({ paddingOverride }) {
  const { sheetData, setSheetData } = useSheetData();
  const selectedRace = sheetData.character.race.selected || "";
  const merits = sheetData.merits || [];
  const meritOptions = getMeritOptionsForRace(selectedRace);

  const addMerit = () => {
    setSheetData((prev) =>
      updateValueAtPath(prev, ["merits"], (currentMerits = []) => [
        ...currentMerits,
        { name: "", dots: 1 },
      ])
    );
  };

  const removeMerit = (index) => {
    setSheetData((prev) =>
      updateValueAtPath(prev, ["merits"], (currentMerits = []) => {
        if (currentMerits.length <= 1) {
          return currentMerits;
        }

        return currentMerits.filter((_, currentIndex) => currentIndex !== index);
      })
    );
  };

  return (
    <div className="w-full">
      <CategoryContainer section="MERITS" paddingOverride={paddingOverride}>
        <div className="w-full space-y-3">
          {merits.map((item, index) => {
            const selectedNames = merits
              .map((currentMerit, currentIndex) =>
                currentIndex === index ? null : currentMerit?.name
              )
              .filter(Boolean);
            const availableOptions = meritOptions.filter(
              (option) => option === item?.name || !selectedNames.includes(option)
            );
            const detailPath = getMeritDetailPath(selectedRace, item?.name);

            return (
              <div
                key={`merit-${index}`}
                className="rounded bg-gray-50 p-3"
              >
                <div className="space-y-2">
                  <div className="grid gap-2 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
                    <SelectInput
                      label="Merit"
                      options={availableOptions}
                      path={["merits", index, "name"]}
                    />

                    <div className="flex items-center gap-2">
                      <CompactDetailLink to={detailPath} label="Open merit details" />
                      <button
                        type="button"
                        title="Remove merit"
                        aria-label="Remove merit"
                        className={`inline-flex h-8 w-8 items-center justify-center rounded bg-[#333] text-sm font-semibold text-white hover:bg-[#111] ${
                          merits.length > 1 ? "" : "invisible"
                        }`}
                        onClick={() => removeMerit(index)}
                        >
                        x
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold">Dots</span>
                    <DotMarkers
                      min={1}
                      max={5}
                      value={item?.dots ?? 1}
                      modifier={0}
                      onChange={(newValue) =>
                        setSheetData((prev) =>
                          updateValueAtPath(prev, ["merits", index, "dots"], newValue)
                        )
                      }
                    />
                  </div>
                </div>
              </div>
            );
          })}

          <button
            type="button"
            className="rounded bg-[#333] px-4 py-2 text-sm text-white hover:bg-[#111]"
            onClick={addMerit}
          >
            + Add Merit
          </button>
        </div>
      </CategoryContainer>
    </div>
  );
}
