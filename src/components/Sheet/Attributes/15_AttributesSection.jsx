import { AttributesCategories } from "./20_AttributesCategories";
import CategoryContainer from "../Common/17_CategoryContainer";
import { useSheetData, useSheetView } from "../05_SheetDataContext";
import { getWerewolfForm, isWerewolfSheet } from "../sheetWerewolfForms";

export default function AttributesSection({ min, max }) {
  const { sheetData } = useSheetData();
  const { mode } = useSheetView();
  const werewolf = isWerewolfSheet(sheetData);
  const attributes = sheetData.attributes;
  const categories = Object.keys(attributes);

  return (
    <div className="w-full">
      <CategoryContainer section="ATTRIBUTES">
        <div className="w-full min-w-0 space-y-2">
        {werewolf && <p className="m-0 text-xs text-gray-500">{mode === "play" ? `Current form: ${getWerewolfForm(sheetData).name}. Colored dots include modifiers and form bonuses.` : "Edit Hishu ratings. Colored dots include modifiers and form bonuses."}</p>}
        <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          <AttributesCategories
            category={categories[0]}
            attributes={attributes.mental}
            min={min}
            max={max}
          />
          <AttributesCategories
            category={categories[1]}
            attributes={attributes.physical}
            min={min}
            max={max}
          />
          <AttributesCategories
            category={categories[2]}
            attributes={attributes.social}
            min={min}
            max={max}
          />
        </div>
        </div>
      </CategoryContainer>
    </div>
  );
}
