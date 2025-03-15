import { DynamicRow } from "../Common/21_DynamicRow";

export const EquipmentRow = (props) => {
  const fieldConfig = {
    name: { width: "w-2/3", type: "text", label: "" },
    durability: { width: "w-1/12", type: "number", label: "" },
    structure: { width: "w-1/12", type: "number", label: "" },
    size: { width: "w-1/12", type: "number", label: "" },
    cost: { width: "w-1/12", type: "number", label: "" },
    worn: { width: "w-1/12", type: "checkbox" },
  };

  return <DynamicRow {...props} fieldConfig={fieldConfig} />;
};
