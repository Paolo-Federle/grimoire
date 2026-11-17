import React, { useState } from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { BookLink } from "../BookLink";
import FavoriteToggle from "../FavoriteToggle";
import TableRowLink from "./TableRowLink";
import {
    DEFAULT_RANKED_FIELD,
    getRankedChildValue,
    renderSimpleValue,
} from "./rankedTableUtils";

export default function MobileRankedSimpleTable({
    headers,
    data,
    activeRowLink,
    sourcePath,
    columnsToSave,
    rankedField = DEFAULT_RANKED_FIELD,
    nestedRankField = "dot",
    nestedSummaryField = "summary",
    rankHeader = "Rank",
    summaryHeader = "Summary",
    rankedParentHeaders,
}) {
    const [openSections, setOpenSections] = useState({});
    const parentHeader = Array.isArray(rankedParentHeaders) ? rankedParentHeaders[0] : headers[0];

    const toggleSection = (rowIndex) => {
        setOpenSections((prev) => ({
            ...prev,
            [rowIndex]: !prev[rowIndex],
        }));
    };

    const canTitleLink = (row) => !!(activeRowLink && row?.link);

    const renderParentValue = (row) => {
        if (!parentHeader) return "";

        if (parentHeader === "Book") return row.Book ? BookLink(row.Book) : "";

        const value = renderSimpleValue(row[parentHeader]);
        if (!canTitleLink(row)) return value;

        return (
            <TableRowLink to={row.link} className="underline text-white">
                {value}
            </TableRowLink>
        );
    };

    const renderChildValue = (header, row, cellIndex) => {
        if (header === "Book") return row.Book ? BookLink(row.Book) : "";

        const value = getRankedChildValue(row, header, {
            rankHeader,
            nestedRankField,
            summaryHeader,
            nestedSummaryField,
        });
        const isFirstCell = cellIndex === 0;
        const titleIsLink = isFirstCell && canTitleLink(row);

        if (!titleIsLink) return value;

        return (
            <TableRowLink to={row.link} className="underline text-blue-600">
                {value}
            </TableRowLink>
        );
    };

    return (
        <div className="space-y-4 mt-4 md:hidden">
            {data.map((row, rowIndex) => {
                const rankedRows = Array.isArray(row?.[rankedField]) ? row[rankedField] : [];
                const isOpen = !!openSections[rowIndex];
                const titleIsLink = canTitleLink(row);
                const parentTitle = renderSimpleValue(row[parentHeader]);

                return (
                    <React.Fragment key={rowIndex}>
                        <div className="bg-neutral-900 text-white rounded-md">
                            <div className="flex items-center justify-between px-4 py-2">
                                <div className="font-bold text-lg flex-1">
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
                                        {renderParentValue(row)}
                                    </span>
                                </div>

                                {rankedRows.length > 0 && (
                                    <button
                                        type="button"
                                        onClick={() => toggleSection(rowIndex)}
                                        aria-expanded={isOpen}
                                        aria-label={parentTitle ? `Ranks for ${parentTitle}` : "Ranks"}
                                        className="inline-flex size-11 shrink-0 items-center justify-center rounded text-white hover:bg-neutral-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                                    >
                                        {isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                    </button>
                                )}
                            </div>
                        </div>

                        {isOpen && rankedRows.map((rankedRow, rankedIndex) => (
                            <div
                                key={`${rowIndex}-${rankedIndex}`}
                                className="bg-white border border-neutral-700 rounded-md p-4 space-y-2"
                            >
                                {headers.map((header, cellIndex) => {
                                    const isFirstCell = cellIndex === 0;
                                    const childTitleIsLink = isFirstCell && canTitleLink(rankedRow);
                                    const renderedValue = renderChildValue(header, rankedRow, cellIndex);

                                    return (
                                        <div key={header} className="flex justify-between text-sm">
                                            <span className="font-semibold">{header}</span>
                                            <span className="max-w-[60%] text-right break-words">
                                                {isFirstCell ? (
                                                    <span
                                                        style={{
                                                            display: "inline-flex",
                                                            alignItems: "center",
                                                            gap: 6,
                                                        }}
                                                    >
                                                        {renderedValue && (
                                                            <FavoriteToggle
                                                                row={rankedRow}
                                                                columns={columnsToSave}
                                                                sourcePath={sourcePath}
                                                                titleIsLink={childTitleIsLink}
                                                            />
                                                        )}
                                                        {renderedValue}
                                                    </span>
                                                ) : (
                                                    renderedValue
                                                )}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        ))}
                    </React.Fragment>
                );
            })}
        </div>
    );
}
