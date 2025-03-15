import CategoryContainer from "../Common/17_CategoryContainer";
import { DynamicListManager } from "../Common/27_DynamicListManager";
import { MeritRow } from "./30_MeritRow";

export default function MeritsSection({ sheetData, min, max, paddingOverride }) {
  return (
    <div className="w-full">
    <CategoryContainer section="MERITS" paddingOverride={paddingOverride}>
      
      <DynamicListManager 
        dataKey="merits"
        sheetData={sheetData}
        RowComponent={MeritRow}
      />
      
    </CategoryContainer>
    </div>
  );
}
