import React from "react";
import { BookLink } from "../BookLink";
import FavoriteToggle from "../FavoriteToggle";
import {
    DEFAULT_RANKED_FIELD,
    getRankedChildValue,
    renderSimpleValue,
} from "./rankedTableUtils";

export default function DesktopRankedSimpleTable({
    headers,
    data,
    activeRowLink,
    sourcePath,
    columnsToSave,
    handleLinkClick,
    rankedField = DEFAULT_RANKED_FIELD,
    nestedRankField = "dot",
    nestedSummaryField = "summary",
    rankHeader = "Rank",
    summaryHeader = "Summary",
    rankedParentHeaders,
}) {
    const canTitleLink = (row) => !!(activeRowLink && row?.link);

    const renderParentCell = (header, row, cellIndex) => {
        const hasParentHeaders = Array.isArray(rankedParentHeaders);
        const parentHeader = hasParentHeaders ? rankedParentHeaders[cellIndex] : header;

        if (!parentHeader) return "";

        if (parentHeader === "Book") return row.Book ? BookLink(row.Book) : "";

        const value = renderSimpleValue(row[parentHeader]);
        const isFirstCell = cellIndex === 0;
        const titleIsLink = isFirstCell && canTitleLink(row);

        if (!isFirstCell) return value;

        return (
            <span
                style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                }}
            >
                <FavoriteToggle
                    row={row}
                    columns={columnsToSave}
                    sourcePath={sourcePath}
                    titleIsLink={titleIsLink}
                />

                {titleIsLink ? (
                    <a
                        href={row.link}
                        onClick={(e) => handleLinkClick(e, row.link)}
                        className="underline text-white"
                    >
                        {value}
                    </a>
                ) : (
                    value
                )}
            </span>
        );
    };

    const renderChildCell = (header, row, cellIndex) => {
        if (header === "Book") return row.Book ? BookLink(row.Book) : "";

        const value = getRankedChildValue(row, header, {
            rankHeader,
            nestedRankField,
            summaryHeader,
            nestedSummaryField,
        });
        const isFirstCell = cellIndex === 0;
        const titleIsLink = isFirstCell && canTitleLink(row);

        if (!isFirstCell) return value;
        if (!value && !titleIsLink) return "";

        return (
            <span
                style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                }}
            >
                {value && (
                    <FavoriteToggle
                        row={row}
                        columns={columnsToSave}
                        sourcePath={sourcePath}
                        titleIsLink={titleIsLink}
                    />
                )}

                {titleIsLink ? (
                    <a
                        href={row.link}
                        onClick={(e) => handleLinkClick(e, row.link)}
                        className="text-blue-600 underline hover:text-blue-800"
                    >
                        {value}
                    </a>
                ) : (
                    value
                )}
            </span>
        );
    };

    return (
        <div className="table-container hidden md:block">
            <table className="spacing-table" style={{ minWidth: 600 }}>
                <tbody>
                    <tr className="table-row">
                        {headers.map((header) => (
                            <th key={header}>{header}</th>
                        ))}
                    </tr>

                    {data.map((row, rowIndex) => {
                        const rankedRows = Array.isArray(row?.[rankedField]) ? row[rankedField] : [];

                        return (
                            <React.Fragment key={rowIndex}>
                                <tr className="table-row">
                                    {headers.map((header, cellIndex) => (
                                        <th key={header}>
                                            {renderParentCell(header, row, cellIndex)}
                                        </th>
                                    ))}
                                </tr>

                                {rankedRows.map((rankedRow, rankedIndex) => (
                                    <tr
                                        key={`${rowIndex}-${rankedIndex}`}
                                        className="alternating-row"
                                    >
                                        {headers.map((header, cellIndex) => (
                                            <td key={header}>
                                                {renderChildCell(header, rankedRow, cellIndex)}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </React.Fragment>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
