import React from 'react';

const style = {border: '2px solid yellow'};

const SitePayItemBancos = ({ name, img, onClick, bancoSelect }) => (
    
    <figure className="col-xl-2 col-md-4 m-0" onClick={onClick}>
        <img className="img-fluid cursor" src={img} alt={name} style={bancoSelect === name ? {border: '2px solid #fc0'}: {} }/>
    </figure>
)

export default SitePayItemBancos;