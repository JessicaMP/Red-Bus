export default function (state = {name: 'bcp',  id : 1, img:'../assets/images/bcp.png',  paso1: 'Selecciona la opción Pago de Servicios > EMPRESAS > PAGOEFECTIVO > PAGOEFECTIVOSOLES'} , action){
  switch (action.type) {
    case 'BANK_SELECTED':
    return action.payload;
  }
  return state;

}