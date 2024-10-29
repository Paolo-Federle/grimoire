import React from 'react';
import SimpleTable from '../../components/SimpleTable'
import {
    trifleData, tokenData, promiseTokenData, privileTokenData,
    trifleDesc, promiseTokenDesc, tokenDesc
} from '../../Data/Changeling/TokenData';
import { addLink } from '../../utils';


export default function Token() {

    const headers = ['Name', 'Description', 'Book'];
    const tokenHeaders = ['Name', 'Rating', 'Description', 'Drawback', 'Catch', 'Book'];
    const promiseTokenHeaders = ['Name', 'Description', 'Drawback', 'Catch', 'Book'];
    function addLinktoData(data){
        return addLink(data, 'Name', '/changeling/tokens/')
    }
    
    return (
        <div className='grid-container'>
            <SimpleTable table={addLinktoData(trifleData)} title={'Trifles'} headers={headers} activeRowLink={true} upperText={trifleDesc} />
            <SimpleTable table={addLinktoData(tokenData)} title={'Tokens'} headers={tokenHeaders} activeRowLink={true} upperText={tokenDesc}/>
            <SimpleTable table={addLinktoData(promiseTokenData)} title={'Promise Tokens'} headers={promiseTokenHeaders} upperText={promiseTokenDesc} activeRowLink={true} />
            <SimpleTable table={addLinktoData(privileTokenData)} title={'Privilege Tokens'} headers={tokenHeaders} activeRowLink={true} />
        </div>
    );
}