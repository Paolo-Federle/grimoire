import React from 'react';
import { useNavigate } from "react-router-dom";


export default function SimpleTable(props) {

    const tableHeaders = Object.keys(props.table[0]).filter(header => header !== 'link');

    const navigate = useNavigate();
    const goRouteId = (id) => {
        navigate(`${id}`);
    }

    return (
        <>

            <div className='grid-container'>
                <h1>{props.title}</h1>
                <div className='table-container'>

                    <table className='spacing-table'>
                        <tbody>
                            <tr className='table-row'>
                                {tableHeaders.map((header) => (
                                    <th key={header}>{header}</th>
                                ))}
                            </tr>
                            {props.table.map((data, index) => (
                                <tr key={index} className='alternating-row table-clickable' onClick={()=> goRouteId(data.link)}>
                                    {tableHeaders.map((header) => (
                                        <td key={header}>{data[header]}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}