import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function MultipleTables(props) {


    const [isTableVisible, setIsTableVisible] = useState(true);
    const toggleTableVisibility = () => {
        setIsTableVisible(!isTableVisible);
    };

    const navigate = useNavigate();

    const goRouteId = (id) => {
        navigate(`${id}`);
    }

    return (
        <>
            <div className='grid-container'>
                <h1>{props.title}</h1>
                {!props.hideButton && ( // Check for the hideButton prop
                    <button onClick={toggleTableVisibility}>
                        {isTableVisible ? 'Hide' : 'Show'}
                    </button>
                )}
                {isTableVisible && (
                    <div className='table-container'>
                        <table className='spacing-table'>
                            <tbody>
                                {props.listOfRows.map((rows, index) => (
                                    <React.Fragment key={index}>
                                        <tr className='table-row'>
                                            {props.displayHeaders[index].map((header, index) => (
                                                <th key={header}>{header}</th>
                                            ))}
                                        </tr>
                                        {rows.map((data, dataIndex) => (
                                            <tr
                                                key={dataIndex}
                                                className={`alternating-row table-clickable ${props.activeRowLink ? 'active-row-link' : ''
                                                    }`}
                                                onClick={
                                                    props.activeRowLink
                                                        ? () => goRouteId(data.link)
                                                        : undefined
                                                }
                                            >
                                                {props.tableFields.map((header) => (
                                                    <td key={header}>{data[header]}</td>
                                                ))}
                                            </tr>
                                        ))}

                                    </React.Fragment>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </>
    );
}