import React from 'react';

const EfectivoDetails = ({ opcionDetailefectivo }) => (
  <div>
     <p className="instrucciones printMe">Instrucciones de pago</p>
      <div className="ml-4 mt-2 printMe instructionsPrint">
        <p className="text-secondary">Ingresa tu codigo CIP:9125682 y sigue los pasos</p>
        <p className="text-secondary"> {opcionDetailefectivo.info1}</p>
        <p className="text-secondary"> {opcionDetailefectivo.info2}</p>
      </div>
      <button type="button" className="btn btn-danger btn-lg btn-block mt-4 mb-4 border-link">
        <a href="link" target="_black" style={{ textDecoration: 'none', color: 'white' }}>
        <img src="assets/images/icon_arrow.svg" alt="Arrow image" style={{width: '24px', marginRight: '5px'}}/>
        Ir a banca por internet</a></button>
  </div>
)

export default EfectivoDetails;