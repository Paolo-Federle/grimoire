import ManifestationCombination from '../../components/ManifestationCombination';
import { KeysData, ManifestationsData, ManifestationsKeysData } from '../../Data/Geist/ManifestationData';


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
