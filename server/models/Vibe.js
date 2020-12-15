const mongoose = require('mongoose');

const { Schema } = mongoose;

const vibeSchema = new Schema({
	name : {
		type     : String,
		required : true,
		trim     : true
	}
});

const Vibe = mongoose.model('Vibe', vibeSchema);

// imported by ./index.js
module.exports = Vibe;
