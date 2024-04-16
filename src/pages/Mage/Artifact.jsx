import React from 'react';
import SimpleTable from '../../components/SimpleTable'
import artifactsData from '../../Data/Mage/artifactsData'


export default function Artifacts() {


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
            nuovoOggetto.link = `/mage/artifacts/${nuovoOggetto.Nome.replace(/ /g, '_')}`;


            return nuovoOggetto;
        });
    }

    const artifactReducedData = rimuoviCampi(artifactsData, ['Descrizione']);


    return (
        <div className='grid-container'>
            <SimpleTable table={artifactReducedData} title={'Artifacts'} activeRowLink={true} />
        </div>
    );
}