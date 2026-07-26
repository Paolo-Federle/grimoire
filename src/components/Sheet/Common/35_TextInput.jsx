import { TextField } from "@mui/material";
import { useSheetView } from "../05_SheetDataContext";

export const TextInput = ({ value, label, onChange, disabled = false, multiline = false, rows }) => {
  const { mode } = useSheetView();
  return (
    <TextField
      type="text"
      variant="outlined"
      size="small"
      fullWidth
      label={label}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled || mode === "play"}
      multiline={multiline}
      rows={rows}
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
