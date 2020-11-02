const { gql } = require('apollo-server-express');

const typeDefs = gql`
	type Vibe {
		_id: ID
		name: String
	}

	type Creator {
		_id: ID
		username: String
		email: String
		stageName: String
		imgUrl: String
		location: String
		bio: String
		vibes: [Vibe]
		songs: [Song]
	}

	type Song {
		_id: ID
		title: String
		songUrl: String
	}

	type Auth {
		token: ID
		creator: Creator
	}

	type Query {
		vibes: [Vibe]
		creators: [Creator]
	}

	type Mutation {
		addCreator(username: String!, email: String!, password: String!): Auth
		login(email: String!, password: String!): Auth
		updateCreatorBio(bio: String!): Creator
		updateCreatorVibes(vibes: [ID]!): Creator
		updateCreatorStageName(stageName: String!): Creator
		updateCreatorLocation(location: String!): Creator
	}
`;

module.exports = typeDefs;
