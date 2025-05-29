import React from 'react';
import SimpleTable from '../../components/SimpleTable'
import { imbuedItemsData } from '../../Data/Mage/imbuedItemsData';


export default function ImbuedItems() {


    function rimuoviCampi(lista, campiDaRimuovere) {
        return lista.map(obj => {
            // rimuove campi che non servono in questa fase
            const nuovoOggetto = { ...obj };
            campiDaRimuovere.forEach(campo => {
                delete nuovoOggetto[campo];
            });
            // rimuove liste e aggiunge virgole
            Object.keys(nuovoOggetto).forEach(campo => {
                if (Array.isArray(nuovoOggetto[campo]) && nuovoOggetto[campo].length > 1) {
                    nuovoOggetto[campo] = nuovoOggetto[campo].join(', ');
                }
            });

            // aggiunge campo link, rimuovendo gli spazi
            nuovoOggetto.link = `/mage/imbued_items/${nuovoOggetto.Nome.replace(/ /g, '_')}`;


            return nuovoOggetto;
        });
    }

    const imbuedItemsReducedData = rimuoviCampi(imbuedItemsData, ['Descrizione']);


    return (
        <div className='grid-container'>
            <SimpleTable table={imbuedItemsReducedData} title={'Imbued Items'} activeRowLink={true} />
        </div>
    );
}