export const actionTypes = {
  CHANGE_TAB: 'CHANGE_TAB',
  SELECT_BANK: 'SELECTED_BANK'
}

export const selectBank = bank => {
  // console.log(bank);
  return {
    type: actionTypes.SELECT_BANK,
    bank
  }
}

export const changeTab = tab => {
  return {
    type: actionTypes.CHANGE_TAB,
    tab
  }
}