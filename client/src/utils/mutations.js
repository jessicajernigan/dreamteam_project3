import gql from 'graphql-tag';

export const LOGIN = gql`
	mutation login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			token
			creator {
				_id
			}
		}
	}
`;

export const ADD_CREATOR = gql`
	mutation addCreator($username: String!, $email: String!, $password: String!) {
		addCreator(username: $username, email: $email, password: $password) {
			token
			creator {
				_id
			}
		}
	}
`;

// need to include _id or cache does not update
export const UPDATE_CREATOR_BIO = gql`
	mutation updateCreatorBio($bio: String!) {
		updateCreatorBio(bio: $bio) {
			_id
			bio
		}
	}
`;

export const UPDATE_CREATOR_STAGE_NAME = gql`
	mutation updateCreatorStageName($stageName: String!) {
		updateCreatorStageName(stageName: $stageName) {
			_id
			stageName
		}
	}
`;

export const UPDATE_CREATOR_LOCATION = gql`
	mutation updateCreatorLocation($location: String!) {
		updateCreatorLocation(location: $location) {
			_id
			location
		}
	}
`;

export const UPDATE_CREATOR_VIBES = gql`
	mutation updateCreatorVibes($vibes: [ID]!) {
		updateCreatorVibes(vibes: $vibes) {
			_id
			vibes {
				_id
				name
			}
		}
	}
`;

export const UPLOAD_TUNE = gql`
	mutation uploadTune($file: Upload!) {
		uploadTune(file: $file) {
			_id
			songs {
				_id
				title
				songUrl
			}
		}
	}
`;

export const UPLOAD_PHOTO = gql`
	mutation uploadPhoto($file: Upload!) {
		uploadPhoto(file: $file) {
			_id
			imgUrl
		}
	}
`;

// // need to include all fields or cache does not update
// export const UPDATE_CREATOR_BIO = gql`
// 	mutation updateCreatorBio($bio: String!) {
// 		updateCreatorBio(bio: $bio) {
// 			_id
// 			username
// 			email
// 			stageName
// 			imgUrl
// 			location
// 			bio
// 			vibes {
// 				_id
// 				name
// 			}
// 			songs {
// 				_id
// 				title
// 				songUrl
// 			}
// 		}
// 	}
// `;

// export const UPDATE_CREATOR_STAGE_NAME = gql`
// 	mutation updateCreatorStageName($stageName: String!) {
// 		updateCreatorStageName(stageName: $stageName) {
// 			_id
// 			username
// 			email
// 			stageName
// 			imgUrl
// 			location
// 			bio
// 			vibes {
// 				_id
// 				name
// 			}
// 			songs {
// 				_id
// 				title
// 				songUrl
// 			}
// 		}
// 	}
// `;

// export const UPDATE_CREATOR_LOCATION = gql`
// 	mutation updateCreatorLocation($location: String!) {
// 		updateCreatorLocation(location: $location) {
// 			_id
// 			username
// 			email
// 			stageName
// 			imgUrl
// 			location
// 			bio
// 			vibes {
// 				_id
// 				name
// 			}
// 			songs {
// 				_id
// 				title
// 				songUrl
// 			}
// 		}
// 	}
// `;

// export const UPLOAD_TUNE = gql`
// 	mutation uploadTune($file: Upload!) {
// 		uploadTune(file: $file) {
// 			_id
// 			username
// 			email
// 			stageName
// 			imgUrl
// 			location
// 			bio
// 			vibes {
// 				_id
// 				name
// 			}
// 			songs {
// 				_id
// 				title
// 				songUrl
// 			}
// 		}
// 	}
// `;

// export const UPLOAD_PHOTO = gql`
// 	mutation uploadPhoto($file: Upload!) {
// 		uploadPhoto(file: $file) {
// 			_id
// 			username
// 			email
// 			stageName
// 			imgUrl
// 			location
// 			bio
// 			vibes {
// 				_id
// 				name
// 			}
// 			songs {
// 				_id
// 				title
// 				songUrl
// 			}
// 		}
// 	}
// `;