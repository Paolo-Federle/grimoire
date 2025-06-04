import React from 'react';
import SimpleTable from '../../components/SimpleTable'
import { uniMeritsMentalData, uniMeritsPhysicalData, uniMeritsSocialData, uniMeritsSupernaturalData } from '../../Data/universalMeritsData';
import { slugify } from '../../utils';

export default function UniversalMerits() {

    function rimuoviCampi(lista, campiDaRimuovere) {
        return lista.map(obj => {
            const nuovoOggetto = { ...obj };
            campiDaRimuovere.forEach(campo => delete nuovoOggetto[campo]);

            // Process other fields
            Object.keys(nuovoOggetto).forEach(campo => {
                if (Array.isArray(nuovoOggetto[campo]) && nuovoOggetto[campo].length > 1) {
                    nuovoOggetto[campo] = nuovoOggetto[campo].join(', ');
                }
            });

            // Add link field
            nuovoOggetto.link = `/universal_merits/${slugify(nuovoOggetto.Name)}`;

            return nuovoOggetto;
        });
    }

    function processMeritsData(data, newFieldName) {
        return data.map(item => {
            const { Name, ...rest } = item;
            return {
                [newFieldName]: Name,
                ...rest,
                link: `/universal_merits/${slugify(Name)}`,
            };
        });
    }

    const uniMeritsMentalCorrectedData = processMeritsData(rimuoviCampi(uniMeritsMentalData, ['LongDescription']), "Mental Merits");
    const uniMeritsPhysicalCorrectedData = processMeritsData(rimuoviCampi(uniMeritsPhysicalData, ['LongDescription']), "Physical Merits");
    const uniMeritsSocialCorrectedData = processMeritsData(rimuoviCampi(uniMeritsSocialData, ['LongDescription']), "Social Merits");
    const uniMeritsSupernaturalCorrectedData = processMeritsData(rimuoviCampi(uniMeritsSupernaturalData, ['LongDescription']), "Supernatural Merits");

console.log('uniMeritsMentalCorrectedData', uniMeritsMentalCorrectedData)
    return (
        <div className='grid-container'>
            <SimpleTable table={uniMeritsMentalCorrectedData} activeRowLink={true}/>
            <SimpleTable table={uniMeritsPhysicalCorrectedData} activeRowLink={true}/>
            <SimpleTable table={uniMeritsSocialCorrectedData} activeRowLink={true}/>
            <SimpleTable table={uniMeritsSupernaturalCorrectedData} activeRowLink={true}/>
        </div>
    );
}