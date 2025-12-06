import SimpleTable from '../../components/SimpleTable';
import { LineagesData } from '../../Data/Promethean/LineagesData';


export default function Lineages() {
    return (
        <div className='grid-container'>
            <SimpleTable table={LineagesData} title={'Lineages'} />
        </div>
    );
}