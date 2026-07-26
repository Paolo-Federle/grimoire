import React from 'react';
import SimpleTable from '../../components/SimpleTable';
import {
    BOOK_COLLECTIONS,
    getBookFirstPageUrl,
    getBookPath,
} from '../../books/bookNavigation';

function ExternalPdfLink({ book }) {
    const pdfLink = getBookFirstPageUrl(book);

    if (!pdfLink) return '';

    return (
        <a
            href={pdfLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800 transition-colors"
        >
            PDF
        </a>
    );
}

function addExternalPdfColumn(books) {
    return books.map((book) => ({
        ...book,
        link: getBookPath(book),
        'External PDF': <ExternalPdfLink book={book} />,
    }));
}

export default function Books() {
    const tableFields = ['Name', 'Code Name', 'Type', 'Description', 'Release Date', 'External PDF'];
    const renderedBookTables = BOOK_COLLECTIONS.map((collection) => (
        <SimpleTable
            key={collection.id}
            title={collection.label}
            table={addExternalPdfColumn(collection.books)}
            activeRowLink
            headers={tableFields}
        />
    ));

    return <div className='grid-container'>{renderedBookTables}</div>;
}
