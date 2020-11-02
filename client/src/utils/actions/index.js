import {
	HYDRATE_VIBES,
	UPDATE_CURRENT_VIBE,
	UPDATE_CREATORS
	// UPDATE_SONGS
} from '../types';

// ACTION CREATORS -- functions that return actions.  now can dispatch() from component
export const hydrateVibes = (vibes) => {
	return {
		type  : HYDRATE_VIBES,
		vibes
	};
};

export const updateCurrentVibe = (vibeId) => {
	return {
		type   : UPDATE_CURRENT_VIBE,
		vibeId
	};
};

export const updateCreators = (creators) => {
	return {
		type     : UPDATE_CREATORS,
		creators
	};
};

// export const updateSongs = (arg) => {
// 	return {
// 		type : UPDATE_SONGS,
// 		arg
// 	};
// };
