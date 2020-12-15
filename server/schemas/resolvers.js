const { AuthenticationError } = require('apollo-server-express')
const { Creator, Vibe, Song } = require('../models')
const { signToken } = require('../utils/auth')
// const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
const { awsSignup } = require('../utils/AWS')
const s3 = require('../utils/AWS').returnS3Instance()

const bucketName = process.env.BUCKET_NAME

const resolvers = {
	Query    : {
 
    // ../../client\src\components\VibeMenu\VibeMenu.js
		vibes    : async () => {
			return await Vibe.find()
		},

    // ../../client\src\components\CreatrGrid\CreatrGrid, CreatrDash, CreatrProf
		// optional parameters for search, otherwise return all
		creators : async (parent, { vibes, username }) => {
			const params = {}

			if (vibes) {
				params.vibes = vibes
			}

			if (username) {
				params.username = {
					$regex : username
				}
			}

			return await Creator.find(params).populate('vibes').populate('songs')
		}
	},
	Mutation : {
    // ../../client\src\pages\Signup\Signup.js
		addCreator             : async (parent, args) => {
      // check for unique email before creating new Creator
			const { email } = args
			const userExists = await Creator.findOne({ email })
			if (userExists) {
				throw new AuthenticationError('User already exists')
			}
      // create new Creator
      const creator = await Creator.create(args)
      // create token passing creator object
      const token = signToken(creator)
      // create s3 folder name and create folder for new creator
			const creatrDirKey = args.username + '/'
			awsSignup(creatrDirKey)
			return { token, creator }
		},

		login                  : async (parent, { email, password }) => {
      // find creator by email
			const creator = await Creator.findOne({ email })

			if (!creator) {
				throw new AuthenticationError('Can not find creator')
			}
      // call custom method on model to verify password
			const correctPw = await creator.isCorrectPassword(password)

			if (!correctPw) {
				throw new AuthenticationError('Sorry, incorrect credentials')
			}
      // create new token for logged in creator
			const token = signToken(creator)

			return { token, creator }
		},

		updateCreatorBio       : async (parent, { bio }, context) => {
      // check for authorized creator.  Apollo Server adds context parameter which will have creator object via authMiddleware, if the creator has a verified token.  therefore if the creator object exists, creator is authorized.  Find creator by the _id and update bio field with passed in arg
			if (context.creator) {
				return await Creator.findByIdAndUpdate(
					context.creator._id,
					{ bio },
					{ new: true }
				)
					.populate('vibes')
					.populate('songs')
			}

			throw new AuthenticationError('Not logged in')
		},

		updateCreatorStageName : async (parent, { stageName }, context) => {
      // see updateCreatorBio
			if (context.creator) {
				return await Creator.findByIdAndUpdate(
					context.creator._id,
					{ stageName },
					{ new: true }
				)
					.populate('vibes')
					.populate('songs')
			}

			throw new AuthenticationError('Not logged in')
		},

		updateCreatorLocation  : async (parent, { location }, context) => {
      // see updateCreatorBio
			if (context.creator) {
				return await Creator.findByIdAndUpdate(
					context.creator._id,
					{ location },
					{ new: true }
				)
					.populate('vibes')
					.populate('songs')
			}

			throw new AuthenticationError('Not logged in')
		},

		updateCreatorVibes     : async (parent, { vibes }, context) => {
      // see updateCreatorBio
			if (context.creator) {
				return await Creator.findByIdAndUpdate(
					context.creator._id,
					{ vibes },
					{ new: true }
				)
					.populate('vibes')
					.populate('songs')
			}

			throw new AuthenticationError('Not logged in CreatorTune')
		},

		uploadTune             : async (parent, args, context) => {
			if (context.creator) {
				// configure file and send to s3 here.  get url location in response and add to db
				// hardcode test
				// const args = { title: 'Song Test', songUrl: 'http://test.com' };

        // s3 stuff
        // get file object from args.  apollo-upload-client handles multipart form data on front end
        const file = await args.file
        // https://github.com/jaydenseric/graphql-upload#type-fileupload
        // File upload details that are only available after the file’s field in the GraphQL multipart request has begun streaming in.
				const { createReadStream, filename, mimetype } = file
        // Creates a Node.js readable stream of the file’s contents, for processing and storage.
				const fileStream = createReadStream()

        // derive name of tune from username and filename
				const username = context.creator.username
				const CreatrTuneKey = encodeURIComponent(username) + '/'
				const tuneKey = CreatrTuneKey + filename

        // configure s3 upload params
				const uploadParams = {
					Bucket : bucketName,
					Key    : tuneKey,
					Body   : fileStream
				}
				const result = await s3.upload(uploadParams).promise()
				// console.log('s3 result: ', result);

        // configure cloudfront url to store in db
				const cloudfrontUrlPrefix = 'http://d28dtfvuvlqgls.cloudfront.net/'
				const newTuneUrl = `${cloudfrontUrlPrefix}${result.Key}`

				const title = result.Key
				const songUrl = newTuneUrl
				const tuneArgs = { title, songUrl }

				// instantiate new Song from s3 response data...title and url
				const song = new Song(tuneArgs)
				// console.log('song: ', song)

        // update creator's songs array with newly instantiated song
				const createTuneResponse = await Creator.findByIdAndUpdate(
					context.creator._id,
					{ $push: { songs: song } },
					{ new: true }
				)
					.populate('vibes')
					.populate('songs')

				// console.log('createTuneResponse: ', createTuneResponse)
				return createTuneResponse
			}

			throw new AuthenticationError('Not logged in uploadTune')
		},

    // see uploadTune above
		uploadPhoto            : async (parent, args, context) => {
			if (context.creator) {
				// s3 stuff
				const file = await args.file
				const { createReadStream, filename, mimetype } = file
				const fileStream = createReadStream()

				const username = context.creator.username
				const CreatrPhotoKey = encodeURIComponent(username) + '/'
				const photoKey = CreatrPhotoKey + filename

				const uploadParams = {
					Bucket : bucketName,
					Key    : photoKey,
					Body   : fileStream
				}
				const result = await s3.upload(uploadParams).promise()

				const cloudfrontUrlPrefix = 'http://d28dtfvuvlqgls.cloudfront.net/'
				const newPhotoUrl = `${cloudfrontUrlPrefix}${result.Key}`

				const createPhotoResponse = await Creator.findByIdAndUpdate(
					context.creator._id,
					{ imgUrl: newPhotoUrl },
					{ new: true }
				)
					.populate('vibes')
					.populate('songs')

				return createPhotoResponse
			}

			throw new AuthenticationError('Not logged in uploadPhoto')
		}
	}
}

// imported by ./index.js
module.exports = resolvers
