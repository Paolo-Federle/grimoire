import { act, fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import LazyDetailRoute from "../components/LazyDetailRoute";
import { SheetDataProvider, useSheetData } from "../components/Sheet/05_SheetDataContext";
import { sheetData } from "../components/Sheet/00_SheetData";
import { normalizeSheetData } from "../components/Sheet/sheetStorage";
import { loadRaceCatalog } from "../components/Sheet/raceOptions";

function SheetUpdateButton() {
  const { setSheetData } = useSheetData();
  return (
    <button
      type="button"
      onClick={() =>
        setSheetData((current) => ({
          ...current,
          character: { ...current.character, name: "Debounced" },
        }))
      }
    >
      Update sheet
    </button>
  );
}

describe("sheet state and persistence", () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it("keeps catalogs out of the persisted state and migrates old choices", () => {
    const normalized = normalizeSheetData({
      ...sheetData,
      character: {
        ...sheetData.character,
        race: { selected: "mage", choices: ["mage", "vampire"] },
        customField: "preserved",
      },
    });

    expect(normalized.character.race).toEqual({ selected: "mage" });
    expect(normalized.character.customField).toBe("preserved");
    expect(JSON.stringify(normalized)).not.toContain('"choices"');
  });

  it("debounces autosave and does not save on the initial render", () => {
    vi.useFakeTimers();
    const onChange = vi.fn();

    render(
      <SheetDataProvider initialData={sheetData} onChange={onChange}>
        <SheetUpdateButton />
      </SheetDataProvider>
    );

    expect(onChange).not.toHaveBeenCalled();
    fireEvent.click(screen.getByRole("button", { name: "Update sheet" }));

    act(() => vi.advanceTimersByTime(399));
    expect(onChange).not.toHaveBeenCalled();

    act(() => vi.advanceTimersByTime(1));
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange.mock.calls[0][0].character.name).toBe("Debounced");
  });
});

describe("race catalogs", () => {
  it.each([
    ["mage", "path"],
    ["vampire", "clan"],
    ["changeling", "seeming"],
    ["werewolf", "auspice"],
    ["hunter", "profession"],
    ["geist", "archetype"],
    ["mummy", "decree"],
    ["promethean", "lineage"],
  ])("loads only the catalog requested for %s", async (race, detailKey) => {
    const catalog = await loadRaceCatalog(race);

    expect(catalog.characterDetails[detailKey].length).toBeGreaterThan(0);
    expect(
      catalog.sectionConfig.dotGroups.length + catalog.sectionConfig.lists.length
    ).toBeGreaterThan(0);
  });
});

describe("detail route feedback", () => {
  it("renders a not-found state when the slug has no matching data", async () => {
    const Page = ({ item }) => <div>{item?.name}</div>;

    render(
      <MemoryRouter initialEntries={["/details/missing"]}>
        <Routes>
          <Route
            path="/details/:slug"
            element={
              <LazyDetailRoute
                loadPage={() => Promise.resolve({ default: Page })}
                loadData={() => Promise.resolve({ items: [] })}
                propKey="item"
                resolveItem={() => null}
              />
            }
          />
        </Routes>
      </MemoryRouter>
    );

    expect(await screen.findByRole("heading", { name: "Content not found" })).toBeInTheDocument();
  });

  it("renders a retryable error when a lazy module fails", async () => {
    render(
      <MemoryRouter initialEntries={["/details/broken"]}>
        <Routes>
          <Route
            path="/details/:slug"
            element={
              <LazyDetailRoute
                loadPage={() => Promise.reject(new Error("load failed"))}
                loadData={() => Promise.resolve({})}
                propKey="item"
                resolveItem={() => null}
              />
            }
          />
        </Routes>
      </MemoryRouter>
    );

    expect(
      await screen.findByRole("heading", { name: "Content could not be loaded" })
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Try again" })).toBeInTheDocument();
  });
});

describe("favorites store", () => {
  beforeEach(() => {
    window.localStorage.clear();
    vi.resetModules();
  });

  it("reads localStorage once and reuses the cached index", async () => {
    const getItemSpy = vi.spyOn(Storage.prototype, "getItem");
    const store = await import("../favoritesStore");

    expect(store.getFavoritesCount()).toBe(0);
    expect(store.listFavorites()).toEqual([]);
    expect(store.getFavoritesCount()).toBe(0);
    expect(getItemSpy).toHaveBeenCalledTimes(1);

    store.toggleFavorite({ Name: "Arcane" }, ["Name"], "/mage");
    expect(store.getFavoritesCount()).toBe(1);
    expect(getItemSpy).toHaveBeenCalledTimes(1);

    getItemSpy.mockRestore();
  });
});
