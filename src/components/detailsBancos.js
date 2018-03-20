import React from 'react';

const BancosDetails = ({opcionDetailBanco}) => (
  <div>
    <div >
      <div className= "instrucciones ml-4">Instrucciones de pago</div>
      <div className= "ml-4 mt-2">{opcionDetailBanco.paso1}</div>
      <div className= "ml-4">Ingresa tu codigo CIP:9125682 y sigue los pasos</div>
      <button type="button" className="btn btn-danger btn-lg btn-block mt-4 mb-4"> <a><i className="far fa-arrow-alt-circle-right fa-lg mr-2"></i> Ir a banca por internet</a></button>
    
    </div>
  </div>
)

export default BancosDetails