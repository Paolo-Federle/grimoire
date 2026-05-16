export const DEFAULT_RANKED_FIELD = "Ranks";

const TECHNICAL_FIELDS = new Set(["link"]);
const DETAIL_FIELDS = new Set(["LongDescription", "longDescription", "FullDescription", "fullDescription"]);

export function hasRankedRows(data, rankedField = DEFAULT_RANKED_FIELD) {
    return Array.isArray(data) && data.some((row) => Array.isArray(row?.[rankedField]));
}

export function formatHeaderLabel(key) {
    return key.replace(/([a-z])([A-Z])/g, "$1 $2");
}

export function renderSimpleValue(value) {
    if (value === null || value === undefined) return "";
    if (Array.isArray(value)) return value.join(", ");
    if (typeof value === "object") return "";
    return value;
}

export function formatRankValue(value) {
    if (value === null || value === undefined) return "";

    const numericValue = Number(value);
    if (Number.isFinite(numericValue) && numericValue > 0) {
        return "•".repeat(numericValue);
    }

    return value;
}

export function getRankedTableHeaders({
    data,
    headers,
    rankedField = DEFAULT_RANKED_FIELD,
    rankHeader = "Rank",
    summaryHeader = "Summary",
}) {
    if (headers?.length) return headers;

    const firstRow = data?.[0] || {};
    const tableHeaders = Object.keys(firstRow).filter((key) => {
        if (key === rankedField) return false;
        if (TECHNICAL_FIELDS.has(key)) return false;
        if (DETAIL_FIELDS.has(key)) return false;
        if (Array.isArray(firstRow[key])) return false;
        if (firstRow[key] !== null && typeof firstRow[key] === "object") return false;
        return true;
    });

    if (!tableHeaders.includes(rankHeader)) {
        const summaryIndex = tableHeaders.indexOf(summaryHeader);
        if (summaryIndex >= 0) {
            tableHeaders.splice(summaryIndex, 0, rankHeader);
        } else {
            tableHeaders.push(rankHeader);
        }
    }

    return tableHeaders;
}

export function getRankedChildValue(row, header, options = {}) {
    const {
        rankHeader = "Rank",
        nestedRankField = "dot",
        summaryHeader = "Summary",
        nestedSummaryField = "summary",
    } = options;

    if (row?.[header] !== undefined) {
        return header === rankHeader ? formatRankValue(row[header]) : renderSimpleValue(row[header]);
    }

    if (header === rankHeader) {
        return formatRankValue(row?.[nestedRankField]);
    }

    if (header === summaryHeader) {
        return renderSimpleValue(row?.[nestedSummaryField]);
    }

    return "";
}
