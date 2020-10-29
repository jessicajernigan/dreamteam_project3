import { UPDATE_CREATORS, UPDATE_CREATOR_BIO } from '../types';

const creatorsReducer = (state = [], action) => {
	switch (action.type) {
		case UPDATE_CREATORS:
			// return array
      // return action.creators;
      return [
        ...state,
        ...action.creators
      ]
      
    // POSSIBLY CREATE NEW ACTION TO HANDLE UPDATE OF INDIVIDUAL CREATOR PROPERTIES 
    case UPDATE_CREATOR_BIO: 
      // action creator needs to send the current creator that includes the updated bio for that creator.  we will make a copy of the current state and update the user whose id matches the one in the action

      // find current creeator from store
      let curCreatr = state.find(creator => creator._id = action.curCreatr._id)
      console.log('curCreatr from store in creatorsReducer: ', curCreatr)

      // update current creator with data from action
      curCreatr = {
        ...action.curCreatr,
        bio: action.curCreatr.bio
      }

      console.log('curCreatr from store updated by action: ', curCreatr)


      return [
        ...state
        

      ]

		default:
			return state;
	}
};

export default creatorsReducer;
