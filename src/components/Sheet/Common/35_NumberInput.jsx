import { TextField } from "@mui/material";

export const NumberInput = ({
  value,
  label = "",
  onChange,
  onBlur,
  style = {},
  allowNegative = false,
  min = null,
}) => {
  const resolvedMin = min ?? (allowNegative ? undefined : 0);

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
          const parsedValue = parseInt(newValue, 10);
          if (resolvedMin !== undefined) {
            onChange(Math.max(resolvedMin, parsedValue));
            return;
          }

          onChange(parsedValue);
        }
      }}
      onBlur={onBlur}
      onWheel={(e) => e.preventDefault()}
      onKeyDown={(e) => {
        const blockedKeys = allowNegative
          ? ["ArrowUp", "ArrowDown", "e", "E", "+"]
          : ["ArrowUp", "ArrowDown", "e", "E", "+", "-"];

        if (blockedKeys.includes(e.key)) e.preventDefault();
      }}
      inputProps={resolvedMin !== undefined ? { min: resolvedMin } : {}}
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
