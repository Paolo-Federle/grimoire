import React from 'react';
import SimpleTable from '../../components/SimpleTable'
import { entitlementData } from '../../Data/Changeling/EntitlementData';

export default function Entitlements() {

    return (<>

        <div className='grid-container'>
            <SimpleTable table={entitlementData} title={'Entitlements'} />

        </div>
    </>
    );
}