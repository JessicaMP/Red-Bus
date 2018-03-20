import React from 'react';
import SitePayEfectivo from './SitePayEfectivo';

const dataEfectivo = ['full-carga.jpg', 'scotiabank.png', 'western-union.png', 'kasnet.jpg'];

const SelectPayEfectivo = () => (
    <div className="m-4">
        <p className="text-secondary">Selecciona dónde quieres pagar</p>
        <SitePayEfectivo dataPagosEfectivo={dataEfectivo}/>
       
    </div>
);

export default SelectPayEfectivo;
