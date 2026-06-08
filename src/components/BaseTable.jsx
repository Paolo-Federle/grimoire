import React from "react";
import { BookLink } from "./BookLink";
import { useNavigate } from "react-router-dom";
import FavoriteToggle from "./FavoriteToggle";
import { getCurrentRoutePath, normalizeDisplayText } from "../utils";

function renderDisplayValue(value) {
  if (Array.isArray(value)) return normalizeDisplayText(value.join(", "));
  if (value !== null && typeof value === "object") return "";
  return normalizeDisplayText(value);
}

export default function BaseTable({
  headers,
  data,
  onRowClick,
  title,
}) {
  const navigate = useNavigate();
  const sourcePath = getCurrentRoutePath();

  const goRouteId = (id) => {
    navigate(`${id}`);
  };

  const columnsToSave = (headers || []).filter((h) => h !== "link");

  return (
    <div style={{ marginBottom: "20px" }}>
      {title && <h3>{normalizeDisplayText(title)}</h3>}

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
                  return (
                    <td key={i}>
                      {BookLink(value)}
                    </td>
                  );
                }

                const isFirstCell = i === 0;
                const displayValue = renderDisplayValue(value);

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
                        {displayValue}
                      </a>
                    ) : (
                      displayValue
                    );

                  return (
                    <td key={i}>
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
                          titleIsLink={!!(onRowClick && row.link)}
                        />
                        {textNode}
                      </span>
                    </td>
                  );
                }

                return (
                  <td key={i}>
                    {displayValue}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
