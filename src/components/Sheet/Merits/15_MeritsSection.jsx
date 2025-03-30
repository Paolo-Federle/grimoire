import CategoryContainer from "../Common/17_CategoryContainer";
import { DynamicListManager } from "../Common/27_DynamicListManager";
import { MeritRow } from "./30_MeritRow";
import { useSheetData } from "../05_SheetDataContext";

export default function MeritsSection({ min, max, paddingOverride }) {
  const { sheetData } = useSheetData();

  return (
    <div className="w-full">
      <CategoryContainer section="MERITS" paddingOverride={paddingOverride}>
        <DynamicListManager 
          dataKey="merits"
          RowComponent={MeritRow}
        />
      </CategoryContainer>
    </div>
  );
}
