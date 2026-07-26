import { createContext, useContext, useEffect, useMemo, useRef, useState } from "react";
import { sheetData as initialSheetData } from "./00_SheetData";
import { normalizeSheetData } from "./sheetStorage";

const SheetDataContext = createContext();
const SheetViewContext = createContext({ mode: "edit", setMode: () => {} });
const AUTOSAVE_DELAY_MS = 400;

export const SheetDataProvider = ({
  children,
  initialData = initialSheetData,
  onChange = null,
}) => {
  const [sheetData, setSheetData] = useState(() => normalizeSheetData(initialData));
  const onChangeRef = useRef(onChange);
  const previousInitialDataRef = useRef(initialData);
  const lastSavedDataRef = useRef(sheetData);
  const pendingDataRef = useRef(null);
  const autosaveTimerRef = useRef(null);

  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  useEffect(() => {
    if (previousInitialDataRef.current === initialData) {
      return;
    }

    previousInitialDataRef.current = initialData;
    const normalizedData = normalizeSheetData(initialData);
    window.clearTimeout(autosaveTimerRef.current);
    pendingDataRef.current = null;
    lastSavedDataRef.current = normalizedData;
    setSheetData(normalizedData);
  }, [initialData]);

  useEffect(() => {
    if (sheetData === lastSavedDataRef.current) {
      return;
    }

    pendingDataRef.current = sheetData;
    window.clearTimeout(autosaveTimerRef.current);
    autosaveTimerRef.current = window.setTimeout(() => {
      const pendingData = pendingDataRef.current;
      pendingDataRef.current = null;

      if (pendingData && typeof onChangeRef.current === "function") {
        onChangeRef.current(pendingData);
        lastSavedDataRef.current = pendingData;
      }
    }, AUTOSAVE_DELAY_MS);

    return () => window.clearTimeout(autosaveTimerRef.current);
  }, [sheetData]);

  useEffect(
    () => () => {
      window.clearTimeout(autosaveTimerRef.current);
      const pendingData = pendingDataRef.current;

      if (pendingData && typeof onChangeRef.current === "function") {
        onChangeRef.current(pendingData);
      }
    },
    []
  );

  const contextValue = useMemo(
    () => ({ sheetData, setSheetData }),
    [sheetData]
  );

  return (
    <SheetDataContext.Provider value={contextValue}>
      {children}
    </SheetDataContext.Provider>
  );
};

export const useSheetData = () => useContext(SheetDataContext);
export const SheetViewProvider = SheetViewContext.Provider;
export const useSheetView = () => useContext(SheetViewContext);
