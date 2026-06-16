import React from 'react';
import SimpleTable from '../../components/SimpleTable';
import TableGroup from '../../components/TableGroup';
import {
    AlchemicusTransmutationsData, BeneficeTransmutationsData, ConsortiumTransmutationsData,
    ContaminationTransmutationsData, CorporeumTransmutationsData, DeceptionTransmutationsData,
    DisquietismTransmutationsData, ElectrificationTransmutationsData, IrradiationTransmutationsData,
    MesmerismTransmutationsData, MetamorphosisTransmutationsData, SaturninusTransmutationsData,
    SensoriumTransmutationsData, SpiritusTransmutationsData, VitalityTransmutationsData, VulcanusTransmutationsData
} from '../../Data/Promethean/TransmutationsData';
import { slugify } from '../../utils';
import { PATHS } from '../path';

const TRANSMUTATION_GROUPS = [
    { title: 'Alchemicus', data: AlchemicusTransmutationsData },
    { title: 'Benefice', data: BeneficeTransmutationsData },
    { title: 'Consortium', data: ConsortiumTransmutationsData },
    { title: 'Contamination', data: ContaminationTransmutationsData },
    { title: 'Corporeum', data: CorporeumTransmutationsData },
    { title: 'Deception', data: DeceptionTransmutationsData },
    { title: 'Disquietism', data: DisquietismTransmutationsData },
    { title: 'Electrification', data: ElectrificationTransmutationsData },
    { title: 'Irradiation', data: IrradiationTransmutationsData },
    { title: 'Mesmerism', data: MesmerismTransmutationsData },
    { title: 'Metamorphosis', data: MetamorphosisTransmutationsData },
    { title: 'Saturninus', data: SaturninusTransmutationsData },
    { title: 'Sensorium', data: SensoriumTransmutationsData },
    { title: 'Spiritus', data: SpiritusTransmutationsData },
    { title: 'Vitality', data: VitalityTransmutationsData },
    { title: 'Vulcanus', data: VulcanusTransmutationsData },
];

function getDuplicateAwareTransmutationSlug(items, item) {
    const name = item?.Name || "";
    const duplicateCount = items.filter((transmutation) => transmutation?.Name === name).length;

    if (duplicateCount > 1) {
        return slugify(`${name} ${item?.Class || ""} ${item?.Book || ""}`);
    }

    return slugify(name);
}

export default function Transmutations() {
    const headers = ['Name', 'Rank', 'Prerequisites', 'Cost', 'Dice Pool', 'Description', 'Book'];
    const allTransmutations = TRANSMUTATION_GROUPS.flatMap(({ data }) => data);

    return (
        <div className='grid-container'>
            <TableGroup title="Transmutations" titleLink="transmutations">
                {TRANSMUTATION_GROUPS.map(({ title, data }) => (
                    <SimpleTable
                        key={title}
                        table={data.map((transmutation) => ({
                            ...transmutation,
                            link: `${PATHS.PROMETHEAN.TRANSMUTATIONS}/${getDuplicateAwareTransmutationSlug(allTransmutations, transmutation)}`,
                        }))}
                        title={title}
                        headers={headers}
                        activeRowLink
                        titleVariant="nested"
                    />
                ))}
            </TableGroup>
        </div>
    );
}
