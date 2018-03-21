import React from 'react';
import SitePayEfectivo from './SitePayEfectivo';

const dataEfectivo = ['assets/images/full-carga.jpg', 'assets/images/scotiabank.png', 'assets/images/western-union.png', 'assets/images/kasnet.jpg'];

const SelectPayEfectivo = () => (
    <div className="m-4">
        <p className="text-secondary">Selecciona dónde quieres pagar</p>
        <SitePayEfectivo dataPagosEfectivo={dataEfectivo}/>
    </div>
);

export default SelectPayEfectivo;
