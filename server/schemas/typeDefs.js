const { gql } = require('apollo-server-express');

// define the types of data we will be interacting with, and the query and mutation functions with the type of data they will be returning
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
  
  type File {
    filename: String!
    mimetype: String!
    encoding: String!
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
    uploadPhoto(file: Upload!): Creator
    uploadTune(file: Upload!): Creator
  }
`;


// imported by ./index.js
module.exports = typeDefs;
