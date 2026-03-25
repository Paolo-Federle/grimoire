import NewTable from '../../components/CombinationTable';
import ManifestationWikiBrowser from '../../components/ManifestationCombination';
import SimpleTable from '../../components/SimpleTable';
import { KeysData, ManifestationsData, ManifestationsKeysData } from '../../Data/Geist/ManifestationData';
import { rimuoviCampi } from '../../utils';


export default function Manifestation() {
    return (
        <div className="grid-container">
            <ManifestationWikiBrowser
                manifestations={ManifestationsData}
                keysData={KeysData}
                manifestationKeys={ManifestationsKeysData}
                title="Manifestations & Keys"
            />
        </div>
    );
}