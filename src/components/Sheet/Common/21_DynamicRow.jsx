import { DynamicInput } from "./32_DynamicInput.jsx";
import { RemoveButton } from "./32_RemoveButton.jsx";

export const DynamicRow = ({ item, index, onChange, onRemove, isHeader = false, fieldConfig, totalItems }) => {
  if (isHeader) {
    return (
      <thead>
        <tr className="border-hidden text-gray-800 font-semibold text-sm">
          {Object.keys(fieldConfig).map((field) => (
            <th key={field} className={`${fieldConfig[field].width} px-2 py-2 text-center`}>
              {field.charAt(0).toUpperCase() + field.slice(1)}
            </th>
          ))}
          <th className="w-10"></th> {/* Space for remove button alignment */}
        </tr>
      </thead>
    );
  }

  return (
    <tr className="border-hidden">
      {Object.keys(fieldConfig).map((field) => (
        <td key={field} className={`${fieldConfig[field].width} text-center border-hidden`}>
          <DynamicInput
            value={item[field]}
            onChange={(value) => onChange(index, field, value)}
            field={field}
            type={fieldConfig[field]?.type || "auto"}
            label={fieldConfig[field]?.label ?? null}
          />
        </td>
      ))}

      {/* Hide RemoveButton if only one row exists */}
      <td className="w-10 text-center py-2">
        <RemoveButton
          onClick={() => onRemove(index)}
          className={totalItems > 1 ? "" : "invisible"}
        />
      </td>


    </tr>
  );
};
