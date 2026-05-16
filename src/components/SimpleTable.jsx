import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import DesktopSimpleTable from "./SimpleTable/DesktopSimpleTable";
import MobileSimpleTable from "./SimpleTable/MobileSimpleTable";
import DesktopRankedSimpleTable from "./SimpleTable/DesktopRankedSimpleTable";
import MobileRankedSimpleTable from "./SimpleTable/MobileRankedSimpleTable";
import {
    DEFAULT_RANKED_FIELD,
    getRankedTableHeaders,
    hasRankedRows,
} from "./SimpleTable/rankedTableUtils";
import { getCurrentRoutePath } from "../utils";

export default function SimpleTable({
    title,
    upperText,
    maxWidth,
    table,
    headers,
    activeRowLink,
    mergeHeaders,
    titleVariant = "default",
    className = "",
    rankedField = DEFAULT_RANKED_FIELD,
    nestedRankField = "dot",
    nestedSummaryField = "summary",
    rankHeader = "Rank",
    summaryHeader = "Summary",
    rankedParentHeaders,
}) {
    const [isSectionActive, setIsSectionActive] = useState(true);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const navigate = useNavigate();
    const sourcePath = getCurrentRoutePath();
    const isRankedTable = hasRankedRows(table, rankedField);

    useEffect(() => {
        const handler = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", handler);
        return () => window.removeEventListener("resize", handler);
    }, []);

    const tableHeaders = isRankedTable
        ? getRankedTableHeaders({ data: table, headers, rankedField, rankHeader, summaryHeader })
        : headers || Object.keys(table?.[0] || {}).filter((h) => h !== "link");
    const columnsToSave = (tableHeaders || []).filter((h) => h !== "link");
    const TitleTag = titleVariant === "nested" ? "h2" : "h1";
    const titleClassName = titleVariant === "nested"
        ? "cursor-pointer text-xl flex items-center gap-1"
        : "cursor-pointer text-2xl flex items-center gap-1";
    const handleLinkClick = (e, link) => {
        e.preventDefault();
        navigate(link);
    };

    return (
        <div className={className}>
            {title && (
                <TitleTag
                    onClick={() => setIsSectionActive((p) => !p)}
                    className={titleClassName}
                >
                    {title} {isSectionActive ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </TitleTag>
            )}

            {upperText && isSectionActive && (
                <div style={{ paddingBottom: 20, maxWidth }}>
                    {upperText.map((desc, i) => (
                        <p key={i}>
                            {typeof desc === "string" ? (
                                <span dangerouslySetInnerHTML={{ __html: desc }} />
                            ) : (
                                <Link to={desc.link}>{desc.text}</Link>
                            )}
                        </p>
                    ))}
                </div>
            )}

            {isSectionActive && (
                <>
                    {isRankedTable && isMobile && (
                        <MobileRankedSimpleTable
                            headers={tableHeaders}
                            data={table}
                            activeRowLink={activeRowLink}
                            sourcePath={sourcePath}
                            columnsToSave={columnsToSave}
                            handleLinkClick={handleLinkClick}
                            rankedField={rankedField}
                            nestedRankField={nestedRankField}
                            nestedSummaryField={nestedSummaryField}
                            rankHeader={rankHeader}
                            summaryHeader={summaryHeader}
                            rankedParentHeaders={rankedParentHeaders}
                        />
                    )}
                    {isRankedTable && !isMobile && (
                        <DesktopRankedSimpleTable
                            headers={tableHeaders}
                            data={table}
                            activeRowLink={activeRowLink}
                            sourcePath={sourcePath}
                            columnsToSave={columnsToSave}
                            handleLinkClick={handleLinkClick}
                            rankedField={rankedField}
                            nestedRankField={nestedRankField}
                            nestedSummaryField={nestedSummaryField}
                            rankHeader={rankHeader}
                            summaryHeader={summaryHeader}
                            rankedParentHeaders={rankedParentHeaders}
                        />
                    )}
                    {!isRankedTable && isMobile && (
                        <MobileSimpleTable
                            headers={tableHeaders}
                            data={table}
                            activeRowLink={activeRowLink}
                        />
                    )}
                    {!isRankedTable && !isMobile && (
                        <DesktopSimpleTable
                            headers={tableHeaders}
                            data={table}
                            activeRowLink={activeRowLink}
                            mergeHeaders={mergeHeaders}
                        />
                    )}
                </>
            )}
        </div>
    );
}
