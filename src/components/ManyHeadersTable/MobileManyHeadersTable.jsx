import React, { useState } from "react";
import { BookLink } from "../BookLink";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteToggle from "../FavoriteToggle";

export default function MobileManyHeadersTable({
  table,
  tableHeaders,
  columnsToSave,
  sourcePath,
  isHeaderRow,
  activeRowLink,
  prereqForLink,
  handleLinkClick,
  alternateData,
}) {
  const [openSections, setOpenSections] = useState({});

  const canTitleLink = (row, linkValue) =>
    !!(
      activeRowLink &&
      linkValue &&
      (prereqForLink === undefined || row?.[prereqForLink] !== "")
    );

  const toggleSection = (headerIndex) => {
    setOpenSections((prev) => ({
      ...prev,
      [headerIndex]: !prev[headerIndex],
    }));
  };

  const renderCell = (header, row, value, cellIndex) => {
    if (header === "Book") return BookLink(value);

    const isFirstCell = cellIndex === 0;
    const titleIsLink = isFirstCell && canTitleLink(row, row.link);

    if (titleIsLink) {
      return (
        <a
          href={row.link}
          onClick={(e) => handleLinkClick(e, row.link)}
          className="underline text-blue-600"
        >
          {value}
        </a>
      );
    }

    return value;
  };

  const sectionHasChildren = (headerIndex) => {
    for (let i = headerIndex + 1; i < table.length; i++) {
      const row = table[i];
      if (isHeaderRow(row)) return false;
      return true;
    }
    return false;
  };

  const findParentHeaderIndex = (rowIndex) => {
    for (let i = rowIndex - 1; i >= 0; i--) {
      if (isHeaderRow(table[i])) return i;
    }
    return null;
  };

  return (
    <div className="space-y-4 mt-4">
      {table.map((row, rowIndex) => {
        const headerRow = isHeaderRow(row);

        // SECTION HEADER
        if (headerRow) {
          const label = row[alternateData[0]];
          const titleIsLink = canTitleLink(row, row.link);

          const hasChildren = sectionHasChildren(rowIndex);
          const isOpen = !!openSections[rowIndex];

          return (
            <div key={rowIndex} className="bg-neutral-900 text-white rounded-md">
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

                    {titleIsLink ? (
                      <a
                        href={row.link}
                        onClick={(e) => handleLinkClick(e, row.link)}
                        className="underline text-white"
                      >
                        {label}
                      </a>
                    ) : (
                      label
                    )}
                  </span>
                </div>

                {hasChildren && (
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
          );
        }

        // NORMAL ROW
        const parentHeaderIndex = findParentHeaderIndex(rowIndex);
        if (parentHeaderIndex !== null && !openSections[parentHeaderIndex]) {
          return null;
        }

        return (
          <div
            key={rowIndex}
            className="bg-white border border-neutral-700 rounded-md p-4 space-y-2"
          >
            {tableHeaders.map((header, cellIndex) => {
              const value = row[header];
              const isFirstCell = cellIndex === 0;
              const titleIsLink = isFirstCell && canTitleLink(row, row.link);

              return (
                <div key={cellIndex} className="flex justify-between text-sm">
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
                        <FavoriteToggle
                          row={row}
                          columns={columnsToSave}
                          sourcePath={sourcePath}
                          titleIsLink={titleIsLink}
                        />
                        {renderCell(header, row, value, cellIndex)}
                      </span>
                    ) : (
                      renderCell(header, row, value, cellIndex)
                    )}
                  </span>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
