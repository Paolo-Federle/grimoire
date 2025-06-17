import React, { useState } from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { BookLink } from './BookLink';

export default function MultipleTables({
    title,
    hideButton,
    listOfRows,
    displayHeaders,
    tableFields,
    activeRowLink
}) {
    const [isTableVisible, setIsTableVisible] = useState(true);
    const navigate = useNavigate();

    const handleToggle = () => setIsTableVisible(prev => !prev);
    const handleRowClick = (link, event) => {
        event.preventDefault();
        navigate(link);
    };

    return (
        <div className="grid-container">
            <h1 className="text-xl">{title}</h1>

            {!hideButton && (
                <Button onClick={handleToggle} variant="contained">
                    {isTableVisible ? 'Hide' : 'Show'}
                </Button>
            )}

            {isTableVisible && (
                <div className="table-container">
                    <table className="spacing-table">
                        <tbody>
                            {listOfRows.map((rows, tableIndex) => (
                                <React.Fragment key={tableIndex}>
                                    <tr className="table-row">
                                        {displayHeaders[tableIndex].map(header => (
                                            <th key={header}>{header}</th>
                                        ))}
                                    </tr>
                                    {rows.map((data, rowIndex) => (
                                        <tr key={rowIndex} className="alternating-row">
                                            {tableFields.map((field, fieldIndex) => {
                                                const value = data[field];

                                                if (field === 'Book') {
                                                    return <td key={field}>{BookLink(value)}</td>;
                                                }

                                                const isFirstColWithLink = 
                                                    fieldIndex === 0 && activeRowLink && data.link;

                                                if (isFirstColWithLink) {
                                                    return (
                                                        <td key={field}>
                                                            <a
                                                                href={data.link}
                                                                onClick={e => handleRowClick(data.link, e)}
                                                                style={{ textDecoration: 'underline' }}
                                                            >
                                                                {value}
                                                            </a>
                                                        </td>
                                                    );
                                                }

                                                return <td key={field}>{value}</td>;
                                            })}
                                        </tr>
                                    ))}
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
