import React from 'react';
import SitePayItemEfectivo from './SitePay-itemEfectivo';
import PropTypes from 'prop-types';

const SitePayEfectivo = ({dataPagosEfectivo}) => {
    return (
    <div className="row d-flex justify-content-between align-items-center mt-4 mb-4">
        {dataPagosEfectivo.map( (pago, i) =>
            <SitePayItemEfectivo
                datoPagos={pago}
                key={i}
                />
        )}
     </div>
    )
} 

SitePayEfectivo.propTypes = {
    dataPagosEfectivo: PropTypes.arrayOf(PropTypes.string)
};

export default SitePayEfectivo;