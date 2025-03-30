import { useState } from "react";
import { useSheetData } from "../05_SheetDataContext";

export const DynamicListManager = ({ dataKey, RowComponent }) => {
  const { sheetData, setSheetData } = useSheetData();
  const [items, setItems] = useState(sheetData[dataKey] || []);

  const getDefaultItem = () => {
    if (!sheetData[dataKey] || sheetData[dataKey].length === 0 || typeof sheetData[dataKey][0] !== "object") {
      return {};
    }

    return Object.fromEntries(
      Object.entries(sheetData[dataKey][0]).map(([key, value]) => {
        if (typeof value === "boolean") return [key, false];
        if (typeof value === "number") return [key, 0];
        return [key, ""];
      })
    );
  };

  const handleChange = (index, field, value) => {
    const updatedItems = [...sheetData[dataKey]];
    updatedItems[index][field] = value;

    setSheetData(prev => {
      const updated = { ...prev };
      updated[dataKey] = updatedItems;
      return updated;
    });

    setItems(updatedItems);
  };

  const addItem = () => {
    const newItem = getDefaultItem();
    if (Object.keys(newItem).length === 0) {
      console.error(`Cannot add new item: ${dataKey} has an invalid structure.`);
      return;
    }

    const updatedItems = [...sheetData[dataKey], newItem];

    setSheetData(prev => {
      const updated = { ...prev };
      updated[dataKey] = updatedItems;
      return updated;
    });

    setItems(updatedItems);
  };

  const removeItem = (index) => {
    if (items.length > 1) {
      const updatedItems = [...sheetData[dataKey]];
      updatedItems.splice(index, 1);

      setSheetData(prev => {
        const updated = { ...prev };
        updated[dataKey] = updatedItems;
        return updated;
      });

      setItems(updatedItems);
    }
  };

  return (
    <div className="flex flex-col w-full">
      <table className="w-full border-hidden">
        <RowComponent isHeader={true} />

        <tbody>
          {items.map((item, index) => (
            <RowComponent
              key={index}
              index={index}
              item={item}
              onChange={handleChange}
              onRemove={removeItem}
              totalItems={items.length}
            />
          ))}
        </tbody>
      </table>

      <button
        className="bg-[#333] hover:bg-[#111] text-white px-4 py-2 rounded mt-2 text-sm"
        onClick={addItem}
      >
        + Add Another
      </button>
    </div>
  );
};
