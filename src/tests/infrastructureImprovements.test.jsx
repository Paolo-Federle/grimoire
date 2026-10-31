import { act, fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import LazyDetailRoute from "../components/LazyDetailRoute";
import StructuredContent from "../components/StructuredContent";
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

  it("uses stable Legacy IDs and disambiguates duplicate display names", async () => {
    const catalog = await loadRaceCatalog("mage");
    const legacyOptions = catalog.characterDetails.legacy;
    const scelestiOptions = legacyOptions.filter((option) =>
      option.label.startsWith("Scelesti (variant)")
    );

    expect(legacyOptions).toHaveLength(94);
    expect(new Set(legacyOptions.map((option) => option.value)).size).toBe(94);
    expect(scelestiOptions).toEqual([
      { value: "scelesti_variant", label: "Scelesti (variant) — KST" },
      {
        value: "scelesti_variant_nh_tu",
        label: "Scelesti (variant) — NH-TU",
      },
    ]);
  });
});

describe("detail route feedback", () => {
  it("renders a not-found state when the slug has no matching data", async () => {
    const Page = ({ item }) => <div>{item?.name}</div>;
    const loadData = vi.fn(() => Promise.resolve({ items: [] }));

    render(
      <MemoryRouter initialEntries={["/details/missing"]}>
        <Routes>
          <Route
            path="/details/:slug"
            element={
              <LazyDetailRoute
                loadPage={() => Promise.resolve({ default: Page })}
                loadData={loadData}
                propKey="item"
                resolveItem={() => null}
              />
            }
          />
        </Routes>
      </MemoryRouter>
    );

    expect(await screen.findByRole("heading", { name: "Content not found" })).toBeInTheDocument();
    expect(loadData).toHaveBeenCalledWith({ slug: "missing" });
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

describe("structured editorial content", () => {
  it("preserves the semantic level of deeply nested headings", () => {
    render(
      <StructuredContent
        content={{ type: "heading", level: 4, text: "Optional Attainment" }}
      />
    );

    expect(
      screen.getByRole("heading", { level: 4, name: "Optional Attainment" })
    ).toBeInTheDocument();
  });
});

describe("favorites store", () => {
  beforeEach(() => {
    window.localStorage.clear();
    vi.resetModules();
  });

  it("keeps saved spell favorites selected and removable after the Arcana URL migration", async () => {
    const originalData = { "Death 1": "Soul Marks", Description: "Read the marks on a soul" };
    window.localStorage.setItem("grimoire_favorites_v1", JSON.stringify({
      v: 1,
      items: [{
        key: "/mage/spells/soul_marks",
        from: "/mage/spells",
        linkUrl: "/mage/spells/soul_marks",
        titleIsLink: true,
        data: originalData,
        savedAt: 123,
      }],
    }));
    const store = await import("../favoritesStore");

    expect(store.listFavorites()).toEqual([{
      key: "/mage/arcana/soul_marks",
      from: "/mage/arcana",
      linkUrl: "/mage/arcana/soul_marks",
      titleIsLink: true,
      data: originalData,
      savedAt: 123,
    }]);
    const { default: FavoritesPage } = await import("../pages/favorites");
    render(
      <MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <FavoritesPage />
      </MemoryRouter>
    );
    expect(screen.getByRole("link", { name: "Arcana", exact: true })).toHaveAttribute("href", "/mage/arcana");
    expect(screen.getByRole("link", { name: "Soul Marks", exact: true })).toHaveAttribute("href", "/mage/arcana/soul_marks");
    let result;
    act(() => {
      result = store.toggleFavorite(
        { "Death 1": "Soul Marks", link: "/mage/arcana/soul_marks" },
        ["Death 1"],
        "/mage/arcana",
        true
      );
    });
    expect(result.isFavorite).toBe(false);
    expect(store.listFavorites()).toEqual([]);
  }, 30000);

  it("merges old and new URLs for the same favorite while retaining the most recent record", async () => {
    window.localStorage.setItem("grimoire_favorites_v1", JSON.stringify({
      v: 1,
      items: [
        { key: "/mage/spells/ward", from: "/mage/spells", savedAt: 1, data: { Name: "Ward" } },
        { key: "/mage/arcana/ward", from: "/mage/arcana", savedAt: 2, data: { Name: "Ward", Note: "Kept" } },
        { key: "/vampire/disciplines/vigor", from: "/vampire/disciplines", savedAt: 3, data: { Name: "Vigor" } },
      ],
    }));
    const store = await import("../favoritesStore");

    expect(store.getFavoritesCount()).toBe(2);
    expect(store.listFavorites().find(item => item.key === "/mage/arcana/ward").data.Note).toBe("Kept");
    expect(store.listFavorites()[0].key).toBe("/vampire/disciplines/vigor");
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
