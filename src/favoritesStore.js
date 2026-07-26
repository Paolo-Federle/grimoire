import { useSyncExternalStore } from "react";
import { getCurrentRoutePath, slugify } from "./utils";

export const FAVORITES_STORAGE_KEY = "grimoire_favorites_v1";

const listeners = new Set();
const EMPTY_ITEMS = [];
let isInitialized = false;
let snapshot = { items: EMPTY_ITEMS, keys: new Set() };

function buildSnapshot(items) {
  const sortedItems = [...items].sort(
    (left, right) => (right?.savedAt || 0) - (left?.savedAt || 0)
  );
  return {
    items: sortedItems,
    keys: new Set(sortedItems.map((item) => item?.key).filter(Boolean)),
  };
}

function readInitialSnapshot() {
  if (isInitialized) return snapshot;
  isInitialized = true;

  if (typeof window === "undefined" || !window.localStorage) return snapshot;

  try {
    const raw = window.localStorage.getItem(FAVORITES_STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : null;
    snapshot = buildSnapshot(Array.isArray(parsed?.items) ? parsed.items : EMPTY_ITEMS);
  } catch {
    snapshot = buildSnapshot(EMPTY_ITEMS);
  }

  return snapshot;
}

function emitChange() {
  listeners.forEach((listener) => listener());
}

function handleStorage(event) {
  if (event.key !== FAVORITES_STORAGE_KEY) return;
  isInitialized = false;
  readInitialSnapshot();
  emitChange();
}

function subscribe(listener) {
  listeners.add(listener);
  if (listeners.size === 1 && typeof window !== "undefined") {
    window.addEventListener("storage", handleStorage);
  }

  return () => {
    listeners.delete(listener);
    if (listeners.size === 0 && typeof window !== "undefined") {
      window.removeEventListener("storage", handleStorage);
    }
  };
}

const getSnapshot = () => readInitialSnapshot();
const getServerSnapshot = () => snapshot;

function writeItems(items) {
  snapshot = buildSnapshot(items);
  isInitialized = true;

  if (typeof window !== "undefined" && window.localStorage) {
    window.localStorage.setItem(
      FAVORITES_STORAGE_KEY,
      JSON.stringify({ v: 1, items: snapshot.items })
    );
    window.dispatchEvent(new CustomEvent("favorites:changed"));
  }

  emitChange();
}

export function getFavoriteKey(row, columns, from = getCurrentRoutePath()) {
  if (row?.__favKey && typeof row.__favKey === "string") return row.__favKey;
  if (row?.link && typeof row.link === "string") return row.link;

  const visibleColumns = (columns || []).filter((column) => column && column !== "link");
  const firstColumn = visibleColumns[0] || null;
  const title = firstColumn && row?.[firstColumn] ? String(row[firstColumn]) : "unknown";
  return `${from}#${slugify(title)}`;
}

export function buildFavoriteItem(
  row,
  columns,
  from = getCurrentRoutePath(),
  titleIsLink = false
) {
  const visibleColumns = (columns || []).filter((column) => column && column !== "link");
  const data = Object.fromEntries(
    visibleColumns.map((column) => {
      const value = row?.[column];
      return [column, Array.isArray(value) ? value.join(", ") : value];
    })
  );
  const link = typeof row?.link === "string" ? row.link : null;

  return {
    key: getFavoriteKey(row, visibleColumns, from),
    from,
    data,
    savedAt: Date.now(),
    titleIsLink: Boolean(titleIsLink),
    linkUrl: titleIsLink ? link : null,
  };
}

export function toggleFavorite(
  row,
  columns,
  from = getCurrentRoutePath(),
  titleIsLink = false
) {
  const currentSnapshot = readInitialSnapshot();
  const key = getFavoriteKey(row, columns, from);

  if (currentSnapshot.keys.has(key)) {
    writeItems(currentSnapshot.items.filter((item) => item?.key !== key));
    return { isFavorite: false, key };
  }

  const item = buildFavoriteItem(row, columns, from, titleIsLink);
  writeItems([item, ...currentSnapshot.items]);
  return { isFavorite: true, key, item };
}

export function clearFavorites() {
  writeItems(EMPTY_ITEMS);
}

export function listFavorites() {
  return readInitialSnapshot().items;
}

export function getFavoritesCount() {
  return readInitialSnapshot().items.length;
}

export function useFavorites() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot).items;
}

export function useFavoritesCount() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot).items.length;
}

export function useFavoriteKey(key) {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot).keys.has(key);
}
