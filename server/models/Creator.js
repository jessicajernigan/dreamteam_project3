const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');


const Song = require('./Song');

const creatorSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!']
  },
  password: {
    type: String,
    required: true,
    minlength: 5
  },
  stageName: {
    type: String,
    // required: true,
    trim: true
  },
  imgUrl: {
    type: String,
    // required: true,
    trim: true
  },
  location: {
    type: String,
    // required: true,
    trim: true
  },
  bio: {
    type: String,
    // required: true,
    trim: true
  },
  vibes: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Vibe'
    }
  ],
  songs: [Song.schema]
});



// set up pre-save middleware to create password hash
creatorSchema.pre('save', async function(next) {
	if (this.isNew || this.isModified('password')) {
		const saltRounds = 10;
		this.password = await bcrypt.hash(this.password, saltRounds);
	}

	next();
});

// define method to compare the incoming password with the hashed password
creatorSchema.methods.isCorrectPassword = async function(password) {
	return await bcrypt.compare(password, this.password);
};

const Creator = mongoose.model('Creator', creatorSchema);

// imported by ./index.js
module.exports = Creator;
