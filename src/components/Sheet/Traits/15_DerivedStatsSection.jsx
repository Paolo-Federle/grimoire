import { useState } from "react";
import CategoryContainer from "../Common/17_CategoryContainer";
import { NumberInput } from "../Common/35_NumberInput";
import { TextInput } from "../Common/35_TextInput";
import { useSheetData } from "../05_SheetDataContext";
import { updateValueAtPath } from "../sheetStateUtils";

const formatModifier = (value) => {
  if (!value) {
    return "0";
  }

  return value > 0 ? `+${value}` : String(value);
};

const SummaryRow = ({ label, value, details = null }) => (
  <div className="rounded bg-gray-50 px-3 py-2 text-sm">
    <div className="flex items-center justify-between gap-3">
      <span className="font-semibold">{label}</span>
      <span>{value}</span>
    </div>
    {details ? <div className="mt-1 text-xs text-gray-500">{details}</div> : null}
  </div>
);

export default function DerivedStatsSection() {
  const { sheetData, setSheetData } = useSheetData();
  const [showDetails, setShowDetails] = useState(false);
  const size = sheetData.derived_stats.size;
  const armor = sheetData.derived_stats.armor;
  const speedBase = sheetData.derived_stats.speed.base || 0;
  const speedModifier = sheetData.derived_stats.speed.modifier || 0;
  const defenseBase = sheetData.derived_stats.defense.base || 0;
  const defenseModifier = sheetData.derived_stats.defense.modifier || 0;
  const initiativeBase = sheetData.derived_stats.initiative.base || 0;
  const initiativeModifier = sheetData.derived_stats.initiative.modifier || 0;

  const totalSpeed = speedBase + speedModifier;
  const totalDefense = defenseBase + defenseModifier;
  const totalInitiative = initiativeBase + initiativeModifier;

  return (
    <div className="w-full">
      <CategoryContainer section="OTHER TRAITS">
        <div className="w-full space-y-3">
          <div className="grid w-full gap-2 md:grid-cols-2">
            <SummaryRow label="Size" value={size} />
            <SummaryRow label="Armor" value={armor || "-"} />
            <SummaryRow
              label="Speed"
              value={totalSpeed}
              details={`Base ${speedBase} | Mod ${formatModifier(speedModifier)}`}
            />
            <SummaryRow
              label="Defense"
              value={totalDefense}
              details={`Base ${defenseBase} | Mod ${formatModifier(defenseModifier)}`}
            />
            <SummaryRow
              label="Initiative"
              value={totalInitiative}
              details={`Base ${initiativeBase} | Mod ${formatModifier(initiativeModifier)}`}
            />
          </div>

          <button
            type="button"
            className="rounded bg-[#333] px-4 py-2 text-sm text-white hover:bg-[#111]"
            onClick={() => setShowDetails((prev) => !prev)}
          >
            {showDetails ? "Hide details" : "Show details"}
          </button>

          {showDetails && (
            <div className="grid w-full gap-3 md:grid-cols-2">
              <NumberInput
                label="Size"
                value={size}
                onChange={(value) =>
                  setSheetData((prev) =>
                    updateValueAtPath(prev, ["derived_stats", "size"], value)
                  )
                }
              />

              <TextInput
                label="Armor"
                value={armor}
                onChange={(value) =>
                  setSheetData((prev) =>
                    updateValueAtPath(prev, ["derived_stats", "armor"], value)
                  )
                }
              />

              <NumberInput
                label="Speed Modifier"
                value={speedModifier}
                allowNegative={true}
                onChange={(value) =>
                  setSheetData((prev) =>
                    updateValueAtPath(prev, ["derived_stats", "speed", "modifier"], value)
                  )
                }
              />

              <NumberInput
                label="Defense Modifier"
                value={defenseModifier}
                allowNegative={true}
                onChange={(value) =>
                  setSheetData((prev) =>
                    updateValueAtPath(prev, ["derived_stats", "defense", "modifier"], value)
                  )
                }
              />

              <NumberInput
                label="Initiative Modifier"
                value={initiativeModifier}
                allowNegative={true}
                onChange={(value) =>
                  setSheetData((prev) =>
                    updateValueAtPath(prev, ["derived_stats", "initiative", "modifier"], value)
                  )
                }
              />
            </div>
          )}
        </div>
      </CategoryContainer>
    </div>
  );
}
