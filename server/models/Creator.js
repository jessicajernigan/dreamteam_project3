const mongoose = require('mongoose');

const { Schema } = mongoose;

const creatorSchema = new Schema({
  name: {
    type: String,
    required: true,
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


const Creator = mongoose.model('Creator', creatorSchema);

module.exports = Creator;
