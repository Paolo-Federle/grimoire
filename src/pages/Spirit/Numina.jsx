import React from 'react';
import SimpleTable from '../../components/SimpleTable'
import { spiritNuminaData } from '../../Data/Spirit/SpiritNuminaData';


export default function Numina() {


    function rimuoviCampi(lista, campiDaRimuovere) {
        return lista.map(obj => {
            // rimuove campi che non servono in questa fase
            const nuovoOggetto = { ...obj };
            campiDaRimuovere.forEach(campo => {
                delete nuovoOggetto[campo];
            });

            // aggiunge campo link, rimuovendo gli spazi
            nuovoOggetto.link = `/spirit/numina/${nuovoOggetto.Name.replace(/ /g, '_')}`;


            return nuovoOggetto;
        });
    }

    const spiritNuminaReducedData = rimuoviCampi(spiritNuminaData, ['Long Description']);


    return (
        <div className='grid-container'>
            <SimpleTable table={spiritNuminaReducedData} title={'Numina'} activeRowLink={true} />
        </div>
    );
}