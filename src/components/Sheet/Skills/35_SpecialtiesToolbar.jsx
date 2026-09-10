import { useEffect, useRef, useState } from "react";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useSheetView } from "../05_SheetDataContext";

const formatLabel = (value) =>
  String(value || "")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

const normalizeSpecialty = (value) => String(value || "").trim().replace(/\s+/g, " ");

const DEFAULT_SKILL = "mental.academics";

export default function SpecialtiesToolbar({ skills, specialtiesCount, onAdd }) {
  const { mode } = useSheetView();
  const [isAdding, setIsAdding] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(DEFAULT_SKILL);
  const [draft, setDraft] = useState("");
  const [error, setError] = useState("");
  const addButtonRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isAdding) {
      inputRef.current?.focus();
    }
  }, [isAdding]);

  useEffect(() => {
    if (mode !== "edit" && isAdding) {
      setIsAdding(false);
      setDraft("");
      setError("");
    }
  }, [isAdding, mode]);

  const closeEditor = () => {
    setIsAdding(false);
    setDraft("");
    setError("");
    window.requestAnimationFrame(() => addButtonRef.current?.focus());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const specialty = normalizeSpecialty(draft);

    if (!specialty) {
      return;
    }

    const [category, skillName] = selectedSkill.split(".");
    const currentSpecialties = skills[category]?.[skillName]?.specialties || [];
    const isDuplicate = currentSpecialties.some(
      (currentSpecialty) =>
        normalizeSpecialty(currentSpecialty).toLocaleLowerCase() ===
        specialty.toLocaleLowerCase()
    );

    if (isDuplicate) {
      setError("That specialty is already listed for this skill.");
      return;
    }

    onAdd(category, skillName, specialty);
    closeEditor();
  };

  return (
    <div className="mb-4 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5">
      <div className="flex flex-wrap items-center justify-end gap-2">
        <div className="flex shrink-0 items-center gap-2">
          <span className="rounded-full border border-gray-300 bg-white px-2.5 py-1 text-xs font-semibold text-gray-700">
            {specialtiesCount} {specialtiesCount === 1 ? "specialty" : "specialties"}
          </span>
          {mode === "edit" && !isAdding ? (
            <button
              ref={addButtonRef}
              type="button"
              className="inline-flex min-h-8 items-center gap-1 rounded-md bg-[#333] px-2.5 text-xs font-semibold text-white hover:bg-[#111] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
              aria-expanded="false"
              onClick={() => setIsAdding(true)}
            >
              <AddRoundedIcon sx={{ fontSize: "1rem" }} />
              Add specialty
            </button>
          ) : null}
        </div>
      </div>

      {mode === "edit" && isAdding ? (
        <form
          className="mt-2 grid min-w-0 grid-cols-1 gap-2 border-t border-gray-200 pt-2 sm:grid-cols-[minmax(9rem,0.8fr)_minmax(12rem,1.2fr)_auto]"
          onSubmit={handleSubmit}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              event.preventDefault();
              closeEditor();
            }
          }}
        >
          <label className="min-w-0">
            <span className="sr-only">Skill for specialty</span>
            <select
              className="h-9 w-full min-w-0 rounded-md border border-gray-300 bg-white px-2 text-xs text-gray-800 outline-none focus:border-gray-600 focus:ring-2 focus:ring-gray-200"
              aria-label="Skill for specialty"
              value={selectedSkill}
              onChange={(event) => {
                setSelectedSkill(event.target.value);
                setError("");
              }}
            >
              {Object.entries(skills).map(([category, categorySkills]) => (
                <optgroup key={category} label={formatLabel(category)}>
                  {Object.keys(categorySkills).map((skillName) => (
                    <option key={skillName} value={`${category}.${skillName}`}>
                      {formatLabel(skillName)}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
          </label>

          <div className="min-w-0">
            <label className="sr-only" htmlFor="new-skill-specialty">
              Specialty name
            </label>
            <input
              ref={inputRef}
              id="new-skill-specialty"
              type="text"
              value={draft}
              placeholder="Specialty name, e.g. History"
              className="h-9 w-full min-w-0 rounded-md border border-gray-300 bg-white px-2.5 text-xs text-gray-800 outline-none focus:border-gray-600 focus:ring-2 focus:ring-gray-200"
              aria-describedby={error ? "skill-specialty-error" : undefined}
              onChange={(event) => {
                setDraft(event.target.value);
                setError("");
              }}
            />
            {error ? (
              <p
                id="skill-specialty-error"
                className="mb-0 mt-1 text-[11px] leading-4 text-red-700"
                role="alert"
              >
                {error}
              </p>
            ) : null}
          </div>

          <div className="flex items-start gap-1">
            <button
              type="submit"
              disabled={!normalizeSpecialty(draft)}
              className="inline-flex h-9 flex-1 items-center justify-center gap-1 rounded-md bg-[#333] px-2.5 text-xs font-semibold text-white hover:bg-[#111] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:bg-gray-300 sm:flex-none"
              aria-label="Save specialty"
            >
              <CheckRoundedIcon sx={{ fontSize: "1rem" }} />
              Save
            </button>
            <button
              type="button"
              className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500"
              aria-label="Cancel adding specialty"
              onClick={closeEditor}
            >
              <CloseRoundedIcon sx={{ fontSize: "1rem" }} />
            </button>
          </div>
        </form>
      ) : null}
    </div>
  );
}
