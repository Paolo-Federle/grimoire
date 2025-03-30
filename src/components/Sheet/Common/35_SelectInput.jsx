import { useState } from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { useSheetData } from "../05_SheetDataContext";

export const SelectInput = ({ field, options = null, path = null, label = "Select an option", onChange = null }) => {
    const { sheetData, setSheetData } = useSheetData();
    const isUsingSheetData = !!field;
    const availableOptions = options || (isUsingSheetData ? field.choices : []);

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
            onChange(newValue);
        } else if (isUsingSheetData) {
            field.selected = newValue;
            setSheetData((prev) => {
                const updated = { ...prev };
                return updated;
            });
        } else if (path) {
            setSheetData((prev) => {
                const updated = { ...prev };
                let ref = updated;
                const keys = path.split(".");
                keys.slice(0, -1).forEach((key) => (ref = ref[key]));
                ref[keys[keys.length - 1]] = newValue;
                return updated;
            });
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
