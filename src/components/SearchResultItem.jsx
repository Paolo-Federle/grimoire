import React from "react";
import { Link } from "react-router-dom";
import { GAME_LINE_LABELS } from "../search/searchClient";

export default function SearchResultItem({ result, compact = false, onNavigate }) {
  const context = [
    GAME_LINE_LABELS[result.gameLine] || result.gameLine,
    result.type,
    result.meta,
    result.book ? `Book: ${result.book}` : "",
  ].filter(Boolean);

  return (
    <Link
      to={result.path}
      className={`block no-underline transition-colors ${
        compact
          ? "border-b border-neutral-200 px-3 py-2.5 text-neutral-900 last:border-b-0 hover:bg-neutral-100"
          : "rounded-lg border border-neutral-300 bg-white p-4 text-neutral-900 shadow-sm hover:border-neutral-500 hover:bg-neutral-50"
      }`}
      onClick={onNavigate}
    >
      <span className="block font-semibold text-blue-700">{result.title}</span>
      <span className="mt-0.5 block text-xs text-neutral-600">{context.join(" · ")}</span>
      {result.summary && (
        <span
          className={`mt-1 block text-neutral-700 ${compact ? "line-clamp-2 text-xs" : "text-sm"}`}
        >
          {result.summary}
        </span>
      )}
    </Link>
  );
}
