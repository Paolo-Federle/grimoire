import React from 'react';

export default function BaseTable({ headers, data, onRowClick, title }) {
    return (
        <div style={{ marginBottom: '20px' }}>
            {title && <h3>{title}</h3>}
            <table className='spacing-table' style={{ minWidth: 600 }}>
                <thead>
                    <tr className='table-row'>
                        {headers.map((header, i) => (
                            <th key={i}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, idx) => (
                        <tr
                            key={idx}
                            className={`alternating-row table-clickable ${onRowClick ? 'active-row-link' : ''}`}
                            onClick={onRowClick ? () => onRowClick(row) : undefined}
                        >
                            {headers.map((header, i) => (
                                <td key={i}>{row[header]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
