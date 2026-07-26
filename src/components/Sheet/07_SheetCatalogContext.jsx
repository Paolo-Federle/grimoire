import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useSheetData } from "./05_SheetDataContext";
import { EMPTY_RACE_CATALOG, loadRaceCatalog } from "./raceOptions";

const SheetCatalogContext = createContext({
  catalog: EMPTY_RACE_CATALOG,
  isLoading: false,
  error: null,
});

export function SheetCatalogProvider({ children }) {
  const { sheetData } = useSheetData();
  const race = sheetData.character.race.selected || "";
  const [state, setState] = useState({
    race,
    catalog: EMPTY_RACE_CATALOG,
    isLoading: Boolean(race && race !== "mortal"),
    error: null,
  });

  useEffect(() => {
    let isActive = true;

    if (!race || race === "mortal") {
      setState({ race, catalog: EMPTY_RACE_CATALOG, isLoading: false, error: null });
      return () => {
        isActive = false;
      };
    }

    setState({ race, catalog: EMPTY_RACE_CATALOG, isLoading: true, error: null });

    loadRaceCatalog(race)
      .then((catalog) => {
        if (isActive) {
          setState({ race, catalog, isLoading: false, error: null });
        }
      })
      .catch((error) => {
        if (isActive) {
          setState({ race, catalog: EMPTY_RACE_CATALOG, isLoading: false, error });
        }
      });

    return () => {
      isActive = false;
    };
  }, [race]);

  const value = useMemo(
    () => ({
      catalog: state.race === race ? state.catalog : EMPTY_RACE_CATALOG,
      isLoading: state.race === race ? state.isLoading : true,
      error: state.race === race ? state.error : null,
    }),
    [race, state]
  );

  return (
    <SheetCatalogContext.Provider value={value}>
      {children}
    </SheetCatalogContext.Provider>
  );
}

export const useSheetCatalog = () => useContext(SheetCatalogContext);
