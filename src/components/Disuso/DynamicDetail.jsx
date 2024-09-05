import React from 'react';
import BaseTable from '../BaseTable';

// Function to render a list, which can be either a table or HTML content
const renderList = (key, value) => (
    <div key={key} style={{ paddingBottom: "20px" }}>
        {value.map((item, index) => (
            typeof item === 'object' ? (
                <BaseTable
                    key={index}
                    headers={Object.keys(item[Object.keys(item)[0]][0])}
                    data={item[Object.keys(item)[0]]}
                    title={Object.keys(item)[0]}
                />
            ) : (
                <span><b>{key}:</b> <span key={index} dangerouslySetInnerHTML={{ __html: item }} /></span>
            )
        ))}
    </div>
);

// Function to render a simple key-value pair
const renderSimpleKeyValue = (key, value) => (
    <div key={key}>
        <b>{key}:</b> <span dangerouslySetInnerHTML={{ __html: value }} />
    </div>
);

// Function to render content based on its type
const renderContent = (key, value) => {
    if (Array.isArray(value)) {
        if (value.length > 0 && typeof value[0] === 'object') {
            return renderList(key, value);
        }
        return renderList(key, value);
    } else if (typeof value === 'object' && value !== null) {
        return Object.entries(value).map(([subKey, subValue]) => renderContent(subKey, subValue));
    } else {
        return renderSimpleKeyValue(key, value);
    }
};

// Main component
export default function DynamicDetailComponent({ data }) {
    return (
        <div style={{ paddingBottom: '20px' }}>
            <div style={{ margin: '20px', width: '1000px' }}>
                {Object.entries(data).map(([key, value]) => renderContent(key, value))}
            </div>
        </div>
    );
}
