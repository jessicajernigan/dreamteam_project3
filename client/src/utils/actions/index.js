import {
	TYPE_ONE,
	TYPE_TWO,
	HYDRATE_VIBES,
  UPDATE_CREATORS,
  UPDATE_SONGS
} from '../types';

// ACTION CREATORS -- functions that return actions.  now can dispatch() from component
export const typeOneAction = (arg) => {
	return {
		type : TYPE_ONE,
		arg
	};
};

export const typeTwoAction = (arg) => {
	return {
		type : TYPE_TWO,
		arg
	};
};

export const hydrateVibes = (arg) => {
	return {
		type : HYDRATE_VIBES,
		arg
	};
};

export const updateCreators = (arg) => {
	return {
		type : UPDATE_CREATORS,
		arg
	};
};

export const updateSongs = (arg) => {
	return {
		type : UPDATE_SONGS,
		arg
	};
};
