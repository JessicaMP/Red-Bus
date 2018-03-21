export default function (state = {name: 'banbif', img:'banbif.png',  paso1: 'Selecciona la opción Pago de Servicios > Busca por Empresa y escribe PAGO EFECTIVO > Seleciona la empresa PAGO EFECTIVO'} , action){
  switch (action.type) {
    case 'BANK_SELECTED':
    return action.payload;
  }
  return state;

}