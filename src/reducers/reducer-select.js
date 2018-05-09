import { actionTypes } from "../actions";

const initial = {
  name: 'bcp',
  text : '',
  img:'../assets/images/bcp.png',
  pasos: ['Selecciona la opción Pago de servicios > EMPRESAS > PAGOEFECTIVO > SOLES.', 'Ingresa tu código CIP: 9125682 y sigue los pasos.'],
  disclaimer: []
}
export default function (state =  initial, action){
  switch (action.type) {
    case actionTypes.SELECT_BANK:
      return action.bank
    default:
      return state
  }
}