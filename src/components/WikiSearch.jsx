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
  placeholder = "Search the wiki...",
  maxResults = 8,
  autoFocus = false,
  onDismiss,
  onNavigate,
}) {
  const navigate = useNavigate();
  const wrapperRef = useRef(null);
  const listboxId = useId();
  const [query, setQuery] = useState("");
  const [searchAll, setSearchAll] = useState(!scope || scope === "all");
  const [results, setResults] = useState([]);
  const [status, setStatus] = useState("idle");
  const [open, setOpen] = useState(false);

  const effectiveScope = searchAll ? "all" : scope;
  const normalizedQuery = normalizeSearchText(query);
  const isNavbar = variant === "navbar";
  const isHero = variant === "hero";

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (!wrapperRef.current?.contains(event.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, []);

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
          setOpen(true);
        })
        .catch(() => {
          if (!active) return;
          setResults([]);
          setStatus("error");
          setOpen(true);
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

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      setOpen(false);
      onDismiss?.();
    } else if (event.key === "Enter") {
      event.preventDefault();
      openFullResults();
    }
  };

  const inputHeight = isHero ? "h-14 text-lg" : isNavbar ? "h-9 text-sm" : "h-11";

  return (
    <div ref={wrapperRef} className="relative w-full">
      <div
        className={`flex items-center rounded-lg border bg-white shadow-sm focus-within:ring-2 focus-within:ring-blue-500 ${
          isNavbar ? "border-neutral-600" : "border-neutral-300"
        }`}
      >
        <SearchIcon className="ml-3 shrink-0 text-neutral-500" fontSize={isHero ? "medium" : "small"} />
        <input
          type="search"
          value={query}
          placeholder={placeholder}
          className={`min-w-0 flex-1 rounded-lg border-0 bg-transparent px-2 text-neutral-900 outline-none ${inputHeight}`}
          aria-label={placeholder}
          aria-autocomplete="list"
          aria-controls={listboxId}
          aria-expanded={open}
          autoFocus={autoFocus}
          onChange={(event) => {
            setQuery(event.target.value);
            setOpen(true);
          }}
          onFocus={() => {
            if (normalizedQuery.length >= MIN_QUERY_LENGTH) setOpen(true);
          }}
          onKeyDown={handleKeyDown}
        />
      </div>

      {allowGlobalToggle && scope !== "all" && (
        <label className="mt-2 inline-flex cursor-pointer items-center gap-2 text-sm text-neutral-700">
          <input
            type="checkbox"
            checked={searchAll}
            onChange={(event) => setSearchAll(event.target.checked)}
          />
          Search all wiki instead of {GAME_LINE_LABELS[scope] || scope}
        </label>
      )}

      {open && normalizedQuery.length >= MIN_QUERY_LENGTH && (
        <div
          id={listboxId}
          role="listbox"
          className="absolute left-0 right-0 top-full z-[1100] mt-1 max-h-[28rem] overflow-y-auto rounded-lg border border-neutral-300 bg-white text-left shadow-xl"
        >
          {status === "loading" && (
            <p className="m-0 px-3 py-4 text-sm text-neutral-600">Searching...</p>
          )}
          {status === "error" && (
            <p className="m-0 px-3 py-4 text-sm text-red-700">
              Search is temporarily unavailable.
            </p>
          )}
          {status === "ready" && results.length === 0 && (
            <p className="m-0 px-3 py-4 text-sm text-neutral-600">No results found.</p>
          )}
          {status === "ready" &&
            results.map((result) => (
              <SearchResultItem
                key={result.id}
                result={result}
                compact
                onNavigate={() => {
                  setOpen(false);
                  onNavigate?.();
                }}
              />
            ))}
          {status === "ready" && results.length > 0 && (
            <button
              type="button"
              className="w-full border-0 bg-neutral-900 px-3 py-2.5 text-sm font-semibold text-white hover:bg-neutral-700"
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
