import React from 'react';
import SimpleTable from '../../components/SimpleTable'
import PathData from '../../Data/Mage/PathData';

export default function Path() {
    const headers = ['Path name', 'Nickname', 'Bonus trait', 'Ruling arcana', 'Inferior arcanum', 'Book'];

    return (
        <div className='grid-container'>
            <SimpleTable table={PathData} title={'Path'} headers={headers} activeRowLink />
        </div>
    );
}
