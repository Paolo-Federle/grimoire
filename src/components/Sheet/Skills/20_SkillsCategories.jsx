import { SkillsRow } from "./30_SkillsRow";
import { CategoryTitle } from "../Common/25_CategoryTitle";


export const SkillsCategories = ({ min, max, category, skills }) => {
  const responsiveSpan = category === "social" ? "md:col-span-2 lg:col-span-1" : "";

  return (
    <section
      className={`min-w-0 rounded-lg border border-gray-200 bg-white p-2 ${responsiveSpan}`}
    >
      <CategoryTitle category={category} />
      <div className="space-y-1.5">
        {Object.keys(skills).map((attr) => (
          <SkillsRow
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
