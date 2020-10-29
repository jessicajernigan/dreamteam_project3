const mongoose = require('mongoose');

const { Schema } = mongoose;

const songSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  }, 
  songUrl: {
    type: String,
    required: true,
    trim: true
  }
});

const Song = mongoose.model('Song', songSchema);

module.exports = Song;