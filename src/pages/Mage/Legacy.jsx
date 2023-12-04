import React from 'react';
import SimpleTable from '../../components/SimpleTable'
import LegacyData from '../../Data/Mage/LegacyData';


export default function Legacy() {


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
            nuovoOggetto.link = `/mage/legacy/${nuovoOggetto.Nome.replace(/ /g, '_')}`;


            return nuovoOggetto;
        });
    }

    const LegacyReducedData = rimuoviCampi(LegacyData, ['leftHanded', 'descrizione',
        'alternateNickname', 'orders', 'appearance', 'background', 'organizzation', 'suggestedOblations', 'concepts',
        'historySocietyCulture', 'magic', 'attainmentsDescrizione', 'firstAttainmentName', 'firstAttainmentPrerequisites',
        'firstAttainmentDescription', 'firstAttainmentOptArcana', 'firstAttainmentOptDescrizione', 'secondAttainmentName',
        'secondAttainmentPrerequisites', 'secondAttainmentDescription', 'secondAttainmentOptArcana', 'secondAttainmentOptDescrizione',
        'thirdAttainmentName', 'thirdAttainmentPrerequisites', 'thirdAttainmentDescription', 'thirdAttainmentOptArcana', 'thirdAttainmentOptDescrizione']);


    return (
        <SimpleTable table={LegacyReducedData} title={'Legacy'} activeRowLink={true}/>
    );
}