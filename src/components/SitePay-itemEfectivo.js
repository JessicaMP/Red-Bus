import React from 'react';
import PropTypes from 'prop-types';

const SitePayItemEfectivo = ({ datoPagos }) => (
    <div className="p-md-3 p-2">
        <img className="img-fluid" src={datoPagos} />
    </div>
)

SitePayItemEfectivo.propTypes = {
    datoPagos: PropTypes.string.isRequired
};

export default SitePayItemEfectivo;