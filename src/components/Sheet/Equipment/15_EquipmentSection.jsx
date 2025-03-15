import CategoryContainer from "../Common/17_CategoryContainer";
import { DynamicListManager } from "../Common/27_DynamicListManager";
import { EquipmentRow } from "./30_EquipmentRow";

export default function EquipmentSection({ sheetData, paddingOverride }) {
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
