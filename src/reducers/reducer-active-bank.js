const data = [ {name: 'bcp', id : 1, img:'../assets/images/bcp.png',  paso1: 'Selecciona la opción Pago de Servicios > EMPRESAS > PAGOEFECTIVO > PAGOEFECTIVOSOLES'} ,
    {name: 'bbva', img:'../assets/images/bbva.png',  paso1: 'Selecciona la opción Pago de Servicios > De Instituciones y Empresas > Busca por nombre > PAGOEFECTIVO > PAGOEFECTIVOSOLES'}, 
    {name: 'interbank', img:'../assets/images/interbank.png',  paso1: 'Selecciona la opción Pago a Instituciones o Empresa > Empresa PAGOEFECTIVO > Servicio PAGO EFECTIVO'}, 
    {name: 'scotiabank', img:'../assets/images/scotiabank.png',  paso1: 'Selecciona la opción Pagos > Otras Instituciones > Otros > Busca por Empresa/Servicio: PAGOEFECTIVO > Selecciona: PAGOEFECTIVO SOLES'},
    {name: 'banbif', img:'../assets/images/banbif.png',  paso1: 'Selecciona la opción Pago de Servicios > Busca por Empresa y escribe PAGO EFECTIVO > Seleciona la empresa PAGO EFECTIVO'}
   ];

const info = {name: 'bcp', img:'bcp.png',  paso1: 'Selecciona la opción Pago de Servicios > EMPRESAS > PAGOEFECTIVO > PAGOEFECTIVOSOLES'} ;
const bancos = (state = data, action) => {
    switch (action.type) {
      case 'BANK_SELECTED':    
      return action.payload;
    }
    return state;
  
}

export default bancos;