import { SkillsCategories } from "./20_SkillsCategories";
import CategoryContainer from "../Common/17_CategoryContainer";


export default function SkillsSection({ min, max, sheetData }) {
  const skills = sheetData.skills;
  const categories = Object.keys(skills);

  return (
    <div className="w-full">
    <CategoryContainer section="SKILLS">

      <SkillsCategories
        category={categories[0]}
        skills={skills.mental}
        min={min} max={max}
      />
      <SkillsCategories
        category={categories[1]}
        skills={skills.physical}
        min={min} max={max}
      />
      <SkillsCategories
        category={categories[2]}
        skills={skills.social}
        min={min} max={max}
      />
    </CategoryContainer>
    </div>
  );
}
