import { describe, expect, it } from "vitest";
import { PATHS } from "../pages/path";
import { loadMeritCatalog } from "../components/Sheet/sheetMeritData";

describe("sheet Merit catalog", () => {
  it("includes location Merits with working detail paths", async () => {
    const catalog = await loadMeritCatalog("mage");

    expect(catalog.options).toEqual(
      expect.arrayContaining(["Haven", "Hollow", "Safehouse", "Sanctum", "Hallow"])
    );
    expect(catalog.paths.get("Sanctum")).toBe(`${PATHS.LOCATIONS_BASE}/sanctum`);
    expect(catalog.paths.get("Hollow")).toBe(`${PATHS.LOCATIONS_BASE}/hollow`);
    expect(catalog.categories.get("Hollow")).toEqual([
      "Size", "Amenities", "Doors", "Wards",
    ]);
    expect(catalog.categories.get("Haven")).toEqual(["Location", "Size", "Security"]);
    expect(catalog.categories.get("Sanctum")).toEqual(["Security", "Size"]);
    expect(catalog.categories.get("Safehouse")).toEqual(["Cache", "Secrecy", "Size", "Traps"]);
    expect(catalog.categories.has("Hallow")).toBe(false);
  });

  it("keeps location names deduplicated alongside racial Merits", async () => {
    const catalog = await loadMeritCatalog("vampire");

    expect(catalog.options.filter((name) => name === "Occultation")).toHaveLength(1);
  });
});
