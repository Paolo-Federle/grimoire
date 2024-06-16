import React from 'react';
import SimpleTable from '../../components/SimpleTable'
import { amuletData, effigyData, RegiumData, textData, uterData, sebaData, vestigeData } from '../../Data/Mummy/RelicsData';
export default function Relic() {
    return (
        <div className='grid-container'>
            <SimpleTable table={amuletData} title={'Amulets'} activeRowLink={false} />
            <SimpleTable table={effigyData} title={'Effigies'} activeRowLink={false} />
            <SimpleTable table={RegiumData} title={'Regium'} activeRowLink={false} />
            <SimpleTable table={textData} title={'Texts'} activeRowLink={false} />
            <SimpleTable table={uterData} title={'Uter'} activeRowLink={false} />
            <SimpleTable table={sebaData} title={'Seba'} activeRowLink={false} />
            <SimpleTable table={vestigeData} title={'Vestiges'} activeRowLink={false} />
        </div>
    );
}