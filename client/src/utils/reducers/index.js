import { combineReducers } from 'redux';

// import firstReducer from './firstReducer';
// import secondReducer from './secondReducer';
import vibesReducer from './vibesReducer';
import currentVibeReducer from './currentVibeReducer';
import creatorsReducer from './creatorsReducer';
import songsReducer from './songsReducer';

const allReducer = combineReducers({
	// first  : firstReducer,
	// second : secondReducer,
  vibes  : vibesReducer,
  currentVibe: currentVibeReducer,
  creators  : creatorsReducer,
  songs: songsReducer
});

export default allReducer;
