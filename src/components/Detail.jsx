import BaseTable from './BaseTable';

export function DynamicText({ content }) {
    if (!Array.isArray(content)) return null;

    return (
        <>
            {content.map((item, index) => {
                if (typeof item !== 'object') {
                    return <p key={index}><span dangerouslySetInnerHTML={{ __html: item }} /></p>;
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
            })}
        </>
    );
}

export function LabeledField({ label, value }) {
    if (!value || value === 'N/A') return null;
    return <div>{label && <b>{label}:</b>}{""} <span dangerouslySetInnerHTML={{ __html: value }} /></div>;
}

export function TitleAndRank({ main, subtitle }) {
    if (!main) return null;
    return <h1>{main}{subtitle && ` (${subtitle})`}</h1>;
}

export function TextNoSpace({ text }) {
    if (!text || text === 'N/A') return null;

    return (        
            <span dangerouslySetInnerHTML={{ __html: text }} />
    );
}
