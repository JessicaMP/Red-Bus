export const actions = {
  CHANGE_TAB: 'CHANGE_TAB',
  BANK_SELECTED: 'BANK_SELECTED',
  AGENCIA_SELECTED: 'AGENCIA_SELECTED'
}

export const selectBank = bank => {
  // console.log(bank);
  return {
    type: 'BANK_SELECTED',
    payload: bank
  }
}

export const selectEfectivo = efect => {
  // console.log(bank);
  return {
    type: 'AGENCIA_SELECTED',
    payload: efect
  }
}

export const changeTab = tab => {
  return {
    type: actionTypes.CHANGE_TAB,
    tab
  }
}