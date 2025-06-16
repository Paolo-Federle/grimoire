import React from 'react';
import { useNavigate } from "react-router-dom";
import { BookLink } from './BookLink'; // Assicurati che il path sia corretto

export default function ManyHeadersTable(props) {
  const tableHeaders = props.headers
    ? props.headers
    : Object.keys(props.table[0]).filter(header => header !== 'link');

  const navigate = useNavigate();
  const [isSectionActive, setIsSectionActive] = React.useState(true);

  const goRouteId = (id) => {
    navigate(`${id}`);
  };

  const handleSectionToggle = () => {
    setIsSectionActive(!isSectionActive);
  };

  const isHeaderRow = (row) => {
    if (!props.headerCheckFields || props.headerCheckFields.length === 0) return false;
    return props.headerCheckFields.every(field => row[field] === 'N/A');
  };

  const getHeaderRowData = (row) => {
    if (!props.alternateData) return {};
    return props.alternateData.reduce((acc, key) => {
      acc[key] = row[key];
      return acc;
    }, {});
  };

  return (
    <div>
      <h1 onClick={handleSectionToggle} style={{ cursor: 'pointer' }} className="text-xl">
        {props.title} {isSectionActive ? '∧' : '∨'}
      </h1>
      {isSectionActive && (
        <div className='table-container'>
          <table className='spacing-table' style={{ minWidth: 600 }}>
            <tbody>
              <tr className='table-row'>
                {tableHeaders.map((header) => (
                  <th key={header}>{header}</th>
                ))}
              </tr>
              {props.table.map((data, index) => {
                const isHeader = isHeaderRow(data);
                const rowData = isHeader ? getHeaderRowData(data) : data;

                return (
                  <tr
                    key={index}
                    className={isHeader ? 'table-row' : 'alternating-row'}
                  >
                    {tableHeaders.map((header, cellIndex) => {
                      // RIGHE HEADER
                      if (isHeader) {
                        const content = cellIndex < props.alternateData.length
                          ? data[props.alternateData[cellIndex]] || ''
                          : '';

                        if (
                          cellIndex === 0 &&
                          props.activeRowLink &&
                          data.link &&
                          (props.prereqForLink === undefined || data[props.prereqForLink] !== "")
                        ) {
                          return (
                            <th key={header}>
                              <a
                                href={data.link}
                                style={{ color: 'white', textDecoration: 'underline' }}
                                onClick={(e) => {
                                  e.preventDefault();
                                  goRouteId(data.link);
                                }}
                              >
                                {content}
                              </a>
                            </th>
                          );
                        } else {
                          return <th key={header}>{content}</th>;
                        }
                      }

                      // RIGHE NORMALI
                      return (
                        <td key={header}>
                          {header === 'Book' ? (
                            BookLink(rowData[header])
                          ) : header === tableHeaders[0] &&
                            props.activeRowLink &&
                            rowData.link &&
                            (props.prereqForLink === undefined || data[props.prereqForLink] !== "") ? (
                            <a
                              href={rowData.link}
                              style={{ color: '#1a0dab', textDecoration: 'underline' }}
                              onClick={(e) => {
                                e.preventDefault();
                                goRouteId(rowData.link);
                              }}
                            >
                              {rowData[header]}
                            </a>
                          ) : (
                            rowData[header]
                          )}
                        </td>
                      );
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
