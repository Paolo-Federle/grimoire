import React, { useEffect, useId, useRef, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import SearchResultItem from "./SearchResultItem";
import {
  GAME_LINE_LABELS,
  MIN_QUERY_LENGTH,
  normalizeSearchText,
  searchWiki,
} from "../search/searchClient";
import { PATHS } from "../pages/path";

export default function WikiSearch({
  scope = "all",
  allowGlobalToggle = false,
  variant = "default",
  placeholder = "Search the wiki…",
  maxResults = 8,
  autoFocus = false,
  onDismiss,
  onNavigate,
}) {
  const navigate = useNavigate();
  const wrapperRef = useRef(null);
  const inputRef = useRef(null);
  const suggestionsId = useId();
  const [query, setQuery] = useState("");
  const [searchAll, setSearchAll] = useState(!scope || scope === "all");
  const [results, setResults] = useState([]);
  const [status, setStatus] = useState("idle");
  const [open, setOpen] = useState(false);

  const effectiveScope = searchAll ? "all" : scope;
  const normalizedQuery = normalizeSearchText(query);
  const isNavbar = variant === "navbar";
  const isHero = variant === "hero";
  const showSuggestions = open && normalizedQuery.length >= MIN_QUERY_LENGTH;

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (!wrapperRef.current?.contains(event.target)) setOpen(false);
    };
    const handleWindowBlur = () => setOpen(false);
    document.addEventListener("pointerdown", handlePointerDown);
    if (isHero) window.addEventListener("blur", handleWindowBlur);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      if (isHero) window.removeEventListener("blur", handleWindowBlur);
    };
  }, [isHero]);

  useEffect(() => {
    if (normalizedQuery.length < MIN_QUERY_LENGTH) {
      setResults([]);
      setStatus("idle");
      return undefined;
    }

    let active = true;
    setStatus("loading");
    const timer = window.setTimeout(() => {
      searchWiki(query, { scope: effectiveScope, limit: maxResults })
        .then((nextResults) => {
          if (!active) return;
          setResults(nextResults);
          setStatus("ready");
        })
        .catch(() => {
          if (!active) return;
          setResults([]);
          setStatus("error");
        });
    }, 140);

    return () => {
      active = false;
      window.clearTimeout(timer);
    };
  }, [effectiveScope, maxResults, normalizedQuery, query]);

  const openFullResults = () => {
    if (normalizedQuery.length < MIN_QUERY_LENGTH) return;
    const params = new URLSearchParams({ q: query.trim() });
    if (effectiveScope !== "all") params.set("scope", effectiveScope);
    setOpen(false);
    navigate(`${PATHS.SEARCH}?${params.toString()}`);
    onNavigate?.();
  };

  const handleEscape = (event) => {
    if (event.key !== "Escape" || (!showSuggestions && !onDismiss)) return;
    event.preventDefault();
    event.stopPropagation();
    if (onDismiss) onDismiss();
    else inputRef.current?.focus();
    setOpen(false);
  };

  const inputHeight = isHero ? "h-14 text-lg" : isNavbar ? "h-11 text-sm" : "h-11";
  const suggestionsHeight = isNavbar ? "max-h-[min(28rem,calc(100dvh-9rem))]" : "max-h-[28rem]";
  const suggestionsLayout = isHero
    ? "flex max-h-[min(28rem,45svh)] flex-col overflow-hidden shadow-md"
    : `overflow-y-auto shadow-xl ${suggestionsHeight}`;

  return (
    <div
      ref={wrapperRef}
      role="search"
      aria-label={isNavbar ? "Navigation search" : "Wiki search"}
      className="relative w-full"
      onKeyDown={handleEscape}
      onBlur={(event) => {
        // WebKit can blur the input without focusing the clicked result.
        if (isHero && !event.relatedTarget) return;
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
    >
      <div
        className={`flex items-center rounded-lg border bg-white shadow-sm focus-within:ring-2 focus-within:ring-blue-500 ${
          isNavbar ? "border-neutral-600" : "border-neutral-300"
        }`}
      >
        <SearchIcon className="ml-3 shrink-0 text-neutral-500" fontSize={isHero ? "medium" : "small"} />
        <input
          ref={inputRef}
          type="search"
          name="q"
          autoComplete="off"
          value={query}
          placeholder={placeholder}
          className={`min-w-0 flex-1 rounded-lg border-0 bg-transparent px-2 text-neutral-900 outline-none placeholder:text-neutral-600 ${inputHeight}`}
          aria-label={placeholder}
          aria-controls={showSuggestions ? suggestionsId : undefined}
          autoFocus={autoFocus}
          onChange={(event) => {
            setQuery(event.target.value);
            setOpen(true);
          }}
          onFocus={() => {
            if (normalizedQuery.length >= MIN_QUERY_LENGTH) setOpen(true);
          }}
          onKeyDown={(event) => {
            if (event.key !== "Enter" || event.nativeEvent.isComposing) return;
            event.preventDefault();
            openFullResults();
          }}
        />
      </div>

      {allowGlobalToggle && scope !== "all" && (
        <label className="mt-1 inline-flex min-h-11 cursor-pointer items-center gap-2 text-sm text-neutral-700">
          <input
            type="checkbox"
            checked={searchAll}
            onChange={(event) => setSearchAll(event.target.checked)}
          />
          Search all wiki instead of {GAME_LINE_LABELS[scope] || scope}
        </label>
      )}

      <span role="status" className="sr-only">
        {showSuggestions && status === "loading" && "Searching…"}
        {showSuggestions && status === "error" && "Search is temporarily unavailable."}
        {showSuggestions && status === "ready" && (
          results.length === 0
            ? "No results found."
            : `${results.length} suggestions. Press Tab to browse or Enter to view all results.`
        )}
      </span>

      {showSuggestions && (
        <div
          id={suggestionsId}
          className={`absolute left-0 right-0 top-full z-10 mt-1 rounded-lg border border-neutral-300 bg-white text-left ${suggestionsLayout}`}
        >
          {status === "loading" && (
            <p className="m-0 px-3 py-4 text-sm text-neutral-600">Searching…</p>
          )}
          {status === "error" && (
            <p className="m-0 px-3 py-4 text-sm text-red-700">
              Search is temporarily unavailable.
            </p>
          )}
          {status === "ready" && results.length === 0 && (
            <p className="m-0 px-3 py-4 text-sm text-neutral-600">No results found.</p>
          )}
          {status === "ready" && results.length > 0 && (
            <ul className={`m-0 list-none p-0 ${isHero ? "min-h-0 overflow-y-auto overscroll-contain" : ""}`}>
              {results.map((result) => (
                <li key={result.id} className="border-b border-neutral-200">
                  <SearchResultItem
                    result={result}
                    compact
                    onNavigate={(event) => {
                      if (event.defaultPrevented || event.button !== 0 ||
                          event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
                      setOpen(false);
                      onNavigate?.();
                    }}
                  />
                </li>
              ))}
            </ul>
          )}
          {status === "ready" && results.length > 0 && (
            <button
              type="button"
              className={`w-full border-0 bg-neutral-900 px-3 py-2.5 text-sm font-semibold text-white hover:bg-neutral-700 ${isHero ? "min-h-11 shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-white" : ""}`}
              onClick={openFullResults}
            >
              View all results
            </button>
          )}
        </div>
      )}
    </div>
  );
}
