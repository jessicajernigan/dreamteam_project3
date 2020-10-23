const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const Order = require('./Order');

const creatorSchema = new Schema({
  firstName: {
    type: String,
    // required: true,
    trim: true
  },
  lastName: {
    type: String,
    // required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5
  },
  bandName: {
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
  ]
});

// set up pre-save middleware to create password
creatorSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
creatorSchema.methods.isCorrectPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

const Creator = mongoose.model('Creator', creatorSchema);

module.exports = Creator;
