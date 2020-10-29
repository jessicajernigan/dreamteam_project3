import { UPDATE_CURRENT_VIBE } from '../types';

const currentVibeReducer = (state = '', action) => {
	switch (action.type) {
		case UPDATE_CURRENT_VIBE:
			return action.vibeId;

		default:
			return state;
	}
};

export default currentVibeReducer;