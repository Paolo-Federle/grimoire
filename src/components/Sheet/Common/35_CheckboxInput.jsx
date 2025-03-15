import { Checkbox } from "@mui/material";

export const CheckboxInput = ({ value, onChange }) => {
  return (
    <Checkbox
      checked={value}
      onChange={(e) => onChange(e.target.checked)}
      sx={{
        color: "primary.main",
        padding: "4px", // Reduce padding for consistency
        "& .MuiSvgIcon-root": {
          fontSize: "1.25rem", // Adjust icon size
        },
      }}
    />
  );
};
