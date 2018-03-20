import React from 'react';
import SitePayBancos from '../containers/container_Bancos_list';




const SelectPayBanca = () => (
    <div className="m-4">
        <p className="text-secondary">Selecciona dónde quieres pagar</p>
        <SitePayBancos/>
        <p className="text-secondary">Puedes pagar desde la Web o App móvil del Banco</p>
       
    </div>
);

export default SelectPayBanca;
