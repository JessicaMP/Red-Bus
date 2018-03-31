import React from 'react';
import PropTypes from 'prop-types';

const SitePayItemEfectivo = ({ datoPagos }) => (
    <figure className="col-md-2 m-0">
        <img className="col pl-4 pr-4" src={datoPagos} />
    </figure>
)

SitePayItemEfectivo.propTypes = {
    datoPagos: PropTypes.string.isRequired
};

export default SitePayItemEfectivo;