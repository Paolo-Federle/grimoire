import Pages from "./Common/12_Pages";
import AttributesSection from "./Attributes/15_AttributesSection";
import SkillsSection from "./Skills/15_SkillsSection";
import EquipmentSection from "./Equipment/15_EquipmentSection";
import MeritsSection from "./Merits/15_MeritsSection";
import CharacterInfoSection from "./CharacterInfo/15_CharacterInfoSection";
import { HealthTracker } from "./Health/Health";
import { WillpowerTracker } from "./Willpower/Willpower";
import {
  SheetDataProvider,
  SheetViewProvider,
  useSheetData,
} from "./05_SheetDataContext";
import { SheetCatalogProvider } from "./07_SheetCatalogContext";
import RaceSection from "./Race/15_RaceSection";
import SheetAutoCalculations from "./20_SheetAutoCalculations";
import MoralitySection from "./Traits/15_MoralitySection";
import DerivedStatsSection from "./Traits/15_DerivedStatsSection";
import StorySection from "./Story/15_StorySection";
import SheetSettings from "./Settings/SheetSettings";
import DiceRoller from "./Dice/DiceRoller";
import WerewolfFormsSection from "./Race/35_WerewolfFormsSection";
import { useCallback, useState } from "react";
import { updateValueAtPath } from "./sheetStateUtils";

const isSheetMode = (value) => value === "play" || value === "edit";

function SheetContent() {
  const { sheetData, setSheetData } = useSheetData();
  const [showDerangements, setShowDerangements] = useState(false);
  const savedMode = sheetData.settings?.view_mode;
  const defaultMode = sheetData.settings?.default_view;
  const mode = isSheetMode(savedMode)
    ? savedMode
    : isSheetMode(defaultMode)
      ? defaultMode
      : "play";
  const setMode = useCallback(
    (nextMode) => {
      if (!isSheetMode(nextMode)) {
        return;
      }

      setSheetData((prev) =>
        updateValueAtPath(prev, ["settings", "view_mode"], nextMode)
      );
    },
    [setSheetData]
  );
  const pages = [
    { key: "overview", label: "Character" },
    { key: "powers", label: "Powers" },
    { key: "story", label: "Story & XP" },
    { key: "settings", label: "Settings" },
  ];

  return (
    <SheetViewProvider value={{ mode, setMode }}>
      <div className={`mx-auto w-full max-w-6xl px-3 pb-6 sm:px-6 ${sheetData.settings?.compact ? "space-y-3 text-sm" : "space-y-5"}`}>
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-gray-200 bg-white p-3 sm:px-4">
          <div className="inline-flex rounded-lg border border-gray-300 bg-white p-1">
            {[
              ["play", "Play"],
              ["edit", "Edit"],
            ].map(([value, label]) => (
              <button
                key={value}
                type="button"
                className={`rounded-md px-3 py-1.5 text-sm ${mode === value ? "bg-[#333] text-white" : "text-gray-700 hover:bg-gray-100"}`}
                onClick={() => setMode(value)}
              >
                {label}
              </button>
            ))}
          </div>
          <span className="text-xs text-gray-500">
            {mode === "play" ? "Permanent values protected" : "Editing all character values"}
          </span>
        </div>
        <DiceRoller />
        <Pages pages={pages} compact={sheetData.settings?.compact}>
          <>
            <CharacterInfoSection />
            <WerewolfFormsSection />
            <AttributesSection min={1} max={5} />
            <SkillsSection min={0} max={5} />

            <div role="group" aria-label="Character trackers" className={`grid min-w-0 grid-cols-1 gap-5 md:grid-cols-2 ${showDerangements ? "" : "xl:grid-cols-3"}`}>
              <HealthTracker />
              <WillpowerTracker />
              <div className={`min-w-0 md:col-span-2 ${showDerangements ? "" : "xl:col-span-1"}`}>
                <MoralitySection showDerangements={showDerangements} onDerangementsToggle={setShowDerangements} />
              </div>
            </div>

            <DerivedStatsSection />

            <div className="grid min-w-0 grid-cols-1 gap-5 xl:grid-cols-2">
              <EquipmentSection />
              <MeritsSection min={1} max={5} />
            </div>
          </>
          <RaceSection />
          <StorySection />
          <SheetSettings />
        </Pages>
      </div>
    </SheetViewProvider>
  );
}

export default function CharacterSheet({ initialData, onSheetDataChange }) {
  return (
    <SheetDataProvider initialData={initialData} onChange={onSheetDataChange}>
      <SheetCatalogProvider>
        <SheetAutoCalculations />
        <SheetContent />
      </SheetCatalogProvider>
    </SheetDataProvider>
  );
}
