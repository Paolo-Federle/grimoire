import { useEffect, useState } from "react";
import CategoryContainer from "../Common/17_CategoryContainer";
import { DotMarkers } from "../Common/40_DotMarkers";
import CompactDetailLink from "../Common/18_CompactDetailLink";
import { SelectInput } from "../Common/35_SelectInput";
import { useSheetData } from "../05_SheetDataContext";
import { loadMeritCatalog } from "../sheetMeritData";
import { updateValueAtPath } from "../sheetStateUtils";

export default function MeritsSection({ paddingOverride }) {
  const { sheetData, setSheetData } = useSheetData();
  const selectedRace = sheetData.character.race.selected || "";
  const merits = sheetData.merits || [];
  const [catalogState, setCatalogState] = useState({
    race: "",
    options: [],
    paths: new Map(),
    categories: new Map(),
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    let isActive = true;
    setCatalogState({
      race: selectedRace,
      options: [],
      paths: new Map(),
      categories: new Map(),
      isLoading: true,
      error: null,
    });

    loadMeritCatalog(selectedRace)
      .then((catalog) => {
        if (isActive) {
          setCatalogState({
            race: selectedRace,
            ...catalog,
            isLoading: false,
            error: null,
          });
        }
      })
      .catch((error) => {
        if (isActive) {
          setCatalogState({
            race: selectedRace,
            options: [],
            paths: new Map(),
            categories: new Map(),
            isLoading: false,
            error,
          });
        }
      });

    return () => {
      isActive = false;
    };
  }, [selectedRace]);

  const activeCatalog =
    catalogState.race === selectedRace
      ? catalogState
      : {
          options: [], paths: new Map(), categories: new Map(),
          isLoading: true, error: null,
        };

  const selectMerit = (index, name) => {
    const categories = activeCatalog.categories.get(name) || [];
    setSheetData((prev) =>
      updateValueAtPath(prev, ["merits", index], (current) => {
        if (current.name === name) return current;
        const merit = { ...current };
        delete merit.aspects;
        return categories.length
          ? {
              ...merit, name, dots: 0,
              aspects: Object.fromEntries(categories.map((category) => [category, 0])),
            }
          : { ...merit, name, dots: Math.max(1, Math.min(5, current.dots ?? 1)) };
      })
    );
  };

  const updateAspect = (index, category, value, categories) => {
    setSheetData((prev) =>
      updateValueAtPath(prev, ["merits", index], (current) => {
        const aspects = { ...current.aspects, [category]: value };
        const dots = categories.reduce((total, name) => total + (aspects[name] ?? 0), 0);
        return { ...current, aspects, dots };
      })
    );
  };

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
            const availableOptions = activeCatalog.options.filter(
              (option) => option === item?.name || !selectedNames.includes(option)
            );
            if (item?.name && !availableOptions.includes(item.name)) {
              availableOptions.unshift(item.name);
            }
            const detailPath = activeCatalog.paths.get(item?.name) || null;
            const categories = activeCatalog.categories.get(item?.name) || [];
            const hasAspects = categories.length > 0;

            return (
              <div
                key={`merit-${index}`}
                className="rounded bg-gray-50 p-2"
              >
                <div className="grid grid-cols-[minmax(0,1fr)_auto_auto] items-center gap-2">
                  <div className="min-w-0">
                    <SelectInput
                      label="Merit"
                      options={availableOptions}
                      path={["merits", index, "name"]}
                      onChange={(name) => selectMerit(index, name)}
                    />
                  </div>

                  <div className="flex shrink-0 items-center gap-2">
                    {!hasAspects ? (
                      <span className="hidden text-xs font-semibold text-gray-600 sm:inline">
                        Dots
                      </span>
                    ) : null}
                    {hasAspects ? (
                      <span className="text-sm font-semibold" aria-label={`${item.name} total dots`}>
                        Total: {item?.dots ?? 0}
                      </span>
                    ) : (
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
                    )}
                  </div>

                  <div className="flex shrink-0 items-center gap-1.5">
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
                {hasAspects ? (
                  <div className="mt-2 space-y-1 border-t border-gray-200 pt-2">
                    {!item.aspects && item.dots > 0 ? (
                      <p className="text-xs text-gray-600">
                        Previously recorded: {item.dots} dots. Set the aspects below; the total will be recalculated.
                      </p>
                    ) : null}
                    {categories.map((category) => (
                      <div key={category} className="flex items-center justify-between gap-2 text-xs">
                        <span>{category}</span>
                        <div role="group" aria-label={`${item.name} ${category} dots`}>
                          <DotMarkers
                            min={0}
                            max={5}
                            value={item.aspects?.[category] ?? 0}
                            modifier={0}
                            onChange={(value) => updateAspect(index, category, value, categories)}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            );
          })}

          {activeCatalog.isLoading ? (
            <div className="text-xs text-gray-500">Loading merits...</div>
          ) : null}
          {activeCatalog.error ? (
            <div className="text-xs text-red-700">Merits could not be loaded.</div>
          ) : null}

          <button
            type="button"
            className="rounded bg-[#333] px-3 py-1.5 text-sm text-white hover:bg-[#111]"
            onClick={addMerit}
          >
            + Add Merit
          </button>
        </div>
      </CategoryContainer>
    </div>
  );
}
