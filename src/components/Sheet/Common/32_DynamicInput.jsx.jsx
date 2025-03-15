import { DotMarkers } from "../Common/40_DotMarkers.jsx";
import { TextInput } from "../Common/35_TextInput.jsx";
import { NumberInput } from "../Common/35_NumberInput.jsx";
import { CheckboxInput } from "../Common/35_CheckboxInput.jsx";
import { SelectInput } from "../Common/35_SelectInput.jsx";

export const DynamicInput = ({ value, field, onChange, type = "auto", label = null }) => {
    // Determine label: use custom if provided, otherwise generate from field name
    const computedLabel = label !== undefined ? label : field.charAt(0).toUpperCase() + field.slice(1);

    // Automatically determine input type if "auto"
    let inputType = type;
    if (type === "auto") {
        if (field.choices) inputType = "select";
        else if (typeof value === "boolean") inputType = "checkbox";
        else if (typeof value === "number") inputType = "number";
        else inputType = "text";
    }

    switch (inputType) {
        case "checkbox":
            return <CheckboxInput value={value} onChange={onChange} />;
        case "number":
            return <NumberInput value={value} label={computedLabel} onChange={onChange} />;
        case "select":
            return <SelectInput field={field} label={computedLabel} />;
        case "dotMarker":
            return <DotMarkers value={value} onChange={onChange} max={5} min={1} />;
        default:
            return <TextInput value={value} label={computedLabel} onChange={onChange} />;
    }
};
