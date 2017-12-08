/* combineReducers is not currently used, but eventually should be for modular code :D */
// import { combineReducers } from 'redux'

// const initialState = {}

// const rootReducer = function(state = initialState, action) {
//   switch(action.type) {
//     default: return state
//   }
// };

// export default rootReducer


import {combineReducers } from 'redux';
import countriesReducer from './countries'
import aircraftsReducer from './aircrafts'


const mainReducer = combineReducers({
  countries: countriesReducer,
  aircrafts: aircraftsReducer
})

export default mainReducer
