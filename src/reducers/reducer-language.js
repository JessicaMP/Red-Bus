import { actionTypes } from '../actions'

const initialLanguage = {
  activeLanguage: 'es'
}

export default function (state = initialLanguage, action) {
  switch(action.type) {
    case actionTypes.CHANGE_LANGUAGE:
      return {...state, activeLanguage: action.language}
    default:
      return state
  }
}