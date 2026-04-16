import { useEffect, useMemo, useState } from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { useSheetData } from "../05_SheetDataContext";
import { getValueAtPath, updateValueAtPath } from "../sheetStateUtils";

export const SelectInput = ({ field, options = null, path = null, label = "Select an option", onChange = null }) => {
  const { sheetData, setSheetData } = useSheetData();
    const isUsingField = !!field;
    const availableOptions = options || (isUsingField ? field.choices || [] : []);

    const resolvedSelectedValue = useMemo(() => {
        if (isUsingField) return field.selected ?? "";
        if (path) return getValueAtPath(sheetData, path) ?? "";
        return "";
    }, [field, isUsingField, path, sheetData]);

    const [selected, setSelected] = useState(resolvedSelectedValue);

    useEffect(() => {
        setSelected(resolvedSelectedValue);
    }, [resolvedSelectedValue]);

    const handleChange = (event) => {
        const newValue = event.target.value;

        if (onChange) {
            onChange(newValue);
        } else if (path) {
            setSheetData((prev) => updateValueAtPath(prev, path, newValue));
        }

        setSelected(newValue);
    };

    return (
        <FormControl fullWidth variant="outlined" size="small" sx={{ fontSize: "1rem" }}>
            <InputLabel sx={{ fontSize: "0.875rem", top: "-2px" }}>{label}</InputLabel>
            <Select
                value={selected}
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
                    },
                }}
                MenuProps={{
                    PaperProps: {
                        sx: { fontSize: "1rem", padding: "4px 8px" },
                    },
                }}
            >
                {availableOptions.map((option) => (
                    <MenuItem
                        key={option}
                        value={option}
                        sx={{
                            fontSize: "0.875rem",
                            fontWeight: selected === option ? "bold" : "normal",
                            padding: "4px 8px",
                        }}
                    >
                        {option.charAt(0).toUpperCase() + option.slice(1)}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};
