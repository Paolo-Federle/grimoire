import React from 'react';
import {
    AlchemicusTransmutationsData, BeneficeTransmutationsData, ConsortiumTransmutationsData,
    ContaminationTransmutationsData, CorporeumTransmutationsData, DeceptionTransmutationsData,
    DisquietismTransmutationsData, ElectrificationTransmutationsData, IrradiationTransmutationsData,
    MesmerismTransmutationsData, MetamorphosisTransmutationsData, SaturninusTransmutationsData,
    SensoriumTransmutationsData, SpiritusTransmutationsData, VitalityTransmutationsData, VulcanusTransmutationsData
} from '../../Data/Promethean/TransmutationsData';
import SimpleTable from '../../components/SimpleTable';

export default function Transmutations() {

    return (
        <div className='grid-container'>
            <SimpleTable table={AlchemicusTransmutationsData.map(({ Class, ...r }) => r)} title="Alchemicus Transmutations" />
            <SimpleTable table={BeneficeTransmutationsData.map(({ Class, ...r }) => r)} title="Benefice Transmutations" />
            <SimpleTable table={ConsortiumTransmutationsData.map(({ Class, ...r }) => r)} title="Consortium Transmutations" />
            <SimpleTable table={ContaminationTransmutationsData.map(({ Class, ...r }) => r)} title="Contamination Transmutations" />
            <SimpleTable table={CorporeumTransmutationsData.map(({ Class, ...r }) => r)} title="Corporeum Transmutations" />
            <SimpleTable table={DeceptionTransmutationsData.map(({ Class, ...r }) => r)} title="Deception Transmutations" />
            <SimpleTable table={DisquietismTransmutationsData.map(({ Class, ...r }) => r)} title="Disquietism Transmutations" />
            <SimpleTable table={ElectrificationTransmutationsData.map(({ Class, ...r }) => r)} title="Electrification Transmutations" />
            <SimpleTable table={IrradiationTransmutationsData.map(({ Class, ...r }) => r)} title="Irradiation Transmutations" />
            <SimpleTable table={MesmerismTransmutationsData.map(({ Class, ...r }) => r)} title="Mesmerism Transmutations" />
            <SimpleTable table={MetamorphosisTransmutationsData.map(({ Class, ...r }) => r)} title="Metamorphosis Transmutations" />
            <SimpleTable table={SaturninusTransmutationsData.map(({ Class, ...r }) => r)} title="Saturninus Transmutations" />
            <SimpleTable table={SensoriumTransmutationsData.map(({ Class, ...r }) => r)} title="Sensorium Transmutations" />
            <SimpleTable table={SpiritusTransmutationsData.map(({ Class, ...r }) => r)} title="Spiritus Transmutations" />
            <SimpleTable table={VitalityTransmutationsData.map(({ Class, ...r }) => r)} title="Vitality Transmutations" />
            <SimpleTable table={VulcanusTransmutationsData.map(({ Class, ...r }) => r)} title="Vulcanus Transmutations" />
        </div>
    );
}