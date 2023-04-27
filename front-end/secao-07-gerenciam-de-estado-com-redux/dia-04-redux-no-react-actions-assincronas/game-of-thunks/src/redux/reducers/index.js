import { combineReducers } from 'redux';

const INITIAL_STATE = {};

const fetchGotReducer = (state = INITIAL_STATE, action) => {
 switch(action.type) {
   default:
    return state;
 }
}

const rootReducer = combineReducers({ fetchGotReducer })

export default rootReducer;