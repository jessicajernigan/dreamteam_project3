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


export const UPDATE_CREATOR_IMG = gql`
	mutation updateCreatorImg($imgUrl: String!) {
		updateCreatorImg(imgUrl: $imgUrl) {
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

export const UPDATE_CREATOR_TUNE = gql`
	mutation updateCreatorTune($title: String!, $songUrl: String!) {
		updateCreatorTune(title: $title, songUrl: $songUrl) {
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
