import Pages from "./Common/12_Pages";
import AttributesSection from "./Attributes/15_AttributesSection";
import SkillsSection from "./Skills/15_SkillsSection";
import EquipmentSection from "./Equipment/15_EquipmentSection";
import MeritsSection from "./Merits/15_MeritsSection";
import CharacterInfoSection from "./CharacterInfo/15_CharacterInfoSection";
import { HealthTracker } from "./Health/Health";
import { WillpowerTracker } from "./Willpower/Willpower";
import { SheetDataProvider } from "./05_SheetDataContext";
import RaceSection from "./Race/15_RaceSection";
import SheetAutoCalculations from "./20_SheetAutoCalculations";
import MoralitySection from "./Traits/15_MoralitySection";
import DerivedStatsSection from "./Traits/15_DerivedStatsSection";

export default function CharacterSheet() {
  const pages = [
    { key: "page1", label: "Page 1" },
    { key: "page2", label: "Page 2" },
  ];


  return (
    <SheetDataProvider>
      <SheetAutoCalculations />
      <Pages pages={pages}>
        <>
          <CharacterInfoSection />
          <AttributesSection min={1} max={5} />
          <SkillsSection min={0} max={5} />

          <div className="flex w-full p-4 space-x-4">
            <HealthTracker />
            <WillpowerTracker />
            <MoralitySection />
          </div>

          <DerivedStatsSection />

          <div className="flex w-full p-4 space-x-4">
            <EquipmentSection paddingOverride={true} />
            <MeritsSection min={1} max={5} paddingOverride={true} />


          </div>
          
        </>

        <div>
          <RaceSection />
        </div>

      </Pages>
    </SheetDataProvider>

  )
}
