import { Button } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookLink } from './BookLink'; // Assicurati che il path sia corretto

export default function MultipleTables(props) {
    const [isTableVisible, setIsTableVisible] = useState(true);
    const toggleTableVisibility = () => {
        setIsTableVisible(!isTableVisible);
    };

    const navigate = useNavigate();
    const goRouteId = (id) => {
        navigate(`${id}`);
    };

    return (
        <div className='grid-container'>
            <h1 className="text-xl">{props.title}</h1>
            {!props.hideButton && (
                <Button onClick={toggleTableVisibility} variant="contained">
                    {isTableVisible ? 'Hide' : 'Show'}
                </Button>
            )}
            {isTableVisible && (
                <div className='table-container'>
                    <table className='spacing-table'>
                        <tbody>
                            {props.listOfRows.map((rows, index) => (
                                <React.Fragment key={index}>
                                    <tr className='table-row'>
                                        {props.displayHeaders[index].map((header) => (
                                            <th key={header}>{header}</th>
                                        ))}
                                    </tr>
                                    {rows.map((data, dataIndex) => (
                                        <tr key={dataIndex} className="alternating-row">
                                            {props.tableFields.map((header, i) => {
                                                const value = data[header];

                                                if (header === 'Book') {
                                                    return <td key={header}>{BookLink(value)}</td>;
                                                }

                                                if (
                                                    i === 0 &&
                                                    props.activeRowLink &&
                                                    data.link
                                                ) {
                                                    return (
                                                        <td key={header}>
                                                            <a
                                                                href={data.link}
                                                                onClick={(e) => {
                                                                    e.preventDefault();
                                                                    goRouteId(data.link);
                                                                }}
                                                                style={{ textDecoration: 'underline' }}
                                                            >
                                                                {value}
                                                            </a>
                                                        </td>
                                                    );
                                                }

                                                return <td key={header}>{value}</td>;
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
