import { useId, useState } from "react";
import Collapse from "@mui/material/Collapse";
import CategoryContainer from "../Common/17_CategoryContainer";
import { NumberInput } from "../Common/35_NumberInput";
import { TextInput } from "../Common/35_TextInput";
import { useSheetData } from "../05_SheetDataContext";
import { updateValueAtPath } from "../sheetStateUtils";
import { getActiveWerewolfStats, getWerewolfForm } from "../sheetWerewolfForms";

const formatModifier = (value) => {
  if (!value) {
    return "0";
  }

  return value > 0 ? `+${value}` : String(value);
};

const SummaryRow = ({ label, value, details = null }) => (
  <div className="flex min-w-0 flex-col gap-1 rounded-lg border border-gray-100 bg-gray-50 p-3">
    <span className="text-xs font-medium text-gray-500">{label}</span>
    <span className="break-words text-lg font-semibold tabular-nums text-gray-900">{value}</span>
    {details ? (
      <span className="text-xs text-gray-500">{details}</span>
    ) : null}
  </div>
);

export default function DerivedStatsSection() {
  const { sheetData, setSheetData } = useSheetData();
  const [showDetails, setShowDetails] = useState(false);
  const detailsId = useId();
  const formStats = getActiveWerewolfStats(sheetData);
  const size = sheetData.derived_stats.size;
  const armor = sheetData.derived_stats.armor;
  const speedBase = sheetData.derived_stats.speed.base || 0;
  const speedModifier = sheetData.derived_stats.speed.modifier || 0;
  const defenseBase = sheetData.derived_stats.defense.base || 0;
  const defenseModifier = sheetData.derived_stats.defense.modifier || 0;
  const initiativeBase = sheetData.derived_stats.initiative.base || 0;
  const initiativeModifier = sheetData.derived_stats.initiative.modifier || 0;

  const totalSpeed = formStats?.speed ?? speedBase + speedModifier;
  const totalDefense = formStats?.defense ?? defenseBase + defenseModifier;
  const totalInitiative = formStats?.initiative ?? initiativeBase + initiativeModifier;

  return (
    <div className="w-full">
      <CategoryContainer section="OTHER TRAITS">
        <div className="w-full space-y-3">
          {formStats && <p className="m-0 text-xs text-gray-500">Current form: {getWerewolfForm(sheetData).name}. Detail controls edit Hishu values and additional modifiers.</p>}
          <div className={`grid w-full grid-cols-2 gap-3 sm:grid-cols-3 ${formStats ? "xl:grid-cols-6" : "xl:grid-cols-5"}`}>
            <SummaryRow label="Size" value={formStats?.size ?? size} />
            <SummaryRow label="Armor" value={formStats?.armor ?? (armor || "-")} />
            <SummaryRow
              label="Speed"
              value={totalSpeed}
              details={
                showDetails
                  ? `Base ${speedBase} | Mod ${formatModifier(speedModifier)}${formStats ? ` | Form ${formatModifier(getWerewolfForm(sheetData).speed)}` : ""}`
                  : null
              }
            />
            <SummaryRow
              label="Defense"
              value={totalDefense}
              details={
                showDetails
                  ? formStats ? "Lower of current Dexterity and Wits, plus modifier" : `Base ${defenseBase} | Mod ${formatModifier(defenseModifier)}`
                  : null
              }
            />
            <SummaryRow
              label="Initiative"
              value={totalInitiative}
              details={
                showDetails
                  ? `Base ${initiativeBase} | Mod ${formatModifier(initiativeModifier)}${formStats ? ` | Form ${formatModifier(getWerewolfForm(sheetData).initiative)}` : ""}`
                  : null
              }
            />
            {formStats && <SummaryRow label="Perception" value={formStats.perception} details={showDetails ? `Wits + Composure | Form ${formatModifier(getWerewolfForm(sheetData).perception)}` : null} />}
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
