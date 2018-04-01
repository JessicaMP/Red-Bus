export const selectBank = bank => {
  return {
    type: 'BANK_SELECTED',
    payload: bank
  }
}

export const selectAgente = efect => {
  return {
    type: 'AGENTE_SELECTED',
    payload: efect
  }
}

export const actions = {
  CHANGE_TAB: 'CHANGE_TAB',
  BANK_SELECTED: 'BANK_SELECTED'
}

export const changeTab = tab => {
  return {
    type: actionTypes.CHANGE_TAB,
    tab
  }
}