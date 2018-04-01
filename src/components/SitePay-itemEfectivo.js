import React from 'react';

const style = {border: '2px solid yellow'};

const SitePayItemEfectivo = ({ name, img, onClick, efectivoSelect,figcaption }) => (
    
    <figure className="col-xl-2 col-md-4 m-0" onClick={onClick}>
        <img className="p-2 cursor" src={img} alt={name} style={efectivoSelect === name ? {border: '2px solid #fc0'}: {} }/>
        <figcaption>{figcaption}</figcaption>
    </figure>
)

export default SitePayItemEfectivo;