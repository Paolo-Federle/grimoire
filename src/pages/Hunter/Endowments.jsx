import React from 'react';
import SimpleTable from '../../components/SimpleTable'
import {
    advancedArmoryData, benedictionData, castigationData, dreamscapeData,
    elixirData, inkData, relicData, ritesDuChevalData, seitokukenData,
    thaumatechnologyData, teleinformaticsInterviewData, teleinformaticsInvestigationData,
    teleinformaticsResearchData, gospelOfAgaresData, gospelOfAmonData,
    gospelOfBelethData, ritesOfDenialData, otherEndowmentData
} from '../../Data/Hunter/EndowmentData';

export default function Endowments() {
    return (
        <div className='grid-container'>
            <SimpleTable table={advancedArmoryData} title={'Advanced Armory'} activeRowLink={false} />
            <SimpleTable table={benedictionData} title={'Benediction'} activeRowLink={false} />
            <SimpleTable table={castigationData} title={'Castigation'} activeRowLink={false} />
            <SimpleTable table={dreamscapeData} title={'Dreamscape'} activeRowLink={false} />
            <SimpleTable table={elixirData} title={'Elixir'} activeRowLink={false} />
            <SimpleTable table={inkData} title={'Ink'} activeRowLink={false} />
            <SimpleTable table={relicData} title={'Relic'} activeRowLink={false} />
            <SimpleTable table={ritesDuChevalData} title={'Rites du Cheval'} activeRowLink={false} />
            <SimpleTable table={seitokukenData} title={'Seitokuken'} activeRowLink={false} />
            <SimpleTable table={thaumatechnologyData} title={'Thaumatechnology'} activeRowLink={false} />
            <SimpleTable table={teleinformaticsInterviewData} title={'Teleinformatics'} activeRowLink={false} />
            <SimpleTable table={teleinformaticsInvestigationData} activeRowLink={false} />
            <SimpleTable table={teleinformaticsResearchData} activeRowLink={false} />
            <SimpleTable table={gospelOfAgaresData} title={'Goetic Gospel'} activeRowLink={false} />
            <SimpleTable table={gospelOfAmonData} activeRowLink={false} />
            <SimpleTable table={gospelOfBelethData} activeRowLink={false} />
            <SimpleTable table={ritesOfDenialData} title={'Rites of Denial'} activeRowLink={false} />
            <SimpleTable table={otherEndowmentData} title={'Other endowments'} activeRowLink={false} />
        </div>
    );
}