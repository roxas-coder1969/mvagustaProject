import React from 'react';
import ReactDOM from 'react-dom';
import {CertificateHeader} from './mv-certificate-header';
import {CertificateInfor} from './mv-certificate-info';
import { MVCertifiedCenter } from './mvCertifiedCenter';
import {data} from "./mvCertifiedData";


export function Container(){
    return(
        <div className="mv-certifed">
            <CertificateHeader />
            <MVCertifiedCenter dulieu={data}/>
            <CertificateInfor />
        </div>
    )
}
ReactDOM.render(<Container/>, document.getElementById('root'));