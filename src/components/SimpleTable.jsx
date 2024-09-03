import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

// activeRowLink per attivare link nella tabella
export default function SimpleTable(props) {
    const [isSectionActive, setIsSectionActive] = useState(true);

    const tableHeaders = props.headers ? props.headers : Object.keys(props.table[0]).filter(header => header !== 'link');
    const navigate = useNavigate();

    const goRouteId = (id) => {
        navigate(`${id}`);
    };

    const handleToggleSection = () => {
        setIsSectionActive(!isSectionActive);
    };

    return (
        <>
            <div>
                <h1 onClick={handleToggleSection} style={{ cursor: 'pointer' }}>
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
                                {props.table.map((data, index) => (
                                    <tr
                                        key={index}
                                        className={`alternating-row table-clickable ${props.activeRowLink ? 'active-row-link' : ''}`}
                                        onClick={
                                            props.activeRowLink
                                                ? () => goRouteId(data.link)
                                                : undefined
                                        }
                                    >
                                        {tableHeaders.map((header) => (
                                            <td key={header}>{data[header]}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </>
    );
}
