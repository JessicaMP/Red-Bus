import React from 'react';
import SitePayEfectivo from './SitePayEfectivo';

const dataEfectivo = ['assets/images/logo-fullcarga.svg', 'assets/images/logo-scotiabank.svg', 'assets/images/logo-westerUnion.svg', 'assets/images/logo-kasnet.svg'];

const SelectPayEfectivo = () => (
    <div className="m-4">
        <p className="text-secondary">Selecciona dónde quieres pagar</p>
        <SitePayEfectivo dataPagosEfectivo={dataEfectivo}/>
    </div>
);

export default SelectPayEfectivo;
