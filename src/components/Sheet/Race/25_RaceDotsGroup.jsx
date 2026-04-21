import TitleDots from "../Common/35_TitleDots";
import { useSheetData } from "../05_SheetDataContext";
import { getValueAtPath, updateValueAtPath } from "../sheetStateUtils";

const toLabel = (value) =>
  String(value)
    .replace(/_/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

export default function RaceDotsGroup({ title, path, min = 0, max = 5 }) {
  const { sheetData, setSheetData } = useSheetData();
  const traits = getValueAtPath(sheetData, path) || {};
  const entries = Object.entries(traits);

  if (!entries.length) {
    return null;
  }

  return (
    <div className="rounded border border-gray-200 p-3">
      <h2 className="mb-3 text-sm font-bold uppercase tracking-wide">{title}</h2>
      <div className={`gap-2 ${title === "Arcana" ? "grid md:grid-cols-2" : "space-y-2"}`}>
        {entries.map(([name, value]) => (
          <TitleDots
            key={name}
            name={toLabel(name)}
            min={min}
            max={max}
            value={value}
            modifier={0}
            onChange={(newValue) =>
              setSheetData((prev) => updateValueAtPath(prev, [...path, name], newValue))
            }
          />
        ))}
      </div>
    </div>
  );
}
