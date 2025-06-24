import React from 'react';
import {
    WoDBookData, VampireBookData, WerewolfBookData, MageBookData,
    PrometheanBookData, ChangelingBookData, HunterBookData, GeistBookData,
    MummyBookData
} from '../../Data/BookData';
import SimpleTable from '../../components/SimpleTable';

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
    const tableFields = ['Code Name', 'Type', 'Title', 'Description', 'Release Date'];


    const renderedBookTables = bookData.map((book, index) => (
        <SimpleTable
            title={bookSets[index]}
            table={bookData[index]}
            activeRowLink={false}
            headers={tableFields}
        />
    ));

    return <div className='grid-container'>{renderedBookTables}</div>;
}
