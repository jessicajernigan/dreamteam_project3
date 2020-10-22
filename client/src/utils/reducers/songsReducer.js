import {
  UPDATE_SONGS
} from '../types';


const songsReducer = (state = [], action) => {
	switch (action.type) {

    case UPDATE_SONGS:
      // return array
      return []

		default:
			return state;
	}
};

export default songsReducer;
