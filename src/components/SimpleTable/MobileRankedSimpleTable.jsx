import React, { useState } from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { BookLink } from "../BookLink";
import FavoriteToggle from "../FavoriteToggle";
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
    handleLinkClick,
    rankedField = DEFAULT_RANKED_FIELD,
    nestedRankField = "dot",
    nestedSummaryField = "summary",
    rankHeader = "Rank",
    summaryHeader = "Summary",
    rankedParentHeaders,
}) {
    const [openSections, setOpenSections] = useState({});

    const toggleSection = (rowIndex) => {
        setOpenSections((prev) => ({
            ...prev,
            [rowIndex]: !prev[rowIndex],
        }));
    };

    const canTitleLink = (row) => !!(activeRowLink && row?.link);

    const renderParentValue = (header, row, cellIndex) => {
        const hasParentHeaders = Array.isArray(rankedParentHeaders);
        const parentHeader = hasParentHeaders ? rankedParentHeaders[cellIndex] : header;

        if (!parentHeader) return "";

        if (parentHeader === "Book") return row.Book ? BookLink(row.Book) : "";

        const value = renderSimpleValue(row[parentHeader]);
        const isFirstCell = cellIndex === 0;
        const titleIsLink = isFirstCell && canTitleLink(row);

        if (!titleIsLink) return value;

        return (
            <a
                href={row.link}
                onClick={(e) => handleLinkClick(e, row.link)}
                className="underline text-white"
            >
                {value}
            </a>
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
            <a
                href={row.link}
                onClick={(e) => handleLinkClick(e, row.link)}
                className="underline text-blue-600"
            >
                {value}
            </a>
        );
    };

    return (
        <div className="space-y-4 mt-4 md:hidden">
            {data.map((row, rowIndex) => {
                const rankedRows = Array.isArray(row?.[rankedField]) ? row[rankedField] : [];
                const isOpen = !!openSections[rowIndex];
                const titleIsLink = canTitleLink(row);

                return (
                    <React.Fragment key={rowIndex}>
                        <div className="bg-neutral-900 text-white rounded-md">
                            <div className="flex items-center justify-between px-4 py-3">
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
                                        {renderParentValue(headers[0], row, 0)}
                                    </span>
                                </div>

                                {rankedRows.length > 0 && (
                                    <button
                                        type="button"
                                        onClick={() => toggleSection(rowIndex)}
                                        className="p-1 text-white"
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
