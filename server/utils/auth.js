const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.JWT_SECRET;

const expiration = '2h';

module.exports = {
	authMiddleware : function({ req }) {
		// allows token to be sent via req.body, req.query, or headers
		let token = req.body.token || req.query.token || req.headers.authorization;

    // ["Bearer", "<tokenvalue>"]
    // separate "Bearer" from "<tokenvalue>"
		if (req.headers.authorization) {
			token = token.split(' ').pop().trim();
		}

     // if no token, return request object as is
		if (!token) {
			return req;
		}

		try {
      // if token is verified, add creator object with the decoded token data to the req object
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      // creator will have the username, email, and _id
			req.creator = data;
		} catch (err) {
			console.log('Invalid token', err);
		}

		return req;
	},
	signToken      : function({ username, email, _id }) {
		const payload = { username, email, _id };

		return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
	}
};
