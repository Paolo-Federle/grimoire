import React from "react";
import { BookLink } from "../BookLink";
import FavoriteToggle from "../FavoriteToggle";

export default function DesktopManyHeadersTable({
  table,
  tableHeaders,
  columnsToSave,
  sourcePath,
  isHeaderRow,
  getHeaderRowData,
  activeRowLink,
  prereqForLink,
  handleLinkClick,
  alternateData,
}) {
  const canTitleLink = (row, linkValue) =>
    !!(
      activeRowLink &&
      linkValue &&
      (prereqForLink === undefined || row?.[prereqForLink] !== "")
    );

  const renderCell = (header, rowData, row, cellIndex) => {
    const value = rowData[header];

    if (header === "Book") return BookLink(value);

    const isFirstCell = cellIndex === 0;
    const titleIsLink = isFirstCell && canTitleLink(row, rowData.link);

    if (titleIsLink) {
      return (
        <a
          href={rowData.link}
          onClick={(e) => handleLinkClick(e, rowData.link)}
          className="text-blue-600 underline hover:text-blue-800"
        >
          {value}
        </a>
      );
    }

    return value;
  };

  return (
    <div className="table-container">
      <table className="spacing-table" style={{ minWidth: 600 }}>
        <tbody>
          <tr className="table-row">
            {tableHeaders.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>

          {table.map((row, rowIndex) => {
            const headerRow = isHeaderRow(row);
            const rowData = headerRow ? getHeaderRowData(row) : row;

            return (
              <tr
                key={rowIndex}
                className={headerRow ? "table-row" : "alternating-row"}
              >
                {tableHeaders.map((header, cellIndex) => {
                  const isFirstCell = cellIndex === 0;

                  // contenuto della cella
                  const content = headerRow
                    ? row[alternateData[cellIndex]] || ""
                    : renderCell(header, rowData, row, cellIndex);

                  // --- HEADER ROW (riga-sezione) ---
                  if (headerRow) {
                    const titleIsLink =
                      isFirstCell && canTitleLink(row, row.link);

                    return (
                      <th key={header}>
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
                        ) : titleIsLink ? (
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
                      </th>
                    );
                  }

                  // --- NORMAL ROW ---
                  if (isFirstCell) {
                    const titleIsLink = canTitleLink(row, rowData.link);

                    return (
                      <td key={header}>
                        <span
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 6,
                          }}
                        >
                          <FavoriteToggle
                            row={rowData}
                            columns={columnsToSave}
                            sourcePath={sourcePath}
                            titleIsLink={titleIsLink}
                          />
                          {content}
                        </span>
                      </td>
                    );
                  }

                  return <td key={header}>{content}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
