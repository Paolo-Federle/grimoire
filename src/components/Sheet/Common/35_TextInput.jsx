import { TextField } from "@mui/material";

export const TextInput = ({ value, label, onChange }) => {
  return (
    <TextField
      type="text"
      variant="outlined"
      size="small"
      fullWidth
      label={label}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      sx={{
        "& .MuiOutlinedInput-root": {
          padding: "4px 8px",
        },
        "& .MuiInputLabel-root": {
          fontSize: "0.875rem", // Match SelectInput label
          top: "0", // Align label better
        },
        input: {
          fontSize: "0.875rem",
          padding: "4px 8px",
        },
      }}
    />
  );
};
