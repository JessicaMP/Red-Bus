import React from 'react';


const SitePayItemBancos = ({ name, img, onClick }) => (
    <figure className="col-xl-2 m-0" onClick={onClick}>
        <img className="col-xl-12 border-img-color p-3 pl-4 pr-4" src={img} alt={name} />
    </figure>
)

export default SitePayItemBancos;