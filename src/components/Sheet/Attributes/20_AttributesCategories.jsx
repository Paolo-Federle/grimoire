import { AttributeRow } from "./30_AttributeRow";
import { CategoryTitle } from "../Common/25_CategoryTitle";

export const AttributesCategories = ({ min, max, category, attributes }) => {
  const responsiveSpan = category === "social" ? "md:col-span-2 xl:col-span-1" : "";

  return (
    <section className={`min-w-0 p-3 ${responsiveSpan}`}>
      <CategoryTitle category={category} />
      <div className="space-y-1.5">
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
    </section>
  );
};
