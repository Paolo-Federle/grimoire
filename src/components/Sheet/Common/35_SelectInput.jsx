import { useMemo } from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { useSheetData, useSheetView } from "../05_SheetDataContext";
import { getValueAtPath, updateValueAtPath } from "../sheetStateUtils";

const resolveOption = (option) => {
  if (option && typeof option === "object") {
    return {
      value: option.value ?? "",
      label: option.label ?? String(option.value ?? ""),
    };
  }

  return {
    value: option ?? "",
    label: String(option ?? ""),
  };
};

export const SelectInput = ({
  field,
  options = null,
  path = null,
  value = undefined,
  label = "Select an option",
  onChange = null,
  formControlSx = {},
  selectSx = {},
}) => {
    const { sheetData, setSheetData } = useSheetData();
    const { mode } = useSheetView();
    const isUsingField = !!field;
    const availableOptions = options || (isUsingField ? field.choices || [] : []);

    const resolvedSelectedValue = useMemo(() => {
        if (value !== undefined) return value ?? "";
        if (isUsingField) return field.selected ?? "";
        if (path) return getValueAtPath(sheetData, path) ?? "";
        return "";
    }, [field, isUsingField, path, sheetData, value]);

    const resolvedOptions = availableOptions.map(resolveOption);
    if (
        resolvedSelectedValue !== "" &&
        !resolvedOptions.some((option) => option.value === resolvedSelectedValue)
    ) {
        resolvedOptions.unshift(resolveOption(resolvedSelectedValue));
    }

    const handleChange = (event) => {
        const newValue = event.target.value;

        if (onChange) {
            onChange(newValue);
        } else if (path) {
            setSheetData((prev) => updateValueAtPath(prev, path, newValue));
        }
    };

    return (
        <FormControl
            fullWidth
            variant="outlined"
            size="small"
            sx={{ fontSize: "1rem", ...formControlSx }}
        >
            <InputLabel sx={{ fontSize: "0.875rem", top: "-2px" }}>{label}</InputLabel>
            <Select
                disabled={mode === "play"}
                value={resolvedSelectedValue}
                onChange={handleChange}
                label={label}
                size="small"
                sx={{
                    fontSize: "0.875rem",
                    fontWeight: "bold",
                    padding: "4px 8px",
                    "& .MuiOutlinedInput-root": {
                        padding: "4px 8px",
                    },
                    "& .MuiSelect-select": {
                        padding: "4px 8px !important",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                    },
                    ...selectSx,
                }}
                MenuProps={{
                    PaperProps: {
                        sx: { fontSize: "1rem", padding: "4px 8px", maxWidth: "28rem" },
                    },
                }}
            >
                {resolvedOptions.map((option) => (
                    <MenuItem
                        key={String(option.value)}
                        value={option.value}
                        sx={{
                            fontSize: "0.875rem",
                            fontWeight: resolvedSelectedValue === option.value ? "bold" : "normal",
                            padding: "4px 8px",
                        }}
                    >
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};
