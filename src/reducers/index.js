import { combineReducers } from 'redux';
import banksReducers from './reducer-banks';
import agenciasReducers from './reducer-agencias';
import bankActiveReducers from './reducer-active-bank';


const rootReducer = combineReducers ({
    banks : banksReducers,
   
    active_bank : bankActiveReducers
  
});

export default rootReducer;