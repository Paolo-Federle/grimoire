import { TextField } from "@mui/material";

export const NumberInput = ({ value, label = "", onChange }) => {
  return (
    <TextField
      type="number"
      variant="outlined"
      size="small"
      fullWidth
      label={label}
      value={value === "" ? 0 : value}
      onChange={(e) => {
        const newValue = e.target.value;
        if (newValue === "" || isNaN(newValue)) {
          onChange(0);
        } else {
          onChange(Math.max(0, parseInt(newValue, 10)));
        }
      }}
      onWheel={(e) => e.preventDefault()}
      onKeyDown={(e) => {
        if (["ArrowUp", "ArrowDown", "e", "E", "+", "-"].includes(e.key)) e.preventDefault();
      }}
      inputProps={{ min: 0 }}
      sx={{
        "& .MuiOutlinedInput-root": {
          padding: "4px 8px",
        },
        "& .MuiInputLabel-rootMuiInputLabel-root-root": {
          fontSize: "0.875rem",
          top: "0px",
        },
        input: {
          fontSize: "0.875rem",
          padding: "4px 8px",
        },
      }}
    />
  );
};
