import { AttributesCategories } from "./20_AttributesCategories";
import CategoryContainer from "../Common/17_CategoryContainer";


export default function AttributesSection({ min, max, sheetData }) {
  const attributes = sheetData.attributes;
  const categories = Object.keys(attributes);

  return (
    <div className="w-full">
    <CategoryContainer section="ATTRIBUTES">
      <AttributesCategories
        category={categories[0]}
        attributes={attributes.mental}
        min={min} max={max}
      />
      <AttributesCategories
        category={categories[1]}
        attributes={attributes.physical}
        min={min} max={max}
      />
      <AttributesCategories
        category={categories[2]}
        attributes={attributes.social}
        min={min} max={max}
      />
    </CategoryContainer>
    </div>
  );
}
