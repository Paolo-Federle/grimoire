import SimpleTable from '../../components/SimpleTable';
import { RefinementsData } from '../../Data/Promethean/RefinementsData';

export default function Refinements() {
    return (
        <div className='grid-container'>
            <SimpleTable table={RefinementsData} title={'Refinements'} />
        </div>
    );
}