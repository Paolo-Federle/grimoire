import { useId, useState } from "react";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import TitleDots from "../Common/35_TitleDots";
import { useSheetData, useSheetView } from "../05_SheetDataContext";
import { getValueAtPath, updateValueAtPath } from "../sheetStateUtils";

const toLabel = (value) =>
  String(value)
    .replace(/_/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

const ARCANA_ROLE_OPTIONS = [
  { value: "auto", label: "Automatic" },
  { value: "common", label: "Common" },
  { value: "ruling", label: "Ruling" },
  { value: "inferior", label: "Inferior" },
];

const ArcanaBadge = ({ role, isCustom = false }) => {
  if (role === "ruling") {
    return (
      <span
        title={`${isCustom ? "Custom " : ""}Ruling Arcanum`}
        className="rounded bg-gray-900 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white"
      >
        Ruling
      </span>
    );
  }

  if (role === "inferior") {
    return (
      <span
        title={`${isCustom ? "Custom " : ""}Inferior Arcanum`}
        className="rounded border border-gray-400 bg-white px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-gray-700"
      >
        Inferior
      </span>
    );
  }

  return null;
};

const resolveAutomaticArcanaRole = (name, sheetData, affinities) => {
  if (!affinities) {
    return null;
  }

  const mageDetails = sheetData.character.details.mage || {};
  const selectedPath = mageDetails.path?.selected || "";
  const selectedLegacy = mageDetails.legacy?.selected || "";
  const pathAffinity = affinities.paths?.[selectedPath] || {};
  const legacyPrimary = affinities.legacies?.[selectedLegacy] || [];
  const normalizedName = String(name).toLowerCase();

  if (
    pathAffinity.ruling?.includes(normalizedName) ||
    legacyPrimary.includes(normalizedName)
  ) {
    return "ruling";
  }

  return pathAffinity.inferior === normalizedName ? "inferior" : null;
};

const resolveArcanaRole = (name, sheetData, affinities, overrides) => {
  const normalizedName = String(name).toLowerCase();
  const override = overrides[normalizedName];

  if (override === "common") {
    return null;
  }

  if (override === "ruling" || override === "inferior") {
    return override;
  }

  const automaticRole = resolveAutomaticArcanaRole(name, sheetData, affinities);
  const customInferior = Object.entries(overrides).find(
    ([, role]) => role === "inferior"
  )?.[0];

  if (automaticRole === "inferior" && customInferior && customInferior !== normalizedName) {
    return null;
  }

  return automaticRole;
};

export default function RaceDotsGroup({ title, path, min = 0, max = 5, affinities = null }) {
  const { sheetData, setSheetData } = useSheetData();
  const { mode } = useSheetView();
  const [affinityMenuAnchor, setAffinityMenuAnchor] = useState(null);
  const [editingArcana, setEditingArcana] = useState("");
  const affinityMenuId = useId();
  const traits = getValueAtPath(sheetData, path) || {};
  const entries = Object.entries(traits);
  const isArcanaGroup = title === "Arcana";
  const affinityOverrides = isArcanaGroup
    ? sheetData.race_powers.mage.arcana_affinity_overrides || {}
    : {};
  const hasAffinityOverrides = Object.keys(affinityOverrides).length > 0;

  const closeAffinityMenu = () => {
    setAffinityMenuAnchor(null);
    setEditingArcana("");
  };

  const openAffinityMenu = (event, name) => {
    setAffinityMenuAnchor(event.currentTarget);
    setEditingArcana(name);
  };

  const setAffinityOverride = (role) => {
    if (!editingArcana) {
      return;
    }

    setSheetData((prev) =>
      updateValueAtPath(
        prev,
        ["race_powers", "mage", "arcana_affinity_overrides"],
        (currentOverrides = {}) => {
          const nextOverrides = { ...currentOverrides };

          if (role === "auto") {
            delete nextOverrides[editingArcana];
          } else {
            nextOverrides[editingArcana] = role;
          }

          if (role === "inferior") {
            Object.keys(nextOverrides).forEach((name) => {
              if (name !== editingArcana && nextOverrides[name] === "inferior") {
                delete nextOverrides[name];
              }
            });
          }

          return nextOverrides;
        }
      )
    );
    closeAffinityMenu();
  };

  const resetAffinityOverrides = () => {
    setSheetData((prev) =>
      updateValueAtPath(prev, ["race_powers", "mage", "arcana_affinity_overrides"], {})
    );
  };

  if (!entries.length) {
    return null;
  }

  return (
    <div className="rounded border border-gray-200 p-3">
      <div className="mb-3 flex min-h-6 items-center justify-between gap-2">
        <h2 className="text-sm font-bold uppercase tracking-wide">{title}</h2>
        {isArcanaGroup && mode !== "play" && hasAffinityOverrides ? (
          <button
            type="button"
            className="rounded px-2 py-1 text-[11px] font-semibold text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500"
            onClick={resetAffinityOverrides}
          >
            Reset affinities
          </button>
        ) : null}
      </div>
      <div className={`gap-2 ${title === "Arcana" ? "grid md:grid-cols-2" : "space-y-2"}`}>
        {entries.map(([name, value]) => {
          const arcanaRole = isArcanaGroup
            ? resolveArcanaRole(name, sheetData, affinities, affinityOverrides)
            : null;
          const normalizedName = String(name).toLowerCase();
          const isCustom = Boolean(affinityOverrides[normalizedName]);

          return (
            <TitleDots
              key={name}
              name={toLabel(name)}
              min={min}
              max={max}
              value={value}
              modifier={0}
              trailing={
                isArcanaGroup ? (
                  <span className="flex items-center gap-1">
                    {arcanaRole ? <ArcanaBadge role={arcanaRole} isCustom={isCustom} /> : null}
                    {mode !== "play" ? (
                      <button
                        type="button"
                        title={`Customize ${toLabel(name)} affinity`}
                        aria-label={`Customize ${toLabel(name)} affinity`}
                        aria-controls={affinityMenuAnchor ? affinityMenuId : undefined}
                        aria-haspopup="menu"
                        className="inline-flex h-6 w-6 items-center justify-center rounded text-gray-400 hover:bg-gray-100 hover:text-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500"
                        onClick={(event) => openAffinityMenu(event, normalizedName)}
                      >
                        <TuneRoundedIcon sx={{ fontSize: "0.9rem" }} />
                      </button>
                    ) : null}
                  </span>
                ) : null
              }
              onChange={(newValue) =>
                setSheetData((prev) => updateValueAtPath(prev, [...path, name], newValue))
              }
            />
          );
        })}
      </div>

      {isArcanaGroup ? (
        <Menu
          id={affinityMenuId}
          anchorEl={affinityMenuAnchor}
          open={Boolean(affinityMenuAnchor)}
          onClose={closeAffinityMenu}
          MenuListProps={{
            "aria-label": editingArcana
              ? `${toLabel(editingArcana)} affinity role`
              : "Arcana affinity role",
            dense: true,
          }}
        >
          {ARCANA_ROLE_OPTIONS.map((option) => {
            const selectedRole = affinityOverrides[editingArcana] || "auto";

            return (
              <MenuItem
                key={option.value}
                selected={selectedRole === option.value}
                onClick={() => setAffinityOverride(option.value)}
                sx={{ minWidth: "9rem", gap: 1, fontSize: "0.8rem" }}
              >
                <span className="inline-flex w-4">
                  {selectedRole === option.value ? (
                    <CheckRoundedIcon sx={{ fontSize: "0.9rem" }} />
                  ) : null}
                </span>
                {option.label}
              </MenuItem>
            );
          })}
        </Menu>
      ) : null}
    </div>
  );
}
