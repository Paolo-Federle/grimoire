import React from 'react';
import {
    WoDBookData, VampireBookData, WerewolfBookData, MageBookData,
    PrometheanBookData, ChangelingBookData, HunterBookData, GeistBookData,
    MummyBookData
} from '../../Data/BookData';
import SimpleTable from '../../components/SimpleTable';

function getFirstPagePdfLink(linkTo) {
    if (!linkTo) return '';

    if (linkTo.includes('#p=')) {
        return linkTo.replace(/#p=.*/, '#p=1');
    }

    return `${linkTo}#p=1`;
}

function ExternalPdfLink({ linkTo }) {
    const pdfLink = getFirstPagePdfLink(linkTo);

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
        'External PDF': <ExternalPdfLink linkTo={book.LinkTo} />,
    }));
}

export default function Books(props) {

    const bookSets = ['World of Darkness', 'Vampire: The Requiem',
        'Werewolf: The Forsaken', 'Mage: The Awakening', 'Promethean: The Created',
        'Changeling: The Lost', 'Hunter: The Vigil', 'Geist: The Sin-Eaters',
        'Mummy: The Curse'];

    const bookData = [
        WoDBookData, VampireBookData, WerewolfBookData, MageBookData, PrometheanBookData,
        ChangelingBookData, HunterBookData, GeistBookData, MummyBookData
    ];

    // Define the headers that correspond to your data keys
    const tableFields = ['Code Name', 'Type', 'Title', 'Description', 'Release Date', 'External PDF'];


    const renderedBookTables = bookData.map((book, index) => (
        <SimpleTable
            key={bookSets[index]}
            title={bookSets[index]}
            table={addExternalPdfColumn(book)}
            activeRowLink={false}
            headers={tableFields}
        />
    ));

    return <div className='grid-container'>{renderedBookTables}</div>;
}
