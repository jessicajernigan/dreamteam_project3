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

export const ADD_USER = gql`
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
			bio
		}
	}
`;

// export const ADD_ORDER = gql`
// 	mutation addOrder($products: [ID]!) {
// 		addOrder(products: $products) {
// 			purchaseDate
// 			products {
// 				_id
// 				name
// 				description
// 				price
// 				quantity
// 				category {
// 					name
// 				}
// 			}
// 		}
// 	}
// `;
