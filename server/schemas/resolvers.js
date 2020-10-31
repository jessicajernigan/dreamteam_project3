const { AuthenticationError } = require('apollo-server-express');
const { Creator, Vibe, Song } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

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

			// remove populate?
			// return await Creator.find(params).populate('vibes');
			return await Creator.find(params).populate('vibes').populate('songs');
		}
		// creators : async () => {
		// 		// return await Creator.find({}).populate('vibes')
		// 		return await Creator.find({}).populate('songs')
		// }
	},
	Mutation : {
		addCreator         : async (parent, args) => {
			const creator = await Creator.create(args);
			const token = signToken(creator);

			return { token, creator };
		},

		login              : async (parent, { email, password }) => {
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

		updateCreatorBio   : async (parent, { bio }, context) => {
			if (context.creator) {
				return await Creator.findByIdAndUpdate(
					context.creator._id,
					{ bio },
					{ new: true }
				).populate('vibes').populate('songs')
			}

			throw new AuthenticationError('Not logged in');
		},

		updateCreatorVibes : async (parent, { vibes }, context) => {
			if (context.creator) {
				return await Creator.findByIdAndUpdate(
					context.creator._id,
					{ vibes },
					{ new: true }
				).populate('vibes').populate('songs')
			}

			throw new AuthenticationError('Not logged in');
    },

    updateCreatorImg : async (parent, { imgUrl }, context) => {
      console.log('context.creator: ', context.creator)
			if (context.creator) {
				return await Creator.findByIdAndUpdate(
					context.creator._id,
					{ imgUrl },
					{ new: true }
				).populate('vibes').populate('songs')
			}

			throw new AuthenticationError('Not logged in');
    },    
    
    
    // addOrder: async (parent, { products }, context) => {
    //   console.log(context);
    //   if (context.user) {
    //     const order = new Order({ products });

    //     await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });

    //     return order;
    //   }

    //   throw new AuthenticationError('Not logged in');
    // },


   
    updateCreatorTune : async (parent, args, context) => {
			if (context.creator) {
        console.log('context.creator: ', context.creator)
        console.log('args from resolver: ', args)

        const song = new Song(args);
        console.log('new song object with args: ', song)


        // put back after testing
				// return await Creator.findByIdAndUpdate(
				const createTuneResponse = await Creator.findByIdAndUpdate(
					context.creator._id,
					{ $push: { songs: song} },
					{ new: true }
        ).populate('vibes').populate('songs')
        
        console.log('createTuneResponse: ', createTuneResponse)
        return createTuneResponse

        // const newSong = new Song(args);
        // console.log('new song object with args: ', newSong)

				// let newSongs = await Creator.findById(
        //   context.creator._id,
        //   { new: true }
        // ).populate('songs')
        // console.log('newSongs: ', newSongs)
       
        // newSongs.songs.push(newSong)
        // console.log('newSongs: ', newSongs)

        // return await Creator.findByIdAndUpdate(	context.creator._id,
        //   	{ songs: newSongs },
        //   	{ new: true }
        //   ).populate('vibes').populate('songs')

			}

      throw new AuthenticationError('Not logged in CreatorTune');
    },
    
    updateCreatorBio: async (parent, { bio } , context) => {
      if (context.creator) {
        return await Creator.findByIdAndUpdate(context.creator._id, {bio}, { new: true }).populate('vibes').populate('songs')
      }

      throw new AuthenticationError('Not logged in')
    }, 

    updateCreatorVibes: async (parent, { vibes }, context) => {
      if (context.creator) {
        return await Creator.findByIdAndUpdate(context.creator._id, {vibes}, { new: true } ).populate('vibes').populate('songs')
      }
    }
	}
};

module.exports = resolvers;

// updateUser: async (parent, args, context) => {
//   if (context.user) {
//     return await User.findByIdAndUpdate(context.user._id, args, { new: true });
//   }

//   throw new AuthenticationError('Not logged in');
// },
