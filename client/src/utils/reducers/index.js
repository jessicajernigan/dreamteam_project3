import { combineReducers } from 'redux';

// import firstReducer from './firstReducer';
// import secondReducer from './secondReducer';
import vibesReducer from './vibesReducer';
import creatorsReducer from './creatorsReducer';
import songsReducer from './songsReducer';

const allReducer = combineReducers({
	// first  : firstReducer,
	// second : secondReducer,
	vibes  : vibesReducer,
  creators  : creatorsReducer,
  songs: songsReducer
});

export default allReducer;
