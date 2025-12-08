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

    // -------------------------
    // Hook interno → rileva mobile
    // -------------------------
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    const handleToggle = () => setIsTableVisible(prev => !prev);

    const handleRowClick = (link, event) => {
        event.preventDefault();
        navigate(link);
    };

    // -------------------------
    // Rendering celle desktop
    // -------------------------
    const renderDesktopCell = (data, field, fieldIndex) => {
        const value = data[field];

        if (field === "Book") return <td>{BookLink(value)}</td>;

        const isFirstColWithLink =
            fieldIndex === 0 && activeRowLink && data.link;

        if (isFirstColWithLink) {
            return (
                <td>
                    <a
                        href={data.link}
                        onClick={(e) => handleRowClick(data.link, e)}
                        className="underline"
                    >
                        {value}
                    </a>
                </td>
            );
        }

        return <td>{value}</td>;
    };

    // -------------------------
    // Rendering MOBILE card
    // -------------------------
    const renderMobileCard = (data) => {
        return (
            <div className="border border-neutral-600 rounded-md p-3 bg-white space-y-2">
                {tableFields.map((field, i) => {
                    const value = data[field];

                    const isFirstColWithLink =
                        i === 0 && activeRowLink && data.link;

                    const renderedValue =
                        field === "Book" ? (
                            BookLink(value)
                        ) : isFirstColWithLink ? (
                            <a
                                href={data.link}
                                onClick={(e) => handleRowClick(data.link, e)}
                                className="underline text-blue-600"
                            >
                                {value}
                            </a>
                        ) : (
                            value
                        );

                    return (
                        <div key={i} className="flex justify-between text-sm">
                            <span className="font-semibold">{field}</span>
                            <span className="max-w-[60%] text-right break-words">
                                {renderedValue}
                            </span>
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <div className="grid-container">
            <h1 className="text-xl">{title}</h1>

            {!hideButton && (
                <Button onClick={handleToggle} variant="contained">
                    {isTableVisible ? "Hide" : "Show"}
                </Button>
            )}

            {isTableVisible && (
                <>
                    {/* DESKTOP TABLE */}
                    {!isMobile && (
                        <div className="table-container">
                            <table className="spacing-table">
                                <tbody>
                                    {listOfRows.map((rows, tableIndex) => (
                                        <React.Fragment key={tableIndex}>
                                            <tr className="table-row">
                                                {displayHeaders[tableIndex].map((header) => (
                                                    <th key={header}>{header}</th>
                                                ))}
                                            </tr>

                                            {rows.map((data, rowIndex) => (
                                                <tr key={rowIndex} className="alternating-row">
                                                    {tableFields.map((field, fieldIndex) =>
                                                        renderDesktopCell(data, field, fieldIndex)
                                                    )}
                                                </tr>
                                            ))}
                                        </React.Fragment>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {/* MOBILE CARDS */}
                    {isMobile && (
                        <div className="space-y-4 mt-4">
                            {listOfRows.map((rows, tableIndex) => (
                                <div key={tableIndex} className="space-y-4">
                                    <h2 className="font-bold text-lg">
                                        {displayHeaders[tableIndex][0]}
                                    </h2>


                                    {rows.map((data, rowIndex) => (
                                        <React.Fragment key={rowIndex}>
                                            {renderMobileCard(data)}
                                        </React.Fragment>
                                    ))}
                                </div>
                            ))}
                        </div>
                    )}
                </>
            )}
        </div>
    );
}
