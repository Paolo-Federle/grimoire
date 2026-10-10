import { useEffect, useId, useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import CategoryContainer from "../Common/17_CategoryContainer";
import CompactDetailLink from "../Common/18_CompactDetailLink";
import { SelectInput } from "../Common/35_SelectInput";
import { DotMarkers } from "../Common/40_DotMarkers";
import { useSheetData, useSheetView } from "../05_SheetDataContext";
import { loadDerangementCatalog } from "../sheetDerangementData";
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

const normalizeDerangementEntries = (entries, level, findIdByName = () => "") => {
  if (Array.isArray(entries)) {
    return entries
      .map((entry, index) => {
        if (!entry || typeof entry !== "object") {
          return null;
        }

        const fallbackId = entry?.name ? findIdByName(entry.name) : "";

        return {
          ...Object.fromEntries(Object.entries(entry).filter(([key]) => key !== "quantity")),
          id: entry.id || `derangement-${level}-${index}`,
          derangementId: entry.derangementId || fallbackId || "",
        };
      })
      .filter(Boolean);
  }

  if (typeof entries === "string" && entries.trim()) {
    return [
      {
        id: `derangement-${level}-legacy`,
        derangementId: findIdByName(entries),
        name: entries,
      },
    ];
  }

  return [];
};

const recordedEntries = (entries) => entries.filter((entry) => entry.derangementId || entry.name);

function DerangementCount({ entries, catalog, label, className }) {
  const [open, setOpen] = useState(false);
  const title = entries.length === 0
    ? "No derangements recorded."
    : !catalog && entries.some((entry) => !entry.name)
      ? "Loading derangements..."
      : <ul className="m-0 max-h-64 list-none space-y-1 overflow-y-auto p-0">
          {entries.map((entry, index) => <li key={`${entry.level}-${entry.id}-${index}`} className="break-words">
            {catalog?.options.find((option) => option.value === entry.derangementId)?.label || entry.name || entry.derangementId}
            {entry.level && <span className="ml-1 opacity-75">· Level {entry.level}</span>}
          </li>)}
        </ul>;
  return (
    <Tooltip title={title} arrow describeChild open={open} onOpen={() => setOpen(true)} onClose={() => setOpen(false)} enterTouchDelay={0} leaveTouchDelay={5000}>
      <button type="button" onClick={() => setOpen(true)} className={`cursor-help focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 ${className}`}>{label}</button>
    </Tooltip>
  );
}

export default function MoralitySection({ paddingOverride, showDerangements: expanded, onDerangementsToggle }) {
  const { sheetData, setSheetData } = useSheetData();
  const { mode } = useSheetView();
  const [localExpanded, setLocalExpanded] = useState(false);
  const showDerangements = expanded ?? localExpanded;
  const derangementsId = useId();
  const [catalog, setCatalog] = useState(null);
  const [catalogError, setCatalogError] = useState(null);
  const selectedRace = sheetData.character.race.selected || "";
  const moralityScore = sheetData.morality.score || 1;
  const moralityLabel = getMoralityLabel(sheetData, selectedRace);
  const hasRecordedDerangements = Object.values(sheetData.morality.derangements || {}).some((entries) =>
    Array.isArray(entries) ? entries.some((entry) => entry?.derangementId || entry?.name) : typeof entries === "string" && entries.trim()
  );
  useEffect(() => {
    let isActive = true;

    if ((!showDerangements && !hasRecordedDerangements) || catalog) {
      return () => {
        isActive = false;
      };
    }

    setCatalogError(null);
    loadDerangementCatalog()
      .then((nextCatalog) => {
        if (isActive) setCatalog(nextCatalog);
      })
      .catch((error) => {
        if (isActive) setCatalogError(error);
      });

    return () => {
      isActive = false;
    };
  }, [catalog, showDerangements, hasRecordedDerangements]);

  const findIdByName = (name) =>
    catalog?.idByName.get(String(name || "").trim().toLowerCase()) || "";
  const derangementOptions = catalog?.options || [];
  const derangements = sheetData.morality.derangements || {};
  const derangementKeys = Object.keys(derangements).sort((a, b) => Number(b) - Number(a));
  const normalizedDerangements = Object.fromEntries(
    derangementKeys.map((key) => [
      key,
      normalizeDerangementEntries(derangements[key], key, findIdByName),
    ])
  );
  const recordedByLevel = Object.fromEntries(derangementKeys.map((key) => [key, recordedEntries(normalizedDerangements[key])]));
  const allRecorded = derangementKeys.flatMap((level) => recordedByLevel[level].map((entry) => ({ ...entry, level })));
  const totalDerangements = allRecorded.length;
  const visibleLevels = mode === "play"
    ? derangementKeys.filter((key) => recordedByLevel[key].length > 0)
    : derangementKeys;

  const toggleDerangements = () => {
    if (onDerangementsToggle) onDerangementsToggle(!showDerangements);
    else setLocalExpanded(!showDerangements);
  };

  const updateDerangementEntries = (level, updater) => {
    setSheetData((prev) =>
      updateValueAtPath(prev, ["morality", "derangements", level], (currentEntries) =>
        updater(normalizeDerangementEntries(currentEntries, level, findIdByName))
      )
    );
  };

  const addDerangementEntry = (level) => {
    updateDerangementEntries(level, (entries) => [
      ...entries,
      {
        id: buildDerangementEntryId(level),
        derangementId: "",
      },
    ]);
  };

  const updateDerangementEntry = (level, entryId, key, value) => {
    updateDerangementEntries(level, (entries) =>
      entries.map((entry) =>
        entry.id === entryId
          ? {
              ...entry,
              [key]: value,
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
    <div className="h-full w-full">
      <CategoryContainer section={moralityLabel} paddingOverride={paddingOverride} fillHeight>
        <div className="flex w-full min-w-0 flex-col gap-3">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <span className="block text-xs text-gray-500">Current rating</span>
              <span className="text-2xl font-semibold tabular-nums text-slate-700" aria-label={`${moralityLabel} current rating`}>{moralityScore}<span className="ml-1 text-sm font-normal text-gray-500">/ 10</span></span>
            </div>
            <DerangementCount entries={allRecorded} catalog={catalog} label={`${totalDerangements} ${totalDerangements === 1 ? "derangement" : "derangements"}`} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-600" />
          </div>
          <div className="rounded-lg bg-gray-50 p-3">
            <DotMarkers
              min={1}
              max={10}
              value={moralityScore}
              modifier={0}
              ariaLabel={`${moralityLabel} dots: ${moralityScore} of 10`}
              dotClassName="h-5 w-5 rounded-full"
              filledColor="bg-slate-500 border-slate-500"
              onChange={(newValue) =>
                setSheetData((prev) =>
                  updateValueAtPath(prev, ["morality", "score"], newValue)
                )
              }
            />
          </div>

          <div className="mt-auto flex min-h-12 items-center justify-end border-t border-gray-100 pt-3">
            <button
              type="button"
              className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
              aria-controls={derangementsId}
              aria-expanded={showDerangements}
              onClick={toggleDerangements}
            >
              {showDerangements ? "Hide derangements" : "Show derangements"}
            </button>
          </div>

          {showDerangements && (
            <div id={derangementsId} role="region" aria-label="Derangements" className="min-w-0 space-y-3 border-t border-gray-100 pt-4">
              {!catalog && !catalogError && <p role="status" className="m-0 text-sm text-gray-500">Loading derangements...</p>}
              {catalogError && <p role="status" className="m-0 text-sm text-red-700">Derangements could not be loaded.</p>}
              {catalog && visibleLevels.length === 0 && <p className="m-0 rounded-lg bg-gray-50 p-4 text-sm text-gray-500">No derangements recorded.</p>}
              {catalog && visibleLevels.length > 0 && (
              <div className="divide-y divide-gray-100 overflow-hidden rounded-lg border border-gray-200">
              {visibleLevels.map((key) => (
                <div key={key} role="group" aria-label={`Level ${key} derangements`} className={`min-w-0 p-3 sm:p-4 ${Number(key) === Number(moralityScore) ? "bg-gray-50" : "bg-white"}`}>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-sm font-semibold text-gray-700">Level {key}</span>
                      {Number(key) === Number(moralityScore) && <span className="rounded bg-slate-200 px-1.5 py-0.5 text-[10px] font-medium text-slate-600">Current rating</span>}
                      <DerangementCount entries={recordedByLevel[key]} catalog={catalog} label={recordedByLevel[key].length === 0 ? "No entries" : `${recordedByLevel[key].length} recorded`} className="rounded text-xs text-gray-500" />
                    </div>
                    {mode !== "play" && (
                      <button
                        type="button"
                        aria-label={`Add derangement at level ${key}`}
                        className="rounded-md border border-gray-300 px-2.5 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-50"
                        onClick={() => addDerangementEntry(key)}
                      >
                        + Derangement
                      </button>
                    )}
                  </div>

                  <div className={normalizedDerangements[key].length ? "mt-3 space-y-3" : ""}>
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
                          className="grid min-w-0 grid-cols-1 gap-3 rounded-lg border border-gray-200 bg-white p-3 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center"
                        >
                          <SelectInput
                            label="Derangement"
                            options={availableOptions}
                            value={entry.derangementId || entry.name || ""}
                            selectSx={{ "& .MuiSelect-select": { whiteSpace: "normal", overflowWrap: "anywhere", padding: "4px 8px !important" } }}
                            onChange={(value) =>
                              updateDerangementEntry(key, entry.id, "derangementId", value)
                            }
                          />

                          <div className="flex items-center justify-end gap-2">
                          <CompactDetailLink
                            to={catalog.pathById.get(entry.derangementId) || null}
                            label="Open derangement details"
                          />

                          <button
                            type="button"
                            disabled={mode === "play"}
                            title="Remove derangement"
                            aria-label="Remove derangement"
                            className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-gray-200 text-sm text-gray-500 hover:bg-red-50 hover:text-red-700 disabled:opacity-40"
                            onClick={() => removeDerangementEntry(key, entry.id)}
                          >
                            x
                          </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
              </div>
              )}
            </div>
          )}
        </div>
      </CategoryContainer>
    </div>
  );
}
