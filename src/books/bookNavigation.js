import {
  ChangelingBookData,
  GeistBookData,
  HunterBookData,
  MageBookData,
  MummyBookData,
  PrometheanBookData,
  VampireBookData,
  WerewolfBookData,
  WoDBookData,
} from "../Data/BookData";
import { PATHS } from "../pages/path";
import { slugify } from "../utils";

const RAW_BOOK_COLLECTIONS = [
  { id: "general", label: "World of Darkness", books: WoDBookData },
  { id: "vampire", label: "Vampire: The Requiem", books: VampireBookData },
  { id: "werewolf", label: "Werewolf: The Forsaken", books: WerewolfBookData },
  { id: "mage", label: "Mage: The Awakening", books: MageBookData },
  { id: "promethean", label: "Promethean: The Created", books: PrometheanBookData },
  { id: "changeling", label: "Changeling: The Lost", books: ChangelingBookData },
  { id: "hunter", label: "Hunter: The Vigil", books: HunterBookData },
  { id: "geist", label: "Geist: The Sin-Eaters", books: GeistBookData },
  { id: "mummy", label: "Mummy: The Curse", books: MummyBookData },
];

function deduplicateBooks(books) {
  const seen = new Set();

  return books.filter((book) => {
    const identity = `${book?.["Code Name"] || ""}|${book?.Name || ""}`;
    if (seen.has(identity)) return false;
    seen.add(identity);
    return true;
  });
}

export const BOOK_COLLECTIONS = RAW_BOOK_COLLECTIONS.map((collection) => ({
  ...collection,
  books: deduplicateBooks(collection.books),
}));

export function getBookSlug(book) {
  const identity = book?.Name || book?.["Code Name"] || "book";
  return slugify(String(identity).trim());
}

export function getBookPath(book) {
  return `${PATHS.BOOKS}/${getBookSlug(book)}`;
}

export function getBookFirstPageUrl(book) {
  const linkTo = book?.LinkTo;
  if (!linkTo) return "";
  if (linkTo.includes("#p=")) return linkTo.replace(/#p=.*/, "#p=1");
  return `${linkTo}#p=1`;
}

export const bookCatalog = BOOK_COLLECTIONS.flatMap((collection) =>
  collection.books.map((book) => ({
    ...book,
    gameLine: collection.id,
    gameLineLabel: collection.label,
    slug: getBookSlug(book),
    path: getBookPath(book),
  }))
);

export function findBookBySlug(slug) {
  return bookCatalog.find((book) => book.slug === slug);
}

export function extractBookReferenceCodes(source) {
  if (typeof source !== "string") return [];

  return source
    .split(/[,;]/)
    .map((reference) => reference.trim().match(/^([^\s]+)\s+(?:p\.?\s*)?\d+/i)?.[1])
    .filter(Boolean);
}

export function getBookContentEntries(entries, book) {
  const code = String(book?.["Code Name"] || "").trim().toLowerCase();
  if (!code || !Array.isArray(entries)) return [];

  return entries.filter((entry) => {
    if (!entry || entry.type === "Book" || !entry.book) return false;

    const hasMatchingCode = extractBookReferenceCodes(entry.book).some(
      (referenceCode) => referenceCode.toLowerCase() === code
    );
    if (!hasMatchingCode) return false;

    return book.gameLine === "general" || entry.gameLine === book.gameLine;
  });
}
