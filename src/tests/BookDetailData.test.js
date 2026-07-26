import { describe, expect, it } from "vitest";
import { BOOK_DETAILS_BY_CODE } from "../Data/BookDetailData";
import { bookCatalog } from "../books/bookNavigation";

describe("book editorial details", () => {
  it("only uses codes present in the local catalog", () => {
    const catalogCodes = new Set(bookCatalog.map((book) => book["Code Name"]));

    Object.keys(BOOK_DETAILS_BY_CODE).forEach((code) => {
      expect(catalogCodes.has(code), `Unknown book code: ${code}`).toBe(true);
    });
  });

  it("provides complete chapter records and an editorial source", () => {
    expect(Object.keys(BOOK_DETAILS_BY_CODE).length).toBe(58);

    Object.entries(BOOK_DETAILS_BY_CODE).forEach(([code, detail]) => {
      expect(detail.sourceUrl, `Missing source for ${code}`).toMatch(
        /^https:\/\/whitewolf\.fandom\.com\/wiki\//
      );
      expect(detail.chapters.length, `Missing chapters for ${code}`).toBeGreaterThan(0);
      if (!detail.chapterOverviewPartial) {
        expect(
          detail.chapters.length,
          `Unexpectedly short complete overview for ${code}`
        ).toBeGreaterThan(1);
      }

      const normalizedTitles = detail.chapters.map((chapter) =>
        chapter.title.trim().toLocaleLowerCase("en")
      );
      expect(
        new Set(normalizedTitles).size,
        `Duplicate chapter title for ${code}`
      ).toBe(normalizedTitles.length);

      detail.chapters.forEach((chapter) => {
        expect(chapter.title.trim()).not.toBe("");
        expect(chapter.summary.trim()).not.toBe("");
      });
    });
  });

  it("marks incomplete source outlines explicitly", () => {
    const partialCodes = Object.entries(BOOK_DETAILS_BY_CODE)
      .filter(([, detail]) => detail.chapterOverviewPartial)
      .map(([code]) => code)
      .sort();

    expect(partialCodes).toEqual(["FC", "IEwtA", "KST", "L:tS", "MT"].sort());
  });
});
