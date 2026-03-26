import NewTable from '../../components/CombinationTable';
import ManifestationCombination from '../../components/ManifestationCombination';
import SimpleTable from '../../components/SimpleTable';
import { KeysData, ManifestationsData, ManifestationsKeysData } from '../../Data/Geist/ManifestationData';
import { rimuoviCampi } from '../../utils';


export default function Manifestation() {
    return (
        <div className="grid-container">
            <ManifestationCombination
                manifestations={ManifestationsData}
                keysData={KeysData}
                manifestationKeys={ManifestationsKeysData}
                title="Manifestations & Keys"
            />
        </div>
    );
}