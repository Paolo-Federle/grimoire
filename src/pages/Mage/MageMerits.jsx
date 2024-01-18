import React from 'react';
import SimpleTable from '../../components/SimpleTable'
import { mageMeritsData, mageMeritsOrderData, mageMeritsLegacyData } from '../../Data/Mage/mageMeritsData';

export default function MageMerits() {

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
            nuovoOggetto.link = `/mage/merits/${nuovoOggetto.Title.replace(/ /g, '_')}`;


            return nuovoOggetto;
        });
    }

    const reducedMageMeritsData = rimuoviCampi(mageMeritsData, ['LongDescription']);
    const reducedMageMeritsOrderData = rimuoviCampi(mageMeritsOrderData, ['LongDescription']);
    const reducedMageMeritsLegacyData = rimuoviCampi(mageMeritsLegacyData, ['LongDescription']);

    return (
        <div className='grid-container'>
            <SimpleTable table={reducedMageMeritsData} title={'Mage Merits'} activeRowLink={true}/>
            <SimpleTable table={reducedMageMeritsOrderData} title={'Order Merits'} activeRowLink={true}/>
            <SimpleTable table={reducedMageMeritsLegacyData} title={'Legacy Merits'} activeRowLink={true}/>
        </div>
    );
}