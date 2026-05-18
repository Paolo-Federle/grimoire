import { useMemo, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import RestartAltRoundedIcon from "@mui/icons-material/RestartAltRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { getSheetPath } from "../path";
import {
  createStoredSheet,
  duplicateStoredSheet,
  deleteStoredSheet,
  downloadSheetAsText,
  importStoredSheetFromText,
  listStoredSheets,
} from "../../components/Sheet/sheetStorage";

const raceLabels = {
  mortal: "Mortal",
  mage: "Mage",
  vampire: "Vampire",
  changeling: "Changeling",
  werewolf: "Werewolf",
  hunter: "Hunter",
  geist: "Geist",
  mummy: "Mummy",
  promethean: "Promethean",
};

const raceAccentClasses = {
  mortal: "bg-stone-500",
  mage: "bg-sky-700",
  vampire: "bg-red-800",
  changeling: "bg-fuchsia-700",
  werewolf: "bg-indigo-700",
  hunter: "bg-amber-700",
  geist: "bg-slate-700",
  mummy: "bg-yellow-700",
  promethean: "bg-emerald-700",
};

const formatDate = (value) => {
  if (!value) {
    return "-";
  }

  return new Intl.DateTimeFormat("en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
};

const formatValue = (value) => String(value || "").trim();

const getSheetDisplayName = (sheet) => {
  const characterName = formatValue(sheet?.data?.character?.name);
  if (characterName) return characterName;

  const race = formatValue(sheet?.data?.character?.race?.selected);
  if (race) return `Unnamed ${raceLabels[race] || race} character`;

  return sheet?.name || "Unnamed sheet";
};

const getSheetRace = (sheet) => formatValue(sheet?.data?.character?.race?.selected);

const matchesSearch = (sheet, term) => {
  if (!term) return true;

  const haystack = [sheet.displayName, sheet.storageName, raceLabels[sheet.race] || ""]
    .join(" ")
    .toLowerCase();

  return haystack.includes(term.toLowerCase());
};

const filterRaceOptions = Object.entries(raceLabels).map(([value, label]) => ({
  value,
  label,
}));

export default function SheetLibrary() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [importError, setImportError] = useState("");
  const [savedSheets, setSavedSheets] = useState(() => listStoredSheets());
  const [searchTerm, setSearchTerm] = useState("");
  const [raceFilter, setRaceFilter] = useState("");

  const hasSheets = savedSheets.length > 0;

  const normalizedSheets = useMemo(
    () =>
      savedSheets.map((sheet) => ({
        ...sheet,
        displayName: getSheetDisplayName(sheet),
        storageName: sheet.name || "Unnamed sheet",
        race: getSheetRace(sheet),
      })),
    [savedSheets]
  );

  const filteredSheets = useMemo(
    () =>
      normalizedSheets.filter((sheet) => {
        if (raceFilter && sheet.race !== raceFilter) {
          return false;
        }

        return matchesSearch(sheet, searchTerm);
      }),
    [normalizedSheets, raceFilter, searchTerm]
  );

  const raceCounts = useMemo(() => {
    return normalizedSheets.reduce((counts, sheet) => {
      const raceKey = sheet.race || "unassigned";
      counts[raceKey] = (counts[raceKey] || 0) + 1;
      return counts;
    }, {});
  }, [normalizedSheets]);

  const quickFilters = useMemo(
    () => [
      { value: "", label: "All sheets", count: normalizedSheets.length },
      ...filterRaceOptions
        .filter((option) => raceCounts[option.value])
        .map((option) => ({
          value: option.value,
          label: option.label,
          count: raceCounts[option.value],
        })),
    ],
    [normalizedSheets.length, raceCounts]
  );

  const refreshSheets = () => {
    setSavedSheets(listStoredSheets());
  };

  const clearFilters = () => {
    setSearchTerm("");
    setRaceFilter("");
  };

  const handleCreateSheet = () => {
    const createdSheet = createStoredSheet();
    refreshSheets();
    navigate(getSheetPath(createdSheet.id));
  };

  const handleDeleteSheet = (sheetId) => {
    const sheet = savedSheets.find((entry) => entry.id === sheetId);
    const sheetLabel = getSheetDisplayName(sheet);

    if (!window.confirm(`Delete "${sheetLabel}"? This action cannot be undone.`)) {
      return;
    }

    deleteStoredSheet(sheetId);
    refreshSheets();
  };

  const handleDuplicateSheet = (sheetId) => {
    const sheet = savedSheets.find((entry) => entry.id === sheetId);
    const sheetLabel = getSheetDisplayName(sheet);

    if (!window.confirm(`Duplicate "${sheetLabel}"?`)) {
      return;
    }

    const duplicatedSheet = duplicateStoredSheet(sheetId);
    refreshSheets();

    if (duplicatedSheet) {
      navigate(getSheetPath(duplicatedSheet.id));
    }
  };

  const handleImportSheet = async (event) => {
    const file = event.target.files?.[0];
    event.target.value = "";

    if (!file) {
      return;
    }

    try {
      const importedText = await file.text();
      const importedSheet = importStoredSheetFromText(importedText);
      setImportError("");
      refreshSheets();
      navigate(getSheetPath(importedSheet.id));
    } catch (error) {
      setImportError(
        error instanceof Error ? error.message : "Unable to import the selected file"
      );
    }
  };

  return (
    <div className="longTextContainer">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="mb-1 text-2xl font-bold">Sheets</h1>
          <p className="text-sm text-gray-600">
            Browse saved characters, filter them quickly, or jump back into a sheet.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            className="rounded bg-[#333] px-4 py-2 text-sm text-white hover:bg-[#111]"
            onClick={handleCreateSheet}
          >
            + New sheet
          </button>
          <button
            type="button"
            className="rounded border border-gray-300 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={() => fileInputRef.current?.click()}
          >
            Import sheet
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept=".json,application/json"
            className="hidden"
            onChange={handleImportSheet}
          />
        </div>
      </div>

      {importError ? (
        <div className="mb-4 rounded border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {importError}
        </div>
      ) : null}

      {!hasSheets ? (
        <div className="rounded border border-dashed border-gray-300 p-6 text-center text-sm text-gray-600">
          No saved sheets yet. Create one to start building characters.
        </div>
      ) : (
        <div className="space-y-5">
          <section className="rounded-2xl border border-[#d7d7d7] bg-white shadow-sm">
            <div className="flex flex-col gap-3 px-4 py-4">
              <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
                <div className="flex min-w-0 flex-1 flex-col gap-3 md:flex-row md:items-center">
                  <label className="relative block min-w-0 flex-1">
                    <span className="sr-only">Search sheets</span>
                    <SearchRoundedIcon
                      sx={{
                        position: "absolute",
                        left: "0.75rem",
                        top: "50%",
                        transform: "translateY(-50%)",
                        fontSize: "1.1rem",
                        color: "#6b7280",
                      }}
                    />
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(event) => setSearchTerm(event.target.value)}
                      placeholder="Search character or sheet name"
                      className="w-full rounded-lg border border-[#cfcfcf] bg-white py-2.5 pl-10 pr-3 text-sm text-gray-800 outline-none transition focus:border-[#777] focus:ring-2 focus:ring-[#d9d9d9]"
                    />
                  </label>

                  <select
                    value={raceFilter}
                    onChange={(event) => setRaceFilter(event.target.value)}
                    aria-label="Filter sheets by race"
                    className="w-full rounded-lg border border-[#cfcfcf] bg-white px-3 py-2.5 text-sm text-gray-800 outline-none transition focus:border-[#777] focus:ring-2 focus:ring-[#d9d9d9] md:w-[210px]"
                  >
                    <option value="">All races</option>
                    {filterRaceOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>

                  <button
                    type="button"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#cfcfcf] bg-white px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-50 md:w-auto"
                    onClick={clearFilters}
                  >
                    <RestartAltRoundedIcon sx={{ fontSize: "1rem" }} />
                    Clear
                  </button>
                </div>

                <div className="text-sm text-gray-600">
                  {filteredSheets.length} / {normalizedSheets.length} sheets
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {quickFilters.map((filter) => {
                  const isActive = raceFilter === filter.value;

                  return (
                    <button
                      key={filter.value || "all"}
                      type="button"
                      onClick={() => setRaceFilter(filter.value)}
                      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm transition ${
                        isActive
                          ? "border-[#333] bg-[#333] text-white"
                          : "border-[#d2d2d2] bg-[#fafafa] text-gray-700 hover:bg-white"
                      }`}
                    >
                      <span>{filter.label}</span>
                      <span
                        className={`rounded-full px-1.5 py-0.5 text-[11px] ${
                          isActive ? "bg-white/20 text-white" : "bg-white text-gray-500"
                        }`}
                      >
                        {filter.count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </section>

          {filteredSheets.length === 0 ? (
            <div className="rounded-xl border border-dashed border-gray-300 bg-white p-6 text-center text-sm text-gray-600">
              No sheets match the current filters.
            </div>
          ) : (
            <div className="overflow-hidden rounded-2xl border border-[#d9d9d9] bg-white shadow-sm">
              <div className="hidden border-b border-[#e5e5e5] bg-[#f5f5f5] px-4 py-3 text-[11px] uppercase tracking-[0.18em] text-gray-500 md:grid md:grid-cols-[minmax(0,1.5fr)_180px_minmax(0,1.1fr)_160px_160px] md:items-center md:gap-4">
                <span>Name</span>
                <span>Race</span>
                <span>Sheet</span>
                <span>Updated</span>
                <span className="text-right">Actions</span>
              </div>

              {filteredSheets.map((sheet) => (
                <article
                  key={sheet.id}
                  className="border-b border-[#ececec] last:border-b-0"
                >
                  <div className="flex items-stretch transition-colors hover:bg-[#fafafa]">
                    <div
                      className={`w-1.5 shrink-0 ${raceAccentClasses[sheet.race] || "bg-gray-400"}`}
                    />

                    <div className="grid min-w-0 flex-1 gap-3 px-4 py-3 md:grid-cols-[minmax(0,1.5fr)_180px_minmax(0,1.1fr)_160px_160px] md:items-center md:gap-4">
                      <div className="min-w-0">
                        <div className="mb-1 text-[11px] uppercase tracking-[0.16em] text-gray-400 md:hidden">
                          Name
                        </div>
                        <div className="truncate text-sm font-semibold text-gray-900 md:text-[15px]">
                          {sheet.displayName}
                        </div>
                      </div>

                      <div className="min-w-0">
                        <div className="mb-1 text-[11px] uppercase tracking-[0.16em] text-gray-400 md:hidden">
                          Race
                        </div>
                        <div className="truncate text-sm text-gray-700 md:text-[15px]">
                          {raceLabels[sheet.race] || "Unassigned"}
                        </div>
                      </div>

                      <div className="min-w-0">
                        <div className="mb-1 text-[11px] uppercase tracking-[0.16em] text-gray-400 md:hidden">
                          Sheet
                        </div>
                        <div className="truncate text-sm text-gray-700 md:text-[15px]">
                          {sheet.storageName}
                        </div>
                      </div>

                      <div className="text-sm text-gray-500">
                        <div className="text-[11px] uppercase tracking-[0.16em] text-gray-400 md:hidden">
                          Updated
                        </div>
                        <div className="text-gray-700">{formatDate(sheet.updatedAt)}</div>
                      </div>

                      <div className="flex shrink-0 items-center justify-start gap-1 md:justify-end">
                        <IconButton
                          component={Link}
                          to={getSheetPath(sheet.id)}
                          aria-label={`Edit sheet ${sheet.displayName}`}
                          title="Edit sheet"
                          size="small"
                          sx={{
                            border: "1px solid #d1d5db",
                            borderRadius: "10px",
                            color: "#374151",
                            "&:hover": { backgroundColor: "#f3f4f6" },
                          }}
                        >
                          <EditRoundedIcon fontSize="small" />
                        </IconButton>
                        <IconButton
                          type="button"
                          aria-label={`Duplicate sheet ${sheet.displayName}`}
                          title="Duplicate sheet"
                          size="small"
                          onClick={() => handleDuplicateSheet(sheet.id)}
                          sx={{
                            border: "1px solid #d1d5db",
                            borderRadius: "10px",
                            color: "#374151",
                            "&:hover": { backgroundColor: "#f3f4f6" },
                          }}
                        >
                          <ContentCopyRoundedIcon fontSize="small" />
                        </IconButton>
                        <IconButton
                          type="button"
                          aria-label={`Export sheet ${sheet.displayName}`}
                          title="Export sheet"
                          size="small"
                          onClick={() => downloadSheetAsText(sheet)}
                          sx={{
                            border: "1px solid #d1d5db",
                            borderRadius: "10px",
                            color: "#374151",
                            "&:hover": { backgroundColor: "#f3f4f6" },
                          }}
                        >
                          <DownloadRoundedIcon fontSize="small" />
                        </IconButton>
                        <IconButton
                          type="button"
                          aria-label={`Delete sheet ${sheet.displayName}`}
                          title="Delete sheet"
                          size="small"
                          onClick={() => handleDeleteSheet(sheet.id)}
                          sx={{
                            border: "1px solid #fecaca",
                            borderRadius: "10px",
                            color: "#dc2626",
                            "&:hover": { backgroundColor: "#fef2f2" },
                          }}
                        >
                          <DeleteOutlineRoundedIcon fontSize="small" />
                        </IconButton>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
