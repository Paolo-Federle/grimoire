import ContentBlockList from './ContentBlockList';
import { InlineContent } from './StructuredContent';

export function DynamicText({ content }) {
    if (!Array.isArray(content)) return null;

    return <ContentBlockList content={content} />;
}

export function LabeledField({ label, value }) {
    if (!value || value === 'N/A') return null;
    return <div>{label && <b>{label}:</b>}{""} <InlineContent content={value} /></div>;
}

export function TitleAndRank({ main, subtitle }) {
    if (!main) return null;
    return <h1>{main}{subtitle && ` (${subtitle})`}</h1>;
}

export function TextNoSpace({ text }) {
    if (!text || text === 'N/A') return null;

    return (        
            <InlineContent content={text} />
    );
}
