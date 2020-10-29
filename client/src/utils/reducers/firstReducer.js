import {
  TYPE_ONE
} from '../types';


const firstReducer = (state = [], action) => {
	switch (action.type) {

    case TYPE_ONE:
      // return array
      return []

		default:
			return state;
	}
};

export default firstReducer;
