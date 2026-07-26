import { describe, expect, it } from "vitest";
import {
  bookCatalog,
  extractBookReferenceCodes,
  findBookBySlug,
  getBookContentEntries,
  getBookPath,
} from "../books/bookNavigation";

describe("book navigation", () => {
  it("creates one stable detail path for every catalog book", () => {
    const slugs = bookCatalog.map((book) => book.slug);

    expect(bookCatalog.length).toBeGreaterThan(100);
    expect(new Set(slugs).size).toBe(slugs.length);
    expect(getBookPath({ Name: "Vampire: The Requiem" })).toBe(
      "/books/vampire_the_requiem"
    );
    expect(findBookBySlug("vampire_the_requiem")?.["Code Name"]).toBe("VtR");
  });

  it("extracts codes from comma-separated page references", () => {
    expect(extractBookReferenceCodes("WoD 98, VtR p. 188; CtL 42")).toEqual([
      "WoD",
      "VtR",
      "CtL",
    ]);
  });

  it("links content by code and disambiguates game-line books", () => {
    const vampireBook = findBookBySlug("vampire_the_requiem");
    const worldBook = findBookBySlug("the_world_of_darkness");
    const entries = [
      { id: "vtr", type: "Discipline", gameLine: "vampire", book: "VtR 120" },
      { id: "wrong-line", type: "Merit", gameLine: "mage", book: "VtR 88" },
      { id: "wod", type: "Merit", gameLine: "mortal", book: "WoD 110" },
      { id: "book", type: "Book", gameLine: "vampire", book: "VtR" },
    ];

    expect(getBookContentEntries(entries, vampireBook).map((entry) => entry.id)).toEqual([
      "vtr",
    ]);
    expect(getBookContentEntries(entries, worldBook).map((entry) => entry.id)).toEqual([
      "wod",
    ]);
  });
});
