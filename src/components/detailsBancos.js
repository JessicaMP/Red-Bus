import React from 'react';

const BancosDetails = ({ opcionDetailBanco }) => (
  <div>
    <div >
      <div className="instrucciones ml-4">Instrucciones de pago</div>
      <div className="ml-4 mt-2">
        
        <p className="text-secondary"><img src="assets/images/one.svg" alt="Number one" style={{width: '1.5rem'}}/> {opcionDetailBanco.paso1}</p>
      </div>
      <div className="ml-4"><p className="text-secondary">
      <img src="assets/images/two.svg" alt="Number two" style={{width: '1.5rem'}}/> Ingresa tu codigo CIP:9125682 y sigue los pasos</p></div>
      <button type="button" className="btn btn-danger btn-lg btn-block mt-4 mb-4 border-link">
        <a href="link" target="_black" style={{ textDecoration: 'none', color: 'white' }}>
        <img src="assets/images/icon_arrow.svg" alt="Arrow image" style={{width: '24px', 'margin-right': '5px'}}/>
        Ir a banca por internet</a></button>

    </div>
  </div>
)

export default BancosDetails;