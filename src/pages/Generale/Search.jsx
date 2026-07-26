import React, { useEffect, useMemo, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useSearchParams } from "react-router-dom";
import SearchResultItem from "../../components/SearchResultItem";
import {
  GAME_LINE_LABELS,
  MIN_QUERY_LENGTH,
  getSearchFacets,
  loadSearchIndex,
  normalizeSearchText,
  searchEntries,
} from "../../search/searchClient";

const PAGE_SIZE = 25;

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const scope = searchParams.get("scope") || "all";
  const type = searchParams.get("type") || "all";
  const book = searchParams.get("book") || "";

  const [draftQuery, setDraftQuery] = useState(query);
  const [entries, setEntries] = useState([]);
  const [status, setStatus] = useState("loading");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  useEffect(() => setDraftQuery(query), [query]);

  useEffect(() => {
    let active = true;
    setStatus("loading");

    loadSearchIndex()
      .then((loadedEntries) => {
        if (!active) return;
        setEntries(loadedEntries);
        setStatus("ready");
      })
      .catch(() => {
        if (active) setStatus("error");
      });

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [book, query, scope, type]);

  const facets = useMemo(() => getSearchFacets(entries), [entries]);
  const results = useMemo(
    () => searchEntries(entries, query, { scope, type, book }),
    [book, entries, query, scope, type]
  );
  const hasValidQuery = normalizeSearchText(query).length >= MIN_QUERY_LENGTH;

  const updateParameter = (key, value, defaultValue = "") => {
    const next = new URLSearchParams(searchParams);
    if (!value || value === defaultValue) next.delete(key);
    else next.set(key, value);
    setSearchParams(next);
  };

  const submitSearch = (event) => {
    event.preventDefault();
    updateParameter("q", draftQuery.trim());
  };

  return (
    <main className="mx-auto w-full max-w-5xl px-5 pb-12">
      <h1>Search the wiki</h1>

      <form onSubmit={submitSearch} className="flex flex-col gap-3 sm:flex-row">
        <label className="relative flex-1">
          <span className="sr-only">Search query</span>
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" />
          <input
            type="search"
            value={draftQuery}
            className="h-12 w-full rounded-lg border border-neutral-400 bg-white pl-11 pr-3 text-base outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search spells, merits, powers, books..."
            onChange={(event) => setDraftQuery(event.target.value)}
          />
        </label>
        <button
          type="submit"
          className="h-12 rounded-lg border-0 bg-neutral-900 px-6 font-semibold text-white hover:bg-neutral-700"
        >
          Search
        </button>
      </form>

      <section
        aria-label="Search filters"
        className="mt-4 grid grid-cols-1 gap-3 rounded-lg border border-neutral-300 bg-neutral-50 p-4 sm:grid-cols-3"
      >
        <label className="text-sm font-semibold text-neutral-800">
          Game line
          <select
            value={scope}
            className="mt-1 h-10 w-full rounded border border-neutral-400 bg-white px-2 font-normal"
            onChange={(event) => updateParameter("scope", event.target.value, "all")}
          >
            <option value="all">All game lines</option>
            {facets.gameLines.map((gameLine) => (
              <option key={gameLine} value={gameLine}>
                {GAME_LINE_LABELS[gameLine] || gameLine}
              </option>
            ))}
          </select>
        </label>

        <label className="text-sm font-semibold text-neutral-800">
          Content type
          <select
            value={type}
            className="mt-1 h-10 w-full rounded border border-neutral-400 bg-white px-2 font-normal"
            onChange={(event) => updateParameter("type", event.target.value, "all")}
          >
            <option value="all">All types</option>
            {facets.types.map((contentType) => (
              <option key={contentType} value={contentType}>
                {contentType}
              </option>
            ))}
          </select>
        </label>

        <label className="text-sm font-semibold text-neutral-800">
          Book
          <input
            type="search"
            value={book}
            className="mt-1 h-10 w-full rounded border border-neutral-400 bg-white px-2 font-normal"
            placeholder="e.g. VtR, Mysteries"
            onChange={(event) => updateParameter("book", event.target.value)}
          />
        </label>
      </section>

      <section aria-live="polite" className="mt-6">
        {!hasValidQuery && (
          <p className="text-neutral-600">
            Enter at least {MIN_QUERY_LENGTH} characters to start searching.
          </p>
        )}
        {hasValidQuery && status === "loading" && (
          <p className="text-neutral-600">Loading the search index...</p>
        )}
        {status === "error" && (
          <p className="text-red-700">
            The search index could not be loaded. Try refreshing the page.
          </p>
        )}
        {hasValidQuery && status === "ready" && (
          <>
            <p className="mb-3 text-sm text-neutral-600">
              {results.length} {results.length === 1 ? "result" : "results"} for “{query}”
            </p>
            {results.length === 0 ? (
              <p>No matching content was found. Try fewer words or broader filters.</p>
            ) : (
              <div className="space-y-3">
                {results.slice(0, visibleCount).map((result) => (
                  <SearchResultItem key={result.id} result={result} />
                ))}
              </div>
            )}
            {visibleCount < results.length && (
              <button
                type="button"
                className="mt-5 rounded-lg border border-neutral-500 bg-white px-5 py-2.5 font-semibold text-neutral-900 hover:bg-neutral-100"
                onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
              >
                Show 25 more
              </button>
            )}
          </>
        )}
      </section>
    </main>
  );
}
