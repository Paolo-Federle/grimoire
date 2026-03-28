import React from 'react';
import SimpleTable from '../../components/SimpleTable';
import { CultAxisData, CultBenefitsData, CultMeritsData, MummiesMeritsData, MummiesStyleMeritsData, MummiesTombMeritsData, MummiesTombsDrawbackData } from '../../Data/Mummy/MummiesMeritsData';

export default function MummyMerits() {
    return (
        <div className='grid-container'>
            <SimpleTable table={MummiesMeritsData} title={'Mummies merits'} />
            <SimpleTable table={MummiesStyleMeritsData} title={'Mummies style merits '} mergeHeaders={["Name", "Book"]} />
            <SimpleTable table={MummiesTombMeritsData} title={'Mummies tomb merits '} />
            <SimpleTable table={MummiesTombsDrawbackData} title={'Mummies tomb drawbacks '} />
            <SimpleTable table={CultMeritsData} title={'Mummies cult merits '} />
            <SimpleTable table={CultAxisData} />
            <SimpleTable table={CultBenefitsData} />
        </div>
    );
}