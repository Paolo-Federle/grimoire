import { AttributeRow } from "./30_AttributeRow";
import { CategoryTitle } from "../Common/25_CategoryTitle";

export const AttributesCategories = ({ min, max, category, attributes }) => {
  const responsiveSpan = category === "social" ? "md:col-span-2 lg:col-span-1" : "";

  return (
    <div className={`min-w-0 ${responsiveSpan}`}>
      <CategoryTitle category={category} />
      {Object.keys(attributes).map((attr) => (
        <AttributeRow
          key={attr}
          name={attr}
          category={category}
          min={min}
          max={max}
        />
      ))}
    </div>
  );
};
