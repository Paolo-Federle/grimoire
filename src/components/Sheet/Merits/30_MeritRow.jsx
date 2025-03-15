import { DynamicRow } from "../Common/21_DynamicRow";

export const MeritRow = (props) => {
  const fieldConfig = {
    name: { width: "w-full", type: "text" },
    dots: { width: "w-auto", type: "dotMarker" }, 
  };

  return <DynamicRow {...props} fieldConfig={fieldConfig} />;
};
