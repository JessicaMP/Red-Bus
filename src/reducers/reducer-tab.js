import { actionTypes } from '../actions'

const initialTab = {
  activeTab: 'online'
}

export default function (state = initialTab, action) {
  switch(action.type) {
    case actionTypes.CHANGE_TAB:
      return {...state, activeTab: action.tab}
    default:
      return state
  }
}