import { sheetData as initialSheetData } from "./00_SheetData";
import { slugify } from "../../utils";

export const SHEET_STORAGE_KEY = "grimoire_saved_sheets_v1";
export const SHEET_FILE_FORMAT = "grimoire-sheet-v1";
export const SHEET_STORAGE_VERSION = 2;

function isPlainObject(value) {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function cloneValue(value) {
  if (typeof structuredClone === "function") {
    return structuredClone(value);
  }

  return JSON.parse(JSON.stringify(value));
}

export function normalizeSheetData(candidate, template = initialSheetData) {
  if (Array.isArray(template)) {
    if (Array.isArray(candidate)) {
      if (template.length === 1 && isPlainObject(template[0])) {
        return candidate.map((item) => normalizeSheetData(item, template[0]));
      }

      return cloneValue(candidate);
    }

    return candidate !== undefined ? cloneValue(candidate) : cloneValue(template);
  }

  if (isPlainObject(template)) {
    const source = isPlainObject(candidate) ? candidate : {};
    const result = {};
    const keys = new Set([...Object.keys(template), ...Object.keys(source)]);

    keys.forEach((key) => {
      if (key === "choices") {
        return;
      }

      if (key in template) {
        result[key] = normalizeSheetData(source[key], template[key]);
        return;
      }

      result[key] = cloneValue(source[key]);
    });

    return result;
  }

  return candidate !== undefined ? cloneValue(candidate) : cloneValue(template);
}

function readStorage({ normalizeData = true } = {}) {
  if (typeof window === "undefined" || !window.localStorage) {
    return { version: SHEET_STORAGE_VERSION, sheets: [] };
  }

  try {
    const raw = window.localStorage.getItem(SHEET_STORAGE_KEY);
    if (!raw) {
      return { version: SHEET_STORAGE_VERSION, sheets: [] };
    }

    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || !Array.isArray(parsed.sheets)) {
      return { version: SHEET_STORAGE_VERSION, sheets: [] };
    }

    return {
      version: SHEET_STORAGE_VERSION,
      sheets: parsed.sheets
        .filter((sheet) => sheet && typeof sheet === "object" && sheet.id)
        .map((sheet) => ({
          ...sheet,
          data: normalizeData ? normalizeSheetData(sheet.data) : sheet.data,
        })),
    };
  } catch {
    return { version: SHEET_STORAGE_VERSION, sheets: [] };
  }
}

function writeStorage(store) {
  if (typeof window === "undefined" || !window.localStorage) {
    return;
  }

  window.localStorage.setItem(SHEET_STORAGE_KEY, JSON.stringify(store));
}

function buildSheetId() {
  return `sheet-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function resolveSheetName(data, fallback = "New Sheet") {
  return String(data?.character?.name || "").trim() || fallback;
}

export function listStoredSheets() {
  return [...readStorage({ normalizeData: false }).sheets].sort(
    (left, right) => new Date(right.updatedAt).getTime() - new Date(left.updatedAt).getTime()
  );
}

export function getStoredSheet(sheetId) {
  return readStorage().sheets.find((sheet) => sheet.id === sheetId) || null;
}

export function createStoredSheet() {
  const now = new Date().toISOString();
  const record = {
    id: buildSheetId(),
    name: "New Sheet",
    createdAt: now,
    updatedAt: now,
    data: normalizeSheetData(initialSheetData),
  };

  const store = readStorage();
  store.sheets.push(record);
  writeStorage(store);
  return record;
}

export function duplicateStoredSheet(sheetId) {
  const store = readStorage();
  const sourceSheet = store.sheets.find((sheet) => sheet.id === sheetId);

  if (!sourceSheet) {
    return null;
  }

  const now = new Date().toISOString();
  const duplicatedSheet = {
    ...sourceSheet,
    id: buildSheetId(),
    name: `${sourceSheet.name || "Sheet"} Copy`,
    createdAt: now,
    updatedAt: now,
    data: normalizeSheetData(sourceSheet.data),
  };

  store.sheets.push(duplicatedSheet);
  writeStorage(store);
  return duplicatedSheet;
}

export function saveStoredSheet(sheetId, data) {
  const normalizedData = normalizeSheetData(data);
  const store = readStorage();
  const existingSheetIndex = store.sheets.findIndex((sheet) => sheet.id === sheetId);
  const now = new Date().toISOString();

  if (existingSheetIndex === -1) {
    const createdSheet = {
      id: sheetId || buildSheetId(),
      name: resolveSheetName(normalizedData),
      createdAt: now,
      updatedAt: now,
      data: normalizedData,
    };
    store.sheets.push(createdSheet);
    writeStorage(store);
    return createdSheet;
  }

  const currentSheet = store.sheets[existingSheetIndex];
  const nextSheet = {
    ...currentSheet,
    name: resolveSheetName(normalizedData, currentSheet.name),
    updatedAt: now,
    data: normalizedData,
  };

  store.sheets[existingSheetIndex] = nextSheet;
  writeStorage(store);
  return nextSheet;
}

export function deleteStoredSheet(sheetId) {
  const store = readStorage();
  store.sheets = store.sheets.filter((sheet) => sheet.id !== sheetId);
  writeStorage(store);
}

export function buildSheetDownloadPayload(sheetRecord) {
  return {
    format: SHEET_FILE_FORMAT,
    exportedAt: new Date().toISOString(),
    sheet: {
      name: sheetRecord.name,
      createdAt: sheetRecord.createdAt,
      updatedAt: sheetRecord.updatedAt,
    },
    data: normalizeSheetData(sheetRecord.data),
  };
}

export function downloadSheetAsText(sheetRecord) {
  if (typeof window === "undefined" || !window.document) {
    return;
  }

  const payload = JSON.stringify(buildSheetDownloadPayload(sheetRecord), null, 2);
  const blob = new Blob([payload], { type: "application/json;charset=utf-8" });
  const url = window.URL.createObjectURL(blob);
  const anchor = window.document.createElement("a");
  const fileStem = slugify(sheetRecord.name || "sheet") || "sheet";

  anchor.href = url;
  anchor.download = `${fileStem}.${SHEET_FILE_FORMAT}.json`;
  window.document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  window.URL.revokeObjectURL(url);
}

export function parseImportedSheetText(text) {
  const parsed = JSON.parse(text);

  if (parsed?.format === SHEET_FILE_FORMAT && parsed?.data) {
    return {
      name: parsed?.sheet?.name || "Imported Sheet",
      data: normalizeSheetData(parsed.data),
    };
  }

  if (parsed?.character && parsed?.attributes) {
    return {
      name: resolveSheetName(parsed, "Imported Sheet"),
      data: normalizeSheetData(parsed),
    };
  }

  throw new Error("Unsupported sheet file format");
}

export function importStoredSheetFromText(text) {
  const importedSheet = parseImportedSheetText(text);
  const now = new Date().toISOString();
  const record = {
    id: buildSheetId(),
    name: importedSheet.name,
    createdAt: now,
    updatedAt: now,
    data: importedSheet.data,
  };

  const store = readStorage();
  store.sheets.push(record);
  writeStorage(store);
  return record;
}
