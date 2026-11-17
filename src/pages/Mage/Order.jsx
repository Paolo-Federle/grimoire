import React from 'react';
import SimpleTable from '../../components/SimpleTable'
import OrderData from '../../Data/Mage/OrderData';
import { MinistryData } from '../../Data/Mage/MinistryData';

const pentacleOrders = OrderData.filter((order) => order.Name !== 'Seers of the Throne');

export default function Order() {

    return (
        <div className='grid-container'>
            <SimpleTable
                table={pentacleOrders}
                title="Orders of the Pentacle"
                headers={['Order', 'Nickname', 'Creed', 'Tools', 'Rote Skills', 'Book']}
                activeRowLink
            />
            <SimpleTable
                table={MinistryData}
                title="Ministries — Seers of the Throne"
                upperText={['The four Greater Ministries serve the Exarchs through political division, surveillance, religion and controlled violence.']}
                headers={['Ministry', 'Exarch', 'Creed', 'Rote Skills', 'Book']}
                activeRowLink
            />
        </div>
    );
}
