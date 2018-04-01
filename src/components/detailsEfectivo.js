import React from 'react';

const EfectivoDetails = ({ opcionDetailEfectivo }) => (
  <div>
    <div >
      <div className="instrucciones ml-4">Instrucciones de pago</div>
      <div className="ml-4">
        <p className="text-secondary">Indica que vas a realizar un pago a la empresa PAGOEFECTIVO</p>
      </div>
      <div className="ml-4">
        <p className="text-secondary">Ingresa tu codigo CIP:9125682 y el importe a pagar en soles</p>
      </div>
      <div className="ml-4 mt-2">
        <p className="text-secondary">{opcionDetailEfectivo.info1}</p>
      </div>
      <div className="ml-4 mt-2">
        <p className="text-secondary">{opcionDetailEfectivo.info2}</p>
      </div>
     
      <button type="button" className="btn btn-danger btn-lg btn-block mt-4 mb-4 border-link">
        <a href="link" target="_black" style={{ textDecoration: 'none', color: 'white' }}>
        <img src="assets/images/icon_arrow.svg" alt="Arrow image" style={{width: '24px', 'margin-right': '5px'}}/>
        Encuentra tu punto de pago</a></button>

    </div>
  </div>
)

export default EfectivoDetails;