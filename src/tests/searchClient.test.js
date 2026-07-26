import { describe, expect, it } from "vitest";
import { normalizeSearchText, searchEntries } from "../search/searchClient";

const entries = [
  {
    id: "spell-1",
    title: "Café of Fate",
    summary: "A divination spell",
    gameLine: "mage",
    type: "Spell",
    book: "Mage Core 120",
    meta: "Fate",
    path: "/mage/spells/cafe_of_fate",
  },
  {
    id: "merit-1",
    title: "Lucky Companion",
    summary: "A social merit touched by fate",
    gameLine: "changeling",
    type: "Merit",
    book: "CtL 90",
    meta: "",
    path: "/changeling/merits/fated_companion",
  },
  {
    id: "spell-2",
    title: "Hidden Hoard",
    summary: "Find a concealed object",
    gameLine: "mage",
    type: "Spell",
    book: "Mysteries 20",
    meta: "Matter",
    path: "/mage/spells/hidden_hoard",
  },
];

describe("searchEntries", () => {
  it("normalizes accents and punctuation", () => {
    expect(normalizeSearchText("Café — Fate")).toBe("cafe fate");
    expect(searchEntries(entries, "cafe fate")[0].id).toBe("spell-1");
  });

  it("ranks title matches before description matches", () => {
    const results = searchEntries(entries, "fate");
    expect(results.map((entry) => entry.id)).toEqual(["spell-1", "merit-1"]);
  });

  it("applies game line, type, and book filters", () => {
    expect(
      searchEntries(entries, "hoard", {
        scope: "mage",
        type: "Spell",
        book: "Mysteries",
      }).map((entry) => entry.id)
    ).toEqual(["spell-2"]);

    expect(searchEntries(entries, "fate", { scope: "changeling" })).toHaveLength(1);
  });

  it("requires at least two normalized characters", () => {
    expect(searchEntries(entries, "f")).toEqual([]);
  });
});
