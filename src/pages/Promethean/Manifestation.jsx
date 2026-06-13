import ManifestationCombination from '../../components/ManifestationCombination';
import { KeysData, ManifestationsData, ManifestationsKeysData } from '../../Data/Geist/ManifestationData';
import { PATHS } from '../path';


export default function Manifestation() {
    return (
        <div className="grid-container">
            <ManifestationCombination
                manifestations={ManifestationsData}
                keysData={KeysData}
                manifestationKeys={ManifestationsKeysData}
                detailBasePath={PATHS.GEIST.MANIFESTATION}
                title="Manifestations & Keys"
            />
        </div>
    );
}
