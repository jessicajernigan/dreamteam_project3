import { combineReducers } from 'redux';

import firstReducer from './firstReducer'
import secondReducer from './secondReducer'
import vibesReducer from './vibesReducer';


const allReducer = combineReducers({ 
  first: firstReducer,
  second: secondReducer, 
  vibes: vibesReducer
})

export default allReducer;