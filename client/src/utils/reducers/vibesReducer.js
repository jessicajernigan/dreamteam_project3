import { HYDRATE_VIBES } from '../types';

const vibesReducer = (state = [], action) => {
	switch (action.type) {
		case HYDRATE_VIBES:
			// return array
			return [ ...action.vibes ];

		default:
			return state;
	}
};

export default vibesReducer;
