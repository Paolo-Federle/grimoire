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
  });

  it("keeps location names deduplicated alongside racial Merits", async () => {
    const catalog = await loadMeritCatalog("vampire");

    expect(catalog.options.filter((name) => name === "Occultation")).toHaveLength(1);
  });
});
