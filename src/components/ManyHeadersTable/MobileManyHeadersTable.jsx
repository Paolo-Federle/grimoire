import React, { useState } from "react";
import { BookLink } from "../BookLink";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function MobileManyHeadersTable({
  table,
  tableHeaders,
  isHeaderRow,
  activeRowLink,
  prereqForLink,
  handleLinkClick,
  alternateData
}) {
  const [openSections, setOpenSections] = useState({}); // tutte chiuse all'inizio

  const toggleSection = (headerIndex) => {
    setOpenSections((prev) => ({
      ...prev,
      [headerIndex]: !prev[headerIndex],
    }));
  };

  const renderCell = (header, row, value, cellIndex) => {
    if (header === "Book") return BookLink(value);

    const shouldLink =
      cellIndex === 0 &&
      activeRowLink &&
      row.link &&
      (prereqForLink === undefined || row[prereqForLink] !== "");

    if (shouldLink) {
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

  // verifica se un dato header ha almeno una riga figlia
  const sectionHasChildren = (headerIndex) => {
    for (let i = headerIndex + 1; i < table.length; i++) {
      const row = table[i];
      if (isHeaderRow(row)) {
        // incontrato il prossimo header → nessun figlio
        return false;
      }
      // prima riga non-header → questa sezione ha figli
      return true;
    }
    return false;
  };

  // trova l'indice dell'header di sezione a cui appartiene una riga
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

        // -----------------------------
        // SECTION HEADER (Animalism, …)
        // -----------------------------
        if (headerRow) {
          const label = row[alternateData[0]];
          const hasLink =
            activeRowLink &&
            row.link &&
            (prereqForLink === undefined || row[prereqForLink] !== "");

          const hasChildren = sectionHasChildren(rowIndex);
          const isOpen = !!openSections[rowIndex];

          return (
            <div key={rowIndex} className="bg-neutral-900 text-white rounded-md">
              <div className="flex items-center justify-between px-4 py-3">
                {/* label con link (se presente) */}
                <div className="font-bold text-lg flex-1">
                  {hasLink ? (
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
                </div>

                {/* icona solo se ci sono figli */}
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

        // -----------------------------
        // RIGA NORMALE (figlia di una sezione)
        // -----------------------------
        const parentHeaderIndex = findParentHeaderIndex(rowIndex);

        // se appartiene a una sezione e quella sezione è chiusa → non mostrare
        if (
          parentHeaderIndex !== null &&
          !openSections[parentHeaderIndex] // undefined = chiusa di default
        ) {
          return null;
        }

        return (
          <div
            key={rowIndex}
            className="bg-white border border-neutral-700 rounded-md p-4 space-y-2"
          >
            {tableHeaders.map((header, cellIndex) => {
              const value = row[header];

              return (
                <div
                  key={cellIndex}
                  className="flex justify-between text-sm"
                >
                  <span className="font-semibold">{header}</span>
                  <span className="max-w-[60%] text-right break-words">
                    {renderCell(header, row, value, cellIndex)}
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
