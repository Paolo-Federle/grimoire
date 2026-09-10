import { SkillsCategories } from "./20_SkillsCategories";
import CategoryContainer from "../Common/17_CategoryContainer";
import { useSheetData } from "../05_SheetDataContext";
import { updateValueAtPath } from "../sheetStateUtils";
import SpecialtiesToolbar from "./35_SpecialtiesToolbar";

export default function SkillsSection({ min, max }) {
  const { sheetData, setSheetData } = useSheetData();
  const skills = sheetData.skills;
  const categories = Object.keys(skills);
  const specialtiesCount = Object.values(skills).reduce(
    (categoryTotal, categorySkills) =>
      categoryTotal +
      Object.values(categorySkills).reduce(
        (skillTotal, skill) =>
          skillTotal +
          (Array.isArray(skill.specialties)
            ? skill.specialties.filter((specialty) => String(specialty || "").trim()).length
            : 0),
        0
      ),
    0
  );

  const handleAddSpecialty = (category, skillName, specialty) => {
    setSheetData((prev) =>
      updateValueAtPath(
        prev,
        ["skills", category, skillName, "specialties"],
        (currentValue) => {
          const specialties = Array.isArray(currentValue) ? currentValue : [];
          const normalizedSpecialty = specialty.toLocaleLowerCase();

          if (
            specialties.some(
              (currentSpecialty) =>
                String(currentSpecialty || "").trim().toLocaleLowerCase() ===
                normalizedSpecialty
            )
          ) {
            return specialties;
          }

          return [...specialties, specialty];
        }
      )
    );
  };

  return (
    <div className="w-full">
      <CategoryContainer section="SKILLS">
        <div className="w-full min-w-0">
          <SpecialtiesToolbar
            skills={skills}
            specialtiesCount={specialtiesCount}
            onAdd={handleAddSpecialty}
          />

          <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <SkillsCategories
              category={categories[0]}
              skills={skills.mental}
              min={min}
              max={max}
            />
            <SkillsCategories
              category={categories[1]}
              skills={skills.physical}
              min={min}
              max={max}
            />
            <SkillsCategories
              category={categories[2]}
              skills={skills.social}
              min={min}
              max={max}
            />
          </div>
        </div>
      </CategoryContainer>
    </div>
  );
}
