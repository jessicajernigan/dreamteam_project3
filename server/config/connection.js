const mongoose = require('mongoose');

// use hosted mongoDB database if it exists, otherwise use local one (create if it does not already exist)
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/buskr', {
	useNewUrlParser    : true,
	useUnifiedTopology : true,
	useCreateIndex     : true,
	useFindAndModify   : false
});

module.exports = mongoose.connection;
