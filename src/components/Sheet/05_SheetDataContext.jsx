import { createContext, useContext, useState } from "react";
import { sheetData as initialSheetData } from "./00_SheetData";

const SheetDataContext = createContext();

export const SheetDataProvider = ({ children }) => {
  const [sheetData, setSheetData] = useState(initialSheetData);

  return (
    <SheetDataContext.Provider value={{ sheetData, setSheetData }}>
      {children}
    </SheetDataContext.Provider>
  );
};

export const useSheetData = () => useContext(SheetDataContext);
