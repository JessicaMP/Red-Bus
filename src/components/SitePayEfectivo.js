import React from 'react';
import SitePayItemEfectivo from './SitePay-itemEfectivo';

const SitePayEfectivo = ({agentes, onEfectivoClick }) => {
    return (
    <div className="row d-flex justify-content-between mt-4 mb-4">
        
        {agentes.map( efect =>
            <SitePayItemEfectivo
                
                key={efect.name}
                onClick = {() => onEfectivoClick(efect)}
                {...efect}
                />
        )}
     </div>
    )
};

export default SitePayEfectivo;