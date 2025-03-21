import { useState } from "react";

export const DynamicListManager = ({ dataKey, sheetData, RowComponent }) => {
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
    sheetData[dataKey][index][field] = value;
    setItems([...sheetData[dataKey]]);
  };

  const addItem = () => {
    const newItem = getDefaultItem();
    if (Object.keys(newItem).length === 0) {
      console.error(`Cannot add new item: ${dataKey} has an invalid structure.`);
      return;
    }

    sheetData[dataKey].push(newItem);
    setItems([...sheetData[dataKey]]);
  };

  const removeItem = (index) => {
    if (items.length > 1) { // Prevent removal if it's the only row
      sheetData[dataKey].splice(index, 1);
      setItems([...sheetData[dataKey]]);
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
              totalItems={items.length}  // Pass totalItems to DynamicRow
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
