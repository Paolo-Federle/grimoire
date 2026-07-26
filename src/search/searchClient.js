const MIN_QUERY_LENGTH = 2;

let searchIndexPromise;

export const GAME_LINE_LABELS = {
  all: "All game lines",
  general: "General",
  mortal: "Mortal",
  vampire: "Vampire",
  werewolf: "Werewolf",
  mage: "Mage",
  promethean: "Promethean",
  changeling: "Changeling",
  hunter: "Hunter",
  geist: "Geist",
  mummy: "Mummy",
  other: "Other",
};

export function normalizeSearchText(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim()
    .replace(/\s+/g, " ");
}

function prepareEntry(entry) {
  const normalizedTitle = normalizeSearchText(entry.title);
  const normalizedSearchText = normalizeSearchText(
    [
      entry.title,
      entry.summary,
      entry.gameLine,
      entry.type,
      entry.book,
      entry.meta,
    ].join(" ")
  );

  return {
    ...entry,
    _normalizedTitle: normalizedTitle,
    _normalizedSearchText: normalizedSearchText,
  };
}

export async function loadSearchIndex() {
  if (!searchIndexPromise) {
    const indexUrl = `${import.meta.env.BASE_URL}search-index.json`;
    searchIndexPromise = fetch(indexUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Search index unavailable (${response.status})`);
        }
        return response.json();
      })
      .then((entries) => entries.map(prepareEntry))
      .catch((error) => {
        searchIndexPromise = undefined;
        throw error;
      });
  }

  return searchIndexPromise;
}

function scoreEntry(entry, normalizedQuery, queryTerms) {
  const title = entry._normalizedTitle ?? normalizeSearchText(entry.title);
  const searchable =
    entry._normalizedSearchText ??
    normalizeSearchText(
      [entry.title, entry.summary, entry.gameLine, entry.type, entry.book, entry.meta].join(" ")
    );

  if (!queryTerms.every((term) => searchable.includes(term))) return null;

  let score = 100;
  if (title === normalizedQuery) score += 1000;
  else if (title.startsWith(normalizedQuery)) score += 700;
  else if (title.includes(normalizedQuery)) score += 500;

  const titleWords = title.split(" ");
  for (const term of queryTerms) {
    if (titleWords.includes(term)) score += 120;
    else if (titleWords.some((word) => word.startsWith(term))) score += 80;
    else if (title.includes(term)) score += 45;
  }

  if (normalizeSearchText(entry.book).includes(normalizedQuery)) score += 35;
  if (normalizeSearchText(entry.type).includes(normalizedQuery)) score += 20;

  return score;
}

export function searchEntries(
  entries,
  query,
  { scope = "all", type = "all", book = "", limit } = {}
) {
  const normalizedQuery = normalizeSearchText(query);
  if (normalizedQuery.length < MIN_QUERY_LENGTH) return [];

  const queryTerms = normalizedQuery.split(" ").filter(Boolean);
  const normalizedBook = normalizeSearchText(book);

  const results = entries
    .filter((entry) => scope === "all" || !scope || entry.gameLine === scope)
    .filter((entry) => type === "all" || !type || entry.type === type)
    .filter((entry) => !normalizedBook || normalizeSearchText(entry.book).includes(normalizedBook))
    .map((entry) => ({
      entry,
      score: scoreEntry(entry, normalizedQuery, queryTerms),
    }))
    .filter(({ score }) => score !== null)
    .sort(
      (left, right) =>
        right.score - left.score ||
        left.entry.title.localeCompare(right.entry.title, undefined, { sensitivity: "base" })
    )
    .map(({ entry }) => entry);

  return Number.isFinite(limit) ? results.slice(0, limit) : results;
}

export async function searchWiki(query, options) {
  const entries = await loadSearchIndex();
  return searchEntries(entries, query, options);
}

export function getSearchFacets(entries) {
  return {
    gameLines: [...new Set(entries.map((entry) => entry.gameLine).filter(Boolean))].sort(),
    types: [...new Set(entries.map((entry) => entry.type).filter(Boolean))].sort(),
  };
}

export { MIN_QUERY_LENGTH };
