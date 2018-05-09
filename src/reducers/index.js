import { combineReducers } from 'redux';
import data from './reducer-data';
import tabContent from './reducer-tab';
import select from './reducer-select';

const rootReducer = combineReducers({
	tabs: data,
	info: tabContent,
	selectedBank: select
});

export default rootReducer;