import { AttributeRow } from "./30_AttributeRow";
import { CategoryTitle } from "../Common/25_CategoryTitle";

export const AttributesCategories = ({ min, max, category, attributes }) => {

    return (
      <div className="w-1/3">
        <CategoryTitle category={category} />
        {Object.keys(attributes).map((attr) => (
          <AttributeRow key={attr} name={attr} category={category} min={min} max={max}/>
        ))}
      </div>
    );
  };