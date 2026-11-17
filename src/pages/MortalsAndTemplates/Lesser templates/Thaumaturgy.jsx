import React from 'react';
import SimpleTable from '../../../components/SimpleTable';
import { getThaumaturgyTraditionPath, PATHS } from '../../path';
import { slugify } from '../../../utils';
import {
    thaumaturgyMeritsData,
    thaumaturgyRitualMeritsData,
    ThaumaturgyTraditionsData,
} from '../../../Data/Mortal/Lesser templates/ThaumaturgyData';

function addDetailLinks(data) {
    return data.map((item) => ({
        ...item,
        link: `${PATHS.MORTAL.THAUMATURGY}/${slugify(item.Name)}`,
    }));
}

const traditionsWithLinks = ThaumaturgyTraditionsData.map((item) => ({
    ...item,
    link: getThaumaturgyTraditionPath(item.Name),
    __favKey: `${PATHS.MORTAL.THAUMATURGY}#${slugify(item.Name)}`,
}));

export default function Thaumaturgy() {

    const headers = ['Name', 'Rank', 'Prerequisite', 'Description', 'Book']
    const meritsWithLinks = addDetailLinks(thaumaturgyMeritsData);
    const ritualMeritsWithLinks = addDetailLinks(thaumaturgyRitualMeritsData);

    return (
        <div className='grid-container'>
            <SimpleTable
                table={traditionsWithLinks}
                title="Thaumaturgy Traditions"
                headers={['Tradition', 'Strength', 'Weakness', 'Defining Merit', 'Path Merits', 'Book']}
                activeRowLink
            />
            <SimpleTable table={meritsWithLinks} title={'Thaumaturgy Merits'} headers={headers} activeRowLink />
            <SimpleTable table={ritualMeritsWithLinks} title={'Thaumaturgy Ritual Merits'} headers={headers} activeRowLink />
        </div>
    );
}
