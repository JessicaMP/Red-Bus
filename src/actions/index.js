export const actions = {
  CHANGE_TAB: 'CHANGE_TAB',
  BANK_SELECTED: 'BANK_SELECTED'
}

export const selectBank = bank => {
  // console.log(bank);
  return {
    type: 'BANK_SELECTED',
    payload: bank
  }
}

export const changeTab = tab => {
  return {
    type: actionTypes.CHANGE_TAB,
    tab
  }
}