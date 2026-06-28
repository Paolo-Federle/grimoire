import React from 'react';
import { BookLink } from '../../components/BookLink';
import ContentBlockList from '../../components/ContentBlockList';
import { LabeledField } from '../../components/Detail';
import { normalizeDisplayText } from '../../utils';

function hasContent(content) {
    return Array.isArray(content) && content.some((item) => {
        if (typeof item === 'string') {
            return item.trim() !== '';
        }

        return !!item;
    });
}

function ContentSection({ label, content }) {
    if (!hasContent(content)) return null;

    return (
        <div className="mt-4">
            {label ? <p><strong>{label}:</strong></p> : null}
            <ContentBlockList content={content} />
        </div>
    );
}

export default function MementoDetail({ memento }) {
    if (!memento) {
        return <div className="longTextContainer">Memento not found.</div>;
    }

    return (
        <div className="longTextContainer">
            <h1>{normalizeDisplayText(memento.Name)}</h1>

            <LabeledField label="Threshold" value={memento.Threshold} />
            <LabeledField label="Key" value={memento.Key} />
            <LabeledField label="Numen" value={memento.Numen} />
            <LabeledField label="Channeled Numen" value={memento['Channeled Numen']} />
            <LabeledField label="Skill" value={memento.Skill} />

            <ContentSection content={memento.Content} />
            <LabeledField label="Sample Keys" value={memento.SampleKeys} />
            <ContentSection content={memento.Notes} />

            {memento.Book && (
                <div className="mt-4">
                    <b>Book:</b> {BookLink(memento.Book)}
                </div>
            )}
        </div>
    );
}
