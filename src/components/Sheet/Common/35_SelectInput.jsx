import { useState } from "react";
import { sheetData } from "../00_SheetData";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

export const SelectInput = ({ field, options = null, path = null, label = "Select an option", onChange = null }) => {
    const isUsingSheetData = !!field;
    const availableOptions = options || (isUsingSheetData ? field.choices : []);

    // Get the initial selected value from sheetData or path
    const getSelectedValue = () => {
        if (isUsingSheetData) return field.selected;
        if (path) {
            let ref = sheetData;
            const keys = path.split(".");
            keys.forEach((key) => (ref = ref[key]));
            return ref;
        }
        return "";
    };

    const [selected, setSelected] = useState(getSelectedValue());

    const handleChange = (event) => {
        const newValue = event.target.value;

        if (onChange) {
            onChange(newValue); // Use passed onChange if available
        } else if (isUsingSheetData) {
            field.selected = newValue; // Update sheetData directly
        } else if (path) {
            let ref = sheetData;
            const keys = path.split(".");
            keys.slice(0, -1).forEach((key) => (ref = ref[key])); // Navigate to correct object
            ref[keys[keys.length - 1]] = newValue; // Set the value
        }

        setSelected(newValue); // Trigger re-render
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
