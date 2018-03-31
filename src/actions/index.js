export const selectBank = bank => {

  return {
    type: 'BANK_SELECTED',
    payload: bank
  }
} 

export const actions = {
  CHANGE_TAB: 'CHANGE_TAB',
  BANK_SELECTED: 'BANK_SELECTED'
}

export const changeTab = tab => ({
  type: actionTypes.CHANGE_TAB,
  tab
})