import React from "react";
import { BookLink } from "../BookLink";

export default function DesktopManyHeadersTable({
  table,
  tableHeaders,
  isHeaderRow,
  getHeaderRowData,
  activeRowLink,
  prereqForLink,
  handleLinkClick,
  alternateData
}) {
  const renderCell = (header, rowData, row, cellIndex) => {
    const value = rowData[header];

    const shouldLink =
      cellIndex === 0 &&
      activeRowLink &&
      rowData.link &&
      (prereqForLink === undefined || row[prereqForLink] !== "");

    if (header === "Book") return BookLink(value);

    if (shouldLink) {
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
                  const content = headerRow
                    ? row[alternateData[cellIndex]] || ""
                    : renderCell(header, rowData, row, cellIndex);

                  if (headerRow) {
                    const shouldLink =
                      cellIndex === 0 &&
                      activeRowLink &&
                      row.link &&
                      (prereqForLink === undefined ||
                        row[prereqForLink] !== "");

                    return (
                      <th key={header}>
                        {shouldLink ? (
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
