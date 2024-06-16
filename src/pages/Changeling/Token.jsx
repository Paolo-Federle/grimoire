import React from 'react';
import SimpleTable from '../../components/SimpleTable'
import { trifleData, tokenData, privileTokenData } from '../../Data/Changeling/TokenData';
export default function Token() {
    return (
        <div className='grid-container'>
            <SimpleTable table={trifleData} title={'Trifles'} activeRowLink={false} />
            <SimpleTable table={tokenData} title={'Tokens'} activeRowLink={false} />
            <SimpleTable table={privileTokenData} title={'Promise Tokens'} activeRowLink={false} />
        </div>
    );
}