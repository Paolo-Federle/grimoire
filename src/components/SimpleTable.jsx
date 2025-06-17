import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BaseTable from './BaseTable';

export default function SimpleTable({ title, upperText, maxWidth, table, headers, activeRowLink }) {
    const [isSectionActive, setIsSectionActive] = useState(true);
    const navigate = useNavigate();

    const tableHeaders = headers || Object.keys(table?.[0] || {}).filter(header => header !== 'link');

    const handleToggleSection = () => setIsSectionActive(prev => !prev);

    const handleRowClick = row => {
        if (row.link) navigate(row.link);
    };

    return (
        <div>
            {title && (
                <h1
                    onClick={handleToggleSection}
                    style={{ cursor: 'pointer' }}
                    className="text-xl flex items-center gap-1"
                >
                    {title} {isSectionActive ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </h1>
            )}
            {upperText && isSectionActive && (
                <div style={{ paddingBottom: 20, maxWidth }}>
                    {upperText.map((desc, index) => (
                        <p key={index}>
                            {typeof desc === 'string' ? (
                                <span dangerouslySetInnerHTML={{ __html: desc }} />
                            ) : (
                                <Link to={desc.link}>{desc.text}</Link>
                            )}
                        </p>
                    ))}
                </div>
            )}
            {isSectionActive && (
                <div className='table-container'>
                    <BaseTable
                        headers={tableHeaders}
                        data={table}
                        onRowClick={activeRowLink ? handleRowClick : null}
                    />
                </div>
            )}
        </div>
    );
}
