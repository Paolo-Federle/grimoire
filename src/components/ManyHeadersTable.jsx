import React from 'react';
import { useNavigate } from "react-router-dom";

// activeRowLink per attivare link nella tabella
export default function ManyHeadersTable(props) {
  const tableHeaders = props.headers ? props.headers : Object.keys(props.table[0]).filter(header => header !== 'link');
  const navigate = useNavigate();
  const goRouteId = (id) => {
    navigate(`${id}`);
  }

  const [isSectionActive, setIsSectionActive] = React.useState(true);

  const handleSectionToggle = () => {
    setIsSectionActive(!isSectionActive);
  };

  // Function to check if a row should be styled as a header
  const isHeaderRow = (row) => {
    if (!props.headerCheckFields || props.headerCheckFields.length === 0) return false;
    return props.headerCheckFields.every(field => row[field] === 'N/A');
  }

  // Function to get alternate data for header rows
  const getHeaderRowData = (row) => {
    if (!props.alternateData) return {};
    return props.alternateData.reduce((acc, key) => {
      acc[key] = row[key];
      return acc;
    }, {});
  }

  return (
    <>
      <div>
        <h1 onClick={handleSectionToggle} style={{ cursor: 'pointer' }}>
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
                      className={`${isHeader ? 'table-row' : `alternating-row table-clickable ${props.activeRowLink ? 'active-row-link' : ''}`}`}
                      // onClick={!isHeader && props.activeRowLink ? () => goRouteId(data.link) : undefined}
                      onClick={
                        props.activeRowLink &&
                        (props.prereqForLink === undefined || data[props.prereqForLink] !== "" )
                          ? () => goRouteId(data.link)
                          : undefined
                      }
                    >
                      {tableHeaders.map((header, cellIndex) => {
                        if (isHeader) {
                          if (cellIndex < props.alternateData.length) {
                            return <th key={header}>{rowData[props.alternateData[cellIndex]] || ''}</th>;
                          } else {
                            return <th key={header}></th>;
                          }
                        } else {
                          return <td key={header}>{rowData[header]}</td>;
                        }
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}
