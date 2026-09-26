import { useId, useState } from "react";
import Collapse from "@mui/material/Collapse";
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
  <div className="flex min-w-0 flex-wrap items-baseline gap-x-2 gap-y-0.5 rounded bg-gray-50 px-2.5 py-1.5 text-sm">
    <span className="font-semibold">{label}</span>
    <span className="tabular-nums">{value}</span>
    {details ? (
      <span className="whitespace-nowrap text-xs text-gray-500">{details}</span>
    ) : null}
  </div>
);

export default function DerivedStatsSection() {
  const { sheetData, setSheetData } = useSheetData();
  const [showDetails, setShowDetails] = useState(false);
  const detailsId = useId();
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
          <div className="grid w-full gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            <SummaryRow label="Size" value={size} />
            <SummaryRow label="Armor" value={armor || "-"} />
            <SummaryRow
              label="Speed"
              value={totalSpeed}
              details={
                showDetails
                  ? `Base ${speedBase} | Mod ${formatModifier(speedModifier)}`
                  : null
              }
            />
            <SummaryRow
              label="Defense"
              value={totalDefense}
              details={
                showDetails
                  ? `Base ${defenseBase} | Mod ${formatModifier(defenseModifier)}`
                  : null
              }
            />
            <SummaryRow
              label="Initiative"
              value={totalInitiative}
              details={
                showDetails
                  ? `Base ${initiativeBase} | Mod ${formatModifier(initiativeModifier)}`
                  : null
              }
            />
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              className="rounded bg-[#333] px-2 py-1 text-xs text-white hover:bg-[#111] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500"
              aria-controls={detailsId}
              aria-expanded={showDetails}
              onClick={() => setShowDetails((prev) => !prev)}
            >
              {showDetails ? "Hide details" : "Show details"}
            </button>
          </div>

          <Collapse in={showDetails} timeout="auto">
            <div
              id={detailsId}
              role="region"
              aria-label="Other traits details"
              className="grid w-full gap-2 pt-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
            >
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
          </Collapse>
        </div>
      </CategoryContainer>
    </div>
  );
}
