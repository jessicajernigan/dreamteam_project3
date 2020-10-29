import { TYPE_TWO, OTHER } from '../types';

const secondReducer = (state = false, action) => {
	switch (action.type) {
		case TYPE_TWO:
			// return array
			return true;

		case OTHER:
			return [];

		default:
			return !state;
	}
};

export default secondReducer;
