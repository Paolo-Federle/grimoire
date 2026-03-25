import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { BookLink } from "./BookLink"; 
import FavoriteToggle from "./FavoriteToggle";
import { getCurrentRoutePath } from "../utils";


/**
 * Generic nested table for datasets shaped like:
 *
 * [
 *   {
 *     FlatField1: "value",
 *     FlatField2: "value",
 *     Summary: "parent summary",
 *     Book: "...",
 *     link: "...",
 *     Ranks: [
 *       { dot: 1, summary: "child summary" },
 *       { dot: 2, summary: "child summary" }
 *     ]
 *   }
 * ]
 *
 * Rendering logic:
 * - keeps the original order of flat keys from the object
 * - excludes the nested array field from parent columns
 * - inserts the Rank column immediately before the nested summary column
 * - parent row (black row) renders flat values only
 * - child rows render:
 *   - Rank => bullet dots from nestedItem.dot
 *   - Summary => nestedItem.summary
 *
 * Defaults:
 * - nestedField = "Ranks"
 * - nestedSummaryField = "summary"
 * - nestedRankField = "dot"
 * - nestedRankColumnTitle = "Rank"
 * - nestedColumnTitle = "Summary"
 *
 * Standard usage:
 * <NewTable title="Manifestations-Keys" data={ManifestationsKeysData} />
 */
function formatHeaderLabel(key) {
  return key.replace(/([a-z])([A-Z])/g, "$1 $2");
}

function renderSimpleValue(value) {
  if (Array.isArray(value)) return value.join(", ");
  if (value === null || value === undefined) return "";
  if (typeof value === "object") return "";
  return value;
}

function renderRankDots(value) {
  const numericValue = Number(value);
  if (!Number.isFinite(numericValue) || numericValue <= 0) return "";
  return "•".repeat(numericValue);
}

export default function NewTable({
  title,
  data = [],
  activeRowLink = false,
  prereqForLink,

  // standard nested structure defaults
  nestedField = "Ranks",
  nestedSummaryField = "summary",
  nestedRankField = "dot",
  nestedColumnTitle = "Summary",
  nestedRankColumnTitle = "Rank",

  excludeFields = ["link"],
  enableFavorites = true,
}) {
  const [isSectionActive, setIsSectionActive] = useState(true);
  const navigate = useNavigate();
  const sourcePath = getCurrentRoutePath();


  const headers = useMemo(() => {
    const firstRow = data?.[0] || {};
    const originalKeys = Object.keys(firstRow);

    const flatHeaders = originalKeys.filter((key) => {
      if (excludeFields.includes(key)) return false;
      if (key === nestedField) return false;
      if (key === nestedRankColumnTitle) return false;
      if (Array.isArray(firstRow[key])) return false;
      if (firstRow[key] !== null && typeof firstRow[key] === "object") return false;
      return true;
    });

    const summaryIndex = flatHeaders.indexOf(nestedColumnTitle);
    const rankAlreadyPresent = flatHeaders.includes(nestedRankColumnTitle);

    if (!rankAlreadyPresent) {
      if (summaryIndex >= 0) {
        flatHeaders.splice(summaryIndex, 0, nestedRankColumnTitle);
      } else {
        flatHeaders.push(nestedRankColumnTitle);
        flatHeaders.push(nestedColumnTitle);
      }
    }

    if (!flatHeaders.includes(nestedColumnTitle)) {
      flatHeaders.push(nestedColumnTitle);
    }

    return flatHeaders;
  }, [
    data,
    excludeFields,
    nestedField,
    nestedColumnTitle,
    nestedRankColumnTitle,
  ]);

  const columnsToSave = headers.filter((h) => h !== "link");

  const toggleSection = () => setIsSectionActive((prev) => !prev);

  const handleLinkClick = (e, link) => {
    e.preventDefault();
    navigate(link);
  };

  const canTitleLink = (row) =>
    !!(
      activeRowLink &&
      row?.link &&
      (prereqForLink === undefined || row?.[prereqForLink] !== "")
    );

  if (!data?.length) {
    return (
      <div>
        {title && (
          <h1
            onClick={toggleSection}
            className="text-2xl cursor-pointer flex items-center gap-1"
          >
            {title} {isSectionActive ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </h1>
        )}
        {isSectionActive && <p>No data</p>}
      </div>
    );
  }

  return (
    <div>
      {title && (
        <h1
          onClick={toggleSection}
          className="text-2xl cursor-pointer flex items-center gap-1"
        >
          {title} {isSectionActive ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </h1>
      )}

      {isSectionActive && (
        <div className="table-container">
          <table className="spacing-table" style={{ minWidth: 900, width: "100%" }}>
            <thead>
              <tr className="table-row">
                {headers.map((header) => (
                  <th key={header}>{formatHeaderLabel(header)}</th>
                ))}
              </tr>
            </thead>

            <tbody>
              {data.map((row, rowIndex) => {
                const nestedItems = Array.isArray(row[nestedField]) ? row[nestedField] : [];
                const titleIsLink = canTitleLink(row);

                return (
                  <React.Fragment key={rowIndex}>
                    <tr className="table-row">
                      {headers.map((header, cellIndex) => {
                        const isFirstCell = cellIndex === 0;

                        let content = "";

                        if (
                          header === nestedRankColumnTitle ||
                          header === nestedColumnTitle
                        ) {
                          content = header === nestedColumnTitle
                            ? renderSimpleValue(row[header])
                            : "";
                        } else if (header === "Book") {
                          content = row.Book ? BookLink(row.Book) : "";
                        } else {
                          content = renderSimpleValue(row[header]);
                        }

                        if (isFirstCell) {
                          return (
                            <th key={`${rowIndex}-${header}`}>
                              <span
                                style={{
                                  display: "inline-flex",
                                  alignItems: "center",
                                  gap: 6,
                                }}
                              >
                                {enableFavorites && (
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
                                    className="underline text-white"
                                  >
                                    {content}
                                  </a>
                                ) : (
                                  content
                                )}
                              </span>
                            </th>
                          );
                        }

                        return <th key={`${rowIndex}-${header}`}>{content}</th>;
                      })}
                    </tr>

                    {nestedItems.map((nestedItem, nestedIndex) => (
                      <tr
                        key={`${rowIndex}-${nestedIndex}`}
                        className="alternating-row"
                      >
                        {headers.map((header) => {
                          let content = "";

                          if (header === nestedRankColumnTitle) {
                            content = renderRankDots(nestedItem?.[nestedRankField]);
                          } else if (header === nestedColumnTitle) {
                            content = nestedItem?.[nestedSummaryField] || "";
                          }

                          return (
                            <td key={`${rowIndex}-${nestedIndex}-${header}`}>
                              {content}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}