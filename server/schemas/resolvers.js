const { AuthenticationError } = require('apollo-server-express');
const { Creator, Vibe } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
const { awsSignup } = require('../utils/AWS');
const Song = require('../models/Song') 

const resolvers = {
	Query    : {
		vibes    : async () => {
			return await Vibe.find();
		},

		// optional parameters for search, otherwise return all
		creators : async (parent, { vibes, username }) => {
			const params = {};

			if (vibes) {
				params.vibes = vibes;
			}

			if (username) {
				params.username = {
					$regex : username
				};
			}

			return await Creator.find(params).populate('vibes').populate('songs');
		}
	},
	Mutation : {
		// addCreator             : async (parent, args) => {
		// 	const creator = await Creator.create(args);
		// 	const token = signToken(creator);

		// 	return { token, creator };
		// },

		addCreator             : async (parent, args) => {
			const creator = await Creator.create(args);
			const token = signToken(creator);
			const creatrDirKey = args.username + '/';
			awsSignup(creatrDirKey);
			return { token, creator };
		},

		login                  : async (parent, { email, password }) => {
			const creator = await Creator.findOne({ email });

			if (!creator) {
				throw new AuthenticationError('Can not find creator');
			}

			const correctPw = await creator.isCorrectPassword(password);

			if (!correctPw) {
				throw new AuthenticationError('Sorry, incorrect credentials');
			}

			const token = signToken(creator);

			return { token, creator };
		},

		updateCreatorBio       : async (parent, { bio }, context) => {
			if (context.creator) {
				return await Creator.findByIdAndUpdate(
					context.creator._id,
					{ bio },
					{ new: true }
				)
					.populate('vibes')
					.populate('songs');
			}

			throw new AuthenticationError('Not logged in');
		},

		updateCreatorStageName : async (parent, { stageName }, context) => {
			if (context.creator) {
				return await Creator.findByIdAndUpdate(
					context.creator._id,
					{ stageName },
					{ new: true }
				)
					.populate('vibes')
					.populate('songs');
			}

			throw new AuthenticationError('Not logged in');
		},

		updateCreatorLocation  : async (parent, { location }, context) => {
			if (context.creator) {
				return await Creator.findByIdAndUpdate(
					context.creator._id,
					{ location },
					{ new: true }
				)
					.populate('vibes')
					.populate('songs');
			}

			throw new AuthenticationError('Not logged in');
		},

		updateCreatorVibes     : async (parent, { vibes }, context) => {
			if (context.creator) {
				return await Creator.findByIdAndUpdate(
					context.creator._id,
					{ vibes },
					{ new: true }
				)
					.populate('vibes')
					.populate('songs');
			}

			throw new AuthenticationError('Not logged in CreatorTune');
    },
    
		uploadTune             : async (parent, { file }, context) => {
      console.log('inside uploadTune resolver')
      console.log('file: ', file)
      // console.log('context.creator: ', context.creator)
			// if (context.creator) {
				// configure file and send to s3 here.  get url location in response and add to db
				// s3 stuff

				const args = { title: '', url: '' };
				// instantiate new Song from s3 response data
        const song = new Song(args);
        console.log('song: ', song)

				const createTuneResponse = await Creator.findByIdAndUpdate(
					context.creator._id,
					{ $push: { songs: song } },
					// { safe: true, upsert: true, new: true }
					{ new: true }
				)
					.populate('vibes')
					.populate('songs');

				console.log('createTuneResponse: ', createTuneResponse);
				return createTuneResponse;
			// }

			// throw new AuthenticationError('Not logged in uploadTune');
		}
	}
};

// updateCreatorTune: async (parent, args, context) => {
// 	if (context.creator) {
// 		console.log('context.creator: ', context.creator);
// 		console.log('args from resolver: ', args);

// 		const song = new Song(args);
// 		console.log('new song object with args: ', song);

// 		// put back after testing
// 		// return await Creator.findByIdAndUpdate(
// 		const createTuneResponse = await Creator.findByIdAndUpdate(
// 			context.creator._id,
// 			{ $push: { songs: song } },
// 			// { safe: true, upsert: true, new: true }
// 			{ new: true }
// 		)
// 			.populate('vibes')
// 			.populate('songs');

// 		console.log('createTuneResponse: ', createTuneResponse);
// 		return createTuneResponse;
// 	}

// 	throw new AuthenticationError('Not logged in CreatorTune');
// }

module.exports = resolvers;
