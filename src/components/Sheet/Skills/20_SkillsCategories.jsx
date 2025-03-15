import { SkillsRow } from "./30_SkillsRow";
import { CategoryTitle } from "../Common/25_CategoryTitle";


export const SkillsCategories = ({ min, max, category, skills }) => {

    return (
      <div className="w-1/3">
        <CategoryTitle category={category} />
        {Object.keys(skills).map((attr) => (
          <SkillsRow key={attr} name={attr} category={category} min={min} max={max}/>
        ))}
      </div>
    );
  };