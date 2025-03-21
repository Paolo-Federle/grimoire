import { TextField } from "@mui/material";

export const NumberInput = ({ value, label = "", onChange, onBlur, style = {} }) => {
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
      onBlur={onBlur}
      onWheel={(e) => e.preventDefault()}
      onKeyDown={(e) => {
        if (["ArrowUp", "ArrowDown", "e", "E", "+", "-"].includes(e.key)) e.preventDefault();
      }}
      inputProps={{ min: 0 }}
      sx={{
        "& .MuiOutlinedInput-root": {
          padding: "4px 8px",
          height: style.height || "36px", // Apply height dynamically
        },
        input: {
          fontSize: "0.875rem",
          padding: "4px 8px",
        },
      }}
      style={{ maxWidth: style.maxWidth || "100%" }}
    />
  );
};
