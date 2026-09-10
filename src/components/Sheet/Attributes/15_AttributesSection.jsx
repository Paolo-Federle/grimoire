import { AttributesCategories } from "./20_AttributesCategories";
import CategoryContainer from "../Common/17_CategoryContainer";
import { useSheetData } from "../05_SheetDataContext";

export default function AttributesSection({ min, max }) {
  const { sheetData } = useSheetData();
  const attributes = sheetData.attributes;
  const categories = Object.keys(attributes);

  return (
    <div className="w-full">
      <CategoryContainer section="ATTRIBUTES">
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
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
      </CategoryContainer>
    </div>
  );
}
