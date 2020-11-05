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

export const UPDATE_CREATOR_BIO = gql`
	mutation updateCreatorBio($bio: String!) {
		updateCreatorBio(bio: $bio) {
			_id
			username
			email
			stageName
			imgUrl
			location
			bio
			vibes {
				_id
				name
			}
			songs {
				_id
				title
				songUrl
			}
		}
	}
`;

export const UPDATE_CREATOR_STAGE_NAME = gql`
	mutation updateCreatorStageName($stageName: String!) {
		updateCreatorStageName(stageName: $stageName) {
			_id
			username
			email
			stageName
			imgUrl
			location
			bio
			vibes {
				_id
				name
			}
			songs {
				_id
				title
				songUrl
			}
		}
	}
`;

export const UPDATE_CREATOR_LOCATION = gql`
	mutation updateCreatorLocation($location: String!) {
		updateCreatorLocation(location: $location) {
			_id
			username
			email
			stageName
			imgUrl
			location
			bio
			vibes {
				_id
				name
			}
			songs {
				_id
				title
				songUrl
			}
		}
	}
`;

export const UPDATE_CREATOR_VIBES = gql`
	mutation updateCreatorVibes($vibes: [ID]!) {
		updateCreatorVibes(vibes: $vibes) {
			_id
			username
			email
			bio
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
			username
			email
			stageName
			imgUrl
			location
			bio
			vibes {
				_id
				name
			}
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
			username
			email
			stageName
			imgUrl
			location
			bio
			vibes {
				_id
				name
			}
			songs {
				_id
				title
				songUrl
			}
		}
	}
`;
