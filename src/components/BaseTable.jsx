import React from "react";
import { BookLink } from "./BookLink";
import { useNavigate } from "react-router-dom";

import FavoriteToggle from "./FavoriteToggle";
import { getCurrentRoutePath } from "../utils";

export default function BaseTable({ headers, data, onRowClick, title }) {
  const navigate = useNavigate();
  const sourcePath = getCurrentRoutePath();

  const goRouteId = (id) => {
    navigate(`${id}`);
  };

  // Campi salvati nei preferiti: quelli visibili in tabella (escludo link tecnico)
  const columnsToSave = (headers || []).filter((h) => h !== "link");

  return (
    <div style={{ marginBottom: "20px" }}>
      {title && <h3>{title}</h3>}

      <table className="spacing-table" style={{ minWidth: 600 }}>
        <thead>
          <tr className="table-row">
            {headers.map((header, i) => (
              <th key={i}>{header}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} className="alternating-row">
              {headers.map((header, i) => {
                const value = row[header];

                if (header === "Book") {
                  return <td key={i}>{BookLink(value)}</td>;
                }

                const isFirstCell = i === 0;

                if (isFirstCell) {
                  const textNode =
                    onRowClick && row.link ? (
                      <a
                        href={row.link}
                        onClick={(e) => {
                          e.preventDefault();
                          goRouteId(row.link);
                        }}
                        style={{ textDecoration: "underline" }}
                      >
                        {value}
                      </a>
                    ) : (
                      value
                    );

                  return (
                    <td key={i}>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                        <FavoriteToggle
  row={row}
  columns={columnsToSave}
  sourcePath={sourcePath}
  titleIsLink={!!(onRowClick && row.link)}
/>
                        {textNode}
                      </span>
                    </td>
                  );
                }

                return <td key={i}>{value}</td>;
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
