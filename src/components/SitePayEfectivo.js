import React from 'react';
import SitePayItemEfectivo from './SitePay-itemEfectivo';

const SitePayEfectivo = ({efectivo, onEfectivoClick, efectivoSelect }) => {
    return (
    <div className="row d-flex justify-content-between mt-4 mb-4">
        {console.log(efectivoSelect)}
        {efectivo.map( efect =>
            <SitePayItemBancos
                efectivoSelect={efectivoSelect}
                key={efect.name}
                onClick = {() => onEfectivoClick(efect)}
                {...efect}
                />
        )}
     </div>
    )
};

export default SitePayEfectivo;