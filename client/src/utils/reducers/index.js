import { combineReducers } from 'redux';

import vibesReducer from './vibesReducer';
import currentVibeReducer from './currentVibeReducer';
import creatorsReducer from './creatorsReducer';
// import songsReducer from './songsReducer';

const allReducer = combineReducers({
  vibes  : vibesReducer,
  currentVibe: currentVibeReducer,
  creators  : creatorsReducer,
  // songs: songsReducer
});

export default allReducer;
