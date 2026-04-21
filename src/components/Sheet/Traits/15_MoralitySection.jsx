import { useState } from "react";
import CategoryContainer from "../Common/17_CategoryContainer";
import CompactDetailLink from "../Common/18_CompactDetailLink";
import { NumberInput } from "../Common/35_NumberInput";
import { SelectInput } from "../Common/35_SelectInput";
import { DotMarkers } from "../Common/40_DotMarkers";
import { useSheetData } from "../05_SheetDataContext";
import {
  findDerangementOptionIdByName,
  getDerangementDetailPath,
  getDerangementOptions,
} from "../sheetLookupData";
import { updateValueAtPath } from "../sheetStateUtils";

const getMoralityLabel = (sheetData, selectedRace) => {
  if (!selectedRace || selectedRace === "mortal") {
    return "Morality";
  }

  const label = sheetData.morality[selectedRace];
  if (!label) {
    return "Morality";
  }

  return label.charAt(0).toUpperCase() + label.slice(1);
};

const buildDerangementEntryId = (level) =>
  `derangement-${level}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

const normalizeDerangementEntries = (entries, level) => {
  if (Array.isArray(entries)) {
    return entries
      .map((entry, index) => {
        if (!entry || typeof entry !== "object") {
          return null;
        }

        const fallbackId = entry?.name ? findDerangementOptionIdByName(entry.name) : "";

        return {
          id: entry.id || `derangement-${level}-${index}`,
          derangementId: entry.derangementId || fallbackId || "",
          quantity: Math.max(1, Number(entry.quantity) || 1),
        };
      })
      .filter(Boolean);
  }

  if (typeof entries === "string" && entries.trim()) {
    return [
      {
        id: `derangement-${level}-legacy`,
        derangementId: findDerangementOptionIdByName(entries),
        quantity: 1,
      },
    ];
  }

  return [];
};

export default function MoralitySection() {
  const { sheetData, setSheetData } = useSheetData();
  const [showDerangements, setShowDerangements] = useState(false);
  const selectedRace = sheetData.character.race.selected || "";
  const moralityScore = sheetData.morality.score || 1;
  const moralityLabel = getMoralityLabel(sheetData, selectedRace);
  const derangementOptions = getDerangementOptions();
  const derangements = sheetData.morality.derangements || {};
  const derangementKeys = Object.keys(derangements).sort((a, b) => Number(b) - Number(a));
  const normalizedDerangements = Object.fromEntries(
    derangementKeys.map((key) => [key, normalizeDerangementEntries(derangements[key], key)])
  );
  const totalDerangements = Object.values(normalizedDerangements)
    .flat()
    .reduce((total, entry) => total + (Number(entry.quantity) || 0), 0);

  const updateDerangementEntries = (level, updater) => {
    setSheetData((prev) =>
      updateValueAtPath(prev, ["morality", "derangements", level], (currentEntries) =>
        updater(normalizeDerangementEntries(currentEntries, level))
      )
    );
  };

  const addDerangementEntry = (level) => {
    updateDerangementEntries(level, (entries) => [
      ...entries,
      {
        id: buildDerangementEntryId(level),
        derangementId: "",
        quantity: 1,
      },
    ]);
  };

  const updateDerangementEntry = (level, entryId, key, value) => {
    updateDerangementEntries(level, (entries) =>
      entries.map((entry) =>
        entry.id === entryId
          ? {
              ...entry,
              [key]: key === "quantity" ? Math.max(1, Number(value) || 1) : value,
            }
          : entry
      )
    );
  };

  const removeDerangementEntry = (level, entryId) => {
    updateDerangementEntries(level, (entries) =>
      entries.filter((entry) => entry.id !== entryId)
    );
  };

  return (
    <div className="w-full">
      <CategoryContainer section={moralityLabel}>
        <div className="w-full space-y-3">
          <div className="flex items-center justify-between gap-4">
            <span className="text-sm font-semibold text-gray-600">Current rating</span>
            <DotMarkers
              min={1}
              max={10}
              value={moralityScore}
              modifier={0}
              dotClassName="h-4 w-4 rounded-full"
              filledColor="bg-slate-500 border-slate-500"
              onChange={(newValue) =>
                setSheetData((prev) =>
                  updateValueAtPath(prev, ["morality", "score"], newValue)
                )
              }
            />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs text-gray-500">
              {totalDerangements} {totalDerangements === 1 ? "derangement" : "derangements"}
            </span>

            <button
              type="button"
              className="rounded bg-[#333] px-3 py-2 text-xs text-white hover:bg-[#111]"
              onClick={() => setShowDerangements((prev) => !prev)}
            >
              {showDerangements ? "Hide derangements" : "Show derangements"}
            </button>
          </div>

          {showDerangements ? (
            <div className="grid gap-3 md:grid-cols-2">
              {derangementKeys.map((key) => (
                <div key={key} className="rounded bg-gray-50 p-3">
                  <div className="mb-2 flex items-center justify-between gap-2">
                    <span className="text-sm font-semibold">Level {key}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500">
                        {normalizedDerangements[key].reduce(
                          (total, entry) => total + (Number(entry.quantity) || 0),
                          0
                        )}
                      </span>
                      <button
                        type="button"
                        className="rounded bg-[#333] px-2 py-1 text-xs text-white hover:bg-[#111]"
                        onClick={() => addDerangementEntry(key)}
                      >
                        + Derangement
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {normalizedDerangements[key].map((entry) => {
                      const selectedIds = normalizedDerangements[key]
                        .map((currentEntry) =>
                          currentEntry.id === entry.id ? null : currentEntry.derangementId
                        )
                        .filter(Boolean);
                      const availableOptions = derangementOptions.filter(
                        (option) =>
                          option.value === entry.derangementId ||
                          !selectedIds.includes(option.value)
                      );

                      return (
                        <div
                          key={entry.id}
                          className="grid gap-2 md:grid-cols-[minmax(0,1fr)_84px_auto_auto] md:items-center"
                        >
                          <SelectInput
                            label="Derangement"
                            options={availableOptions}
                            value={entry.derangementId}
                            onChange={(value) =>
                              updateDerangementEntry(key, entry.id, "derangementId", value)
                            }
                          />

                          <NumberInput
                            label="Qty"
                            value={entry.quantity}
                            min={1}
                            style={{ maxWidth: "84px" }}
                            onChange={(value) =>
                              updateDerangementEntry(key, entry.id, "quantity", value)
                            }
                          />

                          <CompactDetailLink
                            to={getDerangementDetailPath(entry.derangementId)}
                            label="Open derangement details"
                          />

                          <button
                            type="button"
                            title="Remove derangement"
                            aria-label="Remove derangement"
                            className="inline-flex h-8 w-8 items-center justify-center rounded bg-[#333] text-sm font-semibold text-white hover:bg-[#111]"
                            onClick={() => removeDerangementEntry(key, entry.id)}
                          >
                            x
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </CategoryContainer>
    </div>
  );
}
