import React from "react";
import { BookLink } from "./BookLink";
import { useNavigate } from "react-router-dom";
import FavoriteToggle from "./FavoriteToggle";
import { getCurrentRoutePath } from "../utils";

function getRowSpans(data, headers, mergeHeaders = []) {
  const spans = {};

  mergeHeaders.forEach((header) => {
    spans[header] = new Array(data.length).fill(0);

    let start = 0;

    while (start < data.length) {
      const currentValue = data[start]?.[header];
      let count = 1;

      while (
        start + count < data.length &&
        data[start + count]?.[header] === currentValue
      ) {
        count++;
      }

      spans[header][start] = count;

      for (let i = start + 1; i < start + count; i++) {
        spans[header][i] = 0;
      }

      start += count;
    }
  });

  return spans;
}

export default function BaseTable({
  headers,
  data,
  onRowClick,
  title,
  mergeHeaders = [],
}) {
  const navigate = useNavigate();
  const sourcePath = getCurrentRoutePath();

  const goRouteId = (id) => {
    navigate(`${id}`);
  };

  const columnsToSave = (headers || []).filter((h) => h !== "link");
  const rowSpans = getRowSpans(data, headers, mergeHeaders);

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

                if (mergeHeaders.includes(header) && rowSpans[header][idx] === 0) {
                  return null;
                }

                const rowSpan =
                  mergeHeaders.includes(header) ? rowSpans[header][idx] : 1;

                if (header === "Book") {
                  return (
                    <td key={i} rowSpan={rowSpan}>
                      {BookLink(value)}
                    </td>
                  );
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
                    <td key={i} rowSpan={rowSpan}>
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
                  <td key={i} rowSpan={rowSpan}>
                    {Array.isArray(value) ? value.join(", ") : value}
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