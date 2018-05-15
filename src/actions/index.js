export const actionTypes = {
  CHANGE_LANGUAGE: 'CHANGE_LANGUAGE',
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
  // console.log(tab);
  return {
    type: actionTypes.CHANGE_TAB,
    tab
  }
}

export const changeLanguage = language => {
  //  console.log(language);
  return {
    type: actionTypes.CHANGE_LANGUAGE,
    language
  }
}