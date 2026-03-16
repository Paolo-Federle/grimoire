import SimpleTable from '../../components/SimpleTable';
import { AzothData } from '../../Data/Promethean/AzothData';

export default function Azoth() {
    return (
        <div className='grid-container'>
            <SimpleTable table={AzothData} title={'Azoth'} />
        </div>
    );
}