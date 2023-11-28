import React from 'react';


export default function TableComponent({ headings, rows }) {
  return (
    <div className="flexed-column">
      <table>
        <tbody>
          {headings && (
            <tr>
              {headings.map((heading, index) => (
                <th key={index}>{heading}</th>
              ))}
            </tr>
          )}
          {rows.map((row, rowIndex) => (
            <td key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <tr key={cellIndex}>{cell}</tr>
              ))}
            </td>
          ))}
        </tbody>
      </table>
    </div>
  );
};