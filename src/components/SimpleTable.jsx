import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import DesktopSimpleTable from "./SimpleTable/DesktopSimpleTable";
import MobileSimpleTable from "./SimpleTable/MobileSimpleTable";

export default function SimpleTable({
    title,
    upperText,
    maxWidth,
    table,
    headers,
    activeRowLink
}) {
    const [isSectionActive, setIsSectionActive] = useState(true);

    // -----------------------------
    // 🔥 MOBILE DETECTOR interno
    // -----------------------------
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handler = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", handler);
        return () => window.removeEventListener("resize", handler);
    }, []);

    // -----------------------------
    const tableHeaders =
        headers || Object.keys(table?.[0] || {}).filter((h) => h !== "link");

    return (
        <div>
            {title && (
                <h1
                    onClick={() => setIsSectionActive((p) => !p)}
                    className="cursor-pointer text-2xl flex items-center gap-1"
                >
                    {title} {isSectionActive ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </h1>
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
                    {isMobile ? (
                        <MobileSimpleTable
                            headers={tableHeaders}
                            data={table}
                            activeRowLink={activeRowLink}
                        />
                    ) : (
                        <DesktopSimpleTable
                            headers={tableHeaders}
                            data={table}
                            activeRowLink={activeRowLink}
                        />
                    )}
                </>
            )}
        </div>
    );
}
