import React from 'react';
import { BookLink } from './BookLink'; 
import { useNavigate } from 'react-router-dom';

export default function BaseTable({ headers, data, onRowClick, title }) {
    const navigate = useNavigate();

    const goRouteId = (id) => {
        navigate(`${id}`);
    };

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
                        <tr key={idx} className="alternating-row">
                            {headers.map((header, i) => {
                                const value = row[header];

                                if (header === 'Book') {
                                    return <td key={i}>{BookLink(value)}</td>;
                                }

                                if (
                                    i === 0 &&
                                    onRowClick &&
                                    row.link
                                ) {
                                    return (
                                        <td key={i}>
                                            <a
                                                href={row.link}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    goRouteId(row.link);
                                                }}
                                                style={{ textDecoration: 'underline' }}
                                            >
                                                {value}
                                            </a>
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
