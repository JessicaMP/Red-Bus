import React from 'react';
import SitePayItemBancos from './SitePay-itemBancos';

const SitePayBancos = ({bancos, onBancoClick, bancoSelect }) => {
    return (
    <div className="row d-flex justify-content-between mt-4 mb-4">
        {console.log(bancoSelect)}
        {bancos.map( banco =>
            <SitePayItemBancos
                bancoSelect={bancoSelect}
                key={banco.name}
                onClick = {() => onBancoClick(banco)}
                {...banco}
                />
        )}
     </div>
    )
};

export default SitePayBancos;