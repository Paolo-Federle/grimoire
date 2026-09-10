import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useSheetView } from "../05_SheetDataContext";

const formatSkillName = (name) =>
  String(name || "")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

const normalizeSpecialty = (value) => String(value || "").trim().replace(/\s+/g, " ");

export default function SkillSpecialties({ skillName, specialties = [], onChange }) {
  const { mode } = useSheetView();
  const displaySkillName = formatSkillName(skillName);
  const visibleSpecialties = Array.isArray(specialties)
    ? specialties
        .map((specialty, originalIndex) => ({
          label: normalizeSpecialty(specialty),
          originalIndex,
        }))
        .filter((specialty) => specialty.label)
    : [];

  if (visibleSpecialties.length === 0) {
    return null;
  }

  const handleRemove = (indexToRemove) => {
    onChange((current) => current.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="mt-1 min-w-0 border-l-2 border-gray-200 pl-2">
      <span className="sr-only">Specialties for {displaySkillName}</span>
      <div className="flex min-w-0 flex-wrap items-center gap-1">
        {visibleSpecialties.map(({ label: specialtyLabel, originalIndex }) => (
          <span
            key={`${specialtyLabel}-${originalIndex}`}
            className="inline-flex min-h-6 max-w-full items-center gap-0.5 rounded-full border border-gray-300 bg-gray-50 py-0.5 pl-2 pr-1 text-[11px] leading-4 text-gray-700"
          >
            <span className="min-w-0 break-words font-medium">{specialtyLabel}</span>
            {mode === "edit" ? (
              <button
                type="button"
                className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-gray-500 hover:bg-gray-200 hover:text-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500"
                aria-label={`Remove ${specialtyLabel} specialty from ${displaySkillName}`}
                onClick={() => handleRemove(originalIndex)}
              >
                <CloseRoundedIcon sx={{ fontSize: "0.8rem" }} />
              </button>
            ) : null}
          </span>
        ))}
      </div>
    </div>
  );
}
