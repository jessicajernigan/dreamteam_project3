import { UPDATE_CREATORS } from '../types';

const creatorsReducer = (state = [], action) => {
	switch (action.type) {
		case UPDATE_CREATORS:
			// return array
			return action.creators;

		default:
			return state;
	}
};

export default creatorsReducer;
