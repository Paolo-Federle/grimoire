import SimpleTable from '../../components/SimpleTable';
import { PrometheanMeritsData } from '../../Data/Promethean/PrometheanMeritsData';



export default function PrometheanMerits() {
    return (
        <div className='grid-container'>
            <SimpleTable table={PrometheanMeritsData} title={'Promethean Merits'} />
        </div>
    );
}