import React from 'react';
import BaseTable from '../../components/BaseTable';
import { BookLink } from '../../components/BookLink';
import StructuredContent from '../../components/StructuredContent';

export default function GoblinFruitsDetail(props) {
    const matchedGoblinFruit = props.goblinFruit

    const renderDescriptionBlock = (item, index) => {
        if (typeof item !== 'object' || item === null) {
            return <p key={index}>{item}</p>;
        }

        if (item.type || Array.isArray(item)) {
            return <StructuredContent key={index} content={item} />;
        }

        const [title, data] = Object.entries(item)[0];
        const headers = Object.keys(data[0]);

        return (
            <BaseTable
                key={index}
                headers={headers}
                data={data}
                title={title}
            />
        );
    };

    return (
        <div className='longTextContainer'>
            {matchedGoblinFruit && (
                <>
                    <h1>
                        {matchedGoblinFruit.Name}
                    </h1>

                    <div style={{ paddingBottom: "20px" }}>
                        {matchedGoblinFruit.LongDescription.map(renderDescriptionBlock)}
                    </div>

                    {matchedGoblinFruit.Book && (<div><b>Book:</b> {BookLink(matchedGoblinFruit.Book)}</div>)}
                </>
            )
            }
        </div >
    )
}
