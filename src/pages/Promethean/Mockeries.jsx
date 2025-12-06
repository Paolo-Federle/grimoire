import SimpleTable from '../../components/SimpleTable';
import { MockeriesData } from '../../Data/Promethean/MockeriesData';

export default function Mockeries() {
    return (
        <div className='grid-container'>
            <SimpleTable table={MockeriesData} title={'Mockeries'} />
        </div>
    );
}