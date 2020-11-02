import { UPDATE_CREATORS } from '../types';

const creatorsReducer = (state = [], action) => {
	switch (action.type) {
		case UPDATE_CREATORS:
			// return array
			return action.creators;

		// POSSIBLY CREATE NEW ACTION TO HANDLE UPDATE OF INDIVIDUAL CREATOR PROPERTIES

		default:
			return state;
	}
};

export default creatorsReducer;
