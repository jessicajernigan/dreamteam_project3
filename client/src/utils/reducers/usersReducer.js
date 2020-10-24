import { UPDATE_USERS } from '../types';

const usersReducer = (state = [], action) => {
	switch (action.type) {
		case UPDATE_USERS:
			// return array
			return action.users;

		default:
			return state;
	}
};

export default usersReducer;
