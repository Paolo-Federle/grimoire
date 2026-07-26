import React, { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getBookEditorialDetail } from "../../Data/BookDetailData";
import { BookLink } from "../../components/BookLink";
import { RouteNotFound } from "../../components/RouteFeedback";
import {
  findBookBySlug,
  getBookContentEntries,
  getBookFirstPageUrl,
} from "../../books/bookNavigation";
import { loadSearchIndex, normalizeSearchText } from "../../search/searchClient";

const PAGE_SIZE = 50;

function BookMetadata({ book, editorial }) {
  const metadata = [
    ["Game line", book.gameLineLabel],
    ["Type", book.Type],
    ["Release date", book["Release Date"]],
    ["Pages", editorial?.pages],
    ["Edition", editorial?.edition],
  ].filter(([, value]) => value !== "" && value !== null && value !== undefined);

  return (
    <dl className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
      {metadata.map(([label, value]) => (
        <div key={label}>
          <dt className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
            {label}
          </dt>
          <dd className="mt-0.5 text-sm text-neutral-900">{value}</dd>
        </div>
      ))}
    </dl>
  );
}

function ChapterOverview({ chapters, isPartial }) {
  return (
    <section className="mt-8" aria-labelledby="chapter-overview-title">
      <h2 id="chapter-overview-title" className="text-2xl font-semibold">
        Chapter overview
      </h2>
      {isPartial && (
        <p className="mb-0 mt-1 text-sm text-neutral-600">
          Partial overview: the editorial source currently describes only these sections.
        </p>
      )}
      {chapters?.length ? (
        <div className="mt-3 divide-y divide-neutral-200 border-y border-neutral-300">
          {chapters.map((chapter, index) => (
            <article
              key={`${chapter.title}-${index}`}
              className="py-4 sm:grid sm:grid-cols-[minmax(220px,0.7fr)_1fr] sm:gap-6"
            >
              <h3 className="m-0 text-base font-semibold text-neutral-900">
                {chapter.title}
              </h3>
              <p className="mb-0 mt-1 text-sm leading-6 text-neutral-700 sm:mt-0">
                {chapter.summary}
              </p>
            </article>
          ))}
        </div>
      ) : (
        <p className="mt-2 text-neutral-600">
          A verified chapter overview has not been added for this book yet.
        </p>
      )}
    </section>
  );
}

function WikiContentTable({ entries }) {
  return (
    <>
      <div className="mt-4 hidden overflow-x-auto md:block">
        <table className="w-full min-w-[720px] border-collapse bg-white text-left text-sm">
          <thead>
            <tr className="border-b-2 border-neutral-400">
              <th className="p-3">Name</th>
              <th className="p-3">Type</th>
              <th className="p-3">Summary</th>
              <th className="p-3">Reference</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry) => (
              <tr key={entry.id} className="border-b border-neutral-200 align-top">
                <td className="p-3 font-semibold">
                  <Link className="text-blue-700 underline" to={entry.path}>
                    {entry.title}
                  </Link>
                </td>
                <td className="p-3">{entry.type}</td>
                <td className="max-w-xl p-3 text-neutral-700">{entry.summary || "—"}</td>
                <td className="whitespace-nowrap p-3">{BookLink(entry.book)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 space-y-3 md:hidden">
        {entries.map((entry) => (
          <article key={entry.id} className="rounded-lg border border-neutral-300 bg-white p-4">
            <Link className="font-semibold text-blue-700 underline" to={entry.path}>
              {entry.title}
            </Link>
            <p className="mb-0 mt-1 text-xs text-neutral-600">
              {entry.type} · {BookLink(entry.book)}
            </p>
            {entry.summary && (
              <p className="mb-0 mt-2 text-sm text-neutral-700">{entry.summary}</p>
            )}
          </article>
        ))}
      </div>
    </>
  );
}

export default function BookDetail() {
  const { slug = "" } = useParams();
  const book = findBookBySlug(slug);
  const editorial = getBookEditorialDetail(book);
  const [entries, setEntries] = useState([]);
  const [status, setStatus] = useState("loading");
  const [query, setQuery] = useState("");
  const [type, setType] = useState("all");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  useEffect(() => {
    let active = true;

    loadSearchIndex()
      .then((searchEntries) => {
        if (!active) return;
        setEntries(getBookContentEntries(searchEntries, book));
        setStatus("ready");
      })
      .catch(() => {
        if (active) setStatus("error");
      });

    return () => {
      active = false;
    };
  }, [book]);

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [query, type]);

  const contentTypes = useMemo(
    () => [...new Set(entries.map((entry) => entry.type).filter(Boolean))].sort(),
    [entries]
  );
  const filteredEntries = useMemo(() => {
    const normalizedQuery = normalizeSearchText(query);

    return entries.filter((entry) => {
      if (type !== "all" && entry.type !== type) return false;
      if (!normalizedQuery) return true;

      return normalizeSearchText(
        [entry.title, entry.summary, entry.type, entry.meta, entry.book].join(" ")
      ).includes(normalizedQuery);
    });
  }, [entries, query, type]);

  if (!book) {
    return (
      <RouteNotFound
        title="Book not found"
        message="The requested book is not present in the local catalog."
      />
    );
  }

  const bookUrl = getBookFirstPageUrl(book);
  const intro =
    editorial?.intro ||
    book.Description ||
    "This book is listed in the local catalog, but an extended introduction has not been added yet.";
  const visibleEntries = filteredEntries.slice(0, visibleCount);

  return (
    <main className="mx-auto w-full max-w-5xl px-5 pb-12">
      <header className="mt-4 border-b border-neutral-300 pb-7">
        <h1 className="mb-3 mt-0 text-3xl font-bold text-neutral-950">{book.Name}</h1>
        <p className="m-0 max-w-4xl text-base leading-7 text-neutral-700">{intro}</p>

        <BookMetadata book={book} editorial={editorial} />

        {bookUrl && (
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
            <a
              className="rounded-md bg-neutral-900 px-4 py-2 text-sm font-semibold text-white no-underline hover:bg-neutral-700"
              href={bookUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open book
            </a>
          </div>
        )}
      </header>

      <ChapterOverview
        chapters={editorial?.chapters}
        isPartial={editorial?.chapterOverviewPartial}
      />

      <section className="mt-9" aria-labelledby="wiki-contents-title">
        <h2 id="wiki-contents-title" className="text-2xl font-semibold">
          Contents available in the wiki
        </h2>
        <p className="mt-1 text-sm text-neutral-600">
          Entries are linked automatically from their book references in the local datasets.
        </p>

        {status === "loading" && <p role="status">Loading linked contents...</p>}
        {status === "error" && (
          <p className="rounded border border-red-200 bg-red-50 p-4 text-red-800">
            The linked contents could not be loaded. Try refreshing the page.
          </p>
        )}
        {status === "ready" && (
          <>
            <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_240px]">
              <label className="text-sm font-semibold text-neutral-800">
                Filter contents
                <input
                  type="search"
                  value={query}
                  className="mt-1 h-10 w-full rounded border border-neutral-400 bg-white px-3 font-normal"
                  placeholder="Name, summary or reference..."
                  onChange={(event) => setQuery(event.target.value)}
                />
              </label>
              <label className="text-sm font-semibold text-neutral-800">
                Content type
                <select
                  value={type}
                  className="mt-1 h-10 w-full rounded border border-neutral-400 bg-white px-2 font-normal"
                  onChange={(event) => setType(event.target.value)}
                >
                  <option value="all">All types</option>
                  {contentTypes.map((contentType) => (
                    <option key={contentType} value={contentType}>
                      {contentType}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <p className="mb-0 mt-4 text-sm text-neutral-600">
              {filteredEntries.length}{" "}
              {filteredEntries.length === 1 ? "linked entry" : "linked entries"}
            </p>

            {filteredEntries.length ? (
              <>
                <WikiContentTable entries={visibleEntries} />
                {visibleCount < filteredEntries.length && (
                  <button
                    type="button"
                    className="mt-5 rounded-lg border border-neutral-500 bg-white px-5 py-2.5 font-semibold text-neutral-900 hover:bg-neutral-100"
                    onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
                  >
                    Show 50 more
                  </button>
                )}
              </>
            ) : (
              <p className="mt-4 rounded-lg border border-dashed border-neutral-300 p-4 text-neutral-600">
                No matching wiki content is currently linked to this book.
              </p>
            )}
          </>
        )}
      </section>
    </main>
  );
}
