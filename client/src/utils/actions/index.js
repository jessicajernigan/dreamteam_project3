import {
  HYDRATE_VIBES,
  UPDATE_CURRENT_VIBE,
  UPDATE_CREATORS,
  UPDATE_CREATOR_BIO
  // UPDATE_SONGS
} from '../types';

// ACTION CREATORS -- functions that return actions.  now can dispatch() from component
export const hydrateVibes = (vibes) => {
	return {
		type : HYDRATE_VIBES,
		vibes
	};
};

export const updateCurrentVibe = (vibeId) => {
  // console.log('vibeId from action creator', vibeId)
	return {
		type : UPDATE_CURRENT_VIBE,
		vibeId
	};
};

export const updateCreators = (creators) => {
  return {
    type : UPDATE_CREATORS,
		creators
	};
};

export const updateCreatorBio = (curCreatr) => {
  console.log("curCreatr from the action creator: ", curCreatr)

  return {
    type : UPDATE_CREATOR_BIO,
    curCreatr
  };
};

// export const updateSongs = (arg) => {
// 	return {
// 		type : UPDATE_SONGS,
// 		arg
// 	};
// };
