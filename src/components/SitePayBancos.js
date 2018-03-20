import React from 'react';
import SitePayItemBancos from './SitePay-itemBancos';



const SitePayBancos = ({bancos, onBancoClick }) => {
    return (
    <div className="row d-flex justify-content-between align-items-center mt-4 mb-4">
        {bancos.map( banco =>
            <SitePayItemBancos
                key={banco.name}
                onClick = {() => onBancoClick(banco)}
                {...banco}
                />
        )}
     </div>
    )
} 

export default SitePayBancos;