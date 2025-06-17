import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { BookLink } from './BookLink';

export default function ManyHeadersTable({
  title,
  headers,
  table,
  headerCheckFields = [],
  alternateData = [],
  activeRowLink = false,
  prereqForLink
}) {
  const [isSectionActive, setIsSectionActive] = useState(true);
  const navigate = useNavigate();

  const tableHeaders = headers || Object.keys(table[0] || {}).filter(h => h !== 'link');

  const toggleSection = () => setIsSectionActive(prev => !prev);

  const isHeaderRow = (row) =>
    headerCheckFields.length > 0 && headerCheckFields.every(field => row[field] === 'N/A');

  const getHeaderRowData = (row) =>
    alternateData.reduce((acc, key) => {
      acc[key] = row[key];
      return acc;
    }, {});

  const handleLinkClick = (e, link) => {
    e.preventDefault();
    navigate(link);
  };

  const renderCellContent = (header, rowData, isHeader, cellIndex, row) => {
    const value = rowData[header];

    const shouldLink =
      cellIndex === 0 &&
      activeRowLink &&
      rowData.link &&
      (prereqForLink === undefined || row[prereqForLink] !== "");

    if (header === 'Book') {
      return BookLink(value);
    }

    if (shouldLink) {
      return (
        <a
          href={rowData.link}
          onClick={(e) => handleLinkClick(e, rowData.link)}
          style={{
            color: isHeader ? 'white' : '#1a0dab',
            textDecoration: 'underline'
          }}
        >
          {value}
        </a>
      );
    }

    return value;
  };

  return (
    <div>
      <h1 onClick={toggleSection} className="text-xl cursor-pointer flex items-center gap-1">
        {title} {isSectionActive ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </h1>

      {isSectionActive && (
        <div className="table-container">
          <table className="spacing-table" style={{ minWidth: 600 }}>
            <tbody>
              <tr className="table-row">
                {tableHeaders.map(header => (
                  <th key={header}>{header}</th>
                ))}
              </tr>

              {table.map((row, rowIndex) => {
                const headerRow = isHeaderRow(row);
                const rowData = headerRow ? getHeaderRowData(row) : row;

                return (
                  <tr
                    key={rowIndex}
                    className={headerRow ? 'table-row' : 'alternating-row'}
                  >
                    {tableHeaders.map((header, cellIndex) => {
                      const content = headerRow
                        ? row[alternateData[cellIndex]] || ''
                        : renderCellContent(header, rowData, false, cellIndex, row);

                      if (headerRow) {
                        const shouldLink =
                          cellIndex === 0 &&
                          activeRowLink &&
                          row.link &&
                          (prereqForLink === undefined || row[prereqForLink] !== "");

                        return shouldLink ? (
                          <th key={header}>
                            <a
                              href={row.link}
                              onClick={(e) => handleLinkClick(e, row.link)}
                              style={{ color: 'white', textDecoration: 'underline' }}
                            >
                              {content}
                            </a>
                          </th>
                        ) : (
                          <th key={header}>{content}</th>
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
      )}
    </div>
  );
}
