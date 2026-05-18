import { createContext, useContext, useEffect, useRef, useState } from "react";
import { sheetData as initialSheetData } from "./00_SheetData";
import { normalizeSheetData } from "./sheetStorage";

const SheetDataContext = createContext();

export const SheetDataProvider = ({
  children,
  initialData = initialSheetData,
  onChange = null,
}) => {
  const [sheetData, setSheetData] = useState(() => normalizeSheetData(initialData));
  const onChangeRef = useRef(onChange);

  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  useEffect(() => {
    setSheetData(normalizeSheetData(initialData));
  }, [initialData]);

  useEffect(() => {
    if (typeof onChangeRef.current === "function") {
      onChangeRef.current(sheetData);
    }
  }, [sheetData]);

  return (
    <SheetDataContext.Provider value={{ sheetData, setSheetData }}>
      {children}
    </SheetDataContext.Provider>
  );
};

export const useSheetData = () => useContext(SheetDataContext);
