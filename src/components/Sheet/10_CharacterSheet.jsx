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
import { useState } from "react";

function SheetContent({ initialData }) {
  const { sheetData } = useSheetData();
  const [mode, setMode] = useState(initialData?.settings?.default_view || "play");
  const pages = [
    { key: "overview", label: "Character" },
    { key: "powers", label: "Powers" },
    { key: "story", label: "Story" },
    { key: "settings", label: "Settings" },
  ];

  return (
    <SheetViewProvider value={{ mode, setMode }}>
      <div className={`${sheetData.settings?.compact ? "text-sm" : ""} space-y-3`}>
        <div className="mx-auto flex max-w-[850px] flex-wrap items-center justify-between gap-2 px-4">
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
        <div className="mx-auto max-w-[850px] px-4"><DiceRoller /></div>
        <Pages pages={pages}>
          <>
            <CharacterInfoSection />
            <AttributesSection min={1} max={5} />
            <SkillsSection min={0} max={5} />

            <div className="flex w-full flex-col gap-4 p-4 md:flex-row">
              <HealthTracker />
              <WillpowerTracker />
              <MoralitySection />
            </div>

            <DerivedStatsSection />

            <div className="flex w-full flex-col gap-4 p-4 md:flex-row">
              <EquipmentSection paddingOverride={true} />
              <MeritsSection min={1} max={5} paddingOverride={true} />
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
        <SheetContent initialData={initialData} />
      </SheetCatalogProvider>
    </SheetDataProvider>
  );
}
