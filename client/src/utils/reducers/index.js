import { combineReducers } from 'redux';

import firstReducer from './firstReducer'
import secondReducer from './secondReducer'


const allReducer = combineReducers({ 
  first: firstReducer,
  second: secondReducer, 
})

export default allReducer;