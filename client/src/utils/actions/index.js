import {
  TYPE_ONE,
  TYPE_TWO, 
  HYDRATE_VIBES
} from '../types';

// ACTION CREATORS -- functions that return actions.  now can dispatch()
export const typeOneAction = (arg) => {
	return {
		type       : TYPE_ONE,
		arg
	};
};

export const typeTwoAction = (arg) => {
	return {
		type       : TYPE_TWO,
		arg
	};
};

export const hydrateVibes = (arg) => {
	return {
		type       : HYDRATE_VIBES,
		arg
	};
};





