import React from 'react';

const style = {border: '2px solid yellow'};

const SitePayItemBancos = ({ name, img, onClick, bancoSelect }) => (
    
    <figure className="col-xl-2 m-0" onClick={onClick}>
        <img className="col-xl-12 border-img-color p-3 pl-4 pr-4 cursor" src={img} alt={name} style={bancoSelect === name ? {border: '5px solid red'}: {} }/>
    </figure>
)

export default SitePayItemBancos;