import CategoryContainer from "../Common/17_CategoryContainer";
import { DynamicListManager } from "../Common/27_DynamicListManager";
import { EquipmentRow } from "./30_EquipmentRow";
import { useSheetData } from "../05_SheetDataContext";

export default function EquipmentSection({ paddingOverride }) {
  const { sheetData } = useSheetData();

  return (
    <div className="w-full">
      <CategoryContainer section="EQUIPMENT" paddingOverride={paddingOverride}>
        <DynamicListManager 
          dataKey="equipment"
          sheetData={sheetData}
          RowComponent={EquipmentRow}
        />
      </CategoryContainer>
    </div>
  );
}
