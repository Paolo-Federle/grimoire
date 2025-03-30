import Pages from "./Common/12_Pages";
import AttributesSection from "./Attributes/15_AttributesSection";
import SkillsSection from "./Skills/15_SkillsSection";
import { sheetData } from "./00_SheetData";
import EquipmentSection from "./Equipment/15_EquipmentSection";
import MeritsSection from "./Merits/15_MeritsSection";
import CharacterInfoSection from "./CharacterInfo/15_CharacterInfoSection";
import { HealthTracker } from "./Health/Health";
import { WillpowerTracker } from "./Willpower/Willpower";
import { RaceEnergyTracker } from "./Energy/RaceEnergyTracker";
import { SheetDataProvider } from "./05_SheetDataContext";

export default function CharacterSheet() {
  const pages = [
    { key: "page1", label: "Page 1" },
    { key: "page2", label: "Page 2" },
  ];


  return (
    <SheetDataProvider>
      <Pages pages={pages}>
        <>
          <CharacterInfoSection />
          <AttributesSection min={1} max={5} />
          <SkillsSection min={0} max={5} />

          <div className="flex w-full p-4 space-x-4">
            <HealthTracker />
            <WillpowerTracker />
            <RaceEnergyTracker />
          </div>

          <div className="flex w-full p-4 space-x-4">
            <EquipmentSection paddingOverride={true} />
            <MeritsSection sheetData={sheetData} min={1} max={5} paddingOverride={true} />


          </div>
          
        </>

        <div>
          PAGE 2
          
        </div>

      </Pages>
    </SheetDataProvider>

  )
}
